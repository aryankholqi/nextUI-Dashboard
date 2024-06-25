import { Input } from '@nextui-org/react'
import SearchIcon from '../../../../assets/icons/fill/Search'

export default function SearchPopoverContent() {
    return (
        <form className="w-64">
            <Input
                classNames={{
                    inputWrapper: ["rounded-full"],
                }}
                className="font-poppinsRegular"
                startContent={<SearchIcon />}
                placeholder="Search"
            />
        </form>
    )
}
