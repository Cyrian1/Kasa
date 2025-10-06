module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],

  moduleNameMapper: {
    // Ignore les fichiers CSS
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",

    // Mock les images et fichiers statiques
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
