import React from "react";
const Avatar=({children,backgroundColor, px, py, color, fontSize, borderRadius})=>{
    const style = {
        backgroundColor,
        padding:`${px} ${py}`,
        color,
        fontSize,
        borderRadius,
        cursor:"pointer"
    }

    return(
        <div style={style}>
        {children}
        </div>
    )
}
export default Avatar