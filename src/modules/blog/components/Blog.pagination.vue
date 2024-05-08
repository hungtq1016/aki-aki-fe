<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="pagination text-center pt-[34px]">
        <nav>
            <ul class="flex gap-x-2 items-center justify-center">

                <li class="page-item disabled" aria-disabled="true" aria-label="&laquo; Previous">
                    <button class="w-10 h-10 text-center flex justify-center items-center bg-gray-100 rounded-full shadow-none text-slate-950 hover:text-white hover:bg-cerulean-600" aria-hidden="true">&lsaquo;</button>
                </li>
                <li class="" aria-current="page"><button class="w-10 h-10 text-center flex justify-center items-center bg-gray-100 rounded-full shadow-none text-slate-950 hover:text-white hover:bg-cerulean-600 active">1</button></li>
                <li class="page-item"><a class="w-10 h-10 text-center flex justify-center items-center bg-gray-100 rounded-full shadow-none text-slate-950 hover:text-white hover:bg-cerulean-600" href="kien-thuc-thu-cung4658.html?page=2">2</a> </li>
                <li class="page-item"><a class="w-10 h-10 text-center flex justify-center items-center bg-gray-100 rounded-full shadow-none text-slate-950 hover:text-white hover:bg-cerulean-600" href="kien-thuc-thu-cung4658.html?page=2">3</a> </li>
                <li class="page-item"><a class="w-10 h-10 text-center flex justify-center items-center bg-gray-100 rounded-full shadow-none text-slate-950 hover:text-white hover:bg-cerulean-600" href="kien-thuc-thu-cung4658.html?page=2">4</a> </li>
                <li class="page-item"><a class="w-10 h-10 text-center flex justify-center items-center bg-gray-100 rounded-full shadow-none text-slate-950 hover:text-white hover:bg-cerulean-600" href="kien-thuc-thu-cung4658.html?page=2">5</a> </li>
                <li class="page-item">
                    <button class="w-10 h-10 text-center flex justify-center items-center bg-gray-100 rounded-full shadow-none text-slate-950 hover:text-white hover:bg-cerulean-600" 
                    href="kien-thuc-thu-cung4658.html?page=2" rel="next"
                        aria-label="Next &raquo;">&rsaquo;</button>
                </li>
            </ul>
        </nav>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.active{
    @apply text-white bg-cerulean-600
}
</style>