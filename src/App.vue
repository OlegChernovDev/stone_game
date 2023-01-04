<template>
	<div id="app" class="paper">
		<h2 style="text-align: center">
			<v-number
				:speed="100"
				v-model="$store.state.counter_click"
			></v-number>
		</h2>
		<transition name="fade">
			<span ref="click_text" id="click_text" v-show="seen"
				>+ {{ $store.state.click }}</span
			>
		</transition>

		<p style="text-align: center">+ {{ $store.state.auto_click }} в сек.</p>
		<button
			class="btn-block btn-secondary click"
			@click.prevent="click_btn"
		>
			{{ $ml.get("click") }}
		</button>
		<br /><br />

		<div class="row menu">
			<div class="col col-4">
				<button class="btn-block" @click="open_bonus">Бонус</button>
			</div>
			<div class="col col-4">
				<button class="btn-block" @click="open_shop">Магазин</button>
			</div>
			<div class="col col-4">
				<button class="btn-block" @click="open_settings">
					{{ $ml.get("settings") }}
				</button>
			</div>
		</div>

		<Bonus ref="bonus_modal"></Bonus>
		<Shop ref="shop_modal"></Shop>
		<Upgrade ref="upgrade_modal"></Upgrade>
		<Settings ref="settings_modal"></Settings>
		<FirstPlay ref="firstplay_modal"></FirstPlay>
	</div>
</template>

<script>
import Modal from "./components/Modal.vue";
import My from "./components/My.vue";

import Bonus from "./components/Bonus.vue";
import Shop from "./components/Shop.vue";

import Upgrade from "./components/Upgrade.vue";
import Settings from "./components/Settings.vue";

import FirstPlay from "./components/FirstPlay.vue";

import store from "./store";
import api from "@/api/idb.js";

import io from "socket.io-client";

import { MLBuilder } from "vue-multilanguage";
import { Howl, Howler } from "howler";
import { VNumber } from "@maxflex/v-number";

export default {
	name: "App",
	data() {
		return {
			sound_click: "",
			seen: false,
			socket: io("http://localhost:3000", {
				withCredentials: true,
				extraHeaders: {
					"my-custom-header": "abcd",
				},
			}),
		};
	},

	components: {
		Modal,
		My,
		Bonus,
		Shop,
		Upgrade,
		Settings,
		FirstPlay,
		VNumber,
	},
	methods: {
		test: function () {},
		click_btn: function (event) {
			this.seen = !this.seen;

			this.$refs.click_text.style.userSelect = "none";
			this.$refs.click_text.style.zIndex = "1234";
			this.$refs.click_text.style.position = "absolute";
			this.$refs.click_text.style.left = event.clientX + 15 + "px";
			this.$refs.click_text.style.top = event.clientY - 15 + "px";

			setTimeout(() => {
				this.seen = !this.seen;
			}, 200);

			this.sound_click.play(); //Play sound effect
			store.commit("click");

			this.check();

			console.log();
			return false;
			//store.dispatch('save');
		},
		open: function () {
			this.$refs.my_modal.open();
		},
		open_bonus: function () {
			this.$refs.bonus_modal.open();
		},
		open_shop: function () {
			this.$refs.shop_modal.open();
		},
		open_upgrade: function () {
			this.$refs.upgrade_modal.open();
		},
		open_settings: function () {
			this.$refs.settings_modal.open();
		},
		check: function () {
			let arr = store.state.progress;

			arr.forEach(function (item, i, arr) {
				if (item.condition == store.state.counter_click) {
					store.commit("setProgress", { i: i, status: true });
				}
			});
		},
	},
	mounted: function () {
		this.sound_click = new Howl({
			src: [require("./assets/click.wav")],
			html5: true,
		});

		store.dispatch("load").then(() => {
			this.$ml.change(store.state.lang);

			if (store.state.first_play == true) {
				//показ окна приветсвия при первом запуске
				store.commit("first_play");
				console.log(111);
				this.$refs.firstplay_modal.open();
			}
		});
	},
};

window.onload = () => {
	setInterval(function () {
		store.dispatch("save");
	}, 200);
	setInterval(function () {
		store.commit("auto_click");
	}, 1000);
};
</script>

<style>
@media (max-width: 640px) {
	.row {
		flex-flow: column !important;
	}
	.menu {
		width: 100% !important;
	}
	.col {
		margin: 10px !important;
		max-width: 100% !important;
		padding: 0px !important;
	}
}

#click_text {
	user-select: "none";
	z-index: "1234";
	position: "absolute";
}

.menu {
	width: 640px;
	bottom: 0;
	left: 0;
	/* padding: 10px; */
	position: fixed;
	right: 0;
	/* text-align: left; */
	/* z-index: 99;*/
}
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
	font-size: 0.9em;
}
.control > button {
	margin: 10px;
	flex-grow: 3;
}

.paper {
	padding: 0;
}

.click {
	height: 100px;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

/*
.bounce-enter-active {
  animation: bounce-in .8s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}*/
</style>
