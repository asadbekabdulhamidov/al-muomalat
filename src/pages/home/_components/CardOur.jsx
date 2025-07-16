import React from "react";

import { useTranslation } from "react-i18next";

function CardOur({ icon, titleKey, descKey, bgColor }) {
  let { t } = useTranslation();

  return (
    <div
      className={`${bgColor} flex h-[380px] w-[380px] flex-col justify-between rounded-[10px] p-[30px]`}
    >
      <div>
        <div className="mb-5 flex items-center gap-5">
          <img src={icon} alt="icons" />
          <h3 className="font-inter text-[24px] leading-[33px] font-bold text-[#152032]">
            {t(titleKey)}
          </h3>
        </div>
        <p className="font-inter mb-[38px] text-[17px] leading-[23px] text-[#454545]">
          {t(descKey)}
        </p>
      </div>
      <button className="w-full rounded-[8px] bg-black py-[10px] text-white">
        {t("learn_more")}
      </button>
    </div>
  );
}

export default React.memo(CardOur);
