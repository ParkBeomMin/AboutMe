import Home from "./pages/Home.js";
import New from "./pages/New.js";
import About from "./pages/About.js";
import Router from "./router.js";
// import CssController from './lib/cssController.js';

export default class App {
    constructor({ $target }) {
        this.$target = $target;
    }

    render() {
        const $main = document.createElement("main");
        $main.setAttribute("id", "page_content");

        this.$target.appendChild($main);

        const homePage = new Home({ $target: $main });
        const newPage = new New({ $target: $main });
        const aboutPage = new About({ $target: $main });
        new Router({
            view: $main,
            route: [
                {
                    url: "/me/:id",
                    page: homePage,
                    css: ["AboutMe", "Header"],
                    title: "나의 새싹 보기",
                    description:
                        "친구들이 생각하는 나는 어떤 사람일까? 친구들의 마음이 모여 나의 새싹을 키워보세요!",
                },
                {
                    url: "/",
                    page: newPage,
                    css: ["New", "Layer"],
                    title: "About Me",
                    description:
                        "친구들이 생각하는 나는 어떤 사람일까? 친구들의 마음이 모여 나의 새싹을 키워보세요!",
                },
                {
                    url: "/about/:id",
                    page: aboutPage,
                    css: ["About", "Layer"],
                    title: "나는 어떤 사람이야?",
                    description:
                        "친구들이 생각하는 나는 어떤 사람일까? 친구들의 마음이 모여 나의 새싹을 키워보세요!",
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
