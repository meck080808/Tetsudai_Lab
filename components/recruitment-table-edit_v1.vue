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
              <select v-model="recruitment.genre" class="border-2 border-gray-400 w-full px-1 bg-gray-100" >
                <option disabled value="">--ジャンルを選択--</option>
                <option value="science">理学系</option>
                <option value="engineering">工学系</option>
              </select>
            </td>
          </tr>
          <tr class="border-b">
            <th class="p-4 whitespace-no-wrap text-left">
              特徴(Tag)
            </th>
            <td class="p-4 w-full">
                <input type="checkbox" id="begginer" value=true v-model="recruitment.tags.beginner">
                <label for="begginer">
                    初心者OK
                </label>
                <input type="checkbox" id="experienced" value=true v-model="recruitment.tags.experienced">
                <label for="experienced">
                    経験者優遇
                </label>
                <input type="checkbox" id="easy" value=true v-model="recruitment.tags.easy">
                <label for="easy">
                    カンタン
                </label>
                <input type="checkbox" id="longterm" value=true v-model="recruitment.tags.longterm">
                <label for="longterm">
                    長期
                </label>
                <input type="checkbox" id="highPrice" value=true v-model="recruitment.tags.highPrice">
                <label for="highPrice">
                    高単価
                </label>
                <input type="checkbox" id="speedPriority" value=true v-model="recruitment.tags.speedPriority">
                <label for="speedPriority">
                    スピード重視
                </label>
            </td>
          </tr>
          <tr class="border-b">
            <th class="p-4 whitespace-no-wrap text-left">
              募集内容
            </th>
            <td class="p-10 w-full">
              <textarea v-model="recruitment.contents" placeholder="募集内容を入力" class="border w-full px-1 text-top"></textarea>
            </td>
          </tr>
          <tr class="border-b">
            <th class="p-4 whitespace-no-wrap text-left">
              アルバイト期間
            </th>
            <td class="p-10 w-full">
              <select v-model="recruitment.term" class="border-2 border-gray-400 w-full px-1 bg-gray-100" >
                <option disabled value="">--期間を選択--</option>
                <option value="very short">超短期</option>
                <option value="short">短期</option>
                <option value="long">長期</option>
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
