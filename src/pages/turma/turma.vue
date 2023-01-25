<template>
    <q-page class="row-reverse justify-center" style="padding: 0px;" >
      <q-tabs
        v-model="tab"
        inline-label
        class="text-indigo shadow-2"
        style="padding: 0px;"
        active-color="blue"
        indicator-color="white"

      >
        <q-tab name="students" icon="person" label="Alunos" />
        <q-tab name="frequency" icon="format_list_numbered" label="frequencia" style="padding: 0px;"/>
        <q-tab name="grades" icon="tab" label="Notas" />
      </q-tabs>
      <q-tab-panels v-model="tab">
        <q-tab-panel name="students" >
          <TurmaTable :idTurma="this.$route.params.Id"/>
        </q-tab-panel>
        <q-tab-panel name="frequency" style="padding: 0px;">
          <frequenciaTab :idTurma="this.$route.params.Id"/>
        </q-tab-panel>
        <q-tab-panel name="grades" >
          <div class="text-h2 flex flex-center">Notas</div>
        </q-tab-panel>
      </q-tab-panels>
    </q-page>
  </template>
<script>
import TurmaTable from 'src/components/TurmaTable.vue'
import frequenciaTab from 'src/components/frequenciaTab.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'turmaPage',
  components: {
    TurmaTable,
    frequenciaTab
  },
  setup () {
    return {
      tab: ref('students')
    }
  }
})
</script>
