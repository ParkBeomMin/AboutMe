export default class MoneyLayer {
    constructor({ $target }) {
        this.$target = $target;
    }

    render() {
        if (document.querySelector('.layer-container')) {
            document.querySelector('.layer-container').outerHTML = '';
            return;
        }
        const $div = document.createElement('div');
        $div.setAttribute('class', 'layer-container');

        const $h3 = document.createElement('h3');
        $h3.textContent = '개발자 밥 사주기🍚';

        const $closeBtn = document.createElement('button');
        $closeBtn.setAttribute('class', 'close-btn');
        const $closeImg = document.createElement('img');
        $closeImg.setAttribute('src', require('@/assets/images/close.svg'));
        $closeImg.setAttribute('alt', 'close');
        $closeBtn.appendChild($closeImg);
        $closeBtn.addEventListener('click', () => {
            $div.outerHTML = '';
        });

        const $moneyBox = document.createElement('div');
        $moneyBox.setAttribute('class', 'money-box');

        const $sojuBtn = this.createMoneyBtn({
            text: '🍺',
            url: 'https://qr.kakaopay.com/Ej7qeAGsJ7d006900',
        });
        const $coffeeBtn = this.createMoneyBtn({
            text: '☕️',
            url: 'https://qr.kakaopay.com/Ej7qeAGsJ3e807242',
        });
        const $chocolateBtn = this.createMoneyBtn({
            text: '🍫',
            url: 'https://qr.kakaopay.com/Ej7qeAGsJ1f402891',
        });

        $div.appendChild($closeBtn);
        $div.appendChild($h3);
        $moneyBox.appendChild($sojuBtn);
        $moneyBox.appendChild($coffeeBtn);
        $moneyBox.appendChild($chocolateBtn);
        $div.appendChild($moneyBox);
        this.$target.appendChild($div);
    }

    createMoneyBtn({ text, url }) {
        const $button = document.createElement('button');
        $button.setAttribute('class', 'dev-money-btn');
        $button.textContent = text;
        $button.addEventListener('click', () => {
            window.location.href = url;
        });
        return $button;
    }
}
