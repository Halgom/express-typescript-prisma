import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // createMany is not supported on SQLite
  [...Array(123).keys()].forEach(async (el) => {
    await prisma.myEntity.create({
      data: { name: `entity_${String(el + 1).padStart(3, '0')}` }
    })
  })

  // If you use anything else than SQLite :
  // prisma.myEntity.createMany({
  //   data: {
  //     name: [...Array(123).keys()].map(el => `entity_${String(el + 1).padStart(3, '0')}`)
  //   }
  // })
}

main().then(async () => {
  await prisma.$disconnect()
}).catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})