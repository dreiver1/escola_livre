<template>
  <q-page padding class="row justify-center">
    <div class="col-xs-12 col-sm-6 col-md-6 content-start" >
      <div class="text-h4 q-py-sm">Novo aluno</div>
      <q-input outlined v-model="nome" label="Nome" class="q-pb-sm" />
      <q-input outlined v-model="celular" label="Celular" class="q-pb-sm" />
      <q-input outlined v-model="cpf" label="CPF" class="q-pb-sm" />
      <q-input outlined v-model="data" label="Data de nascimento" class="q-pb-sm" />
      <q-input outlined v-model="email" label="Email" class="q-pb-sm" />
      <q-input outlined v-model="senha" label="Senha" class="q-pb-sm" />
      <q-input outlined v-model="confirmation" label="Confirme sua senha" class="q-pb-sm" />
      <q-select outlined v-model="turmaModel" :options="turmas" label="Turma" class="q-my-sm"/>
      <q-select outlined v-model="profModel" :options="professores" label="Professor"/>
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
import profService from '../../services/prof.js'
import { useRouter } from 'vue-router'

const { postAluno } = alunoService()
const { listTurma } = turmaService()
const { listProf } = profService()
const listaTurmas = []
const listaProfs = []

const handleTurmas = async () => {
  try {
    const turmas = await listTurma()
    for (let i = 0; i < turmas.length; i++) {
      const auxTurmas = {
        label: turmas[i].nome,
        value: turmas[i].id
      }
      if (listaTurmas.length < turmas.length) {
        listaTurmas.push(auxTurmas)
      }
    }
  } catch (error) {
    alert('ocorreu um erro: ' + error)
  }
}
const handleProf = async () => {
  try {
    const profs = await listProf()
    for (let i = 0; i < profs.length; i++) {
      const aux = {
        label: profs[i].nome,
        value: profs[i].idprofessores
      }
      if (listaProfs.length < profs.length) {
        listaProfs.push(aux)
      }
    }
    console.log(profs)
  } catch (error) {
    alert('ocorreu um erro: ' + error)
  }
}
export default defineComponent({
  name: 'createAluno',
  components: {

  },
  setup () {
    const router = useRouter()
    const profModel = ref(null)
    const turmaModel = ref(null)
    const nome = ref('')
    const celular = ref('')
    const cpf = ref('')
    const data = ref('')
    const email = ref('')
    const senha = ref('')
    const confirmation = ref('')
    const turmas = listaTurmas
    const professores = listaProfs
    const handleAluno = async () => {
      try {
        const body = {
          nome: nome.value,
          celular: celular.value,
          dataNascimento: data.value,
          email: email.value,
          senha: senha.value,
          cpf: cpf.value,
          professores_idprofessores: profModel.value.value,
          turmaId: turmaModel.value.value
        }
        const aluno = await postAluno(body)
        console.log(aluno)
        router.push({ name: 'alunosPage' })
      } catch (error) {
        console.log('ocorreu um erro: ' + error)
      }
    }
    return {
      profModel,
      turmaModel,
      turmas,
      professores,
      handleAluno,
      nome,
      celular,
      cpf,
      data,
      email,
      senha,
      confirmation,
      router
    }
  },
  created () {
    handleTurmas()
    handleProf()
  }
})
</script>
