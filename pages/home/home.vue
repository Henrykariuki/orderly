<script setup>
const router = useRouter();

 const name = ref('')

// Redirect user if already logged in
onNuxtReady(() => {
    const user = localStorage.getItem("user-info");
    if (!user) {
        router.push('/auth/signup');
    }
    
    const parsedUser = JSON.parse(user);

    if (parsedUser) {
        name.value = parsedUser.name
    }
});

const { data: results } = await useFetch('http://localhost:3000/restaurant');

const deleteRestaurant = async (item) => {
    const response = await $fetch(`http://localhost:3000/restaurant/${item.id}`, {
        method: "DELETE"
    })

    if (response) {
        results.value = results.value.filter((restaurant) => restaurant.id !== item.id)
    }
} 

</script>

<template>
    <div class="h-screen px-6 ">
        <div class="flex justify-center pt-10">
            <p class="text-2xl font-bold">Welcome {{ name }}, on the home page</p>
        </div>
        <div class="flex flex-col gap-6 mt-10 grid grid-cols-1 lg:grid-cols-2">
            <div class="flex flex-row justify-between items-center hover:shadow-lg transition duration-100 shadow-md px-3 py-4 md:w-lg bg-gray-200 rounded-md"
                v-for="(item, index) in results" :key="item.index">
                <div>
                    <p class="text-lg font-semibold">{{ item.name }}</p>
                </div>
                <div class="flex flex-row gap-2 text-gray-700 text-sm">
                    <p>{{ item.contact }}</p>
                    <p>{{ item.address }}</p>
                </div>
                <div class="flex flex-row gap-2 items-center text-sm">
                    <NuxtLink class="text-green-500 hover:text-green-400 transition duration-100"
                        :to="`/update/${item.id}`">Update</NuxtLink>
                    <button class="text-red-500 hover:text-red-400 transition duration-100"
                        @click="deleteRestaurant(item)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style> 