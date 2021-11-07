<template>
	<div>
		<Modal title="Достижения" ref="modal">

			<div class="progress-list">
				<div v-for="item in $store.state.progress" v-if="item.status" class="alert alert-primary">{{ item.text }}</div><hr>
			</div>

			<Notification ref="primary" alert="primary"></Notification>
        	<Notification ref="warning" alert="warning"></Notification>
        	<Notification ref="danger" alert="danger"></Notification>
			
			<button @click="open_primary">Primary</button>
            <button @click="open_warning">Warning</button>
            <button @click="open_danger">Danger</button>
		</Modal>
    </div>
</template>

<script>
	import Notification from './Notification.vue'

	import Modal from './Modal.vue'
	import store from '.././store'

	export default {
		name: 'Progress',
		components: { Modal, Notification },
		methods: {
			open_primary: function() {
				this.$refs.primary.open('Primary test', 3000000);
			},
			open_warning: function() {
				this.$refs.warning.open('Primary test', 3000);
			},
			open_danger: function() {
				this.$refs.danger.open('Primary test', 3000);
			},
			open: function () {
				this.$refs.modal.open()
			},
			close: function () {
				this.$refs.modal.close()
			}
		}
	}
</script>

<style scoped>
@media (max-width: 640px) {
	.progress-list {
		max-height: 400px;
	}
}
</style>
