const appState = {
    state: {
        loader: 0
    },
    mutations: {
        incrementLoader({state}) {
            state.loader++
        },
        decrementLoader({state}) {
            state.loader--
        },
    },
    getters: {}
}

export default appState
