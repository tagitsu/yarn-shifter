const ProjectsPage = ({ projects }) => {

 //TODO Projects array fetched from database display all of projects one by one as an articles

  return(
    <div>
      <article>
        <img alt='knitting image' />
        <h2>Project 1 name</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </article>
      <article>
        <img alt='knitting image' />
        <h2>Project 2 name</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </article>
    </div>
  )
};

export default ProjectsPage;