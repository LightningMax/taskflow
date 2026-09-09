import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../db/prisma";

export async function GET() {
  try {
    const projets = await prisma.pROJET.findMany({
      orderBy: { date_creation: "desc" },
    });

    return NextResponse.json(projets);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des projets" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const titre = body.titre;
    const description = body.description;
    const status = body.status;

    if (!titre || !description || !status) {
      return NextResponse.json(
        { error: "titre, description et status sont requis" },
        { status: 400 },
      );
    }

    const nouveauProjet = await prisma.pROJET.create({
      data: {
        titre: titre,
        description: description,
        status: status,
        date_creation: new Date(),
        date_modification: new Date(),
      },
    });

    return NextResponse.json(nouveauProjet, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Erreur lors de la création du projet" },
      { status: 500 },
    );
  }
}
