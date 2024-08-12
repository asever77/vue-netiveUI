export const PageInfo = {
    state: {
        title: '제목',
    },
    mutations: {
        titleChange(state, value) {
            state.title = value;
        },
    },
    getters: {
        titleName(state) {
            return state.title;
        }
    },
}