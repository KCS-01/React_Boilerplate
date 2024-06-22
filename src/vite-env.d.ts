/// <reference types="vite/client" />

/** TypeScript 인텔리센스 적용 */
interface ImportMetaEnv {
    readonly VITE_API_KEY: string;
    readonly VITE_API_HOST: string;
    readonly VITE_API_PORT: number;
    readonly VITE_SALT: string;
    // 다른 환경 변수들에 대한 타입 정의...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
