<template>
  <q-item>
    <div class="q-pa-md" >
      <ListAlunos />
    </div>
  </q-item>
</template>
<script>
import { defineComponent } from 'vue'
import { api } from 'src/boot/axios.js'
import ListAlunos from './listAlunos.vue'
// var alunos
const handleFrequencia = async (idTurma) => {
  try {
    const { data } = await api.get('http://localhost:3002/alunos/turma/' + idTurma)
    console.log(data)
  } catch (error) {
    console.log('ocorreu um erro: ' + error)
  }
}
export default defineComponent({
  name: 'formFrequencia',
  props: {
    idTurma: {
      type: String
    }
  },
  created () {
    handleFrequencia(this.idTurma)
  },
  setup () {
    return {}
  },
  components: { ListAlunos }
})
</script>
