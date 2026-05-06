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
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                            <Wind className="text-cyan-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 8: Case — Vỏ máy tính
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                        Bài 8.3
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <RoomAnalogy />
                <AirflowPathSimulator />
                <FanDirectionExplorer />
                <PressureExplorer />
                <FrontPanelGuide />
                <SpecsExplorer />
                <FanLayoutGuide />
                <MonitoringGuide />
                <RealExamples />
                <AirflowLab />
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
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
                        <BookOpen size={16} /> Phần 8: Case — Airflow
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Hệ thống tản nhiệt
                        <span className="block text-cyan-400">
                            và luồng gió Airflow
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        PC mạnh nhưng quạt hú, nóng và tụt FPS thường không chỉ
                        do linh kiện. Luồng gió trong case kém có thể giữ khí
                        nóng lại quanh CPU, GPU, SSD và VRM.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Wind size={16} />} text="Airflow" />
                        <Tag icon={<Fan size={16} />} text="Intake / Exhaust" />
                        <Tag icon={<Gauge size={16} />} text="Pressure" />
                        <Tag
                            icon={<Thermometer size={16} />}
                            text="Temperature"
                        />
                        <Tag
                            icon={<ShieldCheck size={16} />}
                            text="Dust Filter"
                        />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Fan />}
                            label="Front"
                            desc="Intake"
                            color="cyan"
                            highlight
                        />
                        <HeroTile
                            icon={<Cpu />}
                            label="CPU"
                            desc="Nhận gió mát"
                            color="blue"
                        />
                        <HeroTile
                            icon={<Gamepad2 />}
                            label="GPU"
                            desc="Nguồn nhiệt lớn"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Thermometer />}
                            label="Rear/Top"
                            desc="Exhaust"
                            color="red"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Sơ đồ phổ biến</p>
                        <p>Front intake → CPU/GPU</p>
                        <p className="text-cyan-300">→ Rear/Top exhaust</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu airflow là luồng không khí di chuyển bên trong case: hút gió mát vào, đưa qua linh kiện nóng và xả khí nóng ra ngoài.",
        "Phân biệt intake fan và exhaust fan, biết vị trí phổ biến: front/bottom intake, rear/top exhaust.",
        "Hiểu positive pressure, negative pressure và neutral pressure; biết vì sao người mới nên ưu tiên positive pressure nhẹ.",
        "Đọc được thông số quạt: kích thước 120/140/160mm, RPM, CFM, static pressure, fan curve và lọc bụi.",
        "Biết bố trí quạt cơ bản, tránh lỗi lắp sai hướng, case mặt trước kín, lọc bụi bẩn và dây chắn luồng gió.",
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
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center font-bold mb-4">
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
            icon: <Fan />,
            title: "Hút gió mát",
            desc: "Quạt intake đưa không khí mát từ ngoài vào case, thường ở mặt trước hoặc mặt dưới.",
            color: "cyan",
        },
        {
            icon: <Cpu />,
            title: "Đi qua linh kiện nóng",
            desc: "Gió mát đi qua CPU, GPU, SSD, VRM và mainboard để mang nhiệt đi.",
            color: "blue",
        },
        {
            icon: <Thermometer />,
            title: "Xả khí nóng",
            desc: "Quạt rear/top đẩy khí nóng ra ngoài, tránh tích tụ nhiệt trong case.",
            color: "orange",
        },
        {
            icon: <ShieldCheck />,
            title: "Giữ máy mát, êm, bền",
            desc: "Airflow tốt giúp quạt quay chậm hơn, ít ồn hơn và linh kiện bền hơn.",
            color: "emerald",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Airflow là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Airflow</strong> là luồng
                    không khí di chuyển bên trong vỏ máy tính. Một case airflow
                    tốt không nhất thiết phải có thật nhiều quạt; quan trọng là
                    gió đi đúng hướng, không bị cản và không tạo vòng xoáy khí
                    nóng bên trong.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <RoleCard key={c.title} {...c} />
                    ))}
                </div>
                <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Mặt trước case → gió mát vào → CPU / GPU / Mainboard → mặt
                    sau / mặt trên → khí nóng ra ngoài
                </div>
            </div>
        </section>
    );
}

