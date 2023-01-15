<template>
  <q-page padding>
    <TurmaTable />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import TurmaTable from 'src/components/TurmaTable.vue'

export default defineComponent({
  name: 'turmaAlunos',
  components: {
    TurmaTable
  }
})
</script>
