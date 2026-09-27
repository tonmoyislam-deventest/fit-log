import Link from "next/link";

const NavLinks = () => {
  return (
    <div className="flex min-w-0 items-center gap-[clamp(2px,0.5vw,8px)]">
      <Link
        href="/"
        className="whitespace-nowrap rounded-full bg-[#ccff00]/15 px-[clamp(8px,1vw,16px)] py-[clamp(5px,0.5vw,8px)] text-[clamp(0.6875rem,0.9vw,0.875rem)] font-semibold leading-none text-[#ccff00] transition-colors hover:bg-[#d9ff4d]"
      >
        Workouts
      </Link>

      <Link
        href="/my-plan"
        className="whitespace-nowrap rounded-full px-[clamp(8px,1vw,16px)] py-[clamp(5px,0.5vw,8px)] text-[clamp(0.6875rem,0.9vw,0.875rem)] font-medium leading-none text-[#a1a1aa] transition-colors hover:text-white"
      >
        My Plan
      </Link>
    </div>
  );
};

export default NavLinks;