import { ActionContext } from 'vuex'
interface IState {
    token: string
}
const state: IState = {
    token: "",
}
export default {
    namespaced: true,
    state,
    mutations: {
        'authorizedLogin': (state: any, data: string) => {
            state.token = data
        }
    },

}