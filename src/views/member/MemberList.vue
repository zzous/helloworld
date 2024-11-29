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
        member list
        <table class="table reg">
            <thead>
                <th>name</th>
                <th>email</th>
                <th>phone</th>
                <th>address</th>
                <th>gender</th>
                <th>dateOfBirth</th>
            </thead>
            <template v-for="member in memberList" :key="member.id">
                <tr>
                    <td>{{ member.name }}</td>
                    <td>{{ member.email }}</td>
                    <td>{{ member.phone }}</td>
                    <td>{{ member.address }}</td>
                    <td>{{ member.gender }}</td>
                    <td>{{ member.dateOfBirth }}</td>
                </tr>
            </template>
        </table>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import TextInput from '@/components/TextInput.vue';
import {_getMemberList} from '@/api/dev';

const memberList = ref();
const getMemberList = async () => {
    try {
        const result = await _getMemberList();
        console.log(result);
        memberList.value = result.data.data;
    } catch (error) {
        console.log(error);
    }
};
onMounted(() => {
    getMemberList();
});
</script>