// Open or create an IndexedDB database
const request = indexedDB.open('myDatabase', 1);

request.onerror = function(event) {
  console.error('IndexedDB error:', event.target.errorCode);
};

request.onupgradeneeded = function(event) {
  const db = event.target.result;
 const objectStore = db.createObjectStore('games', { keyPath: 'id' });
};

request.onsuccess = function(event) {
  const db = event.target.result;
  // Interact with the database here
};
