import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";


export async function GET (req,{params}){   
    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id),
        },
    });
    return NextResponse.json(task);
}
export async function PUT (req,{params}){
    const data = await req.json();
    const taskUpdate = await prisma.task.update({
        where: {
            id: Number(params.id),
        },
        data: data
    });

    return NextResponse.json(taskUpdate);
}
export async function DELETE (req,{params}){
    try {
        const taskRemove = await prisma.task.delete({
            where: {
                id: Number(params.id),
            },
        });
        console.log(taskRemove)
        return NextResponse.json(taskRemove);
    }
    catch (error) {
        return NextResponse.json({ message: "Error al eliminar la tarea" });
    }
}