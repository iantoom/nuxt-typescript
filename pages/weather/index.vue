<template>
  <v-container>
    <v-flex xs8 offset-xs2>
      <h1>Weather</h1>
      <v-text-field label="City" placeholder="Enter City Name" filled></v-text-field>
    </v-flex>
    <v-flex xs8 offset-xs2>
      <v-card>
        <v-card-text>Here is the card</v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  components: {}
})
export default class extends Vue {}
</script>


<style>
</style>
