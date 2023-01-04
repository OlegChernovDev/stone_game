<template>
	<div>
		<Modal :title="$ml.get('bonus')" ref="modal">
			<div class="block row">
				<div class="col-9 col">
					<h5>{{ $ml.get("watch_ad") }}</h5>
					<p>
						+ {{ rewardCoins }}
						монет
					</p>
				</div>
				<div class="col-3 col">
					<button class="btn-block" @click="reward_video">
						{{ $ml.get("watch") }}
					</button>
				</div>
			</div>
			<!--<div class="block row">
				<div class="col-9 col">
					<h5>Купить</h5>
					<p>+100000 монетам</p>
				</div>
				<div class="col-3 col">
					<button class="btn-block">45,00Р</button>
				</div>
			</div>-->
			<!-- <div class="block row">
				<div class="col-9 col">
					<h5>Оффлайн добыча +100%</h5>
				</div>
				<div class="col-3 col">
					<button class="btn-block">100,00Р</button>
				</div>
			</div>-->
		</Modal>
	</div>
</template>

<script>
import Modal from "./Modal.vue";
import store from ".././store";

export default {
	name: "Bonus",
	components: { Modal },
	methods: {
		open: function () {
			this.$refs.modal.open();
		},
		close: function () {
			this.$refs.modal.close();
		},
		reward_video: function () {
			ysdkG.adv.showRewardedVideo({
				callbacks: {
					onOpen: () => {
						console.log("Video ad open.");
					},
					onRewarded: () => {
						console.log("Rewarded!");
					},
					onClose: () => {
						console.log("Video ad closed.");
					},
					onError: (e) => {
						console.log("Error while open video ad:", e);
					},
				},
			});
		},
	},
    computed: {
        rewardCoins() {
            return store.state.ad.reward_video * store.state.auto_click
        }
    }
};
</script>

<style scoped>
@media (max-width: 640px) {
	.progress-list {
		max-height: 400px;
	}
}
</style>
