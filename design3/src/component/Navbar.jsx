import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import healthiansLogo from '../assets/healthiansLogo.png'
const Navbar = ()=>{
return (
    <div className="navbar-container">
        <div className="navbar-content">
            <div className="logo">
                <img src={healthiansLogo} alt="" height={'70px'} width={'180px'} />
            </div>
            <div className="navlists">
                <div className="first nav-element">
                    <div className="icon" >
                     
               < LocationOnIcon sx={{ width: '20px', height: '20px', color: 'gray' }}/>
               </div>
               <div className='location' style=
               {{
                display:'flex',
                flexDirection:'column',
                alignContent:'center',
                cursor:'pointer'
                }}>
                <div className='location-content' style={{color: '#6b6b6b'}}>
                    Your Location
                </div>
                <div className="state">
                    Gurgaon
                </div>

               </div>
                    
                </div>
                <div className="second nav-element" style={{cursor:'pointer'}}>
                    <div className='icon'>
                    <PersonOutlineIcon sx={{ width: '20px', height: '20px', color: 'gray' }}/>
                    </div>
                   <div className="user" style={{color:' #404040'}}>
                    Login/signup
                   </div>
                </div>
                <div className="third nav-element" style={{cursor:'pointer'}}>
                    <div className="icon">
                    <LocalPhoneIcon sx={{ width: '20px', height: '20px', color: 'gray' }}/>
                    </div>
                    <div className='customer-surpport' style={{
                         display:'flex',
                flexDirection:'column',
                alignContent:'center',
                cursor:'pointer'}}>
                        <div className="customer-content" style={{color: '#6b6b6b'}}>
                            customer support
                        </div>
                        <div className="customer-number" style={{fontSize:'16px'}}>
                            1800-123-445/9898998320
                        </div>
                    </div>
                    
                </div>
                <div className="fourth nav-element" style={{cursor:'pointer'}}>
                    <div className="fourth-content" style={{width:'100%', color: '#6b6b6b'}}>
                    For Content Bookings/Enquiry
                    </div>
                    <div className="enquiry-number">
                        990-9992-343
                    </div>
                </div>
            </div>

        </div>

    </div>
);
}
export default Navbar;