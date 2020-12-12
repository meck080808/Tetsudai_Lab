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
