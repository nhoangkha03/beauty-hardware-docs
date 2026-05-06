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
    MemoryStick,
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
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-yellow-500 selection:text-slate-950 pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-yellow-500/10 border border-yellow-400/30 flex items-center justify-center shadow-lg shadow-yellow-500/10">
                            <PlugZap className="text-yellow-400" size={24} />
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
                    <div className="text-sm font-semibold text-yellow-300 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                        Bài 7.1
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <HeartAnalogy />
                <PowerFlowSimulator />
                <VoltageRails />
                <PsuTypes />
                <SpecsExplorer />
                <ConnectorGuide />
                <ProtectionGuide />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-yellow-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-yellow-300">
                        <BookOpen size={16} /> Phần 7: PSU — Nguồn điện
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        PSU là gì?
                        <span className="block text-yellow-400">
                            Trái tim cấp điện cho PC
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Một PC mạnh có thể tắt phụt, restart hoặc hỏng linh kiện
                        nếu PSU yếu hoặc kém chất lượng. PSU chuyển điện AC từ ổ
                        cắm thành DC 12V, 5V, 3.3V ổn định cho toàn bộ hệ thống.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Plug size={16} />} text="AC → DC" />
                        <Tag icon={<Zap size={16} />} text="12V Rail" />
                        <Tag icon={<Cpu size={16} />} text="CPU EPS" />
                        <Tag icon={<Gamepad2 size={16} />} text="GPU PCIe" />
                        <Tag
                            icon={<ShieldCheck size={16} />}
                            text="Protection"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Plug />}
                            label="AC Input"
                            desc="Điện ổ cắm"
                            color="yellow"
                            highlight
                        />
                        <HeroTile
                            icon={<BatteryCharging />}
                            label="DC Output"
                            desc="12V / 5V / 3.3V"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<Cpu />}
                            label="CPU"
                            desc="EPS 4+4 / 8-pin"
                            color="blue"
                        />
                        <HeroTile
                            icon={<Gamepad2 />}
                            label="GPU"
                            desc="PCIe / 12VHPWR"
                            color="orange"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Luồng năng lượng</p>
                        <p>Ổ cắm AC → PSU</p>
                        <p className="text-yellow-300">
                            → DC 12V / 5V / 3.3V → Linh kiện
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu PSU là Power Supply Unit, bộ nguồn chuyển điện AC từ ổ cắm thành điện DC cho linh kiện PC.",
        "Nắm quy trình cấp điện khi bấm nút nguồn: mainboard kích PSU, PSU cấp 24-pin, EPS CPU, PCIe GPU, SATA power.",
        "Phân biệt đường điện 12V, 5V, 3.3V và vì sao 12V quan trọng nhất với CPU/GPU hiện đại.",
        "Biết các cách phân loại PSU: ATX/SFX/SFX-L/TFX, non-modular/semi-modular/full-modular, ATX 2.x/3.0/3.1.",
        "Nhận biết thông số cơ bản: Wattage, efficiency, 80 PLUS, 12V rail, đầu cắm nguồn và các cơ chế bảo vệ điện.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="yellow"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-yellow-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center font-bold mb-4">
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
    const cards = [
        {
            icon: <Plug />,
            title: "Nhận điện AC",
            desc: "Điện ổ cắm trong nhà là AC — dòng điện xoay chiều.",
            color: "yellow",
        },
        {
            icon: <BatteryCharging />,
            title: "Chuyển thành DC",
            desc: "Linh kiện PC cần DC — dòng điện một chiều ổn định.",
            color: "emerald",
        },
        {
            icon: <Zap />,
            title: "Chia nhiều mức điện",
            desc: "PSU tạo ra các đường 12V, 5V, 3.3V cho từng nhóm linh kiện.",
            color: "orange",
        },
        {
            icon: <ShieldCheck />,
            title: "Bảo vệ hệ thống",
            desc: "PSU tốt có OCP, OVP, UVP, OPP, OTP, SCP để giảm rủi ro sự cố điện.",
            color: "blue",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Khái niệm cốt lõi: PSU là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">PSU</strong>, viết tắt của{" "}
                    <strong className="text-yellow-300">
                        Power Supply Unit
                    </strong>
                    , là bộ nguồn máy tính. Nhiệm vụ của PSU là chuyển điện xoay
                    chiều từ ổ cắm thành điện một chiều phù hợp để mainboard,
                    CPU, GPU, SSD, HDD, quạt và các mạch khác hoạt động an toàn.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <RoleCard key={c.title} {...c} />
                    ))}
                </div>
                <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Điện ổ cắm AC → PSU chuyển đổi → DC 12V / 5V / 3.3V → CPU,
                    GPU, mainboard, SSD, quạt hoạt động
                </div>
            </div>
        </section>
    );
}

