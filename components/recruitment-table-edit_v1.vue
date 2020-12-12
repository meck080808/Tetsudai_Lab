<template>
  <div class="profile-table p-4">
      <table class="w-full text-md bg-white">
        <tbody>
          <tr class="border-b">
            <th class="p-4 whitespace-no-wrap text-left">
              タイトル
            </th>
            <td class="p-10 w-full">
              <input v-model="recruitment.title" class="border w-full px-1" placeholder="タイトルを入力" />
            </td>
          </tr>
          <tr class="border-b">
            <th class="p-4 whitespace-no-wrap text-left">
              ジャンル
            </th>
            <td class="p-10 w-full">
              <select v-model="selected" class="border-2 border-gray-400 w-full px-1 bg-gray-100" >
                <option disabled value="">ジャンルを選択</option>
                <option>実験系</option>
                <option>分析系</option>
              </select>
            </td>
          </tr>
          <tr class="border-b">
            <th class="p-4 whitespace-no-wrap text-left">
              特徴(Tag)
            </th>
            <td class="p-4 w-full">
                <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
                <label for="jack">
                    初心者OK
                </label>
                <input type="checkbox" id="john" value="John" v-model="checkedNames">
                <label for="john">
                    経験者優遇
                </label>
                <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                <label for="mike">
                    カンタン
                </label>
                <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                <label for="mike">
                    長期
                </label>
                <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                <label for="mike">
                    高単価
                </label>
                                <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                <label for="mike">
                    スピード重視
                </label>
            </td>
          </tr>
          <tr class="border-b">
            <th class="p-4 whitespace-no-wrap text-left">
              依頼内容
            </th>
            <td class="p-10 w-full">
              <textarea v-model="message" placeholder="依頼内容を入力" class="border w-full px-1 text-top"></textarea>
            </td>
          </tr>
          <tr class="border-b">
            <th class="p-4 whitespace-no-wrap text-left">
              アルバイト期間
            </th>
            <td class="p-10 w-full">
              <select v-model="selected" class="border-2 border-gray-400 w-full px-1 bg-gray-100" >
                <option disabled value="">期間を選択</option>
                <option>超短期</option>
                <option>短期</option>
                <option>長期</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script lang="ts">
import { defineComponent, SetupContext } from 'nuxt-composition-api'
export default defineComponent({
  name: 'RecruitmentTable',
  props: {
    recruitment: {},
  },
  setup(props, { root }: SetupContext) {
    return {
      props,
    }
  },
})
</script>
<style>
tbody tr:nth-child(odd) {
  @apply bg-white;
}
input[type='text'],
select {
  outline-color: #a0aec0;
}
</style>
