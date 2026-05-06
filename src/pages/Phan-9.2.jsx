import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    Cpu,
    Fan,
    Gauge,
    Layers3,
    Lightbulb,
    Monitor,
    PackageCheck,
    PlugZap,
    Puzzle,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    Thermometer,
    Wind,
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
                            <Fan className="text-blue-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 9: Tản nhiệt máy tính
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-blue-300 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                        Bài 9.2
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <MetalFanAnalogy />
                <AirCoolingFlowSimulator />
                <CoolerTypeExplorer />
                <ComparisonTable />
                <SpecsExplorer />
                <CompatibilityGuide />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-blue-300">
                        <BookOpen size={16} /> Phần 9: Air Cooling
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Tản nhiệt khí
                        <span className="block text-blue-400">cho CPU</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Tản nhiệt khí là loại tản CPU phổ biến nhất vì bền, dễ
                        lắp, giá hợp lý và ít rủi ro. Nó dùng kim loại dẫn nhiệt
                        kết hợp quạt để đưa nhiệt ra khỏi CPU.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="CPU Cooler" />
                        <Tag icon={<Layers3 size={16} />} text="Heatsink" />
                        <Tag icon={<Workflow size={16} />} text="Heatpipe" />
                        <Tag icon={<Fan size={16} />} text="Fan / RPM" />
                        <Tag
                            icon={<PackageCheck size={16} />}
                            text="RAM Clearance"
                        />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Cpu />}
                            label="CPU"
                            desc="Nguồn nhiệt"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Puzzle />}
                            label="Thermal Paste"
                            desc="Lấp khe hở"
                            color="yellow"
                        />
                        <HeroTile
                            icon={<Layers3 />}
                            label="Heatsink"
                            desc="Lá nhôm"
                            color="blue"
                            highlight
                        />
                        <HeroTile
                            icon={<Fan />}
                            label="Fan"
                            desc="Thổi nhiệt ra"
                            color="cyan"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Chuỗi air cooling</p>
                        <p>CPU → Keo → Đế đồng</p>
                        <p className="text-blue-300">
                            → Heatpipe → Lá tản → Quạt
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu tản nhiệt khí là hệ thống làm mát CPU bằng kim loại dẫn nhiệt và quạt.",
        "Nắm cấu tạo tản khí: đế tản, keo tản nhiệt, heatpipe, heatsink/fin stack và quạt.",
        "Phân biệt stock cooler, low-profile, single-tower, dual-tower và tản khí cao cấp.",
        "Biết đọc thông số quan trọng: socket, cooler height, số heatpipe, kích thước quạt, RPM, noise level, RAM clearance và TDP khuyến nghị.",
        "Tránh lỗi mua tản không vừa case, cấn RAM, chọn tản quá lớn không cần thiết hoặc bỏ qua airflow case.",
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
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center font-bold mb-4">
                            {i + 1}
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
            icon: <Cpu />,
            title: "Đế tản nhiệt",
            desc: "Phần tiếp xúc với CPU, thường bằng đồng hoặc nhôm để nhận nhiệt.",
            color: "orange",
        },
        {
            icon: <Puzzle />,
            title: "Keo tản nhiệt",
            desc: "Lớp trung gian giữa CPU và đế tản, giúp truyền nhiệt tốt hơn.",
            color: "yellow",
        },
        {
            icon: <Workflow />,
            title: "Heatpipe",
            desc: "Ống dẫn nhiệt từ đế CPU lên cụm lá nhôm.",
            color: "blue",
        },
        {
            icon: <Fan />,
            title: "Quạt",
            desc: "Thổi gió qua lá tản để đẩy nhiệt ra phía sau hoặc trên case.",
            color: "cyan",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="sky"
                title="Tản nhiệt khí là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Tản nhiệt khí</strong>, tiếng
                    Anh là{" "}
                    <strong className="text-blue-300">Air Cooling</strong>, là
                    hệ thống làm mát CPU bằng cách dùng kim loại dẫn nhiệt và
                    quạt để đưa nhiệt ra khỏi CPU. Tản khí không dùng nước,
                    không có bơm, nên thường đơn giản, bền và ít rủi ro hơn AIO.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <RoleCard key={c.title} {...c} />
                    ))}
                </div>
                <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    CPU nóng → Keo tản nhiệt → Đế đồng → Heatpipe → Lá nhôm →
                    Quạt thổi nhiệt ra ngoài
                </div>
            </div>
        </section>
    );
}

