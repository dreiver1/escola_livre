<template>
  <q-item clickable v-ripple @click="handleTurmas({ id })" style="padding: 10px; border: 1px solid black;">
    <q-item-section  v-if="icon"
    avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>Nome: {{ nome }}</q-item-label>
      <q-item-label>Materia: {{ nome }}</q-item-label>
      <q-item-label>ID: {{ id }}</q-item-label>
    </q-item-section>
    <q-iten-section>
      <q-btn icon="edit" class="q-ma-sm" color="blue" dense ></q-btn>
      <q-btn icon="delete" class="q-ma-sm" color="negative" dense ></q-btn>
    </q-iten-section>
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
      type: String,
      default: 'disciplina'
    },

    id: {
      type: String,
      required: true
    },

    icon: {
      type: String,
      default: 'content_paste_search'
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
