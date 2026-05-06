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
    Plug,
    PlugZap,
    Power,
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
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center shadow-lg shadow-sky-500/10">
                            <PlugZap className="text-sky-400" size={24} />
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
                    <div className="text-sm font-semibold text-sky-300 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20">
                        Bài 7.3
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <PowerStationAnalogy />
                <PowerPathSimulator />
                <ConnectorExplorer />
                <ConnectorMatrix />
                <CpuVsPcieWarning />
                <ModernGpuCableGuide />
                <SataAndMolexGuide />
                <SpecsExplorer />
                <RealExamples />
                <InstallLab />
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
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-sky-300">
                        <BookOpen size={16} /> Phần 7: PSU — Dây nguồn
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Các đầu cắm điện
                        <span className="block text-sky-400">
                            24-pin, CPU EPS, PCIe, SATA
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        PSU đủ 750W vẫn không giúp máy chạy nếu cắm thiếu dây,
                        cắm nhầm CPU với PCIe, quên SATA Power hoặc cắm 12VHPWR
                        chưa sát. Bài này giúp bạn nhận diện đúng từng dây.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<PackageCheck size={16} />}
                            text="24-pin ATX"
                        />
                        <Tag icon={<Cpu size={16} />} text="4+4 EPS CPU" />
                        <Tag icon={<Gamepad2 size={16} />} text="PCIe 6+2" />
                        <Tag
                            icon={<Zap size={16} />}
                            text="12VHPWR / 12V-2x6"
                        />
                        <Tag icon={<HardDrive size={16} />} text="SATA Power" />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<PackageCheck />}
                            label="24-pin ATX"
                            desc="Mainboard"
                            color="sky"
                            highlight
                        />
                        <HeroTile
                            icon={<Cpu />}
                            label="4+4 EPS"
                            desc="CPU"
                            color="blue"
                        />
                        <HeroTile
                            icon={<Gamepad2 />}
                            label="6+2 PCIe"
                            desc="GPU"
                            color="orange"
                        />
                        <HeroTile
                            icon={<HardDrive />}
                            label="SATA Power"
                            desc="SSD/HDD/hub"
                            color="emerald"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Quy tắc sống còn</p>
                        <p>CPU/EPS 4+4-pin ≠ PCIe 6+2-pin</p>
                        <p className="text-red-300">
                            Không cắm lẫn, không ép đầu cắm.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Nhận diện đúng các đầu cắm PSU: 24-pin ATX, CPU/EPS 4+4, PCIe 6+2, 12VHPWR/12V-2x6, SATA Power, Molex.",
        "Hiểu điện đi từ PSU đến mainboard, CPU, GPU, SSD/HDD và hub quạt/RGB theo những dây riêng.",
        "Không nhầm dây CPU/EPS với dây PCIe/VGA cho GPU.",
        "Biết ổ SATA cần cả SATA Data từ mainboard và SATA Power từ PSU.",
        "Biết nguyên tắc dùng dây native, adapter, splitter, extension và không trộn dây modular giữa PSU khác nhau.",
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
            icon: <PackageCheck />,
            title: "Mainboard",
            desc: "24-pin ATX cấp điện chính cho mainboard.",
            color: "sky",
        },
        {
            icon: <Cpu />,
            title: "CPU",
            desc: "4+4-pin EPS hoặc 8-pin CPU cấp điện riêng cho CPU qua VRM.",
            color: "blue",
        },
        {
            icon: <Gamepad2 />,
            title: "GPU",
            desc: "PCIe 6+2-pin hoặc 12VHPWR/12V-2x6 cấp điện cho card đồ họa rời.",
            color: "orange",
        },
        {
            icon: <HardDrive />,
            title: "Ổ SATA & hub",
            desc: "SATA Power cấp điện cho SSD/HDD SATA, hub quạt/RGB và một số thiết bị phụ.",
            color: "emerald",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Đầu cắm điện PSU là gì?"
                icon={<Brain />}
            />
            <div className="grid md:grid-cols-4 gap-4">
                {cards.map((c) => (
                    <RoleCard key={c.title} {...c} />
                ))}
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                24-pin ATX → Mainboard
                <br />
                4+4 EPS CPU → CPU
                <br />
                6+2 PCIe → GPU rời
                <br />
                12VHPWR / 12V-2x6 → GPU đời mới/cao cấp
                <br />
                SATA Power → SSD/HDD SATA, hub fan/RGB
                <br />
                Molex → thiết bị cũ
            </div>
        </section>
    );
}

