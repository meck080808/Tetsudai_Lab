<template>
  <div>
    <div class="flex flex-wrap items-center justify-center w-full text-gray-800 mt-10">
      <input
        type="search"
        class="h-12 p-4 mb-1 w-2/3 object-center bg-white border-2 border-gray-300 rounded-full"
        placeholder="タイトルで検索"
        aria-label="タイトルで検索"
      > <!-- :value="search"  @input="handleSearch" -->
      <button
        class="bg-green-400 rounded-full px-3 py-2 font-medium text-center text-sm m-1 hover:bg-green-500"
      > <!-- :class="{ 'bg-red-500 text-white hover:bg-red-600'}" : status === 'rejected'  @click="handleStatusFilter('rejected')" -->
        絞り込み
      </button>
      <button
        class="bg-pink-400 rounded-full px-3 py-2 font-medium text-center text-sm m-1 hover:bg-pink-500"
      > <!--  :class="{ 'bg-indigo-700 text-white hover:bg-indigo-800' : status === 'all' }" : status === 'rejected'  @click="handleStatusFilter('rejected')" -->  
        取り消し
      </button>
    </div>
    <div id="checks" class="mb-4 w-full">
      <div class="flex flex-wrap items-center justify-center w-full text-gray-800">
        <label for="checkbox1">
          <input type=checkbox id="checkbox1" v-model="tag1"/>
          深夜 {{tag1}}
        </label>
      </div>
      <div class="flex flex-wrap items-center justify-center w-full text-gray-800">
        <label for="checkbox2">
          <input type=checkbox id="checkbox2" v-model="tag2"/>
          スピード重視 {{tag2}}
        </label>
      </div>
    </div>
    <div class="w-full overflow-y-auto">
      <div
        v-for="job in jobsList"
        :key="job.id"
        class="border-b bg-gray-100 hover:bg-orange-100 cursor-pointer"
        @click="detailLink(job.id)"
      >
        <p class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
          {{ job.title }}
        </p>
        <p class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
          <template v-if="job.speedPriority === true">              
            <a
              :href="'/search/' + '/speedPriority/'"
              class="max-w-sm text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline items-center"
            >
              スピード重視
            </a>
          </template>
          <template v-else>メンバー</template>
        </p>
        <p class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
          {{ job.dateStart.toDate() }}
        </p>  
      </div>
    </div>
  </div>
</template>

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

export default defineComponent({
  components: {
    PageHeading,
    ProfileTable,
  },
  data() {
    return {
      tag1: false,
      tag2: false,
      tag3: false
    };
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
