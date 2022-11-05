import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import "../css/custom.css";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import SEO from "../components/seo";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("floatingButton", {
        calLink: "delsolventures/30min",
        buttonText: "Schedule A Call",
        buttonColor: "#0284c7",
        buttonTextColor: "#f3f4f6",
        buttonPosition: "bottom-left"
      });
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#ea580c" }
        }
      });
    })();
  }, []);
  return (
    <ThemeProvider attribute="class">
      <NextUIProvider>
        <SEO />
        <Component {...pageProps} />
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default MyApp;
