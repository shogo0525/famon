<template>
	<div>
		<input type="number" placeholder="price" v-model="price">
		<input type="date" v-model="date">
		<button @click="addItem">登録</button>
		<div v-for="item in items" :key="item.id">日付: {{ item.date }}, 値段: {{ item.price }}, メモ: {{ item.note }}</div>
	</div>
</template>

<script>
export default {
	name: 'items',
	data () {
		return {
			price: '',
			date: ''
		}
	},
	created() {
		this.$store.dispatch('getItems')
	},
	computed: {
		items() {
			return this.$store.getters.items
		}
	},
	methods: {
		addItem() {
			this.$store.dispatch('addItem', {
				date: this.date,
				price: this.price,
			})
			this.price = ''
			this.date = ''
			this.idForItem++
		}
	}
}
</script>
