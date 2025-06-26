    /** @type {import('tailwindcss').Config} */
    const colors = require('tailwindcss/colors')

    module.exports = {
    content: ["./src/**/*.{html,js}"], 
    theme: {
        
        colors: {
        gray: colors.coolGray,
        blue: colors.lightBlue,
        red: colors.rose,
        pink: colors.fuchsia,
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            cursive: ['"Great Vibes"', 'cursive'],
            title: ['"Montserrat Alternates"', 'serif'],
        },
        extend: {
        spacing: {
            '128': '32rem',
            '144': '36rem',
        },
        borderRadius: {
            '4xl': '2rem',
        },
        },
    },
    variants: {
        extend: {
        borderColor: ['focus-visible'],
        opacity: ['disabled'],
        },
    },
    }
