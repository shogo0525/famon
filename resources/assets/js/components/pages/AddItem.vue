<template>
	<div>
		<input type="number" placeholder="price" v-model="price">
		<input type="date" v-model="date">
		<select v-model="category_id">
			<option disabled value="">カテゴリを選択</option>
			<option v-for="category in categories" :value="category.id">{{ category.name }}</option>
		</select>
		<button @click="addItem">登録</button>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
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
		this.$store.dispatch('item/getItems')
		this.$store.dispatch('category/getCategories')
	},
	computed: {
		...mapGetters({
			items: 'item/items',
			categories: 'category/categories',
			getCategoryById: 'category/getCategoryById'
		})
	},
	methods: {
		addItem() {
			this.$store.dispatch('item/addItem', {
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
