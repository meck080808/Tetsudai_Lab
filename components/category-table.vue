<template>
<div>
    <div class="inline-block">　
        <ul>　　
            <li class="text-left"><a href="">理学系</a></li>　　
            <li class="text-left"><a href="">工学系</a></li>　　
            <li class="text-left"><a href="">物質系</a></li>　
            <li class="text-left"><a href="">情報系</a></li>　
        </ul>　
   </div>
    <div class="inline-block">　　
        <ul>　
            <li class="text-left"><a href="">生命系</a></li>　　
            <li class="text-left"><a href="">環境系</a></li>
            <li class="text-left"><a href="">社会・人文科学系</a></li>　
        </ul>　
    </div>
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
