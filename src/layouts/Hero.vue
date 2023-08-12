<script setup lang="ts">
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

const open = ref(false)
const modal = ref(false)

function closeModal() {
  modal.value = false
}
</script>
<template>
  <section class="hero is-link is-fullheight">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand is-align-content-center">
            <a class="navbar-item is-size-4">
              <img src="https://sistematico.github.io/bio/heart-lt.svg" alt="Biorhythm" class="mr-2">
              Biorhythm
            </a>
            <span class="navbar-burger" :class="{ 'is-active': open }" data-target="navbarMenuHeroA"
              @click="open = !open">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu" :class="{ 'is-active': open }">
            <div class="navbar-end">
              <a href="#" class="navbar-item" @click="modal = !modal">
                O que é BioRitmo?
              </a>
              <span class="navbar-item">
                <a href="https://github.com/sistematico/bio" target="_blank" class="button is-dark">
                  <span class="icon">
                    <font-awesome-icon icon="fa-brands fa-github" />
                  </span>
                  <span>Github</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <!-- <div class="container has-text-centered"> -->
      <div class="container has-text-left">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <p class="title">
              <slot name="title" />
            </p>
            <p class="subtitle">
              <slot name="subtitle" />
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-full">
            <slot />
          </div>
        </div>
      </div>
    </div>

    <div class="hero-foot">
      <nav class="tabs">
        <div class="container">
          Sistema criado por Lucas Saliés Brum.
        </div>
      </nav>
    </div>
  </section>

  <div class="modal is-active" v-if="modal" @keyup.esc="closeModal" tabindex="0">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box" v-on-click-outside="closeModal">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://sistematico.github.io/bio/heart.svg" alt="BioRitmo">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Biorritmo</strong> <!-- <small>@johnsmith</small> <small>31m</small> -->
                <br />
                O <b>Biorritmo</b> é uma teoria pseudocientífica que sugere que os processos vitais do corpo humano são
                influenciados por ciclos biológicos regulares e previsíveis. De acordo com a teoria do biorritmo, a vida
                de uma pessoa é influenciada por três ciclos distintos: o ciclo físico, o ciclo emocional e o ciclo
                intelectual.
                <br /><br />
                <b>Ciclo Físico</b>: Este ciclo tem uma duração de 23 dias e diz respeito à vitalidade física, força, resistência
                e bem-estar geral. Seguidores da teoria acreditam que durante os primeiros 11,5 dias (a fase positiva) as
                pessoas têm mais energia e resistência, enquanto durante os 11,5 dias seguintes (a fase negativa) a
                energia tende a diminuir.
                <br /><br />
                <b>Ciclo Emocional</b>: Este ciclo tem uma duração de 28 dias, similar ao ciclo menstrual. Durante os primeiros
                14 dias (fase positiva), a pessoa pode se sentir mais otimista e com uma disposição emocional mais
                elevada. Nos 14 dias seguintes (fase negativa), a pessoa pode se sentir mais depressiva ou instável
                emocionalmente.
                <br /><br />
                <b>Ciclo Intelectual</b>: Este ciclo tem uma duração de 33 dias. Na fase positiva, que dura 16,5 dias, a
                capacidade de raciocínio, lógica e aprendizado pode estar mais apurada. Durante a fase negativa, que
                também dura 16,5 dias, pode ser mais difícil se concentrar ou aprender coisas novas.
                <br /><br />
                De acordo com a teoria do biorritmo, ao entender e monitorar esses ciclos, as pessoas podem prever dias
                bons e ruins em várias áreas da vida, como desempenho esportivo, aprendizado ou tomada de decisão.
                <br /><br />
                No entanto, é importante ressaltar que a validade científica do biorritmo é altamente questionada. Estudos
                não encontraram evidências consistentes que apoiassem as previsões feitas com base nesses ciclos.
                Portanto, embora algumas pessoas possam achar útil ou divertido verificar seus biorritmos, não é
                recomendável tomar decisões importantes baseadas unicamente nessa teoria.
                <br /><br />
                Fonte: <a href="https://chat.openai.com/" target="_blank">Chat GPT</a>
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-right">
                <div class="level-item">
                  <a href="#" class="button is-dark" @click="modal = false">
                    <span class="icon">
                      <font-awesome-icon icon="fa-solid fa-close" />
                    </span>
                    <span>Fechar</span>
                  </a>
                </div>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </div>
  <!-- <button class="modal-close is-large" aria-label="close" @click="modal = false"></button> -->
</div></template>
<style scoped>.navbar-burger {
  color: white;
}</style>