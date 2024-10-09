"use client";

import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
// import { neobrutalism } from "@clerk/themes";
import { Provider } from "react-redux";
import store from "@/store";
import { Analytics } from "@vercel/analytics/react";
import FramerMotionProvider from "./FramerMotionProvider";
import ToastProvider from "./ToastProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "blockButton",
            socialButtonsPlacement: "bottom",
            logoImageUrl: "/assets/images/logo.svg",
          },
          // baseTheme: [neobrutalism],
          // variables: {
          //   colorPrimary: "#0E78F9",
          //   colorText: "white",
          //   colorBackground: "#fffff",
          //   colorInputBackground: "#252A41",
          //   colorInputText: "#fff",
          // },
        }}
        signUpUrl={`${process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}`}
        signInUrl={`${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`}
        signInFallbackRedirectUrl="/"
        signUpFallbackRedirectUrl="/"
      >
        <FramerMotionProvider>
          <ToastProvider />
          {children}
          <Analytics />
        </FramerMotionProvider>
      </ClerkProvider>
    </Provider>
  );
}
