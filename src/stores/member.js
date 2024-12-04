import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

import { _login, _updateMember, _deleteMember } from '@/api/dev';


export const useLoginStore = defineStore('loginStore', () => {
    const router = useRouter();
    const userInfo = ref(null);
    const userLogin = async (params) => {
        const _params = {
            id: params.id,
            password: params.password
        };
        const result = await _login(_params);
        if (result.data.resultCode === 200) {
            console.log('login>', result.data.data);
            userInfo.value = result.data.data?.member;
            router.push('/member/list');
        } else {
            toast(result.data.resultMessage, 2000, 'error');
        }
    };

    const userUpdate = async (params) => {
        try {
            const result = await _updateMember(params);
            console.log('_updateMember result', result);
            if (result.data.resultCode === 200) {
                userInfo.value = result.data.data;
                toast(result.data.resultMessage, 2000, 'success');
            }
        } catch (error) {
            console.log(error);
            toast(result.data.resultMessage, 2000, 'error');
        }
    };

    const logout = () => {
        userInfo.value = null;
        router.push('/login');
    };

    const deleteMember = async () => {
        try {
            // const params = {
            //     id: userInfo.value?.id
            // };
            const result = await _deleteMember(userInfo.value?.id);
            if (result.data.resultCode === 200) toast(result.data.resultMessage, 2000, 'success');
            router.push('/login');
        } catch (error) {
            console.log(error);
            toast(result.data.resultMessage, 2000, 'error');
        }
    };

    return { userInfo, userLogin, userUpdate, logout, deleteMember };
});
