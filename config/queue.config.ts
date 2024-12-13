export interface QueueConfig {
  redis: {
    host: string;
    port: number;
    password?: string;
  };
  prefix: string;
}

export const queueConfig: QueueConfig = {
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 6379,
    password: process.env.REDIS_PASSWORD
  },
  prefix: 'bull'
}; 