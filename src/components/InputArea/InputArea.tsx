import { Item } from '../../types/Item';
import * as C from './styles';
import { catList, getCategory } from '../../data/categories';
import { FormEvent, useEffect, useState } from 'react';
import { formatInputDate } from '../../helpers/dateFilter';

interface Props {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {
    const [date, setDate] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [categorySlug, setCategorySlug] = useState<string>('');
    const [value, setValue] = useState<string>('');

    const handleAddEvent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let newItem: Item = {
            date: formatInputDate(date),
            category: categorySlug,
            title: title,
            value: parseInt(value)
        };
        onAdd(newItem);
    }

    useEffect(() => {
        getCategory(category, setCategorySlug);
    }, [category]);

    return (
        <C.Container onSubmit={handleAddEvent}>
            <label>
                Data:
                <input value={date} onChange={(e) => setDate(e.target.value)} type="date" required />
            </label>
            <label>
                Categoria:
                <select required value={category} onChange={(e) => setCategory(e.target.value)} >
                    <option></option>
                    {catList.map((item, index) =>
                        <option key={index} value={item}>{item}</option>
                    )}

                </select>
            </label>
            <label>
                Título:
                <input value={title} onChange={e => setTitle(e.target.value)} type="text" required />
            </label>
            <label>
                Valor:
                <input value={value} onChange={e => setValue(e.target.value)}
                    type="number" placeholder='R$' required
                />
            </label>

            <button>Adicionar</button>
        </C.Container>
    );
}