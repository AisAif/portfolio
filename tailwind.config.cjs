/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary': '#F9ED69',
                'secondary': '#F08A5D',
                'accent-light': '#B83B5E',
                'accent-dark': '#6A2C70',
            }
        },
        container: {
            padding: {
                DEFAULT: '20px',
                'sm': '40px',
                'lg': '80px',
                'xl': '96px',
                '2xl': '96px',
            },
        },
        fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
            'roboto': ['Roboto Mono', 'monospace'],
            'jost': ['Jost', 'sans-serif'],
        },
        animation: {
            'navbar-transition': 'fade 0.4s linear 0.3s both',
            'show-text': 'show-text 0.4s ease',
            'bounce': 'bounce 1s infinite',
            'spin': 'spin 1s linear infinite',
        },
        keyframes: {
            fade: {
                '0%': {
                    'border-bottom': '0px solid',
                },
                '100%': {
                    'border-bottom': '2px solid',
                },
            },
            bounce: {
                '0%': {
                    'transform': 'translateY(-25%)',
                    'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
                },
                '100%': {
                    'transform': 'translateY(-25%)',
                    'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
                },
                '50%': {
                    'transform': 'translateY(0)',
                    'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
                },
            },
            'show-text': {
                '0%': {
                    opacity: 0
                },
                '100%': {
                    opacity: 1
                },
            },
            spin: {
                from: {
                    'transform': 'rotate(0deg)'
                },
                to: {
                    'transform': 'rotate(360deg)'
                },
            }
        }
    },
    plugins: [],
}