<script setup lang="ts">
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// Props
const props = defineProps({
  dateOfBirth: {
    type: [String, Date],
    required: true
  }
})

// Biorhythm calculation
const calculateBiorhythm = (daysPassed: number, cycle: number) => {
  return Math.sin((2 * Math.PI * daysPassed) / cycle);
};

// Generate data for the chart
const chartData = computed(() => {
  const birth = new Date(props.dateOfBirth)
  const currentDate = new Date()
  const daysSinceBirth = Math.floor((currentDate.getTime() - birth.getTime()) / (24 * 60 * 60 * 1000))
  const days = Array.from({ length: 15 }, (_, i) => daysSinceBirth - 3 + i)

  return {
    labels: days.map(d => {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + d - daysSinceBirth);
      return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}`;
    }),
    datasets: [
      {
        label: 'Físico',
        data: days.map(d => calculateBiorhythm(d, 23)),
        borderColor: 'red',
        backgroundColor: days.map(d => d === daysSinceBirth ? 'rgba(255, 0, 0, 0.5)' : 'rgba(255, 0, 0, 0.2)'), // mais opaco para o dia atual
        // barThickness: days.map(d => d === daysSinceBirth ? 30 : 20), // mais grosso para o dia atual
        fill: false
      },
      {
        label: 'Emocional',
        data: days.map(d => calculateBiorhythm(d, 28)),
        borderColor: 'blue',
        backgroundColor: days.map(d => d === daysSinceBirth ? 'rgba(0, 0, 255, 0.5)' : 'rgba(0, 0, 255, 0.2)'), // mais opaco para o dia atual
        // barThickness: days.map(d => d === daysSinceBirth ? 30 : 20), // mais grosso para o dia atual
        fill: false
      },
      {
        label: 'Intelectual',
        data: days.map(d => calculateBiorhythm(d, 33)),
        borderColor: 'green',
        backgroundColor: days.map(d => d === daysSinceBirth ? 'rgba(0, 255, 0, 0.5)' : 'rgba(0, 255, 0, 0.2)'), // mais opaco para o dia atual
        // barThickness: days.map(d => d === daysSinceBirth ? 30 : 20), // mais grosso para o dia atual
        fill: false
      }
    ]
  };
});

const chartOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      min: -1,
      max: 1
    }
  }
}
</script>

<template>
  <div>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>
