<template>
    <div class="w-screen h-100 bg-creme-100" @mousemove="createStars">
        <Header>

        </Header>
        <!-- Output the page content  -->
        <div>
            <slot />
            <ModalsContainer />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'

function createStars(event: MouseEvent) {
    console.log("mouse move");
    const star = document.createElement('div');

    star.classList.add('star');

    star.style.left = event.pageX + Math.round(Math.random() * 20) + 'px';
    star.style.top = event.pageY + Math.round(Math.random() * 20) + 'px';
    star.style.height = Math.round(Math.random() * 5) + 'px';
    star.style.width = Math.round(Math.random() * 5) + 'px';

    document.body.append(star);

    window.setTimeout(() => {
        star.remove();
    }, Math.round(Math.random() * 300));
}
</script>
<style>
.star {
    position: absolute;
    width: 3px;
    height: 3px;
    background: tan;
    z-index: 1000;
    transform: rotate(35deg);
    animation: twinkle 1s infinite alternate;
}


@keyframes twinkle {
    from {
        transform: scale(1.1) translateY(0px);
        opacity: 1;
    }
    to {
        transform: scale(0.9) translateY(30px);
        opacity: 0.5;
    }
}
</style>