<template>
  <div class="container mx-auto">
    <PageHeading class="text-center">
      アルバイト募集の作成
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
            アルバイト募集を登録する
        </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, SetupContext, onBeforeMount } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import profileTableEdit from '@/components/profile-table-edit_simple.vue'
import firebase from '@/plugins/firebase.ts'

type Jobs = {
  id: string
  recruitment: {
    title: string
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
      id: 'meck080808',
      recruitment: {
        title: ''
      }
    })

    const setprofile = (): void => {
      const data = {
        タイトル: RecruitmentData.recruitment.title,
      }
      firebase
        .firestore()
        .collection('jobs') // usersコレクションの、
        .doc(RecruitmentData.id) // <ユーザーID>というドキュメントに、
        .set(data) // dataをセットする
        .then(() => {
          window.location.href = '/recruitment' // 完了後、プロフィール画面へ遷移
        })
    }
    return {
      RecruitmentData,
      setprofile,
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
