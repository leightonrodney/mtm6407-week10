<script setup>

import { portfolioData } from '../data';
import { RouterLink } from 'vue-router';

const portfolioItems = portfolioData;

</script>

<template>
    <ul>
        <li v-for="portfolioItem in portfolioItems">
            <RouterLink :to="portfolioItem.portfolioURL">
                <img :src="portfolioItem.image" :alt="portfolioItem.name" width="300" height="300" />
                <h3>{{ portfolioItem.name }}</h3>
                <p>{{ portfolioItem.description }}</p>
            </RouterLink>
        </li>
    </ul>
</template>

<style scoped>
 ul{
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    gap: 20px;
 }
</style>