function PowerStationAnalogy() {
    const cards = [
        {
            icon: <PlugZap />,
            title: "PSU = trạm điện trung tâm",
            desc: "Nguồn điện đi ra nhiều đường dây riêng đến từng khu vực trong PC.",
            color: "sky",
        },
        {
            icon: <PackageCheck />,
            title: "24-pin = đường chính",
            desc: "Cấp điện nền tảng cho mainboard, giống đường điện chính vào tòa nhà.",
            color: "blue",
        },
        {
            icon: <Cpu />,
            title: "EPS CPU = đường riêng cho não bộ",
            desc: "CPU cần dây cấp điện riêng, không chỉ lấy qua 24-pin.",
            color: "purple",
        },
        {
            icon: <Gamepad2 />,
            title: "PCIe GPU = đường công suất lớn",
            desc: "GPU rời có thể cần nhiều dây vì ăn điện cao khi chơi game/render.",
            color: "orange",
        },
        {
            icon: <HardDrive />,
            title: "SATA Power = đường phụ trợ",
            desc: "Cấp điện cho ổ SATA, hub quạt/RGB và một số thiết bị phụ.",
            color: "emerald",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: trạm điện và đường dây riêng"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-5 gap-4">
                {cards.map((c) => (
                    <AnalogyCard key={c.title} {...c} />
                ))}
            </div>
        </section>
    );
}

function PowerPathSimulator() {
    const flows = {
        normal: {
            title: "Cắm đủ dây",
            color: "emerald",
            steps: [
                {
                    icon: <Plug />,
                    title: "Ổ cắm AC",
                    desc: "Điện AC đi vào PSU qua dây nguồn AC phía sau.",
                },
                {
                    icon: <BatteryCharging />,
                    title: "PSU chuyển thành DC",
                    desc: "PSU tạo ra các đường DC ổn định cho linh kiện.",
                },
                {
                    icon: <PackageCheck />,
                    title: "24-pin cấp mainboard",
                    desc: "Mainboard nhận điện chính qua dây 24-pin ATX.",
                },
                {
                    icon: <Cpu />,
                    title: "EPS cấp CPU",
                    desc: "CPU nhận điện riêng qua dây 4+4-pin EPS/8-pin CPU, đi qua VRM.",
                },
                {
                    icon: <Gamepad2 />,
                    title: "PCIe/12V cấp GPU",
                    desc: "GPU rời nhận điện qua PCIe 6+2 hoặc 12VHPWR/12V-2x6.",
                },
                {
                    icon: <HardDrive />,
                    title: "SATA Power cấp ổ/hub",
                    desc: "SSD/HDD SATA, hub quạt/RGB nhận điện qua SATA Power.",
                },
                {
                    icon: <Power />,
                    title: "Máy POST",
                    desc: "Nếu dây đúng và linh kiện ổn, máy POST và khởi động.",
                },
            ],
        },
        missing: {
            title: "Thiếu dây quan trọng",
            color: "red",
            steps: [
                {
                    icon: <XCircle />,
                    title: "Thiếu 24-pin ATX",
                    desc: "Mainboard không có điện chính, máy gần như chắc chắn không hoạt động.",
                },
                {
                    icon: <AlertTriangle />,
                    title: "Thiếu 8-pin CPU",
                    desc: "Quạt có thể quay nhưng CPU không được cấp điện, máy không POST hoặc không lên hình.",
                },
                {
                    icon: <Gamepad2 />,
                    title: "Thiếu PCIe GPU",
                    desc: "GPU không đủ điện, có thể báo lỗi nguồn hoặc không xuất hình.",
                },
                {
                    icon: <HardDrive />,
                    title: "Thiếu SATA Power",
                    desc: "Ổ SATA không quay/không nhận dù đã cắm SATA Data.",
                },
            ],
        },
        wrong: {
            title: "Cắm sai dây",
            color: "orange",
            steps: [
                {
                    icon: <Cpu />,
                    title: "Nhầm CPU và PCIe",
                    desc: "CPU/EPS 4+4-pin không phải PCIe 6+2-pin. Không cắm lẫn.",
                },
                {
                    icon: <PlugZap />,
                    title: "Dây modular khác PSU",
                    desc: "Dây cắm vừa không có nghĩa pinout đúng. Có thể làm hỏng linh kiện.",
                },
                {
                    icon: <Zap />,
                    title: "12VHPWR chưa sát",
                    desc: "Tiếp xúc kém có thể gây nóng đầu cắm và nguy cơ hỏng đầu nguồn/GPU.",
                },
                {
                    icon: <ShieldCheck />,
                    title: "Dừng lại và đọc nhãn",
                    desc: "Đọc chữ CPU, PCI-E/VGA, SATA, MB/ATX trên đầu dây trước khi cắm.",
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
                title="Điện đi từ PSU đến linh kiện thế nào?"
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

function ConnectorExplorer() {
    const connectors = {
        atx: {
            icon: <PackageCheck />,
            title: "24-pin ATX / 20+4-pin",
            color: "sky",
            use: "Cấp điện chính cho mainboard",
            identify:
                "Đầu to, dài, nhiều chân nhất; thường cắm cạnh phải mainboard.",
            note: "Bắt buộc. Không cắm dây này thì máy gần như chắc chắn không hoạt động.",
        },
        eps: {
            icon: <Cpu />,
            title: "4+4-pin EPS / 8-pin CPU",
            color: "blue",
            use: "Cấp điện riêng cho CPU qua VRM",
            identify:
                "Thường ghi CPU, EPS, ATX12V; dạng 4+4 có thể ghép thành 8-pin.",
            note: "Cắm ở góc trên mainboard gần socket CPU. Không nhầm với PCIe 6+2.",
        },
        pcie: {
            icon: <Gamepad2 />,
            title: "6+2-pin PCIe / VGA",
            color: "orange",
            use: "Cấp điện cho GPU rời",
            identify:
                "Thường ghi PCI-E, PCIe hoặc VGA; dạng 6+2 có thể dùng như 6-pin hoặc 8-pin.",
            note: "Cắm trực tiếp vào card đồ họa, không cắm vào đầu CPU trên mainboard.",
        },
        hpwr: {
            icon: <Zap />,
            title: "12VHPWR / 12V-2x6",
            color: "red",
            use: "GPU NVIDIA đời mới/cao cấp",
            identify:
                "Đầu nhỏ hơn nhưng cấp công suất cao, thường đi với PSU ATX 3.0/3.1.",
            note: "Cắm thật sát, không gập dây quá sát đầu cắm, tránh adapter kém chất lượng.",
        },
        sata: {
            icon: <HardDrive />,
            title: "SATA Power",
            color: "emerald",
            use: "SSD/HDD SATA, ổ DVD, hub fan/RGB, một số AIO",
            identify: "Đầu dẹt, rộng, thường có nhiều đầu trên một dây.",
            note: "Ổ SATA cần cả SATA Data và SATA Power; SSD M.2 NVMe không dùng SATA Power.",
        },
        molex: {
            icon: <Settings />,
            title: "Molex 4-pin",
            color: "purple",
            use: "Thiết bị cũ, quạt/hub đời cũ",
            identify: "Đầu to, thường trắng/đen, cắm hơi cứng.",
            note: "Hiện nay nên hạn chế dùng nếu không cần; ưu tiên SATA Power hoặc fan header chuẩn.",
        },
    };
    const [active, setActive] = useState("eps");
    const item = connectors[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="sky"
                title="Explorer: nhận diện từng đầu cắm"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
                    {Object.entries(connectors).map(([key, c]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(c.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(c.icon, { size: 20 })}{" "}
                                {c.title}
                            </div>
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
                        <h3 className="text-2xl font-extrabold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className={`${textColor(item.color)} font-semibold`}>
                            {item.use}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <InfoCard
                            label="Nhận diện"
                            value={item.identify}
                            color={item.color}
                        />
                        <InfoCard
                            label="Lưu ý"
                            value={item.note}
                            color="orange"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ConnectorMatrix() {
    const rows = [
        ["24-pin ATX", "Mainboard", "Có", "Đầu lớn nhất"],
        ["20+4-pin ATX", "Mainboard cũ/hiện đại", "Có", "Ghép thành 24-pin"],
        ["4+4-pin EPS CPU", "CPU", "Có với PC hiện đại", "Góc trên mainboard"],
        ["6+2-pin PCIe", "GPU rời", "Tùy GPU", "Ghi PCI-E/VGA"],
        ["12VHPWR / 12V-2x6", "GPU đời mới/cao cấp", "Tùy GPU", "Cắm thật sát"],
        [
            "SATA Power",
            "SSD/HDD SATA, hub",
            "Tùy thiết bị",
            "Không dùng cho M.2 NVMe",
        ],
        ["Molex", "Thiết bị cũ", "Hiếm khi", "Hạn chế dùng nếu không cần"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="blue"
                title="Bảng tổng hợp đầu cắm PSU"
                icon={<Layers3 />}
            />
            <DataTable
                title="Đầu nào cắm vào đâu?"
                rows={rows}
                headers={["Đầu cắm", "Dùng cho", "Bắt buộc không?", "Ghi chú"]}
                accent="blue"
            />
        </section>
    );
}

function CpuVsPcieWarning() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="red"
                title="Cảnh báo quan trọng: CPU/EPS ≠ PCIe/VGA"
                icon={<AlertTriangle />}
            />
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6">
                    <Cpu className="text-blue-300 mb-4" size={34} />
                    <h3 className="text-white font-bold text-xl mb-3">
                        CPU/EPS 4+4-pin
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        Thường ghi{" "}
                        <strong className="text-blue-300">
                            CPU, EPS, ATX12V
                        </strong>
                        . Dùng để cắm vào mainboard gần socket CPU.
                    </p>
                    <div className="font-mono text-sm text-blue-300">
                        PSU → CPU/EPS → Mainboard → VRM → CPU
                    </div>
                </div>
                <div className="bg-orange-500/5 border border-orange-500/20 rounded-3xl p-6">
                    <Gamepad2 className="text-orange-300 mb-4" size={34} />
                    <h3 className="text-white font-bold text-xl mb-3">
                        PCIe / VGA 6+2-pin
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        Thường ghi{" "}
                        <strong className="text-orange-300">
                            PCI-E, PCIe, VGA
                        </strong>
                        . Dùng để cắm vào card đồ họa rời.
                    </p>
                    <div className="font-mono text-sm text-orange-300">
                        PSU → PCIe/VGA → GPU
                    </div>
                </div>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                CPU 4+4-pin ≠ PCIe 6+2-pin
                <br />
                Cắm vừa không có nghĩa là đúng. Nếu phải ép mạnh, dừng lại ngay.
            </div>
        </section>
    );
}

function ModernGpuCableGuide() {
    const rows = [
        [
            "12VHPWR",
            "GPU RTX 40 series cao hơn",
            "Cần cắm thật chặt, tránh gập sát đầu cắm",
        ],
        [
            "12V-2x6",
            "Phiên bản cải tiến, thường đi với ATX 3.1/PCIe 5.1",
            "Thiết kế mới hơn, vẫn phải cắm đúng cách",
        ],
        [
            "Adapter",
            "Chuyển nhiều 8-pin sang 12VHPWR/12V-2x6",
            "Chỉ dùng adapter hãng cung cấp/chất lượng tốt và cắm đúng",
        ],
        [
            "Native cable",
            "Dây đi thẳng PSU → GPU",
            "Nên ưu tiên với GPU cao cấp",
        ],
    ];
    const rules = [
        "Cắm vào hết nấc",
        "Không để đầu cắm hở",
        "Không gập dây quá sát đầu cắm",
        "Không kéo căng dây",
        "Không dùng adapter kém chất lượng",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="orange"
                title="12VHPWR và 12V-2x6 cho GPU đời mới"
                icon={<Zap />}
            />
            <div className="grid lg:grid-cols-[1fr_0.85fr] gap-6">
                <DataTable
                    title="Các kiểu dây GPU đời mới"
                    rows={rows}
                    headers={["Đầu/dây", "Dùng cho", "Ghi chú"]}
                    accent="orange"
                />
                <div className="bg-orange-500/5 border border-orange-500/20 rounded-3xl p-6">
                    <h3 className="text-xl font-bold text-orange-300 mb-5 flex items-center gap-2">
                        <ShieldCheck /> Checklist cắm an toàn
                    </h3>
                    <div className="space-y-3">
                        {rules.map((r) => (
                            <div
                                key={r}
                                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-3 text-sm text-slate-300"
                            >
                                <CheckCircle2
                                    className="text-green-400 shrink-0 mt-0.5"
                                    size={18}
                                />
                                <span>{r}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function SataAndMolexGuide() {
    const rows = [
        ["SSD SATA 2.5 inch", "Có", "Cần thêm SATA Data vào mainboard"],
        ["HDD 3.5 inch", "Có", "Cần thêm SATA Data vào mainboard"],
        ["Ổ DVD/Blu-ray SATA", "Có", "Ít dùng hiện nay"],
        ["Hub fan/RGB", "Có thể có", "Tùy hub"],
        ["AIO một số mẫu", "Có thể có", "Tùy mẫu"],
        ["SSD M.2 NVMe", "Không", "Gắn trực tiếp vào khe M.2"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="emerald"
                title="SATA Power và Molex"
                icon={<HardDrive />}
            />
            <DataTable
                title="Thiết bị nào cần SATA Power?"
                rows={rows}
                headers={["Thiết bị", "Cần SATA Power?", "Ghi chú"]}
                accent="emerald"
            />
            <div className="grid md:grid-cols-2 gap-4">
                <RuleCard
                    label="Ổ SATA cần 2 dây"
                    value="SATA Data từ ổ vào mainboard + SATA Power từ ổ vào PSU. Thiếu một dây là ổ có thể không nhận."
                    color="emerald"
                />
                <RuleCard
                    label="Molex là đầu cũ"
                    value="Molex 4-pin thường dùng cho quạt/hub cũ. Hiện nay nên hạn chế nếu không cần."
                    color="purple"
                />
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        eps: {
            icon: <Cpu />,
            title: "Số đầu EPS CPU",
            detail: "CPU phổ thông thường chỉ cần 1 x 8-pin CPU. Main cao cấp có thể có 8+4 hoặc 8+8.",
            impact: "Với CPU phổ thông, thường cắm 8-pin là chạy; CPU mạnh/ép xung nên cắm thêm nếu main và PSU hỗ trợ.",
        },
        pcie: {
            icon: <Gamepad2 />,
            title: "Số đầu PCIe GPU",
            detail: "GPU có thể cần 0, 1, 2, 3 đầu 8-pin hoặc 12VHPWR/12V-2x6.",
            impact: "RTX 4060/RX 7600 thường 1 x 8-pin; RTX 4070/RX 7800 XT có thể 1–2 x 8-pin hoặc đầu mới tùy mẫu.",
        },
        native: {
            icon: <PlugZap />,
            title: "Native cable",
            detail: "Dây đi thẳng từ PSU đến thiết bị, không qua adapter.",
            impact: "Với GPU cao cấp, nên ưu tiên dây native 12VHPWR/12V-2x6 từ PSU thay vì adapter rối.",
        },
        modular: {
            icon: <Puzzle />,
            title: "Modular cable",
            detail: "Dây modular không được dùng lẫn giữa PSU khác hãng/dòng nếu không được xác nhận.",
            impact: "Cắm vừa không có nghĩa đúng pinout. Cắm sai có thể hỏng SSD, GPU hoặc mainboard.",
        },
        sata: {
            icon: <HardDrive />,
            title: "Số đầu SATA Power",
            detail: "Cần cho SSD/HDD SATA, hub fan/RGB, một số AIO và LED.",
            impact: "2 HDD + 1 SSD SATA + 1 hub fan cần ít nhất 4 đầu SATA Power.",
        },
        ac: {
            icon: <Power />,
            title: "Dây AC vào PSU",
            detail: "Dây từ ổ điện vào cổng sau PSU, thường kiểu C13.",
            impact: "Không dùng dây lỏng, nứt vỏ, cháy xém. Công tắc PSU: I là ON, O là OFF.",
        },
    };
    const [active, setActive] = useState("pcie");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="yellow"
                title="Thông số kỹ thuật quan trọng của đầu cắm"
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

function RealExamples() {
    const examples = [
        {
            icon: <Sparkles />,
            title: "Corsair RM750e 750W ATX 3.1",
            subtitle: "Full-modular, 12V-2x6",
            color: "sky",
            points: [
                "24-pin ATX cho mainboard",
                "EPS CPU 8-pin/4+4-pin",
                "PCIe 6+2 hoặc 12V-2x6 tùy GPU",
                "SATA Power cho SSD/HDD/hub",
                "Dây modular chỉ dùng đúng bộ RM750e",
            ],
            lesson: "PSU hiện đại có dây 12V-2x6 tiện cho GPU đời mới, nhưng vẫn phải cắm đúng và sát.",
        },
        {
            icon: <Award />,
            title: "Cooler Master MWE Gold 750 V2 FM",
            subtitle: "Nhiều đầu EPS/PCIe/SATA",
            color: "yellow",
            points: [
                "1 EPS 4+4 pin",
                "1 EPS 8 pin",
                "4 PCIe 6+2 pin",
                "12 SATA connectors",
                "4 Peripheral 4-pin",
            ],
            lesson: "Số đầu cắm dồi dào giúp dễ dùng với main 8+4 CPU, GPU 1–2 đầu 8-pin và nhiều ổ/hub.",
        },
        {
            icon: <Gamepad2 />,
            title: "GPU RTX 4060 class",
            subtitle: "Thường 1 x 8-pin PCIe",
            color: "orange",
            points: [
                "Dùng dây PCIe 6+2",
                "Ghép 6+2 thành 8-pin",
                "Cắm vào GPU đến khi khóa gài",
                "Không dùng dây CPU/EPS",
                "Không bỏ quên đầu nguồn phụ nếu card yêu cầu",
            ],
            lesson: "Dây PCIe/VGA là cho GPU; CPU/EPS là cho mainboard gần CPU. Không cắm lẫn.",
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

function InstallLab() {
    const scenarios = {
        first: {
            icon: <Workflow />,
            title: "Thứ tự cắm dây",
            answer: "1) 24-pin ATX cho mainboard. 2) 8-pin CPU/EPS cho CPU. 3) PCIe/12VHPWR/12V-2x6 cho GPU. 4) SATA Power cho SSD/HDD/hub. 5) Fan/RGB theo main/hub.",
            color: "sky",
        },
        noCpu: {
            icon: <Cpu />,
            title: "Quên 8-pin CPU",
            answer: "Quạt có thể quay nhưng máy không POST/không lên hình/đèn CPU debug sáng. Cắm dây CPU/EPS 4+4 hoặc 8-pin ở góc trên mainboard.",
            color: "blue",
        },
        gpu2: {
            icon: <Gamepad2 />,
            title: "GPU cần 2 x 8-pin",
            answer: "Với GPU ăn điện cao, nên dùng 2 dây PCIe riêng nếu PSU có, thay vì một dây pigtail chia 2 đầu.",
            color: "orange",
        },
        sata: {
            icon: <HardDrive />,
            title: "SSD SATA không nhận",
            answer: "Kiểm tra đủ hai dây: SATA Data từ ổ vào mainboard và SATA Power từ PSU. SSD M.2 NVMe thì không cần SATA Power.",
            color: "emerald",
        },
        modular: {
            icon: <AlertTriangle />,
            title: "Dây modular lẫn bộ",
            answer: "Không dùng dây modular của PSU khác. Cất hộp, cất dây thừa, dán nhãn nếu có nhiều PSU để tránh nhầm pinout.",
            color: "red",
        },
        hpwr: {
            icon: <Zap />,
            title: "12VHPWR/12V-2x6",
            answer: "Cắm thật sát, kiểm tra không hở đầu cắm, không gập dây quá sát và ưu tiên dây native từ PSU cho GPU cao cấp.",
            color: "yellow",
        },
    };
    const [active, setActive] = useState("first");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="12"
                color="blue"
                title="Lab: cắm dây PSU đúng cách"
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
            wrong: "Nhầm dây CPU 8-pin với dây PCIe 8-pin",
            right: "CPU/EPS 4+4-pin cắm vào mainboard gần CPU. PCIe/VGA 6+2-pin cắm vào GPU rời. Không cắm lẫn.",
        },
        {
            wrong: "Chỉ cắm 24-pin mà quên 8-pin CPU",
            right: "Mainboard cần 24-pin, nhưng CPU cần dây EPS riêng. Quên EPS thường gây không POST/không lên hình.",
        },
        {
            wrong: "Ổ SATA không nhận vì chỉ cắm SATA Data",
            right: "Ổ SATA cần cả SATA Data vào mainboard và SATA Power từ PSU.",
        },
        {
            wrong: "Dùng một dây chia cho GPU ăn điện cao",
            right: "GPU ăn điện cao nên dùng 2 dây PCIe riêng nếu PSU hỗ trợ để giảm tải trên mỗi dây.",
        },
        {
            wrong: "Cắm 12VHPWR/12V-2x6 chưa vào hết",
            right: "Đầu GPU đời mới phải cắm thật sát, không để hở, không gập dây sát đầu cắm.",
        },
        {
            wrong: "Dùng dây modular của PSU khác",
            right: "Cắm vừa không có nghĩa pinout đúng. Dây modular khác PSU có thể làm cháy linh kiện.",
        },
    ];
    const tips = [
        "Đọc chữ in trên dây: CPU, PCI-E/VGA, SATA, MB/ATX, Peripheral.",
        "Cắm theo thứ tự: 24-pin → CPU/EPS → GPU → SATA Power → fan/RGB.",
        "Với GPU cần 2 đầu 8-pin, ưu tiên 2 dây PCIe riêng nếu GPU ăn điện cao.",
        "Với PSU modular, giữ lại toàn bộ dây gốc và không trộn dây với PSU khác.",
        "Nếu đầu cắm không vào nhẹ nhàng, dừng lại kiểm tra dây và chiều cắm.",
        "Sau khi cắm GPU đời mới, nhìn ngang kiểm tra đầu 12VHPWR/12V-2x6 đã vào hết nấc chưa.",
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
                        <span className="bg-sky-500/20 text-sky-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-sky-300 border border-slate-800 shadow-inner space-y-2">
                            <p>24-pin ATX → mainboard</p>
                            <p>4+4 EPS CPU → CPU</p>
                            <p>6+2 PCIe / VGA → GPU</p>
                            <p>12VHPWR / 12V-2x6 → GPU đời mới/cao cấp</p>
                            <p>SATA Power → SSD/HDD SATA, hub fan/RGB</p>
                            <p>Molex → thiết bị cũ</p>
                            <br />
                            <p className="text-red-300">
                                CPU/EPS ≠ PCIe/VGA. Không cắm lẫn. Không trộn
                                dây modular.
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
        question: "Dây 24-pin ATX dùng để cấp điện cho linh kiện nào?",
        options: ["GPU rời", "Mainboard", "SSD M.2", "Tai nghe"],
        correct: 1,
        explanation: "24-pin ATX là dây nguồn chính cấp điện cho mainboard.",
    },
    {
        question: "Dây 4+4-pin EPS thường dùng để cấp điện cho gì?",
        options: ["CPU", "Ổ cứng SATA", "Quạt case", "Cổng USB"],
        correct: 0,
        explanation:
            "Dây 4+4-pin EPS/CPU cấp điện riêng cho CPU qua mainboard và VRM.",
    },
    {
        question: "Dây PCIe 6+2-pin thường dùng cho linh kiện nào?",
        options: ["RAM", "GPU rời", "CPU", "Pin CMOS"],
        correct: 1,
        explanation:
            "PCIe 6+2-pin thường dùng để cấp điện cho card đồ họa rời.",
    },
    {
        question: "Ổ SSD/HDD SATA cần những dây nào?",
        options: [
            "Chỉ SATA Data",
            "Chỉ SATA Power",
            "SATA Data và SATA Power",
            "Không cần dây nào",
        ],
        correct: 2,
        explanation: "Ổ SATA cần SATA Data nối mainboard và SATA Power từ PSU.",
    },
    {
        question:
            "Có nên dùng dây modular của PSU khác hãng nếu cắm vừa không?",
        options: [
            "Có, vì cắm vừa là đúng",
            "Có, nếu cùng màu dây",
            "Không, vì pinout có thể khác và gây hỏng linh kiện",
            "Có, nếu PSU cùng công suất",
        ],
        correct: 2,
        explanation:
            "Dây modular có thể khác pinout giữa hãng/dòng PSU; cắm nhầm có thể gây hỏng linh kiện.",
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
                Bạn đã hiểu các đầu cắm điện PSU. Tiếp theo là Modular vs
                Semi-Modular vs Non-Modular PSU — vì sau khi biết từng dây dùng
                để làm gì, bạn cần hiểu dây rời, bán rời và dây liền khác nhau
                thế nào, loại nào dễ đi dây và loại nào tiết kiệm.
            </p>
            <Link
                to="/phan-7-4"
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-sky-500/20"
            >
                Bài tiếp theo: 7.4 — Modular vs Semi-Modular vs Non-Modular PSU{" "}
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
function badgeColor(color) {
    const map = {
        sky: "bg-sky-500/10 text-sky-300 border border-sky-500/20",
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
    return map[color] || map.sky;
}
function softBorder(color) {
    const map = {
        sky: "bg-sky-500/5 border-sky-500/20",
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
    return map[color] || map.sky;
}
function textColor(color) {
    const map = {
        sky: "text-sky-300",
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
    return map[color] || "text-sky-300";
}
