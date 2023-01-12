<template>
  <q-page padding>
    <login-form />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import loginForm from 'src/components/loginForm.vue'

export default defineComponent({
  name: 'loginPage',
  components: {
    loginForm
  }
})
</script>
