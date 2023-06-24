import DB from "../lib/db.js";
// import AboutStyle from "@/assets/css/About.css";
import Swal from "sweetalert2";
import Cookie from "@/lib/cookie.js";
import PasswordLayer from "../components/PasswordLayer.js";
export default class About {
    constructor({ $target }) {
        this.$target = $target;
        this.id = window.location.hash.split("#/about/")[1];
    }

    render() {
        console.log("beom window.location.pathname", window.location.hash);
        const $div = document.createElement("div");
        $div.setAttribute("class", "wrap");

        const $title = document.createElement("h1");
        $title.textContent = "나는 어떤 사람이야?";

        const $inputBox = this.createInputBox();

        const $info = document.createElement("span");
        $info.setAttribute("class", "info");
        $info.innerHTML =
            "ex) 마음이 따듯해. 예뻐. 냉정해. 극I...<br>친구를 떠올렸을 때 생각나는 말을 적어주세요.";

        const $goNew = document.createElement("a");
        const $goNewImg = document.createElement("img");
        $goNewImg.setAttribute("src", require("@/assets/images/sprout.svg"));
        $goNew.setAttribute("class", "go-new");
        $goNew.textContent = "내 새싹 만들러가기";
        $goNew.appendChild($goNewImg);
        $goNew.addEventListener("click", () => {
            window.urlChange("/");
        });

        const $goMy = document.createElement("a");
        $goMy.setAttribute("class", "go-my");
        $goMy.textContent = "내 새싹 보러가기💚";
        $goMy.addEventListener("click", () => {
            new PasswordLayer({
                $target: this.$target,
                callback: async ({ password }) => {
                    const isLogin = await new DB().login({
                        id: this.id,
                        password,
                    });
                    if (isLogin) {
                        window.urlChange(`/me/${this.id}`);
                    } else {
                        Swal.fire({ html: "비밀번호를 잘못입력하였습니다." });
                    }
                },
            }).render();
        });

        // $div.appendChild($title);
        // $div.appendChild($inputBox);
        // $div.appendChild($info);
        // $div.appendChild($goNew);
        $div.append($title, $inputBox, $info, $goNew, $goMy);

        // const $button = document.createElement('button');
        // $button.setAttribute('class', 'create-btn');
        // $button.textContent = '보러가기';
        // $button.addEventListener('click', async (ev) => {
        //     window.urlChange(`/me/${id}`);
        // });
        // $div.appendChild($sendBtn);
        // $div.appendChild($input);
        this.$target.appendChild($div);
    }

    createInputBox() {
        const id = window.location.hash.split("#/about/")[1];

        const $inputBox = document.createElement("form");
        $inputBox.setAttribute("class", "input-box");

        const $input = document.createElement("input");
        $input.setAttribute("type", "text");
        const $sendBtn = document.createElement("button");
        $sendBtn.setAttribute("class", "about-send-btn");
        const $sendBtnImg = document.createElement("img");
        $sendBtnImg.setAttribute("src", require("@/assets/images/send.svg"));
        $sendBtn.appendChild($sendBtnImg);
        $inputBox.appendChild($input);
        $inputBox.appendChild($sendBtn);
        $inputBox.addEventListener("submit", (e) => {
            e.preventDefault();
            const cookie = new Cookie().getCookie(`aboutme_${id}`);
            console.log("beom cookie", cookie);
            if (cookie === "done") {
                Swal.fire({
                    html: "24시간에 한 번만 친구에게 마음을 전달할 수 있습니다.",
                });
                return;
            }

            if (!!$input.value) {
                console.log("???");
                new DB().setAbout({ id, content: $input.value });
                $input.value = "";
                new Cookie().setCookie(`aboutme_${id}`, "done", {
                    "max-age": 24 * 60 * 60,
                });
                Swal.fire({
                    html: "친구에게 잘 전달되었습니다.<br>나의 새싹도 만들어보세요",
                }).then((v) => {
                    if (v.value) {
                        window.urlChange(`/`);
                    }
                });
            }
        });
        return $inputBox;
    }
}
