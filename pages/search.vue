<template>
  <div>
    <div class="flex flex-wrap items-center justify-center w-full text-gray-800 mt-10">
      <input
        type="search"
        class="h-12 p-4 mb-1 w-2/3 object-center bg-white border-2 border-gray-300 rounded-full"
        placeholder="タイトルで検索"
        aria-label="タイトルで検索"
        v-model="tags.searchTerm">
      <button
        class="bg-pink-400 rounded-full px-3 py-2 font-medium text-center text-sm m-1 hover:bg-pink-500"
        v-on:click="reset()"
      >
        取り消し
      </button>
    </div>
    <div id="checks" class="mb-4 w-full">
      <div class="flex flex-wrap items-center space-x-8 justify-center w-full text-gray-800">
        <label for="checkbox1">
          <input type=checkbox id="checkbox1" v-model="tags.tag_beginner"/>
          初心者OK
        </label>
        <label for="checkbox2">
          <input type=checkbox id="checkbox2" v-model="tags.tag_easy"/>
          カンタン
        </label>
        <label for="checkbox3">
          <input type=checkbox id="checkbox3" v-model="tags.tag_experienced"/>
          経験者優遇
        </label>
        <label for="checkbox4">
          <input type=checkbox id="checkbox4" v-model="tags.tag_highPay"/>
          高報酬
        </label>
        <label for="checkbox5">
          <input type=checkbox id="checkbox5" v-model="tags.tag_longterm"/>
          長期
        </label>
        <label for="checkbox6">
          <input type=checkbox id="checkbox6" v-model="tags.tag_speedPriority"/>
          スピード重視
        </label>
      </div>
    </div>
    <div class="w-full shadow-lg border-4 divide-y-4 divide-gray-300" >
      <div
        v-for="job in searchJobs(filteredJobs(jobsList))"
        :key="job.id"
        class="border-b bg-gray-100 hover:bg-orange-150 cursor-pointer"
        @click="detailLink(job.id)"
      >
        <p class="pt-5 px-8 text-3xl whitespace-no-wrap sm:whitespace-normal">
          {{ job.title }}
        </p>
        <p class="pb-1 px-8 text-md whitespace-no-wrap sm:whitespace-normal">
          雇用研究室：{{ job.lab }}
        </p>
        <p class="pb-1 px-8 space-x-1 text-md whitespace-no-wrap sm:whitespace-normal">
          <template v-if="job.beginner === true">
            <a
              class="max-w-sm text-sm bg-blue-500 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline items-center"
            >
              初心者OK
            </a>
          </template>
          <template v-if="job.easy === true">
            <a
              class="max-w-sm text-sm bg-blue-500 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline items-center"
            >
              カンタン
            </a>
          </template>
          <template v-if="job.experienced === true">
            <a
              class="max-w-sm text-sm bg-blue-500 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline items-center"
            >
              経験者優遇
            </a>
          </template>
          <template v-if="job.highPay === true">
            <a
              class="max-w-sm text-sm bg-blue-500 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline items-center"
            >
              高報酬
            </a>
          </template>
          <template v-if="job.longterm === true">
            <a
              class="max-w-sm text-sm bg-blue-500 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline items-center"
            >
              長期
            </a>
          </template>
          <template v-if="job.speedPriority === true">
            <a
              class="max-w-sm text-sm bg-blue-500 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline items-center"
            >
              スピード重視
            </a>
          </template>
        </p>
        <p class="pb-10 px-8 text-md whitespace-no-wrap sm:whitespace-normal">
          締め切り：{{ job.dateEnd }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext, computed } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import ProfileTable from '@/components/profile-table.vue'
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
  skills: []
  }

export default defineComponent({
  components: {
    PageHeading,
    ProfileTable,
  },
  setup(_) {
    const jobsList = reactive<Job[]>([])
    var tags = reactive({
      tag_beginner: false,
      tag_easy: false,
      tag_experienced: false,
      tag_highPay: false,
      tag_longterm: false,
      tag_speedPriority: false,
      searchTerm: ''
    })    
    const formatDate = (date: Date): string => {
      var y = date.getFullYear();
      var m = ('00' + (date.getMonth()+1)).slice(-2);
      var d = ('00' + date.getDate()).slice(-2);
      return (y + '年' + m + '月' + d + '日まで');
    }
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
            dateEnd: formatDate(doc.data().dateEnd.toDate()),
            beginner: doc.data().tags.beginner,
            easy: doc.data().tags.easy,
            experienced: doc.data().tags.experienced,
            highPrice: doc.data().tags.highPrice,
            longterm: doc.data().tags.longterm,
            speedPriority: doc.data().tags.speedPriority,
            skills: doc.data().skills
          })
        })
      })    
    const detailLink = (jobId: string): void => {
      window.location.href = '/' + jobId
    }
    const filteredJobs = (list:any) => {
      console.log(tags)
      return list.filter( (job:Job) => {
        //console.log(job.title, job.easy, tags.tag_easy)
        if (! tags.tag_beginner
        && ! tags.tag_easy
        && ! tags.tag_experienced
        && ! tags.tag_highPay
        && ! tags.tag_longterm
        && ! tags.tag_speedPriority)
        {
          return true
        } else {
          if (tags.tag_beginner && job.beginner == tags.tag_beginner) {
            return true
          } else if (tags.tag_easy && job.easy == tags.tag_easy) {
            return true
          } else if (tags.tag_experienced && job.experienced == tags.tag_experienced){
            return true
          } else if (tags.tag_highPay && job.highPrice == tags.tag_highPay){
            return true
          } else if (tags.tag_longterm && job.longterm == tags.tag_longterm){
            return true
          } else if (tags.tag_beginner && job.beginner == tags.tag_beginner){
            return true
          } else if (tags.tag_speedPriority && job.speedPriority == tags.tag_speedPriority) {
            return true
          } else {
            return false
          }
        }
      })
    }
    const searchJobs = (list:any) => {
      return list.filter( (job:Job) => {
        return (job.title.search(tags.searchTerm) != -1 )
      })
    }

    const reset = () => {
      tags.tag_beginner = false;
      tags.tag_easy = false;
      tags.tag_experienced = false;
      tags.tag_highPay = false;
      tags.tag_longterm = false;
      tags.tag_speedPriority = false;
      tags.searchTerm = '';
    }

    return {
      tags,
      jobsList,
      detailLink,
      filteredJobs,
      searchJobs,
      reset
    }
  }
})

</script>
<style></style>
