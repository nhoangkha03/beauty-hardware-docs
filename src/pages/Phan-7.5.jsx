import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BatteryCharging,
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
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                            <Gauge className="text-emerald-400" size={24} />
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
                    <div className="text-sm font-semibold text-emerald-300 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                        Bài 7.5
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <WaterTankAnalogy />
                <CalculatorSimulator />
                <GpuWattageGuide />
                <ComponentWattageTable />
                <SpecsExplorer />
                <RealExamples />
                <UpgradeLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-emerald-300">
                        <BookOpen size={16} /> Phần 7: PSU — Tính công suất
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Tính toán công suất
                        <span className="block text-emerald-400">
                            nguồn cần thiết
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        PSU không phải “càng cao càng tốt”. Chọn đúng là đủ công
                        suất, đủ chất lượng, có khoảng dư 20–30% và phù hợp
                        CPU/GPU, số ổ, quạt, tải nặng, nâng cấp tương lai.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="CPU Watt" />
                        <Tag icon={<Gamepad2 size={16} />} text="GPU Watt" />
                        <Tag icon={<Zap size={16} />} text="Transient Spike" />
                        <Tag
                            icon={<Gauge size={16} />}
                            text="20–30% Headroom"
                        />
                        <Tag icon={<ShieldCheck size={16} />} text="12V Rail" />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Cpu />}
                            label="CPU"
                            desc="35–300W"
                            color="blue"
                        />
                        <HeroTile
                            icon={<Gamepad2 />}
                            label="GPU"
                            desc="75–450W+"
                            color="emerald"
                            highlight
                        />
                        <HeroTile
                            icon={<HardDrive />}
                            label="Phụ kiện"
                            desc="~100W"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Gauge />}
                            label="Dư tải"
                            desc="× 1.3"
                            color="yellow"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Công thức nhanh</p>
                        <p>PSU ≈ (CPU + GPU + 100W) × 1.3</p>
                        <p className="text-emerald-300">
                            → làm tròn lên 550 / 650 / 750 / 850W
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu công suất PSU cần thiết là mức Watt nên có để cấp điện ổn định cho toàn hệ thống.",
        "Biết công thức nhanh: PSU nên chọn ≈ (CPU Watt + GPU Watt + 100W phụ kiện) × 1.3.",
        "Chọn PSU theo phân khúc GPU: không GPU rời, RTX 4060, RTX 4070 Super, RTX 4080 class, RTX 4090 class, workstation.",
        "Hiểu TDP không phải lúc nào cũng là mức tiêu thụ tối đa thật, GPU thường quyết định PSU và transient spike cần khoảng dư.",
        "Tránh lỗi chọn PSU sát tải, chọn Watt cao nhưng chất lượng kém, nghĩ PSU mạnh làm tăng FPS hoặc quên tính GPU khi nâng cấp.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="emerald"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-300 flex items-center justify-center font-bold mb-4">
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
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Công suất nguồn cần thiết là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">
                        Công suất nguồn cần thiết
                    </strong>{" "}
                    là mức Watt PSU nên có để cấp điện ổn định cho CPU, GPU,
                    mainboard, RAM, SSD/HDD, quạt, bơm AIO, hub RGB/LED và thiết
                    bị USB. Mục tiêu không phải là mua số Watt lớn nhất, mà là
                    chọn đủ tải, có dư an toàn và đúng chất lượng.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    <FormulaCard
                        icon={<Cpu />}
                        title="Tải thực tế"
                        value="CPU + GPU + phụ kiện"
                        color="blue"
                    />
                    <FormulaCard
                        icon={<Gauge />}
                        title="Khoảng dư"
                        value="20–30%"
                        color="emerald"
                    />
                    <FormulaCard
                        icon={<PackageCheck />}
                        title="Chọn chuẩn"
                        value="550 / 650 / 750 / 850 / 1000W"
                        color="orange"
                    />
                </div>
                <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Công suất PSU nên chọn = Mức tiêu thụ thực tế + khoảng dư an
                    toàn + khoảng nâng cấp nếu cần
                </div>
            </div>
        </section>
    );
}

