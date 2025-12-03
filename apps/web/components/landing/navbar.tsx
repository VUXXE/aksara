import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { getAuthUserDetails } from "@/lib/queries/agency";

export const Navbar = async () => {
    const user = await getAuthUserDetails();

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-2 flex items-center justify-between backdrop-blur-md bg-background/50 border-b border-white/10">
            <aside className="flex items-center gap-2">
                <Image
                    src="/assets/plura-logo.svg"
                    width={30}
                    height={30}
                    alt="Aksara Logo"
                />
                <span className="text-lg font-bold">Aksara.</span>
            </aside>
            <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ul className="flex items-center gap-8">
                    <li>
                        <Link
                            className={cn(
                                buttonVariants({ variant: "link" }),
                                "text-inherit p-0 underline-offset-8"
                            )}
                            href="#pricing"
                        >
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={cn(
                                buttonVariants({ variant: "link" }),
                                "text-inherit p-0 underline-offset-8"
                            )}
                            href="#about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={cn(
                                buttonVariants({ variant: "link" }),
                                "text-inherit p-0 underline-offset-8"
                            )}
                            href="#features"
                        >
                            Features
                        </Link>
                    </li>
                </ul>
            </nav>
            <aside className="flex items-center gap-2">
                <Link
                    href={user ? "/agency" : "/agency/sign-in"}
                    className={cn(buttonVariants({ variant: "secondary" }), "p-2 px-4")}
                >
                    {user ? "Dashboard" : "Login"}
                </Link>
                <ModeToggle />
            </aside>
        </header>
    );
};
