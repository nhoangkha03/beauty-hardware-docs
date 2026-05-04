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
    Gauge,
    HardDrive,
    Laptop,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    PackageCheck,
    Puzzle,
    Search,
    Settings,
    Smartphone,
    Timer,
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
                            <MemoryStick
                                className="text-violet-400"
                                size={24}
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 3: Bộ nhớ — Memory
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-violet-300 bg-violet-400/10 px-3 py-1 rounded-full border border-violet-400/20">
                        Bài 3.3
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <PlugAnalogy />
                <CompatibilityFlow />
                <RamGenerationExplorer />
                <FormFactorSection />
                <SpecsExplorer />
                <RealExamples />
                <CompatibilityLab />
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
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-violet-300">
                        <BookOpen size={16} /> Phần 3: Bộ nhớ — Memory
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Các loại RAM
                        <span className="block text-violet-400">
                            DDR3, DDR4, DDR5, LPDDR
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        RAM không chỉ khác nhau ở dung lượng. DDR3, DDR4, DDR5,
                        SO-DIMM và LPDDR khác chuẩn khe, điện áp, tốc độ, thiết
                        kế mạch và khả năng nâng cấp.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<MemoryStick size={16} />} text="DDR" />
                        <Tag icon={<Zap size={16} />} text="LPDDR" />
                        <Tag icon={<Laptop size={16} />} text="SO-DIMM" />
                        <Tag icon={<Monitor size={16} />} text="DIMM / UDIMM" />
                        <Tag icon={<Gauge size={16} />} text="MT/s" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<MemoryStick />}
                            label="DDR3"
                            desc="Máy cũ"
                            color="orange"
                        />
                        <HeroTile
                            icon={<MemoryStick />}
                            label="DDR4"
                            desc="Phổ biến, giá tốt"
                            color="cyan"
                            highlight
                        />
                        <HeroTile
                            icon={<MemoryStick />}
                            label="DDR5"
                            desc="Đời mới, băng thông cao"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<Laptop />}
                            label="LPDDR"
                            desc="Tiết kiệm điện, thường hàn chết"
                            color="purple"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Quy tắc sống còn</p>
                        <p>
                            <span className="text-cyan-300">Main DDR4</span> +{" "}
                            <span className="text-emerald-300">RAM DDR5</span>
                        </p>
                        <p className="text-red-300">= không cắm được</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu DDR là Double Data Rate và LPDDR là Low Power DDR.",
        "Phân biệt các đời RAM DDR3, DDR4, DDR5 và LPDDR.",
        "Biết vì sao CPU, mainboard và RAM phải cùng hỗ trợ một chuẩn.",
        "Phân biệt DIMM/UDIMM desktop, SO-DIMM laptop/mini PC và LPDDR hàn chết.",
        "Tránh mua nhầm RAM khi nâng cấp: sai DDR, sai form factor, sai khả năng nâng cấp.",
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
                color="cyan"
                title="Khái niệm cốt lõi: các loại RAM là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">DDR</strong> là viết
                            tắt của{" "}
                            <strong className="text-cyan-300">
                                Double Data Rate
                            </strong>
                            , nghĩa là RAM có thể truyền dữ liệu hai lần trong
                            một chu kỳ tín hiệu.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 font-mono text-sm">
                            <p>DDR3 → DDR4 → DDR5</p>
                            <p className="text-slate-400 mt-2">
                                Đời mới thường có băng thông cao hơn, tiết kiệm
                                điện hơn và hỗ trợ dung lượng lớn hơn.
                            </p>
                        </div>
                        <p>
                            <strong className="text-white">LPDDR</strong> là{" "}
                            <strong className="text-emerald-300">
                                Low Power DDR
                            </strong>
                            , RAM tiết kiệm điện cho laptop mỏng nhẹ, smartphone
                            và tablet.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <AlertTriangle className="text-orange-300" /> Điều
                            quan trọng nhất
                        </h3>
                        <div className="space-y-3">
                            <RuleCard
                                label="Đúng chuẩn DDR"
                                value="DDR4 không thay được DDR5"
                                color="red"
                            />
                            <RuleCard
                                label="Đúng dạng thanh"
                                value="DIMM desktop ≠ SO-DIMM laptop"
                                color="orange"
                            />
                            <RuleCard
                                label="Đúng khả năng nâng cấp"
                                value="LPDDR thường hàn chết"
                                color="purple"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PlugAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: ổ cắm điện và cổng Type-C"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                    <AnalogyCard
                        icon={<Puzzle />}
                        title="Không cùng chuẩn"
                        desc="Giống ổ cắm 2 chấu, 3 chấu, Type-C: không đúng chuẩn thì không cắm vừa."
                        color="orange"
                    />
                    <AnalogyCard
                        icon={<MemoryStick />}
                        title="DDR3 / DDR4 / DDR5"
                        desc="Mỗi đời RAM có rãnh khóa, điện áp, cách truyền dữ liệu và thiết kế mạch khác nhau."
                        color="cyan"
                    />
                    <AnalogyCard
                        icon={<Laptop />}
                        title="LPDDR"
                        desc="Giống bản tiết kiệm điện, gọn nhẹ cho thiết bị mỏng, nhưng thường không tháo lắp như thanh RAM."
                        color="emerald"
                    />
                </div>
            </div>
        </section>
    );
}

