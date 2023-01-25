<template>
  <q-page class="row-reverse justify-center">
    <div style="display: flex; justify-content: space-between; padding: 10px;" >
      <span class="text-h5">TURMAS: </span>
      <q-btn label="Criar turma" color='blue' style="align-self: flex-end; margin-left: 10px;" :to="{ name: 'createTurma' }"> </q-btn></div>
    <div>
      <listaTurmas
      v-for="turma in turmaslist"
      :key="turma.id"
      v-bind="turma"
      style="padding: 10px; border: 2px solid grey; border-radius: 10px; margin: 5px;"/>
    </div>
  </q-page>
</template>

<script>
import turmaService from '../../services/turmas'
import { defineComponent, onMounted, ref } from 'vue'
import listaTurmas from '../../components/listaTurmas.vue'
const turma = turmaService()
const turmasLista = ref([])
const getTurmas = async () => {
  try {
    const response = await turma.listTurma()
    turmasLista.value = response
  } catch (error) {
    console.log('ocorreu um erro: ' + error)
  }
}
export default defineComponent({
  name: 'turmasPage',
  components: {
    listaTurmas
  },
  setup () {
    onMounted(() => {
      getTurmas()
    })
  },
  data () {
    return {
      turmaslist: turmasLista
    }
  }
})
</script>
