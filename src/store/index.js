import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/idb.js'
import default_store from './default_store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: default_store,
  mutations: {
    click: function(state) {
      state.counter_click += state.click;
    },
    auto_click: function(state) {
      state.counter_click += state.auto_click;
    },
    clear: function(state) {
      /* state.lang = 'russian';
      state.counter_click = 0;
      state.complited = [];
      state.progress.forEach(function(item, i, arr) {
            state.progress[i].status = false;
        }); */

        console.log(state)
        state.hotUpdate(default_store)
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
    buy: function (state, index) {
      let shop_item = state.shop[index];

      if (shop_item.cost <= state.counter_click) {
        state.counter_click -= shop_item.cost;
        state.auto_click += shop_item.award;
        state.shop[index].count ++;
      }
    },
    first_play: function (state) {
      state.first_play = false
	  console.log(state.first_play)
    }
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
