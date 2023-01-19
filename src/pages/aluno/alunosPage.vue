<template>
  <q-page class="row-reverse justify-center q-pa-md">
    <div class="row justify-between q-my-sm">
      <div class="text-h4">Alunos: </div>
      <q-btn label="Cadastrar Aluno" :to="{name: 'createAluno'}" color="blue"></q-btn>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4 ">
    <listaAlunosVue
      v-for="aluno in listaDeAlunos"
      :key="aluno.nome"
      v-bind="aluno"
      class="col-xs-12 col-sm-6 col-md-4 "
      style="padding: 10px; border: 2px solid grey; border-radius: 10px; margin: 5px;"
    />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import listaAlunosVue from 'src/components/listaAlunos.vue'
import alunoService from '../../services/alunos.js'

const { listAluno } = alunoService()

const AlunosList = ref([])

const handleAluno = async () => {
  try {
    const alunos = await listAluno()
    AlunosList.value = alunos
    console.log(AlunosList)
  } catch (error) {
    console.log('ocorreu um erro: ' + error)
  }
}

export default defineComponent({
  name: 'alunosPage',
  components: {
    listaAlunosVue
  },
  setup () {},
  data () {
    return {
      listaDeAlunos: AlunosList
    }
  },
  created () {
    handleAluno()
  }
})
</script>
