<template>
    <div class="p-6 flex bg-bleufonce rounded-xl">
            <img class="rounded-full w-32 h-32" :src="image" alt="Image de l'artiste">

            <div class="flex flex-col text-white ml-4">
                <p class="font-bold text-2xl mt-6">{{ nom }}</p>
                <p class="text-lg ml-4 mt-1">{{ role }}</p>
            </div>

    </div>
</template>
<script>

export default {
    props :{
        image: String,
        nom: String,
        role: String,
    },
}
</script>