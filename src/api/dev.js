export const _getMemberList = async () => {
    return await $api.get('/member/list');
};
export const _setMember = async params => {
    return await $api.post('/member/register', params);
};
export const _login = async params => {
    return await $api.post('/member/login', params);
};