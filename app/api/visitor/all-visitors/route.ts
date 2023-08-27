import { connectToDB } from "@/database";
import Visitor from "@/models/visitors";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDB();
        const getAllVisitors = await Visitor.find({});

        if (getAllVisitors) {
            return NextResponse.json({
                success: true,
                data: getAllVisitors
            })
        } else {
            return NextResponse.json({
                success: false,
                message: 'Failed to get all visitors, please try again in a few.'
            });
        }
    } catch (error) {
        console.error('All Visitors Error', error);
        return NextResponse.json({
            success: false,
            message: `Something went wrong ${error}`
        })
    }
}