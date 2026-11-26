module.exports = ({ config }) => {
  if (process.env.EXPO_REPRO_NOXCTURNAL !== '1') {
    return config;
  }

  return {
    ...config,
    experiments: {
      ...config.experiments,
      noxcturnalTransformWorker: true,
    },
  };
};
