import Link from "next/link";

const Navbar = ({ user }) => {

  user = 'Julia';

  return(
    <nav>
      <div>yarn shifter</div>
      {
        user ?
        <div>
          <p>Hello {user}!</p>
          <Link href='/projects'>Your projects</Link>
          <button>sign out</button>
        </div>
        :
        <button>sign in</button>
      }
    </nav>
  )
};

export default Navbar;