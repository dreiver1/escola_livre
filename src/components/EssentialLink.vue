<template>
  <q-item>
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section clickable @click="goTopage({ link })" style="cursor: pointer;">
      <q-item-label>{{ title }}</q-item-label>
      <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MenuPrincipal',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      required: true
    },

    icon: {
      type: String,
      default: ''
    }
  },
  setup () {
    const router = useRouter()
    const goTopage = (link) => {
      try {
        console.log('chamou')

        router.push({ name: link.link })
      } catch (error) {
        console.log('ocorreu um erro:' + error)
      }
    }
    return {
      goTopage
    }
  }
})
</script>
