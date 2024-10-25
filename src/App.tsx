import './App.css'
import Starbg from './assets/starbg'
import Bi_icon from './assets/webp/bi-teeth.webp'
import Bi_title from './assets/webp/bi-title.webp'
import Line_button from './assets/webp/line-button.webp'
import IG_button from './assets/webp/ig-button.webp'
import CardComponent from './components/CardComponent'
import CompareTable from './components/CompareTable'
import { useState, useEffect } from 'react'
import { ArrowRightIcon } from "lucide-react";
import Footer from './components/footer'

interface PositionProps {
  position?: 'left' | 'center' | 'right';
  className: React.ReactNode;
}

function App() {
  const [cardSlide, setCardSlide] = useState<PositionProps>({
    position: 'left',
    className: 'translate-x-0'
  });

  const scrollContainer = (direction: 'left' | 'right') => {
      if (cardSlide.position === 'center' && direction === 'left') {
          setCardSlide({
              position: 'left',
              className: "translate-x-0"
          })
      } else if (cardSlide.position === 'center' && direction === 'right') {
          setCardSlide({
              position: 'right',
              className: '-translate-x-[150%]'
          })
      } else if (cardSlide.position === 'left' && direction === 'right') {
          setCardSlide({
              position: 'center',
              className: '-translate-x-3/4'
          })
      } else if (cardSlide.position === 'right' && direction === 'left') {
          setCardSlide({
              position: 'center',
              className: '-translate-x-3/4'
          })
      }
  };

  useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth < 414) {
              setCardSlide({
                  position: 'left',
                  className: 'translate-x-0'
              });
          }
      };

      // Initial check
      handleResize();

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative max-w-[100vw] overflow-x-hidden">
      <Starbg />
      <div className='relative w-screen h-screen flex items-center justify-center md:block z-[5]'>
        <img
          src={Bi_icon}
          alt="bi_teeth"
          className="hidden md:block w-full md:h-full object-cover overflow-visible"
        />
        <img
          className="absolute top-[10%] md:top-[15%] md:left-[10%] w-[80vw] md:w-[35vw]"
          src={Bi_title}
          alt="bi_title"
        />
        <p className='absolute top-[25%] w-[80vw] md:hidden text-[1.2rem] z-[30]'>
            完全予約制プライベートの
            <br />
            医療ホワイトニングサロン
            <br />
            (歯科衛生士常在)
          </p>

        <div className='hidden md:flex md:flex-col md:absolute md:bottom-[15%] md:left-[10%] gap-5'>
          <a href='https://lin.ee/8n0kHHm'>
            <button>
              <img src={Line_button} alt="line-button" className='w-[15rem]' />
            </button>
          </a>
          
          <a href='https://www.instagram.com/whitening.salon_bi_?igsh=MWxvaWs5YWUxcmZ5eA=='>
            <button>
              <img src={IG_button} alt="ig-button" className="w-[15rem]" />
            </button> 
          </a>
          <p className='text-[1.2rem] ml-3'>
            完全予約制プライベートの
            <br />
            医療ホワイトニングサロン
            <br />
            (歯科衛生士常在)
          </p>
        </div>

        <div className='md:hidden w-full px-10 flex flex-col absolute bottom-[10%] left-1/2 -translate-x-1/2 gap-5'>
          <a 
            href="https://www.google.com/maps/place/%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%83%8B%E3%83%B3%E3%82%B0%E3%82%B5%E3%83%AD%E3%83%B3%E3%80%9C%E9%AD%85%E3%80%9C/@35.1676045,136.9081541,17z/data=!4m10!1m2!2m1!1z44CSNDYwLTAwMDgg5ZCN5Y-k5bGL5biC5Lit5Yy65qCENOS4geebrjE1LTE1IOOCu-ODs-ODiOODqeODq-ODj-OCpOODhOaghDEyMDI!3m6!1s0x60037107202bfa9d:0x9985bd64022dcd7!8m2!3d35.1669564!4d136.910626!15sCk3jgJI0NjAtMDAwOCDlkI3lj6TlsYvluILkuK3ljLrmoIQ05LiB55uuMTUtMTUg44K744Oz44OI44Op44Or44OP44Kk44OE5qCEMTIwMlpaIljjgJIgNDYwIDAwMDgg5ZCN5Y-k5bGLIOW4giDkuK0g5Yy6IOaghCA0IOS4geebriAxNSAxNSDjgrvjg7Pjg4jjg6njg6sg44OP44Kk44OEIOaghCAxMjAykgEXdGVldGhfd2hpdGVuaW5nX3NlcnZpY2WaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUklPR0YxUjJkblJSQULgAQA!16s%2Fg%2F11lm_5zykc?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <p className='text-right text-[1.5rem]'>
              〒460-0008
              <br />
              名古屋市中区栄4丁目15-15
              <br />
              セントラルハイツ栄1202
            </p>
          </a>
          <a href="tel:0522286421">
            <p className='text-right text-[1.5rem]'>
              052-228-6421
            </p>
          </a>
          <div className='flex flex-row gap-2'>
            <a href='https://lin.ee/8n0kHHm'>
              <button>
                <img src={Line_button} alt="line-button" className='w-[15rem]' />
              </button>
            </a>
            
            <a href='https://www.instagram.com/whitening.salon_bi_?igsh=MWxvaWs5YWUxcmZ5eA=='>
              <button>
                <img src={IG_button} alt="ig-button" className="w-[15rem]" />
              </button> 
            </a>
          </div>
          
        </div>

        <div className='hidden md:block md:absolute md:bottom-[15%] md:right-[10%]'>
          <section>
            <a 
              href="https://www.google.com/maps/place/%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%83%8B%E3%83%B3%E3%82%B0%E3%82%B5%E3%83%AD%E3%83%B3%E3%80%9C%E9%AD%85%E3%80%9C/@35.1676045,136.9081541,17z/data=!4m10!1m2!2m1!1z44CSNDYwLTAwMDgg5ZCN5Y-k5bGL5biC5Lit5Yy65qCENOS4geebrjE1LTE1IOOCu-ODs-ODiOODqeODq-ODj-OCpOODhOaghDEyMDI!3m6!1s0x60037107202bfa9d:0x9985bd64022dcd7!8m2!3d35.1669564!4d136.910626!15sCk3jgJI0NjAtMDAwOCDlkI3lj6TlsYvluILkuK3ljLrmoIQ05LiB55uuMTUtMTUg44K744Oz44OI44Op44Or44OP44Kk44OE5qCEMTIwMlpaIljjgJIgNDYwIDAwMDgg5ZCN5Y-k5bGLIOW4giDkuK0g5Yy6IOaghCA0IOS4geebriAxNSAxNSDjgrvjg7Pjg4jjg6njg6sg44OP44Kk44OEIOaghCAxMjAykgEXdGVldGhfd2hpdGVuaW5nX3NlcnZpY2WaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUklPR0YxUjJkblJSQULgAQA!16s%2Fg%2F11lm_5zykc?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <p className='text-right text-[1.5rem]'>
                〒460-0008
                <br />
                名古屋市中区栄4丁目15-15
                <br />
                セントラルハイツ栄1202
              </p>
            </a>
              
            <a href="tel:0522286421">
              <p className='text-right text-[1.5rem] mt-5'>
                052-228-6421
              </p>
            </a>
          </section>
        </div>
      </div>

      <div className={`relative w-full mt-[20vh] h-[32rem] flex items-start md:justify-center px-10 z-10 overflow-visible`}>
        <p className='absolute left-1/2 -translate-x-1/2 text-[1.5rem] font-semibold whitespace-nowrap'>
          ホワイトニングの方法
        </p>
        <div className={`flex md:items-center w-full flex-col mt-20 ease-in-out transition-all duration-200 ${cardSlide.className}`}>
          <CardComponent/>
        </div>
        <div className="sm:hidden absolute bottom-0 left-0 right-0 flex justify-center gap-4 z-30">
              <button 
                  onClick={() => scrollContainer('left')}
                  className="bg-white rounded-full p-3 shadow-lg"
              >
                  <ArrowRightIcon className="rotate-180 w-6 h-6" />
              </button>
              <button 
                  onClick={() => scrollContainer('right')}
                  className="bg-white rounded-full p-3 shadow-lg"
              >
                  <ArrowRightIcon className="w-6 h-6" />
              </button>
          </div> 
      </div>

      <div className='relative w-screen h-fit md:h-screen flex items-center justify-start lg:justify-center z-20 px-5 pb-20 lg:pl-0 overflow-y-visible overflow-x-scroll mt-[10rem]'>
        <div className='flex flex-col h-full justify-center items-center overflow-visible'> 
          <CompareTable/>
          <p className='w-full mt-5 pr-10 whitespace-normal'>＊費用などは歯医者やサロンによって変わります。<br/>＊痛みのでるでないや、ホワイトニング効果には個人差があります。</p>
        </div>
      </div>

      <div className='relative flex h-[80vh] w-screen justify-center items-center z-50 mt-[-2vh]'>
        <div className='flex flex-col text-left text-[1rem] md:text-[1.7rem] gap-5 p-10'>
          <h1 className='text-[1.2rem] md:text-[2rem] font-bold mb-5'>こんなお悩みの方にぴったりです！</h1>
          <ul>
            - 歯の黄ばみが気になる方
          </ul>
          <ul>
            - 歯の色が気になり笑うことに自信が持てない方
          </ul>
          <ul>
            - オフィスホワイトニングで痛みがある方
          </ul>
          <ul>
            - ホームホワイトニングをコツコツと続けれない方
          </ul>
          <ul>
            - 性別年齢関係なく通いやすい所を探していた
          </ul>
          <ul>
            - できるだけ費用を抑えて効果のあるホワイトニングを探していた方
          </ul>
        </div>
      </div>

      <div className='relative flex px-10 md:px-20  py-10 z-50 w-screen h-fit'>
        <Footer/>
      </div>
    </div>
  )
}

export default App
