import DB from '../lib/db.js';
export default class About {
    constructor({ $target }) {
        this.$target = $target;
    }

    render() {
        console.log('beom window.location.pathname', window.location.hash);
        const id = window.location.hash.split('#/about/')[1];
        const $div = document.createElement('div');
        const $input = document.createElement('input');
        $input.setAttribute('type', 'text');
        $input.addEventListener('keyup', (e) => {
            console.log('beom e', e.key);
            if (e.key === 'Enter') {
                new DB().setAbout({ id, content: e.target.value });
                e.target.value = '';
            }
        });
        const $button = document.createElement('button');
        $button.setAttribute('class', 'create-btn');
        $button.textContent = '보러가기';
        $button.addEventListener('click', async (ev) => {
            window.urlChange(`/me/${id}`);
        });
        $div.appendChild($button);
        $div.appendChild($input);
        this.$target.appendChild($div);
    }
}
