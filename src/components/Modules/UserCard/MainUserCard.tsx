import { Avatar, Chip } from "@nextui-org/react";
import userImage from "../../../assets/pictures/users/Avatar3.svg";

export default function MainUserCard() {
  return (
    <div className="flex items-center gap-2">
      <Avatar src={userImage} alt="" />
      <div>
        <div className="flex items-center gap-2">
          <p className="text-primaryGray text-xs font-poppinsLight">
            @williamB1111
          </p>
          <Chip className="bg-primaryGreen text-black font-poppinsRegular text-xs">
            Pro
          </Chip>
        </div>
        <h4 className="font-poppinsRegular">William Blake</h4>
      </div>
    </div>
  );
}
