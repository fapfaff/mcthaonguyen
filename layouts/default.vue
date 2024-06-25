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
    star.textContent = '\u2605';

    star.classList.add('star');

    star.style.left = event.pageX + Math.round(Math.random() * 20) + 'px';
    star.style.top = event.pageY + Math.round(Math.random() * 20) + 'px';

    star.style.fontSize = Math.round(Math.random() * 10) + 'px';
    star.style.height = star.style.fontSize;

    document.body.append(star);

    window.setTimeout(() => {
        star.remove();
    }, Math.round(Math.random() * 300));
}
</script>
<style>
.star {
    position: absolute;
    color: theme(colors.creme.600);
    font-size: 20px;
    user-select: none;
    pointer-events: none;
    z-index: 1000;
    animation: twinkle 1s infinite alternate;
    transform: rotate(45deg);
    line-height: 1;
    text-align: center;
    height: 20px;
    width: 20px;
    text-shadow: 0 0 4px theme(colors.creme.300);
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