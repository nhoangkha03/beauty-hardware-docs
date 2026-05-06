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
    Fan,
    Gamepad2,
    Gauge,
    HardDrive,
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
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center shadow-lg shadow-sky-500/10">
                            <Thermometer className="text-sky-400" size={24} />
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
                    <div className="text-sm font-semibold text-sky-300 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20">
                        Bài 9.1
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <KitchenAnalogy />
                <HeatFlowSimulator />
                <CoolingTypesExplorer />
                <TemperatureGuide />
                <SpecsExplorer />
                <CoolingChainGuide />
                <RealExamples />
                <TroubleshootingLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-sky-300">
                        <BookOpen size={16} /> Phần 9: Tản nhiệt
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Tại sao cần
                        <span className="block text-sky-400">tản nhiệt?</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Khi chơi game, render video hoặc chạy nhiều phần mềm,
                        CPU/GPU có thể nóng mạnh, quạt hú và hiệu năng tụt. Tản
                        nhiệt giúp đưa nhiệt ra khỏi linh kiện để máy ổn định,
                        êm và bền hơn.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="CPU Heat" />
                        <Tag icon={<Gamepad2 size={16} />} text="GPU Heat" />
                        <Tag
                            icon={<Thermometer size={16} />}
                            text="Thermal Throttling"
                        />
                        <Tag icon={<Gauge size={16} />} text="TDP" />
                        <Tag icon={<Wind size={16} />} text="Case Airflow" />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Cpu />}
                            label="CPU"
                            desc="Bếp đang nấu"
                            color="orange"
                            highlight
                        />
                        <HeroTile
                            icon={<Gamepad2 />}
                            label="GPU"
                            desc="Nguồn nhiệt lớn"
                            color="red"
                        />
                        <HeroTile
                            icon={<Fan />}
                            label="Cooler"
                            desc="Đưa nhiệt đi"
                            color="sky"
                        />
                        <HeroTile
                            icon={<Wind />}
                            label="Airflow"
                            desc="Xả khí nóng"
                            color="cyan"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Chuỗi tản nhiệt</p>
                        <p>Chip nóng → Keo → Heatsink</p>
                        <p className="text-sky-300">
                            → Quạt → Airflow → Ra ngoài
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu tản nhiệt là quá trình đưa nhiệt ra khỏi linh kiện để giữ máy trong mức nhiệt an toàn.",
        "Biết vì sao CPU, GPU, VRM, SSD NVMe và PSU sinh nhiệt khi hoạt động.",
        "Hiểu thermal throttling: CPU/GPU tự giảm xung khi quá nóng để tự bảo vệ.",
        "Nắm vai trò của TDP, heatsink, heatpipe, thermal paste và airflow trong case.",
        "Phân biệt các hình thức tản nhiệt phổ biến: thụ động, tản khí, AIO, custom water cooling và tản laptop.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="sky"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-sky-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-300 flex items-center justify-center font-bold mb-4">
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
            title: "CPU",
            desc: "Bộ xử lý trung tâm sinh nhiệt khi chạy game, phần mềm, compile, render.",
            color: "orange",
        },
        {
            icon: <Gamepad2 />,
            title: "GPU",
            desc: "Card đồ họa là nguồn nhiệt lớn trong PC gaming/render/AI.",
            color: "red",
        },
        {
            icon: <Zap />,
            title: "VRM / PSU",
            desc: "Mạch cấp điện và bộ nguồn cũng sinh nhiệt khi cấp dòng cho linh kiện.",
            color: "yellow",
        },
        {
            icon: <HardDrive />,
            title: "SSD NVMe",
            desc: "Ổ tốc độ cao có thể nóng và giảm tốc đọc/ghi nếu airflow kém.",
            color: "cyan",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Tản nhiệt là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Tản nhiệt</strong> là quá
                    trình đưa nhiệt ra khỏi linh kiện máy tính để giữ chúng hoạt
                    động trong mức nhiệt an toàn. Máy càng mạnh, điện chạy qua
                    linh kiện càng lớn, nhiệt sinh ra càng nhiều và hệ thống làm
                    mát càng quan trọng.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <RoleCard key={c.title} {...c} />
                    ))}
                </div>
                <div className="mt-6 bg-sky-500/10 border border-sky-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    CPU/GPU hoạt động nặng → sinh nhiệt → tản nhiệt hấp thụ →
                    quạt/airflow đưa nhiệt ra ngoài
                </div>
            </div>
        </section>
    );
}

