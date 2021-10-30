const DEV_BACKEND_URL = "https://cdn-api.co-vin.in/api"
const PROD_BACKEND_URL = "https://cdn-api.co-vin.in/api"

const devEnvironmentVariables = {
    BACKEND_URL: DEV_BACKEND_URL,
};

const prodEnvironmentVariables = {
    BACKEND_URL: PROD_BACKEND_URL,
};

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;