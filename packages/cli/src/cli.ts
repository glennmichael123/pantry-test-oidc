#!/usr/bin/env node
import { greet, formatGreeting, createLogger, VERSION } from "@glenn123/pantry-core";

const verbose = process.argv.includes("--verbose");
const asJson = process.argv.includes("--json");
const name = process.argv.find((a) => !a.startsWith("-") && a !== process.argv[0] && a !== process.argv[1]) ?? "World";

const logger = createLogger(verbose ? "debug" : "info");

logger.log("debug", `pantry-cli v${VERSION} starting...`);

const result = greet({ name, language: "en" });

if (asJson) {
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log(formatGreeting(result));
}

logger.log("info", "Done!");
