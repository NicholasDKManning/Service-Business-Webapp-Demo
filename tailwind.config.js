/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite-react/**/*.js"
    ],
    theme: {
        extend: {},
    }, 
    plugins: [

        require("flowbite/plugin")
    ],
}