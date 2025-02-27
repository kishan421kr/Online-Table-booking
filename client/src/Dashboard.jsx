import { Link, Outlet } from "react-router-dom"


const Dashboard=()=>{
    return(
        <>
        
        <h1 id="dashboardh1">Welcome to the Dashboard</h1>

        <div id="sidebar">
            <section id="sidebarsection">
                <div>
                    
                    <span>Dashboard</span>
                    <Link id="sidebarlink" to={'foodorder'}>Food Orders</Link>
                    <Link id="sidebarlink" to={'tablebooking'}>Table Bookings</Link>
                    <Link id="sidebarlink" to={'items'}>Items</Link>
                    <Link id="sidebarlink" to={'tables'}>Tables</Link>
                    
                </div>
            </section >
                
            <section id="infoshowsection">
                <Outlet/>
            </section>
        </div>

        
        
        </>
    )
}
export default Dashboard