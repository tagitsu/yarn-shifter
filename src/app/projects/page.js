const ProjectsPage = ({ projects }) => {

 //TODO Projects array fetched from database display all of projects one by one as an articles

  projects = [
    {
      id: 1,
      name: 'Project 1',
      date: [ 12, 6, 2024, 12, 7, 2024 ], // [start, finish]
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      pattern: {
        name: 'Wednesday Sweater',
        author: 'PetiteKnit',
        gauge: {
          stitches: 15,
          rows: 24,
          needles: 5
        },
        yarn: [
          {
            brand: 'Filcolana',
            name: 'Peruvian Highland Wool',
            composition: [
              {
                fiber: 'wool',
                content: 100
              }
            ],
            group: 'worsted',
            skein: {
              weight: 50,
              length: 100
            },
            notes: 'your notes about this yarn',
            price: 90,
            weight: 500,
            yardage: 1000,
            strands: 1
          },
          {
            brand: 'Sandnes Garn',
            name: 'Tynn Silk Mohair',
            composition: [
              {
                fiber: 'wool',
                content: 75
              },
              {
                fiber: 'silk',
                content: 25
              }
            ],
            group: 'lace',
            skein: {
              weight: 25,
              length: 212
            },
            notes: 'your notes about this yarn',
            price: 60,
            weight: 150,
            yardage: 1270,
            strands: 1
          }
        ],
      },
    },

  ];


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