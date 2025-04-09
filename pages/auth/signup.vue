<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");

const router = useRouter();

// Redirect user if already logged in
onNuxtReady(() => {
    const user = localStorage.getItem("user-info");
    if (user) {
        router.push("/home/home");
    }
});

const signUp = async () => {
  if (!name.value || !email.value || !password.value) {
    alert("Please fill in all fields before signing up.");
    return;
  }

  const response = await $fetch("http://localhost:3000/user", {
    method: "POST",
    body: {
      name: name.value,
      email: email.value,
      password: password.value
    },
    onError(error) {
      console.error("Error during sign up:", error);
      alert("An error occurred during sign-up. Please try again.");
    },
  });

  if (response) {
    alert("Sign up successful!");
    localStorage.setItem("user-info", JSON.stringify(response));
    router.push('/home/home');
  }
};


</script>

<template>
  <div class="min-h-screen flex justify-center items-center ">
    <div class="  p-8 rounded-2xl shadow-xl flex flex-col items-center max-w-md w-full ">
      <div class="flex flex-col items-center mb-2">
        <img class="w-40" src="/images/ologo.jpg" alt="Logo" />
        <p class="font-semibold text-2xl">Sign up</p>
      </div>
      <div class="flex flex-col gap-4 w-80">
        <input
          class="border border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2 rounded-sm"
          type="text" v-model="name" placeholder="Enter Name" />
        <input
          class="border border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2 rounded-sm"
          type="email" v-model="email" placeholder="Enter Email" />
        <input
          class="border border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2 rounded-sm"
          type="password" v-model="password" placeholder="Enter Password" />
        <button class="hover:bg-black/70 border p-2 rounded-full bg-black text-white transition duration-100"
          @click="signUp">
          Sign up
        </button>
      </div>
    </div>
  </div>
</template>
