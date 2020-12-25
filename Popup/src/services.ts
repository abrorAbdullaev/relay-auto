import { sha256 } from 'js-sha256';

export interface AuthResult {
  isSuccess: boolean
  encryption: string
}

export class Auth {
  static async login(login: string, password: string): Promise<boolean> {
    try {
      const result = await fetch('https://raw.githubusercontent.com/abrorAbdullaev/RelayAuth/master/authv2.json');
      const secrets = await result.json();
      const passHash: string | undefined = secrets[sha256(login)];
      return !!(passHash && passHash === sha256(password));
    } catch (e) {
      return false;
    }
  }
}
