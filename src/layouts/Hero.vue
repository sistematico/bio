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
            <span class="navbar-burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
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
</template>