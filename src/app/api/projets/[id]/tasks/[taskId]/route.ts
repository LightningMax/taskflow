import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../../db/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const taches = await prisma.tACHES.findMany({
      where: { id_projet: Number(id) },
      orderBy: { date_limite: "asc" },
    });

    return NextResponse.json(taches);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des tâches" },
      { status: 500 },
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const titre = body.titre;
    const date_limite = body.date_limite;
    const priorite = body.priorite;
    const status = body.status;

    if (!titre || !date_limite || !priorite || !status) {
      return NextResponse.json(
        { error: "titre, date_limite, priorite et status sont requis" },
        { status: 400 },
      );
    }

    const projet = await prisma.pROJET.findUnique({
      where: { id_projet: Number(id) },
    });

    if (!projet) {
      return NextResponse.json({ error: "Projet non trouvé" }, { status: 404 });
    }

    const nouvelleTache = await prisma.tACHES.create({
      data: {
        titre: titre,
        date_limite: new Date(date_limite),
        priorite: priorite,
        status: status,
        id_projet: Number(id),
      },
    });

    return NextResponse.json(nouvelleTache, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Erreur lors de la création de la tâche" },
      { status: 500 },
    );
  }
}
