import { Button } from "@/Components/ui/button"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbList, Breadcrumb } from "@/Components/ui/breadcrumb";
import { Link } from '@inertiajs/react';
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import UsersTabContent from "./Users/TabContent";
import RolePermissionTabContent from "./Role/TabContent";
import PermissionTabContent from "./Permission/TabContent";

export default function SettingsIndex({ auth, users, roles, permissions, rolePermissions }: PageProps) {
    const [changeTab, setChangeTab] = useState('Users')

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const usersParam = urlParams.get('users')
    const rolesParam = urlParams.get('roles')
    const permissionParam = urlParams.get('permission')

    return(
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Settings</h2>}
        >
            <Head title="Settings" />
            
            <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href={route('dashboard')}>Dashboard</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Settings</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Settings</h1>
            </div>

            <div
                className="flex h-[calc(100vh_-_250px)] rounded-lg shadow-sm" 
            >
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <Tabs defaultValue="users">
                        <div className="flex items-center">
                            <TabsList>
                                <TabsTrigger value="users" onClick={() => setChangeTab('Users')}>Users</TabsTrigger>
                                <TabsTrigger value="rp" onClick={() => setChangeTab('Role')}>Role</TabsTrigger>
                                <TabsTrigger value="p" onClick={() => setChangeTab('Permission')}>Permission</TabsTrigger>
                            </TabsList>
                            <div className="ml-auto flex items-center gap-2">
                                <Button size="sm" className="h-8 gap-1">
                                    <PlusCircle className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Add {changeTab}
                                    </span>
                                </Button>
                            </div>
                        </div>
                        {changeTab === "Users" ? <UsersTabContent users={users}/> : ""}
                        {changeTab === "Role" ? <RolePermissionTabContent rolePermissions={rolePermissions} /> : ""}
                        {changeTab === "Permission" ? <PermissionTabContent permissions={permissions} /> : ""}
                    </Tabs>
                </main>
            </div>
        </AuthenticatedLayout>
    )
}