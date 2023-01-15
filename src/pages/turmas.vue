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
import { api } from 'src/boot/axios.js'
import { defineComponent, onMounted, ref } from 'vue'
import listaTurmas from 'src/components/listaTurmas.vue'
const turmasLista = ref([])
const getTurmas = async () => {
  try {
    const { data } = await api.get('http://localhost:3002/turmas')
    turmasLista.value = data
    console.log(data)
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
