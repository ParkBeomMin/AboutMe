export default class AboutMe {
    constructor({ $target }) {
        this.$target = $target;
    }

    render() {
        window.CssController.add('AboutMe');
        const $div = document.createElement('div');
        $div.setAttribute('class', 'wrap');
        const $ground = document.createElement('div');
        $ground.setAttribute('class', 'ground');
        const $sky = document.createElement('div');
        $sky.setAttribute('class', 'sky');
        const $aboutMe = document.createElement('img');
        $aboutMe.setAttribute('class', 'about-me');
        $aboutMe.setAttribute('src', `./src/assets/images/1/tree.svg`);
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
        tmpData.forEach((td) => {
            const $text = document.createElement('span');
            $text.setAttribute('class', 'falling-text');
            $text.style.animationDuration = `${Math.random() + 2}s`;
            $text.textContent = td;
            $textContainer.appendChild($text);
        });
        $div.appendChild($textContainer);

        this.$target.appendChild($div);
    }

    cssImport() {
        if (!document.getElementById('personCSS')) {
            const head = document.getElementsByTagName('head')[0];
            const link = document.createElement('link');
            link.id = 'personCSS';
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = './src/assets/css/person.css';
            link.media = 'all';
            head.appendChild(link);
        }
    }
}
