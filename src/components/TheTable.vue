<template>
  <table class="table">
    <tr>
      <th>ID</th>
      <th class="filter" @click="setFilter">
        Name
        <img v-if="getFilter === null" src="@/assets/normal.svg" />
        <img v-else-if="getFilter" src="@/assets/down-active.svg" />
        <img v-else src="@/assets/up-active.svg" />
      </th>
      <th>Email</th>
      <th>Phone</th>
      <th></th>
    </tr>
    <tr v-for="user in users" :key="user.id">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.phone }}</td>
      <td><main-button @click="deleteUser(user.id)">Delete</main-button></td>
    </tr>
  </table>
</template>

<script>
import MainButton from "./UI/MainButton.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { MainButton },
  props: {
    users: {
      required: true,
      type: Array,
    },
  },
  computed: {
    ...mapGetters(["getFilter"]),
  },
  methods: {
    ...mapActions(["setFilter", "deleteUser"]),
  },
};
</script>

<style lang="scss" scoped>
.table {
  margin: 0 50px;
  padding: 20px;
  text-align: center;
  background: #e6eaed;
  border-radius: 20px;

  & > tr {
    background: #f3f6f8;

    & > th {
      font-size: 20px;
      padding: 8px 0;
      border-radius: 8px;

      &.filter {
        cursor: pointer;

        & > img {
          width: 8px;
          margin: 0 8px;
        }
      }
    }
    & > td {
      font-size: 18px;
      border-radius: 8px;

      & > button:hover {
        color: #e72612;
        background: rgba(231, 38, 18, 0.1);
      }
    }

    &:not(:first-child):hover {
      background: #6b767f;
      color: #e6eaed;
    }
  }
}
</style>
