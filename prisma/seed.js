const prisma = require("../prisma");
const { faker } = require("@faker-js/faker");

const seed = async () => {
  // TODO: Create 3 restaurants with 5 reservations each
  for (let i = 0; i < 3; i++) {
    const restaurant = await prisma.restaurant.create({
      data: {
        name: faker.company.name(),
        reservations: {
          create: [
            {
              name: faker.internet.username(),
              email: faker.internet.email(),
              partySize: 3,
            },
            {
              name: faker.internet.username(),
              email: faker.internet.email(),
              partySize: 3,
            },
            {
              name: faker.internet.username(),
              email: faker.internet.email(),
              partySize: 3,
            },
            {
              name: faker.internet.username(),
              email: faker.internet.email(),
              partySize: 3,
            },
            {
              name: faker.internet.username(),
              email: faker.internet.email(),
              partySize: 3,
            },
          ],
        },
      },
    });
  }
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
