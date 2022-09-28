import { createStore } from "vuex";
import api from "@/api/userApi";

export default createStore({
  state: {
    users: [],
    filter: null,
  },
  getters: {
    getUsers: (state) => state.users,
    getFilter: (state) => state.filter,
  },
  mutations: {
    setFilter(state) {
      if (state.filter === null) state.filter = true;
      else if (state.filter) state.filter = false;
      else state.filter = null;
    },
  },
  actions: {
    apploadUsers({ state }) {
      if (!localStorage.users || localStorage.users.length < 3) {
        api.getUsers().then((res) => {
          res.data.forEach((element) => {
            state.users.push({
              id: element.id,
              name: element.name,
              email: element.email,
              phone: element.phone.split(" ")[0],
            });
          });
          localStorage.setItem("users", JSON.stringify([...state.users]));
        });
      } else {
        state.users = JSON.parse(localStorage.getItem("users"));
      }
    },
    setFilter({ commit }) {
      commit("setFilter");
    },
    deleteUser({ state }, id) {
      const index = state.users.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
      localStorage.setItem("users", JSON.stringify([...state.users]));
    },
    addUser({ state }, user) {
      const id = Math.max(...state.users.map((user) => user.id)) + 1;
      state.users.push({ id, ...user });
      localStorage.setItem("users", JSON.stringify([...state.users]));
    },
  },
  modules: {},
});
