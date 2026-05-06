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
    PlugZap,
    Puzzle,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    Usb,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center shadow-lg shadow-blue-500/10">
                            <Layers3 className="text-blue-400" size={24} />
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
                    <div className="text-sm font-semibold text-blue-300 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                        Bài 6.1
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <CityAnalogy />
                <BootFlowSimulator />
                <ComponentMap />
                <BoardTypeExplorer />
                <ChipsetExplorer />
                <SpecsExplorer />
                <RealExamples />
                <CompatibilityLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-blue-300">
                        <BookOpen size={16} /> Phần 6: Mainboard — Motherboard
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Mainboard là gì?
                        <span className="block text-blue-400">
                            Trung tâm kết nối của PC
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Mainboard không tự làm CPU hay GPU mạnh hơn, nhưng quyết
                        định bạn cắm được linh kiện nào, nâng cấp ra sao, có bao
                        nhiêu khe M.2/PCIe, dùng DDR4 hay DDR5 và hệ thống có ổn
                        định khi chạy lâu không.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="Socket CPU" />
                        <Tag icon={<MemoryStick size={16} />} text="DIMM RAM" />
                        <Tag icon={<Gamepad2 size={16} />} text="PCIe x16" />
                        <Tag icon={<HardDrive size={16} />} text="M.2 / SATA" />
                        <Tag icon={<Zap size={16} />} text="VRM" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Cpu />}
                            label="CPU"
                            desc="Cắm vào socket"
                            color="blue"
                            highlight
                        />
                        <HeroTile
                            icon={<MemoryStick />}
                            label="RAM"
                            desc="Khe DIMM DDR4/DDR5"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<Gamepad2 />}
                            label="GPU"
                            desc="PCIe x16"
                            color="purple"
                        />
                        <HeroTile
                            icon={<HardDrive />}
                            label="SSD"
                            desc="M.2 / SATA"
                            color="orange"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Vai trò chính</p>
                        <p>Mainboard = đường sá + điện + cổng</p>
                        <p className="text-blue-300">
                            để mọi linh kiện giao tiếp với nhau
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu mainboard/motherboard là gì và vì sao nó là trung tâm kết nối trong máy tính.",
        "Nắm luồng hoạt động khi bật máy: PSU cấp điện, BIOS/UEFI kiểm tra phần cứng, CPU giao tiếp với RAM/SSD/GPU.",
        "Nhận diện các khu vực quan trọng: socket CPU, khe RAM, PCIe x16, M.2, SATA, chipset, VRM, cổng I/O.",
        "Phân biệt mainboard theo kích thước: ATX, Micro-ATX và Mini-ITX.",
        "Biết các lỗi chọn mainboard phổ biến: sai socket, sai DDR, ít khe M.2, VRM yếu, case không vừa.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="blue"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center font-bold mb-4">
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
    const roles = [
        {
            icon: <Cpu />,
            title: "CPU nào cắm được",
            desc: "Phải khớp socket và BIOS/chipset hỗ trợ.",
            color: "blue",
        },
        {
            icon: <MemoryStick />,
            title: "RAM DDR4 hay DDR5",
            desc: "Khe vật lý khác nhau, không thể cắm lẫn.",
            color: "emerald",
        },
        {
            icon: <HardDrive />,
            title: "Bao nhiêu SSD M.2",
            desc: "Quyết định khả năng nâng cấp lưu trữ NVMe.",
            color: "orange",
        },
        {
            icon: <Network />,
            title: "Wi-Fi, Bluetooth, LAN",
            desc: "Ảnh hưởng trải nghiệm kết nối hằng ngày.",
            color: "cyan",
        },
        {
            icon: <Zap />,
            title: "Ổn định khi tải nặng",
            desc: "VRM tốt giúp CPU mạnh chạy ổn định hơn.",
            color: "purple",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: Mainboard là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Mainboard</strong>, còn gọi
                    là <strong className="text-cyan-300">motherboard</strong>{" "}
                    hoặc <strong className="text-white">bản mạch chủ</strong>,
                    là bo mạch lớn nhất trong máy tính. Nó dùng để{" "}
                    <strong className="text-white">
                        kết nối, cấp đường truyền và phối hợp hoạt động
                    </strong>{" "}
                    giữa CPU, RAM, SSD, GPU, nguồn, quạt, USB, âm thanh và mạng.
                </p>
                <div className="grid md:grid-cols-5 gap-4">
                    {roles.map((r) => (
                        <RoleCard key={r.title} {...r} />
                    ))}
                </div>
                <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-cyan-300">Ghi nhớ:</strong>{" "}
                    Mainboard không trực tiếp quyết định toàn bộ sức mạnh xử lý
                    như CPU/GPU, nhưng quyết định khả năng tương thích, nâng
                    cấp, kết nối và độ ổn định của hệ thống.
                </div>
            </div>
        </section>
    );
}

