/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-800 w-full p-6 sm:flex-col sm:items-center gap-1 sm:gap-4 ">
      <div className="container mx-auto px-4 flex justify-between my-8 ">
        <ul className="text-white">
          <li>
            <img
              width={"150px"}
              style={{ borderRadius: "20px" }}
              src="https://img.freepik.com/premium-vector/dream-logo_10250-3954.jpg"
              alt=""
            />
          </li>
          <p style={{ fontSize: "20px" }}> {t("common.button.payby")}</p>
          <div className="flex">
            <div className="bg-white p-3 rounded-lg mr-2 mb-2">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339548088-c536c896b175cb38f99a31f5dd2a989a.png?tr=h-19,q-75,w-57"
                alt=""
              />
            </div>
            <div className="bg-white p-3 rounded-lg mr-2 mb-2">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339578215-99466ea3d377ada2939bf2117df21b11.png?tr=h-19,q-75,w-57"
                alt=""
              />
            </div>

            <div className="bg-white p-3 rounded-lg mr-2 mb-2">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/08/15/1692094839134-e4b4b67ef82e8c19bb19e63d27b0f3ad.png?tr=h-19,q-75,w-57"
                alt=""
              />
            </div>

            <div className="bg-white p-3 rounded-lg mb-2">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781296885-a206730836975c02b8ce75a732f00caf.png?tr=h-19,q-75,w-57"
                alt=""
              />
            </div>
          </div>
          <div className="flex">
            <div className="bg-white p-3 rounded-lg mr-2 ">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339567663-c7c5e25757f0d69375aa6de6ad57958f.png?tr=h-19,q-75,w-57"
                alt=""
              />
            </div>

            <div className="bg-white p-3 rounded-lg mr-2">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339557703-5697f31b3e12a942eabc0f613bff8fb9.png?tr=h-19,q-75,w-57"
                alt=""
              />
            </div>

            <div className="bg-white p-3 rounded-lg mr-2">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781263528-febaf8c61699a7df689ffbd475abd453.png?tr=h-19,q-75,w-57"
                alt=""
              />
            </div>

            <div className="bg-white p-3 rounded-lg">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781283882-14484fab2f2d958a1b2917dd450d31ac.png?tr=h-19,q-75,w-57"
                alt=""
              />
            </div>
          </div>
        </ul>

        <ul className="text-white">
          <li className="font-bold text-xl"> {t("common.button.aboutus")} </li>
          <li>{t("common.button.howtob")}</li>

          <li> {t("common.button.contactus")}</li>
          <li> {t("common.button.helpcenter")}</li>
          <li> {t("common.button.careers")}</li>
          <li> {t("common.button.aboutus")}</li>
        </ul>
        <ul className="text-white md: mx-1 ">
          <li className="font-bold text-xl"> {t("common.button.hotel")}</li>
          <li> {t("common.button.flightH")}</li>
          <li> {t("common.button.experience")}</li>
          <li> {t("common.button.carR")}</li>
          <li> {t("common.button.airportT")}</li>
          <li>{t("common.button.villas")}</li>
          <li>{t("common.button.apartments")}</li>
        </ul>
        <ul className="text-white mx-2">
          <li className="font-bold text-xl">{t("common.button.other")}</li>
          <li> {t("common.button.other")}</li>
          <li> {t("common.button.bookingA")}</li>
          <li> {t("common.button.blog")}</li>
          <li> {t("common.button.privacy")}</li>
          <li> {t("common.button.termC")}</li>
          <li> {t("common.button.registerE")}</li>
          <li> {t("common.button.registerA")}</li>
        </ul>

        <ul className="text-white">
          <li className="font-bold text-xl mb-2"> {t("common.button.canB")}</li>
          <li className="flex gap-2">
            <img
              width={"100px"}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
              alt=""
            />
            <img
              width={"100px"}
              src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
