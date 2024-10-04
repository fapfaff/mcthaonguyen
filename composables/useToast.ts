import { ref } from "vue";

export type ToastType = "success" | "error";

const isVisible = ref(false);
const message = ref("");
const type = ref("success");

export const useToast = () => {
  const toast = (
    msg: string,
    toastType: ToastType = "success",
    duration: number = 3000
  ) => {
    message.value = msg;
    type.value = toastType;
    isVisible.value = true;

    setTimeout(() => {
      isVisible.value = false;
    }, duration);
  };

  return { isVisible, message, type, toast };
};
