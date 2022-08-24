import { useEffect, useState } from 'react';

import * as C from './App.styles';

import { Item } from './types/Item';
import { Category } from './types/Category';

import { categories } from './data/categories';
import { items } from './data/items';

import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea/TableArea';
import { InfoArea } from './components/InfoArea/InfoArea';
import { InputArea } from './components/InputArea/InputArea';


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [inCome, setIncome] = useState(0);
  const [expanse, setExpanse] = useState(0);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expanseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expanseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    } 

    setIncome(incomeCount);
    setExpanse(expanseCount);
  }, [filteredList]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          inCome={inCome}
          expanse={expanse}
        />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default App;