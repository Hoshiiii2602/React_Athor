// import { useState } from 'react';

import { useEffect, useState } from "react";

function Content2() {
  

    const [avatar, setAvatar] = useState([])

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avatar.preview);
        }
    },[avatar])
    const handleAvatar = (e) => {
        const file = e.target.files[0]
        file.preview  = URL.createObjectURL(file);
        setAvatar(file)
    }
  return (
    <div className="App">
        <input
            type="file"
            onChange={handleAvatar}
        />

        {avatar && (
            <img src={avatar.preview} alt="" width="80%"/>
        )}
    </div>
  );
}

export default Content2;
