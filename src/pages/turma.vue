<template>
    <q-page class="row-reverse justify-center">
      <q-tabs
        v-model="tab"
        inline-label
        class="bg-primary text-white shadow-2"
      >
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
        <q-tab name="photos" icon="photo" label="Photos" />
        <q-tab name="videos" icon="slow_motion_video" label="Videos" />
        <q-tab name="addressbook" icon="people" label="Address Book" />
      </q-tabs>
      <TurmaTable />
    </q-page>
  </template>
<script>
import TurmaTable from 'src/components/TurmaTable.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'turmaPage',
  components: {
    TurmaTable
  },
  data () {
    return {}
  }
})
</script>
