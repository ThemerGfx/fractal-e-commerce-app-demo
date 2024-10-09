import { SignOutButton, UserButton } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <div>
      page protecred
      <UserButton />
      <SignOutButton />
    </div>
  );
}
