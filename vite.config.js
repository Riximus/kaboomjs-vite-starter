import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: 'src/main.js',
            output: {
                entryFileNames: `main.js`, // Naming for entry chunks
                chunkFileNames: `[name].js`, // Naming for code-split chunks
                assetFileNames: `[name].[ext]` // Naming for other assets like images, CSS
            }
        },
        outDir: 'www/js',
    }
});
