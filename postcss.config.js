module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // Use the new package name
    autoprefixer: {}, // Autoprefixer might be optional in v4, but can be kept
    // Remove 'tailwindcss': {} if it was present
  },
};