function CompatibilityFlow() {
    const steps = [
        {
            icon: <Cpu />,
            title: "CPU",
            desc: "Bộ điều khiển bộ nhớ trong CPU phải hỗ trợ chuẩn RAM đó.",
            color: "cyan",
        },
        {
            icon: <Settings />,
            title: "Memory Controller",
            desc: "Điều phối cách CPU giao tiếp với RAM.",
            color: "purple",
        },
        {
            icon: <Monitor />,
            title: "Mainboard / khe RAM",
            desc: "Khe vật lý phải đúng DDR3/DDR4/DDR5 hoặc đúng SO-DIMM.",
            color: "orange",
        },
        {
            icon: <MemoryStick />,
            title: "Thanh RAM",
            desc: "Thanh RAM phải đúng chuẩn, đúng dạng và nằm trong mức tốc độ/dung lượng hỗ trợ.",
            color: "emerald",
        },
    ];
    const [active, setActive] = useState(0);
    const item = steps[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Cơ chế: vì sao có nhiều đời RAM?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 mb-6 text-center font-mono text-sm text-slate-300 space-y-2">
                    <p>CPU</p>
                    <p className="text-slate-600">↓</p>
                    <p>Bộ điều khiển bộ nhớ trong CPU</p>
                    <p className="text-slate-600">↓</p>
                    <p>Mainboard / khe RAM</p>
                    <p className="text-slate-600">↓</p>
                    <p>Thanh RAM DDR3 / DDR4 / DDR5</p>
                </div>
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[290px] flex flex-col justify-between">
                        <div>
                            <div
                                className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                            >
                                {React.cloneElement(item.icon, { size: 32 })}
                            </div>
                            <p className="text-purple-300 text-sm font-bold mb-2">
                                Thành phần {active + 1}/{steps.length}
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {item.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                        <button
                            onClick={() =>
                                setActive((active + 1) % steps.length)
                            }
                            className="mt-6 px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold inline-flex items-center justify-center gap-2"
                        >
                            Tiếp theo <ChevronRight size={18} />
                        </button>
                    </div>
                    <div className="space-y-3">
                        <CompatibilityCase
                            title="CPU hỗ trợ DDR4 + Mainboard DDR4 + RAM DDR4"
                            result="Dùng được"
                            ok
                        />
                        <CompatibilityCase
                            title="Mainboard DDR4 + RAM DDR5"
                            result="Không cắm được"
                        />
                        <CompatibilityCase
                            title="Laptop LPDDR hàn chết + RAM SO-DIMM rời"
                            result="Không nâng cấp bằng thanh rời được"
                        />
                        <CompatibilityCase
                            title="PC desktop DDR5 + RAM SO-DIMM laptop"
                            result="Sai form factor"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function RamGenerationExplorer() {
    const gens = {
        ddr3: {
            title: "DDR3",
            where: "PC/laptop cũ, khoảng Intel Gen 2–4/5, AMD cũ",
            good: "Rẻ nếu mua cũ, đủ cho máy văn phòng cũ",
            bad: "Chậm, đời cũ, khó nâng cấp lâu dài",
            fit: "Máy cũ, học tập/văn phòng nhẹ",
            speed: "1333, 1600, 1866 MT/s",
            voltage: "Khoảng 1.5V; DDR3L khoảng 1.35V",
            color: "orange",
        },
        ddr4: {
            title: "DDR4",
            where: "PC/laptop phổ biến nhiều năm gần đây",
            good: "Giá/hiệu năng tốt, dễ mua, ổn định",
            bad: "Băng thông thấp hơn DDR5",
            fit: "Gaming phổ thông, văn phòng, học tập, lập trình",
            speed: "2400, 2666, 3000, 3200, 3600 MT/s",
            voltage: "Khoảng 1.2V; XMP có thể 1.35V",
            color: "cyan",
        },
        ddr5: {
            title: "DDR5",
            where: "PC/laptop đời mới",
            good: "Băng thông cao, hỗ trợ dung lượng lớn, hợp CPU mới",
            bad: "Giá thường cao hơn, cần main/CPU hỗ trợ",
            fit: "Build PC mới, gaming, đồ họa, workstation",
            speed: "4800, 5200, 5600, 6000+ MT/s",
            voltage: "Khoảng 1.1V mặc định; kit hiệu năng có thể cao hơn",
            color: "emerald",
        },
        lpddr: {
            title: "LPDDR",
            where: "Laptop mỏng nhẹ, smartphone, tablet",
            good: "Tiết kiệm điện, hiệu quả cho pin, gọn",
            bad: "Thường hàn chết, khó hoặc không nâng cấp được",
            fit: "Laptop mỏng nhẹ, thiết bị di động",
            speed: "LPDDR4X, LPDDR5, LPDDR5X tùy thiết bị",
            voltage: "Tối ưu cho tiết kiệm điện",
            color: "purple",
        },
    };
    const [active, setActive] = useState("ddr4");
    const item = gens[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Bảng so sánh DDR3, DDR4, DDR5, LPDDR"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-3 mb-6">
                    {Object.entries(gens).map(([key, g]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(g.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                <MemoryStick size={20} /> {g.title}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            <MemoryStick size={32} />
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-2">
                            {item.title}
                        </h3>
                        <p
                            className={`${textColor(item.color)} font-semibold leading-relaxed`}
                        >
                            {item.where}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <InfoCard
                            label="Ưu điểm"
                            value={item.good}
                            color="emerald"
                        />
                        <InfoCard
                            label="Nhược điểm"
                            value={item.bad}
                            color="orange"
                        />
                        <InfoCard
                            label="Phù hợp"
                            value={item.fit}
                            color="blue"
                        />
                        <InfoCard
                            label="Tốc độ thường gặp"
                            value={item.speed}
                            color={item.color}
                        />
                        <InfoCard
                            label="Điện áp"
                            value={item.voltage}
                            color={item.color}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function FormFactorSection() {
    const forms = [
        {
            icon: <Monitor />,
            title: "DIMM / UDIMM",
            use: "PC desktop",
            detail: "Thanh RAM dài, cắm vào mainboard PC.",
            color: "cyan",
        },
        {
            icon: <Laptop />,
            title: "SO-DIMM",
            use: "Laptop nâng cấp được, mini PC",
            detail: "Thanh ngắn hơn RAM desktop.",
            color: "emerald",
        },
        {
            icon: <Smartphone />,
            title: "LPDDR",
            use: "Laptop mỏng nhẹ, smartphone, tablet",
            detail: "Chip RAM thường hàn trên bo mạch, không tháo lắp như thanh RAM thường.",
            color: "purple",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Phân biệt nhanh theo dạng RAM"
                icon={<Puzzle />}
            />
            <div className="grid md:grid-cols-3 gap-4">
                {forms.map((f) => (
                    <div
                        key={f.title}
                        className={`${softBorder(f.color)} border rounded-3xl p-6`}
                    >
                        <div
                            className={`w-14 h-14 rounded-2xl ${badgeColor(f.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(f.icon, { size: 28 })}
                        </div>
                        <h3 className="text-white font-extrabold text-xl mb-2">
                            {f.title}
                        </h3>
                        <p
                            className={`${textColor(f.color)} font-semibold mb-3`}
                        >
                            {f.use}
                        </p>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            {f.detail}
                        </p>
                    </div>
                ))}
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 font-mono text-sm text-slate-300 text-center space-y-2">
                <p>PC desktop → thường dùng DIMM / UDIMM</p>
                <p>Laptop nâng cấp được → thường dùng SO-DIMM</p>
                <p>Laptop mỏng nhẹ cao cấp → thường dùng LPDDR hàn chết</p>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        generation: {
            icon: <MemoryStick />,
            title: "Đời RAM",
            detail: "DDR3, DDR4, DDR5, LPDDR là thông số phải kiểm tra đầu tiên.",
            impact: "Một thanh 16GB DDR5 không thay được 16GB DDR4 nếu mainboard chỉ hỗ trợ DDR4.",
        },
        speed: {
            icon: <Gauge />,
            title: "Tốc độ MT/s",
            detail: "MT/s là số lần truyền dữ liệu mỗi giây. DDR4-3200 nghĩa là khoảng 3200 MT/s.",
            impact: "Người bán hay ghi MHz, nhưng với RAM DDR hiện đại, MT/s thường chính xác hơn.",
        },
        voltage: {
            icon: <Zap />,
            title: "Điện áp",
            detail: "RAM đời mới thường dùng điện áp thấp hơn đời cũ.",
            impact: "Điện áp thấp giúp tiết kiệm điện và giảm nhiệt, rất quan trọng với laptop.",
        },
        form: {
            icon: <Laptop />,
            title: "Form factor",
            detail: "DIMM desktop khác SO-DIMM laptop; LPDDR thường hàn trên bo mạch.",
            impact: "Đây là lỗi người mới rất hay mua nhầm.",
        },
        compatibility: {
            icon: <Settings />,
            title: "Tương thích",
            detail: "Phải kiểm tra CPU, mainboard, khe RAM, tốc độ và dung lượng tối đa hỗ trợ.",
            impact: "Có laptop DDR5 SO-DIMM nâng cấp được, nhưng cũng có laptop LPDDR5 hàn chết.",
        },
    };
    const [active, setActive] = useState("generation");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số kỹ thuật quan trọng"
                icon={<Settings />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
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
                                Cách hiểu thực tế:
                            </strong>{" "}
                            {item.impact}
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-sm text-slate-400">
                            Checklist: Mainboard hỗ trợ DDR mấy? CPU hỗ trợ DDR
                            mấy? Laptop có khe RAM hay RAM hàn chết? Tốc độ/dung
                            lượng tối đa là bao nhiêu?
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Monitor />,
            title: "Corsair Vengeance LPX 16GB DDR4-3200",
            subtitle: "RAM DDR4 desktop phổ biến",
            color: "cyan",
            points: [
                "Kit 2 x 8GB",
                "DDR4-3200",
                "Độ trễ C16 / 16-18-18-36",
                "Điện áp thử nghiệm 1.35V",
                "Dạng UDIMM 288-pin",
            ],
            lesson: "Phù hợp PC DDR4 văn phòng, học tập, gaming phổ thông và cấu hình Ryzen 5 3600/5600 với main B450/B550.",
        },
        {
            icon: <Laptop />,
            title: "Crucial 16GB DDR5-5600 SO-DIMM",
            subtitle: "RAM DDR5 laptop",
            color: "emerald",
            points: [
                "Dung lượng 16GB",
                "DDR5-5600",
                "SO-DIMM laptop",
                "CL46",
                "Điện áp 1.1V",
            ],
            lesson: "Phù hợp laptop/mini PC có khe DDR5 SO-DIMM; không dùng cho laptop DDR4 hoặc LPDDR hàn chết.",
        },
        {
            icon: <Laptop />,
            title: "Kingston FURY Impact 32GB DDR5-5600",
            subtitle: "Kit SO-DIMM hiệu năng cao",
            color: "purple",
            points: [
                "Kit 2 x 16GB",
                "DDR5 SO-DIMM",
                "5600 MT/s / PC5-44800",
                "Dùng cho laptop gaming, mini PC hiệu năng cao",
                "Cần kiểm tra laptop hỗ trợ dung lượng/tốc độ",
            ],
            lesson: "RAM laptop hiệu năng cao vẫn phải đúng chuẩn DDR5 SO-DIMM và đúng giới hạn máy hỗ trợ.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
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

function CompatibilityLab() {
    const scenarios = {
        desktopDdr4: {
            icon: <Monitor />,
            title: "PC B450/B550 DDR4",
            answer: "Chọn RAM DDR4 UDIMM/DIMM. Ví dụ 2 x 8GB DDR4-3200 hoặc 2 x 16GB DDR4-3200/3600 nếu main/CPU hỗ trợ.",
            color: "cyan",
        },
        desktopDdr5: {
            icon: <Monitor />,
            title: "PC desktop DDR5",
            answer: "Chọn RAM DDR5 UDIMM. Đừng mua DDR4 dù dung lượng giống nhau, vì không cắm được vào khe DDR5.",
            color: "emerald",
        },
        laptopDdr5: {
            icon: <Laptop />,
            title: "Laptop có khe DDR5 SO-DIMM",
            answer: "Chọn RAM DDR5 SO-DIMM đúng tốc độ/dung lượng tối đa máy hỗ trợ. RAM desktop UDIMM không dùng được.",
            color: "blue",
        },
        lpddr: {
            icon: <Smartphone />,
            title: "Laptop LPDDR hàn chết",
            answer: "Thường không nâng cấp được RAM sau mua. Cần chọn đủ RAM ngay từ lúc mua máy.",
            color: "purple",
        },
        oldDdr3: {
            icon: <HardDrive />,
            title: "Máy cũ DDR3",
            answer: "Có thể nâng RAM DDR3 nếu cần, nhưng nên cân nhắc nâng SSD hoặc đổi nền tảng nếu máy quá cũ.",
            color: "orange",
        },
    };
    const [active, setActive] = useState("desktopDdr4");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Lab: chọn đúng RAM cho đúng máy"
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
            wrong: "RAM DDR5 chắc chắn cắm được vào máy DDR4",
            right: "Không cắm được. DDR4 và DDR5 khác khe, rãnh khóa, điện áp và cách giao tiếp.",
        },
        {
            wrong: "Laptop nào cũng nâng cấp RAM được",
            right: "Không phải. Laptop có thể có khe SO-DIMM, RAM hàn + 1 khe, hoặc LPDDR hàn chết không nâng cấp được.",
        },
        {
            wrong: "Tốc độ RAM càng cao thì máy nào cũng chạy đúng tốc độ đó",
            right: "Tốc độ thực tế phụ thuộc CPU, mainboard, BIOS và XMP/EXPO.",
        },
        {
            wrong: "LPDDR là RAM yếu",
            right: "LPDDR tối ưu tiết kiệm điện và thiết kế mỏng nhẹ; nhiều LPDDR5/LPDDR5X rất nhanh nhưng thường không nâng cấp được.",
        },
    ];
    const tips = [
        "Trước khi mua RAM, kiểm tra đúng 4 thứ: DDR mấy, desktop/laptop, dung lượng tối đa, còn khe nâng cấp hay không.",
        "Với PC cũ DDR3, cân nhắc nâng SSD hoặc đổi nền tảng nếu máy quá cũ.",
        "Với PC DDR4, 16GB vẫn dùng tốt; 32GB thoải mái hơn cho đa nhiệm.",
        "Với laptop LPDDR, hãy chọn đủ RAM ngay từ lúc mua.",
        "Đừng mua RAM chỉ theo thương hiệu; hãy xem chuẩn cụ thể như DDR4 SO-DIMM 3200 hoặc DDR5 UDIMM 5600.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
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
                        <Lightbulb /> Mẹo chọn RAM
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
                            11
                        </span>
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-violet-300 border border-slate-800 shadow-inner space-y-2">
                            <p>DDR = Double Data Rate</p>
                            <p className="text-slate-300">DDR3 → DDR4 → DDR5</p>
                            <br />
                            <p className="text-slate-500"># LPDDR</p>
                            <p className="text-slate-300">
                                Low Power DDR = tiết kiệm điện, thường dùng
                                laptop mỏng nhẹ / smartphone / tablet
                            </p>
                            <br />
                            <p className="text-slate-500"># Form factor</p>
                            <p className="text-slate-300">
                                Desktop = DIMM / UDIMM
                            </p>
                            <p className="text-slate-300">
                                Laptop nâng cấp = SO-DIMM
                            </p>
                            <p className="text-slate-300">
                                Laptop mỏng nhẹ = LPDDR hàn chết
                            </p>
                            <br />
                            <p className="text-red-300">
                                DDR3, DDR4, DDR5 không tương thích vật lý và
                                điện tử với nhau.
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
        question: "RAM DDR4 có cắm được vào khe DDR5 không?",
        options: [
            "Có, nếu cùng dung lượng",
            "Có, nếu cùng hãng",
            "Không",
            "Có, nếu bật XMP",
        ],
        correct: 2,
        explanation:
            "DDR4 và DDR5 khác khe, rãnh khóa, điện áp và cách giao tiếp nên không cắm lẫn được.",
    },
    {
        question: "LPDDR thường gặp nhiều nhất ở đâu?",
        options: [
            "Máy bàn gaming full tower",
            "Laptop mỏng nhẹ, smartphone, tablet",
            "Ổ cứng HDD",
            "Nguồn máy tính PSU",
        ],
        correct: 1,
        explanation:
            "LPDDR là Low Power DDR, tối ưu tiết kiệm điện cho laptop mỏng nhẹ, smartphone và tablet.",
    },
    {
        question: "RAM SO-DIMM thường dùng cho thiết bị nào?",
        options: [
            "PC desktop thông thường",
            "Laptop và mini PC",
            "Màn hình",
            "Card đồ họa rời",
        ],
        correct: 1,
        explanation:
            "SO-DIMM là dạng RAM ngắn hơn, thường dùng cho laptop nâng cấp được và mini PC.",
    },
    {
        question: "Khi mua RAM, thông số nào phải kiểm tra đầu tiên?",
        options: [
            "Màu heatsink",
            "Đời RAM: DDR3/DDR4/DDR5/LPDDR",
            "Logo thương hiệu",
            "Đèn RGB",
        ],
        correct: 1,
        explanation:
            "Đời RAM là thông số phải kiểm tra đầu tiên vì sai chuẩn là không dùng được.",
    },
    {
        question:
            "Laptop dùng LPDDR hàn chết thì nâng RAM bằng thanh SO-DIMM có được không?",
        options: [
            "Thường không được",
            "Luôn được",
            "Chỉ cần dùng tua vít lớn",
            "Được nếu cùng màu",
        ],
        correct: 0,
        explanation:
            "LPDDR thường hàn trên bo mạch và không tháo lắp như thanh SO-DIMM thông thường.",
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
                Bạn đã hiểu DDR3, DDR4, DDR5, LPDDR và các dạng
                DIMM/SO-DIMM/LPDDR. Tiếp theo là học cách đọc thông số RAM như
                16GB DDR4-3200 CL16 hoặc 32GB DDR5-6000 CL30.
            </p>
            <Link
                to="/phan-3-4"
                className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-violet-500/20"
            >
                Bài tiếp theo: 3.4 — Thông số RAM: dung lượng, tốc độ, độ trễ CL{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "violet" }) {
    const colorMap = {
        violet: "bg-violet-500/20 text-violet-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
        blue: "bg-blue-500/20 text-blue-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        pink: "bg-pink-500/20 text-pink-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-cyan-500/10 border-cyan-400/50" : softBorder(color)}`}
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
            <p className={`${textColor(color)} font-bold text-sm`}>{label}</p>
            <p className="text-sm text-slate-300 mt-1">{value}</p>
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

function CompatibilityCase({ title, result, ok }) {
    return (
        <div
            className={`rounded-2xl border p-4 ${ok ? "bg-emerald-500/5 border-emerald-500/20" : "bg-red-500/5 border-red-500/20"}`}
        >
            <div className="flex items-start gap-3">
                {ok ? (
                    <CheckCircle2
                        className="text-emerald-400 shrink-0 mt-0.5"
                        size={18}
                    />
                ) : (
                    <XCircle
                        className="text-red-400 shrink-0 mt-0.5"
                        size={18}
                    />
                )}
                <div>
                    <p className="text-white font-bold text-sm">{title}</p>
                    <p
                        className={`text-sm mt-1 ${ok ? "text-emerald-300" : "text-red-300"}`}
                    >
                        {result}
                    </p>
                </div>
            </div>
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
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.violet;
}

function softBorder(color) {
    const map = {
        violet: "bg-violet-500/5 border-violet-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.violet;
}

function textColor(color) {
    const map = {
        violet: "text-violet-300",
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-violet-300";
}
