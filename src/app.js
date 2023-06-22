import Home from './pages/Home.js';
import New from './pages/New.js';
import About from './pages/About.js';
import Router from './router.js';
// import CssController from './lib/cssController.js';

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
        const aboutPage = new About({ $target: $main });
        new Router({
            view: $main,
            route: [
                {
                    url: '/me/:id',
                    page: homePage,
                },
                {
                    url: '/',
                    page: newPage,
                },
                {
                    url: '/about/:id',
                    page: aboutPage,
                },
            ],
        });
        // window.CssController = new CssController();

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
