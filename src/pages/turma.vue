<template>
    <q-page class="row-reverse justify-center">
      <div class="text-h3 flex flex-center">Turma: {{  this.$route.params.Id }}</div>
    </q-page>
  </template>
<script>

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'turmaPage',
  data () {
    return {}
  }
})
</script>
