<template>
	<div>
		<b-list-group>
			<b-list-group-item v-for="item in items" :key="item.id" v-b-modal.edit-item @click="editItem(item)"
												 href="#" class="flex-column align-items-start">
				
				<div class="d-flex w-100 justify-content-between">
					<h5 class="mb-1">{{ item.price | priceDelimiter }}</h5>
					<p>{{ getCategoryById(item.category_id).name }}</p>
					<small>{{ item.date }}</small>
				</div>
				<p class="mb-1">
						{{ item.note }}
				</p>
				<small>{{ item.note }}</small>
			</b-list-group-item>
		</b-list-group>

		<!-- Edit Item -->
		<b-modal id="edit-item" ref="editItemModal" centered hide-footer hide-header>
			<edit-item :item="editData"></edit-item>
			<hr>
			<b-btn class="mt-3" variant="outline-danger" block @click="hideEditItemModal">閉じる</b-btn>
		</b-modal>

		<!-- Add Item -->
		<b-btn v-b-modal.add-item class="add-item-btn" size="lg">+</b-btn>
		<b-modal id="add-item" ref="addItemModal" centered hide-footer hide-header>
			<add-item></add-item>
			<hr>
			<b-btn class="mt-3" variant="outline-danger" block @click="hideAddItemModal">閉じる</b-btn>
		</b-modal>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddItem from '@/components/pages/AddItem'
import EditItem from '@/components/pages/EditItem'
export default {
	name: 'items',
	components: { AddItem, EditItem },
	data () {
		return {
			price: '',
			date: '',
			note: '',
			category_id: null,
			editData: {}
		}
	},
	created() {
		this.$store.dispatch('item/getItems')
  },
	computed: {
		...mapGetters({
			items: 'item/items',
			getCategoryById: 'category/getCategoryById'
		})
	},
	methods: {
		hideAddItemModal() {
      this.$refs.addItemModal.hide()
    },
		hideEditItemModal() {
      this.$refs.editItemModal.hide()
    },
		editItem(item) {
			this.editData = item
		}
	}
}
</script>

<style scoped>
.add-item-btn {
	opacity: 0.8;
	width: 60px;
	height: 60px;
	background: #f9d506;
	border-radius: 50%;
	border: none;
	position: fixed;
	bottom: 60px;
	left: calc(50% - 30px);
	margin: 0 auto;
	z-index: 1;
}
</style>