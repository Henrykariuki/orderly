<script setup>
const router = useRouter()

const logOut = () => {
    localStorage.clear()
    router.push('/')
}
</script>

<template>
    <div>
        <div class=" flex justify-around py-4 text-lg font-semibold">
            <NuxtLink to="/home/home"
                class="py-1 px-6 rounded-full hover:bg-black hover:text-white transition duration-100">
                Home
            </NuxtLink>
            <NuxtLink to="/add" class="py-1 px-6 rounded-full hover:bg-black hover:text-white transition duration-100">
                Add Restaurant
            </NuxtLink>
            <button to="" class="py-1 px-6 rounded-full hover:bg-black hover:text-white transition duration-100"
                @click="logOut">
                Logout
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>