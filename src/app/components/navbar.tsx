import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./theme-switcher";

function App() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Yuri Cavalcante</p>
      </NavbarBrand>
      <ThemeSwitcher />
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#home">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#frontend">Frontend</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#backend" aria-current="page">
            Backend
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#frontend">
            Mobile
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default App;
