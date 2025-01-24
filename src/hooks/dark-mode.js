import { ref } from "vue";

function useDarkMode() {
  const value = ref(localStorage.getItem("theme") || "light");

  // Sync to localStorage
  const updateDarkMode = () => {
      value.value = value.value === "light" ? "dark" : "light";
      localStorage.setItem("theme", value.value);
      console.log(value);
  };

  return { value, updateDarkMode };
}


export default useDarkMode()