<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Registrasi
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Registrasi</span>
           <!-- <Notification :message="error" v-if="error"/> -->
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Username" v-model="username" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" v-model="email" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  v-model="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false" type="submit">
            Registrasi
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
// import Notification from '~/components/Notification';
export default {
  middleware: 'guest',
  // components: {
  //   Notification,
  // },
  data(){
    return{
      username: '',
      email: '',
      password: '',
      error: null,
      dialog: false,
      }
  },
  methods: {
    async register() {
      try {
        await this.$axios.post('register', {
          username: this.username,
          email: this.email,
          password: this.password,
        });
        console.log(register());
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        this.$router.push('/');
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>
