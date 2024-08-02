import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    vite: {
      // Aquí puedes agregar la configuración de Vite
      plugins: [
        // Agrega tus plugins de Vite aquí
      ],
    },
});

