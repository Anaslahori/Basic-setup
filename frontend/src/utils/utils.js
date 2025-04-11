import CryptoJS from 'crypto-js';
export const generateSHA512 = (str, iterations = 1000) => {
    if (!str) throw new Error('Something Went Wrong');
    if (iterations === 0) return str;
    return generateSHA512(CryptoJS.SHA512(str).toString().toLowerCase(), iterations - 1);
  };