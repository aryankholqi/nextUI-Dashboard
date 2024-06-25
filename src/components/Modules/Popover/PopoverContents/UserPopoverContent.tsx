import { Divider } from '@nextui-org/react'
import MainUserCard from '../../UserCard/MainUserCard'
import { Link } from '@tanstack/react-router'
import SignoutIcon from '../../../../assets/icons/fill/Signout'
import { useTheme } from 'next-themes'
import MoonIcon from '../../../../assets/icons/fill/Moon'
import SunIcon from '../../../../assets/icons/fill/Sun'

export default function UserPopoverContent() {
    const { theme, setTheme } = useTheme()
    const isLightMode = theme === "light"

    const changeThemeHandler = () => {
        switch (isLightMode) {
            case true:
                return setTheme("dark")
            case false:
                return setTheme("light")
        }
    }
    return (
        <div className="w-56">
            <MainUserCard />
            <Divider className="my-2" />
            <ul className="w-full child:transition-all child:duration-200 child-hover:bg-primaryGray dark:child-hover:bg-black child:p-2 child:rounded-lg child:cursor-pointer">
                <li>
                    <Link to="">Profile</Link>
                </li>
                <li>
                    <Link to="">Notifications</Link>
                </li>
                <li>
                    <Link to="">Settings</Link>
                </li>
                <li onClick={changeThemeHandler} className='flex justify-between items-center'>
                    {isLightMode ? "Dark Mode" : "Light Mode"}
                    {isLightMode ? <MoonIcon /> : <SunIcon />}
                </li>
            </ul>
            <Divider className="my-2" />
            <div className="flex items-center justify-between gap-2 hover:text-white hover:bg-danger-700 translate-x-0 duration-200 w-full p-2 cursor-pointer rounded-lg">
                <span>Sign out</span>
                <SignoutIcon />
            </div>
        </div>
    )
}
