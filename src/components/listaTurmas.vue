<template>
  <q-item clickable v-ripple @click="handleTurmas({uuid})" style="padding: 10px; border: 1px solid black;">
    <q-item-section  v-if="icon"
    avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>Nome: {{ title }}</q-item-label>
      <q-item-label>Materia: {{ disciplina }}</q-item-label>
      <q-item-label>ID: {{ uuid }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'listaTurmas',
  props: {
    title: {
      type: String,
      required: false
    },

    disciplina: {
      type: String,
      default: 'disciplina'
    },

    uuid: {
      type: String,
      required: true
    },

    icon: {
      type: String,
      default: 'content_paste_search'
    }
  },
  setup () {
    const router = useRoute()
    const handleTurmas = (uuid) => {
      try {
        console.log(uuid.uuid)
        router.push({})
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
