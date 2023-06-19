import Home from "./pages/Home.js";
export default class App {
    constructor({ $target }) {
        this.$target = $target;
    }

    render() {
        const $main = document.createElement("main");
        $main.setAttribute("id", "page_content");

        this.$target.appendChild($main);

        const home = new Home({ $target: $main });
        // const signUpPage = new SignUpPage({ $target: $main });

        home.render();

        // document.addEventListener("urlChange", ({ detail: { url } }) => {
        //     $main.innerHTML = "";

        //     switch (url) {
        //         case "/web/":
        //             homePage.render();
        //             break;
        //         case "/web/signup":
        //             signUpPage.render();
        //             break;
        //         default:
        //             break;
        //     }
        // });
    }
}
