<template>
        <Card>
            <form>
                <div class="w-100 mb-2">
                    <label class="block text-sm mb-1 tracking-widest " for="email">{{ $t('contact.email').toUpperCase() }}</label>
                    <input class="rounded border-2 border-creme-400 bg-creme-50 text-apricot-950 w-full py-2 px-3 leading-tight focus:outline-none focus:border-creme-800" id="email" type="email">
                </div>
    
               <div class="w-100 mb-2">
                    <label class="block text-sm mb-1 tracking-widest" for="message">{{ $t('contact.message').toUpperCase() }}</label>
                    <textarea class="rounded border-2 border-creme-400   bg-creme-50 text-apricot-950 w-full py-2 px-3 leading-tight focus:outline-none focus:border-creme-800 h-40" id="message" rows="10"></textarea>          
                </div>
                <div class=" mt-1">
                    <button class="rounded border-creme-700 border-2 bg-creme-700 text-creme-50 font-semibold tracking-wider p-1 box-border w-full focus:outline-none focus:border-creme-800 focus:border-2 " type="submit">{{ $t('contact.send') }}</button>  
                </div>
            </form>
        </Card>
</template>
