'use client'

import Link from "next/link";

const Error = () => {
  return(
    <div>
      <p>Oops, an error occurred!</p>
      <p>Try changing the yarn again in a few minutes</p>
      <Link href='/'>Back to homepage</Link>
    </div>
  )
};

export default Error;