function WaterTankAnalogy() {
    const cards = [
        {
            icon: <BatteryCharging />,
            title: "PSU = bình nước",
            desc: "Bình phải đủ lớn để cấp cho cả nhà khi nhiều vòi mở cùng lúc.",
            color: "emerald",
        },
        {
            icon: <AlertTriangle />,
            title: "Bình quá nhỏ",
            desc: "Mở nhiều vòi sẽ yếu hoặc thiếu; PSU thiếu tải gây crash, restart, tắt máy.",
            color: "red",
        },
        {
            icon: <Gauge />,
            title: "Bình quá lớn quá mức",
            desc: "Vẫn dùng được nhưng tốn tiền mua ban đầu nếu không có nhu cầu.",
            color: "orange",
        },
        {
            icon: <ShieldCheck />,
            title: "Bình tốt, đủ dư",
            desc: "Cấp ổn định, ít ồn hơn, mát hơn và còn dư nâng cấp vừa phải.",
            color: "blue",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: bình nước cấp cho cả ngôi nhà"
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

function CalculatorSimulator() {
    const presets = {
        office: {
            title: "Văn phòng iGPU",
            cpu: 80,
            gpu: 0,
            extra: 80,
            color: "cyan",
        },
        rtx4060: {
            title: "Gaming RTX 4060",
            cpu: 100,
            gpu: 130,
            extra: 90,
            color: "emerald",
        },
        rtx4070s: {
            title: "RTX 4070 Super",
            cpu: 140,
            gpu: 250,
            extra: 100,
            color: "yellow",
        },
        rtx4080: {
            title: "RTX 4080 class",
            cpu: 200,
            gpu: 360,
            extra: 130,
            color: "orange",
        },
        workstation: {
            title: "Workstation/AI",
            cpu: 280,
            gpu: 450,
            extra: 180,
            color: "red",
        },
    };
    const [active, setActive] = useState("rtx4060");
    const item = presets[active];
    const base = item.cpu + item.gpu + item.extra;
    const withHeadroom = Math.ceil(base * 1.3);
    const rounded =
        withHeadroom <= 450
            ? "450W"
            : withHeadroom <= 550
              ? "550W"
              : withHeadroom <= 650
                ? "650W"
                : withHeadroom <= 750
                  ? "750W"
                  : withHeadroom <= 850
                    ? "850W"
                    : withHeadroom <= 1000
                      ? "1000W"
                      : "1200W+";
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Mô phỏng: tính công suất PSU nhanh"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    {Object.entries(presets).map(([key, p]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl border p-4 font-bold transition-all ${active === key ? `${softBorder(p.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            {p.title}
                        </button>
                    ))}
                </div>
                <div className="grid lg:grid-cols-5 gap-4">
                    <MetricCard
                        icon={<Cpu />}
                        label="CPU"
                        value={`${item.cpu}W`}
                        color="blue"
                    />
                    <MetricCard
                        icon={<Gamepad2 />}
                        label="GPU"
                        value={`${item.gpu}W`}
                        color="emerald"
                    />
                    <MetricCard
                        icon={<HardDrive />}
                        label="Phụ kiện"
                        value={`${item.extra}W`}
                        color="orange"
                    />
                    <MetricCard
                        icon={<Gauge />}
                        label="Tổng × 1.3"
                        value={`${withHeadroom}W`}
                        color="yellow"
                    />
                    <MetricCard
                        icon={<PackageCheck />}
                        label="Chọn gần nhất"
                        value={rounded}
                        color={item.color}
                    />
                </div>
                <div className="mt-6 bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    ({item.cpu}W + {item.gpu}W + {item.extra}W) × 1.3 ={" "}
                    <span className={textColor(item.color)}>
                        {withHeadroom}W
                    </span>{" "}
                    → chọn PSU{" "}
                    <span className="text-emerald-300">{rounded}</span> chất
                    lượng tốt
                </div>
            </div>
        </section>
    );
}

