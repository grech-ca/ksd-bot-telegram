import dayjs from 'dayjs'

const IRRELEVANCY_TIMEOUT = 5 // seconds

/**
 *
 * This function checks whether the provided datetime is longer
 * than IRRELEVANCY_TIMEOUT ago
 *
 * Usually used to prevent the bot from performing actions triggered
 * by events emitted during the bot's downtime.
 */
export const isIrrelevant = (timeInSeconds: number) => dayjs(timeInSeconds * 1000).add(IRRELEVANCY_TIMEOUT, 'seconds').isBefore(new Date())
