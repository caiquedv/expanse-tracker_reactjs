import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem/ResumeItem';
import * as C from './styles';

interface Props {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    inCome: number;
    expanse: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, inCome, expanse }: Props) => {
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    };

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    };

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="Receitas" value={inCome} />
                <ResumeItem title="Despesas" value={expanse} />
                <ResumeItem 
                title="Balanço" 
                value={inCome - expanse} 
                color={(inCome-expanse) < 0 ? 'red' : 'green'} 
                />
            </C.ResumeArea>
        </C.Container>
    );
}