<template>
  <q-item>
    <div class="q-pa-md" >
      <ListAlunos
        v-for="aluno in AlunosList"
        :key="aluno.alunosIdAluno"
        v-bind="aluno"
        style="padding: 0px;"
      />
    </div>
  </q-item>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { api } from 'src/boot/axios.js'
import ListAlunos from './listAlunos.vue'
// var alunos
const handleFrequencia = async (idTurma) => {
  try {
    const request = 'http://localhost:3002/alunos/turma/' + idTurma
    const { data } = await api.get(request)
    studentsList.value = data
    console.log(data + 'data')
    console.log(studentsList)
  } catch (error) {
    console.log('ocorreu um erro: ' + error)
  }
}

const studentsList = ref([])

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
    return {
      AlunosList: studentsList
    }
  },
  components: { ListAlunos }
})
</script>
