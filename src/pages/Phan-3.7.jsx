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
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-rose-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-rose-500/10 border border-rose-400/30 flex items-center justify-center shadow-lg shadow-rose-500/10">
                            <HardDrive className="text-rose-400" size={24} />
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
                    <div className="text-sm font-semibold text-rose-300 bg-rose-400/10 px-3 py-1 rounded-full border border-rose-400/20">
                        Bài 3.7
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <DeskCabinetAnalogy />
                <MemoryFlowSimulator />
                <VirtualMemoryTypes />
                <SpecsExplorer />
                <MemoryPressureLab />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-rose-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-rose-300">
                        <BookOpen size={16} /> Phần 3: Bộ nhớ — Memory
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Bộ nhớ ảo
                        <span className="block text-rose-400">
                            Virtual Memory / Swap
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Khi RAM thật gần đầy, hệ điều hành có thể dùng một phần
                        SSD/HDD làm vùng tạm để máy không sập app ngay. Nhưng
                        swap/page file chậm hơn RAM rất nhiều.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<MemoryStick size={16} />}
                            text="Physical RAM"
                        />
                        <Tag
                            icon={<HardDrive size={16} />}
                            text="Page File / Swap"
                        />
                        <Tag
                            icon={<Database size={16} />}
                            text="Virtual Address"
                        />
                        <Tag
                            icon={<Gauge size={16} />}
                            text="Memory Pressure"
                        />
                        <Tag icon={<RefreshCcw size={16} />} text="Hibernate" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="space-y-3">
                        <HeroCard
                            icon={<MemoryStick />}
                            label="RAM thật"
                            desc="Nhanh, chứa dữ liệu đang dùng nhiều"
                            color="emerald"
                            highlight
                        />
                        <HeroCard
                            icon={<HardDrive />}
                            label="Page File / Swap"
                            desc="Vùng tạm trên SSD/HDD khi RAM thiếu"
                            color="rose"
                        />
                        <HeroCard
                            icon={<Cpu />}
                            label="CPU + OS"
                            desc="Ánh xạ địa chỉ ảo sang RAM hoặc swap"
                            color="cyan"
                        />
                        <HeroCard
                            icon={<AlertTriangle />}
                            label="Chậm hơn RAM"
                            desc="Swap là phao cứu sinh, không phải nâng cấp hiệu năng"
                            color="orange"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Khi RAM gần đầy</p>
                        <p>RAM → tìm page ít dùng</p>
                        <p className="text-rose-300">
                            → ghi xuống Page File / Swap
                        </p>
                        <p className="text-emerald-300">
                            → giải phóng RAM cho việc đang cần
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu Virtual Memory là gì và vì sao hệ điều hành cần bộ nhớ ảo.",
        "Phân biệt RAM thật với Page File trên Windows và Swap trên Linux.",
        "Nắm cơ chế khi RAM gần đầy: trang ít dùng bị chuyển xuống SSD/HDD.",
        "Biết các loại Page File, Swap Partition, Swap File, Compressed Memory và zswap.",
        "Biết khi nào nên nâng RAM thay vì chỉ tăng Page File/Swap.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="rose"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-rose-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-300 flex items-center justify-center font-bold mb-4">
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
                title="Khái niệm cốt lõi: bộ nhớ ảo là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">
                                Virtual Memory
                            </strong>{" "}
                            là cơ chế hệ điều hành dùng để tạo cảm giác mỗi
                            chương trình có một không gian bộ nhớ riêng, rộng và
                            liên tục, dù RAM vật lý có giới hạn.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 font-mono text-sm">
                            <p>RAM vật lý</p>
                            <p>+ vùng trên SSD/HDD làm bộ nhớ phụ</p>
                            <p>= không gian bộ nhớ hệ điều hành quản lý</p>
                        </div>
                        <p>
                            Trên Windows, vùng này thường gọi là{" "}
                            <strong className="text-rose-300">
                                Page File / Paging File
                            </strong>
                            , ví dụ{" "}
                            <code className="bg-slate-950 px-2 py-1 rounded">
                                pagefile.sys
                            </code>
                            . Trên Linux, thường gọi là{" "}
                            <strong className="text-emerald-300">Swap</strong>.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <AlertTriangle className="text-orange-300" /> Điều
                            cần nhớ
                        </h3>
                        <div className="space-y-3">
                            <RuleCard
                                label="Virtual Memory giúp máy không sập app ngay"
                                value="Khi RAM thiếu, hệ điều hành có thêm vùng tạm để xoay sở."
                                color="emerald"
                            />
                            <RuleCard
                                label="Swap/Page File chậm hơn RAM"
                                value="SSD nhanh vẫn chậm hơn RAM rất nhiều; HDD còn chậm hơn nữa."
                                color="orange"
                            />
                            <RuleCard
                                label="Không thay thế RAM thật"
                                value="Nếu swap/page liên tục, giải pháp tốt thường là nâng RAM."
                                color="rose"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function DeskCabinetAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: mặt bàn và tủ phụ"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-4">
                    <AnalogyCard
                        icon={<MemoryStick />}
                        title="Mặt bàn"
                        desc="RAM: tài liệu đang dùng nhiều, lấy rất nhanh."
                        color="emerald"
                    />
                    <AnalogyCard
                        icon={<HardDrive />}
                        title="Tủ phụ"
                        desc="Page File / Swap: cất tạm tài liệu ít dùng khi bàn đầy."
                        color="rose"
                    />
                    <AnalogyCard
                        icon={<Cpu />}
                        title="Người làm việc"
                        desc="CPU: xử lý dữ liệu đang nằm trên bàn."
                        color="cyan"
                    />
                    <AnalogyCard
                        icon={<Timer />}
                        title="Đứng dậy lấy tủ"
                        desc="Khi cần dữ liệu trong swap, phải đọc từ SSD/HDD về RAM nên khựng."
                        color="orange"
                    />
                </div>
                <div className="mt-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-amber-300">Hình dung:</strong> Nếu
                    bàn làm việc đầy, bạn không vứt tài liệu đi ngay. Bạn chuyển
                    tài liệu ít dùng sang tủ phụ. Nhưng mỗi lần cần lại, phải
                    đứng dậy mở tủ nên chậm hơn.
                </div>
            </div>
        </section>
    );
}

