const plugin = require("tailwindcss/plugin");

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                muted: "var(--color-muted)",
                bg: "var(--color-bg)",
                border: "var(--color-border)",
                text: "var(--color-text)",
            },
        },
    },
    plugins: [
    ],
};
