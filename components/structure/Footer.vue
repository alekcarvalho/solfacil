<template>
  <footer>
    <div class="container">
      <Logo />
      <nuxt-link class="back-link" to="/">
        <div class="icon"><IconDirectionMini /></div>
        <div class="text">Voltar</div>
      </nuxt-link>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
footer {
  @apply mt-10 pb-8;
  .container,
  .back-link {
    @apply flex justify-between items-center;
  }
  .back-link {
    .text {
      @apply ml-2 text-sm;
    }
  }
}
</style>
