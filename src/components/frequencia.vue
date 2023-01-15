<template>
  <q-tabs
    v-model="tab"
    inline-label
    class="text-indigo shadow-2"
  >
    <q-tab name="janeiro" label="Janeiro" />
    <q-tab name="fereiro"  label="Fevereiro" />
    <q-tab name="marco" label="Março" />
  </q-tabs>
  <q-tab-panels v-model="tab">
    <q-tab-panel name="janeiro" >
      <formFrequencia :idTurma="idTurma"/>
    </q-tab-panel>
    <q-tab-panel name="fevereiro" >
      <formFrequencia :idTurma="idTurma"/>
    </q-tab-panel>
    <q-tab-panel name="marco" >
      <formFrequencia :idTurma="idTurma"/>
    </q-tab-panel>
  </q-tab-panels>
</template>
<script>
import { defineComponent } from 'vue'
import formFrequencia from './formFrequencia.vue'

export default defineComponent({
  name: 'frequenciaList',
  components: {
    formFrequencia
  },
  props: {
    idTurma: {
      type: String
    }
  }
})
</script>
