export function addClass(el: HTMLElement, className: string | string[]): void {
  if (Array.isArray(className)) {
    className.forEach((item: string) => {
      if (!hasClass(el, item)) {
        el.classList.add(item)
      }
    })
  } else {
    if (!hasClass(el, className)) {
      el.classList.add(className)
    }
  }
}

export function removeClass(el: HTMLElement, className: string | string[]): void {
  if (Array.isArray(className)) {
    className.forEach((item: string) => {
      if (hasClass(el, item)) {
        el.classList.remove(item)
      }
    })
  } else {
    if (hasClass(el, className)) {
      el.classList.remove(className)
    }
  }
}

export function hasClass(el: HTMLElement, className: string): boolean {
  return el.classList.contains(className);
}
