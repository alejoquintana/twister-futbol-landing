/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [],

    //darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'dark': 'rgb(27, 38, 44)',
                'primary': 'rgb(15, 76, 117)',
                'secondary': 'rgb(50, 130, 184)',
                'light': 'rgb(187, 225, 250)'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
}