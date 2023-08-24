"use client";

import React, { useState, ReactElement } from 'react'
import Modal from '../Modal';
import Button from '../FormControls/button';
import { VisitorFormData } from '@/utils/types';
import { visiorsFormControls } from '@/utils/config';
import { useRouter } from 'next/navigation';

type VisitorLayoutProps = {
    children: ReactElement;
}

const initFormData: VisitorFormData = {
    visitors: 0,
    location: '',
    device: '',
    premiumUserNumber: 0,
    month: ''
}

export default function VisitorLayout({ children }: VisitorLayoutProps) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<VisitorFormData>(initFormData);
    const router = useRouter();

    const handleOnAdd = async () => {
        const res = await fetch('/api/visitor/add-visitor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        console.log('res', res);

        const data = await res.json();

        if (data && data.success) {
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
