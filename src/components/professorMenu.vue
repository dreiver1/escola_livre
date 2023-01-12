<template>
  <div class="q-pa-md">
    <q-btn color="primary" label="Scale Menu">
      <q-menu
        transition-show="scale"
        transition-hide="scale"
      >
        <q-list style="min-width: 100px">
          <q-item clickable>
            <q-item-section>Turma 01</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'professorMenu',
  setup () {
    const router = useRouter()
    const getTurmas = () => {
      try {
        router.push({ name: 'loginPage' })
      } catch (error) {
        console.log(error.message)
      }
    }
    return {
      getTurmas
    }
  }
})
</script>
