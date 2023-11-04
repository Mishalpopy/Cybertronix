import { CopyRight } from '@/src/common/social-links';
import EmailTwo from '@/src/svg/email-2';
import PhoneTwo from '@/src/svg/phone-2';
import Image from 'next/image';
import Link from 'next/link';
import React,{useState} from 'react';
// img import 
import footer_logo from "../../../public/assets/img/logo/logo-black.png";
import qr_code from "../../../public/assets/img/footer/dwnld-1.png";
import i_phone from "../../../public/assets/img/footer/dwnld-2.png";
import google_ply from "../../../public/assets/img/footer/dwnld-3.png"; 


const footer_content = {
    address: <>Cybertronix Technologies LLC<br></br> Deira  Dubai United Arab Emirates</>,
    phone: "++971 4 263 41 41",
    email: "info@cybertronixllc.com",
    download: "Chat With Us", 
    footer_lisks : [
        {
            id: 1,
            cls: "footer-col-2-2", 
            title: "Quick Links",
            delay: ".5s",
            links: [
                {name: "About Us", link: "#"},
                {name: "Blog", link: "#"},
                {name: "Career", link: "#"},
                {name: "Contact Us", link: "#"},
             ]
        },
        {
            id: 2,
            cls: "footer-col-2-3", 
            title: "Services",
            delay: ".7s",
            links: [
                {name: "Services 1", link: "/"},
                {name: "Services 2", link: "/"},
                {name: "Services 3", link: "/"},
                {name: "Services 4", link: "/"},
            ]
        },

    ],
    social_links : [
        {
          link: "http://facebook.com",
          target: "_blank",
          icon: "fab fa-facebook-f", 
        },
        {
          link: "http://twitter.com",
          target: "_blank",
          icon: "fab fa-twitter", 
        },
        {
          link: "http://www.vimeo.com",
          target: "_blank",
          icon: "fab fa-vimeo-v", 
        }, 
        {
          link: "http://www.instagram.com",
          target: "_blank",
          icon: "fab fa-instagram", 
        },
      ], 
}
const {address, phone, email, footer_lisks, download, social_links}  =  footer_content

const FooterTwo = () => {
    const [isOppen , setIsOppen]  = useState(false)
    const oppenLan = () => {
        setIsOppen(!isOppen)
    }
    return (
        <>
    <footer> 
    <div className="tp-footer__pl-pr grey-bg-2">
      <div className="tp-footer__area pt-90 tp-footer__tp-border-bottom">
         <div className="container">
            <div className="row">
               <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                  <div className="tp-footer__widget footer-widget-2 footer-col-2-1">
                     <div className="tp-footer__logo mb-25">
                        <Link href="/">
                           <Image src={footer_logo} alt="them-pure"/>
                        </Link>
                     </div>
                     <div className="tp-footer__contact-info">
                        <Link href="https://www.google.com.bd/maps/place/%E0%A6%B2%E0%A6%BE%E0%A6%95%E0%A7%8D%E0%A6%B8%E0%A7%87%E0%A6%AE%E0%A6%AC%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%97/@49.8143242,5.5590915,10z/data=!3m1!4b1!4m5!3m4!1s0x479545b9ca212147:0x64db60f602d392ef!8m2!3d49.815273!4d6.129583"
                           target="_blank">{address}</Link>
                        <ul>
                           <li>
                              <span>
                              <PhoneTwo /> 
                              </span>
                              <Link className="first-child" href={`tel:${phone}`}>{phone}</Link>
                           </li>
                           <li>
                              <span>
                              <EmailTwo /> 
                              </span>
                              <Link href={`mailto:${email}`}>{email}</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               {footer_lisks.map((item, i)  => 
                  <div key={i} className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                  <div className={`tp-footer__widget footer-widget-2 ${item.cls}`}>
                     <h4 className="tp-footer__widget-title">{item.title}</h4>
                     <div className="tp-footer__content">
                        <ul>
                           {item.links.map((link, i)  => <li key={i}><Link href={link.link}>{link.name}</Link></li> ) }                        
                        </ul>
                     </div>
                  </div>
               </div>
               )} 

               <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                  <div className="tp-footer__widget footer-widget-2 footer-col-2-4">
                     <h4 className="tp-footer__widget-title">{download}</h4>
                     <div className="tp-footer__download-box d-flex align-items-center">
                        <div className="tp-footer__qrcode mr-15">
                        <Link href="#"> <Image src={qr_code} alt="them-pure"/></Link>
                        </div>
                    
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="tp-copyright__area pt-20 pb-20">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="tp-copyright__social">
                  
                     {social_links.map((l, i) => (
                           <Link
                           key={i}
                           href={l.link} 
                           target={l.target ? l.target : ""}
                           >
                           <i className={l.icon}></i>
                           </Link>
                        ))} 
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-6  d-none d-md-block">
                  <div className="tp-copyright__text tp-copyright__text-2 text-center">
                     <span><CopyRight /></span>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div
                     className="tp-copyright__lang-box  d-flex align-items-center justify-content-md-end justify-content-sm-end justify-content-start">
                     <div className="tp-copyright__lang tp-copyright__lang-2">
                        <ul>
                           <li>
                              <button id="tp-copyright__lang-toggle" onClick={() => oppenLan()} >
                                 <span>English<i className="fal fa-angle-down"></i></span>
                              </button>
                              {isOppen &&
                              <ul className={`tp-copyright__lang-submenu ${isOppen && "open"}`}>
                                 <li>
                                    <Link href="#">Arabic</Link>
                                 </li>
                       
                              </ul>
                              }
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</div>

</footer>
        </>
    );
};

export default FooterTwo;
