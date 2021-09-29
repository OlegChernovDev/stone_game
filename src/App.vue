<template>
  <div id="app" class="paper">
        текущее значение кликов: 

        <v-number :speed="100" v-model="someNumber"></v-number>
          <div class="progress margin-bottom">
              <div class="bar muted" :class="'w-'+someNumber"></div>
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
import {Howl, Howler} from 'howler';
import { VNumber } from "@maxflex/v-number";

export default {
  name: 'App',
  data() {
      return {
        sound_click: '',
        someNumber: 0
      }
  },
  components: { Modal, My, Upgrade, VNumber },
  methods: {
      click_btn: function () {
        this.sound_click.play();  //Play sound effect
        this.someNumber++;
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
    this.sound_click = new Howl({
      src: [require('./assets/click.wav')],
      html5: true
    });

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
