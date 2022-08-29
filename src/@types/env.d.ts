declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSTGRES_NAME: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_USER: string;
      POSTGRES_HOST: string;
      POSTGRES_PORT: string;
      EXPRESS_PORT: string;
      CORS_ORIGINS: string;
      APP_USERNAME: string;
      APP_PASSWORD: string;
    }
  }
}

export {}
