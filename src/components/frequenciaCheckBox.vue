<template>
    <div>
      <q-checkbox dense v-model="diaRef" :label="ID" />
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
const diaRef = ref('')
export default defineComponent({
  name: 'frequenciaCheckBox',
  props: {
    dia: {
      type: Boolean,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  created () {
    diaRef.value = this.dia
  },
  data () {
    return {
      diaRef,
      ID: this.id
    }
  }
})
</script>
