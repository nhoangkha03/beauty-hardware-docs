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
    Gamepad2,
    Gauge,
    HardDrive,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    Network,
    PackageCheck,
    Puzzle,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    Usb,
    Volume2,
    Wifi,
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
                            <MemoryStick
                                className="text-emerald-400"
                                size={24}
                            />
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
                    <div className="text-sm font-semibold text-emerald-300 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                        Bài 6.5
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <DeskHighwayAnalogy />
                <DataFlowSimulator />
                <RamSlotGuide />
                <PcieSlotGuide />
                <SpecsExplorer />
                <CompatibilityExplorer />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-emerald-300">
                        <BookOpen size={16} /> Phần 6: Mainboard — RAM & PCIe
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Khe RAM DIMM
                        <span className="block text-emerald-400">
                            và khe mở rộng PCIe
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        CPU cần RAM để làm việc và cần PCIe để kết nối GPU, SSD
                        NVMe, card Wi-Fi, sound card, capture card hoặc card
                        mạng. Cắm đúng khe giúp máy chạy đúng hiệu năng.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<MemoryStick size={16} />}
                            text="DIMM Slots"
                        />
                        <Tag icon={<Layers3 size={16} />} text="Dual Channel" />
                        <Tag icon={<Gamepad2 size={16} />} text="PCIe x16" />
                        <Tag icon={<Wifi size={16} />} text="PCIe x1/x4" />
                        <Tag icon={<Zap size={16} />} text="PCIe Gen 3/4/5" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<MemoryStick />}
                            label="DIMM"
                            desc="RAM desktop"
                            color="emerald"
                            highlight
                        />
                        <HeroTile
                            icon={<Gamepad2 />}
                            label="PCIe x16"
                            desc="GPU rời"
                            color="blue"
                        />
                        <HeroTile
                            icon={<HardDrive />}
                            label="PCIe x4"
                            desc="SSD/capture/network"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Wifi />}
                            label="PCIe x1"
                            desc="Wi-Fi/sound card"
                            color="cyan"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">
                            // Cắm đúng để đạt hiệu năng
                        </p>
                        <p>RAM: A2 + B2 thường tối ưu</p>
                        <p className="text-emerald-300">
                            GPU: PCIe x16 chính gần CPU nhất
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu DIMM Slot là khe cắm RAM desktop và phân biệt DIMM, SO-DIMM, RAM hàn chết.",
        "Biết số khe RAM 2/4/8 ảnh hưởng đến khả năng nâng cấp và dung lượng tối đa.",
        "Hiểu dual channel và vì sao 2x8GB thường tốt hơn 1x16GB trong nhiều tình huống.",
        "Phân biệt PCIe x16, x8, x4, x1; kích thước vật lý và số lane điện thực tế.",
        "Biết cắm RAM/GPU đúng khe, đọc manual về lane chia sẻ và tránh lỗi DDR4/DDR5 không tương thích.",
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
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-300 flex items-center justify-center font-bold mb-4">
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
            icon: <MemoryStick />,
            title: "DIMM Slot",
            color: "emerald",
            simple: "Khe cắm RAM desktop trên mainboard.",
            details: [
                "Gắn thanh RAM máy bàn",
                "Có thể có 2, 4 hoặc 8 khe",
                "Cần đúng DDR4 hoặc DDR5",
                "Cắm đúng khe để chạy dual channel",
            ],
        },
        {
            icon: <Gamepad2 />,
            title: "PCIe",
            color: "blue",
            simple: "Chuẩn kết nối tốc độ cao cho thiết bị mở rộng.",
            details: [
                "GPU rời",
                "Card Wi-Fi",
                "Sound card",
                "Capture card",
                "Card mạng 10GbE hoặc SSD adapter",
            ],
        },
        {
            icon: <Workflow />,
            title: "Lane PCIe",
            color: "purple",
            simple: "Làn đường dữ liệu giữa thiết bị và CPU/chipset.",
            details: [
                "x1 = 1 lane",
                "x4 = 4 lane",
                "x8 = 8 lane",
                "x16 = 16 lane",
                "Khe dài chưa chắc chạy đủ x16",
            ],
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: DIMM Slots và PCIe là gì?"
                icon={<Brain />}
            />
            <div className="grid lg:grid-cols-3 gap-4">
                {cards.map((c) => (
                    <div
                        key={c.title}
                        className={`${softBorder(c.color)} border rounded-3xl p-6`}
                    >
                        <div
                            className={`w-14 h-14 rounded-2xl ${badgeColor(c.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(c.icon, { size: 28 })}
                        </div>
                        <h3 className="text-2xl font-black text-white mb-3">
                            {c.title}
                        </h3>
                        <p
                            className={`${textColor(c.color)} text-sm font-semibold leading-relaxed mb-4`}
                        >
                            {c.simple}
                        </p>
                        <div className="space-y-2">
                            {c.details.map((d) => (
                                <Bullet key={d} text={d} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-cyan-300">Ghi nhớ:</strong> RAM là “mặt
                bàn làm việc” của CPU; PCIe là “đường cao tốc” cho GPU và thiết
                bị mở rộng.
            </div>
        </section>
    );
}

function DeskHighwayAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: mặt bàn và đường cao tốc"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-4 gap-4">
                <AnalogyCard
                    icon={<MemoryStick />}
                    title="RAM = mặt bàn"
                    desc="Mặt bàn càng rộng, bạn càng để được nhiều tài liệu đang làm."
                    color="emerald"
                />
                <AnalogyCard
                    icon={<Layers3 />}
                    title="Dual Channel = hai làn song song"
                    desc="Hai thanh RAM đúng khe giúp tăng băng thông giữa CPU và RAM."
                    color="cyan"
                />
                <AnalogyCard
                    icon={<Gamepad2 />}
                    title="PCIe x16 = cao tốc lớn"
                    desc="GPU cần nhiều dữ liệu nên thường dùng khe PCIe x16 chính."
                    color="blue"
                />
                <AnalogyCard
                    icon={<Wifi />}
                    title="PCIe x1 = đường nhỏ"
                    desc="Card Wi-Fi, sound card dùng ít dữ liệu hơn nên x1 thường đủ."
                    color="orange"
                />
            </div>
        </section>
    );
}

function DataFlowSimulator() {
    const flows = {
        game: {
            title: "Chơi game",
            color: "blue",
            steps: [
                {
                    icon: <HardDrive />,
                    title: "SSD chứa game",
                    desc: "Dữ liệu game nằm trên SSD hoặc HDD.",
                },
                {
                    icon: <MemoryStick />,
                    title: "Game được nạp vào RAM",
                    desc: "RAM giữ dữ liệu đang dùng để CPU truy cập nhanh.",
                },
                {
                    icon: <Cpu />,
                    title: "CPU xử lý logic game",
                    desc: "Nhân vật, vật lý, input, AI và lệnh điều khiển được CPU xử lý.",
                },
                {
                    icon: <Gamepad2 />,
                    title: "GPU nhận dữ liệu qua PCIe x16",
                    desc: "GPU rời cắm vào khe PCIe x16 chính để nhận dữ liệu tốc độ cao.",
                },
                {
                    icon: <Monitor />,
                    title: "GPU dựng hình",
                    desc: "GPU xuất hình ảnh ra màn hình.",
                },
            ],
        },
        stream: {
            title: "Livestream bằng capture card",
            color: "purple",
            steps: [
                {
                    icon: <Gamepad2 />,
                    title: "Console/camera gửi hình",
                    desc: "Nguồn video đi vào capture card.",
                },
                {
                    icon: <Puzzle />,
                    title: "Capture card cắm PCIe",
                    desc: "Capture card truyền dữ liệu video qua PCIe.",
                },
                {
                    icon: <Cpu />,
                    title: "CPU/GPU xử lý mã hóa",
                    desc: "OBS hoặc phần mềm stream xử lý video và audio.",
                },
                {
                    icon: <Network />,
                    title: "Mạng truyền livestream",
                    desc: "Video được gửi lên nền tảng livestream qua LAN/Wi-Fi.",
                },
            ],
        },
        ram: {
            title: "Dual Channel RAM",
            color: "emerald",
            steps: [
                {
                    icon: <MemoryStick />,
                    title: "Gắn 2 thanh RAM",
                    desc: "Hai thanh cùng kit, cùng dung lượng/tốc độ thường dễ ổn định hơn.",
                },
                {
                    icon: <Layers3 />,
                    title: "Cắm đúng A2 + B2",
                    desc: "Trên mainboard 4 khe, A2+B2 thường là vị trí khuyến nghị cho 2 thanh.",
                },
                {
                    icon: <Workflow />,
                    title: "CPU truy cập hai kênh",
                    desc: "Băng thông giữa CPU và RAM được tăng so với single channel.",
                },
                {
                    icon: <Gauge />,
                    title: "Một số tác vụ nhanh hơn",
                    desc: "Game, iGPU, nén/giải nén, render nhẹ hoặc đa nhiệm có thể hưởng lợi.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("game");
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
                title="RAM và PCIe phối hợp như thế nào?"
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

function RamSlotGuide() {
    const rows = [
        [
            "DIMM",
            "PC desktop",
            "Dài, kích thước lớn, dễ nâng cấp",
            "Máy bàn, gaming PC, workstation",
        ],
        ["SO-DIMM", "Laptop, mini PC", "Ngắn hơn DIMM", "Laptop, mini PC, NUC"],
        [
            "RAM hàn chết",
            "Laptop mỏng nhẹ, MacBook, một số mini PC",
            "Không tháo nâng cấp được",
            "Máy siêu mỏng, tối ưu kích thước",
        ],
    ];
    const slots = [
        [
            "2 khe RAM",
            "Mini-ITX, mainboard giá rẻ",
            "Đơn giản, đủ cho nhiều người",
            "Ít khả năng nâng cấp",
        ],
        [
            "4 khe RAM",
            "mATX, ATX phổ biến",
            "Dễ nâng cấp, linh hoạt hơn",
            "Cần cắm đúng khe để tối ưu",
        ],
        [
            "8 khe RAM trở lên",
            "Workstation, server",
            "Dung lượng RAM rất lớn",
            "Đắt, không phổ biến với PC thường",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="emerald"
                title="Các loại khe RAM và số khe RAM"
                icon={<MemoryStick />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="Loại khe RAM"
                    rows={rows}
                    headers={["Loại", "Dùng ở đâu?", "Đặc điểm", "Phù hợp"]}
                    accent="emerald"
                />
                <DataTable
                    title="Số khe RAM"
                    rows={slots}
                    headers={[
                        "Số khe",
                        "Thường gặp trên",
                        "Ưu điểm",
                        "Nhược điểm",
                    ]}
                    accent="cyan"
                />
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300 overflow-x-auto">
                CPU | A1 | A2 | B1 | B2
                <br />
                <span className="text-emerald-300">
                    2 thanh RAM thường cắm: A2 + B2
                </span>
                <br />
                Luôn kiểm tra manual vì từng mainboard có thể khác.
            </div>
        </section>
    );
}

function PcieSlotGuide() {
    const rows = [
        [
            "PCIe x16",
            "Dài nhất",
            "Card đồ họa rời / GPU",
            "Khe quan trọng nhất cho gaming PC",
        ],
        [
            "PCIe x8",
            "Gần bằng x16 hoặc chạy điện x8",
            "Một số card chuyên dụng",
            "Hay gặp trên workstation/server",
        ],
        [
            "PCIe x4",
            "Ngắn hơn x16",
            "Card mạng, card SSD, capture card",
            "Tùy mainboard",
        ],
        [
            "PCIe x1",
            "Ngắn nhất",
            "Card Wi-Fi, sound card, USB expansion",
            "Thiết bị băng thông thấp",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="blue"
                title="Các loại khe PCIe"
                icon={<Gamepad2 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[860px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Khe PCIe</th>
                            <th className="p-4">Kích thước vật lý</th>
                            <th className="p-4">Thường dùng cho</th>
                            <th className="p-4">Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([slot, size, use, note]) => (
                            <tr
                                key={slot}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-blue-300 font-extrabold">
                                    {slot}
                                </td>
                                <td className="p-4 text-slate-300">{size}</td>
                                <td className="p-4 text-slate-300">{use}</td>
                                <td className="p-4 text-slate-300">{note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <RuleCard
                    label="Kích thước vật lý"
                    value="Khe dài hay ngắn trên mainboard: x16, x8, x4, x1."
                    color="blue"
                />
                <RuleCard
                    label="Số lane điện thực tế"
                    value="Khe nhìn dài x16 vẫn có thể chỉ chạy điện x4 hoặc x8 tùy mainboard."
                    color="orange"
                />
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        ddr: {
            icon: <MemoryStick />,
            title: "DDR4 hay DDR5",
            detail: "Mainboard DDR4 chỉ cắm DDR4; mainboard DDR5 chỉ cắm DDR5.",
            impact: "Cùng là B760 nhưng có bản DDR4 và DDR5. Phải đọc đúng tên sản phẩm.",
        },
        dual: {
            icon: <Layers3 />,
            title: "Dual Channel",
            detail: "Chế độ RAM hai kênh giúp tăng băng thông giữa CPU và RAM.",
            impact: "2x8GB thường tối ưu hơn 1x16GB trong nhiều game/tác vụ, đặc biệt với iGPU.",
        },
        capacity: {
            icon: <Database />,
            title: "Dung lượng RAM tối đa",
            detail: "Mainboard sẽ ghi hỗ trợ tối đa 64GB, 128GB, 192GB hoặc 256GB tùy nền tảng.",
            impact: "32GB là mức cân bằng tốt cho gaming, học lập trình, đa nhiệm; 64GB+ cho máy ảo/video/workload nặng.",
        },
        speed: {
            icon: <Gauge />,
            title: "Tốc độ RAM",
            detail: "Ví dụ DDR4-3200, DDR5-5600, DDR5-6000, DDR5-7200 OC.",
            impact: "OC cần bật XMP/EXPO và còn phụ thuộc CPU, mainboard, RAM, BIOS.",
        },
        lanes: {
            icon: <Workflow />,
            title: "PCIe x1/x4/x8/x16",
            detail: "Số lane càng nhiều thì băng thông tối đa càng cao.",
            impact: "GPU rời thường dùng x16; card Wi-Fi/sound card thường chỉ cần x1; capture/card mạng có thể cần x4.",
        },
        gen: {
            icon: <Zap />,
            title: "PCIe Gen 3/4/5",
            detail: "PCIe 3.0, 4.0, 5.0 khác nhau về băng thông mỗi lane.",
            impact: "PCIe 4.0 vẫn rất đủ cho đa số GPU/SSD hiện nay; PCIe 5.0 hữu ích hơn cho SSD rất nhanh và nền tảng lâu dài.",
        },
    };
    const [active, setActive] = useState("dual");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
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

function CompatibilityExplorer() {
    const cases = {
        ramkit: {
            icon: <MemoryStick />,
            title: "Kit RAM 2 thanh",
            color: "emerald",
            need: "Ưu tiên mua kit 2x8GB hoặc 2x16GB giống nhau.",
            note: "Trộn 8GB 2666 với 16GB 3200 vẫn có thể chạy nhưng dễ giảm tốc hoặc lỗi tương thích.",
        },
        ddrmix: {
            icon: <XCircle />,
            title: "DDR4 vs DDR5",
            color: "red",
            need: "Không cắm lẫn được.",
            note: "Main DDR4 không nhận RAM DDR5, main DDR5 không nhận RAM DDR4, kể cả cùng socket CPU.",
        },
        gpu: {
            icon: <Gamepad2 />,
            title: "GPU rời",
            color: "blue",
            need: "Cắm vào khe PCIe x16 chính gần CPU nhất.",
            note: "Khe phụ nhìn dài có thể chỉ chạy x4, không tối ưu cho GPU.",
        },
        pcieback: {
            icon: <Workflow />,
            title: "PCIe tương thích ngược",
            color: "purple",
            need: "GPU PCIe 4.0 cắm vào PCIe 3.0 vẫn chạy.",
            note: "Thiết bị sẽ chạy theo chuẩn thấp hơn của khe hoặc card.",
        },
        lanes: {
            icon: <BookOpen />,
            title: "Lane chia sẻ",
            color: "orange",
            need: "Đọc manual khi dùng nhiều M.2/PCIe/SATA.",
            note: "Gắn M.2 thứ hai có thể làm tắt SATA hoặc giảm lane PCIe phụ.",
        },
    };
    const [active, setActive] = useState("gpu");
    const item = cases[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="purple"
                title="Tương thích và giới hạn thường gặp"
                icon={<ShieldCheck />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-5 gap-3 mb-6">
                    {Object.entries(cases).map(([key, c]) => (
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
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <InfoCard
                            label="Cần nhớ"
                            value={item.need}
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

function RealExamples() {
    const examples = [
        {
            icon: <MemoryStick />,
            title: "Kingston Fury Beast 16GB DDR4 3200MHz",
            subtitle: "RAM desktop DDR4 phổ thông",
            color: "emerald",
            points: [
                "Phù hợp mainboard DDR4",
                "Hợp văn phòng, học tập, gaming phổ thông",
                "Có thể dùng 1x16GB hoặc tốt hơn là kit 2 thanh",
                "DDR4-3200 phổ biến ở nền tảng AM4, H610/B760 DDR4",
                "Không dùng được trên main DDR5",
            ],
            lesson: "RAM DDR4 vẫn hợp build tiết kiệm, nhưng phải đúng main DDR4.",
        },
        {
            icon: <Sparkles />,
            title: "Corsair Vengeance DDR5 32GB 6000MHz",
            subtitle: "RAM DDR5 cho nền tảng mới",
            color: "blue",
            points: [
                "Hợp AM5 hoặc Intel DDR5",
                "32GB là mức đẹp cho gaming/đa nhiệm",
                "DDR5-6000 thường được nhắc nhiều với build AM5",
                "Cần bật XMP/EXPO để đạt profile cao",
                "Giá DDR5 dao động theo thị trường",
            ],
            lesson: "Build mới dùng lâu dài nên cân nhắc 2x16GB DDR5 nếu ngân sách cho phép.",
        },
        {
            icon: <Gamepad2 />,
            title: "ASUS Dual GeForce RTX 4060 8GB",
            subtitle: "GPU rời dùng khe PCIe x16",
            color: "purple",
            points: [
                "Cắm vào khe PCIe x16 chính",
                "Bắt vít vào case",
                "Cắm dây nguồn PCIe nếu card yêu cầu",
                "Cài driver NVIDIA",
                "Hợp eSports/AAA 1080p, render/AI nhẹ",
            ],
            lesson: "GPU nên cắm vào khe PCIe x16 gần CPU nhất, không cắm vào khe phụ nếu không cần.",
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

function InstallLab() {
    const scenarios = {
        dual: {
            icon: <MemoryStick />,
            title: "2 thanh RAM trên main 4 khe",
            answer: "Thường cắm A2 + B2 để chạy dual channel, nhưng hãy xem manual. Đừng cắm liền A1 + A2 theo cảm tính.",
            color: "emerald",
        },
        ddr5: {
            icon: <XCircle />,
            title: "Mua DDR5 cho main DDR4",
            answer: "Không cắm được. DDR4 và DDR5 khác khe vật lý, không giải quyết bằng cập nhật BIOS.",
            color: "red",
        },
        gpu: {
            icon: <Gamepad2 />,
            title: "Lắp GPU rời",
            answer: "Cắm vào khe PCIe x16 chính gần CPU nhất, ấn thẳng đến khi chốt khóa lại, bắt vít vào case và cắm nguồn nếu cần.",
            color: "blue",
        },
        pciex1: {
            icon: <Wifi />,
            title: "Card Wi-Fi / sound card",
            answer: "Thường chỉ cần PCIe x1. Không cần dùng khe x16 chính nếu không phải GPU hay card băng thông lớn.",
            color: "cyan",
        },
        m2share: {
            icon: <BookOpen />,
            title: "Gắn nhiều SSD M.2",
            answer: "Đọc manual để biết khe M.2 nào chia lane với SATA/PCIe. Đây không phải lỗi, mà là giới hạn lane trên mainboard.",
            color: "orange",
        },
    };
    const [active, setActive] = useState("dual");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: lắp RAM và PCIe đúng cách"
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
            wrong: "Cắm 2 thanh RAM liền nhau A1 + A2",
            right: "Với mainboard 4 khe, thường nên cắm A2 + B2 để chạy dual channel. Luôn kiểm tra manual.",
        },
        {
            wrong: "Mua RAM DDR5 cho main DDR4",
            right: "DDR4 và DDR5 khác khe vật lý, không cắm lẫn được. Cùng B760 vẫn có bản DDR4 và DDR5 riêng.",
        },
        {
            wrong: "Khe PCIe dài là chắc chắn chạy x16",
            right: "Khe có thể dài x16 nhưng lane điện thực tế chỉ x4 hoặc x8, nhất là khe phụ.",
        },
        {
            wrong: "Cắm GPU vào khe PCIe phụ",
            right: "GPU nên cắm vào khe PCIe x16 chính, thường là khe dài gần CPU nhất.",
        },
        {
            wrong: "Không mở khóa chốt khe RAM hoặc PCIe",
            right: "Khe RAM và PCIe x16 thường có chốt khóa. Mở chốt, canh đúng chiều, ấn đều và không bẻ nghiêng linh kiện.",
        },
    ];
    const tips = [
        "Ưu tiên mua kit RAM 2 thanh giống nhau: 2x8GB hoặc 2x16GB.",
        "PC gaming mới: 32GB RAM là mức rất đẹp cho gaming, học lập trình và đa nhiệm.",
        "GPU luôn ưu tiên khe PCIe x16 gần CPU nhất.",
        "Đọc manual để biết RAM nên cắm khe nào và M.2/PCIe/SATA có chia lane không.",
        "Đừng chỉ nhìn PCIe 5.0; PCIe 4.0 vẫn rất đủ cho đa số GPU/SSD phổ thông.",
        "Không ép RAM/GPU nếu thấy sai chiều hoặc chốt chưa mở.",
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
                        <span className="bg-emerald-500/20 text-emerald-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-emerald-300 border border-slate-800 shadow-inner space-y-2">
                            <p>DIMM Slot = khe cắm RAM desktop</p>
                            <p>PCIe = đường cao tốc cho GPU và card mở rộng</p>
                            <br />
                            <p className="text-slate-500"># RAM</p>
                            <p className="text-slate-300">
                                DDR4 ≠ DDR5 • 2 thanh thường A2+B2 • Dual
                                Channel tốt hơn Single Channel
                            </p>
                            <br />
                            <p className="text-slate-500"># PCIe</p>
                            <p className="text-slate-300">
                                x16 cho GPU • x4 cho card mạng/capture/SSD
                                adapter • x1 cho Wi-Fi/sound
                            </p>
                            <p className="text-slate-300">
                                Khe dài ≠ luôn chạy đủ x16
                            </p>
                            <br />
                            <p className="text-red-300">
                                Manual là nguồn đáng tin nhất khi cắm RAM, GPU,
                                M.2 và PCIe.
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
        question: "DIMM Slot trên mainboard dùng để làm gì?",
        options: [
            "Cắm CPU",
            "Cắm RAM desktop",
            "Cắm dây nguồn PSU",
            "Cắm màn hình HDMI",
        ],
        correct: 1,
        explanation: "DIMM Slot là khe cắm RAM desktop trên mainboard.",
    },
    {
        question: "Khe PCIe x16 thường dùng để cắm linh kiện nào?",
        options: ["GPU rời", "RAM", "CPU", "Pin CMOS"],
        correct: 0,
        explanation:
            "GPU rời thường được cắm vào khe PCIe x16 chính, thường là khe dài gần CPU nhất.",
    },
    {
        question:
            "Với 2 thanh RAM trên mainboard 4 khe, cách cắm thường tối ưu là gì?",
        options: ["A1 + A2", "B1 + B2", "A2 + B2", "Cắm đâu cũng như nhau"],
        correct: 2,
        explanation:
            "Trên nhiều mainboard 4 khe, A2 + B2 là vị trí khuyến nghị cho 2 thanh RAM để chạy dual channel.",
    },
    {
        question: "Mainboard DDR4 có cắm được RAM DDR5 không?",
        options: [
            "Có, nếu cùng dung lượng",
            "Có, nếu cùng hãng",
            "Không",
            "Có, nếu cập nhật BIOS",
        ],
        correct: 2,
        explanation: "DDR4 và DDR5 khác khe vật lý, không thể cắm lẫn.",
    },
    {
        question: "PCIe x1 thường phù hợp với thiết bị nào?",
        options: [
            "GPU cao cấp",
            "Card Wi-Fi hoặc sound card",
            "CPU",
            "RAM DDR5",
        ],
        correct: 1,
        explanation:
            "PCIe x1 có băng thông thấp hơn, phù hợp card Wi-Fi, sound card hoặc một số card mở rộng nhẹ.",
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
    }
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
                Bạn đã hiểu khe RAM DIMM và khe mở rộng PCIe. Tiếp theo là các
                cổng kết nối onboard: USB, SATA, M.2, Audio — những cổng giúp
                mainboard kết nối SSD, HDD, USB, âm thanh, quạt và thiết bị
                ngoại vi.
            </p>
            <Link
                to="/phan-6-6"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
            >
                Bài tiếp theo: 6.6 — Các cổng kết nối onboard: USB, SATA, M.2,
                Audio <ChevronRight size={20} />
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
function SectionTitle({ number, title, icon, color = "emerald" }) {
    const colorMap = {
        emerald: "bg-emerald-500/20 text-emerald-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
        blue: "bg-blue-500/20 text-blue-300",
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
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.emerald;
}
function softBorder(color) {
    const map = {
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.emerald;
}
function textColor(color) {
    const map = {
        emerald: "text-emerald-300",
        cyan: "text-cyan-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-emerald-300";
}
