<template>
  <q-item>
    <q-list dense bordered padding class="rounded-borders" style="padding: 0px; margin: 0px;">
      <q-item clickable v-ripple>
        <q-item-section style="padding: 0px;">
          <q-form>
          <div class="flex flex-center" style="padding: 0px;">
            <div class="text-h6" style="padding: 10px;"> Aluno: {{ this.nome }} </div>
            <q-option-group
              v-model="group"
              :options="options"
              color="green"
              type="checkbox"
              inline
              dense="dense"
              style="margin: 0px;"
            />
            <q-separator />
          </div>
          </q-form>
        </q-item-section>
      </q-item>
    </q-list>
  </q-item>
</template>
<script>
import { defineComponent, ref } from 'vue'
import mesService from '../services/mes'
import freqService from '../services/frequencia'

// const frequencia = []

const mes = mesService()
const freq = freqService()

const handldeOptions = async (idFreq, idMes) => {
  const Allmes = await mes.getByIdMes(idFreq)
  const freq = Allmes[idMes.idMes]
  const aux = [
    {
      label: '01',
      value: freq.a01 + `${1}`
    },
    {
      label: '02',
      value: freq.a02 + `${2}`
    },
    {
      label: '03',
      value: freq.a03 + `${3}`
    },
    {
      label: '04',
      value: freq.a04 + `${4}`
    },
    {
      label: '05',
      value: freq.a05 + `${5}`
    },
    {
      label: '06',
      value: freq.a06 + `${6}`
    },
    {
      label: '07',
      value: freq.a07 + `${7}`
    },
    {
      label: '08',
      value: freq.a08 + `${8}`
    },
    {
      label: '09',
      value: freq.a09 + `${9}`
    },
    {
      label: `${10}`,
      value: freq.a10 + `${10}`
    },
    {
      label: `${11}`,
      value: freq.a11 + `${11}`
    },
    {
      label: `${12}`,
      value: freq.a12 + `${12}`
    },
    {
      label: `${13}`,
      value: freq.a13 + `${13}`
    },
    {
      label: `${14}`,
      value: freq.a14 + `${14}`
    },
    {
      label: `${15}`,
      value: freq.a15 + `${15}`
    },
    {
      label: `${16}`,
      value: freq.a16 + `${16}`
    },
    {
      label: `${17}`,
      value: freq.a17 + `${17}`
    },
    {
      label: `${18}`,
      value: freq.a18 + `${18}`
    },
    {
      label: `${19}`,
      value: freq.a19 + `${19}`
    },
    {
      label: `${20}`,
      value: freq.a20 + `${20}`
    },
    {
      label: `${21}`,
      value: freq.a21 + `${21}`
    },
    {
      label: `${22}`,
      value: freq.a22 + `${22}`
    },
    {
      label: `${23}`,
      value: freq.a23 + `${23}`
    },
    {
      label: `${24}`,
      value: freq.a24 + `${24}`
    },
    {
      label: `${25}`,
      value: freq.a25 + `${25}`
    },
    {
      label: `${26}`,
      value: freq.a26 + `${26}`
    },
    {
      label: `${27}`,
      value: freq.a27 + `${27}`
    },
    {
      label: `${28}`,
      value: freq.a28 + `${28}`
    },
    {
      label: `${29}`,
      value: freq.a29 + `${29}`
    },
    {
      label: `${30}`,
      value: freq.a30 + `${30}`
    },
    {
      label: `${31}`,
      value: freq.a31 + `${31}`
    }
  ]
  options.value = aux
}

const handleFrequencia = async (id, mes) => {
  try {
    const result = await freq.getFreqByAluno(id)
    handldeOptions(result.id, mes)
  } catch (error) {
    console.log('Ocorreu um erro: frequencia: ' + error)
  }
}

const options = ref([])

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
    return {
      group: ref([''])
    }
  },
  created () {
    handleFrequencia(this.idAluno, this.idMes)
  },
  data () {
    const updateFrequencia = async (id) => {
      try {
        const res = await mes.upMes(id, options)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    return {
      updateFrequencia,
      options
    }
  }
})
</script>
