// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
export default defineConfig({
    // Specify multiple entry points for each page
    build: {
        rollupOptions: {
            input: {
                main: 'index.html' ,
                about: resolve(__dirname,'about/index.html'),
                contact: resolve(__dirname,'contact/index.html'),
                locations: resolve(__dirname,'locations/index.html'),
                menu: resolve(__dirname,'menu/index.html'),
            },
        },
    }
});
