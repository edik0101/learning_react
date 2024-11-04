export interface CounterProps {
    /** The text to display inside the button */
    init?: number;
    end?: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>; // Указываем тип для setTotal
    //setTotal: void; // тоже работает
    focus?: any;
}
