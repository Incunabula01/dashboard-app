import { connectToDB } from "@/database";
import Visitor from "@/models/visitors";

import { NextResponse } from "next/server";

 const POST = async (req: any) => {
    try {
        await connectToDB();
        const getData = await req.json();
        const newVisitor = await Visitor.create(getData);

        if (newVisitor) {
            return NextResponse.json({
                success: true,
                message: 'Visitor created successfully!'
            });
        } else {
            return NextResponse.json({
                success: false,
                message: 'Failed to add visitor, please try again in a few.'
            });
        }

    } catch (error) {
        console.error('Add Visitor Error', error);
        return NextResponse.json({
            success: false,
            message: `Something went wrong ${error}`
        });
    }
}

export default POST;