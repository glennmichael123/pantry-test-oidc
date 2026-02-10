import type { Logger, LogLevel } from "../types/index.js";

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

export function createLogger(level: LogLevel = "info"): Logger {
  return {
    level,
    log(msgLevel: LogLevel, message: string): void {
      if (LOG_LEVELS[msgLevel] >= LOG_LEVELS[level]) {
        const timestamp = new Date().toISOString();
        const prefix = msgLevel.toUpperCase().padEnd(5);
        console.log(`${timestamp} [${prefix}] ${message}`);
      }
    },
  };
}
