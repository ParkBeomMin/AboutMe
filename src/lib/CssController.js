export default class CssController {
    constructor() {
        this.cssList = [];
    }

    add(cssName) {
        try {
            if (!document.getElementById(`${cssName}_css`)) {
                const head = document.getElementsByTagName('head')[0];
                const link = document.createElement('link');
                link.id = `${cssName}_css`;
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = `./src/assets/css/${cssName}.css`;
                link.media = 'all';
                head.appendChild(link);

                this.cssList.push(`${cssName}`);
            }
        } catch (e) {
            console.error(e);
        }
    }

    remove(cssName) {
        const head = document.getElementsByTagName('head')[0];
        const $css = document.getElementById(`${cssName}_css`);
        console.log('beom $css', $css);

        $css ? head.removeChild($css) : null;
    }

    reset() {
        console.log('beom reset', this.cssList);

        this.cssList.forEach((css) => {
            this.remove(css);
        });
    }
}
