<template>
	<div>
		<Modal title="Слушай сюда ублюдок мать твою" ref="modal">
		
				<vue-typed-js :typeSpeed="40" :cursorChar="'_'" :strings="$ml.get('text')">
					<p class="typing"></p>
				</vue-typed-js>
		
		</Modal>
	</div>
</template>

<script>
import Modal from "./Modal.vue";
import store from "./../store";
import VueTypedJs from "vue-typed-js";

export default {
	name: "FirstPlay",
	components: { Modal },
	methods: {
		open: function () {
			this.$refs.modal.open();
		},
		close: function () {
			this.$refs.modal.close();
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
