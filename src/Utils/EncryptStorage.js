import { EncryptStorage } from 'encrypt-storage';

export const encryptStorage = new EncryptStorage(process.env.REACT_APP_ENCRYPT_STORAGE_KEY, {
  storageType: 'sessionStorage',
});

export default encryptStorage;
