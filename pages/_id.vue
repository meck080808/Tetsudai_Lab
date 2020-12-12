<template>
  <div>
    <h1 class="text-2xl sm:text-3xl text-blue-900 p-4 mb-4 md:mb-8 border-b">{{ job.lab }}</h1>

    <div class="mx-auto" m-0>
      <div class="flex flex-wrap w-5/12">
        <div>
          土木・建築を専門としている研究室です。現在は教授２名（准教授1名、助教授1名）及び学生10名(博士1名、修士3名、学士6名)が所属しています。
          土木・建築関係の会社との共同研究も多く、特に建築関係の業務のIT化の依頼は非常に多いです。
          しかしながら学生だけでは手が足りず共同研究をお断りするケースも同様に増えており、アルバイトを雇いたいと思っています。
        </div>
        <div>
          <img src="@/assets/image/muromachi.jpeg">
        </div>
      </div>

        <table class="w-full text-md bg-white my-6">
          <thead>
            <tr class="border-b bg-blue-900 text-white">
              <th class="text-left p-3 px-5">タイトル</th>
              <th class="text-left p-3 px-5">ジャンル</th>
              <th class="text-left p-3 px-5">特徴</th>
              <th class="text-left p-3 px-5">依頼内容</th
              ><th class="text-left p-3 px-5">期間</th>
            </tr>
          </thead>
          <tbody class="text-gray-900">
            <tr
            class="border-b bg-gray-100">
              <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
                {{ job.title }}
              </td>
              <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
                {{ job.genre }}
              </td>
              <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
                <div v-for="(value, name) in job.tags" :key="name">
                  <div v-if="value==true">
                    {{ name }}
                  </div>
                </div>
              </td>
              <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
                <div v-for="(value, name) in job.skills" :key="name">
                  {{ value }}
                  </div>
                <!-- {{ job.skills }} -->
              </td>
              <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
                {{ job.time }}
              </td>
            </tr>
          </tbody>
        </table>
    </div>

    <p>Mail address</p>
    <input v-model="message" placeholder="edit me">
  </div>

</template>
<script lang="ts">
import { defineComponent, reactive } from 'nuxt-composition-api'
import detaillistJson from '@/pages/detaillist.json'
import firebase from '@/plugins/firebase.ts'
import { useRoute } from 'vue-router'
type Job = {
  lab: string
  title: string
  genre: string
  tags: boolean
  skills: string
  time:string
}
export default defineComponent({
  setup(_, { root }: SetupContext){
    const job = reactive<Job>({
      lab: '',
      title: '', 
      genre: '',
      tags: '',
      skills: '',
      time: '',
    })
    firebase
    .firestore()
    .collection('temp2')
    .doc(root.$route.params.id)
    .get()
    .then((doc) => {
      if(doc.exists) {
        job.lab = doc.data().lab
        job.title = doc.data().title
        job.genre = doc.data().genre
        job.tags = doc.data().tags
        job.skills = doc.data().skills
        job.time = doc.data().time
      }
    })
    .catch((err) => {
      console.log('Error getting document', err)
    })

    return{
      job
    }
  }
})
</script>
