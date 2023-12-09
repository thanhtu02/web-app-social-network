import { useState, useEffect } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useSetUser } from "../context/UserContext";
import { AppShell, LoadingOverlay } from "@mantine/core";
import Navbar from "../components/Navbar/Navbar";
import Flutters from "../components/Flutters/Flutters";
import CreateFlutter from "../components/Flutters/CreateFlutter";
import HeaderSearch from "../components/Header/HeaderSearch";
import HomePage from "./home";
import Community from "./community";
import 'animate.css';
import Explore from "./explore";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [flutters, setFlutters] = useState([]);
  const [page, setPage] = useState("Home");
  const setUser = useSetUser();

  useEffect(() => {
    (async () => {
      const getUser = await fetch("/api/user");
      const getUserJson = await getUser.json();
      setUser(getUserJson);

      const getFlutters = await fetch("/api/flutter");
      const getFluttersJson = await getFlutters.json();
      setFlutters(getFluttersJson);

      setIsLoading(false);
    })();
  }, []);

  return (
    <AppShell
      header={<HeaderSearch setFlutters={setFlutters} />}
      navbar={<Navbar page={page} setPage={setPage} />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })} >
      <LoadingOverlay visible={isLoading} />
      
      {page === 'Home' &&
        <>
        <HomePage />
      </>
      }
      {page === 'Explore' && <>
       <Explore/>
      </>}
      {page === 'Community' && <>
        <Community
          flutters={flutters} setFlutters={setFlutters} />
        </>}
      
    </AppShell>
  );
}

export const getServerSideProps = withPageAuthRequired();
