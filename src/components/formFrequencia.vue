<template>
  <q-item>
    <div class="q-pa-md" >
      <ListAlunos
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
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
const linksList = [
  {
    title: 'Turmas',
    caption: 'Sair do aplicativo',
    icon: 'class',
    link: 'turmasPage'
  },
  {
    title: 'Atividades',
    caption: 'Sair do aplicativo',
    icon: 'assignment',
    link: 'me'
  },
  {
    title: 'Alunos',
    caption: 'Sair do aplicativo',
    icon: 'perm_identity',
    link: 'me'
  },
  {
    title: 'Configurações',
    caption: 'Sair do aplicativo',
    icon: 'manage_accounts',
    link: 'me'
  },
  {
    title: 'Logout',
    caption: 'Sair do aplicativo',
    icon: 'logout',
    link: 'loginPage'
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
      essentialLinks: linksList
    }
  },
  components: { ListAlunos }
})
</script>
