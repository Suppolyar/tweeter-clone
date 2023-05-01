<template>
    <section>
        <MainSection title="Home" :loading="loading">
            {{ user }}
        </MainSection>
    </section>
</template>

<script setup>

const {useAuthUser} = useAuth()
const user = useAuthUser()
</script>