function GpuWattageGuide() {
    const rows = [
        ["Không GPU rời, dùng iGPU", "300–450W", "Máy văn phòng, học tập"],
        ["GTX 1650 / RX 6400", "450W", "GPU tiết kiệm điện"],
        ["RTX 3050 / RX 6600", "500–550W", "Gaming nhẹ"],
        ["RTX 4060 / RX 7600", "550–650W", "Gaming phổ thông"],
        ["RTX 4060 Ti / RX 6700 XT", "650W", "Nên chọn nguồn tốt"],
        [
            "RTX 4070 / RTX 4070 Super / RX 7800 XT",
            "650–750W",
            "Gaming tầm khá",
        ],
        ["RTX 4070 Ti Super / RX 7900 XT", "750–850W", "Cấu hình mạnh"],
        [
            "RTX 4080 / RTX 4080 Super / RX 7900 XTX",
            "850W",
            "Nên dùng Gold tốt",
        ],
        ["RTX 4090 class", "1000W trở lên", "Nên chọn PSU cao cấp"],
        ["Workstation nhiều GPU", "1200W+", "Phải tính kỹ từng linh kiện"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="emerald"
                title="Cách 1: tính nhanh theo phân khúc GPU"
                icon={<Gamepad2 />}
            />
            <DataTable
                title="GPU quyết định PSU trong PC gaming"
                rows={rows}
                headers={["GPU / cấu hình", "PSU nên chọn", "Ghi chú"]}
                accent="emerald"
            />
        </section>
    );
}

function ComponentWattageTable() {
    const rows = [
        ["CPU phổ thông", "35–90W"],
        ["CPU gaming tầm trung", "65–150W"],
        ["CPU cao cấp", "170–300W tùy tải"],
        ["GPU phổ thông", "75–170W"],
        ["GPU tầm trung", "170–250W"],
        ["GPU cao cấp", "300–450W+"],
        ["Mainboard", "30–60W"],
        ["1 thanh RAM", "3–8W"],
        ["SSD M.2", "3–10W"],
        ["HDD 3.5 inch", "6–15W"],
        ["Quạt case", "1–5W/quạt"],
        ["AIO pump", "5–15W"],
        ["RGB/hub", "5–30W tùy số lượng"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="blue"
                title="Cách 2: tính theo CPU + GPU + phụ kiện"
                icon={<Cpu />}
            />
            <DataTable
                title="Mức tiêu thụ thường gặp"
                rows={rows}
                headers={["Thành phần", "Mức tiêu thụ ước tính"]}
                accent="blue"
            />
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                Ví dụ: Ryzen 5 7600 90W + RTX 4060 130W + phụ kiện 100W = 320W
                <br />
                320 × 1.3 = 416W → PSU 550W tốt là đủ, 650W nếu muốn dư nâng
                cấp.
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        tdp: {
            icon: <Cpu />,
            title: "TDP không phải max thật",
            detail: "TDP liên quan đến nhiệt thiết kế, không phải lúc nào cũng bằng điện tiêu thụ tối đa.",
            impact: "CPU ghi 65W khi boost có thể ăn cao hơn, nên không chọn PSU sát theo TDP đẹp trên giấy.",
        },
        gpu: {
            icon: <Gamepad2 />,
            title: "GPU thường quyết định PSU",
            detail: "Với gaming PC, GPU thường ăn điện nhiều hơn CPU.",
            impact: "Cùng Core i5, RTX 4060 có thể dùng 550–650W, nhưng RTX 4080 class nên 850W tốt trở lên.",
        },
        spike: {
            icon: <Zap />,
            title: "Transient spike",
            detail: "GPU có thể tăng điện rất nhanh trong thời gian ngắn, giống xe bất ngờ vọt ga.",
            impact: "PSU cần đủ chất lượng và dư tải để không sụt áp, tắt máy hoặc restart.",
        },
        eff: {
            icon: <Sparkles />,
            title: "Hiệu suất không trừ công suất",
            detail: "PSU 650W Gold vẫn có thể cấp khoảng 650W DC cho linh kiện nếu là nguồn tốt.",
            impact: "80 PLUS quyết định PSU lấy bao nhiêu điện từ ổ cắm, không phải 650W × 90% = 585W cấp ra.",
        },
        rail: {
            icon: <ShieldCheck />,
            title: "Đường 12V",
            detail: "CPU và GPU chủ yếu dùng 12V.",
            impact: "PSU 650W tốt nên có đường 12V cấp gần 650W; 12V thấp bất thường là dấu hiệu cần tránh.",
        },
        load: {
            icon: <Gauge />,
            title: "Khoảng tải tối ưu",
            detail: "PSU thường đạt hiệu suất tốt ở khoảng 40–60% tải.",
            impact: "Máy tải nặng 400W với PSU 650W là khoảng 61%, đẹp hơn chạy PSU 450W gần 90%.",
        },
    };
    const [active, setActive] = useState("spike");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số quan trọng khi tính PSU"
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
            icon: <Cpu />,
            title: "PC văn phòng không GPU rời",
            subtitle: "130–180W tải nặng",
            color: "cyan",
            points: [
                "Core i3 / Ryzen 5 5600G",
                "RAM 16GB",
                "SSD NVMe 500GB",
                "2–3 quạt",
                "PSU phù hợp: 300–450W chất lượng tốt",
            ],
            lesson: "Máy văn phòng không cần PSU 750W; 350–450W tốt hợp lý hơn nguồn công suất lớn nhưng kém chất lượng.",
        },
        {
            icon: <Gamepad2 />,
            title: "Gaming phổ thông RTX 4060",
            subtitle: "250–360W tải nặng",
            color: "emerald",
            points: [
                "Ryzen 5 / Core i5",
                "RTX 4060 khoảng 115–130W",
                "SSD 1TB NVMe",
                "3–5 quạt",
                "PSU phù hợp: 550W tốt hoặc 650W dư nâng cấp",
            ],
            lesson: "RTX 4060 không cần nguồn quá lớn; 550–650W tốt là vùng hợp lý.",
        },
        {
            icon: <Sparkles />,
            title: "RTX 4070 Super",
            subtitle: "400–550W tải nặng",
            color: "yellow",
            points: [
                "Ryzen 7 / Core i5-i7",
                "GPU 220–250W",
                "32GB DDR5",
                "1–2TB NVMe",
                "PSU phù hợp: 650W tốt có thể đủ, 750W Gold đẹp hơn",
            ],
            lesson: "750W Gold là mức cân bằng cho gaming tầm khá, mát, êm và có dư vừa phải.",
        },
        {
            icon: <Zap />,
            title: "RTX 4080 class",
            subtitle: "550–750W tải nặng",
            color: "orange",
            points: [
                "Ryzen 7/9 hoặc Core i7/i9",
                "GPU 320–360W",
                "Nhiều SSD/AIO/quạt",
                "PSU phù hợp: 850W Gold tốt",
                "1000W nếu CPU rất mạnh hoặc muốn dư nâng cấp",
            ],
            lesson: "GPU cao cấp nên ưu tiên PSU ATX 3.0/3.1, có dây 12VHPWR/12V-2x6 native nếu cần.",
        },
        {
            icon: <Database />,
            title: "Workstation render / AI nhẹ",
            subtitle: "650–950W+ tải nặng",
            color: "red",
            points: [
                "Ryzen 9 / Core i9",
                "RTX 4090 class",
                "64–128GB RAM",
                "Nhiều NVMe/HDD",
                "PSU phù hợp: 1000W Gold/Platinum, 1200W+ nếu nhiều GPU/ổ",
            ],
            lesson: "Máy làm tiền, render, AI chạy lâu không nên chọn nguồn sát tải.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="pink"
                title="Ví dụ thực tế cụ thể"
                icon={<PackageCheck />}
            />
            <div className="grid lg:grid-cols-5 gap-4">
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

function UpgradeLab() {
    const scenarios = {
        load400: {
            icon: <Gauge />,
            title: "Tải nặng 400W",
            answer: "Chọn 550–650W chất lượng tốt. 450W sát tải sẽ nóng hơn, ồn hơn và ít dư địa nâng cấp.",
            color: "emerald",
        },
        load500: {
            icon: <Zap />,
            title: "Tải nặng 500W",
            answer: "Chọn 650W hoặc 750W tốt. Nếu có thể nâng GPU trong 2–3 năm, 750W Gold là lựa chọn đẹp.",
            color: "yellow",
        },
        rtx4080: {
            icon: <Gamepad2 />,
            title: "Nâng RTX 4060 lên 4080",
            answer: "Không giữ PSU 550W cũ một cách mặc định. Kiểm tra công suất, đường 12V, đầu 12VHPWR/12V-2x6, tuổi PSU và chất lượng dòng nguồn.",
            color: "orange",
        },
        nas: {
            icon: <HardDrive />,
            title: "NAS nhiều HDD",
            answer: "Tính thêm điện cho HDD, nhất là lúc spin-up. 6–8 HDD cần tính nghiêm túc hơn 1–2 ổ thông thường.",
            color: "blue",
        },
        old: {
            icon: <AlertTriangle />,
            title: "PSU cũ 5 năm+",
            answer: "Kiểm tra còn bảo hành, quạt/tiếng ồn, dấu hiệu restart/tắt máy, đủ đầu GPU mới không. PSU cũng lão hóa theo thời gian.",
            color: "red",
        },
        ai: {
            icon: <Database />,
            title: "Render/AI chạy lâu",
            answer: "Chọn dư hơn gaming. CPU/GPU tải nặng liên tục nhiều giờ cần PSU cao cấp, bảo hành dài và review kỹ thuật tốt.",
            color: "purple",
        },
    };
    const [active, setActive] = useState("load500");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Lab: chọn Watt theo tình huống"
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
            wrong: "Cộng Watt rồi chọn đúng sát mức đó",
            right: "Nên có khoảng dư. Máy ăn 500W tải nặng nên chọn 650W hoặc 750W tốt vì GPU boost, transient spike, phụ kiện, PSU lão hóa và nâng cấp tương lai.",
        },
        {
            wrong: "Chọn PSU quá cao nhưng chất lượng kém",
            right: "650W tốt thường an toàn hơn 1000W công suất ảo, thương hiệu lạ, thông số mập mờ.",
        },
        {
            wrong: "Nghĩ PSU mạnh làm tăng FPS",
            right: "PSU đủ tốt giúp ổn định, không tự tăng FPS nếu CPU/GPU không đổi.",
        },
        {
            wrong: "Không tính GPU khi nâng cấp",
            right: "Nâng từ RTX 4060 lên RTX 4080 phải kiểm tra lại công suất, đường 12V, đầu cắm GPU, tuổi nguồn và chất lượng PSU.",
        },
        {
            wrong: "Không tính số HDD khi làm máy lưu trữ",
            right: "NAS hoặc máy nhiều HDD cần tính thêm điện lúc spin-up, nhất là 6–8 ổ trở lên.",
        },
        {
            wrong: "Dùng PSU cũ nhiều năm cho cấu hình mới mạnh",
            right: "PSU cũng lão hóa. Sau 5 năm trở lên cần kiểm tra dòng nguồn, bảo hành, đầu cắm và dấu hiệu lỗi.",
        },
    ];
    const tips = [
        "Gaming PC: tính theo GPU trước.",
        "Luôn chọn dư 20–30% so với tải nặng thực tế.",
        "Tải 350W → 550W; tải 500W → 650/750W; tải 700W → 850/1000W.",
        "Nếu phân vân 650W và 750W, xét nhu cầu nâng GPU trong 2–3 năm.",
        "Không giảm chất lượng PSU để tăng số Watt.",
        "GPU đời mới dùng 12VHPWR/12V-2x6 nên cân nhắc PSU ATX 3.0/3.1 có dây native.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
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
                        <span className="bg-emerald-500/20 text-emerald-300 p-2 rounded-xl">
                            11
                        </span>{" "}
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-emerald-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                PSU ≈ (CPU Watt + GPU Watt + 100W phụ kiện) ×
                                1.3
                            </p>
                            <br />
                            <p className="text-slate-500"># Chọn theo GPU</p>
                            <p className="text-slate-300">
                                RTX 4060 / RX 7600 → 550–650W
                            </p>
                            <p className="text-slate-300">
                                RTX 4070 / RX 7800 XT → 650–750W
                            </p>
                            <p className="text-slate-300">
                                RTX 4080 class → 850W
                            </p>
                            <p className="text-slate-300">
                                RTX 4090 class → 1000W+
                            </p>
                            <br />
                            <p className="text-red-300">
                                Đủ Watt chưa đủ: PSU phải đủ chất lượng, đường
                                12V mạnh, bảo vệ tốt và đúng đầu cắm.
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
            "Hai linh kiện nào thường tiêu thụ điện nhiều nhất trong PC gaming?",
        options: [
            "Bàn phím và chuột",
            "CPU và GPU",
            "SSD và loa",
            "RAM và pin CMOS",
        ],
        correct: 1,
        explanation:
            "Trong PC gaming, CPU và GPU thường là hai linh kiện ăn điện nhiều nhất, đặc biệt GPU.",
    },
    {
        question: "Nếu cấu hình tải nặng khoảng 400W, PSU hợp lý thường là?",
        options: [
            "400W đúng bằng tải",
            "450W no-name",
            "550–650W chất lượng tốt",
            "1200W bắt buộc",
        ],
        correct: 2,
        explanation:
            "Tải nặng 400W nên có khoảng dư, thường chọn 550–650W chất lượng tốt.",
    },
    {
        question: "PSU công suất cao hơn có làm tăng FPS không?",
        options: [
            "Có, luôn tăng FPS mạnh",
            "Không, PSU đủ tốt giúp ổn định nhưng không tự tăng hiệu năng",
            "Có, nếu là 1000W",
            "Có, nếu có RGB",
        ],
        correct: 1,
        explanation:
            "PSU đủ công suất giúp máy ổn định, nhưng không tự tăng FPS nếu CPU/GPU không đổi.",
    },
    {
        question: "Với GPU RTX 4080 class, nên cân nhắc PSU khoảng nào?",
        options: ["300W", "450W", "550W", "850W chất lượng tốt trở lên"],
        correct: 3,
        explanation:
            "RTX 4080 class thường nên dùng 850W Gold chất lượng tốt trở lên, tùy CPU và phụ kiện.",
    },
    {
        question: "Vì sao nên để PSU dư 20–30%?",
        options: [
            "Để máy tự tăng dung lượng RAM",
            "Để có khoảng an toàn cho tải tăng, spike, nhiệt độ, độ ồn và nâng cấp",
            "Để SSD chạy nhanh gấp đôi",
            "Để màn hình sáng hơn",
        ],
        correct: 1,
        explanation:
            "Khoảng dư giúp chịu tải tăng, transient spike, giảm nóng/ồn và có dư nâng cấp.",
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
                    <strong className="text-emerald-400">
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
                <span className="text-emerald-400">
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
                        className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu cách tính công suất nguồn cần thiết. Tiếp theo là
                cách chọn PSU an toàn và bền — phần tổng hợp giúp bạn chọn đúng
                hãng, đúng dòng, đúng chuẩn, đủ bảo vệ điện và tránh nguồn công
                suất ảo.
            </p>
            <Link
                to="/phan-7-6"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
            >
                Bài tiếp theo: 7.6 — Cách chọn PSU an toàn và bền{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "emerald" }) {
    const colorMap = {
        emerald: "bg-emerald-500/20 text-emerald-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        blue: "bg-blue-500/20 text-blue-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-emerald-500/10 border-emerald-400/50" : softBorder(color)}`}
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
function FormulaCard({ icon, title, value, color }) {
    return (
        <div
            className={`${softBorder(color)} border rounded-3xl p-6 text-center`}
        >
            <div
                className={`w-14 h-14 rounded-2xl ${badgeColor(color)} flex items-center justify-center mx-auto mb-4`}
            >
                {React.cloneElement(icon, { size: 28 })}
            </div>
            <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">
                {title}
            </p>
            <p className="text-xl font-black text-white">{value}</p>
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
function MetricCard({ icon, label, value, color }) {
    return (
        <div
            className={`${softBorder(color)} border rounded-3xl p-5 text-center`}
        >
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center mx-auto mb-3`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">
                {label}
            </p>
            <p className="text-xl font-black text-white">{value}</p>
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
        <div className="flex items-start gap-2 text-xs text-slate-300">
            <CheckCircle2
                className="text-green-400 shrink-0 mt-0.5"
                size={15}
            />{" "}
            <span>{text}</span>
        </div>
    );
}
function badgeColor(color) {
    const map = {
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.emerald;
}
function softBorder(color) {
    const map = {
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.emerald;
}
function textColor(color) {
    const map = {
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        blue: "text-blue-300",
        cyan: "text-cyan-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-emerald-300";
}
