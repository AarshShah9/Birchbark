import "@/styles/globals.css";
import { resolveValue, Toaster } from "react-hot-toast";
import { Inter, Karla } from "next/font/google";
import {
  ColorModeProvider,
  ColorModeScript,
  useColorMode,
} from "@chakra-ui/color-mode";
import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/schedulerTheme.css";
import type { AppProps } from "next/app";
import { registerLicense } from "@syncfusion/ej2-base";
import { api } from "~/utils/api";
import { dark, neobrutalism } from "@clerk/themes";
import { env } from "~/env.mjs";

const inter = Inter({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-inter",
});

const karla = Karla({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-karla",
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  registerLicense(env.NEXT_PUBLIC_SYNC_FUSION_LICENSE_KEY);

  const { colorMode } = useColorMode();
  const isLightMode = colorMode === "light";
  const theme = isLightMode ? neobrutalism : dark;

  return (
    <main className={`${karla.variable} ${inter.variable} font-sans`}>
      <style jsx global>{`
        html {
          font-family: ${karla.style.fontFamily};
        }

        #headlessui-portal-root {
          font-family: ${inter.style.fontFamily};
        }
        #chiefBackground {
          background-image: url("/images/chiefMountainSmall.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
      <ColorModeProvider>
        <ColorModeScript
          initialColorMode="system"
          key="chakra-ui-no-flash"
          storageKey="chakra-ui-color-mode"
        />
        <ClerkProvider
          appearance={{
            baseTheme: theme,
          }}
        >
          <Component {...pageProps} />
          <Toaster
            containerStyle={{
              bottom: 40,
              left: 20,
              right: 20,
            }}
            position="bottom-center"
            gutter={10}
            toastOptions={{
              duration: 2000,
            }}
          >
            {(t) => (
              <div
                style={{
                  opacity: t.visible ? 1 : 0,
                  transform: t.visible
                    ? "translatey(0)"
                    : "translatey(0.75rem)",
                  transition: "all .2s",
                }}
              >
                {resolveValue(t.message, t)}
              </div>
            )}
          </Toaster>{" "}
        </ClerkProvider>
      </ColorModeProvider>
    </main>
  );
};

export default api.withTRPC(MyApp);
