export function setLocalStorage (key: string, value: string): void {
  if (typeof key === 'string' && typeof value === 'string') {
    window.localStorage.setItem(key, value);
  }
}

export function getLocalStorage(key: string): string {
  if (typeof key === 'string' && hasLocalStorage(key)) {
    return window.localStorage.getItem(key) as string;
  }
  return ''
}

export function removeLocalStorage(key: string): void {
  if (typeof key === 'string') {
    window.localStorage.removeItem(key);
  }
}

export function hasLocalStorage(key: string): boolean {
  if (typeof key === 'string') {
    if (window.localStorage.getItem(key) === null) {
      return false;
    } else {
      return true;
    }
  }
  return false;
}

export function clearLocalStorage(): void {
  window.localStorage.clear();
}
