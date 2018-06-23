<template>
	<div>
		<input type="number" placeholder="price" v-model="price">
		<input type="date" v-model="date">
		<select v-model="category_id">
			<option disabled value="">カテゴリを選択</option>
			<option v-for="category in categories" :value="category.id">{{ category.name }}</option>
		</select>
		<button @click="addItem">登録</button>
		
		<hr>

		<h2>Items</h2>
		<div v-for="item in items" :key="item.id">日付: {{ item.date }}, 値段: {{ item.price }}, メモ: {{ item.note }}, Category ID: {{ item.category_id }}</div>
	</div>
</template>

<script>
export default {
	name: 'items',
	data () {
		return {
			price: '',
			date: '',
			note: '',
			category_id: null
		}
	},
	created() {
		this.$store.dispatch('getItems')
		this.$store.dispatch('getCategories')
	},
	computed: {
		items() {
			return this.$store.getters.items
		},
		categories() {
			return this.$store.getters.categories
		}
	},
	methods: {
		addItem() {
			this.$store.dispatch('addItem', {
				date: this.date,
				price: this.price,
				category_id: this.category_id
			})
			this.price = ''
			this.date = ''
			this.note = ''
			this.category_id = null
		}
	}
}
</script>
