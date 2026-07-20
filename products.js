const products = [];

// Export for ES Modules (fallback to global variable if loaded in browser directly)
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = products;
} else {
  window.products = products;
}
