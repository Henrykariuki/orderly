<script setup>
const email = ref("")
const password = ref("")

const router = useRouter();

// Redirect user if already logged in
onNuxtReady(() => {
    const user = localStorage.getItem("user-info");
    if (user) {
        router.push("/home/home");
    }
});

const logIn = async () => {
    const response = await $fetch(`http://localhost:3000/user?email=${email.value}&password=${password.value}`)
    
    if(response && response.length > 0) {
        localStorage.setItem('user-info', JSON.stringify(response[0]))
        router.push("/home/home");
    }

    console.log(response);
}

</script>

<template>
    <div class="min-h-screen flex flex-col justify-center items-center">
        <div class=" p-8 rounded-2xl shadow-xl flex flex-col items-center max-w-md w-full ">
            <div class="flex flex-col items-center mb-2">
                <img class=" w-40" src="/images/ologo.jpg">
                <p class="font-semibold text-2xl">Log in</p>
            </div>
            <div class="flex items-center flex-col gap-4 ">
                <input
                    class="border border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2 p-2 w-80 rounded-sm"
                    type="email" v-model="email" placeholder="email">
                <input
                    class="border border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2 p-2 w-80 rounded-sm"
                    type="password" v-model="password" placeholder="password">
                <button
                    class="hover:bg-black/70 border p-2 rounded-full bg-black w-80 text-white transition duration-100"
                    @click="logIn">
                    Log in
                </button>
                <div class="flex gap-1">
                    Don't have an account?<NuxtLink class="underline" to="/auth/signup">Sign up</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>