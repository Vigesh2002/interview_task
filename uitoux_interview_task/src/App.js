import './App.css';
import Nav_bar3 from './Nav_bar3';
import Nav_bar4 from './Nav_bar4';
import Featured_product from './Featured_product';
import Main_content from './Main_content';
import Main_content_two from './Main_content_two';
import Card_component from './Card_component';
import Top_deals from './Top_deals';
import Top_rated_products from './Top_rated_products'
import Mini_details from './Mini_details';
import Sub_footer from './Sub_footer';
import Final_footer from './Final_footer'

function App() {
    return (
    <div className="App">
      <header id='head'>
        <div id='head-navbar'>
          <ul id='unorder-list-one'>
            <li className='abt'>About Us</li>
            <li>Contact</li>
            <li>Store Location</li>
            <li>Take Order</li>
            <li>Blog</li>
          </ul>

          <ul id='unorder-list-two'>
            <li>Compare: 2</li>
            <li>Currency: RS</li>
            <li className='lan'>Language: EN</li>
          </ul>
        </div>
        <hr id='hr-one'></hr>
        <hr id='hr-two'></hr>
        <Nav_bar3/>
        
        <Nav_bar4/>
      </header>
      <Main_content/>

        <Main_content_two/>

        <Featured_product/>

        <Card_component/>

        <Top_deals/>

        <Top_rated_products/>
        
        <hr id='side_hr'></hr>

        <Mini_details/>

        <Sub_footer/>

        <Final_footer/>
    </div>
  );
}

export default App;
