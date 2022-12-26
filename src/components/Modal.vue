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

<style >

.modal-body {
    width: 60%;
}

.modal-text {
    overflow: auto;
    max-height: 70vh;
}

.block {
        border-bottom-left-radius: 15px 255px !important;
        border-bottom-right-radius: 225px 15px !important;
        border-top-left-radius: 255px 15px !important;
        border-top-right-radius: 15px 225px !important;
        transition: all 235ms ease 0s !important;
        box-shadow: 15px 28px 25px -18px rgb(0 0 0 / 20%) !important;
        transition: all 235ms ease-in-out 0s !important;
        color: #41403e !important;
        color: var(--primary);
        border-color: #41403e;
        border-color: var(--primary);
        background-color: #41403e;
        background-color: var(--main-background);
        align-self: center;
        background-image: none;
        border-style: solid !important;
        border-width: 2px;
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
