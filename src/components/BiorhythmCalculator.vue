<script setup lang="ts">
import { ref, computed } from 'vue'
import BiorhythmChart from './BiorhythmChart.vue'

const day = ref(1)
const month = ref(1)
const year = ref(new Date().getFullYear())
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const currentYear = new Date().getFullYear()
const years = Array.from({ length: 100 }, (_, i) => currentYear - i)

const calculateBiorhythm = (daysPassed: number, cycle: number): number => {
  const value = Math.sin((2 * Math.PI * daysPassed) / cycle)
  return Math.round(((value + 1) / 2) * 100)
}

// const birthDate = computed(() => { 
//   const monthValue = months.indexOf(String(month.value))
//   console.log(monthValue)
//   return new Date(year.value, monthValue - 1, day.value)
// })
const birthDate = computed(() => new Date(year.value, Number(month.value) - 1, day.value))

const rhythms = computed(() => {
  if (!birthDate.value) { 
    console.log('null!!!')
    return null
  }

  console.log(birthDate.value)

  const currentDate = new Date()
  const daysPassed = (currentDate.getTime() - birthDate.value.getTime()) / (1000 * 60 * 60 * 24)

  return {
    physical: calculateBiorhythm(daysPassed, 23),
    emotional: calculateBiorhythm(daysPassed, 28),
    intellectual: calculateBiorhythm(daysPassed, 33),
  }
})

const lastDayOfMonth = computed(() => new Date(year.value, month.value, 0).getDate())
</script>

<template>
  <div class="container">
    <div class="field is-horizontal">
      <label class="label">Data de nascimento</label>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <div class="select">
              <select v-model="day">
                <option v-for="d in lastDayOfMonth" :key="d">{{ d }}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <div class="select">
              <select v-model="month">
                <!-- <option v-for="(m, idx) in months" :key="idx">{{ idx }} - {{ m }}</option> -->
                <option v-for="(m, idx) in months" :key="idx" :value="idx + 1">{{ m }}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <div class="select">
              <select v-model="year">
                <option v-for="y in years" :key="y">{{ y }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="rhythms">
      <p>Físico: {{ rhythms.physical }}%</p>
      <p>Emocional: {{ rhythms.emotional }}%</p>
      <p>Intelectual: {{ rhythms.intellectual }}%</p>
      <BiorhythmChart :dateOfBirth="birthDate" />
    </div>
  </div>
</template>
