<template>
    <div class="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-10">
        <div class="sm:w-2/5 items-center sm:items-start text-center sm:text-left">
            <h1 class="uppercase text-6xl text-blue-900 leading-none tracking-wide mb-2">
                募集を作成する
            </h1>
            <h2 class = "uppercase text-2xl text-blue-900 leading-none tracking-wide mb-2">
                募集のタイトル
            </h2>
            <h2 class = "uppercase text-2xl text-blue-900 leading-none tracking-wide mb-2">
                ジャンル
            </h2>
            <h2 class = "uppercase text-2xl text-blue-900 leading-none tracking-wide mb-2">
                特徴(Tag)
            </h2>
            <h2 class = "uppercase text-2xl text-blue-900 leading-none tracking-wide mb-2">
                依頼内容
            </h2>
            <h2 class = "uppercase text-2xl text-blue-900 leading-none tracking-wide mb-2">
                アルバイト期間
            </h2>
      <div class="p-4 lg:px-8 lg:w-1/2 w-full">
        <div class="pt-2">
          <label class="text-sm title-font text-gray-500">
            役割
          </label>
          <div class="relative">
            <select
              class="appearance-none bg-white w-full border py-3 px-4 pr-8 rounded focus:outline-none"
            >
              <option value="admin">リーダー</option>
              <option value="member">メンバー</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <hr class="my-4 sm:my-8" />

      </div>
      <profileTableEdit
        class="mt-8 lg:w-1/2 w-full"
      />
    </div>
    </div>



</template>


<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'
export default defineComponent({
})
</script>



