export const PageInfo = {
    state: {
        title: '제목',
        checkup: null,
        tab: 1,
        my: {
            age: '',
            gender: '',
            q1: '',
            q2: '',
            q3: '',
        },
    },
    mutations: {
        titleChange(state, value) {
            state.title = value;
        },
        checkupChange(state, value) {
            state.checkup = value;
        },
        tabSelect(state, value) {
            state.tab = value;
        },
        myInfoChange(state, value) {
            state.my = value;
        },
    },
    getters: {
        titleName(state) {
            return state.title;
        },
        checkupName(state) {
            return state.checkup;
        },
        tabName(state) {
            return state.tab;
        },
        myInfo(state) {
            return state.my;
        },
    },
}