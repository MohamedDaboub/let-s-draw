<template>
    <button class="bg-bleufonce px-6 py-2 rounded-3xl absolute right-24">
        <h3 class="text-white">{{Nom}}</h3>
    </button>
</template>
<script>
export default {
    props: {
        Nom: String
    }
}
</script>