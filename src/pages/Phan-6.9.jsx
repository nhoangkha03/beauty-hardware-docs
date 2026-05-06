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
    Network,
    PackageCheck,
    PlugZap,
    Puzzle,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    Usb,
    Wifi,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-rose-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-rose-500/10 border border-rose-400/30 flex items-center justify-center shadow-lg shadow-rose-500/10">
                            <PackageCheck className="text-rose-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 6: Mainboard — Bài tổng kết
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-rose-300 bg-rose-400/10 px-3 py-1 rounded-full border border-rose-400/20">
                        Bài 6.9
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <CarPlatformAnalogy />
                <DecisionFlowSimulator />
                <PlatformMatrix />
                <NeedMatrix />
                <BudgetGuide />
                <SpecsExplorer />
                <NamingGuide />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-rose-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-rose-300">
                        <BookOpen size={16} /> Phần 6: Mainboard — Tổng kết chọn
                        mua
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Cách chọn Mainboard
                        <span className="block text-rose-400">
                            phù hợp CPU và nhu cầu
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Mainboard không tạo FPS chính như GPU, nhưng chọn sai có
                        thể làm lệch cả bộ máy: sai socket, sai RAM, thiếu M.2,
                        không có Wi‑Fi, case không vừa hoặc VRM yếu với CPU
                        mạnh.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="Socket" />
                        <Tag icon={<Settings size={16} />} text="Chipset" />
                        <Tag
                            icon={<MemoryStick size={16} />}
                            text="DDR4 / DDR5"
                        />
                        <Tag icon={<Zap size={16} />} text="VRM" />
                        <Tag icon={<HardDrive size={16} />} text="M.2" />
                        <Tag icon={<Wifi size={16} />} text="Wi‑Fi / LAN" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Cpu />}
                            label="CPU trước"
                            desc="Biết socket"
                            color="rose"
                            highlight
                        />
                        <HeroTile
                            icon={<Settings />}
                            label="Chipset"
                            desc="Biết tính năng"
                            color="blue"
                        />
                        <HeroTile
                            icon={<MemoryStick />}
                            label="RAM"
                            desc="DDR4 hay DDR5"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<PackageCheck />}
                            label="Case"
                            desc="ATX/mATX/ITX"
                            color="orange"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Công thức tổng quát</p>
                        <p>CPU → Socket → Chipset → RAM</p>
                        <p className="text-rose-300">
                            → Form Factor → VRM/M.2/I/O → Giá
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Biết quy trình chọn mainboard theo thứ tự: CPU, socket, chipset, RAM, form factor, VRM, M.2, I/O, BIOS và giá.",
        "Phân loại mainboard theo nền tảng CPU: AMD AM4, AMD AM5, Intel LGA1700, Intel LGA1851.",
        "Chọn chipset theo nhu cầu: văn phòng, gaming phổ thông, gaming cao cấp, dựng video, Mini‑ITX, workstation, ép xung.",
        "Đọc đúng thông số quan trọng: DDR4/DDR5, số khe M.2, Wi‑Fi/Bluetooth/LAN, VRM, USB‑C front header, fan header.",
        "Tránh lỗi mua sai: chọn main trước CPU, chỉ nhìn socket, main quá rẻ cho CPU mạnh, main quá đắt nhưng không dùng hết tính năng.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="rose"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-rose-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-300 flex items-center justify-center font-bold mb-4">
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
    const questions = [
        { icon: <Cpu />, text: "CPU dùng socket gì?", color: "rose" },
        {
            icon: <Settings />,
            text: "Chipset cấp thấp, tầm trung hay cao cấp?",
            color: "blue",
        },
        { icon: <MemoryStick />, text: "RAM DDR4 hay DDR5?", color: "emerald" },
        {
            icon: <HardDrive />,
            text: "Cần bao nhiêu khe M.2?",
            color: "orange",
        },
        {
            icon: <Wifi />,
            text: "Có cần Wi‑Fi/Bluetooth sẵn không?",
            color: "cyan",
        },
        {
            icon: <Layers3 />,
            text: "Mainboard có vừa case không?",
            color: "purple",
        },
        { icon: <Zap />, text: "VRM có đủ khỏe cho CPU không?", color: "red" },
        {
            icon: <RefreshIcon />,
            text: "BIOS có hỗ trợ CPU không?",
            color: "yellow",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Khái niệm cốt lõi: Chọn mainboard là chọn nền tảng"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Mainboard</strong> là nền
                    tảng kết nối và mở rộng của toàn bộ máy tính. Nó không trực
                    tiếp xử lý lệnh như CPU hay dựng hình như GPU, nhưng quyết
                    định CPU có lắp được không, RAM nào dùng được, có bao nhiêu
                    SSD, có Wi‑Fi không, có đủ VRM cho CPU mạnh không và máy còn
                    nâng cấp được bao lâu.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {questions.map((q) => (
                        <div
                            key={q.text}
                            className={`${softBorder(q.color)} border rounded-2xl p-5`}
                        >
                            <div
                                className={`w-11 h-11 rounded-xl ${badgeColor(q.color)} flex items-center justify-center mb-3`}
                            >
                                {React.cloneElement(q.icon, { size: 22 })}
                            </div>
                            <p className="text-white font-bold text-sm leading-relaxed">
                                {q.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CarPlatformAnalogy() {
    const cards = [
        {
            icon: <Cpu />,
            title: "CPU = động cơ",
            desc: "Quyết định sức xử lý chính và socket cần dùng.",
            color: "rose",
        },
        {
            icon: <Gamepad2 />,
            title: "GPU = bộ tăng lực đồ họa",
            desc: "Quyết định FPS/render/AI nhiều hơn mainboard.",
            color: "blue",
        },
        {
            icon: <MemoryStick />,
            title: "RAM = bàn làm việc",
            desc: "DDR4 hay DDR5 phải khớp mainboard.",
            color: "emerald",
        },
        {
            icon: <Database />,
            title: "SSD = kho dữ liệu",
            desc: "M.2/SATA trên main quyết định khả năng lưu trữ.",
            color: "orange",
        },
        {
            icon: <PackageCheck />,
            title: "Mainboard = khung xe",
            desc: "Kết nối mọi thứ, cấp đường truyền, cổng và khả năng nâng cấp.",
            color: "purple",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: chọn khung xe cho cả hệ thống"
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

function DecisionFlowSimulator() {
    const steps = [
        {
            icon: <Cpu />,
            title: "Chọn CPU",
            desc: "Đây là bước đầu tiên. CPU quyết định socket và nhóm chipset có thể chọn.",
        },
        {
            icon: <Puzzle />,
            title: "Xác định socket",
            desc: "Ryzen 5 7600 là AM5; i5‑14400F là LGA1700; Ryzen 5 5600 là AM4.",
        },
        {
            icon: <Settings />,
            title: "Chọn chipset",
            desc: "Phổ thông chọn dòng B; tiết kiệm chọn dòng thấp; CPU mạnh/OC/nhiều SSD chọn dòng cao hơn.",
        },
        {
            icon: <MemoryStick />,
            title: "Chọn RAM DDR4/DDR5",
            desc: "AM5 bắt buộc DDR5; LGA1700 có bản DDR4 và DDR5 riêng; không cắm lẫn.",
        },
        {
            icon: <Layers3 />,
            title: "Chọn form factor",
            desc: "ATX dễ build/nâng cấp; mATX giá tốt/đủ dùng; Mini‑ITX nhỏ gọn nhưng khó hơn.",
        },
        {
            icon: <Zap />,
            title: "Kiểm tra VRM và heatsink",
            desc: "Core i7/Ryzen 7 trở lên nên dùng main tầm trung tốt; Core i9/Ryzen 9 cần VRM mạnh.",
        },
        {
            icon: <HardDrive />,
            title: "Kiểm tra M.2/SATA/PCIe",
            desc: "Gaming nên có 2 khe M.2; dựng video/workstation cần nhiều khe và lane hơn.",
        },
        {
            icon: <Wifi />,
            title: "Kiểm tra Wi‑Fi/LAN/USB/Audio",
            desc: "Không phải main nào cũng có Wi‑Fi/Bluetooth, USB‑C front header hoặc LAN 2.5GbE.",
        },
        {
            icon: <ShieldCheck />,
            title: "Kiểm tra BIOS hỗ trợ CPU",
            desc: "Cùng socket chưa chắc chạy ngay. CPU đời mới có thể cần update BIOS.",
        },
        {
            icon: <PackageCheck />,
            title: "So giá và chọn mẫu cụ thể",
            desc: "Mainboard nên đủ tốt, ổn định, đúng nhu cầu — không nhất thiết đắt nhất.",
        },
    ];
    const [active, setActive] = useState(0);
    const step = steps[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Quy trình chọn mainboard từng bước"
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
                    <div className="space-y-2 max-h-[610px] overflow-y-auto pr-1">
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

function PlatformMatrix() {
    const rows = [
        [
            "AMD AM4",
            "AM4",
            "DDR4",
            "A520, B450, B550, X570",
            "Build tiết kiệm, tận dụng RAM DDR4",
        ],
        [
            "AMD AM5",
            "AM5",
            "DDR5",
            "A620, B650, B650E, X670, X670E, X870",
            "Build mới, dùng lâu dài",
        ],
        [
            "Intel LGA1700",
            "LGA1700",
            "DDR4 hoặc DDR5 tùy main",
            "H610, B660, B760, Z690, Z790",
            "Intel Core gen 12/13/14",
        ],
        [
            "Intel LGA1851",
            "LGA1851",
            "DDR5",
            "B860, Z890…",
            "Nền tảng Intel mới hơn",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Chọn theo nền tảng CPU"
                icon={<Cpu />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[940px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Nền tảng</th>
                            <th className="p-4">Socket</th>
                            <th className="p-4">RAM</th>
                            <th className="p-4">Chipset phổ biến</th>
                            <th className="p-4">Phù hợp với</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([platform, socket, ram, chip, fit]) => (
                            <tr
                                key={platform}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-blue-300 font-extrabold">
                                    {platform}
                                </td>
                                <td className="p-4 text-slate-300">{socket}</td>
                                <td className="p-4 text-slate-300">{ram}</td>
                                <td className="p-4 text-slate-300">{chip}</td>
                                <td className="p-4 text-slate-300">{fit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function NeedMatrix() {
    const rows = [
        [
            "Văn phòng, học online",
            "H610, A520, A620, B550 cơ bản",
            "Tiết kiệm, không cần nhiều khe",
        ],
        ["Gaming phổ thông", "B550, B650, B760", "Cân bằng giá/tính năng"],
        [
            "Gaming cao cấp",
            "B650 tốt, X670/X870, Z790/Z890",
            "VRM tốt hơn, nhiều khe/cổng hơn",
        ],
        [
            "Đồ họa, dựng video",
            "B650/X670, Z790, main nhiều M.2",
            "Cần lưu trữ nhanh, nhiều cổng",
        ],
        ["Máy nhỏ gọn", "Mini‑ITX", "Gọn, đẹp, nhưng cần chọn kỹ"],
        [
            "Workstation cá nhân",
            "ATX/E‑ATX, chipset cao",
            "Nhiều RAM, nhiều PCIe, nhiều SSD",
        ],
        ["Ép xung Intel CPU dòng K", "Z‑series", "Hỗ trợ overclock CPU"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Chọn theo nhu cầu sử dụng"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[900px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Nhu cầu</th>
                            <th className="p-4 text-emerald-300">
                                Mainboard nên chọn
                            </th>
                            <th className="p-4">Lý do</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([need, board, why]) => (
                            <tr
                                key={need}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-white font-bold">
                                    {need}
                                </td>
                                <td className="p-4 text-slate-300">{board}</td>
                                <td className="p-4 text-slate-300">{why}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function BudgetGuide() {
    const rows = [
        [
            "Dưới 2 triệu VNĐ",
            "Main cơ bản, ít khe, ít tính năng",
            "Văn phòng, máy phụ, cấu hình tiết kiệm",
        ],
        [
            "2–4 triệu VNĐ",
            "Tầm trung, đủ khe M.2, có mẫu có Wi‑Fi",
            "Gaming phổ thông, học tập, làm việc",
        ],
        [
            "4–7 triệu VNĐ",
            "VRM tốt hơn, nhiều cổng, nhiều M.2, Wi‑Fi tốt",
            "Gaming/làm việc lâu dài",
        ],
        [
            "Trên 7 triệu VNĐ",
            "Cao cấp, nhiều lane, nhiều tính năng, thẩm mỹ tốt",
            "CPU mạnh, workstation, enthusiast",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="orange"
                title="Chọn theo ngân sách"
                icon={<Gauge />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[860px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Ngân sách mainboard</th>
                            <th className="p-4">Nên kỳ vọng gì?</th>
                            <th className="p-4">Phù hợp với</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([budget, expect, fit]) => (
                            <tr
                                key={budget}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-orange-300 font-extrabold">
                                    {budget}
                                </td>
                                <td className="p-4 text-slate-300">{expect}</td>
                                <td className="p-4 text-slate-300">{fit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-orange-300">Lưu ý:</strong> Giá
                mainboard thay đổi theo cửa hàng và thời điểm. Hãy xem giá thực
                tế, bảo hành, tình trạng hàng và tính năng cụ thể thay vì chỉ
                nhìn tên chipset.
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        socket: {
            icon: <Cpu />,
            title: "Socket CPU",
            detail: "Điều kiện đầu tiên: CPU phải lắp được vào mainboard.",
            impact: "Ryzen 5 5600 cần AM4; Ryzen 5 7600 cần AM5; i5‑14400F cần LGA1700. Sai socket là không lắp được.",
        },
        chipset: {
            icon: <Settings />,
            title: "Chipset",
            detail: "Chipset quyết định nhiều tính năng: M.2, USB, PCIe, SATA, ép xung.",
            impact: "Người dùng phổ thông thường chọn dòng B: B550/B650/B760. Intel CPU K muốn OC nên chọn Z‑series.",
        },
        ram: {
            icon: <MemoryStick />,
            title: "DDR4 hay DDR5",
            detail: "Mainboard quyết định loại RAM dùng được.",
            impact: "AM5 bắt buộc DDR5; LGA1700 có cả bản DDR4 và DDR5, phải đọc kỹ tên sản phẩm.",
        },
        vrm: {
            icon: <Zap />,
            title: "VRM",
            detail: "Mạch cấp điện cho CPU. CPU càng mạnh, VRM càng quan trọng.",
            impact: "Core i9/Ryzen 9 đi với main quá rẻ có thể làm VRM nóng, CPU giảm xung hoặc kém ổn định.",
        },
        m2: {
            icon: <HardDrive />,
            title: "Số khe M.2",
            detail: "SSD NVMe nhanh và gọn, nên M.2 rất quan trọng với PC hiện đại.",
            impact: "Văn phòng tối thiểu 1 khe; gaming nên 2 khe; dựng video/workstation nên 2–3 khe trở lên.",
        },
        pcie: {
            icon: <Gamepad2 />,
            title: "PCIe",
            detail: "Khe cho GPU và card mở rộng như capture card, card Wi‑Fi, card mạng 10GbE, adapter NVMe.",
            impact: "Nếu chỉ dùng 1 GPU thì đa số main đủ; nếu dùng nhiều card mở rộng phải kiểm tra lane và khe thật.",
        },
        wifi: {
            icon: <Wifi />,
            title: "Wi‑Fi, Bluetooth, LAN",
            detail: "Không phải mainboard nào cũng có Wi‑Fi/Bluetooth sẵn.",
            impact: "Không kéo dây mạng được thì nên chọn bản Wi‑Fi; NAS/truyền file nội bộ nên ưu tiên LAN 2.5GbE hoặc hơn.",
        },
        form: {
            icon: <Layers3 />,
            title: "Form factor",
            detail: "ATX, Micro‑ATX, Mini‑ITX, E‑ATX phải vừa case.",
            impact: "Người mới dễ chọn nhất là Micro‑ATX hoặc ATX; Mini‑ITX nhỏ đẹp nhưng khó build và thường đắt hơn.",
        },
        bios: {
            icon: <ShieldCheck />,
            title: "BIOS hỗ trợ CPU",
            detail: "Cùng socket chưa chắc chạy ngay nếu BIOS quá cũ.",
            impact: "CPU đời mới trên main đời đầu có thể cần update BIOS; BIOS Flashback/Q‑Flash Plus/Flash BIOS Button rất hữu ích.",
        },
    };
    const [active, setActive] = useState("socket");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="yellow"
                title="Thông số kỹ thuật quan trọng khi chọn mainboard"
                icon={<Puzzle />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-3 md:grid-cols-9 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(specs).map(([key, s]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-3 text-center transition-all ${active === key ? "bg-yellow-500 text-slate-950" : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}
                        >
                            {React.cloneElement(s.icon, { size: 18 })}
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

function NamingGuide() {
    const rows = [
        ["B760M", "Chipset B760, thường là Micro‑ATX"],
        ["DDR4 / D4", "Bản dùng RAM DDR4"],
        ["DDR5", "Bản dùng RAM DDR5"],
        ["WIFI / AX", "Có Wi‑Fi"],
        ["PLUS / PRO / TUF / AORUS / MAG", "Dòng sản phẩm hoặc phân khúc"],
        ["I", "Thường là Mini‑ITX"],
        ["M", "Thường là Micro‑ATX"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="cyan"
                title="Đọc tên mainboard thật kỹ"
                icon={<BookOpen />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[680px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Ký hiệu trong tên</th>
                            <th className="p-4">Ý nghĩa thường gặp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([name, meaning]) => (
                            <tr
                                key={name}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-cyan-300 font-extrabold">
                                    {name}
                                </td>
                                <td className="p-4 text-slate-300">
                                    {meaning}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                MSI B760M GAMING PLUS WIFI DDR4
                <br />
                <span className="text-red-300">≠</span>
                <br />
                MSI B760M GAMING PLUS WIFI DDR5
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Cpu />,
            title: "Văn phòng / học tập tiết kiệm",
            subtitle: "H610 DDR4 hoặc A520/B550",
            color: "cyan",
            points: [
                "CPU: i3‑12100/i3‑13100 hoặc Ryzen 5 5600G",
                "RAM: 16GB DDR4",
                "SSD: 500GB NVMe hoặc SATA",
                "GPU: không cần nếu CPU có iGPU",
                "Không cần main cao cấp nếu chỉ Word, Excel, web, học online",
            ],
            lesson: "Mainboard cơ bản vẫn ổn nếu đúng socket, đủ cổng và phù hợp CPU phổ thông.",
        },
        {
            icon: <Gamepad2 />,
            title: "Gaming phổ thông Intel",
            subtitle: "i5‑14400F + B760",
            color: "blue",
            points: [
                "Socket LGA1700",
                "B760 cân bằng nếu không ép xung",
                "DDR4 nếu tiết kiệm, DDR5 nếu build lâu dài",
                "CPU chữ F cần GPU rời",
                "Wi‑Fi nếu không kéo dây mạng",
            ],
            lesson: "Với i5 non‑K, B760 thường hợp lý hơn Z790 nếu không cần ép xung.",
        },
        {
            icon: <Sparkles />,
            title: "Gaming/làm việc AMD AM5",
            subtitle: "Ryzen 5 7600 / Ryzen 7 7700 + B650",
            color: "emerald",
            points: [
                "Socket AM5",
                "RAM DDR5",
                "B650 là điểm cân bằng",
                "2 khe M.2 là mức đẹp",
                "Wi‑Fi sẵn tiện hơn nếu không dùng LAN",
            ],
            lesson: "B650 hợp người build AM5 mới, muốn dùng lâu dài nhưng không cần X670/X870 đắt tiền.",
        },
        {
            icon: <Layers3 />,
            title: "Mini‑ITX nhỏ gọn",
            subtitle: "B650E‑I / B760‑I / Z790‑I",
            color: "rose",
            points: [
                "Case Mini‑ITX",
                "PSU thường SFX/SFX‑L",
                "2 khe RAM DDR5",
                "1–2 ổ M.2",
                "Cần kiểm tra GPU, tản CPU, airflow rất kỹ",
            ],
            lesson: "Mini‑ITX đẹp và gọn nhưng không đồng nghĩa rẻ hoặc dễ build.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="pink"
                title="Ví dụ thực tế cụ thể"
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
        ryzen7600: {
            icon: <Cpu />,
            title: "Ryzen 5 7600",
            answer: "Chọn AM5, chipset B650, RAM DDR5, form factor mATX hoặc ATX. Nếu cần Wi‑Fi: chọn B650M/B650 có WIFI/AX. 2 khe M.2 là rất đẹp cho gaming/làm việc.",
            color: "emerald",
        },
        i514400f: {
            icon: <Gamepad2 />,
            title: "i5‑14400F gaming",
            answer: "Chọn LGA1700, B760 nếu không ép xung. DDR4 để tiết kiệm hoặc DDR5 để build mới lâu dài. Vì CPU chữ F không có iGPU, cần GPU rời để xuất hình.",
            color: "blue",
        },
        office: {
            icon: <BookOpen />,
            title: "Văn phòng tiết kiệm",
            answer: "Không cần main cao cấp. H610 DDR4 cho Intel hoặc A520/B550 cho Ryzen AM4 là đủ nếu đúng socket, đủ cổng và CPU có iGPU nếu không dùng GPU rời.",
            color: "cyan",
        },
        ryzen9: {
            icon: <Zap />,
            title: "Ryzen 9 / Core i9",
            answer: "Không nên dùng main quá rẻ. Cần VRM mạnh, heatsink VRM tốt, nhiều phase nguồn, airflow case tốt; cân nhắc X670/X870 hoặc Z790/Z890 tùy nền tảng.",
            color: "red",
        },
        creator: {
            icon: <HardDrive />,
            title: "Dựng video/project lớn",
            answer: "Ưu tiên nhiều khe M.2, USB nhanh, LAN 2.5GbE, VRM ổn, ATX nếu cần nhiều card mở rộng. Đọc manual về lane chia sẻ M.2/SATA/PCIe.",
            color: "orange",
        },
        mini: {
            icon: <Sparkles />,
            title: "PC nhỏ gọn",
            answer: "Chọn Mini‑ITX nhưng kiểm tra case, PSU SFX/SFX‑L, chiều dài GPU, chiều cao tản CPU, radiator, số khe M.2 và nhiệt độ. Không nên chọn ITX chỉ vì nghĩ nhỏ là rẻ.",
            color: "rose",
        },
    };
    const [active, setActive] = useState("ryzen7600");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: chọn mainboard theo tình huống"
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
            wrong: "Chọn mainboard trước khi chọn CPU",
            right: "Nên chọn CPU trước để biết socket, chipset phù hợp và RAM DDR4/DDR5 cần dùng.",
        },
        {
            wrong: "Chỉ nhìn socket, bỏ qua chipset và BIOS",
            right: "Socket đúng mới là điều kiện đầu tiên. Cần kiểm tra chipset, BIOS support, VRM và RAM.",
        },
        {
            wrong: "Mua mainboard quá rẻ cho CPU quá mạnh",
            right: "Core i9/Ryzen 9 với main cấp thấp có thể làm VRM nóng, CPU tụt xung hoặc kém ổn định khi tải nặng.",
        },
        {
            wrong: "Mua mainboard quá đắt nhưng không dùng hết tính năng",
            right: "Nếu chỉ dùng 1 GPU, 1 SSD, không ép xung, không cần nhiều USB/Thunderbolt, main quá cao cấp có thể lãng phí.",
        },
        {
            wrong: "Quên kiểm tra form factor với case",
            right: "Case chỉ hỗ trợ mATX thì không mua main ATX. Case ATX thường lắp được mATX nhưng nhìn hơi trống.",
        },
        {
            wrong: "Case có USB‑C trước nhưng main không có header",
            right: "Muốn dùng USB‑C mặt trước, mainboard phải có internal USB‑C header tương ứng.",
        },
        {
            wrong: "Không kiểm tra số khe M.2",
            right: "Ban đầu một SSD có thể đủ, nhưng gaming/làm việc hiện nay nên có ít nhất 2 khe M.2 nếu ngân sách cho phép.",
        },
    ];
    const tips = [
        "Công thức nhanh: CPU phổ thông → H610/A620/A520/B550 cơ bản; i5/Ryzen 5 gaming → B760/B650/B550.",
        "Với người mới, dòng B thường cân bằng nhất: Intel B760, AMD AM4 B550, AMD AM5 B650.",
        "Checklist trước khi mua: socket, chipset, BIOS, DDR4/DDR5, form factor, M.2, Wi‑Fi, VRM, USB‑C header, fan header.",
        "Đọc tên main thật kỹ: DDR4/D4 khác DDR5; WIFI/AX nghĩa là có Wi‑Fi; I thường là Mini‑ITX; M thường là mATX.",
        "Nếu ngân sách hạn chế, ưu tiên GPU tốt hơn cho gaming, CPU đủ mạnh, RAM đủ dung lượng, SSD đủ nhanh, PSU an toàn; mainboard vừa đủ và ổn định.",
        "Không chọn theo hãng/fanboy; chọn theo CPU, nhu cầu, case, số khe, BIOS và giá thực tế.",
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
                        <span className="bg-rose-500/20 text-rose-300 p-2 rounded-xl">
                            13
                        </span>{" "}
                        Tóm tắt & Kiểm tra cuối phần
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-rose-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                Chọn Mainboard = chọn nền tảng kết nối và nâng
                                cấp
                            </p>
                            <br />
                            <p className="text-slate-500"># Thứ tự chọn</p>
                            <p className="text-slate-300">
                                CPU → Socket → Chipset → DDR4/DDR5 → Form Factor
                            </p>
                            <p className="text-slate-300">
                                → VRM → M.2/SATA/PCIe → Wi‑Fi/LAN/USB → BIOS →
                                Giá
                            </p>
                            <br />
                            <p className="text-slate-500"># Chọn nhanh</p>
                            <p className="text-slate-300">
                                Intel phổ thông: B760
                            </p>
                            <p className="text-slate-300">
                                AMD AM4 cân bằng: B550
                            </p>
                            <p className="text-slate-300">
                                AMD AM5 cân bằng: B650
                            </p>
                            <br />
                            <p className="text-red-300">
                                Mainboard nên đủ tốt, ổn định và đúng nhu cầu —
                                không cần đắt nhất.
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
        question: "Khi chọn mainboard, bước đầu tiên nên làm là gì?",
        options: [
            "Chọn mainboard đẹp nhất",
            "Chọn CPU trước để biết socket",
            "Chọn case trước trong mọi trường hợp",
            "Chọn RAM RGB trước",
        ],
        correct: 1,
        explanation:
            "CPU quyết định socket và nhóm chipset/mainboard phù hợp, nên phải chọn CPU trước.",
    },
    {
        question: "Ryzen 5 7600 nên đi với socket nào?",
        options: ["AM4", "AM5", "LGA1700", "LGA1200"],
        correct: 1,
        explanation: "Ryzen 5 7600 thuộc nền tảng AMD AM5 và dùng RAM DDR5.",
    },
    {
        question:
            "Intel Core i5‑14400F thường phù hợp với chipset nào nếu không ép xung?",
        options: ["B760", "A520", "B650", "X570"],
        correct: 0,
        explanation:
            "i5‑14400F là LGA1700; nếu không ép xung, B760 thường là lựa chọn cân bằng.",
    },
    {
        question: "Nếu muốn dùng RAM DDR5, điều gì bắt buộc phải kiểm tra?",
        options: [
            "Mainboard có hỗ trợ DDR5 không",
            "Case có kính cường lực không",
            "PSU có màu trắng không",
            "GPU có RGB không",
        ],
        correct: 0,
        explanation:
            "DDR4 và DDR5 không cắm lẫn được, nên phải kiểm tra đúng phiên bản mainboard hỗ trợ DDR5.",
    },
    {
        question: "Mainboard quá rẻ cho CPU rất mạnh có thể gây vấn đề gì?",
        options: [
            "VRM nóng, CPU giảm xung hoặc kém ổn định",
            "Màn hình bị nhỏ lại",
            "Chuột chạy nhanh hơn",
            "SSD mất dung lượng",
        ],
        correct: 0,
        explanation:
            "CPU mạnh cần VRM tốt. Main quá rẻ có thể khiến VRM nóng, CPU tụt xung hoặc hệ thống kém ổn định khi tải nặng.",
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
                    Hoàn thành Phần 6!
                </h4>
                <p className="text-slate-400 mb-6">
                    Bạn trả lời đúng{" "}
                    <strong className="text-rose-400">
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
                <span className="text-rose-400">
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
                        className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hoàn thành Phần 6 — Mainboard: từ khái niệm, cấu tạo,
                chipset, socket, khe RAM/PCIe, cổng onboard, form factor,
                BIOS/UEFI đến cách chọn mua. Phần tiếp theo là PSU — nguồn điện,
                vì sau khi chọn linh kiện, bạn cần biết cách cấp điện đủ công
                suất, an toàn và bền cho toàn bộ hệ thống.
            </p>
            <Link
                to="/phan-7-1"
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-rose-500/20"
            >
                Phần tiếp theo: 7.1 — PSU là gì? Vai trò cung cấp điện cho hệ
                thống <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function RefreshIcon(props) {
    return <ShieldCheck {...props} />;
}
function SectionTitle({ number, title, icon, color = "rose" }) {
    const colorMap = {
        rose: "bg-rose-500/20 text-rose-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-rose-500/10 border-rose-400/50" : softBorder(color)}`}
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
        rose: "bg-rose-500/10 text-rose-300 border border-rose-500/20",
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
    return map[color] || map.rose;
}
function softBorder(color) {
    const map = {
        rose: "bg-rose-500/5 border-rose-500/20",
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
    return map[color] || map.rose;
}
function textColor(color) {
    const map = {
        rose: "text-rose-300",
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
    return map[color] || "text-rose-300";
}
