import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowRight,
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
    Laptop,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    PackageCheck,
    Puzzle,
    Search,
    Server,
    Settings,
    Sparkles,
    Users,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                            <Users className="text-emerald-400" size={24} />
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
                    <div className="text-sm font-semibold text-emerald-300 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                        Bài 2.5
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreThreadConcept />
                <WorkerAnalogy />
                <ThreadMappingSimulator />
                <CpuConfigExplorer />
                <SpecsExplorer />
                <PerformanceFormula />
                <RealExamples />
                <WorkloadLab />
                <BalanceLab />
                <MistakesAndTips />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-emerald-300">
                        <BookOpen size={16} /> Phần 2: CPU – Bộ xử lý trung tâm
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Số nhân & số luồng
                        <span className="block text-emerald-400">
                            Cores and Threads
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Core là nhân xử lý vật lý, còn Thread là luồng xử lý
                        logic. CPU 6 nhân 12 luồng không phải 12 nhân thật,
                        nhưng giúp tận dụng tài nguyên CPU hiệu quả hơn.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="Core" />
                        <Tag icon={<Workflow size={16} />} text="Thread" />
                        <Tag
                            icon={<Zap size={16} />}
                            text="SMT / Hyper-Threading"
                        />
                        <Tag icon={<Gauge size={16} />} text="Single-core" />
                        <Tag icon={<Layers3 size={16} />} text="Multi-core" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Users />}
                            label="6 cores"
                            desc="6 người thợ thật"
                            color="emerald"
                            highlight
                        />
                        <HeroTile
                            icon={<Workflow />}
                            label="12 threads"
                            desc="12 dòng công việc"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<Gauge />}
                            label="Single-core"
                            desc="Tốc độ từng thợ"
                            color="yellow"
                        />
                        <HeroTile
                            icon={<Layers3 />}
                            label="Multi-core"
                            desc="Nhiều thợ cùng làm"
                            color="purple"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Ví dụ</p>
                        <p>
                            <span className="text-emerald-300">
                                CPU 6 nhân 12 luồng
                            </span>
                        </p>
                        <p className="text-slate-300">
                            = 6 nhân vật lý + 12 luồng logic
                        </p>
                        <p className="text-orange-300">≠ 12 nhân thật</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu Core là nhân xử lý vật lý bên trong CPU.",
        "Hiểu Thread là luồng xử lý logic CPU có thể sắp xếp xử lý.",
        "Biết vì sao CPU 6 nhân 12 luồng rất phổ biến cho PC tầm trung.",
        "Phân biệt hiệu năng single-core và multi-core.",
        "Chọn số nhân/số luồng phù hợp cho văn phòng, gaming, stream, render, máy ảo và lập trình.",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="emerald"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/50 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-300 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
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

