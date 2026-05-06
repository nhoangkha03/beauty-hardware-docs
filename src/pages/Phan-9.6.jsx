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
    Gamepad2,
    Gauge,
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
    Wind,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-violet-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-violet-500/10 border border-violet-400/30 flex items-center justify-center shadow-lg shadow-violet-500/10">
                            <Monitor className="text-violet-400" size={24} />
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
                    <div className="text-sm font-semibold text-violet-300 bg-violet-400/10 px-3 py-1 rounded-full border border-violet-400/20">
                        Bài 9.6
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <SmallRoomAnalogy />
                <LaptopCoolingSimulator />
                <CoolingTypeExplorer />
                <SpecsExplorer />
                <TemperatureGuide />
                <CoolingPadGuide />
                <RealExamples />
                <OptimizationLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextPart />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-violet-300">
                        <BookOpen size={16} /> Phần 9: Laptop Cooling
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Tản nhiệt cho Laptop
                        <span className="block text-violet-400">
                            Heatpipe, fan và khe gió
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Laptop nóng hơn desktop là chuyện rất phổ biến vì CPU,
                        GPU, RAM, SSD, pin, quạt và khe gió đều nằm trong một
                        không gian rất mỏng. Hiểu hệ thống tản nhiệt giúp bạn
                        biết khi nào bình thường và khi nào cần xử lý.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Workflow size={16} />} text="Heatpipe" />
                        <Tag icon={<Fan size={16} />} text="Fan" />
                        <Tag icon={<Layers3 size={16} />} text="Heatsink" />
                        <Tag icon={<Puzzle size={16} />} text="Thermal Pad" />
                        <Tag
                            icon={<Wind size={16} />}
                            text="Intake / Exhaust"
                        />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Cpu />}
                            label="CPU/GPU"
                            desc="Bếp sinh nhiệt"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Workflow />}
                            label="Heatpipe"
                            desc="Ống dẫn nhiệt"
                            color="violet"
                            highlight
                        />
                        <HeroTile
                            icon={<Fan />}
                            label="Fan"
                            desc="Thổi khí nóng"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<Wind />}
                            label="Vent"
                            desc="Khe xả gió"
                            color="emerald"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">
                            // Chuỗi laptop cooling
                        </p>
                        <p>CPU/GPU → Cold plate → Heatpipe</p>
                        <p className="text-violet-300">
                            → Heatsink → Fan → Khe xả
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu tản nhiệt laptop là hệ thống làm mát được thiết kế cho không gian rất nhỏ, gồm heatpipe, heatsink, fan, keo, thermal pad và khe gió.",
        "Nắm cơ chế truyền nhiệt: CPU/GPU sinh nhiệt → cold plate → heatpipe → heatsink → fan → khe xả khí nóng.",
        "Phân biệt laptop văn phòng/mỏng nhẹ, laptop gaming phổ thông, gaming cao cấp/workstation và fanless laptop.",
        "Biết các yếu tố ảnh hưởng nhiệt laptop: độ mỏng, số heatpipe, kích thước quạt, bụi, keo, pad, nhiệt độ phòng và cách đặt máy.",
        "Biết cách giữ laptop mát hơn: kê cao, vệ sinh bụi, không đặt trên chăn/nệm, giới hạn FPS, dùng Balanced và bảo trì đúng lúc.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="violet"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-violet-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-300 flex items-center justify-center font-bold mb-4">
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
            icon: <Workflow />,
            title: "Heatpipe",
            desc: "Ống dẫn nhiệt từ CPU/GPU ra cụm lá tản gần khe xả.",
            color: "violet",
        },
        {
            icon: <Layers3 />,
            title: "Heatsink",
            desc: "Cụm lá đồng/nhôm mỏng giúp tăng diện tích thoát nhiệt.",
            color: "blue",
        },
        {
            icon: <Fan />,
            title: "Fan laptop",
            desc: "Quạt nhỏ, mỏng, thường phải quay nhanh nên dễ ồn khi tải nặng.",
            color: "cyan",
        },
        {
            icon: <Puzzle />,
            title: "Paste & Pad",
            desc: "Keo cho CPU/GPU; thermal pad cho VRAM, VRM, chipset và chip phụ.",
            color: "orange",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Tản nhiệt laptop là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Tản nhiệt laptop</strong> là
                    hệ thống làm mát được thiết kế riêng cho không gian nhỏ. Nó
                    đưa nhiệt từ CPU/GPU qua keo tản nhiệt vào cold plate, sau
                    đó heatpipe dẫn nhiệt ra cụm heatsink để quạt thổi khí nóng
                    ra ngoài.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <RoleCard key={c.title} {...c} />
                    ))}
                </div>
                <div className="mt-6 bg-violet-500/10 border border-violet-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    [CPU/GPU] → [Cold plate] → [Heatpipe] → [Heatsink] → [Fan] →
                    [Khe xả khí nóng]
                </div>
            </div>
        </section>
    );
}

