<template>
	<div class="">
		<input class="modal-state" id="modal-2" v-model="open_modal" type="checkbox">
		<div class="modal window">
  			<label class="modal-bg"></label>
  			<div class="modal-body">
				<label class="btn-close" @click="close">X</label>
				<h4 class="modal-title">{{ title }}</h4>

				<div class="modal-text">
					<slot></slot>
				</div>
  			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["title"],
		data() {
			return {
				open_modal: false
			}
		},
		methods: {
				close: function () {
					this.open_modal=false
				},
				open: function () {
					this.open_modal=true
				},
		},
		name: 'Modal'
	}
</script>

<style scoped>

.modal-body {

    width: 60%;
}

@media (max-width: 640px) {
    .modal-body {
        width: 100%;
        height: 100%;
        top: 0;
    }
    .dialog-form {
        height: 100%;
    }

    .nes-container.with-title.is-centered > .title {
        margin: -3.6rem auto 1rem;
    }
    .close-btn {
        width: 100px;
        position: absolute;
        bottom: 10px;
        left: 50%;
        margin: 0 -50px !important;
    }
}
</style>
