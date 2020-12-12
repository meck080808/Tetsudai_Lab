<template>
  <div class="container mx-auto">
    <PageHeading class="text-center">
      研究アルバイトを探す
    </PageHeading>
    <div class="text-center items-center">
        <input type="search" placeholder="キーワードを入力" class="border w-full py-1 px-5 rounded">
        <input type="submit" value="検索" class="w-100 bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-5 rounded focus:outline-none focus:shadow-outline">
    </div>
    <PageHeading class="text-center mt-10">
      カテゴリから探す
    </PageHeading>
    <div class="lg:w-11/12 mx-auto flex flex-wraps">
      <categoryTable
        class=" w-full text-center"
      />
    </div>
    <div class="text-center mt-10">
        <a href="recruitment_v1">
        <button
            class="w-100 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline"
        >
            アルバイト募集を作成する（無料）
        </button>
        </a>
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
