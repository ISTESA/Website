<template>
    <div class="hidden md:flex flex-col bg-program items-center justify-center py-28 bg-cover flex-nowrap" id="project">

        <div class="flex flex-row overflow-x-auto py-10 px-24 scrollbar-hide">
            <div class="flex flex-col px-6 py-10 bg-gradient-to-bl from-[#02A3FE] via-[#5A4CF9] to-[#632ABE] rounded-2xl shadow-xl w-1/5 mx-2 justify-between items-center shrink-0">
                <img src="@/assets/media/svg/featured/learnwith.svg" class="w-full grow">

                <img src="@/assets/media/svg/startup/LearnWith.svg" class="w-2/3 pt-5 pb-7 grow">

                <!-- <p class="text-white grow">A course website that offer courses to develop your skills, that can be accessed at anytime, everywhere.</p> -->

                <!-- <p class="text-white">An annual event where students shares their Art creation and we also held a Technological talkshow and related events.</p> -->

                <a href="#" class="bg-white text-rhino text-center font-black p-2 mt-5 tracking-wide rounded-lg w-full">Learn More</a>
            </div>

            <div class="flex flex-col px-6 py-10 bg-gradient-to-bl from-[#70CBFF] via-[#007CBE] to-[#084B83] rounded-2xl shadow-xl w-1/5 mx-2 justify-between items-center shrink-0">
                <img src="@/assets/media/svg/featured/didik.svg" class="w-10/12 grow">

                <img src="@/assets/media/svg/startup/didik.svg" class="w-3/5 pt-5 pb-7 grow">

                <!-- <p class="text-white grow">A Learning Management System developed to connect all learning instances to engage on creating a powerful, efficient and fun experience for students to learn.</p> -->

                <!-- <p class="text-white">An annual event where students start making their own business idea and make it their projects to pitch it up.</p> -->

                <a href="#" class="bg-white text-rhino text-center font-black p-2 mt-5 tracking-wide rounded-lg w-full">Learn More</a>
            </div>

            <div class="flex flex-col px-6 py-10 bg-codeblaze bg-cover rounded-2xl shadow-xl w-1/5 mx-2 justify-between items-center shrink-0">
                <img src="@/assets/media/svg/featured/temankanvas.svg" class="w-full grow">

                <img src="@/assets/media/svg/startup/BelajarKanvas.svg" class="w-5/6 pt-5 pb-7">

                <!-- <p class="text-white grow">A full 1 month training bootcamp focusing on building programming fundamentals on students by learning the basics and create a simple project.</p> -->

                <a href="#" class="bg-white text-rhino text-center font-black p-2 mt-5 tracking-wide rounded-lg w-full">Learn More</a>
            </div>

            <div class="flex flex-col px-6 py-10 bg-gradient-to-bl from-[#B5B4FF] via-[#B871FF] to-[#5D81FF] bg-cover rounded-2xl shadow-xl w-1/5 mx-2 justify-between items-center shrink-0">
                <img src="@/assets/media/svg/featured/logistika.svg" class="w-10/12 grow">

                <img src="@/assets/media/svg/startup/logistika.svg" class="w-3/5 pt-5 pb-7">

                <!-- <p class="text-white grow">A full 1 month training bootcamp focusing on building programming fundamentals on students by learning the basics and create a simple project.</p> -->

                <a href="#" class="bg-white text-rhino text-center font-black p-2 mt-5 tracking-wide rounded-lg w-full">Learn More</a>
            </div>

            <div class="flex flex-col px-6 py-10 bg-gradient-to-bl from-[#74D5FF] to-[#27A3FB] rounded-2xl shadow-xl w-1/5 mx-2 justify-between items-center shrink-0">
                <img src="@/assets/media/svg/featured/pathtrackr.svg" class="w-full grow">

                <img src="@/assets/media/svg/startup/PathTrackr.svg" class="w-4/5 pt-5 pb-7">

                <!-- <p class="text-white grow">A full 1 month training bootcamp focusing on building programming fundamentals on students by learning the basics and create a simple project.</p> -->

                <a href="#" class="bg-white text-rhino text-center font-black p-2 mt-5 tracking-wide rounded-lg w-full">Learn More</a>
            </div>
        </div>
    </div>

    <div class="flex flex-col md:hidden items-center justify-center py-20 gap-5 bg-program bg-cover flex-nowrap h-[85vh]" id="project_m">
        <h1 class="text-4xl font-bold text-rhino pb-4">Featured projects</h1>

        <div id="controls-carousel" class="relative w-full h-full" data-carousel="static">
            <!-- Carousel wrapper -->
            <div class="relative h-full overflow-hidden rounded-lg">

                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out px-5" data-carousel-item>
                    <div class="flex flex-col bg-gradient-to-bl from-[#02A3FE] via-[#5A4CF9] to-[#632ABE] px-6 py-10 rounded-2xl shadow-xl justify-center items-center gap-5 h-full">
                        <img src="@/assets/media/svg/featured/learnwith.svg" class="w-11/12 grow">

                        <img src="@/assets/media/svg/startup/LearnWith.svg" class="w-3/5">

                        <button class="bg-white text-rhino text-center font-black p-2 mt-3 tracking-wide rounded-lg w-full">Learn More</button>
                    </div>
                </div>

                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out px-5" data-carousel-item="active">
                    <div class="flex flex-col bg-gradient-to-bl from-[#70CBFF] via-[#007CBE] to-[#084B83] px-6 py-10 rounded-2xl shadow-xl justify-center items-center gap-5 h-full">
                        <img src="@/assets/media/svg/featured/didik.svg" class="w-2/3 grow">

                        <img src="@/assets/media/svg/startup/didik.svg" class="w-3/5">

                        <button class="bg-white text-rhino text-center font-black p-2 mt-3 tracking-wide rounded-lg w-full">Learn More</button>
                    </div>
                </div>

                <!-- Item 3 -->
                <div class="hidden duration-700 ease-in-out px-5" data-carousel-item>
                    <div class="flex flex-col bg-codeblaze bg-cover px-6 py-10 rounded-2xl shadow-xl justify-center items-center gap-5 h-full">
                        <img src="@/assets/media/svg/featured/temankanvas.svg" class="w-3/4 grow">

                        <img src="@/assets/media/svg/startup/BelajarKanvas.svg" class="w-4/5">

                        <button class="bg-white text-rhino text-center font-black p-2 mt-3 tracking-wide rounded-lg w-full">Learn More</button>
                    </div>
                </div>

                <!-- Item 4 -->
                <div class="hidden duration-700 ease-in-out px-5" data-carousel-item>
                    <div class="flex flex-col px-6 py-10 bg-gradient-to-bl from-[#B5B4FF] via-[#B871FF] to-[#5D81FF] bg-cover rounded-2xl shadow-xl justify-center items-center gap-5 h-full">
                        <img src="@/assets/media/svg/featured/logistika.svg" class="w-3/4 grow">

                        <img src="@/assets/media/svg/startup/logistika.svg" class="w-3/5">

                        <a href="#" class="bg-white text-rhino text-center font-black p-2 mt-3 tracking-wide rounded-lg w-full">Learn More</a>
                    </div>
                </div>

                <!-- Item 5 -->
                <div class="hidden duration-700 ease-in-out px-5" data-carousel-item>
                    <div class="flex flex-col px-6 py-10 bg-gradient-to-bl from-[#74D5FF] to-[#27A3FB] bg-cover rounded-2xl shadow-xl justify-center items-center gap-5 h-full">
                        <img src="@/assets/media/svg/featured/pathtrackr.svg" class="w-3/4 grow">

                            <img src="@/assets/media/svg/startup/PathTrackr.svg" class="w-3/5">

                        <a href="#" class="bg-white text-rhino text-center font-black p-2 mt-3 tracking-wide rounded-lg w-full">Learn More</a>
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