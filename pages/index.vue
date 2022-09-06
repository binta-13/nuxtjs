<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline"> Welcome to the Pencatat </v-card-title>
        <v-card-text>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book..
          </p>
          <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
          <!-- <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3" />
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br />
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a> -->
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-card class="d-flex justify-space-between mb-6 ma-5">
            <registrasi />
          </v-card>
          <v-card class="d-flex justify-center mb-6 ma-5">
            <login />
          </v-card>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import login from "../components/login.vue";
export default {
  components: { login },
  name: "IndexPage",
};
</script>
