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

    const nav = ref(false)
    const navbar = ref(false)
    const shade = ref(false)
    const navbar_c = ref(false)

    function toggleNavbar(){
        if(nav.value){
            setTimeout(function(){
                navbar_c.value = !navbar_c.value
            }, 200)

            setTimeout(function(){
                shade.value = !shade.value
            }, 200)

            setTimeout(function(){
                navbar.value = !navbar.value
            }, 650)
        }
        else{
            setTimeout(function(){
                navbar_c.value = !navbar_c.value
            }, 200)

            navbar.value = !navbar.value

            setTimeout(function(){
                shade.value = !shade.value
            }, 200)
        }

        nav.value = !nav.value
    }

</script>
<template>
    <div class="mx-auto hidden md:flex w-full font-sans z-50 fixed top-0 text-rhino transition-all duration-300" :class="{'px-10 py-3' : y > 50}">
        <div class="px-10 w-full" :class="{'px-1 bg-white rounded-2xl shadow-lg' : y > 50}">
            <div class="flex justify-between items-center px-10 py-5">
                <img src="@/assets/media/svg/logo_istesa.svg" class="w-1/12" />
                <nav>
                    <ul class="flex justify-between">
                        <li class="px-4 font-medium"><a href="#home">Home</a></li>
                        <li class="px-4 font-medium"><a href="#about">About</a></li>
                        <li class="px-4 font-medium"><a href="#team">Team</a></li>
                        <li class="px-4 font-medium"><a href="#program">Program</a></li>
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

    <div class="p-6 flex md:hidden justify-between items-center z-40 fixed top-0 bg-darkblue w-full">
        <img src="@/assets/media/svg/logo_istesa2.svg" class="w-1/3" />

        <button @click="toggleNavbar()">
            <font-awesome icon="bars" color="white" size="2x" />
        </button>
    </div>

    <div class="z-50 fixed top-0 right-0 w-full h-screen flex items-center justify-end transition-all duration-500" :class='{"block" : navbar == true, "bg-hollow-black" : shade == true, "bg-transparent" : shade == false, "hidden" : navbar == false}'>
        <div class="bg-white h-screen py-4 transition-all duration-500" :class='{"w-2/3 block px-5" : navbar_c == true, "w-0 px-0" : navbar_c == false}'>
            <div class="flex items-center justify-between border-b border-gray-300 py-3">
                <img src="@/assets/media/svg/LOGO_CRC_FULLRES-BLACK-FIT.svg" class="w-1/5" />

                <button @click="toggleNavbar()">
                    <font-awesome icon="times" size="2x" />
                </button>
            </div>

            <nav>
                <ul class="flex flex-col justify-between text-right">
                    <li class="py-6 pr-6 w-full border-b font-medium"><a href="#home_m">Home</a></li>
                    <li class="py-6 pr-6 w-full border-b font-medium"><a href="#about_m">About</a></li>
                    <li class="py-6 pr-6 w-full border-b font-medium"><a href="#team_m">Team</a></li>
                    <li class="py-6 pr-6 w-full border-b font-medium"><a href="#program_m">Program</a></li>
                    <li class="py-6 pr-6 w-full border-b font-medium"><a href="#project_m">Projects</a></li>
                </ul>
            </nav>
        </div>
    </div>
    
    <router-view class="relative"></router-view>
    <Footer />
</template>