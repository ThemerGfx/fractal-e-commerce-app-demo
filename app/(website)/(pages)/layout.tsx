import Footer from "@/components/modules/footer";
import Header from "@/components/modules/header";
// import MobileButton from "@/components/modules/header/MobileButtom";
import * as React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {/* <MobileButton /> */}
      {children}
      <Footer />
    </>
  );
}
