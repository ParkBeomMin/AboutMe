import DB from "../lib/db.js";
import AboutMeStyle from "@/assets/css/AboutMe.css";
export default class AboutMe {
    constructor({ $target, id }) {
        this.$target = $target;
        this.id = id;
    }

    async render() {
        const db = new DB();
        const {
            treeFilter = "",
            groundColor = "",
            aboutList,
            num = 1,
        } = this.id === "new"
            ? await db.getAllAbout()
            : await db.getAboutMe(this.id);

        let type = "sprout";
        let size = "50px";
        if (aboutList.length > 10) {
            type = `${num}/growing`;
            size = "100px";
        }
        if (aboutList.length > 50) {
            type = `${num}/tree`;
            size = "200px";
        }

        // window.CssController.add('AboutMe');
        const $div = document.createElement("div");
        $div.setAttribute("class", "wrap");
        const $ground = document.createElement("div");
        $ground.setAttribute("class", "ground");
        $ground.style.backgroundColor = `${groundColor}`;
        $ground.style.borderColor = `${groundColor}`;
        const $sky = document.createElement("div");
        $sky.setAttribute("class", "sky");
        const $aboutMe = document.createElement("img");
        $aboutMe.setAttribute("class", "about-me");
        $aboutMe.setAttribute("src", require(`@/assets/images/${type}.svg`));
        $aboutMe.style.width = size;
        $aboutMe.style.height = size;
        $aboutMe.style.filter = treeFilter;
        $aboutMe.innerHTML = require(`@/assets/images/${type}.svg`);
        console.log($aboutMe.childNodes);
        // "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)";
        console.log($aboutMe);
        $div.appendChild($sky);
        $div.appendChild($aboutMe);
        $div.appendChild($ground);
        const $textContainer = document.createElement("div");
        $textContainer.setAttribute("class", "text-container");
        aboutList.forEach((al) => {
            const $text = document.createElement("span");
            $text.setAttribute("class", "falling-text");
            $text.style.animationDuration = `${Math.random() * 10 + 1}s`;
            $text.style.left = `${Math.random() * 100}%`;
            $text.style.color = al.color;
            $text.textContent = al.content;
            $textContainer.appendChild($text);
        });
        $div.appendChild($textContainer);

        this.$target.appendChild($div);
    }
}
