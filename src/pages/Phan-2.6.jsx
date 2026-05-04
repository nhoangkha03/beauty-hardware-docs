import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowDown,
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
    PackageCheck,
    Puzzle,
    Search,
    Settings,
    Sparkles,
    Timer,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-fuchsia-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-400/30 flex items-center justify-center shadow-lg shadow-fuchsia-500/10">
                            <Database className="text-fuchsia-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 2: CPU – Bộ xử lý trung tâm
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-fuchsia-300 bg-fuchsia-400/10 px-3 py-1 rounded-full border border-fuchsia-400/20">
                        Bài 2.6
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CacheConcept />
                <DeskAnalogy />
                <MemoryHierarchy />
                <CacheHitMissSimulator />
                <CacheLevelsExplorer />
                <SpecsExplorer />
                <RealExamples />
                <GamingCacheLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-fuchsia-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-fuchsia-300">
                        <BookOpen size={16} /> Phần 2: CPU – Bộ xử lý trung tâm
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Bộ nhớ đệm CPU
                        <span className="block text-fuchsia-400">
                            L1, L2, L3 Cache
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Cache là vùng nhớ cực nhanh nằm trong hoặc gần CPU, chứa
                        tạm lệnh và dữ liệu có khả năng dùng lại sớm để CPU ít
                        phải chờ RAM hơn.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Database size={16} />} text="CPU Cache" />
                        <Tag icon={<Zap size={16} />} text="Cache Hit" />
                        <Tag
                            icon={<AlertTriangle size={16} />}
                            text="Cache Miss"
                        />
                        <Tag icon={<Layers3 size={16} />} text="L1 / L2 / L3" />
                        <Tag icon={<Sparkles size={16} />} text="3D V-Cache" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="space-y-3">
                        <HeroCacheCard
                            icon={<Cpu />}
                            label="CPU"
                            desc="Cần dữ liệu cực nhanh"
                            color="fuchsia"
                            highlight
                        />
                        <HeroCacheCard
                            icon={<Database />}
                            label="L1 → L2 → L3"
                            desc="Các tầng cache trong CPU"
                            color="cyan"
                        />
                        <HeroCacheCard
                            icon={<MemoryStick />}
                            label="RAM"
                            desc="Lớn hơn nhưng chậm hơn cache"
                            color="emerald"
                        />
                        <HeroCacheCard
                            icon={<HardDrive />}
                            label="SSD/HDD"
                            desc="Lưu trữ lâu dài, chậm hơn RAM"
                            color="orange"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Ghi nhớ</p>
                        <p>
                            <span className="text-fuchsia-300">Cache</span>{" "}
                            không thay CPU
                        </p>
                        <p>
                            <span className="text-cyan-300">Cache</span> không
                            thay RAM
                        </p>
                        <p className="text-slate-300">
                            Cache giúp CPU ít phải chờ dữ liệu hơn
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu CPU Cache là gì và vì sao CPU cần cache.",
        "Nắm thứ tự truy cập dữ liệu: Registers → L1 → L2 → L3 → RAM → SSD/HDD.",
        "Phân biệt Cache Hit và Cache Miss.",
        "So sánh vai trò L1, L2, L3 Cache.",
        "Biết đọc thông số cache và tránh sai lầm “cache càng nhiều luôn càng mạnh”.",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="fuchsia"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-fuchsia-500/50 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 text-fuchsia-300 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
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

