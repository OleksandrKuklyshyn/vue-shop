<template>
    <v-layout>
    <v-flex xs12 sm12 md6 offset-md3  mt-5>
        <v-card  v-if="cart.length>0">
        <v-toolbar color="grey" dark>
          <v-toolbar-title class="text-xs-center">Shopping Cart</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-list subheader>
          <v-subheader>Choisen items </v-subheader>
          <v-list-tile two-line
            v-for="(item, i) in cart" :key='i' avatar>
            
            <v-list-tile-content >
              <v-list-tile-title class="title" >{{item.title}} <span class="ml-5"><v-icon :color="item.active ? 'teal' : 'grey'" @click.prevent="addOne(item)">add_circle_outline</v-icon>{{item.quantity}}<v-icon :color="item.active ? 'teal' : 'grey'" @click.prevent="removeOne(item)">remove_circle_outline</v-icon></span><span class="ml-5">${{item.totalPrice}}</span></v-list-tile-title>
              
            </v-list-tile-content>
            
            <v-list-tile-action>
                
              <v-icon :color="item.active ? 'teal' : 'grey'" @click.prevent="removeFromCart(item)">delete</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>
        <v-list>
            
            <v-list-tile-action>
                <v-list-tile-title class="title text-lg-right mr-5">TOTAL: ${{totalPrice}}</v-list-tile-title>
            </v-list-tile-action>
        </v-list>

      </v-card>
      
      <v-card v-else class='elevation-10'>
          <v-toolbar color="grey" dark>
          <v-toolbar-title class="text-xs-center">Shopping Cart</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
          <div class="ma-3 pa-5 " >
              <h3 class="headline mb-0" >Cart is a empty</h3>
            
          </div>
          
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    methods: {
        removeFromCart (item) {
            this.$store.commit('removeFromCart', item)
        },
        removeOne (item) {
            this.$store.commit('removeOne', item)
        },
        addOne (item) {
            this.$store.commit('addOne', item)
        }
    },
computed: {
    totalPrice () {
        let total = 0

        for( let item of this.$store.getters.cart) {
            total += item.totalPrice
        }
        return total
    },
    cartCount () {
        return this.$store.getters.cartCount
    },
    cart () {
        return this.$store.getters.cart
    }
}
}
</script>
<style>

</style>
