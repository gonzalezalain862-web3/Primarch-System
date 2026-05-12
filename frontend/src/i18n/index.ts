import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { welcome: "Welcome to Primarch", configuration: "Configuration", selectLanguage: "Select Language" } },
    es: { translation: { welcome: "Bienvenido a Primarch", configuration: "Configuración", selectLanguage: "Seleccionar idioma" } },
  },
  lng: "es",
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

export default i18n;
