import { useState } from 'react';
import classes from '../modules/Navbar.module.scss';
import Logo from '../assets/images/logo.svg';
import dropdown from '../assets/images/icon-arrow-down.svg';
import close from '../assets/images/icon-arrow-up.svg';
import todo from '../assets/images/icon-todo.svg'
import calendar from '../assets/images/icon-calendar.svg'
import reminders from '../assets/images/icon-reminders.svg'
import planning from '../assets/images/icon-planning.svg'



export const Navbar = () => 

{
    const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
    const [companyDropdownOpen, setcompanyDropdownOpen] = useState(false);

    const toggleFeaturesDropdown = () => 
    {
        setFeaturesDropdownOpen(!featuresDropdownOpen);
    };
    const togglecompanyDropdown = () => 
    {
        setcompanyDropdownOpen(!companyDropdownOpen);
    };


    return(
        <div className={classes['Nav']}>
            <div className={classes['left-side']}>
                <img src={Logo} alt="" />
                <ul onClick={toggleFeaturesDropdown}>
                    Features <img src={featuresDropdownOpen ? close: dropdown} alt="" />
                    {featuresDropdownOpen && (
                    <ul className={classes['dropdown-options']}>
                        <li> <img src={todo}  />Todo List</li>
                        <li> <img src={calendar}  />Calendar</li>
                        <li> <img src={reminders}  />Reminder</li>
                        <li> <img src={planning}  />Planning</li>
                    </ul>
                    )}
                </ul>
                <ul onClick={togglecompanyDropdown}>
                    Company <img src={companyDropdownOpen? close: dropdown} alt="" />
                    {companyDropdownOpen && (
                        <ul className={classes['dropdown-options']}>
                            <li>History</li>
                            <li>Team</li>
                            <li>Blog</li>
                        </ul>
                    )}
                </ul>
                <ul>
                    Carrers 
                </ul>
                <ul>
                    About 
                </ul>
            </div>
            <div className={classes['right-side']}>
                <ul>
                    Login
                </ul>
                <ul className={classes['Reg']}>
                    Register
                </ul>
            </div>
            
        </div>
    )
}