function CacheConcept() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: CPU Cache là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6 items-start">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">CPU Cache</strong>,
                            hay bộ nhớ đệm CPU, là vùng bộ nhớ tốc độ rất cao
                            nằm bên trong hoặc rất gần CPU.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-cyan-300">Nhiệm vụ:</strong>{" "}
                            lưu tạm lệnh và dữ liệu CPU có khả năng sẽ dùng lại
                            sớm để giảm thời gian chờ RAM.
                        </div>
                        <p>
                            CPU nhanh hơn RAM rất nhiều. Nếu lần nào cũng phải
                            xuống RAM lấy dữ liệu, CPU giống người làm việc cực
                            nhanh nhưng phải liên tục đứng chờ tài liệu.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <Zap className="text-cyan-300" /> Hai tình huống
                            quan trọng
                        </h3>
                        <div className="space-y-4">
                            <MiniCard
                                icon={<CheckCircle2 />}
                                title="Cache Hit"
                                desc="CPU tìm thấy dữ liệu trong cache → xử lý nhanh."
                                color="emerald"
                            />
                            <MiniCard
                                icon={<XCircle />}
                                title="Cache Miss"
                                desc="CPU không tìm thấy trong cache → phải xuống RAM hoặc tầng chậm hơn."
                                color="red"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function DeskAnalogy() {
    const rows = [
        [
            "Registers",
            "Mảnh giấy đang cầm trên tay",
            "Nhanh nhất",
            "Rất nhỏ",
            "emerald",
        ],
        [
            "L1 Cache",
            "Đồ để ngay trước mặt",
            "Rất rất nhanh",
            "Rất nhỏ",
            "fuchsia",
        ],
        ["L2 Cache", "Ngăn kéo cạnh bàn", "Rất nhanh", "Nhỏ", "cyan"],
        [
            "L3 Cache",
            "Tủ nhỏ trong phòng làm việc",
            "Nhanh",
            "Lớn hơn L1/L2",
            "blue",
        ],
        [
            "RAM",
            "Bàn làm việc lớn",
            "Chậm hơn cache",
            "Lớn hơn nhiều",
            "yellow",
        ],
        [
            "SSD/HDD",
            "Tủ/kho lưu trữ",
            "Chậm hơn RAM nhiều",
            "Rất lớn",
            "orange",
        ],
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: ngăn kéo cạnh bàn"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 mb-6 leading-relaxed">
                    Những thứ hay dùng thì để gần tay. Những thứ ít dùng hơn để
                    xa hơn. Máy tính cũng tổ chức bộ nhớ theo nguyên tắc: càng
                    gần CPU thì càng nhanh nhưng càng nhỏ.
                </p>
                <div className="space-y-3">
                    {rows.map(([name, analogy, speed, size, color]) => (
                        <div
                            key={name}
                            className="grid md:grid-cols-[0.8fr_1.2fr_0.8fr_0.8fr] gap-3 items-center bg-slate-950 border border-slate-800 rounded-2xl p-4"
                        >
                            <span
                                className={`${textColor(color)} font-extrabold`}
                            >
                                {name}
                            </span>
                            <span className="text-sm text-slate-300">
                                {analogy}
                            </span>
                            <span className="text-sm text-slate-400">
                                {speed}
                            </span>
                            <span className="text-sm text-slate-400">
                                {size}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function MemoryHierarchy() {
    const levels = [
        {
            name: "Registers",
            desc: "Dữ liệu đang xử lý tức thời",
            color: "emerald",
        },
        {
            name: "L1 Cache",
            desc: "Gần nhân nhất, nhanh nhất trong cache",
            color: "fuchsia",
        },
        {
            name: "L2 Cache",
            desc: "Tầng trung gian, lớn hơn L1",
            color: "cyan",
        },
        {
            name: "L3 Cache",
            desc: "Lớn nhất trong CPU, thường dùng chung",
            color: "blue",
        },
        {
            name: "RAM",
            desc: "Bộ nhớ hệ thống, lớn hơn nhưng chậm hơn cache",
            color: "yellow",
        },
        {
            name: "SSD / HDD",
            desc: "Lưu trữ lâu dài, lớn nhất nhưng chậm hơn RAM",
            color: "orange",
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="blue"
                title="Sơ đồ phân cấp bộ nhớ"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="max-w-xl mx-auto space-y-3">
                    {levels.map((l, index) => (
                        <React.Fragment key={l.name}>
                            <div
                                className={`${softBorder(l.color)} border rounded-2xl p-4 text-center`}
                            >
                                <h3 className="font-extrabold text-white">
                                    {l.name}
                                </h3>
                                <p className="text-sm text-slate-400 mt-1">
                                    {l.desc}
                                </p>
                            </div>
                            {index < levels.length - 1 && (
                                <ArrowDown className="text-slate-600 mx-auto" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300 text-center">
                    CPU cần dữ liệu → Registers → L1 → L2 → L3 → RAM → SSD/HDD
                </div>
            </div>
        </section>
    );
}

function CacheHitMissSimulator() {
    const cases = [
        {
            data: "Dữ liệu A",
            path: ["Registers", "L1 Cache"],
            result: "Cache Hit",
            desc: "CPU tìm thấy dữ liệu ngay ở L1 Cache nên xử lý rất nhanh.",
            color: "emerald",
        },
        {
            data: "Dữ liệu B",
            path: ["Registers", "L1 Cache", "L2 Cache", "L3 Cache", "RAM"],
            result: "Cache Miss",
            desc: "L1/L2/L3 đều không có, CPU phải xuống RAM nên chậm hơn.",
            color: "red",
        },
        {
            data: "Dữ liệu C",
            path: ["Registers", "L1 Cache", "L2 Cache"],
            result: "L2 Hit",
            desc: "L1 không có nhưng L2 có. Vẫn nhanh hơn nhiều so với xuống RAM.",
            color: "cyan",
        },
        {
            data: "Dữ liệu map game",
            path: ["Registers", "L1 Cache", "L2 Cache", "L3 Cache"],
            result: "L3 Hit",
            desc: "Dữ liệu dùng lặp lại có trong L3, nhiều nhân có thể lấy nhanh hơn thay vì xuống RAM.",
            color: "blue",
        },
    ];

    const [index, setIndex] = useState(0);
    const item = cases[index];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="purple"
                title="Mô phỏng: Cache Hit và Cache Miss"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="flex flex-wrap gap-3 mb-6">
                    {cases.map((c, i) => (
                        <button
                            key={c.data}
                            onClick={() => setIndex(i)}
                            className={`px-4 py-2 rounded-xl border font-bold transition-all ${index === i ? `${softBorder(c.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`}
                        >
                            {c.data}
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 text-center">
                        <div
                            className={`w-20 h-20 rounded-3xl ${badgeColor(item.color)} flex items-center justify-center mx-auto mb-5`}
                        >
                            {item.result.includes("Miss") ? (
                                <XCircle size={38} />
                            ) : (
                                <CheckCircle2 size={38} />
                            )}
                        </div>
                        <h3
                            className={`text-3xl font-extrabold ${textColor(item.color)} mb-2`}
                        >
                            {item.result}
                        </h3>
                        <p className="text-slate-400">{item.desc}</p>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <p className="text-slate-500 font-bold text-sm mb-4">
                            Đường đi tìm dữ liệu
                        </p>
                        <div className="space-y-3">
                            {item.path.map((p, i) => (
                                <div
                                    key={p}
                                    className="flex items-center gap-3"
                                >
                                    <div
                                        className={`w-9 h-9 rounded-xl ${i === item.path.length - 1 ? badgeColor(item.color) : "bg-slate-900 text-slate-400 border border-slate-800"} flex items-center justify-center font-bold text-sm`}
                                    >
                                        {i + 1}
                                    </div>
                                    <div
                                        className={`flex-1 rounded-xl p-3 border ${i === item.path.length - 1 ? softBorder(item.color) : "bg-slate-900 border-slate-800"}`}
                                    >
                                        <span className="text-white font-semibold">
                                            {p}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CacheLevelsExplorer() {
    const levels = {
        l1: {
            icon: <Zap />,
            title: "L1 Cache",
            subtitle: "Nhanh nhất, nhỏ nhất",
            location: "Gần từng nhân CPU nhất",
            size: "Thường tính bằng KB",
            role: "Giữ lệnh/dữ liệu cực hay dùng",
            detail: "L1 thường chia thành L1 Instruction Cache chứa lệnh và L1 Data Cache chứa dữ liệu.",
            color: "fuchsia",
        },
        l2: {
            icon: <Timer />,
            title: "L2 Cache",
            subtitle: "Tầng trung gian quan trọng",
            location: "Gần từng nhân hoặc cụm nhân",
            size: "Hàng trăm KB đến vài MB",
            role: "Đệm giữa L1 và L3/RAM",
            detail: "Nếu L1 không có dữ liệu, CPU kiểm tra L2. L2 có dữ liệu vẫn nhanh hơn nhiều so với đi xuống RAM.",
            color: "cyan",
        },
        l3: {
            icon: <Layers3 />,
            title: "L3 Cache",
            subtitle: "Lớn nhất trong CPU",
            location: "Thường dùng chung giữa nhiều nhân",
            size: "Tính bằng MB, lớn hơn L1/L2",
            role: "Chia sẻ dữ liệu cho nhiều nhân",
            detail: "L3 rất hữu ích cho game, đa nhiệm, ứng dụng dùng dữ liệu lặp và tác vụ cần nhiều nhân chia sẻ dữ liệu.",
            color: "blue",
        },
    };

    const [active, setActive] = useState("l3");
    const item = levels[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="fuchsia"
                title="Các loại CPU Cache: L1, L2, L3"
                icon={<Database />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {Object.entries(levels).map(([key, l]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(l.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(l.icon, { size: 20 })}{" "}
                                {l.title}
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
                        <h3 className="text-2xl font-extrabold text-white mb-1">
                            {item.title}
                        </h3>
                        <p className={`${textColor(item.color)} font-semibold`}>
                            {item.subtitle}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <InfoCard
                            label="Vị trí"
                            value={item.location}
                            color={item.color}
                        />
                        <InfoCard
                            label="Dung lượng"
                            value={item.size}
                            color={item.color}
                        />
                        <InfoCard
                            label="Vai trò"
                            value={item.role}
                            color={item.color}
                        />
                        <InfoCard
                            label="Ghi nhớ"
                            value={item.detail}
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
        l1: {
            icon: <Zap />,
            title: "L1 Cache Size",
            detail: "Dung lượng cache gần nhân nhất.",
            impact: "Ảnh hưởng tốc độ lấy lệnh/dữ liệu cực gần.",
        },
        l2: {
            icon: <Database />,
            title: "L2 Cache Size",
            detail: "Dung lượng cache tầng giữa.",
            impact: "Giúp giảm số lần phải xuống L3 hoặc RAM.",
        },
        l3: {
            icon: <Layers3 />,
            title: "L3 Cache Size",
            detail: "Cache lớn thường dùng chung.",
            impact: "Có thể ảnh hưởng rõ trong game và một số ứng dụng.",
        },
        latency: {
            icon: <Timer />,
            title: "Cache Latency",
            detail: "Độ trễ truy cập cache.",
            impact: "Độ trễ càng thấp, CPU chờ càng ít.",
        },
        hitrate: {
            icon: <CheckCircle2 />,
            title: "Cache Hit Rate",
            detail: "Tỷ lệ tìm thấy dữ liệu trong cache.",
            impact: "Hit rate cao giúp hiệu năng tốt hơn.",
        },
        shared: {
            icon: <Workflow />,
            title: "Shared Cache",
            detail: "Cache dùng chung giữa nhiều nhân.",
            impact: "Giúp các nhân trao đổi dữ liệu hiệu quả hơn.",
        },
        policy: {
            icon: <Settings />,
            title: "Inclusive / Exclusive",
            detail: "Cách dữ liệu được tổ chức giữa các tầng cache.",
            impact: "Ảnh hưởng hiệu quả sử dụng cache; người mới chỉ cần biết khái niệm.",
        },
        x3d: {
            icon: <Sparkles />,
            title: "3D V-Cache",
            detail: "Công nghệ xếp thêm cache theo chiều dọc.",
            impact: "Tăng L3 Cache, đặc biệt có lợi cho nhiều game.",
        },
    };

    const [active, setActive] = useState("l3");
    const item = specs[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số kỹ thuật cache cần biết"
                icon={<Settings />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(specs).map(([key, s]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center transition-all ${
                                active === key
                                    ? "bg-yellow-500 text-slate-950 shadow-lg shadow-yellow-500/10"
                                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                            }`}
                        >
                            {React.cloneElement(s.icon, { size: 20 })}
                            <span className="font-bold text-xs">{s.title}</span>
                        </button>
                    ))}
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center mb-5 border border-yellow-500/20">
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className="text-sm text-yellow-300 font-semibold">
                            Thông số liên quan cache
                        </p>
                    </div>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                        <p>{item.detail}</p>
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-yellow-300">
                                Tác động thực tế:
                            </strong>{" "}
                            {item.impact}
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-sm text-slate-400">
                            <strong className="text-white">Ghi nhớ:</strong>{" "}
                            Cache lớn hơn không luôn mạnh hơn; cache nhanh hơn,
                            kiến trúc tốt và phần mềm tận dụng được mới tạo hiệu
                            năng thực tế tốt.
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
            title: "Intel Core i5-12400F",
            subtitle: "Cache đủ tốt cho PC phổ thông",
            points: [
                "6 nhân / 12 luồng",
                "Turbo tối đa 4.40GHz",
                "18MB Intel Smart Cache",
                "7.5MB L2 Cache",
                "Phù hợp gaming Full HD, học tập, văn phòng nặng",
            ],
            lesson: "Cache giúp CPU giảm số lần phải truy cập RAM, nhưng trải nghiệm còn phụ thuộc GPU, RAM, SSD và tản nhiệt.",
            color: "orange",
        },
        {
            icon: <Cpu />,
            title: "AMD Ryzen 5 5600",
            subtitle: "L3 Cache 32MB",
            points: [
                "6 nhân / 12 luồng",
                "Base 3.5GHz, boost 4.4GHz",
                "L2 6×512KB",
                "L3 32MB",
                "Cân bằng tốt cho PC gaming tiết kiệm",
            ],
            lesson: "L3 32MB có lợi cho nhiều game và tác vụ dùng dữ liệu lặp lại.",
            color: "emerald",
        },
        {
            icon: <Sparkles />,
            title: "AMD Ryzen 7 7800X3D",
            subtitle: "3D V-Cache cho gaming",
            points: [
                "8 nhân / 16 luồng",
                "Cache rất lớn",
                "Công nghệ 3D V-Cache",
                "Tập trung mạnh vào gaming",
                "Không phải tối ưu nhất cho mọi workstation",
            ],
            lesson: "Game thường truy cập lại dữ liệu map, AI, vật lý, trạng thái game; L3 lớn giúp giữ nhiều dữ liệu gần CPU hơn.",
            color: "fuchsia",
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
                                <div
                                    key={p}
                                    className="flex items-start gap-2 text-sm text-slate-300"
                                >
                                    <CheckCircle2
                                        className="text-green-400 shrink-0 mt-0.5"
                                        size={16}
                                    />{" "}
                                    {p}
                                </div>
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

function GamingCacheLab() {
    const [scene, setScene] = useState("hit");
    const scenes = {
        hit: {
            icon: <Gamepad2 />,
            title: "Game có dữ liệu lặp lại",
            detail: "Vị trí nhân vật, map, AI, vật lý, trạng thái game được truy cập nhiều lần.",
            result: "L3 Cache lớn có thể giữ nhiều dữ liệu gần CPU hơn → giảm truy cập RAM → FPS và 1% low ổn định hơn trong nhiều game.",
            color: "emerald",
        },
        miss: {
            icon: <AlertTriangle />,
            title: "Dữ liệu không nằm trong cache",
            detail: "CPU phải đi xuống RAM lấy dữ liệu thường xuyên.",
            result: "Độ trễ tăng, CPU có thể phải chờ; hiệu năng giảm ở tác vụ nhạy với latency.",
            color: "red",
        },
        notalways: {
            icon: <Puzzle />,
            title: "Không phải tác vụ nào cũng hưởng lợi lớn",
            detail: "Render CPU nặng hoặc workstation đôi khi cần nhiều nhân hơn cache lớn.",
            result: "CPU X3D rất mạnh cho game, nhưng không phải lựa chọn tối ưu nhất cho mọi công việc.",
            color: "orange",
        },
    };
    const item = scenes[scene];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="purple"
                title="Lab: vì sao cache lớn có lợi cho game?"
                icon={<Gamepad2 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {Object.entries(scenes).map(([key, s]) => (
                        <button
                            key={key}
                            onClick={() => setScene(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${scene === key ? `${softBorder(s.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(s.icon, { size: 20 })}{" "}
                                {s.title}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-14 h-14 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(item.icon, { size: 28 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                            {item.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {item.detail}
                        </p>
                    </div>
                    <div
                        className={`${softBorder(item.color)} border rounded-3xl p-6 flex items-center`}
                    >
                        <p className="text-slate-300 leading-relaxed">
                            <strong className={textColor(item.color)}>
                                Kết quả:
                            </strong>{" "}
                            {item.result}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CommonMistakes() {
    const mistakes = [
        {
            wrong: "Cache càng nhiều thì CPU luôn mạnh hơn",
            right: "Cache nhiều có thể giúp, nhưng hiệu năng còn phụ thuộc kiến trúc, IPC, xung nhịp, nhân/luồng, RAM, phần mềm, tản nhiệt và điện năng.",
        },
        {
            wrong: "Cache giống RAM, có thể nâng cấp được",
            right: "L1/L2/L3 Cache nằm trong CPU và không nâng cấp riêng được. Muốn cache nhiều hơn phải chọn CPU khác.",
        },
        {
            wrong: "L3 Cache nhanh nhất vì dung lượng lớn nhất",
            right: "L1 nhanh nhất và nhỏ nhất; L2 trung gian; L3 lớn nhất nhưng chậm hơn L1/L2.",
        },
        {
            wrong: "Cache chỉ quan trọng cho game",
            right: "Cache cũng có ích trong biên dịch code, cơ sở dữ liệu, mô phỏng, nén/giải nén và các tác vụ dùng dữ liệu lặp.",
        },
    ];

    const tips = [
        "So sánh CPU gaming: xem L3 Cache, đặc biệt với các dòng Ryzen X3D.",
        "Văn phòng/học tập: không cần ám ảnh cache quá lớn; ưu tiên CPU đủ tốt, RAM đủ và SSD nhanh.",
        "Máy chậm khi mở phần mềm/load file chưa chắc do cache; hãy kiểm tra SSD, RAM và phần mềm chạy nền.",
        "Đọc thông số CPU theo thứ tự: nhân/luồng → xung nhịp → cache L2/L3 → đời CPU/kiến trúc → TDP/nhiệt → nhu cầu.",
        "Game thủ nên quan tâm FPS trung bình và 1% low FPS; cache lớn có thể giúp độ ổn định khung hình trong nhiều game.",
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
                        <Lightbulb /> Mẹo chọn CPU
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
                        <span className="bg-fuchsia-500/20 text-fuchsia-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-fuchsia-300 border border-slate-800 shadow-inner space-y-2">
                            <p>CPU CACHE = bộ nhớ đệm cực nhanh gần CPU</p>
                            <br />
                            <p className="text-slate-500"># Thứ tự truy cập</p>
                            <p className="text-slate-300">
                                Registers → L1 → L2 → L3 → RAM → SSD/HDD
                            </p>
                            <br />
                            <p className="text-slate-500"># Cache Hit</p>
                            <p className="text-slate-300">
                                CPU tìm thấy dữ liệu trong cache → nhanh
                            </p>
                            <br />
                            <p className="text-slate-500"># Cache Miss</p>
                            <p className="text-slate-300">
                                CPU không tìm thấy trong cache → xuống tầng chậm
                                hơn
                            </p>
                            <br />
                            <p className="text-slate-500"># L1/L2/L3</p>
                            <p className="text-slate-300">
                                L1 nhanh nhất, L3 lớn nhất trong CPU nhưng chậm
                                hơn L1/L2.
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
        question: "CPU Cache có nhiệm vụ chính là gì?",
        options: [
            "Lưu file lâu dài sau khi tắt máy",
            "Chứa tạm lệnh/dữ liệu CPU hay dùng để truy cập nhanh hơn",
            "Cấp điện cho CPU",
            "Hiển thị hình ảnh lên màn hình",
        ],
        correct: 1,
        explanation:
            "Cache chứa tạm lệnh và dữ liệu CPU có khả năng dùng lại sớm để CPU lấy nhanh hơn và ít phải chờ RAM.",
    },
    {
        question: "Thứ tự cache nào đúng từ nhanh nhất đến chậm hơn?",
        options: [
            "L3 → L2 → L1",
            "RAM → L3 → L2 → L1",
            "L1 → L2 → L3",
            "SSD → RAM → L1",
        ],
        correct: 2,
        explanation:
            "Trong các tầng cache, L1 nhanh nhất, sau đó đến L2, rồi L3. L3 lớn hơn nhưng chậm hơn L1/L2.",
    },
    {
        question: "Cache Miss nghĩa là gì?",
        options: [
            "CPU tìm thấy dữ liệu trong cache",
            "CPU không tìm thấy dữ liệu trong cache và phải lấy từ tầng chậm hơn",
            "Máy tính bị mất nguồn",
            "GPU không xuất hình",
        ],
        correct: 1,
        explanation:
            "Cache Miss xảy ra khi dữ liệu không có trong cache, CPU phải xuống RAM hoặc tầng chậm hơn nên mất thời gian hơn.",
    },
    {
        question: "L3 Cache thường có vai trò gì?",
        options: [
            "Lưu file sau khi tắt máy",
            "Cache lớn dùng chung giữa nhiều nhân CPU",
            "Cấp điện cho RAM",
            "Thay thế hoàn toàn SSD",
        ],
        correct: 1,
        explanation:
            "L3 thường là cache lớn nhất trong CPU và được dùng chung giữa nhiều nhân, hữu ích cho game, đa nhiệm và dữ liệu lặp.",
    },
    {
        question: "Cache CPU có nâng cấp riêng như RAM được không?",
        options: [
            "Có, cắm thêm thanh cache",
            "Không, cache đi kèm CPU; muốn cache khác phải chọn CPU khác",
            "Có, tải phần mềm tăng cache",
            "Chỉ nâng bằng dây HDMI",
        ],
        correct: 1,
        explanation:
            "L1/L2/L3 Cache nằm trong CPU, không thể nâng cấp riêng như RAM hay SSD.",
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
        } else {
            setCurrentQ("finished");
        }
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
                    <strong className="text-fuchsia-400">
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
                <span className="text-fuchsia-400">
                    Câu hỏi {currentQ + 1}/{questions.length}
                </span>
                <span className="text-slate-500">Điểm: {score}</span>
            </div>

            <h4 className="text-lg font-bold text-white mb-6 leading-snug">
                {q.question}
            </h4>

            <div className="space-y-3 flex-grow">
                {q.options.map((opt, idx) => {
                    let btnClass =
                        "w-full text-left p-4 rounded-xl border text-sm transition-all ";
                    if (!showResult) {
                        btnClass +=
                            "border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300";
                    } else if (idx === q.correct) {
                        btnClass +=
                            "border-green-500 bg-green-500/10 text-green-400";
                    } else if (idx === selected) {
                        btnClass += "border-red-500 bg-red-500/10 text-red-400";
                    } else {
                        btnClass +=
                            "border-slate-900 bg-slate-900/50 text-slate-600 opacity-60";
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => handleSelect(idx)}
                            disabled={showResult}
                            className={btnClass}
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>

            {showResult && (
                <div className="mt-6 pt-6 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2">
                    <div
                        className={`p-4 rounded-xl text-sm mb-4 ${selected === q.correct ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"}`}
                    >
                        <strong>Giải thích:</strong> {q.explanation}
                    </div>
                    <button
                        onClick={handleNext}
                        className="w-full py-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu L1, L2, L3 Cache là các tầng bộ nhớ đệm giúp CPU lấy
                dữ liệu nhanh hơn và giảm thời gian chờ RAM. Tiếp theo là học
                kiến trúc tập lệnh để biết CPU hiểu “ngôn ngữ lệnh” nào.
            </p>
            <Link
                to="/phan-2-7"
                className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-fuchsia-500/20"
            >
                Bài tiếp theo: 2.7 — Kiến trúc tập lệnh: x86, x64, ARM, RISC-V{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "fuchsia" }) {
    const colorMap = {
        fuchsia: "bg-fuchsia-500/20 text-fuchsia-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
        blue: "bg-blue-500/20 text-blue-300",
        purple: "bg-purple-500/20 text-purple-300",
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

function HeroCacheCard({ icon, label, desc, color, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 flex items-center gap-4 ${highlight ? "bg-fuchsia-500/10 border-fuchsia-400/50" : softBorder(color)}`}
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

function MiniCard({ icon, title, desc, color }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex gap-3">
            <div
                className={`w-10 h-10 rounded-xl ${badgeColor(color)} flex items-center justify-center shrink-0`}
            >
                {React.cloneElement(icon, { size: 20 })}
            </div>
            <div>
                <h4 className="text-white font-bold text-sm">{title}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {desc}
                </p>
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

function badgeColor(color) {
    const map = {
        fuchsia:
            "bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.fuchsia;
}

function softBorder(color) {
    const map = {
        fuchsia: "bg-fuchsia-500/5 border-fuchsia-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.fuchsia;
}

function textColor(color) {
    const map = {
        fuchsia: "text-fuchsia-300",
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        blue: "text-blue-300",
        yellow: "text-yellow-300",
        purple: "text-purple-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-fuchsia-300";
}
