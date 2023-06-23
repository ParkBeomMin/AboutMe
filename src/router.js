// import CssController from './lib/cssController.js';
export default class Router {
    constructor({ view, route }) {
        this.view = view;
        this.route = route;
        console.log("beomRouter ", this.route);
        this.setRoute();

        window.urlChange = (url) => {
            this.urlChange(url);
        };
    }

    setRoute() {
        document.addEventListener("DOMContentLoaded", () => {
            const url = window.location.hash.replace("#", "");
            this.renderPage(url);
        });
        window.addEventListener("hashchange", () => {
            const url = window.location.hash.replace("#", "");
            this.renderPage(url);
        });
    }

    urlChange(url) {
        window.history.pushState("", "", `#${url}`);
        this.renderPage(url);
    }

    renderPage(url) {
        this.view.innerHTML = "";
        // window.CssController.reset();
        console.log("beom this.route213123", this.route, url);

        const to =
            this.route.filter((r) => this.matchUrl(r.url, url))[0] ||
            this.route.filter((r) => r.url === "/")[0];
        try {
            console.log(
                "beom this.route.filter((r) => r.url === url)[0]",
                this.route.filter((r) => this.matchUrl(r.url, url))[0]
            );

            to.page.render();
            to.css
                ? to.css.forEach((c) => require(`@/assets/css/${c}.css`))
                : null;
        } catch (e) {
            this.route.filter((r) => r.url === "/")[0].page.render();
            console.error(e);
        }
    }

    matchUrl(a, b) {
        const index = a.indexOf(":");
        console.log("beom ");

        if (index > -1) {
            return a.substring(0, index) === b.substring(0, index);
        } else {
            return a === b;
        }
    }
}
