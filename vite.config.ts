/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
          resolveIcons: true,
        }),
      ],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vitest',
        'pinia',
        {
          axios: [
            // import { default as axios } from 'axios'
            ['default', 'axios'],
          ],
        },
        {
          '@testing-library/user-event': [
            // import { default as userEvent } from '@testing-library/user-event'
            ['default', 'userEvent'],
          ],
        },
        {
          '@testing-library/dom': [
            // import { screen } from '@testing-library/dom'
            ['screen', 'testScreen'],
          ],
        },
        {
          '@pinia/testing': [
            // import { createTestingPinia } from '@pinia/testing'
            ['createTestingPinia', 'createTestingPinia'],
          ],
        },
        {
          'vue-router-mock': [
            // import { getRouter } from 'vue-router-mock'
            ['getRouter', 'getRouter'],
          ],
        },
        {
          '@vue/test-utils': [
            // import { mount as testMount } from '@vue/test-utils'
            ['mount', 'testMount'],
          ],
        },
      ],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['src/__test__/vitest.setup.ts'],
  },
});
