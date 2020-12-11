<template>
  <div>
    <h1 class="text-2xl sm:text-3xl text-blue-900 p-4 mb-4 md:mb-8 border-b">Detail of Recruiting</h1>

    <div class="lg:w-11/12 mx-auto flex flex-wrap">
      <div class="list-table shadow-md sm:rounded overflow-y-auto lg:w-1/2 w-full p-2">
      <body>
        土木・建築を専門としている研究室です。
      </body>
      </div>

      <div class="list-table shadow-md sm:rounded overflow-y-auto lg:w-1/2 w-full p-2">
        <table class="w-full text-md bg-white">
          <thead>
            <tr class="border-b bg-blue-900 text-white">
              <th class="text-left p-3 px-5">タイトル</th>
              <th class="text-left p-3 px-5">ジャンル</th>
              <th class="text-left p-3 px-5">特徴</th>
              <th class="text-left p-3 px-5">依頼内容</th
              ><th class="text-left p-3 px-5">アルバイト期間</th>
            </tr>
          </thead>
          <tbody class="text-gray-900">
            <tr
            v-for="(タイトル, index) in detailList"
            :key="index"
            class="border-b bg-gray-100">
              <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
                エンジニアの募集
              </td>
              <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
                IT/AI
              </td>
              <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
                深夜OK、未経験大歓迎
              </td>
              <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
                やる気のある人を求めています！
              </td>
              <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
                半年間
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'nuxt-composition-api'
import detaillistJson from '@/pages/detaillist.json'
type DetailList={
  タイトル: string;
  ジャンル: string;
  特徴: { 
      初心者OK: boolean;
      経験者優遇: boolean;
      カンタン: boolean; 
      継続依頼あり: boolean; 
      大量募集: boolean; 
      長期: boolean; 女性歓迎: 
      boolean; 男性歓迎: boolean; 
      品質重視: boolean; 
      スピード重視: boolean; 
    };
  依頼内容: string; 
  アルバイト期間: { 
    "アルバイト開始": "2021-01-10T12:00:00.000Z",
    "アルバイト終了": "2021-01-17T17:00:00.000Z"
  }[];
}
export default defineComponent({
  setup(){
    const detailList= reactive<DetailList[]>(detaillistJson.detaillistData)
    return{
      detailList
    }
  }
})
</script>