function SmallRoomAnalogy() {
    const cards = [
        {
            icon: <Cpu />,
            title: "CPU/GPU = bếp gas",
            desc: "Sinh nhiệt mạnh trong không gian nhỏ.",
            color: "orange",
        },
        {
            icon: <Workflow />,
            title: "Heatpipe = ống dẫn nhiệt",
            desc: "Dẫn nhiệt từ bếp ra vùng gần cửa thông gió.",
            color: "violet",
        },
        {
            icon: <Fan />,
            title: "Fan = quạt hút/xả",
            desc: "Thổi khí nóng qua lá tản và ra khỏi máy.",
            color: "cyan",
        },
        {
            icon: <AlertTriangle />,
            title: "Chăn/nệm = bịt cửa gió",
            desc: "Khi khe hút bị che, máy nóng rất nhanh.",
            color: "red",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: căn phòng nhỏ đặt bếp gas"
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

function LaptopCoolingSimulator() {
    const flows = {
        normal: {
            title: "Luồng nhiệt đúng",
            color: "violet",
            steps: [
                {
                    icon: <Cpu />,
                    title: "CPU/GPU sinh nhiệt",
                    desc: "Laptop xử lý game, render hoặc học online lâu làm CPU/GPU nóng lên.",
                },
                {
                    icon: <Thermometer />,
                    title: "Keo truyền nhiệt",
                    desc: "Thermal paste truyền nhiệt từ chip sang cold plate.",
                },
                {
                    icon: <Workflow />,
                    title: "Heatpipe dẫn nhiệt",
                    desc: "Heatpipe đưa nhiệt từ CPU/GPU ra vùng heatsink gần khe xả.",
                },
                {
                    icon: <Layers3 />,
                    title: "Heatsink tỏa nhiệt",
                    desc: "Cụm lá kim loại mỏng tăng diện tích tiếp xúc với không khí.",
                },
                {
                    icon: <Fan />,
                    title: "Fan thổi khí nóng",
                    desc: "Quạt đẩy gió qua heatsink và xả ra cạnh sau hoặc cạnh bên.",
                },
            ],
        },
        dusty: {
            title: "Bụi chặn heatsink",
            color: "red",
            steps: [
                {
                    icon: <XCircle />,
                    title: "Bụi thành mảng",
                    desc: "Bụi tích ở cụm lá tản gần khe xả như một lớp chặn gió.",
                },
                {
                    icon: <Fan />,
                    title: "Quạt quay mạnh hơn",
                    desc: "Fan cố tăng RPM nhưng gió không đi qua được heatsink.",
                },
                {
                    icon: <Thermometer />,
                    title: "Nhiệt tăng nhanh",
                    desc: "CPU/GPU nóng, quạt hú, hiệu năng tụt sau vài phút tải.",
                },
                {
                    icon: <PackageCheck />,
                    title: "Cần vệ sinh",
                    desc: "Vệ sinh quạt + heatsink thường quan trọng hơn chỉ thay keo.",
                },
            ],
        },
        blocked: {
            title: "Bịt khe hút gió",
            color: "orange",
            steps: [
                {
                    icon: <Monitor />,
                    title: "Đặt trên chăn/nệm",
                    desc: "Bề mặt mềm che khe hút gió dưới đáy laptop.",
                },
                {
                    icon: <Wind />,
                    title: "Fan thiếu khí mát",
                    desc: "Quạt không lấy đủ không khí để thổi qua heatsink.",
                },
                {
                    icon: <AlertTriangle />,
                    title: "Nóng và throttle",
                    desc: "CPU/GPU tăng nhiệt, giảm xung và quạt hú.",
                },
                {
                    icon: <ShieldCheck />,
                    title: "Đặt trên mặt cứng",
                    desc: "Bàn phẳng, kê cao đuôi máy 1–3cm giúp khe hút thoáng hơn.",
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
                title="Laptop tản nhiệt như thế nào?"
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

function CoolingTypeExplorer() {
    const types = {
        thin: {
            icon: <Monitor />,
            title: "Laptop văn phòng / mỏng nhẹ",
            color: "cyan",
            good: ["Nhẹ, mỏng", "Pin tốt", "Ít ồn", "Hợp tác vụ nhẹ"],
            bad: [
                "Không hợp game/render nặng lâu",
                "Heatpipe/quạt nhỏ",
                "Dễ giảm hiệu năng khi tải lâu",
            ],
            fit: "Office, học online, lướt web, xem phim, lập trình nhẹ",
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Laptop gaming phổ thông",
            color: "orange",
            good: [
                "Chơi game 1080p tốt",
                "Thường có 2 quạt",
                "Nhiều heatpipe hơn laptop mỏng nhẹ",
            ],
            bad: ["Nóng hơn", "Ồn hơn", "Cần vệ sinh định kỳ"],
            fit: "Gaming 1080p, đồ họa nhẹ/vừa, lập trình nặng",
        },
        workstation: {
            icon: <Cpu />,
            title: "Gaming cao cấp / workstation",
            color: "red",
            good: [
                "Hiệu năng mạnh",
                "Nhiều heatpipe hoặc vapor chamber",
                "Có thể chạy render/AI nhẹ-vừa",
            ],
            bad: ["Nặng", "Nóng", "Ồn", "Giá cao"],
            fit: "Render 3D, dựng video nặng, gaming AAA, workstation di động",
        },
        fanless: {
            icon: <ShieldCheck />,
            title: "Fanless laptop",
            color: "emerald",
            good: ["Im lặng tuyệt đối", "Ít bụi hơn", "Ít linh kiện cơ khí"],
            bad: ["Không hợp tải nặng lâu", "Dễ giảm hiệu năng khi nóng"],
            fit: "Văn phòng, học tập, tác vụ nhẹ",
        },
    };
    const [active, setActive] = useState("gaming");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="violet"
                title="Các kiểu tản nhiệt laptop"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
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

function SpecsExplorer() {
    const specs = {
        heatpipe: {
            icon: <Workflow />,
            title: "Heatpipe",
            detail: "Ống kim loại chứa môi chất bên trong, dẫn nhiệt từ CPU/GPU ra vùng heatsink.",
            impact: "Laptop mạnh thường cần nhiều heatpipe hoặc vapor chamber; nhưng thiết kế tổng thể vẫn quan trọng hơn chỉ đếm số ống.",
        },
        fan: {
            icon: <Fan />,
            title: "Fan laptop",
            detail: "Quạt laptop nhỏ và mỏng hơn desktop, nên khi cần tản mạnh phải quay rất nhanh.",
            impact: "Dấu hiệu lỗi: quạt rè/rít, lúc quay lúc không, máy nóng nhanh, một bên khe xả không có gió hoặc BIOS báo fan error.",
        },
        heatsink: {
            icon: <Layers3 />,
            title: "Heatsink",
            detail: "Cụm lá kim loại mỏng gần khe xả. Đây là nơi bụi rất hay bám thành mảng.",
            impact: "Heatsink bụi dày làm gió nghẹt, máy nóng và quạt hú dù keo vẫn còn tốt.",
        },
        paste: {
            icon: <Puzzle />,
            title: "Thermal Paste",
            detail: "Keo nằm giữa CPU/GPU và cold plate. Theo thời gian, keo có thể khô hoặc pump-out.",
            impact: "Nếu máy nóng hơn trước rõ rệt dù đã vệ sinh bụi, có thể cần kiểm tra keo.",
        },
        pad: {
            icon: <PackageCheck />,
            title: "Thermal Pad",
            detail: "Miếng dẫn nhiệt cho VRAM, VRM, chipset hoặc chip phụ, có độ dày riêng.",
            impact: "Pad quá dày làm CPU/GPU không ép sát; pad quá mỏng làm VRAM/VRM tiếp xúc kém.",
        },
        vents: {
            icon: <Wind />,
            title: "Intake / Exhaust",
            detail: "Laptop thường hút gió từ đáy hoặc bàn phím, xả ra cạnh sau/cạnh bên.",
            impact: "Đặt trên chăn/nệm hoặc sát tường có thể chặn gió và làm máy nóng nhanh.",
        },
        mode: {
            icon: <Settings />,
            title: "Performance Mode",
            detail: "Balanced, Performance/Turbo hoặc Silent quyết định power limit và fan curve.",
            impact: "Turbo mạnh hơn nhưng nóng/ồn hơn; Balanced thường hợp học/làm việc lâu nếu không cần tối đa FPS.",
        },
    };
    const [active, setActive] = useState("vents");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="yellow"
                title="Thông số và bộ phận quan trọng"
                icon={<Puzzle />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-7 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(specs).map(([key, s]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-3 text-center transition-all ${active === key ? "bg-yellow-500 text-slate-950" : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}
                        >
                            {React.cloneElement(s.icon, { size: 19 })}
                            <span className="font-bold text-[11px]">
                                {s.title}
                            </span>
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

function TemperatureGuide() {
    const rows = [
        ["Idle", "40–60°C", "Bình thường"],
        ["Office / web", "50–70°C", "Bình thường"],
        ["Gaming / render", "75–95°C", "Thường gặp trên laptop gaming"],
        [
            "Gần 100°C liên tục",
            "Cao",
            "Cần kiểm tra nếu kèm tụt hiệu năng/ồn bất thường",
        ],
    ];
    const signs = [
        ["Quạt kêu rè/rít", "Có thể fan mòn, bụi hoặc vật cản"],
        ["Quạt lúc quay lúc không", "Cần kiểm tra fan/cáp/quạt lỗi"],
        [
            "Một bên khe xả không có gió",
            "Có thể quạt bên đó không chạy hoặc heatsink nghẹt",
        ],
        [
            "Nhiệt tăng rất nhanh khi mở game",
            "Có thể keo khô, heatsink bụi, tản ép kém hoặc fan/power mode lỗi",
        ],
        ["FPS tụt sau 10–20 phút", "Có thể thermal throttling"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="orange"
                title="Nhiệt độ laptop khi tải nặng"
                icon={<Thermometer />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="Mức nhiệt thường gặp"
                    rows={rows}
                    headers={["Tình huống", "Nhiệt độ thường gặp", "Nhận xét"]}
                    accent="orange"
                />
                <DataTable
                    title="Dấu hiệu cần kiểm tra"
                    rows={signs}
                    headers={["Dấu hiệu", "Khả năng liên quan"]}
                    accent="red"
                />
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-orange-300">
                    Laptop gaming 85–90°C chưa chắc hỏng.
                </strong>{" "}
                Hãy xem thêm: có tụt FPS không, có throttling nặng không, quạt
                có bất thường không, nhiệt có cao hơn trước nhiều không và máy
                có tự tắt không.
            </div>
        </section>
    );
}

function CoolingPadGuide() {
    const rows = [
        [
            "Đế tản phổ thông",
            "Kê cao máy + quạt thổi đáy",
            "Laptop có khe hút gió dưới đáy, người muốn mát hơn vài độ",
        ],
        [
            "Đế tản áp suất cao",
            "Quạt turbo + foam seal ép gió vào đáy",
            "Laptop gaming nóng, chấp nhận ồn hơn",
        ],
        [
            "Kê cao đuôi máy",
            "Tăng khoảng hở dưới đáy",
            "Giải pháp rẻ, dễ làm, hiệu quả với nhiều laptop",
        ],
        [
            "Không phù hợp",
            "Laptop ít khe đáy hoặc xả gió bị chặn",
            "Đế tản có thể chỉ giúp kê cao, hiệu quả thấp",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="cyan"
                title="Đế tản laptop có hiệu quả không?"
                icon={<Fan />}
            />
            <DataTable
                title="Hiệu quả phụ thuộc thiết kế khe hút gió"
                rows={rows}
                headers={["Giải pháp", "Cách hoạt động", "Phù hợp"]}
                accent="cyan"
            />
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                Laptop hút gió từ đáy → đế tản thường có tác dụng hơn
                <br />
                Laptop ít khe đáy → đế tản có thể chỉ giúp kê cao
                <br />
                <span className="text-cyan-300">
                    Không che khe xả sau/bên hông.
                </span>
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Fan />,
            title: "Cooler Master NotePal X3",
            subtitle: "Đế tản phổ thông",
            color: "cyan",
            points: [
                "Quạt lớn 200mm",
                "Mặt lưới kim loại",
                "Có núm chỉnh tốc độ quạt",
                "Hỗ trợ laptop tới 17 inch theo mô tả bán lẻ",
                "Hợp laptop có khe hút gió đáy",
            ],
            lesson: "Đế tản phổ thông thường giúp kê cao máy và tăng gió đáy, hiệu quả tùy thiết kế laptop.",
        },
        {
            icon: <Gauge />,
            title: "IETS GT500",
            subtitle: "Đế tản áp suất cao",
            color: "orange",
            points: [
                "Quạt turbo tới 5000 RPM",
                "Có foam seal ép gió",
                "Hỗ trợ laptop 13–17.3 inch theo mô tả bán lẻ",
                "Phù hợp laptop gaming nóng",
                "Đổi lại là tiếng ồn cao hơn",
            ],
            lesson: "Đế tản mạnh có thể giảm nhiệt tốt hơn, nhưng không thần kỳ nếu laptop không hút gió từ đáy.",
        },
        {
            icon: <Puzzle />,
            title: "Noctua NT-H2",
            subtitle: "Keo tản nhiệt cao cấp",
            color: "emerald",
            points: [
                "Dùng cho CPU/GPU/laptop/console",
                "Một số gói kèm khăn vệ sinh",
                "Không cần tán keo trước khi lắp heatsink theo mô tả",
                "Hợp máy đã dùng lâu",
                "Cần thao tác tháo laptop cẩn thận",
            ],
            lesson: "Với laptop, thay keo khó hơn desktop vì phải chú ý thermal pad VRAM/VRM và lực siết cụm heatsink.",
        },
        {
            icon: <Gamepad2 />,
            title: "Laptop gaming RTX 4060",
            subtitle: "Ví dụ nhiệt thực tế",
            color: "purple",
            points: [
                "Idle: CPU 45–60°C, GPU 40–55°C",
                "Gaming: CPU 80–95°C",
                "Gaming: GPU 70–85°C",
                "Quạt nghe rõ khi chơi game",
                "Bình thường nếu FPS ổn và không tự tắt",
            ],
            lesson: "Laptop gaming nóng hơn desktop; đánh giá bằng hiệu năng ổn định, throttling, tiếng quạt và thay đổi so với trước.",
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
            <div className="grid lg:grid-cols-4 gap-4">
                {examples.map((e) => (
                    <div
                        key={e.title}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-5 hover:border-pink-500/40 transition-all"
                    >
                        <div
                            className={`w-12 h-12 rounded-2xl ${badgeColor(e.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(e.icon, { size: 24 })}
                        </div>
                        <h3 className="text-white font-bold text-base mb-1">
                            {e.title}
                        </h3>
                        <p className="text-pink-300 text-xs font-semibold mb-4">
                            {e.subtitle}
                        </p>
                        <div className="space-y-2 mb-5">
                            {e.points.map((p) => (
                                <Bullet key={p} text={p} />
                            ))}
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300">
                            <strong className="text-pink-300">Bài học:</strong>{" "}
                            {e.lesson}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function OptimizationLab() {
    const scenarios = {
        bed: {
            icon: <XCircle />,
            title: "Đặt trên chăn/nệm",
            answer: "Chuyển sang bàn cứng/phẳng hoặc kê cao đuôi máy. Chăn/nệm che khe hút gió làm laptop nóng nhanh và dễ throttle.",
            color: "red",
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Gaming nóng/ồn",
            answer: "Giới hạn FPS theo tần số màn hình, dùng Balanced nếu không cần tối đa, kê cao máy và theo dõi nhiệt bằng MSI Afterburner/HWiNFO.",
            color: "orange",
        },
        dusty: {
            icon: <Fan />,
            title: "Máy dùng 1–2 năm",
            answer: "Nên vệ sinh bụi quạt + heatsink. Nếu vẫn nóng sau vệ sinh, kiểm tra keo tản nhiệt và thermal pad.",
            color: "cyan",
        },
        pad: {
            icon: <Puzzle />,
            title: "Muốn thay thermal pad",
            answer: "Không thay tùy tiện. Pad phải đúng độ dày; sai độ dày có thể làm CPU/GPU hoặc VRAM/VRM tiếp xúc kém hơn trước.",
            color: "purple",
        },
        warranty: {
            icon: <ShieldCheck />,
            title: "Còn bảo hành",
            answer: "Cân nhắc trung tâm bảo hành để vệ sinh/thay keo nếu cần. Tự tháo có thể ảnh hưởng bảo hành tùy hãng/chính sách.",
            color: "emerald",
        },
        fanerror: {
            icon: <AlertTriangle />,
            title: "Fan error / không có gió",
            answer: "Tắt máy kiểm tra sớm. Có thể fan lỗi, dây fan lỏng hoặc heatsink bị nghẹt nặng; không nên tiếp tục tải nặng.",
            color: "red",
        },
    };
    const [active, setActive] = useState("gaming");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: giữ laptop mát hơn theo tình huống"
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
            wrong: "Đặt laptop trên chăn/nệm khi chơi game",
            right: "Chăn/nệm che khe hút gió dưới đáy, làm fan thiếu khí mát và CPU/GPU nóng nhanh.",
        },
        {
            wrong: "Laptop gaming 85–90°C là chắc chắn hỏng",
            right: "Mức này có thể thường gặp. Cần xem FPS, throttling, tiếng quạt, máy có tự tắt không và nhiệt có cao hơn trước nhiều không.",
        },
        {
            wrong: "Đế tản nào cũng hiệu quả như nhau",
            right: "Đế tản hiệu quả nhất khi laptop có khe hút gió dưới đáy và đế thổi đúng vị trí.",
        },
        {
            wrong: "Tự thay thermal pad mà không biết độ dày",
            right: "Pad sai độ dày có thể làm CPU/GPU hoặc VRAM/VRM tiếp xúc kém, máy nóng hơn trước.",
        },
        {
            wrong: "Chỉ thay keo mà không vệ sinh bụi",
            right: "Heatsink bị bụi chặn thì keo mới cũng không giúp nhiều. Quy trình đúng thường là vệ sinh quạt + heatsink + thay keo nếu cần.",
        },
    ];
    const tips = [
        "Luôn đặt laptop trên mặt phẳng cứng khi chơi game/render/học lâu.",
        "Kê cao phần đuôi laptop 1–3cm giúp khe hút gió dưới đáy thoáng hơn.",
        "Vệ sinh bụi định kỳ 6–12 tháng/lần nếu dùng nhiều, phòng bụi hoặc nuôi thú cưng.",
        "Dùng HWiNFO, HWMonitor hoặc MSI Afterburner để theo dõi nhiệt độ, power và throttling.",
        "Giới hạn FPS theo màn hình: 144Hz thì không nhất thiết để game chạy 220 FPS.",
        "Dùng Balanced khi không cần tối đa hiệu năng; Turbo/Performance thường nóng và ồn hơn.",
        "Không bịt khe xả gió phía sau hoặc bên hông; đừng đặt laptop sát tường quá gần.",
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
                        <span className="bg-violet-500/20 text-violet-300 p-2 rounded-xl">
                            12
                        </span>{" "}
                        Tóm tắt & Kiểm tra cuối Phần 9
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-violet-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                Laptop cooling = CPU/GPU → Keo → Cold plate →
                                Heatpipe
                            </p>
                            <p>→ Heatsink → Fan → Khe xả khí nóng</p>
                            <br />
                            <p className="text-slate-500">
                                # Laptop nóng hơn desktop vì
                            </p>
                            <p className="text-slate-300">
                                Không gian mỏng • Quạt nhỏ • Khe gió hạn chế •
                                Pin/RAM/SSD sát nhau
                            </p>
                            <br />
                            <p className="text-red-300">
                                Không đặt laptop trên chăn/nệm khi tải nặng.
                            </p>
                            <p className="text-emerald-300">
                                Bàn cứng + kê cao + vệ sinh bụi + fan
                                curve/power mode hợp lý.
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
        question: "Heatpipe trong laptop có nhiệm vụ gì?",
        options: [
            "Dẫn nhiệt từ CPU/GPU ra cụm heatsink",
            "Tăng dung lượng RAM",
            "Lưu dữ liệu hệ điều hành",
            "Làm màn hình sáng hơn",
        ],
        correct: 0,
        explanation:
            "Heatpipe dẫn nhiệt từ CPU/GPU tới cụm lá tản gần khe xả để quạt thổi khí nóng ra ngoài.",
    },
    {
        question: "Vì sao không nên đặt laptop trên chăn/nệm khi chơi game?",
        options: [
            "Vì chăn/nệm có thể che khe hút gió, làm máy nóng nhanh",
            "Vì laptop sẽ mất Wi‑Fi",
            "Vì CPU sẽ mất nhân xử lý",
            "Vì SSD sẽ tự xóa dữ liệu",
        ],
        correct: 0,
        explanation:
            "Bề mặt mềm như chăn/nệm dễ che khe hút gió dưới đáy, làm fan thiếu khí mát.",
    },
    {
        question: "Thermal pad trong laptop thường dùng cho bộ phận nào?",
        options: [
            "VRAM, VRM, chipset hoặc linh kiện phụ cần lấp khoảng cách",
            "Màn hình",
            "Bàn phím",
            "Touchpad",
        ],
        correct: 0,
        explanation:
            "Thermal pad thường dùng cho VRAM, VRM, chipset hoặc chip phụ, nơi cần lấp khoảng cách vật lý với heatsink.",
    },
    {
        question: "Đế tản laptop hiệu quả nhất khi nào?",
        options: [
            "Khi laptop có khe hút gió dưới đáy và đế tản thổi đúng vị trí",
            "Khi laptop không có khe gió nào",
            "Khi đặt laptop trên nệm",
            "Khi tắt toàn bộ quạt laptop",
        ],
        correct: 0,
        explanation:
            "Đế tản có tác dụng rõ hơn khi luồng gió của đế đi đúng vào khe hút gió dưới đáy laptop.",
    },
    {
        question: "Laptop gaming 85–90°C khi chơi game có luôn là hỏng không?",
        options: [
            "Không, cần xem thêm FPS, throttling, tiếng quạt và tình trạng máy",
            "Có, chắc chắn hỏng ngay",
            "Không thể có nhiệt độ này",
            "Chỉ do màn hình quá sáng",
        ],
        correct: 0,
        explanation:
            "Laptop gaming thường nóng hơn desktop; cần đánh giá theo hiệu năng ổn định, throttling, tiếng quạt và thay đổi so với trước.",
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
                    Hoàn thành Phần 9!
                </h4>
                <p className="text-slate-400 mb-6">
                    Bạn trả lời đúng{" "}
                    <strong className="text-violet-400">
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
                <span className="text-violet-400">
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
                        className="w-full py-3 bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-xl transition-colors"
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

function NextPart() {
    return (
        <div className="text-center pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">
                Bạn đã học xong Phần 9 — Tản nhiệt: vì sao cần tản nhiệt, tản
                khí, tản nước, keo tản nhiệt, nhiệt độ an toàn và tản nhiệt
                laptop. Tiếp theo là Phần 10 — Thiết bị nhập liệu, bắt đầu với
                bàn phím: cơ chế, loại switch và kết nối.
            </p>
            <Link
                to="/phan-10-1"
                className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-violet-500/20"
            >
                Phần tiếp theo: 10.1 — Bàn phím Keyboard{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "violet" }) {
    const colorMap = {
        violet: "bg-violet-500/20 text-violet-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        blue: "bg-blue-500/20 text-blue-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-violet-500/10 border-violet-400/50" : softBorder(color)}`}
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
        violet: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.violet;
}
function softBorder(color) {
    const map = {
        violet: "bg-violet-500/5 border-violet-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.violet;
}
function textColor(color) {
    const map = {
        violet: "text-violet-300",
        yellow: "text-yellow-300",
        blue: "text-blue-300",
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-violet-300";
}
