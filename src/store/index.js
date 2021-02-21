import Vue from 'vue';
import Vuex from 'vuex';
import productsModules from './products';
import cartModules from './cart';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: false,
    },
    actions: {
        updateLoading(context, status) {
            context.commit('LOADING', status);
        },
    },
    mutations: {
        LOADING(state, status) {
            state.isLoading = status;
        },
    },
    // 當成 computed 使用給 app.vue 使用
    getters: {
        isLoading: state => state.isLoading,
    },
    modules: {
        productsModules,
        cartModules,
    }
})