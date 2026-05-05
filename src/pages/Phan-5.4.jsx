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
    Video,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-orange-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-400/30 flex items-center justify-center shadow-lg shadow-orange-500/10">
                            <Gauge className="text-orange-400" size={24} />
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
                    <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                        Bài 5.4
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <DeskEngineAnalogy />
                <GpuWorkloadSimulator />
                <VramCapacityGuide />
                <PowerClassGuide />
                <ClockSpeedGuide />
                <SpecsExplorer />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-orange-300">
                        <BookOpen size={16} /> Phần 5: GPU — Bộ xử lý đồ họa
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Thông số GPU
                        <span className="block text-orange-400">
                            VRAM, TDP, Clock Speed
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Hai card cùng 8GB VRAM vẫn có thể khác giá và khác hiệu
                        năng rất xa. Bài này giúp bạn đọc đúng VRAM, TDP/TBP,
                        clock speed, bus width và bandwidth trước khi mua GPU.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<Database size={16} />}
                            text="VRAM Capacity"
                        />
                        <Tag
                            icon={<Thermometer size={16} />}
                            text="TDP / TBP"
                        />
                        <Tag
                            icon={<Gauge size={16} />}
                            text="Base / Boost Clock"
                        />
                        <Tag icon={<Workflow size={16} />} text="Bus Width" />
                        <Tag icon={<Zap size={16} />} text="Bandwidth" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Database />}
                            label="VRAM"
                            desc="Bàn làm việc của GPU"
                            color="cyan"
                            highlight
                        />
                        <HeroTile
                            icon={<Thermometer />}
                            label="TDP/TBP"
                            desc="Điện, nhiệt, tản"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Gauge />}
                            label="Clock"
                            desc="Nhịp làm việc"
                            color="violet"
                        />
                        <HeroTile
                            icon={<Zap />}
                            label="Bandwidth"
                            desc="Dữ liệu mỗi giây"
                            color="emerald"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">
                            // Đừng kết luận bằng một số
                        </p>
                        <p className="text-red-300">
                            GPU 12GB chưa chắc mạnh hơn GPU 8GB
                        </p>
                        <p>Kiến trúc + nhân + VRAM + bus + watt + benchmark</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu VRAM là gì và vì sao VRAM nhiều không đồng nghĩa GPU chắc chắn mạnh hơn.",
        "Hiểu TDP/TBP ảnh hưởng đến nguồn PSU, nhiệt độ, độ ồn, case và laptop như thế nào.",
        "Phân biệt Base Clock, Boost Clock và Memory Clock.",
        "Biết đọc VRAM Capacity, VRAM Type, Bus Width và Bandwidth theo cụm.",
        "Áp dụng thông số vào nhu cầu thực tế: 1080p, 1440p, 4K, render, AI và laptop gaming.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="orange"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-orange-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-300 flex items-center justify-center font-bold mb-4">
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
    const cards = [
        {
            icon: <Database />,
            title: "VRAM",
            subtitle: "Video RAM — bộ nhớ đồ họa riêng",
            desc: "Chứa texture, model, frame buffer, dữ liệu render, video và một số dữ liệu AI.",
            easy: "VRAM = cái bàn làm việc riêng của GPU.",
            color: "cyan",
        },
        {
            icon: <Thermometer />,
            title: "TDP / TBP",
            subtitle: "Công suất và nhiệt lượng",
            desc: "TDP liên quan mức nhiệt/công suất tản nhiệt cần xử lý; TBP là công suất toàn bộ card đồ họa.",
            easy: "TDP/TBP = GPU ăn điện và tỏa nhiệt ra sao.",
            color: "orange",
        },
        {
            icon: <Gauge />,
            title: "Clock Speed",
            subtitle: "Xung nhịp GPU",
            desc: "Tốc độ hoạt động của GPU, thường tính bằng MHz hoặc GHz, gồm base clock, boost clock và memory clock.",
            easy: "Clock Speed = nhịp làm việc của GPU.",
            color: "violet",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: 3 thông số chính"
                icon={<Brain />}
            />
            <div className="grid lg:grid-cols-3 gap-4">
                {cards.map((c) => (
                    <div
                        key={c.title}
                        className={`${softBorder(c.color)} border rounded-3xl p-6`}
                    >
                        <div
                            className={`w-14 h-14 rounded-2xl ${badgeColor(c.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(c.icon, { size: 28 })}
                        </div>
                        <h3 className="text-2xl font-black text-white mb-1">
                            {c.title}
                        </h3>
                        <p
                            className={`${textColor(c.color)} text-sm font-bold mb-4`}
                        >
                            {c.subtitle}
                        </p>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            {c.desc}
                        </p>
                        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300">
                            <strong className={textColor(c.color)}>
                                Dễ hiểu:
                            </strong>{" "}
                            {c.easy}
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-red-300">Câu quan trọng:</strong> VRAM
                nhiều, clock cao hoặc watt lớn đều không tự động nghĩa là GPU
                mạnh hơn. Phải đọc thông số theo cụm và xem benchmark thực tế.
            </div>
        </section>
    );
}

function DeskEngineAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: bàn làm việc, động cơ và nhiệt"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-5 gap-4">
                <AnalogyCard
                    icon={<Database />}
                    title="VRAM = bàn làm việc"
                    desc="Bàn rộng chứa được nhiều texture, model và dữ liệu cùng lúc, nhưng người làm việc vẫn phải đủ nhanh."
                    color="cyan"
                />
                <AnalogyCard
                    icon={<Sparkles />}
                    title="GPU cores = người làm"
                    desc="Nhân xử lý thực hiện phép tính đồ họa, ánh sáng, hiệu ứng, shader."
                    color="violet"
                />
                <AnalogyCard
                    icon={<Gauge />}
                    title="Clock = nhịp làm"
                    desc="Nhịp cao giúp làm nhanh hơn trong cùng kiến trúc, nếu đủ điện và đủ mát."
                    color="purple"
                />
                <AnalogyCard
                    icon={<Thermometer />}
                    title="TDP/TBP = nhiệt/điện"
                    desc="GPU mạnh hơn thường cần nhiều điện, tản tốt, case thoáng và PSU ổn định."
                    color="orange"
                />
                <AnalogyCard
                    icon={<Workflow />}
                    title="Bus/Bandwidth = đường vận chuyển"
                    desc="Kho VRAM lớn nhưng đường vào hẹp vẫn có thể nghẽn dữ liệu."
                    color="emerald"
                />
            </div>
        </section>
    );
}

function GpuWorkloadSimulator() {
    const steps = [
        {
            icon: <Cpu />,
            title: "CPU gửi lệnh cho GPU",
            desc: "Game hoặc phần mềm render gửi yêu cầu vẽ hình, tính hiệu ứng, xuất frame.",
        },
        {
            icon: <Database />,
            title: "GPU lấy dữ liệu từ VRAM",
            desc: "Texture, model, frame buffer, dữ liệu video hoặc AI được nạp từ VRAM.",
        },
        {
            icon: <Workflow />,
            title: "Bus và bandwidth vận chuyển dữ liệu",
            desc: "Bus width và tốc độ VRAM quyết định lượng dữ liệu có thể đi qua mỗi giây.",
        },
        {
            icon: <Sparkles />,
            title: "Nhân GPU xử lý hình ảnh",
            desc: "Shader cores tính ánh sáng, bóng đổ, màu sắc, hiệu ứng, geometry hoặc phép toán AI.",
        },
        {
            icon: <Gauge />,
            title: "Clock Speed quyết định nhịp xử lý",
            desc: "GPU boost cao hơn nếu còn đủ điện, đủ mát và chưa chạm giới hạn công suất.",
        },
        {
            icon: <Thermometer />,
            title: "TDP/TBP ảnh hưởng nhiệt và điện",
            desc: "GPU nóng quá có thể giảm xung, gọi là thermal throttling.",
        },
        {
            icon: <Monitor />,
            title: "GPU xuất khung hình",
            desc: "Frame hoàn chỉnh được xuất ra màn hình hoặc file render/video.",
        },
    ];
    const [active, setActive] = useState(0);
    const step = steps[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Các thông số ảnh hưởng hiệu năng thế nào?"
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
                <div className="mt-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-orange-300">
                        Khi tăng từ 1080p lên 1440p/4K:
                    </strong>{" "}
                    số điểm ảnh tăng, texture nặng hơn, cần nhiều VRAM hơn, GPU
                    tải nặng hơn, điện và nhiệt có thể tăng.
                </div>
            </div>
        </section>
    );
}

function VramCapacityGuide() {
    const rows = [
        [
            "2GB – 4GB",
            "Văn phòng, xem phim, game rất nhẹ",
            "Không phù hợp game mới, render, AI",
            "red",
        ],
        [
            "6GB",
            "Game eSports, một số game 1080p nhẹ/trung bình",
            "Có thể thiếu trong game AAA mới",
            "orange",
        ],
        [
            "8GB",
            "Gaming 1080p phổ thông",
            "Có thể đuối ở 1440p/texture cao",
            "cyan",
        ],
        [
            "10GB – 12GB",
            "Gaming 1440p, dựng video, đồ họa khá",
            "Chưa lý tưởng cho AI/render rất nặng",
            "emerald",
        ],
        [
            "16GB trở lên",
            "4K, render 3D, AI local, workload chuyên nghiệp",
            "Giá cao, cần GPU đủ mạnh đi kèm",
            "purple",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="cyan"
                title="Phân loại VRAM theo dung lượng"
                icon={<Database />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[820px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Dung lượng VRAM</th>
                            <th className="p-4">Phù hợp với</th>
                            <th className="p-4">Hạn chế</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([cap, fit, limit, color]) => (
                            <tr key={cap} className="border-t border-slate-800">
                                <td
                                    className={`p-4 font-extrabold ${textColor(color)}`}
                                >
                                    {cap}
                                </td>
                                <td className="p-4 text-slate-300">{fit}</td>
                                <td className="p-4 text-slate-300">{limit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-cyan-300">Ghi nhớ:</strong> VRAM giúp
                chứa dữ liệu nhiều hơn, nhưng không thay thế được chip GPU mạnh,
                bus/bandwidth tốt và kiến trúc hiện đại.
            </div>
        </section>
    );
}

function PowerClassGuide() {
    const rows = [
        [
            "Dưới 75W",
            "Rất tiết kiệm điện, nhiều card không cần nguồn phụ",
            "PC nhỏ, nâng cấp máy văn phòng",
            "cyan",
        ],
        [
            "75W – 150W",
            "Tầm phổ thông, dễ dùng",
            "Gaming 1080p, máy tiết kiệm điện",
            "emerald",
        ],
        [
            "150W – 250W",
            "Tầm trung đến cận cao cấp",
            "Gaming 1440p, render bán chuyên",
            "orange",
        ],
        [
            "250W – 350W+",
            "Mạnh, nóng, cần PSU tốt",
            "4K gaming, render nặng, AI",
            "red",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="orange"
                title="Phân loại công suất GPU"
                icon={<Thermometer />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[820px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Mức công suất</th>
                            <th className="p-4">Đặc điểm</th>
                            <th className="p-4">Phù hợp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([watt, feature, fit, color]) => (
                            <tr
                                key={watt}
                                className="border-t border-slate-800"
                            >
                                <td
                                    className={`p-4 font-extrabold ${textColor(color)}`}
                                >
                                    {watt}
                                </td>
                                <td className="p-4 text-slate-300">
                                    {feature}
                                </td>
                                <td className="p-4 text-slate-300">{fit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
                <RuleCard
                    label="PSU"
                    value="Nguồn phải đủ công suất, đủ đầu PCIe và chất lượng ổn định."
                    color="orange"
                />
                <RuleCard
                    label="Case"
                    value="Card mạnh cần case thoáng, đủ chiều dài và đủ luồng gió."
                    color="red"
                />
                <RuleCard
                    label="Laptop"
                    value="Cùng tên GPU nhưng TGP khác nhau có thể khác hiệu năng rõ."
                    color="purple"
                />
                <RuleCard
                    label="Tiếng ồn"
                    value="Card nóng hơn thường cần quạt chạy nhanh hơn, dễ ồn hơn."
                    color="cyan"
                />
            </div>
        </section>
    );
}

function ClockSpeedGuide() {
    const clocks = [
        {
            icon: <Gauge />,
            title: "Base Clock",
            desc: "Xung cơ bản GPU có thể chạy trong điều kiện bình thường.",
            color: "cyan",
        },
        {
            icon: <Zap />,
            title: "Boost Clock",
            desc: "Xung tăng tốc khi GPU cần hiệu năng cao và còn đủ điện/nhiệt.",
            color: "emerald",
        },
        {
            icon: <Database />,
            title: "Memory Clock",
            desc: "Tốc độ bộ nhớ VRAM, ảnh hưởng đến băng thông dữ liệu.",
            color: "orange",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="violet"
                title="Base Clock, Boost Clock, Memory Clock"
                icon={<Gauge />}
            />
            <div className="grid md:grid-cols-3 gap-4">
                {clocks.map((c) => (
                    <AnalogyCard key={c.title} {...c} />
                ))}
            </div>
            <div className="bg-violet-500/10 border border-violet-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-violet-300">Thermal throttling:</strong>{" "}
                GPU quảng cáo boost cao nhưng tản nhiệt kém hoặc quá nóng có thể
                giảm xung, khiến hiệu năng thực tế thấp hơn kỳ vọng.
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        capacity: {
            icon: <Database />,
            title: "VRAM Capacity",
            detail: "Dung lượng bộ nhớ đồ họa như 8GB, 12GB, 16GB.",
            impact: "Quan trọng với texture, độ phân giải cao, render 3D, dựng video, AI local. Nhưng không quyết định toàn bộ hiệu năng.",
        },
        type: {
            icon: <HardDrive />,
            title: "VRAM Type",
            detail: "Các loại thường gặp: GDDR5, GDDR6, GDDR6X, GDDR7.",
            impact: "Không chỉ dung lượng, loại VRAM và tốc độ VRAM cũng ảnh hưởng băng thông và hiệu năng.",
        },
        power: {
            icon: <Thermometer />,
            title: "TDP / TBP",
            detail: "Ảnh hưởng đến PSU, nhiệt độ, độ ồn quạt và khả năng lắp trong case/laptop.",
            impact: "GPU 300W cần nguồn tốt và case thoáng hơn nhiều so với GPU 115W.",
        },
        baseBoost: {
            icon: <Gauge />,
            title: "Base / Boost Clock",
            detail: "Base là xung cơ bản; boost là xung tăng tốc khi đủ điện và đủ mát.",
            impact: "Clock cao chỉ so sánh tốt khi cùng kiến trúc hoặc rất gần thế hệ.",
        },
        bus: {
            icon: <Workflow />,
            title: "Bus Width",
            detail: "Đường vào kho VRAM rộng bao nhiêu, thường tính bằng bit.",
            impact: "Bus hẹp + bandwidth thấp có thể nghẽn khi xử lý 1440p/4K hoặc texture nặng.",
        },
        bandwidth: {
            icon: <Zap />,
            title: "Bandwidth",
            detail: "Mỗi giây GPU chuyển được bao nhiêu dữ liệu giữa GPU và VRAM.",
            impact: "Một GPU có VRAM lớn nhưng bandwidth thấp vẫn có thể bị nghẽn trong workload nặng.",
        },
    };
    const [active, setActive] = useState("capacity");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="yellow"
                title="Thông số kỹ thuật cần đọc theo cụm"
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

function RealExamples() {
    const examples = [
        {
            icon: <Gamepad2 />,
            title: "NVIDIA GeForce RTX 4060",
            subtitle: "8GB VRAM, 115W, boost khoảng 2.46GHz",
            color: "cyan",
            points: [
                "8GB GDDR6",
                "Bus 128-bit",
                "3072 CUDA cores",
                "Graphics Card Power khoảng 115W",
                "Hợp gaming 1080p, eSports, PC tiết kiệm điện",
            ],
            lesson: "8GB đủ cho nhiều game 1080p, nhưng không nên xem RTX 4060 là lựa chọn lý tưởng cho 4K gaming nặng.",
        },
        {
            icon: <Sparkles />,
            title: "AMD Radeon RX 7600",
            subtitle: "8GB VRAM, TBP 165W, boost tối đa khoảng 2.66GHz",
            color: "orange",
            points: [
                "8GB GDDR6",
                "32 compute units",
                "Bus 128-bit",
                "Infinity Cache 32MB",
                "Hướng đến gaming 1080p phổ thông",
            ],
            lesson: "Cùng 8GB như RTX 4060 nhưng khác kiến trúc, điện năng, driver và công nghệ hỗ trợ — không thể kết luận chỉ bằng VRAM.",
        },
        {
            icon: <Film />,
            title: "NVIDIA GeForce RTX 4070",
            subtitle: "12GB VRAM, phân khúc 1440p",
            color: "emerald",
            points: [
                "12GB GDDR6X",
                "Phân khúc cao hơn RTX 4060",
                "Hướng đến gaming 1440p",
                "Hợp dựng video bán chuyên/render vừa",
                "Cần xem phiên bản cụ thể của từng hãng",
            ],
            lesson: "12GB VRAM thoải mái hơn 8GB ở texture cao/1440p, nhưng vẫn cần đọc cả kiến trúc, bus, bandwidth, watt và benchmark.",
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

function PickerLab() {
    const scenarios = {
        p1080: {
            icon: <Gamepad2 />,
            title: "Gaming 1080p",
            answer: "Nếu mua GPU mới, nên chọn tối thiểu 8GB VRAM nếu ngân sách cho phép. Vẫn cần xem benchmark game bạn chơi, không chỉ nhìn 8GB.",
            color: "cyan",
        },
        p1440: {
            icon: <Monitor />,
            title: "Gaming 1440p",
            answer: "Nên ưu tiên 12GB VRAM trở lên để an toàn hơn với game mới, texture cao và độ phân giải 1440p.",
            color: "emerald",
        },
        p4k: {
            icon: <Film />,
            title: "4K / texture nặng",
            answer: "Cần VRAM lớn, bus/bandwidth tốt, GPU đủ mạnh và tản/nhiệt phù hợp. Không chọn chỉ dựa trên dung lượng VRAM.",
            color: "purple",
        },
        creator: {
            icon: <Video />,
            title: "Dựng video / 3D / AI",
            answer: "Ưu tiên VRAM nhiều hơn vì thiếu VRAM có thể làm phần mềm chậm, lỗi hoặc không chạy được tác vụ lớn.",
            color: "orange",
        },
        laptop: {
            icon: <Thermometer />,
            title: "Laptop gaming",
            answer: "Cùng tên GPU nhưng TGP khác nhau có thể hiệu năng khác rõ. Xem TGP, tản nhiệt, độ dày máy và benchmark thực tế.",
            color: "red",
        },
    };
    const [active, setActive] = useState("p1080");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: chọn thông số theo nhu cầu"
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
            wrong: "GPU càng nhiều GB càng mạnh",
            right: "VRAM chỉ là một phần. Cần xem kiến trúc GPU, số nhân, clock, VRAM type, bus width, bandwidth, TDP/TBP và benchmark.",
        },
        {
            wrong: "TDP thấp nghĩa là GPU yếu",
            right: "TDP thấp có thể do kiến trúc tiết kiệm điện hơn. Hãy xem hiệu năng trên mỗi watt, không chỉ số watt.",
        },
        {
            wrong: "Clock cao hơn là chắc chắn mạnh hơn",
            right: "Clock chỉ so sánh tốt khi cùng kiến trúc hoặc rất gần thế hệ. Kiến trúc và số nhân cũng rất quan trọng.",
        },
        {
            wrong: "Nguồn máy tính chỉ cần đủ watt tổng",
            right: "PSU cần đủ công suất, chất lượng, đường 12V, đầu PCIe 6/8-pin hoặc 12VHPWR và độ ổn định.",
        },
        {
            wrong: "Card nào cùng 8GB là ngang nhau",
            right: "RTX 4060 8GB và RX 7600 8GB vẫn khác kiến trúc, TBP, driver, công nghệ và hiệu năng thực tế.",
        },
    ];
    const tips = [
        "1080p: nên chọn tối thiểu 8GB VRAM nếu mua GPU mới.",
        "1440p: ưu tiên 12GB VRAM trở lên nếu ngân sách cho phép.",
        "Video/3D/AI: VRAM nhiều rất quan trọng vì thiếu VRAM có thể lỗi hoặc không chạy được workload.",
        "Xem TDP/TBP để kiểm tra PSU, case, nhiệt độ và độ ồn.",
        "Đừng chỉ nhìn clock; xem benchmark trong đúng game/phần mềm bạn dùng.",
        "Laptop gaming: xem TGP, tản nhiệt và benchmark, không chỉ tên GPU.",
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
                        <span className="bg-orange-500/20 text-orange-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-orange-300 border border-slate-800 shadow-inner space-y-2">
                            <p>VRAM = bộ nhớ đồ họa riêng của GPU</p>
                            <p>TDP/TBP = điện, nhiệt, PSU, case, tản nhiệt</p>
                            <p>Clock Speed = nhịp làm việc của GPU</p>
                            <br />
                            <p className="text-slate-500"># Đọc đúng</p>
                            <p className="text-slate-300">
                                VRAM Capacity + VRAM Type + Bus Width +
                                Bandwidth
                            </p>
                            <p className="text-slate-300">
                                Base/Boost Clock + TDP/TBP + kiến trúc +
                                benchmark
                            </p>
                            <br />
                            <p className="text-red-300">
                                Nhiều GB hơn không tự động mạnh hơn.
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
        question: "VRAM trong GPU dùng để làm gì?",
        options: [
            "Cấp điện cho card màn hình",
            "Lưu dữ liệu đồ họa như texture, model, khung hình",
            "Làm mát GPU",
            "Kết nối mạng Internet",
        ],
        correct: 1,
        explanation:
            "VRAM là bộ nhớ đồ họa riêng của GPU, chứa texture, model, frame buffer, dữ liệu render, video và một số dữ liệu AI.",
    },
    {
        question: "TDP/TBP của GPU liên quan nhiều nhất đến yếu tố nào?",
        options: [
            "Công suất tiêu thụ, nhiệt độ và yêu cầu tản nhiệt",
            "Số cổng USB trên máy",
            "Dung lượng ổ cứng",
            "Tốc độ mạng WiFi",
        ],
        correct: 0,
        explanation:
            "TDP/TBP ảnh hưởng đến điện, nhiệt, nguồn PSU, case, tản nhiệt và độ ồn quạt.",
    },
    {
        question:
            "Một GPU có clock speed cao hơn thì có chắc chắn mạnh hơn GPU khác không?",
        options: [
            "Có, luôn luôn mạnh hơn",
            "Không, còn phụ thuộc kiến trúc, số nhân, VRAM, bandwidth và nhiều yếu tố khác",
            "Có, nếu card có nhiều đèn RGB",
            "Không liên quan gì đến hiệu năng trong mọi trường hợp",
        ],
        correct: 1,
        explanation:
            "Clock chỉ là một thông số. Hiệu năng còn phụ thuộc kiến trúc, nhân xử lý, VRAM, bus, bandwidth, điện, nhiệt và driver.",
    },
    {
        question: "Với game 1440p hiện nay, lựa chọn nào thường an toàn hơn?",
        options: [
            "GPU 2GB VRAM",
            "GPU 4GB VRAM",
            "GPU 12GB VRAM trở lên, tùy game và thiết lập",
            "Không cần GPU",
        ],
        correct: 2,
        explanation:
            "Game 1440p và texture cao thường cần nhiều VRAM hơn 1080p; 12GB trở lên thường an toàn hơn nếu ngân sách cho phép.",
    },
    {
        question: "Vì sao không nên chọn GPU chỉ bằng số GB VRAM?",
        options: [
            "Vì VRAM không liên quan gì đến GPU",
            "Vì cần xem thêm kiến trúc, bus, bandwidth, clock, TDP và benchmark",
            "Vì VRAM chỉ dùng cho âm thanh",
            "Vì VRAM là ổ cứng",
        ],
        correct: 1,
        explanation:
            "VRAM quan trọng nhưng chỉ là một phần. Phải đọc cả kiến trúc, bus width, bandwidth, clock, TDP/TBP và benchmark thực tế.",
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
                    <strong className="text-orange-400">
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
                <span className="text-orange-400">
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
                        className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu VRAM, TDP/TBP và Clock Speed. Tiếp theo là các hãng
                GPU: NVIDIA, AMD, Intel Arc — phần giúp bạn biết mỗi hãng mạnh ở
                điểm nào cho gaming, render, AI hoặc máy phổ thông.
            </p>
            <Link
                to="/phan-5-5"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20"
            >
                Bài tiếp theo: 5.5 — Các hãng GPU: NVIDIA, AMD, Intel Arc{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "orange" }) {
    const colorMap = {
        orange: "bg-orange-500/20 text-orange-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
        blue: "bg-blue-500/20 text-blue-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        pink: "bg-pink-500/20 text-pink-300",
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
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
        violet: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
    };
    return map[color] || map.orange;
}
function softBorder(color) {
    const map = {
        orange: "bg-orange-500/5 border-orange-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
        violet: "bg-violet-500/5 border-violet-500/20",
    };
    return map[color] || map.orange;
}
function textColor(color) {
    const map = {
        orange: "text-orange-300",
        cyan: "text-cyan-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
        violet: "text-violet-300",
    };
    return map[color] || "text-orange-300";
}
