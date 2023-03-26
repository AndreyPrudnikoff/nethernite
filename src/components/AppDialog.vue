<template>
  <v-dialog v-if="chosenPackage" v-model='chosenPackage' max-width='500px'>
    <v-card>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color='primary' text @click='closeDialog'>Закрыть</v-btn>
      </v-card-actions>
      <v-card-title>
        <span class='headline'>{{}}</span>
      </v-card-title>

      <v-card-text>
        <h3>{{}}</h3>
      </v-card-text>


    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'AppMessage',
  props: ['chosenPackage'],

  methods: {
    closeDialog() {
      this.$store.commit('setChosenPackage', null)
    }
  }
};
</script>
