import Pino from 'pino';

export const logger = Pino({
  name: 'pyyne-bank-aggregator',
  level: 'debug'
});