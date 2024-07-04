export default function DashboardIcon({ isActive }: { isActive: boolean }) {
    return (
        <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="dashboard-icon">
            <g filter="url(#filter0_d_4_2301)">
                <path d="M12 5.33331H6.66665C5.93027 5.33331 5.33331 5.93027 5.33331 6.66665V12C5.33331 12.7364 5.93027 13.3333 6.66665 13.3333H12C12.7364 13.3333 13.3333 12.7364 13.3333 12V6.66665C13.3333 5.93027 12.7364 5.33331 12 5.33331Z" strokeWidth="2" strokeLinejoin="round" className={`dashboard-icon-path ${isActive ? "fill-primaryGreen stroke-primaryGreen" : "fill-white stroke-white"}`} />
                <path d="M12 18.6667H6.66665C5.93027 18.6667 5.33331 19.2636 5.33331 20V25.3334C5.33331 26.0697 5.93027 26.6667 6.66665 26.6667H12C12.7364 26.6667 13.3333 26.0697 13.3333 25.3334V20C13.3333 19.2636 12.7364 18.6667 12 18.6667Z" strokeWidth="2" strokeLinejoin="round" className={`dashboard-icon-path ${isActive ? "fill-primaryGreen stroke-primaryGreen" : "fill-white stroke-white"}`} />
                <path d="M25.3334 18.6667H20C19.2636 18.6667 18.6667 19.2636 18.6667 20V25.3334C18.6667 26.0697 19.2636 26.6667 20 26.6667H25.3334C26.0697 26.6667 26.6667 26.0697 26.6667 25.3334V20C26.6667 19.2636 26.0697 18.6667 25.3334 18.6667Z" strokeWidth="2" strokeLinejoin="round" className={`dashboard-icon-path ${isActive ? "fill-primaryGreen stroke-primaryGreen" : "fill-white stroke-white"}`} />
                <path d="M25.3334 5.33331H20C19.2636 5.33331 18.6667 5.93027 18.6667 6.66665V12C18.6667 12.7364 19.2636 13.3333 20 13.3333H25.3334C26.0697 13.3333 26.6667 12.7364 26.6667 12V6.66665C26.6667 5.93027 26.0697 5.33331 25.3334 5.33331Z" strokeWidth="2" strokeLinejoin="round" className={`dashboard-icon-path ${isActive ? "fill-primaryGreen stroke-primaryGreen" : "fill-white stroke-white"}`} />
            </g>
            <defs>
                <filter id="filter0_d_4_2301" x="-4" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_2301" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_2301" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}
