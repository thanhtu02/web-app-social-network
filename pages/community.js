import { createStyles } from "@mantine/core";
import CreateFlutter from "../components/Flutters/CreateFlutter";
import Flutters from "../components/Flutters/Flutters";
import BannerDeezer from "../components/Banner/logo";

const useStyles = createStyles((theme) => ({
  flex: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
  },
}));

export default function Community ({ flutters, setFlutters }) {
    const { classes } = useStyles();
    return (
        <>
            <BannerDeezer />
            <CreateFlutter setFlutters={setFlutters} />
           <Flutters flutters={flutters} setFlutters={setFlutters} />
        </>
    )
}