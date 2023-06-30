export default function Humburger({isOpen}){
return(

    <>
    <div className="HB">
<div className="burger burger1"></div>
<div className="burger burger2"></div>
<div className="burger burger3"></div>
    </div>

<style jsx>{`
.HB{
    width:2rem;
    height:3rem;
    display:flex;
    justify-content:space-around;
    flex-flow:column nowrap;
    z-index:10;
}
.burger{
    

    width:2rem;
    height:0.25rem;
    border-radius:10px;
    background-color:black;
    transform-origin:1px;
}

.burger1{
    transform:${isOpen?'rotate(45deg)':'rotate(0)'};
}
.burger2{
    transform:${isOpen?'translateX(100%)':'translateX(0)'};
    opacity:${isOpen?0:1};
}
.burger3{
    transform:${isOpen?'rotate(-45deg)':'rotate(0)'};
}
`}</style>

    </>
)



}
