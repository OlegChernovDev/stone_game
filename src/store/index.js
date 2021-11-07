import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/idb.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      lang: 'russian', //english
      counter_click: 0,
      complited: [],
      progress: [
        {
          id: 0,
          text: 'набрать 10 кликов',
          condition: 10,
          status: false
        },
        {
          id: 1,
          text: 'набрать 15 кликов',
          condition: 15,
          status: false
        },
        {
          id: 2,
          text: 'набрать 20 кликов',
          condition: 20,
          status: false
        }
      ]
  },
  mutations: {
    click: function(state) {
      state.counter_click++;
    },
    clear: function(state) {
      state.lang = 'russian';
      state.counter_click = 0;
      state.complited = [];
      state.progress.forEach(function(item, i, arr) {
            state.progress[i].status = false;
        });
    },
    setProgress: function(state, data) {
      state.progress[data.i].status = data.status;
    },
    change_lang: (state, data) => {
        state.lang = data;
    },
    setState: function (state, data) {
        this.replaceState(data);
    },
  },
  actions: {
  save: async function (context, data) {
    return await api.save(context.state);
  },
  load: async function (context) {
    await api.load().then(
      result => {
        context.commit('setState', result);
         return new Promise((resolve, reject) => {
           resolve()
         })
      });
  },
  clearStorage: async function (context, data) {
    return await api.clearStorage().then(
      result => {
      });
  },
  },
  modules: {
  }
})
