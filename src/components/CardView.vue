<template>
    <figure class=" flex flex-col bg-white mx-4">
        <img class=" rounded-t-lg mt-5 w-full  " :src="image" alt="">
        <figcaption class=" flex flex-col px-5 py-7 border-2 border-t-0 relative">
            <div class=" relative flex flex-col bg-white">
                <h3 class="text-2xl text-gray-900 ">{{ nom }}</h3>
                <p class="my-2 not-italic text-gray-500">{{ nom1 }}</p>
                <div class=" -order-1 flex items-center">
                    <p></p>
                </div>
                <div class="flex justify-between text-sm">
                    <div><p class=" inline-block align-top">{{ nbrSDB }} Jour</p></div>
                    <div class="flex mt-8 gap-3">
                        <star :class="{ 'fill-yellow-400': favori }"></star>
                        <star :class="{ 'fill-yellow-400': favori }"></star>
                        <star :class="{ 'fill-yellow-400': favori }"></star>
                        <star :class="{ 'fill-yellow-400': favori }"></star>
                        <star :class="{ 'fill-yellow-400': favori }"></star>
                    </div>
                </div>
            </div>
        </figcaption>
    </figure>
</template>
<script>
import star from './icons/StarView.vue'
export default {
    props:{
        favoris:Boolean,
        nom: String,
        nom1: String,
        favori: Boolean,
        image: String, 
        nbrSDB: Number,
    },
       
    
    components:{star}
}
</script>