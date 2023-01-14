<template>
    <div class="q-pa-md">
      <q-table
        :rows-per-page-options="[0]"
        hide-bottom
        title="Alunos"
        dense
        :rows="alunos"
        :columns="columns"
        row-key="name"
      />
    </div>
  </template>
<script>
import { defineComponent, ref } from 'vue'
import { api } from 'src/boot/axios'
const columns = [
  { name: 'nome', field: 'nome', label: 'Nome', sortable: true },
  { name: 'idAluno', field: 'idAluno', label: 'Id', sortable: false },
  { name: 'email', field: 'email', label: 'Email', sortable: true }
]
const alunos = ref([])
const getAlunos = async (id) => {
  try {
    const request = 'http://localhost:3002/alunos/turma/' + id
    const { data } = await api.get(request)
    alunos.value = data
    return console.log(data)
  } catch (error) {
    console.log('ocorreu um erro: ' + error)
  }
}
export default defineComponent({
  name: 'TurmaTable',
  props: {
    idTurma: {
      type: String
    }
  },
  setup () {
    return {
      columns,
      alunos
    }
  },
  data () {
    return {
      ID: this.idTurma
    }
  },
  created () {
    console.log(this.idTurma)
    getAlunos(this.idTurma)
  }
})
</script>
