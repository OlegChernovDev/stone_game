<template>
	<div>
		<Modal :title="$ml.get('shop')" ref="modal">
			<p>
				монеты: {{ $store.state.counter_click }} - {{ $ml.get("per_sec") }} : {{ $store.state.auto_click }}
			</p>
			<div
				class="block row"
				v-for="(item, index) in $store.state.shop"
				:key="index"
			>
				<div class="col-8 col">
					<h5 v-if="index == 0">{{ item.title }}</h5>
					<h5 v-else-if="$store.state.shop[index - 1].count == 0">
						?????
					</h5>
					<h5 v-else>{{ item.title }}</h5>

					<p v-if="index == 0">+{{ item.award }} {{ $ml.get("per_sec") }}</p>
					<p v-else-if="$store.state.shop[index - 1].count == 0">
						+??? {{ $ml.get("per_sec") }}
					</p>
					<p v-else>+{{ item.award }} {{ $ml.get("per_sec") }}</p>
					<p>{{ $ml.get("in_total") }} {{ item.count }}</p>
				</div>
				<div class="col-4 col">
					<button
						class="btn-block"
						v-if="index == 0"
						@click="buy(index)"
					>
						{{ item.cost }}
					</button>
					<button
						class="btn-block disabled"
						v-else-if="$store.state.shop[index - 1].count == 0"
					>
						???
					</button>
					<button
						class="btn-block disabled"
						v-else-if="item.cost > $store.state.counter_click"
					>
						{{ item.cost }}
					</button>
					<button class="btn-block" v-else @click="buy(index)">
						{{ item.cost }}
					</button>
				</div>
			</div>
		</Modal>
	</div>
</template>

<script>
import Modal from "./Modal.vue";
import store from ".././store";

export default {
	name: "Shop",
	components: { Modal },
	methods: {
		open: function () {
			this.$refs.modal.open();
		},
		close: function () {
			this.$refs.modal.close();
		},
		buy: function (index) {
			store.commit("buy", index);
		},
	},
};
</script>

<style scoped>
@media (max-width: 640px) {
	.progress-list {
		max-height: 400px;
	}
}
</style>
