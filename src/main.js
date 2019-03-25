import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import * as firebase from 'firebase'
import BuyDialogComponent from './components/Common/BuyDialog.vue'
Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.component('app-buy-dialog', BuyDialogComponent)


new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    var config = {
      apiKey: "AIzaSyA7KkinTmYnlLaFvDxwei5A9S7n6rO0AOk",
      authDomain: "onlineshop-vue.firebaseapp.com",
      databaseURL: "https://onlineshop-vue.firebaseio.com",
      projectId: "onlineshop-vue",
      storageBucket: "onlineshop-vue.appspot.com",
      messagingSenderId: "1030613491725"
    }
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
}).$mount('#app')
