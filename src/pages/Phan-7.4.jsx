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
                            <Layers3 className="text-violet-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 7: PSU — Bộ nguồn máy tính
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-violet-300 bg-violet-400/10 px-3 py-1 rounded-full border border-violet-400/20">
                        Bài 7.4
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <PowerStripAnalogy />
                <CableFlowSimulator />
                <TypeExplorer />
                <ComparisonTable />
                <SpecsExplorer />
                <CaseGuide />
                <PinoutWarning />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-violet-300">
                        <BookOpen size={16} /> Phần 7: PSU — Kiểu dây nguồn
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Modular vs Semi-Modular
                        <span className="block text-violet-400">
                            vs Non-Modular PSU
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Dây nguồn rối không chỉ xấu, mà còn khó đi dây, khó vệ
                        sinh và có thể cản airflow. Bài này giúp bạn chọn PSU
                        dây liền, bán rời hay full-modular đúng nhu cầu.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<PlugZap size={16} />} text="Non-Modular" />
                        <Tag icon={<Puzzle size={16} />} text="Semi-Modular" />
                        <Tag
                            icon={<Sparkles size={16} />}
                            text="Full-Modular"
                        />
                        <Tag icon={<Fan size={16} />} text="Airflow" />
                        <Tag
                            icon={<ShieldCheck size={16} />}
                            text="Pinout Safety"
                        />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<PlugZap />}
                            label="Non"
                            desc="Dây liền toàn bộ"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Puzzle />}
                            label="Semi"
                            desc="Một phần rời"
                            color="blue"
                        />
                        <HeroTile
                            icon={<Sparkles />}
                            label="Full"
                            desc="Tất cả dây rời"
                            color="violet"
                            highlight
                        />
                        <HeroTile
                            icon={<ShieldCheck />}
                            label="Pinout"
                            desc="Không dùng lẫn dây"
                            color="red"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Kết luận nhanh</p>
                        <p>Rẻ nhất → Non-Modular</p>
                        <p>Cân bằng → Semi-Modular</p>
                        <p className="text-violet-300">
                            Gọn đẹp nhất → Full-Modular
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu Modular PSU là PSU cho phép tháo rời dây cáp khỏi thân nguồn.",
        "Phân biệt Non-Modular, Semi-Modular và Full-Modular theo dây cố định, dây rời, giá, độ gọn và thẩm mỹ.",
        "Biết modular không nói trực tiếp PSU mạnh hay chất lượng điện tốt hơn.",
        "Biết chọn kiểu dây theo case: case kín, case kính, gaming phổ thông, Mini-ITX/SFF, build RGB/thẩm mỹ.",
        "Hiểu rủi ro cực quan trọng: không dùng lẫn dây modular giữa các PSU vì pinout có thể khác và gây hỏng linh kiện.",
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
            icon: <PlugZap />,
            title: "Non-Modular",
            desc: "Toàn bộ dây gắn liền, không tháo được khỏi PSU.",
            color: "orange",
        },
        {
            icon: <Puzzle />,
            title: "Semi-Modular",
            desc: "Một số dây chính gắn liền, các dây phụ tháo rời được.",
            color: "blue",
        },
        {
            icon: <Sparkles />,
            title: "Full-Modular",
            desc: "Tất cả dây đều tháo rời, kể cả 24-pin và CPU EPS.",
            color: "violet",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Modular PSU là gì?"
                icon={<Brain />}
            />
            <div className="grid md:grid-cols-3 gap-4">
                {cards.map((c) => (
                    <RoleCard key={c.title} {...c} />
                ))}
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-red-300">
                    Điểm cực kỳ quan trọng:
                </strong>{" "}
                Modular không có nghĩa PSU tốt hơn về điện. Nó chỉ nói về độ
                linh hoạt của dây cáp. Chất lượng PSU vẫn phải xem công suất
                thật, đường 12V, hiệu suất, bảo vệ điện, nền tảng linh kiện và
                review kỹ thuật.
            </div>
        </section>
    );
}

