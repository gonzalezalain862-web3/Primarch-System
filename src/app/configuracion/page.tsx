"use client";

import { useTranslation } from "react-i18next";
import "../../i18n";

export default function ConfiguracionPage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{t("configuration")}</h2>
      <div className="bg-gray-800 p-4 rounded">
        <label className="block mb-2">{t("selectLanguage")}:</label>
        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          value={i18n.language}
          className="bg-gray-700 text-white p-2 rounded w-full"
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  );
}
