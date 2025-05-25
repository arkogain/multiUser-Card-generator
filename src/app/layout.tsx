import DesktopNav from "@/components/Navs/DesktopNav";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ReactNode } from "react";
import "./globals.css";
import { Particles } from "@/components/magicui/particles";

type RootLayoutProtoType = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProtoType) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Particles
            className="fixed inset-0 z-0 h-full w-full"
            quantity={1000}
            color="#C0225F"
            staticity={100}
          />
          <DesktopNav />
          <main className="mt-12 container mx-auto px-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
