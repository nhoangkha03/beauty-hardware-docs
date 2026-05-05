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
    Gamepad2,
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
    ShieldCheck,
    Timer,
    Usb,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shadow-lg shadow-indigo-500/10">
                            <Puzzle className="text-indigo-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 4: Bộ lưu trữ — Storage
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-indigo-300 bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/20">
                        Bài 4.4
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <RoadAnalogy />
                <DataPathSimulator />
                <StorageInterfaceExplorer />
                <M2SizeGuide />
                <PcieLaneLab />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-indigo-300">
                        <BookOpen size={16} /> Phần 4: Bộ lưu trữ — Storage
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        SATA, NVMe,
                        <span className="block text-indigo-400">M.2, PCIe</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Bài này giúp bạn gỡ nhầm lẫn phổ biến nhất khi mua SSD:
                        M.2 là dạng khe/kích thước, NVMe là giao thức, PCIe là
                        đường truyền, còn SATA là chuẩn lưu trữ cũ hơn.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<HardDrive size={16} />} text="SATA" />
                        <Tag icon={<Zap size={16} />} text="NVMe" />
                        <Tag icon={<Puzzle size={16} />} text="M.2" />
                        <Tag
                            icon={<Layers3 size={16} />}
                            text="PCIe Gen / lanes"
                        />
                        <Tag
                            icon={<ShieldCheck size={16} />}
                            text="Compatibility"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<HardDrive />}
                            label="SATA"
                            desc="Chuẩn giao tiếp lưu trữ"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Zap />}
                            label="NVMe"
                            desc="Giao thức SSD hiện đại"
                            color="emerald"
                            highlight
                        />
                        <HeroTile
                            icon={<Puzzle />}
                            label="M.2"
                            desc="Dạng khe/kích thước"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<Layers3 />}
                            label="PCIe"
                            desc="Đường truyền tốc độ cao"
                            color="indigo"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Ghi nhớ sống còn</p>
                        <p>
                            <span className="text-cyan-300">M.2</span> không tự
                            động ={" "}
                            <span className="text-emerald-300">NVMe</span>
                        </p>
                        <p className="text-orange-300">
                            Có M.2 SATA và M.2 NVMe
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Phân biệt đúng SATA, NVMe, M.2 và PCIe thuộc 4 nhóm khái niệm khác nhau.",
        "Hiểu đường đi dữ liệu của SATA SSD và NVMe SSD qua PCIe.",
        "Biết vì sao M.2 không đồng nghĩa chắc chắn là NVMe.",
        "Đọc được thông số PCIe Gen3/Gen4/Gen5 và x2/x4 lanes.",
        "Kiểm tra tương thích mainboard/laptop trước khi mua SSD để tránh mua nhầm.",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="indigo"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-300 flex items-center justify-center font-bold mb-4">
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
    const terms = [
        {
            icon: <HardDrive />,
            term: "SATA",
            type: "Chuẩn giao tiếp lưu trữ",
            easy: "Con đường cũ cho HDD/SATA SSD",
            color: "orange",
        },
        {
            icon: <Zap />,
            term: "NVMe",
            type: "Giao thức cho SSD hiện đại",
            easy: "Cách SSD nói chuyện nhanh với CPU qua PCIe",
            color: "emerald",
        },
        {
            icon: <Puzzle />,
            term: "M.2",
            type: "Dạng khe/kích thước vật lý",
            easy: "Hình dạng thanh SSD nhỏ, dẹt",
            color: "cyan",
        },
        {
            icon: <Layers3 />,
            term: "PCIe",
            type: "Đường truyền tốc độ cao",
            easy: "Xa lộ nối CPU/chipset với thiết bị",
            color: "indigo",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: 4 thuật ngữ, 4 nhóm khác nhau"
                icon={<Brain />}
            />
            <div className="grid md:grid-cols-4 gap-4">
                {terms.map((t) => (
                    <div
                        key={t.term}
                        className={`${softBorder(t.color)} border rounded-3xl p-6`}
                    >
                        <div
                            className={`w-12 h-12 rounded-2xl ${badgeColor(t.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(t.icon, { size: 24 })}
                        </div>
                        <h3 className="text-white font-extrabold text-2xl mb-1">
                            {t.term}
                        </h3>
                        <p
                            className={`${textColor(t.color)} text-sm font-bold mb-3`}
                        >
                            {t.type}
                        </p>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            {t.easy}
                        </p>
                    </div>
                ))}
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-red-300">Câu quan trọng nhất:</strong>{" "}
                M.2 chỉ nói về hình dạng/khe cắm, không nói chắc ổ đó dùng SATA
                hay NVMe.
            </div>
        </section>
    );
}

function RoadAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: xe, tài xế và đường"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-4">
                    <AnalogyCard
                        icon={<Puzzle />}
                        title="M.2 = hình dạng xe"
                        desc="Xe nhỏ, dẹt, cắm trực tiếp lên main/laptop."
                        color="cyan"
                    />
                    <AnalogyCard
                        icon={<Zap />}
                        title="NVMe = cách tài xế giao tiếp"
                        desc="Giao thức tối ưu cho SSD tốc độ cao."
                        color="emerald"
                    />
                    <AnalogyCard
                        icon={<Layers3 />}
                        title="PCIe = cao tốc"
                        desc="Đường truyền nhiều lane, băng thông cao."
                        color="indigo"
                    />
                    <AnalogyCard
                        icon={<HardDrive />}
                        title="SATA = đường cũ"
                        desc="Vẫn ổn cho HDD/SATA SSD, nhưng chậm hơn NVMe."
                        color="orange"
                    />
                </div>
            </div>
        </section>
    );
}

function DataPathSimulator() {
    const paths = {
        sata: {
            title: "SATA SSD",
            color: "orange",
            formula: "SSD SATA → Cáp/khe SATA → Chipset/Mainboard → RAM → CPU",
            steps: [
                {
                    icon: <HardDrive />,
                    title: "SSD SATA",
                    desc: "Ổ 2.5 inch SATA hoặc M.2 SATA SSD nhận yêu cầu đọc/ghi.",
                },
                {
                    icon: <Puzzle />,
                    title: "Cáp/khe SATA",
                    desc: "Dữ liệu đi qua giao tiếp SATA, thường giới hạn khoảng 500–560 MB/s với SATA SSD.",
                },
                {
                    icon: <Settings />,
                    title: "Chipset/Mainboard",
                    desc: "Mainboard điều phối dữ liệu từ ổ lưu trữ về hệ thống.",
                },
                {
                    icon: <MemoryStick />,
                    title: "RAM",
                    desc: "Dữ liệu được đưa lên RAM cho chương trình sử dụng.",
                },
                {
                    icon: <Cpu />,
                    title: "CPU xử lý",
                    desc: "CPU xử lý dữ liệu đã nạp vào RAM.",
                },
            ],
        },
        nvme: {
            title: "M.2 NVMe qua PCIe",
            color: "emerald",
            formula: "SSD M.2 NVMe → PCIe lanes → CPU/chipset → RAM → CPU",
            steps: [
                {
                    icon: <Zap />,
                    title: "SSD M.2 NVMe",
                    desc: "Ổ SSD dùng giao thức NVMe, thường dạng M.2 2280.",
                },
                {
                    icon: <Layers3 />,
                    title: "PCIe lanes",
                    desc: "Dữ liệu đi qua các lane PCIe tốc độ cao như PCIe 3.0 x4 hoặc 4.0 x4.",
                },
                {
                    icon: <Cpu />,
                    title: "CPU hoặc chipset",
                    desc: "Một số khe M.2 nối thẳng CPU, một số đi qua chipset.",
                },
                {
                    icon: <MemoryStick />,
                    title: "RAM",
                    desc: "Dữ liệu được nạp vào RAM để phần mềm dùng.",
                },
                {
                    icon: <Cpu />,
                    title: "CPU xử lý",
                    desc: "CPU tiếp tục xử lý lệnh và dữ liệu.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("nvme");
    const [active, setActive] = useState(0);
    const path = paths[mode];
    const step = path.steps[active];
    const switchMode = (m) => {
        setMode(m);
        setActive(0);
    };

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Dữ liệu đi từ SSD đến CPU như thế nào?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {Object.entries(paths).map(([key, p]) => (
                        <button
                            key={key}
                            onClick={() => switchMode(key)}
                            className={`rounded-2xl border p-4 font-bold transition-all ${mode === key ? `${softBorder(p.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            {p.title}
                        </button>
                    ))}
                </div>
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[320px] flex flex-col justify-between">
                        <div>
                            <div
                                className={`w-16 h-16 rounded-2xl ${badgeColor(path.color)} flex items-center justify-center mb-5`}
                            >
                                {React.cloneElement(step.icon, { size: 32 })}
                            </div>
                            <p
                                className={`${textColor(path.color)} text-sm font-bold mb-2`}
                            >
                                Bước {active + 1}/{path.steps.length}
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
                                setActive((active + 1) % path.steps.length)
                            }
                            className="mt-6 px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold inline-flex items-center justify-center gap-2"
                        >
                            Bước tiếp theo <ChevronRight size={18} />
                        </button>
                    </div>
                    <div className="space-y-4">
                        <pre className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300 whitespace-pre-wrap">
                            {path.formula}
                        </pre>
                        {path.steps.map((s, i) => (
                            <button
                                key={s.title}
                                onClick={() => setActive(i)}
                                className={`w-full flex items-center gap-4 p-3 rounded-2xl border text-left transition-all ${active === i ? `${softBorder(path.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`}
                            >
                                <div
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${active === i ? badgeColor(path.color) : "bg-slate-900 text-slate-500"}`}
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
            </div>
        </section>
    );
}

function StorageInterfaceExplorer() {
    const items = {
        sataHdd: {
            icon: <HardDrive />,
            title: "SATA HDD",
            used: "HDD 2.5/3.5 inch",
            good: "Rẻ, dung lượng lớn",
            bad: "Chậm, cơ học",
            fit: "Lưu trữ, backup",
            color: "orange",
        },
        sataSsd: {
            icon: <HardDrive />,
            title: "SATA SSD 2.5 inch",
            used: "SSD nâng cấp máy cũ",
            good: "Nhanh hơn HDD rất nhiều, dễ lắp",
            bad: "Giới hạn khoảng 500–560 MB/s",
            fit: "Laptop/PC cũ",
            color: "cyan",
        },
        m2Sata: {
            icon: <Puzzle />,
            title: "M.2 SATA SSD",
            used: "Một số laptop/mainboard cũ",
            good: "Gọn, không cần cáp",
            bad: "Vẫn bị giới hạn SATA",
            fit: "Máy hỗ trợ M.2 SATA",
            color: "blue",
        },
        nvme3: {
            icon: <Zap />,
            title: "M.2 NVMe PCIe 3.0",
            used: "PC/laptop đời mới hơn",
            good: "Nhanh, giá thường tốt",
            bad: "Chậm hơn Gen4/Gen5",
            fit: "Người dùng phổ thông",
            color: "emerald",
        },
        nvme4: {
            icon: <Zap />,
            title: "M.2 NVMe PCIe 4.0",
            used: "PC/laptop hiện đại",
            good: "Rất nhanh, phổ biến",
            bad: "Có thể nóng hơn, cần main hỗ trợ",
            fit: "Gaming, đồ họa, lập trình",
            color: "purple",
        },
        nvme5: {
            icon: <Zap />,
            title: "M.2 NVMe PCIe 5.0",
            used: "PC cao cấp mới",
            good: "Cực nhanh",
            bad: "Nóng, đắt, chưa phải ai cũng cần",
            fit: "Workstation, tốc độ rất cao",
            color: "red",
        },
        usb: {
            icon: <Usb />,
            title: "USB External SSD",
            used: "Ổ gắn ngoài",
            good: "Tiện mang đi",
            bad: "Phụ thuộc chuẩn USB/cáp",
            fit: "Backup, chuyển dữ liệu",
            color: "yellow",
        },
    };
    const [active, setActive] = useState("nvme4");
    const item = items[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Các loại giao tiếp lưu trữ phổ biến"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {Object.entries(items).map(([key, it]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(it.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(it.icon, { size: 20 })}{" "}
                                {it.title}
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
                            {item.used}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-3">
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
                    </div>
                </div>
            </div>
        </section>
    );
}

function M2SizeGuide() {
    const sizes = [
        ["M.2 2230", "22mm x 30mm", "Handheld gaming, laptop nhỏ", "cyan"],
        ["M.2 2242", "22mm x 42mm", "Một số laptop/mini PC", "blue"],
        ["M.2 2260", "22mm x 60mm", "Ít gặp hơn", "purple"],
        ["M.2 2280", "22mm x 80mm", "Phổ biến nhất cho PC/laptop", "emerald"],
        ["M.2 22110", "22mm x 110mm", "Workstation/server", "orange"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="M.2 2230, 2242, 2280 nghĩa là gì?"
                icon={<Puzzle />}
            />
            <div className="grid md:grid-cols-5 gap-4">
                {sizes.map(([name, size, use, color]) => (
                    <div
                        key={name}
                        className={`${softBorder(color)} border rounded-3xl p-5`}
                    >
                        <div
                            className={`h-20 rounded-2xl ${badgeColor(color)} flex items-center justify-center mb-4 font-mono font-black`}
                        >
                            {name}
                        </div>
                        <p className="text-white font-bold mb-1">{size}</p>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            {use}
                        </p>
                    </div>
                ))}
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300 text-center">
                M.2 2280 = rộng 22mm, dài 80mm. Đây là kích thước SSD M.2 phổ
                biến nhất.
            </div>
        </section>
    );
}

function PcieLaneLab() {
    const configs = {
        g3x4: {
            title: "PCIe 3.0 x4",
            gen: "Gen 3",
            lanes: "4 lanes",
            result: "NVMe phổ thông đời trước, thường khoảng 2000–3500 MB/s",
            color: "cyan",
        },
        g4x4: {
            title: "PCIe 4.0 x4",
            gen: "Gen 4",
            lanes: "4 lanes",
            result: "Rất phổ biến cho SSD nhanh hiện nay, thường khoảng 5000–7500 MB/s",
            color: "emerald",
        },
        g5x2: {
            title: "PCIe 5.0 x2",
            gen: "Gen 5",
            lanes: "2 lanes",
            result: "Gen mới nhưng chỉ 2 lane; có thể tương đương/nhỉnh hơn Gen4 x4 tùy ổ",
            color: "purple",
        },
        g5x4: {
            title: "PCIe 5.0 x4",
            gen: "Gen 5",
            lanes: "4 lanes",
            result: "Cực nhanh, có thể trên 10000 MB/s nhưng nóng và đắt hơn",
            color: "red",
        },
    };
    const [active, setActive] = useState("g4x4");
    const item = configs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="purple"
                title="PCIe Gen và số lane: 3.0 x4, 4.0 x4, 5.0 x2"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-3 mb-6">
                    {Object.entries(configs).map(([key, c]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(c.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <p className="font-bold font-mono text-sm">
                                {c.title}
                            </p>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <InfoCard
                        label="Thế hệ"
                        value={item.gen}
                        color={item.color}
                    />
                    <InfoCard
                        label="Số lane"
                        value={item.lanes}
                        color={item.color}
                    />
                    <InfoCard
                        label="Hiểu thực tế"
                        value={item.result}
                        color={item.color}
                    />
                </div>
                <div className="mt-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-purple-300">Quy tắc:</strong> Gen
                    cao hơn thường có băng thông mỗi lane cao hơn. x4 thường
                    nhiều làn hơn x2, nhưng còn phụ thuộc SSD, CPU, mainboard,
                    firmware và tản nhiệt.
                </div>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        sata: {
            icon: <HardDrive />,
            title: "SATA",
            detail: "Chuẩn giao tiếp phổ biến cho HDD và SSD 2.5 inch.",
            impact: "SATA SSD rất đáng nâng cho máy cũ, nhưng nếu máy hỗ trợ NVMe thì nên ưu tiên NVMe cho ổ hệ điều hành.",
        },
        nvme: {
            icon: <Zap />,
            title: "NVMe",
            detail: "Non-Volatile Memory Express, giao thức thiết kế cho SSD hiện đại.",
            impact: "NVMe có độ trễ thấp, băng thông cao và xử lý nhiều hàng đợi lệnh tốt hơn SATA/AHCI.",
        },
        m2: {
            icon: <Puzzle />,
            title: "M.2",
            detail: "Dạng khe/kích thước vật lý của SSD/thẻ mở rộng.",
            impact: "Phải xem khe hỗ trợ M.2 SATA, M.2 NVMe hay cả hai; xem kích thước 2230/2242/2280.",
        },
        pcie: {
            icon: <Layers3 />,
            title: "PCIe Gen và lane",
            detail: "Ghi như PCIe 3.0 x4, 4.0 x4, 5.0 x2.",
            impact: "Gen là thế hệ, x2/x4 là số lane. Cùng Gen, x4 thường nhanh hơn x2.",
        },
        sequential: {
            icon: <Gauge />,
            title: "Sequential speed",
            detail: "Tốc độ đọc/ghi file lớn liên tục.",
            impact: "Quan trọng khi copy file lớn, dựng video, giải nén file nặng, cài game lớn.",
        },
        compatibility: {
            icon: <ShieldCheck />,
            title: "Tương thích",
            detail: "Kiểm tra manual mainboard/laptop trước khi mua SSD.",
            impact: "Một số khe M.2 chia lane với cổng SATA; gắn M.2 có thể vô hiệu hóa vài SATA port.",
        },
        heat: {
            icon: <Timer />,
            title: "Nhiệt / heatsink",
            detail: "SSD NVMe PCIe 4.0/5.0 có thể nóng khi ghi nặng.",
            impact: "Desktop nên dùng heatsink M.2 nếu có; laptop mỏng có thể không lắp vừa heatsink dày.",
        },
    };
    const [active, setActive] = useState("compatibility");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="yellow"
                title="Thông số kỹ thuật quan trọng"
                icon={<Settings />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
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

function RealExamples() {
    const examples = [
        {
            icon: <HardDrive />,
            title: "Crucial MX500 1TB",
            subtitle: "2.5 inch SATA SSD cho máy cũ",
            color: "cyan",
            points: [
                "Dạng 2.5 inch SATA",
                "Đọc/ghi tuần tự lên tới khoảng 560/510 MB/s",
                "Phù hợp laptop/PC cũ có khay SATA",
                "Có thể clone ổ HDD sang SSD",
                "Không dùng được nếu máy chỉ có khe M.2 NVMe không hỗ trợ SATA",
            ],
            lesson: "Máy cũ đang dùng HDD không cần cố mua NVMe nếu không hỗ trợ. SATA SSD vẫn cải thiện rất rõ.",
        },
        {
            icon: <Zap />,
            title: "Samsung 990 EVO Plus 1TB",
            subtitle: "M.2 NVMe cho PC/laptop mới",
            color: "emerald",
            points: [
                "Gen4 NVMe M.2",
                "Hỗ trợ PCIe 4.0 x4 hoặc 5.0 x2 tùy nền tảng",
                "Tốc độ đọc/ghi tuần tự lên tới khoảng 7,250/6,300 MB/s",
                "Phù hợp Windows, game, lập trình, Docker",
                "Cần kiểm tra máy hỗ trợ PCIe Gen nào",
            ],
            lesson: "Ổ NVMe nhanh cần khe M.2 NVMe tương thích; nếu cắm vào Gen3 có thể chạy nhưng bị giới hạn tốc độ.",
        },
        {
            icon: <Gamepad2 />,
            title: "WD_BLACK SN850X 1TB",
            subtitle: "NVMe PCIe 4.0 M.2 2280 cho gaming",
            color: "purple",
            points: [
                "PCIe Gen4 x4 NVMe",
                "Dạng M.2 2280",
                "Tốc độ đọc lên tới khoảng 7,300 MB/s",
                "Hợp gaming PC/PS5 nếu đúng bản tương thích",
                "Máy chỉ có SATA không dùng được",
            ],
            lesson: "SSD gaming NVMe rất nhanh, nhưng phải kiểm tra chuẩn khe, kích thước và yêu cầu heatsink trước khi mua.",
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

function CompatibilityLab() {
    const scenarios = {
        oldLaptop: {
            icon: <Laptop />,
            title: "Laptop cũ có khay 2.5 inch",
            answer: "Chọn SATA SSD 2.5 inch như Crucial MX500. Không cần mua M.2 NVMe nếu máy không có khe M.2 NVMe.",
            color: "cyan",
        },
        m2SataOnly: {
            icon: <Puzzle />,
            title: "Khe M.2 chỉ hỗ trợ SATA",
            answer: "Mua M.2 SATA SSD. Nếu mua M.2 NVMe, máy có thể không nhận ổ.",
            color: "orange",
        },
        m2NvmeOnly: {
            icon: <Zap />,
            title: "Khe M.2 chỉ hỗ trợ NVMe",
            answer: "Mua M.2 NVMe SSD. Nếu mua M.2 SATA, máy có thể không nhận ổ.",
            color: "emerald",
        },
        pcie3: {
            icon: <Layers3 />,
            title: "Máy PCIe 3.0, SSD PCIe 4.0",
            answer: "Nhiều ổ vẫn chạy lùi tương thích, nhưng tốc độ bị giới hạn theo Gen3. Không đạt thông số Gen4 tối đa.",
            color: "purple",
        },
        thinLaptop: {
            icon: <Timer />,
            title: "Laptop mỏng",
            answer: "Tránh SSD có heatsink dày. Kiểm tra kích thước 2230/2242/2280 và giới hạn nhiệt/độ dày của máy.",
            color: "red",
        },
    };
    const [active, setActive] = useState("m2NvmeOnly");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: tránh mua nhầm SSD"
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
            wrong: "M.2 là chắc chắn NVMe",
            right: "M.2 chỉ là kiểu khe/kích thước. Có M.2 SATA SSD và M.2 NVMe SSD.",
        },
        {
            wrong: "SSD PCIe 4.0 cắm vào PCIe 3.0 sẽ không chạy",
            right: "Nhiều SSD PCIe 4.0 vẫn chạy lùi trên khe PCIe 3.0, nhưng tốc độ bị giới hạn theo Gen3.",
        },
        {
            wrong: "7000 MB/s nghĩa là nhanh hơn 7 lần trong mọi việc",
            right: "Tốc độ tuần tự cao hữu ích khi copy file lớn. Mở app/Windows còn phụ thuộc random I/O, độ trễ, controller, firmware, CPU và RAM.",
        },
        {
            wrong: "NVMe càng nhanh càng đáng mua với mọi người",
            right: "Tùy nhu cầu. Máy cũ chỉ có SATA thì SATA SSD là hợp lý; người phổ thông không nhất thiết cần PCIe 5.0.",
        },
        {
            wrong: "Cứ mua SSD có heatsink là tốt",
            right: "Desktop/PS5 có thể cần heatsink, nhưng laptop mỏng có thể không lắp vừa heatsink dày.",
        },
    ];
    const tips = [
        "Trước khi mua SSD, kiểm tra manual mainboard/laptop: SATA hay NVMe, PCIe Gen mấy, kích thước 2230/2242/2280.",
        "Máy cũ đang dùng HDD: SATA SSD vẫn rất đáng nâng nếu máy không hỗ trợ NVMe.",
        "Máy mới: ưu tiên M.2 NVMe 1TB trở lên nếu ngân sách cho phép.",
        "Không chỉ nhìn tốc độ tuần tự; xem thêm NAND, TBW, DRAM/HMB, nhiệt độ và review thực tế.",
        "SSD PCIe 4.0/5.0 cần chú ý nhiệt; laptop cần SSD mát và tiết kiệm điện.",
        "Backup vẫn bắt buộc dù SSD rất nhanh.",
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
                        <Lightbulb /> Mẹo chọn SSD
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
                        <span className="bg-indigo-500/20 text-indigo-300 p-2 rounded-xl">
                            12
                        </span>
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-indigo-300 border border-slate-800 shadow-inner space-y-2">
                            <p>SATA = chuẩn giao tiếp lưu trữ cũ hơn</p>
                            <p>NVMe = giao thức cho SSD hiện đại</p>
                            <p>M.2 = dạng khe/kích thước vật lý</p>
                            <p>PCIe = đường truyền tốc độ cao</p>
                            <br />
                            <p className="text-slate-500"># Dữ liệu</p>
                            <p className="text-slate-300">
                                SATA SSD → SATA → chipset → RAM → CPU
                            </p>
                            <p className="text-slate-300">
                                M.2 NVMe → PCIe lanes → CPU/chipset → RAM → CPU
                            </p>
                            <br />
                            <p className="text-red-300">
                                M.2 không đồng nghĩa chắc chắn là NVMe.
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
        question: "M.2 là gì?",
        options: [
            "Một loại giao thức mạng",
            "Dạng khe/kích thước vật lý của SSD hoặc thiết bị mở rộng",
            "Một loại RAM",
            "Một loại màn hình",
        ],
        correct: 1,
        explanation:
            "M.2 là dạng khe/kích thước vật lý. Nó không tự nói ổ dùng SATA hay NVMe.",
    },
    {
        question: "NVMe thường chạy qua đường truyền nào?",
        options: ["VGA", "PCIe", "HDMI", "Audio jack"],
        correct: 1,
        explanation:
            "NVMe SSD dùng PCIe lanes để giao tiếp tốc độ cao với CPU/chipset.",
    },
    {
        question: "Nhận định nào đúng nhất?",
        options: [
            "M.2 luôn luôn là NVMe",
            "SATA SSD luôn nhanh hơn NVMe",
            "M.2 có thể là SATA hoặc NVMe tùy ổ và khe hỗ trợ",
            "PCIe chỉ dùng cho bàn phím",
        ],
        correct: 2,
        explanation:
            "Có M.2 SATA SSD và M.2 NVMe SSD; khe M.2 của máy cũng có thể hỗ trợ SATA, NVMe hoặc cả hai.",
    },
    {
        question:
            "Nếu cắm SSD PCIe 4.0 vào khe PCIe 3.0 tương thích, điều gì thường xảy ra?",
        options: [
            "Chắc chắn cháy ổ",
            "Thường vẫn chạy nhưng bị giới hạn tốc độ theo PCIe 3.0",
            "Biến thành RAM",
            "Không cần mainboard",
        ],
        correct: 1,
        explanation:
            "Nhiều SSD PCIe 4.0 có thể chạy lùi trên khe PCIe 3.0, nhưng không đạt tốc độ Gen4 tối đa.",
    },
    {
        question: "M.2 2280 nghĩa là gì?",
        options: ["22mm x 80mm", "2280GB", "PCIe Gen 22 x80", "RAM DDR2 2800"],
        correct: 0,
        explanation: "M.2 2280 nghĩa là rộng 22mm và dài 80mm.",
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
                    <strong className="text-indigo-400">
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
                <span className="text-indigo-400">
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
                        className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu SATA, NVMe, M.2 và PCIe. Tiếp theo là Optical Drive
                — ổ đĩa quang CD, DVD, Blu-ray, loại lưu trữ từng rất phổ biến
                trước USB/SSD/cloud.
            </p>
            <Link
                to="/phan-4-5"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20"
            >
                Bài tiếp theo: 4.5 — Optical Drive: CD, DVD, Blu-ray{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "indigo" }) {
    const colorMap = {
        indigo: "bg-indigo-500/20 text-indigo-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-emerald-500/10 border-emerald-400/50" : softBorder(color)}`}
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
        indigo: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.indigo;
}

function softBorder(color) {
    const map = {
        indigo: "bg-indigo-500/5 border-indigo-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.indigo;
}

function textColor(color) {
    const map = {
        indigo: "text-indigo-300",
        cyan: "text-cyan-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-indigo-300";
}
