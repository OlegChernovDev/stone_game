<template>
  <div id="app" class="paper">
        текущая цель
          <div class="progress margin-bottom">
              <div class="bar muted w-100"></div>
          </div>

          <button @click="click_btn">{{ $ml.get('click') }}</button>
<div class="control">
              <button @click="open">My</button>
              <button>Upgrade</button>
              <button>Settings</button>
          </div>

          <My ref="my"></My>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
import My from './components/My.vue'

import store from './store'
import api from '@/api/idb.js'
import { MLBuilder } from 'vue-multilanguage'

export default {
  name: 'App',
  data() {
      return {

      }
  },
  components: { Modal, My },
  methods: {
      click_btn: function () {

      },
      open: function () {
          this.$refs.my.open()
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
