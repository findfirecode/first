import createApp from './App'

const { app, store, router } = createApp();

router.onReady(() => {
  app.$mount('#app');
})

if (window.__INITIAL_STATE__)  {
  store.replaceState(window.__INITIAL_STATE__);
}

