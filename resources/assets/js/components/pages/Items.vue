<template>
	<div>
			<!-- Category ID: {{ getCategoryById(item.category_id).name }}-->

		<b-list-group>
			<b-list-group-item v-for="item in items" :key="item.id"
												 href="#" class="flex-column align-items-start">
				
				<div class="d-flex w-100 justify-content-between">
					<h5 class="mb-1">{{ item.price | priceDelimiter }}</h5>
					<small>{{ item.date }}</small>
				</div>
				<p class="mb-1">
						{{ item.note }}
				</p>
				<small>{{ item.note }}</small>
			</b-list-group-item>
		</b-list-group>

		<b-btn v-b-modal.addItem>+</b-btn>

		<b-modal id="addItem">
			<add-item></add-item>
		</b-modal>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddItem from '@/components/pages/AddItem'
export default {
	name: 'items',
	components: { AddItem },
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
