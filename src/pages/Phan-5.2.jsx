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
    HardDrive,
    Layers3,
    Lightbulb,
    Monitor,
    PackageCheck,
    Puzzle,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    Thermometer,
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
                            <Layers3 className="text-indigo-400" size={24} />
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
                    <div className="text-sm font-semibold text-indigo-300 bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/20">
                        Bài 5.2
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <FactoryAnalogy />
                <FramePipelineSimulator />
                <ArchitectureExplorer />
                <BusBandwidthLab />
                <SpecsTable />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-indigo-300">
                        <BookOpen size={16} /> Phần 5: GPU — Bộ xử lý đồ họa
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Kiến trúc GPU
                        <span className="block text-indigo-400">
                            Shader Cores, VRAM, Bus Width
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Hai GPU cùng 8GB VRAM vẫn có thể chênh hiệu năng rất
                        lớn, vì sức mạnh còn nằm ở shader cores, bus width,
                        bandwidth, cache, clock speed và kiến trúc xử lý.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<Sparkles size={16} />}
                            text="Shader Cores"
                        />
                        <Tag icon={<Database size={16} />} text="VRAM" />
                        <Tag icon={<Workflow size={16} />} text="Bus Width" />
                        <Tag icon={<Zap size={16} />} text="Bandwidth" />
                        <Tag icon={<Layers3 size={16} />} text="Cache" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Sparkles />}
                            label="Cores"
                            desc="Công nhân xử lý phép tính"
                            color="indigo"
                            highlight
                        />
                        <HeroTile
                            icon={<Database />}
                            label="VRAM"
                            desc="Kho nguyên liệu của GPU"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<Workflow />}
                            label="Bus Width"
                            desc="Số làn đường dữ liệu"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<Zap />}
                            label="Bandwidth"
                            desc="Hàng chuyển mỗi giây"
                            color="orange"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Đừng chỉ nhìn</p>
                        <p className="text-red-300">
                            8GB VRAM ≠ hiệu năng giống nhau
                        </p>
                        <p>Shader + VRAM + bus + bandwidth + cache</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu kiến trúc GPU là cách các thành phần bên trong GPU phối hợp để xử lý hình ảnh, game, render và AI.",
        "Nắm vai trò của shader cores, VRAM, bus width, bandwidth, cache, clock speed và TDP/TBP.",
        "Biết GPU xử lý một khung hình từ dữ liệu cảnh game đến hình ảnh hiển thị trên màn hình.",
        "Không so trực tiếp CUDA Cores, Stream Processors và Xe Cores giữa các hãng khác nhau.",
        "Đọc thông số GPU theo cụm thay vì kết luận chỉ bằng VRAM hoặc bus width.",
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
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: kiến trúc GPU là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">
                                Kiến trúc GPU
                            </strong>{" "}
                            là cách các thành phần bên trong GPU được thiết kế
                            và phối hợp với nhau để xử lý hình ảnh, video, game,
                            render 3D hoặc AI.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 font-mono text-sm">
                            <p>Shader Cores = công nhân xử lý</p>
                            <p>VRAM = kho nguyên liệu riêng</p>
                            <p>Bus Width = độ rộng con đường</p>
                            <p>Bandwidth = hàng chuyển được mỗi giây</p>
                            <p>GPU Clock = nhịp làm việc của nhà máy</p>
                        </div>
                        <p>
                            Nếu nhiều nhân xử lý nhưng VRAM chậm, bus hẹp hoặc
                            bandwidth thấp, GPU vẫn có thể bị nghẽn hiệu năng.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <Puzzle className="text-cyan-300" /> Đọc GPU theo
                            cụm
                        </h3>
                        <div className="space-y-3">
                            <RuleCard
                                label="Không đủ"
                                value="Chỉ nhìn VRAM 8GB, 12GB, 16GB"
                                color="red"
                            />
                            <RuleCard
                                label="Tốt hơn"
                                value="Xem kiến trúc + shader cores + VRAM + bus + bandwidth + TDP + benchmark"
                                color="emerald"
                            />
                            <RuleCard
                                label="Lý do"
                                value="Một thông số đơn lẻ không phản ánh toàn bộ luồng xử lý hình ảnh."
                                color="blue"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FactoryAnalogy() {
    const cards = [
        {
            icon: <Sparkles />,
            title: "Shader Cores",
            desc: "Công nhân xử lý phép tính: màu sắc, ánh sáng, bóng đổ, hiệu ứng.",
            color: "indigo",
        },
        {
            icon: <Database />,
            title: "VRAM",
            desc: "Kho nguyên liệu sát nhà máy: texture, model, shader, frame buffer.",
            color: "cyan",
        },
        {
            icon: <Workflow />,
            title: "Bus Width",
            desc: "Số làn đường từ kho VRAM đến các nhân xử lý.",
            color: "emerald",
        },
        {
            icon: <Zap />,
            title: "Bandwidth",
            desc: "Tổng lượng dữ liệu chuyển được mỗi giây trên con đường đó.",
            color: "orange",
        },
        {
            icon: <Layers3 />,
            title: "Cache",
            desc: "Kho nhỏ cực nhanh gần công nhân để giảm số lần phải về VRAM.",
            color: "purple",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: nhà máy sản xuất hình ảnh"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-5 gap-4">
                {cards.map((c) => (
                    <AnalogyCard key={c.title} {...c} />
                ))}
            </div>
        </section>
    );
}

function FramePipelineSimulator() {
    const steps = [
        {
            icon: <Cpu />,
            title: "CPU gửi dữ liệu cảnh game",
            desc: "CPU chuẩn bị dữ liệu nhân vật, căn phòng, vật thể, lệnh game và gửi yêu cầu vẽ cho GPU.",
        },
        {
            icon: <Sparkles />,
            title: "GPU nhận lệnh vẽ hình",
            desc: "GPU bắt đầu xử lý frame tiếp theo theo lệnh từ game engine và driver.",
        },
        {
            icon: <Database />,
            title: "VRAM chứa texture, model, shader",
            desc: "Texture, model 3D, dữ liệu ánh sáng, shader và frame buffer nằm trong VRAM.",
        },
        {
            icon: <Workflow />,
            title: "Bus và bandwidth đưa dữ liệu đến cores",
            desc: "Bus rộng và bandwidth cao giúp shader cores nhận dữ liệu kịp thời.",
        },
        {
            icon: <Sparkles />,
            title: "Shader cores xử lý ánh sáng/màu sắc",
            desc: "Các nhân shader tính màu da, bóng đổ, phản chiếu, ánh sáng, hiệu ứng và pixel.",
        },
        {
            icon: <Monitor />,
            title: "GPU xuất khung hình hoàn chỉnh",
            desc: "Frame được xuất ra màn hình. 60Hz cần khoảng 60 FPS, 144Hz cần khoảng 144 FPS để tận dụng tốt.",
        },
    ];
    const [active, setActive] = useState(0);
    const step = steps[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="GPU xử lý một khung hình như thế nào?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[330px] flex flex-col justify-between">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center justify-center mb-5">
                                {React.cloneElement(step.icon, { size: 32 })}
                            </div>
                            <p className="text-purple-300 text-sm font-bold mb-2">
                                Bước {active + 1}/{steps.length}
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
                                className={`w-full flex items-center gap-4 p-3 rounded-2xl border text-left transition-all ${active === i ? "bg-purple-500/5 border-purple-500/20 text-white" : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`}
                            >
                                <div
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${active === i ? "bg-purple-500/10 text-purple-300 border border-purple-500/20" : "bg-slate-900 text-slate-500"}`}
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
                <div className="mt-6 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-indigo-300">
                        Khi tăng độ phân giải:
                    </strong>{" "}
                    nhiều điểm ảnh hơn → cần nhiều VRAM hơn → cần bandwidth cao
                    hơn → shader cores phải làm việc nhiều hơn.
                </div>
            </div>
        </section>
    );
}

function ArchitectureExplorer() {
    const items = {
        shader: {
            icon: <Sparkles />,
            title: "Shader Cores",
            detail: "Nhân xử lý đồ họa tính màu sắc, ánh sáng, bóng đổ, hiệu ứng hình ảnh và nhiều phép toán song song.",
            examples:
                "NVIDIA: CUDA Cores; AMD: Stream Processors; Intel: Xe Cores / Execution Units.",
            caution:
                "Không so trực tiếp CUDA Cores với Stream Processors giữa các hãng.",
            color: "indigo",
        },
        vram: {
            icon: <Database />,
            title: "VRAM",
            detail: "Bộ nhớ riêng của GPU, lưu texture, model 3D, shader, frame buffer, dữ liệu render và dữ liệu AI.",
            examples: "VRAM = kho nguyên liệu đặt sát nhà máy GPU.",
            caution:
                "Thiếu VRAM có thể gây texture tải chậm, khựng, tụt FPS hoặc workload AI/render không chạy được.",
            color: "cyan",
        },
        bus: {
            icon: <Workflow />,
            title: "Bus Width",
            detail: "Độ rộng đường truyền dữ liệu giữa GPU và VRAM, thường tính bằng bit.",
            examples: "64-bit, 128-bit, 192-bit, 256-bit, 384-bit+.",
            caution:
                "Bus hẹp không tự động yếu, nhưng dễ nghẽn ở 1440p/4K hoặc texture rất nặng nếu bandwidth/cache không đủ.",
            color: "emerald",
        },
        bandwidth: {
            icon: <Zap />,
            title: "Memory Bandwidth",
            detail: "Lượng dữ liệu GPU có thể đọc/ghi từ VRAM mỗi giây, thường tính bằng GB/s.",
            examples: "Phụ thuộc vào bus width và tốc độ VRAM.",
            caution:
                "Bandwidth quan trọng khi chơi game độ phân giải cao, texture nặng, render lớn.",
            color: "orange",
        },
        cache: {
            icon: <Layers3 />,
            title: "GPU Cache",
            detail: "Bộ nhớ đệm cực nhanh nằm gần nhân xử lý, giúp giảm số lần phải quay về VRAM.",
            examples:
                "Shader cores kiểm tra cache trước; nếu có dữ liệu thì lấy rất nhanh.",
            caution:
                "Cache lớn và kiến trúc tối ưu có thể giúp GPU bus 128-bit vẫn hoạt động tốt trong một số workload.",
            color: "purple",
        },
        clock: {
            icon: <Gauge />,
            title: "GPU Clock",
            detail: "Nhịp làm việc của GPU, thường tính bằng MHz hoặc GHz.",
            examples:
                "Boost clock cao có thể tăng hiệu năng trong cùng kiến trúc.",
            caution:
                "Clock cao không quyết định một mình; còn phụ thuộc kiến trúc, số nhân, VRAM, bandwidth, điện và nhiệt.",
            color: "yellow",
        },
    };
    const [active, setActive] = useState("shader");
    const item = items[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Các thành phần chính trong kiến trúc GPU"
                icon={<Layers3 />}
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
                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-3">
                            {item.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            {item.detail}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <InfoCard
                            label="Ví dụ dễ hiểu"
                            value={item.examples}
                            color={item.color}
                        />
                        <InfoCard
                            label="Lưu ý"
                            value={item.caution}
                            color="orange"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function BusBandwidthLab() {
    const configs = {
        low: {
            title: "64-bit",
            road: "2 làn",
            use: "GPU rất thấp cấp",
            result: "Dễ nghẽn khi game/texture nặng",
            color: "red",
        },
        normal: {
            title: "128-bit",
            road: "4 làn",
            use: "GPU phổ thông",
            result: "Đủ cho 1080p nếu kiến trúc/cache/bộ nhớ tối ưu tốt",
            color: "cyan",
        },
        mid: {
            title: "192-bit",
            road: "6 làn",
            use: "GPU tầm trung khá",
            result: "An toàn hơn cho 1440p và texture nặng",
            color: "emerald",
        },
        high: {
            title: "256-bit",
            road: "8 làn",
            use: "GPU cao cấp hơn",
            result: "Phù hợp game nặng, độ phân giải cao",
            color: "purple",
        },
        ultra: {
            title: "384-bit+",
            road: "12 làn+",
            use: "GPU rất cao cấp/workstation",
            result: "Phù hợp 4K, render, AI, workload nặng",
            color: "orange",
        },
    };
    const [active, setActive] = useState("normal");
    const item = configs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Lab: Bus Width và Bandwidth"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    {Object.entries(configs).map(([key, c]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(c.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <p className="font-bold font-mono text-sm">
                                {c.title}
                            </p>
                            <p className="text-xs opacity-75 mt-1">{c.road}</p>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <InfoCard
                        label="Bus Width"
                        value={item.title}
                        color={item.color}
                    />
                    <InfoCard
                        label="Ẩn dụ"
                        value={`Con đường ${item.road}`}
                        color={item.color}
                    />
                    <InfoCard
                        label="Thường gặp ở"
                        value={item.use}
                        color={item.color}
                    />
                </div>
                <div
                    className={`${softBorder(item.color)} border rounded-2xl p-5 mt-5 text-slate-300`}
                >
                    <strong className={textColor(item.color)}>
                        Ý nghĩa thực tế:
                    </strong>{" "}
                    {item.result}
                </div>
                <div className="mt-5 bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300 text-center">
                    Bus Width = số làn đường • VRAM Speed = tốc độ xe •
                    Bandwidth = tổng lượng hàng chở được mỗi giây
                </div>
            </div>
        </section>
    );
}

function SpecsTable() {
    const rows = [
        [
            "Shader Cores",
            "Số nhân xử lý đồ họa",
            "Càng nhiều thường càng tốt trong cùng kiến trúc, nhưng phải xét thế hệ/hãng",
        ],
        [
            "VRAM Capacity",
            "Dung lượng bộ nhớ đồ họa",
            "Chứa texture, model, frame buffer, dữ liệu render/AI",
        ],
        [
            "VRAM Type",
            "Loại bộ nhớ như GDDR6, GDDR6X, GDDR7",
            "Bộ nhớ mới thường nhanh hơn và/hoặc tiết kiệm hơn",
        ],
        [
            "Bus Width",
            "Độ rộng đường truyền GPU ↔ VRAM",
            "Bus rộng giúp truyền nhiều dữ liệu hơn",
        ],
        [
            "Bandwidth",
            "Lượng dữ liệu truyền mỗi giây",
            "Quan trọng với 1440p, 4K, texture nặng, render",
        ],
        [
            "Clock Speed",
            "Xung nhịp GPU",
            "Ảnh hưởng tốc độ xử lý nhưng không quyết định một mình",
        ],
        [
            "TDP/TBP",
            "Công suất tiêu thụ",
            "Ảnh hưởng nguồn, nhiệt độ, tản nhiệt",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Bảng thông số kỹ thuật cần biết"
                icon={<Settings />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[860px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Thông số</th>
                            <th className="p-4">Ý nghĩa</th>
                            <th className="p-4">Ảnh hưởng thực tế</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([name, meaning, impact]) => (
                            <tr
                                key={name}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-yellow-300 font-extrabold">
                                    {name}
                                </td>
                                <td className="p-4 text-slate-300">
                                    {meaning}
                                </td>
                                <td className="p-4 text-slate-300">{impact}</td>
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
            icon: <Gamepad2 />,
            title: "RTX 4060",
            subtitle: "8GB VRAM, bus 128-bit",
            color: "indigo",
            points: [
                "8GB GDDR6",
                "Bus 128-bit",
                "Bandwidth khoảng 272GB/s",
                "Công suất khoảng 115W",
                "Hợp game 1080p, eSports, máy tiết kiệm điện",
            ],
            lesson: "8GB đủ cho nhiều game 1080p, nhưng bus 128-bit không lý tưởng cho 4K/texture cực nặng.",
        },
        {
            icon: <Sparkles />,
            title: "AMD Radeon RX 7600",
            subtitle: "8GB VRAM, bus 128-bit",
            color: "orange",
            points: [
                "8GB GDDR6",
                "Bus 128-bit",
                "Bandwidth khoảng 288GB/s",
                "Hướng đến gaming 1080p",
                "Hiệu năng phụ thuộc game, driver và kiến trúc",
            ],
            lesson: "Cùng 8GB và 128-bit như RTX 4060, nhưng không thể kết luận hiệu năng giống nhau.",
        },
        {
            icon: <Film />,
            title: "RTX 4070",
            subtitle: "12GB VRAM, bus 192-bit",
            color: "emerald",
            points: [
                "12GB GDDR6X",
                "Bus 192-bit",
                "Bandwidth khoảng 504GB/s",
                "Hợp game 1440p, render bán chuyên",
                "VRAM + bus + bandwidth đều cao hơn GPU phổ thông",
            ],
            lesson: "Đây là ví dụ rõ về việc VRAM, bus width và bandwidth cùng ảnh hưởng hiệu năng.",
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

function PickerLab() {
    const scenarios = {
        p1080: {
            icon: <Gamepad2 />,
            title: "Game 1080p",
            answer: "Ưu tiên GPU có ít nhất 8GB VRAM, xem benchmark game thực tế. Bus 128-bit vẫn có thể ổn nếu kiến trúc/cache/bandwidth tối ưu tốt.",
            color: "cyan",
        },
        p1440: {
            icon: <Monitor />,
            title: "Game 1440p",
            answer: "Nên cân nhắc 12GB VRAM trở lên, bus 192-bit hoặc bandwidth cao hơn để an toàn với texture và game mới.",
            color: "emerald",
        },
        p4k: {
            icon: <Film />,
            title: "4K / texture nặng",
            answer: "Cần VRAM lớn, bandwidth cao, bus rộng và GPU đủ mạnh. Không nên chỉ nhìn VRAM rồi bỏ qua benchmark 4K.",
            color: "purple",
        },
        render: {
            icon: <HardDrive />,
            title: "Render / dựng video",
            answer: "VRAM và bandwidth quan trọng. Thiếu VRAM có thể render chậm, lỗi hoặc phải giảm chất lượng scene/texture.",
            color: "orange",
        },
        ai: {
            icon: <Brain />,
            title: "AI local",
            answer: "VRAM là giới hạn lớn. Nên xem yêu cầu mô hình AI, framework hỗ trợ và benchmark đúng workload.",
            color: "indigo",
        },
    };
    const [active, setActive] = useState("p1080");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Lab: đọc thông số theo nhu cầu"
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
            wrong: "Card 12GB chắc chắn mạnh hơn card 8GB",
            right: "VRAM nhiều hơn không đồng nghĩa mạnh hơn. Cần xem kiến trúc, shader cores, bus width, bandwidth, clock, driver và benchmark.",
        },
        {
            wrong: "Bus 128-bit là chắc chắn yếu",
            right: "Bus 128-bit là hạn chế, nhưng GPU hiện đại có thể bù bằng cache lớn và nén dữ liệu. Dù vậy 1440p/4K vẫn dễ nghẽn hơn.",
        },
        {
            wrong: "CUDA Cores nhiều hơn là mạnh hơn mọi trường hợp",
            right: "Chỉ nên so trong cùng hãng, cùng thế hệ hoặc gần thế hệ. CUDA Cores ≠ Stream Processors ≠ Xe Cores.",
        },
        {
            wrong: "Chỉ cần nhìn thông số là biết card mạnh",
            right: "Thông số giúp định hướng, nhưng benchmark trong game/phần mềm bạn dùng mới là bằng chứng thực tế.",
        },
    ];
    const tips = [
        "1080p: ưu tiên 8GB VRAM trở lên và benchmark game thực tế.",
        "1440p: cân nhắc 12GB VRAM trở lên, bus 192-bit hoặc bandwidth cao hơn.",
        "Render/AI: VRAM rất quan trọng, thiếu VRAM có thể không chạy được workload lớn.",
        "Đọc theo cụm: shader cores + VRAM + bus width + bandwidth + TDP + benchmark.",
        "Mua GPU cũ: kiểm tra model đầy đủ vì có card tên gần giống nhưng khác VRAM/bus/hiệu năng.",
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
                        <span className="bg-indigo-500/20 text-indigo-300 p-2 rounded-xl">
                            11
                        </span>{" "}
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-indigo-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                GPU Architecture = cách các phần trong GPU phối
                                hợp
                            </p>
                            <br />
                            <p className="text-slate-500"># Thành phần</p>
                            <p className="text-slate-300">
                                Shader Cores = công nhân tính toán
                            </p>
                            <p className="text-slate-300">
                                VRAM = kho nguyên liệu riêng
                            </p>
                            <p className="text-slate-300">
                                Bus Width = số làn đường GPU ↔ VRAM
                            </p>
                            <p className="text-slate-300">
                                Bandwidth = lượng dữ liệu truyền mỗi giây
                            </p>
                            <p className="text-slate-300">
                                Cache = bộ nhớ đệm cực nhanh gần cores
                            </p>
                            <br />
                            <p className="text-red-300">
                                VRAM nhiều hơn không tự động nghĩa là GPU mạnh
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
        question: "Shader cores trong GPU có nhiệm vụ chính là gì?",
        options: [
            "Lưu trữ dữ liệu lâu dài",
            "Cấp điện cho GPU",
            "Xử lý phép tính đồ họa, ánh sáng, màu sắc, hiệu ứng",
            "Kết nối WiFi cho máy tính",
        ],
        correct: 2,
        explanation:
            "Shader cores chuyên xử lý các phép tính đồ họa như màu sắc, ánh sáng, bóng đổ, hiệu ứng và pixel.",
    },
    {
        question: "Bus Width trong GPU có thể hiểu đơn giản là gì?",
        options: [
            "Dung lượng ổ cứng",
            "Độ rộng đường truyền giữa GPU và VRAM",
            "Tốc độ quạt GPU",
            "Số cổng HDMI trên card màn hình",
        ],
        correct: 1,
        explanation:
            "Bus Width là độ rộng đường truyền dữ liệu giữa GPU và VRAM, thường tính bằng bit.",
    },
    {
        question:
            "Một GPU nhiều VRAM hơn có chắc chắn mạnh hơn GPU ít VRAM hơn không?",
        options: [
            "Có, luôn luôn mạnh hơn",
            "Không, còn phụ thuộc kiến trúc, nhân xử lý, bus, bandwidth và nhiều yếu tố khác",
            "Có, nếu cùng màu card",
            "Không liên quan gì đến hiệu năng trong mọi trường hợp",
        ],
        correct: 1,
        explanation:
            "VRAM chỉ là một phần. Hiệu năng còn phụ thuộc kiến trúc, shader cores, bus width, bandwidth, clock, driver và benchmark thực tế.",
    },
    {
        question: "Bandwidth phụ thuộc chủ yếu vào gì?",
        options: [
            "Bus Width và tốc độ VRAM",
            "Màu RGB của card",
            "Số quạt case",
            "Dung lượng ổ SSD",
        ],
        correct: 0,
        explanation:
            "Memory Bandwidth phụ thuộc chủ yếu vào độ rộng bus và tốc độ bộ nhớ VRAM.",
    },
    {
        question:
            "Có nên so trực tiếp CUDA Cores NVIDIA với Stream Processors AMD không?",
        options: [
            "Nên, số nào nhiều hơn là mạnh hơn",
            "Không nên, vì kiến trúc và cách tính hiệu năng khác nhau",
            "Chỉ cần so màu card",
            "Chỉ cần so hãng sản xuất vỏ card",
        ],
        correct: 1,
        explanation:
            "CUDA Cores, Stream Processors và Xe Cores thuộc các kiến trúc khác nhau, không nên so trực tiếp theo số lượng.",
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
                Bạn đã hiểu kiến trúc GPU và vì sao không thể đánh giá card chỉ
                bằng VRAM. Tiếp theo là GPU tích hợp vs GPU rời — phần giúp biết
                khi nào chỉ cần iGPU và khi nào bắt buộc phải mua card đồ họa
                rời.
            </p>
            <Link
                to="/phan-5-3"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20"
            >
                Bài tiếp theo: 5.3 — GPU tích hợp vs GPU rời{" "}
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-indigo-500/10 border-indigo-400/50" : softBorder(color)}`}
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
        <div className={`${softBorder(color)} border rounded-2xl p-4`}>
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
