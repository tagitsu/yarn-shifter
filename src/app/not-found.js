import Link from "next/link";

const NotFound = () => {
  return(
    <div>
      <p>Sorry, the page you're looking for isn't exist.</p>
      <Link href='/'>Back to homepage</Link>
    </div>
  )
};

export default NotFound;