function MemoryFlowSimulator() {
    const steps = [
        {
            icon: <Laptop />,
            title: "Ứng dụng cần bộ nhớ",
            desc: "Chrome, Photoshop, VS Code hoặc game yêu cầu thêm vùng nhớ để chạy.",
            color: "cyan",
        },
        {
            icon: <Cpu />,
            title: "Hệ điều hành cấp vùng nhớ ảo",
            desc: "Ứng dụng nhìn thấy địa chỉ bộ nhớ ảo, không trực tiếp quản RAM vật lý.",
            color: "purple",
        },
        {
            icon: <MemoryStick />,
            title: "Dữ liệu đang dùng nằm trong RAM",
            desc: "Các trang bộ nhớ hoạt động nhiều được giữ trong RAM thật để phản hồi nhanh.",
            color: "emerald",
        },
        {
            icon: <Gauge />,
            title: "RAM gần đầy",
            desc: "Hệ điều hành tìm các trang bộ nhớ ít hoạt động hơn.",
            color: "amber",
        },
        {
            icon: <HardDrive />,
            title: "Ghi xuống Page File / Swap",
            desc: "Trang ít dùng được chuyển xuống vùng tạm trên SSD/HDD để giải phóng RAM.",
            color: "rose",
        },
        {
            icon: <RefreshCcw />,
            title: "Đọc lại khi cần",
            desc: "Khi app cần dữ liệu đó, hệ điều hành kéo nó từ SSD/HDD về RAM. Đây là lúc máy có thể khựng.",
            color: "orange",
        },
    ];
    const [active, setActive] = useState(0);
    const item = steps[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Bộ nhớ ảo hoạt động như thế nào?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[320px] flex flex-col justify-between">
                        <div>
                            <div
                                className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                            >
                                {React.cloneElement(item.icon, { size: 32 })}
                            </div>
                            <p className="text-purple-300 text-sm font-bold mb-2">
                                Bước {active + 1}/{steps.length}
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
                            Bước tiếp theo <ChevronRight size={18} />
                        </button>
                    </div>
                    <div className="space-y-2">
                        {steps.map((s, i) => (
                            <button
                                key={s.title}
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

function VirtualMemoryTypes() {
    const types = [
        [
            "Page File",
            "Windows",
            "File trên SSD/HDD, thường là pagefile.sys",
            "Tự quản lý tốt, dễ dùng",
            "Nếu dùng nhiều sẽ chậm",
            "Người dùng Windows phổ thông",
            "rose",
        ],
        [
            "Swap Partition",
            "Linux",
            "Phân vùng riêng trên ổ đĩa",
            "Ổn định, truyền thống, tốt cho một số cấu hình hibernate",
            "Kém linh hoạt hơn swap file",
            "Linux desktop/server",
            "emerald",
        ],
        [
            "Swap File",
            "Linux",
            "File nằm trong phân vùng hệ thống",
            "Dễ tăng/giảm dung lượng hơn",
            "Cần cấu hình đúng nếu dùng hibernate",
            "Linux hiện đại",
            "cyan",
        ],
        [
            "Compressed Memory",
            "Windows/macOS/Linux",
            "Nén dữ liệu ngay trong RAM",
            "Giảm ghi xuống SSD, nhanh hơn swap ra ổ",
            "Tốn CPU để nén/giải nén",
            "Laptop, máy RAM ít",
            "purple",
        ],
        [
            "zswap",
            "Linux",
            "Cache nén trong RAM cho swap pages",
            "Giảm I/O xuống ổ, có thể cải thiện khi swap",
            "Tốn CPU, cần kernel/cấu hình hỗ trợ",
            "Linux nâng cao",
            "orange",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Các loại bộ nhớ ảo thường gặp"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[980px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Loại</th>
                            <th className="p-4">Hệ điều hành</th>
                            <th className="p-4">Nằm ở đâu?</th>
                            <th className="p-4">Ưu điểm</th>
                            <th className="p-4">Nhược điểm</th>
                            <th className="p-4">Phù hợp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {types.map(
                            ([type, os, where, good, bad, fit, color]) => (
                                <tr
                                    key={type}
                                    className="border-t border-slate-800"
                                >
                                    <td
                                        className={`p-4 font-extrabold ${textColor(color)}`}
                                    >
                                        {type}
                                    </td>
                                    <td className="p-4 text-slate-300">{os}</td>
                                    <td className="p-4 text-slate-300">
                                        {where}
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        {good}
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        {bad}
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        {fit}
                                    </td>
                                </tr>
                            ),
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        ram: {
            icon: <MemoryStick />,
            title: "RAM vật lý",
            desc: "Yếu tố quan trọng nhất. RAM đủ thì máy ít phải dùng page file/swap.",
            impact: "8GB dễ thiếu khi nhiều app; 16GB phổ thông tốt; 32GB thoải mái hơn cho đa nhiệm/lập trình/đồ họa.",
        },
        size: {
            icon: <Database />,
            title: "Dung lượng Page File / Swap",
            desc: "Không có một con số đúng cho mọi máy; phụ thuộc peak commit, crash dump, hibernate và tác vụ.",
            impact: "Người dùng Windows phổ thông thường nên để hệ điều hành tự quản lý.",
        },
        disk: {
            icon: <HardDrive />,
            title: "Ổ chứa Page File / Swap",
            desc: "Swap nằm trên ổ nào thì phụ thuộc tốc độ ổ đó.",
            impact: "NVMe SSD tốt hơn SATA SSD, SATA SSD tốt hơn HDD, nhưng tất cả vẫn chậm hơn RAM.",
        },
        pressure: {
            icon: <Gauge />,
            title: "Commit / Memory Pressure",
            desc: "Cho biết hệ thống đang chịu áp lực bộ nhớ ra sao.",
            impact: "Memory 90–100%, ổ C hoạt động liên tục, app khựng là dấu hiệu thiếu RAM.",
        },
        hibernate: {
            icon: <RefreshCcw />,
            title: "Hibernate",
            desc: "Ngủ đông lưu trạng thái RAM xuống ổ đĩa rồi tắt máy.",
            impact: "Linux dùng hibernate thường cần swap đủ phù hợp để lưu trạng thái bộ nhớ.",
        },
    };
    const [active, setActive] = useState("ram");
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
                        <p>{item.desc}</p>
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

function MemoryPressureLab() {
    const [apps, setApps] = useState(3);
    const [ram, setRam] = useState(8);
    const used = Math.min(100, Math.round(((apps * 2.2) / ram) * 100));
    const swapping = used >= 90;
    const warning = used >= 70 && used < 90;

    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="purple"
                title="Lab: RAM đầy thì máy phản ứng ra sao?"
                icon={<Gauge />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5">
                            Điều chỉnh tình huống
                        </h3>
                        <label className="block text-sm text-slate-400 mb-2">
                            RAM máy: {ram}GB
                        </label>
                        <input
                            type="range"
                            min="4"
                            max="32"
                            step="4"
                            value={ram}
                            onChange={(e) => setRam(Number(e.target.value))}
                            className="w-full mb-6"
                        />
                        <label className="block text-sm text-slate-400 mb-2">
                            Số nhóm app nặng đang mở: {apps}
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={apps}
                            onChange={(e) => setApps(Number(e.target.value))}
                            className="w-full"
                        />
                        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                            <InfoCard
                                label="RAM pressure"
                                value={`${used}%`}
                                color={
                                    swapping
                                        ? "rose"
                                        : warning
                                          ? "orange"
                                          : "emerald"
                                }
                            />
                            <InfoCard
                                label="Swap/Page File"
                                value={
                                    swapping
                                        ? "Đang dùng nhiều"
                                        : warning
                                          ? "Có thể bắt đầu dùng"
                                          : "Ít dùng"
                                }
                                color={
                                    swapping
                                        ? "rose"
                                        : warning
                                          ? "orange"
                                          : "emerald"
                                }
                            />
                        </div>
                    </div>
                    <div
                        className={`${softBorder(swapping ? "rose" : warning ? "orange" : "emerald")} border rounded-3xl p-6 flex flex-col justify-center`}
                    >
                        <div className="h-6 bg-slate-950 rounded-full border border-slate-800 overflow-hidden mb-6">
                            <div
                                className={`h-full ${swapping ? "bg-rose-500" : warning ? "bg-orange-500" : "bg-emerald-500"}`}
                                style={{ width: `${used}%` }}
                            />
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-3">
                            {swapping
                                ? "Máy dễ khựng"
                                : warning
                                  ? "Gần đầy RAM"
                                  : "RAM còn tương đối ổn"}
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            {swapping
                                ? "Hệ điều hành phải đẩy nhiều dữ liệu ít dùng xuống Page File/Swap. Khi quay lại app cũ, máy phải đọc từ SSD/HDD về RAM nên có thể lag rõ."
                                : warning
                                  ? "RAM đang bị áp lực. Nếu mở thêm app/tab, hệ điều hành có thể bắt đầu dùng Page File/Swap nhiều hơn."
                                  : "RAM thật còn đủ cho các app đang chạy, nên hệ thống ít phải dùng vùng tạm trên SSD/HDD."}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Laptop />,
            title: "Laptop 8GB RAM + Windows 11 + SSD SATA",
            subtitle: "Chrome 20 tab + Word + Zalo + Teams",
            color: "rose",
            points: [
                "RAM 8GB gần đầy",
                "Windows đẩy dữ liệu ít dùng xuống pagefile.sys",
                "Máy vẫn chạy",
                "Quay lại app cũ có thể khựng 1–3 giây",
                "Nâng lên 16GB giúp đa nhiệm mượt hơn",
            ],
            lesson: "SSD giúp chống cháy tốt hơn HDD, nhưng nâng RAM vẫn là giải pháp đúng nếu thường xuyên thiếu RAM.",
        },
        {
            icon: <Monitor />,
            title: "PC 16GB RAM + Photoshop/Premiere",
            subtitle: "Dựng ảnh/video nhẹ-vừa",
            color: "orange",
            points: [
                "RAM 16GB có thể đầy khi file/project lớn",
                "Windows dùng Page File",
                "Adobe có thể dùng scratch disk riêng",
                "SSD bị đọc/ghi nhiều",
                "32GB RAM thường hiệu quả hơn chỉ tăng page file",
            ],
            lesson: "Với creator workload, Page File là phao cứu sinh; RAM thật mới là nâng cấp hiệu năng lâu dài.",
        },
        {
            icon: <Cpu />,
            title: "Linux 8GB RAM + Docker / VM nhẹ",
            subtitle: "Ubuntu + VS Code + container + browser",
            color: "emerald",
            points: [
                "Linux chuyển page ít hoạt động sang swap",
                "Hệ thống tránh bị OOM ngay",
                "Swap nhiều thì máy chậm rõ",
                "16GB tốt hơn cho Docker học tập",
                "32GB hợp nhiều container/VM/database local",
            ],
            lesson: "Swap giúp tránh crash, nhưng nếu swap liên tục thì nên tăng RAM hoặc giảm workload.",
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

function DecisionLab() {
    const scenarios = {
        auto: {
            icon: <Settings />,
            title: "Windows phổ thông",
            answer: "Nên để Page File ở chế độ tự động. Windows thường tự quản lý ổn, chỉ chỉnh tay khi xử lý lỗi cụ thể hoặc hiểu rõ nhu cầu.",
            color: "cyan",
        },
        full: {
            icon: <Gauge />,
            title: "Memory 90–100% thường xuyên",
            answer: "Nên nâng RAM thay vì chỉ tăng Page File. Swap/page nhiều làm máy chậm vì phải đọc/ghi SSD/HDD liên tục.",
            color: "rose",
        },
        hdd: {
            icon: <HardDrive />,
            title: "Swap trên HDD",
            answer: "Nếu còn dùng HDD, nâng lên SSD sẽ giúp giảm khựng khi swap/page, nhưng nếu thiếu RAM nặng thì vẫn nên nâng RAM.",
            color: "orange",
        },
        hibernate: {
            icon: <RefreshCcw />,
            title: "Linux cần hibernate",
            answer: "Cần tính swap phù hợp vì hibernate lưu trạng thái RAM xuống ổ đĩa. Swap file/partition phải được cấu hình đúng.",
            color: "emerald",
        },
        disable: {
            icon: <XCircle />,
            title: "Muốn tắt Page File",
            answer: "Không nên tắt nếu không có lý do rõ. Một số phần mềm, game và crash dump của Windows vẫn cần page file.",
            color: "purple",
        },
    };
    const [active, setActive] = useState("full");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Lab: nên chỉnh swap/page hay nâng RAM?"
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
            wrong: "Có bộ nhớ ảo rồi thì không cần nâng RAM",
            right: "Bộ nhớ ảo giúp tránh crash, nhưng không thay được RAM thật vì swap/page file nằm trên SSD/HDD và chậm hơn RAM rất nhiều.",
        },
        {
            wrong: "Tắt Page File để máy nhanh hơn",
            right: "Thường không nên tắt Page File, nhất là trên Windows. Một số app và cơ chế crash dump vẫn cần nó.",
        },
        {
            wrong: "Tăng Page File thật lớn sẽ nhanh như nâng RAM",
            right: "Page File lớn hơn giúp tránh lỗi thiếu bộ nhớ, nhưng nếu dùng liên tục máy vẫn chậm.",
        },
        {
            wrong: "Swap dùng SSD sẽ làm hỏng SSD ngay",
            right: "SSD có giới hạn ghi, nhưng với người dùng bình thường, vấn đề lớn hơn là trải nghiệm chậm nếu máy swap quá nhiều mỗi ngày.",
        },
    ];
    const tips = [
        "Người dùng Windows phổ thông nên để Page File tự động.",
        "Nếu thường xuyên dùng trên 90% RAM, hãy nâng RAM thay vì chỉ tăng Page File.",
        "Đặt hệ điều hành và Page File/Swap trên SSD, tránh HDD nếu có thể.",
        "Không tắt swap/page file chỉ vì thấy máy có nhiều RAM.",
        "Linux laptop cần hibernate thì phải tính swap cẩn thận.",
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
                        <Lightbulb /> Mẹo thực chiến
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
                        <span className="bg-rose-500/20 text-rose-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-rose-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                Virtual Memory = RAM thật + vùng tạm trên
                                SSD/HDD
                            </p>
                            <br />
                            <p className="text-slate-500"># Windows</p>
                            <p className="text-slate-300">
                                Page File / Paging File = pagefile.sys
                            </p>
                            <br />
                            <p className="text-slate-500"># Linux</p>
                            <p className="text-slate-300">
                                Swap = swap partition hoặc swap file
                            </p>
                            <br />
                            <p className="text-slate-500"># Quy luật</p>
                            <p className="text-slate-300">
                                RAM đủ → ít swap → phản hồi nhanh
                            </p>
                            <p className="text-slate-300">
                                RAM thiếu → swap/page nhiều → máy khựng
                            </p>
                            <br />
                            <p className="text-red-300">
                                Swap/Page File là phao cứu sinh, không phải RAM
                                thật.
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
        question: "Bộ nhớ ảo thường dùng gì để hỗ trợ khi RAM thiếu?",
        options: [
            "Màn hình",
            "Một phần SSD/HDD làm vùng tạm",
            "Card âm thanh",
            "Cổng USB-C",
        ],
        correct: 1,
        explanation:
            "Khi RAM thiếu, hệ điều hành có thể dùng một phần SSD/HDD làm Page File hoặc Swap để chứa dữ liệu ít dùng.",
    },
    {
        question: "Trên Windows, vùng bộ nhớ ảo trên ổ đĩa thường gọi là gì?",
        options: ["Page File / Paging File", "BIOS", "VRAM", "Cache L1"],
        correct: 0,
        explanation:
            "Windows gọi vùng bộ nhớ ảo trên ổ đĩa là Page File hoặc Paging File, thường là pagefile.sys.",
    },
    {
        question: "Nhận định nào đúng nhất?",
        options: [
            "Swap/Page File nhanh ngang RAM",
            "Có swap rồi thì không cần RAM",
            "Swap/Page File giúp tránh thiếu bộ nhớ nhưng chậm hơn RAM thật",
            "Tắt Page File luôn làm máy nhanh hơn",
        ],
        correct: 2,
        explanation:
            "Swap/Page File giúp hệ thống tránh lỗi thiếu bộ nhớ, nhưng vì nằm trên SSD/HDD nên chậm hơn RAM thật rất nhiều.",
    },
    {
        question:
            "Nếu máy thường xuyên dùng 90–100% RAM và swap nhiều, giải pháp tốt hơn thường là gì?",
        options: [
            "Nâng RAM nếu máy hỗ trợ",
            "Đổi hình nền",
            "Tắt bàn phím",
            "Tăng âm lượng loa",
        ],
        correct: 0,
        explanation:
            "Nếu máy thiếu RAM thường xuyên, nâng RAM là giải pháp hiệu năng lâu dài hơn so với chỉ tăng page file/swap.",
    },
    {
        question: "Trên Linux, swap có thể tồn tại dưới dạng nào?",
        options: [
            "Swap partition hoặc swap file",
            "Màn hình ngoài",
            "Ổ DVD bắt buộc",
            "Card âm thanh",
        ],
        correct: 0,
        explanation:
            "Linux có thể dùng swap partition hoặc swap file tùy cách cấu hình.",
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
                    <strong className="text-rose-400">
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
                <span className="text-rose-400">
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
                        className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu Virtual Memory / Swap. Tiếp theo là cách chọn và
                nâng cấp RAM — khi nào nên nâng từ 8GB lên 16GB, từ 16GB lên
                32GB, chọn 1 thanh hay 2 thanh và tránh mua nhầm RAM cho máy.
            </p>
            <Link
                to="/phan-3-8"
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-rose-500/20"
            >
                Bài tiếp theo: 3.8 — Cách chọn và nâng cấp RAM{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "rose" }) {
    const colorMap = {
        rose: "bg-rose-500/20 text-rose-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
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

function HeroCard({ icon, label, desc, color, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 flex items-center gap-4 ${highlight ? "bg-emerald-500/10 border-emerald-400/50" : softBorder(color)}`}
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
        rose: "bg-rose-500/10 text-rose-300 border border-rose-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.rose;
}

function softBorder(color) {
    const map = {
        rose: "bg-rose-500/5 border-rose-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.rose;
}

function textColor(color) {
    const map = {
        rose: "text-rose-300",
        emerald: "text-emerald-300",
        cyan: "text-cyan-300",
        purple: "text-purple-300",
        amber: "text-amber-300",
        orange: "text-orange-300",
        blue: "text-blue-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-rose-300";
}
