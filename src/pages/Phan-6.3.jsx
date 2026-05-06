import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    Cpu,
    Database,
    Gamepad2,
    Gauge,
    HardDrive,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    Network,
    PackageCheck,
    PlugZap,
    Puzzle,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    Usb,
    Volume2,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-violet-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-violet-500/10 border border-violet-400/30 flex items-center justify-center shadow-lg shadow-violet-500/10">
                            <Settings className="text-violet-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 6: Mainboard — Bản mạch chủ
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-violet-300 bg-violet-400/10 px-3 py-1 rounded-full border border-violet-400/20">
                        Bài 6.3
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <ManagerAnalogy />
                <DataPathSimulator />
                <IntelChipsetExplorer />
                <AmdChipsetExplorer />
                <SpecsExplorer />
                <ChipsetMatrix />
                <RealExamples />
                <DecisionLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-violet-300">
                        <BookOpen size={16} /> Phần 6: Mainboard — Chipset
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Chipset là gì?
                        <span className="block text-violet-400">
                            Vai trò điều phối
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Cùng socket chưa chắc mainboard giống nhau. Chipset
                        quyết định main có bao nhiêu cổng, bao nhiêu lane, bao
                        nhiêu khe M.2, hỗ trợ PCIe đời nào, ép xung ra sao và
                        nâng cấp được đến đâu.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="CPU direct lanes" />
                        <Tag
                            icon={<Settings size={16} />}
                            text="Chipset lanes"
                        />
                        <Tag icon={<Usb size={16} />} text="USB / SATA" />
                        <Tag icon={<HardDrive size={16} />} text="M.2 slots" />
                        <Tag icon={<Zap size={16} />} text="Overclocking" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Cpu />}
                            label="CPU"
                            desc="RAM, GPU, M.2 chính"
                            color="blue"
                            highlight
                        />
                        <HeroTile
                            icon={<Settings />}
                            label="Chipset"
                            desc="USB, SATA, LAN, M.2 phụ"
                            color="violet"
                        />
                        <HeroTile
                            icon={<Workflow />}
                            label="PCIe lanes"
                            desc="Làn đường dữ liệu"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<Usb />}
                            label="I/O"
                            desc="Cổng và thiết bị phụ"
                            color="orange"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Ghi nhớ nhanh</p>
                        <p>Socket = CPU có lắp được không</p>
                        <p className="text-violet-300">
                            Chipset = main có bao nhiêu tính năng
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu chipset là bộ điều phối giúp CPU giao tiếp với USB, SATA, LAN, audio, PCIe phụ, M.2 phụ và thiết bị ngoại vi.",
        "Phân biệt đường trực tiếp từ CPU và đường đi qua chipset trên mainboard hiện đại.",
        "Nắm phân cấp chipset Intel: H-series, B-series, Z-series và AMD AM5: A620, B650/B650E, X670/X670E, X870/X870E.",
        "Biết các thông số chipset quan trọng: PCIe lanes, PCIe Gen, USB, SATA, M.2 và khả năng ép xung.",
        "Tránh sai lầm: nghĩ cùng socket là giống nhau, mua chipset cao nhất dù không dùng tới, hoặc không đọc manual về lane chia sẻ.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="violet"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-violet-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-300 flex items-center justify-center font-bold mb-4">
                            {index + 1}
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            {goal}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function CoreConcept() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Khái niệm cốt lõi: Chipset là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[1fr_0.95fr] gap-6">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">Chipset</strong> là
                            bộ chip điều phối trên mainboard, giúp CPU giao tiếp
                            với các linh kiện và cổng kết nối khác như USB,
                            SATA, PCIe, M.2, LAN, âm thanh, Wi-Fi và thiết bị
                            ngoại vi.
                        </p>
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 font-mono text-sm">
                            <p>CPU = giám đốc xử lý việc chính</p>
                            <p>Chipset = trưởng phòng điều phối</p>
                            <p>
                                Mainboard = văn phòng + đường dây + cổng ra vào
                            </p>
                        </div>
                        <p>
                            Trên máy hiện đại, CPU trực tiếp quản lý nhiều đường
                            tốc độ cao như RAM, GPU PCIe x16 và một số khe M.2.
                            Chipset mở rộng các kết nối phụ, số cổng và tính
                            năng.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                            <Puzzle className="text-blue-300" /> Hai câu hỏi
                            quan trọng
                        </h3>
                        <div className="space-y-3">
                            <RuleCard
                                label="Socket"
                                value="CPU có lắp được vào mainboard hay không?"
                                color="blue"
                            />
                            <RuleCard
                                label="Chipset"
                                value="Mainboard đó có bao nhiêu đường, bao nhiêu cổng, bao nhiêu tính năng?"
                                color="violet"
                            />
                            <RuleCard
                                label="Kết luận"
                                value="Cùng socket chỉ là cùng khả năng lắp CPU; chưa nói đủ về tính năng."
                                color="emerald"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ManagerAnalogy() {
    const cards = [
        {
            icon: <Cpu />,
            title: "CPU = giám đốc",
            desc: "Xử lý công việc chính, quyết định nhanh, làm việc trực tiếp với RAM/GPU/SSD chính.",
            color: "blue",
        },
        {
            icon: <Settings />,
            title: "Chipset = trưởng phòng",
            desc: "Điều phối các kết nối phụ: USB, SATA, LAN, audio, M.2 phụ, PCIe phụ.",
            color: "violet",
        },
        {
            icon: <Workflow />,
            title: "PCIe lane = làn đường",
            desc: "Càng nhiều làn và càng đời mới thì càng dễ gắn nhiều thiết bị tốc độ cao.",
            color: "emerald",
        },
        {
            icon: <Usb />,
            title: "USB/SATA/I/O = cổng ra vào",
            desc: "Chipset cao hơn thường có nhiều cổng và tốc độ cao hơn.",
            color: "orange",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: giám đốc và trưởng phòng điều phối"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-4 gap-4">
                {cards.map((c) => (
                    <AnalogyCard key={c.title} {...c} />
                ))}
            </div>
        </section>
    );
}

function DataPathSimulator() {
    const flows = {
        direct: {
            title: "Đường trực tiếp từ CPU",
            color: "blue",
            steps: [
                {
                    icon: <MemoryStick />,
                    title: "CPU ↔ RAM",
                    desc: "RAM thường được CPU quản lý trực tiếp để đạt độ trễ thấp và tốc độ cao.",
                },
                {
                    icon: <Gamepad2 />,
                    title: "CPU ↔ GPU PCIe x16",
                    desc: "GPU rời thường nhận dữ liệu qua đường PCIe x16 trực tiếp từ CPU.",
                },
                {
                    icon: <HardDrive />,
                    title: "CPU ↔ M.2 SSD chính",
                    desc: "Một số khe M.2 tốc độ cao lấy lane trực tiếp từ CPU.",
                },
                {
                    icon: <Gauge />,
                    title: "Tác động đến hiệu năng chính",
                    desc: "Game/render thường phụ thuộc CPU/GPU/RAM/SSD chính nhiều hơn chipset.",
                },
            ],
        },
        chipset: {
            title: "Đường đi qua chipset",
            color: "violet",
            steps: [
                {
                    icon: <Usb />,
                    title: "USB đi qua chipset",
                    desc: "Chuột, phím, USB, ổ ngoài thường được điều phối qua chipset.",
                },
                {
                    icon: <Database />,
                    title: "SATA đi qua chipset",
                    desc: "HDD/SSD SATA thường dùng kết nối từ chipset.",
                },
                {
                    icon: <Network />,
                    title: "LAN, Wi-Fi, Audio",
                    desc: "Các thiết bị onboard và ngoại vi phụ thường được chipset điều phối.",
                },
                {
                    icon: <HardDrive />,
                    title: "M.2 phụ / PCIe phụ",
                    desc: "Một số khe M.2 và khe PCIe phụ có thể lấy lane từ chipset.",
                },
            ],
        },
        copy: {
            title: "Ví dụ: copy USB → SSD SATA",
            color: "emerald",
            steps: [
                {
                    icon: <Usb />,
                    title: "USB nhận dữ liệu",
                    desc: "Bạn cắm USB vào mainboard và copy file.",
                },
                {
                    icon: <Settings />,
                    title: "Dữ liệu đi qua chipset",
                    desc: "Chipset điều phối dữ liệu từ USB đến thiết bị lưu trữ.",
                },
                {
                    icon: <Database />,
                    title: "Ghi vào SSD/HDD SATA",
                    desc: "Chipset chuyển dữ liệu đến cổng SATA để ổ ghi dữ liệu.",
                },
                {
                    icon: <ShieldCheck />,
                    title: "Chipset quyết định cổng và tốc độ phụ",
                    desc: "Chipset tốt hơn có thể có nhiều USB nhanh, SATA/M.2 hơn.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("direct");
    const [active, setActive] = useState(0);
    const flow = flows[mode];
    const step = flow.steps[active];
    const switchMode = (m) => {
        setMode(m);
        setActive(0);
    };
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Chipset điều phối dữ liệu như thế nào?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {Object.entries(flows).map(([key, f]) => (
                        <button
                            key={key}
                            onClick={() => switchMode(key)}
                            className={`rounded-2xl border p-4 font-bold transition-all ${mode === key ? `${softBorder(f.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            {f.title}
                        </button>
                    ))}
                </div>
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[310px] flex flex-col justify-between">
                        <div>
                            <div
                                className={`w-16 h-16 rounded-2xl ${badgeColor(flow.color)} flex items-center justify-center mb-5`}
                            >
                                {React.cloneElement(step.icon, { size: 32 })}
                            </div>
                            <p
                                className={`${textColor(flow.color)} text-sm font-bold mb-2`}
                            >
                                Bước {active + 1}/{flow.steps.length}
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                        <button
                            onClick={() =>
                                setActive((active + 1) % flow.steps.length)
                            }
                            className="mt-6 px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold inline-flex items-center justify-center gap-2"
                        >
                            Bước tiếp theo <ChevronRight size={18} />
                        </button>
                    </div>
                    <div className="space-y-2">
                        {flow.steps.map((s, i) => (
                            <button
                                key={s.title}
                                onClick={() => setActive(i)}
                                className={`w-full flex items-center gap-4 p-3 rounded-2xl border text-left transition-all ${active === i ? `${softBorder(flow.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`}
                            >
                                <div
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${active === i ? badgeColor(flow.color) : "bg-slate-900 text-slate-500"}`}
                                >
                                    {i + 1}
                                </div>
                                <div>
                                    <p className="font-bold text-sm">
                                        {s.title}
                                    </p>
                                    <p className="text-xs opacity-75 mt-1">
                                        {s.desc}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mt-6 bg-violet-500/10 border border-violet-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    CPU → RAM / GPU x16 / M.2 chính • CPU ↔ Chipset ↔ USB / SATA
                    / LAN / Audio / PCIe phụ / M.2 phụ
                </div>
            </div>
        </section>
    );
}

function IntelChipsetExplorer() {
    const data = {
        h: {
            icon: <Cpu />,
            title: "H-series",
            example: "H610",
            segment: "Cơ bản",
            desc: "Ít cổng, ít khe, giá rẻ. Phù hợp văn phòng, học tập, CPU i3/i5 phổ thông.",
            color: "cyan",
        },
        b: {
            icon: <PackageCheck />,
            title: "B-series",
            example: "B660 / B760",
            segment: "Tầm trung",
            desc: "Cân bằng giá/tính năng, đủ dùng cho đa số. Phù hợp gaming phổ thông, làm việc, i5/i7 non-K.",
            color: "blue",
        },
        z: {
            icon: <Zap />,
            title: "Z-series",
            example: "Z690 / Z790",
            segment: "Cao cấp",
            desc: "Nhiều lane/cổng hơn, hỗ trợ ép xung CPU dòng K. Phù hợp gaming cao cấp, i7/i9, overclock.",
            color: "purple",
        },
    };
    const [active, setActive] = useState("b");
    const item = data[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Chipset Intel phổ biến: H, B, Z"
                icon={<Cpu />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {Object.entries(data).map(([key, c]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(c.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(c.icon, { size: 20 })}{" "}
                                {c.title}
                            </div>
                            <p className="text-xs opacity-75 mt-1">
                                Ví dụ: {c.example}
                            </p>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <InfoCard
                        label="Dòng"
                        value={`${item.title} — ${item.example}`}
                        color={item.color}
                    />
                    <InfoCard
                        label="Phân khúc"
                        value={item.segment}
                        color={item.color}
                    />
                    <InfoCard
                        label="Phù hợp"
                        value={item.desc}
                        color={item.color}
                    />
                </div>
            </div>
        </section>
    );
}

function AmdChipsetExplorer() {
    const data = {
        a620: {
            icon: <Cpu />,
            title: "A620",
            segment: "Cơ bản",
            desc: "Giá thấp, ít lane/cổng hơn, không hướng tới ép xung. Hợp Ryzen tiết kiệm, văn phòng, gaming nhẹ.",
            color: "orange",
        },
        b650: {
            icon: <PackageCheck />,
            title: "B650",
            segment: "Tầm trung",
            desc: "Cân bằng, phổ biến, đủ cho gaming/làm việc. Hợp Ryzen 5/Ryzen 7 và build lâu dài.",
            color: "emerald",
        },
        b650e: {
            icon: <Sparkles />,
            title: "B650E",
            segment: "Tầm trung cao",
            desc: "Có PCIe 5.0 cho GPU theo chuẩn E, hợp người muốn nền tảng AM5 hiện đại hơn.",
            color: "blue",
        },
        x670: {
            icon: <Layers3 />,
            title: "X670 / X670E",
            segment: "Cao cấp",
            desc: "Nhiều lane, nhiều USB/SATA/M.2 hơn. Hợp Ryzen 7/Ryzen 9, workstation, nhiều SSD.",
            color: "purple",
        },
        x870: {
            icon: <Zap />,
            title: "X870 / X870E",
            segment: "Cao cấp đời mới",
            desc: "Nhiều tính năng hiện đại hơn, hướng tới AM5 mới và build cao cấp cần kết nối mạnh.",
            color: "red",
        },
    };
    const [active, setActive] = useState("b650");
    const item = data[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Chipset AMD AM5 phổ biến"
                icon={<Settings />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    {Object.entries(data).map(([key, c]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(c.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(c.icon, { size: 20 })}{" "}
                                {c.title}
                            </div>
                            <p className="text-xs opacity-75 mt-1">
                                {c.segment}
                            </p>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <InfoCard
                        label="Dòng"
                        value={item.title}
                        color={item.color}
                    />
                    <InfoCard
                        label="Phân khúc"
                        value={item.segment}
                        color={item.color}
                    />
                    <InfoCard
                        label="Phù hợp"
                        value={item.desc}
                        color={item.color}
                    />
                </div>
                <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-emerald-300">Ghi nhớ:</strong> B650
                    là điểm cân bằng phổ biến cho AM5; B650E/X670E/X870E hướng
                    tới nhiều PCIe 5.0 và tính năng cao hơn.
                </div>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        lanes: {
            icon: <Workflow />,
            title: "PCIe lanes",
            detail: "Làn đường dữ liệu giữa CPU/chipset và thiết bị như GPU, SSD, card mở rộng.",
            impact: "Chipset cao hơn thường cho nhiều khe M.2, nhiều PCIe phụ và nhiều thiết bị chạy cùng lúc hơn.",
        },
        gen: {
            icon: <Zap />,
            title: "PCIe Gen 3/4/5",
            detail: "Chuẩn PCIe càng mới, băng thông mỗi lane càng cao.",
            impact: "PCIe 4.0 phổ biến cho SSD/GPU hiện nay; PCIe 5.0 hướng tới SSD/GPU tương lai và máy cao cấp.",
        },
        usb: {
            icon: <Usb />,
            title: "Số cổng USB",
            detail: "Chipset quyết định số lượng USB và tốc độ USB tối đa mà mainboard có thể triển khai.",
            impact: "USB 3.2 Gen 2x2 hoặc USB4 hữu ích với SSD ngoài, dock và thiết bị tốc độ cao.",
        },
        sata: {
            icon: <Database />,
            title: "SATA ports",
            detail: "Cổng gắn HDD hoặc SSD SATA.",
            impact: "Chipset/main thấp thường ít SATA hơn; main cao hơn hợp máy nhiều ổ lưu trữ hơn.",
        },
        m2: {
            icon: <HardDrive />,
            title: "Số khe M.2",
            detail: "Chipset ảnh hưởng số khe SSD NVMe và PCIe Gen của từng khe.",
            impact: "Gaming phổ thông nên có 2 khe M.2; làm video/workstation nên kiểm tra 2–4 khe và lane chia sẻ.",
        },
        oc: {
            icon: <Gauge />,
            title: "Ép xung / Overclocking",
            detail: "Khả năng tăng tốc CPU/RAM cao hơn mặc định tùy chipset, CPU, BIOS, VRM và tản nhiệt.",
            impact: "Intel Z-series thường cho CPU K overclock; AMD B/X có nhiều tính năng tuning hơn A-series.",
        },
    };
    const [active, setActive] = useState("lanes");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số kỹ thuật quan trọng của chipset"
                icon={<Gauge />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(specs).map(([key, s]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center transition-all ${active === key ? "bg-yellow-500 text-slate-950" : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}
                        >
                            {React.cloneElement(s.icon, { size: 20 })}
                            <span className="font-bold text-xs">{s.title}</span>
                        </button>
                    ))}
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 text-yellow-300 border border-yellow-500/20 flex items-center justify-center mb-5">
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {item.title}
                        </h3>
                    </div>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                        <p>{item.detail}</p>
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-yellow-300">
                                Tác động thực tế:
                            </strong>{" "}
                            {item.impact}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ChipsetMatrix() {
    const rows = [
        [
            "Văn phòng, học online",
            "Intel H610 / AMD A620",
            "Đủ dùng nếu ít SSD/cổng, CPU phổ thông",
        ],
        [
            "Gaming phổ thông",
            "Intel B760 / AMD B650",
            "Điểm cân bằng giá/tính năng cho đa số người dùng",
        ],
        [
            "Gaming cao cấp, nhiều SSD",
            "Intel Z790 / AMD X670E/X870E",
            "Nhiều lane, nhiều M.2, USB nhanh, VRM thường tốt hơn",
        ],
        [
            "Intel CPU dòng K muốn ép xung",
            "Z-series",
            "H/B-series thường không dành cho OC CPU truyền thống",
        ],
        [
            "AM5 dùng lâu dài, Ryzen 5/7",
            "B650/B850",
            "Thường hợp lý hơn A620 nếu muốn nâng cấp lâu hơn",
        ],
        [
            "Workstation cá nhân",
            "X670E/X870E hoặc Z790",
            "Nên kiểm tra số M.2, lane, USB, LAN, VRM, tản",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="cyan"
                title="Chọn chipset theo nhu cầu"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[860px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Nhu cầu</th>
                            <th className="p-4 text-cyan-300">
                                Chipset hợp lý
                            </th>
                            <th className="p-4">Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([need, chip, note]) => (
                            <tr
                                key={need}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-white font-bold">
                                    {need}
                                </td>
                                <td className="p-4 text-slate-300">{chip}</td>
                                <td className="p-4 text-slate-300">{note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Cpu />,
            title: "Intel B760",
            subtitle: "Tầm trung phổ biến cho Intel",
            color: "blue",
            points: [
                "Hợp Core i5-13400F, i5-14400F, i7 non-K",
                "Đủ dùng cho gaming/làm việc ổn định",
                "Nhiều cổng/khe hơn H610",
                "Tiết kiệm hơn Z790",
                "Không tối ưu cho ép xung CPU K",
            ],
            lesson: "Nếu dùng Intel i5/i7 non-K, không ép xung, B760 thường hợp lý hơn Z790.",
        },
        {
            icon: <PackageCheck />,
            title: "AMD B650",
            subtitle: "Điểm cân bằng cho AM5",
            color: "emerald",
            points: [
                "Hợp Ryzen 5 7500F/7600",
                "Hợp Ryzen 7 7700/7800X3D",
                "DDR5, nền tảng dùng lâu dài",
                "Thường có 2 khe M.2 trở lên",
                "Rẻ hơn X670/X870",
            ],
            lesson: "Với Ryzen AM5 gaming/làm việc phổ thông, B650 thường là lựa chọn cân bằng nhất.",
        },
        {
            icon: <Sparkles />,
            title: "AMD X670E",
            subtitle: "AM5 cao cấp, nhiều lane/cổng",
            color: "purple",
            points: [
                "Hợp Ryzen 9, workstation cá nhân",
                "Nhiều SSD NVMe",
                "PCIe 5.0 đầy đủ hơn",
                "VRM thường mạnh hơn",
                "Giá cao và dễ dư tính năng",
            ],
            lesson: "X670E/X870E đáng tiền khi bạn thật sự cần nhiều SSD, nhiều cổng, CPU mạnh hoặc build cao cấp lâu dài.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="pink"
                title="Ví dụ thực tế"
                icon={<PackageCheck />}
            />
            <div className="grid lg:grid-cols-3 gap-4">
                {examples.map((e) => (
                    <div
                        key={e.title}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-pink-500/40 transition-all"
                    >
                        <div
                            className={`w-12 h-12 rounded-2xl ${badgeColor(e.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(e.icon, { size: 24 })}
                        </div>
                        <h3 className="text-white font-bold text-lg mb-1">
                            {e.title}
                        </h3>
                        <p className="text-pink-300 text-sm font-semibold mb-4">
                            {e.subtitle}
                        </p>
                        <div className="space-y-2 mb-5">
                            {e.points.map((p) => (
                                <Bullet key={p} text={p} />
                            ))}
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300">
                            <strong className="text-pink-300">Bài học:</strong>{" "}
                            {e.lesson}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function DecisionLab() {
    const scenarios = {
        office: {
            icon: <Cpu />,
            title: "Văn phòng tiết kiệm",
            answer: "H610 hoặc A620 có thể đủ nếu chỉ cần một SSD, ít USB và CPU phổ thông. Không nên trả tiền cho chipset cao nếu không dùng tới.",
            color: "cyan",
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Gaming phổ thông",
            answer: "B760 với Intel hoặc B650 với AMD thường là điểm cân bằng: đủ M.2/USB/tính năng mà không quá đắt.",
            color: "emerald",
        },
        overclock: {
            icon: <Zap />,
            title: "Intel K muốn ép xung",
            answer: "Nên chọn Z-series như Z690/Z790, kèm CPU dòng K, VRM tốt, BIOS tốt và tản nhiệt phù hợp.",
            color: "purple",
        },
        manySsd: {
            icon: <HardDrive />,
            title: "Nhiều SSD NVMe",
            answer: "Chọn chipset/main cao hơn, kiểm tra số khe M.2, Gen 4/5, lane từ CPU/chipset và có chia sẻ SATA không.",
            color: "orange",
        },
        manual: {
            icon: <BookOpen />,
            title: "Sợ lane chia sẻ",
            answer: "Đọc manual. Ảnh quảng cáo không đủ để biết gắn M.2 có vô hiệu SATA hay làm PCIe phụ chạy chậm không.",
            color: "red",
        },
    };
    const [active, setActive] = useState("gaming");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: chọn chipset theo tình huống"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-5 gap-3 mb-6">
                    {Object.entries(scenarios).map(([key, s]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(s.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(s.icon, { size: 20 })}{" "}
                                {s.title}
                            </div>
                        </button>
                    ))}
                </div>
                <div
                    className={`${softBorder(item.color)} border rounded-3xl p-6 grid md:grid-cols-[0.25fr_1fr] gap-5 items-center`}
                >
                    <div
                        className={`w-20 h-20 rounded-3xl ${badgeColor(item.color)} flex items-center justify-center mx-auto`}
                    >
                        {React.cloneElement(item.icon, { size: 38 })}
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                        <strong className={textColor(item.color)}>
                            Gợi ý:
                        </strong>{" "}
                        {item.answer}
                    </p>
                </div>
            </div>
        </section>
    );
}

function CommonMistakes() {
    const mistakes = [
        {
            wrong: "Cùng socket là mainboard nào cũng như nhau",
            right: "Cùng socket chỉ nghĩa là cùng nhóm CPU có thể lắp. Chipset khác nhau sẽ khác số M.2, USB, SATA, PCIe Gen, lane, ép xung, VRM và tính năng.",
        },
        {
            wrong: "Cứ chipset cao nhất là tốt nhất cho mọi người",
            right: "Chipset cao chỉ đáng tiền nếu bạn dùng tới nhiều SSD, nhiều card mở rộng, USB nhanh, overclock hoặc CPU cao cấp.",
        },
        {
            wrong: "Chipset quyết định toàn bộ FPS",
            right: "FPS/game/render chủ yếu phụ thuộc CPU, GPU, RAM, SSD, tản nhiệt và nguồn. Chipset chủ yếu quyết định tính năng và mở rộng.",
        },
        {
            wrong: "Không cần đọc lane chia sẻ",
            right: "Một số khe M.2 có thể làm mất cổng SATA hoặc khe PCIe phụ có thể chia lane. Manual mới cho biết chính xác.",
        },
        {
            wrong: "Chỉ cần xem tên chipset là đủ",
            right: "Hai main cùng B650/B760 vẫn có thể khác VRM, số khe M.2, USB-C, Wi-Fi, LAN, BIOS Flashback và chất lượng linh kiện.",
        },
    ];
    const tips = [
        "Chọn chipset theo CPU và nhu cầu, không theo tên nghe cao cấp.",
        "Người mới thường nên bắt đầu từ dòng B: Intel B760 hoặc AMD B650/B850.",
        "Trước khi mua, kiểm tra: chipset, số khe M.2, PCIe Gen, SATA, Wi-Fi/Bluetooth, USB-C/USB nhanh.",
        "Đọc manual để biết M.2 nào lấy lane từ CPU, M.2 nào lấy lane từ chipset.",
        "Dùng CPU mạnh hoặc tải nặng lâu: ngoài chipset, phải xem VRM và tản VRM của main cụ thể.",
        "Không mua main cao cấp nếu chỉ dùng một GPU, một SSD, một bộ RAM và không ép xung.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="red"
                title="Sai lầm phổ biến & mẹo thực chiến"
                icon={<AlertTriangle />}
            />
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                    <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                        <XCircle className="text-red-400" /> Lỗi thường gặp
                    </h3>
                    <div className="space-y-4">
                        {mistakes.map((m, i) => (
                            <div
                                key={m.wrong}
                                className="bg-slate-950 border border-slate-800 rounded-2xl p-5"
                            >
                                <p className="text-red-300 font-bold text-sm mb-2">
                                    Sai lầm {i + 1}: “{m.wrong}”
                                </p>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    <span className="text-green-300 font-semibold">
                                        Đúng hơn:
                                    </span>{" "}
                                    {m.right}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-green-500/5 border border-green-500/20 rounded-3xl p-6">
                    <h3 className="text-xl font-bold text-green-300 mb-5 flex items-center gap-2">
                        <Lightbulb /> Checklist nhanh
                    </h3>
                    <div className="space-y-3">
                        {tips.map((tip) => (
                            <div
                                key={tip}
                                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-3 text-sm text-slate-300"
                            >
                                <CheckCircle2
                                    className="text-green-400 shrink-0 mt-0.5"
                                    size={18}
                                />
                                <span>{tip}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function SummaryAndQuiz() {
    return (
        <section className="space-y-6">
            <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
                <div className="bg-slate-950 p-6 border-b border-slate-800">
                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                        <span className="bg-violet-500/20 text-violet-300 p-2 rounded-xl">
                            12
                        </span>{" "}
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-violet-300 border border-slate-800 shadow-inner space-y-2">
                            <p>Socket = CPU có lắp được không</p>
                            <p>
                                Chipset = main có bao nhiêu cổng/lane/tính năng
                            </p>
                            <br />
                            <p className="text-slate-500"># Đường dữ liệu</p>
                            <p className="text-slate-300">
                                CPU → RAM / GPU x16 / M.2 chính
                            </p>
                            <p className="text-slate-300">
                                CPU ↔ Chipset ↔ USB / SATA / LAN / Audio / PCIe
                                phụ / M.2 phụ
                            </p>
                            <br />
                            <p className="text-slate-500"># Phân cấp dễ nhớ</p>
                            <p className="text-slate-300">
                                Intel: H cơ bản • B tầm trung • Z cao cấp/OC
                            </p>
                            <p className="text-slate-300">
                                AMD AM5: A620 cơ bản • B650 cân bằng • X670/X870
                                cao cấp
                            </p>
                        </div>
                    </div>
                    <InteractiveQuiz />
                </div>
            </div>
        </section>
    );
}

const questions = [
    {
        question: "Chipset trên mainboard có vai trò chính là gì?",
        options: [
            "Lưu trữ dữ liệu lâu dài",
            "Điều phối và mở rộng các kết nối giữa CPU với thiết bị khác",
            "Làm mát CPU",
            "Tạo hình ảnh xuất ra màn hình",
        ],
        correct: 1,
        explanation:
            "Chipset giúp CPU giao tiếp với các thiết bị và cổng kết nối như USB, SATA, LAN, audio, PCIe phụ, M.2 phụ.",
    },
    {
        question:
            "Với Intel, dòng chipset nào thường dành cho ép xung CPU dòng K?",
        options: ["H-series", "B-series", "Z-series", "A-series"],
        correct: 2,
        explanation:
            "Intel Z-series như Z690/Z790 thường hỗ trợ ép xung CPU dòng K.",
    },
    {
        question:
            "Với AMD AM5, chipset nào thường cân bằng cho gaming/làm việc phổ thông?",
        options: ["B650/B850", "X670E duy nhất", "A320", "H610"],
        correct: 0,
        explanation:
            "B650/B850 thường là dòng cân bằng cho AM5, hợp Ryzen 5/Ryzen 7, gaming và làm việc phổ thông.",
    },
    {
        question: "Chipset cao hơn thường đem lại lợi ích gì?",
        options: [
            "Luôn tăng FPS gấp đôi",
            "Luôn làm CPU mát hơn",
            "Nhiều cổng, nhiều lane, nhiều khe mở rộng và tính năng hơn",
            "Không cần dùng RAM",
        ],
        correct: 2,
        explanation:
            "Chipset cao hơn thường cho nhiều lane, cổng USB/SATA/M.2/PCIe và tính năng hơn, nhưng không tự động tăng FPS gấp đôi.",
    },
    {
        question: "Vì sao cần đọc manual về lane chia sẻ?",
        options: [
            "Để biết màu mainboard",
            "Để biết gắn M.2 có vô hiệu SATA hoặc chia lane PCIe không",
            "Để tăng dung lượng RAM tự động",
            "Để biến H610 thành Z790",
        ],
        correct: 1,
        explanation:
            "Manual cho biết khe M.2/PCIe lấy lane từ đâu, có làm mất cổng SATA nào hoặc chia lane với khe khác không.",
    },
];

function InteractiveQuiz() {
    const [currentQ, setCurrentQ] = useState(0);
    const [selected, setSelected] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const finished = currentQ === "finished";
    const q = !finished ? questions[currentQ] : null;
    const handleSelect = (index) => {
        if (showResult) return;
        setSelected(index);
        setShowResult(true);
        if (index === q.correct) setScore((s) => s + 1);
    };
    const handleNext = () => {
        if (currentQ < questions.length - 1) {
            setCurrentQ((c) => c + 1);
            setSelected(null);
            setShowResult(false);
        } else setCurrentQ("finished");
    };
    const resetQuiz = () => {
        setCurrentQ(0);
        setSelected(null);
        setShowResult(false);
        setScore(0);
    };
    if (finished) {
        return (
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[390px]">
                <div className="text-6xl mb-4">
                    {score === questions.length ? "🏆" : "👏"}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                    Hoàn thành!
                </h4>
                <p className="text-slate-400 mb-6">
                    Bạn trả lời đúng{" "}
                    <strong className="text-violet-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi.
                </p>
                <button
                    onClick={resetQuiz}
                    className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700"
                >
                    Làm lại
                </button>
            </div>
        );
    }
    return (
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col h-full min-h-[390px]">
            <div className="flex justify-between items-center mb-4 text-sm font-medium">
                <span className="text-violet-400">
                    Câu hỏi {currentQ + 1}/{questions.length}
                </span>
                <span className="text-slate-500">Điểm: {score}</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-6 leading-snug">
                {q.question}
            </h4>
            <div className="space-y-3 flex-grow">
                {q.options.map((opt, idx) => {
                    let cls =
                        "w-full text-left p-4 rounded-xl border text-sm transition-all ";
                    if (!showResult)
                        cls +=
                            "border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300";
                    else if (idx === q.correct)
                        cls +=
                            "border-green-500 bg-green-500/10 text-green-400";
                    else if (idx === selected)
                        cls += "border-red-500 bg-red-500/10 text-red-400";
                    else
                        cls +=
                            "border-slate-900 bg-slate-900/50 text-slate-600 opacity-60";
                    return (
                        <button
                            key={idx}
                            onClick={() => handleSelect(idx)}
                            disabled={showResult}
                            className={cls}
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>
            {showResult && (
                <div className="mt-6 pt-6 border-t border-slate-800">
                    <div
                        className={`p-4 rounded-xl text-sm mb-4 ${selected === q.correct ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"}`}
                    >
                        <strong>Giải thích:</strong> {q.explanation}
                    </div>
                    <button
                        onClick={handleNext}
                        className="w-full py-3 bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-xl transition-colors"
                    >
                        {currentQ < questions.length - 1
                            ? "Câu tiếp theo"
                            : "Xem kết quả"}
                    </button>
                </div>
            )}
        </div>
    );
}

function NextLesson() {
    return (
        <div className="text-center pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">
                Bạn đã hiểu chipset và vai trò điều phối. Tiếp theo là Socket
                CPU: LGA, AM4, AM5… vì socket là yếu tố đầu tiên quyết định CPU
                có lắp được vào mainboard hay không.
            </p>
            <Link
                to="/phan-6-4"
                className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-violet-500/20"
            >
                Bài tiếp theo: 6.4 — Socket CPU: LGA, AM4, AM5…{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "violet" }) {
    const colorMap = {
        violet: "bg-violet-500/20 text-violet-300",
        blue: "bg-blue-500/20 text-blue-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        pink: "bg-pink-500/20 text-pink-300",
        orange: "bg-orange-500/20 text-orange-300",
        red: "bg-red-500/20 text-red-300",
    };
    return (
        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <span
                className={`${colorMap[color]} p-2 rounded-xl flex items-center gap-2`}
            >
                <span className="font-black">{number}</span>
                {React.cloneElement(icon, { size: 20 })}
            </span>
            {title}
        </h3>
    );
}
function Tag({ icon, text }) {
    return (
        <span className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700 rounded-full px-3 py-1 text-sm text-slate-300">
            {icon} {text}
        </span>
    );
}
function HeroTile({ icon, label, desc, color, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-blue-500/10 border-blue-400/50" : softBorder(color)}`}
        >
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center mx-auto mb-3`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <h4 className="font-extrabold text-white">{label}</h4>
            <p className="text-xs text-slate-400 mt-1">{desc}</p>
        </div>
    );
}
function RuleCard({ label, value, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-4`}>
            <p className={`${textColor(color)} font-bold text-sm mb-1`}>
                {label}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
        </div>
    );
}
function AnalogyCard({ icon, title, desc, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-3xl p-6`}>
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center mb-4`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
        </div>
    );
}
function InfoCard({ label, value, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-5`}>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                {label}
            </p>
            <p className="text-white font-bold leading-relaxed">{value}</p>
        </div>
    );
}
function Bullet({ text }) {
    return (
        <div className="flex items-start gap-2 text-sm text-slate-300">
            <CheckCircle2
                className="text-green-400 shrink-0 mt-0.5"
                size={16}
            />{" "}
            <span>{text}</span>
        </div>
    );
}
function badgeColor(color) {
    const map = {
        violet: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.violet;
}
function softBorder(color) {
    const map = {
        violet: "bg-violet-500/5 border-violet-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.violet;
}
function textColor(color) {
    const map = {
        violet: "text-violet-300",
        blue: "text-blue-300",
        cyan: "text-cyan-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-violet-300";
}
