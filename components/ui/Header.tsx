import { siteConfig } from "@/config/siteConfig";
import MenuItem from "@/components/ui/MenuItem";
import SiteLogo from "@/components/ui/SiteLogo";
import ToggleTheme from "@/components/ui/ToggleTheme";

export default function Header() {
  return (
    <div className='max-w-7xl mx-auto flex justify-between items-center p-2.5'>
        <SiteLogo />
        <div className="flex space-x-4 items-center">
            {siteConfig.mainMenuLinks.map((link) => (
                <MenuItem key={link.label} {...link} btnClass="hover:bg-gray-300 dark:hover:bg-gray-900 px-3 py-2 rounded-lg"/>
            ))}
        </div>
        <div>
            <ToggleTheme />
        </div>
    </div>
  )
}
