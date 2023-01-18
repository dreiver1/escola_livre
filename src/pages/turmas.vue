<template>
  <q-page class="row-reverse justify-center">
    <div style="display: flex; justify-content: space-between; padding: 10px;" >
      <span class="text-h5">TURMAS: </span>
      <q-btn label="Criar turma" color='blue' style="align-self: flex-end; margin-left: 10px;" :to="{ name: 'me' }"> </q-btn></div>
    <div>
      <listaTurmas
      v-for="turma in turmaslist"
      :key="turma.id"
      v-bind="turma"
      style="padding: 10px; border: 1px solid black; border-radius: 10px; margin: 5px;"/>
    </div>
  </q-page>
</template>

<script>
import postsService from 'src/services/turmas'
import { defineComponent, onMounted, ref } from 'vue'
import listaTurmas from 'src/components/listaTurmas.vue'
const { list } = postsService()
const turmasLista = ref([])
const getTurmas = async () => {
  try {
    const response = await list()
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
