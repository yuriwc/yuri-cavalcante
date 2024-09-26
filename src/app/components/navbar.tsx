import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

function App() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Yuri Cavalcante</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#">Frontend</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            Backend
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Mobile
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default App;
