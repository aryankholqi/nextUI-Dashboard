import { Dropdown, DropdownTrigger } from "@nextui-org/react";
import { dropdownProps } from "../../../interfaces/dropdown.interface";

export default function MainDropdown({ children, content }: dropdownProps) {
    return (
        <Dropdown>
            <DropdownTrigger>
                {children}
            </DropdownTrigger>
            {content}
        </Dropdown>
    )
}
