<template>
  <q-item clickable v-ripple>
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
  }
})
</script>
