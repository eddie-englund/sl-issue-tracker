declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_NAME: string;
    }
  }
}

export {}
