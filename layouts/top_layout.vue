<template>
  <div class="bg-white flex flex-col font-sans">
    <div class="container mx-auto">
      <header
        class="items-center py-10"
      >
        <p class="leading-none">
          <a
            href="/"
            class="text-xl sm:text-2xl font-bold uppercase text-blue-900 hover:text-blue-800"
          >
            <img src="@/assets/img/logo.png" alt="画像が見つかりません" style="width: 1000px;">
          </a>
        </p>
      </header>
      <main>
        <nuxt />
      </main>
      <footer class="p-4">
        <p class="text-gray-500 font-xs text-center">
          <span class="inline-block pt-2 border-t md:pt-8 md:border-none">
            Copyright Tetsudai-Lab
          </span>
        </p>
      </footer>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'nuxt-composition-api'
export default defineComponent({
  setup(_) {
  }
})
</script>

<style>
</style>