function HeartAnalogy() {
    const cards = [
        {
            icon: <PlugZap />,
            title: "PSU = trái tim",
            desc: "Cấp năng lượng đều đặn cho toàn bộ hệ thống, giống tim bơm máu đi khắp cơ thể.",
            color: "red",
        },
        {
            icon: <Cpu />,
            title: "CPU = não bộ",
            desc: "Cần điện ổn định để xử lý lệnh và duy trì xung nhịp.",
            color: "blue",
        },
        {
            icon: <Gamepad2 />,
            title: "GPU = cơ bắp đồ họa",
            desc: "Khi chơi game/render, GPU cần rất nhiều điện 12V và có thể tăng tải đột ngột.",
            color: "orange",
        },
        {
            icon: <HardDrive />,
            title: "SSD/HDD = kho dữ liệu",
            desc: "Ổ SATA cần cả SATA data và SATA power để hoạt động ổn định.",
            color: "emerald",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: trái tim cấp máu"
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

function PowerFlowSimulator() {
    const flows = {
        boot: {
            title: "Bấm nút nguồn",
            color: "yellow",
            steps: [
                {
                    icon: <Power />,
                    title: "Bạn bấm nút Power",
                    desc: "Nút nguồn trên case gửi tín hiệu đến mainboard.",
                },
                {
                    icon: <Settings />,
                    title: "Mainboard gọi PSU",
                    desc: "Mainboard gửi tín hiệu bật nguồn để PSU bắt đầu hoạt động.",
                },
                {
                    icon: <Plug />,
                    title: "PSU nhận điện AC",
                    desc: "Nguồn nhận điện xoay chiều từ ổ cắm hoặc UPS/ổ điện.",
                },
                {
                    icon: <BatteryCharging />,
                    title: "PSU chuyển AC thành DC",
                    desc: "PSU chuyển đổi và ổn định các mức điện một chiều cần thiết.",
                },
                {
                    icon: <PackageCheck />,
                    title: "Cấp điện qua nhiều dây",
                    desc: "24-pin cho mainboard, EPS cho CPU, PCIe/12VHPWR cho GPU, SATA power cho ổ/hub.",
                },
                {
                    icon: <TerminalIcon />,
                    title: "Máy POST và khởi động",
                    desc: "Mainboard kiểm tra phần cứng rồi chuyển sang BIOS/UEFI và hệ điều hành.",
                },
            ],
        },
        gaming: {
            title: "Khi chơi game",
            color: "orange",
            steps: [
                {
                    icon: <Gamepad2 />,
                    title: "GPU tăng tải",
                    desc: "Game nặng làm GPU cần nhiều điện hơn, đặc biệt trên đường 12V.",
                },
                {
                    icon: <Zap />,
                    title: "PSU cấp 12V ổn định",
                    desc: "Nguồn tốt giữ điện áp ổn định khi GPU boost xung nhịp.",
                },
                {
                    icon: <Fan />,
                    title: "Quạt và tản nhiệt tăng tốc",
                    desc: "CPU/GPU/quạt case cũng tiêu thụ điện và tạo nhiệt nhiều hơn.",
                },
                {
                    icon: <AlertTriangle />,
                    title: "PSU yếu gây lỗi",
                    desc: "Sụt áp hoặc quá tải có thể làm crash, restart hoặc tắt phụt.",
                },
            ],
        },
        protection: {
            title: "Khi có sự cố điện",
            color: "blue",
            steps: [
                {
                    icon: <AlertTriangle />,
                    title: "Tải vượt ngưỡng",
                    desc: "GPU/CPU hoặc sự cố chập khiến dòng/công suất/nhiệt vượt mức an toàn.",
                },
                {
                    icon: <ShieldCheck />,
                    title: "Mạch bảo vệ can thiệp",
                    desc: "OCP/OVP/UVP/OPP/OTP/SCP giúp giảm rủi ro hỏng linh kiện.",
                },
                {
                    icon: <Power />,
                    title: "PSU ngắt hoặc bảo vệ",
                    desc: "Nguồn có thể tự tắt để tránh tiếp tục cấp điện nguy hiểm.",
                },
                {
                    icon: <Search />,
                    title: "Kiểm tra nguyên nhân",
                    desc: "Kiểm tra dây nguồn, GPU, tải hệ thống, nhiệt, PSU và linh kiện liên quan.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("boot");
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
                title="PSU cấp điện như thế nào?"
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

function VoltageRails() {
    const rows = [
        ["12V", "CPU, GPU, quạt, motor HDD", "Quan trọng nhất với PC hiện đại"],
        ["5V", "USB, SSD/HDD SATA, một số mạch logic", "Phụ trợ"],
        ["3.3V", "Mainboard, RAM, chipset, mạch logic", "Phụ trợ"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="orange"
                title="Các đường điện chính: 12V, 5V, 3.3V"
                icon={<Zap />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Đường điện</th>
                            <th className="p-4">Dùng cho</th>
                            <th className="p-4">Ý nghĩa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([rail, use, meaning]) => (
                            <tr
                                key={rail}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-orange-300 font-extrabold">
                                    {rail}
                                </td>
                                <td className="p-4 text-slate-300">{use}</td>
                                <td className="p-4 text-slate-300">
                                    {meaning}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-orange-300">Ghi nhớ:</strong> CPU và GPU
                chủ yếu ăn điện từ đường 12V. Vì vậy, PSU tốt cần có đường 12V
                mạnh và ổn định, không chỉ có số Watt tổng đẹp trên nhãn.
            </div>
        </section>
    );
}

function PsuTypes() {
    const bySize = [
        [
            "ATX PSU",
            "Phổ biến nhất cho desktop",
            "Dễ mua, nhiều mẫu, giá tốt",
            "PC văn phòng, gaming, workstation phổ thông",
        ],
        ["SFX PSU", "Nhỏ hơn ATX", "Hợp case Mini-ITX/SFF", "PC nhỏ gọn"],
        [
            "SFX-L PSU",
            "Dài hơn SFX, quạt lớn hơn",
            "Êm hơn SFX thường",
            "PC nhỏ gọn cao cấp",
        ],
        [
            "TFX PSU",
            "Dạng dài, nhỏ",
            "Dùng cho case slim",
            "Máy bộ nhỏ, case mỏng",
        ],
    ];
    const byCable = [
        ["Non-Modular", "Dây gắn liền", "Giá rẻ", "Dây thừa nhiều, khó đi dây"],
        [
            "Semi-Modular",
            "Một số dây cố định, một số tháo được",
            "Cân bằng giá và gọn",
            "Vẫn có dây cố định",
        ],
        [
            "Full-Modular",
            "Tất cả dây tháo rời",
            "Đi dây đẹp, dễ vệ sinh",
            "Giá cao hơn",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Các loại PSU phổ biến"
                icon={<Layers3 />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="Phân loại theo kích thước"
                    rows={bySize}
                    headers={["Loại PSU", "Đặc điểm", "Ưu điểm", "Phù hợp"]}
                    accent="emerald"
                />
                <DataTable
                    title="Phân loại theo dây nguồn"
                    rows={byCable}
                    headers={["Loại", "Đặc điểm", "Ưu điểm", "Nhược điểm"]}
                    accent="cyan"
                />
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-emerald-300">ATX 3.0 / ATX 3.1:</strong>{" "}
                nên cân nhắc nếu dùng GPU đời mới/cao cấp, vì chuẩn mới hỗ trợ
                tốt hơn với transient spike và đầu 12VHPWR/12V‑2x6.
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        watt: {
            icon: <Gauge />,
            title: "Wattage",
            detail: "Công suất tối đa PSU có thể cấp, tính bằng Watt. PSU 750W không có nghĩa lúc nào cũng tiêu thụ 750W.",
            impact: "Nên chọn dư khoảng 20–30% so với tải nặng thực tế để nguồn mát hơn, êm hơn và còn khoảng nâng cấp.",
        },
        eff: {
            icon: <Sparkles />,
            title: "Efficiency",
            detail: "Hiệu suất chuyển điện AC sang DC. Hiệu suất càng cao thì ít điện thất thoát thành nhiệt hơn.",
            impact: "PSU hiệu suất cao thường mát hơn, êm hơn và tiết kiệm điện hơn trong thời gian dài.",
        },
        plus: {
            icon: <Award />,
            title: "80 PLUS",
            detail: "Chứng chỉ hiệu suất phổ biến: White, Bronze, Silver, Gold, Platinum, Titanium.",
            impact: "80 PLUS chỉ nói về hiệu suất, không tự đảm bảo toàn bộ chất lượng linh kiện, bảo vệ và độ bền.",
        },
        rail12: {
            icon: <Zap />,
            title: "Đường 12V",
            detail: "Đường điện quan trọng nhất với CPU và GPU trong PC hiện đại.",
            impact: "PSU 650W tốt thường có 12V cấp gần toàn bộ công suất. Đường 12V yếu dễ mất ổn định khi tải nặng.",
        },
        cable: {
            icon: <PlugZap />,
            title: "Đầu cắm nguồn",
            detail: "Cần đủ 24-pin ATX, 4+4 EPS CPU, PCIe 6+2, 12VHPWR/12V‑2x6, SATA power tùy cấu hình.",
            impact: "GPU cao cấp cần kiểm tra đầu nguồn kỹ; tốt nhất dùng dây native phù hợp thay vì phụ thuộc quá nhiều vào adapter.",
        },
        protect: {
            icon: <ShieldCheck />,
            title: "Bảo vệ điện",
            detail: "OCP, OVP, UVP, OPP, OTP, SCP giúp giảm rủi ro khi quá dòng, quá áp, thấp áp, quá công suất, quá nhiệt hoặc chập mạch.",
            impact: "PSU tốt không chỉ cấp điện, mà còn phải bảo vệ linh kiện khi có sự cố.",
        },
    };
    const [active, setActive] = useState("watt");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số kỹ thuật quan trọng"
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

function ConnectorGuide() {
    const rows = [
        ["24-pin ATX", "Mainboard"],
        ["4+4-pin EPS / 8-pin CPU", "CPU"],
        ["6+2-pin PCIe", "GPU rời"],
        ["12VHPWR / 12V-2x6", "GPU NVIDIA đời mới/cao cấp"],
        ["SATA Power", "SSD SATA, HDD, hub fan/RGB"],
        ["Molex", "Thiết bị cũ, quạt/hub cũ"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="blue"
                title="Các đầu cắm nguồn quan trọng"
                icon={<PlugZap />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[680px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Đầu cắm</th>
                            <th className="p-4">Dùng cho</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([plug, use]) => (
                            <tr
                                key={plug}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-blue-300 font-extrabold">
                                    {plug}
                                </td>
                                <td className="p-4 text-slate-300">{use}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-blue-300">Mẹo:</strong> Trước khi mua
                PSU, kiểm tra GPU cần bao nhiêu đầu 8-pin hoặc có cần
                12VHPWR/12V‑2x6 không. Với GPU cao cấp, ưu tiên PSU có dây
                native phù hợp.
            </div>
        </section>
    );
}

function ProtectionGuide() {
    const rows = [
        ["OCP", "Bảo vệ quá dòng"],
        ["OVP", "Bảo vệ quá áp"],
        ["UVP", "Bảo vệ thấp áp"],
        ["OPP", "Bảo vệ quá công suất"],
        ["OTP", "Bảo vệ quá nhiệt"],
        ["SCP", "Bảo vệ chập mạch"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="cyan"
                title="Bảo vệ điện: PSU tốt không chỉ cấp điện"
                icon={<ShieldCheck />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[620px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Bảo vệ</th>
                            <th className="p-4">Ý nghĩa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([code, meaning]) => (
                            <tr
                                key={code}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-cyan-300 font-extrabold">
                                    {code}
                                </td>
                                <td className="p-4 text-slate-300">
                                    {meaning}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <PackageCheck />,
            title: "Corsair CX650 80 PLUS Bronze",
            subtitle: "650W phổ thông",
            color: "cyan",
            points: [
                "Hợp Ryzen 5 / Intel Core i5",
                "Hợp RTX 4060 / RX 7600",
                "Công suất đủ cho gaming phổ thông",
                "Giá thường dễ chịu",
                "Không nên dùng cho CPU/GPU rất mạnh",
            ],
            lesson: "PSU 650W Bronze từ dòng uy tín phù hợp build tầm trung, nhưng không phải lựa chọn cho cấu hình cao cấp.",
        },
        {
            icon: <Award />,
            title: "Cooler Master MWE Gold 750 V2",
            subtitle: "750W Gold cân bằng",
            color: "yellow",
            points: [
                "Hợp Ryzen 7 / Intel i5-i7",
                "Hợp RTX 4070 / RX 7800 XT",
                "80 PLUS Gold",
                "Dư tải tốt hơn 650W",
                "Cần kiểm tra số dây PCIe theo GPU",
            ],
            lesson: "750W Gold là mức rất hợp lý cho gaming khá mạnh và dùng lâu dài.",
        },
        {
            icon: <Sparkles />,
            title: "Corsair RM850e / RM850x Gold",
            subtitle: "850W Gold cho cấu hình cao hơn",
            color: "orange",
            points: [
                "Hợp Ryzen 7/Ryzen 9 hoặc Intel i7",
                "Hợp RTX 4070 Ti Super / RTX 4080 class",
                "Thường full-modular",
                "Dư tải tốt cho GPU mạnh",
                "Cần kiểm tra chuẩn 12VHPWR/12V-2x6 nếu dùng GPU mới",
            ],
            lesson: "850W Gold hợp build cao cấp hơn, nhất là khi GPU có tải cao và cần nguồn ổn định.",
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
        office: {
            icon: <Cpu />,
            title: "PC văn phòng",
            answer: "Nếu không có GPU rời, 300–450W chất lượng tốt thường đủ. Ưu tiên độ ổn định, bảo hành và thương hiệu uy tín hơn số Watt lớn.",
            color: "cyan",
        },
        rtx4060: {
            icon: <Gamepad2 />,
            title: "RTX 4060 / RX 7600",
            answer: "Gaming phổ thông thường hợp 550–650W chất lượng tốt. Bronze tốt vẫn ổn, Gold càng tốt nếu ngân sách cho phép.",
            color: "emerald",
        },
        rtx4070: {
            icon: <Zap />,
            title: "RTX 4070 / RX 7800 XT",
            answer: "Nên cân nhắc 650–750W chất lượng tốt, ưu tiên Gold nếu dùng lâu dài. Kiểm tra số dây PCIe GPU cần.",
            color: "yellow",
        },
        high: {
            icon: <Sparkles />,
            title: "GPU cao cấp",
            answer: "RTX 4080 class nên cân nhắc 850W trở lên. GPU cao cấp hơn hoặc workstation CPU+GPU mạnh có thể cần 1000W+ tùy cấu hình.",
            color: "orange",
        },
        itx: {
            icon: <Layers3 />,
            title: "Case Mini-ITX",
            answer: "Có thể cần SFX hoặc SFX-L PSU. Không chỉ xem công suất, hãy kiểm tra kích thước PSU và dây có đủ cho GPU không.",
            color: "purple",
        },
        old: {
            icon: <AlertTriangle />,
            title: "PSU cũ 5–7 năm",
            answer: "Trước khi nâng GPU mạnh, kiểm tra tuổi nguồn, bảo hành, chất lượng dòng PSU, đủ đầu cắm và dấu hiệu restart/tắt nguồn. Nên thay nếu nguồn cũ yếu hoặc không rõ chất lượng.",
            color: "red",
        },
    };
    const [active, setActive] = useState("rtx4060");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: chọn PSU theo tình huống"
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
            wrong: "Chọn PSU chỉ theo số Watt lớn",
            right: "Watt lớn chưa đủ. Cần xem thương hiệu, dòng sản phẩm, đường 12V, hiệu suất, bảo vệ điện, review kỹ thuật và bảo hành.",
        },
        {
            wrong: "Tiết kiệm quá mức ở PSU",
            right: "PSU kém có thể gây restart, tắt phụt, sụt áp, nhiễu điện hoặc làm hỏng linh kiện trong trường hợp xấu.",
        },
        {
            wrong: "Nghĩ 80 PLUS Gold là chắc chắn tốt tuyệt đối",
            right: "80 PLUS chỉ nói về hiệu suất, không tự đảm bảo linh kiện bên trong, độ ổn định điện áp, độ ồn, bảo vệ và độ bền.",
        },
        {
            wrong: "Dùng dây modular lẫn giữa các PSU khác hãng",
            right: "Dây modular nhìn giống nhau nhưng pinout có thể khác. Cắm nhầm có thể làm hỏng SSD, GPU hoặc mainboard.",
        },
        {
            wrong: "Không kiểm tra đầu nguồn GPU",
            right: "GPU có thể cần 1/2/3 đầu 8-pin, 12VHPWR hoặc 12V-2x6. PSU phải có đủ đầu cắm phù hợp.",
        },
    ];
    const tips = [
        "Chọn PSU dư công suất khoảng 20–30% so với tải nặng thực tế.",
        "Gaming phổ thông nên bắt đầu từ 550–650W chất lượng tốt.",
        "Máy văn phòng: Bronze ổn nếu PSU chất lượng; gaming cao cấp: ưu tiên Gold trở lên từ dòng uy tín.",
        "Kiểm tra PSU có vừa case không: ATX, SFX, SFX-L hoặc TFX.",
        "Đừng dùng PSU quá cũ cho cấu hình mới mạnh, đặc biệt khi nâng GPU.",
        "Chỉ dùng dây modular đi kèm đúng PSU hoặc dây được hãng xác nhận tương thích.",
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
                        <span className="bg-yellow-500/20 text-yellow-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-yellow-300 border border-slate-800 shadow-inner space-y-2">
                            <p>PSU = Power Supply Unit = bộ nguồn máy tính</p>
                            <br />
                            <p className="text-slate-500"># Luồng điện</p>
                            <p className="text-slate-300">
                                AC ổ cắm → PSU → DC 12V / 5V / 3.3V
                            </p>
                            <p className="text-slate-300">
                                24-pin mainboard • EPS CPU • PCIe/12VHPWR GPU •
                                SATA power
                            </p>
                            <br />
                            <p className="text-slate-500"># Cần xem</p>
                            <p className="text-slate-300">
                                Wattage • 80 PLUS • 12V rail • cable •
                                protections • form factor
                            </p>
                            <br />
                            <p className="text-red-300">
                                PSU tốt không chỉ cấp điện mạnh, mà còn cấp điện
                                ổn định và bảo vệ linh kiện.
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
        question: "PSU có nhiệm vụ chính là gì?",
        options: [
            "Xử lý hình ảnh cho game",
            "Chuyển điện AC từ ổ cắm thành điện DC phù hợp cho linh kiện",
            "Lưu trữ dữ liệu lâu dài",
            "Làm tăng dung lượng RAM",
        ],
        correct: 1,
        explanation:
            "PSU chuyển điện AC từ ổ cắm thành các mức DC phù hợp như 12V, 5V, 3.3V cho linh kiện PC.",
    },
    {
        question:
            "Đường điện nào quan trọng nhất với CPU và GPU trong PC hiện đại?",
        options: ["1.5V", "3.3V", "5V", "12V"],
        correct: 3,
        explanation:
            "CPU và GPU chủ yếu tiêu thụ điện từ đường 12V, nên đây là đường rất quan trọng với PC hiện đại.",
    },
    {
        question: "Chứng chỉ 80 PLUS chủ yếu nói về điều gì?",
        options: [
            "Hiệu suất chuyển đổi điện của PSU",
            "Số nhân CPU",
            "Dung lượng SSD",
            "Tốc độ RAM",
        ],
        correct: 0,
        explanation:
            "80 PLUS là chứng nhận hiệu suất chuyển đổi điện AC sang DC, không tự đảm bảo toàn bộ chất lượng PSU.",
    },
    {
        question: "Dây 24-pin ATX dùng để cấp điện cho linh kiện nào?",
        options: ["Mainboard", "Màn hình", "Bàn phím", "Tai nghe"],
        correct: 0,
        explanation: "24-pin ATX là đầu nguồn chính cấp điện cho mainboard.",
    },
    {
        question: "Có nên dùng dây modular của PSU khác hãng không?",
        options: [
            "Có, miễn là cắm vừa",
            "Có, nếu dây màu giống nhau",
            "Không nên, vì pinout có thể khác và gây hỏng linh kiện",
            "Có, nếu PSU cùng công suất",
        ],
        correct: 2,
        explanation:
            "Dây modular giữa các PSU có thể khác pinout. Cắm nhầm có thể gây hỏng SSD, GPU hoặc mainboard.",
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
                    <strong className="text-yellow-400">
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
                <span className="text-yellow-400">
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
                        className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu PSU là gì và vai trò cấp điện cho hệ thống. Tiếp
                theo là phần đọc thông số PSU: Wattage, hiệu suất và chứng chỉ
                80 PLUS — nền tảng để tránh mua nguồn công suất ảo hoặc kém chất
                lượng.
            </p>
            <Link
                to="/phan-7-2"
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-yellow-500/20"
            >
                Bài tiếp theo: 7.2 — Các thông số PSU: Wattage, Hiệu suất, Chứng
                chỉ 80 PLUS <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function TerminalIcon(props) {
    return <Settings {...props} />;
}
function SectionTitle({ number, title, icon, color = "yellow" }) {
    const colorMap = {
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-yellow-500/10 border-yellow-400/50" : softBorder(color)}`}
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
            <table className="w-full min-w-[680px] text-sm">
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
    return map[color] || map.yellow;
}
function softBorder(color) {
    const map = {
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
    return map[color] || map.yellow;
}
function textColor(color) {
    const map = {
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
    return map[color] || "text-yellow-300";
}
