export const Layer = {
    state: {
        zindex: 100,
        view:0,
    },
    mutations: {
        setZindex(state, value) {
            state.zindex = value;
        }
    },
    actions: {
        globalAction: {
            handler({ commit }) {
                commit("setZindex", 199);
            }
        }
    },
    getters: {
        zindexUp(state) {
            return state.zindex + 1;
        },
        zindexDown(state) {
            return state.zindex - 1 < 100 ? 100 : state.zindex - 1;
        },
        viewIncrease(state) {
            return state.veiw + 1;
        },
        viewDecrease(state) {
            return state.veiw - 1;
        }
    },
}