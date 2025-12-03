"use server";

import { db } from "@/lib/db";
import { createClient } from "@/lib/supabase/server";
import { Role, type User } from "@aksara/database";
import { logger } from "@/lib/utils";

export const getAuthUser = async (email: string) => {
    try {
        const details = await db.user.findUnique({
            where: {
                email,
            },
        });

        if (!details) {
            throw new Error("Not authorized");
        }

        return details as User;
    } catch (error) {
        logger(error);
    }
};

export const getAuthUserDetails = async () => {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user || !user.email) {
        return;
    }

    const userData = await db.user.findUnique({
        where: {
            email: user.email,
        },
        include: {
            agency: {
                include: {
                    sidebarOptions: true,
                    subAccounts: {
                        include: {
                            sidebarOptions: true,
                        },
                    },
                },
            },
            permissions: {
                include: {
                    subAccount: true,
                },
            },
        },
    });

    return userData;
};

export const getAuthUserGroup = async (agencyId: string) => {
    const teamMembers = await db.user.findMany({
        where: {
            agency: {
                id: agencyId,
            },
        },
        include: {
            agency: { include: { subAccounts: true } },
            permissions: { include: { subAccount: true } },
        },
    });

    return teamMembers;
};

export const deleteUser = async (userId: string) => {
    // In Supabase, deleting a user from the auth table requires admin privileges (service role).
    // For now, we will just delete from the public User table.
    // TODO: Implement Supabase Admin delete if needed.

    const deletedUser = await db.user.delete({ where: { id: userId } });

    return deletedUser;
};

export const createTeamUser = async (agencyId: string, user: User) => {
    if (user.role === "AGENCY_OWNER") return null; // already have an access

    const response = await db.user.create({
        data: {
            ...user,
        },
    });

    return response;
};

export const initUser = async (newUser: Partial<User>) => {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user || !user.email) {
        return; // Or throw error
    }

    const userData = await db.user.upsert({
        where: {
            email: user.email,
        },
        update: newUser,
        create: {
            id: user.id,
            avatarUrl: user.user_metadata.avatar_url || "",
            email: user.email,
            name: user.user_metadata.full_name || user.email.split("@")[0],
            role: newUser.role || Role.SUBACCOUNT_USER,
        },
    });

    // Supabase metadata update (optional, usually handled by triggers or client)
    // await supabase.auth.updateUser({ data: { role: newUser.role } });

    return userData;
};

export const updateUser = async (user: Partial<User>) => {
    const response = await db.user.update({
        where: { email: user.email },
        data: { ...user },
    });

    // await supabase.auth.updateUser({ data: { role: user.role } });

    return response;
};
