<template>
    <q-page class="row-reverse justify-center">
      <q-tabs
        v-model="tab"
        inline-label
        class="text-indigo shadow-2"
      >
        <q-tab name="students" icon="person" label="Alunos" />
        <q-tab name="frequency" icon="format_list_numbered" label="frequencia" />
        <q-tab name="grades" icon="tab" label="Notas" />
      </q-tabs>
      <q-tab-panels v-model="tab">
        <q-tab-panel name="students" >
          <TurmaTable :idTurma="this.$route.params.Id"/>
        </q-tab-panel>
        <q-tab-panel name="frequency" >
          <div class="text-h2 flex flex-center">Frequencia</div>
          <formFrequencia />
        </q-tab-panel>
        <q-tab-panel name="grades" >
          <div class="text-h2 flex flex-center">Notas</div>
        </q-tab-panel>
      </q-tab-panels>
    </q-page>
  </template>
<script>
import TurmaTable from 'src/components/TurmaTable.vue'
import formFrequencia from 'src/components/formFrequencia.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'turmaPage',
  components: {
    TurmaTable,
    formFrequencia
  },
  setup () {
    return {
      tab: ref('students')
    }
  }
})
</script>
