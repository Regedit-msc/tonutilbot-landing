// Google Analytics configuration for TonderLabs website
// This file provides utilities for Google Analytics 4 tracking

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track events
export const event = (
  action: string,
  parameters?: {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: any;
  }
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: parameters?.event_category || "general",
      event_label: parameters?.event_label,
      value: parameters?.value,
      ...parameters,
    });
  }
};

// Track TonderBot interactions
export const trackBotInteraction = (action: string, botFeature?: string) => {
  event("bot_interaction", {
    event_category: "TonderBot",
    event_label: botFeature,
    custom_parameter_1: action,
  });
};

// Track API documentation views
export const trackApiDocView = (section: string) => {
  event("api_doc_view", {
    event_category: "Developer API",
    event_label: section,
  });
};

// Track conversion events
export const trackConversion = (
  type: "signup" | "bot_start" | "api_request"
) => {
  event("conversion", {
    event_category: "Conversions",
    event_label: type,
    value: 1,
  });
};
