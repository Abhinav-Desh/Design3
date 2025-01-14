import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Options = ()=>{
return(
    <div className="options-container">
        <div className="option-content">
            <div className="option1 option">
                 <HomeIcon />
            </div>
            <div className="option2 option" style={{width:'20%'}}>
                 Blood Test
                 <KeyboardArrowDownIcon />
            </div>
            <div className="option3 option" style={{width:'25%'}}>
                X-Rays & Scans<KeyboardArrowDownIcon  />
            </div>
            <div className="option4 option"style={{width:'20%'}} >
                Genetic Testing
            </div>
            <div className="option5 option" style={{width:'25%'}}>
                Doctor Consultation<KeyboardArrowDownIcon />
            </div>
            <div className="option6 option" style={{width:'20%'}}>
                Supplements<KeyboardArrowDownIcon />
            </div>
            <div className="option7 option" style={{width:'20%'}}>
                Health Tips<KeyboardArrowDownIcon />
            </div>
            <div className='option8 option'>
                Offers
            </div>
        </div>
    </div>
);

}

export default Options;