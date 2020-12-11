<template>
  <div>
    <h1>Testing</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, SetupContext } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import ProfileTable from '@/components/profile-table.vue'
import firebase from '@/plugins/firebase.ts'
import { variants } from '~/tailwind.config'

const db = firebase.firestore()

const jobsData = {
  タイトル: db.collection('jobs').タイトル,
  ジャンル: db.collection('jobs').ジャンル,
  初心者OK: db.collection('jobs').初心者OK,
  経験者優遇: db.collection('jobs').経験者優遇,
  カンタン: db.collection('jobs').カンタン,
  継続依頼あり: db.collection('jobs').継続依頼あり,
  長期: db.collection('jobs').長期,
  大量募集: db.collection('jobs').大量募集,
  女性歓迎: db.collection('jobs').女性歓迎,
  男性歓迎: db.collection('jobs').男性歓迎,
  品質重視: db.collection('jobs').品質重視,
  スピード重視: db.collection('jobs').スピード重視
}

export default jobsData

</script>
<style></style>
