<template>
  <div class="container mx-auto">
    <PageHeading class="text-center">
      アルバイト募集の作成
    </PageHeading>
    <div class="lg:w-11/12 mx-auto flex flex-wraps">
      <profileTableEdit
        class=" w-full text-center"
        :profile="userData.profile"
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
import profileTableEdit from '@/components/profile-table-edit.vue'
import firebase from '@/plugins/firebase.ts'

type Jobs = {
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
    const RecuitmentData = reactive<Jobs>({
      title: '',
      },
    })

    const getUserData = (user) => {
      firebase
        .firestore()
        .collection('users') // usersコレクションから、
        .doc(user.uid) // 指定したuidのドキュメントを
        .get() // 取得する
        .then((doc) => {
          if (doc.exists) {
            RecruitmentData.title = doc.data().title
          }
        })
        .catch((err) => {
          console.log('Error getting user document', err);
        })
    }

    const setprofile = (): void => {
      const data = {
        タイトル: RecuitmentData.title,
      }
      firebase
        .firestore()
        .collection('jobs') // usersコレクションの、
        .doc(RecuitmentData.title) // <ユーザーID>というドキュメントに、
        .set(data) // dataをセットする
        .then(() => {
          window.location.href = '/profile' // 完了後、プロフィール画面へ遷移
        })
    }
    return {
      RecuitmentData,
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
