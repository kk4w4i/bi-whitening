import { BrushIcon, CleanIcon, VerifyIcon } from "@/assets/svgs/svgs";
import Line_button from '../assets/webp/line-button.webp'
import IG_button from '../assets/webp/ig-button.webp'
import VerifyBG from '../assets/webp/verify.webp'
import CleanBG from '../assets/webp/clean.webp'
import BrushBG from '../assets/webp/brush.webp'

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogDescription,
    DialogTrigger,
  } from "@/components/ui/dialog"

import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { ArrowDownIcon, ArrowRightIcon } from "lucide-react";

export default function CardComponent () {
    return (
        <div>
            <div className={`flex mt-8 -space-x-10 h-[20rem] w-[110%]`}>
                <Dialog>
                    <DialogTrigger>
                        <div className="bg-white rounded-[1rem] drop-shadow-lg w-[20rem] h-[20rem] relative -rotate-6 z-10 duration-200 ease-in-out transition-all
                                hover:z-40 hover:rotate-0 hover:w-[21rem] hover:h-[21rem] flex flex-col justify-between">
                            <div className="flex justify-center items-center h-full">
                                <VerifyIcon/>
                            </div>
                            <p className="text-[1.5rem] mb-5 ml-5 text-left">
                                ① 診察
                            </p>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="flex rounded-lg h-[60vh] w-[90vw] md:h-auto md:w-auto overflow-x-clip overflow-y-auto">
                        <VisuallyHidden.Root asChild>
                            <DialogTitle/>
                        </VisuallyHidden.Root>
                        <DialogDescription/>
                        <div className="h-full w-full absolute z-0 overflow-x-clip">
                            <img src={VerifyBG} alt="verify" className="absolute bottom-0 left-20 md:top-20 md:left-40  size-[35rem] object-contain"/>
                        </div>
                        <div className="flex flex-col ml-[-15px] p-5 gap-5 md:gap-0 text-[1rem] md:justify-between md:h-[45vh] z-10">
                            <p>
                                医療提携の薬剤を使うため、
                            <br/>
                                オンライン上で診察を受けていただきます。
                            </p>
                            <section className="flex flex-col md:flex-row gap-5 md:items-center">
                                公式ラインから診察予約 <a className="hidden md:block"><ArrowRightIcon/></a> <a className="md:hidden"><ArrowDownIcon/></a> <a href="https://lin.ee/8n0kHHm"><img src={Line_button} alt="line-button" className='w-[13rem]' /></a>
                            </section>
                            <p>
                                診察後、オンライン上で診察代と薬液をお支払いしていただきます。
                            </p>
                            <p className="">
                                診察代金4400円（オンライン診療代は1年に1度）
                                <br />
                                薬液代金17500円（10回来店分の薬液量）
                                <br />
                                ※（10500円で５回来店分の薬液量も選択可能）
                                <br />
                                合計21900円
                            </p>
                        </div>
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger>
                        <div className="bg-white rounded-[1rem] drop-shadow-lg w-[20rem] h-[20rem] relative rotate-6 z-10 duration-200 ease-in-out transition-all
                                    hover:z-40 hover:rotate-0 hover:w-[21rem] hover:h-[21rem] flex flex-col justify-between">
                            <div className="flex justify-center items-center h-full">
                                <CleanIcon/>
                            </div>
                            <p className="text-[1.5rem] mb-5 ml-5 text-left">
                                ② 施術
                            </p>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="flex rounded-lg h-[60vh] w-[90vw] md:h-auto md:w-auto overflow-x-clip overflow-y-auto">
                        <VisuallyHidden.Root asChild>
                            <DialogTitle/>
                        </VisuallyHidden.Root>
                        <DialogDescription/>
                        <div className="h-full w-full absolute z-0 overflow-x-clip">
                            <img src={CleanBG} alt="verify" className="absolute bottom-0 left-20 md:top-20 md:left-40 size-[35rem] object-contain overflow-visible"/>
                        </div>
                        <div className="flex flex-col ml-[-15px] p-5 gap-5 md:gap-0 text-[1rem] md:justify-between md:h-[45vh] z-10">
                            <p>
                                購入していただいた薬液は当サロンに届きます。
                                <br />
                                その薬剤を使用しサロンにて15分×3回<span className="font-bold">（1セッション約45分）</span>
                                <br />
                                の照射の施術を行います。
                            </p>
                            <p>
                            施術代金
                            <br />
                            <span className="font-bold">1セッション代、7000円</span>サロンへお支払いしていただきます。
                            <br />
                            (ご自身で薬剤を歯面に塗布していただきます)
                            </p>
                            <p className="text-[1rem]">
                                ※ホワイトニングの効果には個人差がある為、
                                <br />
                                1週間に2回ほどご自身の目標とする白さになるまで続けていただくと効果的です。
                            </p>
                            <p className="text-[1rem]">
                                また目標とする白さになった後でも3週間〜1ヶ月に1度定期的に
                                <br />
                                メンテナンスを行うことをおすすめ致します。
                            </p>
                        </div>
                    </DialogContent>
                </Dialog>
                
                <Dialog>
                    <DialogTrigger>
                    <div className="bg-white rounded-[1rem] drop-shadow-lg w-[20rem] h-[20rem] relative -rotate-6 z-10 duration-200 ease-in-out transition-all
                                hover:z-40 hover:rotate-0 hover:w-[21rem] hover:h-[21rem] flex flex-col justify-between">
                        <div className="flex justify-center items-center h-full">
                            <BrushIcon />
                        </div>
                        <p className="text-[1.5rem] mb-5 ml-5 text-left">
                            ③ ブラッシング
                        </p>
                    </div>
                    </DialogTrigger>
                    <DialogContent className="flex rounded-lg h-[60vh] w-[90vw] md:h-auto md:w-auto overflow-clip">
                        <VisuallyHidden.Root asChild>
                            <DialogTitle/>
                        </VisuallyHidden.Root>
                        <DialogDescription/>
                        <div className="h-full w-full absolute z-0 overflow-x-clip">
                            <img src={BrushBG} alt="verify" className="absolute bottom-0 left-20 md:top-20 md:left-40 size-[35rem] object-contain overflow-visible"/>
                        </div>
                        <div className="flex flex-col ml-[-15px] p-5 gap-5 md:gap-0 text-[1rem] md:justify-between md:h-[45vh] z-10">
                            <p>
                                ご希望がありましたら、
                                <br/>
                                歯科衛生士によるブラッシングチェックやブラッシング指導も
                                <br/>
                                行います♡
                            </p>
                            <p className="md:-mt-10">
                                その他ご質問ご不明点等ございましたらお声がけください！                        
                            </p>
                            <div className="flex gap-5 items-end justify-between">
                                <section className="flex flex-col gap-2">
                                    <a href="https://lin.ee/8n0kHHm"><img src={Line_button} alt="line-button" className='w-[13rem]' /></a>
                                    <a href="https://www.instagram.com/whitening.salon_bi_?igsh=MWxvaWs5YWUxcmZ5eA=="><img src={IG_button} alt="line-button" className='w-[13rem]' /></a>
                                </section>
                                <p>
                                    ホワイトニングサロン〜魅〜
                                </p>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>  
        </div>
    )
} 