/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly DEV: boolean;
  readonly MODE: string;
  readonly PROD: boolean;
  readonly SSR: boolean;
  // 更多环境变量...
  readonly VITE_TEST: string;
  readonly VITE_TEST1: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}