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
    HardDrive,
    Home,
    Layers3,
    Lightbulb,
    Monitor,
    PackageCheck,
    PlugZap,
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
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-teal-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-teal-500/10 border border-teal-400/30 flex items-center justify-center shadow-lg shadow-teal-500/10">
                            <Home className="text-teal-400" size={24} />
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
                    <div className="text-sm font-semibold text-teal-300 bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/20">
                        Bài 8.1
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <HouseAnalogy />
                <AirflowSimulator />
                <CaseTypeExplorer />
                <CompatibilityExplorer />
                <SpecsExplorer />
                <AirflowAndFanGuide />
                <RealExamples />
                <BuildLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-teal-300">
                        <BookOpen size={16} /> Phần 8: Case — Vỏ máy tính
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Vai trò của
                        <span className="block text-teal-400">vỏ máy tính</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Hai PC cấu hình giống nhau có thể khác xa về nhiệt độ,
                        độ ồn, dây gọn hay khả năng nâng cấp. Khác biệt đôi khi
                        nằm ở case — “ngôi nhà” quyết định môi trường vật lý cho
                        toàn bộ linh kiện.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<ShieldCheck size={16} />}
                            text="Bảo vệ linh kiện"
                        />
                        <Tag icon={<Fan size={16} />} text="Airflow" />
                        <Tag icon={<Thermometer size={16} />} text="Nhiệt độ" />
                        <Tag
                            icon={<Gamepad2 size={16} />}
                            text="GPU clearance"
                        />
                        <Tag icon={<Layers3 size={16} />} text="Form factor" />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Home />}
                            label="Case"
                            desc="Ngôi nhà của PC"
                            color="teal"
                            highlight
                        />
                        <HeroTile
                            icon={<Fan />}
                            label="Airflow"
                            desc="Hút gió / xả nhiệt"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<Gamepad2 />}
                            label="Clearance"
                            desc="Vừa GPU/tản"
                            color="orange"
                        />
                        <HeroTile
                            icon={<PackageCheck />}
                            label="Upgrade"
                            desc="Dễ nâng cấp"
                            color="emerald"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Case tốt ảnh hưởng</p>
                        <p>mát hơn + ít ồn hơn</p>
                        <p className="text-teal-300">
                            + dễ lắp + dễ vệ sinh + dễ nâng cấp
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu vỏ máy tính, case hoặc chassis là bộ khung chứa, bảo vệ và cố định linh kiện PC.",
        "Nắm case ảnh hưởng đến airflow, nhiệt độ, độ ồn, độ bền linh kiện và trải nghiệm lắp ráp như thế nào.",
        "Phân biệt các nhóm case phổ biến: Full Tower, Mid Tower, Mini Tower/Micro-ATX và Mini-ITX.",
        "Biết đọc thông số quan trọng: form factor, GPU clearance, CPU cooler clearance, fan/radiator support, cable management và front I/O.",
        "Tránh lỗi chọn case chỉ vì đẹp/RGB mà quên airflow, kích thước mainboard, GPU, tản CPU và khả năng nâng cấp.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="teal"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-teal-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-300 flex items-center justify-center font-bold mb-4">
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
            title: "Bảo vệ & cố định",
            desc: "Giữ mainboard, GPU, PSU, SSD/HDD chắc chắn, giảm rủi ro va chạm/rung lắc.",
            color: "teal",
        },
        {
            icon: <Fan />,
            title: "Tạo luồng gió",
            desc: "Case quyết định gió mát vào đâu, khí nóng thoát ra đâu và linh kiện có bị bí nhiệt không.",
            color: "cyan",
        },
        {
            icon: <Thermometer />,
            title: "Ảnh hưởng nhiệt & ồn",
            desc: "Case bí làm CPU/GPU nóng hơn, quạt quay mạnh hơn và máy ồn hơn.",
            color: "orange",
        },
        {
            icon: <PackageCheck />,
            title: "Quyết định nâng cấp",
            desc: "Case rộng hỗ trợ GPU dài hơn, tản lớn hơn, nhiều ổ và nhiều quạt/radiator hơn.",
            color: "emerald",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Vỏ máy tính là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Vỏ máy tính</strong>, tiếng
                    Anh gọi là <strong className="text-teal-300">Case</strong>{" "}
                    hoặc <strong className="text-teal-300">Chassis</strong>, là
                    bộ khung bên ngoài dùng để chứa, bảo vệ và cố định linh kiện
                    bên trong máy tính. Case không trực tiếp xử lý dữ liệu,
                    nhưng ảnh hưởng mạnh đến nhiệt độ, độ bền, độ ồn, khả năng
                    nâng cấp và trải nghiệm lắp ráp.
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

function HouseAnalogy() {
    const cards = [
        {
            icon: <Home />,
            title: "Case = ngôi nhà",
            desc: "Ngôi nhà rộng, thoáng, dễ sửa giúp toàn bộ hệ thống sống khỏe hơn.",
            color: "teal",
        },
        {
            icon: <Layers3 />,
            title: "Mainboard = nền móng",
            desc: "Case phải hỗ trợ đúng chuẩn mainboard: ATX, mATX hoặc Mini-ITX.",
            color: "blue",
        },
        {
            icon: <Cpu />,
            title: "CPU/RAM/SSD/GPU = thiết bị",
            desc: "Thiết bị phải có đủ chỗ, đủ gió và không bị cấn khi lắp.",
            color: "orange",
        },
        {
            icon: <Fan />,
            title: "Quạt/khe thoáng = cửa sổ",
            desc: "Cửa hút gió và cửa xả nhiệt quyết định căn nhà có bí hay không.",
            color: "cyan",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: case là ngôi nhà của dàn PC"
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

function AirflowSimulator() {
    const flows = {
        good: {
            title: "Case airflow tốt",
            color: "emerald",
            steps: [
                {
                    icon: <Fan />,
                    title: "Hút gió mát",
                    desc: "Mặt trước mesh hoặc khe thoáng đưa gió mát vào case.",
                },
                {
                    icon: <Gamepad2 />,
                    title: "Gió đi qua GPU",
                    desc: "GPU rời nhận gió mát, giảm nhiệt khi chơi game/render.",
                },
                {
                    icon: <Cpu />,
                    title: "Gió hỗ trợ CPU",
                    desc: "Tản CPU nhận không khí mát hơn, quạt không phải quay quá mạnh.",
                },
                {
                    icon: <Thermometer />,
                    title: "Khí nóng thoát ra",
                    desc: "Quạt sau và quạt trên đẩy khí nóng ra ngoài.",
                },
                {
                    icon: <Sparkles />,
                    title: "Máy mát và êm hơn",
                    desc: "Nhiệt thấp hơn giúp quạt chậm hơn, độ ồn giảm và hiệu năng ổn định hơn.",
                },
            ],
        },
        bad: {
            title: "Case bí gió",
            color: "red",
            steps: [
                {
                    icon: <XCircle />,
                    title: "Mặt trước kín",
                    desc: "Gió mát vào ít, quạt hút khó lấy không khí.",
                },
                {
                    icon: <Thermometer />,
                    title: "Nhiệt tích tụ",
                    desc: "GPU và CPU thải nhiệt nhưng khí nóng không thoát kịp.",
                },
                {
                    icon: <Fan />,
                    title: "Quạt quay mạnh",
                    desc: "Hệ thống cố hạ nhiệt bằng cách tăng tốc quạt.",
                },
                {
                    icon: <AlertTriangle />,
                    title: "Ồn và có thể giảm xung",
                    desc: "Khi quá nóng, CPU/GPU có thể giảm hiệu năng để tự bảo vệ.",
                },
            ],
        },
        cable: {
            title: "Dây gọn",
            color: "blue",
            steps: [
                {
                    icon: <PlugZap />,
                    title: "Dây nguồn đi phía sau",
                    desc: "Khoang sau mainboard giúp giấu dây 24-pin, EPS, PCIe, SATA.",
                },
                {
                    icon: <Workflow />,
                    title: "Không chắn đường gió",
                    desc: "Ít dây trước mainboard giúp gió đi từ trước ra sau dễ hơn.",
                },
                {
                    icon: <Search />,
                    title: "Dễ vệ sinh/sửa chữa",
                    desc: "Máy gọn giúp tháo GPU, thêm SSD, vệ sinh bụi nhanh hơn.",
                },
                {
                    icon: <PackageCheck />,
                    title: "Dễ nâng cấp",
                    desc: "Case có không gian tốt giúp đổi GPU/tản/ổ dễ hơn về sau.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("good");
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
                title="Case ảnh hưởng PC như thế nào?"
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

function CaseTypeExplorer() {
    const types = {
        full: {
            icon: <Layers3 />,
            title: "Full Tower",
            size: "Rất lớn",
            color: "blue",
            good: [
                "Rộng rãi, dễ lắp",
                "Hỗ trợ nhiều ổ",
                "GPU dài, radiator lớn",
                "Hợp tản nước custom",
            ],
            bad: ["To, nặng", "Chiếm diện tích", "Giá thường cao"],
            fit: "Workstation, PC cao cấp, người thích nâng cấp nhiều",
        },
        mid: {
            icon: <PackageCheck />,
            title: "Mid Tower",
            size: "Trung bình",
            color: "teal",
            good: [
                "Cân bằng nhất",
                "Dễ build",
                "Hỗ trợ ATX phổ biến",
                "Airflow và nâng cấp tốt",
            ],
            bad: [
                "Không rộng bằng Full Tower",
                "Một số mẫu vẫn kén GPU/radiator",
            ],
            fit: "Đa số người dùng gaming, văn phòng, đồ họa",
        },
        mini: {
            icon: <Monitor />,
            title: "Mini Tower / Micro-ATX",
            size: "Nhỏ hơn",
            color: "emerald",
            good: ["Gọn", "Tiết kiệm không gian", "Giá dễ chịu", "Hợp mATX"],
            bad: ["Airflow hạn chế hơn", "GPU/tản có thể kén kích thước"],
            fit: "PC văn phòng, học tập, gaming tầm trung",
        },
        itx: {
            icon: <Sparkles />,
            title: "Mini-ITX",
            size: "Rất nhỏ",
            color: "orange",
            good: ["Siêu gọn", "Đẹp, tối giản", "Dễ đặt trên bàn"],
            bad: [
                "Khó lắp",
                "Nóng hơn",
                "Linh kiện phải chọn kỹ",
                "Thường tốn công hơn",
            ],
            fit: "Người thích PC nhỏ gọn, setup tối giản",
        },
    };
    const [active, setActive] = useState("mid");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="teal"
                title="Các loại vỏ máy theo kích thước"
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
                            <p className="text-xs opacity-75 mt-1">{t.size}</p>
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
                            {item.size}
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

function CompatibilityExplorer() {
    const rows = [
        [
            "Full Tower",
            "ATX, mATX, Mini-ITX, thường cả E-ATX",
            "GPU dài, radiator lớn, nhiều ổ",
        ],
        [
            "Mid Tower",
            "ATX, mATX, Mini-ITX",
            "Lựa chọn an toàn nhất cho người mới",
        ],
        [
            "Micro-ATX / Mini Tower",
            "mATX, Mini-ITX",
            "Gọn, giá dễ chịu, cần kiểm tra GPU/tản",
        ],
        ["Mini-ITX Case", "Mini-ITX", "Rất kén GPU, tản CPU, PSU và airflow"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="blue"
                title="Case phải tương thích linh kiện nào?"
                icon={<PackageCheck />}
            />
            <DataTable
                title="Case và mainboard hỗ trợ"
                rows={rows}
                headers={["Loại case", "Mainboard thường hỗ trợ", "Lưu ý"]}
                accent="blue"
            />
            <div className="grid md:grid-cols-3 gap-4">
                <RuleCard
                    label="Mainboard ATX"
                    value="Cần case hỗ trợ ATX. Case Mini-ITX/mATX nhỏ thường không lắp được."
                    color="blue"
                />
                <RuleCard
                    label="GPU clearance"
                    value="Case hỗ trợ GPU tối đa 330mm thì GPU 340mm không lắp vừa."
                    color="orange"
                />
                <RuleCard
                    label="CPU cooler clearance"
                    value="Tản khí cao 158mm với case hỗ trợ 160mm là vừa nhưng khá sát."
                    color="cyan"
                />
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        form: {
            icon: <Layers3 />,
            title: "Form Factor",
            detail: "Case phải hỗ trợ chuẩn mainboard bạn dùng: ATX, Micro-ATX hoặc Mini-ITX.",
            impact: "Mua main ATX nhưng case chỉ hỗ trợ mATX/ITX là không lắp được.",
        },
        gpu: {
            icon: <Gamepad2 />,
            title: "GPU Clearance",
            detail: "Chiều dài card đồ họa tối đa mà case chứa được.",
            impact: "RTX 4070 Ti/4080/4090 hoặc card 3 quạt thường rất dài, phải kiểm tra mm trước khi mua.",
        },
        cooler: {
            icon: <Thermometer />,
            title: "CPU Cooler Clearance",
            detail: "Chiều cao tản nhiệt khí CPU tối đa case hỗ trợ.",
            impact: "Tản cao hơn giới hạn case có thể khiến bạn không đóng được nắp hông.",
        },
        airflow: {
            icon: <Fan />,
            title: "Airflow",
            detail: "Khả năng đưa gió mát vào và đẩy khí nóng ra khỏi case.",
            impact: "Mặt trước mesh thường mát hơn mặt kính kín, nhất là với GPU rời mạnh.",
        },
        radiator: {
            icon: <Gauge />,
            title: "Radiator Support",
            detail: "Case hỗ trợ radiator AIO 120/240/280/360mm ở vị trí nào.",
            impact: "AIO 360mm cần kiểm tra gắn trước hay trên, có cấn RAM/main/GPU không.",
        },
        cable: {
            icon: <PlugZap />,
            title: "Cable Management",
            detail: "Không gian sau mainboard để giấu dây nguồn, dây quạt, SATA và front panel.",
            impact: "Dây gọn giúp máy đẹp hơn, dễ vệ sinh và ít cản airflow hơn.",
        },
        front: {
            icon: <Settings />,
            title: "Front I/O",
            detail: "Cụm cổng trước/trên case: power, USB-A, USB-C, audio, reset/RGB.",
            impact: "Muốn dùng USB-C mặt trước, case phải có USB-C và mainboard phải có header tương ứng.",
        },
        dust: {
            icon: <ShieldCheck />,
            title: "Lọc bụi",
            detail: "Lưới lọc bụi tháo rời ở mặt trước, đáy PSU hoặc mặt trên.",
            impact: "Phòng nhiều bụi hoặc đặt PC dưới sàn nên ưu tiên case có lọc bụi dễ tháo vệ sinh.",
        },
    };
    const [active, setActive] = useState("airflow");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số kỹ thuật quan trọng của case"
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

function AirflowAndFanGuide() {
    const fanRows = [
        ["Trước", "2–3 quạt hút vào", "Đưa gió mát vào GPU/CPU"],
        ["Sau", "1 quạt xả ra", "Đẩy khí nóng ra ngoài"],
        ["Trên", "1–3 quạt xả ra", "Hỗ trợ khí nóng bay lên và thoát ra"],
        ["Đáy", "Hút vào tùy case", "Cấp gió cho GPU, cần lọc bụi tốt"],
    ];
    const radiatorRows = [
        ["120mm", "CPU tầm thấp/trung, ít phổ biến"],
        ["240mm", "CPU tầm trung/cao"],
        ["280mm", "Làm mát tốt, cần case đủ rộng"],
        ["360mm", "CPU cao cấp, render, gaming nặng"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="cyan"
                title="Airflow, fan support và radiator"
                icon={<Fan />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="Bố trí quạt phổ biến"
                    rows={fanRows}
                    headers={["Vị trí", "Cách dùng", "Mục tiêu"]}
                    accent="cyan"
                />
                <DataTable
                    title="Radiator AIO thường gặp"
                    rows={radiatorRows}
                    headers={["Kích thước", "Thường dùng cho"]}
                    accent="blue"
                />
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-cyan-300">Mẹo nhanh:</strong> PC gaming
                hoặc dùng GPU rời mạnh nên ưu tiên case mặt trước mesh, nhiều vị
                trí quạt, có lọc bụi tháo rời và không gian đi dây tốt.
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Monitor />,
            title: "Cooler Master MasterBox Q300L",
            subtitle: "Micro-ATX nhỏ gọn",
            color: "cyan",
            points: [
                "Phù hợp mATX / Mini-ITX",
                "Gọn, dễ đặt dưới bàn",
                "Hợp PC học tập/văn phòng",
                "Không nên dùng GPU quá lớn/nóng",
                "Giá phổ thông tùy thị trường",
            ],
            lesson: "Case nhỏ gọn đủ tốt cho máy nhẹ, nhưng cần kiểm tra airflow và clearance nếu gắn GPU rời lớn.",
        },
        {
            icon: <PackageCheck />,
            title: "NZXT H5 Flow",
            subtitle: "Compact Mid-Tower ATX Airflow Case",
            color: "teal",
            points: [
                "Mid Tower dễ build",
                "Hướng đến airflow",
                "Hỗ trợ cấu hình gaming GPU rời",
                "Thiết kế hiện đại",
                "Phù hợp Ryzen 5/Core i5 + RTX 4060/4070 class",
            ],
            lesson: "Mid Tower airflow tốt là lựa chọn an toàn cho đa số PC gaming 1080p/1440p.",
        },
        {
            icon: <Fan />,
            title: "Lian Li LANCOOL 216",
            subtitle: "Case airflow mạnh",
            color: "emerald",
            points: [
                "Thiết kế ưu tiên airflow",
                "Thường được nhắc với 2 quạt trước 160mm",
                "1 quạt sau 140mm",
                "Hợp GPU nóng",
                "Phù hợp Core i7/Ryzen 7 + RTX 4070 Ti/4080 class",
            ],
            lesson: "Với GPU nóng và tải lâu, case airflow mạnh giúp máy mát, êm và ổn định hơn.",
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

function BuildLab() {
    const scenarios = {
        first: {
            icon: <PackageCheck />,
            title: "Lần đầu build",
            answer: "Chọn Mid Tower airflow tốt. Đây thường là lựa chọn an toàn nhất vì dễ lắp, dễ nâng cấp, hỗ trợ nhiều mainboard và GPU hơn case nhỏ.",
            color: "teal",
        },
        office: {
            icon: <Monitor />,
            title: "PC văn phòng",
            answer: "Mini Tower hoặc Micro-ATX case gọn là đủ nếu CPU/GPU không nóng. Vẫn nên có mặt thoáng, lọc bụi và không gian đi dây cơ bản.",
            color: "cyan",
        },
        hotGpu: {
            icon: <Gamepad2 />,
            title: "GPU mạnh/nóng",
            answer: "Ưu tiên case airflow mạnh, mặt trước mesh, 2–3 quạt hút vào, quạt sau xả ra, đủ GPU clearance và không gian dây PCIe/12V-2x6.",
            color: "orange",
        },
        airCooler: {
            icon: <Thermometer />,
            title: "Tản khí tháp lớn",
            answer: "Kiểm tra CPU cooler clearance theo mm. Nếu tản cao 158mm, case hỗ trợ 160mm là vừa nhưng khá sát; nên có dư thêm nếu được.",
            color: "blue",
        },
        aio: {
            icon: <Gauge />,
            title: "Dùng AIO 240/360",
            answer: "Kiểm tra radiator support ở mặt trước/trên, độ dày radiator + quạt, có cấn RAM/mainboard/GPU không.",
            color: "purple",
        },
        dust: {
            icon: <ShieldCheck />,
            title: "Phòng nhiều bụi",
            answer: "Ưu tiên case có lọc bụi tháo rời ở mặt trước, đáy PSU và mặt trên. Đặt dưới sàn thì càng nên vệ sinh định kỳ.",
            color: "emerald",
        },
    };
    const [active, setActive] = useState("first");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: chọn case theo tình huống"
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
            wrong: "Case chỉ để cho đẹp",
            right: "Case ảnh hưởng trực tiếp đến nhiệt độ, độ ồn, khả năng nâng cấp và độ bền linh kiện.",
        },
        {
            wrong: "Mainboard nào cũng lắp được vào case nào",
            right: "Phải kiểm tra form factor. Mainboard ATX cần case hỗ trợ ATX; case Mini-ITX không lắp được ATX.",
        },
        {
            wrong: "Case càng nhỏ càng tốt",
            right: "Case nhỏ đẹp và gọn nhưng khó lắp, nóng hơn và kén GPU/tản/PSU hơn, không lý tưởng cho người mới nếu chưa kiểm tra kỹ.",
        },
        {
            wrong: "Chỉ nhìn ảnh RGB/mặt kính",
            right: "Case đẹp nhưng bí gió có thể khiến CPU/GPU nóng, quạt ồn và hiệu năng giảm khi tải lâu.",
        },
        {
            wrong: "Quên kiểm tra GPU clearance",
            right: "Case hỗ trợ 330mm mà GPU dài 340mm là không vừa, nhất là card 3 quạt cao cấp.",
        },
        {
            wrong: "Quên front USB-C header",
            right: "Case có USB-C mặt trước nhưng mainboard không có internal USB-C header thì cổng đó có thể không dùng được.",
        },
    ];
    const tips = [
        "Người mới build PC nên ưu tiên Mid Tower airflow tốt.",
        "Kiểm tra 3 thông số trước khi mua: mainboard hỗ trợ, GPU dài bao nhiêu mm, tản CPU cao bao nhiêu mm.",
        "Build gaming/GPU mạnh: ưu tiên mặt trước mesh thay vì mặt kính kín hoàn toàn.",
        "Phòng nhiều bụi hoặc đặt máy dưới sàn: ưu tiên lọc bụi tháo rời.",
        "Đừng dồn quá nhiều tiền vào case nếu ngân sách thấp; chọn đủ thoáng, đủ chắc, dễ đi dây, còn lại ưu tiên CPU/RAM/SSD/GPU.",
        "Đừng đánh giá case chỉ bằng ảnh RGB; xem airflow, fan support, clearance và cable management.",
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
                        <span className="bg-teal-500/20 text-teal-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-teal-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                Case = bộ khung chứa, bảo vệ và cố định linh
                                kiện
                            </p>
                            <p>
                                Case tốt = airflow tốt + dễ đi dây + dễ vệ sinh
                                + dễ nâng cấp
                            </p>
                            <br />
                            <p className="text-slate-500">
                                # Kiểm tra trước khi mua
                            </p>
                            <p className="text-slate-300">
                                Mainboard support • GPU clearance • CPU cooler
                                clearance
                            </p>
                            <p className="text-slate-300">
                                Fan support • Radiator support • Front I/O •
                                Cable management
                            </p>
                            <br />
                            <p className="text-red-300">
                                Đừng chọn case chỉ vì đẹp/RGB. Case bí gió có
                                thể làm máy nóng và ồn hơn.
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
        question: "Vai trò quan trọng nhất của vỏ máy tính là gì?",
        options: [
            "Làm máy chạy nhanh hơn trực tiếp",
            "Chứa, bảo vệ linh kiện và hỗ trợ tản nhiệt",
            "Tăng dung lượng RAM",
            "Thay thế PSU",
        ],
        correct: 1,
        explanation:
            "Case chứa, bảo vệ, cố định linh kiện và tạo môi trường airflow/tản nhiệt cho hệ thống.",
    },
    {
        question: "Nếu mua mainboard ATX, cần kiểm tra gì ở case?",
        options: [
            "Case có hỗ trợ ATX không",
            "Case có màu đen không",
            "Case có nhiều RGB không",
            "Case có logo lớn không",
        ],
        correct: 0,
        explanation:
            "Mainboard ATX cần case hỗ trợ ATX. Case mATX/Mini-ITX nhỏ thường không lắp được ATX.",
    },
    {
        question: "Case mặt trước mesh thường có lợi thế gì?",
        options: [
            "Airflow tốt hơn",
            "Làm CPU có nhiều nhân hơn",
            "Tăng dung lượng SSD",
            "Giảm nhu cầu dùng PSU",
        ],
        correct: 0,
        explanation:
            "Mặt trước mesh/lưới thoáng giúp quạt hút gió mát vào dễ hơn, thường có airflow tốt hơn mặt kính kín.",
    },
    {
        question: "GPU clearance là gì?",
        options: [
            "Chiều dài tối đa GPU case hỗ trợ",
            "Dung lượng VRAM",
            "Tốc độ quạt GPU",
            "Số khe RAM trên mainboard",
        ],
        correct: 0,
        explanation:
            "GPU clearance là chiều dài tối đa của card đồ họa mà case có thể chứa.",
    },
    {
        question: "Với người mới build PC, loại case nào thường an toàn nhất?",
        options: [
            "Mid Tower airflow tốt",
            "Case nhỏ nhất có thể",
            "Case không có quạt",
            "Case chỉ có mặt kính kín",
        ],
        correct: 0,
        explanation:
            "Mid Tower thường cân bằng tốt giữa kích thước, giá, dễ lắp, airflow và khả năng nâng cấp.",
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
                    <strong className="text-teal-400">
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
                <span className="text-teal-400">
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
                        className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu vai trò của vỏ máy tính. Tiếp theo là phân loại case
                theo kích thước: Full Tower, Mid Tower, Mini-ITX — phần giúp bạn
                biết nên chọn case to hay nhỏ cho từng cấu hình PC.
            </p>
            <Link
                to="/phan-8-2"
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-teal-500/20"
            >
                Bài tiếp theo: 8.2 — Phân loại vỏ máy theo kích thước{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "teal" }) {
    const colorMap = {
        teal: "bg-teal-500/20 text-teal-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-teal-500/10 border-teal-400/50" : softBorder(color)}`}
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
        teal: "bg-teal-500/10 text-teal-300 border border-teal-500/20",
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
    return map[color] || map.teal;
}
function softBorder(color) {
    const map = {
        teal: "bg-teal-500/5 border-teal-500/20",
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
    return map[color] || map.teal;
}
function textColor(color) {
    const map = {
        teal: "text-teal-300",
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
    return map[color] || "text-teal-300";
}
