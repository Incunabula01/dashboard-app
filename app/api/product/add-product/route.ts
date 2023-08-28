import { connectToDB } from "@/database";
import Product from "@/models/product";

import { NextResponse } from "next/server";

const POST = async (req:any) => {
    try {
        await connectToDB();
        const getData = await req.json();
        const newProduct = await Product.create(getData);

        if(newProduct){
            return NextResponse.json({
                success: true,
                message: 'Product created successfully!'
            });
        } else {
            return NextResponse.json({
                success: false,
                message: 'Failed to add product, please try again in a few.'
            });
        }

    } catch (error) {
        console.error('Add Product Error', error);
        return NextResponse.json({
            success: false,
            message: `Something went wrong ${error}`
        });
    }
}

export default POST;