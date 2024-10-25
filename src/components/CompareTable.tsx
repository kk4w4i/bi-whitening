import { MotionConfig, motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

const TABS = [
    {
        title: "オフィスホワイトニング",
        description: "歯医者で濃度の高い過酸化水素の薬液を塗布し光を当てて歯を漂白して白くしていく方法",
        一回の費用: "¥40,000",
        時間: "1.5~2時間",
        効果: "2~3段階",
        持続期間: "3ヶ月~1年",
        痛み: "中程度",
        メリット: "短時間で効果が出る、プロによる施術",
        デメリット: "痛みがある、費用が高い"
    },
    {
        title: "ホームホワイトニング",
        description: "歯医者でマウスピースを作ってもらい、薬液を購入しお家で自分で薬液を入れて2時間ほどつけておき、それを2週間ほど毎日続ける方法",
        一回の費用: "¥10,000",
        時間: `1回2~3時間、2週間毎日`,
        効果: "2~3段階",
        持続期間: "3ヶ月~1年",
        痛み: "少ない",
        メリット: "自宅で手軽、費用が安い",
        デメリット: "効果が出るまで時間がかかる、毎日の手間がかかる"
    },
    {
        title: "サロン医療ホワイトニング",
        description: "歯科提携しているクリニックでオンライン診療を受け、薬液を処方してもらいそれを使って行う医療ホワイトニングで1時間ほどで終わる",
        一回の費用: "¥30,000 ~ ¥40,000",
        時間: "1時間",
        効果: "2~3段階",
        持続期間: "3ヶ月~1年",
        痛み: "出やすい",
        メリット: "短時間で効果が出る、医療行為として安全",
        デメリット: "痛みがある、費用が高い"
    },
    {
        title: "セルフホワイトニング",
        description: "市販のホワイトニング製品を使用して自宅で行う方法",
        一回の費用: "¥2,000",
        時間: "10~15分",
        効果: "0~1段階",
        持続期間: "1週間",
        痛み: "なし",
        メリット: "最も安価、手軽",
        デメリット: "効果が限定的、持続期間が短い"
    }
]

export default function CompareTable() {
    const [activeTab, setActiveTab] = useState(null);
    const [hoveredTab, setHoveredTab] = useState(null);

    const handleMouseOver = (tab) => {
        setHoveredTab(tab);
    };

    const handleFocus = (tab) => {
        setHoveredTab(tab);
    };

    const handleBlur = () => {
        setHoveredTab(null);
    };

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    const currentTab = hoveredTab || activeTab;

    return (
        <div className="bg-white w-[90rem] max-w-[90rem] h-fit drop-shadow-lg rounded-[1rem] py-10 px-5 overflow-y-auto">
            <div className="w-[100%] flex flex-col gap-5 h-fit justify-between">
                <p className="md:text-[1.2rem] font-medium pl-5">
                    ホワイトニングの種類
                </p>

                <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
                    <motion.ul layout className="flex flex-col items-start w-full h-full gap-5">
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
                                    className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#FBE67B] to-[#FFFBE9] w-[101%] drop-shadow-lg z-10"
                                    />
                                )}
                                <span className="flex flex-col justify-start items-start relative w-[12rem] md:w-[18rem] py-4 px-5 h-full gap-2 z-20">
                                    <p className="font-bold text-[0.9rem] md:text-[1rem]">{tab.title}</p>
                                    <p className="text-[0.7rem] md:text-[0.8rem]">{tab.description}</p>
                                </span>
                            </motion.li>
                        ))}
                    </motion.ul>
                    
                    <div className="absolute left-[12rem] md:left-[20rem] top-0 flex px-5 py-5 h-full gap-5">
                        <div className="flex flex-col w-[8rem] rounded-[10px] border-[1px] p-5 justify-center items-center gap-5">
                            <p className="text-[0.8rem] whitespace-nowrap">一回の費用</p>
                            <div className="flex flex-col h-full justify-between gap-5">
                                {TABS.map((tab) => (
                                    <div key={tab.title} className="h-full flex justify-center items-center">
                                        <p className="text-[0.8rem] text-center z-50 relative">{tab.一回の費用}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col w-[8rem] rounded-[10px] border-[1px] p-5 justify-center items-center gap-5">
                            <p className="text-[0.8rem] whitespace-nowrap">時間</p>
                            <div className="flex flex-col h-full justify-between gap-5">
                                {TABS.map((tab) => (
                                    <div key={tab.title} className="h-full flex justify-center items-center">
                                        <p className="text-[0.8rem] text-center z-30">{tab.時間}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col w-[8rem] rounded-[10px] border-[1px] p-5 justify-center items-center gap-5">
                            <p className="text-[0.8rem] whitespace-nowrap">効果</p>
                            <div className="flex flex-col h-full justify-between gap-5">
                                {TABS.map((tab) => (
                                    <div key={tab.title} className="h-full flex justify-center items-center">
                                        <p className="text-[0.8rem] whitespace-nowrap text-center z-30">{tab.効果}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col w-[8rem] rounded-[10px] border-[1px] p-5 justify-center items-center gap-5">
                            <p className="text-[0.8rem] whitespace-nowrap">持続期間</p>
                            <div className="flex flex-col h-full justify-between gap-5">
                                {TABS.map((tab) => (
                                    <div key={tab.title} className="h-full flex justify-center items-center">
                                        <p className="text-[0.8rem] whitespace-nowrap text-center z-30">{tab.持続期間}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col w-[8rem] rounded-[10px] border-[1px] p-5 justify-center items-center gap-5">
                            <p className="text-[0.8rem]">痛み</p>
                            <div className="flex flex-col h-full justify-between gap-5">
                                {TABS.map((tab) => (
                                    <div key={tab.title} className="h-full flex justify-center items-center">
                                        <p className="text-[0.8rem] whitespace-nowrap text-center z-30">{tab.痛み}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col w-fit rounded-[10px] border-[1px] p-5 justify-center items-center gap-5">
                            <p className="text-[0.8rem]">メリット</p>
                            <div className="flex flex-col h-full justify-between gap-5">
                                {TABS.map((tab) => (
                                    <div key={tab.title} className="h-full flex justify-center items-center">
                                        <p className="text-[0.8rem] text-center z-30">{tab.メリット}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col w-fit rounded-[10px] border-[1px] p-5 justify-center items-center gap-5">
                            <p className="text-[0.8rem]">デメリット</p>
                            <div className="flex flex-col h-full justify-between gap-5">
                                {TABS.map((tab) => (
                                    <div key={tab.title} className="h-full flex justify-center items-center">
                                        <p className="text-[0.8rem] text-center z-30">{tab.デメリット}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </MotionConfig>
            </div>
        </div>
    )
}