function CityAnalogy() {
    const cards = [
        {
            icon: <Layers3 />,
            title: "Mainboard = thành phố trung tâm",
            desc: "Đường sá, điện, cổng kết nối và quy hoạch để mọi khu vực hoạt động cùng nhau.",
            color: "blue",
        },
        {
            icon: <Cpu />,
            title: "CPU = tòa thị chính",
            desc: "Nơi ra quyết định và xử lý lệnh chính của hệ thống.",
            color: "cyan",
        },
        {
            icon: <MemoryStick />,
            title: "RAM = kho làm việc tạm",
            desc: "Nơi chứa dữ liệu đang dùng để CPU truy cập nhanh.",
            color: "emerald",
        },
        {
            icon: <Database />,
            title: "SSD = kho lưu trữ",
            desc: "Lưu hệ điều hành, game, phần mềm và dữ liệu dài hạn.",
            color: "orange",
        },
        {
            icon: <Gamepad2 />,
            title: "GPU = nhà máy hình ảnh",
            desc: "Xử lý game, đồ họa, render, AI và xuất hình ra màn hình.",
            color: "purple",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: thành phố trung tâm"
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

function BootFlowSimulator() {
    const steps = [
        {
            icon: <PlugZap />,
            title: "PSU cấp điện",
            desc: "Nguồn cấp điện cho mainboard, CPU, GPU, ổ lưu trữ, quạt và các thiết bị khác.",
        },
        {
            icon: <Zap />,
            title: "Mainboard phân phối điện",
            desc: "Điện đi qua các mạch cấp nguồn, đặc biệt là VRM cho CPU.",
        },
        {
            icon: <Settings />,
            title: "BIOS/UEFI kiểm tra phần cứng",
            desc: "Hệ thống kiểm tra CPU, RAM, SSD, GPU, quạt và thiết bị khởi động.",
        },
        {
            icon: <Cpu />,
            title: "CPU bắt đầu xử lý",
            desc: "CPU nhận lệnh, điều phối hệ thống và giao tiếp với RAM/SSD/GPU.",
        },
        {
            icon: <MemoryStick />,
            title: "CPU trao đổi dữ liệu với RAM",
            desc: "RAM chứa dữ liệu đang dùng để CPU xử lý nhanh.",
        },
        {
            icon: <HardDrive />,
            title: "SSD đọc hệ điều hành/game",
            desc: "Dữ liệu từ SSD đi qua mainboard đến RAM và CPU.",
        },
        {
            icon: <Monitor />,
            title: "GPU xuất hình và thiết bị hoạt động",
            desc: "Hình ảnh, âm thanh, mạng, USB và thiết bị ngoại vi bắt đầu hoạt động.",
        },
    ];
    const [active, setActive] = useState(0);
    const step = steps[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Mainboard kết nối mọi thứ thế nào?"
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
                <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Mở game: SSD đọc dữ liệu → mainboard truyền đến RAM → CPU xử
                    lý logic → GPU xử lý hình ảnh → màn hình/loa/mạng/USB hoạt
                    động
                </div>
            </div>
        </section>
    );
}

function ComponentMap() {
    const rows = [
        ["Socket CPU", "Nơi gắn CPU", "Sai socket thì không lắp được CPU"],
        [
            "Khe RAM / DIMM Slot",
            "Nơi gắn thanh RAM",
            "Phải đúng DDR4 hoặc DDR5",
        ],
        [
            "PCIe x16",
            "Thường dùng gắn card đồ họa rời",
            "Quan trọng với GPU rời",
        ],
        [
            "Khe M.2",
            "Gắn SSD NVMe tốc độ cao",
            "Càng nhiều khe càng dễ nâng cấp",
        ],
        ["Cổng SATA", "Gắn HDD/SSD SATA", "Hữu ích cho lưu trữ dung lượng lớn"],
        [
            "USB / Audio / LAN",
            "Kết nối thiết bị ngoại vi",
            "Ảnh hưởng trải nghiệm hằng ngày",
        ],
        [
            "Chipset",
            "Điều phối một phần giao tiếp",
            "Quyết định số cổng/khe/tính năng",
        ],
        ["VRM", "Mạch cấp điện ổn định cho CPU", "CPU mạnh cần VRM tốt"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Các thành phần chính trên mainboard"
                icon={<Puzzle />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[820px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Thành phần</th>
                            <th className="p-4">Vai trò</th>
                            <th className="p-4">Tác động thực tế</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([part, role, impact]) => (
                            <tr
                                key={part}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-blue-300 font-extrabold">
                                    {part}
                                </td>
                                <td className="p-4 text-slate-300">{role}</td>
                                <td className="p-4 text-slate-300">{impact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function BoardTypeExplorer() {
    const types = {
        atx: {
            icon: <Layers3 />,
            title: "ATX",
            size: "Lớn",
            good: "Nhiều khe RAM, PCIe, M.2, cổng kết nối",
            bad: "Cần case lớn hơn",
            fit: "PC gaming, workstation, nâng cấp lâu dài",
            color: "blue",
        },
        matx: {
            icon: <PackageCheck />,
            title: "Micro-ATX / mATX",
            size: "Trung bình",
            good: "Giá tốt, đủ dùng, dễ chọn case",
            bad: "Ít khe mở rộng hơn ATX",
            fit: "PC văn phòng, gaming phổ thông",
            color: "emerald",
        },
        itx: {
            icon: <Sparkles />,
            title: "Mini-ITX",
            size: "Nhỏ",
            good: "Gọn, đẹp, build PC mini",
            bad: "Đắt, ít khe, khó tản nhiệt hơn",
            fit: "PC nhỏ gọn, phòng khách, setup tối giản",
            color: "purple",
        },
    };
    const [active, setActive] = useState("matx");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Phân loại mainboard theo kích thước"
                icon={<PackageCheck />}
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
                            <p className="text-xs opacity-70 mt-1">{t.size}</p>
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
                            Kích thước: {item.size}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-3">
                        <InfoCard
                            label="Ưu điểm"
                            value={item.good}
                            color="emerald"
                        />
                        <InfoCard
                            label="Nhược điểm"
                            value={item.bad}
                            color="orange"
                        />
                        <InfoCard
                            label="Phù hợp"
                            value={item.fit}
                            color="blue"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ChipsetExplorer() {
    const data = {
        h610: {
            title: "Intel H610",
            brand: "Intel",
            segment: "Cơ bản",
            desc: "Giá rẻ, ít khe, phù hợp văn phòng và CPU phổ thông.",
            color: "cyan",
        },
        b760: {
            title: "Intel B760",
            brand: "Intel",
            segment: "Tầm trung",
            desc: "Cân bằng hơn H610, hợp gaming phổ thông và nhiều build i5.",
            color: "blue",
        },
        z790: {
            title: "Intel Z790",
            brand: "Intel",
            segment: "Cao cấp",
            desc: "Nhiều tính năng, hỗ trợ ép xung CPU dòng K, nhiều cổng/khe hơn.",
            color: "purple",
        },
        a620: {
            title: "AMD A620",
            brand: "AMD",
            segment: "Cơ bản",
            desc: "Giá thấp, ít tính năng hơn, hợp build AM5 tiết kiệm.",
            color: "orange",
        },
        b650: {
            title: "AMD B650",
            brand: "AMD",
            segment: "Tầm trung",
            desc: "Phổ biến cho Ryzen AM5, cân bằng tính năng và giá.",
            color: "emerald",
        },
        x670: {
            title: "AMD X670/X870",
            brand: "AMD",
            segment: "Cao cấp",
            desc: "Nhiều PCIe, M.2, cổng kết nối, phù hợp máy mạnh/nâng cấp lâu dài.",
            color: "rose",
        },
    };
    const [active, setActive] = useState("b650");
    const item = data[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="purple"
                title="Phân loại theo nền tảng CPU và chipset"
                icon={<Settings />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
                    {Object.entries(data).map(([key, c]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(c.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <p className="font-bold text-sm">{c.title}</p>
                            <p className="text-xs opacity-70 mt-1">
                                {c.segment}
                            </p>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <InfoCard
                        label="Nền tảng"
                        value={item.brand}
                        color={item.color}
                    />
                    <InfoCard
                        label="Phân khúc"
                        value={item.segment}
                        color={item.color}
                    />
                    <InfoCard
                        label="Đặc điểm"
                        value={item.desc}
                        color={item.color}
                    />
                </div>
                <div className="mt-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-purple-300">
                        Socket phổ biến:
                    </strong>{" "}
                    Intel có LGA1700/LGA1851 tùy đời; AMD có AM4/AM5. CPU phải
                    khớp socket và được BIOS/chipset hỗ trợ.
                </div>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        socket: {
            icon: <Cpu />,
            title: "Socket CPU",
            detail: "Kiểu chân cắm CPU trên mainboard.",
            impact: "Sai socket thì không gắn được CPU. AM5 không cắm vào AM4; LGA1700 không cắm vào LGA1200.",
        },
        chipset: {
            icon: <Settings />,
            title: "Chipset",
            detail: "Bộ điều phối tính năng của mainboard.",
            impact: "Quyết định số khe/cổng, khả năng nâng cấp, ép xung và tính năng phụ trợ.",
        },
        ram: {
            icon: <MemoryStick />,
            title: "RAM hỗ trợ",
            detail: "DDR4 hay DDR5, số khe RAM, dung lượng tối đa và tốc độ hỗ trợ.",
            impact: "Mainboard DDR4 không cắm được DDR5 vì khe vật lý khác nhau.",
        },
        pcie: {
            icon: <Gamepad2 />,
            title: "Khe PCIe",
            detail: "Khe cắm GPU và card mở rộng.",
            impact: "Có khe x16 chưa chắc luôn chạy đủ x16; cần đọc thông số lane và thế hệ PCIe.",
        },
        m2: {
            icon: <HardDrive />,
            title: "Khe M.2 / SATA",
            detail: "Khe gắn SSD NVMe và cổng HDD/SSD SATA.",
            impact: "Ít khe M.2 thì sau này nâng cấp SSD NVMe khó hơn.",
        },
        vrm: {
            icon: <Zap />,
            title: "VRM",
            detail: "Mạch cấp điện ổn định cho CPU.",
            impact: "CPU mạnh chạy render/encode/tải nặng lâu cần VRM tốt để tránh nóng, tụt xung hoặc kém ổn định.",
        },
        form: {
            icon: <PackageCheck />,
            title: "Form Factor",
            detail: "Kích thước mainboard: ATX, mATX, Mini-ITX.",
            impact: "Phải vừa case. Case mATX không chắc chứa được ATX.",
        },
        io: {
            icon: <Usb />,
            title: "Cổng I/O sau",
            detail: "USB, HDMI/DP, LAN, audio, Wi-Fi, Bluetooth.",
            impact: "Ảnh hưởng trải nghiệm dùng hằng ngày và số thiết bị có thể kết nối.",
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
                icon={<Gauge />}
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

function RealExamples() {
    const examples = [
        {
            icon: <Cpu />,
            title: "MSI PRO H610M-E DDR4",
            subtitle: "Intel LGA1700, H610, mATX, DDR4",
            color: "cyan",
            points: [
                "Phổ thông, tiết kiệm",
                "Hợp PC văn phòng/học tập",
                "Hợp i3/i5 phổ thông",
                "Ít khe mở rộng hơn dòng cao",
                "Không hợp build cao cấp nhiều SSD/card",
            ],
            lesson: "Máy học online, Excel, web, kế toán nhẹ với Intel phổ thông thì H610M DDR4 có thể đủ dùng.",
        },
        {
            icon: <Sparkles />,
            title: "ASUS PRIME B650M-A WIFI II-CSM",
            subtitle: "AMD AM5, B650, DDR5, Wi-Fi",
            color: "emerald",
            points: [
                "Nền tảng AM5 mới hơn",
                "Hợp Ryzen 5/Ryzen 7",
                "Có Wi-Fi",
                "Dễ nâng cấp CPU/RAM hơn nền tảng cũ",
                "Chi phí cao hơn DDR4",
            ],
            lesson: "Build PC dùng 4–5 năm với Ryzen 5 7500F/7600 thì B650 là lựa chọn cân bằng.",
        },
        {
            icon: <Gamepad2 />,
            title: "GIGABYTE B760M DS3H DDR4",
            subtitle: "Intel B760, DDR4, mATX",
            color: "blue",
            points: [
                "Hỗ trợ Intel Core thế hệ 12/13/14 tùy BIOS",
                "4 khe DDR4",
                "Dual M.2",
                "LAN 2.5GbE",
                "Thực dụng nếu tận dụng RAM DDR4 cũ",
            ],
            lesson: "Muốn build Intel gaming tầm trung nhưng vẫn dùng RAM DDR4 cũ thì B760 DDR4 hợp lý hơn H610.",
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

function CompatibilityLab() {
    const scenarios = {
        am5: {
            icon: <Cpu />,
            title: "CPU Ryzen AM5",
            answer: "Chọn mainboard socket AM5. Không thể cắm Ryzen AM5 vào mainboard AM4.",
            color: "emerald",
        },
        ddr: {
            icon: <MemoryStick />,
            title: "Có RAM DDR4 cũ",
            answer: "Chọn mainboard DDR4 nếu muốn tận dụng RAM cũ. Mainboard DDR5 không cắm được DDR4.",
            color: "cyan",
        },
        gpu: {
            icon: <Gamepad2 />,
            title: "Dùng GPU rời",
            answer: "Cần khe PCIe x16 và case/PSU phù hợp. Cổng HDMI trên mainboard chỉ xuất hình khi CPU có iGPU.",
            color: "purple",
        },
        storage: {
            icon: <HardDrive />,
            title: "Muốn nhiều SSD NVMe",
            answer: "Kiểm tra số khe M.2, thế hệ PCIe và lane chia sẻ với SATA/PCIe khác.",
            color: "orange",
        },
        cpuHeavy: {
            icon: <Zap />,
            title: "CPU mạnh, render lâu",
            answer: "Không nên chọn mainboard quá rẻ. Cần VRM tốt và tản VRM ổn để chạy tải nặng lâu.",
            color: "red",
        },
    };
    const [active, setActive] = useState("am5");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: chọn mainboard theo tình huống"
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
            wrong: "Mainboard nào cũng gắn được CPU nào",
            right: "CPU phải khớp socket và được chipset/BIOS hỗ trợ. AM5 không cắm được AM4; LGA1700 không cắm được LGA1200.",
        },
        {
            wrong: "Mainboard càng đắt thì máy càng nhanh",
            right: "Mainboard đắt hơn thường có nhiều tính năng, VRM tốt và nhiều cổng hơn, nhưng không tự làm FPS tăng mạnh nếu CPU/GPU/RAM giống nhau.",
        },
        {
            wrong: "Chỉ cần có khe là cắm được",
            right: "Có khe chưa đủ. M.2 có thể SATA hoặc NVMe; PCIe x16 có thể chạy x16/x8/x4; HDMI mainboard cần CPU có iGPU.",
        },
        {
            wrong: "Mua mainboard trước rồi chọn CPU sau",
            right: "Nên chọn CPU trước, vì CPU quyết định socket và nhóm mainboard phù hợp.",
        },
        {
            wrong: "CPU mạnh đi với mainboard rẻ nhất cũng được",
            right: "Ryzen 9/Core i9 hoặc render/encode tải nặng lâu cần VRM tốt, nếu không dễ nóng, tụt xung hoặc kém ổn định.",
        },
    ];
    const tips = [
        "Chọn CPU trước, rồi chọn mainboard theo socket/chipset.",
        "Kiểm tra RAM là DDR4 hay DDR5 trước khi mua.",
        "Đảm bảo form factor vừa case: ATX, mATX, Mini-ITX.",
        "Kiểm tra đủ khe M.2/SATA cho nhu cầu lưu trữ.",
        "Xác định có cần Wi-Fi/Bluetooth/LAN 2.5GbE sẵn không.",
        "Với người mới, mATX thường là lựa chọn an toàn: giá tốt, đủ dùng, dễ chọn case.",
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
                        <span className="bg-blue-500/20 text-blue-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-blue-300 border border-slate-800 shadow-inner space-y-2">
                            <p>Mainboard = trung tâm kết nối linh kiện</p>
                            <br />
                            <p className="text-slate-500"># Cần kiểm tra</p>
                            <p className="text-slate-300">
                                Socket CPU • Chipset • DDR4/DDR5
                            </p>
                            <p className="text-slate-300">
                                PCIe x16 • M.2/SATA • VRM
                            </p>
                            <p className="text-slate-300">
                                Form factor • USB/LAN/Wi-Fi/Audio
                            </p>
                            <br />
                            <p className="text-red-300">
                                Sai socket hoặc sai DDR là không lắp được.
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
        question: "Mainboard có vai trò chính là gì?",
        options: [
            "Chỉ dùng để làm máy chạy nhanh hơn",
            "Kết nối và điều phối các linh kiện trong máy tính",
            "Chỉ dùng để lưu dữ liệu",
            "Chỉ dùng để cấp hình ảnh ra màn hình",
        ],
        correct: 1,
        explanation:
            "Mainboard là bo mạch trung tâm giúp CPU, RAM, SSD, GPU, nguồn, USB, mạng, âm thanh và các linh kiện giao tiếp với nhau.",
    },
    {
        question: "Nếu CPU dùng socket AM5 thì nên chọn mainboard nào?",
        options: [
            "Mainboard AM4",
            "Mainboard LGA1700",
            "Mainboard AM5",
            "Mainboard bất kỳ miễn là cùng hãng",
        ],
        correct: 2,
        explanation:
            "CPU phải khớp socket. Ryzen AM5 cần mainboard AM5, không thể cắm vào AM4.",
    },
    {
        question: "Vì sao không nên chỉ chọn mainboard theo giá rẻ nhất?",
        options: [
            "Vì mainboard rẻ luôn làm hỏng CPU",
            "Vì mainboard rẻ có thể ít khe, VRM yếu, ít cổng, khó nâng cấp",
            "Vì mainboard rẻ không thể bật máy",
            "Vì mainboard rẻ không dùng được RAM trong mọi trường hợp",
        ],
        correct: 1,
        explanation:
            "Mainboard quá rẻ có thể ít khe M.2/PCIe, ít cổng, VRM yếu và khó nâng cấp về sau.",
    },
    {
        question: "Mainboard DDR4 có cắm được RAM DDR5 không?",
        options: [
            "Có, nếu cùng dung lượng",
            "Có, nếu cùng hãng",
            "Không, khe vật lý và chuẩn khác nhau",
            "Có, nếu cập nhật driver Windows",
        ],
        correct: 2,
        explanation:
            "DDR4 và DDR5 khác chuẩn và khác khe vật lý, không thể cắm lẫn.",
    },
    {
        question: "VRM trên mainboard ảnh hưởng nhiều đến điều gì?",
        options: [
            "Cấp điện ổn định cho CPU, nhất là CPU mạnh chạy tải nặng",
            "Dung lượng ổ SSD",
            "Số inch màn hình",
            "Tốc độ mạng Wi-Fi của nhà mạng",
        ],
        correct: 0,
        explanation:
            "VRM là mạch cấp điện cho CPU. CPU mạnh hoặc tải nặng lâu cần VRM tốt để ổn định và ít nóng hơn.",
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
                    <strong className="text-blue-400">
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
                <span className="text-blue-400">
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
                        className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu mainboard là trung tâm kết nối của máy tính. Tiếp
                theo là cấu tạo và các thành phần trên mainboard, để biết từng
                khu vực như socket CPU, khe RAM, chipset, VRM, PCIe, M.2 nằm ở
                đâu và dùng để làm gì.
            </p>
            <Link
                to="/phan-6-2"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
            >
                Bài tiếp theo: 6.2 — Cấu tạo và các thành phần trên Mainboard{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "blue" }) {
    const colorMap = {
        blue: "bg-blue-500/20 text-blue-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        pink: "bg-pink-500/20 text-pink-300",
        orange: "bg-orange-500/20 text-orange-300",
        red: "bg-red-500/20 text-red-300",
        rose: "bg-rose-500/20 text-rose-300",
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
        rose: "bg-rose-500/10 text-rose-300 border border-rose-500/20",
    };
    return map[color] || map.blue;
}
function softBorder(color) {
    const map = {
        blue: "bg-blue-500/5 border-blue-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
        rose: "bg-rose-500/5 border-rose-500/20",
    };
    return map[color] || map.blue;
}
function textColor(color) {
    const map = {
        blue: "text-blue-300",
        cyan: "text-cyan-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
        rose: "text-rose-300",
    };
    return map[color] || "text-blue-300";
}
