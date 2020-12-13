<template>
  <div class="bg-white flex flex-col font-sans">
    <div class="container mx-auto">
      <header
        class="flex items-center justify-between relative pl-4 sm:pl-0 py-2"
      >
        <p class="leading-none">
          <a
            href="/"
            class="text-xl sm:text-2xl font-bold uppercase text-blue-900 hover:text-blue-800"
          >
            <img src="@/assets/img/logo.png" alt="画像が見つかりません" style="width: 250px;">
          </a>
        </p>
      </header>
      <main>
        <nuxt />
      </main>
      <footer class="p-4">
        <div class="text-right">
          <a href="/">
            <button>Topへ戻る</button>
          </a>
        </div>
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
