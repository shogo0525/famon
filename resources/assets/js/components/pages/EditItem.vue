<template>
	<div>
		<b-form @submit.prevent="editItem">
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

      <b-button type="submit" class="btn btn-warning btn-lg btn-block">更新</b-button>
    </b-form>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'edit-item',
	props: ["item"],
	computed: {
		...mapGetters({
			categories: 'category/categories'
		})
	},
	methods: {
		editItem() {
			this.$store.dispatch('item/editItem', this.item)
		}
	}
}
</script>
