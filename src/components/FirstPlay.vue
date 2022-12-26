<template>
	<div>
		<Modal title="Слушай сюда ублюдок мать твою" ref="modal">
		
				<vue-typed-js :typeSpeed="40" :cursorChar="'_'" :strings="text">
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
    data() {
		return {
            text: [
                'Вы играете за робота, который был создан, чтобы управлять базой данный на межпланетной станции. Ваша задача- кликать на экран, чтобы увеличивать количество собираемых данных в базе. Чем больше число, тем больше ресурсов вы можете собрать.'
            ]
        }
    },
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
