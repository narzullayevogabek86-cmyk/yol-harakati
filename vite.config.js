const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
    base: './',
    plugins: [react()],
    server: {
        host: true,
        port: 5173
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true
    }
});
