<template>
	<div>
		<Modal title="Me" ref="modal">hello hello</Modal>
    </div>
</template>

<script>

	import Modal from './Modal.vue'

	export default {
		name: 'My',
		components: { Modal },
		methods: {
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
