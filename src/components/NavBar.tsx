import { signOut } from "next-auth/react";
import Link from "next/link";

interface Props {
  ProfilePic: string;
}

const handleSigningOut = () => {
  void signOut();
};

const NavBar: React.FC<Props> = ({ ProfilePic }) => {
  return (
    <div className="navbar mx-auto mt-10 max-w-screen-2xl rounded-2xl bg-base-300">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">PixelPerfect</a>
      </div>
      <div className="flex-none">
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <img src={ProfilePic} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link href="/profile">
                <p className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </p>
              </Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
            <li>
              <p className="" onClick={handleSigningOut}>
                Logout
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
