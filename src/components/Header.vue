<script>

import { RouterLink } from 'vue-router';

</script>

<template>
    <nav>
        <RouterLink to="/">ABC</RouterLink>
        <ul>
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">About</RouterLink>
            </li>
            <li>
                <RouterLink to="/portfolio">Portfolio</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>

nav{
    display: flex;
    margin: 0;
    padding: 0;
    gap: 10px
}

nav ul{
    display:flex;
    margin: 0;
    padding: 0;
    gap: 20px;
    list-style: none;
}

</style>