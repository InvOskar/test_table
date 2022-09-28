<template>
  <div class="modal">
    <div class="modal-content">
      <p>Create user</p>
      <label>Full name:</label>
      <main-input placeholder="Name Surname" v-model="name" />
      <span v-if="v$.name.$error">{{v$.name.$errors[0].$message}}</span>
      <label>Email:</label>
      <main-input placeholder="example@test.com" v-model="email" />
      <span v-for="error in v$.email.$errors" :key="error">{{ error.$message }}</span>
      <label>Phone:</label>
      <main-input
        v-model="phone"
        placeholder="+375 (XX) XXX-XX-XX"
        v-maska="'+375 (##) ###-##-##'"
      />
      <span v-for="error in v$.phone.$errors" :key="error">{{ error.$message }}</span>
      <div class="btns">
        <main-button @click="$emit('modal')">Close</main-button>
        <main-button @click="submitForm()">Create</main-button>
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from "./UI/MainButton.vue";
import MainInput from "./UI/MainInput.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { mapActions } from "vuex";

const isFullName = (name) => {
    let arr = name.split(" ");
    if(arr.length === 2 && arr[0].length > 0 && arr[1].length > 0) return true;
    else return false;
};

export default {
  components: { MainInput, MainButton },
  data() {
    return {
      v$: useVuelidate(),
      name: "",
      email: "",
      phone: "",
    };
  },
  validations() {
    return {
      name: { required, isFullName: helpers.withMessage("Write your full name", isFullName) },
      email: { required, email },
      phone: { required, minLegth: minLength(19) },
    };
  },
  methods: {
    ...mapActions(["addUser"]),
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let user = {
          name: this.name,
          email: this.email,
          phone: this.phone,
        };
        this.addUser(user);
        this.$emit("modal");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba($color: #6a6a6a, $alpha: 0.5);

  &-content {
    background: #e6eaed;
    width: 50%;
    height: 450px;
    padding: 20px 50px;
    border-radius: 40px;

    display: grid;
    align-items: center;

    & > p {
      font-size: 28px;
      font-weight: bold;
      text-align: center;
      color: #039a9a;
    }

    & > label {
      font-size: 22px;
      color: #454d54;
      text-decoration: underline;
      text-decoration-color: #039a9a;
    }

    & > span {
        color: #e72612;
    }

    & > .btns {
      display: flex;
      gap: 30px;

      & > button:hover {
        background: linear-gradient(
            0deg,
            rgba(3, 154, 154, 0.15),
            rgba(3, 154, 154, 0.15)
          ),
          #ffffff;
        color: #039a9a;
      }
    }
  }
}
</style>
