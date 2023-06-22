import DB from '../lib/db.js';
// import AboutMeStyle from '@/assets/css/AboutMe.css';
export default class AboutMe {
    constructor({ $target, id }) {
        this.$target = $target;
        this.id = id;
    }

    async render() {
        const db = new DB();
        const { color = '', aboutList, num = 1 } = this.id === 'new' ? await db.getAllAbout() : await db.getAboutMe(this.id);
        console.log('beom color aboutList', color, aboutList);

        console.log('beom getAboutMe', new DB().getAboutMe());

        // window.CssController.add('AboutMe');
        const $div = document.createElement('div');
        $div.setAttribute('class', 'wrap');
        const $ground = document.createElement('div');
        $ground.setAttribute('class', 'ground');
        const $sky = document.createElement('div');
        $sky.setAttribute('class', 'sky');
        const $aboutMe = document.createElement('img');
        $aboutMe.setAttribute('class', 'about-me');
        // $aboutMe.setAttribute('src', require(`@/assets/images/${num}/tree.svg`));
        $aboutMe.style.width = '30px';
        $aboutMe.style.height = '30px';
        $aboutMe.style.filter = 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)';
        console.log($aboutMe);
        $div.appendChild($sky);
        $div.appendChild($aboutMe);
        $div.appendChild($ground);
        const tmpData = [
            'test',
            'bmpark',
            'zzz',
            'dafdf',
            'erqwe',
            'eqrvvvv',
            'test',
            'bmpark',
            'zzz',
            'dafdf',
            'erqwe',
            'eqrvvvv',
            'test',
            'bmpark',
            'zzz',
            'dafdf',
            'erqwe',
            'eqrvvvv',
            'test',
            'bmpark',
            'zzz',
            'dafdf',
            'erqwe',
            'eqrvvvv',
        ];
        const $textContainer = document.createElement('div');
        $textContainer.setAttribute('class', 'text-container');
        aboutList.forEach((al) => {
            const $text = document.createElement('span');
            $text.setAttribute('class', 'falling-text');
            $text.style.animationDuration = `${Math.random() + 2}s`;
            $text.textContent = al.content;
            $textContainer.appendChild($text);
        });
        $div.appendChild($textContainer);

        this.$target.appendChild($div);
    }
}
