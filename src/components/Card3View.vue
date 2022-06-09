<template>
    <div class="flex bg-noir rounded-xl flex-col">
            <img class="rounded-t-lg w-full h-full" :src="image" alt="Image de l'artiste">
            <div class="flex text-white mx-4">
                <p class="font-bold text-2xl my-6">{{ nom }}</p>
            </div>

    </div>
</template>
<script>

export default {
    props :{
        image: String,
        nom: String,
    },
}
</script>