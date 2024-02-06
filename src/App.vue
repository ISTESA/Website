<script setup>
    import { onMounted, ref } from 'vue'
    import Footer from './components/Footer.vue'
    const y = ref(0)

    function updateScroll(){
        y.value = window.scrollY
        // console.log(y.value)
    }

    onMounted(() => {   
        window.addEventListener('scroll', updateScroll)
    })
</script>
<template>
    <div class="mx-auto w-full font-sans z-50 fixed top-0 text-rhino transition-all duration-300" :class="{'px-10 py-3' : y > 50}">
        <div class="px-10 w-full" :class="{'px-1 bg-white rounded-2xl shadow-lg' : y > 50}">
            <div class="flex justify-between items-center px-10 py-5">
                <img src="@/assets/media/svg/logo_istesa.svg" class="w-1/12" />
                <nav>
                    <ul class="flex justify-between">
                        <li class="px-4 font-medium"><a href="#home">Home</a></li>
                        <li class="px-4 font-medium"><a href="#about">About</a></li>
                        <li class="px-4 font-medium"><a href="#program">Program</a></li>
                        <li class="px-4 font-medium"><a href="#team">Team</a></li>
                        <li class="px-4 font-medium"><a href="#project">Projects</a></li>
                    </ul>
                </nav>
                <div class="flex">
                    <a href="https://discord.com/invite/WSYfvtex6U" class="bg-rhino text-ghost-white text-lg font-semibold tracking-wide rounded-xl px-5 py-2">
                        <font-awesome icon="fab fa-discord" size="1x"  />
                        Discord
                    </a>
                </div>
            </div>
        </div>
    </div>
    
    <router-view class="relative"></router-view>
    <Footer />
</template>