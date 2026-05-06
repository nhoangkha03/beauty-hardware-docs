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
    MemoryStick,
    Monitor,
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
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-fuchsia-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-400/30 flex items-center justify-center shadow-lg shadow-fuchsia-500/10">
                            <Layers3 className="text-fuchsia-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 6: Mainboard — Bản mạch chủ
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-fuchsia-300 bg-fuchsia-400/10 px-3 py-1 rounded-full border border-fuchsia-400/20">
                        Bài 6.7
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <ClothesAnalogy />
                <BuildFlowSimulator />
                <SizeDiagram />
                <FormFactorExplorer />
                <ComparisonTable />
                <SpecsExplorer />
                <CaseCompatibilityGuide />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-fuchsia-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-fuchsia-300">
                        <BookOpen size={16} /> Phần 6: Mainboard — Form Factor
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Form Factor
                        <span className="block text-fuchsia-400">
                            ATX, Micro-ATX, Mini-ITX
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Form factor là chuẩn kích thước và bố cục vật lý của
                        mainboard. Chọn sai có thể khiến mainboard không vừa
                        case, thiếu khe mở rộng, khó tản nhiệt hoặc khó nâng cấp
                        về sau.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Layers3 size={16} />} text="ATX" />
                        <Tag
                            icon={<PackageCheck size={16} />}
                            text="Micro-ATX"
                        />
                        <Tag icon={<Sparkles size={16} />} text="Mini-ITX" />
                        <Tag icon={<Fan size={16} />} text="Airflow" />
                        <Tag
                            icon={<Gamepad2 size={16} />}
                            text="GPU clearance"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Layers3 />}
                            label="ATX"
                            desc="Lớn, dễ nâng cấp"
                            color="blue"
                            highlight
                        />
                        <HeroTile
                            icon={<PackageCheck />}
                            label="mATX"
                            desc="Cân bằng, giá tốt"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<Sparkles />}
                            label="Mini-ITX"
                            desc="Nhỏ gọn, khó build"
                            color="fuchsia"
                        />
                        <HeroTile
                            icon={<Settings />}
                            label="Case"
                            desc="Phải hỗ trợ đúng size"
                            color="orange"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Kết luận nhanh</p>
                        <p>ATX = dễ build, dễ nâng cấp</p>
                        <p>mATX = đủ dùng, giá tốt</p>
                        <p className="text-fuchsia-300">
                            Mini-ITX = nhỏ gọn, cần tính kỹ
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu form factor là chuẩn kích thước, hình dạng, vị trí lỗ bắt ốc và khả năng tương thích case của mainboard.",
        "Phân biệt ATX, Micro-ATX, Mini-ITX và E-ATX theo kích thước, khe mở rộng, độ khó khi lắp.",
        "Biết form factor ảnh hưởng đến số khe RAM, PCIe, M.2, SATA, airflow và khả năng nâng cấp.",
        "Biết kiểm tra case hỗ trợ mainboard nào trước khi mua linh kiện.",
        "Tránh lỗi phổ biến: mua ATX cho case mATX, nghĩ Mini-ITX luôn rẻ hơn, không kiểm tra kích thước GPU/tản/PSU.",
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
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-fuchsia-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 text-fuchsia-300 flex items-center justify-center font-bold mb-4">
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
    const points = [
        {
            icon: <PackageCheck />,
            title: "Vừa case không?",
            desc: "Case phải hỗ trợ form factor của mainboard.",
            color: "fuchsia",
        },
        {
            icon: <MemoryStick />,
            title: "Bao nhiêu khe RAM?",
            desc: "ATX thường 4 khe; mATX 2 hoặc 4; Mini-ITX thường 2.",
            color: "emerald",
        },
        {
            icon: <Gamepad2 />,
            title: "Bao nhiêu khe PCIe?",
            desc: "ATX nhiều khe hơn, Mini-ITX thường chỉ 1 khe x16.",
            color: "blue",
        },
        {
            icon: <HardDrive />,
            title: "M.2/SATA đủ không?",
            desc: "Main nhỏ thường ít không gian cho ổ lưu trữ hơn.",
            color: "orange",
        },
        {
            icon: <Fan />,
            title: "Tản nhiệt và đi dây",
            desc: "Case/main càng nhỏ càng cần tính kỹ airflow, GPU, PSU, tản CPU.",
            color: "cyan",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Khái niệm cốt lõi: Form Factor là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Form Factor</strong> là chuẩn
                    quy định{" "}
                    <strong className="text-fuchsia-300">
                        kích thước, hình dạng, vị trí lỗ bắt ốc, bố trí khe mở
                        rộng và khả năng tương thích với case
                    </strong>{" "}
                    của mainboard.
                </p>
                <div className="grid md:grid-cols-5 gap-4">
                    {points.map((p) => (
                        <RoleCard key={p.title} {...p} />
                    ))}
                </div>
                <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-blue-300">Ghi nhớ:</strong> Form
                    factor không trực tiếp làm CPU/GPU mạnh hơn, nhưng quyết
                    định không gian lắp đặt, số khe mở rộng, airflow và khả năng
                    nâng cấp.
                </div>
            </div>
        </section>
    );
}

function ClothesAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: kích cỡ quần áo"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-4 gap-4">
                <AnalogyCard
                    icon={<Cpu />}
                    title="CPU/RAM/GPU = cơ thể"
                    desc="Các linh kiện cần một mainboard và case vừa vặn để hoạt động ổn định."
                    color="blue"
                />
                <AnalogyCard
                    icon={<Layers3 />}
                    title="ATX = size L"
                    desc="Rộng rãi, dễ thao tác, dễ nâng cấp, hợp case Mid Tower/Full Tower."
                    color="fuchsia"
                />
                <AnalogyCard
                    icon={<PackageCheck />}
                    title="mATX = size M"
                    desc="Cân bằng giữa giá, kích thước và tính năng, hợp đa số người dùng."
                    color="emerald"
                />
                <AnalogyCard
                    icon={<Sparkles />}
                    title="Mini-ITX = size S"
                    desc="Nhỏ gọn, đẹp, nhưng ít khe và cần tính kỹ từng milimet."
                    color="orange"
                />
            </div>
        </section>
    );
}

function BuildFlowSimulator() {
    const steps = [
        {
            icon: <Search />,
            title: "Chọn nhu cầu sử dụng",
            desc: "Gaming, học tập, làm việc, workstation, PC nhỏ gọn hay build tiết kiệm?",
        },
        {
            icon: <PackageCheck />,
            title: "Chọn kích thước case",
            desc: "Full Tower, Mid Tower, Micro-ATX case hay Mini-ITX/SFF case.",
        },
        {
            icon: <Layers3 />,
            title: "Chọn form factor mainboard",
            desc: "ATX, Micro-ATX hoặc Mini-ITX phải nằm trong danh sách case hỗ trợ.",
        },
        {
            icon: <MemoryStick />,
            title: "Kiểm tra khe RAM",
            desc: "2 khe hay 4 khe? Có đủ để nâng cấp 32GB/64GB về sau không?",
        },
        {
            icon: <Gamepad2 />,
            title: "Kiểm tra PCIe và GPU",
            desc: "Có đủ khe cho GPU/capture card/card mạng không? GPU dài/dày có vừa case không?",
        },
        {
            icon: <HardDrive />,
            title: "Kiểm tra M.2/SATA",
            desc: "Có đủ SSD NVMe và ổ phụ cho nhu cầu hiện tại và tương lai không?",
        },
        {
            icon: <Fan />,
            title: "Kiểm tra airflow, tản, PSU",
            desc: "Tản CPU cao bao nhiêu, GPU dài bao nhiêu, PSU ATX hay SFX, radiator có vừa không?",
        },
    ];
    const [active, setActive] = useState(0);
    const step = steps[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Form factor ảnh hưởng gì khi lắp máy?"
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
            </div>
        </section>
    );
}

