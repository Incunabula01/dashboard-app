"use client";

import React, { useState, ReactElement } from 'react'
import Modal from '../Modal';
import Button from '../FormControls/button';
import { FormData } from '@/utils/types';
import { productFormControls } from '@/utils/config';
import { useRouter } from 'next/navigation';
import { addProduct } from '@/app/api/product';

type ProductLayoutProps = {
    children: ReactElement;
}

const initFormData: FormData = {
    name: '',
    price: 0,
    visitors: 0,
    sales: 0,
    month: ''
}
const  ProductLayout = ({children}: ProductLayoutProps) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>(initFormData);
    const router = useRouter();

    const handleOnAdd = async () => {
        const productAdded = await addProduct(formData);

        if (productAdded){
            setFormData(initFormData);
            setShowModal(false);
            router.refresh();
        } else {
            setFormData(initFormData);
            setShowModal(false);
        }
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

export default ProductLayout;