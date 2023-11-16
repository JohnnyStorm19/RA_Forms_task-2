import { useState, useEffect } from "react";

import { getCurrentDate } from "../helpers/getCurrentDate";
import { IForm } from "../models";
import { List } from "./List";
import { formatDateToIsoStringType } from "../helpers/formatDateToIsoStringType";


export function Form() {
    const currentDate = getCurrentDate(); // получаем текущую дату необходимого формата, чтобы вставить в инпут

    const [form, setFormData] = useState<IForm>({
        date: currentDate,
        distance: '0'
    });
    const [elements, setElements] = useState<IForm[]>([]);

    useEffect(() => {
        console.log('Elements:', elements); // Актуальное значение elements
    }, [elements]);

    const onSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setElements([...elements, {date: form.date, distance: form.distance}])
        setFormData({
            ...form,
            distance: '0'
        })
    }

    const onChangeDateHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData({
            ...form,
            date: e.currentTarget.value,
        })
    }

    const onChangeDistanceHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData({
            ...form,
            distance: e.currentTarget.value
        })
    }

    const onDeleteCallback = (element: React.RefObject<HTMLElement>) => {
        const date = element.current?.querySelector('.item-date')?.textContent;
        if (date) {
            const isoTypeDate = formatDateToIsoStringType(date);
            setElements([...elements].filter(item => item.date != isoTypeDate));
        }
    }

    const onChangeItemCallback = (element: React.RefObject<HTMLElement>) => {
        const date = element.current?.querySelector('.item-date')?.textContent;
        const distance = element.current?.querySelector('.item-distance')?.textContent;
        if (date && distance) {
            const isoTypeDate = formatDateToIsoStringType(date);

            setFormData({
                ...form,
                date: isoTypeDate,
                distance: distance
            })

            setElements([...elements].filter(item => item.date != isoTypeDate));
        }
    }

    return (
        <>
            <form 
                className="form"
                onSubmit={onSubmitHandler}
            >
                <input 
                    type="date"
                    name="date"
                    id="date-input"
                    value={form.date} 
                    onChange={onChangeDateHandler}
                    required 
                />
                <input 
                    type="number"
                    step="0.1" 
                    min={0.1}
                    name="distance" 
                    id="distance-input"
                    value={form.distance}
                    onChange={onChangeDistanceHandler}
                    required  
                />
                <button type="submit">OK</button>
            </form>

            <List 
                elements={elements} 
                onDeleteCallback={onDeleteCallback}
                onChangeItemCallback = {onChangeItemCallback}
            />
        </>
    )
}