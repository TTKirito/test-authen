export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        DATABASE_URL_DEV: string
        JWT_SECRET: string
        JWT_EXPIRES_IN: string
        JWT_REFRESH_TOKEN_SECRET: string
        TLS_EJECT_UNAUTHORIZED: string
    }
  }
}