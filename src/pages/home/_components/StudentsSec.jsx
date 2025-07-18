import React from "react";
import { useTranslation } from "react-i18next";

const StudentsSec = () => {
  let { t } = useTranslation();
  return (
    <div className="container">
      <div>
        <h2>{t("what_students_say")}</h2>
        <p>{t("what_students_say")}</p>
      </div>
    </div>
  );
};

export default StudentsSec;
