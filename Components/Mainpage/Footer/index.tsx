import {footerItems} from "./items";

const Footer = () => (
    <div className='footer'>
        {footerItems.map(item => {
            return <div key={item.id} className='ft-fl-ch'>
                <a href="#" className='ch-a'>
                    {item.title}
                </a>
            </div>
        })}
    </div>
)

export default Footer;