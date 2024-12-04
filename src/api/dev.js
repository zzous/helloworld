export const _getMemberList = async () => {
    return await $api.get('/member/list');
};
export const _setMember = async params => {
    return await $api.post('/member/register', params);
};
export const _updateMember = async params => {
    return await $api.post('/member/update', params);
};
export const _login = async params => {
    return await $api.post('/member/login', params);
};
export const _deleteMember = async params => {
    return await $api.delete('/member/delete', params);
};