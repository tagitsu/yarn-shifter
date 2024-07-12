import Link from "next/link";

const Footer = ({}) => {
  return(
    <footer>
      <p>by tagitsu</p>
      <Link href='/about'> about </Link>
      <Link href='/contact'> contact </Link>
    </footer>
  )
};

export default Footer;