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
    Film,
    Gamepad2,
    Gauge,
    Laptop,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    PackageCheck,
    PlugZap,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    Thermometer,
    Video,
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
                            <Sparkles className="text-emerald-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 5: GPU — Bộ xử lý đồ họa
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                        Bài 5.3
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <KitchenWorkshopAnalogy />
                <GpuFlowSimulator />
                <ComparisonTable />
                <NeedMatrix />
                <SpecsExplorer />
                <OutputPortGuide />
                <RealExamples />
                <PickerLab />
                <CommonMistakes />
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
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-emerald-300">
                        <BookOpen size={16} /> Phần 5: GPU — Bộ xử lý đồ họa
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        GPU tích hợp
                        <span className="block text-emerald-400">
                            vs GPU rời
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        iGPU đủ cho văn phòng, học tập, xem phim và game nhẹ.
                        dGPU mạnh hơn nhiều cho gaming, dựng video, 3D, AI —
                        nhưng tốn điện, nóng hơn và cần kiểm tra nguồn/cổng xuất
                        hình.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<Cpu size={16} />}
                            text="Integrated Graphics"
                        />
                        <Tag
                            icon={<Sparkles size={16} />}
                            text="Dedicated GPU"
                        />
                        <Tag
                            icon={<MemoryStick size={16} />}
                            text="RAM dùng chung"
                        />
                        <Tag icon={<Database size={16} />} text="VRAM riêng" />
                        <Tag
                            icon={<PlugZap size={16} />}
                            text="Cổng xuất hình"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Cpu />}
                            label="iGPU"
                            desc="Nằm trong CPU/SoC"
                            color="cyan"
                            highlight
                        />
                        <HeroTile
                            icon={<Sparkles />}
                            label="dGPU"
                            desc="Card/chip đồ họa riêng"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<MemoryStick />}
                            label="RAM chung"
                            desc="iGPU mượn RAM hệ thống"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Database />}
                            label="VRAM riêng"
                            desc="dGPU có bộ nhớ đồ họa riêng"
                            color="violet"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Lỗi hay gặp</p>
                        <p>Intel đuôi F thường không có iGPU</p>
                        <p className="text-emerald-300">
                            Có card rời → cắm màn hình vào card rời
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu GPU tích hợp là gì và vì sao nó dùng chung RAM hệ thống.",
        "Hiểu GPU rời là gì và vì sao có hiệu năng cao hơn nhờ chip, VRAM và tản nhiệt riêng.",
        "Biết khi nào chỉ cần iGPU và khi nào nên dùng dGPU.",
        "Tránh lỗi CPU Intel đuôi F không có iGPU và lỗi cắm màn hình sai cổng.",
        "Đọc các yếu tố quan trọng: VRAM riêng, công suất, tản nhiệt, TGP laptop, dual channel RAM cho iGPU.",
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
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-300 flex items-center justify-center font-bold mb-4">
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
                title="Khái niệm cốt lõi: iGPU và dGPU là gì?"
                icon={<Brain />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    icon={<Cpu />}
                    title="GPU tích hợp — Integrated Graphics"
                    color="cyan"
                    definition="Bộ xử lý đồ họa được tích hợp sẵn bên trong CPU hoặc cùng cụm chip xử lý."
                    examples="Intel UHD Graphics 730, AMD Radeon Graphics trong Ryzen 5 5600G, Apple GPU trong M-series."
                    simple="Giống căn bếp nhỏ có sẵn trong nhà: đủ nấu ăn hằng ngày, không đủ mở nhà hàng lớn."
                />
                <ConceptCard
                    icon={<Sparkles />}
                    title="GPU rời — Dedicated / Discrete GPU"
                    color="emerald"
                    definition="Card hoặc chip đồ họa riêng, có GPU riêng, VRAM riêng, tản nhiệt riêng và thường cần nguồn riêng."
                    examples="NVIDIA GeForce RTX 4060, AMD Radeon RX 7600, RTX 4070, RX 7800 XT."
                    simple="Giống xưởng sản xuất riêng chuyên làm đồ họa: lớn hơn, mạnh hơn, tốn điện hơn."
                />
            </div>
        </section>
    );
}

function KitchenWorkshopAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: căn bếp nhỏ và xưởng sản xuất"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-4 gap-4">
                <AnalogyCard
                    icon={<Cpu />}
                    title="iGPU = căn bếp nhỏ"
                    desc="Có sẵn, tiết kiệm, đủ việc nhẹ: văn phòng, học online, xem phim, game eSports nhẹ."
                    color="cyan"
                />
                <AnalogyCard
                    icon={<Sparkles />}
                    title="dGPU = xưởng đồ họa"
                    desc="Mạnh hơn nhiều, xử lý game nặng, render, 3D, AI và dựng video tốt hơn."
                    color="emerald"
                />
                <AnalogyCard
                    icon={<MemoryStick />}
                    title="iGPU dùng RAM chung"
                    desc="RAM hệ thống vừa phục vụ CPU vừa làm bộ nhớ đồ họa, nên băng thông dễ giới hạn."
                    color="orange"
                />
                <AnalogyCard
                    icon={<Database />}
                    title="dGPU có VRAM riêng"
                    desc="Texture, model, frame buffer nằm trong VRAM riêng tốc độ cao của card."
                    color="violet"
                />
            </div>
        </section>
    );
}

function GpuFlowSimulator() {
    const flows = {
        igpu: {
            title: "GPU tích hợp hoạt động",
            color: "cyan",
            steps: [
                {
                    icon: <Cpu />,
                    title: "CPU có GPU tích hợp",
                    desc: "GPU nằm trong CPU hoặc SoC, không phải card riêng.",
                },
                {
                    icon: <Sparkles />,
                    title: "iGPU xử lý hình ảnh",
                    desc: "Xử lý giao diện, video, game nhẹ hoặc tác vụ đồ họa cơ bản.",
                },
                {
                    icon: <MemoryStick />,
                    title: "Mượn RAM hệ thống",
                    desc: "iGPU thường dùng RAM chung với CPU làm bộ nhớ đồ họa.",
                },
                {
                    icon: <Monitor />,
                    title: "Xuất hình qua mainboard/laptop",
                    desc: "Desktop dùng cổng HDMI/DisplayPort trên mainboard nếu CPU có iGPU.",
                },
            ],
        },
        dgpu: {
            title: "GPU rời hoạt động",
            color: "emerald",
            steps: [
                {
                    icon: <Cpu />,
                    title: "CPU gửi lệnh cho card rời",
                    desc: "CPU xử lý logic game/app rồi gửi yêu cầu đồ họa cho GPU rời.",
                },
                {
                    icon: <Sparkles />,
                    title: "dGPU xử lý bằng chip riêng",
                    desc: "Card rời có GPU riêng, tản riêng, thường mạnh hơn iGPU nhiều.",
                },
                {
                    icon: <Database />,
                    title: "VRAM riêng chứa dữ liệu đồ họa",
                    desc: "Texture, model, frame buffer và dữ liệu render nằm trong VRAM riêng.",
                },
                {
                    icon: <PlugZap />,
                    title: "Xuất hình từ card rời",
                    desc: "Màn hình nên cắm vào HDMI/DisplayPort trên card đồ họa rời.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("igpu");
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
                title="Hai loại GPU xử lý khác nhau thế nào?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-3 mb-6">
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
            </div>
        </section>
    );
}

function ComparisonTable() {
    const rows = [
        ["Vị trí", "Nằm trong CPU hoặc SoC", "Card/chip đồ họa riêng"],
        ["Bộ nhớ", "Thường dùng chung RAM hệ thống", "Có VRAM riêng"],
        [
            "Hiệu năng",
            "Đủ tác vụ nhẹ, một số game nhẹ",
            "Mạnh hơn nhiều cho game, render, AI",
        ],
        ["Điện năng", "Tiết kiệm điện", "Tốn điện hơn"],
        ["Nhiệt độ", "Mát hơn, ít cần tản lớn", "Nóng hơn, cần tản tốt"],
        ["Giá thành", "Rẻ hơn vì không cần mua card riêng", "Đắt hơn"],
        [
            "Nâng cấp",
            "Thường không nâng cấp riêng được",
            "Desktop có thể thay/nâng cấp",
        ],
        [
            "Phù hợp",
            "Văn phòng, học tập, xem phim, game nhẹ",
            "Gaming, dựng video, 3D, AI, livestream",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="So sánh GPU tích hợp vs GPU rời"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[860px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Tiêu chí</th>
                            <th className="p-4 text-cyan-300">GPU tích hợp</th>
                            <th className="p-4 text-emerald-300">GPU rời</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([k, a, b]) => (
                            <tr key={k} className="border-t border-slate-800">
                                <td className="p-4 text-white font-bold">
                                    {k}
                                </td>
                                <td className="p-4 text-slate-300">{a}</td>
                                <td className="p-4 text-slate-300">{b}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function NeedMatrix() {
    const rows = [
        ["Word, Excel, PowerPoint", "Đủ", "Không cần"],
        ["YouTube, Netflix", "Đủ", "Không cần"],
        ["Học online, Zoom, Google Meet", "Đủ", "Không cần"],
        ["Lập trình web/app cơ bản", "Thường đủ", "Thường không cần"],
        ["Photoshop nhẹ", "Tạm đủ", "Tốt hơn nếu file lớn"],
        ["Premiere Pro / DaVinci Resolve", "Tùy mức độ", "Nên có"],
        ["Game eSports nhẹ", "Có thể đủ", "Mượt hơn"],
        ["Game AAA nặng", "Không phù hợp", "Cần"],
        ["Blender / 3D render", "Yếu", "Cần"],
        ["AI local / Machine Learning", "Rất hạn chế", "Cần GPU rời mạnh"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Chọn theo nhu cầu"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Nhu cầu</th>
                            <th className="p-4 text-cyan-300">
                                iGPU có đủ không?
                            </th>
                            <th className="p-4 text-emerald-300">
                                Nên dùng dGPU không?
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([need, igpu, dgpu]) => (
                            <tr
                                key={need}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-white font-bold">
                                    {need}
                                </td>
                                <td className="p-4 text-slate-300">{igpu}</td>
                                <td className="p-4 text-slate-300">{dgpu}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        memory: {
            icon: <Database />,
            title: "VRAM riêng hay RAM chung",
            detail: "GPU tích hợp thường dùng chung RAM hệ thống; GPU rời có VRAM riêng như 8GB GDDR6 hoặc 12GB GDDR6X.",
            impact: "iGPU phụ thuộc mạnh vào RAM dual channel và băng thông RAM. dGPU xử lý game/render tốt hơn nhờ VRAM riêng.",
        },
        power: {
            icon: <Zap />,
            title: "Công suất tiêu thụ",
            detail: "iGPU tiết kiệm điện; dGPU mạnh hơn nhưng ăn điện và nóng hơn.",
            impact: "Laptop iGPU thường pin tốt hơn; PC dGPU cần PSU phù hợp.",
        },
        ports: {
            icon: <PlugZap />,
            title: "Cổng xuất hình",
            detail: "Dùng iGPU thì cắm màn hình vào mainboard; dùng dGPU thì cắm vào card rời.",
            impact: "Cắm sai cổng có thể khiến card rời không được dùng đúng cách.",
        },
        cpuName: {
            icon: <Cpu />,
            title: "Tên CPU có iGPU không",
            detail: "Intel desktop đuôi F thường không có iGPU; Ryzen hậu tố G thường có Radeon Graphics tích hợp.",
            impact: "Build PC không card rời phải chọn CPU có iGPU, nếu không có thể không xuất hình.",
        },
        laptopTgp: {
            icon: <Thermometer />,
            title: "TGP laptop",
            detail: "GPU laptop cùng tên có thể khác công suất và hiệu năng do giới hạn điện/tản nhiệt.",
            impact: "Khi mua laptop gaming, xem TGP, tản nhiệt và benchmark thực tế, không chỉ tên RTX 4060/4070.",
        },
        dual: {
            icon: <MemoryStick />,
            title: "Dual Channel RAM",
            detail: "iGPU dùng chung RAM nên rất cần băng thông RAM tốt.",
            impact: "Ryzen G hoặc iGPU mạnh hơn rõ khi dùng 2 thanh RAM chạy dual channel thay vì 1 thanh.",
        },
    };
    const [active, setActive] = useState("memory");
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

function OutputPortGuide() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="purple"
                title="Cắm màn hình vào đâu?"
                icon={<PlugZap />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-3xl p-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center justify-center mb-4">
                        <Cpu />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                        Dùng GPU tích hợp
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Cắm HDMI/DisplayPort vào cổng trên{" "}
                        <strong className="text-cyan-300">mainboard</strong>{" "}
                        hoặc cổng sẵn trên laptop.
                    </p>
                    <pre className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300">
                        Dùng iGPU → cắm vào mainboard
                    </pre>
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center justify-center mb-4">
                        <Sparkles />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                        Dùng GPU rời
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Cắm HDMI/DisplayPort vào cổng trên{" "}
                        <strong className="text-emerald-300">
                            card đồ họa rời
                        </strong>
                        , không phải mainboard.
                    </p>
                    <pre className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300">
                        Dùng dGPU → cắm vào card rời
                    </pre>
                </div>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-red-300">Lỗi người mới:</strong> lắp
                card rời nhưng cắm màn hình vào mainboard, khiến máy dùng iGPU
                hoặc không xuất hình như mong đợi.
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Cpu />,
            title: "AMD Ryzen 5 5600G",
            subtitle: "iGPU phù hợp văn phòng/học tập/game nhẹ",
            color: "cyan",
            points: [
                "CPU 6 nhân, 12 luồng",
                "Có Radeon Graphics tích hợp",
                "Không cần mua card rời cho tác vụ nhẹ",
                "Hợp văn phòng, học online, xem phim, lập trình nhẹ",
                "Nên dùng RAM dual channel để iGPU mạnh hơn",
            ],
            lesson: "Ryzen G rất hợp build PC tiết kiệm không card rời, nhưng không thay được GPU rời trong game AAA/render/AI nặng.",
        },
        {
            icon: <Cpu />,
            title: "Intel Core i5-14400",
            subtitle: "Có Intel UHD Graphics 730",
            color: "blue",
            points: [
                "10 nhân, 16 luồng",
                "Có iGPU để xuất hình",
                "Đủ văn phòng, học tập, xem video",
                "Hữu ích khi GPU rời bị lỗi",
                "Không nên kỳ vọng chơi game nặng mượt",
            ],
            lesson: "CPU có iGPU giúp PC xuất hình mà không cần card rời, nhưng iGPU Intel UHD chủ yếu dành cho tác vụ nhẹ.",
        },
        {
            icon: <AlertTriangle />,
            title: "Intel Core i5-14400F",
            subtitle: "Đuôi F thường không có iGPU",
            color: "orange",
            points: [
                "Hiệu năng CPU tốt",
                "Thường không có đồ họa tích hợp",
                "Cần GPU rời để xuất hình",
                "Người mới rất dễ mua nhầm",
                "Nếu không có card rời, PC có thể không hiện hình",
            ],
            lesson: "Build PC không card rời thì tránh CPU Intel đuôi F, trừ khi bạn đã có GPU rời.",
        },
        {
            icon: <Gamepad2 />,
            title: "RTX 4060 / RX 7600",
            subtitle: "GPU rời phổ thông cho 1080p",
            color: "emerald",
            points: [
                "Có VRAM riêng",
                "Mạnh hơn iGPU rất nhiều",
                "Hợp gaming 1080p",
                "Có thể hỗ trợ dựng video/livestream/học 3D",
                "Cần nguồn, case và cổng cấp điện phù hợp",
            ],
            lesson: "Khi nhu cầu là gaming/render/AI, GPU rời mới là thành phần quyết định lớn.",
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
            <div className="grid lg:grid-cols-2 gap-4">
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

function PickerLab() {
    const scenarios = {
        office: {
            icon: <Monitor />,
            title: "Văn phòng / học tập",
            answer: "Chọn CPU có GPU tích hợp để tiết kiệm chi phí. Không cần card rời nếu chỉ Word, Excel, Chrome, Zoom, YouTube.",
            color: "cyan",
        },
        noCard: {
            icon: <AlertTriangle />,
            title: "Build PC không card rời",
            answer: "Tránh CPU Intel đuôi F hoặc CPU AMD không có iGPU. Nếu không có iGPU/dGPU, máy có thể không xuất hình.",
            color: "orange",
        },
        ryzenG: {
            icon: <MemoryStick />,
            title: "Ryzen G / iGPU mạnh",
            answer: "Dùng 2 thanh RAM chạy dual channel, ví dụ 2x8GB, vì iGPU dùng chung RAM và rất cần băng thông.",
            color: "emerald",
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Game AAA / gaming PC",
            answer: "Cần GPU rời. iGPU chỉ hợp game nhẹ/eSports ở thiết lập phù hợp, không nên kỳ vọng game AAA nặng mượt.",
            color: "violet",
        },
        laptop: {
            icon: <Laptop />,
            title: "Laptop gaming",
            answer: "Đừng chỉ nhìn tên RTX 4050/4060/4070. Xem thêm TGP, hệ thống tản nhiệt, độ dày máy và benchmark thực tế.",
            color: "blue",
        },
    };
    const [active, setActive] = useState("office");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: nên chọn iGPU hay dGPU?"
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
            wrong: "Máy có GPU tích hợp là chơi game nào cũng được",
            right: "iGPU chỉ hợp game nhẹ/eSports ở thiết lập phù hợp. Game AAA nặng cần GPU rời.",
        },
        {
            wrong: "CPU Intel nào cũng xuất hình được",
            right: "Intel desktop đuôi F thường không có iGPU. Ví dụ i5-14400 có iGPU, i5-14400F thường không có.",
        },
        {
            wrong: "Lắp card rời rồi cắm dây màn hình vào đâu cũng được",
            right: "Có GPU rời thì nên cắm màn hình vào cổng trên card rời, không phải mainboard.",
        },
        {
            wrong: "Laptop có cùng tên GPU thì hiệu năng giống desktop",
            right: "GPU laptop bị giới hạn bởi TGP, tản nhiệt và độ dày máy. Cùng tên nhưng hiệu năng có thể khác nhiều.",
        },
        {
            wrong: "GPU tích hợp không có giá trị",
            right: "iGPU rất hữu ích cho máy văn phòng, máy tiết kiệm điện, laptop pin tốt và xuất hình dự phòng khi card rời lỗi.",
        },
    ];
    const tips = [
        "Mua máy văn phòng/học tập: chọn CPU có iGPU để tiết kiệm chi phí.",
        "Build PC không card rời: tránh Intel đuôi F hoặc CPU AMD không có iGPU.",
        "Dùng Ryzen G/iGPU: ưu tiên RAM dual channel.",
        "Mua laptop gaming: xem TGP, tản nhiệt và benchmark, không chỉ tên GPU.",
        "Đã lắp GPU rời: cắm dây màn hình vào card rời.",
        "Game/render/AI nặng: nên dùng GPU rời có VRAM riêng.",
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
                        <Lightbulb /> Mẹo chọn nhanh
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
                        </span>{" "}
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-emerald-300 border border-slate-800 shadow-inner space-y-2">
                            <p>iGPU = Integrated Graphics</p>
                            <p className="text-slate-300">
                                Nằm trong CPU/SoC, dùng chung RAM hệ thống
                            </p>
                            <br />
                            <p>dGPU = Dedicated / Discrete GPU</p>
                            <p className="text-slate-300">
                                Card/chip riêng, có VRAM riêng, mạnh hơn nhưng
                                tốn điện hơn
                            </p>
                            <br />
                            <p className="text-slate-500"># Cổng màn hình</p>
                            <p className="text-slate-300">
                                Dùng iGPU → cắm vào mainboard
                            </p>
                            <p className="text-slate-300">
                                Dùng dGPU → cắm vào card rời
                            </p>
                            <br />
                            <p className="text-red-300">
                                Intel đuôi F thường không có iGPU.
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
        question: "GPU tích hợp thường dùng bộ nhớ nào?",
        options: [
            "VRAM riêng tốc độ cao giống card rời",
            "RAM hệ thống dùng chung với CPU",
            "Ổ cứng SSD",
            "Bộ nhớ trong màn hình",
        ],
        correct: 1,
        explanation:
            "GPU tích hợp thường không có VRAM riêng mà dùng chung RAM hệ thống với CPU.",
    },
    {
        question: "GPU rời phù hợp nhất với nhu cầu nào?",
        options: [
            "Chỉ gõ Word và xem PDF",
            "Chỉ dùng máy tính cầm tay",
            "Chơi game nặng, render 3D, dựng video, AI",
            "Chỉ bật máy để xem giờ",
        ],
        correct: 2,
        explanation:
            "GPU rời có chip, VRAM và tản nhiệt riêng nên phù hợp game nặng, render, video, 3D và AI.",
    },
    {
        question:
            "Khi đã lắp card đồ họa rời cho PC desktop, nên cắm dây màn hình vào đâu?",
        options: [
            "Cổng HDMI/DisplayPort trên card đồ họa rời",
            "Cổng USB trên thùng máy",
            "Cổng LAN trên mainboard",
            "Cổng âm thanh 3.5mm",
        ],
        correct: 0,
        explanation:
            "Muốn dùng đúng GPU rời, nên cắm màn hình vào cổng xuất hình trên card đồ họa rời.",
    },
    {
        question:
            "CPU Intel có hậu tố F, ví dụ i5-14400F, thường có ý nghĩa gì?",
        options: [
            "Có GPU tích hợp rất mạnh",
            "Không có GPU tích hợp, thường cần card đồ họa rời",
            "Là CPU dành riêng cho laptop",
            "Là CPU chỉ dùng cho server",
        ],
        correct: 1,
        explanation:
            "CPU Intel desktop đuôi F thường không có GPU tích hợp, nên cần GPU rời để xuất hình.",
    },
    {
        question: "Vì sao Ryzen G/iGPU nên dùng RAM dual channel?",
        options: [
            "Vì iGPU dùng chung RAM và cần băng thông RAM",
            "Vì dual channel làm màn hình to hơn",
            "Vì không cần mainboard",
            "Vì thay thế được SSD",
        ],
        correct: 0,
        explanation:
            "iGPU dùng RAM hệ thống làm bộ nhớ đồ họa, nên băng thông RAM ảnh hưởng rõ đến hiệu năng.",
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
                Bạn đã hiểu GPU tích hợp và GPU rời. Tiếp theo là các thông số
                GPU quan trọng: VRAM, TDP, Clock Speed — phần giúp bạn đọc cấu
                hình card đồ họa chính xác hơn trước khi mua.
            </p>
            <Link
                to="/phan-5-4"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
            >
                Bài tiếp theo: 5.4 — Các thông số GPU quan trọng: VRAM, TDP,
                Clock Speed <ChevronRight size={20} />
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
        violet: "bg-violet-500/20 text-violet-300",
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
function ConceptCard({ icon, title, color, definition, examples, simple }) {
    return (
        <div className={`${softBorder(color)} border rounded-3xl p-6`}>
            <div
                className={`w-14 h-14 rounded-2xl ${badgeColor(color)} flex items-center justify-center mb-4`}
            >
                {React.cloneElement(icon, { size: 28 })}
            </div>
            <h3 className="text-2xl font-black text-white mb-3">{title}</h3>
            <p className="text-slate-300 leading-relaxed mb-4">{definition}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300 mb-3">
                <strong className={textColor(color)}>Ví dụ:</strong> {examples}
            </div>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300">
                <strong className={textColor(color)}>Dễ hiểu:</strong> {simple}
            </div>
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
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
        violet: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
    };
    return map[color] || map.emerald;
}
function softBorder(color) {
    const map = {
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
        violet: "bg-violet-500/5 border-violet-500/20",
    };
    return map[color] || map.emerald;
}
function textColor(color) {
    const map = {
        emerald: "text-emerald-300",
        cyan: "text-cyan-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
        violet: "text-violet-300",
    };
    return map[color] || "text-emerald-300";
}
