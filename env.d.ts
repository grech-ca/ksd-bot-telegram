declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'

      DATABASE_URL: string

      API_TOKEN: string
    }
  }
}

export { }
