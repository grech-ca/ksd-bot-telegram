export const random = <T extends unknown>(array: T[]): T => array[Math.round(Math.random() * (array.length - 1))]
