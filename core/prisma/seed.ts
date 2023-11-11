import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // Seed the `Organization` table
    const organization = await prisma.organization.create({
        data: {
            name: 'HealWell Hospital',
            phone: '123-456-7890',
            email: 'contact@healwellhospital.com',
            activated: true,
            // Add other fields as necessary
        },
    });

    // Seed the `Doctor` table
    const doctor = await prisma.doctor.create({
        data: {
            name: 'Dr. Smith',
            email: 'dr.smith@healwellhospital.com',
            phoneNumber: '321-654-0987',
            notificationOn: true,
            OrganizationId: organization.id,
            // Add other fields as necessary
        },
    });

    // Seed the `Patient` table
    const patient = await prisma.patient.create({
        data: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone_num: '987-654-3210',
            notification_on: 'true',
            doctorId: doctor.id, // Make sure this doctor ID exists
            OrganizationId: organization.id, // Corrected field name to match the schema
            // Add other fields as necessary and ensure all required fields are provided
        },
    });

    // Seed the `Appointment` table
    const appointment = await prisma.appointment.create({
        data: {
            subject: 'Checkup',
            startTime: new Date(),
            endTime: new Date(),
            doctorId: doctor.id,
            patientId: patient.id,
            // Add other fields as necessary
        },
    });

    // Add more seeding as required for other models
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })