module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                18.5: "4.625rem",
            },
        },
    },
    plugins: [],
};
