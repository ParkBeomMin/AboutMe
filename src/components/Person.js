// import person from "../assets/css/person.css";

export default class Person {
    constructor({ $target }) {
        this.$target = $target;
    }

    render() {
        this.cssImport();
        const $div = document.createElement('div');
        $div.setAttribute('class', 'person');
        // const $head = document.createElement('div');
        // $head.setAttribute('id', 'head');
        // const $body = document.createElement('div');
        // $body.setAttribute('id', 'body');
        // const $leftArm = document.createElement('div');
        // $leftArm.setAttribute('id', 'left-arm');
        // const $rightArm = document.createElement('div');
        // $rightArm.setAttribute('id', 'right-arm');

        // $body.appendChild($leftArm);
        // $body.appendChild($rightArm);
        // const $leftLeg = document.createElement('div');
        // $leftLeg.setAttribute('id', 'left-leg');
        // const $rightLeg = document.createElement('div');
        // $rightLeg.setAttribute('id', 'right-leg');
        // // const $image = document.createElement('img');
        // // $image.setAttribute('src', './src/assets/images/person.png');
        // $div.appendChild($head);
        // $div.appendChild($body);
        // // $div.appendChild($leftArm);
        // // $div.appendChild($rightArm);
        // $div.appendChild($leftLeg);
        // $div.appendChild($rightLeg);
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
