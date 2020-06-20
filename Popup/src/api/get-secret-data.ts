import { SecretData } from "../models/secret-data";

export const getSecretData = async (): Promise<SecretData | undefined> => {
  try {
    const response = await fetch('https://cdn.jsdelivr.net/gh/abrorAbdullaev/RelayAuth/authv2.json');
    return await response.json();
  } catch (e) {
    console.error(e);
  }
};