function MetalFanAnalogy() {
    const cards = [
        {
            icon: <Cpu />,
            title: "CPU = bếp nóng",
            desc: "CPU xử lý càng nặng thì nhiệt càng nhiều.",
            color: "orange",
        },
        {
            icon: <Layers3 />,
            title: "Kim loại = miếng hút nhiệt",
            desc: "Đế đồng, heatpipe và lá nhôm kéo nhiệt ra khỏi CPU.",
            color: "blue",
        },
        {
            icon: <Fan />,
            title: "Quạt = thổi hơi nóng",
            desc: "Quạt đẩy không khí qua lá tản để mang nhiệt đi.",
            color: "cyan",
        },
        {
            icon: <Wind />,
            title: "Case airflow = đường thoát",
            desc: "Khí nóng phải ra khỏi case, không được quay vòng bên trong.",
            color: "emerald",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: miếng kim loại hút nhiệt + quạt thổi"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-4 gap-4">
                {cards.map((c) => (
                    <AnalogyCard key={c.title} {...c} />
                ))}
            </div>
        </section>
    );
}

function AirCoolingFlowSimulator() {
    const flows = {
        normal: {
            title: "CPU → tản khí",
            color: "blue",
            steps: [
                {
                    icon: <Cpu />,
                    title: "CPU sinh nhiệt",
                    desc: "Điện chạy qua hàng tỷ transistor khi CPU xử lý game/phần mềm.",
                },
                {
                    icon: <Puzzle />,
                    title: "Keo truyền nhiệt",
                    desc: "Thermal paste lấp khe siêu nhỏ giữa CPU và đế tản.",
                },
                {
                    icon: <Layers3 />,
                    title: "Đế đồng/nhôm nhận nhiệt",
                    desc: "Đế tản hấp thụ nhiệt trực tiếp từ CPU.",
                },
                {
                    icon: <Workflow />,
                    title: "Heatpipe dẫn nhiệt",
                    desc: "Ống dẫn nhiệt kéo nhiệt lên cụm lá nhôm lớn hơn.",
                },
                {
                    icon: <Fan />,
                    title: "Quạt thổi qua lá nhôm",
                    desc: "Không khí mang nhiệt ra sau case hoặc lên trên case.",
                },
            ],
        },
        case: {
            title: "Tản khí + airflow case",
            color: "cyan",
            steps: [
                {
                    icon: <Wind />,
                    title: "Quạt trước hút gió mát",
                    desc: "Front intake đưa không khí mát vào case.",
                },
                {
                    icon: <Fan />,
                    title: "Gió qua CPU cooler",
                    desc: "Quạt CPU thổi qua fin stack để kéo nhiệt ra khỏi heatsink.",
                },
                {
                    icon: <Thermometer />,
                    title: "Khí nóng rời tản",
                    desc: "Không khí nóng cần đi tiếp ra khỏi case.",
                },
                {
                    icon: <PackageCheck />,
                    title: "Rear/top exhaust",
                    desc: "Quạt sau và quạt trên xả khí nóng ra ngoài.",
                },
            ],
        },
        bad: {
            title: "Case bí gió",
            color: "red",
            steps: [
                {
                    icon: <XCircle />,
                    title: "Tản CPU vẫn thổi",
                    desc: "Cooler hoạt động nhưng lấy lại không khí nóng trong case.",
                },
                {
                    icon: <Thermometer />,
                    title: "Nhiệt quanh socket tăng",
                    desc: "CPU, RAM, VRM và SSD quanh đó cũng nóng hơn.",
                },
                {
                    icon: <Fan />,
                    title: "Quạt quay nhanh hơn",
                    desc: "Hệ thống cố hạ nhiệt bằng RPM cao, gây ồn.",
                },
                {
                    icon: <AlertTriangle />,
                    title: "Hiệu năng có thể tụt",
                    desc: "CPU thermal throttling nếu nhiệt vượt ngưỡng.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("normal");
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
                title="Tản nhiệt khí làm mát CPU như thế nào?"
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
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[320px] flex flex-col justify-between">
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

function CoolerTypeExplorer() {
    const types = {
        stock: {
            icon: <PackageCheck />,
            title: "Stock Cooler",
            color: "cyan",
            desc: "Tản đi kèm một số CPU phổ thông.",
            good: ["Miễn phí kèm CPU", "Đủ dùng cho CPU nhẹ", "Dễ lắp"],
            bad: ["Ồn hơn", "Hiệu năng hạn chế", "Không hợp CPU nóng"],
            fit: "Văn phòng, học tập, CPU tiết kiệm điện",
        },
        low: {
            icon: <Monitor />,
            title: "Low-Profile",
            color: "emerald",
            desc: "Tản thấp dùng cho case nhỏ, Mini-ITX hoặc HTPC.",
            good: ["Gọn", "Vừa case thấp", "Không quá cao"],
            bad: ["Hiệu năng hạn chế hơn tản tháp", "Kén CPU nóng"],
            fit: "Mini-ITX, PC nhỏ gọn, CPU mát",
        },
        single: {
            icon: <Fan />,
            title: "Single Tower",
            color: "blue",
            desc: "Một tháp lá nhôm, thường có một quạt 120mm.",
            good: ["Giá tốt", "Dễ lắp", "Hiệu năng khá", "Bền"],
            bad: ["Không mạnh bằng dual-tower", "Vẫn cần kiểm tra chiều cao"],
            fit: "Core i3/i5, Ryzen 5, gaming phổ thông",
        },
        dual: {
            icon: <Layers3 />,
            title: "Dual-Tower",
            color: "purple",
            desc: "Hai cụm lá tản, thường dùng 2 quạt, hiệu năng cao.",
            good: [
                "Mạnh",
                "Bền",
                "Ít rủi ro hơn AIO",
                "Giá/hiệu năng tốt ở nhiều mẫu",
            ],
            bad: ["To", "Có thể cấn RAM/case", "Nặng"],
            fit: "Core i5/i7, Ryzen 7, tải nặng vừa phải",
        },
        premium: {
            icon: <Sparkles />,
            title: "Tản khí cao cấp",
            color: "orange",
            desc: "Tản lớn, quạt êm, hoàn thiện tốt, giá cao.",
            good: ["Êm", "Bền", "Hiệu năng cao", "Ít bảo trì"],
            bad: ["Đắt", "Rất lớn", "Cần case/RAM phù hợp"],
            fit: "CPU cao cấp, người ưu tiên độ êm, không muốn AIO",
        },
    };
    const [active, setActive] = useState("single");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Các loại tản nhiệt khí"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    {Object.entries(types).map(([key, t]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(t.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(t.icon, { size: 20 })}{" "}
                                {t.title}
                            </div>
                            <p className="text-xs opacity-75 mt-1">{t.desc}</p>
                        </button>
                    ))}
                </div>
                <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-3">
                            {item.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            {item.desc}
                        </p>
                        <p className="text-sm text-slate-400">
                            <strong className="text-white">Phù hợp:</strong>{" "}
                            {item.fit}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div
                            className={`${softBorder(item.color)} border rounded-3xl p-5`}
                        >
                            <p
                                className={`${textColor(item.color)} font-bold mb-3`}
                            >
                                Ưu điểm
                            </p>
                            <div className="space-y-2">
                                {item.good.map((g) => (
                                    <Bullet key={g} text={g} />
                                ))}
                            </div>
                        </div>
                        <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-5">
                            <p className="text-red-300 font-bold mb-3">
                                Nhược điểm
                            </p>
                            <div className="space-y-2">
                                {item.bad.map((b) => (
                                    <WarnBullet key={b} text={b} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ComparisonTable() {
    const rows = [
        [
            "Stock cooler",
            "Miễn phí, đủ dùng cho CPU nhẹ",
            "Ồn hơn, hiệu năng hạn chế",
            "Văn phòng, học tập",
        ],
        [
            "Low-profile",
            "Gọn, hợp case nhỏ",
            "Yếu hơn tản tháp lớn",
            "Mini-ITX, HTPC",
        ],
        [
            "Single Tower",
            "Giá tốt, dễ lắp, bền",
            "Không mạnh bằng dual-tower",
            "Gaming phổ thông",
        ],
        [
            "Dual-Tower",
            "Hiệu năng mạnh, giá/hiệu năng tốt",
            "To, nặng, có thể cấn RAM/case",
            "Ryzen 7, Core i5/i7",
        ],
        [
            "Tản khí cao cấp",
            "Êm, bền, hiệu năng cao",
            "Giá cao, rất lớn",
            "CPU cao cấp, người không muốn AIO",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="cyan"
                title="So sánh nhanh các loại tản khí"
                icon={<Layers3 />}
            />
            <DataTable
                title="Chọn loại tản khí theo nhu cầu"
                rows={rows}
                headers={["Loại", "Ưu điểm", "Nhược điểm", "Phù hợp"]}
                accent="cyan"
            />
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        socket: {
            icon: <Cpu />,
            title: "Socket hỗ trợ",
            detail: "Tản phải có ngàm lắp tương thích với socket CPU/mainboard như Intel LGA1700/LGA1851 hoặc AMD AM4/AM5.",
            impact: "Dùng Ryzen 5 7600 socket AM5 thì tản phải hỗ trợ AM5 hoặc có kit mounting phù hợp.",
        },
        height: {
            icon: <Gauge />,
            title: "Cooler Height",
            detail: "Chiều cao tản CPU phải nhỏ hơn giới hạn CPU cooler clearance của case.",
            impact: "Tản cao 165mm nhưng case hỗ trợ tối đa 160mm thì không đóng được nắp hông.",
        },
        heatpipe: {
            icon: <Workflow />,
            title: "Số heatpipe",
            detail: "2–4 heatpipe thường ở tản phổ thông; 4–6 tầm trung tốt; 6–8 ở tản cao cấp/dual-tower.",
            impact: "Không nên chỉ nhìn số heatpipe; quạt, đế tiếp xúc, lá tản và lực ép cũng rất quan trọng.",
        },
        fan: {
            icon: <Fan />,
            title: "Kích thước quạt",
            detail: "92mm cho tản nhỏ, 120mm phổ biến nhất, 140mm thường êm hơn ở cùng lượng gió nếu case đủ rộng.",
            impact: "Quạt lớn có thể đẩy nhiều gió hơn ở vòng quay thấp hơn, giảm tiếng ồn.",
        },
        rpm: {
            icon: <Settings />,
            title: "RPM",
            detail: "Số vòng quay mỗi phút: 800 RPM êm hơn nhưng ít gió, 2000 RPM mạnh hơn nhưng có thể ồn hơn.",
            impact: "Không phải RPM càng cao càng tốt; fan curve hợp lý quan trọng hơn.",
        },
        noise: {
            icon: <Monitor />,
            title: "Noise Level",
            detail: "Độ ồn thường đo bằng dB/dBA: dưới 25 dBA rất êm, 25–35 dBA bình thường, trên 35 dBA dễ nghe rõ.",
            impact: "Thông số dBA của hãng chỉ tham khảo vì cách đo khác nhau.",
        },
        ram: {
            icon: <PackageCheck />,
            title: "RAM Clearance",
            detail: "Tản lớn, nhất là dual-tower, có thể che khe RAM hoặc cấn RAM RGB cao.",
            impact: "RAM thấp dễ lắp hơn; RAM RGB cao cần xem review hoặc thông số clearance.",
        },
        tdp: {
            icon: <Thermometer />,
            title: "TDP khuyến nghị",
            detail: "Một số hãng ghi 150W/200W/250W, nhưng cách đo khác nhau nên không nên tin tuyệt đối.",
            impact: "CPU 65W dùng tản phổ thông; CPU 125W+ tải nặng nên dùng dual-tower hoặc AIO tốt.",
        },
    };
    const [active, setActive] = useState("height");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số kỹ thuật quan trọng"
                icon={<Puzzle />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
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

function CompatibilityGuide() {
    const cpuRows = [
        ["CPU 65W", "Stock cooler hoặc tower 120mm", "Văn phòng, gaming nhẹ"],
        ["CPU 105W", "Tản tower tốt", "Gaming tầm trung"],
        [
            "CPU 125W+ chạy tải nặng",
            "Dual-tower hoặc AIO tốt",
            "Render, compile, gaming nặng",
        ],
        [
            "Core i9 / Ryzen 9 render lâu",
            "Tản cao cấp + airflow case tốt",
            "Không nên chọn tản phổ thông quá yếu",
        ],
    ];
    const checkRows = [
        ["Socket", "Tản có hỗ trợ LGA1700/LGA1851/AM4/AM5 không?"],
        ["Cooler height", "Tản cao bao nhiêu mm? Case hỗ trợ bao nhiêu mm?"],
        ["RAM clearance", "RAM RGB cao có cấn quạt/tản không?"],
        ["Case airflow", "Case có quạt hút/xả hợp lý không?"],
        ["Khối lượng", "Tản nặng có cần lắp chắc và di chuyển cẩn thận không?"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="emerald"
                title="Chọn tản khí theo CPU và checklist tương thích"
                icon={<PackageCheck />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="Tản khí theo mức CPU"
                    rows={cpuRows}
                    headers={["CPU / tải", "Tản gợi ý", "Ghi chú"]}
                    accent="emerald"
                />
                <DataTable
                    title="4+ thứ phải kiểm tra trước khi mua"
                    rows={checkRows}
                    headers={["Mục", "Câu hỏi cần kiểm tra"]}
                    accent="blue"
                />
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Fan />,
            title: "Cooler Master Hyper 212 Halo",
            subtitle: "Single Tower 120mm phổ thông",
            color: "blue",
            points: [
                "Một tháp",
                "Quạt 120mm",
                "Tốc độ tối đa khoảng 2050 RPM theo mô tả bán lẻ",
                "Độ ồn khoảng 27 dB theo mô tả bán lẻ",
                "Hợp Core i3/i5, Ryzen 5 phổ thông",
            ],
            lesson: "Nếu stock cooler hơi ồn/nóng, tản tower 120mm như Hyper 212 hoặc tương đương là nâng cấp hợp lý.",
        },
        {
            icon: <Layers3 />,
            title: "Thermalright Peerless Assassin 120 SE",
            subtitle: "Dual-tower hiệu năng/giá tốt",
            color: "cyan",
            points: [
                "Dual-tower",
                "2 quạt 120mm",
                "6 heatpipe",
                "Giá quốc tế thường rất cạnh tranh",
                "Hợp Ryzen 5/7, Core i5/i7 nếu case đủ rộng",
            ],
            lesson: "Dual-tower giá tốt có thể rất mạnh, nhưng phải kiểm tra RAM clearance và chiều cao case.",
        },
        {
            icon: <Sparkles />,
            title: "Noctua NH-D15 G2",
            subtitle: "Tản khí cao cấp",
            color: "orange",
            points: [
                "Dual-tower lớn",
                "8 heatpipe",
                "2 quạt 140mm class",
                "Êm và hoàn thiện cao",
                "Giá cao, cần case rộng",
            ],
            lesson: "Tản khí cao cấp phù hợp người muốn hiệu năng mạnh, bền, êm và không thích AIO.",
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
        office: {
            icon: <Monitor />,
            title: "CPU nhẹ/văn phòng",
            answer: "Stock cooler hoặc tản tower 120mm phổ thông là đủ. Không cần dual-tower lớn hoặc AIO đắt nếu CPU chỉ 65W và tải nhẹ.",
            color: "cyan",
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Gaming tầm trung",
            answer: "Chọn single tower 120mm tốt hoặc dual-tower giá hợp lý. Kiểm tra case airflow để quạt CPU không hút lại khí nóng.",
            color: "blue",
        },
        hotcpu: {
            icon: <Thermometer />,
            title: "CPU nhiều nhân/tải nặng",
            answer: "Ưu tiên dual-tower mạnh hoặc tản khí cao cấp. Nếu render lâu và CPU rất nóng, cân nhắc AIO 280/360mm ở bài sau.",
            color: "orange",
        },
        itx: {
            icon: <Monitor />,
            title: "Case Mini-ITX thấp",
            answer: "Cần low-profile cooler. Đừng mua tản tower 155–165mm nếu case không đóng được nắp hông.",
            color: "emerald",
        },
        ram: {
            icon: <PackageCheck />,
            title: "RAM RGB cao",
            answer: "Kiểm tra RAM clearance. Dual-tower lớn có thể che khe RAM hoặc phải nâng quạt lên, làm tăng chiều cao tổng thể.",
            color: "purple",
        },
        noise: {
            icon: <Gauge />,
            title: "Muốn máy êm",
            answer: "Chọn tản có heatsink/quạt tốt, quạt 120/140mm chất lượng và chỉnh fan curve hợp lý thay vì chỉ chạy RPM cao.",
            color: "sky",
        },
    };
    const [active, setActive] = useState("gaming");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: chọn tản khí theo tình huống"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
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
            wrong: "Tản khí rẻ thì chắc chắn yếu",
            right: "Nhiều tản khí giá tốt hiện nay rất mạnh, đặc biệt dual-tower. Quan trọng là chọn đúng CPU, case, RAM và nhu cầu tải.",
        },
        {
            wrong: "Tản khí nào cũng lắp vừa mọi case",
            right: "Tản tower có chiều cao riêng, case có CPU cooler clearance riêng. Sai vài mm có thể không đóng được nắp hông.",
        },
        {
            wrong: "Tản càng to càng tốt",
            right: "Tản lớn có thể cấn RAM, cấn case, khó tháo lắp, nặng và không cần thiết với CPU công suất thấp.",
        },
        {
            wrong: "Có tản CPU tốt thì không cần airflow case",
            right: "Tản khí cần gió mát từ case và đường xả khí nóng. Case bí làm tản khí kém hiệu quả.",
        },
        {
            wrong: "Quạt quay càng nhanh càng tốt",
            right: "RPM cao gây ồn. Fan curve hợp lý giúp máy êm khi nhẹ tải và chỉ tăng quạt khi cần.",
        },
    ];
    const tips = [
        "CPU phổ thông 65W: stock cooler hoặc tản tower 120mm là đủ cho nhu cầu nhẹ.",
        "Gaming tầm trung: tower 120mm tốt hoặc dual-tower giá hợp lý.",
        "CPU nhiều nhân tải nặng lâu: dual-tower mạnh hoặc cân nhắc AIO 280/360mm.",
        "Trước khi mua: kiểm tra socket, chiều cao tản, case clearance và RAM clearance.",
        "Ưu tiên case airflow tốt; tản khí mạnh trong case bí vẫn không phát huy hết.",
        "Khi lắp tản lớn, siết ốc đều hai bên để lực ép lên CPU cân bằng.",
        "Sau khi lắp xong, kiểm tra nhiệt độ bằng HWiNFO hoặc HWMonitor khi idle và khi tải.",
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
                        <Lightbulb /> Checklist nhanh
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-blue-300 border border-slate-800 shadow-inner space-y-2">
                            <p>Tản khí = kim loại dẫn nhiệt + quạt</p>
                            <p>
                                CPU → Keo → Đế tản → Heatpipe → Lá nhôm → Quạt
                            </p>
                            <br />
                            <p className="text-slate-500">
                                # Các loại phổ biến
                            </p>
                            <p className="text-slate-300">
                                Stock • Low-profile • Single Tower • Dual-Tower
                                • Premium Air Cooler
                            </p>
                            <br />
                            <p className="text-slate-500"># Trước khi mua</p>
                            <p className="text-slate-300">
                                Socket • Cooler height • RAM clearance • Case
                                airflow
                            </p>
                            <br />
                            <p className="text-red-300">
                                Tản khí tốt vẫn cần case thoáng để xả khí nóng
                                ra ngoài.
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
        question: "Tản nhiệt khí làm mát CPU chủ yếu bằng cách nào?",
        options: [
            "Dùng kim loại dẫn nhiệt và quạt thổi gió qua lá tản",
            "Đổ nước trực tiếp lên CPU",
            "Tăng dung lượng RAM",
            "Tắt GPU khi CPU nóng",
        ],
        correct: 0,
        explanation:
            "Air cooling dùng đế tản, heatpipe, lá nhôm và quạt để đưa nhiệt ra khỏi CPU.",
    },
    {
        question: "Heatpipe trong tản khí có nhiệm vụ gì?",
        options: [
            "Dẫn nhiệt từ đế tản lên lá nhôm",
            "Cấp điện cho CPU",
            "Lưu dữ liệu tạm thời",
            "Làm tăng tốc độ mạng",
        ],
        correct: 0,
        explanation:
            "Heatpipe là ống dẫn nhiệt giúp truyền nhiệt từ đế tản lên fin stack/lá nhôm.",
    },
    {
        question: "Khi mua tản khí tower, thông số nào phải kiểm tra với case?",
        options: [
            "Chiều cao tản CPU",
            "Màu đèn RGB của bàn phím",
            "Dung lượng SSD",
            "Độ phân giải màn hình",
        ],
        correct: 0,
        explanation:
            "Tản khí tower có chiều cao riêng, cần nhỏ hơn CPU cooler clearance của case.",
    },
    {
        question: "Dual-tower cooler thường có đặc điểm gì?",
        options: [
            "Hai cụm lá tản, thường đi kèm 2 quạt, hiệu năng cao hơn tản phổ thông",
            "Không cần keo tản nhiệt",
            "Chỉ dùng được cho laptop",
            "Không cần airflow case",
        ],
        correct: 0,
        explanation:
            "Dual-tower có hai tháp lá tản và thường dùng hai quạt, cho hiệu năng cao nhưng kích thước lớn.",
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
    if (finished)
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
                Bạn đã hiểu tản nhiệt khí. Tiếp theo là tản nhiệt nước Liquid
                Cooling / AIO / Custom Loop — phần giúp bạn biết khi nào nên
                dùng tản nước, khi nào tản khí đã đủ và vì sao AIO không phải
                lúc nào cũng tốt hơn tản khí.
            </p>
            <Link
                to="/phan-9-3"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
            >
                Bài tiếp theo: 9.3 — Tản nhiệt nước <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "blue" }) {
    const colorMap = {
        blue: "bg-blue-500/20 text-blue-300",
        sky: "bg-sky-500/20 text-sky-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
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
function RoleCard({ icon, title, desc, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-3xl p-5`}>
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
function DataTable({ title, rows, headers, accent }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 overflow-x-auto">
            <h3 className="text-white font-bold mb-4 px-2">{title}</h3>
            <table className="w-full min-w-[760px] text-sm">
                <thead>
                    <tr className="text-left text-slate-400">
                        {headers.map((h) => (
                            <th key={h} className="p-3">
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row[0]} className="border-t border-slate-800">
                            {row.map((cell, i) => (
                                <td
                                    key={`${row[0]}-${i}`}
                                    className={`p-3 ${i === 0 ? `${textColor(accent)} font-extrabold` : "text-slate-300"}`}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
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
function WarnBullet({ text }) {
    return (
        <div className="flex items-start gap-2 text-sm text-slate-300">
            <AlertTriangle
                className="text-orange-400 shrink-0 mt-0.5"
                size={16}
            />{" "}
            <span>{text}</span>
        </div>
    );
}
function badgeColor(color) {
    const map = {
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        sky: "bg-sky-500/10 text-sky-300 border border-sky-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.blue;
}
function softBorder(color) {
    const map = {
        blue: "bg-blue-500/5 border-blue-500/20",
        sky: "bg-sky-500/5 border-sky-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.blue;
}
function textColor(color) {
    const map = {
        blue: "text-blue-300",
        sky: "text-sky-300",
        yellow: "text-yellow-300",
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-blue-300";
}
