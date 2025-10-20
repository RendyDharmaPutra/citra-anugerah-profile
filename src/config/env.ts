function getEnvVar(name: string): string {
  const value = import.meta.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not defined`);
  }
  return value;
}

export const env = {
  API_BASE_URL: getEnvVar("PUBLIC_API_BASE_URL"),
  STRAPI_TOKEN: getEnvVar("PUBLIC_STRAPI_TOKEN"),
};
