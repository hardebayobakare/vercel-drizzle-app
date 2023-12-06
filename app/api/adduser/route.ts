import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        console.log(body);

        return NextResponse.json(body);
    } catch (error) {
        console.log("Error: ", error);
        return NextResponse.json(error);
    }
}