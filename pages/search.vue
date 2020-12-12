<template>
  <div class="list-table shadow-md sm:rounded overflow-y-auto">
    <table class="w-full text-md bg-white">
      <thead>
        <tr class="border-b bg-blue-900 text-white">
          <th class="text-left p-3 px-5">募集</th>
          <th class="text-left p-3 px-5">特徴</th>
          <th class="text-left p-3 px-5">採用期日</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="text-gray-900">
        <tr
          v-for="(job, index) in jobsList"
          :key="index"
          class="border-b bg-gray-100 hover:bg-orange-100 cursor-pointer"
          @click="detailLink(job.id)"
        >
          <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
            {{ job.title }}
          </td>
          <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
            <template v-if="job.speedPriority === true">              
              <a
                :href="'/search/' + '/speedPriority/'"
                class="max-w-sm text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline items-center"
              >
                スピード重視
              </a>
            </template>
            <template v-else>メンバー</template>
          </td>
          <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
            {{ job.dateStart.toDate() }}
          </td>
          <td class="py-3 px-5">
            <div class="flex justify-end items-center">

            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, SetupContext } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import ProfileTable from '@/components/profile-table.vue'
import firebase from '@/plugins/firebase.ts'
import { variants } from '~/tailwind.config'

type Job = {
  id: string
  title: string
  genre: string
  speedPriority: boolean
  dateStart: string
}
const db = firebase.firestore()

export default defineComponent({
  name: 'search',
  setup(_) {
    const jobsList = reactive<Job[]>([])
    firebase
      .firestore()
      .collection('temp')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          jobsList.push({
            id: doc.id,
            title: doc.data().title,
            genre: doc.data().genre,
            speedPriority: doc.data().speedPriority,
            dateStart: doc.data().dateStart,
          })
        })
      })    
    const detailLink = (jobId: string): void => {
      window.location.href = '/detail/' + jobId
    }
    return {
      jobsList,
      detailLink,
    }
  },
})

</script>
<style></style>
