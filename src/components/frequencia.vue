<template>
  <q-item>
    <q-list dense bordered padding class="rounded-borders" style="padding: 0px; margin: 0px;">
      <div class="text-h4">{{ this.nome }}</div>
      <q-checkbox dense v-model="dias.d01" label="01" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d02" label="02" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d03" label="03" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d04" label="04" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d05" label="05" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d06" label="06" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d07" label="07" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d08" label="08" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d09" label="09" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d10" label="10" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d11" label="11" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d12" label="12" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d13" label="13" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d14" label="14" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d15" label="15" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d16" label="16" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d17" label="17" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d18" label="18" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d19" label="19" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d20" label="20" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d21" label="21" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d22" label="22" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d23" label="23" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d24" label="24" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d25" label="25" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d26" label="26" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d27" label="27" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d28" label="28" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d29" label="29" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d30" label="30" @update:model-value="updateValue"/>
      <q-checkbox dense v-model="dias.d31" label="31" @update:model-value="updateValue"/>
    </q-list>
      <!-- <frequenciaCheckBox
      v-for="dia in dia01"
      :key="dia.id"
      v-bind="dia"
      /> -->
  </q-item>
</template>
<script>

import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import mesService from '../services/mes'
import freqService from '../services/frequencia'
// import frequenciaCheckBox from './frequenciaCheckBox.vue'

const mes = mesService()
const freq = freqService()

let id = ''
let mesID = ''
const dia01 = ref('')
const handleDias01 = async (idAluno, idMes) => {
  const { id } = await freq.getFreqByAluno(idAluno)
  const aux = await mes.getByIdMes(id)
  const data = aux[idMes.idMes]
  dia01.value = data
  console.log(dia01.value)
}

export default defineComponent({
  name: 'listAlunos',
  props: {
    idAluno: {
      type: String
    },
    nome: {
      type: String
    },
    turmaId: {
      type: String
    },
    idMes: {
      type: Number,
      required: true
    }
  },
  setup () {
    const dias = ref({})
    const mes = mesService()
    const freq = freqService()

    const handleDias = async (idAluno, idMes) => {
      const { id } = await freq.getFreqByAluno(idAluno)
      const aux = await mes.getByIdMes(id)
      const data = aux[idMes.idMes]
      console.log(data[1].dia)
      const mesAtual = {
        id: data[0].id,
        d01: data[1].dia,
        d02: data[2].dia,
        d03: data[3].dia,
        d04: data[4].dia,
        d05: data[5].dia,
        d06: data[6].dia,
        d07: data[7].dia,
        d08: data[8].dia,
        d09: data[9].dia,
        d10: data[10].dia,
        d11: data[11].dia,
        d12: data[12].dia,
        d13: data[13].dia,
        d14: data[14].dia,
        d15: data[15].dia,
        d16: data[16].dia,
        d17: data[17].dia,
        d18: data[18].dia,
        d19: data[19].dia,
        d20: data[20].dia,
        d21: data[21].dia,
        d22: data[22].dia,
        d23: data[23].dia,
        d24: data[24].dia,
        d25: data[25].dia,
        d26: data[26].dia,
        d27: data[27].dia,
        d28: data[28].dia,
        d29: data[29].dia,
        d30: data[30].dia,
        d31: data[30].dia
      }
      dias.value = mesAtual
    }
    onMounted(async () => {
      console.log(id, mesID)
      await handleDias(id, mesID)
    })
    const updateValue = async () => {
      const form = {
        id: dias.value.id,
        a01: dias.value.d01,
        a02: dias.value.d02,
        a03: dias.value.d03,
        a04: dias.value.d04,
        a05: dias.value.d05,
        a06: dias.value.d06,
        a07: dias.value.d07,
        a08: dias.value.d08,
        a09: dias.value.d09,
        a10: dias.value.d10,
        a11: dias.value.d11,
        a12: dias.value.d12,
        a13: dias.value.d13,
        a14: dias.value.d14,
        a15: dias.value.d15,
        a16: dias.value.d16,
        a17: dias.value.d17,
        a19: dias.value.d19,
        a20: dias.value.d20,
        a21: dias.value.d21,
        a22: dias.value.d22,
        a23: dias.value.d23,
        a24: dias.value.d24,
        a25: dias.value.d25,
        a26: dias.value.d26,
        a27: dias.value.d27,
        a28: dias.value.d28,
        a29: dias.value.d29,
        a30: dias.value.d30,
        a31: dias.value.d31
      }
      const newMes = await mes.upMes(form)
      console.log(newMes)
    }
    onUnmounted(async () => {
      await updateValue()
    })
    return {
      updateValue,
      dias
    }
  },
  created () {
    id = this.idAluno
    mesID = this.idMes
    handleDias01(id, mesID)
  },
  components: {
    // frequenciaCheckBox
  },
  data () {
    return {
      dia01
    }
  }
})
</script>