function RoomAnalogy() {
    const cards = [
        {
            icon: <Wind />,
            title: "Case = căn phòng",
            desc: "Nếu phòng không có đường gió, không khí nóng và bí sẽ tích tụ.",
            color: "cyan",
        },
        {
            icon: <Fan />,
            title: "Intake = cửa sổ",
            desc: "Đưa gió mát vào phòng, thường đặt ở mặt trước hoặc đáy case.",
            color: "blue",
        },
        {
            icon: <Thermometer />,
            title: "Exhaust = quạt thông gió",
            desc: "Đẩy khí nóng ra ngoài, thường đặt phía sau và trên nóc case.",
            color: "orange",
        },
        {
            icon: <AlertTriangle />,
            title: "Sai hướng = phòng bí",
            desc: "Chỉ có cửa vào hoặc chỉ có cửa ra đều làm airflow kém hiệu quả.",
            color: "red",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: căn phòng và quạt thông gió"
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

function AirflowPathSimulator() {
    const flows = {
        basic: {
            title: "Airflow cơ bản",
            color: "cyan",
            steps: [
                {
                    icon: <Fan />,
                    title: "Quạt trước hút vào",
                    desc: "2–3 quạt front intake đưa không khí mát vào case.",
                },
                {
                    icon: <Gamepad2 />,
                    title: "Gió đi qua GPU",
                    desc: "GPU thường là nguồn nhiệt lớn nhất trong PC gaming.",
                },
                {
                    icon: <Cpu />,
                    title: "Gió hỗ trợ CPU cooler",
                    desc: "Tản CPU nhận không khí mát hơn, quạt CPU không cần hú quá mạnh.",
                },
                {
                    icon: <Thermometer />,
                    title: "Quạt sau xả ra",
                    desc: "Rear fan đẩy khí nóng ra khỏi case.",
                },
                {
                    icon: <Wind />,
                    title: "Top fans xả thêm",
                    desc: "Quạt trên nóc thường xả khí nóng vì khí nóng có xu hướng bay lên.",
                },
            ],
        },
        bad: {
            title: "Airflow kém",
            color: "red",
            steps: [
                {
                    icon: <XCircle />,
                    title: "Mặt trước quá kín",
                    desc: "Quạt front khó lấy gió, GPU và CPU nhận ít khí mát.",
                },
                {
                    icon: <Fan />,
                    title: "Quạt lắp cùng hướng sai",
                    desc: "Tất cả quạt cùng hút vào hoặc cùng xả ra làm đường gió mất cân bằng.",
                },
                {
                    icon: <Thermometer />,
                    title: "Khí nóng bị giữ lại",
                    desc: "Nhiệt tích tụ quanh GPU, CPU, VRM và SSD.",
                },
                {
                    icon: <AlertTriangle />,
                    title: "Quạt hú và tụt hiệu năng",
                    desc: "CPU/GPU nóng khiến quạt tăng tốc, máy ồn hơn và có thể giảm xung.",
                },
            ],
        },
        clean: {
            title: "Airflow lâu dài",
            color: "emerald",
            steps: [
                {
                    icon: <ShieldCheck />,
                    title: "Lọc bụi sạch",
                    desc: "Lọc bụi ở vị trí hút gió giúp giảm bụi vào case.",
                },
                {
                    icon: <Search />,
                    title: "Dây không chắn gió",
                    desc: "Giấu dây sau khay mainboard, không để dây trước quạt hút hoặc chạm cánh quạt.",
                },
                {
                    icon: <Gauge />,
                    title: "Fan curve hợp lý",
                    desc: "Máy êm khi nhẹ tải và tăng quạt khi chơi game/render.",
                },
                {
                    icon: <Sparkles />,
                    title: "Máy mát, êm, bền",
                    desc: "Airflow tốt giúp giữ nhiệt độ ổn định theo thời gian.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("basic");
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
                title="Luồng gió trong case hoạt động thế nào?"
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

function FanDirectionExplorer() {
    const rows = [
        [
            "Intake Fan",
            "Hút gió vào",
            "Mặt trước, mặt dưới, đôi khi mặt hông",
            "Đưa không khí mát vào case",
        ],
        [
            "Exhaust Fan",
            "Xả gió ra",
            "Mặt sau, mặt trên",
            "Đẩy khí nóng ra ngoài",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="cyan"
                title="Intake và Exhaust"
                icon={<Fan />}
            />
            <DataTable
                title="Hai hướng quạt cơ bản"
                rows={rows}
                headers={[
                    "Loại quạt",
                    "Ý nghĩa",
                    "Vị trí thường dùng",
                    "Tác dụng",
                ]}
                accent="cyan"
            />
            <div className="grid md:grid-cols-2 gap-4">
                <RuleCard
                    label="Intake = In"
                    value="Quạt hút gió mát vào, thường ở mặt trước hoặc mặt dưới case."
                    color="blue"
                />
                <RuleCard
                    label="Exhaust = Exit"
                    value="Quạt xả khí nóng ra, thường ở mặt sau hoặc mặt trên case."
                    color="orange"
                />
            </div>
        </section>
    );
}

function PressureExplorer() {
    const pressures = {
        positive: {
            icon: <ShieldCheck />,
            title: "Positive Pressure",
            color: "emerald",
            setup: "Quạt hút vào mạnh/nhiều hơn quạt xả",
            good: "Ít bụi hơn nếu có lọc bụi, dễ kiểm soát đường gió",
            bad: "Nếu xả yếu, khí nóng có thể thoát chậm",
            fit: "Đa số PC gia đình, phòng nhiều bụi",
        },
        negative: {
            icon: <Wind />,
            title: "Negative Pressure",
            color: "orange",
            setup: "Quạt xả mạnh/nhiều hơn quạt hút",
            good: "Đẩy khí nóng ra nhanh",
            bad: "Dễ hút bụi qua khe hở không có lọc bụi",
            fit: "PC cần xả nhiệt mạnh, nhưng phải vệ sinh thường xuyên",
        },
        neutral: {
            icon: <Gauge />,
            title: "Neutral Pressure",
            color: "blue",
            setup: "Hút và xả gần cân bằng",
            good: "Cân bằng giữa nhiệt độ và bụi",
            bad: "Khó đạt chính xác",
            fit: "PC tối ưu kỹ, người có kinh nghiệm",
        },
    };
    const [active, setActive] = useState("positive");
    const item = pressures[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Áp suất không khí trong case"
                icon={<Gauge />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {Object.entries(pressures).map(([key, p]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(p.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(p.icon, { size: 20 })}{" "}
                                {p.title}
                            </div>
                            <p className="text-xs opacity-75 mt-1">{p.setup}</p>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className={`${textColor(item.color)} font-semibold`}>
                            {item.setup}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-3">
                        <InfoCard
                            label="Ưu điểm"
                            value={item.good}
                            color={item.color}
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
                <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-emerald-300">
                        Gợi ý cho người mới:
                    </strong>{" "}
                    ưu tiên positive pressure nhẹ, ví dụ 2–3 quạt hút trước + 1
                    quạt xả sau.
                </div>
            </div>
        </section>
    );
}

function FrontPanelGuide() {
    const rows = [
        [
            "Mesh Front",
            "Mặt trước dạng lưới thoáng",
            "Airflow tốt, dễ hút gió mát",
            "Có thể bụi hơn nếu lọc bụi kém",
            "Gaming, GPU rời, máy tải nặng",
        ],
        [
            "Solid Front",
            "Mặt trước kín, nhựa/kính/kim loại",
            "Đẹp, có thể yên tĩnh hơn",
            "Hút gió kém hơn, dễ nóng hơn",
            "PC nhẹ, ưu tiên thẩm mỹ",
        ],
        [
            "Side Intake",
            "Hút gió từ cạnh/hông",
            "Có thể vừa đẹp vừa thoáng nếu thiết kế tốt",
            "Hiệu quả tùy case",
            "Case hiện đại, dual-chamber",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="blue"
                title="Mesh front, solid front và side intake"
                icon={<Layers3 />}
            />
            <DataTable
                title="Mặt trước case ảnh hưởng airflow rất lớn"
                rows={rows}
                headers={[
                    "Kiểu mặt trước",
                    "Đặc điểm",
                    "Ưu điểm",
                    "Nhược điểm",
                    "Phù hợp",
                ]}
                accent="blue"
            />
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-blue-300">Gaming/GPU rời mạnh:</strong>{" "}
                case mặt lưới mesh thường an toàn hơn vì GPU cần nhiều gió mát
                liên tục.
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        fanCount: {
            icon: <Fan />,
            title: "Số lượng quạt",
            detail: "Case có thể hỗ trợ nhiều vị trí như front, top, rear, bottom, side.",
            impact: "Không phải lắp càng nhiều càng tốt. Bố trí 2–3 front intake + 1 rear exhaust đã đủ tốt cho đa số PC.",
        },
        size: {
            icon: <Gauge />,
            title: "120/140/160mm",
            detail: "120mm phổ biến nhất; 140mm lớn hơn, có thể êm hơn; 160/180mm đẩy nhiều gió nhưng kén case.",
            impact: "Quạt lớn có thể tạo cùng lượng gió ở RPM thấp hơn, nên có thể êm hơn nếu thiết kế tốt.",
        },
        rpm: {
            icon: <Settings />,
            title: "RPM",
            detail: "Revolutions Per Minute: số vòng quay mỗi phút của quạt.",
            impact: "RPM cao thường đẩy nhiều gió hơn nhưng cũng ồn và rung hơn nếu fan curve đặt quá mạnh.",
        },
        cfm: {
            icon: <Wind />,
            title: "CFM",
            detail: "Cubic Feet per Minute: lượng không khí quạt có thể đẩy trong một phút.",
            impact: "CFM cao hữu ích cho quạt case ở vị trí thoáng như intake/exhaust không bị cản nhiều.",
        },
        static: {
            icon: <Zap />,
            title: "Static Pressure",
            detail: "Khả năng đẩy gió qua vật cản như lọc bụi, mesh dày, radiator, heatsink.",
            impact: "Radiator AIO và mặt trước bị cản nhiều nên ưu tiên quạt static pressure tốt.",
        },
        curve: {
            icon: <Workflow />,
            title: "Fan Curve",
            detail: "Cách tốc độ quạt thay đổi theo nhiệt độ CPU/GPU/mainboard.",
            impact: "Fan curve tốt giúp máy êm khi nhẹ tải và tăng tốc khi chơi game/render mà không hú bất ngờ.",
        },
        dust: {
            icon: <ShieldCheck />,
            title: "Lọc bụi",
            detail: "Lưới lọc bụi thường ở mặt trước, mặt trên, đáy PSU hoặc mặt hông.",
            impact: "Lọc bụi bẩn làm gió yếu dần, nên vệ sinh 1–3 tháng/lần tùy môi trường.",
        },
    };
    const [active, setActive] = useState("static");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="yellow"
                title="Thông số kỹ thuật quan trọng của airflow"
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

function FanLayoutGuide() {
    const rows = [
        [
            "Cơ bản tốt cho đa số PC",
            "2–3 quạt trước hút vào + 1 quạt sau xả ra",
            "Dễ lắp, dễ hiểu, hiệu quả",
        ],
        [
            "Gaming nóng hơn",
            "3 quạt trước hút vào + 1 sau xả + 1–2 trên xả",
            "Hỗ trợ GPU/CPU tải nặng",
        ],
        [
            "Case nhiều bụi",
            "Positive pressure nhẹ + lọc bụi sạch",
            "Giảm bụi lọt qua khe hở",
        ],
        [
            "AIO radiator",
            "Radiator cần quạt static pressure tốt",
            "Đẩy gió qua radiator hiệu quả hơn",
        ],
        [
            "Case nhỏ",
            "Ít quạt nhưng đường gió rõ",
            "Tránh dây chắn gió và khí nóng vòng lại",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="emerald"
                title="Công thức bố trí quạt dễ dùng"
                icon={<PackageCheck />}
            />
            <DataTable
                title="Layout quạt thực chiến"
                rows={rows}
                headers={["Tình huống", "Bố trí gợi ý", "Lý do"]}
                accent="emerald"
            />
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                Front = Intake
                <br />
                Rear = Exhaust
                <br />
                Top = Exhaust
                <br />
                <span className="text-emerald-300">
                    3 intake + 1–2 exhaust = positive pressure nhẹ
                </span>
            </div>
        </section>
    );
}

function MonitoringGuide() {
    const software = [
        ["HWMonitor", "Xem nhiệt độ CPU, GPU, mainboard"],
        ["HWiNFO", "Xem cảm biến chi tiết"],
        ["MSI Afterburner", "Theo dõi GPU, FPS, nhiệt độ khi chơi game"],
        ["FanControl", "Tùy chỉnh fan curve nâng cao"],
    ];
    const temps = [
        ["CPU", "Khoảng 60–85°C khi tải nặng"],
        ["GPU", "Khoảng 60–83°C khi chơi game"],
        ["SSD NVMe", "Nên giữ dưới khoảng 70°C nếu có thể"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="purple"
                title="Theo dõi nhiệt độ và chỉnh fan curve"
                icon={<Thermometer />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="Phần mềm theo dõi"
                    rows={software}
                    headers={["Phần mềm", "Dùng để làm gì"]}
                    accent="purple"
                />
                <DataTable
                    title="Mốc nhiệt độ tham khảo"
                    rows={temps}
                    headers={["Linh kiện", "Nhiệt độ thường ổn"]}
                    accent="orange"
                />
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-purple-300">Lưu ý:</strong> mốc nhiệt độ
                chỉ mang tính tham khảo vì mỗi CPU/GPU có giới hạn khác nhau.
                Nếu máy thường xuyên rất nóng và quạt hú lớn, hãy kiểm tra
                airflow.
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <PackageCheck />,
            title: "Corsair 4000D Airflow",
            subtitle: "Mid Tower airflow phổ thông",
            color: "cyan",
            points: [
                "Mặt trước thoáng",
                "Hỗ trợ tối đa 6 quạt 120mm hoặc 4 quạt 140mm",
                "Radiator 360mm phía trước",
                "Radiator 280mm nóc case",
                "Hợp Core i5/Ryzen 5 + RTX 4060/4070",
            ],
            lesson: "Case airflow tốt cần đủ quạt hút/xả để phát huy hiệu quả, không chỉ có mặt trước thoáng.",
        },
        {
            icon: <Fan />,
            title: "Lian Li LANCOOL 216",
            subtitle: "Airflow mạnh sẵn quạt lớn",
            color: "emerald",
            points: [
                "Mặt lưới thoáng",
                "2 quạt trước 160mm",
                "1 quạt sau 140mm PWM",
                "Hợp GPU nóng hơn",
                "Hợp Core i7/Ryzen 7 + RTX 4070 Ti/4080 class",
            ],
            lesson: "Case có quạt lớn sẵn giúp giảm chi phí mua quạt thêm và hỗ trợ cấu hình sinh nhiệt cao.",
        },
        {
            icon: <Sparkles />,
            title: "NZXT H5 Flow",
            subtitle: "Compact Mid Tower airflow",
            color: "blue",
            points: [
                "Case gọn, đẹp",
                "Mặt trước mesh",
                "Hợp gaming tầm trung",
                "Ryzen 5/Core i5",
                "RTX 4060/RTX 4070",
            ],
            lesson: "Mặt trước mesh cần quạt intake đủ tốt; nếu bản case ít quạt sẵn, nên bổ sung quạt trước.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
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

function AirflowLab() {
    const scenarios = {
        basic: {
            icon: <Fan />,
            title: "Build mới",
            answer: "Bắt đầu với 2–3 quạt trước hút vào và 1 quạt sau xả ra. Theo dõi nhiệt độ, rồi thêm top exhaust nếu CPU/GPU nóng.",
            color: "cyan",
        },
        dusty: {
            icon: <ShieldCheck />,
            title: "Phòng nhiều bụi",
            answer: "Ưu tiên positive pressure nhẹ, lọc bụi ở vị trí intake và vệ sinh lọc bụi 1–3 tháng/lần; nếu nuôi thú cưng thì thường xuyên hơn.",
            color: "emerald",
        },
        hotGpu: {
            icon: <Gamepad2 />,
            title: "GPU nóng",
            answer: "Ưu tiên case mesh front, quạt trước intake mạnh, dây không chắn trước GPU, có rear/top exhaust để thoát khí nóng.",
            color: "orange",
        },
        aio: {
            icon: <Thermometer />,
            title: "Dùng AIO",
            answer: "Radiator cần quạt static pressure tốt. Kiểm tra vị trí gắn front/top và hướng gió sao cho không làm khí nóng mắc kẹt trong case.",
            color: "blue",
        },
        noise: {
            icon: <Gauge />,
            title: "Máy ồn",
            answer: "Chỉnh fan curve mềm hơn ở nhiệt thấp, dùng quạt lớn hơn nếu case hỗ trợ, vệ sinh lọc bụi và kiểm tra xem case có bị bí gió không.",
            color: "purple",
        },
        cable: {
            icon: <PlugZap />,
            title: "Dây rối",
            answer: "Đi dây sau khay mainboard, dùng dây rút/velcro, không để dây chắn quạt front intake hoặc chạm cánh quạt GPU/case fan.",
            color: "red",
        },
    };
    const [active, setActive] = useState("basic");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="12"
                color="blue"
                title="Lab: tối ưu airflow theo tình huống"
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
            wrong: "Lắp tất cả quạt cùng thổi vào trong",
            right: "Phải có cả intake và exhaust. Front hút vào, rear/top xả ra là bố trí dễ dùng nhất.",
        },
        {
            wrong: "Lắp quạt trên nóc hút gió vào",
            right: "Top fans thường nên exhaust vì khí nóng có xu hướng bay lên. Người mới nên dùng top/rear là xả.",
        },
        {
            wrong: "Case đẹp nhưng mặt trước quá kín",
            right: "Mặt kính/kín đẹp nhưng có thể hút gió kém. PC gaming nên ưu tiên mesh front hoặc khe thoáng tốt.",
        },
        {
            wrong: "Không vệ sinh lọc bụi",
            right: "Lọc bụi bẩn làm gió yếu dần, CPU/GPU nóng và quạt hú. Nên vệ sinh 1–3 tháng/lần tùy môi trường.",
        },
        {
            wrong: "Dây nguồn chắn luồng gió",
            right: "Giấu dây sau khay mainboard, dùng dây rút/velcro, không để dây trước quạt hút hoặc gần cánh quạt.",
        },
        {
            wrong: "Mua thật nhiều quạt ngay từ đầu",
            right: "Không cần quá nhiều quạt. Bắt đầu với layout cơ bản, đo nhiệt độ rồi nâng cấp nếu cần.",
        },
    ];
    const tips = [
        "Công thức dễ nhất: 2–3 front intake + 1 rear exhaust + 1–2 top exhaust nếu cần.",
        "Ưu tiên positive pressure nhẹ để giảm bụi: hút vào hơi nhiều hơn xả ra.",
        "Nhìn mũi tên trên thân quạt trước khi lắp để biết hướng gió.",
        "Quạt static pressure hợp radiator/lọc bụi dày; quạt airflow hợp vị trí thoáng.",
        "Theo dõi nhiệt độ bằng HWiNFO, HWMonitor, MSI Afterburner hoặc FanControl.",
        "Nếu máy nóng dần sau vài tháng, hãy kiểm tra lọc bụi trước khi mua thêm quạt.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="13"
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
                        <span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">
                            14
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
                                Airflow = hút gió mát vào → đi qua linh kiện
                                nóng → xả khí nóng ra
                            </p>
                            <br />
                            <p className="text-slate-500"># Layout dễ dùng</p>
                            <p className="text-slate-300">Front = Intake</p>
                            <p className="text-slate-300">Rear = Exhaust</p>
                            <p className="text-slate-300">Top = Exhaust</p>
                            <br />
                            <p className="text-slate-500"># Người mới</p>
                            <p className="text-slate-300">
                                2–3 front intake + 1 rear exhaust
                            </p>
                            <p className="text-slate-300">
                                Positive pressure nhẹ để giảm bụi
                            </p>
                            <br />
                            <p className="text-red-300">
                                Case đẹp nhưng bí gió có thể làm CPU/GPU nóng,
                                quạt ồn và hiệu năng giảm.
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
        question:
            "Trong case PC phổ thông, quạt mặt trước thường nên làm nhiệm vụ gì?",
        options: [
            "Xả khí nóng ra ngoài",
            "Hút gió mát vào trong",
            "Làm nguồn điện mạnh hơn",
            "Tăng dung lượng RAM",
        ],
        correct: 1,
        explanation:
            "Quạt mặt trước thường là intake fan, có nhiệm vụ hút gió mát từ ngoài vào case.",
    },
    {
        question: "Quạt sau case thường nên lắp theo hướng nào?",
        options: [
            "Hút gió vào",
            "Xả khí nóng ra ngoài",
            "Không cần quan tâm hướng gió",
            "Thổi vào PSU",
        ],
        correct: 1,
        explanation:
            "Quạt sau case thường là exhaust fan, đẩy khí nóng ra ngoài.",
    },
    {
        question: "Positive pressure nghĩa là gì?",
        options: [
            "Quạt xả nhiều hơn quạt hút",
            "Quạt hút vào nhiều/mạnh hơn quạt xả ra",
            "Không có quạt nào hoạt động",
            "Chỉ dùng tản nhiệt nước",
        ],
        correct: 1,
        explanation:
            "Positive pressure là khi intake mạnh/nhiều hơn exhaust, giúp giảm bụi lọt qua khe hở nếu có lọc bụi tốt.",
    },
    {
        question: "Case mặt trước dạng mesh thường có lợi thế gì?",
        options: [
            "Hút gió tốt hơn",
            "Làm GPU có thêm VRAM",
            "Làm SSD tăng dung lượng",
            "Thay thế được tản nhiệt CPU",
        ],
        correct: 0,
        explanation:
            "Mesh front giúp quạt mặt trước hút gió mát vào dễ hơn, thường có airflow tốt hơn mặt trước kín.",
    },
    {
        question: "Static pressure cao hữu ích nhất khi nào?",
        options: [
            "Khi đẩy gió qua radiator hoặc lọc bụi dày",
            "Khi tăng dung lượng RAM",
            "Khi thay thế PSU",
            "Khi tắt toàn bộ quạt",
        ],
        correct: 0,
        explanation:
            "Static pressure là khả năng đẩy gió qua vật cản như radiator, lọc bụi, mesh dày hoặc heatsink.",
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
                Bạn đã hiểu airflow và cách bố trí quạt trong case. Tiếp theo là
                vật liệu và thiết kế vỏ máy: thép, nhôm, kính cường lực — vì
                ngoài luồng gió, chất liệu và thiết kế case cũng ảnh hưởng đến
                độ bền, trọng lượng, độ ồn và thẩm mỹ.
            </p>
            <Link
                to="/phan-8-4"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Bài tiếp theo: 8.4 — Vật liệu và thiết kế vỏ máy{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
    const colorMap = {
        cyan: "bg-cyan-500/20 text-cyan-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        blue: "bg-blue-500/20 text-blue-300",
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
function InfoCard({ label, value, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-5`}>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                {label}
            </p>
            <p className="text-white font-bold leading-relaxed text-sm">
                {value}
            </p>
        </div>
    );
}
function RuleCard({ label, value, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-5`}>
            <p className={`${textColor(color)} font-bold text-sm mb-2`}>
                {label}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
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
function badgeColor(color) {
    const map = {
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.cyan;
}
function softBorder(color) {
    const map = {
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.cyan;
}
function textColor(color) {
    const map = {
        cyan: "text-cyan-300",
        yellow: "text-yellow-300",
        blue: "text-blue-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-cyan-300";
}
