<template>
    <div id="app" class="paper">
        <h2 style="text-align:center;"><v-number  :speed="100" v-model="$store.state.counter_click"></v-number></h2>
        <button class="btn-block btn-secondary" @click.prevent="click_btn">{{ $ml.get('click') }}</button>
        <br><br>
        <button class="btn-block" @click="open_upgrade">{{ $ml.get('progress') }}</button>
        <button class="btn-block" @click="open_settings">{{ $ml.get('settings') }}</button>
        <button class="btn-block" @click="test">TEST</button>
        <Upgrade ref="upgrade_modal"></Upgrade>
        <Settings ref="settings_modal"></Settings>
    </div>
</template>

<script>
import Modal from './components/Modal.vue'
import My from './components/My.vue'
import Upgrade from './components/Upgrade.vue'
import Settings from './components/Settings.vue'

import store from './store'
import api from '@/api/idb.js'

import io from 'socket.io-client';

import { MLBuilder } from 'vue-multilanguage'
import {Howl, Howler} from 'howler';
import { VNumber } from "@maxflex/v-number";

export default {
  name: 'App',
  data() {
      return {
        sound_click: '',
        socket: io('http://localhost:3000', {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
}),
      }
  },

  components: { Modal, My, Upgrade, Settings, VNumber },
  methods: {
    test: function() {
      this.socket.emit('sendUpdateUsers', 'asda')
    },
      click_btn: function () {
        this.sound_click.play();  //Play sound effect
        store.commit('click')
        this.check();
        return false;
        store.dispatch('save');
      },
      open: function () {
          this.$refs.my_modal.open()
      },
      open_upgrade: function() {
        this.$refs.upgrade_modal.open()
      },
        open_settings: function() {
        this.$refs.settings_modal.open()
      },
      check: function() {
        let arr = store.state.progress;
        console.log(store.state.counter_click)
        arr.forEach(function(item, i, arr) {
            if(item.condition == store.state.counter_click){
                store.commit('setProgress', {i: i, status: true})
            }
        })
      }
  },
  mounted: function () {
    this.sound_click = new Howl({
      src: [require('./assets/click.wav')],
      html5: true
    });

    store.dispatch('load').then(() => {
        this.$ml.change(store.state.lang);
    });
}
}

window.onload = () => {
    setInterval(function() {
        store.dispatch('save');
    }, 200);
}
</script>

<style>

.control {
    width: 100%;
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 50%;
    width: 640px;
    background: white;
    z-index: 10;
    margin: 0 -320px;
    padding: 10px;
    font-size: .9em;
}
.control > button {
    margin: 10px;
    flex-grow: 3;
}


.paper {
    padding: 0;
}
</style>
