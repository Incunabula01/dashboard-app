"use client";

import React, { useState, ReactElement } from 'react'
import Modal from '../Modal';
import Button from '../FormControls/button';
import { FormData } from '@/utils/types';
import { visiorsFormControls } from '@/utils/config';
import { useRouter } from 'next/navigation';
import { addVisitor } from '@/app/api/visitor';

type VisitorLayoutProps = {
    children: ReactElement;
}

const initFormData: FormData = {
    visitors: 0,
    location: '',
    device: '',
    premiumUserNumber: 0,
    month: ''
}

const VisitorLayout = ({ children }: VisitorLayoutProps) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>(initFormData);
    const router = useRouter();

    const handleOnAdd = async () => {
        const visitorAdded = await addVisitor(formData);

        if (visitorAdded) {
            setFormData(initFormData);
            setShowModal(false);
            router.refresh();
        } else {
            setFormData(initFormData);
            setShowModal(false);
        }
    };
    
    return (
        <div>
            <Button label={'Add New Visitor'} onPress={() => setShowModal(true)} />
            {children}
            <Modal
                title={'Add Visitors'}
                formControls={visiorsFormControls}
                show={showModal}
                setShow={setShowModal}
                formData={formData}
                setFormData={setFormData}
                onAdd={handleOnAdd}
            />
        </div>
    )
}

export default VisitorLayout;
