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
    Hammer,
    HardDrive,
    Home,
    Layers3,
    Lightbulb,
    Monitor,
    PackageCheck,
    PanelTop,
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
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-fuchsia-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-400/30 flex items-center justify-center shadow-lg shadow-fuchsia-500/10">
                            <Hammer className="text-fuchsia-400" size={24} />
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
                    <div className="text-sm font-semibold text-fuchsia-300 bg-fuchsia-400/10 px-3 py-1 rounded-full border border-fuchsia-400/20">
                        Bài 8.4
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <CarBodyAnalogy />
                <DesignImpactSimulator />
                <MaterialExplorer />
                <FrontPanelComparison />
                <SidePanelComparison />
                <LayoutExplorer />
                <SpecsExplorer />
                <RealExamples />
                <SelectionLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-fuchsia-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-fuchsia-300">
                        <BookOpen size={16} /> Phần 8: Case — Vật liệu & thiết
                        kế
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Vật liệu và thiết kế
                        <span className="block text-fuchsia-400">
                            vỏ máy tính
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Hai case nhìn ngoài rất giống nhau nhưng trải nghiệm có
                        thể khác hẳn: một cái chắc, ít rung, dễ đi dây; cái kia
                        mỏng, bí gió, dễ ọp ẹp. Khác biệt nằm ở vật liệu và
                        thiết kế.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<ShieldCheck size={16} />} text="Thép" />
                        <Tag icon={<Sparkles size={16} />} text="Nhôm" />
                        <Tag
                            icon={<PanelTop size={16} />}
                            text="Kính cường lực"
                        />
                        <Tag icon={<Wind size={16} />} text="Mesh" />
                        <Tag icon={<Layers3 size={16} />} text="Dual Chamber" />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<ShieldCheck />}
                            label="Steel"
                            desc="Chắc, bền"
                            color="blue"
                        />
                        <HeroTile
                            icon={<Sparkles />}
                            label="Aluminum"
                            desc="Nhẹ, đẹp"
                            color="fuchsia"
                            highlight
                        />
                        <HeroTile
                            icon={<PanelTop />}
                            label="Glass"
                            desc="Khoe linh kiện"
                            color="purple"
                        />
                        <HeroTile
                            icon={<Wind />}
                            label="Mesh"
                            desc="Thoáng khí"
                            color="cyan"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Case tốt cân bằng</p>
                        <p>Độ bền + Airflow</p>
                        <p className="text-fuchsia-300">
                            + Dễ lắp ráp + Thẩm mỹ
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu vật liệu case là chất liệu tạo nên khung, mặt hông, mặt trước, nóc và chi tiết trang trí của vỏ máy.",
        "Phân biệt thép, nhôm, kính cường lực, nhựa và mesh theo ưu điểm, nhược điểm, độ bền, trọng lượng và airflow.",
        "Biết thiết kế mặt trước, mặt hông, layout 1 khoang và 2 khoang ảnh hưởng thế nào đến nhiệt độ, độ ồn và thẩm mỹ.",
        "Đọc được thông số quan trọng: độ dày thép, trọng lượng, tempered glass, lọc bụi, tool-less design, front I/O, chống ồn.",
        "Tránh lỗi chọn case chỉ vì kính/RGB/nặng/nhôm mà quên airflow, độ chắc, khả năng đi dây và phù hợp cấu hình.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="fuchsia"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-fuchsia-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 text-fuchsia-300 flex items-center justify-center font-bold mb-4">
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
            icon: <ShieldCheck />,
            title: "Độ bền",
            desc: "Khung chắc, thép đủ dày, cạnh hoàn thiện tốt giúp case ít cong vênh và dễ dùng lâu dài.",
            color: "blue",
        },
        {
            icon: <Wind />,
            title: "Airflow",
            desc: "Mặt trước, nóc, hông và lưới mesh quyết định gió vào/ra có dễ hay không.",
            color: "cyan",
        },
        {
            icon: <Settings />,
            title: "Dễ lắp ráp",
            desc: "Lỗ đi dây rộng, khoang PSU, khay ổ, velcro và tool-less design giúp build nhanh, sạch.",
            color: "emerald",
        },
        {
            icon: <Sparkles />,
            title: "Thẩm mỹ",
            desc: "Kính cường lực, nhôm, gỗ, RGB và layout 2 khoang giúp case đẹp và hợp setup hơn.",
            color: "fuchsia",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Vật liệu và thiết kế case là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Vật liệu case</strong> là
                    chất liệu dùng để tạo phần khung, mặt hông, mặt trước, nóc
                    và chi tiết của vỏ máy. Một case tốt không chỉ “đẹp”, mà
                    phải cân bằng được độ bền, airflow, trải nghiệm lắp ráp và
                    thẩm mỹ.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <RoleCard key={c.title} {...c} />
                    ))}
                </div>
                <div className="mt-6 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Độ bền + Airflow + Dễ lắp ráp + Thẩm mỹ = Case đáng mua
                </div>
            </div>
        </section>
    );
}

