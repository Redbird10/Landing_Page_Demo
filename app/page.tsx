import Header from './components/header';
import Footer from './components/footer';

export default function Home() {
  return (
    <div>
      <Header/>
      <main className="">
        <div className="m-20 text-center">
          <h1 className="font-bold text-6xl m-10">Pricing & Plans</h1>
          <p className="text-xl text-gray-500 m-1">With lots of unique blocks, you can easily build a page without coding.</p>
          <p className="text-xl text-gray-500 m-1">Build your next consultancy website within few minutes.</p>
        </div>
        <div className="m-20 text-center">
          <h1 className="font-bold text-6xl m-10">Check our features</h1>
          <p className="text-xl text-gray-500 m-1">With lots of unique blocks, you can easily build a page without coding.</p>
          <p className="text-xl text-gray-500 m-1">Build your next consultancy website within few minutes.</p>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
