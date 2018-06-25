<script>
import axios from 'axios'
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
    axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.auth.token}`
    axios.get('/items/chart')
      .then(response => {
        const charts = response.data
        console.log(charts)
        charts.forEach(chart => {
          this.labels.push(chart.category_id)
          this.datasets[0].data.push(chart.price)
        })
        this.renderChart({
          labels: this.labels,
          datasets: this.datasets
        })
      })
      .catch(error => console.log(error))
    
  },
  mounted () {
  }
}
</script>