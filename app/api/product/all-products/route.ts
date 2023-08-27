import { connectToDB } from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDB();
        const getAllProducts = await Product.find({});

        if(getAllProducts){
            return NextResponse.json({
                success: true,
                data: getAllProducts
            })
        } else {
            return NextResponse.json({
                success: false,
                message: 'Failed to get all products, please try again in a few.'
            });
        }
    } catch (error) {
        console.error('All Products Error', error);
        return NextResponse.json({
            success: false,
            message: `Something went wrong ${error}`
        })
    }
}