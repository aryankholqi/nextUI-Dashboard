import MainTooltip from '../Tooltip/MainTooltip'
import MoonIcon from '../../../assets/icons/fill/Moon'
import { useTheme } from 'next-themes'
import SunIcon from '../../../assets/icons/fill/Sun'

export default function ThemeSwitch({ hasLabel = false }: { hasLabel: boolean }) {
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

        <div onClick={changeThemeHandler} className='flex justify-between items-center cursor-pointer'>
            {hasLabel ? isLightMode ? "Dark Mode" : "Light Mode" : null}
            <MainTooltip content={isLightMode ? `Dark Mode` : `Light Mode`}>
                <span>{isLightMode ? <MoonIcon /> : <SunIcon />}</span>
            </MainTooltip>
        </div >
    )
}
