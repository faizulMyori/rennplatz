import { Link } from '@inertiajs/react';
import {
    BookUserIcon,
    LocateIcon,
    PanelLeftIcon,
    Search,
    StickerIcon,
    User2Icon,
} from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet"
import { useState, PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { User } from '@/types';
import { TooltipTrigger, TooltipContent, Tooltip, TooltipProvider } from "@/Components/ui/tooltip"
import { BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbList, Breadcrumb } from "@/Components/ui/breadcrumb"
import { HomeIcon, PackageIcon, SettingsIcon } from '@/Components/Icons';
import { useTranslation } from "react-i18next";
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';

export default function Authenticated({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    const { t, i18n: {changeLanguage, language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language)

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "bm" : "en";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                    <TooltipProvider>
                        <Link
                            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                            href={route('dashboard')} 
                        >
                            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                        </Link>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${route().current('dashboard') ? ` bg-muted ` : ` text-muted-foreground `} transition-colors hover:text-foreground md:h-8 md:w-8`}
                                    href={route('dashboard')} 
                                >
                                    <HomeIcon className="h-5 w-5" />
                                    <span className="sr-only">Dashboard</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Dashboard</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${route().current('products.index') ? ` bg-muted ` : ` text-muted-foreground `} transition-colors hover:text-foreground md:h-8 md:w-8`}
                                    href={route('products.index')} 
                                >
                                    <PackageIcon className="h-5 w-5" />
                                    <span className="sr-only">Products</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Products</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${route().current('smartsecure.index') ? ` bg-muted ` : ` text-muted-foreground `} transition-colors hover:text-foreground md:h-8 md:w-8`}
                                    href={route('smartsecure.index')} 
                                >
                                    <StickerIcon className="h-5 w-5" />
                                    <span className="sr-only">SmartSecure</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">SmartSecure</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${route().current('smarttracker.index') ? ` bg-muted ` : ` text-muted-foreground `} transition-colors hover:text-foreground md:h-8 md:w-8`}
                                    href={route('smarttracker.index')} 
                                >
                                    <LocateIcon className="h-5 w-5" />
                                    <span className="sr-only">SmartTracker</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">SmartTracker</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${route().current('mddm.index') ? ` bg-muted ` : ` text-muted-foreground `} transition-colors hover:text-foreground md:h-8 md:w-8`}
                                    href={route('mddm.index')} 
                                >
                                    <BookUserIcon className="h-5 w-5" />
                                    <span className="sr-only">MDDM</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">MDDM</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${route().current('settings.index') ? ` bg-muted ` : ` text-muted-foreground `} transition-colors hover:text-foreground md:h-8 md:w-8`}
                                    href={route('settings.index')} 
                                >
                                    <SettingsIcon className="h-5 w-5" />
                                    <span className="sr-only">Settings</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Settings</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button className="sm:hidden" size="icon" variant="outline">
                                <PanelLeftIcon className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="sm:max-w-xs" side="left">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:text-base"
                                    href={route('dashboard')} 
                                >
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                    <span className="sr-only">SmartSecure</span>
                                </Link>
                                <Link className={`flex items-center gap-4 px-2.5 ${route().current('dashboard') ? `` : ` text-muted-foreground `} hover:text-foreground`} href={route('dashboard')} >
                                    <HomeIcon className="h-5 w-5" />
                                    Dashboard
                                </Link>
                                <Link  className={`flex items-center gap-4 px-2.5 ${route().current('products.index') ? `` : ` text-muted-foreground `} hover:text-foreground`} href={route('products.index')}>
                                    <PackageIcon className="h-5 w-5" />
                                    Products
                                </Link>
                                <Link  className={`flex items-center gap-4 px-2.5 ${route().current('smartsecure.index') ? `` : ` text-muted-foreground `} hover:text-foreground`} href={route('smartsecure.index')}>
                                    <PackageIcon className="h-5 w-5" />
                                    SmartSecure
                                </Link>
                                <Link  className={`flex items-center gap-4 px-2.5 ${route().current('smarttracker.index') ? `` : ` text-muted-foreground `} hover:text-foreground`} href={route('smarttracker.index')}>
                                    <LocateIcon className="h-5 w-5" />
                                    SmartTracker
                                </Link>
                                <Link  className={`flex items-center gap-4 px-2.5 ${route().current('mddm.index') ? `` : ` text-muted-foreground `} hover:text-foreground`} href={route('mddm.index')}>
                                    <BookUserIcon className="h-5 w-5" />
                                    MDDM
                                </Link>
                                <Link className={`flex items-center gap-4 px-2.5 ${route().current('settings.index') ? `` : ` text-muted-foreground `} hover:text-foreground`} href={route('settings.index')}>
                                    <SettingsIcon className="h-5 w-5" />
                                    Settings
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                        {
                            route().current('products.index') && 
                            <form>
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Search products..."
                                        className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                    />
                                </div>
                            </form>
                        }
                    </div>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                >
                                    {user.name}
        
                                    <svg
                                        className="ms-2 -me-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </Dropdown.Trigger>
        
                        <Dropdown.Content>
                            <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                Log Out
                            </Dropdown.Link>

                        </Dropdown.Content>
                    </Dropdown>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}