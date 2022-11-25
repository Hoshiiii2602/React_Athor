import { useLayoutEffect, useState } from 'react';

function Content2() {
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)

    useLayoutEffect(() => {
        const timeId = setInterval(() => {
            setMinute(prevState => prevState + 1);
           
            console.log('Phut');
        },5000)



        return () => clearInterval(timeId);
    }, [minute])

    useLayoutEffect(() => {
        const timeId = setInterval(() => {
            setSecond(prevState => prevState + 1);
            if (second > 58) {
                setSecond(0);
            }
            console.log('Giay');
        }, 1000)



        return () => clearInterval(timeId);
    }, [second])

    return (
        <div className="App">
            {minute}:{second}
        </div>
    );
}

export default Content2;
