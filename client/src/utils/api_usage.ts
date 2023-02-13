export let API: string;
if (import.meta.env.VITE_NODE_ENV === "production") {
  API = import.meta.env.VITE_PRODUCTION_API;
} else {
  API = import.meta.env.VITE_DEVELOPMENT_API;
}
