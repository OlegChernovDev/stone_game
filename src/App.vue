<template>
  <div id="app" class="paper">
        текущая цель
          <div class="progress margin-bottom">
              <div class="bar muted w-100"></div>
          </div>

          <button @click="click_btn">{{ $ml.get('click') }}</button>
          <div class="control">
              <button @click="open">My</button>
              <button @click="open_upgrade">Upgrade</button>
              <button @click="open_n1">Settings</button>
          </div>

          <My ref="my_modal"></My>
          <Upgrade ref="upgrade_modal"></Upgrade>
        </div>
</template>

<script>
import Modal from './components/Modal.vue'

import My from './components/My.vue'
import Upgrade from './components/Upgrade.vue'

import store from './store'
import api from '@/api/idb.js'
import { MLBuilder } from 'vue-multilanguage'

export default {
  name: 'App',
  data() {
      return {

      }
  },
  components: { Modal, My, Upgrade },
  methods: {
      click_btn: function () {

      },
      open: function () {
          this.$refs.my_modal.open()
      },
      open_upgrade: function() {
        this.$refs.upgrade_modal.open()
      },
      open_n1: function() {
        this.$refs.n1.open('test message 2')
      }
  },
  mounted: function () {
    /*store.dispatch('load').then(() => {
        this.$ml.change(store.state.lang);

    });*/
}
}

window.onload = () => {

    setInterval(function() {
        //store.dispatch('save');
    }, 200);

}
</script>

<style>
.control {
    width: 100%;
    display: flex;
    flex-direction: row;
}
.control > button {
    margin: 10px;
    flex-grow: 3;
}
.paper {
    padding: 0;
}
</style>
