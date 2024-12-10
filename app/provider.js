"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { usersTable } from "@/configs/schema";
import { db } from "@/configs/db";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {    
    user && CheckIsNewUser();
  }, [user]);

  const CheckIsNewUser = async () => {
    // check is user already exist

    const result = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));

    console.log(result);
    if (result?.length == 0) {
      // if not, then add to DB
      const userResp = await db
        .insert(usersTable)
        .values({
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
        })
        .returning({ id: usersTable.id });

      console.log(userResp);
    }
  };

  return <div>{children}</div>;
}

export default Provider;
