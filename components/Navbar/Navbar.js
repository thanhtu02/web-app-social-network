import { Navbar as NavbarMT, createStyles } from "@mantine/core";
import {
  BrandSoundcloud,
  Home,
  MessageCircle,
  Music,
  User
} from "tabler-icons-react";
import UserButton from "../UserButton/UserButton";

const linkData = [
  { link: "", label: "Home", icon: Home },
  { link: "", label: "Explore", icon: Music },
  { link: "", label: "Community", icon: MessageCircle }
];

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    navbar: {
      position: "sticky",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white
    },
    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[2]}`
    },
    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[1],
        color:
          theme.colorScheme === "dark"
            ? theme.white
            : theme.fn.rgba(theme.colors[theme.primaryColor][0], 0.5),
        [`& .${icon}`]: {
          color:
            theme.colorScheme === "dark"
              ? theme.white
              : theme.fn.rgba(theme.colors[theme.primaryColor][0], 0.5)
        }
      }
    },
    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm
    },
    linkActive: {
      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.05)
            : theme.colors[theme.primaryColor][1],
        color:
          theme.colorScheme === "dark"
            ? theme.colors[theme.primaryColor][5]
            : theme.colors[theme.primaryColor][0],
        [`& .${icon}`]: {
          color:
            theme.colors[theme.primaryColor][
              theme.colorScheme === "dark" ? 5 : 0
            ]
        }
      }
    }
  };
});

const Navbar = ({ page, setPage }) => {
  const { classes, cx } = useStyles();

  const links = linkData.map(item =>
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === page
      })}
      href={item.link}
      key={item.label}
      onClick={event => {
        event.preventDefault();
        setPage(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} /> <span> {item.label} </span>
    </a>
  );

  return (
    <NavbarMT width={{ xs: 200, sm: 300 }} p="md" className={classes.navbar}>
      <NavbarMT.Section grow> {links} </NavbarMT.Section>{" "}
      <NavbarMT.Section className={classes.footer}>
        <UserButton />
      </NavbarMT.Section>
    </NavbarMT>
  );
};

export default Navbar;
