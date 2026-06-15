// Polyfill localStorage pour l'environnement Node.js
const storage = new Map()

global.localStorage = {
  getItem: (key) => storage.get(key) ?? null,
  setItem: (key, value) => storage.set(key, String(value)),
  removeItem: (key) => storage.delete(key),
  clear: () => storage.clear(),
  get length() { return storage.size },
  key: (index) => [...storage.keys()][index] ?? null
}
