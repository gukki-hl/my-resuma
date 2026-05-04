import type { Config } from "tailwindcss"
import { heroui } from "@heroui/react";  

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./node_modules/streamdown/dist/*.js"
    ],
    plugins: [heroui()]  
}

export default config
