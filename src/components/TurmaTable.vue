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
import { defineComponent, ref, onMounted } from 'vue'
import alunoService from '../services/alunos'
let id = ''
const aluno = alunoService()
const columns = [
  { name: 'nome', field: 'nome', label: 'Nome', sortable: true },
  { name: 'idAluno', field: 'idAluno', label: 'Id', sortable: false },
  { name: 'email', field: 'email', label: 'Email', sortable: true }
]
export default defineComponent({
  name: 'TurmaTable',
  props: {
    idTurma: {
      type: String
    }
  },
  setup () {
    const alunos = ref([])
    onMounted(async () => {
      console.log(id)
      const data = await aluno.getByTurma(id)
      alunos.value = data
    }
    )
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
    id = this.idTurma
  }
})
</script>
