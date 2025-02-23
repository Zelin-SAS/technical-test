import { createRef, useEffect } from 'react';
import Light from '../../components/decoration/light'
import Category from './sections/category'
import Header from './sections/header'
import Hero from './sections/hero'
import { fetchBooks } from '../../services/models';
import { useData } from '../../components/context';
import NewArrival from './sections/newArrival';
import Shape from '../../components/decoration/shape';
import Contact from './sections/contact';
import Footer from './sections/footer';

export default function Landing() {
  const { state, dispatch } = useData();
  const homeRef = createRef<HTMLDivElement>();
  const categoryRef = createRef<HTMLDivElement>();
  const newArrivalRef = createRef<HTMLDivElement>();
  const contactRef = createRef<HTMLDivElement>();

  const fetchData = () => {
    dispatch({ type: "BOOKS_PROCESS_REQUEST"});
    if(state.books.length > 0) {
      return;
    } else {
      fetchBooks().then((data) => {
        dispatch({ type: "BOOKS_FETCH", payload: data });
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, [state.books]);

  return (
    <div>
      <Header sectionRefs={[homeRef, categoryRef, newArrivalRef, contactRef]}/>
      <div className="relative isolate px-6 pt-14 lg:px-8" ref={homeRef}>
        <Light colors={['#DCF763', '#BFB7B6']} position="center" />
        <Hero />
      </div>
      <Shape position="left" rotation={15} />
      <div className='my-20 px-6 lg:px-20 w-full' ref={categoryRef}>
        <Category />
      </div>
      <Light colors={['#DCF763', '#BFB7B6']} position="left" />
      <div className="my-20 px-6 lg:px-20 w-full" ref={newArrivalRef}>
        <NewArrival />
      </div>
      <div className="my-20 px-6 lg:px-20 w-full flex justify-center" ref={contactRef}>
        <Contact />
      </div>
      <Footer navigationRef={[homeRef, categoryRef, newArrivalRef, contactRef]} />
    </div>
  )
}
