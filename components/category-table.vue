<template>
  <div class="profile-table p-4">
      <table class="w-full text-md bg-white">
        <tbody  class="border-b">
        <tr><th class="p-5">
                理学
        </th></tr>
          <tr><td class="p-5">
              数学
          </td></tr>
          <tr><td class="p-5">
              物理
          </td></tr>
            <th class="p-5">
              工学
            </th>
        </tbody>
        <tbody>
          <tr class="border-b">
            <th class="p-5">
              生命
            </th>
            <th class="p-5">
              情報
            </th>
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
