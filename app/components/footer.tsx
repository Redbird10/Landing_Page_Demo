import Link from 'next/link'
import FavoriteIcon from '@mui/icons-material/Favorite';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function FooterCol({title, items}) {
  return (
    <section className="flex flex-col">
      <div className="text-gray-500 mx-5 my-5">{title}</div>
      {items.map(item => (<Link href="/" className="text-gray-200 mx-5 my-1">{item}</Link>))}
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="flex justify-between pt-20 pb-16 px-6 mx-auto max-w-screen-xl">
        <FooterCol title="Company" items={['About Us', 'Contact Us', 'Careers','Press']} />
        <FooterCol title="Product" items={['Features', 'Pricing', 'News','Press']} />
        <FooterCol title="Services" items={['Digital Marketing', 'Content Writing', 'SEO for Business','UI Design']} />
        <FooterCol title="Legal" items={['Privacy Policy', 'Terms & Conditions', 'Return Policy']} />
        <FooterCol title="Contact Us" items={['support@brainwave.io', '+133-394-3439-1435']} />
      </div>
      <div className="px-6 mx-auto max-w-screen-xl">
        <div className="flex justify-between items-center border-t border-gray-700">
          <div className="my-8">
            <span className="text-gray-500 ml-5 mr-1 my-5">@ 2024 Copyright, All Right Reserved, Made by Seju_ui_ux with</span>
            <FavoriteIcon color="primary" fontSize="small"/>
          </div>
          <div className="my-8">
            <TwitterIcon className="text-white mx-3" fontSize="small"/>
            <FacebookIcon className="text-white mx-3" fontSize="small"/>
            <InstagramIcon className="text-white mx-3" fontSize="small"/>
            <LinkedInIcon className="text-white mx-3" fontSize="small"/>
          </div>
        </div>
      </div> 
    </footer>
  );
}