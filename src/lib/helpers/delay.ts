/**
 *
 * This function returns a promise which gets resolved once the time is over
 */
export const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time))
