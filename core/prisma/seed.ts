import { PrismaClient } from "@prisma/client";
import { fieldEncryptionExtension } from "prisma-field-encryption";
const prisma = new PrismaClient().$extends(fieldEncryptionExtension());

async function clearDB() {
  await prisma.appointment.deleteMany({});
  await prisma.contentBlock.deleteMany({});
  await prisma.article.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.patient.deleteMany({});
  await prisma.doctor.deleteMany({});
  await prisma.organization.deleteMany({});
}

async function main() {
  // Seed the `Organization` table
  // Check if the Organization already exists
  let organization = await prisma.organization.findFirst({
    where: { id: 1 },
  });

  if (!organization) {
    organization = await prisma.organization.create({
      data: {
        id: 1,
        name: "HealWell Hospital",
        phone: "123-456-7890",
        email: "contact@healwellhospital.com",
        activated: true,
        // Add other fields as necessary
      },
    });
  }

  // Check if the Doctor already exists
  let doctor = await prisma.doctor.findFirst({
    where: { id: 1 },
  });

  if (!doctor) {
    doctor = await prisma.doctor.create({
      data: {
        id: 1,
        name: "Dr. Smith",
        email: "dr.smith@healwellhospital.com",
        phoneNumber: "321-654-0987",
        notificationOn: true,
        OrganizationId: organization.id,
        clerkId: "user_2YjfKNxNa2zJKIZgBQF49DfsBdr",
        // Add other fields as necessary
      },
    });
  }

  // Check if the Patient already exists
  let patient = await prisma.patient.findFirst({
    where: { id: 1 },
  });

  if (!patient) {
    patient = await prisma.patient.create({
      data: {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        phoneNumber: "987-654-3210",
        notificationOn: true,
        doctorId: doctor.id,
        OrganizationId: organization.id,
      },
    });
  }

  // Seed the `Appointment` table
  let appointment = await prisma.appointment.findFirst({
    where: { doctorId: doctor.id, patientId: patient.id },
  });

  if (!appointment) {
    appointment = await prisma.appointment.create({
      data: {
        subject: "Checkup",
        startTime: new Date(),
        endTime: new Date(),
        doctorId: doctor.id,
        patientId: patient.id,
        // Add other fields as necessary
      },
    });
  }

  // Add seeding for required wiki models
  let category = await prisma.category.findFirst({
    where: { id: 1 },
  });

  if (!category) {
    category = await prisma.category.create({
      data: {
        id: 1,
        name: "Category Name",
      },
    });
  }

  let article = await prisma.article.findFirst({
    where: { id: 1 },
  });

  if (!article) {
    article = await prisma.article.create({
      data: {
        id: 1,
        title: "Article Title",
        description: "Article Description",
        categoryId: category.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  let articleContent = await prisma.contentBlock.findFirst({
    where: { articleId: article.id },
  });

  if (!articleContent) {
    articleContent = await prisma.contentBlock.create({
      data: {
        type: "TEXT",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu ni",
        order: 1,
        articleId: article.id,
        eventId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  // Add more seeding as required for other models
}

clearDB()
  .then(() => {
    main();
  })
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
