import {useEffect, useState } from "react";

const lessons = [
    {
        id : 1,
        name : 'Nếu là anh thì anh sẽ'
    },
    {
        id : 2,
        name : 'Cầm tay em đi hết con đường'
    },
    {
        id : 3,
        name : 'Cảnh buồn người vui không tưởng'
    },
]

function ActionClick() {

    const [lesson, setLesson] = useState(1);

    useEffect(() => {
        const handleComment = ( { detail } ) => {
            console.log(detail);
        }
    
        window.addEventListener(`lesson-${lesson}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lesson}`, handleComment)
        }
    }, [lesson])


    return (
        <div className="App">
            <ul>
                {lessons.map((lessonn) => (
                    <li
                        key={lessonn.id}
                        style={{
                            color: lesson === lessonn.id ?
                            'red':'#333',
                            cursor:'pointer'
                        }}
                        onClick={() => setLesson(lessonn.id)}
                    >
                        {lessonn.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ActionClick;
