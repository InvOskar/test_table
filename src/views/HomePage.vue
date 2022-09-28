<template>
  <div class="home">
    <h1 class="home-title">Users table</h1>
    <the-top-bar
      @search="search($event)"
      @modal="isModal = true"
      :count="searchUsers(searchText).length"
    />
    <the-table :users="searchUsers(searchText)" />
    <new-user-modal v-if="isModal" @modal="isModal = false" />
  </div>
</template>

<script>
import TheTable from "@/components/TheTable.vue";
import TheTopBar from "@/components/TheTopBar.vue";
import NewUserModal from "@/components/NewUserModal.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { TheTable, TheTopBar, NewUserModal },
  name: "HomePage",
  data() {
    return {
      searchText: "",
      isModal: false,
    };
  },
  methods: {
    ...mapActions(["apploadUsers"]),
    search($event) {
      this.searchText = $event;
    },
    getSortedUsers(users) {
      if (this.getFilter === null) {
        return users.sort((a, b) => a.id - b.id);
      } else if (this.getFilter) {
        return users.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        return users.sort((a, b) => b.name.localeCompare(a.name));
      }
    },
    searchUsers($event) {
      if ($event != "") {
        let searchedUsers = this.getUsers.filter((user) => {
          return (
            user.name.toLowerCase().includes($event.toLowerCase()) +
            user.email.toLowerCase().includes($event.toLowerCase()) +
            user.phone.includes($event) +
            (user.id == $event)
          );
        });
        return this.getSortedUsers(searchedUsers);
      } else {
        return this.getSortedUsers(this.getUsers);
      }
    },
  },
  computed: {
    ...mapGetters(["getUsers", "getFilter"]),
  },
  mounted() {
    this.apploadUsers();
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  &-title {
    text-align: center;
    color: #039a9a;
    font-size: 4em;
  }
}
</style>
