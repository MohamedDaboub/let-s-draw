<template>
    <button class="bg-bleufonce px-8 py-2 rounded-lg">
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