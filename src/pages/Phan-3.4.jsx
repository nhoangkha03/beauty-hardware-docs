import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BookOpen,
    Brain,
    Calculator,
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
    Timer,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shadow-lg shadow-amber-500/10">
                            <Gauge className="text-amber-400" size={24} />
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
                    <div className="text-sm font-semibold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                        Bài 3.4
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <SpecReadingConcept />
                <DeskAnalogy />
                <CpuRamFlow />
                <MainSpecTable />
                <CapacityGuide />
                <LatencyCalculator />
                <XmpExpoSection />
                <RealExamples />
                <BuyingLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-amber-300">
                        <BookOpen size={16} /> Phần 3: Bộ nhớ — Memory
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Thông số RAM
                        <span className="block text-amber-400">
                            Dung lượng, tốc độ, CL
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Biết đọc các dòng như 16GB DDR4-3200 CL16 hay 32GB
                        DDR5-6000 CL30 giúp bạn tránh mua nhầm, tránh bị quảng
                        cáo làm rối và chọn RAM đúng nhu cầu.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Database size={16} />} text="GB" />
                        <Tag icon={<Gauge size={16} />} text="MT/s" />
                        <Tag icon={<Timer size={16} />} text="CL" />
                        <Tag icon={<Settings size={16} />} text="Timing" />
                        <Tag icon={<Zap size={16} />} text="XMP / EXPO" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-5 font-mono">
                        <p className="text-slate-500 text-sm mb-3">
                            // Ví dụ thông số
                        </p>
                        <div className="text-2xl font-extrabold text-white">
                            16GB DDR4-3200 CL16
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
                            <SpecChip
                                label="16GB"
                                value="Dung lượng"
                                color="emerald"
                            />
                            <SpecChip
                                label="DDR4"
                                value="Thế hệ"
                                color="cyan"
                            />
                            <SpecChip label="3200" value="MT/s" color="amber" />
                            <SpecChip
                                label="CL16"
                                value="Độ trễ"
                                color="purple"
                            />
                        </div>
                    </div>
                    <div className="mt-5 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 text-sm text-slate-300">
                        <strong className="text-amber-300">Ghi nhớ:</strong>{" "}
                        Dung lượng thường quan trọng nhất với người mới, nhưng
                        tốc độ và CL cũng ảnh hưởng hiệu năng trong một số tình
                        huống.
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Đọc đúng thông số RAM như 16GB DDR4-3200 CL16 hoặc 32GB DDR5-6000 CL30.",
        "Hiểu dung lượng, tốc độ MT/s và độ trễ CL ảnh hưởng thế nào đến trải nghiệm.",
        "Biết vì sao CL thấp hơn không luôn đồng nghĩa RAM nhanh hơn.",
        "Tính nhanh độ trễ xấp xỉ theo công thức CL × 2000 / MT/s.",
        "Biết vai trò của timing, điện áp, form factor, XMP và EXPO khi mua RAM.",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="amber"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-300 flex items-center justify-center font-bold mb-4">
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

