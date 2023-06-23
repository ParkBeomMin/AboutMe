import AboutMe from "../components/AboutMe.js";
import Header from "@/components/Header";
export default class Home {
    constructor({ $target }) {
        this.$target = $target;
    }
    render() {
        const id = window.location.hash.split("#/me/")[1];
        new Header({ $target: this.$target }).render();

        new AboutMe({ $target: this.$target, id }).render();
    }
}
