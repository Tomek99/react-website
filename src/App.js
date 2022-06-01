import './App.scss';
import CreamSection from './components/CreamSection';
import Header from './components/Header';
import Section from './components/Section';
import SmallSection from './components/SmallSection';
import Carousel from './components/Carousel';
import { Data } from './components/Data';

function App() {
  return (
    <div className="App">
        <Header/>
        <Section/>
        <SmallSection/>
        <CreamSection/>
        <Carousel slides={Data}/>
    </div>
  );
}

export default App;
