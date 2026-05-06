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
    Gauge,
    HardDrive,
    Headphones,
    Layers3,
    Lightbulb,
    Monitor,
    Network,
    PackageCheck,
    PlugZap,
    Power,
    Puzzle,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    Usb,
    Volume2,
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
                            <Usb className="text-cyan-400" size={24} />
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
                    <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                        Bài 6.6
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <MallAnalogy />
                <ConnectionFlowSimulator />
                <PortGroups />
                <UsbGuide />
                <StorageGuide />
                <AudioFanRgbGuide />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
                        <BookOpen size={16} /> Phần 6: Mainboard — Onboard
                        connectors
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Cổng kết nối onboard
                        <span className="block text-cyan-400">
                            USB, SATA, M.2, Audio
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Trên mainboard có rất nhiều cổng nhỏ: USB trước case,
                        jack tai nghe, SATA, M.2, quạt, RGB, nút nguồn. Nếu chia
                        thành nhóm, bạn sẽ biết dây nào cắm vào đâu và tránh lỗi
                        lắp máy phổ biến.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Usb size={16} />} text="USB Headers" />
                        <Tag icon={<HardDrive size={16} />} text="SATA / M.2" />
                        <Tag icon={<Volume2 size={16} />} text="Audio" />
                        <Tag icon={<Fan size={16} />} text="Fan Headers" />
                        <Tag icon={<Sparkles size={16} />} text="RGB / ARGB" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Monitor />}
                            label="Rear I/O"
                            desc="Cổng phía sau case"
                            color="cyan"
                            highlight
                        />
                        <HeroTile
                            icon={<Puzzle />}
                            label="Headers"
                            desc="Cắm dây bên trong"
                            color="blue"
                        />
                        <HeroTile
                            icon={<HardDrive />}
                            label="Storage"
                            desc="SATA + M.2"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Fan />}
                            label="Cooling"
                            desc="CPU_FAN, SYS_FAN"
                            color="emerald"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Chia nhóm để đỡ rối</p>
                        <p>Rear I/O = cổng lộ ra sau case</p>
                        <p className="text-cyan-300">
                            Internal Header = chân cắm dây trong case
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Phân biệt Rear I/O và Internal Header/Connector trên mainboard.",
        "Hiểu các cổng USB onboard: USB 2.0, USB 3.2 Gen 1/2/2x2, USB-C và front USB header.",
        "Biết SATA cần cả cáp data và cáp power, còn M.2 NVMe gắn trực tiếp vào khe M.2.",
        "Nhận diện audio rear I/O, front audio header, fan header, front panel header, RGB/ARGB header.",
        "Tránh lỗi cắm nhầm: ARGB 5V vào RGB 12V, case có USB-C nhưng main không có header, quên SATA power, quên HD_AUDIO.",
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
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center font-bold mb-4">
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
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Khái niệm cốt lõi: Cổng onboard là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Cổng kết nối onboard</strong>{" "}
                    là các cổng, khe hoặc chân cắm được tích hợp sẵn trên
                    mainboard để kết nối linh kiện và thiết bị khác: ổ lưu trữ,
                    USB, âm thanh, quạt, RGB, nút nguồn case và thiết bị ngoại
                    vi.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoPanel
                        icon={<Monitor />}
                        title="Rear I/O"
                        points={[
                            "Nằm phía sau mainboard",
                            "Lộ ra sau case",
                            "Cắm chuột, phím, USB, LAN, Audio, HDMI/DP",
                            "Dùng trực tiếp từ bên ngoài case",
                        ]}
                        color="cyan"
                    />
                    <InfoPanel
                        icon={<Puzzle />}
                        title="Internal Header / Connector"
                        points={[
                            "Nằm trên mặt mainboard",
                            "Dùng để cắm dây bên trong case",
                            "USB front panel, SATA, Audio front, Fan, RGB, Front Panel",
                            "Cần đọc manual để cắm đúng chân",
                        ]}
                        color="blue"
                    />
                </div>
                <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    USB sau mainboard → cắm trực tiếp phía sau case
                    <br />
                    Header USB trên mainboard → nối dây ra cổng USB mặt trước
                    case
                </div>
            </div>
        </section>
    );
}

