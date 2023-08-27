import { connectToDB } from "@/database";
import User from "@/models/user";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
    try {
        await connectToDB();
        const { email, name } = await req.json();
        const newUser = await User.create({email, name});

        if(newUser){
            return NextResponse.json({
                success: true,
                message: `User ${email}, ${name} is registered!`
            })
        } 
        return NextResponse.json({
            success: false,
            message: 'Failed to register, try again.'
        })
    } catch (error) {
        console.error('POST error', error);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong, please try again!'
        });
    }
}