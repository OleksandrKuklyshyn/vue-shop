<template>
    <v-container fluid fill-height dark>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12 form_login">
              <v-toolbar dark >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text >
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field prepend-icon="person" name="email" label="Email" type="email" v-model="email" :rules="emailRules"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password" :rules="passwordRules"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                
                <v-btn  dark  @click="onSubmit"  @keyup.enter.native='onSubmit' :loading='loading'  :class="{'disable-events': !valid || loading}">Login</v-btn>
              </v-card-actions>
            </v-card>
            <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="dialog">
        
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
          </v-flex>
        </v-layout>
      </v-container>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            valid: false,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'],
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 10) || 'Password must be equal or  bigger 10 characters'
      ],
           dialog: false 
        }
        
    },
    methods: {
        onSubmit() {
            if (this.$refs.form.validate()) {
              this.dialog = true
                   const  user = {
                       email: this.email,
                       password: this.password
                    }
                    
        
                    this.$store.dispatch('loginUser', user)
                    
                    .then(() => {
                      
                      this.$router.push('/')})
                    .catch(() => {})
        }
        }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    }
}
</script>
<style>
.form_login {
  
  max-width: 700px;
  margin: 100px auto;
}
.disable-events {
  pointer-events: none;
  opacity: 0.6;
}
</style>