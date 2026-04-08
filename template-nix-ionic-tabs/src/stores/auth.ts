import { signal } from "@deijose/nix-js";

const isAuthenticated = signal(false);

export const authStore = {
  isAuthenticated,
  login() {
    isAuthenticated.value = true;
  },
  logout() {
    isAuthenticated.value = false;
  },
};
