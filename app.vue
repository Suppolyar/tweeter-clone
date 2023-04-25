<template>
    <main :class="{dark: darkMode}">
        <div class="bg-white dark:bg-dim-900">
            <div class="min-h-full">
                <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
                    <div class="hidden md:block xs:col-span-1 xl:col-span-2">
                        <div class="sticky top-0">
                            <SidebarLeft />
                        </div>
                    </div>
<!--                    <div class="bg-blue-600">center</div>-->
<!--                    <div class="bg-green-600">right</div>-->
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
const darkMode = ref(false)
</script>
