<template>
	<div>


		<Modal title="Upgrade" ref="modal">
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

	export default {
		name: 'Upgrade',
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

</style>
