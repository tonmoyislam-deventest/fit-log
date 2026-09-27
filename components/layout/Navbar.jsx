import Logo from "./Logo";
import NavLinks from "./NavLinks";
import StatusBadges from "./StatusBadges";

const Navbar = () => {
  return (
    <header className="w-full border-b border-[#202228] bg-[#0b0c0f]">
      <nav className="mx-auto flex min-h-[clamp(52px,5vw,68px)] w-full max-w-337.5 items-center justify-between gap-[clamp(6px,1.5vw,32px)] px-[clamp(8px,2.5vw,32px)]">
        <Logo />

        <NavLinks />

        <StatusBadges />
      </nav>
    </header>
  );
};

export default Navbar;