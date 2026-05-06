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
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                            <ShieldCheck className="text-cyan-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 7: PSU — Bài tổng kết nguồn điện
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                        Bài 7.6
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <PowerSafetyAnalogy />
                <QualityFlowSimulator />
                <NeedMatrix />
                <SpecsExplorer />
                <ProtectionTable />
                <WarrantyGuide />
                <CaseAndCableGuide />
                <FakeWattageDetector />
                <RealExamples />
                <PickerLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextPart />
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
                        <BookOpen size={16} /> Phần 7: PSU — Chọn an toàn và bền
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Cách chọn PSU
                        <span className="block text-cyan-400">
                            an toàn và bền
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        PSU rẻ có thể tiết kiệm vài trăm nghìn, nhưng nếu nguồn
                        kém làm hỏng mainboard, GPU hoặc SSD thì thiệt hại có
                        thể lớn hơn rất nhiều. Chọn PSU là chọn độ ổn định, tuổi
                        thọ và an toàn điện cho cả hệ thống.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Gauge size={16} />} text="Watt thật" />
                        <Tag icon={<Zap size={16} />} text="12V khỏe" />
                        <Tag
                            icon={<ShieldCheck size={16} />}
                            text="Bảo vệ điện"
                        />
                        <Tag icon={<PlugZap size={16} />} text="Đủ dây" />
                        <Tag icon={<Award size={16} />} text="Bảo hành" />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Gauge />}
                            label="Đủ Watt"
                            desc="Không sát tải"
                            color="cyan"
                            highlight
                        />
                        <HeroTile
                            icon={<Zap />}
                            label="12V Rail"
                            desc="CPU/GPU cần nhất"
                            color="yellow"
                        />
                        <HeroTile
                            icon={<ShieldCheck />}
                            label="Protection"
                            desc="OCP/OVP/UVP…"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<PackageCheck />}
                            label="Dòng uy tín"
                            desc="Không công suất ảo"
                            color="blue"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Checklist ngắn</p>
                        <p>Watt thật + 12V khỏe + đủ dây</p>
                        <p className="text-cyan-300">
                            + bảo vệ + bảo hành + review tốt
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu PSU an toàn và bền là nguồn cấp điện ổn định, đúng công suất, ít nhiễu, không sụt áp bất thường và có bảo vệ điện.",
        "Biết chọn PSU theo nhu cầu: văn phòng, gaming phổ thông, RTX 4070, RTX 4080 class, RTX 4090, workstation, Mini-ITX/SFF.",
        "Đọc đúng các tiêu chí: công suất thật, đường 12V, 80 PLUS, ATX 3.0/3.1, đầu cắm, bảo vệ điện, bảo hành, kích thước PSU.",
        "Nhận diện nguồn công suất ảo, PSU đáng nghi, PSU quá cũ và rủi ro dây modular lẫn bộ.",
        "Tổng kết Phần 7: chọn PSU không chỉ đúng Watt, mà phải đúng dòng, đúng chuẩn, đủ dây, đủ bảo vệ và hợp cấu hình.",
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
            icon: <Gauge />,
            title: "Đủ công suất thật",
            desc: "Không chỉ nhìn số Watt lớn trên hộp; phải xem dòng PSU và đường 12V.",
            color: "cyan",
        },
        {
            icon: <Zap />,
            title: "Điện ổn định",
            desc: "Điện áp không dao động bất thường, ripple thấp, không sụt áp khi tải nặng.",
            color: "yellow",
        },
        {
            icon: <ShieldCheck />,
            title: "Có bảo vệ điện",
            desc: "OCP, OVP, UVP, OPP, OTP, SCP giúp giảm rủi ro khi sự cố xảy ra.",
            color: "emerald",
        },
        {
            icon: <Award />,
            title: "Dòng uy tín",
            desc: "Thương hiệu, dòng sản phẩm, bảo hành và review kỹ thuật quan trọng hơn quảng cáo Watt lớn.",
            color: "blue",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="PSU an toàn và bền là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">PSU an toàn và bền</strong>{" "}
                    là bộ nguồn có khả năng cấp điện ổn định, đúng công suất, ít
                    nhiễu, không sụt áp bất thường, có cơ chế bảo vệ khi gặp sự
                    cố và hoạt động ổn định trong nhiều năm.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <RoleCard key={c.title} {...c} />
                    ))}
                </div>
                <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Đủ công suất thật • Đường 12V khỏe • Hiệu suất tốt • Đủ đầu
                    cắm • Bảo vệ điện • Dòng uy tín • Bảo hành rõ • Không công
                    suất ảo
                </div>
            </div>
        </section>
    );
}

