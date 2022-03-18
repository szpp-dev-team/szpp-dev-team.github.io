import { ViteSSG } from 'vite-ssg';
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import Center from '@/components/Center.vue';
import LastUpdatedAt from '@/components/LastUpdatedAt.vue';

import './styles/common.scss'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ({ app }) => {
    app.component('Center', Center);
    app.component('LastUpdatedAt', LastUpdatedAt);
  },
)
