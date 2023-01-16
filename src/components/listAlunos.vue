<template>
  <q-item>
    <q-list dense bordered padding class="rounded-borders" style="padding: 0px; margin: 0px;">
      <q-item clickable v-ripple>
        <q-item-section style="padding: 0px;">
          <q-form>
          <div class="flex flex-center" style="padding: 0px;">
            <div class="text-h6" style="padding: 10px;"> Nome do aluno </div>
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

let frequencia = [{ a01: true }]

const handldeOptions = (frequencia) => {
  const aux = [
    {
      label: `${1}`,
      value: frequencia[1].a01
    },
    {
      label: `${2}`,
      value: frequencia[1].a02
    },
    {
      label: `${3}`,
      value: frequencia[1].a03
    },
    {
      label: `${4}`,
      value: frequencia[1].a04
    },
    {
      label: `${5}`,
      value: frequencia[1].a05
    },
    {
      label: `${6}`,
      value: frequencia[1].a06
    },
    {
      label: `${7}`,
      value: frequencia[1].a07
    },
    {
      label: `${8}`,
      value: frequencia[1].a08
    },
    {
      label: `${9}`,
      value: frequencia[1].a09
    },
    {
      label: `${10}`,
      value: frequencia[1].a10
    },
    {
      label: `${11}`,
      value: frequencia[1].a11
    },
    {
      label: `${12}`,
      value: frequencia[1].a12
    },
    {
      label: `${13}`,
      value: frequencia[1].a13
    },
    {
      label: `${14}`,
      value: frequencia[1].a14
    },
    {
      label: `${15}`,
      value: frequencia[1].a15
    },
    {
      label: `${16}`,
      value: frequencia[1].a16
    },
    {
      label: `${17}`,
      value: frequencia[1].a17
    },
    {
      label: `${18}`,
      value: frequencia[1].a18
    },
    {
      label: `${19}`,
      value: frequencia[1].a19
    },
    {
      label: `${20}`,
      value: frequencia[1].a20
    },
    {
      label: `${21}`,
      value: frequencia[1].a21
    },
    {
      label: `${22}`,
      value: frequencia[1].a22
    },
    {
      label: `${23}`,
      value: frequencia[1].a23
    },
    {
      label: `${24}`,
      value: frequencia[1].a24
    },
    {
      label: `${25}`,
      value: frequencia[1].a25
    },
    {
      label: `${26}`,
      value: frequencia[1].a26
    },
    {
      label: `${27}`,
      value: frequencia[1].a27
    },
    {
      label: `${28}`,
      value: frequencia[1].a28
    },
    {
      label: `${29}`,
      value: frequencia[1].a29
    },
    {
      label: `${30}`,
      value: frequencia[1].a30
    },
    {
      label: `${31}`,
      value: frequencia[1].a31
    }
  ]
  options = aux
  console.log(frequencia[1].a01)
}
const handleFrequencia = async (id) => {
  try {
    console.log(id)
    const result = await api.get('mes/frequencia/' + id)
    frequencia = result.data
    handldeOptions(frequencia)
  } catch (error) {
    console.log('Ocorreu um erro: ' + error)
  }
}

let options = [
  {
    label: 'frequencia[1].a01',
    value: 'frequencia[1].a01'
  }
]

// for (let i = 0; i < frequencia[1].length; i++) {
//   options[i].label = `${i + 1}`
// }

export default defineComponent({
  name: 'listAlunos',
  props: {
    alunosIdAluno: {
      String
    },
    id: {
      String
    },
    turmaId: {
      String
    }
  },
  setup () {
    return {
      group: ref([''])
    }
  },
  created () {
    handleFrequencia(this.id)
    console.log(frequencia)
  },
  data () {
    return {
      options
    }
  }
})
</script>