function PowerSafetyAnalogy() {
    const cards = [
        {
            icon: <BatteryCharging />,
            title: "Ổn áp",
            desc: "Giữ điện đầu ra ổn định để linh kiện hoạt động bình thường.",
            color: "cyan",
        },
        {
            icon: <ShieldCheck />,
            title: "Cầu dao bảo vệ",
            desc: "Khi quá dòng, quá áp, quá nhiệt hoặc chập mạch, PSU tốt phải biết tự bảo vệ.",
            color: "emerald",
        },
        {
            icon: <Workflow />,
            title: "Trạm phân phối",
            desc: "Chia điện DC 12V/5V/3.3V cho CPU, GPU, mainboard, SSD, quạt.",
            color: "blue",
        },
        {
            icon: <AlertTriangle />,
            title: "Nguồn kém",
            desc: "Điện áp dao động, ripple cao, sụt áp khi tải nặng có thể gây restart, treo, tắt phụt.",
            color: "red",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: ổn áp + cầu dao + trạm điện"
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

function QualityFlowSimulator() {
    const flows = {
        good: {
            title: "PSU tốt",
            color: "emerald",
            steps: [
                {
                    icon: <PlugZap />,
                    title: "Nhận điện AC",
                    desc: "PSU nhận điện từ ổ cắm/UPS/ổ điện.",
                },
                {
                    icon: <BatteryCharging />,
                    title: "Chuyển đổi chất lượng",
                    desc: "Nguồn chuyển AC thành DC 12V, 5V, 3.3V ổn định.",
                },
                {
                    icon: <Zap />,
                    title: "Đường 12V khỏe",
                    desc: "CPU và GPU nhận điện đủ, ổn định khi tải nặng.",
                },
                {
                    icon: <ShieldCheck />,
                    title: "Bảo vệ khi sự cố",
                    desc: "Các mạch OCP/OVP/UVP/OPP/OTP/SCP giảm rủi ro kéo theo linh kiện.",
                },
                {
                    icon: <Sparkles />,
                    title: "Máy ổn định lâu dài",
                    desc: "Ít restart, ít treo, ít tắt phụt, linh kiện có môi trường điện tốt hơn.",
                },
            ],
        },
        bad: {
            title: "PSU kém",
            color: "red",
            steps: [
                {
                    icon: <AlertTriangle />,
                    title: "Công suất mập mờ",
                    desc: "Watt lớn trên tem nhưng đường 12V yếu hoặc thông số không rõ.",
                },
                {
                    icon: <Zap />,
                    title: "Ripple/sụt áp",
                    desc: "Điện áp dao động, nhiễu cao hoặc tụt khi CPU/GPU tải nặng.",
                },
                {
                    icon: <XCircle />,
                    title: "Máy lỗi bất thường",
                    desc: "Restart khi chơi game, treo khi render, tắt phụt khi GPU boost.",
                },
                {
                    icon: <HardDrive />,
                    title: "Rủi ro lâu dài",
                    desc: "Có thể ảnh hưởng mainboard, GPU, SSD, HDD hoặc mất dữ liệu trong tình huống xấu.",
                },
            ],
        },
        upgrade: {
            title: "Khi nâng cấp GPU",
            color: "orange",
            steps: [
                {
                    icon: <Gamepad2 />,
                    title: "GPU mới ăn điện hơn",
                    desc: "Nâng RTX 4060 lên RTX 4080 class thay đổi hoàn toàn yêu cầu PSU.",
                },
                {
                    icon: <Gauge />,
                    title: "Kiểm tra công suất",
                    desc: "Tính lại tải nặng và thêm khoảng dư hợp lý.",
                },
                {
                    icon: <PlugZap />,
                    title: "Kiểm tra đầu cắm",
                    desc: "GPU cần 8-pin, nhiều 8-pin, 12VHPWR hay 12V-2x6?",
                },
                {
                    icon: <Award />,
                    title: "Kiểm tra tuổi nguồn",
                    desc: "Nguồn 5–7 năm, hết bảo hành hoặc có lỗi nên cân nhắc thay.",
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
                title="Vì sao PSU ảnh hưởng đến độ bền hệ thống?"
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

function NeedMatrix() {
    const rows = [
        [
            "Văn phòng, học tập, không GPU rời",
            "Hãng uy tín, Bronze trở lên nếu có",
            "300–450W",
            "Không cần nguồn quá lớn",
        ],
        [
            "Gaming phổ thông RTX 4060 / RX 7600",
            "Bronze tốt hoặc Gold",
            "550–650W",
            "Ưu tiên 650W nếu muốn nâng cấp",
        ],
        [
            "Gaming RTX 4070 / RX 7800 XT",
            "Gold, dòng tốt",
            "650–750W",
            "750W là mức đẹp",
        ],
        [
            "Gaming cao cấp RTX 4080 class",
            "Gold tốt, ATX 3.0/3.1",
            "850W",
            "Nên có dây native nếu GPU cần",
        ],
        [
            "RTX 4090 / GPU rất mạnh",
            "Gold/Platinum cao cấp",
            "1000W+",
            "Không chọn nguồn sát tải",
        ],
        [
            "Workstation/render/AI",
            "PSU cao cấp, bảo hành dài",
            "1000W+ tùy cấu hình",
            "Ưu tiên review kỹ thuật tốt",
        ],
        [
            "Mini-ITX/SFF",
            "SFX/SFX-L full-modular",
            "Tùy GPU",
            "Kiểm tra chiều dài dây và kích thước PSU",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="emerald"
                title="Chọn PSU theo nhu cầu sử dụng"
                icon={<Search />}
            />
            <DataTable
                title="Ma trận chọn nguồn thực chiến"
                rows={rows}
                headers={[
                    "Nhu cầu",
                    "PSU nên chọn",
                    "Công suất gợi ý",
                    "Ghi chú",
                ]}
                accent="emerald"
            />
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        watt: {
            icon: <Gauge />,
            title: "Công suất thật",
            detail: "Không chỉ nhìn số Watt lớn trên hộp. Hãy xem công suất tổng, công suất đường 12V, hãng/dòng, review và bảo hành.",
            impact: "PSU 650W tốt thường có đường 12V gần toàn bộ 650W; nguồn 650W kém có 12V yếu bất thường cần tránh.",
        },
        efficiency: {
            icon: <Sparkles />,
            title: "Hiệu suất",
            detail: "Bronze, Gold, Platinum nói về hiệu suất chuyển đổi điện, không nói toàn bộ chất lượng PSU.",
            impact: "Gaming hiện nay thường cân bằng với 650–850W Gold từ dòng uy tín.",
        },
        atx: {
            icon: <PlugZap />,
            title: "ATX 3.0 / 3.1",
            detail: "GPU dùng 12VHPWR hoặc 12V-2x6 nên cân nhắc PSU chuẩn mới và dây native.",
            impact: "GPU cao cấp không nên phụ thuộc adapter rẻ/kém chất lượng.",
        },
        cable: {
            icon: <Puzzle />,
            title: "Đủ đầu cắm",
            detail: "Cần 24-pin ATX, 4+4/8-pin EPS, PCIe 6+2, 12VHPWR/12V-2x6, SATA Power và Molex nếu thiết bị cũ cần.",
            impact: "PSU tốt nhưng thiếu dây vẫn gây phiền, phải dùng adapter hoặc đổi nguồn.",
        },
        protection: {
            icon: <ShieldCheck />,
            title: "Bảo vệ điện",
            detail: "OCP, OVP, UVP, OPP, OTP, SCP giúp giảm nguy cơ kéo theo linh kiện khi có sự cố.",
            impact: "Nguồn an toàn không chỉ cấp điện, mà phải biết tự ngắt/bảo vệ khi bất thường.",
        },
        warranty: {
            icon: <Award />,
            title: "Bảo hành",
            detail: "Bảo hành không đảm bảo tuyệt đối, nhưng là tín hiệu quan trọng về phân khúc và độ tin cậy.",
            impact: "5 năm tốt cho tầm trung; 7–10 năm thường gặp ở dòng cao hơn.",
        },
        size: {
            icon: <Layers3 />,
            title: "Kích thước PSU",
            detail: "PSU phải vừa case: ATX, SFX, SFX-L, TFX và chiều dài nguồn.",
            impact: "PSU công suất cao có thể dài hơn, vướng ổ cứng/dây trong case nhỏ.",
        },
        old: {
            icon: <AlertTriangle />,
            title: "Tuổi PSU",
            detail: "PSU cũng lão hóa: tụ điện, quạt và linh kiện bên trong suy giảm theo thời gian.",
            impact: "Nguồn 5–7 năm, hết bảo hành, có tiếng lạ hoặc restart khi tải nặng nên cân nhắc thay khi nâng GPU.",
        },
    };
    const [active, setActive] = useState("watt");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="yellow"
                title="Thông số kỹ thuật quan trọng khi chọn PSU"
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

function ProtectionTable() {
    const rows = [
        ["OCP", "Over Current Protection", "Bảo vệ quá dòng"],
        ["OVP", "Over Voltage Protection", "Bảo vệ quá áp"],
        ["UVP", "Under Voltage Protection", "Bảo vệ thấp áp"],
        ["OPP", "Over Power Protection", "Bảo vệ quá công suất"],
        ["OTP", "Over Temperature Protection", "Bảo vệ quá nhiệt"],
        ["SCP", "Short Circuit Protection", "Bảo vệ chập mạch"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="cyan"
                title="Các cơ chế bảo vệ điện cần có"
                icon={<ShieldCheck />}
            />
            <DataTable
                title="PSU an toàn nên có các bảo vệ này"
                rows={rows}
                headers={["Bảo vệ", "Tên đầy đủ", "Ý nghĩa dễ hiểu"]}
                accent="cyan"
            />
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-cyan-300">Ghi nhớ:</strong> nếu PSU gặp
                sự cố, các bảo vệ này giúp giảm nguy cơ kéo theo linh kiện khác.
            </div>
        </section>
    );
}

function WarrantyGuide() {
    const rows = [
        ["12–24 tháng", "Cần cân nhắc kỹ"],
        ["36 tháng", "Tạm ổn"],
        ["5 năm", "Tốt cho PSU tầm trung"],
        ["7–10 năm", "Thường là dòng cao cấp hơn"],
    ];
    const efficiency = [
        ["80 PLUS Bronze", "Đủ dùng nếu là dòng tốt, phù hợp máy phổ thông"],
        ["80 PLUS Gold", "Điểm cân bằng tốt cho gaming/làm việc"],
        ["80 PLUS Platinum/Titanium", "Cao cấp, hợp máy chạy lâu, workstation"],
        ["Không chứng nhận rõ", "Cần rất thận trọng"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="blue"
                title="Hiệu suất và bảo hành: đọc đúng tín hiệu"
                icon={<Award />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="Hiểu đúng 80 PLUS"
                    rows={efficiency}
                    headers={["Chứng nhận", "Nên hiểu thế nào?"]}
                    accent="blue"
                />
                <DataTable
                    title="Bảo hành PSU"
                    rows={rows}
                    headers={["Thời gian", "Nhận xét"]}
                    accent="emerald"
                />
            </div>
        </section>
    );
}

function CaseAndCableGuide() {
    const cases = [
        ["Case ATX / Mid Tower", "ATX PSU"],
        ["Case mATX phổ thông", "ATX PSU"],
        ["Case Mini-ITX / SFF", "SFX hoặc SFX-L"],
        ["Case slim", "TFX hoặc nguồn riêng theo case"],
    ];
    const cables = [
        ["GPU dùng 1 x 8-pin PCIe", "PSU ATX 2.x tốt vẫn ổn"],
        ["GPU dùng 2 x 8-pin PCIe", "Kiểm tra đủ dây PCIe"],
        ["GPU dùng 12VHPWR", "Nên ưu tiên PSU có dây native"],
        ["GPU dùng 12V-2x6", "Nên ưu tiên ATX 3.1 / PCIe 5.1"],
        ["GPU cao cấp", "Không dùng adapter rẻ/kém chất lượng"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="purple"
                title="Kích thước PSU, case và dây GPU mới"
                icon={<Layers3 />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="PSU phải vừa case"
                    rows={cases}
                    headers={["Loại case", "PSU thường dùng"]}
                    accent="purple"
                />
                <DataTable
                    title="GPU đời mới cần kiểm tra gì?"
                    rows={cables}
                    headers={["Tình huống", "Khuyến nghị"]}
                    accent="orange"
                />
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-orange-300">Với RTX cao cấp:</strong> ưu
                tiên dây native 12VHPWR hoặc 12V-2x6, không gập dây sát đầu cắm,
                cắm vào hết nấc và tránh adapter rẻ.
            </div>
        </section>
    );
}

function FakeWattageDetector() {
    const signs = [
        "Giá quá rẻ so với công suất",
        "Thương hiệu lạ",
        "Không có thông số đường 12V rõ ràng",
        "Không ghi bảo vệ điện",
        "Không có bảo hành rõ",
        "Trọng lượng quá nhẹ bất thường",
        "Thông tin sản phẩm mập mờ",
        "Không có review kỹ thuật đáng tin",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="red"
                title="Nhận diện nguồn công suất ảo / đáng nghi"
                icon={<AlertTriangle />}
            />
            <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-6">
                <h3 className="text-xl font-bold text-red-300 mb-5">
                    Dấu hiệu nên tránh
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                    {signs.map((s) => (
                        <div
                            key={s}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-3 text-sm text-slate-300"
                        >
                            <XCircle
                                className="text-red-400 shrink-0 mt-0.5"
                                size={18}
                            />
                            <span>{s}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300">
                650W chất lượng tốt{" "}
                <span className="text-emerald-300">&gt;</span> 900W công suất ảo
                <br />
                750W Gold dòng tốt{" "}
                <span className="text-emerald-300">&gt;</span> 1000W dòng lạ,
                thông số mập mờ
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Gamepad2 />,
            title: "Gaming phổ thông",
            subtitle: "RTX 4060 / RX 7600",
            color: "emerald",
            points: [
                "550W tốt: đủ dùng",
                "650W Gold: đẹp hơn, dư nâng cấp nhẹ",
                "Đường 12V khỏe",
                "Ít nhất 1 đầu PCIe 8-pin",
                "Bảo hành rõ ràng",
            ],
            lesson: "Với ngân sách vừa phải, chọn 650W từ dòng uy tín hơn nguồn 750W giá rẻ bất thường.",
        },
        {
            icon: <Sparkles />,
            title: "Corsair RM750e",
            subtitle: "Gaming tầm khá RTX 4070/Super",
            color: "cyan",
            points: [
                "750W",
                "Full-modular",
                "ATX 3.1 / PCIe 5.1",
                "12V-2x6",
                "Cybenetics Gold",
            ],
            lesson: "750W Gold full-modular, chuẩn mới và dây GPU native phù hợp build tầm khá hiện đại.",
        },
        {
            icon: <Award />,
            title: "Cooler Master MWE Gold 750 V2",
            subtitle: "750W Gold cân bằng",
            color: "yellow",
            points: [
                "80 PLUS Gold",
                "2 EPS connectors",
                "Full modular ở bản FM",
                "Quạt 120mm HDB",
                "Bảo hành 5 năm",
            ],
            lesson: "Dòng 750W Gold tốt là lựa chọn cân bằng cho Core i5/i7 hoặc Ryzen 5/7 với GPU tầm trung khá.",
        },
        {
            icon: <ShieldCheck />,
            title: "Seasonic Focus GX 850",
            subtitle: "Gaming cao cấp / workstation nhẹ",
            color: "blue",
            points: [
                "850W",
                "80 PLUS Gold",
                "Full modular",
                "ATX 3.0 / PCIe 5.0",
                "Dòng Focus GX uy tín",
            ],
            lesson: "850W Gold dòng tốt hợp RTX 4070 Ti Super / RTX 4080 class và CPU mạnh.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="pink"
                title="Ví dụ thực tế cụ thể"
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
        office: {
            icon: <Cpu />,
            title: "Văn phòng",
            answer: "Chọn 300–450W từ hãng/dòng uy tín. Bronze tốt là đủ nếu không có GPU rời; không cần nguồn quá lớn.",
            color: "cyan",
        },
        rtx4060: {
            icon: <Gamepad2 />,
            title: "RTX 4060/RX 7600",
            answer: "550–650W Bronze tốt hoặc Gold. Ưu tiên 650W nếu muốn dư nâng cấp và case đi dây gọn.",
            color: "emerald",
        },
        rtx4070: {
            icon: <Sparkles />,
            title: "RTX 4070/RX 7800 XT",
            answer: "650–750W Gold dòng tốt. 750W là mức đẹp cho gaming tầm khá, mát, êm và có dư vừa phải.",
            color: "yellow",
        },
        rtx4080: {
            icon: <Zap />,
            title: "RTX 4080 class",
            answer: "850W Gold tốt, ưu tiên ATX 3.0/3.1 và dây native 12VHPWR/12V-2x6 nếu GPU cần.",
            color: "orange",
        },
        workstation: {
            icon: <Database />,
            title: "Workstation/AI",
            answer: "1000W+ tùy cấu hình. Ưu tiên Gold/Platinum dòng cao cấp, bảo hành dài, review kỹ thuật tốt, không chọn sát tải.",
            color: "purple",
        },
        used: {
            icon: <AlertTriangle />,
            title: "Mua PSU cũ",
            answer: "Rất thận trọng: kiểm tra bảo hành, đủ dây gốc, từng chạy đào coin/render không, quạt/mùi khét/ốc tháo mở và dòng PSU có uy tín không.",
            color: "red",
        },
    };
    const [active, setActive] = useState("rtx4070");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="12"
                color="blue"
                title="Lab: chọn PSU an toàn theo tình huống"
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
            wrong: "Chọn PSU theo Watt lớn nhất trong tầm tiền",
            right: "Công suất lớn bất thường nhưng giá quá rẻ rất đáng nghi. 650W chất lượng tốt thường hơn 900W công suất ảo.",
        },
        {
            wrong: "Tin tuyệt đối vào 80 PLUS Gold",
            right: "80 PLUS chỉ nói về hiệu suất, không nói hết ripple, độ ổn định điện áp, tụ, bảo vệ, độ ồn và spike tải.",
        },
        {
            wrong: "Dùng PSU quá cũ cho GPU mới mạnh",
            right: "PSU 5–7 năm, hết bảo hành, thiếu đầu GPU mới, restart khi tải nặng hoặc có tiếng/mùi lạ nên cân nhắc thay.",
        },
        {
            wrong: "Dùng dây modular lẫn nhau",
            right: "Cắm vừa không có nghĩa pinout đúng. Chỉ dùng dây đi kèm đúng PSU hoặc dây được hãng xác nhận tương thích đúng model.",
        },
        {
            wrong: "Chọn PSU thiếu đầu cắm",
            right: "Trước khi mua, xem mainboard cần 8+4 CPU không, GPU cần bao nhiêu PCIe/12VHPWR, hub fan/RGB cần SATA Power không.",
        },
        {
            wrong: "Tiết kiệm PSU nhưng mua GPU rất đắt",
            right: "GPU mạnh cần PSU đủ tốt để bảo vệ và cấp điện ổn định. Đừng để GPU 10–30 triệu đi với nguồn rẻ, dòng mập mờ.",
        },
    ];
    const tips = [
        "Chọn PSU theo dòng sản phẩm, không chỉ theo hãng.",
        "Gaming PC nên ưu tiên Gold nếu ngân sách cho phép.",
        "Tránh nguồn có giá quá rẻ so với công suất và thông số mập mờ.",
        "GPU đời mới nên ưu tiên PSU ATX 3.0/3.1, dây native 12VHPWR/12V-2x6.",
        "Đừng để PSU chạy sát tải lâu dài; nguồn chạy thoải mái thường mát, êm, bền và ổn định hơn.",
        "PSU cũ rủi ro hơn nhiều linh kiện khác; không nên mua PSU cũ cho máy đắt tiền nếu không kiểm tra được.",
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
                        Tóm tắt & Kiểm tra cuối Phần 7
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-cyan-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                PSU an toàn = đủ Watt thật + 12V khỏe + điện ổn
                                định
                            </p>
                            <p>
                                + đủ đầu cắm + bảo vệ điện + bảo hành rõ + dòng
                                uy tín
                            </p>
                            <br />
                            <p className="text-slate-500">
                                # Không nên chỉ nhìn
                            </p>
                            <p className="text-slate-300">
                                Watt lớn • 80 PLUS Gold • hãng quen • giá rẻ
                            </p>
                            <br />
                            <p className="text-red-300">
                                GPU đắt không nên đi với PSU rẻ, không rõ dòng,
                                thông số mập mờ.
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
        question: "Khi chọn PSU, yếu tố nào quan trọng nhất?",
        options: [
            "Chỉ cần Watt thật lớn",
            "Đủ công suất, chất lượng tốt, đủ bảo vệ và phù hợp cấu hình",
            "Có RGB là được",
            "Nặng nhất là tốt nhất",
        ],
        correct: 1,
        explanation:
            "PSU tốt phải đủ công suất, chất lượng ổn, đủ bảo vệ, đủ dây và phù hợp cấu hình thực tế.",
    },
    {
        question: "80 PLUS Gold có đảm bảo PSU tốt toàn diện không?",
        options: [
            "Có, chắc chắn 100%",
            "Không, nó chủ yếu nói về hiệu suất, vẫn phải xem chất lượng dòng PSU",
            "Có, nếu PSU màu đen",
            "Không liên quan gì đến PSU",
        ],
        correct: 1,
        explanation:
            "80 PLUS chủ yếu nói về hiệu suất chuyển đổi điện, không đánh giá toàn bộ ripple, linh kiện, bảo vệ và độ bền.",
    },
    {
        question: "Với GPU dùng 12VHPWR/12V-2x6, nên ưu tiên gì?",
        options: [
            "Adapter rẻ nhất",
            "PSU có dây native phù hợp, ATX 3.0/3.1 nếu có thể",
            "Dây Molex chuyển đổi",
            "Không cần cắm dây nguồn GPU",
        ],
        correct: 1,
        explanation:
            "GPU dùng đầu mới nên ưu tiên PSU chuẩn mới và dây native phù hợp để giảm rủi ro adapter kém.",
    },
    {
        question: "Có nên dùng dây modular của PSU khác không?",
        options: [
            "Có, miễn cắm vừa",
            "Có, nếu cùng màu",
            "Không, vì pinout có thể khác và gây hỏng linh kiện",
            "Có, nếu dây dài hơn",
        ],
        correct: 2,
        explanation:
            "Dây modular có thể khác pinout giữa các PSU; cắm vừa không có nghĩa dùng được.",
    },
    {
        question: "Dấu hiệu PSU đáng nghi là gì?",
        options: [
            "Bảo hành rõ ràng",
            "Có thông số đường 12V rõ",
            "Giá quá rẻ so với công suất, thương hiệu lạ, thông số mập mờ",
            "Có review kỹ thuật tốt",
        ],
        correct: 2,
        explanation:
            "Giá quá rẻ, thương hiệu lạ và thông số mập mờ là dấu hiệu nguồn đáng nghi/công suất ảo.",
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
                    Hoàn thành Phần 7!
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

function NextPart() {
    return (
        <div className="text-center pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">
                Bạn đã học xong Phần 7 — PSU Nguồn điện: từ PSU là gì, thông số
                Watt/hiệu suất/80 PLUS, các đầu cắm điện, modular, cách tính
                công suất đến cách chọn PSU an toàn và bền. Phần tiếp theo là Vỏ
                máy tính / Case, vì case ảnh hưởng trực tiếp đến kích thước linh
                kiện, airflow, nhiệt độ, độ ồn, thẩm mỹ và khả năng nâng cấp.
            </p>
            <Link
                to="/phan-8-1"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Phần tiếp theo: 8.1 — Vai trò của vỏ máy tính{" "}
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
