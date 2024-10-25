import star1 from '../assets/webp/stars/star1.webp'
import star2 from '../assets/webp/stars/star2.webp'
import star3 from '../assets/webp/stars/star3.webp'
import star4 from '../assets/webp/stars/star4.webp'
import star5 from '../assets/webp/stars/star5.webp'
import star6 from '../assets/webp/stars/star6.webp'
import star7 from '../assets/webp/stars/star7.webp'
import star8 from '../assets/webp/stars/star8.webp'
import star9 from '../assets/webp/stars/star9.webp'
import star10 from '../assets/webp/stars/star10.webp'
import star11 from '../assets/webp/stars/star11.webp'


export default function Starbg() {
  return (
    <div className='body z-[1]'>
      <div className="stars-container">
        <div className="star star1"><img src={star1} alt="star1" /></div>
        <div className="star star2"><img src={star2} alt="star2" /></div>
        <div className="star star3"><img src={star3} alt="star3" /></div>
        <div className="star star4"><img src={star4} alt="star4" /></div>
        <div className="star star5"><img src={star5} alt="star5" /></div>
        <div className="star star6"><img src={star6} alt="star6" /></div>
        <div className="star star7"><img src={star7} alt="star7" /></div>
        <div className="star star8"><img src={star8} alt="star8" /></div>
        <div className="star star9"><img src={star9} alt="star9" /></div>
        <div className="star star10"><img src={star10} alt="star10" /></div>
        <div className="star star11"><img src={star11} alt="star11" /></div>
      </div>
    </div>
  )
}
