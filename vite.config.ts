/// <reference types="vitest" />
import { configDefaults } from 'vitest/config'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: ['src/setupTest.ts'],
		include: ['**/__tests__/*.test.{tsx,ts}'],
		exclude: [...configDefaults.exclude],
		watch: true,
	},
})
