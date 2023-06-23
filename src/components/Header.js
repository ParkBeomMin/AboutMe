/**
 * 공유 기능, 기부 기능
 */
import Swal from "sweetalert2";
import MoneyLayer from "./MoneyLayer";
export default class Header {
    constructor({ $target }) {
        this.$target = $target;
    }

    render() {
        const $header = document.createElement("header");

        const $shareBtn = document.createElement("button");
        $shareBtn.setAttribute("class", "share-btn");
        const $shareImg = document.createElement("img");
        $shareImg.setAttribute("src", require("@/assets/images/share.svg"));
        $shareBtn.appendChild($shareImg);
        $shareBtn.addEventListener("click", () => {
            const id = window.location.hash.split("#/me/")[1];

            window.navigator.clipboard.writeText(
                `${window.location.host}/#/about/${id}`
            );
            Swal.fire({
                html: "클립보드에 복사된 링크로<br>친구들에게 공유해보세요!",
            });
        });

        const $moneyBtn = document.createElement("button");
        $moneyBtn.setAttribute("class", "money-btn");
        const $moneyImg = document.createElement("img");
        $moneyImg.setAttribute("src", require("@/assets/images/money.svg"));
        $moneyBtn.appendChild($moneyImg);
        $moneyBtn.addEventListener("click", () => {
            new MoneyLayer({ $target: this.$target }).render();
        });

        $header.appendChild($shareBtn);
        $header.appendChild($moneyBtn);
        this.$target.appendChild($header);
    }
}
