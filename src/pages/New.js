import DB from "../lib/db.js";
import AboutMe from "@/components/AboutMe";
import PasswordLayer from "../components/PasswordLayer.js";
import Swal from "sweetalert2";
import copy from "copy-to-clipboard";

export default class New {
    constructor({ $target }) {
        this.$target = $target;
    }
    async render() {
        const db = new DB();
        const $div = document.createElement("div");
        $div.setAttribute("class", "new-container");
        const $button = document.createElement("button");
        $button.setAttribute("class", "create-btn");
        $button.textContent = "나의 새싹 만들기";
        $button.addEventListener("click", async () => {
            new PasswordLayer({
                $target: this.$target,
                callback: async ({ password }) => {
                    const { id } = await db.setAboutMe({ password });

                    copy(`${window.location.host}/#/about/${id}`);

                    Swal.fire({
                        html: "나의 새싹이 생성되었습니다.<br>클립보드에 복사된 링크로<br>친구들에게 공유해보세요!",
                    }).then((v) => {
                        if (v.value || v.dismiss) {
                            window.urlChange(`/me/${id}`);
                        }
                    });
                },
            }).render();
        });
        const $info = document.createElement("span");
        $info.setAttribute("class", "info");
        $info.innerHTML =
            "친구들의 관심을 모아 새싹을 자라나게 해주세요!<br>새싹 -> 중간 -> 트리 형태로 자라납니다<br>나무의 형태, 색상은 모두 랜덤으로 생성됩니다.";
        $div.appendChild($button);
        $div.appendChild($info);
        this.$target.appendChild($div);
        new AboutMe({ $target: this.$target, id: "new" }).render();
        // new CssImport({ cssName: 'New' });
        // new AboutMe({ $target: this.$target }).render();
    }
}
