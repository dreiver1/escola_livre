<template>
  <q-page padding class="row">
    <div class="col-xs-12 col-sm-6 col-md-6 content-start" >
      <div class="text-h4 q-py-sm">Novo aluno</div>
      <q-input outlined v-model="text" label="Nome" class="q-pb-sm" />
      <q-input outlined v-model="text" label="Celular" class="q-pb-sm" />
      <q-input outlined v-model="text" label="CPF" class="q-pb-sm" />
      <q-input outlined v-model="text" label="Data de nascimento" class="q-pb-sm" />
      <q-input outlined v-model="text" label="Email" class="q-pb-sm" />
      <q-input outlined v-model="text" label="Senha" class="q-pb-sm" />
      <q-input outlined v-model="text" label="Confirme sua senha" class="q-pb-sm" />
      <q-select outlined v-model="model" :options="options" label="Turma" class="q-my-sm"/>
      <q-select outlined v-model="model" :options="options" label="Professor"/>
      <div class="float-right q-my-sm">
        <q-btn color="white" text-color="black" label="Cancelar" :to="{ name: 'alunosPage' }"/>
        <q-btn color="primary" label="Cadastrar" @click="handleAluno" />
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue'
import alunoService from '../../services/alunos.js'
import turmaService from '../../services/turmas.js'

const { post } = alunoService()
const { list } = turmaService()

const listaTurmas = []

const handleProfessores = async () => {
  try {
    const turmas = await list()
    for (let i = 0; i < turmas.length; i++) {
      const aux = {
        label: turmas[i].nome,
        value: turmas[i].id
      }
      if (listaTurmas.length < turmas.length) {
        listaTurmas.push(aux)
      }
    }
  } catch (error) {
    alert('ocorreu um erro: ' + error)
  }
}
export default defineComponent({
  name: 'turmaAlunos',
  components: {

  },
  setup () {
    const model = ref(null)
    const text = ref('')
    const options = listaTurmas
    const handleAluno = async () => {
      try {
        const body = {
          nome: text.value,
          idTuma: model.value.value
        }
        console.log(body)
        const turma = await post(body)
        console.log(turma)
      } catch (error) {
        alert('ocorreu um erro: ' + error)
      }
    }
    return {
      text,
      model,
      options,
      handleAluno
    }
  },
  created () {
    handleProfessores()
  }
})
</script>
