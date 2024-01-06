import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig(() => {

  return {
    plugins: [
      checker({
        // e.g. use TypeScript check
        typescript: true,
      }),
    ],
    // Rest of your Vite configuration
  };
});