function SpecReadingConcept() {
    const examples = [
        {
            text: "16GB DDR4-3200 CL16",
            parts: [
                "16GB = dung lượng",
                "DDR4 = thế hệ RAM",
                "3200 = khoảng 3200 MT/s",
                "CL16 = CAS Latency",
            ],
        },
        {
            text: "32GB DDR5-6000 CL30",
            parts: [
                "32GB = dung lượng",
                "DDR5 = thế hệ RAM",
                "6000 = khoảng 6000 MT/s",
                "CL30 = độ trễ theo chu kỳ",
            ],
        },
        {
            text: "16GB DDR5-5600 CL46 SO-DIMM",
            parts: [
                "16GB = dung lượng",
                "DDR5-5600 = tốc độ",
                "CL46 = độ trễ",
                "SO-DIMM = laptop/mini PC",
            ],
        },
    ];
    const [active, setActive] = useState(0);
    const item = examples[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: thông số RAM nói lên điều gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div className="space-y-3">
                        {examples.map((ex, i) => (
                            <button
                                key={ex.text}
                                onClick={() => setActive(i)}
                                className={`w-full rounded-2xl border p-4 text-left font-mono transition-all ${active === i ? "bg-cyan-500/10 border-cyan-500/30 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                            >
                                {ex.text}
                            </button>
                        ))}
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-2xl font-extrabold text-white mb-5 font-mono">
                            {item.text}
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {item.parts.map((part, i) => (
                                <div
                                    key={part}
                                    className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-4 text-sm text-slate-300"
                                >
                                    <span className="text-cyan-300 font-bold">
                                        {i + 1}.
                                    </span>{" "}
                                    {part}
                                </div>
                            ))}
                        </div>
                        <div className="mt-5 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 text-sm text-slate-300">
                            <strong className="text-amber-300">
                                Nói ngắn gọn:
                            </strong>{" "}
                            Dung lượng = chứa được bao nhiêu việc; tốc độ =
                            truyền dữ liệu nhanh cỡ nào; CL = phản hồi sau bao
                            nhiêu chu kỳ.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function DeskAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="emerald"
                title="Ví dụ đời thường: mặt bàn, tốc độ lấy tài liệu và thời gian chờ"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                    <AnalogyCard
                        icon={<Database />}
                        title="Dung lượng"
                        desc="Mặt bàn rộng bao nhiêu: mở được bao nhiêu app, tab, file và project cùng lúc."
                        color="emerald"
                    />
                    <AnalogyCard
                        icon={<Gauge />}
                        title="Tốc độ"
                        desc="Bạn lấy/chuyển tài liệu nhanh cỡ nào: RAM truyền dữ liệu được nhiều hay ít mỗi giây."
                        color="amber"
                    />
                    <AnalogyCard
                        icon={<Timer />}
                        title="CL"
                        desc="Bạn mất bao lâu để bắt đầu lấy tài liệu: RAM phản hồi sau bao nhiêu chu kỳ."
                        color="purple"
                    />
                </div>
            </div>
        </section>
    );
}

function CpuRamFlow() {
    const steps = [
        {
            icon: <Cpu />,
            title: "CPU cần dữ liệu",
            desc: "CPU đang xử lý app, game, file hoặc tác vụ tính toán.",
            color: "cyan",
        },
        {
            icon: <Database />,
            title: "Kiểm tra Cache",
            desc: "Nếu dữ liệu có trong cache, CPU lấy rất nhanh.",
            color: "purple",
        },
        {
            icon: <MemoryStick />,
            title: "Gửi yêu cầu đến RAM",
            desc: "Nếu cache không có, CPU yêu cầu RAM trả dữ liệu.",
            color: "emerald",
        },
        {
            icon: <Timer />,
            title: "RAM phản hồi sau CL",
            desc: "CL cho biết RAM chờ bao nhiêu chu kỳ trước khi bắt đầu trả dữ liệu.",
            color: "amber",
        },
        {
            icon: <Gauge />,
            title: "Dữ liệu truyền về CPU",
            desc: "Tốc độ MT/s ảnh hưởng lượng dữ liệu truyền được mỗi giây.",
            color: "blue",
        },
    ];
    const [active, setActive] = useState(0);
    const item = steps[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Cơ chế: dung lượng, tốc độ và CL ảnh hưởng thế nào?"
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
                    <div className="space-y-3">
                        <FlowNote
                            title="Thiếu dung lượng RAM"
                            desc="Windows/macOS phải dùng SSD làm bộ nhớ tạm → máy khựng, load lại app, chuyển cửa sổ chậm."
                            color="red"
                        />
                        <FlowNote
                            title="RAM nhanh hơn"
                            desc="Băng thông cao hơn → có lợi cho iGPU, game CPU-bound và một số tác vụ kỹ thuật."
                            color="amber"
                        />
                        <FlowNote
                            title="CL thấp hơn"
                            desc="Có lợi cho độ trễ, nhưng phải xét cùng tốc độ MT/s."
                            color="purple"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function MainSpecTable() {
    const specs = [
        [
            "Dung lượng",
            "8GB, 16GB, 32GB",
            "Mặt bàn làm việc rộng bao nhiêu",
            "Quyết định mở được bao nhiêu app cùng lúc",
            "emerald",
        ],
        [
            "Tốc độ",
            "DDR4-3200, DDR5-6000",
            "Đường truyền dữ liệu nhanh cỡ nào",
            "Ảnh hưởng băng thông, gaming, iGPU, một số phần mềm",
            "amber",
        ],
        [
            "CL",
            "CL16, CL30, CL40",
            "RAM chờ bao nhiêu chu kỳ",
            "Ảnh hưởng độ trễ, nhưng phải xét cùng tốc độ",
            "purple",
        ],
        [
            "Timing",
            "16-18-18-36",
            "Bộ độ trễ chi tiết",
            "Người mới chỉ cần quan tâm CL trước",
            "blue",
        ],
        [
            "Điện áp",
            "1.2V, 1.35V",
            "RAM cần bao nhiêu điện",
            "Liên quan ổn định, nhiệt, ép xung",
            "orange",
        ],
        [
            "Form factor",
            "DIMM, SO-DIMM",
            "Kiểu thanh RAM",
            "Quyết định lắp được PC hay laptop",
            "cyan",
        ],
        [
            "Profile",
            "XMP, EXPO",
            "Cấu hình tốc độ lưu sẵn",
            "Cần bật BIOS để chạy đúng tốc độ quảng cáo",
            "pink",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Bảng thông số RAM cần biết"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[900px] text-sm">
                    <thead>
                        <tr className="text-left">
                            <th className="p-4 text-slate-400">Thông số</th>
                            <th className="p-4 text-slate-400">Ví dụ</th>
                            <th className="p-4 text-slate-400">Nói dễ hiểu</th>
                            <th className="p-4 text-slate-400">
                                Ảnh hưởng thực tế
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {specs.map(([name, ex, easy, impact, color]) => (
                            <tr
                                key={name}
                                className="border-t border-slate-800"
                            >
                                <td
                                    className={`p-4 font-bold ${textColor(color)}`}
                                >
                                    {name}
                                </td>
                                <td className="p-4 text-slate-300 font-mono">
                                    {ex}
                                </td>
                                <td className="p-4 text-slate-300">{easy}</td>
                                <td className="p-4 text-slate-300">{impact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function CapacityGuide() {
    const guide = {
        gb4: {
            title: "4GB",
            fit: "Máy rất cũ, tác vụ cực nhẹ",
            downside: "Hiện nay rất dễ thiếu",
            color: "red",
        },
        gb8: {
            title: "8GB",
            fit: "Học tập, văn phòng nhẹ, web ít tab",
            downside: "Dễ đầy nếu mở nhiều app",
            color: "orange",
        },
        gb16: {
            title: "16GB",
            fit: "Mức phổ thông tốt hiện nay",
            downside: "Có thể thiếu nếu dựng video, máy ảo nặng",
            color: "emerald",
        },
        gb32: {
            title: "32GB",
            fit: "Gaming thoải mái, lập trình, đồ họa, nhiều tab",
            downside: "Giá cao hơn, không phải ai cũng cần",
            color: "cyan",
        },
        gb64: {
            title: "64GB+",
            fit: "Dựng video nặng, máy ảo, AI local, workstation",
            downside: "Lãng phí nếu chỉ văn phòng/web",
            color: "purple",
        },
    };
    const [active, setActive] = useState("gb16");
    const item = guide[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Dung lượng RAM nên chọn theo nhu cầu"
                icon={<Database />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-5 gap-3 mb-6">
                    {Object.entries(guide).map(([key, g]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(g.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <p className="font-extrabold">{g.title}</p>
                            <p className="text-xs opacity-75 mt-1">{g.fit}</p>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard
                        label="Phù hợp với"
                        value={item.fit}
                        color={item.color}
                    />
                    <InfoCard
                        label="Nhược điểm nếu chọn mức này"
                        value={item.downside}
                        color={item.color}
                    />
                </div>
                <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-emerald-300">Kết luận:</strong> Văn
                    phòng/học tập: 8GB tối thiểu, 16GB nên có. Gaming/lập
                    trình/đa nhiệm: 16GB tối thiểu, 32GB thoải mái. Đồ
                    họa/video/máy ảo: 32GB trở lên.
                </div>
            </div>
        </section>
    );
}

function LatencyCalculator() {
    const samples = {
        ddr4: { label: "DDR4-3200 CL16", speed: 3200, cl: 16, color: "cyan" },
        ddr5good: {
            label: "DDR5-6000 CL30",
            speed: 6000,
            cl: 30,
            color: "emerald",
        },
        ddr5slow: {
            label: "DDR5-5600 CL46",
            speed: 5600,
            cl: 46,
            color: "orange",
        },
        ddr5cl36: {
            label: "DDR5-6000 CL36",
            speed: 6000,
            cl: 36,
            color: "purple",
        },
    };
    const [active, setActive] = useState("ddr5good");
    const item = samples[active];
    const latency = ((item.cl * 2000) / item.speed).toFixed(1);

    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="purple"
                title="Lab: CL thấp hơn có luôn nhanh hơn không?"
                icon={<Calculator />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-3 mb-6">
                    {Object.entries(samples).map(([key, s]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(s.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <p className="font-bold font-mono text-sm">
                                {s.label}
                            </p>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div
                        className={`${softBorder(item.color)} border rounded-3xl p-6 text-center`}
                    >
                        <div
                            className={`w-20 h-20 rounded-3xl ${badgeColor(item.color)} flex items-center justify-center mx-auto mb-5`}
                        >
                            <Timer size={38} />
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-2">
                            {item.label}
                        </h3>
                        <p
                            className={`${textColor(item.color)} text-4xl font-black`}
                        >
                            {latency} ns
                        </p>
                        <p className="text-slate-500 text-sm mt-2">
                            độ trễ xấp xỉ
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
                        <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 text-slate-300">
                            <p>Độ trễ ns ≈ CL × 2000 / tốc độ MT/s</p>
                            <p className="text-amber-300 mt-2">
                                {item.cl} × 2000 / {item.speed} = {latency} ns
                            </p>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                            CL là số chu kỳ, còn mỗi chu kỳ nhanh hay chậm phụ
                            thuộc tốc độ RAM. Vì vậy DDR4-3200 CL16 và DDR5-6000
                            CL30 đều xấp xỉ 10ns, nhưng DDR5-6000 có băng thông
                            cao hơn.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function XmpExpoSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="blue"
                title="XMP / EXPO: vì sao RAM 6000 có thể đang chạy 4800?"
                icon={<Settings />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-300 border border-blue-500/20 flex items-center justify-center mb-4">
                            <Settings size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                            Profile RAM
                        </h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            Nhiều kit RAM có tốc độ quảng cáo cao nhờ profile
                            XMP hoặc EXPO. Khi mới lắp, RAM có thể chạy ở tốc độ
                            mặc định JEDEC thấp hơn.
                        </p>
                        <div className="space-y-3">
                            <InfoCard
                                label="XMP"
                                value="Thường dùng với Intel, nhiều main AMD cũng hỗ trợ"
                                color="cyan"
                            />
                            <InfoCard
                                label="EXPO"
                                value="Thường dùng với AMD Ryzen đời mới"
                                color="emerald"
                            />
                        </div>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 font-mono text-sm text-slate-300 space-y-3">
                        <p className="text-slate-500">// Luồng thực tế</p>
                        <p>Lắp RAM DDR5-6000</p>
                        <p className="text-slate-600">↓</p>
                        <p>Máy chạy tốc độ mặc định JEDEC</p>
                        <p className="text-slate-600">↓</p>
                        <p>Bật XMP/EXPO trong BIOS</p>
                        <p className="text-slate-600">↓</p>
                        <p className="text-blue-300">
                            RAM chạy gần/tới tốc độ quảng cáo nếu CPU/mainboard
                            hỗ trợ ổn định
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
            icon: <Monitor />,
            title: "Corsair Vengeance LPX 16GB DDR4-3200 CL16",
            subtitle: "Kit DDR4 desktop phổ biến",
            color: "cyan",
            points: [
                "16GB total capacity",
                "2 x 8GB",
                "DDR4-3200 / 3200 MT/s",
                "Timing 16-18-18-36",
                "Tested voltage 1.35V",
                "XMP 2.0",
                "UDIMM 288-pin",
            ],
            lesson: "Phù hợp học tập, văn phòng, gaming 1080p phổ thông và lập trình cơ bản; dựng video nặng nên cân nhắc 32GB.",
        },
        {
            icon: <MemoryStick />,
            title: "G.SKILL Flare X5 32GB DDR5-6000 CL30",
            subtitle: "Kit DDR5 hiệu năng tốt",
            color: "emerald",
            points: [
                "32GB total capacity",
                "2 x 16GB",
                "DDR5-6000",
                "Timing CL30-38-38-96",
                "Điện áp 1.35V",
                "DDR5 U-DIMM 288-pin",
                "AMD EXPO",
            ],
            lesson: "32GB DDR5-6000 CL30 là cấu hình rất hấp dẫn cho PC DDR5 gaming/làm việc hiện đại nếu giá hợp lý.",
        },
        {
            icon: <MemoryStick />,
            title: "G.SKILL Flare X5 32GB DDR5-6000 CL36",
            subtitle: "Biến thể CL36",
            color: "purple",
            points: [
                "32GB",
                "2 x 16GB",
                "DDR5-6000",
                "CAS Latency CL36",
                "Timing 36-36-36-96",
                "Điện áp 1.35V",
                "AMD EXPO",
            ],
            lesson: "Cùng tốc độ 6000 MT/s, CL30 có độ trễ tốt hơn CL36; nhưng giá và độ sẵn hàng cũng cần xét.",
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

function BuyingLab() {
    const scenarios = {
        missing: {
            icon: <Database />,
            title: "Máy 8GB thường xuyên đầy RAM",
            answer: "Ưu tiên nâng dung lượng lên 16GB hoặc 32GB. Nâng dung lượng thường đáng hơn đổi sang RAM cùng dung lượng nhưng tốc độ cao hơn.",
            color: "emerald",
        },
        igpu: {
            icon: <Monitor />,
            title: "Dùng iGPU",
            answer: "RAM nhanh và chạy Dual Channel rất quan trọng vì iGPU dùng chung RAM hệ thống làm bộ nhớ đồ họa.",
            color: "cyan",
        },
        ddr5: {
            icon: <Gauge />,
            title: "Build PC DDR5 mới",
            answer: "Xem cả tốc độ và CL. DDR5-6000 CL30 thường hấp dẫn hơn DDR5-6000 CL40 nếu giá không chênh quá nhiều.",
            color: "amber",
        },
        mixed: {
            icon: <Puzzle />,
            title: "Muốn trộn RAM khác kit",
            answer: "Có thể chạy nhưng không đảm bảo ổn định. Hệ thống có thể kéo về tốc độ thấp hơn hoặc lỗi nếu không tương thích tốt.",
            color: "orange",
        },
        check: {
            icon: <Settings />,
            title: "RAM chạy thấp hơn quảng cáo",
            answer: "Kiểm tra Task Manager, CPU-Z hoặc BIOS. Có thể chưa bật XMP/EXPO, hoặc CPU/mainboard không ổn định ở tốc độ đó.",
            color: "purple",
        },
    };
    const [active, setActive] = useState("ddr5");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: chọn RAM theo tình huống"
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
            wrong: "Chỉ cần RAM nhiều là máy nhanh",
            right: "RAM nhiều chỉ giúp rõ khi bạn đang thiếu RAM. Nếu tác vụ chỉ dùng 10GB, nâng từ 32GB lên 64GB gần như không nhanh hơn.",
        },
        {
            wrong: "CL càng thấp thì RAM chắc chắn càng nhanh",
            right: "CL phải xét cùng tốc độ MT/s. DDR4-3200 CL16 và DDR5-6000 CL30 đều xấp xỉ 10ns.",
        },
        {
            wrong: "Mua RAM 6000 là máy chắc chắn chạy 6000",
            right: "Còn phụ thuộc CPU, mainboard, BIOS và XMP/EXPO.",
        },
        {
            wrong: "Trộn RAM khác hãng, khác tốc độ vẫn luôn ổn",
            right: "Có thể chạy, nhưng không đảm bảo ổn định; hệ thống có thể kéo về tốc độ thấp hơn.",
        },
    ];
    const tips = [
        "Ưu tiên dung lượng trước tốc độ nếu máy đang thiếu RAM.",
        "PC phổ thông hiện nay dễ chọn nhất là 16GB hoặc 32GB.",
        "DDR5 nên xem cả tốc độ và CL; DDR5-6000 CL30 thường hấp dẫn hơn CL40 nếu giá hợp lý.",
        "Sau khi lắp RAM, kiểm tra tốc độ thực tế bằng Task Manager, CPU-Z hoặc BIOS.",
        "Luôn kiểm tra mainboard/laptop hỗ trợ tối đa bao nhiêu GB và tốc độ nào.",
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
                        <span className="bg-amber-500/20 text-amber-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-amber-300 border border-slate-800 shadow-inner space-y-2">
                            <p>RAM SPECS = Dung lượng + Tốc độ + Độ trễ</p>
                            <br />
                            <p className="text-slate-500"># Ví dụ</p>
                            <p className="text-slate-300">
                                16GB DDR4-3200 CL16
                            </p>
                            <p className="text-slate-300">16GB = dung lượng</p>
                            <p className="text-slate-300">
                                3200 = khoảng 3200 MT/s
                            </p>
                            <p className="text-slate-300">CL16 = CAS Latency</p>
                            <br />
                            <p className="text-slate-500"># Công thức độ trễ</p>
                            <p className="text-slate-300">
                                ns ≈ CL × 2000 / MT/s
                            </p>
                            <br />
                            <p className="text-red-300">
                                CL thấp hơn không luôn nhanh hơn nếu không xét
                                tốc độ.
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
        question: "Trong thông số 16GB DDR4-3200 CL16, số 16GB nghĩa là gì?",
        options: ["Tốc độ RAM", "Độ trễ RAM", "Dung lượng RAM", "Điện áp RAM"],
        correct: 2,
        explanation:
            "16GB là dung lượng RAM, tức lượng dữ liệu tạm thời mà RAM có thể chứa cho chương trình đang chạy.",
    },
    {
        question: "Trong thông số DDR5-6000, số 6000 thường chỉ điều gì?",
        options: [
            "Dung lượng 6000GB",
            "Tốc độ truyền dữ liệu khoảng 6000 MT/s",
            "Độ trễ 6000 chu kỳ",
            "Điện áp 6000V",
        ],
        correct: 1,
        explanation:
            "DDR5-6000 nghĩa là RAM DDR5 có tốc độ truyền dữ liệu khoảng 6000 MT/s.",
    },
    {
        question: "Nhận định nào đúng nhất về CL?",
        options: [
            "CL càng thấp luôn luôn nhanh hơn, không cần xét gì khác",
            "CL là dung lượng RAM",
            "CL là độ trễ tính theo chu kỳ, cần xét cùng tốc độ RAM",
            "CL chỉ dùng cho SSD",
        ],
        correct: 2,
        explanation:
            "CL là số chu kỳ RAM chờ trước khi phản hồi. Muốn so chính xác cần xét cùng tốc độ MT/s.",
    },
    {
        question: "Vì sao RAM DDR5-6000 có thể đang chạy 4800 sau khi lắp?",
        options: [
            "Có thể chưa bật XMP/EXPO hoặc nền tảng chưa hỗ trợ ổn định",
            "Vì RAM bị biến thành SSD",
            "Vì màn hình chưa đủ sáng",
            "Vì RAM không cần BIOS",
        ],
        correct: 0,
        explanation:
            "RAM tốc độ cao thường cần bật XMP/EXPO trong BIOS, đồng thời CPU/mainboard phải hỗ trợ ổn định.",
    },
    {
        question:
            "Máy 8GB thường xuyên đầy RAM thì nâng cấp nào thường hợp lý nhất?",
        options: [
            "Nâng lên 16GB hoặc 32GB",
            "Đổi hình nền",
            "Mua RAM 8GB tốc độ cao hơn nhưng vẫn 8GB",
            "Tắt màn hình",
        ],
        correct: 0,
        explanation:
            "Khi đang thiếu RAM, tăng dung lượng thường cải thiện rõ hơn đổi sang RAM cùng dung lượng nhưng tốc độ cao hơn.",
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
                    <strong className="text-amber-400">
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
                <span className="text-amber-400">
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
                        className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu dung lượng, tốc độ và CL. Tiếp theo là Dual Channel
                / Quad Channel, vì cùng 16GB RAM nhưng 1 x 16GB và 2 x 8GB có
                thể cho hiệu năng khác nhau rõ rệt.
            </p>
            <Link
                to="/phan-3-5"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-amber-500/20"
            >
                Bài tiếp theo: 3.5 — Dual Channel / Quad Channel RAM{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "amber" }) {
    const colorMap = {
        amber: "bg-amber-500/20 text-amber-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
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

function SpecChip({ label, value, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-3`}>
            <p className={`${textColor(color)} font-bold`}>{label}</p>
            <p className="text-slate-400 text-xs mt-1">{value}</p>
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

function FlowNote({ title, desc, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-5`}>
            <h4 className={`${textColor(color)} font-bold mb-2`}>{title}</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{desc}</p>
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
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.amber;
}

function softBorder(color) {
    const map = {
        amber: "bg-amber-500/5 border-amber-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.amber;
}

function textColor(color) {
    const map = {
        amber: "text-amber-300",
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        orange: "text-orange-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-amber-300";
}
