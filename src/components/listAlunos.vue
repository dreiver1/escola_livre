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
import { api } from 'src/boot/axios'
import { updateMes } from 'src/services/mes'

let frequencia = []

const handldeOptions = (mes) => {
  console.log(mes)
  const aux = [
    {
      label: '01',
      value: mes[0].a02 + `${1}`
    },
    {
      label: '02',
      value: mes[0].a02 + `${2}`
    },
    {
      label: '03',
      value: mes[0].a03 + `${3}`
    },
    {
      label: '04',
      value: mes[0].a04 + `${4}`
    },
    {
      label: '05',
      value: mes[0].a05 + `${5}`
    },
    {
      label: '06',
      value: mes[0].a06 + `${6}`
    },
    {
      label: '07',
      value: mes[0].a07 + `${7}`
    },
    {
      label: '08',
      value: mes[0].a08 + `${8}`
    },
    {
      label: '09',
      value: mes[0].a09 + `${9}`
    },
    {
      label: `${10}`,
      value: mes[0].a10 + `${10}`
    },
    {
      label: `${11}`,
      value: mes[0].a11 + `${11}`
    },
    {
      label: `${12}`,
      value: mes[0].a12 + `${12}`
    },
    {
      label: `${13}`,
      value: mes[0].a13 + `${13}`
    },
    {
      label: `${14}`,
      value: mes[0].a14 + `${14}`
    },
    {
      label: `${15}`,
      value: mes[0].a15 + `${15}`
    },
    {
      label: `${16}`,
      value: mes[0].a16 + `${16}`
    },
    {
      label: `${17}`,
      value: mes[0].a17 + `${17}`
    },
    {
      label: `${18}`,
      value: mes[0].a18 + `${18}`
    },
    {
      label: `${19}`,
      value: mes[0].a19 + `${19}`
    },
    {
      label: `${20}`,
      value: mes[0].a20 + `${20}`
    },
    {
      label: `${21}`,
      value: mes[0].a21 + `${21}`
    },
    {
      label: `${22}`,
      value: mes[0].a22 + `${22}`
    },
    {
      label: `${23}`,
      value: mes[0].a23 + `${23}`
    },
    {
      label: `${24}`,
      value: mes[0].a24 + `${24}`
    },
    {
      label: `${25}`,
      value: mes[0].a25 + `${25}`
    },
    {
      label: `${26}`,
      value: mes[0].a26 + `${26}`
    },
    {
      label: `${27}`,
      value: mes[0].a27 + `${27}`
    },
    {
      label: `${28}`,
      value: mes[0].a28 + `${28}`
    },
    {
      label: `${29}`,
      value: mes[0].a29 + `${29}`
    },
    {
      label: `${30}`,
      value: mes[0].a30 + `${30}`
    },
    {
      label: `${31}`,
      value: mes[0].a31 + `${31}`
    }
  ]
  options = aux
}

const handleFrequencia = async (id) => {
  try {
    const result = await api.get('frequencia/turma/' + id)
    console.log(result)
    frequencia = result.data
    console.log(frequencia + 'frequencia')
    handldeOptions(frequencia)
  } catch (error) {
    console.log('Ocorreu um erro: frequencia: ' + error)
  }
}

let options = [
  {
    label: 'frequencia[2].a01',
    value: 'frequenci + '
  }
]

// for (let i = 0; i < frequencia[2].length; i++) {
//   options[i].label = `${i + 1}`
// }

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
    }
  },
  setup () {
    return {
      group: ref([''])
    }
  },
  created () {
    handleFrequencia(this.turmaId)
    console.log(frequencia)
  },
  data () {
    const updateFrequencia = async (id) => {
      try {
        const mes = await updateMes(id, options)
        console.log(mes)
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
