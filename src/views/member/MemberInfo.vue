<template>
  <div class="pageView">
    <h1>member info</h1>

    <div class="pageBgbox">
      <div class="labelbox mt-20">name</div>
      <div class="inputbox text mt-10">
        <input type="text" :label="'name'" :placeholder="'name'" :icon="false" :single="false" :error="'다시 입력해 주세요'" v-model="formData.name" />
      </div>
      <div class="labelbox mt-20">password</div>
      <div class="inputbox text mt-10">
        <input type="text" :label="'password'" :placeholder="'password'" :icon="false" :single="false" :error="'다시 입력해 주세요'" v-model="formData.password" />
      </div>
      <div class="labelbox mt-20">email</div>
      <div class="inputbox text mt-10">
        <input type="text" :label="'email'" :placeholder="'email'" :icon="false" :single="false" :error="'다시 입력해 주세요'" v-model="formData.email" />
      </div>
      <div class="labelbox mt-20">phone</div>
      <div class="inputbox text mt-10">
        <input type="text" :label="'phone'" :placeholder="'phone'" :icon="false" :single="false" :error="'다시 입력해 주세요'" v-model="formData.phone" />
      </div>
      <div class="labelbox mt-20">address</div>
      <div class="inputbox text mt-10">
        <input type="text" :label="'address'" :placeholder="'address'" :icon="false" :single="false" :error="'다시 입력해 주세요'" v-model="formData.address" />
      </div>
      <div class="labelbox mt-20">city</div>
      <div class="inputbox text mt-10">
        <input type="text" :label="'city'" :placeholder="'city'" :icon="false" :single="false" :error="'다시 입력해 주세요'" v-model="formData.city" />
      </div>
      <div class="labelbox mt-20">state</div>
      <div class="inputbox text mt-10">
        <input type="text" :label="'state'" :placeholder="'state'" :icon="false" :single="false" :error="'다시 입력해 주세요'" v-model="formData.state" />
      </div>
      <div class="labelbox mt-20">dateOfBirth</div>
      <div class="inputbox text mt-10">
        <input type="text" :label="'dateOfBirth'" :placeholder="'dateOfBirth'" :icon="false" :single="false" :error="'다시 입력해 주세요'" v-model="formData.dateOfBirth" />
      </div>
      <div class="labelbox mt-20">gender</div>
      <div class="inputbox text mt-10">
        <input type="text" :label="'gender'" :placeholder="'gender'" :icon="false" :single="false" :error="'다시 입력해 주세요'" v-model="formData.gender" />
      </div>
      <div class="mt-30">
        <div class="btn-bottom-set flex justify-center">
            <button type="button" class="btn posi" @click="updateMember">수정</button>
            <button type="button" class="btn" @click="deleteMember">회원탈퇴</button>
        </div>
      </div>


    </div>

  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

import { useLoginStore } from '@/stores/member';
import { storeToRefs } from 'pinia';

import { _updateMember } from '@/api/dev';

const store = useLoginStore();
const { userInfo } = storeToRefs(store);

const formData = reactive({
    name: '',
    password: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    dateOfBirth: '',
    gender: '',
    occupation: '',
    maritalStatus: '',
    education: ''
});

const setUserInfo = () => {
    // formData = userInfo.value;
    formData.name = userInfo.value?.name || '';
    formData.password = userInfo.value?.password || '';
    formData.email = userInfo.value?.email || '';
    formData.phone = userInfo.value?.phone || '';
    formData.address = userInfo.value?.address || '';
    formData.city = userInfo.value?.city || '';
    formData.state = userInfo.value?.state || '';
    formData.zipcode = userInfo.value?.zipcode || '';
    formData.dateOfBirth = userInfo.value?.dateOfBirth || '';
    formData.gender = userInfo.value?.gender || '';
    formData.occupation = userInfo.value?.occupation || '';
    formData.maritalStatus = userInfo.value?.maritalStatus || '';
    formData.education = userInfo.value?.education || '';
};

const updateMember = async () => {
    try {
        const params = {
            ...formData
        };
        params.id = userInfo.value.id;
        await store.userUpdate(params);
        // router.push('/member/list');
    } catch (error) {
        console.log(error);
    }
};

const deleteMember = async () => {
    try {
        console.log('delete member');
        await store.deleteMember();
    } catch (error) {
        console.log(error);
    }
};

onMounted(() => {
    setUserInfo();
});
</script>