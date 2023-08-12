<script setup lang="ts">
import Hero from './layouts/Hero.vue'
import BiorhythmCalculator from './components/BiorhythmCalculator.vue'
</script>
<template>
  <Hero>
    <template #title>
      <p class="title">Calculadora de BioRitmo</p>
    </template>
    <template #subtitle>
      Informe sua data de nascimento para calcular seu bioritmo
    </template>
    <template #default>
      <BiorhythmCalculator />
    </template>
  </Hero>
</template>