import Home from './pages/Home.js';
import New from './pages/New.js';
export default class App {
    constructor({ $target }) {
        this.$target = $target;
    }

    render() {
        console.log('beom 1111');

        const $main = document.createElement('main');
        $main.setAttribute('id', 'page_content');

        this.$target.appendChild($main);

        const homePage = new Home({ $target: $main });
        const newPage = new New({ $target: $main });
        // const signUpPage = new SignUpPage({ $target: $main });

        console.log('beom window', window);
        console.log('beom window.history', window.history);
        switch (window.location.pathname) {
            case '/':
                homePage.render();
                break;
            case '/new':
                newPage.render();
                break;
            default:
                break;
        }

        // homePage.render();

        // window.history.pushState('', '', url);
        // const urlChange = new CustomEvent('urlChange', { detail: { url } });
        // document.dispatchEvent(urlChange);

        // document.addEventListener('urlChange', ({ detail: { url } }) => {
        //     $main.innerHTML = '';

        //     switch (url) {
        //         case '/':
        //             homePage.render();
        //             break;
        //         case '/new':
        //             newPage.render();
        //             break;
        //         default:
        //             break;
        //     }
        // });
    }
}
