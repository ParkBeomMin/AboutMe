// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
// import { getFirestore, collection, getDocs, addDoc, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    doc,
    getDoc,
    query,
    where,
} from "firebase/firestore";

// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOvBVH1WCfXQ9okJnZBxA8ZAYqZJJ870c",
    authDomain: "howltalk-57cde.firebaseapp.com",
    databaseURL: "https://howltalk-57cde.firebaseio.com",
    projectId: "howltalk-57cde",
    storageBucket: "howltalk-57cde.appspot.com",
    messagingSenderId: "1098685513263",
    appId: "1:1098685513263:web:ea87ead18d9a4371db50da",
};

export default class DB {
    constructor() {
        const app = initializeApp(firebaseConfig);
        this.db = getFirestore(app);
    }

    async login({ id, password }) {
        let isLogin = false;
        // const col = collection(this.db, "users", id);
        console.log("login");
        const q = query(
            collection(this.db, "users"),
            where("password", "==", password)
        );
        console.log(q);

        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            if (doc.id === id) {
                isLogin = true;
            }
        });
        return isLogin;
    }

    async setAboutMe({ password }) {
        const col = collection(this.db, "users");
        const ds = await addDoc(col, {
            treeFilter: this.generateFilter(),
            groundColor: this.generateRGB(),
            num: Math.floor(Math.random() * 5) + 1,
            password,
        });
        return { id: ds.id };
    }

    async setAbout({ id, content }) {
        const col = collection(this.db, "users", id, "about");
        await addDoc(col, { content, color: this.generateRGB() });

        const cols = collection(this.db, "abouts");
        await addDoc(cols, { content, color: this.generateRGB() });
    }

    async getAboutMe(id) {
        try {
            const docRef = doc(this.db, "users", id);
            const docSnap = await getDoc(docRef);
            const col = collection(this.db, "users", id, "about");
            const docSnaps = await getDocs(col);
            return docSnap.exists()
                ? {
                      ...docSnap.data(),
                      ...{ aboutList: docSnaps.docs.map((doc) => doc.data()) },
                  }
                : {};
        } catch (e) {
            console.error(e);
            return {};
        }
    }

    async getAllAbout() {
        const col = collection(this.db, "abouts");
        const snapshot = await getDocs(col);
        return { aboutList: snapshot.docs.map((doc) => doc.data()) };
    }

    generateRGB() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        return `rgb(${r}, ${g}, ${b})`;
    }

    generateFilter() {
        return `invert(${Math.floor(Math.random() * 99)}%) sepia(${Math.floor(
            Math.random() * 100
        )}%) saturate(${Math.floor(
            Math.random() * 1000
        )}%) hue-rotate(${Math.floor(
            Math.random() * 360
        )}deg) brightness(${Math.floor(
            Math.random() * 250
        )}%) contrast(${Math.floor(Math.random() * 50)}%)`;
    }
}
