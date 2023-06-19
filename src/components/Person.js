// import person from "../assets/css/person.css";

export default class Person {
    constructor({ $target }) {
        this.$target = $target;
    }

    render() {
        const $div = document.createElement("div");
        $div.setAttribute("class", "person");

        this.$target.appendChild($div);
    }
}
