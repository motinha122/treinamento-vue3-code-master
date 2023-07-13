<template>
    <header class="header">
        <div class="flex flex-col w-4/5 max-w-6xl">

            <div class="flex items-center justify-between py-10">
                <div class="w-28 lg:w-26">
                    <img src="../../assets/img/logo_feedbacker.png" alt="logo" class="w-full">
                </div>
    
                <div class="flex">
                    <button class="px-6 py-2 font-bold bg-white rounded-full text-white focus:outline-none">
                        Crie uma conta
                    </button>
                    <button class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-none">
                        Entrar
                    </button>
                </div>
            </div>

            <div class="flex flex-col mt-28">
                <h1 class="text-4xl font-black text-white">
                    Tenha um feedback. <br>
                    E faça seus clientes mais <br class="hidden lg:inline-block">
                    felizes!
                </h1>
                <p>
                    Receba ideias, reclamações e feedbacks com um simples widget na página.
                </p>
            </div>

        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="postcss" scoped>

.header{
    @apply bg-brand-main w-full flex justify-center;
    height: 700px;
}

</style>