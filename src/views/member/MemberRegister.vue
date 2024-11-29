<template>
  <div class="pageView">
    <h1>member register</h1>

    <div class="pageBgbox">
      <!-- <TextInput
        :label="'텍스트 입력'"
        :placeholder="'텍스트를 입력하세요'"
        :id="'input1'"
        :icon="false"
        :single="false"
        :error="'다시 입력해 주세요'"
      /> -->
      <!-- {{ memberList }} -->
      member register
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
        <button type="button" class="btn posi" @click="setMember">가입</button>
      </div>


    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';

import TextInput from '@/components/TextInput.vue';
import { _setMember } from '@/api/dev';

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
const setMember = async () => {
    try {
        const params = {
            name: formData.name,
            password: formData.password,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zipcode: formData.zipcode,
            dateOfBirth: formData.dateOfBirth,
            gender: formData.gender,
            occupation: formData.occupation,
            maritalStatus: formData.maritalStatus,
            education: formData.education
        };
        const result = await _setMember(params);
        console.log(result);
        // memberList.value = result.data.data;
    } catch (error) {
        console.log(error);
    }
};
</script>