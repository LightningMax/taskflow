import { NextResponse } from "next/server";
import prisma from "../../../../../db/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const projet = await prisma.pROJET.findUnique({
      where: { id_projet: Number(id) },
    });

    if (!projet) {
      return NextResponse.json({ error: "Projet non trouvé" }, { status: 404 });
    }

    return NextResponse.json(projet);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération du projet" },
      { status: 500 },
    );
  }
}
