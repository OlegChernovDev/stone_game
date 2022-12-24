import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/idb.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      lang: 'russian', //english
      counter_click: 11,
      auto_click: 0,
      time: 0,
      complited: [],
      shop: [
        {
          title: 'Title 1',
          cost: 10,
          award: 1,
          count: 0
        },
        {
          title: 'Title 2',
          cost: 100,
          award: 1,
          count: 0
        },
        {
          title: 'Title 3',
          cost: 1000,
          award: 1,
          count: 0
        },
        {
          title: 'Title 4',
          cost: 10000,
          award: 1,
          count: 0
        },
        {
          title: 'Title 5',
          cost: 100000,
          award: 1,
          count: 0
        },
        {
          title: 'Title 6',
          cost: 1000000,
          award: 1,
          count: 0
        },
        {
          title: 'Title 7',
          cost: 10000000,
          award: 1,
          count: 0
        },
        {
          title: 'Title 8',
          cost: 100000000,
          award: 100,
          count: 0
        },
      ],
      progress: [
        {
          id: 0,
          text: 'набрать 10 монет',
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
      ], 
      ad: {
        reward_video: 1000
      }
  },
  mutations: {
    click: function(state) {
      state.counter_click++;
    },
    auto_click: function(state) {
      state.counter_click += state.auto_click;
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
    buy: function (state, index) {
      let shop_item = state.shop[index];

      if (shop_item.cost <= state.counter_click) {
        state.counter_click -= shop_item.cost;
        state.auto_click += shop_item.award;
        state.shop[index].count ++;
      }
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
