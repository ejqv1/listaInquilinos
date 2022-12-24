-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);
