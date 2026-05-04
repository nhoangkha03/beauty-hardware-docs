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
    Laptop,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    PackageCheck,
    Puzzle,
    Search,
    Settings,
    Server,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center shadow-lg shadow-blue-500/10">
                            <Layers3 className="text-blue-400" size={24} />
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
                    <div className="text-sm font-semibold text-blue-300 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                        Bài 3.5
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <RoadAnalogy />
                <ChannelDiagramSimulator />
                <ChannelModes />
                <SlotGuide />
                <SpecsExplorer />
                <RealExamples />
                <RamInstallLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-blue-300">
                        <BookOpen size={16} /> Phần 3: Bộ nhớ — Memory
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Dual Channel
                        <span className="block text-blue-400">
                            / Quad Channel RAM
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Cùng 16GB RAM, cấu hình 2 x 8GB thường có lợi hơn 1 x
                        16GB vì CPU có thể giao tiếp với RAM qua 2 kênh bộ nhớ
                        song song.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<MemoryStick size={16} />}
                            text="Single Channel"
                        />
                        <Tag icon={<Layers3 size={16} />} text="Dual Channel" />
                        <Tag icon={<Server size={16} />} text="Quad Channel" />
                        <Tag icon={<Puzzle size={16} />} text="Flex Mode" />
                        <Tag icon={<Settings size={16} />} text="A2 + B2" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<MemoryStick />}
                            label="1 x 16GB"
                            desc="Thường Single Channel"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Layers3 />}
                            label="2 x 8GB"
                            desc="Thường Dual Channel"
                            color="blue"
                            highlight
                        />
                        <HeroTile
                            icon={<Gamepad2 />}
                            label="iGPU / Gaming"
                            desc="Hưởng lợi từ băng thông"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<Server />}
                            label="4 khe ≠ Quad"
                            desc="Tùy CPU/nền tảng"
                            color="purple"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Ghi nhớ</p>
                        <p>
                            <span className="text-orange-300">Single</span> = 1
                            kênh
                        </p>
                        <p>
                            <span className="text-blue-300">Dual</span> = 2 kênh
                            song song
                        </p>
                        <p>
                            <span className="text-purple-300">Quad</span> = 4
                            kênh, thường workstation/server
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu Single Channel, Dual Channel và Quad Channel là gì.",
        "Biết vì sao 2 x 8GB thường tốt hơn 1 x 16GB trong nhiều tình huống.",
        "Nắm cách cắm 2 thanh RAM vào khe khuyến nghị, thường là A2 + B2.",
        "Hiểu 4 khe RAM trên PC phổ thông không đồng nghĩa Quad Channel.",
        "Biết Flex Mode, XMP/EXPO khi dùng nhiều thanh RAM và cách kiểm tra Dual Channel.",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="blue"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center font-bold mb-4">
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
                title="Khái niệm cốt lõi: Dual Channel là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">
                                Dual Channel RAM
                            </strong>{" "}
                            là chế độ cho phép CPU giao tiếp với RAM qua{" "}
                            <strong className="text-cyan-300">
                                2 kênh bộ nhớ
                            </strong>{" "}
                            thay vì 1 kênh.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-cyan-300">
                                Điểm quan trọng:
                            </strong>{" "}
                            Dual Channel không làm tăng dung lượng RAM. Nó làm
                            tăng băng thông truyền dữ liệu giữa CPU và RAM.
                        </div>
                        <p>
                            Với iGPU, gaming, nén/giải nén và một số tác vụ cần
                            băng thông bộ nhớ, Dual Channel có thể tạo khác biệt
                            rõ hơn.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <Layers3 className="text-cyan-300" /> Công thức nhớ
                            nhanh
                        </h3>
                        <div className="space-y-3 font-mono text-sm">
                            <RuleLine
                                text="Single Channel = 1 kênh RAM"
                                color="orange"
                            />
                            <RuleLine
                                text="Dual Channel = 2 kênh RAM"
                                color="blue"
                            />
                            <RuleLine
                                text="Quad Channel = 4 kênh RAM"
                                color="purple"
                            />
                            <RuleLine
                                text="4 khe RAM ≠ chắc chắn Quad Channel"
                                color="red"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RoadAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="emerald"
                title="Ví dụ đời thường: làn đường chở hàng"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-4">
                    <AnalogyCard
                        icon={<MemoryStick />}
                        title="1 làn đường"
                        desc="Single Channel: CPU có một đường chính để trao đổi dữ liệu với RAM."
                        color="orange"
                    />
                    <AnalogyCard
                        icon={<Layers3 />}
                        title="2 làn song song"
                        desc="Dual Channel: hai kênh giúp băng thông RAM tốt hơn."
                        color="blue"
                    />
                    <AnalogyCard
                        icon={<Server />}
                        title="4 làn song song"
                        desc="Quad Channel: thường dành cho workstation, HEDT hoặc server."
                        color="purple"
                    />
                    <AnalogyCard
                        icon={<Cpu />}
                        title="Hàng hóa"
                        desc="Dữ liệu đi giữa CPU và RAM giống hàng hóa đi giữa kho và người xử lý."
                        color="emerald"
                    />
                </div>
            </div>
        </section>
    );
}

