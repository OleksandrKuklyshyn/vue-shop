import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Product from './components/Products/ListProduct.vue'
import Checkout from './components/User/Checkout.vue'


export default new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path:'/product/:id', component: Product, props: true},
        {path: '/login', component: Login},
        {path: '/register', component: Register},
        {path: '/checkout', component: Checkout},
    ],
    mode:'history'
})