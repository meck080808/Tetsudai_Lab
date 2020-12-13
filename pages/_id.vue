<template >
  <div>
    <h1 class="text-2xl font-black sm:text-3xl text-red-600 text-opacity-70 p-4 mb-4 md:mb-8 border-b">{{ job.title }}</h1>

    <div>
      <!-- <div>研究室名</div>
      <div>{{ job.lab }}</div> -->
        <!-- <div class="auto"> -->
        <div>
          <img src="@/assets/image/d6671-3-910738-4.jpg" class="w-4/6 m-auto my-10">
        </div>

        <table class="w-full text-md bg-white my-6">
          <thead>
            <tr class="border-b bg-blue-900 text-white">
              <!-- <th class="text-left p-3 px-5">タイトル</th> -->
              <th class="text-left p-3 px-5 text-center">ジャンル</th>
              <th class="text-left p-3 px-5 text-center">特徴</th>
              <th class="text-left p-3 px-5 text-center">スキル</th>
              <th class="text-left p-3 px-5 text-center">終了時期</th>
            </tr>
          </thead>
          <tbody class="text-gray-900">
            <tr class="border-b bg-gray-100 ">
              <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
                <div class="border-4 border-opacity-100 bg-blue-300 m-1 text-center rounded-lg text-md text-white">
                {{ job.genre }}
                </div>
              </td>
              <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
                <div v-for="(value, name) in job.tags" :key="name">
                  <div v-if="value==true" class="border-4 border-opacity-100 bg-blue-300 m-1 text-center rounded-lg text-md text-white">
                    {{ name }}
                  </div>
                </div>
              </td>
              <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal">
                <div v-for="(value, name) in job.skills" :key="name" 
                class="border-4 border-opacity-100 bg-blue-300 m-1 text-center rounded-lg text-md text-white">
                  {{ value }}
                  </div>
                <!-- {{ job.skills }} -->
              </td>
              <td class="py-3 px-5 whitespace-no-wrap sm:whitespace-normal text-red-500 font-extrabold text-center">
                {{ job.dateEnd }}
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <div class="font-black mb-3">研究室名</div>
          <div class="mb-6">{{ job.lab }}</div>
          <div class="font-black mb-3">研究室紹介</div>
          <p class="mb-6">土木・建築を専門としている研究室です。現在は教授２名（准教授1名、助教授1名）及び学生10名(博士1名、修士3名、学士6名)が所属しています。
          土木・建築関係の会社との共同研究も多く、特に建築関係の業務のIT化の依頼は非常に多いです。
          しかしながら学生だけでは手が足りず共同研究をお断りするケースも同様に増えており、アルバイトを雇いたいと思っています。</p>
          <div class="font-black mb-3">給与</div>
          <div class="mb-6">{{ job.pay }}</div>
        </div>
    </div>

    <p>Mail address</p>
    <input v-model="message" placeholder="tetsudai_lab@example.com" >
    <button class="rounded px-2 bg-green-400 hover:bg-green-600 font-bold text-white flex-wrap">アドレス登録</button>
     
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
  dateEnd:string
  pay:string
}
export default defineComponent({
  setup(_, { root }: SetupContext){
    const job = reactive<Job>({
      lab: '',
      title: '', 
      genre: '',
      tags: '',
      skills: '',
      dateEnd: '',
      pay: '',
    })
    const formatDate = (date: Date): string => {
      var y = date.getFullYear();
      var m = ('00' + (date.getMonth()+1)).slice(-2);
      var d = ('00' + date.getDate()).slice(-2);
      return (y + '年' + m + '月' + d + '日終了');
    }
    firebase
    .firestore()
    .collection('jobs')
    .doc(root.$route.params.id)
    .get()
    .then((doc) => {
      if(doc.exists) {
        console.log("toDate()")
        console.log(doc.data().dateEnd.toDate())
        job.lab = doc.data().lab
        job.title = doc.data().title
        job.genre = doc.data().genre
        job.tags = doc.data().tags
        job.skills = doc.data().skills
        job.dateEnd = formatDate(doc.data().dateEnd.toDate())
        job.pay = doc.data().pay
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
