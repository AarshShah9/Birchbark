import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed the `Organization` table
  // Check if the Organization already exists
  let organization = await prisma.organization.findFirst({
    where: { name: "HealWell Hospital" },
  });

  if (!organization) {
    organization = await prisma.organization.create({
      data: {
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
    where: { email: "dr.smith@healwellhospital.com" },
  });

  if (!doctor) {
    doctor = await prisma.doctor.create({
      data: {
        name: "Dr. Smith",
        email: "dr.smith@healwellhospital.com",
        phoneNumber: "321-654-0987",
        notificationOn: true,
        OrganizationId: organization.id,
        // Add other fields as necessary
      },
    });
  }

  // Check if the Patient already exists
  let patient = await prisma.patient.findFirst({
    where: { email: "john.doe@example.com" },
  });

  if (!patient) {
    patient = await prisma.patient.create({
      data: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone_num: "987-654-3210",
        notification_on: "true",
        doctorId: doctor.id,
        OrganizationId: organization.id,
      },
    });
  }

  let availability = await prisma.availability.findFirst({
    where: { doctorId: doctor.id },
  });

  if (!availability) {
    availability = await prisma.availability.create({
      data: {
        doctorId: doctor.id,
        date: new Date(),
        startTime: "2021-04-20T09:00:00.000Z",
        endTime: "2021-04-20T12:00:00.000Z",
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
        startTime: new Date("2023-11-10T12:00:00"),
        endTime: new Date("2023-11-10T12:30:00"),
        doctorId: doctor.id,
        patientId: patient.id,
      },
    });
  }

  // Add seeding for required wiki models
  let category = await prisma.category.findFirst({
    where: { name: "Category Name" },
  });

  if (!category) {
    category = await prisma.category.create({
      data: {
        name: "Category Name",
      },
    });
  }

  let article = await prisma.article.findFirst({
    where: { title: "Article Title" },
  });

  if (!article) {
    article = await prisma.article.create({
      data: {
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

  let event1 = await prisma.event.findFirst({
    where: { title: "Event 1" },
  });

  if (!event1) {
    event1 = await prisma.event.create({
      data: {
        title: "Event 1",
        date: new Date(),
        content: {
          create: {
            type: "IMAGE",
            content: "https://example.com/image1.png",
            order: 1, // Adjust the order based on your requirements
          },
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