function SizeDiagram() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="cyan"
                title="Sơ đồ kích thước tương đối"
                icon={<Gauge />}
            />
            <div className="grid lg:grid-cols-[1fr_0.85fr] gap-6 items-stretch">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                    <div className="relative h-[420px] bg-slate-950 border border-slate-800 rounded-3xl p-5 overflow-hidden">
                        <div className="absolute left-8 top-8 w-[300px] h-[240px] border-2 border-blue-400/60 bg-blue-500/10 rounded-2xl p-4">
                            <p className="text-blue-300 font-black">ATX</p>
                            <p className="text-xs text-slate-400">
                                305 × 244 mm
                            </p>
                        </div>
                        <div className="absolute left-8 top-8 w-[240px] h-[240px] border-2 border-emerald-400/60 bg-emerald-500/10 rounded-2xl p-4">
                            <p className="text-emerald-300 font-black mt-10">
                                Micro-ATX
                            </p>
                            <p className="text-xs text-slate-400">
                                244 × 244 mm
                            </p>
                        </div>
                        <div className="absolute left-8 top-8 w-[168px] h-[168px] border-2 border-fuchsia-400/70 bg-fuchsia-500/10 rounded-2xl p-4">
                            <p className="text-fuchsia-300 font-black mt-16">
                                Mini-ITX
                            </p>
                            <p className="text-xs text-slate-400">
                                170 × 170 mm
                            </p>
                        </div>
                        <div className="absolute bottom-5 right-5 text-xs text-slate-500 max-w-[220px]">
                            Minh họa tương đối để dễ hình dung, không phải bản
                            vẽ kỹ thuật chính xác.
                        </div>
                    </div>
                </div>
                <div className="grid gap-4">
                    <InfoCard
                        label="ATX"
                        value="305 × 244 mm — lớn, nhiều khe, dễ nâng cấp"
                        color="blue"
                    />
                    <InfoCard
                        label="Micro-ATX / mATX"
                        value="244 × 244 mm — vừa, cân bằng, phổ biến"
                        color="emerald"
                    />
                    <InfoCard
                        label="Mini-ITX / mITX"
                        value="170 × 170 mm — nhỏ gọn, ít khe, khó build hơn"
                        color="fuchsia"
                    />
                </div>
            </div>
        </section>
    );
}

function FormFactorExplorer() {
    const types = {
        atx: {
            icon: <Layers3 />,
            title: "ATX",
            size: "305 × 244 mm",
            color: "blue",
            good: [
                "Dễ lắp đặt",
                "Thường có 4 khe RAM",
                "Nhiều khe PCIe",
                "Nhiều M.2/SATA hơn",
                "Dễ đi dây và tản nhiệt hơn",
            ],
            fit: "Gaming PC, PC làm việc lâu dài, nhiều SSD/HDD, GPU lớn, người mới build muốn dễ thao tác",
        },
        matx: {
            icon: <PackageCheck />,
            title: "Micro-ATX / mATX",
            size: "244 × 244 mm",
            color: "emerald",
            good: [
                "Gọn hơn ATX",
                "Giá thường dễ chịu",
                "Đủ dùng cho đa số",
                "Vẫn lắp GPU rời tốt",
                "Phổ biến, dễ mua",
            ],
            fit: "Văn phòng, học tập, gaming phổ thông, build tiết kiệm, 1 GPU + 1–2 SSD",
        },
        itx: {
            icon: <Sparkles />,
            title: "Mini-ITX / mITX",
            size: "170 × 170 mm",
            color: "fuchsia",
            good: [
                "Rất nhỏ gọn",
                "Đẹp, tối giản",
                "Hợp PC phòng khách",
                "Có thể build máy mạnh nếu chọn kỹ",
                "Tiết kiệm diện tích",
            ],
            fit: "PC nhỏ gọn, SFF, setup tối giản, người đã có kinh nghiệm lắp máy",
        },
        eatx: {
            icon: <Zap />,
            title: "E-ATX / Extended ATX",
            size: "Lớn hơn ATX",
            color: "orange",
            good: [
                "Nhiều không gian cho VRM",
                "Nhiều khe PCIe/M.2",
                "Hợp hệ thống rất mạnh",
                "Workstation cá nhân",
                "Cần case hỗ trợ riêng",
            ],
            fit: "Ryzen 9, Core i9, Threadripper, workstation, hệ thống cao cấp nhiều thiết bị",
        },
    };
    const [active, setActive] = useState("matx");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="fuchsia"
                title="Các loại form factor phổ biến"
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
                <div className="grid md:grid-cols-[0.75fr_1.25fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className={`${textColor(item.color)} font-semibold`}>
                            {item.size}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div
                            className={`${softBorder(item.color)} border rounded-3xl p-5`}
                        >
                            <p
                                className={`${textColor(item.color)} font-bold mb-3`}
                            >
                                Đặc điểm
                            </p>
                            <div className="space-y-2">
                                {item.good.map((g) => (
                                    <Bullet key={g} text={g} />
                                ))}
                            </div>
                        </div>
                        <InfoCard
                            label="Phù hợp"
                            value={item.fit}
                            color={item.color}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ComparisonTable() {
    const rows = [
        ["Kích thước", "Lớn", "Trung bình", "Nhỏ"],
        ["Dễ lắp đặt", "Dễ", "Dễ", "Khó hơn"],
        ["Số khe RAM", "Thường 4", "2 hoặc 4", "Thường 2"],
        ["Số khe PCIe", "Nhiều", "Vừa đủ", "Thường 1"],
        ["M.2/SATA", "Thường nhiều hơn", "Vừa đủ", "Ít hơn"],
        ["Khả năng nâng cấp", "Tốt", "Khá", "Hạn chế"],
        [
            "Giá mainboard",
            "Trung bình đến cao",
            "Thường tốt nhất",
            "Thường cao so với kích thước",
        ],
        [
            "Case phù hợp",
            "Mid Tower, Full Tower",
            "mATX case, Mid Tower",
            "ITX case",
        ],
        ["Tản nhiệt/airflow", "Dễ tối ưu", "Khá dễ", "Khó hơn"],
        [
            "Phù hợp với",
            "Gaming/làm việc/nâng cấp",
            "Đa số người dùng",
            "PC nhỏ gọn",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="blue"
                title="So sánh ATX, Micro-ATX, Mini-ITX"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[920px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Tiêu chí</th>
                            <th className="p-4 text-blue-300">ATX</th>
                            <th className="p-4 text-emerald-300">Micro-ATX</th>
                            <th className="p-4 text-fuchsia-300">Mini-ITX</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr
                                key={row[0]}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-white font-bold">
                                    {row[0]}
                                </td>
                                <td className="p-4 text-slate-300">{row[1]}</td>
                                <td className="p-4 text-slate-300">{row[2]}</td>
                                <td className="p-4 text-slate-300">{row[3]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                <RuleCard
                    label="Muốn dễ build, dễ nâng cấp"
                    value="Chọn ATX."
                    color="blue"
                />
                <RuleCard
                    label="Muốn tiết kiệm, đủ dùng"
                    value="Chọn Micro-ATX."
                    color="emerald"
                />
                <RuleCard
                    label="Muốn nhỏ gọn, đẹp"
                    value="Chọn Mini-ITX, nhưng phải tính kỹ."
                    color="fuchsia"
                />
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        size: {
            icon: <PackageCheck />,
            title: "Kích thước mainboard",
            detail: "Mainboard phải khớp với case hỗ trợ: ATX, mATX, Mini-ITX hoặc E-ATX.",
            impact: "Case mATX thường không lắp được ATX; case ATX thường lắp được ATX, mATX và Mini-ITX.",
        },
        ram: {
            icon: <MemoryStick />,
            title: "Số khe RAM",
            detail: "ATX thường 4 khe, mATX 2 hoặc 4 khe, Mini-ITX thường 2 khe.",
            impact: "Mini-ITX dùng 2x8GB muốn nâng lên 32GB thường phải thay cả bộ thành 2x16GB.",
        },
        pcie: {
            icon: <Gamepad2 />,
            title: "Số khe PCIe",
            detail: "PCIe quyết định khả năng gắn GPU, capture card, card mạng, sound card, card USB.",
            impact: "Nếu chỉ dùng 1 GPU, ITX vẫn đủ; nếu cần nhiều card mở rộng, nên chọn mATX hoặc ATX.",
        },
        storage: {
            icon: <HardDrive />,
            title: "M.2 và SATA",
            detail: "Mainboard càng nhỏ thường càng ít không gian cho khe M.2 và cổng SATA.",
            impact: "Gaming phổ thông cần 1–2 M.2; làm video/workstation nên kiểm tra 2–3 khe trở lên.",
        },
        cooling: {
            icon: <Fan />,
            title: "Tản nhiệt và đi dây",
            detail: "Main/case lớn thường dễ đi dây và tối ưu airflow hơn.",
            impact: "Mini-ITX cần kiểm tra chiều cao tản CPU, chiều dài/độ dày GPU, loại PSU và vị trí radiator.",
        },
        psu: {
            icon: <PlugZap />,
            title: "PSU ATX hay SFX",
            detail: "Case nhỏ có thể cần nguồn SFX thay vì ATX PSU thông thường.",
            impact: "SFX PSU thường đắt hơn và cần chọn công suất/chất lượng kỹ khi dùng GPU mạnh.",
        },
    };
    const [active, setActive] = useState("size");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="yellow"
                title="Thông số kỹ thuật quan trọng"
                icon={<Gauge />}
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

function CaseCompatibilityGuide() {
    const rows = [
        ["Full Tower", "E-ATX, ATX, mATX, Mini-ITX"],
        ["Mid Tower", "Thường ATX, mATX, Mini-ITX"],
        ["Micro-ATX Case", "mATX, Mini-ITX"],
        ["Mini-ITX Case", "Thường chỉ Mini-ITX"],
    ];
    const checklist = [
        "Motherboard support: ATX / Micro-ATX / Mini-ITX",
        "GPU length support: dài bao nhiêu mm?",
        "GPU thickness: 2-slot, 2.5-slot, 3-slot?",
        "CPU cooler height: tản khí cao bao nhiêu mm?",
        "PSU support: ATX hay SFX?",
        "Radiator support: 120/240/280/360 mm?",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="cyan"
                title="Case nào lắp được mainboard nào?"
                icon={<PackageCheck />}
            />
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 overflow-x-auto">
                    <table className="w-full min-w-[520px] text-sm">
                        <thead>
                            <tr className="text-left text-slate-400">
                                <th className="p-4">Case hỗ trợ</th>
                                <th className="p-4">Có thể lắp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map(([c, fit]) => (
                                <tr
                                    key={c}
                                    className="border-t border-slate-800"
                                >
                                    <td className="p-4 text-cyan-300 font-extrabold">
                                        {c}
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        {fit}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-3xl p-6">
                    <h3 className="text-xl font-bold text-cyan-300 mb-5 flex items-center gap-2">
                        <BookOpen /> Dòng cần tìm trên trang case
                    </h3>
                    <div className="space-y-3">
                        {checklist.map((item) => (
                            <div
                                key={item}
                                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-3 text-sm text-slate-300"
                            >
                                <CheckCircle2
                                    className="text-green-400 shrink-0 mt-0.5"
                                    size={18}
                                />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Layers3 />,
            title: "ASUS PRIME B650-PLUS",
            subtitle: "ATX, AM5, DDR5",
            color: "blue",
            points: [
                "Form factor ATX",
                "Kích thước 12 × 9.6 inch / 30.5 × 24.4 cm",
                "4 khe RAM",
                "Nhiều không gian hơn mATX/ITX",
                "Hợp case Mid Tower hỗ trợ ATX",
            ],
            lesson: "ATX hợp người muốn dễ lắp, dễ đi dây, dùng GPU lớn và nâng cấp lâu dài.",
        },
        {
            icon: <PackageCheck />,
            title: "ASUS PRIME B650M-A WIFI II",
            subtitle: "Micro-ATX, AM5, Wi-Fi",
            color: "emerald",
            points: [
                "mATX gọn hơn ATX",
                "Lắp được trong case mATX hoặc ATX",
                "Có M.2, SATA, Wi-Fi",
                "Giá thường mềm hơn ATX cao cấp",
                "Ít khe PCIe hơn ATX",
            ],
            lesson: "mATX là lựa chọn an toàn giá tốt cho gaming/học tập/làm việc phổ thông.",
        },
        {
            icon: <Sparkles />,
            title: "ASUS ROG STRIX B650E-I GAMING WIFI",
            subtitle: "Mini-ITX, AM5, SFF",
            color: "fuchsia",
            points: [
                "Form factor Mini-ITX",
                "DDR5, Wi-Fi 6E",
                "USB 3.2 Gen 2x2",
                "Thường chỉ 2 khe RAM và 1 khe PCIe x16",
                "Build nhỏ gọn nhưng cần case/tản/PSU phù hợp",
            ],
            lesson: "Mini-ITX có thể rất mạnh và đẹp, nhưng không dành cho người muốn lắp dễ và nâng cấp nhiều card.",
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

function PickerLab() {
    const scenarios = {
        beginner: {
            icon: <BookOpen />,
            title: "Lần đầu build PC",
            answer: "Chọn ATX trong case Mid Tower nếu muốn dễ lắp nhất, hoặc mATX nếu muốn tiết kiệm/gọn hơn. Tránh Mini-ITX nếu chưa tự tin.",
            color: "blue",
        },
        budget: {
            icon: <PackageCheck />,
            title: "Build tiết kiệm",
            answer: "Micro-ATX thường rất hợp lý: giá tốt, dễ mua, đủ khe RAM/M.2, vẫn lắp GPU rời và case không quá to.",
            color: "emerald",
        },
        expand: {
            icon: <HardDrive />,
            title: "Nhiều SSD/card mở rộng",
            answer: "Chọn ATX hoặc E-ATX nếu cần nhiều khe PCIe, nhiều M.2/SATA và không gian lắp thoải mái.",
            color: "orange",
        },
        small: {
            icon: <Sparkles />,
            title: "PC nhỏ gọn/SFF",
            answer: "Chọn Mini-ITX nhưng lập danh sách tương thích: GPU dài/dày bao nhiêu, tản CPU cao bao nhiêu, PSU ATX hay SFX, case hỗ trợ radiator không.",
            color: "fuchsia",
        },
        caseAtx: {
            icon: <Layers3 />,
            title: "Có case ATX lớn",
            answer: "Thường lắp được ATX, mATX và Mini-ITX. Lắp mATX vào case ATX vẫn chạy bình thường, chỉ nhìn hơi trống.",
            color: "cyan",
        },
    };
    const [active, setActive] = useState("budget");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: chọn form factor theo tình huống"
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
            wrong: "Mua mainboard ATX cho case chỉ hỗ trợ mATX",
            right: "Case mATX thường không lắp được main ATX vì main ATX lớn hơn. Phải xem thông số case trước khi mua.",
        },
        {
            wrong: "Mini-ITX luôn rẻ hơn vì nhỏ hơn",
            right: "Mini-ITX nhỏ nhưng thiết kế dày đặc, thường có Wi-Fi, VRM tốt và case/PSU SFX đắt nên tổng chi phí có thể cao.",
        },
        {
            wrong: "Chọn Mini-ITX nhưng không kiểm tra kích thước GPU",
            right: "ITX phải kiểm tra chiều dài GPU, độ dày GPU, dây nguồn GPU, airflow, PSU ATX/SFX và vị trí radiator.",
        },
        {
            wrong: "Mainboard nhỏ thì hiệu năng luôn yếu",
            right: "Form factor không trực tiếp quyết định hiệu năng. Mini-ITX cao cấp vẫn chạy CPU/GPU mạnh nếu VRM, tản nhiệt và case đủ tốt.",
        },
        {
            wrong: "Lắp mATX vào case ATX là sai",
            right: "Case ATX thường lắp được mATX. Nhìn có thể hơi trống nhưng không ảnh hưởng hoạt động nếu bắt ốc đúng vị trí.",
        },
    ];
    const tips = [
        "Người mới nên chọn ATX hoặc Micro-ATX.",
        "Luôn kiểm tra dòng Motherboard support trên trang thông số case.",
        "Chỉ 1 GPU, 1–2 SSD, tiết kiệm: Micro-ATX rất hợp lý.",
        "Nhiều SSD, nhiều card mở rộng: chọn ATX.",
        "Máy nhỏ gọn, ít nâng cấp: Mini-ITX nhưng phải lập danh sách tương thích trước.",
        "Với Mini-ITX, kiểm tra GPU length, CPU cooler height, PSU type, radiator support và số M.2.",
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
                            <p>
                                Form Factor = kích thước + bố cục + lỗ ốc + case
                                compatibility
                            </p>
                            <br />
                            <p className="text-slate-500">
                                # Kích thước phổ biến
                            </p>
                            <p className="text-slate-300">ATX = 305 × 244 mm</p>
                            <p className="text-slate-300">
                                Micro-ATX = 244 × 244 mm
                            </p>
                            <p className="text-slate-300">
                                Mini-ITX = 170 × 170 mm
                            </p>
                            <br />
                            <p className="text-slate-500"># Chọn nhanh</p>
                            <p className="text-slate-300">
                                Dễ build/nâng cấp → ATX
                            </p>
                            <p className="text-slate-300">
                                Giá tốt/đủ dùng → Micro-ATX
                            </p>
                            <p className="text-slate-300">
                                Nhỏ gọn/đẹp → Mini-ITX
                            </p>
                            <br />
                            <p className="text-red-300">
                                Không đoán bằng mắt. Luôn đọc thông số case.
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
        question: "Form factor của mainboard quy định điều gì?",
        options: [
            "Tốc độ CPU",
            "Kích thước, bố cục và khả năng tương thích case",
            "Dung lượng SSD",
            "Tần số quét màn hình",
        ],
        correct: 1,
        explanation:
            "Form factor quy định kích thước, hình dạng, vị trí lỗ bắt ốc, bố trí khe mở rộng và khả năng tương thích case.",
    },
    {
        question: "Loại mainboard nào thường lớn nhất trong 3 loại phổ biến?",
        options: ["Mini-ITX", "Micro-ATX", "ATX", "SO-DIMM"],
        correct: 2,
        explanation:
            "Trong ba loại phổ biến ATX, Micro-ATX và Mini-ITX, ATX thường lớn nhất.",
    },
    {
        question: "Micro-ATX phù hợp nhất với ai?",
        options: [
            "Người cần máy cân bằng, giá tốt, đủ dùng",
            "Người cần server rack chuyên nghiệp",
            "Người chỉ dùng laptop",
            "Người không dùng case",
        ],
        correct: 0,
        explanation:
            "Micro-ATX cân bằng tốt giữa giá, kích thước và tính năng, phù hợp đa số người dùng phổ thông.",
    },
    {
        question: "Mini-ITX có nhược điểm phổ biến nào?",
        options: [
            "Không thể dùng CPU mạnh",
            "Luôn chậm hơn ATX",
            "Ít khe mở rộng và khó lắp hơn",
            "Không dùng được SSD",
        ],
        correct: 2,
        explanation:
            "Mini-ITX nhỏ gọn nhưng thường ít khe RAM/PCIe/M.2 hơn và khó lắp/tản nhiệt hơn.",
    },
    {
        question: "Case ATX thường có thể lắp mainboard nào?",
        options: [
            "Chỉ Mini-ITX",
            "Chỉ Micro-ATX",
            "Thường lắp được ATX, Micro-ATX và Mini-ITX",
            "Không lắp được mainboard nào",
        ],
        correct: 2,
        explanation:
            "Case ATX thường hỗ trợ ATX, Micro-ATX và Mini-ITX, nhưng vẫn nên kiểm tra thông số case cụ thể.",
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
    }
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
                Bạn đã hiểu form factor ATX, Micro-ATX và Mini-ITX. Tiếp theo là
                BIOS và UEFI: firmware của mainboard — lớp đầu tiên kiểm tra,
                cấu hình và khởi động toàn bộ hệ thống sau khi bạn lắp đúng phần
                cứng.
            </p>
            <Link
                to="/phan-6-8"
                className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-fuchsia-500/20"
            >
                Bài tiếp theo: 6.8 — BIOS và UEFI: Firmware của Mainboard{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "fuchsia" }) {
    const colorMap = {
        fuchsia: "bg-fuchsia-500/20 text-fuchsia-300",
        blue: "bg-blue-500/20 text-blue-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
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
function RuleCard({ label, value, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-4`}>
            <p className={`${textColor(color)} font-bold text-sm mb-1`}>
                {label}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
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
        fuchsia:
            "bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.fuchsia;
}
function softBorder(color) {
    const map = {
        fuchsia: "bg-fuchsia-500/5 border-fuchsia-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.fuchsia;
}
function textColor(color) {
    const map = {
        fuchsia: "text-fuchsia-300",
        blue: "text-blue-300",
        cyan: "text-cyan-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-fuchsia-300";
}
