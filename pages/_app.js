import { useState } from "react";
import Head from "next/head";
import { UserProvider } from "@auth0/nextjs-auth0";
import { UserProvider as AtlasUserProvider } from "../context/UserContext";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import './styles.css';

export default function App(props) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title> Deezer plans | Not real </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <UserProvider>
        <AtlasUserProvider>
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{
                colors: {
                  brand: [
                    "#940FC7", // hightlight light
                    "#FFF", 
                    "#6633CC", // light green
                    "#FFFF33", // yellow
                    "#FF99FF", // pink
                    "#4D12B7", // icon color dark
                    "#7527B5", // btn-primary light
                    "#7F64EA", // btn-hover light
                    "#6633CC", // btn-primary dark
                    "#6633CC", // btn-hover, highlight dark
                  ],
                },
                primaryColor: "brand",
                colorScheme,
              }}
            >
              <NotificationsProvider>
                <Component {...pageProps} />
              </NotificationsProvider>
            </MantineProvider>
          </ColorSchemeProvider>
        </AtlasUserProvider>
      </UserProvider>
    </>
  );
}
