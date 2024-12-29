import '../styles/yourcard.css'

export function createCart () {
    const wrapperContainer = document.createElement('div');
    wrapperContainer.className = 'cart-wrapper';

    const titleContainer = document.createElement('div');
    titleContainer.className = 'cart-title-container';

    const cartTitle = document.createElement('h1');
    cartTitle.textContent = 'Your cart';
    cartTitle.className = 'cart-title';
    titleContainer.appendChild(cartTitle);

    const cartContainer = document.createElement('div');
    cartContainer.className = 'cart';

    const cartItems = [
        {
            image: '/src/assets/images/Frame33.png',
            name: 'Gradient Graphic T-shirt',
            price: '$145',
            discount: '-40%'
        },

        {
            image: '/src/assets/images/image8.png',
            name: 'Checkered Shirt',
            price: '$180'
        },

        {
            image: '/src/assets/images/Frame71.png',
            name: 'Skinny Fit Jeans',
            price: '$240'
        },
    ]

    cartItems.forEach((item) => {
        const itemContainer = document.createElement('div');
        itemContainer.className = 'cart-item';


        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.name;
        itemImage.className = 'cart-item-image';

        const itemInfo = document.createElement('div');
        itemInfo.className = 'cart-item-info';
        itemInfo.innerHTML = `
            <h2 class = 'cart-item-name'>${item.name}</h2>
            <div class="cart-item-price-container">
                <p class="cart-item-price">${item.price}</p>
                ${item.discount ? `<span class="cart-item-discount">${item.discount}</span>` : ''}
            </div>
        `;

        itemContainer.appendChild(itemImage);
        itemContainer.appendChild(itemInfo);

        cartContainer.appendChild(itemContainer);
    })

    wrapperContainer.appendChild(titleContainer);
    wrapperContainer.appendChild(cartContainer);

    document.body.appendChild(wrapperContainer);
}