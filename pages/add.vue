<script setup>
const name = ref("")
const address = ref("")
const contact = ref("")

const router = useRouter()

const addRestaurant = async () => {

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
    <div>
        <p class="text-2xl font-bold">Welcome user, on the add page</p>
        <form class="flex flex-col gap-2">
            <input
                class="border border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2 rounded-sm"
                type="text" placeholder="Name" v-model="name">
            <input
                class="border border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2 rounded-sm"
                type="text" placeholder="Address" v-model="address">
            <input
                class="border border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2 rounded-sm"
                type="text" placeholder="Contact" v-model="contact">
            <button @click="addRestaurant" type="button">Add new restaurant</button>
        </form>
    </div>
</template>

<style scoped>
</style>