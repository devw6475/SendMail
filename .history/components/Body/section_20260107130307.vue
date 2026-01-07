<template>
    <div class="container">
        <div class="text-center mb-5 pt-4 section-title ">
            <h2>{{t('body.first')}}</h2>

            <p></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

</script>

<style scoped>

.section-title h2::after {
    content: '';
    position: absolute;
    width: 20%;
    height: 4px;
    background: linear-gradient(to right, #4a6bff, #ff6b6b);
    bottom: -70px;
    left: 40%;
    border-radius: 2px;
}

@media (max-width: 768px) {
    .section-title h2::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 4px;
    background: linear-gradient(to right, #4a6bff, #ff6b6b);
    bottom: -50px;
    left: 25%;
    border-radius: 2px;
}
}

</style>