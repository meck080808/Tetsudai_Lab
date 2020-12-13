<template>
<div>
  <table class="w-full text-center">
    <thead>
      <tr>
        <th class="text-center">生命・理工系</th>
        <th class="text-center">物質・環境・情報系</th>
        <th class="text-center">社会・人文科学系</th>
      </tr>
    </thead>

    <tbody>
      <td>応用化学</td>
      <td>物質構造</td>
    </tbody>
    <tbody>
      <td>電気電子工学</td>
      <td>地球環境</td>
    </tbody>
    <tbody>
      <td>遺伝子</td>
      <td>情報工学</td>
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
