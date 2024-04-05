import Header from './components/header';
import Footer from './components/footer';
import TuneIcon from '@mui/icons-material/Tune';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LayersIcon from '@mui/icons-material/Layers';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Switch from '@mui/material/Switch';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function FeatureTile({Icon, title, desc=""}) {
  return (
    <div className="flex mx-2">
      <Icon className="mx-5" sx={{color:"#4338ca", fontSize: 40}} />
      <div>
        <h2 className="font-bold text-xl mb-3">{title}</h2>
        <p className="text-lg text-gray-500">With lots of unique blocks, you can easily build a page without coding.</p>
        <p className="text-lg text-gray-500">Build your next landing page.</p>
      </div>
    </div>
  )
}

function PriceTile({title, price, btnbg, btntxt, avail}) {
  const features = ['Commercial License','100+ HTML UI Elements','01 Domain Support', '6 Month Premium Service', 'Lifetime Updates']
  return (
    <div className="rounded-lg border-solid border p-10 min-w-[22rem]">
      <div className="text-indigo-700 font-bold">{title}</div>
      <div className="mt-8 mb-3">
        <span className="font-bold text-3xl">$</span>
        <span className="font-bold text-6xl">{price}</span>
        <span className="text-lg">/ month</span>
      </div>
      <div className="text-gray-500 mb-5">billed monthly</div>
      {features.map((feature, index) => (
        <div className="my-4">
          {avail[index] ? <CheckIcon sx={{color:"#6fbf73"}} fontSize="small" className="mr-2"/>
          : <CloseIcon color="disabled" fontSize="small" className="mr-2"/> }
          <span className={avail[0] ? '' : "text-gray-500"}>{feature}</span>
        </div>
      ))}
      <Link href="/" className={`inline-flex font-bold px-5 py-4 ${btnbg} ${btntxt} rounded-md`}>
        Start Free Trial
        <ArrowForwardIcon className="ml-6"/>
      </Link>
      <div className="text-gray-500 mt-4">No credit card required</div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Header/>
      <main className="mx-auto px-6 max-w-screen-xl">
        <div className="mt-16 mb-16 text-center">
          <h1 className="font-bold text-6xl mt-20 mb-10">Pricing & Plans</h1>
          <p className="text-xl text-gray-500 m-1">With lots of unique blocks, you can easily build a page without coding.</p>
          <p className="text-xl text-gray-500 m-1">Build your next consultancy website within few minutes.</p>
        </div>
        <div className="text-center my-12">
          <span className="text-xl">Monthly</span>
          <Switch/>
          <span className="text-xl">Yearly</span>
          <div className="inline-block rounded-full bg-indigo-100 text-indigo-700 font-semibold px-3 py-1 mx-5">
            Save 25%
          </div>
        </div>
        <section className="flex justify-between mx-auto max-w-screen-xl">
          <PriceTile title='STARTER' price='19' btnbg='bg-indigo-100' btntxt='text-indigo-700' avail={[true,true,true,false,false]}/>
          <PriceTile title='STANDARD' price='49' btnbg='bg-indigo-700' btntxt='text-white' avail={[true,true,true,true,false]}/>
          <PriceTile title='PREMIUM' price='99' btnbg='bg-indigo-100' btntxt='text-indigo-700' avail={[true,true,true,true,true]}/>
        </section>
        <div className="mt-24 mb-20 text-center">
          <h1 className="font-bold text-6xl mt-16 mb-10">Check our features</h1>
          <p className="text-xl text-gray-500 m-1">With lots of unique blocks, you can easily build a page without coding.</p>
          <p className="text-xl text-gray-500 m-1">Build your next consultancy website within few minutes.</p>
        </div>
        <section className="flex justify-between my-16">
          <FeatureTile Icon={TuneIcon} title="Quick setup process" />
          <FeatureTile Icon={ShoppingCartIcon} title="Create custom orders" />
          <FeatureTile Icon={ConfirmationNumberIcon} title="Multiple coupons" />
        </section>        
        <section className="flex justify-between mb-32">
          <FeatureTile Icon={LayersIcon} title="Organize your campaigns" />
          <FeatureTile Icon={ManageAccountsIcon} title="Manage customers" />
          <FeatureTile Icon={SignalCellularAltIcon} title="Track progress fast" />
        </section>
      </main>
      <Footer/>
    </div>
  );
}
