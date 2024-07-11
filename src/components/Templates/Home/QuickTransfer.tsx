import { Card, Image, User } from "@nextui-org/react";
import PlusIcon from "../../../assets/icons/fill/Plus";
import quickTransferInf from "../../../mock/quickTransferInf";
import ukFlag from "../../../assets/pictures/flag/ukFlag.jpg";
import AmountRightTop from "../../../assets/icons/fill/AmountRightTop";
import { useTheme } from "next-themes";

export default function QuickTransfer() {
  const { theme } = useTheme();

  return (
    <Card className="p-8 bg-white dark:bg-black dark:text-white rounded-4xl shadow-none space-y-5 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl 2xl:text-2xl">Quick Transfer</h3>
        <span className="text-[#4660F2] text-lg 2xl:text-sm">View all</span>
      </div>
      <div className="flex items-center overflow-x-scroll gap-3 child:w-[80px] child:h-[129px] child:p-2 child:rounded-[32px]">
        {quickTransferInf().map((item, index) => (
          <User
            style={{
              backgroundColor:
                theme === "dark" ? item.color.dark : item.color.light,
            }}
            key={index}
            className="flex flex-col"
            name={item.name}
            avatarProps={{
              src: item.profile,
              size: "lg",
            }}
          />
        ))}
        <span className="flex items-center cursor-pointer justify-center border border-dashed border-black dark:border-white">
          <PlusIcon />
        </span>
      </div>
      <div className="flex items-center justify-between gap-2 bg-[#F3F4F7] dark:bg-[#373737] py-3.5 px-[22px] rounded-full">
        <div className="flex items-center gap-2">
          <Image src={ukFlag} className="size-10" radius="full" />
          <span className="text-2xl 2xl:text-4xl font-poppinsRegular">
            $2,768
          </span>
        </div>
        <span className="bg-white dark:bg-black rounded-full p-3">
          <AmountRightTop />
        </span>
      </div>
    </Card>
  );
}
