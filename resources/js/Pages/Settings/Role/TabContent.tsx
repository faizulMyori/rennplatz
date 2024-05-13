import { Button } from "@/Components/ui/button"
import { TabsContent } from "@/Components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { Table, TableHeader, TableBody, TableCell, TableRow, TableHead } from "@/Components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuItem } from "@/Components/ui/dropdown-menu";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { Pagination, PaginationContent, PaginationItem } from "@/Components/ui/pagination";
import { router } from '@inertiajs/react';
import Moment from 'moment';

export default function RoleTabContent(props:any) {
    const data = props.rolePermissions.data;
    const nextUrl = props.rolePermissions.next_page_url;
    const prevUrl = props.rolePermissions.prev_page_url;
    const perTo = props.rolePermissions.to;
    const total = props.rolePermissions.total;
    
    const [prevBtn, setPrevBtn] = useState(prevUrl ? false : true)
    const [nextBtn, setNextBtn] = useState(nextUrl ? false : true)
    return(
        <TabsContent value="rp">
            <Card x-chunk="rp-chunk">
                <CardHeader>
                    <CardTitle>Roles</CardTitle>
                    <CardDescription>
                        Manage Roles & Permissions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>Role Name</TableHead>
                            <TableHead>Permission Name</TableHead>
                            <TableHead className="hidden md:table-cell">
                                Created at
                            </TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                data.length > 0 ? 
                                data.map((d:any) => {
                                    return(
                                        <TableRow key={d.id}>
                                            <TableCell className="font-medium">
                                                {d.name}
                                            </TableCell>
                                            <TableCell className="font-medium">
                                                {
                                                    d.permissions.length > 0 ?
                                                    d.permissions.map((p:any) => {
                                                        return (
                                                            <span>{p.name}</span>
                                                        )
                                                    }) :
                                                    <span>-</span>
                                                }
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                {Moment(d.created_at).format('d MMM yyyy H:mma')}
                                            </TableCell>
                                            
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button
                                                            aria-haspopup="true"
                                                            size="icon"
                                                            variant="ghost"
                                                        >
                                                            <MoreHorizontal className="h-4 w-4" />
                                                            <span className="sr-only">Toggle menu</span>
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                                        <DropdownMenuItem>Delete</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    )
                                }) :
                                <TableRow>
                                    <TableCell className="font-medium text-center" colSpan={3}>
                                        No Data
                                    </TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>1-{perTo}</strong> of <strong>{total}</strong>{" "}
                        roles & permissions
                    </div>
                    <Pagination className="ml-auto mr-0 w-auto">
                        <PaginationContent>
                            <PaginationItem>
                                <Button 
                                    size="icon" 
                                    disabled={prevBtn} 
                                    variant="outline" 
                                    className="h-6 w-6"
                                    onClick={() => router.visit(prevUrl, { method: 'get' })}
                                    >
                                        <ChevronLeft className="h-3.5 w-3.5" />
                                        <span className="sr-only">Previous R&P</span>
                                </Button>
                            </PaginationItem>
                            <PaginationItem>
                                <Button 
                                    size="icon" 
                                    disabled={nextBtn} 
                                    variant="outline" 
                                    className="h-6 w-6"
                                    onClick={() => router.visit(nextUrl, { method: 'get' })}
                                    >
                                        <ChevronRight className="h-3.5 w-3.5" />
                                        <span className="sr-only">Next R&P</span>
                                </Button>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </CardFooter>
            </Card>
        </TabsContent>
    )
}