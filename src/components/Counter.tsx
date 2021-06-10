import React, { useState } from "react";
import CountButton from "./CountButton";
import Display from "./Display";

interface CounterProps {
    numberCounter: string;
}

const Counter: React.FC<CounterProps> = (mes) => {
    const numbers = [-1, 1];
    const [count, setCount] = useState(0);

    const onClick = (countInput: number) => {
        if (countInput === 1) {
            setCount(count + 1);
        }
        else {
            setCount(count - 1);
        }
        console.log(count);
    }

    const listItems = numbers.map((number) =>
        <CountButton buttonCount={number} onClick={onClick} />
    );
    return (
        <div>
            <header className="header">
                <h1>Counter App</h1>
                {listItems}
            </header>
            <div>
                <Display 
                    numbers={count} 
                />
            </div>
        </div>
    );
}

export default Counter