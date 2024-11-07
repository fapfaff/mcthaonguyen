export default defineNuxtRouteMiddleware((to, from) => {
    const localPath = useLocalePath();

    if (to.path === "/") {
      return navigateTo(localPath("/home"));
    }
});