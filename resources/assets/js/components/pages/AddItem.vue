<template>
	<div>
		<b-form @submit.prevent="addItem">
      <b-form-group label="値段"
                    label-for="price">
        <b-form-input id="price"
                      type="number"
                      name="price"
                      v-model="price"
                      placeholder="値段">

        </b-form-input>
      </b-form-group>

      <b-form-group label="日付"
                    label-for="date">
        <b-form-input id="date"
                      type="date"
                      name="date"
                      v-model="date"
                      placeholder="日付">

        </b-form-input>
      </b-form-group>

			<b-form-group label="カテゴリ"
										label-for="category">
				<b-form-select v-model="category_id" class="mb-3">
					<option :value="null">カテゴリを選択</option>
					<option v-for="category in categories" :value="category.id">{{ category.name }}</option>
				</b-form-select>
			</b-form-group>

      <b-button type="submit" class="btn btn-warning btn-lg btn-block">登録</b-button>
    </b-form>
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
