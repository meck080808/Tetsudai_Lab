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
    <div class="text-center items-center">
        <input type="search" placeholder="キーワードを入力" class="border w-full py-1 px-5 rounded">
        <a href="search">
        <input type="submit" value="検索" class="w-100 bg-gray-500 hover:bg-gray-600 text-white font-bold cursor-pointer py-2 px-10 rounded focus:outline-none focus:shadow-outline mt-4">
        </a>
    </div>

        <div class ="text-center m-auto">
            <h1 class="text-2xl sm:text-3xl text-blue-900 p-4 mb-0 mt-4">
            カテゴリから探す
            </h1>
        </div>
        <div class="mt-5">
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
        categoryTable
    },
    layout: 'top_layout'
})
</script>
