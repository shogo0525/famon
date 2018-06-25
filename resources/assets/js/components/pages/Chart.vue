<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import { Doughnut } from 'vue-chartjs'
export default {
  name: 'chart',
  extends: Doughnut,
  data () {
    return {
      labels: [],
      datasets: [
        {
          backgroundColor: ["red", "blue", "yellow"],
          data: []
        }
      ]
    } 
  },
  created() {
    this.getChart()
  },
  computed: {
		...mapGetters({
			getCategoryById: 'category/getCategoryById'
		})
	},
  methods: {
    getChart() {
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.auth.token}`
      axios.get('/items/chart')
        .then(response => {
          const charts = response.data
          charts.forEach(chart => {
            this.labels.push(this.getCategoryById(chart.category_id).name)
            this.datasets[0].data.push(chart.price)
          })
          this.renderChart({
            labels: this.labels,
            datasets: this.datasets
          })
        })
        .catch(error => console.log(error))
    }
  }
}
</script>