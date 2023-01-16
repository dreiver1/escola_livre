<template>
  <q-page class="row justify-center" padding>
   <NoticiasCarrousel />
   <CalendarioAcademico />
  </q-page>
</template>

<script>
import NoticiasCarrousel from '../components/NoticiasCarrousel.vue'
import CalendarioAcademico from '../components/CalendarioAcademico.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IndexPage',
  components: {
    NoticiasCarrousel,
    CalendarioAcademico
  }
})
</script>
