<script setup>
    import { onMounted } from 'vue'
    import { initFlowbite } from 'flowbite'

    onMounted(() => {
        initFlowbite();
    })
</script>
<template>
    <div class="hidden md:flex flex-col bg-gradient-to-bl from-[#02A3FE] via-[#5A4CF9] to-[#632ABE] flex-nowrap items-center justify-center w-full py-28 h-screen" id="program">
        <h1 class="text-4xl font-bold text-white">Our Programs</h1>

        <div class="flex w-5/6 pt-10">
            <div class="flex flex-col bg-white px-6 py-10 bg-cover rounded-2xl shadow-xl w-3/4 mx-2 justify-between">
                <img src="@/assets/media/img/program_logo/aente.png" class="w-1/2">

                <h1 class="text-rhino text-xl pt-8 pb-2 font-bold tracking-wide">Art Exhibition and Tech Exposition</h1>
                <p class="text-rhino grow">An annual event where students shares their Art creation and we also held a Technological talkshow and related events.</p>

                <a href="#" class="bg-gradient-to-bl from-[#1E0065] via-[#53109F] to-[#7605AB] text-white text-center font-black p-2 mt-5 tracking-wide rounded-lg">Learn More</a>
            </div>

            <div class="flex flex-col px-6 py-10 bg-white rounded-2xl shadow-xl w-3/4 mx-2 justify-between">
                <img src="@/assets/media/img/program_logo/ideahack.svg" class="w-1/2">

                <h1 class="text-rhino text-xl pt-8 pb-2 font-semibold tracking-wide">IdeaHACK</h1>
                <p class="text-rhino grow">An annual event where students start making their own business idea and make it their projects to pitch it up.</p>

                <a href="#" class="bg-gradient-to-bl from-[#D70040] via-[#FF3D00] to-[#FF7C6A] text-white text-center font-black p-2 mt-5 tracking-wide rounded-lg">Learn More</a>
            </div>

            <div class="flex flex-col px-6 py-10 bg-white rounded-2xl shadow-xl w-3/4 mx-2 justify-between">
                <img src="@/assets/media/img/program_logo/codeblaze.svg" class="w-1/2">

                <h1 class="text-rhino text-xl pt-8 pb-2 font-semibold tracking-wide grow">CodeBlaze</h1>
                <p class="text-rhino grow">A full 1 month training bootcamp focusing on building programming fundamentals on students by learning the basics and create a simple project.</p>

                <a href="#" class="bg-gradient-to-bl from-[#f9417a] via-[#f65b33] to-[#fbca31] text-white text-center font-black p-2 mt-5 tracking-wide rounded-lg">Learn More</a>
            </div>

            <div class="flex flex-col px-6 py-10 bg-white rounded-2xl shadow-xl w-3/4 mx-2 justify-between">
                <img src="@/assets/media/img/program_logo/pojoksuara.svg" class="w-1/2">

                <h1 class="text-rhino text-xl pt-8 pb-2 font-semibold tracking-wide">Pojok Suara</h1>
                <p class="text-rhino grow">A sharing session that held by students who wants to share their thoughts and ideas.</p>

                <a href="#" class="bg-gradient-to-bl from-[#002fd1] to-[#3766ed] text-white text-center font-black p-2 mt-5 tracking-wide rounded-lg">Learn More</a>
            </div>
        </div>
    </div>

    <div class="flex flex-col md:hidden items-center justify-center py-10 gap-5 bg-gradient-to-bl from-[#02A3FE] via-[#5A4CF9] to-[#632ABE] h-[65vh]" id="program_m">
        <h1 class="text-4xl font-bold text-white pb-4 text-center">Our Programs</h1>

        <div id="controls-carousel" class="relative w-full h-full" data-carousel="static">
            <!-- Carousel wrapper -->
            <div class="relative h-full overflow-hidden rounded-lg">
                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out px-5" data-carousel-item>
                    <div class="flex flex-col bg-white px-6 py-10 bg-cover rounded-2xl shadow-xl mx-2 justify-between h-full flex-1">
                        <img src="@/assets/media/img/program_logo/aente.png" class="w-1/2">

                        <h1 class="text-rhino text-xl pt-8 pb-2 font-bold tracking-wide">Art Exhibition and Tech Exposition</h1>
                        <p class="text-rhino grow">An annual event where students shares their Art creation and we also held a Technological talkshow and related events.</p>

                        <a href="#" class="bg-gradient-to-bl from-[#1E0065] via-[#53109F] to-[#7605AB] text-white text-center font-black p-2 mt-5 tracking-wide rounded-lg">Learn More</a>
                    </div>
                </div>
                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out px-5" data-carousel-item="active">
                    <div class="flex flex-col bg-white px-6 py-10 bg-cover rounded-2xl shadow-xl mx-2 justify-between h-full">
                        <img src="@/assets/media/img/program_logo/ideahack.svg" class="w-1/2">

                        <h1 class="text-rhino text-xl pt-8 pb-2 font-semibold tracking-wide">IdeaHACK</h1>
                        <p class="text-rhino grow">An annual event where students start making their own business idea and make it their projects to pitch it up.</p>

                        <a href="#" class="bg-gradient-to-bl from-[#D70040] via-[#FF3D00] to-[#FF7C6A] text-white text-center font-black p-2 mt-5 tracking-wide rounded-lg">Learn More</a>
                    </div>
                </div>
                <!-- Item 3 -->
                <div class="hidden duration-700 ease-in-out px-5" data-carousel-item>
                    <div class="flex flex-col bg-white px-6 py-10 bg-cover rounded-2xl shadow-xl mx-2 justify-between h-full">
                        <img src="@/assets/media/img/program_logo/codeblaze.svg" class="w-1/2">

                        <h1 class="text-rhino text-xl pt-8 pb-2 font-semibold tracking-wide">CodeBlaze</h1>
                        <p class="text-rhino grow">A full 1 month training bootcamp focusing on building programming fundamentals on students by learning the basics and create a simple project.</p>

                        <a href="#" class="bg-gradient-to-bl from-[#f9417a] via-[#f65b33] to-[#fbca31] text-white text-center font-black p-2 mt-5 tracking-wide rounded-lg">Learn More</a>
                    </div>
                </div>
                <!-- Item 4 -->
                <div class="hidden duration-700 ease-in-out px-5" data-carousel-item>
                    <div class="flex flex-col bg-white px-6 py-10 bg-cover rounded-2xl shadow-xl mx-2 justify-between h-full">
                        <img src="@/assets/media/img/program_logo/pojoksuara.svg" class="w-1/2">

                        <h1 class="text-rhino text-xl pt-8 pb-2 font-semibold tracking-wide">Pojok Suara</h1>
                        <p class="text-rhino grow">A sharing session that held by students who wants to share their thoughts and ideas.</p>

                        <a href="#" class="bg-gradient-to-bl from-[#002fd1] to-[#3766ed] text-white text-center font-black p-2 mt-5 tracking-wide rounded-lg">Learn More</a>
                    </div>
                </div>
            </div>
            <!-- Slider controls -->
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
    </div>
</template>