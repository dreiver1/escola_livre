<template>
    <div class="q-pa-md">
      <q-table
        title="Alunos"
        dense
        :rows="alunos"
        :columns="columns"
        row-key="name"
      />
    </div>
  </template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
import { api } from 'src/boot/axios'
const columns = [
  { name: 'nome', field: 'nome', label: 'Nome', sortable: true },
  { name: 'idAluno', field: 'idAluno', label: 'Id', sortable: false },
  { name: 'email', field: 'email', label: 'Email', sortable: true }
]
const alunos = ref([])

const getAlunos = async () => {
  try {
    const { data } = await api.get('http://localhost:3002/alunos/turma/clc3gi38n0002uls05tirw9ap')
    alunos.value = data
    return console.log(data)
  } catch (error) {
    console.log('ocorreu um erro: ' + error)
  }
}

export default defineComponent({
  name: 'TurmaTable',
  setup () {
    onMounted(() => {
      getAlunos()
    })
    return {
      columns,
      alunos
    }
  }
})
</script>
