import { Disclosure } from "@headlessui/react";
import { HiPlus, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { faqs } from "../data";

function Faq() {
  const { t } = useTranslation();
  const { Button, Panel } = Disclosure;

  return (
    <section className="align-center">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">{t("faq")}</h2>
        <p className="mt-2 text-gray-500">{t("free_consultation")}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {faqs.map(({ id, questions, answer }) => (
          <Disclosure key={id}>
            {({ open }) => (
              <div className="rounded-lg border border-gray-300 p-4">
                <Button className="flex w-full justify-between text-left text-lg font-medium text-black">
                  <span>{t(questions)}</span>
                  {open ? (
                    <HiX className="h-5 w-5" />
                  ) : (
                    <HiPlus className="h-5 w-5" />
                  )}
                </Button>
                <Panel className="mt-2 text-sm leading-relaxed text-gray-700">
                  {t(answer)}
                </Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}

export default Faq;
