import { Input } from '@nextui-org/react'
import SearchIcon from '../../../../assets/icons/fill/Search'

export default function SearchPopoverContent() {
    return (
        <form className="w-64">
            <p className='font-poppinsMedium mb-2 ml-1 capitalize'>What do you look for?</p>
            <Input
                classNames={{
                    inputWrapper: ["rounded-full"],
                }}
                className="font-poppinsRegular"
                startContent={<SearchIcon />}
                placeholder="Search"
                isClearable
            />
        </form>
    )
}
