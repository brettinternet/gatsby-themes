/**
 * Local storage
 */
export const getLocalStorage = (key) => {
  if (key) return JSON.parse(localStorage.getItem(key))
}

export const setLocalStorage = (key, value) => {
  if (key && value) return localStorage.setItem(key, JSON.stringify(value))
}

export const removeLocalStorage = (key) => {
  if (key) localStorage.removeItem(key)
}

/**
 * Session storage
 */
export const getSessionStorage = (key) => {
  if (key) return JSON.parse(sessionStorage.getItem(key))
}

export const setSessionStorage = (key, value) => {
  if (key && value) return sessionStorage.setItem(key, JSON.stringify(value))
}

export const removeSessionStorage = (key) => {
  if (key) return sessionStorage.removeItem(key)
}

/**
 * Property names
 */
export const IGNORE_MOTD_IDS_KEY = 'ignoreMotdIds'