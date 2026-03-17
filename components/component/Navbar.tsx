import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href={"/"} className="logo">
          <Image
            src={"/assets/logoipsum-407.png"}
            alt="logo"
            width={50}
            height={50}
          />
          <p>Dev Event</p>
        </Link>
        <ul>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Events</Link>
            <Link href={"/"}>Create Event</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
