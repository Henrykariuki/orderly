<script setup>
const name = ref("")
const address = ref("")
const contact = ref("")

const router = useRouter()

const useName = ref("")

onNuxtReady(() => {
    const user = localStorage.getItem("user-info");
    

    const parsedUser = JSON.parse(user);

    if (parsedUser) {
        useName.value = parsedUser.name
    }
});

const addRestaurant = async () => {

    if(!address.value || !name.value || !contact.value) {
        alert("Please fill in all fields before adding.")
        return
    }

    const response = await $fetch('http://localhost:3000/restaurant', {
        method: "POST",
        body: {
            name: name.value,
            address: address.value,
            contact: contact.value
        }
    })

    if(response) {
        router.push('/home/home')
    }
}
</script>

<template>
    <div class="flex flex-col gap-10 pt-4">
        <div class="flex justify-center">
            <p class="text-2xl font-bold">Welcome {{ useName }}, on the add page</p>
        </div>
        <div class="flex justify-center">
            <form class="flex flex-col gap-2 max-w-md w-full px-3">
                <input
                    class="border border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2 rounded-sm"
                    type="text" placeholder="Enter name" v-model="name">
                <input
                    class="border border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2 rounded-sm"
                    type="text" placeholder="Enter address" v-model="address">
                <input
                    class="border border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2 rounded-sm"
                    type="text" placeholder="Enter contact" v-model="contact">
                <button class="hover:text-cyan-500 transition duration-100 mt-4" @click="addRestaurant"
                    type="button">Add new restaurant</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
</style>