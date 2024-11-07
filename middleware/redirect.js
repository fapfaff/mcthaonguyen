export default defineNuxtRouteMiddleware((to, from) => {
    const localPath = useLocalePath();

    if (to.path === "/" || to.path === "/de" || to.path === "/vn") {
      return navigateTo(localPath("/home"));
    }
});