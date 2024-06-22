const { VITE_API_KEY, VITE_API_HOST, VITE_API_PORT } = import.meta.env;

/* 현재 앱이 동작하고 있는 모드 */
const MODE = import.meta.env.MODE;

/* 앱이 제공되는 베이스 URL, 공용옵션인 base에서 설정된 값 */
// import.meta.env.BASE_URL;

/* 앱이 프로덕션에서 실행 중인지 여부 - true || false */
// import.meta.env.PROD;

/* 앱이 개발 환경에서 실행 중인지 여부 - true || false  */
// import.meta.env.DEV;

/* 앱이 서버에서 실행중인지 여부 - true || false  */
// import.meta.env.SSR;

const config_env = {
    production: {
        API_KEY: VITE_API_KEY,
        API_HOST: VITE_API_HOST,
        API_PORT: VITE_API_PORT,
    },
    development: {
        API_KEY: VITE_API_KEY,
        API_HOST: VITE_API_HOST,
        API_PORT: VITE_API_PORT,
    },
};

export const config = config_env[MODE];
