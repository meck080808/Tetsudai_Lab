<template>
  <div>
    <div class="w-full mb-2">
      <input
        :value="search"
        @input="handleSearch"
        type="search"
        class="h-12 p-4 mb-1 w-full bg-white border-2 border-gray-300 rounded-full"
        placeholder="Search company name or job title"
        aria-label="Search by company name or job title"
      >
    </div>
    <div class="mb-4 w-full">
      <div class="flex flex-wrap items-center justify-center w-full text-gray-800">
        <button
          :class="{ 'bg-indigo-700 text-white hover:bg-indigo-800' : status === 'all' }"
          @click="handleStatusFilter('all')"
          class="bg-gray-400 rounded-full px-3 py-2 font-medium text-center text-sm m-1 hover:bg-gray-500"
        >
          深夜
        </button>
      </div>
    </div>
    <div class="mb-4 w-full">
      <div class="flex flex-wrap items-center justify-center w-full text-gray-800">
        <button
          :class="{ 'bg-indigo-700 text-white hover:bg-indigo-800' : status === 'all' }"
          @click="handleStatusFilter('all')"
          class="bg-gray-400 rounded-full px-3 py-2 font-medium text-center text-sm m-1 hover:bg-gray-500"
        >
          全部見せる
        </button>
        <button
          :class="{ 'bg-red-500 text-white hover:bg-red-600' : status === 'rejected' }"
          @click="handleStatusFilter('rejected')"
          class="bg-gray-400 rounded-full px-3 py-2 font-medium text-center text-sm m-1 hover:bg-gray-500"
        >
          絞り込み
        </button>
      </div>
    </div>
  </div>
</template>
<!--  <div class="list-table shadow-md sm:rounded overflow-y-auto">
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
  </div> -->

<script lang="ts">
import { defineComponent, reactive, SetupContext } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import ProfileTable from '@/components/profile-table.vue'
// import Filter from '@/components/filter/filter.vue'
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
  components: {
    PageHeading,
    ProfileTable,
  },
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
