//capturar elemento range y todos los demás para mostrar
const rangeSliders = document.querySelectorAll('#range-number');
const pageViews = document.querySelector('.pageviews');
const bill = document.querySelector('.card-bill');
const switchToggle = document.querySelector('.card-check');
//de acuerdo al valor almacenar los resultados en variables



function calculateValueWdiscount(valuePerMonth) {
    let discount = (valuePerMonth * 25) / 100

    let result = valuePerMonth - discount

    return result;
}

window.onload = function () {

    // Establece el valor del input al centro del rango
    rangeSliders[0].value = 500000
    rangeSliders[1].value = 500000
};



rangeSliders.forEach(item => {
    item.addEventListener('input', () => {

        let value = item.value
        let valuePerViews = null;
        let valuePerMonth = null
        let discount = null

        if (switchToggle.checked) {

            if (value < 50000) {
                valuePerViews = 10
                valuePerMonth = 8.00
                discount = calculateValueWdiscount(valuePerMonth)
                pageViews.textContent = valuePerViews + 'K';
                bill.textContent = '$' + discount + '.00'
            } else if (value >= 50000 && value < 100000) {
                valuePerViews = 50
                valuePerMonth = 12.00
                discount = calculateValueWdiscount(valuePerMonth)
                pageViews.textContent = valuePerViews + 'K';
                bill.textContent = '$' + discount + '.00'
            } else if (value >= 100000 && value < 500000) {
                valuePerViews = 100
                valuePerMonth = 16.00
                discount = calculateValueWdiscount(valuePerMonth)
                pageViews.textContent = valuePerViews + 'K';
                bill.textContent = '$' + discount + '.00'
            } else if (value >= 500000 && value < 1000000) {
                valuePerViews = 500
                valuePerMonth = 24.00
                discount = calculateValueWdiscount(valuePerMonth)
                pageViews.textContent = valuePerViews + 'K';
                bill.textContent = '$' + discount + '.00'

            } else if (value == 1000000) {
                valuePerViews = 1
                valuePerMonth = 36.00
                discount = calculateValueWdiscount(valuePerMonth)
                pageViews.textContent = valuePerViews + 'M';
                bill.textContent = '$' + discount + '.00'
            }
        } else if (!switchToggle.checked) {

            if (value < 50000) {
                valuePerViews = 10
                valuePerMonth = 8 + '.00'
                pageViews.textContent = valuePerViews + 'K';
                bill.textContent = '$' + valuePerMonth
            } else if (value >= 50000 && value < 100000) {
                valuePerViews = 50
                valuePerMonth = 12 + '.00'
                pageViews.textContent = valuePerViews + 'K';
                bill.textContent = '$' + valuePerMonth
            } else if (value >= 100000 && value < 500000) {
                valuePerViews = 100
                valuePerMonth = 16 + '.00'
                pageViews.textContent = valuePerViews + 'K';
                bill.textContent = '$' + valuePerMonth
            } else if (value >= 500000 && value < 1000000) {
                valuePerViews = 500
                valuePerMonth = 24 + '.00'
                pageViews.textContent = valuePerViews + 'K';
                bill.textContent = '$' + valuePerMonth
            } else if (value == 1000000) {
                valuePerViews = 1
                valuePerMonth = 36 + '.00'
                pageViews.textContent = valuePerViews + 'M';
                bill.textContent = '$' + valuePerMonth
            }

        }


    });




});
