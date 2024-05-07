<template>
    <div class="w-screen h-screen bg-amber-100">
        <header>
            <div class="w-full flex justify-between text-amber-800">
                <div class="ps-4 pe-4 pt-1 pb-1">
                    <button>Menu</button>
                </div>
                <div class="ps-4 pe-4 pt-1 pb-1">
                    <button>Language</button>
                </div>
            </div>    
        </header>
        <!-- Output the page content  -->
        <div>
            <slot />
        </div>
    </div>
</template>