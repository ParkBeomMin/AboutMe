import AboutMe from '../components/AboutMe.js';
import CssImport from '../lib/CssImport.js';
export default class Home {
    constructor({ $target }) {
        this.$target = $target;
    }
    render() {
        new CssImport({ cssName: 'Home' });
        new AboutMe({ $target: this.$target }).render();
    }
}
