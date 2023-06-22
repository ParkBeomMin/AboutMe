import DB from '../lib/db.js';
export default class New {
    constructor({ $target }) {
        this.$target = $target;
    }
    async render() {
        const db = new DB();
        const allList = await db.getAllAbout();
        const $div = document.createElement('div');
        $div.setAttribute('class', 'wrap');
        const $button = document.createElement('button');
        $button.setAttribute('class', 'create-btn');
        $button.textContent = '생성하고 공유하기';
        $button.addEventListener('click', async (ev) => {
            const { id } = await new DB().setAboutMe();
            window.urlChange(`/about/${id}`);
            window.navigator.clipboard.writeText('test');
        });
        $div.appendChild($button);
        this.$target.appendChild($div);
        // new CssImport({ cssName: 'New' });
        // new AboutMe({ $target: this.$target }).render();
    }

    generateRGB() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        return [r, g, b];
    }
    generateUuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}
