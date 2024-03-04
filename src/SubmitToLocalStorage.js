//SubmitToLocalStorage.js
const SubmitToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export default SubmitToLocalStorage;
