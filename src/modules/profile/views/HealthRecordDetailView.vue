<template>
    <div class="container mx-auto p-6">
        <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Patient Health Record</h2>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                <p class="text-gray-700">John Doe</p>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
                <p class="text-gray-700">1990-01-01</p>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                <p class="text-gray-700">Male</p>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Contact Number</label>
                <p class="text-gray-700">(123) 456-7890</p>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Address</label>
                <p class="text-gray-700">123 Main St, Anytown, USA</p>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Medical History</label>
                <p class="text-gray-700">No significant medical history.</p>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Edit Record
                </button>
                <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Back
                </button>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

</script>
