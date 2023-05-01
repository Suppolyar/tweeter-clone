<script setup>
import useAuth from "~/composables/useAuth";

const data = reactive({
    username: '',
    password: '',
    loading: false
})


const submitForm = async () => {
    const { login } = useAuth()
    data.loading = true
    try {
        await login(data.username, data.password)
    } catch (error) {
        console.error(error)
    } finally {
        data.loading = false
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="submitForm" class="pt-5 space-y-6">
            <UIInput v-model="data.username" label="Username" placeholder="@username"/>
            <UIInput v-model="data.password" label="Password" placeholder="*********" type="password"/>

            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>

</style>
