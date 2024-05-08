export default defineNuxtRouteMiddleware((to, from) => {
    const localPath = useLocalePath();
    return navigateTo(localPath('/home'))
});