<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const user = useState('user-info', () => null); //  Reactive user state

if (process.client) {
    user.value = localStorage.getItem('user-info'); // Only fetch localStorage on the client
}

const logOut = () => {
    localStorage.clear();
    user.value = null; // Reset the user state
    router.push('/');
};
</script>


<template>
    <div>
        <header class="shadow-md bg-[#FAF9F6] flex justify-around py-4 text-lg font-semibold">
            <NuxtLink to="/home/home"
                class="py-1 px-6 rounded-full hover:bg-black hover:text-white transition duration-100">
                Home
            </NuxtLink>
            <NuxtLink v-if="user" to="/add" class="py-1 px-6 rounded-full hover:bg-black hover:text-white transition duration-100">
                Add Restaurant
            </NuxtLink>
            <button v-if="user" class="py-1 px-6 rounded-full hover:bg-black hover:text-white transition duration-100"
                @click="logOut">
                Logout
            </button>
        </header>
    </div>
</template>

<style scoped>

</style>