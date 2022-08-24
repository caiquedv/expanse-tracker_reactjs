import { Category } from "../types/Category";

export const categories: Category = {
    food: {title: 'Alimentação', color: 'blue', expense: true},
    rent: {title: 'Aluguel', color: 'brown', expense: true},
    salary: {title: 'Salário', color: 'green', expense: false}
}

export const catList: string[] = [];

for (let i in categories) {
    catList.push(categories[i].title);
};

export const getCategory = (inputCategory: string, setCategory: (category: string) => void) => {
    switch (inputCategory) {
        case 'Alimentação': setCategory('food'); 
            break
        case 'Aluguel': setCategory('rent');
            break
        case 'Salário': setCategory('salary');
            break
    }
};