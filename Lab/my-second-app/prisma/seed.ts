import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.item.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "The Next.js Handbook",
      description:
        "A comprehensive guide to full-stack App Router development architecture.",
    },
  });

  await prisma.item.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: "TypeScript Mastery",
      description:
        "Deep dive into strongly-typed parameters, strict null checks, and interfaces.",
    },
  });

  console.log("Database seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
