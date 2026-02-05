import type { GreetingOptions, GreetingResult } from "../types/index.js";

const GREETINGS: Record<string, string> = {
  en: "Hello",
  es: "Hola",
  fr: "Bonjour",
  de: "Hallo",
  ja: "Konnichiwa",
};

export function greet(options: GreetingOptions): GreetingResult {
  const lang = options.language ?? "en";
  const prefix = GREETINGS[lang] ?? GREETINGS.en;
  let message = `${prefix}, ${options.name}!`;

  if (options.uppercase) {
    message = message.toUpperCase();
  }

  return {
    message,
    timestamp: Date.now(),
    locale: lang,
  };
}

export function formatGreeting(result: GreetingResult): string {
  const date = new Date(result.timestamp);
  return `[${date.toISOString()}] (${result.locale}) ${result.message}`;
}
