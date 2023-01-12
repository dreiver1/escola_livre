<template>
    <q-form class="row justify-center" @submit.prevent="handleLogin">
      <p class="col-12 text-h5 text-center"> Login </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input v-model="email" filled type="email" hint="Email"/>
        <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Senha" >
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
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'loginForm',
  setup () {
    const router = useRouter()

    const handleLogin = () => {
      try {
        router.push({ name: 'me' })
      } catch (error) {
        console.log(error.message)
      }
    }

    return {
      handleLogin
    }
  }
})

</script>
