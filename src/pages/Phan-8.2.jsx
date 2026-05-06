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
    Home,
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
    Workflow,
    XCircle,
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
                                Phần 8: Case — Vỏ máy tính
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-indigo-300 bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/20">
                        Bài 8.2
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <HomeSizeAnalogy />
                <SizeImpactSimulator />
                <CaseSizeExplorer />
                <ComparisonMatrix />
                <MotherboardCompatibility />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-indigo-300">
                        <BookOpen size={16} /> Phần 8: Case — Kích thước vỏ máy
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Phân loại case
                        <span className="block text-indigo-400">
                            theo kích thước
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Case to hay nhỏ không chỉ là thẩm mỹ. Kích thước case
                        quyết định mainboard lắp được, GPU dài bao nhiêu vừa,
                        tản nhiệt nào dùng được, số quạt, airflow, độ ồn và khả
                        năng nâng cấp.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Home size={16} />} text="Full Tower" />
                        <Tag
                            icon={<PackageCheck size={16} />}
                            text="Mid Tower"
                        />
                        <Tag
                            icon={<Monitor size={16} />}
                            text="Mini Tower / mATX"
                        />
                        <Tag
                            icon={<Sparkles size={16} />}
                            text="Mini-ITX / SFF"
                        />
                        <Tag
                            icon={<Gamepad2 size={16} />}
                            text="GPU Clearance"
                        />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Home />}
                            label="Full Tower"
                            desc="Rộng nhất"
                            color="blue"
                        />
                        <HeroTile
                            icon={<PackageCheck />}
                            label="Mid Tower"
                            desc="Cân bằng"
                            color="indigo"
                            highlight
                        />
                        <HeroTile
                            icon={<Monitor />}
                            label="mATX"
                            desc="Gọn, đủ dùng"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<Sparkles />}
                            label="Mini-ITX"
                            desc="Siêu nhỏ"
                            color="orange"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Quy tắc dễ nhớ</p>
                        <p>Case lớn thường lắp main nhỏ</p>
                        <p className="text-red-300">
                            Case nhỏ không lắp main lớn
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu phân loại case theo kích thước là cách chia case theo độ lớn và khả năng chứa linh kiện.",
        "Phân biệt Full Tower, Mid Tower, Mini Tower/Micro-ATX và Mini-ITX/SFF theo ưu, nhược điểm và đối tượng phù hợp.",
        "Biết kích thước case ảnh hưởng đến mainboard, GPU, tản CPU, radiator, PSU, ổ cứng, airflow và độ ồn.",
        "Nắm quy tắc tương thích mainboard: E-ATX, ATX, Micro-ATX, Mini-ITX và case tương ứng.",
        "Biết checklist trước khi mua case: motherboard support, GPU clearance, CPU cooler clearance, radiator support, PSU support.",
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
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-300 flex items-center justify-center font-bold mb-4">
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
            icon: <Home />,
            title: "Full Tower",
            desc: "Căn nhà lớn: rộng, thoáng, chứa nhiều linh kiện, nhưng to và nặng.",
            color: "blue",
        },
        {
            icon: <PackageCheck />,
            title: "Mid Tower",
            desc: "Căn hộ vừa đủ: cân bằng giữa kích thước, giá, tản nhiệt và nâng cấp.",
            color: "indigo",
        },
        {
            icon: <Monitor />,
            title: "Mini Tower / mATX",
            desc: "Phòng gọn: tiết kiệm chỗ, đủ dùng, nhưng kén GPU/tản hơn.",
            color: "emerald",
        },
        {
            icon: <Sparkles />,
            title: "Mini-ITX / SFF",
            desc: "Studio nhỏ: đẹp, tối giản, nhưng phải chọn linh kiện rất kỹ.",
            color: "orange",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Phân loại case theo kích thước là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">
                        Phân loại vỏ máy theo kích thước
                    </strong>{" "}
                    là cách chia case dựa trên độ lớn của khung máy, khả năng
                    chứa mainboard, GPU, tản nhiệt, ổ cứng và hệ thống quạt.
                    Case càng lớn thường càng dễ lắp, dễ tản nhiệt, dễ nâng cấp.
                    Case càng nhỏ càng gọn đẹp, nhưng càng kén linh kiện và khó
                    build.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <RoleCard key={c.title} {...c} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function HomeSizeAnalogy() {
    const cards = [
        {
            icon: <Home />,
            title: "Full Tower = nhà lớn",
            desc: "Nhiều phòng, nhiều chỗ chứa đồ, dễ sửa chữa, nhưng chiếm diện tích.",
            color: "blue",
        },
        {
            icon: <PackageCheck />,
            title: "Mid Tower = căn hộ vừa đủ",
            desc: "Đa số nhu cầu đều sống thoải mái, không quá to, không quá chật.",
            color: "indigo",
        },
        {
            icon: <Monitor />,
            title: "mATX = căn hộ nhỏ",
            desc: "Gọn, tiết kiệm, đủ dùng nếu không mang quá nhiều đồ lớn.",
            color: "emerald",
        },
        {
            icon: <Sparkles />,
            title: "Mini-ITX = studio",
            desc: "Đẹp và tối giản, nhưng mọi thứ phải đo đạc và sắp xếp kỹ.",
            color: "orange",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: chọn nhà cho dàn PC"
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

function SizeImpactSimulator() {
    const flows = {
        large: {
            title: "Case lớn",
            color: "blue",
            steps: [
                {
                    icon: <Layers3 />,
                    title: "Không gian rộng",
                    desc: "Dễ lắp main ATX/E-ATX, GPU dài, tản lớn và nhiều ổ cứng.",
                },
                {
                    icon: <PlugZap />,
                    title: "Dễ đi dây",
                    desc: "Khoang sau rộng hơn, dây PSU/GPU/SATA dễ giấu và dễ buộc gọn.",
                },
                {
                    icon: <Fan />,
                    title: "Airflow thoáng hơn",
                    desc: "Nhiều vị trí quạt/radiator giúp khí nóng thoát tốt hơn.",
                },
                {
                    icon: <PackageCheck />,
                    title: "Dễ nâng cấp",
                    desc: "Thêm SSD/HDD, đổi GPU lớn, nâng tản nước dễ hơn.",
                },
                {
                    icon: <AlertTriangle />,
                    title: "Đổi lại",
                    desc: "To, nặng, chiếm diện tích và có thể dư thừa với cấu hình phổ thông.",
                },
            ],
        },
        mid: {
            title: "Mid Tower",
            color: "indigo",
            steps: [
                {
                    icon: <PackageCheck />,
                    title: "Cân bằng",
                    desc: "Đủ rộng cho đa số PC gaming, đồ họa, văn phòng cao cấp.",
                },
                {
                    icon: <Gamepad2 />,
                    title: "Đủ cho đa số GPU",
                    desc: "Hầu hết GPU phổ thông đến cao cấp vừa nếu kiểm tra clearance.",
                },
                {
                    icon: <Fan />,
                    title: "Tản nhiệt tốt nếu thiết kế ổn",
                    desc: "Nhiều mẫu hỗ trợ AIO 240/280/360mm và nhiều quạt.",
                },
                {
                    icon: <Sparkles />,
                    title: "Dễ sống nhất",
                    desc: "Người mới build PC thường nên chọn Mid Tower airflow tốt.",
                },
            ],
        },
        small: {
            title: "Case nhỏ",
            color: "orange",
            steps: [
                {
                    icon: <Sparkles />,
                    title: "Gọn đẹp",
                    desc: "Tiết kiệm không gian, dễ đặt trên bàn, setup tối giản.",
                },
                {
                    icon: <Search />,
                    title: "Phải kiểm tra từng mm",
                    desc: "GPU dài, tản CPU cao, PSU ATX/SFX và radiator đều phải khớp.",
                },
                {
                    icon: <Thermometer />,
                    title: "Nhiệt dễ cao hơn",
                    desc: "Không gian hẹp làm gió khó lưu thông, linh kiện nóng hơn nếu chọn sai.",
                },
                {
                    icon: <XCircle />,
                    title: "Khó nâng cấp",
                    desc: "Ít khe, ít chỗ, khó đi dây, linh kiện Mini-ITX/SFX có thể đắt hơn.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("mid");
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
                title="Vì sao kích thước case quan trọng?"
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

function CaseSizeExplorer() {
    const types = {
        full: {
            icon: <Home />,
            title: "Full Tower",
            color: "blue",
            height: "~55–70cm",
            board: "E-ATX, ATX, mATX, Mini-ITX",
            gpu: "GPU dài, nhiều khe PCIe",
            cooling: "Tản khí lớn, AIO 360/420mm, custom loop",
            storage: "Nhiều HDD/SSD",
            fit: "Workstation, PC cao cấp, custom water cooling",
            good: [
                "Rất dễ lắp ráp",
                "Tản nhiệt tốt",
                "Nâng cấp lâu dài",
                "Hỗ trợ linh kiện lớn",
            ],
            bad: [
                "Chiếm diện tích",
                "Nặng, khó di chuyển",
                "Giá thường cao",
                "Dư thừa với cấu hình phổ thông",
            ],
        },
        mid: {
            icon: <PackageCheck />,
            title: "Mid Tower",
            color: "indigo",
            height: "~40–55cm",
            board: "ATX, mATX, Mini-ITX",
            gpu: "Đủ cho đa số GPU hiện nay",
            cooling: "Tản khí lớn, AIO 240/280/360mm tùy mẫu",
            storage: "Đủ cho 1–2 SSD/HDD hoặc hơn",
            fit: "Gaming, đồ họa, văn phòng cao cấp, người mới build",
            good: [
                "Cân bằng nhất",
                "Dễ mua, dễ build",
                "Giá đa dạng",
                "Đủ cho hầu hết PC gaming",
            ],
            bad: [
                "Không rộng bằng Full Tower",
                "Một số mẫu rẻ airflow/dây chưa tốt",
                "GPU cực lớn vẫn cần kiểm tra",
            ],
        },
        matx: {
            icon: <Monitor />,
            title: "Mini Tower / Micro-ATX",
            color: "emerald",
            height: "Nhỏ hơn Mid Tower",
            board: "mATX, Mini-ITX",
            gpu: "Có thể lắp GPU rời nhưng phải kiểm tra",
            cooling: "Hạn chế hơn Mid Tower",
            storage: "Vừa đủ nhu cầu phổ thông",
            fit: "Văn phòng, học tập, gaming tầm trung",
            good: [
                "Gọn hơn Mid Tower",
                "Giá dễ chịu",
                "Phù hợp bàn nhỏ",
                "Đủ cho cấu hình vừa",
            ],
            bad: [
                "Hạn chế nâng cấp",
                "Ít khe PCIe hơn",
                "Đi dây khó hơn",
                "Một số GPU dài không vừa",
            ],
        },
        itx: {
            icon: <Sparkles />,
            title: "Mini-ITX / SFF",
            color: "orange",
            height: "Rất nhỏ",
            board: "Mini-ITX",
            gpu: "Cần kiểm tra rất kỹ",
            cooling: "Hạn chế tản khí/radiator",
            storage: "Ít ổ hơn",
            fit: "Setup tối giản, PC để bàn nhỏ, người có kinh nghiệm",
            good: [
                "Rất gọn",
                "Đẹp, tối giản",
                "Dễ đặt trên bàn",
                "Hợp phòng nhỏ",
            ],
            bad: [
                "Khó build",
                "Dễ nóng nếu chọn sai",
                "Linh kiện thường đắt",
                "Nâng cấp khó hơn",
            ],
        },
    };
    const [active, setActive] = useState("mid");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="indigo"
                title="Explorer: từng loại case theo kích thước"
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
                            <p className="text-xs opacity-75 mt-1">{t.board}</p>
                        </button>
                    ))}
                </div>
                <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-2">
                            {item.title}
                        </h3>
                        <p
                            className={`${textColor(item.color)} font-semibold mb-4`}
                        >
                            {item.height}
                        </p>
                        <div className="space-y-3 text-sm text-slate-300">
                            <p>
                                <strong className="text-white">
                                    Mainboard:
                                </strong>{" "}
                                {item.board}
                            </p>
                            <p>
                                <strong className="text-white">GPU:</strong>{" "}
                                {item.gpu}
                            </p>
                            <p>
                                <strong className="text-white">
                                    Tản nhiệt:
                                </strong>{" "}
                                {item.cooling}
                            </p>
                            <p>
                                <strong className="text-white">Ổ cứng:</strong>{" "}
                                {item.storage}
                            </p>
                        </div>
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
                        <div className="md:col-span-2 bg-slate-950 border border-slate-800 rounded-2xl p-5 text-sm text-slate-300">
                            <strong className={textColor(item.color)}>
                                Phù hợp:
                            </strong>{" "}
                            {item.fit}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ComparisonMatrix() {
    const rows = [
        [
            "Full Tower",
            "Rất lớn",
            "E-ATX, ATX, mATX, Mini-ITX",
            "Rộng, dễ lắp, tản tốt, nâng cấp mạnh",
            "To, nặng, đắt, chiếm diện tích",
            "Workstation, PC cao cấp, custom water cooling",
        ],
        [
            "Mid Tower",
            "Trung bình",
            "ATX, mATX, Mini-ITX",
            "Cân bằng nhất, dễ mua, dễ build",
            "Không rộng bằng Full Tower",
            "Gaming, đồ họa, văn phòng cao cấp",
        ],
        [
            "Mini Tower / mATX",
            "Nhỏ-vừa",
            "mATX, Mini-ITX",
            "Gọn, rẻ, đủ dùng",
            "Hạn chế GPU/tản/quạt",
            "Văn phòng, học tập, gaming tầm trung",
        ],
        [
            "Mini-ITX / SFF",
            "Rất nhỏ",
            "Mini-ITX",
            "Siêu gọn, đẹp, tiết kiệm không gian",
            "Khó lắp, nóng hơn, kén linh kiện",
            "Setup tối giản, PC nhỏ, người có kinh nghiệm",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="blue"
                title="Bảng so sánh tổng quan"
                icon={<Layers3 />}
            />
            <DataTable
                title="Full Tower vs Mid Tower vs Mini Tower vs Mini-ITX"
                rows={rows}
                headers={[
                    "Loại case",
                    "Kích thước",
                    "Mainboard thường hỗ trợ",
                    "Ưu điểm",
                    "Nhược điểm",
                    "Phù hợp với",
                ]}
                accent="blue"
            />
        </section>
    );
}

function MotherboardCompatibility() {
    const rows = [
        [
            "E-ATX",
            "Full Tower, một số Mid Tower lớn",
            "Luôn kiểm tra chiều rộng E-ATX và khoang dây",
        ],
        [
            "ATX",
            "Full Tower, Mid Tower",
            "Không lắp được vào case mATX/Mini-ITX nhỏ",
        ],
        [
            "Micro-ATX",
            "Full Tower, Mid Tower, Mini Tower",
            "Có thể lắp vào case ATX nhưng nhìn trống hơn",
        ],
        [
            "Mini-ITX",
            "Gần như mọi loại case",
            "Thường dùng với Mini-ITX case để tối ưu kích thước",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="cyan"
                title="Mối quan hệ giữa case và mainboard"
                icon={<PackageCheck />}
            />
            <DataTable
                title="Mainboard nào lắp vào case nào?"
                rows={rows}
                headers={["Mainboard", "Có thể lắp vào", "Lưu ý"]}
                accent="cyan"
            />
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                Case lớn thường lắp được mainboard nhỏ
                <br />
                Case nhỏ không lắp được mainboard lớn
                <br />
                <span className="text-red-300">
                    Mainboard ATX → không lắp được vào Mini-ITX case
                </span>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        motherboard: {
            icon: <Layers3 />,
            title: "Motherboard Support",
            detail: "Case có hỗ trợ ATX, mATX, Mini-ITX hoặc E-ATX không.",
            impact: "Đây là bước đầu tiên. Sai form factor là không lắp được mainboard.",
        },
        gpu: {
            icon: <Gamepad2 />,
            title: "GPU Clearance",
            detail: "Chiều dài tối đa của card đồ họa mà case chứa được.",
            impact: "GPU dài + radiator trước dày có thể khiến card bị cấn dù case ghi hỗ trợ ATX.",
        },
        cooler: {
            icon: <Thermometer />,
            title: "CPU Cooler Clearance",
            detail: "Chiều cao tản nhiệt khí tối đa để đóng được nắp hông.",
            impact: "Tản 158mm với case hỗ trợ 160mm là vừa nhưng rất sát; nên có thêm khoảng dư nếu được.",
        },
        radiator: {
            icon: <Fan />,
            title: "Radiator Support",
            detail: "Case có lắp được AIO 240/280/360/420mm ở trước hoặc trên không.",
            impact: "AIO 360mm cần kiểm tra vị trí gắn, độ dày radiator/quạt, có cấn RAM/main/GPU không.",
        },
        psu: {
            icon: <PlugZap />,
            title: "PSU Support",
            detail: "Case dùng PSU ATX thường, SFX, SFX-L hay TFX.",
            impact: "Mini-ITX/SFF thường cần SFX/SFX-L, đắt hơn ATX phổ thông và cần kiểm tra dây.",
        },
        storage: {
            icon: <HardDrive />,
            title: "Ổ cứng",
            detail: "Số vị trí lắp SSD/HDD 2.5 inch, 3.5 inch và khay ổ.",
            impact: "Máy NAS/nhiều HDD không nên chọn case quá nhỏ nếu không có đủ khay và airflow cho ổ.",
        },
    };
    const [active, setActive] = useState("gpu");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="yellow"
                title="5+ thông số phải kiểm tra trước khi mua case"
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

function RealExamples() {
    const examples = [
        {
            icon: <Home />,
            title: "NZXT H9 Flow",
            subtitle: "Large dual-chamber / case rất rộng",
            color: "blue",
            points: [
                "Không gian lớn",
                "Hỗ trợ nhiều quạt",
                "Radiator lớn tới 420mm theo mô tả",
                "Hợp GPU dài và setup trưng bày",
                "Không hợp bàn nhỏ/cấu hình văn phòng",
            ],
            lesson: "Case rất rộng hợp PC cao cấp, AIO lớn, nhiều quạt và người muốn khoang đi dây thoải mái.",
        },
        {
            icon: <PackageCheck />,
            title: "Fractal Design North",
            subtitle: "ATX Mid-Tower",
            color: "indigo",
            points: [
                "Thiết kế mặt trước gỗ",
                "Tập trung airflow",
                "Hợp mainboard ATX",
                "Phù hợp Ryzen 5/Core i5 + RTX 4070 class",
                "Cân bằng đẹp, thoáng và vừa phải",
            ],
            lesson: "Mid Tower như Fractal North là lựa chọn cân bằng cho gaming đẹp và thực dụng.",
        },
        {
            icon: <Monitor />,
            title: "Cooler Master MasterBox Q300L",
            subtitle: "Micro-ATX nhỏ gọn",
            color: "emerald",
            points: [
                "Hỗ trợ mATX/Mini-ITX",
                "Hợp PC học tập/văn phòng",
                "Gọn và giá dễ chịu",
                "Không hợp GPU rất dài",
                "Không dành cho build quá nóng/nhiều linh kiện",
            ],
            lesson: "Mini Tower/mATX hợp cấu hình phổ thông, nhưng cần kiểm tra GPU/tản khi lắp GPU rời.",
        },
        {
            icon: <Sparkles />,
            title: "Cooler Master NR200",
            subtitle: "Mini-ITX / SFF",
            color: "orange",
            points: [
                "Nhỏ gọn",
                "Dùng main Mini-ITX",
                "Thường dùng PSU SFX",
                "Có thể hỗ trợ GPU khá lớn tùy mẫu",
                "Cần kinh nghiệm kiểm tra kích thước",
            ],
            lesson: "Mini-ITX đẹp và gọn, nhưng không phải lựa chọn rẻ hoặc dễ nhất cho người mới.",
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

function PickerLab() {
    const scenarios = {
        beginner: {
            icon: <PackageCheck />,
            title: "Người mới build gaming",
            answer: "Chọn Mid Tower airflow tốt. Đây là lựa chọn an toàn nhất: dễ lắp, dễ đi dây, dễ nâng cấp, hỗ trợ ATX/mATX/Mini-ITX và đủ cho đa số GPU.",
            color: "indigo",
        },
        budget: {
            icon: <Monitor />,
            title: "Tiết kiệm chi phí",
            answer: "Chọn combo mATX + Mini Tower hoặc Mid Tower giá tốt. Thường rẻ và dễ sống hơn Mini-ITX/SFF.",
            color: "emerald",
        },
        highend: {
            icon: <Gamepad2 />,
            title: "GPU cao cấp",
            answer: "Chọn Mid Tower lớn hoặc Full Tower airflow tốt. Kiểm tra GPU length, radiator, dây 12VHPWR/12V-2x6 và airflow cho GPU.",
            color: "orange",
        },
        workstation: {
            icon: <Database />,
            title: "Workstation/nhiều ổ",
            answer: "Full Tower hoặc case lớn có nhiều khay ổ, nhiều vị trí quạt/radiator và không gian đi dây rộng sẽ hợp hơn.",
            color: "blue",
        },
        sff: {
            icon: <Sparkles />,
            title: "Setup nhỏ gọn",
            answer: "Mini-ITX/SFF chỉ nên chọn nếu thật sự cần nhỏ hoặc thích setup tối giản. Phải kiểm tra main ITX, PSU SFX, GPU, tản CPU và airflow rất kỹ.",
            color: "orange",
        },
        desk: {
            icon: <Home />,
            title: "Không gian bàn nhỏ",
            answer: "Nếu bàn nhỏ, Full Tower có thể quá to. Mini Tower/mATX hoặc Mini-ITX hợp hơn, nhưng cân bằng tốt nhất vẫn có thể là Mid Tower compact.",
            color: "cyan",
        },
    };
    const [active, setActive] = useState("beginner");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: chọn kích thước case theo tình huống"
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
            wrong: "Case càng lớn càng tốt",
            right: "Case lớn dễ build và thoáng hơn, nhưng không phải ai cũng cần. Máy văn phòng không GPU rời dùng Full Tower sẽ lãng phí diện tích và tiền.",
        },
        {
            wrong: "Mini-ITX nhỏ nên chắc rẻ hơn",
            right: "Mini-ITX thường không rẻ hơn vì main ITX, PSU SFX, tản nhỏ và case nhỏ đẹp có thể đắt hơn mATX/ATX phổ thông.",
        },
        {
            wrong: "Chỉ cần mainboard vừa là đủ",
            right: "Mainboard vừa chưa chắc cả cấu hình vừa. Cần kiểm tra GPU length, CPU cooler height, PSU size, radiator và ổ cứng.",
        },
        {
            wrong: "Case nhỏ cứ lắp linh kiện mạnh là được",
            right: "Linh kiện mạnh sinh nhiệt cao. Case nhỏ airflow kém dễ nóng, ồn, giảm xung CPU/GPU/SSD.",
        },
        {
            wrong: "ATX case nào cũng vừa GPU cao cấp",
            right: "GPU quá dài hoặc radiator trước quá dày vẫn có thể cấn. Luôn kiểm tra GPU clearance theo mm.",
        },
        {
            wrong: "Quên vị trí đặt máy",
            right: "Full Tower đặt trên bàn có thể quá to; Mini-ITX đặt dưới sàn dễ hút bụi và mất lợi thế thẩm mỹ.",
        },
    ];
    const tips = [
        "Người mới build PC nên chọn Mid Tower airflow tốt.",
        "Muốn tiết kiệm: mATX + Mini Tower/Mid Tower giá tốt thường hợp lý hơn Mini-ITX.",
        "Thứ tự kiểm tra: mainboard size → GPU length → CPU cooler height → PSU size → radiator/fan support.",
        "GPU cao cấp nên ưu tiên case airflow tốt hơn case chỉ đẹp RGB.",
        "Mini-ITX chỉ nên chọn khi thật sự cần nhỏ gọn và sẵn sàng kiểm tra từng linh kiện.",
        "Case lớn hơn dễ build hơn, nhưng case vừa nhu cầu mới là lựa chọn tối ưu.",
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
                        <span className="bg-indigo-500/20 text-indigo-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-indigo-300 border border-slate-800 shadow-inner space-y-2">
                            <p>Full Tower → rộng, mạnh, nâng cấp nhiều</p>
                            <p>
                                Mid Tower → cân bằng nhất, hợp đa số người dùng
                            </p>
                            <p>Mini Tower / mATX → gọn, rẻ, đủ dùng</p>
                            <p>
                                Mini-ITX / SFF → rất nhỏ, đẹp, nhưng kén và khó
                                build
                            </p>
                            <br />
                            <p className="text-slate-500">
                                # Quy tắc tương thích
                            </p>
                            <p className="text-slate-300">
                                Case lớn thường lắp được main nhỏ
                            </p>
                            <p className="text-slate-300">
                                Case nhỏ không lắp được main lớn
                            </p>
                            <br />
                            <p className="text-red-300">
                                Mainboard vừa chưa đủ: còn phải kiểm tra GPU,
                                tản CPU, PSU, radiator và ổ cứng.
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
            "Loại case nào thường phù hợp nhất cho đa số người mới build PC gaming?",
        options: ["Full Tower", "Mid Tower", "Mini-ITX", "Server Rack"],
        correct: 1,
        explanation:
            "Mid Tower thường cân bằng nhất: dễ build, dễ mua linh kiện, đủ airflow và đủ nâng cấp cho đa số PC gaming.",
    },
    {
        question: "Vì sao build Mini-ITX thường khó hơn Mid Tower?",
        options: [
            "Vì Mini-ITX không dùng được SSD",
            "Vì không gian hẹp, kén GPU, PSU và tản nhiệt",
            "Vì Mini-ITX không có cổng USB",
            "Vì Mini-ITX không thể dùng CPU mạnh",
        ],
        correct: 1,
        explanation:
            "Mini-ITX/SFF có không gian hẹp nên phải kiểm tra GPU, PSU SFX/SFX-L, tản CPU, radiator và airflow rất kỹ.",
    },
    {
        question: "Mainboard ATX thường lắp được vào loại case nào?",
        options: [
            "Mini-ITX case",
            "Mid Tower hoặc Full Tower hỗ trợ ATX",
            "Chỉ laptop",
            "Chỉ case server",
        ],
        correct: 1,
        explanation:
            "Mainboard ATX thường cần Mid Tower hoặc Full Tower có hỗ trợ ATX.",
    },
    {
        question: "Case lớn hơn thường có lợi thế gì?",
        options: [
            "Dễ lắp ráp, dễ đi dây, tản nhiệt tốt hơn",
            "Làm CPU có nhiều nhân hơn",
            "Tăng RAM tự động",
            "Làm SSD bền vĩnh viễn",
        ],
        correct: 0,
        explanation:
            "Case lớn thường có nhiều không gian hơn để lắp linh kiện, đi dây, gắn quạt/radiator và nâng cấp.",
    },
    {
        question: "Trước khi mua case, thông số nào cần kiểm tra?",
        options: [
            "Mainboard support, GPU clearance, CPU cooler clearance, PSU/radiator support",
            "Chỉ màu RGB",
            "Logo hãng",
            "Số sticker đi kèm",
        ],
        correct: 0,
        explanation:
            "Các thông số clearance và support quyết định linh kiện có lắp vừa không.",
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
                Bạn đã hiểu cách phân loại case theo kích thước. Tiếp theo là hệ
                thống tản nhiệt và luồng gió — vì sau khi chọn đúng kích thước
                case, bạn cần biết cách bố trí quạt để máy chạy mát, êm và bền
                hơn.
            </p>
            <Link
                to="/phan-8-3"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20"
            >
                Bài tiếp theo: 8.3 — Hệ thống tản nhiệt và luồng gió Airflow{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "indigo" }) {
    const colorMap = {
        indigo: "bg-indigo-500/20 text-indigo-300",
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
            <table className="w-full min-w-[980px] text-sm">
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
        indigo: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
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
    return map[color] || map.indigo;
}
function softBorder(color) {
    const map = {
        indigo: "bg-indigo-500/5 border-indigo-500/20",
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
    return map[color] || map.indigo;
}
function textColor(color) {
    const map = {
        indigo: "text-indigo-300",
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
    return map[color] || "text-indigo-300";
}
