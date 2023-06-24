export default class PasswordLayer {
    constructor({ $target, callback }) {
        this.$target = $target;
        this.callback = callback;
    }
    render() {
        const $div = document.createElement("div");
        $div.setAttribute("class", "layer-container");

        const $h3 = document.createElement("h3");
        $h3.textContent = "비밀번호";

        const $form = document.createElement("form");
        $form.setAttribute("class", "pw-box");

        const $input = document.createElement("input");
        $input.setAttribute("class", "pw-input");
        $input.setAttribute("type", "password");
        $input.addEventListener("change", () => {
            $input.classList.remove("error");
        });

        const $button = document.createElement("button");
        $button.setAttribute("class", "pw-btn");
        $button.textContent = "완료";

        $form.addEventListener("submit", (e) => {
            e.preventDefault();
            if ($input.value) {
                this.callback({ password: $input.value });
            } else {
                $input.classList.add("error");
            }
        });

        $form.appendChild($input);
        $form.appendChild($button);

        $div.append($h3, $form);
        this.$target.appendChild($div);
    }
}
