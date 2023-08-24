// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PIBLIC_API_KEY,
  authDomain: "soilmarket.firebaseapp.com",
  projectId: "soilmarket",
  storageBucket: "soilmarket.appspot.com",
  messagingSenderId: "602882915639",
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: "G-1V6FFD2ZTN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
auth.languageCode = "ko";
window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
  size: "invisible",
});
window.recaptchaVerifier.render().then((widgetId) => {
  window.recaptchaWidgetId = widgetId;
});
const appVerifier = window.recaptchaVerifier;

function formatKoreanPhoneNumber(numberString) {
  // 입력 문자열이 올바른 길이를 가지고 있는지 확인
  if (numberString.length !== 11) {
    return "Invalid input";
  }

  // 국가 코드와 나머지 번호로 분할
  const countryCode = "+82 ";
  const firstPart = numberString.substring(1, 3); // "10"
  const secondPart = numberString.substring(3, 7); // "0000"
  const thirdPart = numberString.substring(7); // "0000"

  // 모든 부분을 결합
  return countryCode + firstPart + "-" + secondPart + "-" + thirdPart;
}

/**
 * browser only
 * @param {string} phoneNumber
 * @param {() => void} onSuccess
 */
export const verifyPhoneNumber = (phoneNumber, onSuccess) => {
  const convertedPhoneNumber = formatKoreanPhoneNumber(phoneNumber);
  signInWithPhoneNumber(auth, convertedPhoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      onSuccess();
    })
    .catch((error) => {
      // Error; SMS not sent
      console.log(error);
      grecaptcha.reset(window.recaptchaWidgetId);
    });
};

/**
 * browser only
 * @param {string} code
 */
export const confirmPhoneNumber = (code) => {
  confirmationResult
    .confirm(code)
    .then((result) => {
      // User signed in successfully.
      return result;
      // ...
    })
    .catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
};
