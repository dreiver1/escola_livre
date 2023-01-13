<template>
    <q-page class="row-reverse justify-center">
      <TurmaTable />
    </q-page>
  </template>
<script>
import TurmaTable from 'src/components/TurmaTable.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'turmaPage',
  components: {
    TurmaTable
  },
  data () {
    return {}
  }
})
</script>
