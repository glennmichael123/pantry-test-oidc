export interface GreetingOptions {
  name: string;
  language?: "en" | "es" | "fr" | "de" | "ja";
  uppercase?: boolean;
}

export interface GreetingResult {
  message: string;
  timestamp: number;
  locale: string;
}

export interface PackageInfo {
  name: string;
  version: string;
  description: string;
  author: string;
}

export interface CLIConfig {
  verbose: boolean;
  outputFormat: "text" | "json";
  color: boolean;
}

export type LogLevel = "debug" | "info" | "warn" | "error";

export interface Logger {
  level: LogLevel;
  log(level: LogLevel, message: string): void;
}
