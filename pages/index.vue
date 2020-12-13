<template>
  <div class="container mx-auto">
    <p class="leading-none py-10">
        <a
            href="/"
            class="text-xl sm:text-2xl font-bold uppercase text-blue-900 hover:text-blue-800"
        >
            <img src="@/assets/img/logo.png" alt="画像が見つかりません" style="width: 1000px;">
        </a>
    </p>
    <h1 class="text-2xl sm:text-3xl text-blue-900 p-4 mb-0 mt-10 text-center">
      研究アルバイトを探す
    </h1>
    <div class="flex flex-wrap items-center justify-center w-full text-gray-800">
      <input
        type="search"
        class="h-12 p-4 mb-1 w-2/3 object-center bg-white border-2 border-gray-300 rounded-full"
        placeholder="キーワードで検索"
        aria-label="キーワードで検索"
      > <!-- :value="search"  @input="handleSearch" -->
        <a href="search">
        <input type="submit" value="検索" class="bg-green-400 rounded-full px-6 py-2 font-medium text-center m-1 hover:bg-green-500">
        </a>
    </div>
    <!-- <div class="text-center">
        <div class ="inline-block">
            <h1 class="text-2xl sm:text-3xl text-blue-900 p-4 mb-0 mt-10">
            研究分野から探す
            </h1>
            <div class="lg:w-11/12 mx-auto flex flex-wraps">
            <categoryTable
                class=" w-full text-center"
            />
            </div>
        </div> -->
        <!-- <div class="inline-block">
            <PageHeading class="text-center mt-10">
            スキルから探す
            </PageHeading>
            <div class="lg:w-11/12 mx-auto flex flex-wraps">
            <categoryTable
                class=" w-full text-center"
            />
            </div>
        </div> -->
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
