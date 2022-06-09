<template>
<h2 class="py-10 text-center font-chivo text-2xl text-white"> Liste de dessin</h2>
         <div class="flex justify-between lg:mx-16 mx-6 my-10 items-center py-10">
          <h2 class="text-lg md:text-2xl text-center font-chivo text-white">Creer un nouveau dessin</h2>
          <RouterLink class="my-2" to="/CreateDessin"><plus></plus></RouterLink>
        </div>
<div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(345px,1fr))] gap-8 md:mx-10  py-10">
    <Card3/>
</div>
</template>
<script>
import plus from "../../components/icons/PlusView.vue"
import Card3 from '../../components/Card3View.vue'
export default {
    name: 'ListeParent',
    components: {Card3,plus}
}
</script>
