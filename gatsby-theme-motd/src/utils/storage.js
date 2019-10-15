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
 * Property names
 */
export const DISMISS_MOTD_IDS_KEY = 'dismissedMotdIds'