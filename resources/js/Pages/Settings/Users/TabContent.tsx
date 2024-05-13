import { Button } from "@/Components/ui/button"
import { TabsContent } from "@/Components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { Table, TableHeader, TableBody, TableCell, TableRow, TableHead } from "@/Components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuItem } from "@/Components/ui/dropdown-menu";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import { useState } from "react";
import { Pagination, PaginationContent, PaginationItem } from "@/Components/ui/pagination";
import { router } from '@inertiajs/react';
import { capitalize } from "@/lib/utils";
import Moment from 'moment';

export default function UsersTabContent(props:any) {
    const data = props.users.data;
    const nextUrl = props.users.next_page_url;
    const prevUrl = props.users.prev_page_url;
    const currentPage = props.users.current_page;
    const perTo = props.users.to;
    const total = props.users.total;
    
    const [prevBtn, setPrevBtn] = useState(prevUrl ? false : true)
    const [nextBtn, setNextBtn] = useState(nextUrl ? false : true)

    return(
        <TabsContent value="users">
            <Card x-chunk="users-chunk">
                <CardHeader>
                    <CardTitle>Users</CardTitle>
                    <CardDescription>
                        Manage users and view their data.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead className="hidden md:table-cell">Email</TableHead>
                            <TableHead>Role</TableHead>
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
                                            <TableCell className="hidden md:table-cell">
                                                {d.email}
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline">{d.roles.length > 0 ? capitalize(d.roles[0]) : "Unknown"}</Badge>
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
                                }):
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
                        users
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
                                        <span className="sr-only">Previous Users</span>
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
                                        <span className="sr-only">Next Users</span>
                                </Button>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </CardFooter>
            </Card>
        </TabsContent>
    )
}