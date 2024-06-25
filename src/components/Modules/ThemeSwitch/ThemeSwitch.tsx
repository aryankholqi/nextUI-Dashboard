import MainTooltip from '../Tooltip/MainTooltip'
import MoonIcon from '../../../assets/icons/fill/Moon'
import { useTheme } from 'next-themes'
import SunIcon from '../../../assets/icons/fill/Sun'

export default function ThemeSwitch() {
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
        <MainTooltip content={isLightMode ? `Dark Mode` : `Light Mode`}>
            <span onClick={changeThemeHandler} className='cursor-pointer hidden sm:block'>
                {isLightMode ? <MoonIcon /> : <SunIcon />}
            </span>
        </MainTooltip>
    )
}
