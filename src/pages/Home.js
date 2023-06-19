import Person from "../components/Person.js";
export default class Home {
    constructor({ $target }) {
        this.$target = $target;
    }
    render() {
        new Person({ $target: this.$target }).render();
    }
}
