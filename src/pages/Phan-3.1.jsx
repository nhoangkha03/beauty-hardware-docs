import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowDown,
    Award,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    Cloud,
    Cpu,
    Database,
    Gauge,
    HardDrive,
    Layers3,
    Lightbulb,
    MemoryStick,
    PackageCheck,
    RefreshCcw,
    Search,
    Settings,
    Timer,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                            <Layers3 className="text-cyan-400" size={24} />
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
                    <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                        Bài 3.1
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <StudyDeskAnalogy />
                <DataLookupFlow />
                <MemoryHierarchyExplorer />
                <SpecsExplorer />
                <VolatileLab />
                <RealExamples />
                <UpgradeAdvisor />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
                        <BookOpen size={16} /> Phần 3: Bộ nhớ — Memory
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Phân cấp bộ nhớ
                        <span className="block text-cyan-400">
                            trong máy tính
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        CPU rất nhanh, nhưng máy vẫn có thể chậm nếu dữ liệu nằm
                        ở tầng bộ nhớ xa hơn. Bài này giúp bạn hiểu vì sao
                        Registers, Cache, RAM, SSD, HDD và Cloud phải cùng tồn
                        tại.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="Registers" />
                        <Tag icon={<Database size={16} />} text="Cache" />
                        <Tag icon={<MemoryStick size={16} />} text="RAM" />
                        <Tag icon={<HardDrive size={16} />} text="SSD / HDD" />
                        <Tag icon={<Cloud size={16} />} text="Cloud / NAS" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="space-y-3">
                        <HeroTier
                            icon={<Cpu />}
                            label="Registers / Cache"
                            desc="Nhanh nhất, nhỏ nhất, gần CPU nhất"
                            color="cyan"
                            highlight
                        />
                        <HeroTier
                            icon={<MemoryStick />}
                            label="RAM"
                            desc="Chứa chương trình đang chạy"
                            color="emerald"
                        />
                        <HeroTier
                            icon={<HardDrive />}
                            label="SSD / HDD"
                            desc="Lưu hệ điều hành, app, game, file"
                            color="orange"
                        />
                        <HeroTier
                            icon={<Cloud />}
                            label="Cloud / NAS / USB"
                            desc="Lưu trữ phụ, sao lưu, chia sẻ"
                            color="blue"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Quy luật</p>
                        <p>
                            <span className="text-cyan-300">Gần CPU</span> →
                            nhanh hơn → nhỏ hơn → đắt hơn
                        </p>
                        <p>
                            <span className="text-orange-300">Xa CPU</span> →
                            chậm hơn → lớn hơn → rẻ hơn
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu phân cấp bộ nhớ là gì và vì sao máy tính cần nhiều tầng bộ nhớ.",
        "Nắm thứ tự CPU tìm dữ liệu: Register → L1 → L2 → L3 → RAM → SSD/HDD → Cloud.",
        "Phân biệt tốc độ, dung lượng, vai trò và khả năng giữ dữ liệu khi tắt máy của từng tầng.",
        "Hiểu latency, bandwidth, capacity, volatile và non-volatile memory.",
        "Biết chẩn đoán cơ bản: máy mở app chậm, thiếu RAM, SSD chậm hay CPU/GPU yếu.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="cyan"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center font-bold mb-4">
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
                color="emerald"
                title="Khái niệm cốt lõi: phân cấp bộ nhớ là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">
                                Phân cấp bộ nhớ
                            </strong>{" "}
                            là cách máy tính sắp xếp nhiều loại bộ nhớ theo thứ
                            tự: nhanh nhất đến chậm hơn, nhỏ nhất đến lớn hơn,
                            đắt nhất đến rẻ hơn.
                        </p>
                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-emerald-300">
                                Vì sao cần phân cấp?
                            </strong>{" "}
                            Không thể làm toàn bộ máy tính bằng bộ nhớ siêu
                            nhanh vì loại đó rất đắt và dung lượng nhỏ.
                        </div>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <Layers3 className="text-emerald-300" /> Quy luật
                            cần nhớ
                        </h3>
                        <div className="space-y-3 font-mono text-sm">
                            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-4 text-cyan-300">
                                Càng gần CPU → càng nhanh → càng nhỏ → càng đắt
                            </div>
                            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 text-orange-300">
                                Càng xa CPU → càng chậm → càng lớn → càng rẻ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StudyDeskAnalogy() {
    const rows = [
        [
            "Thứ bạn đang cầm trên tay",
            "Register / Cache",
            "Nhanh nhất, cực nhỏ",
            "cyan",
        ],
        [
            "Sách đang mở trên bàn",
            "RAM",
            "Nhanh, chứa việc đang làm",
            "emerald",
        ],
        ["Sách cất trong balo", "SSD", "Lưu lâu dài, mở nhanh", "orange"],
        [
            "Sách để trong tủ ở nhà",
            "HDD / lưu trữ ngoài / Cloud",
            "Dung lượng lớn, xa hơn",
            "blue",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: học bài và lấy sách"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="space-y-3">
                    {rows.map(([life, computer, note, color]) => (
                        <div
                            key={life}
                            className="grid md:grid-cols-[1fr_1fr_1fr] gap-3 items-center bg-slate-950 border border-slate-800 rounded-2xl p-4"
                        >
                            <span className="text-slate-300 font-semibold">
                                {life}
                            </span>
                            <span
                                className={`${textColor(color)} font-extrabold`}
                            >
                                {computer}
                            </span>
                            <span className="text-sm text-slate-400">
                                {note}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function DataLookupFlow() {
    const steps = [
        {
            name: "Register",
            icon: <Cpu />,
            desc: "CPU đang xử lý ngay lập tức",
            color: "cyan",
        },
        {
            name: "L1 Cache",
            icon: <Database />,
            desc: "Dữ liệu nóng nhất gần từng nhân",
            color: "fuchsia",
        },
        {
            name: "L2 Cache",
            icon: <Database />,
            desc: "Tầng trung gian giữa L1 và L3",
            color: "purple",
        },
        {
            name: "L3 Cache",
            icon: <Database />,
            desc: "Cache dùng chung cho nhiều nhân",
            color: "blue",
        },
        {
            name: "RAM",
            icon: <MemoryStick />,
            desc: "Chương trình đang chạy",
            color: "emerald",
        },
        {
            name: "SSD / HDD",
            icon: <HardDrive />,
            desc: "File gốc, hệ điều hành, app, game",
            color: "orange",
        },
        {
            name: "Cloud / USB / NAS",
            icon: <Cloud />,
            desc: "Lưu trữ phụ, sao lưu, chia sẻ",
            color: "sky",
        },
    ];
    const [active, setActive] = useState(0);
    const current = steps[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="CPU tìm dữ liệu như thế nào?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[320px] flex flex-col justify-between">
                        <div>
                            <div
                                className={`w-16 h-16 rounded-2xl ${badgeColor(current.color)} flex items-center justify-center mb-5`}
                            >
                                {React.cloneElement(current.icon, { size: 32 })}
                            </div>
                            <p className="text-purple-300 text-sm font-bold mb-2">
                                Tầng {active + 1}/{steps.length}
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {current.name}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {current.desc}
                            </p>
                        </div>
                        <button
                            onClick={() =>
                                setActive((active + 1) % steps.length)
                            }
                            className="mt-6 px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold inline-flex items-center justify-center gap-2"
                        >
                            Tìm tầng tiếp theo <ChevronRight size={18} />
                        </button>
                    </div>
                    <div className="space-y-2">
                        {steps.map((s, i) => (
                            <button
                                key={s.name}
                                onClick={() => setActive(i)}
                                className={`w-full flex items-center gap-4 p-3 rounded-2xl border text-left transition-all ${active === i ? `${softBorder(s.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`}
                            >
                                <div
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${active === i ? badgeColor(s.color) : "bg-slate-900 text-slate-500"}`}
                                >
                                    {i + 1}
                                </div>
                                <div>
                                    <p className="font-bold text-sm">
                                        {s.name}
                                    </p>
                                    <p className="text-xs opacity-75 mt-1">
                                        {s.desc}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-cyan-300">Ví dụ mở Chrome:</strong>{" "}
                    File Chrome nằm trong SSD → hệ điều hành nạp Chrome vào RAM
                    → CPU lấy phần dữ liệu thường dùng vào Cache → CPU đưa dữ
                    liệu cực nhỏ vào Register để xử lý ngay.
                </div>
            </div>
        </section>
    );
}

function MemoryHierarchyExplorer() {
    const tiers = {
        reg: {
            title: "Register",
            speed: "Nhanh nhất",
            capacity: "Rất nhỏ",
            volatile: "Có",
            role: "Chứa dữ liệu CPU đang xử lý ngay",
            example: "Thanh ghi trong CPU",
            color: "cyan",
            icon: <Cpu />,
        },
        l1: {
            title: "L1 Cache",
            speed: "Cực nhanh",
            capacity: "Vài chục KB đến vài trăm KB mỗi nhân",
            volatile: "Có",
            role: "Dữ liệu nóng nhất CPU hay dùng",
            example: "Cache trong CPU",
            color: "fuchsia",
            icon: <Database />,
        },
        l2: {
            title: "L2 Cache",
            speed: "Rất nhanh",
            capacity: "Vài MB",
            volatile: "Có",
            role: "Trung gian giữa L1 và L3",
            example: "Cache trong CPU",
            color: "purple",
            icon: <Database />,
        },
        l3: {
            title: "L3 Cache",
            speed: "Nhanh",
            capacity: "Vài MB đến hàng chục MB",
            volatile: "Có",
            role: "Cache dùng chung cho nhiều nhân CPU",
            example: "Intel Smart Cache, AMD L3 Cache",
            color: "blue",
            icon: <Database />,
        },
        ram: {
            title: "RAM",
            speed: "Nhanh",
            capacity: "8GB, 16GB, 32GB, 64GB",
            volatile: "Có",
            role: "Chứa chương trình đang chạy",
            example: "DDR4, DDR5",
            color: "emerald",
            icon: <MemoryStick />,
        },
        ssd: {
            title: "SSD",
            speed: "Khá nhanh",
            capacity: "500GB, 1TB, 2TB",
            volatile: "Không",
            role: "Lưu hệ điều hành, phần mềm, game, file",
            example: "NVMe SSD, SATA SSD",
            color: "orange",
            icon: <HardDrive />,
        },
        hdd: {
            title: "HDD",
            speed: "Chậm hơn SSD",
            capacity: "1TB đến 20TB+",
            volatile: "Không",
            role: "Lưu dữ liệu lớn, ít cần tốc độ",
            example: "Ổ cứng cơ",
            color: "yellow",
            icon: <HardDrive />,
        },
        cloud: {
            title: "Cloud / NAS / USB",
            speed: "Phụ thuộc kết nối",
            capacity: "Linh hoạt",
            volatile: "Không",
            role: "Lưu trữ phụ, sao lưu, chia sẻ",
            example: "Google Drive, NAS, USB",
            color: "sky",
            icon: <Cloud />,
        },
    };
    const [active, setActive] = useState("ram");
    const item = tiers[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Các tầng bộ nhớ trong máy tính"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {Object.entries(tiers).map(([key, t]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(t.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(t.icon, { size: 20 })}{" "}
                                {t.title}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className={`${textColor(item.color)} font-semibold`}>
                            {item.role}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <InfoCard
                            label="Tốc độ"
                            value={item.speed}
                            color={item.color}
                        />
                        <InfoCard
                            label="Dung lượng thường gặp"
                            value={item.capacity}
                            color={item.color}
                        />
                        <InfoCard
                            label="Tắt máy mất dữ liệu?"
                            value={item.volatile}
                            color={item.color}
                        />
                        <InfoCard
                            label="Ví dụ"
                            value={item.example}
                            color={item.color}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        latency: {
            icon: <Timer />,
            title: "Latency",
            detail: "Độ trễ là thời gian chờ để CPU lấy được dữ liệu.",
            impact: "CPU lấy dữ liệu từ Cache nhanh hơn rất nhiều so với SSD/HDD/Cloud.",
        },
        bandwidth: {
            icon: <Gauge />,
            title: "Bandwidth",
            detail: "Băng thông là lượng dữ liệu có thể truyền trong một khoảng thời gian.",
            impact: "DDR5 thường có băng thông cao hơn DDR4, nhưng còn phụ thuộc CPU/mainboard/tác vụ.",
        },
        capacity: {
            icon: <Database />,
            title: "Capacity",
            detail: "Dung lượng là bộ nhớ chứa được bao nhiêu dữ liệu.",
            impact: "Cache tính bằng MB, RAM thường 8–64GB, SSD/HDD tính bằng TB.",
        },
        volatile: {
            icon: <RefreshCcw />,
            title: "Volatile",
            detail: "Tắt máy là mất dữ liệu.",
            impact: "Register, Cache, RAM thuộc nhóm này.",
        },
        nonvolatile: {
            icon: <HardDrive />,
            title: "Non-volatile",
            detail: "Tắt máy vẫn giữ dữ liệu.",
            impact: "SSD, HDD, USB, Cloud thuộc nhóm này.",
        },
    };
    const [active, setActive] = useState("latency");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
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
                                Tác động thực tế:
                            </strong>{" "}
                            {item.impact}
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-400">
                            Register &lt; Cache &lt; RAM &lt; SSD &lt; HDD &lt;
                            Cloud
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function VolatileLab() {
    const [saved, setSaved] = useState(false);
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="purple"
                title="Lab: vì sao chưa Save mà mất điện có thể mất dữ liệu?"
                icon={<RefreshCcw />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-6 items-center">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 text-center">
                        <div
                            className={`w-20 h-20 rounded-3xl ${saved ? badgeColor("orange") : badgeColor("emerald")} flex items-center justify-center mx-auto mb-5`}
                        >
                            {saved ? (
                                <HardDrive size={38} />
                            ) : (
                                <MemoryStick size={38} />
                            )}
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-2">
                            {saved ? "Đã bấm Save" : "Chưa bấm Save"}
                        </h3>
                        <p className="text-slate-400">
                            {saved
                                ? "Dữ liệu đã được ghi xuống SSD/HDD, tắt máy vẫn giữ."
                                : "Dữ liệu chủ yếu đang nằm trong RAM, tắt máy có thể mất."}
                        </p>
                        <button
                            onClick={() => setSaved(!saved)}
                            className="mt-6 px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold"
                        >
                            {saved
                                ? "Quay lại trạng thái chưa Save"
                                : "Bấm Save"}
                        </button>
                    </div>
                    <div className="space-y-3">
                        <InfoCard
                            label="Volatile Memory"
                            value="Register, Cache, RAM: tắt máy là mất dữ liệu"
                            color="emerald"
                        />
                        <InfoCard
                            label="Non-volatile Memory"
                            value="SSD, HDD, USB, Cloud: tắt máy vẫn giữ dữ liệu"
                            color="orange"
                        />
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-sm text-slate-300">
                            Khi bạn chưa lưu file Word mà mất điện, dữ liệu có
                            thể mất vì nó đang nằm trong RAM. Khi bấm Save, dữ
                            liệu được ghi xuống SSD/HDD nên an toàn hơn.
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
            icon: <Cpu />,
            title: "Intel Core i5-13400F",
            subtitle: "Cache trong CPU",
            color: "cyan",
            points: [
                "20MB Intel Smart Cache",
                "9.5MB L2 Cache",
                "Cache giúp giảm số lần CPU phải chờ RAM",
                "Game dùng dữ liệu lặp lại có thể hưởng lợi",
                "Cache không thay thế RAM/SSD",
            ],
            lesson: "CPU dùng Cache để giữ dữ liệu hay lặp lại, RAM chứa game đang chạy, SSD chứa file game gốc.",
        },
        {
            icon: <MemoryStick />,
            title: "RAM DDR5 16GB 5600MT/s",
            subtitle: "RAM cho chương trình đang chạy",
            color: "emerald",
            points: [
                "Học tập, Word, Excel, web: 8–16GB",
                "Lập trình, Photoshop nhẹ, nhiều tab: 16–32GB",
                "Dựng video, máy ảo, AI local: 32–64GB+",
                "RAM không thay thế SSD",
                "RAM giúp app đang chạy mượt hơn",
            ],
            lesson: "Nâng RAM chỉ cải thiện rõ khi bạn đang thiếu RAM.",
        },
        {
            icon: <HardDrive />,
            title: "SSD NVMe 1TB",
            subtitle: "Lưu hệ điều hành và phần mềm",
            color: "orange",
            points: [
                "Nhanh hơn HDD rất nhiều",
                "Mở máy, mở app, load game nhanh hơn",
                "500GB–1TB là mức phổ biến",
                "SSD không phải RAM",
                "Nên ưu tiên SSD nếu máy còn dùng HDD",
            ],
            lesson: "Nâng từ HDD lên SSD thường tạo cảm giác nhanh hơn rõ rệt nhất khi dùng hằng ngày.",
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

function UpgradeAdvisor() {
    const cases = {
        hdd: {
            icon: <HardDrive />,
            title: "Máy còn dùng HDD",
            answer: "Ưu tiên nâng lên SSD trước. Đây thường là nâng cấp tạo cảm giác nhanh rõ rệt nhất khi mở máy, mở app và load file.",
            color: "orange",
        },
        ram: {
            icon: <MemoryStick />,
            title: "Mở nhiều app bị lag",
            answer: "Kiểm tra dung lượng RAM. Nếu RAM đầy, nâng từ 8GB lên 16GB hoặc 32GB có thể cải thiện rõ.",
            color: "emerald",
        },
        cpu: {
            icon: <Cpu />,
            title: "Game/tính toán yếu",
            answer: "Xem CPU/GPU và cache. Với game, GPU thường rất quan trọng; với tính toán/compile/render, CPU nhiều nhân và RAM cũng quan trọng.",
            color: "cyan",
        },
        storage: {
            icon: <Database />,
            title: "Ổ C gần đầy",
            answer: "Dọn file hoặc nâng SSD dung lượng lớn hơn. Ổ quá đầy có thể làm cập nhật, cache ứng dụng và thao tác file kém mượt.",
            color: "purple",
        },
    };
    const [active, setActive] = useState("hdd");
    const item = cases[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Lab: nên nâng cấp tầng bộ nhớ nào?"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-3 mb-6">
                    {Object.entries(cases).map(([key, s]) => (
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
            wrong: "RAM càng nhiều thì máy càng nhanh",
            right: "RAM chỉ giúp rõ khi bạn thiếu RAM. Nếu tác vụ chỉ dùng 10GB, nâng từ 32GB lên 64GB không làm máy nhanh gấp đôi.",
        },
        {
            wrong: "SSD là RAM",
            right: "RAM chứa dữ liệu đang chạy và tắt máy là mất; SSD lưu dữ liệu lâu dài và tắt máy vẫn giữ.",
        },
        {
            wrong: "CPU mạnh là đủ, không cần quan tâm bộ nhớ",
            right: "CPU mạnh nhưng RAM ít hoặc SSD chậm thì vẫn nghẽn. Máy cân bằng cần CPU, RAM, SSD và Cache tốt.",
        },
    ];
    const tips = [
        "Ưu tiên SSD trước nếu máy còn dùng HDD.",
        "Đừng chỉ nhìn dung lượng RAM, hãy xem cả thế hệ, tốc độ và nền tảng hỗ trợ.",
        "Máy mở app chậm: xem SSD.",
        "Máy mở nhiều app bị lag: xem RAM.",
        "Game hoặc phần mềm tính toán yếu: xem CPU/GPU và cache.",
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
                        <Lightbulb /> Mẹo nâng cấp
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
                        <span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-cyan-300 border border-slate-800 shadow-inner space-y-2">
                            <p>MEMORY HIERARCHY = phân cấp bộ nhớ</p>
                            <br />
                            <p className="text-slate-500">
                                # Thứ tự CPU tìm dữ liệu
                            </p>
                            <p className="text-slate-300">
                                Register → L1 → L2 → L3 → RAM → SSD/HDD → Cloud
                            </p>
                            <br />
                            <p className="text-slate-500"># Vai trò</p>
                            <p className="text-slate-300">
                                SSD/HDD lưu lâu dài
                            </p>
                            <p className="text-slate-300">
                                RAM chứa chương trình đang chạy
                            </p>
                            <p className="text-slate-300">
                                Cache chứa dữ liệu CPU sắp cần
                            </p>
                            <p className="text-slate-300">
                                Register chứa dữ liệu CPU đang xử lý ngay
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
        question: "Tầng bộ nhớ nào gần CPU nhất và nhanh nhất?",
        options: ["HDD", "SSD", "Register", "Cloud"],
        correct: 2,
        explanation:
            "Register nằm trong CPU và chứa dữ liệu CPU đang xử lý ngay, nên là tầng gần CPU nhất và nhanh nhất.",
    },
    {
        question: "RAM thuộc loại bộ nhớ nào?",
        options: [
            "Tắt máy vẫn giữ dữ liệu",
            "Tắt máy là mất dữ liệu",
            "Chỉ dùng để lưu ảnh",
            "Chậm hơn HDD",
        ],
        correct: 1,
        explanation: "RAM là volatile memory: tắt máy là mất dữ liệu.",
    },
    {
        question:
            "Khi CPU không tìm thấy dữ liệu trong Cache, nó thường tìm tiếp ở đâu?",
        options: ["RAM", "Màn hình", "Bàn phím", "Loa"],
        correct: 0,
        explanation:
            "Nếu dữ liệu không có trong cache, CPU thường phải lấy từ RAM hoặc tầng chậm hơn.",
    },
    {
        question: "SSD khác RAM ở điểm nào?",
        options: [
            "SSD lưu dữ liệu lâu dài, RAM tắt máy là mất",
            "SSD nhanh hơn Register",
            "RAM là ổ cứng ngoài",
            "SSD chỉ dùng để phát âm thanh",
        ],
        correct: 0,
        explanation: "SSD là non-volatile storage, còn RAM là volatile memory.",
    },
    {
        question:
            "Máy mở app chậm khi vẫn còn dùng HDD thì nâng cấp nào thường tạo cảm giác nhanh rõ nhất?",
        options: [
            "Nâng HDD lên SSD",
            "Đổi loa",
            "Đổi hình nền",
            "Tăng RGB case",
        ],
        correct: 0,
        explanation:
            "Nâng từ HDD lên SSD thường giúp mở máy, mở app, load file nhanh hơn rõ rệt.",
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
                    <strong className="text-cyan-400">
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
                <span className="text-cyan-400">
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
                        className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu phân cấp bộ nhớ. Tiếp theo là RAM — tầng bộ nhớ quan
                trọng nhất mà người dùng thường trực tiếp nâng cấp để máy chạy
                mượt hơn.
            </p>
            <Link
                to="/phan-3-2"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Bài tiếp theo: 3.2 — RAM: Bộ nhớ truy cập ngẫu nhiên{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
    const colorMap = {
        cyan: "bg-cyan-500/20 text-cyan-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
        blue: "bg-blue-500/20 text-blue-300",
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

function HeroTier({ icon, label, desc, color, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 flex items-center gap-4 ${highlight ? "bg-cyan-500/10 border-cyan-400/50" : softBorder(color)}`}
        >
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center shrink-0`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <div>
                <h4 className="font-extrabold text-white">{label}</h4>
                <p className="text-xs text-slate-400 mt-1">{desc}</p>
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
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        sky: "bg-sky-500/10 text-sky-300 border border-sky-500/20",
        fuchsia:
            "bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.cyan;
}

function softBorder(color) {
    const map = {
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        sky: "bg-sky-500/5 border-sky-500/20",
        fuchsia: "bg-fuchsia-500/5 border-fuchsia-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.cyan;
}

function textColor(color) {
    const map = {
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        blue: "text-blue-300",
        sky: "text-sky-300",
        fuchsia: "text-fuchsia-300",
        purple: "text-purple-300",
        yellow: "text-yellow-300",
        red: "text-red-300",
    };
    return map[color] || "text-cyan-300";
}
