export default class CssImport {
    constructor({ cssName }) {
        this.cssName = cssName;
        this.CssImport();
    }

    CssImport() {
        if (!document.getElementById(this.cssName)) {
            const head = document.getElementsByTagName('head')[0];
            const link = document.createElement('link');
            link.id = this.cssName;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = `./src/assets/css/${this.cssName}.css`;
            link.media = 'all';
            head.appendChild(link);
        }
    }
}
