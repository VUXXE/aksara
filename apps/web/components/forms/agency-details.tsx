"use client";

import React from "react";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Role, type Agency } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

import {
    deleteAgency,
    updateAgencyDetails,
    upsertAgency,
} from "@/lib/queries/agency";
import { saveActivityLogsNotification } from "@/lib/queries/notifications";
import { initUser } from "@/lib/queries/auth";

import { useToast } from "@/components/ui/use-toast";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/common/file-upload";

import {
    AgencyDetailsValidator,
    type AgencyDetailsSchema,
} from "@/lib/validators/agency-details";

interface AgencyDetailsProps {
    data?: Partial<Agency>;
}

const AgencyDetails: React.FC<AgencyDetailsProps> = ({ data }) => {
    const router = useRouter();
    const { toast } = useToast();

    const [deletingAgency, setDeletingAgency] = React.useState<boolean>(false);

    const form = useForm<AgencyDetailsSchema>({
        mode: "onChange",
        resolver: zodResolver(AgencyDetailsValidator),
        defaultValues: {
            whiteLabel: data?.whiteLabel || false,
            name: data?.name || "",
            companyEmail: data?.companyEmail || "",
            companyPhone: data?.companyPhone || "",
            address: data?.address || "",
            city: data?.city || "",
            zipCode: data?.zipCode || "",
            state: data?.state || "",
            country: data?.country || "",
            agencyLogo: data?.agencyLogo || "",
        },
    });
    const isSubmitting = form.formState.isSubmitting;

    React.useEffect(() => {
        if (data) {
            form.reset(data);
        }
    }, [data, form]);

    const onSubmit: SubmitHandler<AgencyDetailsSchema> = async (values) => {
        try {
            let customerId: string | undefined;

            // Stripe integration omitted for now as requested by user or due to missing keys
            // if (!data?.id) { ... }

            await initUser({ role: Role.AGENCY_OWNER });
            // if (!data?.customerId && !customerId) return;

            const response = await upsertAgency({
                id: data?.id ? data.id : uuidv4(),
                customerId: data?.customerId || customerId || "",
                address: values.address,
                agencyLogo: values.agencyLogo,
                city: values.city,
                companyPhone: values.companyPhone,
                country: values.country,
                name: values.name,
                state: values.state,
                whiteLabel: values.whiteLabel,
                zipCode: values.zipCode,
                createdAt: new Date(),
                updatedAt: new Date(),
                companyEmail: values.companyEmail,
                connectAccountId: "",
                goal: 5,
            });

            toast({
                title: "Agency Created",
                description: "Your agency has been created successfully.",
            });

            if (data?.id) router.refresh();
            if (response) router.refresh();
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Oppsie!",
                description: "Could not create your agency. Please try again.",
            });
        }
    };

    const handleDeleteAgency = async () => {
        if (!data?.id) return;

        setDeletingAgency(true);
        // TODO: discontinue the subscription for the user

        try {
            const response = await deleteAgency(data.id);

            toast({
                title: "Deleted Agency",
                description: "Deleted your agency and all related subaccounts.",
            });

            router.refresh();
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Oppse!",
                description: "Could not delete your agency. Please try again.",
            });

            router.refresh();
        }

        setDeletingAgency(false);
    };

    return (
        <AlertDialog>
            <Card className="w-full my-10 border-white/10 bg-black/40 backdrop-blur-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Create an Agency</CardTitle>
                    <CardDescription className="text-zinc-400">
                        Lets create an agency for your business. You can edit agency
                        settings latter from the agency settings tab.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                disabled={isSubmitting}
                                control={form.control}
                                name="agencyLogo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Agency Logo</FormLabel>
                                        <FormControl>
                                            <FileUpload
                                                endpoint="agencyLogo"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex md:flex-row gap-4">
                                <FormField
                                    disabled={isSubmitting}
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Agency Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your agency name" {...field} className="bg-white/5 border-white/10" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    disabled={isSubmitting}
                                    control={form.control}
                                    name="companyEmail"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Agency Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your agency email" {...field} className="bg-white/5 border-white/10" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                disabled={isSubmitting}
                                control={form.control}
                                name="companyPhone"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Agency Phone Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Your agency phone number"
                                                {...field}
                                                className="bg-white/5 border-white/10"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                disabled={isSubmitting}
                                control={form.control}
                                name="whiteLabel"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border border-white/10 gap-4 p-4 bg-white/5">
                                            <div>
                                                <FormLabel>White Label Agency</FormLabel>
                                                <FormDescription className="text-zinc-400">
                                                    Turning on &quot;White Label&quot; mode will show your
                                                    agency logo to all sub-accounts by default. You can
                                                    overwrite this functionality through sub account
                                                    settings.
                                                </FormDescription>
                                            </div>

                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    );
                                }}
                            />
                            <FormField
                                disabled={isSubmitting}
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="20 Cooper Square" {...field} className="bg-white/5 border-white/10" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex md:flex-row gap-4">
                                <FormField
                                    disabled={isSubmitting}
                                    control={form.control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>City</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Dracut" {...field} className="bg-white/5 border-white/10" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    disabled={isSubmitting}
                                    control={form.control}
                                    name="state"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>State</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Massachusetts" {...field} className="bg-white/5 border-white/10" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    disabled={isSubmitting}
                                    control={form.control}
                                    name="zipCode"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Zip Code</FormLabel>
                                            <FormControl>
                                                <Input placeholder="MA 01826" {...field} className="bg-white/5 border-white/10" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                disabled={isSubmitting}
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Country</FormLabel>
                                        <FormControl>
                                            <Input placeholder="United States" {...field} className="bg-white/5 border-white/10" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {data?.id && (
                                <div className="flex flex-col gap-2">
                                    <FormLabel>Create A Goal</FormLabel>
                                    <FormDescription className="text-zinc-400">
                                        ✨ Create a goal for your agency. As your business grows
                                        your goals grow too so dont forget to set the bar higher!
                                    </FormDescription>
                                    <Input
                                        type="number"
                                        defaultValue={data.goal}
                                        min={1}
                                        className="bg-white/5 border-white/10"
                                        placeholder="Sub Account Goal"
                                        onChange={async (e) => {
                                            if (!data.id) {
                                                return;
                                            }
                                            const value = parseInt(e.target.value);
                                            await updateAgencyDetails(data?.id, { goal: value });
                                            await saveActivityLogsNotification({
                                                description: `Updated the agency goal to | ${value} Sub Account`,
                                            });

                                            router.refresh();
                                        }}
                                    />
                                </div>
                            )}
                            <div className="flex justify-end">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-primary hover:bg-primary/90"
                                >
                                    {isSubmitting ? "Saving..." : "Save Agency Information"}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            {data?.id && (
                <Card className="border border-destructive bg-destructive/10">
                    <CardHeader>
                        <CardTitle className="text-destructive">Danger Zone</CardTitle>
                        <CardDescription className="text-zinc-400">
                            Deleting your agency cannot be undone. This will also delete all
                            sub accounts and all data related to your sub accounts. Sub
                            accounts will no longer have access to funnels, contacts etc.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <AlertDialogTrigger
                            disabled={isSubmitting || deletingAgency}
                            asChild
                        >
                            <div className="flex justify-end w-full">
                                <Button
                                    variant="destructive"
                                    disabled={isSubmitting || deletingAgency}
                                >
                                    {deletingAgency ? "Deleting..." : "Delete Agency"}
                                </Button>
                            </div>
                        </AlertDialogTrigger>

                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle className="text-left">
                                    Are you absolutely sure?
                                </AlertDialogTitle>
                                <AlertDialogDescription className="text-left">
                                    This action cannot be undone. This will permanently delete the
                                    Agency account and all related sub accounts.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter className="flex items-center">
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                    disabled={deletingAgency}
                                    className="bg-destructive hover:bg-destructive"
                                    onClick={handleDeleteAgency}
                                >
                                    Delete
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </CardFooter>
                </Card>
            )}
        </AlertDialog>
    );
};

export default AgencyDetails;
