<template>
	<div>
		<b-form @submit.prevent="addCategory">
      <b-form-group label="カテゴリ名"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      name="name"
                      v-model="category.name"
                      placeholder="カテゴリ名">

        </b-form-input>
      </b-form-group>
      <b-button type="submit" class="btn btn-warning btn-lg btn-block">登録</b-button>
    </b-form>
	</div>
</template>

<script>
export default {
	name: 'add-category',
	data () {
		return {
			category: {
				name: '',
			}
		}
	},
	methods: {
		addCategory() {
			this.$store.dispatch('category/addCategory', this.category)
			this.category.name = ''
		}
	}
}
</script>
