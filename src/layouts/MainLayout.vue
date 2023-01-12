<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          School Management
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Turmas',
    caption: 'Sair do aplicativo',
    icon: 'class',
    link: 'me'
  },
  {
    title: 'Atividades',
    caption: 'Sair do aplicativo',
    icon: 'assignment',
    link: 'me'
  },
  {
    title: 'Alunos',
    caption: 'Sair do aplicativo',
    icon: 'perm_identity',
    link: 'me'
  },
  {
    title: 'Configurações',
    caption: 'Sair do aplicativo',
    icon: 'manage_accounts',
    link: 'me'
  },
  {
    title: 'Logout',
    caption: 'Sair do aplicativo',
    icon: 'logout',
    link: 'loginPage'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
