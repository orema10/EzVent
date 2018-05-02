import Vue from "vue";
import Vuex from "vuex";
import hallService from "./service/hall.service";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    halls: [],
    filterBy: {name: ''}
  },
  getters: {
    halls(state) {
      return state.halls.filter(hall => {
        var hallName = hall.name.toLowerCase();
        var filterByName = state.filterBy.name.toLowerCase();
        return hallName.includes(filterByName);
      });
    }
  },
  mutations: {
    updateHalls(state, { halls }) {
      state.halls = JSON.parse(JSON.stringify(halls));
    },
    changeFilter(state, {filterBy}) {
      state.filterBy = filterBy;
    }
  },
  actions: {
    setHalls(store) {
      return hallService.getHalls().then(halls => {
        store.commit({ type: "updateHalls", halls });
      });
    }
  }
});
