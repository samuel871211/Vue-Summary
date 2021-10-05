<template>
    <div style="position: absolute; width: 100%">
        <header class="header" ref="header"></header>
        <main class="main"></main>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .header {
        height: 100vh;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: -1;
    }
    .header::before {
        content: '';
        background-image: url("../assets/open_editing_room.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        display: block;
        opacity: 0.4;
        width: 100%;
        height: 100vh;
        z-index: -1;
    }
    .main {
        background-image: url("../assets/hand-gift.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .main::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100vh;
        bottom: -100vh;
    }
</style>