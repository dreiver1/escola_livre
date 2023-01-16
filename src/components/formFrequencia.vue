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
const studentsList = [
  {
    alunosIdAluno: 'clc3gi38n0002uls05tirw9ap',
    turmaId: 'clc3gi38n0002uls05tirw9ap',
    id: 'clc3ke2zc0001ul38kp8aczk5'
  },
  {
    alunosIdAluno: 'clc3gi38n0002uls05tirw9ap',
    turmaId: 'Sair do aplicativo',
    id: 'clc3ke2zc0001ul38kp8aczk5'
  },
  {
    alunosIdAluno: 'clc3gi38n0002uls05tirw9ap',
    turmaId: 'clc3ke2zc0001ul38kp8aczk5',
    id: 'clc3ke2zc0001ul38kp8aczk5'
  },
  {
    alunosIdAluno: 'clc3gi38n0002uls05tirw9ap',
    turmaId: 'Sair do aplicativo',
    id: 'clc3ke2zc0001ul38kp8aczk5'
  },
  {
    alunosIdAluno: 'Logout',
    turmaId: 'Sair do aplicativo',
    id: 'clc3ke2zc0001ul38kp8aczk5'
  }
]
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
