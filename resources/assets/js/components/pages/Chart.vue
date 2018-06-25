<script>
import { Doughnut } from 'vue-chartjs'
export default {
  name: 'chart',
  extends: Doughnut,
  mounted () {

  this.renderChart({
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ],
    datasets: [
      {
        backgroundColor: ["red", "blue", "yellow"],
        data: [10, 20, 30]
      }
    ]
  })
  }
}
</script>