function KitchenAnalogy() {
    const cards = [
        {
            icon: <Cpu />,
            title: "CPU = bếp đang nấu",
            desc: "Xử lý càng nặng thì bếp càng nóng.",
            color: "orange",
        },
        {
            icon: <Fan />,
            title: "Cooler = quạt hút mùi",
            desc: "Lấy nhiệt khỏi CPU/GPU và đẩy ra vùng rộng hơn.",
            color: "sky",
        },
        {
            icon: <Wind />,
            title: "Airflow = cửa thông gió",
            desc: "Khí nóng phải có đường thoát khỏi case.",
            color: "cyan",
        },
        {
            icon: <AlertTriangle />,
            title: "Bếp bí = máy nóng",
            desc: "Tản tốt nhưng case bí gió thì nhiệt vẫn bị giữ lại.",
            color: "red",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: bếp, quạt hút mùi và cửa thông gió"
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

function HeatFlowSimulator() {
    const flows = {
        normal: {
            title: "Tản nhiệt đúng chuỗi",
            color: "sky",
            steps: [
                {
                    icon: <Cpu />,
                    title: "CPU/GPU xử lý dữ liệu",
                    desc: "Dòng điện chạy qua hàng tỷ transistor và sinh nhiệt.",
                },
                {
                    icon: <Thermometer />,
                    title: "Đế chip nóng lên",
                    desc: "Nhiệt tập trung tại die/IHS hoặc bề mặt GPU/SSD.",
                },
                {
                    icon: <Puzzle />,
                    title: "Keo tản nhiệt truyền nhiệt",
                    desc: "Thermal paste lấp khe siêu nhỏ giữa chip và đế tản.",
                },
                {
                    icon: <Layers3 />,
                    title: "Heatsink/heatpipe phân tán",
                    desc: "Đế đồng, ống đồng và lá nhôm kéo nhiệt ra vùng lớn hơn.",
                },
                {
                    icon: <Fan />,
                    title: "Quạt thổi qua lá tản",
                    desc: "Không khí mang nhiệt khỏi heatsink/radiator.",
                },
                {
                    icon: <Wind />,
                    title: "Airflow case xả ra ngoài",
                    desc: "Quạt case đẩy khí nóng ra khỏi thùng máy.",
                },
            ],
        },
        weak: {
            title: "Một mắt xích yếu",
            color: "red",
            steps: [
                {
                    icon: <XCircle />,
                    title: "Keo khô hoặc thiếu keo",
                    desc: "Nhiệt truyền từ CPU sang tản kém, nhiệt độ tăng nhanh.",
                },
                {
                    icon: <AlertTriangle />,
                    title: "Tản quá yếu",
                    desc: "Heatsink nhỏ hoặc quạt yếu không xử lý kịp CPU/GPU tải nặng.",
                },
                {
                    icon: <Wind />,
                    title: "Case bí gió",
                    desc: "Khí nóng quanh quẩn trong case, tản CPU/GPU lấy lại khí nóng.",
                },
                {
                    icon: <Thermometer />,
                    title: "Thermal throttling",
                    desc: "CPU/GPU giảm xung để tự bảo vệ, hiệu năng tụt.",
                },
            ],
        },
        laptop: {
            title: "Laptop nóng",
            color: "orange",
            steps: [
                {
                    icon: <Monitor />,
                    title: "Không gian rất nhỏ",
                    desc: "Heatpipe và quạt mỏng phải làm việc trong thân máy hẹp.",
                },
                {
                    icon: <Fan />,
                    title: "Bụi bít khe gió",
                    desc: "Bụi làm gió yếu, quạt hú nhiều hơn.",
                },
                {
                    icon: <Thermometer />,
                    title: "Vỏ máy nóng",
                    desc: "Khu vực bàn phím/đáy máy nóng rõ khi tải nặng.",
                },
                {
                    icon: <Gauge />,
                    title: "Cần vệ sinh/bảo trì",
                    desc: "Vệ sinh bụi, thay keo hoặc kê máy thoáng hơn có thể cải thiện.",
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
                title="Cơ chế tản nhiệt hoạt động thế nào?"
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

function CoolingTypesExplorer() {
    const types = {
        passive: {
            icon: <Layers3 />,
            title: "Tản thụ động",
            color: "cyan",
            how: "Dùng khối kim loại hấp thụ và tỏa nhiệt, không có quạt.",
            good: ["Êm tuyệt đối", "Ít hỏng", "Không cần dây/quạt"],
            bad: ["Hiệu quả hạn chế", "Chỉ hợp linh kiện mát"],
            fit: "SSD, chipset, thiết bị công suất thấp",
        },
        air: {
            icon: <Fan />,
            title: "Tản nhiệt khí",
            color: "sky",
            how: "Heatsink + heatpipe + quạt thổi qua lá tản.",
            good: ["Bền", "Dễ lắp", "Giá tốt", "Ít rủi ro"],
            bad: ["Case nhỏ kén chiều cao", "Có thể cấn RAM"],
            fit: "Đa số PC phổ thông/gaming",
        },
        aio: {
            icon: <Gauge />,
            title: "Tản nước AIO",
            color: "blue",
            how: "Bơm nước tuần hoàn qua block, ống, radiator và quạt.",
            good: ["Đẹp", "Hiệu năng tốt với CPU nóng", "Gọn quanh socket"],
            bad: ["Đắt hơn", "Có bơm", "Tuổi thọ phụ thuộc pump"],
            fit: "Gaming cao cấp, render, CPU mạnh",
        },
        custom: {
            icon: <Sparkles />,
            title: "Custom Water Cooling",
            color: "purple",
            how: "Hệ thống nước tự thiết kế riêng với block, pump, reservoir, ống và radiator.",
            good: ["Rất đẹp", "Hiệu năng cao", "Cá nhân hóa mạnh"],
            bad: ["Rất đắt", "Khó lắp", "Cần bảo trì"],
            fit: "Người chơi PC chuyên sâu",
        },
        laptop: {
            icon: <Monitor />,
            title: "Tản laptop",
            color: "orange",
            how: "Heatpipe + fan mỏng + khe thoát nhiệt trong không gian hẹp.",
            good: ["Tối ưu trong thân máy nhỏ", "Có sẵn theo máy"],
            bad: ["Khó nâng cấp", "Dễ bụi", "Nóng hơn desktop"],
            fit: "Laptop gaming, laptop văn phòng",
        },
    };
    const [active, setActive] = useState("air");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="sky"
                title="Các loại tản nhiệt phổ biến"
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
                            {item.how}
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

function TemperatureGuide() {
    const rows = [
        [
            "CPU desktop",
            "Khoảng 60–85°C khi tải nặng",
            "Thường xuyên trên 90–95°C",
        ],
        [
            "GPU desktop",
            "Khoảng 60–83°C khi chơi game",
            "Gần hoặc vượt giới hạn hãng đặt",
        ],
        [
            "SSD NVMe",
            "Nên dưới khoảng 70°C nếu có thể",
            "Bị giảm tốc đọc/ghi do quá nóng",
        ],
        [
            "Laptop gaming",
            "Có thể cao hơn desktop",
            "Quạt hú, tụt xung, nóng vỏ máy",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="orange"
                title="Mốc nhiệt độ tham khảo"
                icon={<Thermometer />}
            />
            <DataTable
                title="Nhiệt độ thường ổn và khi cần chú ý"
                rows={rows}
                headers={["Linh kiện", "Mức thường ổn", "Cần chú ý khi"]}
                accent="orange"
            />
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-orange-300">Lưu ý:</strong> mỗi CPU/GPU
                có giới hạn khác nhau. Bảng này giúp dễ hình dung, không phải
                luật tuyệt đối.
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        throttle: {
            icon: <Thermometer />,
            title: "Thermal Throttling",
            detail: "Linh kiện tự giảm xung nhịp khi quá nóng để tránh hư hỏng.",
            impact: "Game tụt FPS sau vài phút, render chậm dần, quạt hú, laptop nóng bàn phím hoặc máy tự tắt.",
        },
        tdp: {
            icon: <Gauge />,
            title: "TDP",
            detail: "Thermal Design Power: mức nhiệt/công suất mà hệ thống tản nhiệt cần xử lý trong điều kiện thiết kế.",
            impact: "CPU 65W thường dễ tản hơn CPU 125W+; nhưng TDP không luôn bằng điện tiêu thụ tối đa thực tế.",
        },
        heatsink: {
            icon: <Layers3 />,
            title: "Heatsink",
            detail: "Khối kim loại, thường nhôm/đồng, dùng để hấp thụ và phân tán nhiệt.",
            impact: "Heatsink lớn thường tản tốt hơn, nhưng phải kiểm tra cấn RAM, chiều cao case và cách lắp.",
        },
        heatpipe: {
            icon: <Workflow />,
            title: "Heatpipe",
            detail: "Ống dẫn nhiệt chứa chất lỏng/khí giúp truyền nhiệt nhanh từ đế tản lên lá nhôm.",
            impact: "Tản phổ thông thường 4 heatpipe; tản cao cấp có thể 6–8 heatpipe hoặc hơn.",
        },
        paste: {
            icon: <Puzzle />,
            title: "Thermal Paste",
            detail: "Keo tản nhiệt nằm giữa CPU và đế tản, lấp khe siêu nhỏ để truyền nhiệt tốt hơn.",
            impact: "Không có keo, keo khô hoặc bôi sai có thể làm nhiệt CPU tăng mạnh.",
        },
        airflow: {
            icon: <Wind />,
            title: "Case Airflow",
            detail: "Tản CPU/GPU đưa nhiệt ra không khí; case fan phải đưa khí nóng ra khỏi case.",
            impact: "Tản CPU tốt nhưng case bí gió thì khí nóng vẫn quay vòng bên trong.",
        },
    };
    const [active, setActive] = useState("throttle");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số và thuật ngữ quan trọng"
                icon={<Puzzle />}
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

function CoolingChainGuide() {
    const rows = [
        [
            "CPU/GPU nóng",
            "Nguồn nhiệt ban đầu",
            "Tải càng nặng, nhiệt càng nhiều",
        ],
        [
            "Keo tản nhiệt",
            "Truyền nhiệt sang đế tản",
            "Thiếu/khô/bôi sai làm nhiệt tăng",
        ],
        [
            "Đế tản + heatpipe",
            "Kéo nhiệt ra khỏi chip",
            "Tản yếu không xử lý kịp tải cao",
        ],
        [
            "Heatsink/radiator",
            "Phân tán nhiệt ra diện tích lớn",
            "Cần đủ kích thước và gió",
        ],
        ["Quạt", "Thổi gió qua lá tản", "Quạt yếu/bụi làm giảm hiệu quả"],
        [
            "Case airflow",
            "Đưa khí nóng ra khỏi case",
            "Case bí làm toàn hệ thống nóng",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="cyan"
                title="Một mắt xích yếu làm cả hệ thống nóng"
                icon={<Workflow />}
            />
            <DataTable
                title="Chuỗi tản nhiệt hoàn chỉnh"
                rows={rows}
                headers={["Mắt xích", "Vai trò", "Rủi ro nếu kém"]}
                accent="cyan"
            />
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Fan />,
            title: "Cooler Master Hyper 212 Halo",
            subtitle: "Tản khí phổ thông 120mm",
            color: "sky",
            points: [
                "4 heatpipe",
                "Quạt 120mm",
                "Hỗ trợ socket mới như LGA1700/AM5 tùy bản",
                "Hợp Core i3/i5 phổ thông, Ryzen 5",
                "Giá thường dễ tiếp cận",
            ],
            lesson: "Nâng từ stock cooler lên tản khí tháp 120mm thường cải thiện nhiệt độ và tiếng ồn rõ rệt.",
        },
        {
            icon: <Layers3 />,
            title: "Thermalright Peerless Assassin 120 SE",
            subtitle: "Tản khí dual-tower hiệu năng/giá tốt",
            color: "blue",
            points: [
                "Dual-tower",
                "2 quạt 120mm",
                "6 heatpipe",
                "Hợp Ryzen 5/7, Core i5/i7 giới hạn công suất hợp lý",
                "Ít rủi ro hơn AIO vì không có pump",
            ],
            lesson: "Tản khí dual-tower là lựa chọn rất đáng cân nhắc khi muốn mát, bền và tiết kiệm.",
        },
        {
            icon: <Gauge />,
            title: "ARCTIC Liquid Freezer III 360",
            subtitle: "AIO 360mm cho CPU mạnh",
            color: "purple",
            points: [
                "Radiator 360mm",
                "Có pump",
                "Hợp CPU nhiều nhân",
                "Cần case hỗ trợ radiator 360mm",
                "Hợp render/compile/gaming + streaming",
            ],
            lesson: "AIO 360mm phù hợp khi CPU tải nặng lâu và case đủ chỗ, nhưng cần tính tuổi thọ pump và bảo trì.",
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

function TroubleshootingLab() {
    const scenarios = {
        fps: {
            icon: <Gamepad2 />,
            title: "FPS tụt sau vài phút",
            answer: "Có thể CPU/GPU đang thermal throttling. Theo dõi nhiệt bằng HWiNFO/MSI Afterburner, kiểm tra quạt, bụi, airflow và fan curve.",
            color: "orange",
        },
        render: {
            icon: <Cpu />,
            title: "Render chậm dần",
            answer: "CPU tải 100% lâu dễ lộ tản yếu. Cân nhắc tản khí dual-tower hoặc AIO 280/360mm nếu case hỗ trợ.",
            color: "blue",
        },
        paste: {
            icon: <Puzzle />,
            title: "CPU nóng bất thường",
            answer: "Kiểm tra tản có ép sát không, keo có khô/thiếu không, quạt CPU có quay không và có bóc lớp nilon dưới đế tản chưa.",
            color: "red",
        },
        case: {
            icon: <Wind />,
            title: "Case bí gió",
            answer: "Tản CPU tốt vẫn cần airflow case. Ưu tiên front intake, rear/top exhaust, lọc bụi sạch và không đặt case sát tường.",
            color: "cyan",
        },
        laptop: {
            icon: <Monitor />,
            title: "Laptop nóng/quạt hú",
            answer: "Vệ sinh bụi, kê máy thoáng, thay keo nếu cần và kiểm tra quạt. Laptop nóng hơn desktop nhưng không nên bỏ qua dấu hiệu tụt hiệu năng.",
            color: "purple",
        },
        nvme: {
            icon: <HardDrive />,
            title: "SSD NVMe giảm tốc",
            answer: "SSD NVMe có thể nóng khi copy/render. Dùng heatsink mainboard, đảm bảo airflow quanh khe M.2 và tránh bị GPU thổi khí nóng liên tục.",
            color: "emerald",
        },
    };
    const [active, setActive] = useState("fps");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: chẩn đoán tình huống nóng máy"
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
            wrong: "CPU chưa tắt máy thì chưa sao",
            right: "Máy chưa tắt không có nghĩa nhiệt tốt. Trước khi tự tắt, CPU/GPU có thể đã giảm xung, giảm hiệu năng và quạt hú rất to.",
        },
        {
            wrong: "Tản nhiệt càng to càng tốt trong mọi trường hợp",
            right: "Tản phải phù hợp CPU, case, RAM và nhu cầu. CPU 65W không nhất thiết cần AIO đắt; case nhỏ có thể không chứa tản tháp cao.",
        },
        {
            wrong: "Chỉ cần tản CPU tốt, case nào cũng được",
            right: "Tản CPU tốt nhưng case bí gió thì khí nóng vẫn bị giữ lại. Cần tản CPU + airflow case + quạt hợp lý.",
        },
        {
            wrong: "Keo tản nhiệt bôi càng nhiều càng mát",
            right: "Keo chỉ cần vừa đủ lấp khe giữa CPU và đế tản. Quá nhiều không giúp mát hơn đáng kể và có thể tràn bẩn.",
        },
        {
            wrong: "Laptop nóng là bình thường, không cần quan tâm",
            right: "Laptop thường nóng hơn desktop, nhưng nếu quạt hú liên tục, tụt FPS hoặc tự tắt thì cần vệ sinh, thay keo hoặc kiểm tra quạt.",
        },
    ];
    const tips = [
        "Theo dõi nhiệt độ bằng HWiNFO, HWMonitor, MSI Afterburner hoặc FanControl.",
        "PC gaming nên ưu tiên cả tản CPU và airflow case, không chỉ mua tản CPU thật to.",
        "CPU 65W–105W: tản khí tốt thường hợp lý về giá/độ bền.",
        "CPU cao cấp tải nặng lâu: cân nhắc dual-tower lớn hoặc AIO 280/360mm.",
        "Vệ sinh bụi định kỳ mỗi 1–3 tháng nếu phòng nhiều bụi hoặc đặt máy dưới sàn.",
        "Khi thay tản, kiểm tra socket, chiều cao tản, case clearance và RAM clearance.",
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
                        <span className="bg-sky-500/20 text-sky-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-sky-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                Máy tính cần tản nhiệt vì linh kiện sinh nhiệt
                                khi hoạt động
                            </p>
                            <p>
                                CPU/GPU nóng quá → thermal throttling → tụt hiệu
                                năng
                            </p>
                            <br />
                            <p className="text-slate-500"># Chuỗi tản nhiệt</p>
                            <p className="text-slate-300">
                                Chip nóng → Keo → Đế tản → Heatpipe/heatsink
                            </p>
                            <p className="text-slate-300">
                                → Quạt → Airflow case → Khí nóng ra ngoài
                            </p>
                            <br />
                            <p className="text-red-300">
                                Tản CPU tốt nhưng case bí gió thì toàn hệ thống
                                vẫn có thể nóng.
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
        question: "Tại sao máy tính cần tản nhiệt?",
        options: [
            "Vì linh kiện sinh nhiệt khi hoạt động",
            "Vì tản nhiệt làm tăng dung lượng RAM",
            "Vì tản nhiệt thay thế được SSD",
            "Vì tản nhiệt làm màn hình sáng hơn",
        ],
        correct: 0,
        explanation:
            "Khi CPU/GPU và các mạch điện hoạt động, một phần điện năng chuyển thành nhiệt. Tản nhiệt đưa nhiệt ra khỏi linh kiện.",
    },
    {
        question: "Thermal Throttling là gì?",
        options: [
            "Máy tự tăng dung lượng ổ cứng",
            "CPU/GPU tự giảm xung khi quá nóng để bảo vệ linh kiện",
            "RAM tự chạy nhanh hơn",
            "Quạt tự biến thành nguồn điện",
        ],
        correct: 1,
        explanation:
            "Thermal throttling là cơ chế giảm xung nhịp khi quá nóng để tránh hư hỏng.",
    },
    {
        question: "Keo tản nhiệt nằm ở đâu?",
        options: [
            "Giữa CPU và đế tản nhiệt",
            "Giữa màn hình và bàn phím",
            "Trong ổ cứng HDD",
            "Bên trong dây nguồn AC",
        ],
        correct: 0,
        explanation:
            "Thermal paste nằm giữa CPU và mặt đế tản để lấp khe siêu nhỏ và truyền nhiệt tốt hơn.",
    },
    {
        question: "Tản CPU tốt nhưng case bí gió thì điều gì có thể xảy ra?",
        options: [
            "Máy vẫn có thể nóng vì khí nóng không thoát được",
            "CPU tự có thêm nhân",
            "GPU tăng VRAM",
            "SSD không cần điện nữa",
        ],
        correct: 0,
        explanation:
            "Cooler chỉ đưa nhiệt ra khỏi CPU; case fan và airflow phải đẩy khí nóng ra ngoài.",
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
                    <strong className="text-sky-400">
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
                <span className="text-sky-400">
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
                        className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu vì sao máy tính cần tản nhiệt. Tiếp theo là tản
                nhiệt khí Air Cooling — loại tản CPU phổ biến, bền, dễ lắp và
                phù hợp với đa số máy tính để bàn.
            </p>
            <Link
                to="/phan-9-2"
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-sky-500/20"
            >
                Bài tiếp theo: 9.2 — Tản nhiệt khí Air Cooling{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "sky" }) {
    const colorMap = {
        sky: "bg-sky-500/20 text-sky-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-sky-500/10 border-sky-400/50" : softBorder(color)}`}
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
        sky: "bg-sky-500/10 text-sky-300 border border-sky-500/20",
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
    return map[color] || map.sky;
}
function softBorder(color) {
    const map = {
        sky: "bg-sky-500/5 border-sky-500/20",
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
    return map[color] || map.sky;
}
function textColor(color) {
    const map = {
        sky: "text-sky-300",
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
    return map[color] || "text-sky-300";
}
