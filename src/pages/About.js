import DB from '../lib/db.js';
import AboutStyle from '@/assets/css/About.css';
import Swal from 'sweetalert2';
import Cookie from '@/lib/cookie.js';
export default class About {
    constructor({ $target }) {
        this.$target = $target;
    }

    render() {
        console.log('beom window.location.pathname', window.location.hash);
        const $div = document.createElement('div');
        $div.setAttribute('class', 'wrap');

        const $title = document.createElement('h1');
        $title.textContent = '나는 어떤 사람이야?';

        const $inputBox = this.createInputBox();

        const $info = document.createElement('span');
        $info.setAttribute('class', 'info');
        $info.innerHTML = 'ex) 마음이 따듯해. 예뻐. 냉정해. 극I...<br>친구를 떠올렸을 때 생각나는 말을 적어주세요.';

        const $goNew = document.createElement('a');
        const $goNewImg = document.createElement('img');
        $goNewImg.setAttribute('src', require('@/assets/images/sprout.svg'));
        $goNew.setAttribute('class', 'go-new');
        $goNew.textContent = '내 새싹 만들러가기';
        $goNew.appendChild($goNewImg);
        $goNew.addEventListener('click', () => {
            window.urlChange('/');
        });

        $div.appendChild($title);
        $div.appendChild($inputBox);
        $div.appendChild($info);
        $div.appendChild($goNew);

        // const $button = document.createElement('button');
        // $button.setAttribute('class', 'create-btn');
        // $button.textContent = '보러가기';
        // $button.addEventListener('click', async (ev) => {
        //     window.urlChange(`/me/${id}`);
        // });
        // $div.appendChild($sendBtn);
        // $div.appendChild($input);
        this.$target.appendChild($div);
    }

    createInputBox() {
        const id = window.location.hash.split('#/about/')[1];

        const $inputBox = document.createElement('div');
        $inputBox.setAttribute('class', 'input-box');

        const $input = document.createElement('input');
        $input.setAttribute('type', 'text');
        $input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter' && !!e.target.value) {
                const cookie = new Cookie().getCookie(`aboutme_${id}`);
                console.log('beom cookie', cookie);
                if (cookie === 'done') {
                    Swal.fire({ html: '24시간에 한 번만 친구에게 마음을 전달할 수 있습니다.' });
                    return;
                }

                new DB().setAbout({ id, content: e.target.value });
                e.target.value = '';
                new Cookie().setCookie(`aboutme_${id}`, 'done', { 'max-age': 24 * 60 * 60 });
                Swal.fire({ html: '친구에게 잘 전달되었습니다.<br>나의 새싹도 만들어보세요' }).then((v) => {
                    if (v.value) {
                        window.urlChange(`/`);
                    }
                });
            }
        });
        const $sendBtn = document.createElement('button');
        $sendBtn.setAttribute('class', 'about-send-btn');
        const $sendBtnImg = document.createElement('img');
        $sendBtnImg.setAttribute('src', require('@/assets/images/send.svg'));
        $sendBtn.appendChild($sendBtnImg);
        $sendBtn.addEventListener('click', () => {
            const cookie = new Cookie().getCookie(`aboutme_${id}`);
            console.log('beom cookie', cookie);
            if (cookie === 'done') {
                Swal.fire({ html: '24시간에 한 번만 친구에게 마음을 전달할 수 있습니다.' });
                return;
            }

            if (!!$input.value) {
                new DB().setAbout({ id, content: $input.value });
                $input.value = '';
                new Cookie().setCookie(`aboutme_${id}`, 'done', { 'max-age': 24 * 60 * 60 });
                Swal.fire({ html: '친구에게 잘 전달되었습니다.<br>나의 새싹도 만들어보세요' }).then((v) => {
                    if (v.value) {
                        window.urlChange(`/`);
                    }
                });
            }
        });

        $inputBox.appendChild($input);
        $inputBox.appendChild($sendBtn);
        return $inputBox;
    }
}
