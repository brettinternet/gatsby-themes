const num = (n) => typeof n === 'number' && !isNaN(n)
export const px = (n) => (num(n) && n !== 0 ? n + 'px' : n)