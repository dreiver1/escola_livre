<template>
  <q-page padding>
    <frequencia />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import frequencia from 'src/components/frequenciaList.vue'

export default defineComponent({
  name: 'turmaFrequencia',
  components: {
    frequencia
  }
})
</script>
