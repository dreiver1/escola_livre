<template>
  <q-page class="row justify-center">
   <NoticiasCarrousel />
  </q-page>
</template>

<script>
import NoticiasCarrousel from 'src/components/NoticiasCarrousel.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IndexPage',
  components: {
    NoticiasCarrousel
  }
})
</script>
