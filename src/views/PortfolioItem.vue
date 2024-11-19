<script setup>

import { useRoute } from 'vue-router';
import { portfolioData } from '../data'

const route = useRoute();

const portfolioId = route.params.id;

const portfolioPiece = portfolioData.find((item) => item.id == portfolioId);

</script>

<template>

<div>
    <img :src="portfolioPiece.image" :alt="portfolioPiece.name" width="300" />
    <h3>{{ portfolioPiece.name }}</h3>
    <p>{{ portfolioPiece.description }}</p>
</div>

</template>