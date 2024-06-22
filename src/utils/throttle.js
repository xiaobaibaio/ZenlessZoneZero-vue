export function throttle(func, wait) {
  let timeout = null
  let lastArgs = null

  const later = () => {
    func(...lastArgs)
    timeout = null
  }

  return function (...args) {
    if (!timeout) {
      timeout = setTimeout(later, wait)
    }
    lastArgs = args
  }
}
