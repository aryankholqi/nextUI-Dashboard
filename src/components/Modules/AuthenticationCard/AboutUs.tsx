import { Avatar, AvatarGroup } from "@nextui-org/react";
import MainTooltip from "../Tooltip/MainTooltip";
import { aboutUsInfo } from "../../../constants/aboutUsInfo";

export default function AboutUs() {
    return (
        <div className="flex items-start gap-4">
            <AvatarGroup isBordered>
                {aboutUsInfo.map((user, index) => (
                    <MainTooltip content={user.name} key={index}>
                        <Avatar src={user.img} onClick={() => window.location.href = user.github} className="cursor-pointer" />
                    </MainTooltip>
                ))}
            </AvatarGroup>
            <div>
                <p className="font-poppinsMedium text-lg capitalize">Designed with ♥️ by us</p>
                <span className="text-primaryGray text-sm">you can see our works there</span>
            </div>
        </div>
    )
}
