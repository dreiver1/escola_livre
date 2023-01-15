<template>
  <q-page padding>
    <frequencia />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import frequencia from 'src/components/frequencia.vue'

export default defineComponent({
  name: 'turmaFrequencia',
  components: {
    frequencia
  }
})
</script>
