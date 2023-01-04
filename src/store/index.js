import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/idb.js'
import core from '@/api/core.js'
import default_store from './default_store'

Vue.use(Vuex)

export default new Vuex.Store({
	state: default_store,
	mutations: {
		click: function (state) {
			state.counter_click += state.click;
		},
		auto_click: function (state) {
			state.counter_click += state.auto_click;
		},
		clear: function (state) {
			/* state.lang = 'russian';
			state.counter_click = 0;
			state.complited = [];
			state.progress.forEach(function(item, i, arr) {
			      state.progress[i].status = false;
			  }); */

			state.hotUpdate(default_store)
		},
		setProgress: function (state, data) {
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
				state.shop[index].count++;
			}
		},
		first_play: function (state) {
			state.first_play = false;
		}, 
		pre_raid: function (state) { //рассчёт всех показателей рейда перед началом битвы
			let ransom = Math.floor(state.counter_click * 0.2);

			state.raid.chance = core.getRandomInt(3, 8) / 10;
			state.raid.ransom = ransom;
			state.raid.winning = ransom;
			state.raid.loss = ransom * 2.5;
		},
		win: function (state) {
			
		},
		defeat: function (state) {
			state.counter_click -= state.raid.loss;
		},
		ransom: function (state) { //выкуп
			state.counter_click -= state.raid.ransom;
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
						resolve();
					})
				});
		},
		clearStorage: async function (context, data) {
			return await api.clearStorage().then(
				result => {});
		},
	},
	modules: {}
})