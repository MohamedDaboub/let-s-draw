<template>
    <button class="bg-bleufonce px-10 py-4 rounded-lg absolute right-24">
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