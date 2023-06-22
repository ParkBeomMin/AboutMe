import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import { getFirestore, collection, getDocs, addDoc, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';

// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBOvBVH1WCfXQ9okJnZBxA8ZAYqZJJ870c',
    authDomain: 'howltalk-57cde.firebaseapp.com',
    databaseURL: 'https://howltalk-57cde.firebaseio.com',
    projectId: 'howltalk-57cde',
    storageBucket: 'howltalk-57cde.appspot.com',
    messagingSenderId: '1098685513263',
    appId: '1:1098685513263:web:ea87ead18d9a4371db50da',
};

export default class DB {
    constructor() {
        const app = initializeApp(firebaseConfig);
        this.db = getFirestore(app);
    }

    async setAboutMe() {
        const col = collection(this.db, 'users');
        const ds = await addDoc(col, { color: 'black' });
        return { id: ds.id };
    }

    async setAbout({ id, content }) {
        const col = collection(this.db, 'users', id, 'about');
        await addDoc(col, { content });
    }

    async getAboutMe(id) {
        const docRef = doc(this.db, 'users', id);
        const docSnap = await getDoc(docRef);
        const col = collection(this.db, 'users', id, 'about');
        const docSnaps = await getDocs(col);
        return docSnap.exists() ? { ...docSnap.data(), ...{ aboutList: docSnaps.docs.map((doc) => doc.data()) } } : {};
    }

    async getAllAbout() {
        const col = collection(this.db, 'abouts');
        const snapshot = await getDocs(col);
        return { aboutList: snapshot.docs.map((doc) => doc.data()) };
    }
}

// Get a list of cities from your database
async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
}
