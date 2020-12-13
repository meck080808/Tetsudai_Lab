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
      <div class="flex flex-wrap items-center space-x-8 justify-center w-full text-gray-800">
        <label for="checkbox1">
          <input type=checkbox id="checkbox1" v-model="tag1"/>
          初心者OK
        </label>
        <label for="checkbox2">
          <input type=checkbox id="checkbox2" v-model="tag2"/>
          カンタン
        </label>
        <label for="checkbox3">
          <input type=checkbox id="checkbox3" v-model="tag3"/>
          経験者優遇
        </label>
        <label for="checkbox4">
          <input type=checkbox id="checkbox4" v-model="tag4"/>
          高報酬
        </label>
        <label for="checkbox5">
          <input type=checkbox id="checkbox5" v-model="tag5"/>
          長期
        </label>
        <label for="checkbox6">
          <input type=checkbox id="checkbox6" v-model="tag6"/>
          スピード重視
        </label>
      </div>
    </div>
    <div class="w-full shadow-lg border-4 divide-y-4 divide-gray-300" >
      <div
        v-for="job in jobsList"
        :key="job.id"
        class="border-b bg-gray-100 hover:bg-orange-150 cursor-pointer"
        @click="detailLink(job.id)"
      >
        <p class="pt-5 px-8 text-3xl whitespace-no-wrap sm:whitespace-normal">
          {{ job.title }}
        </p>
        <p class="pb-1 px-8 text-md whitespace-no-wrap sm:whitespace-normal">
          雇用機構・研究室：{{ job.lab }}
        </p>
        <p class="pb-1 px-8 text-md whitespace-no-wrap sm:whitespace-normal">
          <template v-if="job.beginner === true">
            <a
              class="max-w-sm text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline items-center"
            >
              初心者OK
            </a>
          </template>
          <template v-if="job.easy === true">
            <a
              class="max-w-sm text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline items-center"
            >
              カンタン
            </a>
          </template>
          <template v-if="job.experienced === true">
            <a
              class="max-w-sm text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline items-center"
            >
              経験者優遇
            </a>
          </template>
        </p>
        <p class="pb-10 px-8 text-md whitespace-no-wrap sm:whitespace-normal">
          締め切り：{{ job.dateEnd.toDate() }}
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
  lab: string
  dateEnd: string
  beginner: boolean
  easy: boolean
  experienced: boolean
  highPrice: boolean
  longterm: boolean
  speedPriority: boolean
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
      tag3: false,
      tag4: false,
      tag5: false,
      tag6: false
    };
  },
  setup(_) {
    const jobsList = reactive<Job[]>([])
    firebase
      .firestore()
      .collection('jobs')
      .orderBy("dateEnd")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          jobsList.push({
            id: doc.id,
            title: doc.data().title,
            genre: doc.data().genre,
            lab: doc.data().lab,
            dateEnd: doc.data().dateEnd,
            beginner: doc.data().beginner,
            easy: doc.data().tags.easy,
            experienced: doc.data().tags.experienced,
            highPrice: doc.data().tags.highPrice,
            longterm: doc.data().tags.longterm,
            speedPriority: doc.data().tags.speedPriority,
          })
        })
      })    
    const detailLink = (jobId: string): void => {
      window.location.href = '/' + jobId
    }
    return {
      jobsList,
      detailLink,
    }
  },
})

</script>
<style></style>
