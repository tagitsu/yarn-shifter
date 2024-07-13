import Link from "next/link";

const Home = ({}) => {

  return (
    <article>
      <img alt='yarn' />
      <header>How to choose a yarn other than the one suggested?</header>
      <p>It's only 3 steps and you'll enjoy knitting time.</p>
      <ol>
        <li>get info from pattern</li>
        <li>choose your yarn</li>
        <li>adjust size</li>
      </ol>
      <Link href='/shift'>Plan your knitting</Link>
    </article>
  );
};

export default Home;