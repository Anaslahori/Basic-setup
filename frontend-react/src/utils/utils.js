import CryptoJS from "crypto-js";
export const generateSHA512 = (str, iterations = 1000) => {
  if (!str) throw new Error("Something Went Wrong");
  if (iterations === 0) return str;
  return generateSHA512(
    CryptoJS.SHA512(str).toString().toLowerCase(),
    iterations - 1
  );
};

export const getTokenFromCookie = () => {
  const token = document.cookie
    .split("; ")
    .filter((x) => x && x.split("=")?.[0] === "auth_token")?.[0];
  return token?.split("=")?.[1] ? `Bearer ${token.split("=")?.[1]}` : "";
};


