<template>
        <Card>
            <form @submit.prevent="submitForm">
                <div class="w-100 mb-2">
                    <label class="block text-sm mb-1 tracking-widest " for="email">{{ $t('contact.email').toUpperCase() }}</label>
                    <input v-model="formData.email" class="rounded border-2 border-creme-400 bg-creme-50 text-apricot-950 w-full py-2 px-3 leading-tight focus:outline-none focus:border-creme-800" id="email" type="email" required>
                </div>
    
               <div class="w-100 mb-2">
                    <label class="block text-sm mb-1 tracking-widest" for="message">{{ $t('contact.message').toUpperCase() }}</label>
                    <textarea v-model="formData.message" class="rounded border-2 border-creme-400   bg-creme-50 text-apricot-950 w-full py-2 px-3 leading-tight focus:outline-none focus:border-creme-800 h-40" id="message" name="message" rows="10" required></textarea>          
                </div>

                <input v-model="formData.botcheck" type="checkbox" name="botcheck" id="" style="display: none;" />

                <div class="mt-1">
                    <button type="submit" class="rounded border-creme-700 border-2 bg-creme-700 text-creme-50 font-semibold tracking-wider p-1 box-border w-full hover:bg-creme-800 hover:border-creme-800 focus:outline-none focus:border-creme-900 focus:border-2">
                        <span v-if="!loading">{{ $t('contact.send') }}</span>
                        <span v-else>
                            <svg role="progressbar" alt="loading" class="inline w-4 h-4 ml-2 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                            </svg>
                        </span>
                    </button>  
                </div>
            </form>
        </Card>
</template>
<script setup lang="ts">
const { toast } = useToast();
const config = useRuntimeConfig();
const { t } = useI18n()

const loading = ref(false);

const formData = reactive({
  email: '',
  message: '',
  botcheck: ''
})

async function submitForm(event: any) {
    event.preventDefault();
    loading.value = true;

    const body = {
        "access_key": config.public.web3FormsAccessKey,
        "subject": t('contact.emailSubject'),
        "from_name": t('contact.emailFromName'),
        "replyto": formData.email,
        "message": formData.message,
        "botcheck": formData.botcheck
    };

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (response.status == 200) {
            toast(t('contact.messageSentSuccess'), 'success', 3000);
        } else  {
            toast(t('contact.messageSentError'), 'error', 3000);
        }
    } catch {
        toast(t('contact.messageSentError'), 'error', 3000);
    } finally {
        loading.value = false;
    }
}
</script>