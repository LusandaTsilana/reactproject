export function setSecureCookie(name, value) {
  document.cookie = `${name}=${value}; SameSite=None; Secure`;
}
