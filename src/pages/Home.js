import AboutMe from '../components/AboutMe.js';
export default class Home {
    constructor({ $target }) {
        this.$target = $target;
    }
    render() {
        const id = window.location.hash.split('#/me/')[1];

        new AboutMe({ $target: this.$target, id }).render();
    }
}
