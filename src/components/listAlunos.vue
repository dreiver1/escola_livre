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
export default defineComponent({
  name: 'listAlunos',
  props: {
    IdAluno: {
      String
    }
  },
  setup () {
    return {
      group: ref(['']),

      options: [
        {
          label: '01',
          value: 'op01'
        },
        {
          label: '02',
          value: 'op02'
        },
        {
          label: '03',
          value: 'op03'
        },
        {
          label: '04',
          value: 'op04'
        },
        {
          label: '05',
          value: 'op05'
        },
        {
          label: '06',
          value: 'op06'
        },
        {
          label: '07',
          value: 'op07'
        },
        {
          label: '08',
          value: 'op08'
        },
        {
          label: '09',
          value: 'op09'
        },
        {
          label: '10',
          value: 'op10'
        },
        {
          label: '11',
          value: 'op11'
        },
        {
          label: '12',
          value: 'op12'
        },
        {
          label: '13',
          value: 'op13'
        },
        {
          label: '14',
          value: 'op14'
        },
        {
          label: '15',
          value: 'op15'
        },
        {
          label: '16',
          value: 'op16'
        },
        {
          label: '17',
          value: 'op17'
        },
        {
          label: '18',
          value: 'op18'
        },
        {
          label: '19',
          value: 'op19'
        },
        {
          label: '20',
          value: 'op20'
        },
        {
          label: '21',
          value: 'op21'
        },
        {
          label: '22',
          value: 'op22'
        },
        {
          label: '23',
          value: 'op23'
        },
        {
          label: '24',
          value: 'op24'
        },
        {
          label: '25',
          value: 'op25'
        },
        {
          label: '26',
          value: 'op26'
        },
        {
          label: '27',
          value: 'op27'
        },
        {
          label: '28',
          value: 'op28'
        },
        {
          label: '29',
          value: 'op29'
        },
        {
          label: '30',
          value: 'op30'
        },
        {
          label: '31',
          value: 'op31'
        }
      ]
    }
  }
})
</script>
