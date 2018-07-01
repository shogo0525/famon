<template>
	<div>
		<b-form @submit.prevent="addItem">
      <b-form-group label="値段"
                    label-for="price">
        <b-form-input id="price"
                      type="number"
                      name="price"
                      v-model="item.price"
                      placeholder="値段">
        </b-form-input>
      </b-form-group>

      <b-form-group label="日付"
                    label-for="date">
        <b-form-input id="date"
                      type="date"
                      name="date"
                      v-model="item.date"
                      placeholder="日付">
        </b-form-input>
      </b-form-group>

			<b-form-group label="カテゴリ"
										label-for="category">
				<b-form-select v-model="item.category_id" class="mb-3">
					<option :value="null">カテゴリを選択</option>
					<option v-for="category in categories" :value="category.id">{{ category.name }}</option>
				</b-form-select>
			</b-form-group>

      <b-form-group label="メモ"
                    label-for="note">
        <b-form-textarea id="note"
                      	 name="note"
												 :rows="2"
												 :max-rows="2"
												 v-model="item.note"
												 placeholder="メモ">
        </b-form-textarea>
      </b-form-group>

      <b-button type="submit" class="btn btn-warning btn-lg btn-block">登録</b-button>
    </b-form>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddCategory from '@/components/pages/AddCategory'
export default {
	name: 'add-item',
	components: { AddCategory },
	data () {
		return {
			item: {
				price: '',
				date: '',
				note: '',
				category_id: null
			}
		}
	},
	created() {
		this.setToday()
	},
	computed: {
		...mapGetters({
			categories: 'category/categories'
		})
	},
	methods: {
		setToday() {
			const today = new Date()
			today.setDate(today.getDate())
			const year = today.getFullYear()
			const month = ("0" + (today.getMonth() + 1)).slice(-2)
			const day = ("0" + today.getDate()).slice(-2)
			this.item.date = `${year}-${month}-${day}`
		},
		addItem() {
			this.$store.dispatch('item/addItem', this.item)
			this.item.price = ''
			this.item.date = ''
			this.item.note = ''
			this.item.category_id = null
		}
	}
}
</script>
