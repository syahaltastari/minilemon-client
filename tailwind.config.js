module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                "primary": "var(--color-primary)",
                "secondary": "var(--color-secondary)",
                "tertiary": "var(--color-tertiary)",
                "light-gray": "var(--color-light-gray)",
                "text": "var(--color-text)",
            },
        },
    },
    plugins: [],
};
