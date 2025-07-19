import React from "react";
import { useTranslation } from "react-i18next";

//react icon
import { HiPlayCircle } from "react-icons/hi2";

function MediaCarts({ bg, text }) {
  let { t } = useTranslation();

  return (
    <div
      className={`group relative flex h-[516px] w-[350px] items-end rounded-[10px] bg-cover bg-center bg-no-repeat px-6 pb-[33px] md:max-w-[380px]`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex items-center justify-between opacity-0 transition-all duration-300 group-hover:opacity-100">
        <p className="w-[192px] text-white">{t(text)}</p>
        <HiPlayCircle className="absolute right-[20px] bottom-[25px] h-[60px] w-[60px] text-white transition-all duration-300 hover:text-blue-800" />
      </div>
    </div>
  );
}

export default React.memo(MediaCarts);
