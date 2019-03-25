import Vue from 'vue'
let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');
export default {
    state : {
        cart: cart ? JSON.parse(cart) : [],
        cartCount: cartCount ? parseInt(cartCount) : 0,
        products: [
            {
            id: '1',
            title: 'Apple iPhone 6',
            vendor: 'Apple',
            description: 'Pre-Owned iPhone 6 4G LTE with 16GB Memory Cell Phone (Unlocked)',
            price: '175',
            promo: true,
            imageSrc: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5709/5709991_sa.jpg;maxHeight=640;maxWidth=550'
        },
        {
            id: '2',
            title: 'Samsung Galaxy S9',
            vendor: 'Samsung',
            description: 'Samsung - Geek Squad Certified Refurbished Galaxy S9 64GB - Sunrise Gold (Unlocked)',
            price: '700',
            promo: false,
            imageSrc: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6288/6288050_sd.jpg;maxHeight=640;maxWidth=550'
        },
        {
            id: '3',
            title: 'Google Pixel 2 XL',
            vendor: 'Google',
            description: 'Google - Geek Squad Certified Refurbished Pixel 2 XL with 64GB Memory Cell Phone - Just Black (Verizon)',
            price: '375',
            promo: true,
            imageSrc: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6230/6230086_sd.jpg;maxHeight=640;maxWidth=550'
        }
    ]

    },
    mutations: { 
        addToCart(state, item) {
            let found = state.cart.find(product => product.id == item.id)

            if (found) {
                found.quantity ++
                found.totalPrice = found.quantity * found.price;
            } else {
                state.cart.push(item);
                Vue.set(item, 'quantity', 1)
                Vue.set(item, 'totalPrice', item.price)
            }
            
            state.cartCount++
            this.commit('saveCart');
        },
        addOne(state, item){
            let found = state.cart.find(product => product.id == item.id)
            if (found) {
                found.quantity++
                found.totalPrice = found.quantity * found.price;
                state.cartCount++
            this.commit('saveCart');}
        },
        removeOne(state, item) {
            let found = state.cart.find(product => product.id == item.id)
            if (found) {
                found.quantity--
                found.totalPrice = found.quantity * found.price;
                
                    let index =state.cart.indexOf(item);
                    
                state.cartCount--
                if(found.quantity<=0) {
                state.cart.splice(index, 1)
                }
            this.commit('saveCart');}
        },
        removeFromCart(state, item) {
            let index =state.cart.indexOf(item);
            if(index > -1) {
                let product = state.cart[index];
                state.cartCount -= product.quantity;

                state.cart.splice(index, 1)
                this.commit('saveCart');
            }
        },
        saveCart(state) {
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
            window.localStorage.setItem('cartCount', state.cartCount);
        }
    },
    actions: {},
    getters: {
        products(state) {
            return state.products
        },
        promoProducts (state) {
            return state.products.filter(product=> {
                return product.promo
            })
        },
        myProducts (state) {
            return state.product
        },
        productById(state) {
            return productId => {
                return state.products.find(product => product.id === productId)
            }
        },
        cartCount(state) {
            return state.cartCount
        },
        cart(state) {
            return state.cart
        }
    }
}