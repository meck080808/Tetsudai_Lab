<template>
  <div class="container mx-auto">
    <PageHeading class="text-center">
      募集内容の編集
    </PageHeading>
    <div class="lg:w-11/12 mx-auto flex flex-wraps">
      <profileTableEdit
        class=" w-full text-center"
        :recruitment="RecruitmentData.recruitment"
      />
    </div>
      <div class="text-center">
        <button
            class="w-100 text-sm bg-blue-500 hover:bg-blue-700 text-white py-3 px-5 mt-5 rounded focus:outline-none focus:shadow-outline"
            @click="setprofile"
        >
            編集内容を登録する
        </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, SetupContext, onBeforeMount } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import profileTableEdit from '@/components/recruitment-table-edit_v1.vue'
import firebase from '@/plugins/firebase.ts'
import { useRoute } from 'vue-router'

type Jobs = {
//   id: string
  recruitment: {
        lab: string
        title: string
        genre: string
        tags: {
            beginner: boolean
            experienced: boolean
            easy: boolean
            longterm: boolean
            highPrice: boolean
            speedPriority: boolean
        }
        skills: string
        contents: string
        term: string
        dateEnd: firebase.firestore.Timestamp
        pay: string
        address: string
  }
}


export default defineComponent({
  components: {
    PageHeading,
    profileTableEdit,
    // profileNameIconEdit,
  },
  setup(_, { root }: SetupContext) {
    const RecruitmentData = reactive<Jobs>({
    //   id: 'meck080808',
      recruitment: {
        lab: '',
        title: '',
        genre: '',
        tags: {
            beginner: false,
            experienced: false,
            easy: false,
            longterm: false,
            highPrice: false,
            speedPriority: false
        },
        skills: [],
        contents: '',
        dateEnd: '2020-12-13',
        pay: '',
        address: ''
      }
    })

    const getUserData = () => {
      firebase
        .firestore()
        .collection('jobs')
        .doc(root.$route.params.id)
        .get()
        .then((doc) => {
          if (doc.exists) {
        RecruitmentData.recruitment.lab = doc.data().lab,
        RecruitmentData.recruitment.title = doc.data().title,
        RecruitmentData.recruitment.genre = doc.data().genre,
        RecruitmentData.recruitment.tags = doc.data().tags,
        RecruitmentData.recruitment.skills = doc.data().skills,
        RecruitmentData.recruitment.contents = doc.data().contents,
        RecruitmentData.recruitment.pay = doc.data().pay,
        RecruitmentData.recruitment.address = doc.data().address
          }
        })
        .catch((err) => {
          console.log('Error getting user document', err);
        })
    }

    const setprofile = (): void => {
      const data = {
        lab: RecruitmentData.recruitment.lab,
        title: RecruitmentData.recruitment.title,
        genre: RecruitmentData.recruitment.genre,
        tags: RecruitmentData.recruitment.tags,
        skills: RecruitmentData.recruitment.skills,
        contents: RecruitmentData.recruitment.contents,
        dateEnd: new Date(RecruitmentData.recruitment.dateEnd),
        pay: RecruitmentData.recruitment.pay,
        address: RecruitmentData.recruitment.address
      }
      firebase
        .firestore()
        .collection('jobs') // usersコレクションの、
        .doc(root.$route.params.id)
        .add(data) // dataをセットする
        .then((response) => {
          console.log(response.id)
          window.location.href = '/'+ root.$route.params.id // 完了後、プロフィール画面へ遷移
        })
    }
    return {
      RecruitmentData,
      setprofile
    }
  },
})
</script>

<style>
.drag-area {
  width: 100%;
  min-width: 200px;
  height: 100%;
  min-height: 200px;
  border: 1px dotted rgba(0,0,0,0.1);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #F5F5F5;
}

.drag-area > input {
  opacity: 0;
}
</style>
