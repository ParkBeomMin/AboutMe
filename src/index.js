import App from './App.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log('beom 111');
});

new App({ $target: document.querySelector('#app') }).render();
