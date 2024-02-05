import classes from '../modules/MainPart.module.scss'
import Image from '../assets/images/image-hero-desktop.png'
import databiz from '../assets/images/client-databiz.svg'
import audiophile from '../assets/images/client-audiophile.svg'
import meet from '../assets/images/client-meet.svg'
import marker from '../assets/images/client-maker.svg'



export const MainPart = () => 
{
    return(
        <div className={classes['Mainpart']}>
            <div className={classes['left-side']}>
                <h1>Make <br/>remote work</h1>
                <p>Get your team in sync, no matter your location <br/>
                 Streamline processes, create team rituals, and <br/>
                 watch productivity soar.
                </p>
                <ul>
                    Learn more
                </ul>
                <div className={classes['images']}>
                <img src={databiz} alt="" />
                <img src={audiophile} alt="" />
                <img src={meet} alt="" />
                <img src={marker} alt="" />
                </div>

            </div>
            <div className={classes['right-side']}>
                <img src={Image} alt="" />
            </div>

        </div>
    )
}