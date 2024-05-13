import { Button } from "@/Components/ui/button"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbList, Breadcrumb } from "@/Components/ui/breadcrumb";
import { Link } from '@inertiajs/react';

export default function MddmIndex({ auth }: PageProps) {
    return(
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">MDDM</h2>}
        >
            <Head title="MDDM" />
            
            <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href={route('dashboard')}>Dashboard</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>MDDM</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">MDDM</h1>
            </div>

            <div
                className="flex h-[calc(100vh_-_250px)] rounded-lg border border-dashed shadow-sm" 
            >
                <div className="m-auto">
                    <div className="flex flex-col items-center gap-1 text-center">
                    
                        <h3 className="text-2xl font-bold tracking-tight">
                            Not Yet Implemented
                        </h3>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}