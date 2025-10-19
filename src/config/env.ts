function getEnvVar(name: string): string {
  const value = import.meta.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not defined`);
  }
  return value;
}

export const env = {
  API_BASE_URL: getEnvVar("API_BASE_URL"),
  STRAPI_TOKEN: getEnvVar("STRAPI_TOKEN"),
};
