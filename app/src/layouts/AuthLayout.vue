<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

import Footer from '@/components/Footer.vue';

onMounted(() => {
    document.body.classList.add('bg-primary');
});

onBeforeUnmount(() => {
    document.body.classList.remove('bg-primary');
});
</script>

<template>
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <router-view />
                </div>
            </main>
        </div>
        <div id="layoutAuthentication_footer">
            <Footer />
        </div>
    </div>
</template>