export default function logOut() {
  window.localStorage.removeItem('PersonToken');
  return { type: 'LOG_OUT' };
}
