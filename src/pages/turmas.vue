<template>
  <q-page class="row-reverse justify-center">
    <div class="text-h4 flex flex-center" style="padding: 10px;" >TURMAS</div>
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
    console.log(response)
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