function ChannelDiagramSimulator() {
    const modes = {
        single: {
            title: "Single Channel",
            formula: "CPU ⇄ Kênh A ⇄ RAM 1",
            desc: "CPU chỉ có một đường chính để trao đổi dữ liệu với RAM.",
            example: "1 x 16GB thường chạy Single Channel.",
            color: "orange",
            lanes: ["Kênh A"],
        },
        dual: {
            title: "Dual Channel",
            formula: "CPU ⇄ Kênh A ⇄ RAM 1\nCPU ⇄ Kênh B ⇄ RAM 2",
            desc: "CPU có thể trao đổi dữ liệu qua hai kênh cùng lúc, giống mở thêm làn đường.",
            example:
                "2 x 8GB hoặc 2 x 16GB cắm đúng khe thường chạy Dual Channel.",
            color: "blue",
            lanes: ["Kênh A", "Kênh B"],
        },
        quad: {
            title: "Quad Channel",
            formula: "CPU ⇄ Kênh A/B/C/D ⇄ 4 thanh RAM",
            desc: "CPU dùng 4 kênh bộ nhớ, tăng băng thông lớn nhưng cần nền tảng hỗ trợ.",
            example:
                "Thường gặp trên workstation/server/HEDT, không phổ biến trên PC văn phòng/gaming phổ thông.",
            color: "purple",
            lanes: ["Kênh A", "Kênh B", "Kênh C", "Kênh D"],
        },
    };
    const [active, setActive] = useState("dual");
    const item = modes[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Mô phỏng: Single / Dual / Quad Channel"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {Object.entries(modes).map(([key, m]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(m.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <p className="font-bold">{m.title}</p>
                            <p className="text-xs opacity-75 mt-1">
                                {m.lanes.length} kênh bộ nhớ
                            </p>
                        </button>
                    ))}
                </div>
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
                    <div
                        className={`${softBorder(item.color)} border rounded-3xl p-6`}
                    >
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            <Layers3 size={32} />
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-3">
                            {item.title}
                        </h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            {item.desc}
                        </p>
                        <p className="text-sm text-slate-400">
                            <strong className={textColor(item.color)}>
                                Ví dụ:
                            </strong>{" "}
                            {item.example}
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center justify-center font-black">
                                CPU
                            </div>
                            <div className="flex-1 space-y-3">
                                {item.lanes.map((lane, i) => (
                                    <div
                                        key={lane}
                                        className="flex items-center gap-3"
                                    >
                                        <div
                                            className={`h-3 flex-1 rounded-full ${active === "single" ? "bg-orange-400" : active === "dual" ? "bg-blue-400" : "bg-purple-400"}`}
                                        />
                                        <span className="text-xs text-slate-500 w-16">
                                            {lane}
                                        </span>
                                        <div className="w-16 h-12 rounded-2xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center justify-center text-xs font-bold">
                                            RAM {i + 1}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <pre className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300 whitespace-pre-wrap">
                            {item.formula}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ChannelModes() {
    const modes = [
        [
            "Single Channel",
            "1 thanh RAM",
            "Máy văn phòng, laptop cấu hình thấp",
            "Rẻ, dễ nâng cấp thêm",
            "Băng thông thấp hơn",
            "Tác vụ nhẹ",
            "orange",
        ],
        [
            "Dual Channel",
            "2 thanh RAM",
            "PC/laptop phổ thông, gaming",
            "Băng thông tốt hơn, hiệu năng cân bằng",
            "Cần cắm đúng khe, nên dùng RAM cùng bộ",
            "Hầu hết người dùng",
            "blue",
        ],
        [
            "Quad Channel",
            "4 thanh RAM",
            "Workstation, server, HEDT",
            "Băng thông rất cao",
            "Cần nền tảng hỗ trợ, chi phí cao",
            "Render, mô phỏng, server",
            "purple",
        ],
        [
            "Flex Mode",
            "2 thanh lệch dung lượng",
            "Một số hệ thống Intel/AMD",
            "Một phần vẫn chạy Dual Channel",
            "Không tối ưu bằng RAM cân xứng",
            "Nâng cấp tạm thời",
            "emerald",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Các chế độ kênh RAM"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[950px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Chế độ</th>
                            <th className="p-4">Cần tối thiểu</th>
                            <th className="p-4">Thường gặp</th>
                            <th className="p-4">Ưu điểm</th>
                            <th className="p-4">Nhược điểm</th>
                            <th className="p-4">Phù hợp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {modes.map(
                            ([mode, min, where, good, bad, fit, color]) => (
                                <tr
                                    key={mode}
                                    className="border-t border-slate-800"
                                >
                                    <td
                                        className={`p-4 font-extrabold ${textColor(color)}`}
                                    >
                                        {mode}
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        {min}
                                    </td>
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

function SlotGuide() {
    const [selected, setSelected] = useState(["A2", "B2"]);
    const slots = ["A1", "A2", "B1", "B2"];
    const isGood =
        selected.includes("A2") &&
        selected.includes("B2") &&
        selected.length === 2;
    const toggle = (slot) => {
        setSelected((prev) =>
            prev.includes(slot)
                ? prev.filter((s) => s !== slot)
                : prev.length < 2
                  ? [...prev, slot]
                  : [slot],
        );
    };

    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Cắm RAM đúng khe: A2 + B2"
                icon={<Settings />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 mb-6 leading-relaxed">
                    Mainboard desktop thường có 4 khe RAM: A1, A2, B1, B2. Với 2
                    thanh RAM, rất nhiều mainboard khuyên cắm vào A2 + B2, nhưng
                    cách chắc chắn nhất vẫn là xem manual của mainboard.
                </p>
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                    <div className="grid md:grid-cols-[0.25fr_1fr] gap-6 items-center">
                        <div className="w-24 h-24 rounded-3xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center justify-center font-black mx-auto">
                            CPU
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                            {slots.map((slot) => {
                                const active = selected.includes(slot);
                                return (
                                    <button
                                        key={slot}
                                        onClick={() => toggle(slot)}
                                        className={`h-36 rounded-2xl border flex flex-col items-center justify-center gap-3 transition-all ${active ? "bg-blue-500/10 border-blue-500/50 text-blue-300" : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300"}`}
                                    >
                                        <MemoryStick size={28} />
                                        <span className="font-bold">
                                            {slot}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div
                        className={`mt-6 rounded-2xl border p-5 ${isGood ? "bg-emerald-500/10 border-emerald-500/20" : "bg-orange-500/10 border-orange-500/20"}`}
                    >
                        <p className="text-slate-300">
                            <strong
                                className={
                                    isGood
                                        ? "text-emerald-300"
                                        : "text-orange-300"
                                }
                            >
                                {isGood
                                    ? "Cấu hình phổ biến đúng:"
                                    : "Cần kiểm tra lại:"}
                            </strong>{" "}
                            {isGood
                                ? "A2 + B2 thường là khe khuyến nghị cho 2 thanh RAM."
                                : "Nhiều mainboard cần A2 + B2 để tối ưu Dual Channel; hãy xem manual nếu khe bạn chọn khác."}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        sticks: {
            icon: <MemoryStick />,
            title: "Số thanh RAM",
            detail: "Yếu tố đầu tiên quyết định khả năng chạy Dual Channel.",
            impact: "1 x 16GB thường Single Channel; 2 x 8GB thường Dual Channel.",
        },
        slots: {
            icon: <Settings />,
            title: "Khe RAM",
            detail: "Cần cắm đúng cặp khe theo manual, thường là A2 + B2.",
            impact: "Cắm sai vẫn có thể nhận đủ RAM nhưng không tối ưu hoặc chạy Single Channel.",
        },
        match: {
            icon: <CheckCircle2 />,
            title: "Thông số giống nhau",
            detail: "Nên cùng dung lượng, tốc độ, timing, điện áp, hãng/dòng.",
            impact: "RAM trong cùng kit thường ổn định hơn khi chạy chung.",
        },
        platform: {
            icon: <Cpu />,
            title: "CPU / nền tảng",
            detail: "Số channel phụ thuộc CPU và nền tảng, không chỉ số khe RAM.",
            impact: "PC phổ thông thường Dual Channel dù main có 4 khe.",
        },
        xmp: {
            icon: <Zap />,
            title: "XMP / EXPO",
            detail: "Profile giúp RAM chạy tốc độ cao hơn thiết lập tiêu chuẩn.",
            impact: "Dùng 4 thanh DDR5 tốc độ cao có thể khó ổn định hơn 2 thanh.",
        },
        flex: {
            icon: <Puzzle />,
            title: "Flex Mode",
            detail: "2 thanh lệch dung lượng có thể chạy một phần Dual Channel.",
            impact: "Ví dụ 8GB + 16GB: 8GB + 8GB có thể Dual, phần còn lại Single.",
        },
    };
    const [active, setActive] = useState("sticks");
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
                                Cách hiểu thực tế:
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
            icon: <MemoryStick />,
            title: "16GB DDR4: 1 x 16GB vs 2 x 8GB",
            subtitle: "Cùng dung lượng, khác băng thông",
            color: "blue",
            points: [
                "1 x 16GB thường Single Channel",
                "2 x 8GB thường Dual Channel",
                "2 x 8GB cân bằng hơn cho gaming/iGPU",
                "1 x 16GB dễ nâng cấp thêm sau",
                "Nên ưu tiên kit nếu build mới",
            ],
            lesson: "Với PC văn phòng/học tập/gaming phổ thông, 2 x 8GB DDR4-3200 thường là lựa chọn cân bằng.",
        },
        {
            icon: <MemoryStick />,
            title: "32GB DDR5: 2 x 16GB",
            subtitle: "Cấu hình cân bằng cho PC đời mới",
            color: "emerald",
            points: [
                "32GB đủ rộng cho gaming, lập trình, đa nhiệm",
                "2 x 16GB chạy Dual Channel",
                "DDR5-6000 có băng thông cao",
                "EXPO/XMP giúp chạy tốc độ quảng cáo",
                "Dễ ổn định hơn 4 x 16GB tốc độ cao",
            ],
            lesson: "Với DDR5 phổ thông, 2 thanh thường dễ cấu hình ổn định hơn 4 thanh ở tốc độ cao.",
        },
        {
            icon: <Laptop />,
            title: "Laptop 8GB hàn + 1 khe nâng cấp",
            subtitle: "Trường hợp RAM lệch dung lượng",
            color: "purple",
            points: [
                "8GB hàn + 8GB SO-DIMM = 16GB cân bằng hơn",
                "8GB hàn + 16GB SO-DIMM = 24GB",
                "Một phần có thể Dual Channel",
                "Phần dư có thể Single Channel",
                "Vẫn hữu ích nếu cần nhiều RAM hơn",
            ],
            lesson: "Cấu hình lệch dung lượng có thể dùng Flex Mode, nhưng không tối ưu bằng RAM cân xứng.",
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

function RamInstallLab() {
    const scenarios = {
        new16: {
            icon: <MemoryStick />,
            title: "Build mới 16GB",
            answer: "Chọn kit 2 x 8GB thay vì 1 x 16GB nếu không có kế hoạch nâng cấp đặc biệt. Bạn vừa đủ dung lượng vừa có Dual Channel.",
            color: "blue",
        },
        new32: {
            icon: <MemoryStick />,
            title: "Build mới 32GB",
            answer: "Chọn 2 x 16GB. Với DDR5, 2 thanh thường dễ ổn định ở tốc độ cao hơn 4 thanh.",
            color: "emerald",
        },
        wrongslot: {
            icon: <Settings />,
            title: "2 thanh nhưng cắm A1 + A2",
            answer: "Có thể không tối ưu. Với nhiều mainboard 4 khe, hãy cắm A2 + B2 hoặc kiểm tra manual để chạy Dual Channel đúng.",
            color: "orange",
        },
        fourSlots: {
            icon: <Monitor />,
            title: "Main có 4 khe RAM",
            answer: "Không đồng nghĩa Quad Channel. PC phổ thông Intel Core/AMD Ryzen thường vẫn chỉ Dual Channel.",
            color: "purple",
        },
        laptop: {
            icon: <Laptop />,
            title: "Laptop LPDDR",
            answer: "RAM LPDDR thường hàn chết; không thể tự thêm RAM để tạo Dual Channel. Hãy chọn đủ RAM khi mua máy.",
            color: "red",
        },
    };
    const [active, setActive] = useState("new32");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Lab: chọn và cắm RAM đúng cách"
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
                <div className="mt-6 bg-slate-950 border border-slate-800 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-blue-300">
                        Kiểm tra sau khi lắp:
                    </strong>{" "}
                    dùng CPU-Z → tab Memory → mục Channel #. Nếu hiện Dual, RAM
                    đang chạy Dual Channel.
                </div>
            </div>
        </section>
    );
}

function CommonMistakes() {
    const mistakes = [
        {
            wrong: "Main có 4 khe RAM thì chắc chắn Quad Channel",
            right: "Đa số mainboard phổ thông có 4 khe nhưng CPU/nền tảng vẫn chỉ hỗ trợ Dual Channel.",
        },
        {
            wrong: "Cắm RAM vào khe nào cũng được",
            right: "Với 2 thanh trên main 4 khe, thường nên cắm A2 + B2 hoặc theo manual để chạy Dual Channel.",
        },
        {
            wrong: "1 x 16GB và 2 x 8GB giống hệt nhau vì đều 16GB",
            right: "Dung lượng giống nhau, nhưng 2 x 8GB thường có băng thông cao hơn nhờ Dual Channel.",
        },
        {
            wrong: "Cứ mua thêm một thanh RAM bất kỳ là được",
            right: "RAM khác dung lượng, bus, timing hoặc chip nhớ có thể tự hạ tốc độ, không bật được XMP/EXPO, lỗi xanh màn hình hoặc không boot.",
        },
    ];
    const tips = [
        "Build PC mới: ưu tiên 2 thanh RAM thay vì 1 thanh nếu ngân sách cho phép.",
        "Mainboard 4 khe: kiểm tra manual; thường 2 thanh nên cắm A2 + B2.",
        "DDR5 tốc độ cao: 2 thanh thường dễ ổn định hơn 4 thanh.",
        "Sau khi lắp RAM, kiểm tra Channel # trong CPU-Z.",
        "Laptop LPDDR hàn chết: chọn đủ RAM ngay từ lúc mua.",
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
                        <Lightbulb /> Mẹo cắm RAM
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
                        <span className="bg-blue-500/20 text-blue-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-blue-300 border border-slate-800 shadow-inner space-y-2">
                            <p>Single Channel = 1 kênh RAM</p>
                            <p>Dual Channel = 2 kênh RAM</p>
                            <p>Quad Channel = 4 kênh RAM</p>
                            <br />
                            <p className="text-slate-500"># Cùng 16GB</p>
                            <p className="text-slate-300">
                                1 x 16GB = thường Single Channel
                            </p>
                            <p className="text-slate-300">
                                2 x 8GB = thường Dual Channel
                            </p>
                            <br />
                            <p className="text-slate-500"># Main 4 khe</p>
                            <p className="text-slate-300">
                                Thường cắm A2 + B2 cho 2 thanh, nhưng hãy xem
                                manual.
                            </p>
                            <br />
                            <p className="text-red-300">
                                4 khe RAM không đồng nghĩa Quad Channel.
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
        question: "Cấu hình nào thường có lợi thế Dual Channel?",
        options: ["1 x 16GB", "2 x 8GB", "1 x 8GB", "Không dùng RAM"],
        correct: 1,
        explanation:
            "2 x 8GB thường cho phép hệ thống chạy Dual Channel nếu cắm đúng khe và nền tảng hỗ trợ.",
    },
    {
        question: "Mainboard có 4 khe RAM có chắc chắn là Quad Channel không?",
        options: [
            "Có, cứ 4 khe là Quad Channel",
            "Không, còn phụ thuộc CPU/nền tảng",
            "Có, nếu RAM cùng hãng",
            "Có, nếu RAM có RGB",
        ],
        correct: 1,
        explanation:
            "Đa số mainboard PC phổ thông có 4 khe nhưng vẫn chỉ hỗ trợ Dual Channel do CPU/nền tảng quyết định.",
    },
    {
        question:
            "Với nhiều mainboard desktop 4 khe, khi dùng 2 thanh RAM thường nên cắm vào đâu?",
        options: [
            "Hai khe bất kỳ",
            "A1 + A2",
            "A2 + B2 theo khuyến nghị phổ biến, nhưng nên xem manual",
            "Khe gần nguồn PSU nhất",
        ],
        correct: 2,
        explanation:
            "A2 + B2 là cặp khuyến nghị rất phổ biến, nhưng manual mainboard là nguồn chắc chắn nhất.",
    },
    {
        question: "Dual Channel làm tăng điều gì?",
        options: [
            "Dung lượng RAM",
            "Băng thông giữa CPU và RAM",
            "Dung lượng SSD",
            "Công suất nguồn",
        ],
        correct: 1,
        explanation:
            "Dual Channel không làm tăng dung lượng RAM; nó tăng băng thông trao đổi dữ liệu giữa CPU và RAM.",
    },
    {
        question: "Flex Mode thường xuất hiện khi nào?",
        options: [
            "Hai thanh RAM lệch dung lượng",
            "Không có RAM",
            "Chỉ có ổ cứng HDD",
            "RAM có RGB",
        ],
        correct: 0,
        explanation:
            "Flex Mode/asymmetric dual channel có thể xảy ra khi dùng hai thanh lệch dung lượng, ví dụ 8GB + 16GB.",
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
                    <strong className="text-blue-400">
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
                <span className="text-blue-400">
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
                        className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu Dual Channel, Quad Channel và cách cắm RAM theo
                kênh. Tiếp theo là ROM, BIOS/UEFI — phần giúp máy tính biết cách
                khởi động trước khi hệ điều hành được nạp vào RAM.
            </p>
            <Link
                to="/phan-3-6"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
            >
                Bài tiếp theo: 3.6 — ROM, BIOS/UEFI <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "blue" }) {
    const colorMap = {
        blue: "bg-blue-500/20 text-blue-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
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

function RuleLine({ text, color }) {
    return (
        <div
            className={`${softBorder(color)} border rounded-2xl p-4 ${textColor(color)}`}
        >
            {text}
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
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.blue;
}

function softBorder(color) {
    const map = {
        blue: "bg-blue-500/5 border-blue-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.blue;
}

function textColor(color) {
    const map = {
        blue: "text-blue-300",
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        purple: "text-purple-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-blue-300";
}
