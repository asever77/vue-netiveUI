export const Checkup = {
    state: {
        view:0,
    },
    mutations: {
        setItem(state, value) {
            state.view = value;
        }
    },
    actions: {
        // globalAction: {
        //     handler({ commit }) {
        //         commit("setZindex", 199);
        //     }
        // }
    },
    getters: {
        item(state) {
            return state;
        },
       
    },
}