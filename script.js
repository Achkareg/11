
// Загрузка карточек из файла 
const data = JSON.parse(dataProductsJSON);
Showcards();
function Showcards() {
    const div_prods = document.querySelector('.products');
    const tempEl = document.querySelector(".product_card");
    let card_id = 0;
    if (div_prods) {
        data.forEach(dataEl => {
            const cardEl = tempEl.content.querySelector(".product").cloneNode(true);

            const backgrEl = cardEl.querySelector(".product_item");
            backgrEl.style.background = dataEl.backgr;
            backgrEl.id = card_id;

            const headingEl = cardEl.querySelector(".h5");
            headingEl.textContent = dataEl.h5;

            const descriptionEl = cardEl.querySelector(".p");
            descriptionEl.textContent = dataEl.p;

            const priceEl = cardEl.querySelector(".price");
            priceEl.textContent = dataEl.price;

            div_prods.appendChild(cardEl);
            card_id++;
        });
    };
}

// Подсчет нажатий и добавление в корзину карточек
let cart_count = 0;
let cart_quantity = 1;
const prod_click = document.querySelectorAll('.button_add_cart');
const cart_items = document.querySelector('.cart_items');
const cart_template = document.querySelector(".cart_products");
const cart = document.querySelector('.cart_number');
const basketIds = [];
addItemToCart(prod_click);
function addItemToCart(buttons) {
    buttons.forEach((button) => {
        button.addEventListener("click", function (e) {
            cart_items.style.display = 'flex';
            cart_count++;
            cart.classList.add('show');
            cart.textContent = cart_count;
            cardID = button.parentNode.parentNode.id;

            let cart_quantity = 1;
            const cart_item = cart_template.content.querySelector(".cart_product").cloneNode(true);
            const cart_item_backgr = cart_item.querySelector(".cart_product_img");
            cart_item_backgr.style.background = data[cardID].backgr;

            const headingEl = cart_item.querySelector(".cart_h5");
            headingEl.textContent = data[cardID].h5

            const pEl = cart_item.querySelector(".cart_p");
            pEl.textContent = data[cardID].p;

            const priceEl = cart_item.querySelector(".cart_price");
            priceEl.textContent = data[cardID].price;

            const quantityEl = cart_item.querySelector(".cart_quantity");
            quantityEl.textContent = cart_quantity;

            cart_items.appendChild(cart_item);

            // удаление карточек из корзины
            const delCartItem = cart_item.querySelector('.cart_product_del');

            delCartItem.addEventListener('click', function (e) {
                cart_item.querySelector('.cart_product_del').parentElement.parentElement.remove();
                cart_count = cart_count - cart_quantity;
                cart.textContent = cart_count;

                // удаление блока корзины, если пустая
                if (cart_items.querySelector('.cart_product') == null) cart_items.style.display = "none";
            });
        });
    });
}
let cartItems = {
    'id1': {
        'img': '',
        'title': '',
        'info': '',
        'price': '',
        'count': 1,
    }
};
document.addEventListener = event => {
    if (event.target.classList.contains('button_add_cart'))
        addCard(event.target.dataset.id);
}

const addCard = id => {

}





/* Когда пользователь нажимает на кнопку, раскрывается меню */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("menu_dropdown");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});
// Отобразить поле ввода при нажатии на лупу
function searchFunction() {
    document.getElementById("search").classList.toggle("show");
}