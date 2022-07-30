declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_NAME: string;
      DB_PASSWORD: string;
      DB_USERNAME: string;
      EXPRESS_PORT: string;
      CORS_ORIGINS: string;
    }
  }
}

export {}
