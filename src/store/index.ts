import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    anyCodeModalVisible: false,
  },
  mutations: {
    setHidden(state) {
      state.anyCodeModalVisible = false;
    },
    setVisible(state) {
      state.anyCodeModalVisible = true;
    },
  },
  actions: {
    toggleModal({ state, commit }) {
      if (state.anyCodeModalVisible) {
        commit('setHidden');
      } else {
        commit('setVisible');
      }
    },
  },
  getters: {
    getModalState(state) {
      return state.anyCodeModalVisible;
    },
  },
  modules: {
  },
});
