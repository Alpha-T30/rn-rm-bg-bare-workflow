const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Add custom resolver for "react-native-background-remover"
config.resolver = {
  ...config.resolver,
  extraNodeModules: {
    // This ensures that any problematic node imports are ignored
    "react-native-background-remover": require.resolve(
      "react-native-background-remover"
    ),
  },
};

module.exports = config;
