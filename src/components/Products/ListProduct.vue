<template>
    <v-container>
        <section mt-3  class="product">
            <v-layout row wrap elevation-12>
                <v-flex xs12 sm6>
                    <img :src="product.imageSrc" class="product_img">
                </v-flex>
                <v-flex xs12 sm6>
                    <div class="product_info">
                        <h2 mt-3 mb-1 class="product_title display-1 mb-3 mt-3">{{product.title}}</h2>
                        <p class="product_category title">
                            <span class="product_title">Vendor: {{product.vendor}}</span>
                        </p>
                        <div class="title mb-3">
                            <p class="product_title mb-2">Description: </p> {{product.description}}
                        </div>
                        <p class="product_price title mb-4">
                            <span class="product_title">Price: ${{product.price}}</span>
                        </p>
                         <p class="product_buy">
                             
                        <app-buy-dialog :product='product'></app-buy-dialog></p>
                    </div>
                </v-flex>
            </v-layout>
        </section>
    </v-container>
</template>
<script>
export default {
    props: ['id'],
    computed: {
        product () {
            const id = this.id
            return this.$store.getters.productById(id)

        }
    }
}
</script>
<style scoped>
 .product {
     display: flex;
     align-items: center;
     flex-wrap: wrap;
     border:  1px solid #000;
 }
 .product_img {
     width: 50%;
     margin: 50px 0 50px 100px;
 }
 .product_info {
     margin-top: 50px;
     
 }
 .product_title {
     font-size: 22px;
     font-weight: bold;
 }
 .product_price {
     color: red;
 }
 
</style>