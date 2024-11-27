export const _getMemberList = async () => {
    return await $api.get('/api/member/list');
};
export const _setMember = async params => {
    return await $api.post('/api/member/register', params);
};