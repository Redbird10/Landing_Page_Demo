import Header from './components/header';
import Footer from './components/footer';
import TuneIcon from '@mui/icons-material/Tune';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LayersIcon from '@mui/icons-material/Layers';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Switch from '@mui/material/Switch';

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

export default function Home() {
  return (
    <div>
      <Header/>
      <main className="mx-auto px-6 max-w-screen-xl">
        <div className="m-20 text-center">
          <h1 className="font-bold text-6xl m-10">Pricing & Plans</h1>
          <p className="text-xl text-gray-500 m-1">With lots of unique blocks, you can easily build a page without coding.</p>
          <p className="text-xl text-gray-500 m-1">Build your next consultancy website within few minutes.</p>
        </div>
        <div className="text-center">
          <span className="text-xl">Monthly</span>
          <Switch/>
          <span className="text-xl">Yearly</span>
          <div className="inline-block rounded-full bg-indigo-100 text-indigo-700 font-semibold px-3 py-1 mx-5">
            Save 25%
          </div>
        </div>
        <section>
          
        </section>
        <div className="m-20 text-center">
          <h1 className="font-bold text-6xl m-10">Check our features</h1>
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
