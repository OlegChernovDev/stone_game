<template>
	<div>
		<Modal :title="$ml.get('settings')" ref="modal">	
			<button type="button" @click="clear">Clear</button>
			<button type="button" @click="change_lang">{{ $ml.get('change_lang') }}</button>
		</Modal>
    </div>
</template>

<script>
	import Modal from './Modal.vue'
	import store from './../store'
	import default_store from '../store/default_store'

	export default {
		name: 'Settngs',
		components: { Modal },
		methods: {
			open: function () {
				this.$refs.modal.open()
			},
			close: function () {
				this.$refs.modal.close()
			},
	        change_lang: function () {
	            if (this.$ml.current == 'russian') {
	                this.$ml.change('english')
	                store.commit('change_lang', 'english');
	            } else {
	                this.$ml.change('russian')
	                store.commit('change_lang', 'russian');
	            }
	        },
	        clear: function() {
				store.replaceState(default_store)
	        	//store.commit('clear');
            	store.dispatch('save');
	        },
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
