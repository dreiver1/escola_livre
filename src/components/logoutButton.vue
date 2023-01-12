<template>
  <div class="q-pa-md">
    <q-btn-dropdown color="secundary" icon="person">
      <q-list>
        <q-item clickable v-close-popup @click="handleLogout">
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'logoutButton',
  setup () {
    const router = useRouter()

    const handleLogout = () => {
      try {
        router.push({ name: 'loginPage' })
      } catch (error) {
        console.log(error.message)
      }
    }

    return {
      handleLogout
    }
  }
})

</script>
