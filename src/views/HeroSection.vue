<script setup>
    import { onMounted, ref } from 'vue'
    const a = ref(0)

    // function updateScroll(){
    //     a.value = window.scrollY;
    //     console.log(a.value)
    // }

    // onMounted(() => {   
    //     window.addEventListener('scroll', updateScroll)
    // })
</script>
<template>
    <div class="flex items-center justify-between w-100 px-20 py-32" id="home">
        <div class="w-1/2">
            <img :src="'/media/svg/abstract ISTESA.svg'" class="w-1/6 pb-5" />
            <h1 class="text-5xl font-bold text-rhino leading-tight">Embark on a Journey of Designing Tomorrow's World, Today.</h1>
            <p class="text-lg font-medium text-hollow-black leading-tight pt-5">We are an innovative campus organization that provides endless support for those who want to embark on a journey on developing tomorrow's world.</p>

            <button class="bg-schoolbus text-ghost-white mt-5 text-xl shadow-2xl font-semibold tracking-wide rounded-xl px-6 py-3">
                <font-awesome icon="fas fa-lightbulb" size="1x" />
                Learn more!
            </button>
        </div>
        <div class="w-1/2">
            <img :src="'/media/img/hero-banner.png'" />
        </div>
    </div>
</template>