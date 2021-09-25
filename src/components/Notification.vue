<template>
	<div>
		<input class="alert-state" id="alert-2" v-model="open_notific" type="checkbox">
			<div class="alert dismissible" :class="'alert-' + alert">
				{{ message }}
				
		  </div>
	</div>
</template>

<script>
	export default {
		name: 'Notification',
		props: {
			alert: {
				type: String,
				default: 'primary'
			}
		},
		data() {
			return {
				open_notific: true,
				message: ''			
			}
		},
		methods: {
				/**	
				 * Принудительное закртие окна
				 */
				close: function () {
					this.open_notific = true;
				},
				/**
				 * Открытие уведомления
				 * @param {string} message - отображаемый текст сообщения
				 * @param {number} delay - время показа сообщения в миллисекундах
				 */
				open: function (message, delay = 3000) {
					this.message = message;
					this.open_notific = false;
					setTimeout(() => {
						this.open_notific = true;
					}, delay)
					
				},
		},
	}	
</script>

<style>
	.alert {
		z-index: 1111;
	}
</style>