function CoreThreadConcept() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: Core và Thread là gì?"
                icon={<Brain />}
            />
            <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center justify-center mb-5">
                        <Users size={28} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white mb-2">
                        Core – Nhân CPU
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-5">
                        Core là một đơn vị xử lý vật lý bên trong CPU. Một nhân
                        giống như một người thợ xử lý công việc.
                    </p>
                    <div className="space-y-2">
                        {[
                            ["2 cores", "Có 2 người thợ"],
                            ["4 cores", "Có 4 người thợ"],
                            ["6 cores", "Có 6 người thợ"],
                            ["8 cores", "Có 8 người thợ"],
                        ].map(([a, b]) => (
                            <div
                                key={a}
                                className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex justify-between text-sm"
                            >
                                <span className="text-emerald-300 font-bold">
                                    {a}
                                </span>
                                <span className="text-slate-300">{b}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center justify-center mb-5">
                        <Workflow size={28} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white mb-2">
                        Thread – Luồng xử lý
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-5">
                        Thread là một dòng công việc CPU có thể xử lý. Một nhân
                        hiện đại có thể xử lý 1 hoặc 2 luồng tùy thiết kế.
                    </p>
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                        <p>CPU 6 nhân 12 luồng</p>
                        <p className="text-slate-500">= 6 nhân vật lý</p>
                        <p className="text-slate-500">
                            = mỗi nhân có thể xử lý 2 luồng
                        </p>
                        <p className="text-cyan-300">= 12 luồng xử lý logic</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WorkerAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: người thợ và dòng công việc"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                    <AnalogyCard
                        icon={<Gauge />}
                        title="Xung nhịp"
                        desc="Tốc độ làm việc của một người thợ."
                        color="yellow"
                    />
                    <AnalogyCard
                        icon={<Users />}
                        title="Số nhân"
                        desc="Số người thợ thật cùng làm việc."
                        color="emerald"
                    />
                    <AnalogyCard
                        icon={<Workflow />}
                        title="Số luồng"
                        desc="Số dòng công việc mà các thợ có thể sắp xếp xử lý."
                        color="cyan"
                    />
                </div>
                <div className="mt-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-orange-300">Điểm mấu chốt:</strong>{" "}
                    thread giúp tận dụng nhân CPU tốt hơn, nhưng thread không
                    mạnh bằng core thật và không nhân đôi hiệu năng trong mọi
                    tác vụ.
                </div>
            </div>
        </section>
    );
}

function ThreadMappingSimulator() {
    const [cores, setCores] = useState(6);
    const threads = cores * 2;
    const tasks = [
        "Chrome",
        "Zoom",
        "Nhạc",
        "Tải file",
        "Windows",
        "Discord",
        "Game",
        "Antivirus",
        "Office",
        "Driver",
        "Background app",
        "Update",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="blue"
                title="Mô phỏng: hệ điều hành phân việc cho core/thread"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="flex flex-wrap gap-3 mb-6">
                    {[2, 4, 6, 8].map((n) => (
                        <button
                            key={n}
                            onClick={() => setCores(n)}
                            className={`px-4 py-2 rounded-xl border font-bold transition-all ${cores === n ? "bg-blue-500 text-white border-blue-400" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`}
                        >
                            {n} nhân / {n * 2} luồng
                        </button>
                    ))}
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-extrabold text-white">
                            CPU {cores} nhân / {threads} luồng
                        </h3>
                        <p className="text-slate-500 mt-1">
                            Mỗi core có 2 thread logic trong mô phỏng này
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Array.from({ length: cores }).map((_, i) => (
                            <div
                                key={i}
                                className="bg-slate-900 border border-slate-800 rounded-2xl p-4"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center justify-center font-bold text-sm">
                                        C{i + 1}
                                    </div>
                                    <span className="text-white font-bold">
                                        Core {i + 1}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {[0, 1].map((t) => {
                                        const threadNum = i * 2 + t + 1;
                                        return (
                                            <div
                                                key={t}
                                                className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-3 text-xs"
                                            >
                                                <p className="text-cyan-300 font-bold">
                                                    Thread {threadNum}
                                                </p>
                                                <p className="text-slate-300 mt-1">
                                                    {
                                                        tasks[
                                                            (threadNum - 1) %
                                                                tasks.length
                                                        ]
                                                    }
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function CpuConfigExplorer() {
    const configs = {
        two: {
            label: "2 nhân / 4 luồng",
            desc: "Cấu hình cũ hoặc rất cơ bản",
            good: "Rẻ, tiết kiệm điện",
            bad: "Dễ chậm khi đa nhiệm",
            fit: "Máy văn phòng rất nhẹ, máy cũ",
            icon: <Laptop />,
            color: "slate",
        },
        four: {
            label: "4 nhân / 8 luồng",
            desc: "Mức cơ bản hiện nay",
            good: "Đủ học tập, văn phòng, web",
            bad: "Hạn chế với game/app nặng",
            fit: "Học online, Word, Excel, Chrome",
            icon: <Monitor />,
            color: "cyan",
        },
        six: {
            label: "6 nhân / 12 luồng",
            desc: "Mức rất phổ biến",
            good: "Cân bằng giá/hiệu năng",
            bad: "Render nặng chưa tối ưu bằng CPU nhiều nhân hơn",
            fit: "Gaming, lập trình, văn phòng nặng",
            icon: <Gamepad2 />,
            color: "emerald",
        },
        eight: {
            label: "8 nhân / 16 luồng",
            desc: "Mạnh hơn, đa nhiệm tốt",
            good: "Tốt cho game, stream, edit video",
            bad: "Giá cao hơn",
            fit: "Gaming cao cấp, dựng video, multitask",
            icon: <Sparkles />,
            color: "purple",
        },
        sixteen: {
            label: "12–16 nhân trở lên",
            desc: "CPU hiệu năng cao",
            good: "Rất tốt cho render, máy ảo, biên dịch lớn",
            bad: "Đắt, cần tản nhiệt/nguồn tốt",
            fit: "Workstation, creator, lập trình nặng",
            icon: <Cpu />,
            color: "orange",
        },
        server: {
            label: "32 nhân trở lên",
            desc: "CPU workstation/server",
            good: "Xử lý song song rất mạnh",
            bad: "Rất đắt, không cần cho đa số người dùng",
            fit: "Server, render farm, datacenter",
            icon: <Server />,
            color: "red",
        },
    };

    const [active, setActive] = useState("six");
    const item = configs[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="purple"
                title="Các loại CPU theo số nhân / số luồng"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {Object.entries(configs).map(([key, cfg]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 text-left border transition-all ${active === key ? `${softBorder(cfg.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(cfg.icon, { size: 20 })}{" "}
                                {cfg.label}
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
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {item.label}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {item.desc}
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

function SpecsExplorer() {
    const specs = {
        cores: {
            icon: <Cpu />,
            title: "Cores",
            detail: "Số lõi xử lý vật lý.",
            impact: "Càng nhiều nhân càng tốt cho đa nhiệm, render, máy ảo nếu phần mềm tận dụng được.",
        },
        threads: {
            icon: <Workflow />,
            title: "Threads",
            detail: "Số dòng xử lý logic.",
            impact: "Giúp CPU tận dụng tài nguyên tốt hơn, đặc biệt khi nhiều tác vụ chờ dữ liệu.",
        },
        single: {
            icon: <Gauge />,
            title: "Single-core Performance",
            detail: "Hiệu năng từng nhân.",
            impact: "Quan trọng với game, app nhẹ, thao tác phản hồi nhanh.",
        },
        multi: {
            icon: <Layers3 />,
            title: "Multi-core Performance",
            detail: "Hiệu năng khi nhiều nhân cùng chạy.",
            impact: "Quan trọng với render, encode, compile, máy ảo.",
        },
        smt: {
            icon: <Zap />,
            title: "SMT / Hyper-Threading",
            detail: "Công nghệ cho phép một nhân xử lý nhiều luồng.",
            impact: "Tăng hiệu quả xử lý song song, nhưng không biến 1 core thành 2 core thật.",
        },
        clock: {
            icon: <Gauge />,
            title: "Clock Speed",
            detail: "Xung nhịp CPU.",
            impact: "Ảnh hưởng tốc độ xử lý từng nhân.",
        },
        cache: {
            icon: <Database />,
            title: "Cache",
            detail: "Bộ nhớ đệm CPU.",
            impact: "Giúp các nhân lấy dữ liệu nhanh hơn.",
        },
        tdp: {
            icon: <Zap />,
            title: "TDP / Power",
            detail: "Công suất/nhiệt thiết kế.",
            impact: "CPU nhiều nhân thường cần tản nhiệt tốt hơn.",
        },
    };

    const [active, setActive] = useState("cores");
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
                            Thông số khi chọn CPU
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
                            <strong className="text-white">Mẹo:</strong> so sánh
                            CPU cần xem số nhân/luồng, xung nhịp, IPC, cache,
                            đời CPU, tản nhiệt và phần mềm sử dụng.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PerformanceFormula() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="emerald"
                title="Công thức tư duy: nhiều nhân chỉ mạnh khi phần mềm dùng được"
                icon={<Puzzle />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 font-mono text-center">
                    <p className="text-slate-500 mb-3">
                        // Không phải công thức toán tuyệt đối
                    </p>
                    <p className="text-xl md:text-2xl font-extrabold text-white leading-relaxed">
                        Hiệu năng CPU thực tế ≈{" "}
                        <span className="text-emerald-300">
                            số nhân hữu dụng
                        </span>{" "}
                        ×{" "}
                        <span className="text-cyan-300">
                            hiệu năng từng nhân
                        </span>{" "}
                        ×{" "}
                        <span className="text-purple-300">
                            khả năng tận dụng của phần mềm
                        </span>
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <FormulaCard
                        icon={<Users />}
                        title="Số nhân hữu dụng"
                        desc="Không phải tác vụ nào cũng dùng được hết mọi nhân."
                        color="emerald"
                    />
                    <FormulaCard
                        icon={<Gauge />}
                        title="Hiệu năng từng nhân"
                        desc="Quan trọng với game, app nhẹ, thao tác phản hồi."
                        color="cyan"
                    />
                    <FormulaCard
                        icon={<Settings />}
                        title="Tối ưu phần mềm"
                        desc="Render/máy ảo/compile thường tận dụng nhiều nhân tốt hơn Notepad."
                        color="purple"
                    />
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
            subtitle: "6 nhân Performance-core / 12 luồng",
            points: [
                "6 P-core, 0 E-core",
                "6 nhân / 12 luồng",
                "Turbo tối đa 4.40GHz",
                "18MB Intel Smart Cache",
                "Base power 65W",
            ],
            lesson: "6 nhân 12 luồng đủ mạnh cho học tập, văn phòng nặng, gaming Full HD và lập trình cơ bản đến trung bình.",
            color: "orange",
        },
        {
            icon: <Cpu />,
            title: "AMD Ryzen 5 5600",
            subtitle: "6 nhân 12 luồng, L3 Cache 32MB",
            points: [
                "6 nhân / 12 luồng",
                "Base 3.5GHz, boost 4.4GHz",
                "L2 Cache 3MB",
                "L3 Cache 32MB",
                "TDP 65W, socket AM4",
            ],
            lesson: "Cân bằng tốt cho PC phổ thông, gaming Full HD, học tập, lập trình và nâng cấp AM4 tiết kiệm.",
            color: "emerald",
        },
        {
            icon: <Sparkles />,
            title: "CPU 8 nhân 16 luồng",
            subtitle: "Gaming cao cấp và creator",
            points: [
                "Đa nhiệm mạnh hơn 6 nhân 12 luồng",
                "Thoải mái hơn khi game + stream + ghi hình",
                "Hợp dựng video và làm việc nặng",
                "Giá cao hơn",
                "Cần RAM/tản nhiệt cân bằng",
            ],
            lesson: "8 nhân 16 luồng là mức hợp lý cho gaming cao cấp, stream, edit video và multitask nặng hơn.",
            color: "purple",
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

function WorkloadLab() {
    const scenarios = {
        office: {
            icon: <Laptop />,
            title: "Học tập / văn phòng",
            tasks: "Word, Excel, Chrome, Zoom, học online.",
            need: "4 nhân 8 luồng hoặc 6 nhân 12 luồng là rất ổn.",
            note: "SSD và RAM đủ thường quan trọng hơn CPU quá nhiều nhân.",
            color: "cyan",
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Gaming Full HD",
            tasks: "Game eSports, game phổ thông, Discord, Chrome.",
            need: "6 nhân 12 luồng là mức rất hợp lý.",
            note: "GPU, hiệu năng từng nhân, xung nhịp và cache cũng rất quan trọng.",
            color: "emerald",
        },
        stream: {
            icon: <Monitor />,
            title: "Gaming + stream / edit vừa",
            tasks: "Chơi game, stream, ghi hình, edit video vừa.",
            need: "Nên cân nhắc 8 nhân 16 luồng.",
            note: "Nhiều tác vụ chạy cùng lúc sẽ hưởng lợi từ nhiều nhân hơn.",
            color: "purple",
        },
        heavy: {
            icon: <Server />,
            title: "Render / máy ảo / lập trình nặng",
            tasks: "Render video, compile code lớn, chạy nhiều VM.",
            need: "8 nhân 16 luồng trở lên; RAM nên từ 32GB nếu có thể.",
            note: "CPU nhiều nhân phát huy rõ nếu phần mềm chia việc tốt.",
            color: "orange",
        },
    };
    const [active, setActive] = useState("gaming");
    const item = scenarios[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Lab: chọn số nhân / số luồng theo nhu cầu"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-3 mb-6">
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
                            {item.tasks}
                        </p>
                    </div>
                    <div className="space-y-3">
                        <InfoCard
                            label="Nên chọn"
                            value={item.need}
                            color={item.color}
                        />
                        <InfoCard
                            label="Ghi nhớ"
                            value={item.note}
                            color="blue"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function BalanceLab() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="orange"
                title="Lab: nhiều nhân chưa chắc giải quyết mọi vấn đề"
                icon={<AlertTriangle />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                    <BalanceCard
                        title="CPU 12 nhân + RAM 8GB"
                        result="Dễ nghẽn RAM khi mở project lớn hoặc nhiều máy ảo."
                        icon={<MemoryStick />}
                        color="red"
                    />
                    <BalanceCard
                        title="CPU 6 nhân + SSD + RAM 16GB"
                        result="Văn phòng, học tập, game phổ thông thường rất mượt và cân bằng."
                        icon={<HardDrive />}
                        color="emerald"
                    />
                    <BalanceCard
                        title="CPU 16 nhân + tản yếu"
                        result="Tải nặng lâu có thể nóng, tụt xung và không đạt hiệu năng kỳ vọng."
                        icon={<Zap />}
                        color="orange"
                    />
                </div>
                <div className="mt-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-orange-300">Kết luận:</strong> CPU,
                    RAM, SSD, GPU, nguồn và tản nhiệt phải cân bằng. Đừng chỉ
                    mua CPU nhiều nhân rồi bỏ quên phần còn lại.
                </div>
            </div>
        </section>
    );
}

function MistakesAndTips() {
    const mistakes = [
        {
            wrong: "Thread giống hệt core",
            right: "Core là nhân vật lý, Thread là luồng xử lý logic. 6 nhân 12 luồng không phải 12 nhân thật.",
        },
        {
            wrong: "Càng nhiều nhân thì chơi game càng mạnh",
            right: "Game còn cần hiệu năng từng nhân, xung nhịp, cache, GPU và mức tối ưu của game.",
        },
        {
            wrong: "Máy văn phòng cần CPU thật nhiều nhân",
            right: "Văn phòng thường cần phản hồi nhanh; SSD, RAM đủ, CPU đời không quá cũ quan trọng hơn CPU 12–16 nhân.",
        },
        {
            wrong: "CPU nhiều nhân thì không cần RAM nhiều",
            right: "CPU nhiều nhân xử lý tốt hơn, nhưng thiếu RAM vẫn làm máy chậm, nhất là project lớn và máy ảo.",
        },
    ];

    const tips = [
        "Học tập/văn phòng: tối thiểu 4 nhân 8 luồng nếu có thể, RAM 8GB–16GB, SSD.",
        "Gaming Full HD: 6 nhân 12 luồng là mức rất hợp lý với Core i5/Ryzen 5 đời không quá cũ.",
        "Gaming + stream hoặc dựng video vừa: cân nhắc 8 nhân 16 luồng.",
        "Render, máy ảo, lập trình nặng: ưu tiên 8 nhân 16 luồng trở lên và RAM 32GB nếu có thể.",
        "So sánh CPU: xem số nhân/luồng, xung nhịp, IPC, cache, đời CPU, tản nhiệt và nhu cầu phần mềm.",
        "Laptop cùng số nhân/luồng vẫn khác hiệu năng vì giới hạn nhiệt và điện.",
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
                        <span className="bg-emerald-500/20 text-emerald-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-emerald-300 border border-slate-800 shadow-inner space-y-2">
                            <p>CORE = nhân xử lý vật lý</p>
                            <p>THREAD = luồng xử lý logic</p>
                            <br />
                            <p className="text-slate-500"># Ví dụ</p>
                            <p className="text-slate-300">
                                6 nhân 12 luồng = 6 core thật + 12 thread logic
                            </p>
                            <p className="text-orange-300">
                                Không bằng 12 core thật
                            </p>
                            <br />
                            <p className="text-slate-500"># Công thức tư duy</p>
                            <p className="text-slate-300">
                                Hiệu năng ≈ số nhân hữu dụng × hiệu năng từng
                                nhân × phần mềm
                            </p>
                            <br />
                            <p className="text-slate-500"># Chọn nhanh</p>
                            <p className="text-slate-300">Văn phòng: 4C/8T+</p>
                            <p className="text-slate-300">
                                Gaming phổ thông: 6C/12T
                            </p>
                            <p className="text-slate-300">
                                Stream/render: 8C/16T+
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
        question: "Core trong CPU là gì?",
        options: [
            "Dung lượng ổ cứng",
            "Nhân xử lý vật lý bên trong CPU",
            "Độ phân giải màn hình",
            "Công suất nguồn",
        ],
        correct: 1,
        explanation:
            "Core là nhân xử lý vật lý trong CPU, giống như một người thợ thật xử lý công việc.",
    },
    {
        question: "CPU 6 nhân 12 luồng nghĩa là gì?",
        options: [
            "Có 12 CPU riêng biệt",
            "Có 6 nhân vật lý và 12 luồng xử lý logic",
            "Có 6GB RAM và 12GB SSD",
            "Có 12 màn hình xuất hình",
        ],
        correct: 1,
        explanation:
            "6 nhân 12 luồng nghĩa là có 6 core vật lý và tổng cộng 12 thread logic để sắp xếp xử lý công việc.",
    },
    {
        question: "Tác vụ nào thường tận dụng CPU nhiều nhân tốt hơn?",
        options: [
            "Render video, chạy máy ảo, biên dịch code lớn",
            "Chỉ mở Notepad",
            "Di chuyển chuột",
            "Tắt màn hình",
        ],
        correct: 0,
        explanation:
            "Render, máy ảo và biên dịch code lớn thường chia việc tốt cho nhiều nhân CPU hơn các tác vụ rất nhẹ.",
    },
    {
        question: "Thread có mạnh bằng core thật không?",
        options: [
            "Luôn mạnh ngang core thật",
            "Không, thread là luồng logic giúp tận dụng core tốt hơn",
            "Thread là ổ cứng",
            "Thread là màn hình",
        ],
        correct: 1,
        explanation:
            "Thread không phải core vật lý. Nó giúp tận dụng tài nguyên của core tốt hơn nhưng không biến CPU thành nhiều core thật hơn.",
    },
    {
        question:
            "Với gaming phổ thông Full HD, mức CPU nào thường rất hợp lý?",
        options: [
            "2 nhân 2 luồng đời rất cũ",
            "6 nhân 12 luồng Core i5/Ryzen 5 đời không quá cũ",
            "32 nhân server bắt buộc",
            "Không cần CPU",
        ],
        correct: 1,
        explanation:
            "6 nhân 12 luồng là mức cân bằng rất phổ biến cho gaming Full HD khi đi cùng GPU phù hợp.",
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
                    <strong className="text-emerald-400">
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
                <span className="text-emerald-400">
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
                        className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu Core là nhân xử lý vật lý, còn Thread là luồng xử lý
                logic. Tiếp theo là học bộ nhớ đệm CPU, vì nhiều nhân muốn chạy
                nhanh thì cần được tiếp tế dữ liệu thật nhanh từ cache.
            </p>
            <Link
                to="/phan-2-6"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
            >
                Bài tiếp theo: 2.6 — Bộ nhớ đệm CPU: L1, L2, L3 Cache{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "emerald" }) {
    const colorMap = {
        emerald: "bg-emerald-500/20 text-emerald-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
        blue: "bg-blue-500/20 text-blue-300",
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

function FormulaCard({ icon, title, desc, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-5`}>
            <div
                className={`w-11 h-11 rounded-xl ${badgeColor(color)} flex items-center justify-center mb-3`}
            >
                {React.cloneElement(icon, { size: 22 })}
            </div>
            <h4 className="text-white font-bold mb-2">{title}</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
        </div>
    );
}

function BalanceCard({ title, result, icon, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-3xl p-6`}>
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center mb-4`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <h3 className="text-white font-bold mb-3">{title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{result}</p>
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
        slate: "bg-slate-500/10 text-slate-300 border border-slate-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.emerald;
}

function softBorder(color) {
    const map = {
        slate: "bg-slate-500/5 border-slate-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.emerald;
}

function textColor(color) {
    const map = {
        slate: "text-slate-300",
        emerald: "text-emerald-300",
        cyan: "text-cyan-300",
        yellow: "text-yellow-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        pink: "text-pink-300",
        orange: "text-orange-300",
        red: "text-red-300",
    };
    return map[color] || "text-emerald-300";
}
