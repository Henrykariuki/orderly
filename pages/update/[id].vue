<script setup>
import { reactive } from "vue"
import { useRouter, useRoute } from "vue-router"

const router = useRouter()
const route = useRoute()

const id = route.params.id

const name = ref("")
const address = ref("")
const contact = ref("")

const { data } = await useFetch(`http://localhost:3000/restaurant/${id}`)

if (data.value) {
    name.value = data.value.name,
    address.value = data.value.address,
    contact.value = data.value.contact
}


const addRestaurant = async () => {
    if (!name.value || !address.value || !contact.value) {
        alert("Please fill in all fields before updating.")
        return
    }

    const response = await $fetch(`http://localhost:3000/restaurant/${id}`, {
        method: "PUT",
        body: {
            name: name.value,
            address: address.value,
            contact: contact.value
        }
    })

    if (response) {
        router.push('/home/home')
    }
    
}
</script>

<template>
    <div>
        <p class="text-2xl font-bold">Welcome user, on the update page</p>
        <form class="flex flex-col gap-2">
            <input
                class="border border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2 rounded-sm"
                type="text" placeholder="Name" v-model="name" />
            <input
                class="border border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2 rounded-sm"
                type="text" placeholder="Address" v-model="address" />
            <input
                class="border border-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2 rounded-sm"
                type="text" placeholder="Contact" v-model="contact" />
            <button @click="addRestaurant" type="button">Update restaurant</button>
        </form>
    </div>
</template>
