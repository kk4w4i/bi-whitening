import { MotionConfig, motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface TabType {
  title: string;
  description: string;
  一回の費用: string;
  時間: string;
  効果: string;
  持続期間: string;
  痛み: string;
  メリット: string;
  デメリット: string;
}

const TABS = [
  {
    title: "オフィスホワイトニング",
    description: "歯医者で濃度の高い過酸化水素の薬液を塗布し光を当てて歯を漂白して白くしていく方法",
    一回の費用: "¥40,000",
    時間: "２~３時間",
    効果: "2~3段階",
    持続期間: "3ヶ月~1年",
    痛み: "でやすい",
    メリット: "短時間で効果が出る、プロによる施術",
    デメリット: "痛みがある、費用が高い"
  },
  {
    title: "ホームホワイトニング",
    description: "歯医者でマウスピースを作ってもらい、薬液を購入しお家で自分で薬液を入れて2時間ほどつけておき、それを2週間ほど毎日続ける方法",
    一回の費用: "¥50,000",
    時間: `1回2~3時間、2週間毎日`,
    効果: "2~3段階",
    持続期間: "3ヶ月~1年",
    痛み: "でる方もいる",
    メリット: "初期費用はかかるが、マウスピースを作れば自分のタイミングでホワイトニングが行える",
    デメリット: "毎日コツコツ続けないと効果なし、初期費用が高い"
  },
  {
    title: "サロン医療ホワイトニング",
    description: "歯科提携しているクリニックでオンライン診療を受け、薬液を処方してもらいそれを使って行う医療ホワイトニングで1時間ほどで終わる",
    一回の費用: "¥10,000弱",
    時間: "1時間",
    効果: "2~3段階",
    持続期間: "3ヶ月~1年",
    痛み: "ほとんど無い",
    メリット: "オフィスよりも安価、ホームよりも効果が早い",
    デメリット: "目標の白さまではサロンに通う"
  },
  {
    title: "セルフホワイトニング",
    description: "市販のホワイトニング製品を使用して自宅で行う方法",
    一回の費用: "¥2,000",
    時間: "30~60分",
    効果: "0~1段階",
    持続期間: "1週間",
    痛み: "なし",
    メリット: "最も安価、手軽",
    デメリット: "効果が限定的、持続期間が短い"
  }
]

export default function CompareTable() {
  const [activeTab, setActiveTab] = useState<TabType | null>(null);
  const [hoveredTab, setHoveredTab] = useState<TabType | null>(null);

  const handleMouseOver = (tab: TabType) => {
    setHoveredTab(tab);
  };

  const handleFocus = (tab: TabType) => {
    setHoveredTab(tab);
  };

  const handleBlur = () => {
    setHoveredTab(null);
  };

  const handleClick = (tab: TabType) => {
    setActiveTab(tab);
  };

  const currentTab = hoveredTab || activeTab;

  return (
    <div className="bg-white drop-shadow-lg rounded-[1rem] py-10 px-5">
      <div className="w-[100%] flex flex-col gap-5 justify-between relative">
        <div className="flex justify-between items-center"> {/* New wrapper div */}
          <p className="text-[1.1rem] md:text-[1.4rem] font-medium pl-5">
            ホワイトニングの種類
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 relative overflow-y-visible">
          <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
            <motion.ul layout className="flex flex-col items-start w-full h-full gap-5 mt-6">
              {TABS.map((tab) => (
                <motion.li
                  layout
                  className={clsx("flex justify-start items-center relative  text-[0.7rem] md:text-[1rem] outline-none transition-colors w-full h-full text-gray-700 z-10")}
                  tabIndex={0}
                  key={tab.title}
                  onFocus={() => handleFocus(tab)}
                  onBlur={handleBlur}
                  onMouseOver={() => handleMouseOver(tab)}
                  onClick={() => handleClick(tab)}
                >
                  {currentTab === tab && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#FBE67B] to-[#FFFBE9] w-[210%] md:w-[305%] drop-shadow-lg z-10"
                    />
                  )}
                  <span className="flex flex-col justify-start items-start relative py-4 pl-5 gap-2 z-20 h-[170px]">
                    <p className="font-bold text-[0.9rem] md:text-[1rem]">{tab.title}</p>
                    <p className="text-[0.7rem] md:text-[0.8rem]">{tab.description}</p>
                  </span>

                </motion.li>
              ))}
            </motion.ul>
          </MotionConfig>
          <div className="h-full md:col-span-2 z-20">
            <Carousel className="h-full flex items-between justify-between">
              <CarouselContent className="h-full overflow-visible">
                {Object.keys(TABS[0])
                  .filter(key => key !== 'title' && key !== 'description')
                  .map((category) => (
                    <CarouselItem key={category} className="basis-full md:basis-1/3 lg:basis-1/5">
                      <div className="flex flex-col h-full">
                        <p className="flex justify-center">{category}</p>
                        <div className="flex flex-col h-full justify-between gap-5">
                          {TABS.map((tab) => (
                            <div
                              key={`${category}-${tab.title}`}
                              className={clsx(
                                "h-[170px] flex items-center justify-center p-3 rounded-lg"
                              )}
                              onMouseOver={() => handleMouseOver(tab)}
                              onMouseLeave={() => setHoveredTab(null)}
                              onClick={() => handleClick(tab)}
                            >
                              <p className="font-medium text-center">
                                {tab[category as keyof TabType]}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious className="translate-x-10" />
              <CarouselNext className="-translate-x-10" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
