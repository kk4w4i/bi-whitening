import Line_button from '../assets/webp/line-button.webp'
import IG_button from '../assets/webp/ig-button.webp'
import Bi_title from '../assets/webp/bi-title.webp'

export default function Footer() {
    return (
        <div className='relative flex h-full w-full justify-between'>
            <div className='flex flex-col h-full items-between w-fit'>
                <section className='flex w-full justify-between md:block'>
                    <a 
                        href="https://www.google.com/maps/place/%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%83%8B%E3%83%B3%E3%82%B0%E3%82%B5%E3%83%AD%E3%83%B3%E3%80%9C%E9%AD%85%E3%80%9C/@35.1676045,136.9081541,17z/data=!4m10!1m2!2m1!1z44CSNDYwLTAwMDgg5ZCN5Y-k5bGL5biC5Lit5Yy65qCENOS4geebrjE1LTE1IOOCu-ODs-ODiOODqeODq-ODj-OCpOODhOaghDEyMDI!3m6!1s0x60037107202bfa9d:0x9985bd64022dcd7!8m2!3d35.1669564!4d136.910626!15sCk3jgJI0NjAtMDAwOCDlkI3lj6TlsYvluILkuK3ljLrmoIQ05LiB55uuMTUtMTUg44K744Oz44OI44Op44Or44OP44Kk44OE5qCEMTIwMlpaIljjgJIgNDYwIDAwMDgg5ZCN5Y-k5bGLIOW4giDkuK0g5Yy6IOaghCA0IOS4geebriAxNSAxNSDjgrvjg7Pjg4jjg6njg6sg44OP44Kk44OEIOaghCAxMjAykgEXdGVldGhfd2hpdGVuaW5nX3NlcnZpY2WaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUklPR0YxUjJkblJSQULgAQA!16s%2Fg%2F11lm_5zykc?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <p className='text-left text-[0.7rem] md:text-[1.1rem]'>
                        〒460-0008
                        <br />
                        名古屋市中区栄4丁目15-15
                        <br />
                        セントラルハイツ栄1202
                        </p>
                    </a>
                    <img
                        className="block md:hidden h-[3rem] md:h-[5rem] object-contain"
                        src={Bi_title}
                        alt="bi_title"
                    />
                </section>
                <section className='flex justify-between gap-5 items-center mt-[2rem]'>
                    <a href="tel:0522286421">
                        <p className='text-left text-[0.7rem] md:text-[1.1rem] whitespace-nowrap'>
                        052-228-6421
                        </p>
                    </a>
                    <a href='https://lin.ee/8n0kHHm'>
                        <button>
                        <img src={Line_button} alt="line-button" className='h-[2em] md:h-[3rem] object-contain' />
                        </button>
                    </a>
                    <a href='https://www.instagram.com/whitening.salon_bi_?igsh=MWxvaWs5YWUxcmZ5eA=='>
                        <button>
                        <img src={IG_button} alt="ig-button" className="h-[2rem] md:h-[3rem] object-contain" />
                        </button> 
                    </a>
                </section>
            </div>
            <div>
                <img
                    className="hidden md:block h-[4rem] md:h-[5rem] object-contain"
                    src={Bi_title}
                    alt="bi_title"
                />
            </div>
        </div>
    )
}