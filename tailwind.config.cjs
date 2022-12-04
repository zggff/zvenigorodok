const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            height: {
                160: '40rem',
                120: '30rem',
                100: '25rem'
            }
        }
    },
    plugins: [
        plugin(function({ addBase }) {
            addBase({
                html: { fontSize: '20px' }
            });
        })
    ]
};
