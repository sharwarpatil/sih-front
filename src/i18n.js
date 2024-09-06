// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        signupTitle: "Sign Up",
        role: "Role",
        farmer: "Farmer",
        buyer: "Buyer",
        name: "Name",
        phoneNumber: "Phone Number",
        email: "Email",
        password: "Password",
        state: "State",
        city: "City",
        pinCode: "PIN Code",
        signUp: "Sign Up",
        alreadyHaveAccount: "Already have an account?",
        logIn: "Log in",
        loginTitle: "Login",
        forgotPassword: "Forgot Password?",
        signUp: "Sign up",
        noAccount: "Don't have an account?",
        invalidCredentials: "Invalid Credentials",
        searchItems: "Search Items",
        topProducts: "Top Products",
        vegetables: "Vegetables",
        fruits: "Fruits",
        flours: "Flours",
        rice: "Rice",
        dal: "Dal",
        masalas: "Masalas",
      },
    },
    hi: {
      translation: {
        signupTitle: "साइन अप करें",
        role: "भूमिका",
        farmer: "किसान",
        buyer: "खरीदार",
        name: "नाम",
        phoneNumber: "फोन नंबर",
        email: "ईमेल",
        password: "पासवर्ड",
        state: "राज्य",
        city: "शहर",
        pinCode: "पिन कोड",
        signUp: "साइन अप करें",
        alreadyHaveAccount: "पहले से ही एक खाता है?",
        logIn: "लॉग इन",
        noAccount: "खाता नहीं है?",
        invalidCredentials: "अमान्य क्रेडेंशियल",
        loginTitle: "लॉगिन करें",
        signUp: "साइन अप करें",
        searchItems: "खोज वस्तुएं",
        topProducts: "शीर्ष उत्पाद",
        vegetables: "सब्जियाँ",
        fruits: "फल",
        flours: "आटा",
        rice: "चावल",
        dal: "दाल",
        masalas: "मसाले",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already handles escaping
  },
});

export default i18n;
