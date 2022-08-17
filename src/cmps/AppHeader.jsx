import { NavLink, withRouter } from "react-router-dom";

function _AppHeader(props) {
    return (
        <header className='app-header '>
            <div className=" header-container flex justify-between items-center">

                <h1 className='flex-1'>Mister Bitcoin</h1>
                {/* <section className="back">
                    <button onClick={props.history.goBack}>Back</button>
                </section> */}
                <nav className='link-container flex'>
                    <NavLink style={{ textDecoration: 'none' }} exact to='/' >Home</NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to='/contact'>Contacts</NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to='/stat'>Statistic</NavLink>
                </nav>
            </div>
        </header>
    )
}

export const AppHeader = withRouter(_AppHeader)

{/* <header className='app-header flex justify-between items-center'>
<h1 className='flex-1'>Mister Bitcoin</h1>
<nav className='flex gap-2'>
  <span>Home</span>
  <span>Contacts</span>
  <span>Stat</span>
</nav>
</header> */}