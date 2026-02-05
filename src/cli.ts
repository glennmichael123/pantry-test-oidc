#!/usr/bin/env node
import { hello, greet, formatGreeting, createLogger } from "./index.js";
import type { CLIConfig } from "./types/index.js";

const config: CLIConfig = {
  verbose: process.argv.includes("--verbose"),
  outputFormat: process.argv.includes("--json") ? "json" : "text",
  color: !process.argv.includes("--no-color"),
};

const logger = createLogger(config.verbose ? "debug" : "info");

logger.log("debug", "CLI starting...");
console.log(hello());

const result = greet({ name: "World", language: "en" });

if (config.outputFormat === "json") {
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log(formatGreeting(result));
}

logger.log("info", "pantry-test CLI is working!");