function MallAnalogy() {
    const cards = [
        {
            icon: <Layers3 />,
            title: "Mainboard = trung tâm thương mại",
            desc: "Có nhiều cửa ra vào chuyên dụng cho từng loại thiết bị.",
            color: "cyan",
        },
        {
            icon: <Usb />,
            title: "USB = cửa cho thiết bị ngoại vi",
            desc: "Chuột, phím, USB flash, ổ ngoài, webcam, tay cầm, dock.",
            color: "blue",
        },
        {
            icon: <HardDrive />,
            title: "SATA/M.2 = cửa kho lưu trữ",
            desc: "Kết nối HDD, SSD SATA hoặc SSD M.2 NVMe.",
            color: "orange",
        },
        {
            icon: <Headphones />,
            title: "Audio = cửa âm thanh",
            desc: "Tai nghe, loa, micro phía sau hoặc phía trước case.",
            color: "purple",
        },
        {
            icon: <Fan />,
            title: "Fan/RGB = cửa phụ trợ",
            desc: "Quạt, bơm AIO, đèn RGB/ARGB và nút nguồn case.",
            color: "emerald",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: trung tâm thương mại nhiều cửa"
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

function ConnectionFlowSimulator() {
    const flows = {
        usb: {
            title: "USB mặt trước case",
            color: "cyan",
            steps: [
                {
                    icon: <Usb />,
                    title: "Cắm USB vào mặt trước case",
                    desc: "Bạn cắm USB flash, ổ ngoài hoặc thiết bị ngoại vi vào cổng USB phía trước.",
                },
                {
                    icon: <Workflow />,
                    title: "Dây USB front panel đi vào main",
                    desc: "Dây từ case được cắm vào internal USB header trên mainboard.",
                },
                {
                    icon: <Settings />,
                    title: "Mainboard/chipset nhận tín hiệu",
                    desc: "Tín hiệu đi qua header và chipset/mainboard.",
                },
                {
                    icon: <Cpu />,
                    title: "CPU/hệ điều hành nhận thiết bị",
                    desc: "Windows/Linux nhận USB và cho phép truy cập dữ liệu.",
                },
            ],
        },
        sata: {
            title: "SSD/HDD SATA",
            color: "orange",
            steps: [
                {
                    icon: <HardDrive />,
                    title: "Ổ SATA được lắp vào case",
                    desc: "HDD 3.5 inch hoặc SSD SATA 2.5 inch cần gắn vào khay ổ.",
                },
                {
                    icon: <Database />,
                    title: "Cắm SATA data vào mainboard",
                    desc: "Cáp SATA data nối ổ với cổng SATA trên mainboard.",
                },
                {
                    icon: <PlugZap />,
                    title: "Cắm SATA power từ PSU",
                    desc: "Ổ SATA cần thêm dây nguồn từ PSU, không chỉ có dây data.",
                },
                {
                    icon: <ShieldCheck />,
                    title: "BIOS/OS nhận ổ",
                    desc: "Nếu cả data và power đúng, BIOS/UEFI và hệ điều hành sẽ thấy ổ.",
                },
            ],
        },
        m2: {
            title: "SSD M.2 NVMe",
            color: "emerald",
            steps: [
                {
                    icon: <HardDrive />,
                    title: "Gắn SSD M.2 vào khe M.2",
                    desc: "SSD M.2 được gắn trực tiếp lên mainboard, thường có ốc giữ.",
                },
                {
                    icon: <Zap />,
                    title: "Dữ liệu đi qua PCIe lanes",
                    desc: "M.2 NVMe dùng PCIe, nhanh hơn SSD SATA nhiều.",
                },
                {
                    icon: <Cpu />,
                    title: "CPU hoặc chipset xử lý đường truyền",
                    desc: "Tùy khe M.2, lane có thể đi trực tiếp từ CPU hoặc qua chipset.",
                },
                {
                    icon: <HardDrive />,
                    title: "Hệ điều hành nhận ổ tốc độ cao",
                    desc: "Ổ có thể dùng làm ổ hệ điều hành, game, project hoặc cache.",
                },
            ],
        },
        audio: {
            title: "Jack audio mặt trước",
            color: "purple",
            steps: [
                {
                    icon: <Headphones />,
                    title: "Cắm tai nghe vào mặt trước case",
                    desc: "Bạn dùng jack headphone/micro phía trước case.",
                },
                {
                    icon: <Volume2 />,
                    title: "Dây HD_AUDIO nối vào main",
                    desc: "Dây HD_AUDIO phải được cắm vào JAUD1/AAFP trên mainboard.",
                },
                {
                    icon: <Settings />,
                    title: "Audio codec xử lý",
                    desc: "Chip audio onboard xử lý tín hiệu âm thanh.",
                },
                {
                    icon: <Volume2 />,
                    title: "Tai nghe/micro hoạt động",
                    desc: "Nếu dây đúng và driver đúng, Windows sẽ nhận thiết bị âm thanh.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("usb");
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
                title="Các cổng onboard kết nối thế nào?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-3 mb-6">
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

function PortGroups() {
    const rows = [
        [
            "Rear I/O",
            "Phía sau mainboard, lộ ra sau case",
            "USB, LAN, Audio, HDMI, DisplayPort",
            "Cắm thiết bị trực tiếp từ bên ngoài",
        ],
        [
            "Internal Header / Connector",
            "Nằm trên mặt mainboard",
            "USB front panel, SATA, Audio front panel, Fan, RGB",
            "Nối dây từ case hoặc linh kiện bên trong",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Hai nhóm cổng cần phân biệt"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[860px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Nhóm cổng</th>
                            <th className="p-4">Nằm ở đâu?</th>
                            <th className="p-4">Ví dụ</th>
                            <th className="p-4">Dùng thế nào?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([group, loc, ex, use]) => (
                            <tr
                                key={group}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-blue-300 font-extrabold">
                                    {group}
                                </td>
                                <td className="p-4 text-slate-300">{loc}</td>
                                <td className="p-4 text-slate-300">{ex}</td>
                                <td className="p-4 text-slate-300">{use}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function UsbGuide() {
    const rows = [
        [
            "USB 2.0",
            "Sau mainboard hoặc header trong main",
            "480 Mb/s",
            "Chuột, phím, thiết bị đơn giản",
        ],
        [
            "USB 3.2 Gen 1",
            "Sau mainboard, header front USB",
            "5 Gb/s",
            "USB, ổ ngoài phổ thông",
        ],
        [
            "USB 3.2 Gen 2",
            "Sau mainboard, đôi khi có Type-C",
            "10 Gb/s",
            "SSD ngoài nhanh",
        ],
        [
            "USB 3.2 Gen 2x2",
            "Mainboard cao hơn",
            "20 Gb/s",
            "SSD ngoài tốc độ cao",
        ],
        [
            "USB-C",
            "Sau mainboard hoặc mặt trước case",
            "Tùy chuẩn đi kèm",
            "Thiết bị đời mới, dock, điện thoại, SSD ngoài",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="cyan"
                title="Cổng USB: đừng chỉ nhìn hình dạng"
                icon={<Usb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[900px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Loại USB</th>
                            <th className="p-4">Vị trí thường gặp</th>
                            <th className="p-4">Tốc độ thường gặp</th>
                            <th className="p-4">Dùng cho</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([type, loc, speed, use]) => (
                            <tr
                                key={type}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-cyan-300 font-extrabold">
                                    {type}
                                </td>
                                <td className="p-4 text-slate-300">{loc}</td>
                                <td className="p-4 text-slate-300">{speed}</td>
                                <td className="p-4 text-slate-300">{use}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-cyan-300">Quan trọng:</strong> USB-C chỉ
                là hình dáng đầu cắm. Một cổng USB-C có thể chạy 5Gb/s, 10Gb/s,
                20Gb/s hoặc hơn tùy mainboard và chuẩn USB đi kèm.
            </div>
        </section>
    );
}

function StorageGuide() {
    const sataRows = [
        ["HDD 3.5 inch", "Có"],
        ["SSD SATA 2.5 inch", "Có"],
        ["Ổ DVD/Blu-ray", "Có"],
        ["SSD M.2 NVMe", "Không dùng cáp SATA"],
        ["USB flash drive", "Không"],
    ];
    const m2Rows = [
        ["M.2 SATA", "SATA", "Tương đương SSD SATA", "Không nhanh bằng NVMe"],
        ["M.2 NVMe PCIe 3.0", "PCIe", "Nhanh", "Phổ biến trên máy đời trước"],
        ["M.2 NVMe PCIe 4.0", "PCIe", "Rất nhanh", "Phổ biến hiện nay"],
        ["M.2 NVMe PCIe 5.0", "PCIe", "Rất rất nhanh", "Main/SSD cao cấp"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="orange"
                title="SATA và M.2: hai kiểu lưu trữ khác nhau"
                icon={<HardDrive />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="Thiết bị nào dùng SATA?"
                    rows={sataRows}
                    headers={["Thiết bị", "Có dùng SATA không?"]}
                    accent="orange"
                />
                <DataTable
                    title="Các loại M.2"
                    rows={m2Rows}
                    headers={["Loại M.2", "Giao tiếp", "Tốc độ", "Ghi chú"]}
                    accent="emerald"
                />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <RuleCard
                    label="Ổ SATA cần 2 dây"
                    value="SATA data → mainboard; SATA power → PSU. Thiếu một trong hai ổ có thể không hoạt động."
                    color="orange"
                />
                <RuleCard
                    label="M.2 2280"
                    value="22 = rộng 22 mm, 80 = dài 80 mm. Đây là kích thước SSD M.2 phổ biến nhất."
                    color="emerald"
                />
            </div>
        </section>
    );
}

function AudioFanRgbGuide() {
    const audioRows = [
        ["Line-out", "Loa/tai nghe"],
        ["Mic-in", "Micro"],
        ["Line-in", "Thiết bị âm thanh đầu vào"],
        ["Rear/Sub/Center", "Dàn âm thanh nhiều kênh 5.1/7.1"],
    ];
    const fanRows = [
        ["CPU_FAN", "Quạt tản nhiệt CPU"],
        ["CPU_OPT", "Quạt phụ cho tản CPU hoặc radiator"],
        ["SYS_FAN / CHA_FAN", "Quạt case"],
        ["AIO_PUMP / PUMP", "Bơm tản nhiệt nước AIO/custom loop"],
    ];
    const rgbRows = [
        ["RGB 12V", "12V", "4-pin", "Một màu cho cả dải LED"],
        ["ARGB 5V", "5V", "3-pin", "Điều khiển từng LED, hiệu ứng đẹp hơn"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="purple"
                title="Audio, Fan Header, Front Panel và RGB/ARGB"
                icon={<Puzzle />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="Jack audio thường gặp"
                    rows={audioRows}
                    headers={["Cổng", "Thường dùng cho"]}
                    accent="purple"
                />
                <DataTable
                    title="Fan header"
                    rows={fanRows}
                    headers={["Header", "Dùng cho"]}
                    accent="emerald"
                />
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <h3 className="text-white font-bold mb-4 px-2">
                    RGB / ARGB Header
                </h3>
                <table className="w-full min-w-[720px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Loại</th>
                            <th className="p-4">Điện áp</th>
                            <th className="p-4">Chân</th>
                            <th className="p-4">Đặc điểm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rgbRows.map(([type, volt, pin, note]) => (
                            <tr
                                key={type}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-pink-300 font-extrabold">
                                    {type}
                                </td>
                                <td className="p-4 text-slate-300">{volt}</td>
                                <td className="p-4 text-slate-300">{pin}</td>
                                <td className="p-4 text-slate-300">{note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                ARGB 5V 3-pin KHÔNG được cắm vào RGB 12V 4-pin. Cắm sai có thể
                làm hỏng LED.
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        usb: {
            icon: <Usb />,
            title: "USB speed",
            detail: "Không chỉ đếm số cổng USB; phải xem USB 2.0, 3.2 Gen 1, Gen 2, Gen 2x2, USB-C.",
            impact: "SSD ngoài nhanh cần USB 10Gbps/20Gbps; chuột/phím chỉ cần USB 2.0 cũng đủ.",
        },
        sata: {
            icon: <Database />,
            title: "Số cổng SATA",
            detail: "SATA dùng cho HDD, SSD SATA 2.5 inch và ổ đĩa quang.",
            impact: "2 cổng cho máy cơ bản; 4 cổng đủ đa số; 6–8 cổng hợp máy nhiều ổ, NAS cá nhân, workstation.",
        },
        m2: {
            icon: <HardDrive />,
            title: "Số khe M.2",
            detail: "PC hiện đại nên ưu tiên ít nhất 1–2 khe M.2 NVMe.",
            impact: "Gaming phổ thông nên có 2 khe M.2; làm video/project nhiều nên kiểm tra 2–3 khe hoặc hơn.",
        },
        audio: {
            icon: <Volume2 />,
            title: "Audio codec",
            detail: "Chip xử lý âm thanh onboard, ví dụ Realtek ALC897, ALC1200, ALC1220, ALC4080.",
            impact: "Phổ thông đủ nghe nhạc/game/voice chat; thu âm/làm nhạc nên dùng audio interface rời.",
        },
        headers: {
            icon: <Puzzle />,
            title: "Internal headers",
            detail: "Case có USB-C trước thì mainboard cần internal USB-C header tương ứng.",
            impact: "Nếu case có cổng nhưng main không có header, cổng đó sẽ không dùng được nếu không có adapter/card phù hợp.",
        },
        fans: {
            icon: <Fan />,
            title: "Fan/Pump headers",
            detail: "Quạt CPU vào CPU_FAN, quạt case vào SYS_FAN/CHA_FAN, bơm AIO vào AIO_PUMP/PUMP.",
            impact: "Không cắm CPU_FAN có thể khiến mainboard báo lỗi và không cho boot.",
        },
    };
    const [active, setActive] = useState("m2");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
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

function RealExamples() {
    const examples = [
        {
            icon: <Sparkles />,
            title: "ASUS PRIME B650M-A WIFI II",
            subtitle: "AMD B650 mATX, Wi-Fi, nhiều cổng",
            color: "cyan",
            points: [
                "2 khe M.2",
                "4 cổng SATA 6Gb/s",
                "USB 3.2 Gen 2/Gen 1/USB 2.0 rear I/O",
                "Internal header hỗ trợ USB Type-C phía trước",
                "Wi-Fi 6, LAN 2.5GbE, 3 jack audio, BIOS FlashBack",
            ],
            lesson: "Một main mATX cân bằng: đủ M.2, SATA, USB và Wi-Fi cho Ryzen 5/7.",
        },
        {
            icon: <Cpu />,
            title: "MSI B760M GAMING PLUS WIFI",
            subtitle: "Intel B760 mATX, DDR5",
            color: "blue",
            points: [
                "2 khe M.2",
                "4 cổng SATA 6Gb/s",
                "Realtek ALC897 7.1-channel",
                "M2_1 từ CPU PCIe 4.0 x4",
                "M2_2 từ chipset, có thể chia sẻ SATA khi dùng M.2 SATA",
            ],
            lesson: "Khi dùng nhiều SSD, hãy đọc manual vì M.2 có thể ảnh hưởng SATA.",
        },
        {
            icon: <HardDrive />,
            title: "GIGABYTE B650M DS3H",
            subtitle: "AM5, DDR5, lưu trữ và quạt đủ dùng",
            color: "emerald",
            points: [
                "2 khe M.2 PCIe 4.0 x4",
                "Tản nhiệt M.2",
                "4 fan headers PWM/DC",
                "LAN 2.5GbE",
                "Hợp Ryzen 5 7500F/7600",
            ],
            lesson: "Main AM5 tiết kiệm vẫn có đủ M.2, fan headers và LAN 2.5GbE cho PC gaming phổ thông.",
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

function InstallLab() {
    const scenarios = {
        usbc: {
            icon: <Usb />,
            title: "Case có USB-C trước",
            answer: "Mainboard cần internal USB-C header tương ứng. Nếu không có, cổng USB-C trước case sẽ không dùng được trừ khi có adapter/card phù hợp.",
            color: "cyan",
        },
        sata: {
            icon: <HardDrive />,
            title: "SSD SATA không hiện",
            answer: "Kiểm tra đủ hai dây: SATA data vào mainboard và SATA power từ PSU. Thiếu một trong hai, ổ không hoạt động đúng.",
            color: "orange",
        },
        m2: {
            icon: <BookOpen />,
            title: "Gắn SSD M.2",
            answer: "Kiểm tra main hỗ trợ M.2 SATA hay M.2 NVMe PCIe, kích thước 2280, PCIe Gen và có chia sẻ lane/SATA không.",
            color: "emerald",
        },
        audio: {
            icon: <Headphones />,
            title: "Jack trước case không có tiếng",
            answer: "Kiểm tra dây HD_AUDIO đã cắm vào JAUD1/AAFP chưa, sau đó kiểm tra driver và chọn đúng output trong hệ điều hành.",
            color: "purple",
        },
        argb: {
            icon: <Sparkles />,
            title: "Cắm quạt RGB/ARGB",
            answer: "ARGB 5V 3-pin khác RGB 12V 4-pin. Không cắm lẫn vì có thể hỏng LED, hub hoặc quạt.",
            color: "red",
        },
        fan: {
            icon: <Fan />,
            title: "Main báo CPU fan error",
            answer: "Cắm quạt tản CPU vào CPU_FAN. Quạt case cắm SYS_FAN/CHA_FAN, bơm AIO cắm AIO_PUMP/PUMP nếu có.",
            color: "blue",
        },
    };
    const [active, setActive] = useState("usbc");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: cắm dây onboard đúng chỗ"
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
            wrong: "SSD M.2 nào cũng giống nhau",
            right: "M.2 chỉ là dạng khe/kích thước. Giao tiếp có thể là M.2 SATA hoặc M.2 NVMe PCIe, tốc độ và tương thích khác nhau.",
        },
        {
            wrong: "Case có USB-C trước thì chắc chắn dùng được",
            right: "Mainboard phải có internal USB-C header tương ứng. Nếu không, cổng USB-C trước case sẽ không hoạt động.",
        },
        {
            wrong: "ARGB 5V cắm vào RGB 12V cũng được",
            right: "ARGB 5V 3-pin và RGB 12V 4-pin khác điện áp/chân. Cắm sai có thể làm hỏng LED.",
        },
        {
            wrong: "Ổ SATA chỉ cần cáp data",
            right: "Ổ SATA cần cả SATA data vào mainboard và SATA power từ PSU.",
        },
        {
            wrong: "Jack tai nghe trước case tự hoạt động",
            right: "Cần cắm dây HD_AUDIO vào front audio header như JAUD1/AAFP trên mainboard.",
        },
    ];
    const tips = [
        "Khi mua mainboard, kiểm tra số khe M.2 trước SATA vì SSD NVMe thường là ổ chính tốt hơn.",
        "Đọc manual để biết M.2 có làm tắt cổng SATA nào không.",
        "Case hiện đại có USB-C trước thì nên chọn main có internal USB-C header.",
        "Quạt tản CPU → CPU_FAN; quạt case → SYS_FAN/CHA_FAN; bơm AIO → AIO_PUMP/PUMP.",
        "Audio onboard đủ cho phổ thông; thu âm/làm nhạc/podcast nên cân nhắc audio interface rời.",
        "Không ép cắm dây nếu đầu cắm không đúng chiều hoặc không khớp chân.",
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
                        <span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-cyan-300 border border-slate-800 shadow-inner space-y-2">
                            <p>Rear I/O = cổng phía sau case</p>
                            <p>Internal Header = chân cắm dây bên trong case</p>
                            <br />
                            <p className="text-slate-500"># Storage</p>
                            <p className="text-slate-300">
                                SATA = data vào main + power từ PSU
                            </p>
                            <p className="text-slate-300">
                                M.2 NVMe = gắn trực tiếp, đi qua PCIe lanes
                            </p>
                            <br />
                            <p className="text-slate-500"># Dễ cắm sai</p>
                            <p className="text-slate-300">
                                Front USB-C header • HD_AUDIO • CPU_FAN • Front
                                Panel • RGB/ARGB
                            </p>
                            <br />
                            <p className="text-red-300">
                                ARGB 5V 3-pin ≠ RGB 12V 4-pin.
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
            "Cổng SATA trên mainboard thường dùng để kết nối thiết bị nào?",
        options: ["RAM", "CPU", "HDD/SSD SATA", "Quạt CPU"],
        correct: 2,
        explanation: "SATA dùng cho HDD, SSD SATA 2.5 inch và ổ đĩa quang.",
    },
    {
        question:
            "Khe M.2 phổ biến nhất hiện nay thường dùng cho thiết bị nào?",
        options: ["SSD NVMe", "Loa ngoài", "Chuột USB", "Nút nguồn case"],
        correct: 0,
        explanation:
            "M.2 hiện nay thường dùng cho SSD NVMe tốc độ cao, ngoài ra có thể dùng cho một số module khác.",
    },
    {
        question: "USB-C có chắc chắn là tốc độ cao nhất không?",
        options: [
            "Có, USB-C luôn nhanh nhất",
            "Không, USB-C chỉ là dạng đầu cắm; tốc độ phụ thuộc chuẩn USB đi kèm",
            "Có, nếu cắm vào mainboard mới",
            "Có, nếu dây màu đen",
        ],
        correct: 1,
        explanation:
            "USB-C là hình dạng đầu cắm, còn tốc độ phụ thuộc chuẩn USB như 5Gbps, 10Gbps, 20Gbps.",
    },
    {
        question: "Ổ SSD SATA cần những dây nào?",
        options: [
            "Chỉ cần cáp SATA data",
            "Chỉ cần cáp SATA power",
            "Cần cáp SATA data và SATA power",
            "Không cần dây nào",
        ],
        correct: 2,
        explanation:
            "Ổ SATA cần cáp SATA data nối mainboard và SATA power từ PSU.",
    },
    {
        question: "ARGB 5V khác RGB 12V ở điểm nào?",
        options: [
            "ARGB 5V thường là 3-pin, RGB 12V thường là 4-pin",
            "Cắm lẫn được thoải mái",
            "RGB 12V luôn đẹp hơn",
            "ARGB chỉ dùng cho CPU",
        ],
        correct: 0,
        explanation:
            "ARGB 5V thường là 3-pin, RGB 12V thường là 4-pin. Không cắm lẫn vì có thể hỏng LED.",
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
    }
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
                Bạn đã hiểu các cổng kết nối onboard. Tiếp theo là Form Factor:
                ATX, Micro-ATX, Mini-ITX — kích thước mainboard quyết định main
                có vừa case không, có bao nhiêu khe mở rộng, cổng kết nối và khả
                năng nâng cấp về sau.
            </p>
            <Link
                to="/phan-6-7"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Bài tiếp theo: 6.7 — Form Factor: ATX, Micro-ATX, Mini-ITX{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function DataTable({ title, rows, headers, accent }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 overflow-x-auto">
            <h3 className="text-white font-bold mb-4 px-2">{title}</h3>
            <table className="w-full min-w-[560px] text-sm">
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
function SectionTitle({ number, title, icon, color = "cyan" }) {
    const colorMap = {
        cyan: "bg-cyan-500/20 text-cyan-300",
        blue: "bg-blue-500/20 text-blue-300",
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
function InfoPanel({ icon, title, points, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-3xl p-6`}>
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center mb-4`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <h3 className="text-white font-bold text-lg mb-4">{title}</h3>
            <div className="space-y-2">
                {points.map((p) => (
                    <Bullet key={p} text={p} />
                ))}
            </div>
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
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.cyan;
}
function softBorder(color) {
    const map = {
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.cyan;
}
function textColor(color) {
    const map = {
        cyan: "text-cyan-300",
        blue: "text-blue-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-cyan-300";
}
