<template>
    <div class="pageView">
        <h1>member login</h1>

        <div class="pageBgbox">
            <div class="labelbox mt-20">ID</div>
            <div class="inputbox text mt-10">
                <input type="text" :label="'ID'" :placeholder="'ID'" :icon="false" :single="false" :error="'다시 입력해 주세요'" v-model="formData.id" />
            </div>
            <div class="labelbox mt-20">PASSWORD</div>
            <div class="inputbox text mt-10">
                <input type="password" :label="'PASSWORD'" :placeholder="'PASSWORD'" :icon="false" :single="false" :error="'다시 입력해 주세요'" v-model="formData.password" />
            </div>

            <div class="mt-30">
                <button type="button" class="btn posi" @click="login">LOGIN</button>
            </div>

        </div>
    </div>
  
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useLoginStore } from '@/stores/member';
import { storeToRefs } from 'pinia';

// import { _login } from '@/api/dev';

const router = useRouter();
const store = useLoginStore();
// const { userLogin } = storeToRefs(store);

const formData = reactive({
    id: '',
    password: ''
});

const login = async () => {
    console.log(formData);
    try {
        const params = {
            id: formData.id,
            password: formData.password
        };
        await store.userLogin(params);
    } catch (error) {
        console.log(error);
    }
};

const getMemberList = async () => {
    try {
        const result = await _getMemberList();
        console.log(result);
        memberList.value = result.data.data;
    } catch (error) {
        console.log(error);
    }
};
</script>