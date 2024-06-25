<template>
    <div class="w-screen h-100 bg-creme-100" @mousemove="updateMousePosition">
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
import { ref, onUnmounted } from 'vue';

// Reference to store the last mouse position
const lastMousePosition = ref({ x: 0, y: 0 });

// Function to update the mouse position
function updateMousePosition(event: MouseEvent) {
    lastMousePosition.value.x = event.pageX;
    lastMousePosition.value.y = event.pageY;
    if (Math.random() > 0.5) {
        createStar();
    }
}

// Function to create stars
function createStar() {
    const star = document.createElement('div');
    star.textContent = '\u2605'; // Star character
    star.classList.add('star');

    // Use the last known mouse position
    star.style.left = lastMousePosition.value.x + Math.round(Math.random() * 20) - 15 + 'px';
    star.style.top = lastMousePosition.value.y + Math.round(Math.random() * 20)     + 'px';

    star.style.fontSize = Math.round(Math.random() * 10) + 'px';
    star.style.height = star.style.fontSize;
    document.body.append(star);

    setTimeout(() => {
        star.remove();
    }, Math.round(Math.random() * 200) + 100); 
}

onMounted(() => {
    const starInterval = setInterval(createStar, 250);

    // Cleanup on component unmount
    onUnmounted(() => {
        clearInterval(starInterval);
    });
});
</script>

<style>
.star {
    inset: unset;
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