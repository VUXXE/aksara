"use server"

import { initUser } from "@/lib/queries"
import { createClient } from "@/lib/supabase/server"

export const onSignup = async (formData: {
    email: string
    fullName: string
}) => {
    const supabase = await createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) return { error: "No user found" }

    await initUser({
        id: user.id,
        email: formData.email,
        firstName: formData.fullName.split(" ")[0] || "",
        lastName: formData.fullName.split(" ")[1] || "",
        avatarUrl: "",
    })

    return { success: true }
}
