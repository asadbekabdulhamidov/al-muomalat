import React from "react";
import { useFormik } from "formik";
import {
  SignInput,
  SignButton,
  PhoneInputForm,
} from "../../../components/index";

import { useTranslation } from "react-i18next";

function ConsultationForm() {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactPhone: "",
      agreement: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      className="mx-auto flex flex-col gap-6"
      onSubmit={formik.handleSubmit}
    >
      <SignInput
        type={"text"}
        placeholder={"Name"}
        name={"contactName"}
        onChange={formik.handleChange}
        value={formik.values.contactName}
        error={formik.errors.contactName}
        touched={formik.touched.contactName}
      />
      <PhoneInputForm
        type={"tel"}
        name={"contactPhone"}
        onChange={(value) => formik.setFieldValue("contactPhone", value)}
        value={formik.values.contactPhone}
        error={formik.errors.contactPhone}
        touched={formik.touched.contactPhone}
      />
      <div className="flex items-center gap-3.5">
        <input
          type="checkbox"
          name="agreement"
          onChange={formik.handleChange}
          value={formik.values.agreement}
        />
        <p className="font-inter text-[14px] leading-[100%] font-medium">
          {t("form_checkbox")}
        </p>
      </div>
      <SignButton type={"submit"}>{t("form_submit")}</SignButton>
    </form>
  );
}

export default ConsultationForm;
