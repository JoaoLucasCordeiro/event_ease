import React, { startTransition, useEffect, useState } from "react"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import { ICategory } from "@/lib/database/models/category.model";
import { Input } from "../ui/input";
import { createCategory, getAllCategories } from "@/lib/actions/category.actions";

type DropdownProps = {
    value?: string,
    onChangeHandler?: () => void,
}

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {

    const [categories, setCategories] = useState<ICategory[]>([]);
    const [newCategoty, setNewCategory] = useState('');


    const handleAddCategory = () => {
        createCategory({
            categoryName: newCategoty.trim(),
        })
        .then((category) => {
            setCategories((prevState) => [...prevState, category])
        })
    }

    useEffect(() => {
        const getCategories = async () => {
            const categoryList = await getAllCategories();

            categoryList && setCategories(categoryList as ICategory[]);
        }

        getCategories();
    }, [])

    return (
        <Select onValueChange={onChangeHandler} defaultValue={value}>
            <SelectTrigger className="select-field">
                <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
                {categories.length > 0 && categories.map((category) => (
                    <SelectItem
                        key={category._id}
                        value={category._id}
                        className="select-item p-regular-14"
                    >
                        {category.name}
                    </SelectItem>
                ))}
                <AlertDialog>
                    <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500">Nova categoria</AlertDialogTrigger>
                    <AlertDialogContent className="bg-white">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Nova Categoria</AlertDialogTitle>
                            <AlertDialogDescription>
                                <Input type="text" placeholder="Nome da categoria" className="input-field mt-3" onChange={(e) => setNewCategory(e.target.value)} />
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction onClick={() => startTransition(handleAddCategory)}>Adicionar</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>


            </SelectContent>
        </Select>

    )
}

export default Dropdown