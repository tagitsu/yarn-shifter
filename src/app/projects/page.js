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
      altYarn: [
        {
          brand: 'Drops',
          name: 'Lima',
          composition: [
            {
              fiber: 'wool',
              content: 65
            },
            {
              fiber: 'alpaca',
              content: 35
            }
          ],
          group: 'worsted',
          skein: {
            weight: 50,
            length: 100
          },
          notes: 'your notes about this yarn',
          price: 10,
          weight: 500,
          yardage: 1000,
          strands: 1
        },
        {
          brand: 'Drops',
          name: 'Kid Silk',
          composition: [
            {
              fiber: 'mohair',
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
            length: 220
          },
          notes: 'your notes about this yarn',
          price: 15,
          weight: 150,
          yardage: 1320,
          strands: 1
        }
      ],
      gauge: {
        stitches: 18,
        rows: 27,
        needles: 5
      },
      myBustCircumference: 93,
      sizeSuggested: {
        name: 'M',
        bustCircumference: 120,
      },
      sizeChoosen: {
        name: 'S',
        bustCircumference: 115,
      }
    },
    {
      id: 2,
      name: 'Project 2',
      date: [ 12, 6, 2024, 12, 7, 2024 ], // [start, finish]
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      pattern: {
        name: 'Sunday Sweater',
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
      altYarn: [
        {
          brand: 'Drops',
          name: 'Lima',
          composition: [
            {
              fiber: 'wool',
              content: 65
            },
            {
              fiber: 'alpaca',
              content: 35
            }
          ],
          group: 'worsted',
          skein: {
            weight: 50,
            length: 100
          },
          notes: 'your notes about this yarn',
          price: 10,
          weight: 500,
          yardage: 1000,
          strands: 1,
          color: '#684C00'
        },
        {
          brand: 'Drops',
          name: 'Kid Silk',
          composition: [
            {
              fiber: 'mohair',
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
            length: 220
          },
          notes: 'your notes about this yarn',
          price: 15,
          weight: 150,
          yardage: 1320,
          strands: 1,
          color: '#705C2C'
        }
      ],
      gauge: {
        stitches: 18,
        rows: 27,
        needles: 5
      },
      myBustCircumference: 93,
      sizeSuggested: {
        name: 'M',
        bustCircumference: 120,
      },
      sizeChoosen: {
        name: 'S',
        bustCircumference: 115,
      }
    }
  ];

  return(
    <div>
      <h2>Your projects</h2>
      {
        projects.map( (project => (
          <article key={project.id}>
            <img alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </article>
        ))) 
      }
      
      
    </div>
  )
};

export default ProjectsPage;