<template>
  <q-item>
    <div class="q-pa-md" >
      <Frequencia
        v-for="aluno in AlunosList"
        :key="aluno.idAluno"
        v-bind="aluno"
        style="padding: 0px;"
        :idMes="{idMes}"
      />
    </div>
  </q-item>
</template>
<script>
import { defineComponent, ref, onMounted } from 'vue'
import alunoService from 'src/services/alunos'
import Frequencia from './frequencia.vue'

let id = ''

export default defineComponent({
  name: 'formFrequencia',
  props: {
    idMes: {
      type: Number,
      required: true
    },
    idTurma: {
      type: String
    }
  },
  created () {
    id = this.idTurma
  },
  setup () {
    const aluno = alunoService()
    const handleFrequencia = async (idTurma) => {
      try {
        const data = await aluno.getByTurma(idTurma)
        console.log(data, 'turmas')
        studentsList.value = data
      } catch (error) {
        console.log('ocorreu um erro: ' + error)
      }
    }
    const studentsList = ref([])
    onMounted(async () => {
      await handleFrequencia(id)
    })

    return {
      AlunosList: studentsList
    }
  },
  components: { Frequencia }
})
</script>
