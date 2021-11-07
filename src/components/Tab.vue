<template>
	<div>
        <div class="tab" :class="{ 'show': active, 'camouflage': !active }">
        	<button @click.prevent="active = false">Back</button>
        	<slot></slot>
        </div>
	</div>
</template>

<script>
	export default {
		name: 'Notification',
		props: {
			currentTab: {
				type: String,
				default: 'primary'
			},
			nameTab: {
				type: String,
				default: 'primary'
			}
		},
		data() {
			return {
				active: false		
			}
		},
		methods: {
			show: function() {
				this.active = true
				console.log(this.active)
			}
		},
	}	
</script>

<style>
.camouflage {
	display: none;
}

.show {
	display: block;
}

.tab {
    position: absolute;
    background: white;
    width: inherit;
    height: 100%;
    z-index:999;
}
</style>