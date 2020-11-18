// Libraries
import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player'

import Card from '../Card/Card';
import TopBar from '../TopBar/TopBar';

// Styles
import { RootStyle, getNavCardStyle, getTopBarStyle, Overlay, OverlayBody } from './style';

const NavCardStyled = getNavCardStyle(Card);
const TopBarStyled = getTopBarStyle(TopBar);

//Component
export const RightRail = ({ deckJson }) => {
  const [isOverlay, setIsOverlay] = useState(false)

  useEffect(() => {

console.log(isOverlay)
  })

  return (
    <RootStyle>
      <div onClick={() => setIsOverlay(!isOverlay)}>

      <section className="rightRail">
        <img src='images/image1.jpg'></img>
        <div className="navigation-cards">
<h3>Learn more about vaccines</h3>
<button class='button'> Explore</button>
        </div>
      </section>
      </div>

     { isOverlay && <Overlay>
       <OverlayBody>

         <div className='navigation'>
         <svg  className='close' xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.29 12.956L3.903 7.049 7.289.97h-.96L.697 7.013l5.632 5.943z"
                fill="#069"
                fillRule="nonzero"
            />
        </svg>
         <h1 >
           Vaccines
          </h1>


         </div>

<div className='main'>

<div className='left'>
<div className='Leftnavigation' onClick={() => setIsOverlay(!isOverlay)}>
<svg  xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.29 12.956L3.903 7.049 7.289.97h-.96L.697 7.013l5.632 5.943z"
                fill="#069"
                fillRule="nonzero"
            />
        </svg>
         <button>Back to Article</button>
     
         </div>


        <Card
              //  link='www.thetimes.co.uk'
               image='images/image1.jpg'
               title='The race for coronavirus vaccines: a graphical guide'
               label='How vaccines are made'
               navArrow

               ></Card>

<Card
              //  link='www.thetimes.co.uk'
               image='images/image1.jpg'
               title='What our experts say'
               label='Label'
               ></Card>



         <div className='player-wrapper'>
           <div className='videoTitle'>Videos</div>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= 'videos/covidVaccine.mp4'
            width='97%'
            height='50%'
            controls = {true}

            />
        </div>


        <Card
              //  link='www.thetimes.co.uk'
               image='images/image1.jpg'
               title='Do you know all you can about vaccines'
               label='Quiz'
               navArrow

               ></Card>

        <div>
          Timeline
        </div>
    

        </div>

        <div className='right'>
<h1>Do you know all you can about vaccines</h1>
        </div>
        </div>
       </OverlayBody>
     </Overlay>}
    </RootStyle>
  );
};

export default RightRail;