<template>
	<div>
		<div v-for="item in items" :key="item.id">
			<!--日付: {{ item.date }}, 値段: {{ item.price }}, メモ: {{ item.note }}, Category ID: {{ getCategoryById(item.category_id).name }}-->
			日付: {{ item.date }}, 値段: {{ item.price }}, メモ: {{ item.note }}
		</div>
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
	}
}
</script>
