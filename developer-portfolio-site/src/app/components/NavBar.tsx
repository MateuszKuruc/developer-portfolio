import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full h024 shadow-xl bg-white">
      {/* Desktop Menu */}
      <div className="flex items-center justify-between h-full px-4 w-full">
        <Link href="/">
          <Image
            src="/logo-placeholder.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </Link>
      </div>
      

      {/* Mobile Menu */}
      {/* Social media links */}
    </nav>
  );
};

export default NavBar;