function PowerStripAnalogy() {
    const cards = [
        {
            icon: <PlugZap />,
            title: "PSU = ổ điện trung tâm",
            desc: "PSU cấp điện cho từng linh kiện qua nhiều dây riêng.",
            color: "violet",
        },
        {
            icon: <Sparkles />,
            title: "Dây modular = dây nối tháo rời",
            desc: "Cần dây GPU thì cắm, không dùng SATA/Molex thì bỏ ngoài.",
            color: "blue",
        },
        {
            icon: <Fan />,
            title: "Ít dây thừa = thoáng hơn",
            desc: "Đi dây gọn giúp case dễ nhìn, dễ vệ sinh và airflow đỡ bị cản.",
            color: "emerald",
        },
        {
            icon: <ShieldCheck />,
            title: "Dây đúng bộ = an toàn",
            desc: "Dây modular cắm vừa không có nghĩa đúng pinout.",
            color: "red",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: ổ điện trung tâm và dây nối rời"
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

function CableFlowSimulator() {
    const flows = {
        non: {
            title: "Non-Modular",
            color: "orange",
            steps: [
                {
                    icon: <PlugZap />,
                    title: "Dây gắn sẵn toàn bộ",
                    desc: "24-pin, CPU, PCIe, SATA, Molex đều đi ra khỏi PSU cùng lúc.",
                },
                {
                    icon: <PackageCheck />,
                    title: "Lắp vào case",
                    desc: "Bạn cắm dây cần dùng, nhưng dây không dùng vẫn nằm trong case.",
                },
                {
                    icon: <Fan />,
                    title: "Buộc dây thừa",
                    desc: "Cần giấu dây thừa dưới khoang PSU hoặc sau mainboard.",
                },
                {
                    icon: <AlertTriangle />,
                    title: "Case nhỏ dễ rối",
                    desc: "Dây thừa có thể cản airflow, chạm quạt hoặc khó đóng nắp hông.",
                },
            ],
        },
        semi: {
            title: "Semi-Modular",
            color: "blue",
            steps: [
                {
                    icon: <PackageCheck />,
                    title: "Dây chính gắn liền",
                    desc: "24-pin ATX và CPU/EPS thường cố định vì gần như luôn cần.",
                },
                {
                    icon: <Puzzle />,
                    title: "Dây phụ tháo được",
                    desc: "PCIe GPU, SATA Power, Molex thường cắm khi cần.",
                },
                {
                    icon: <Fan />,
                    title: "Ít dây thừa hơn",
                    desc: "Không dùng ổ SATA/hub thì không cần cắm dây SATA/Molex.",
                },
                {
                    icon: <Gauge />,
                    title: "Cân bằng chi phí",
                    desc: "Dễ đi dây hơn non-modular nhưng thường rẻ hơn full-modular.",
                },
            ],
        },
        full: {
            title: "Full-Modular",
            color: "violet",
            steps: [
                {
                    icon: <Sparkles />,
                    title: "Tất cả dây tháo rời",
                    desc: "Kể cả 24-pin ATX và CPU EPS đều tháo khỏi thân PSU được.",
                },
                {
                    icon: <Search />,
                    title: "Chọn đúng dây cần dùng",
                    desc: "Xác định mainboard, CPU, GPU, SATA/hub cần dây nào rồi mới cắm.",
                },
                {
                    icon: <Workflow />,
                    title: "Đi dây gọn",
                    desc: "Không cắm dây thừa, case thoáng và đẹp hơn.",
                },
                {
                    icon: <ShieldCheck />,
                    title: "Cất dây thừa đúng bộ",
                    desc: "Cất dây theo model PSU và không trộn dây với PSU khác.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("full");
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
                title="Dây modular hoạt động thế nào?"
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

function TypeExplorer() {
    const types = {
        non: {
            icon: <PlugZap />,
            title: "Non-Modular PSU",
            color: "orange",
            fixed: "Toàn bộ dây gắn liền",
            good: [
                "Giá thường rẻ nhất",
                "Không lo mất dây rời",
                "Không cần chọn dây phía PSU",
                "Đơn giản với máy cơ bản",
            ],
            bad: [
                "Dây thừa nhiều",
                "Khó đi dây gọn",
                "Có thể cản airflow nếu case nhỏ",
                "Không đẹp trong case kính",
            ],
            fit: "Máy văn phòng, build tiết kiệm, case kín, case rộng",
        },
        semi: {
            icon: <Puzzle />,
            title: "Semi-Modular PSU",
            color: "blue",
            fixed: "Một phần cố định, một phần tháo rời",
            good: [
                "Dây bắt buộc thường có sẵn",
                "Giảm dây thừa",
                "Giá thường mềm hơn full-modular",
                "Dễ đi dây hơn non-modular",
            ],
            bad: [
                "Vẫn có dây cố định",
                "Không linh hoạt bằng full-modular",
                "Ít lựa chọn hơn trên một số dòng mới",
                "Dây chính dài/ngắn khó thay đổi",
            ],
            fit: "Gaming phổ thông, build cân bằng, người muốn gọn hơn nhưng vẫn tiết kiệm",
        },
        full: {
            icon: <Sparkles />,
            title: "Full-Modular PSU",
            color: "violet",
            fixed: "Tất cả dây tháo rời",
            good: [
                "Chỉ cắm dây cần dùng",
                "Dễ đi dây rất gọn",
                "Dễ vệ sinh",
                "Dễ tháo lắp PSU",
                "Hợp case kính và case nhỏ",
            ],
            bad: [
                "Giá thường cao hơn",
                "Có thể mất dây rời",
                "Tuyệt đối không dùng lẫn dây modular",
                "Cần chọn đúng dây trước khi lắp",
            ],
            fit: "Gaming cao cấp, case kính, build gọn đẹp, Mini-ITX/SFF, nhiều RGB",
        },
    };
    const [active, setActive] = useState("full");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="violet"
                title="Explorer: 3 loại PSU theo kiểu dây"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
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
                            <p className="text-xs opacity-75 mt-1">{t.fixed}</p>
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
                        <h3 className="text-2xl font-extrabold text-white mb-2">
                            {item.title}
                        </h3>
                        <p
                            className={`${textColor(item.color)} font-semibold mb-4`}
                        >
                            {item.fixed}
                        </p>
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

function ComparisonTable() {
    const rows = [
        ["Dây tháo rời", "Không", "Một phần", "Tất cả"],
        ["Giá", "Rẻ nhất", "Trung bình", "Cao nhất"],
        ["Đi dây", "Khó nhất", "Khá dễ", "Dễ nhất"],
        ["Dây thừa", "Nhiều", "Vừa", "Ít"],
        [
            "Airflow",
            "Có thể bị ảnh hưởng nếu dây rối",
            "Tốt hơn",
            "Tốt nhất nếu đi dây gọn",
        ],
        ["Thẩm mỹ", "Thấp", "Khá", "Cao"],
        ["Dễ vệ sinh", "Kém hơn", "Khá", "Tốt"],
        ["Rủi ro mất dây", "Không có", "Có", "Có"],
        [
            "Phù hợp",
            "Máy tiết kiệm",
            "Gaming phổ thông",
            "Build đẹp/cao cấp/SFF",
        ],
        [
            "Chất lượng điện",
            "Không phụ thuộc trực tiếp",
            "Không phụ thuộc trực tiếp",
            "Không phụ thuộc trực tiếp",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="blue"
                title="So sánh Non-Modular, Semi-Modular, Full-Modular"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[900px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Tiêu chí</th>
                            <th className="p-4 text-orange-300">Non-Modular</th>
                            <th className="p-4 text-blue-300">Semi-Modular</th>
                            <th className="p-4 text-violet-300">
                                Full-Modular
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((r) => (
                            <tr
                                key={r[0]}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-white font-bold">
                                    {r[0]}
                                </td>
                                <td className="p-4 text-slate-300">{r[1]}</td>
                                <td className="p-4 text-slate-300">{r[2]}</td>
                                <td className="p-4 text-slate-300">{r[3]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                <RuleCard
                    label="Muốn rẻ nhất"
                    value="Chọn Non-Modular chất lượng tốt."
                    color="orange"
                />
                <RuleCard
                    label="Muốn cân bằng"
                    value="Chọn Semi-Modular nếu còn mẫu phù hợp."
                    color="blue"
                />
                <RuleCard
                    label="Muốn gọn đẹp"
                    value="Chọn Full-Modular nếu ngân sách cho phép."
                    color="violet"
                />
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        cables: {
            icon: <PlugZap />,
            title: "Số lượng dây đi kèm",
            detail: "Không phải cứ full-modular là đủ dây cho mọi cấu hình.",
            impact: "Kiểm tra số dây CPU/EPS, PCIe 6+2, 12VHPWR/12V-2x6, SATA Power và Molex.",
        },
        length: {
            icon: <GaugeIcon />,
            title: "Chiều dài dây",
            detail: "Case khác nhau cần dây dài khác nhau.",
            impact: "Mid Tower/Full Tower cần dây EPS CPU đủ dài để đi sau mainboard; Mini-ITX thì dây quá dài lại rất rối.",
        },
        gpu: {
            icon: <Gamepad2 />,
            title: "Dây GPU mới",
            detail: "GPU đời mới có thể cần 12VHPWR hoặc 12V-2x6 native.",
            impact: "Dây native từ PSU thường gọn và an toàn hơn adapter nhiều đầu 8-pin nếu dùng đúng cách.",
        },
        pinout: {
            icon: <ShieldCheck />,
            title: "Pinout dây modular",
            detail: "Pinout là thứ tự chân điện trong đầu cắm.",
            impact: "Dây PSU A cắm vừa PSU B không có nghĩa dùng được. Sai pinout có thể cháy linh kiện.",
        },
        quality: {
            icon: <Sparkles />,
            title: "Chất lượng dây",
            detail: "Dây tốt cần đầu cắm chắc, tiết diện đủ, không lỏng chân, không quá mỏng với GPU ăn điện cao.",
            impact: "Đặc biệt chú ý dây 12VHPWR/12V-2x6: cắm sát, không gập sát đầu, không ép panel kính đè mạnh.",
        },
        storage: {
            icon: <HardDrive />,
            title: "Dây SATA/Molex",
            detail: "Ổ SATA, hub fan/RGB, một số AIO hoặc LED cần SATA Power hoặc Molex.",
            impact: "Dù chỉ dùng SSD M.2 ban đầu, hãy cất dây SATA/Molex để sau này nâng cấp.",
        },
    };
    const [active, setActive] = useState("pinout");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số quan trọng khi chọn theo kiểu dây"
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

function CaseGuide() {
    const rows = [
        [
            "Case kín, rộng, tiết kiệm",
            "Non-modular vẫn được",
            "Dây thừa không quá ảnh hưởng thẩm mỹ",
        ],
        [
            "Case kính, gaming phổ thông",
            "Semi hoặc full-modular",
            "Dễ đi dây đẹp hơn",
        ],
        [
            "Case nhỏ, Mini-ITX/SFF",
            "Full-modular nên ưu tiên",
            "Không gian ít, dây thừa là vấn đề lớn",
        ],
        [
            "Build thẩm mỹ, nhiều RGB",
            "Full-modular",
            "Gọn dây, dễ trình bày build",
        ],
        [
            "Máy văn phòng giá rẻ",
            "Non-modular chất lượng tốt",
            "Tiết kiệm ngân sách",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="emerald"
                title="Chọn kiểu dây theo loại case"
                icon={<PackageCheck />}
            />
            <DataTable
                title="Case nào nên dùng PSU kiểu nào?"
                rows={rows}
                headers={["Loại case/build", "Nên chọn PSU", "Lý do"]}
                accent="emerald"
            />
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-emerald-300">Mini-ITX/SFF:</strong> dây
                thừa dễ cản quạt, cản airflow, chạm fan, khó đóng nắp hông và
                làm tăng nhiệt CPU/GPU. Full-modular thường dễ chịu hơn nhiều.
            </div>
        </section>
    );
}

function PinoutWarning() {
    const checklist = [
        "Chỉ dùng dây đi kèm đúng PSU",
        "Dây thay thế phải được hãng xác nhận tương thích đúng model PSU",
        "Không trộn dây modular giữa các PSU",
        "Cất dây theo túi riêng và ghi model PSU",
        "Cắm vừa không có nghĩa pinout đúng",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="red"
                title="Cảnh báo pinout: dây modular không dùng lẫn"
                icon={<AlertTriangle />}
            />
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
                <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-6">
                    <ShieldCheck className="text-red-300 mb-4" size={40} />
                    <h3 className="text-white font-bold text-2xl mb-3">
                        Pinout là thứ tự chân điện
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Dây modular của hai PSU có thể nhìn giống nhau, thậm chí
                        cắm vừa, nhưng chân điện bên trong khác nhau. Sai pinout
                        có thể làm cháy SSD, GPU hoặc mainboard.
                    </p>
                    <div className="font-mono text-sm text-red-300">
                        Dây PSU A cắm vừa PSU B ≠ dùng được
                    </div>
                </div>
                <div className="space-y-3">
                    {checklist.map((c) => (
                        <div
                            key={c}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex gap-3 text-sm text-slate-300"
                        >
                            <CheckCircle2
                                className="text-green-400 shrink-0 mt-0.5"
                                size={18}
                            />
                            <span>{c}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Cpu />,
            title: "Non-Modular cho máy văn phòng",
            subtitle: "450–550W dây liền chất lượng tốt",
            color: "orange",
            points: [
                "CPU i3 hoặc Ryzen 5 5600G",
                "Không dùng GPU rời",
                "SSD NVMe 500GB",
                "Case kín, không kính",
                "Ưu tiên tiết kiệm ngân sách",
            ],
            lesson: "Nếu máy cơ bản và case rộng/kín, non-modular chất lượng tốt vẫn hoàn toàn ổn.",
        },
        {
            icon: <Gamepad2 />,
            title: "Semi-Modular cho gaming phổ thông",
            subtitle: "650W Bronze/Gold bán dây rời",
            color: "blue",
            points: [
                "Ryzen 5/i5",
                "RTX 4060/RX 7600",
                "16–32GB RAM",
                "SSD 1TB NVMe",
                "Dây phụ tháo được, ít dây thừa hơn",
            ],
            lesson: "Semi-modular là điểm cân bằng: gọn hơn non-modular nhưng thường tiết kiệm hơn full-modular.",
        },
        {
            icon: <Sparkles />,
            title: "Full-Modular cho RM750e class",
            subtitle: "750W Gold full-modular",
            color: "violet",
            points: [
                "Ryzen 5/7 hoặc i5/i7",
                "RTX 4070/4070 Super class",
                "Case kính, build gọn",
                "Chỉ cắm dây cần dùng",
                "Cất dây SATA/Molex nếu chưa dùng",
            ],
            lesson: "Full-modular rất dễ chịu cho build gaming/làm việc gọn đẹp và dễ nâng cấp.",
        },
        {
            icon: <Layers3 />,
            title: "Mini-ITX / SFF",
            subtitle: "SFX/SFX-L full-modular",
            color: "emerald",
            points: [
                "Case nhỏ",
                "Không gian đi dây ít",
                "Dây thừa cản airflow",
                "Có thể dùng dây custom ngắn nếu có kinh nghiệm",
                "Kiểm tra dây GPU/CPU đủ dài nhưng không quá dư",
            ],
            lesson: "Case nhỏ là nơi full-modular thể hiện lợi ích rõ nhất.",
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
            <div className="grid lg:grid-cols-4 gap-4">
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
            icon: <Cpu />,
            title: "Máy văn phòng",
            answer: "Non-modular chất lượng tốt là đủ nếu case kín/rộng và bạn muốn tiết kiệm. Không cần full-modular chỉ để chạy Word, Excel, web.",
            color: "orange",
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Gaming phổ thông",
            answer: "Semi-modular hoặc full-modular đều hợp. Nếu ngân sách cho phép, full-modular giúp đi dây dễ và đẹp hơn.",
            color: "blue",
        },
        glass: {
            icon: <Sparkles />,
            title: "Case kính/RGB",
            answer: "Full-modular đáng ưu tiên vì giảm dây thừa, dễ đi dây phía sau case và thẩm mỹ tốt hơn.",
            color: "violet",
        },
        sff: {
            icon: <Layers3 />,
            title: "Mini-ITX/SFF",
            answer: "Nên ưu tiên SFX/SFX-L full-modular. Case nhỏ rất khó giấu dây thừa và dây rối có thể tăng nhiệt.",
            color: "emerald",
        },
        quality: {
            icon: <ShieldCheck />,
            title: "Ngân sách hạn chế",
            answer: "Đừng hy sinh chất lượng điện chỉ để lấy full-modular. PSU semi/non-modular chất lượng tốt an toàn hơn full-modular rẻ, thương hiệu lạ.",
            color: "yellow",
        },
        lost: {
            icon: <AlertTriangle />,
            title: "Có nhiều PSU/dây lẫn",
            answer: "Dán nhãn túi dây theo model PSU. Không cắm thử dây lẫn bộ vì sai pinout có thể làm hỏng linh kiện.",
            color: "red",
        },
    };
    const [active, setActive] = useState("gaming");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: chọn kiểu dây PSU theo tình huống"
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
            wrong: "Nghĩ full-modular chắc chắn tốt hơn non-modular về chất lượng điện",
            right: "Full-modular chỉ nói về dây tháo rời. Chất lượng điện phải xem công suất thật, đường 12V, hiệu suất, bảo vệ, linh kiện, bảo hành và review.",
        },
        {
            wrong: "Dùng lẫn dây modular giữa các PSU",
            right: "Đây là lỗi rất nguy hiểm. Cắm vừa không có nghĩa pinout đúng; có thể cháy SSD/GPU/mainboard.",
        },
        {
            wrong: "Mua full-modular rồi làm mất dây",
            right: "Dây modular là một phần của PSU. Hãy cất hộp, túi dây và ghi model PSU lên túi.",
        },
        {
            wrong: "Chọn non-modular cho case quá nhỏ",
            right: "Case nhỏ khó giấu dây thừa; dây rối có thể cản quạt, cản airflow, chạm fan và khó đóng nắp hông.",
        },
        {
            wrong: "Mua modular nhưng không kiểm tra đủ dây GPU",
            right: "Modular không có nghĩa đủ mọi dây. Kiểm tra đủ PCIe 6+2 hoặc 12VHPWR/12V-2x6 native nếu GPU cần.",
        },
    ];
    const tips = [
        "Chọn theo case: case kín/rộng → non-modular vẫn được; case kính/gaming → semi/full; Mini-ITX/SFF → full-modular ưu tiên.",
        "Người mới build gaming sẽ dễ chịu hơn với full-modular nếu ngân sách cho phép.",
        "Không hy sinh chất lượng PSU chỉ để lấy full-modular.",
        "Trước khi lắp, trải dây ra: 24-pin, CPU/EPS, PCIe/VGA, SATA, Molex.",
        "Cất dây modular trong túi riêng, ghi đúng model PSU.",
        "Không cho mượn/trộn dây PSU nếu không chắc tương thích chính hãng.",
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
                        <span className="bg-violet-500/20 text-violet-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-violet-300 border border-slate-800 shadow-inner space-y-2">
                            <p>Non-Modular → dây liền, rẻ, nhiều dây thừa</p>
                            <p>
                                Semi-Modular → dây chính cố định, dây phụ tháo
                                được
                            </p>
                            <p>
                                Full-Modular → tất cả dây tháo rời, gọn đẹp nhất
                            </p>
                            <br />
                            <p className="text-slate-500">
                                # Không phụ thuộc trực tiếp
                            </p>
                            <p className="text-slate-300">
                                Modular không tự nói PSU mạnh/yếu hay chất lượng
                                điện tốt/xấu.
                            </p>
                            <br />
                            <p className="text-red-300">
                                Không dùng lẫn dây modular giữa các PSU. Pinout
                                sai có thể làm cháy linh kiện.
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
        question: "PSU non-modular là gì?",
        options: [
            "PSU có tất cả dây tháo rời",
            "PSU có toàn bộ dây gắn liền, không tháo được",
            "PSU không có dây nguồn",
            "PSU chỉ dùng cho laptop",
        ],
        correct: 1,
        explanation:
            "Non-modular là PSU có toàn bộ dây gắn cố định vào thân nguồn.",
    },
    {
        question: "PSU full-modular có ưu điểm chính nào?",
        options: [
            "Luôn làm CPU mạnh hơn",
            "Chỉ cần cắm dây cần dùng, dễ đi dây gọn",
            "Không cần cắm 24-pin mainboard",
            "Không cần cấp điện cho GPU",
        ],
        correct: 1,
        explanation:
            "Full-modular cho phép tháo rời toàn bộ dây, giúp chỉ cắm dây cần dùng và đi dây gọn hơn.",
    },
    {
        question: "Semi-modular nghĩa là gì?",
        options: [
            "Tất cả dây đều gắn liền",
            "Một số dây cố định, một số dây tháo rời",
            "Không có dây CPU",
            "Chỉ dùng cho server",
        ],
        correct: 1,
        explanation:
            "Semi-modular có một số dây cố định, thường là dây chính, và một số dây phụ tháo rời được.",
    },
    {
        question: "Có nên dùng dây modular của PSU khác nếu cắm vừa không?",
        options: [
            "Có, vì cắm vừa là đúng",
            "Có, nếu cùng màu",
            "Không, vì pinout có thể khác và gây hỏng linh kiện",
            "Có, nếu cùng công suất Watt",
        ],
        correct: 2,
        explanation:
            "Dây modular có thể khác pinout giữa PSU khác hãng/dòng; cắm vừa không có nghĩa dùng được.",
    },
    {
        question:
            "Full-modular có chắc chắn chất lượng điện tốt hơn non-modular không?",
        options: [
            "Có, luôn luôn",
            "Không, modular chỉ nói về dây tháo rời; chất lượng điện phải xem dòng PSU cụ thể",
            "Có, nếu dây màu đen",
            "Không PSU nào cần dây modular",
        ],
        correct: 1,
        explanation:
            "Modular chỉ nói về độ linh hoạt dây cáp; chất lượng điện phải đánh giá theo PSU cụ thể.",
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

function NextLesson() {
    return (
        <div className="text-center pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">
                Bạn đã hiểu Non-Modular, Semi-Modular và Full-Modular PSU. Tiếp
                theo là tính toán công suất nguồn cần thiết — vì sau khi biết
                kiểu dây, bạn cần biết chọn PSU bao nhiêu Watt là đủ, không
                thiếu điện nhưng cũng không lãng phí quá mức.
            </p>
            <Link
                to="/phan-7-5"
                className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-violet-500/20"
            >
                Bài tiếp theo: 7.5 — Tính toán công suất nguồn cần thiết{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function GaugeIcon(props) {
    return <Settings {...props} />;
}
function SectionTitle({ number, title, icon, color = "violet" }) {
    const colorMap = {
        violet: "bg-violet-500/20 text-violet-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        blue: "bg-blue-500/20 text-blue-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
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
        <div className={`${softBorder(color)} border rounded-3xl p-6`}>
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center mb-4`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
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
            <table className="w-full min-w-[720px] text-sm">
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
                                    key={cell}
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
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
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
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
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
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        emerald: "text-emerald-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-violet-300";
}
