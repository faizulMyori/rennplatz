import { Button } from "@/Components/ui/button"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbList, Breadcrumb } from "@/Components/ui/breadcrumb";
import { Link } from '@inertiajs/react';

export default function  ProductsIndex({ auth }: PageProps) {
    return(
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products</h2>}
        >
            <Head title="Products" />
            <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href={route('dashboard')}>Dashboard</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Products</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
            </div>
            <div className="flex h-[calc(100vh_-_250px)] rounded-lg border border-dashed shadow-sm">
                <div className="m-auto">
                    <div className="flex flex-col items-center gap-1 text-center">
                        <h3 className="text-2xl font-bold tracking-tight">
                            You have no products
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            You can start selling as soon as you add a product.
                        </p>
                        <Button className="mt-4">Add Product</Button>
                    </div>
                </div>
            </div>
            
            
        </AuthenticatedLayout>
    )
}