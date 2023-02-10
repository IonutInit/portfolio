declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL_SERVICE_ID: string;
      EMAIL_TEMPLATE_ID: string;
      EMAIL_PUBLIC_KEY: string;
    }
  }
}

export {};
