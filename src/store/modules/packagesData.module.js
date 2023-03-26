const packagesNpmModule = {
    state: {
        chosenPackage: null,
        packagesNpm: []
    },
    actions: {
        getPackagesByName({commit}, aer) {
            console.log(aer)
            commit('setPackages', aer)
        }
    },
    mutations: {
        setChosenPackage(state, payload) {
            state.chosenPackage = payload
        },
        setPackages(state, payload) {
            state.packagesNpm = payload
        }
    },
    getters: {
        chosenPackage: state => state.chosenPackage,
        packagesNpm: state => state.packagesNpm,
    }
}

export default packagesNpmModule
