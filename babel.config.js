module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          alias: {
            "@src": "./src",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@config": "./src/config",
            "@hooks": "./src/hooks",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@utils": "./src/utils",
            "@styles": "./src/styles",
          },
        },
      ],
    ],
  };
};
