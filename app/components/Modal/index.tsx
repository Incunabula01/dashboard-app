"use client";
import React, { Dispatch, SetStateAction } from 'react';
import Button from '../FormControls/button';
import Input from '../FormControls/input';
import Select from '../FormControls/select';
import {  FormData, FormControls } from '@/utils/types';

type ModalProps = {
    show: boolean;
    title: string;
    formControls: FormControls;
    setShow: Dispatch<SetStateAction<boolean>>;
    formData: FormData;
    setFormData: Dispatch<SetStateAction<FormData>>;
    onAdd: () => void;
};

export default function Modal({
    show,
    title,
    formControls = [],
    setShow,
    onAdd,
    formData,
    setFormData
}: ModalProps) {
   
    return (
        <>
            {show ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[9000] outline-none focus:outline-none">
                        <div className="relative my-6 mx-auto max-w-3xl w-full lg:w-1/4">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                                    <h3 className="text-3xl font-semibold">{title}</h3>
                                </div>
                                <div className="relative p-5 flex-auto flex flex-col gap-5">
                                    {formControls && formControls.length
                                        ? formControls.map((item) =>
                                            item.componentType === "input" ? (
                                                <Input
                                                    key={item.label}
                                                    type={item.type}
                                                    placeholder={item.placeholder}
                                                    label={item.label}
                                                    value={formData && formData[item.id]}
                                                    onInputChange={(event) =>
                                                        setFormData({
                                                            ...formData,
                                                            [item.id]:
                                                                item.type === "number"
                                                                    ? parseInt(event.target.value)
                                                                    : event.target.value,
                                                        })
                                                    }
                                                />
                                            ) : item.componentType === "select" ? (
                                                <Select
                                                    key={item.label}
                                                    value={formData && formData[item.id]}
                                                    onOptionChange={(event) =>
                                                        setFormData({
                                                            ...formData,
                                                            [item.id]: event.target.value,
                                                        })
                                                    }
                                                    label={item.label}
                                                    options={item.options}
                                                />
                                            ) : null
                                        )
                                        : null}
                                </div>
                                <div className="flex gap-2 items-center justify-end p-6 border-t border-solid rounded-b">
                                    <Button label={"Add"} onPress={onAdd} />
                                    <Button onPress={() => setShow(false)} label={"Close"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-[1000] bg-black" />
                </>
            ) : null}
        </>
    );
}
