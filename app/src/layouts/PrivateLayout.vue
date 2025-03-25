<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer.vue';

onMounted(() => {
    document.body.classList.add('sb-nav-fixed');
});

onBeforeUnmount(() => {
    document.body.classList.remove('sb-nav-fixed');
});
</script>

<template>
    <Header />
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <Sidebar />
        </div>
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid px-4">
                    <h1 class="mt-4">Dashboard</h1>
                    <ol class="breadcrumb mb-4">
                        <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
                    <router-view />
                </div>
            </main>
            <Footer />
        </div>
    </div>
</template>