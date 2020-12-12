<template>
  <div class="bg-white flex flex-col font-sans">
    <div class="container mx-auto">
      <header
        class="items-center"
      >
          <div class="text-right mt-5">
        <a href="recruitment_v1">
        <button
            class="w-100 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline"
        >
            アルバイト募集を作成する（無料）
        </button>
        </a>
    </div>
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
