<template>
	<div>
		<input type="number" placeholder="price" v-model="price">
		<input type="date" v-model="date">
		<button @click="addItem">登録</button>
		<div v-for="item in items" :key="item.id">{{ item.price }} / {{ item.date }}</div>
	</div>
</template>

<script>
export default {
	name: 'items',
	data () {
		return {
			price: '',
			date: '',
			idForItem: 0,
			items: []
		}
	},
	methods: {
		addItem() {
			this.items.push({
				id: this.idForItem,
				price: this.price,
				date: this.date,
			})
			this.price = ''
			this.date = ''
			this.idForItem++
		}
	}
}
</script>
