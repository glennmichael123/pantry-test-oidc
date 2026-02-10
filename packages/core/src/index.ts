export type {
  GreetingOptions,
  GreetingResult,
  PackageInfo,
  LogLevel,
  Logger,
} from "./types/index.js";

export { greet, formatGreeting } from "./utils/greeting.js";
export { createLogger } from "./utils/logger.js";

export const VERSION = "0.2.9";
