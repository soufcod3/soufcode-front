import CardCategory1 from "components/CardCategory1/CardCategory1";
import React, { FC } from "react";
import WidgetHeading1 from "./WidgetHeading1";
import Input from "shared/Input/Input";
import ButtonCircle from "shared/Button/ButtonCircle";
import { ArrowSmRightIcon } from "@heroicons/react/solid";

export interface WidgetCategoriesProps {
  className?: string;
}

const WidgetNewsLetter: FC<WidgetCategoriesProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
}) => {
  return (
    <div
      className={`nc-WidgetCategories rounded-3xl  overflow-hidden ${className}`}
      data-nc-id="WidgetCategories"
    >
      <div
        className={`nc-WidgetHeading1 items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 ${className}`}
        data-nc-id="WidgetHeading1"
      >
        <h2 className="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow">
          🔔 Ma newsletter
        </h2>
      </div>
      <div className="p-3">
        <p className="px-3 mb-3 text-sm">Pour ne rater <strong>aucun article</strong></p>
        <form className="relative" onSubmit={(e) => console.log('hey')}>
          <Input
            required
            aria-required
            placeholder="exemple@mail.com"
            type="email"
            rounded="rounded-full"
          />
          <ButtonCircle
            type="submit"
            className="absolute transform top-1/2 -translate-y-1/2 right-1"
          >
            <ArrowSmRightIcon className="w-6 h-6" />
          </ButtonCircle>
        </form>
      </div>
    </div>
  );
};

export default WidgetNewsLetter;