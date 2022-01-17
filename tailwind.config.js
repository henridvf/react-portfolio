module.exports = {
    content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'Oswald': ['Oswald', 'sans-serif'],
            'Roboto': ['Roboto', 'sans-serif'],
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
            'md': '768px',
            // => @media (min-width: 768px) { ... }
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            height: {
                '9/10': '90vh',
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ],
}
