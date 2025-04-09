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

    if (parsedUser.length > 0) {
        name.value = parsedUser[0].name
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
    <div>
        <p class="text-2xl font-bold">Welcome user, on the home page</p>
        <div class="flex flex-row gap-6" v-for="(item, index) in results" :key="item.index">
            <div>{{ item.id }}</div>
            <p>{{ item.name }}</p>
            <NuxtLink :to="`/update/${item.id}`">Update</NuxtLink>
            <button @click="deleteRestaurant(item)">Delete</button>
        </div>
    </div>
</template>

<style scoped>
</style> 