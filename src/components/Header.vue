<template>
    <section class="hero is-primary is-medium" id="bulma-hero">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
        <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
            <a class="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
            </a>
            <span @click="hamburg = !hamburg" class="navbar-burger burger" :class="{ 'is-active': hamburg}" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
            </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu" :class="{ 'is-active': hamburg}">
            <div class="navbar-end">
                <a class="navbar-item is-active">
                Home
                </a>
                <a class="navbar-item">
                Examples
                </a>
                <a class="navbar-item">
                Documentation
                </a>
                <span class="navbar-item">
                <a class="button is-primary is-inverted">
                    <span class="icon">
                    <i class="fab fa-github"></i>
                    </span>
                    <span>Download</span>
                </a>
                </span>
            </div>
            </div>
        </div>
        </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
        <div class="container has-text-centered">
            <h1 class="title">
                Nurture Wellness Studio
            </h1>
        </div>
    </div>

</section>
</template>

<script>
export default {
    data(){
        return {
            hamburg: false
        };
    }
}
</script>

<style scoped>
    #bulma-hero {
        background-image: url("../assets/fontana-yoga.jpg");
        background-repeat: no-repeat;
        background-attachment: local;
        background-size: initial;
    }
</style>