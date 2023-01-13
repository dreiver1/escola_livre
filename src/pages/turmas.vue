<template>
  <q-page class="row-reverse justify-center">
    <div class="text-h4 flex flex-center" style="padding: 10px;" >TURMAS</div>
    <div>
      <listaTurmas
      v-for="turma in turmaslist"
      :key="turma.uuid"
      v-bind="turma"
      style="padding: 10px; border: 1px solid black;"/>
    </div>
  </q-page>
</template>

<script>

import { defineComponent } from 'vue'
import listaTurmas from 'src/components/listaTurmas.vue'
export default defineComponent({
  name: 'turmasPage',
  components: {
    listaTurmas
  },
  data () {
    return {
      turmaslist: [
        {
          title: 'Português 01',
          disciplina: 'Português',
          uuid: '9795456'
        },
        {
          title: 'Português 02',
          disciplina: 'Português',
          uuid: '54465456'
        },
        {
          title: 'Português 03',
          disciplina: 'Português',
          uuid: '7971235'
        },
        {
          title: 'Português 04',
          disciplina: 'Português',
          uuid: '3214569'
        }
      ]
    }
  }
})
</script>
