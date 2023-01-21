<template>
    <q-form class="row justify-center" @submit.prevent="handleLogin">
      <p class="col-12 text-h5 text-center"> Login </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input v-model="form.email" filled type="email" hint="Email"/>
        <q-input v-model="form.senha" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <div class="full-width q-pt-md">
          <q-btn
            label="Login"
            color="primary"
            class="full-width"
            outline
            rounded
            type="submit"
          />
        </div>
      </div>
    </q-form>
</template>

<script>
import useAuthAdmin from 'src/composables/useAuth'
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'

export default defineComponent({
  name: 'loginForm',
  setup () {
    const router = useRouter()
    const { login, isLoggedIn } = useAuthAdmin()
    const form = ref({
      email: '',
      senha: ''
    })

    onMounted(async () => {
      const loged = await isLoggedIn()
      if (loged === true) {
        router.push({ name: 'me' })
        console.log('passou')
      }
    })

    const handleLogin = async () => {
      try {
        const token = await login(form.value)
        console.log(token)
        Cookies.set('_myAppToken', token)
        router.push({ name: 'me' })
      } catch (error) {
        console.log(error)
        return alert('Usuario não encontrado' + error)
      }
    }

    return {
      handleLogin,
      form,
      isPwd: ref(true)
    }
  }
})

</script>
