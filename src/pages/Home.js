import AboutMe from '../components/AboutMe.js';
export default class Home {
    constructor({ $target }) {
        this.$target = $target;
    }
    render() {
        console.log('beom window.location.pathname', window.location.hash);

        new AboutMe({ $target: this.$target }).render();
    }
}
