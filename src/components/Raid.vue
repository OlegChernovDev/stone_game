<template>
	<div>
		<Modal title="Рейд" ref="modal">
			<div class="progress margin-bottom">
				<div :class="`bar striped ${style_progress} w-${timer}`"></div>
			</div>

			<p>Цена откупа {{ $store.state.raid.ransom }}</p>
			<p>Шанс на победу {{ $store.state.raid.chance * 100 }} %</p>
			<p>При победе {{ $store.state.raid.winning }}</p>
			<p>При проигрыше {{ $store.state.raid.loss }}</p>

			<button @click="battle">Сражаться</button>
			<button @click="ransom">Заплатить выкуп</button>
		</Modal>
	</div>
</template>

<script>
import Modal from "./Modal.vue";
import store from "./../store";

export default {
	name: "Raid",
	data() {
		return {
			timer: 100,
            result: '', //win|defeat|ransom
            style_progress: 'success'
		};
	},
	components: { Modal },
	methods: {
		startTimer: function () {
            let timer = setInterval(() => {
                this.timer -= 1;

                if (this.timer == 1) {
                    this.result = 'defeat';
                }

                if (this.timer >= 60) {
                    this.style_progress = 'success'
                } else if (this.timer <= 60 && this.timer >= 30) {
                    this.style_progress = 'warning'
                } else {
                    this.style_progress = 'danger'
                }
            },100)

            setTimeout(() => {
                switch (this.result) {
                    case "ransom":
                        this.result = '';
                        this.timer = 100;
                        clearInterval(timer);
                    break;
                    case "defeat":
                        store.commit('defeat');

                        this.close();
                        this.result = '';
                        this.timer = 100;
                        clearInterval(timer);
                    break;
                }
            }, 10000)
        },

        battle: function () {

        },
        ransom: function () {
            store.commit('ransom');
            this.close();
            this.result = 'ransom';
        },

		open: function () {
			this.$refs.modal.open();
            this.startTimer();
		},
		close: function () {
			this.$refs.modal.close();
		},
	},
};
</script>

<style scoped>
</style>
