function solve() {
    let addProductButtons = document.querySelectorAll('.add-product');
    let output = document.querySelector('textarea');
    let checkoutButton = document.querySelector('.checkout');
    let sum = 0;
    let uniqueProducts = new Set();
    for (let addProductButton of addProductButtons) {
        addProductButton.addEventListener('click', (e) => {
            let elementInfo = e.currentTarget.parentElement.parentElement;
            let elementTitle = elementInfo.querySelector('.product-title').textContent;
            let elementPrice = Number(elementInfo.querySelector('.product-line-price').textContent);
            uniqueProducts.add(elementTitle);
            sum += elementPrice;
            output.textContent += `Added ${elementTitle} for ${elementPrice.toFixed(2)} to the cart.\n`;
        })
    }
    checkoutButton.addEventListener('click', () => {
        output.textContent += `You bought ${Array.from(uniqueProducts).join(', ')} for ${sum.toFixed(2)}.\n`;
        for (addProductButton of addProductButtons) {
            addProductButton.setAttribute('disabled', 'false')
        }
        checkoutButton.setAttribute('disabled', 'false')
    })
}