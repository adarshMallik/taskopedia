import logo from '../Images/react.png'

function MainHeader() {
    return (
     <div className='pt-3 pl-2' style={{backgroundColor:"black"}}>
        <img src={logo} style={{height:"35px",verticalAlign: "top"}}></img>
       <span className='h2 pt-4 text-white-50'>React Course - Taskopedia</span>
     </div>
    )
  }
  function SubHeader() {
    return (
      <p className='text-center'>
        This will be exciting course
      </p>
    )
  }
  
 export default function Header() {
    return (
     <>
     <MainHeader/>
     <SubHeader/>
     </>
    )
  }