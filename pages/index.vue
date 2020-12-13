<template>
  <div class="container mx-auto">
    <p class="leading-none py-10">
        <a
            href="/"
            class="text-xl sm:text-2xl font-bold uppercase text-blue-900 hover:text-blue-800"
        >
            <img src="@/assets/img/logo.png" alt="画像が見つかりません" style="width: 1000px;" class="m-auto">
        </a>
    </p>
    <h1 class="text-2xl sm:text-3xl text-blue-900 p-4 mb-0 mt-10 text-center animate-bounce">
      研究アルバイトを探す
    </h1>
    <div class="flex flex-wrap items-center justify-center w-full text-gray-800">
        <form action="/search" method="get">
      <input
        type="search"
        name="q"
        id="topSearch"
        class="h-12 p-4 mb-1 w-2/3 object-center bg-white border-2 border-gray-300 rounded-full"
        placeholder="キーワードで検索"
        aria-label="キーワードで検索"
      > <!-- :value="search"  @input="handleSearch" -->
        <input type="submit" 
        value="検索" class="bg-green-400 rounded-full px-6 py-2 font-medium text-center m-1 hover:bg-green-500">
        </a>
        </form>
    </div>

        <div class ="text-center m-auto">
            <h1 class="text-2xl sm:text-3xl text-blue-900 p-4 mb-0 mt-4">
            カテゴリから探す
            </h1>
        </div>
        <div class="mt-5　place-self-center">
            <categoryTable/>
        </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import categoryTable from '@/components/category-table.vue'

export default defineComponent({
    components: {
        PageHeading,
        categoryTable,
    },
    layout: 'top_layout'
})
</script>
