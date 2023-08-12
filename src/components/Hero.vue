<template>
  <section class="hero is-danger is-fullheight">
    <div class="hero-body">
      <div class="">
        <p class="title">
          <slot name="title" />
        </p>
        <p class="subtitle">
          <slot />
        </p>
      </div>
    </div>
  </section>
</template>