import {useContext} from 'react'
import { ThemeContext } from "./UseContent";

function UseDemo2() {
    const theme = useContext(ThemeContext)
    return (
        <div className={theme}>
            Thơm ngon bổ rẻ mời bạn ăn nè ahihih đồ ngu sml đmm
        </div>
    )
}

export default UseDemo2;