function CarBodyAnalogy() {
    const cards = [
        {
            icon: <Hammer />,
            title: "Thép = khung chịu lực",
            desc: "Chắc, phổ biến, giá tốt, nếu đủ dày sẽ ít rung và bền.",
            color: "blue",
        },
        {
            icon: <Sparkles />,
            title: "Nhôm = vật liệu cao cấp",
            desc: "Nhẹ, đẹp, cảm giác sang hơn nhưng thường đắt hơn.",
            color: "fuchsia",
        },
        {
            icon: <PanelTop />,
            title: "Kính = cửa trưng bày",
            desc: "Khoe linh kiện/RGB nhưng nặng, bám vân tay và cần cẩn thận khi tháo.",
            color: "purple",
        },
        {
            icon: <Wind />,
            title: "Mesh = khe hút gió",
            desc: "Giúp máy lấy gió tốt hơn giống khe hút gió ở đầu xe.",
            color: "cyan",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: thân xe hơi và khoang máy"
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

function DesignImpactSimulator() {
    const flows = {
        material: {
            title: "Vật liệu ảnh hưởng",
            color: "blue",
            steps: [
                {
                    icon: <Hammer />,
                    title: "Vật liệu case",
                    desc: "Thép, nhôm, kính, nhựa và mesh tạo nên độ cứng, trọng lượng và cảm giác hoàn thiện.",
                },
                {
                    icon: <ShieldCheck />,
                    title: "Độ cứng khung",
                    desc: "Khung chắc giúp ít cong, ít rung khi quạt/HDD hoạt động.",
                },
                {
                    icon: <Fan />,
                    title: "Độ rung và độ ồn",
                    desc: "Case mỏng dễ rung, cộng hưởng tiếng quạt/HDD và tạo cảm giác ọp ẹp.",
                },
                {
                    icon: <PackageCheck />,
                    title: "Trải nghiệm lâu dài",
                    desc: "Case chắc, cạnh gọn, khay ổ và lỗ đi dây tốt giúp lắp, sửa, vệ sinh dễ hơn.",
                },
            ],
        },
        airflow: {
            title: "Thiết kế airflow",
            color: "cyan",
            steps: [
                {
                    icon: <PanelTop />,
                    title: "Mặt trước/nóc/hông",
                    desc: "Thiết kế các mặt quyết định gió vào và ra dễ hay khó.",
                },
                {
                    icon: <Wind />,
                    title: "Mesh hút gió dễ",
                    desc: "Mặt lưới giúp quạt front intake lấy gió mát tốt hơn.",
                },
                {
                    icon: <Thermometer />,
                    title: "CPU/GPU mát hơn",
                    desc: "Khi gió vào tốt, quạt linh kiện không cần quay quá mạnh.",
                },
                {
                    icon: <Sparkles />,
                    title: "Máy êm hơn",
                    desc: "Nhiệt thấp hơn thường giúp hệ thống ít ồn hơn khi tải lâu.",
                },
            ],
        },
        bad: {
            title: "Thiết kế kém",
            color: "red",
            steps: [
                {
                    icon: <XCircle />,
                    title: "Mặt kính trước quá kín",
                    desc: "Gió vào ít dù quạt front có quay nhanh.",
                },
                {
                    icon: <Gamepad2 />,
                    title: "GPU nóng hơn",
                    desc: "GPU không nhận đủ gió mát, quạt GPU phải quay mạnh.",
                },
                {
                    icon: <Thermometer />,
                    title: "Khí nóng tích tụ",
                    desc: "Nhiệt trong case tăng, SSD/VRM/CPU cũng bị ảnh hưởng.",
                },
                {
                    icon: <AlertTriangle />,
                    title: "Ồn và có thể tụt hiệu năng",
                    desc: "Nhiệt cao làm quạt hú và CPU/GPU có thể giảm xung khi tải nặng.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("airflow");
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
                title="Vật liệu và thiết kế ảnh hưởng PC thế nào?"
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
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[310px] flex flex-col justify-between">
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

function MaterialExplorer() {
    const materials = {
        steel: {
            icon: <ShieldCheck />,
            title: "Thép",
            color: "blue",
            good: [
                "Chắc, bền",
                "Giá tốt",
                "Phổ biến nhất",
                "Ít rung nếu đủ dày",
            ],
            bad: ["Nặng hơn nhôm", "Case rẻ có thể dùng thép mỏng"],
            fit: "Đa số người dùng, gaming, văn phòng",
        },
        aluminum: {
            icon: <Sparkles />,
            title: "Nhôm",
            color: "fuchsia",
            good: [
                "Nhẹ",
                "Đẹp",
                "Cảm giác cao cấp",
                "Hoàn thiện tốt ở case cao cấp",
            ],
            bad: ["Giá cao", "Có thể dễ móp/xước hơn thép dày"],
            fit: "Người thích case cao cấp, setup đẹp",
        },
        glass: {
            icon: <PanelTop />,
            title: "Kính cường lực",
            color: "purple",
            good: [
                "Đẹp",
                "Nhìn thấy linh kiện",
                "Hợp RGB",
                "Tạo cảm giác trưng bày",
            ],
            bad: ["Nặng", "Bám vân tay", "Có nguy cơ vỡ nếu va đập/sốc nhiệt"],
            fit: "Gaming PC, setup trưng bày",
        },
        plastic: {
            icon: <Puzzle />,
            title: "Nhựa",
            color: "orange",
            good: ["Nhẹ", "Rẻ", "Dễ tạo hình", "Hợp chi tiết trang trí"],
            bad: ["Dễ xước", "Cảm giác kém cao cấp nếu dùng nhiều"],
            fit: "Case phổ thông, mặt trước, nút bấm, chân đế",
        },
        mesh: {
            icon: <Wind />,
            title: "Mesh / lưới kim loại",
            color: "cyan",
            good: [
                "Airflow tốt",
                "Hợp PC nóng",
                "Dễ hút/xả gió",
                "Thực dụng cho gaming",
            ],
            bad: ["Có thể bụi hơn nếu lọc bụi kém", "Cần vệ sinh định kỳ"],
            fit: "Gaming, GPU mạnh, phòng nóng",
        },
    };
    const [active, setActive] = useState("steel");
    const item = materials[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="fuchsia"
                title="Explorer: các vật liệu case phổ biến"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    {Object.entries(materials).map(([key, m]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(m.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(m.icon, { size: 20 })}{" "}
                                {m.title}
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
                        <p className="text-sm text-slate-400 leading-relaxed">
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

function FrontPanelComparison() {
    const rows = [
        [
            "Mesh Front",
            "Hút gió tốt, máy mát hơn",
            "Dễ thấy bụi hơn, cần vệ sinh lọc bụi",
            "Gaming, render, GPU rời",
        ],
        [
            "Glass Front",
            "Đẹp, khoe RGB tốt",
            "Airflow có thể kém nếu khe hút nhỏ",
            "PC nhẹ, ưu tiên thẩm mỹ",
        ],
        [
            "Solid Front",
            "Gọn, kín, có thể giảm tiếng ồn",
            "Dễ bí gió nếu thiết kế kém",
            "Văn phòng, cấu hình mát",
        ],
        [
            "Wood Front",
            "Đẹp, sang, hợp setup tối giản",
            "Giá cao hơn, airflow tùy thiết kế",
            "Bàn làm việc, setup nội thất",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="cyan"
                title="So sánh thiết kế mặt trước"
                icon={<Wind />}
            />
            <DataTable
                title="Mặt trước case quyết định khả năng hút gió"
                rows={rows}
                headers={["Thiết kế", "Ưu điểm", "Nhược điểm", "Nên dùng khi"]}
                accent="cyan"
            />
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-cyan-300">Quy tắc nhanh:</strong> gaming
                PC nên ưu tiên airflow trước thẩm mỹ. Nếu thích kính/RGB, hãy
                chọn case có đường hút gió tốt.
            </div>
        </section>
    );
}

function SidePanelComparison() {
    const rows = [
        [
            "Thép kín",
            "Bền, nhẹ hơn kính, che dây tốt, ít bám vân tay",
            "Không nhìn thấy linh kiện",
            "PC văn phòng, máy cần đơn giản/bền",
        ],
        [
            "Kính cường lực",
            "Đẹp, khoe linh kiện/RGB",
            "Nặng, dễ bám vân tay, cần cẩn thận khi tháo",
            "Gaming PC, setup trưng bày",
        ],
        [
            "Mesh hông",
            "Hỗ trợ airflow tốt",
            "Dễ bụi hơn, không sang bằng kính",
            "Case nhỏ, PC nóng, Mini-ITX",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="purple"
                title="So sánh thiết kế mặt hông"
                icon={<PanelTop />}
            />
            <DataTable
                title="Mặt hông: kín, kính hay mesh?"
                rows={rows}
                headers={["Mặt hông", "Ưu điểm", "Nhược điểm", "Phù hợp"]}
                accent="purple"
            />
        </section>
    );
}

function LayoutExplorer() {
    const layouts = {
        traditional: {
            icon: <Layers3 />,
            title: "1 khoang – Traditional Layout",
            color: "blue",
            diagram:
                "[Mainboard + CPU + GPU]\n[PSU ở dưới]\n[Ổ cứng ở trước/dưới]",
            good: [
                "Phổ biến",
                "Dễ hiểu, dễ lắp",
                "Giá đa dạng",
                "Tương thích nhiều case",
            ],
            bad: [
                "Dây nguồn cần đi gọn",
                "Không gian trưng bày không đẹp bằng case 2 khoang",
            ],
            fit: "Đa số PC, người mới build, build tiết kiệm đến cao cấp",
        },
        dual: {
            icon: <Sparkles />,
            title: "2 khoang – Dual Chamber",
            color: "fuchsia",
            diagram:
                "Khoang chính: Mainboard + CPU + GPU + RAM\nKhoang phụ: PSU + dây nguồn + ổ cứng",
            good: [
                "Mặt chính rất gọn",
                "Dễ giấu dây",
                "Hợp RGB/trưng bày",
                "Nhiều vị trí quạt hông/dưới",
            ],
            bad: [
                "Thường rộng ngang",
                "Giá có thể cao hơn",
                "Cần bàn rộng",
                "Một số mẫu phải mua thêm quạt",
            ],
            fit: "Setup trưng bày, RGB, tản nước, người thích đi dây gọn",
        },
    };
    const [active, setActive] = useState("traditional");
    const item = layouts[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="blue"
                title="Thiết kế 1 khoang và 2 khoang"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {Object.entries(layouts).map(([key, l]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(l.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(l.icon, { size: 20 })}{" "}
                                {l.title}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            {item.title}
                        </h3>
                        <pre className="whitespace-pre-wrap font-mono text-xs bg-slate-900 border border-slate-800 rounded-2xl p-4 text-slate-300">
                            {item.diagram}
                        </pre>
                        <p className="text-sm text-slate-400 mt-4">
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
        steel: {
            icon: <Hammer />,
            title: "Độ dày thép",
            detail: "Case thép quá mỏng dễ cong nắp hông, rung khi quạt/HDD chạy và cảm giác ọp ẹp.",
            impact: "Review thực tế hoặc cầm trực tiếp giúp đánh giá khung có chắc, cạnh có sắc, nắp hông có dễ cong không.",
        },
        weight: {
            icon: <Gauge />,
            title: "Trọng lượng",
            detail: "Case nặng có thể chắc hơn, nhưng cũng có thể chỉ vì nhiều kính hoặc kích thước lớn.",
            impact: "Nếu hay di chuyển PC, hãy cân nhắc case kính nhiều mặt hoặc full tower quá nặng.",
        },
        glass: {
            icon: <PanelTop />,
            title: "Tempered Glass",
            detail: "Kính cường lực cứng và an toàn hơn kính thường, nhưng vẫn có thể vỡ nếu va cạnh, siết ốc quá mạnh hoặc sốc nhiệt.",
            impact: "Tháo kính bằng hai tay, đặt lên khăn/hộp carton, không đặt trực tiếp lên nền gạch.",
        },
        dust: {
            icon: <ShieldCheck />,
            title: "Lọc bụi",
            detail: "Lọc bụi nên nằm ở vị trí hút gió như mặt trước, đáy PSU, mặt hông hoặc mặt trên nếu dùng intake.",
            impact: "Lọc bụi tốt cần dễ tháo, dễ rửa/lau, không quá bí gió và không rung khi quạt chạy.",
        },
        tool: {
            icon: <Settings />,
            title: "Tool-less design",
            detail: "Nắp hông tháo nhanh, khay ổ trượt, lỗ đi dây rộng, velcro, khoang PSU che dây giúp lắp/sửa/vệ sinh dễ hơn.",
            impact: "Không tăng FPS trực tiếp, nhưng làm trải nghiệm build và bảo trì tốt hơn nhiều.",
        },
        io: {
            icon: <PlugZap />,
            title: "Front I/O",
            detail: "Cổng trước/trên case gồm USB-A, USB-C, audio, power, reset hoặc LED button.",
            impact: "Case có USB-C chưa đủ; mainboard cũng cần header USB-C front panel tương ứng.",
        },
        noise: {
            icon: <Fan />,
            title: "Thiết kế chống ồn",
            detail: "Case yên tĩnh có thể dùng tấm tiêu âm, mặt kín, thép dày và khe gió giảm tiếng.",
            impact: "Case kín thường êm hơn nhưng có thể nóng hơn case mesh nếu airflow yếu.",
        },
    };
    const [active, setActive] = useState("glass");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="yellow"
                title="Thông số kỹ thuật quan trọng"
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

function RealExamples() {
    const examples = [
        {
            icon: <Wind />,
            title: "Corsair 4000D Airflow",
            subtitle: "Thép + kính cường lực + nhựa",
            color: "cyan",
            points: [
                "Mid-Tower ATX phổ thông",
                "Mặt trước airflow",
                "Có kính hông để nhìn linh kiện",
                "Hỗ trợ nhiều quạt/radiator",
                "Hợp gaming tầm trung đến cao",
            ],
            lesson: "Case phổ thông tốt thường dùng thép + kính cường lực, nhưng mặt trước mesh/airflow mới là điểm thực dụng cho gaming.",
        },
        {
            icon: <Sparkles />,
            title: "Fractal Design North",
            subtitle: "Gỗ thật + mesh + thép/kính",
            color: "fuchsia",
            points: [
                "Phong cách nội thất",
                "Mặt trước gỗ walnut/oak",
                "Có phiên bản mesh/kính",
                "Hợp bàn làm việc sang",
                "Vẫn hướng đến airflow",
            ],
            lesson: "Thiết kế đẹp không nhất thiết phải hy sinh airflow nếu case có khe thoáng và bố trí gió tốt.",
        },
        {
            icon: <Layers3 />,
            title: "Lian Li O11 Dynamic EVO",
            subtitle: "Nhôm + kính + thép, dual chamber",
            color: "purple",
            points: [
                "Layout 2 khoang",
                "Mặt kính rộng",
                "Giấu PSU/dây ở khoang sau",
                "Hợp nhiều quạt/tản nước",
                "Có thể cần mua thêm quạt",
            ],
            lesson: "Dual-chamber rất đẹp và gọn mặt chính, nhưng thường rộng ngang hơn và cần kế hoạch quạt tốt.",
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

function SelectionLab() {
    const scenarios = {
        gaming: {
            icon: <Gamepad2 />,
            title: "Gaming GPU mạnh",
            answer: "Ưu tiên mesh front, airflow tốt, khung thép chắc, lọc bụi dễ tháo. Kính hông vẫn ổn nếu mặt trước thoáng.",
            color: "cyan",
        },
        office: {
            icon: <Monitor />,
            title: "Văn phòng",
            answer: "Case thép kín hoặc airflow nhẹ là đủ. Không cần nhiều kính/RGB; ưu tiên bền, ít bụi, dễ vệ sinh và gọn bàn.",
            color: "blue",
        },
        showcase: {
            icon: <Sparkles />,
            title: "Khoe linh kiện/RGB",
            answer: "Chọn kính cường lực hông hoặc dual-chamber. Nhưng vẫn cần airflow tốt, đủ quạt và không gian giấu dây.",
            color: "fuchsia",
        },
        quiet: {
            icon: <Fan />,
            title: "Máy yên tĩnh",
            answer: "Case chống ồn/tấm tiêu âm có thể hữu ích, nhưng đừng chọn quá bí gió cho cấu hình nóng. Fan curve và quạt chất lượng cũng rất quan trọng.",
            color: "purple",
        },
        dusty: {
            icon: <ShieldCheck />,
            title: "Phòng nhiều bụi",
            answer: "Ưu tiên mesh + lọc bụi dễ tháo ở mặt trước/đáy PSU. Vệ sinh định kỳ để airflow không yếu dần.",
            color: "emerald",
        },
        travel: {
            icon: <PackageCheck />,
            title: "Hay di chuyển PC",
            answer: "Tránh case quá nặng hoặc quá nhiều kính. Ưu tiên khung chắc, tay cầm nếu có, mặt hông thép hoặc kính ít rủi ro hơn.",
            color: "orange",
        },
    };
    const [active, setActive] = useState("gaming");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: chọn vật liệu và thiết kế theo nhu cầu"
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
            wrong: "Case kính là case cao cấp",
            right: "Kính chỉ là một phần thiết kế. Case kính nhưng mặt trước kín, khung mỏng, đi dây kém vẫn có thể nóng, ồn và khó lắp.",
        },
        {
            wrong: "Case càng nặng càng tốt",
            right: "Case nặng có thể chắc, nhưng cũng có thể chỉ vì nhiều kính hoặc kích thước lớn. Cần xem airflow, hoàn thiện, dễ vệ sinh và phù hợp bàn làm việc.",
        },
        {
            wrong: "Nhôm luôn tốt hơn thép",
            right: "Nhôm nhẹ và đẹp, nhưng thép dày vẫn rất bền và thực tế. Với đa số người dùng, thép tốt + airflow tốt là lựa chọn hợp lý.",
        },
        {
            wrong: "Mặt trước kín thì chắc ít bụi hơn",
            right: "Mặt kín có thể giảm bụi trực tiếp nhưng dễ bí gió; quạt quay mạnh hơn và hút bụi qua khe khác. Mesh + lọc bụi + vệ sinh định kỳ thường tốt hơn.",
        },
        {
            wrong: "Mua case đẹp là đủ",
            right: "Case cần đẹp và hợp cấu hình: mainboard, GPU, tản CPU, airflow, số quạt, USB-C/front I/O và không gian đi dây.",
        },
        {
            wrong: "Tháo kính cường lực đặt lên nền gạch",
            right: "Nên đặt kính lên khăn mềm, thảm hoặc hộp carton; tránh va góc kính và không siết ốc quá chặt.",
        },
    ];
    const tips = [
        "Gaming PC nên ưu tiên airflow trước thẩm mỹ.",
        "Nếu thích RGB/khoe linh kiện, chọn kính hông nhưng nên để mặt trước mesh hoặc có đường hút gió tốt.",
        "Case thép tốt là lựa chọn rất thực tế, không cần chạy theo nhôm nếu ngân sách hạn chế.",
        "Phòng nhiều bụi: chọn lọc bụi dễ tháo ở mặt trước và đáy PSU.",
        "Kiểm tra case có dễ đi dây, có velcro, lỗ đi dây rộng và khoang PSU che dây không.",
        "Xem review thực tế trước khi mua vì ảnh quảng cáo không cho biết case có mỏng, nóng, ồn hay khó lắp không.",
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
                        <span className="bg-fuchsia-500/20 text-fuchsia-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-fuchsia-300 border border-slate-800 shadow-inner space-y-2">
                            <p>Thép → chắc, bền, giá tốt</p>
                            <p>Nhôm → nhẹ, đẹp, cao cấp hơn</p>
                            <p>
                                Kính cường lực → khoe linh kiện/RGB nhưng nặng
                                và cần cẩn thận
                            </p>
                            <p>Mesh → airflow tốt, hợp PC nóng</p>
                            <br />
                            <p className="text-slate-500"># Thiết kế</p>
                            <p className="text-slate-300">
                                1 khoang → phổ biến, dễ hiểu
                            </p>
                            <p className="text-slate-300">
                                2 khoang → đẹp, giấu dây tốt, rộng ngang hơn
                            </p>
                            <br />
                            <p className="text-red-300">
                                Case tốt không chỉ đẹp: phải bền, thoáng, dễ lắp
                                và hợp cấu hình.
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
        question: "Vật liệu nào phổ biến nhất cho khung case PC phổ thông?",
        options: ["Vàng", "Thép", "Cao su", "Gỗ nguyên khối hoàn toàn"],
        correct: 1,
        explanation:
            "Thép là vật liệu phổ biến nhất vì chắc, bền, giá tốt và phù hợp đa số case PC.",
    },
    {
        question: "Kính cường lực trên case chủ yếu dùng để làm gì?",
        options: [
            "Tăng dung lượng RAM",
            "Khoe linh kiện bên trong và tăng tính thẩm mỹ",
            "Làm CPU chạy nhanh hơn",
            "Thay thế quạt tản nhiệt",
        ],
        correct: 1,
        explanation:
            "Kính cường lực thường dùng làm mặt hông/mặt trước để nhìn thấy linh kiện và RGB bên trong.",
    },
    {
        question: "Case mặt trước mesh thường có ưu điểm gì?",
        options: [
            "Airflow tốt hơn",
            "Không bao giờ bám bụi",
            "Làm GPU có thêm VRAM",
            "Không cần quạt case nữa",
        ],
        correct: 0,
        explanation:
            "Mesh front giúp gió vào dễ hơn, thường phù hợp gaming PC hoặc cấu hình nóng.",
    },
    {
        question: "Thiết kế dual-chamber có đặc điểm gì?",
        options: [
            "Tách khoang linh kiện chính và khoang nguồn/dây",
            "Không dùng được card đồ họa",
            "Chỉ dùng cho laptop",
            "Không cần mainboard",
        ],
        correct: 0,
        explanation:
            "Dual-chamber tách khoang chính chứa mainboard/GPU và khoang phụ chứa PSU/dây/ổ cứng.",
    },
    {
        question: "Nhận định nào đúng nhất?",
        options: [
            "Case kính luôn cao cấp hơn mọi case khác",
            "Nhôm luôn bền hơn thép dày",
            "Case tốt cần cân bằng độ bền, airflow, dễ lắp và thẩm mỹ",
            "Case càng nặng càng chắc chắn tuyệt đối",
        ],
        correct: 2,
        explanation:
            "Một case tốt không chỉ đẹp hoặc nặng, mà cần cân bằng nhiều yếu tố thực tế.",
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
                    <strong className="text-fuchsia-400">
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
                <span className="text-fuchsia-400">
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
                        className="w-full py-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu vật liệu và thiết kế vỏ máy. Tiếp theo là cách chọn
                vỏ máy phù hợp — phần tổng hợp kích thước, airflow, vật liệu,
                khả năng tương thích và ngân sách để chọn case đúng cho cấu hình
                thực tế.
            </p>
            <Link
                to="/phan-8-5"
                className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-fuchsia-500/20"
            >
                Bài tiếp theo: 8.5 — Cách chọn vỏ máy phù hợp{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "fuchsia" }) {
    const colorMap = {
        fuchsia: "bg-fuchsia-500/20 text-fuchsia-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-fuchsia-500/10 border-fuchsia-400/50" : softBorder(color)}`}
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
        fuchsia:
            "bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20",
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
    return map[color] || map.fuchsia;
}
function softBorder(color) {
    const map = {
        fuchsia: "bg-fuchsia-500/5 border-fuchsia-500/20",
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
    return map[color] || map.fuchsia;
}
function textColor(color) {
    const map = {
        fuchsia: "text-fuchsia-300",
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
    return map[color] || "text-fuchsia-300";
}
