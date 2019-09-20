import createApp from './App';

export default context => new Promise((resolve, reject) => {
  const { app, router, store } = createApp();

  router.onReady(() => {
    const matchComponent = router.getMatchedComponents();

    if (!matchComponent.length) {
      // reject({ code: '404' });
    }
  });
});
