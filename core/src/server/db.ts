import {PrismaClient} from "@prisma/client";
import {fieldEncryptionExtension} from "prisma-field-encryption";
import {globalForPrisma} from "~/server/globalForPrisma";

const prismaC =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

export const prisma = prismaC.$extends(fieldEncryptionExtension())


if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prismaC;
