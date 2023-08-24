"use client";

import React, { useState, ReactElement } from 'react'
import Modal from '../Modal';
import Button from '../FormControls/button';
import { ProductFormData } from '@/utils/types';
import { productFormControls } from '@/utils/config';
import { useRouter } from 'next/navigation';

type ProductLayoutProps = {
    children: ReactElement;
}

const initFormData: ProductFormData = {
    name: '',
    price: 0,
    visitors: 0,
    sales: 0,
    month: ''
}

export default function ProductLayout({children}: ProductLayoutProps) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<ProductFormData>(initFormData);
    const router = useRouter();

    const handleOnAdd = async () => {
        const res = await fetch('/api/product/add-product', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(formData)
        })
        console.log('res', res);

        const data = await res.json();

        if(data && data.success){
            setFormData(initFormData);
            setShowModal(false);
            router.refresh();
        } else {
            setFormData(initFormData);
            setShowModal(false);
        }
        console.log('data', data);
    };
    return (
        <>
            <div>
                <Button label={'Add New Product'} onPress={() => setShowModal(true)}/>
                {children}
                <Modal 
                    title={'Add Products'} 
                    formControls={productFormControls} 
                    show={showModal}
                    setShow={setShowModal}
                    formData={formData}
                    setFormData={setFormData}
                    onAdd={handleOnAdd}
                />
            </div>
        </>
    )
}
