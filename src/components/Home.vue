<template>
<div>
    <v-container fluid>
        <v-layout row wrap >
            <v-flex xs12 > 
        <v-carousel dark class="carousel"
            delimiter-icon="stop"
            prev-icon="mdi-arrow-left"
            next-icon="mdi-arrow-right"
            
        >
            <v-carousel-item 
            v-for="(item,i) in promoProducts"
            :key="i"
            :src="item.imageSrc"
            contain
            ></v-carousel-item>
        </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
    <v-container grid-list-xl class="pb-5">
        <v-layout  row wrap>
            <v-flex  xs12 sm6 md6 lg4 v-for="(item,i) in products" :key="i">
                <v-card class=' pb-3' >
                    <router-link :to="'/product/'+item.id" >
                        <v-img
                        class="black--text"
                        height="300px"
                        :src="item.imageSrc"
                        contain
                        >
                        
                    </v-img>
                    </router-link>
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                            <span class="headline">{{item.title}}</span>
                        </v-flex>
                        </v-layout>
                    </v-container>
                    
                    <v-card-title>
                    <div>
                        <span>{{item.description.substring(0,60)}}...</span><br><br>
                        <span class="card_price">Price: <span>${{item.price}}</span></span>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                    <v-btn dark color="darken-4" round :to="'/product/'+item.id" >Description</v-btn>
                    <v-btn dark color="darken-4" round  @click="addToCart(item)">Add to cart</v-btn>
                    
                    </v-card-actions>
                    
                </v-card>
            </v-flex>
        </v-layout>
        
    </v-container>
</div>
    
    
</template>
<script>
export default {
    methods: {
        addToCart (item) {
            this.$store.commit('addToCart', item)
        }
    },
   computed: {
   promoProducts () {
       return this.$store.getters.promoProducts
   },
   products () {
       return this.$store.getters.products
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
.carousel {
    max-width: 1740px;
    margin: 0 auto;
}
.card_price {
    color: black;
    font-size: 18px;
    
}
span {
    text-decoration: none;
}
</style>
