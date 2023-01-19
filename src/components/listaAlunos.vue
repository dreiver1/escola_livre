<template>
  <q-item clickable v-ripple @click="handleTurmas({ id })" style="padding: 10px; border: 1px solid black;">
    <q-item-section  v-if="icon"
    avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>Nome: {{ nome }}</q-item-label>
      <q-item-label>Turma: {{ turmaId }}</q-item-label>
      <q-item-label>email: {{ email }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'listaTurmas',
  props: {
    nome: {
      type: String,
      required: false
    },

    email: {
      type: String
    },

    idAluno: {
      type: String,
      required: true
    },
    turmaId: {
      type: String
    },

    icon: {
      type: String,
      default: 'person'
    }
  },
  setup () {
    const router = useRouter()
    const handleTurmas = (id) => {
      try {
        router.push({ name: 'turmaPage', params: { Id: id.id } })
      } catch (error) {
        console.log('ocorreu um erro :' + error)
      }
    }
    return {
      handleTurmas
    }
  }
})
</script>
