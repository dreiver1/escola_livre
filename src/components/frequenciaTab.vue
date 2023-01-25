<template>
  <q-tabs
      v-model="tab"
      inline-label
      class="text-white shadow-2 bg-blue"
      active-color="indigo"
      style="padding: 0px;"
    >
      <q-tab name="janeiro" label="Janeiro" />
      <q-tab name="fevereiro"  label="Fevereiro" />
      <q-tab name="marco" label="Março" />
    </q-tabs>
    <q-tab-panels v-model="tab">
      <q-tab-panel name="janeiro" >
        <formFrequencia :idTurma="idTurma" :idMes="0"/>
      </q-tab-panel>
      <q-tab-panel name="fevereiro" >
        <formFrequencia :idTurma="idTurma" :idMes="1"/>
      </q-tab-panel>
      <q-tab-panel name="marco" >
        <formFrequencia :idTurma="idTurma" :idMes="2"/>
      </q-tab-panel>
    </q-tab-panels>
</template>
<script>
import { defineComponent, ref } from 'vue'
import formFrequencia from './formFrequencia.vue'

export default defineComponent({
  name: 'frequenciaTab',
  components: {
    formFrequencia
  },
  props: {
    idTurma: {
      type: String
    }
  },
  setup () {
    return {
      tab: ref('students')
    }
  }
})
</script>
