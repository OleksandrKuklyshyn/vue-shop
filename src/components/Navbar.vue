<template>
    <div>
        <v-navigation-drawer app temporary v-model="sideNav">
            <v-list>
          <v-list-tile v-for="(link, index) in links" :key='index' :to="link.url">
            <v-list-tile-action>
              <div class="text-xs-center">
    <v-badge left v-if="link.showCartCount" class="ml-3" >
      <template v-slot:badge>
        <span>{{cartCount}}</span>
      </template>
      <v-icon
        
        color="grey lighten-1"
      >
        {{link.icon}}
      </v-icon>
    </v-badge>
    <v-icon v-else class="ml-3">{{link.icon}}</v-icon>

  </div>
             <!-- <v-icon right>{{link.icon}}</v-icon>-->
            </v-list-tile-action> 

            <v-list-tile-content>
              <v-list-tile-title v-text="link.title"></v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>

          <v-list-tile @click="onLogout"  v-if="isUserLoggedIn">
            <v-list-tile-action>
              <v-icon right>logout</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="'Logout'"></v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>
        </v-navigation-drawer>
    <v-toolbar app dark>
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-title>
      <router-link to="/" tag="span" class="pointer">Vue-Shop</router-link>
      </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat v-for="(link, index) in links" :key='index' :to="link.url">
          <v-badge left v-if="link.showCartCount">
      <template v-slot:badge>
        <span>{{cartCount}}</span>
      </template>
      <v-icon
        
        color="grey lighten-1"
      >
        {{link.icon}}
      </v-icon>
    </v-badge>
    <v-icon v-else>{{link.icon}}</v-icon>
          {{link.title}}
      </v-btn>
      <v-btn flat @click="onLogout" v-if="isUserLoggedIn">
          <v-icon>logout</v-icon>
        Logout
      </v-btn>
    </v-toolbar-items>
    </v-toolbar>

    <v-content fluid >
      <router-view ></router-view>
    </v-content>
  
      <v-footer class="pa-3" dark fixed>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
    
    
    </div>
</template>
<script>
export default {
    data() {
        return {
            sideNav: false,
            
    }
},

computed: {
  
    cartCount () {
        return this.$store.getters.cartCount
    },

  isUserLoggedIn () {
    return this.$store.getters.isUserLoggedIn
  },
  links () {
    if (this.isUserLoggedIn) {
      return [
                {title: 'Home', icon: 'account_box', url: '/'},
                {title: 'Cart', icon: 'shopping_cart', url: '/checkout', showCartCount: true},
      ]
    }
    return [
                {title: 'Register', icon: 'account_box', url: '/register'},
                {title: 'Login', icon: 'account_box', url: '/login'}
    ]
  }
},
methods: {
  onLogout () {
    this.$store.dispatch('logoutUser')
    this.$router.push('/')
}}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
* {
  font-family: 'Open Sans', sans-serif;
}
.pointer {
  cursor: pointer;
}
</style>
