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
    Eye,
    Film,
    Gamepad2,
    Gauge,
    Layers3,
    Lightbulb,
    Monitor,
    MousePointerClick,
    PackageCheck,
    Puzzle,
    RefreshCcw,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
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
                            <Sparkles className="text-cyan-400" size={24} />
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
                    <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                        Bài 5.7
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <LightingAnalogy />
                <TechFlowSimulator />
                <ComparisonTable />
                <UpscalingModes />
                <RayTracingLevels />
                <LatencyGuide />
                <CompatibilityExplorer />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
                        <BookOpen size={16} /> Phần 5: GPU — Bộ xử lý đồ họa
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Ray Tracing
                        <span className="block text-cyan-400">
                            DLSS, FSR, XeSS
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Ray Tracing làm ánh sáng, bóng đổ và phản chiếu chân
                        thực hơn nhưng rất nặng GPU. DLSS, FSR và XeSS giúp tăng
                        FPS bằng upscaling hoặc tạo thêm frame — nhưng vẫn có
                        đánh đổi về hình ảnh và độ trễ.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Sparkles size={16} />} text="Ray Tracing" />
                        <Tag icon={<Zap size={16} />} text="DLSS" />
                        <Tag icon={<RefreshCcw size={16} />} text="FSR" />
                        <Tag icon={<Cpu size={16} />} text="XeSS" />
                        <Tag icon={<Timer size={16} />} text="Latency" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Sparkles />}
                            label="Ray Tracing"
                            desc="Ánh sáng thật hơn, FPS giảm"
                            color="cyan"
                            highlight
                        />
                        <HeroTile
                            icon={<Zap />}
                            label="DLSS"
                            desc="NVIDIA RTX, AI upscale/frame"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<RefreshCcw />}
                            label="FSR"
                            desc="AMD, mở hơn, nhiều GPU"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Cpu />}
                            label="XeSS"
                            desc="Intel, AI upscale/frame"
                            color="indigo"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Công thức thực tế</p>
                        <p>Ray Tracing = đẹp hơn nhưng nặng hơn</p>
                        <p className="text-cyan-300">
                            Upscaling = FPS cao hơn nhưng có đánh đổi
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu Ray Tracing là gì và vì sao nó làm ánh sáng, bóng đổ, phản chiếu chân thực hơn.",
        "Hiểu DLSS, FSR và XeSS tăng FPS bằng upscaling hoặc frame generation như thế nào.",
        "Phân biệt upscaling, frame generation, ray reconstruction/ray regeneration và công nghệ giảm latency.",
        "Biết các chế độ Quality, Balanced, Performance, Ultra Performance và khi nào nên dùng.",
        "Tránh hiểu nhầm rằng Ray Tracing luôn nên bật hoặc DLSS/FSR/XeSS tăng FPS hoàn toàn miễn phí.",
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
    const concepts = [
        {
            icon: <Sparkles />,
            title: "Ray Tracing",
            color: "cyan",
            simple: "Mô phỏng đường đi của ánh sáng giống đời thật hơn.",
            details: [
                "Bóng đổ thật hơn",
                "Phản chiếu trên kính/nước/kim loại tự nhiên hơn",
                "Ánh sáng gián tiếp đẹp hơn",
                "Rất nặng GPU",
            ],
        },
        {
            icon: <Zap />,
            title: "DLSS",
            color: "emerald",
            simple: "Công nghệ NVIDIA dùng AI để tăng FPS và tái tạo hình ảnh trên GPU RTX.",
            details: [
                "Super Resolution",
                "Ray Reconstruction",
                "Frame Generation",
                "Một số tính năng mới cần GPU RTX đời mới",
            ],
        },
        {
            icon: <RefreshCcw />,
            title: "FSR",
            color: "orange",
            simple: "Công nghệ AMD giúp tăng FPS, thường mở hơn và chạy được trên nhiều GPU.",
            details: [
                "Upscaling",
                "Frame Generation",
                "Ray Regeneration",
                "Chất lượng tùy game và phiên bản",
            ],
        },
        {
            icon: <Cpu />,
            title: "XeSS",
            color: "indigo",
            simple: "Công nghệ Intel Xe Super Sampling, hữu ích nhất trên Intel Arc.",
            details: [
                "AI upscaling",
                "Frame Generation trong XeSS 2",
                "Xe Low Latency",
                "Hỗ trợ game ít hơn DLSS/FSR",
            ],
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="purple"
                title="Khái niệm cốt lõi"
                icon={<Brain />}
            />
            <div className="grid lg:grid-cols-4 gap-4">
                {concepts.map((c) => (
                    <div
                        key={c.title}
                        className={`${softBorder(c.color)} border rounded-3xl p-6`}
                    >
                        <div
                            className={`w-14 h-14 rounded-2xl ${badgeColor(c.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(c.icon, { size: 28 })}
                        </div>
                        <h3 className="text-2xl font-black text-white mb-3">
                            {c.title}
                        </h3>
                        <p
                            className={`${textColor(c.color)} text-sm font-semibold leading-relaxed mb-4`}
                        >
                            {c.simple}
                        </p>
                        <div className="space-y-2">
                            {c.details.map((d) => (
                                <Bullet key={d} text={d} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function LightingAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: đèn thật, ảnh phóng to và khung hình chen giữa"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-4 gap-4">
                <AnalogyCard
                    icon={<Sparkles />}
                    title="Ray Tracing = ánh sáng thật"
                    desc="Thay vì vẽ giả bóng/phản chiếu, GPU tính đường đi ánh sáng tự nhiên hơn."
                    color="cyan"
                />
                <AnalogyCard
                    icon={<Eye />}
                    title="Upscaling = phóng ảnh thông minh"
                    desc="Game render nhỏ hơn rồi công nghệ tái tạo lên độ phân giải cao hơn."
                    color="emerald"
                />
                <AnalogyCard
                    icon={<Layers3 />}
                    title="Frame Generation = chen frame"
                    desc="AI tạo thêm khung hình trung gian để chuyển động nhìn mượt hơn."
                    color="orange"
                />
                <AnalogyCard
                    icon={<MousePointerClick />}
                    title="Latency = độ trễ tay"
                    desc="Hình mượt hơn chưa chắc bấm chuột phản hồi nhanh hơn."
                    color="purple"
                />
            </div>
        </section>
    );
}

function TechFlowSimulator() {
    const flows = {
        rt: {
            title: "Ray Tracing",
            color: "cyan",
            steps: [
                {
                    icon: <Sparkles />,
                    title: "Nguồn sáng phát tia",
                    desc: "GPU mô phỏng tia sáng phát ra từ đèn, mặt trời, lửa hoặc màn hình.",
                },
                {
                    icon: <Puzzle />,
                    title: "Tia sáng va vào vật thể",
                    desc: "Ánh sáng có thể phản xạ, hấp thụ, xuyên qua hoặc đổi màu tùy vật liệu.",
                },
                {
                    icon: <Eye />,
                    title: "Tạo bóng/phản chiếu/ánh sáng gián tiếp",
                    desc: "Bóng, gương, nước, kính, kim loại và ánh sáng môi trường trở nên thật hơn.",
                },
                {
                    icon: <ThermometerIcon />,
                    title: "GPU tải nặng hơn",
                    desc: "Ray Tracing cần nhiều phép toán nên FPS thường giảm mạnh.",
                },
                {
                    icon: <Zap />,
                    title: "Dùng upscaling để bù FPS",
                    desc: "DLSS/FSR/XeSS thường được bật để giữ FPS dễ chịu hơn.",
                },
            ],
        },
        up: {
            title: "DLSS / FSR / XeSS Upscaling",
            color: "emerald",
            steps: [
                {
                    icon: <Gamepad2 />,
                    title: "Game render thấp hơn native",
                    desc: "Ví dụ màn 1440p nhưng game render gần 1080p để giảm tải GPU.",
                },
                {
                    icon: <Brain />,
                    title: "Công nghệ phân tích hình ảnh",
                    desc: "DLSS dùng AI trên RTX; FSR mở hơn; XeSS tối ưu cho Intel Arc.",
                },
                {
                    icon: <RefreshCcw />,
                    title: "Tái tạo lên độ phân giải cao",
                    desc: "Hình ảnh được upscale lên 1440p/4K trước khi xuất ra màn hình.",
                },
                {
                    icon: <Gauge />,
                    title: "FPS tăng",
                    desc: "GPU render ít pixel thật hơn nên FPS thường cao hơn.",
                },
                {
                    icon: <Eye />,
                    title: "Có thể có đánh đổi hình ảnh",
                    desc: "Tùy game/chế độ, hình có thể mềm, ghosting hoặc viền vật thể lỗi nhẹ.",
                },
            ],
        },
        fg: {
            title: "Frame Generation",
            color: "orange",
            steps: [
                {
                    icon: <Film />,
                    title: "GPU render frame thật",
                    desc: "Game engine vẫn render các frame thật theo FPS gốc.",
                },
                {
                    icon: <Layers3 />,
                    title: "AI tạo frame trung gian",
                    desc: "Công nghệ tạo thêm frame nằm giữa hai frame thật.",
                },
                {
                    icon: <Monitor />,
                    title: "Màn hình nhìn mượt hơn",
                    desc: "Số frame hiển thị có thể cao hơn nên chuyển động trông mượt.",
                },
                {
                    icon: <Timer />,
                    title: "Latency không tự động thấp hơn",
                    desc: "Frame tạo thêm không làm input của game được xử lý nhanh hơn.",
                },
                {
                    icon: <MousePointerClick />,
                    title: "Cần công nghệ giảm trễ",
                    desc: "NVIDIA Reflex, AMD Anti-Lag hoặc Intel Xe Low Latency giúp kiểm soát độ trễ.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("rt");
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
                color="blue"
                title="Các công nghệ này hoạt động như thế nào?"
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
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[330px] flex flex-col justify-between">
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
                            className="mt-6 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold inline-flex items-center justify-center gap-2"
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
        [
            "Ray Tracing",
            "NVIDIA / AMD / Intel đều hỗ trợ tùy GPU",
            "Ánh sáng, bóng, phản chiếu thật hơn",
            "Hình ảnh đẹp, chân thực",
            "Rất nặng GPU, giảm FPS",
        ],
        [
            "DLSS",
            "NVIDIA",
            "Tăng FPS bằng AI upscaling/frame generation",
            "Chất lượng tốt trên RTX, hệ sinh thái mạnh",
            "Cần NVIDIA RTX; tính năng mới có thể cần RTX đời mới",
        ],
        [
            "FSR",
            "AMD",
            "Tăng FPS bằng upscaling/frame generation",
            "Mở hơn, hỗ trợ nhiều GPU",
            "Chất lượng tùy game và phiên bản",
        ],
        [
            "XeSS",
            "Intel",
            "Tăng FPS bằng AI upscaling/frame generation",
            "Hữu ích cho Intel Arc, có XeSS 2",
            "Hỗ trợ ít hơn DLSS/FSR",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="purple"
                title="So sánh Ray Tracing, DLSS, FSR, XeSS"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[980px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Công nghệ</th>
                            <th className="p-4">Hãng chính</th>
                            <th className="p-4">Mục đích</th>
                            <th className="p-4">Ưu điểm</th>
                            <th className="p-4">Hạn chế</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([tech, brand, goal, pro, con]) => (
                            <tr
                                key={tech}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-cyan-300 font-extrabold">
                                    {tech}
                                </td>
                                <td className="p-4 text-slate-300">{brand}</td>
                                <td className="p-4 text-slate-300">{goal}</td>
                                <td className="p-4 text-slate-300">{pro}</td>
                                <td className="p-4 text-slate-300">{con}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function UpscalingModes() {
    const rows = [
        [
            "Quality",
            "Hình đẹp nhất, tăng FPS vừa phải",
            "Dùng đầu tiên nếu FPS hơi thiếu",
            "emerald",
        ],
        [
            "Balanced",
            "Cân bằng hình ảnh và FPS",
            "Dùng khi Quality chưa đủ mượt",
            "cyan",
        ],
        [
            "Performance",
            "FPS cao hơn, hình có thể mềm hơn",
            "Dùng cho 4K hoặc GPU yếu",
            "orange",
        ],
        [
            "Ultra Performance",
            "Tăng FPS mạnh nhất, giảm chất lượng rõ hơn",
            "Thường chỉ nên dùng 8K hoặc quá nặng",
            "red",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Các chế độ Upscaling thường gặp"
                icon={<RefreshCcw />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[820px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Chế độ</th>
                            <th className="p-4">Ý nghĩa</th>
                            <th className="p-4">Khi nào dùng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([mode, meaning, when, color]) => (
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
                                    {meaning}
                                </td>
                                <td className="p-4 text-slate-300">{when}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-emerald-300">Mẹo:</strong> thử theo thứ
                tự Quality → Balanced → Performance. Đừng bật Performance ngay
                nếu chưa cần.
            </div>
        </section>
    );
}

function RayTracingLevels() {
    const rows = [
        ["Ray-Traced Shadows", "Bóng đổ chân thực hơn", "Vừa", "cyan"],
        [
            "Ray-Traced Reflections",
            "Phản chiếu trên kính, nước, kim loại",
            "Nặng",
            "orange",
        ],
        [
            "Ray-Traced Global Illumination",
            "Ánh sáng gián tiếp thực hơn",
            "Rất nặng",
            "red",
        ],
        ["Path Tracing", "Ray tracing toàn diện hơn", "Cực nặng", "purple"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="orange"
                title="Ray Tracing không chỉ có bật/tắt"
                icon={<Sparkles />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[820px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Thành phần</th>
                            <th className="p-4">Ý nghĩa</th>
                            <th className="p-4">Mức độ nặng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([name, meaning, weight, color]) => (
                            <tr
                                key={name}
                                className="border-t border-slate-800"
                            >
                                <td
                                    className={`p-4 font-extrabold ${textColor(color)}`}
                                >
                                    {name}
                                </td>
                                <td className="p-4 text-slate-300">
                                    {meaning}
                                </td>
                                <td className="p-4 text-slate-300">{weight}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-orange-300">Path Tracing:</strong> có
                thể hiểu là Ray Tracing “nặng đô” hơn, mô phỏng ánh sáng toàn
                cảnh sâu hơn và thường cần GPU rất mạnh kèm công nghệ tăng FPS.
            </div>
        </section>
    );
}

function LatencyGuide() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="red"
                title="Latency: hình mượt hơn chưa chắc điều khiển nhanh hơn"
                icon={<Timer />}
            />
            <div className="grid lg:grid-cols-3 gap-4">
                <RuleCard
                    label="FPS gốc thấp"
                    value="25–35 FPS bật Frame Generation có thể nhìn mượt hơn, nhưng cảm giác điều khiển vẫn có thể trễ."
                    color="red"
                />
                <RuleCard
                    label="FPS gốc khá"
                    value="60 FPS+ bật Frame Generation thường cho trải nghiệm dễ chịu hơn."
                    color="emerald"
                />
                <RuleCard
                    label="eSports"
                    value="Valorant, CS2, Apex cần FPS thật và latency thấp hơn frame tạo thêm."
                    color="orange"
                />
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                Frame Generation tăng độ mượt hình ảnh ≠ luôn giảm độ trễ điều
                khiển
            </div>
        </section>
    );
}

function CompatibilityExplorer() {
    const items = {
        dlsssr: {
            icon: <Zap />,
            title: "DLSS Super Resolution",
            color: "emerald",
            need: "GPU NVIDIA RTX",
            note: "Upscale bằng AI để tăng FPS và giữ hình ảnh tốt hơn trong game hỗ trợ.",
        },
        dlssfg: {
            icon: <Layers3 />,
            title: "DLSS Frame Generation",
            color: "emerald",
            need: "Thường yêu cầu RTX 40 Series trở lên",
            note: "Tạo thêm frame trung gian để hình ảnh trông mượt hơn.",
        },
        dlssmfg: {
            icon: <Sparkles />,
            title: "DLSS Multi Frame Generation",
            color: "cyan",
            need: "Hướng đến RTX 50 Series / Blackwell",
            note: "Tạo nhiều frame bằng AI trên phần cứng mới.",
        },
        fsrup: {
            icon: <RefreshCcw />,
            title: "FSR Upscaling",
            color: "orange",
            need: "Hỗ trợ rộng trên nhiều GPU",
            note: "Không khóa chặt vào AMD, tùy game và phiên bản.",
        },
        fsrfg: {
            icon: <Film />,
            title: "FSR Frame Generation",
            color: "orange",
            need: "Tùy game, GPU và driver",
            note: "Tạo frame trung gian, cần chú ý latency.",
        },
        xess: {
            icon: <Cpu />,
            title: "XeSS",
            color: "indigo",
            need: "Tốt nhất trên Intel Arc, có thể hỗ trợ GPU khác ở một số chế độ",
            note: "XeSS 2 có Frame Generation và Xe Low Latency.",
        },
    };
    const [active, setActive] = useState("dlsssr");
    const item = items[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="yellow"
                title="GPU hỗ trợ công nghệ nào?"
                icon={<Settings />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
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
                <div className="grid md:grid-cols-[0.75fr_1.25fr] gap-6">
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
                            {item.need}
                        </p>
                    </div>
                    <InfoCard
                        label="Ghi chú"
                        value={item.note}
                        color={item.color}
                    />
                </div>
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Zap />,
            title: "RTX 4060",
            subtitle: "DLSS, gaming 1080p",
            color: "emerald",
            points: [
                "Hợp game 1080p",
                "Có hệ sinh thái RTX",
                "DLSS Quality/Balanced giúp FPS dễ chịu hơn",
                "Ray tracing vẫn cần cân nhắc setting",
                "Hợp Cyberpunk 2077, Alan Wake 2, Hogwarts Legacy nếu dùng DLSS hợp lý",
            ],
            lesson: "RTX 4060 không chỉ là FPS native; lợi thế lớn nằm ở DLSS và hệ sinh thái RTX trong game hỗ trợ.",
        },
        {
            icon: <RefreshCcw />,
            title: "RX 7600 / RX 7800 XT",
            subtitle: "FSR và gaming raster",
            color: "orange",
            points: [
                "Hợp gaming 1080p/1440p tùy mẫu",
                "FSR hỗ trợ rộng",
                "Phù hợp nếu không đặt nặng ray tracing",
                "Hiệu năng/giá thường đáng cân nhắc",
                "Dùng FSR Quality khi FPS thiếu",
            ],
            lesson: "AMD Radeon hợp người ưu tiên gaming raster và giá tốt, FSR là công cụ tăng FPS hữu ích trong game hỗ trợ.",
        },
        {
            icon: <Cpu />,
            title: "Intel Arc B580",
            subtitle: "XeSS, driver và game cụ thể",
            color: "indigo",
            points: [
                "XeSS là công nghệ quan trọng",
                "XeSS 2 có Frame Generation và Xe Low Latency",
                "Nên cập nhật driver mới",
                "Cần kiểm tra benchmark đúng game",
                "Hợp khi giá tốt và game tối ưu ổn",
            ],
            lesson: "Intel Arc có thể rất hấp dẫn, nhưng nên kiểm tra đúng game và công nghệ hỗ trợ trước khi mua.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
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

function PickerLab() {
    const scenarios = {
        esport: {
            icon: <Gamepad2 />,
            title: "eSports",
            answer: "Ưu tiên FPS thật, latency thấp. Tắt Ray Tracing, cân nhắc không dùng Frame Generation nếu cảm thấy input lag.",
            color: "emerald",
        },
        aaa: {
            icon: <Sparkles />,
            title: "Game AAA đẹp hình",
            answer: "Bật Ray Tracing nếu GPU đủ mạnh, sau đó dùng DLSS/FSR/XeSS Quality để bù FPS trước khi hạ xuống Balanced/Performance.",
            color: "cyan",
        },
        path: {
            icon: <Eye />,
            title: "Path Tracing",
            answer: "Cần GPU rất mạnh và công nghệ tăng FPS. NVIDIA RTX thường có lợi thế lớn trong các game path tracing nặng.",
            color: "purple",
        },
        weak: {
            icon: <Gauge />,
            title: "GPU yếu / FPS thiếu",
            answer: "Thử upscaling Quality trước, sau đó Balanced. Performance chỉ nên dùng khi thật sự cần vì hình có thể mềm hơn.",
            color: "orange",
        },
        buy: {
            icon: <Search />,
            title: "Mua GPU mới",
            answer: "Xem game bạn chơi hỗ trợ DLSS/FSR/XeSS nào, xem benchmark gồm FPS trung bình, 1% low, latency và VRAM sử dụng.",
            color: "blue",
        },
    };
    const [active, setActive] = useState("aaa");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: nên bật công nghệ nào?"
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
            wrong: "Bật Ray Tracing lúc nào cũng tốt",
            right: "Ray Tracing làm hình đẹp hơn nhưng rất nặng GPU. Game eSports hoặc GPU yếu có thể nên tắt để ưu tiên FPS.",
        },
        {
            wrong: "DLSS/FSR/XeSS tăng FPS miễn phí, không mất gì",
            right: "Upscaling có đánh đổi: hình có thể mềm, ghosting, lỗi viền vật thể hoặc UI kém sắc nét tùy game/chế độ.",
        },
        {
            wrong: "Frame Generation làm game phản xạ nhanh hơn",
            right: "Frame Generation làm hình ảnh nhìn mượt hơn nhưng không nhất thiết giảm input latency.",
        },
        {
            wrong: "Có DLSS/FSR là GPU yếu cũng chơi 4K ngon",
            right: "GPU vẫn cần đủ mạnh, đủ VRAM, đủ bandwidth; CPU yếu hoặc thiếu VRAM vẫn có thể giật.",
        },
    ];
    const tips = [
        "eSports: ưu tiên FPS thật, latency thấp, tắt Ray Tracing.",
        "Game AAA: bật Ray Tracing nếu đủ mạnh, dùng DLSS/FSR/XeSS Quality để bù FPS.",
        "Thử upscaling theo thứ tự Quality → Balanced → Performance.",
        "FPS gốc dưới 30–40: Frame Generation có thể nhìn mượt hơn nhưng điều khiển vẫn chưa chắc tốt.",
        "Mua GPU mới: xem game bạn chơi hỗ trợ công nghệ nào.",
        "Đừng chỉ xem FPS trung bình; xem 1% low, latency, độ ổn định hình ảnh và VRAM sử dụng.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="12"
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
                        <span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">
                            13
                        </span>{" "}
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-cyan-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                Ray Tracing = ánh sáng, bóng, phản chiếu thật
                                hơn
                            </p>
                            <p className="text-slate-300">
                                nhưng rất nặng GPU và giảm FPS
                            </p>
                            <br />
                            <p>
                                DLSS = NVIDIA RTX, AI upscaling/frame generation
                            </p>
                            <p>FSR = AMD, mở hơn, hỗ trợ rộng</p>
                            <p>XeSS = Intel, hữu ích cho Intel Arc</p>
                            <br />
                            <p className="text-slate-500"># Quy tắc</p>
                            <p className="text-slate-300">
                                Quality trước → Balanced → Performance
                            </p>
                            <p className="text-slate-300">
                                Frame Generation mượt hơn ≠ input lag thấp hơn
                            </p>
                            <br />
                            <p className="text-red-300">
                                Đẹp hơn không luôn đồng nghĩa trải nghiệm tốt
                                hơn.
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
        question: "Ray Tracing chủ yếu dùng để làm gì?",
        options: [
            "Tăng dung lượng ổ cứng",
            "Mô phỏng ánh sáng, bóng đổ, phản chiếu chân thực hơn",
            "Giảm nhiệt độ CPU",
            "Tăng tốc mạng WiFi",
        ],
        correct: 1,
        explanation:
            "Ray Tracing mô phỏng đường đi ánh sáng để bóng đổ, phản chiếu và ánh sáng chân thực hơn.",
    },
    {
        question: "DLSS là công nghệ nổi bật của hãng nào?",
        options: ["NVIDIA", "AMD", "Intel", "Realtek"],
        correct: 0,
        explanation:
            "DLSS là công nghệ của NVIDIA, dùng AI để upscale/tạo frame trên GPU GeForce RTX.",
    },
    {
        question: "FSR có điểm mạnh lớn nào?",
        options: [
            "Chỉ chạy trên một dòng GPU duy nhất",
            "Có tính mở và hỗ trợ rộng trên nhiều GPU hơn",
            "Chỉ dùng cho ổ cứng SSD",
            "Không cần game hỗ trợ",
        ],
        correct: 1,
        explanation:
            "FSR thường mở hơn và có thể chạy trên nhiều GPU, nhưng vẫn cần game/phần mềm hỗ trợ.",
    },
    {
        question: "Frame Generation chủ yếu giúp gì?",
        options: [
            "Tạo thêm khung hình để hình ảnh trông mượt hơn",
            "Tăng dung lượng VRAM vật lý",
            "Làm GPU không cần điện",
            "Thay thế hoàn toàn CPU",
        ],
        correct: 0,
        explanation:
            "Frame Generation tạo thêm khung hình trung gian để chuyển động nhìn mượt hơn, nhưng không tự động giảm độ trễ điều khiển.",
    },
    {
        question:
            "Chế độ upscaling nào nên thử đầu tiên nếu FPS chỉ hơi thiếu?",
        options: ["Ultra Performance", "Quality", "Tắt màn hình", "Giảm VRAM"],
        correct: 1,
        explanation:
            "Quality thường giữ hình ảnh tốt nhất và tăng FPS vừa phải, nên là lựa chọn đầu tiên.",
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
                Bạn đã hiểu Ray Tracing, DLSS, FSR và XeSS. Tiếp theo là cách
                chọn GPU phù hợp nhu cầu, nơi chúng ta ghép VRAM, công suất,
                hãng GPU, công nghệ hỗ trợ, màn hình và ngân sách thành quyết
                định mua cụ thể.
            </p>
            <Link
                to="/phan-5-8"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Bài tiếp theo: 5.8 — Cách chọn GPU phù hợp nhu cầu{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
    const colorMap = {
        cyan: "bg-cyan-500/20 text-cyan-300",
        purple: "bg-purple-500/20 text-purple-300",
        amber: "bg-amber-500/20 text-amber-300",
        blue: "bg-blue-500/20 text-blue-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        pink: "bg-pink-500/20 text-pink-300",
        orange: "bg-orange-500/20 text-orange-300",
        red: "bg-red-500/20 text-red-300",
        indigo: "bg-indigo-500/20 text-indigo-300",
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
function ThermometerIcon() {
    return <Gauge />;
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
function RuleCard({ label, value, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-5`}>
            <p className={`${textColor(color)} font-bold text-sm mb-1`}>
                {label}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
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
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
        indigo: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
    };
    return map[color] || map.cyan;
}
function softBorder(color) {
    const map = {
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
        indigo: "bg-indigo-500/5 border-indigo-500/20",
    };
    return map[color] || map.cyan;
}
function textColor(color) {
    const map = {
        cyan: "text-cyan-300",
        purple: "text-purple-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        blue: "text-blue-300",
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
        indigo: "text-indigo-300",
    };
    return map[color] || "text-cyan-300";
}
