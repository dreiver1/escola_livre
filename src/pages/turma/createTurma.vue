<template>
  <q-page padding class="row">
    <div class="col-xs-12 col-sm-6 col-md-6 content-start" >
      <div class="text-h4 q-py-sm">Nova turma</div>
      <q-input outlined v-model="text" label="Nome" class="q-pb-sm" />
      <q-select outlined v-model="model" :options="options" label="Professor"/>
      <div class="float-right q-my-sm">
        <q-btn color="white" text-color="black" label="Cancelar" :to="{ name: 'turmasPage' }"/>
        <q-btn color="primary" label="Cadastrar" @click="handleTurma" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import profService from '../../services/prof.js'
import turmaService from '../../services/turmas.js'

const { listProf } = profService()
const { postTurma } = turmaService()

const professoresApi = []

const handleProfessores = async () => {
  try {
    const professores = await listProf()
    for (let i = 0; i < professores.length; i++) {
      const aux = {
        label: professores[i].nome,
        value: professores[i].idprofessores
      }
      if (professoresApi.length < professores.length) {
        professoresApi.push(aux)
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
    const options = professoresApi
    const handleTurma = async () => {
      try {
        const body = {
          nome: text.value,
          professoresIdprofessores: model.value.value
        }
        console.log(body)
        const turma = await postTurma(body)
        console.log(turma)
      } catch (error) {
        alert('ocorreu um erro: ' + error)
      }
    }
    return {
      text,
      model,
      options,
      handleTurma
    }
  },
  created () {
    handleProfessores()
  }
})
</script>
