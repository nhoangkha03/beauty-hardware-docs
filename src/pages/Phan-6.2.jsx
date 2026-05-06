import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    Battery,
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
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shadow-lg shadow-indigo-500/10">
                            <Puzzle className="text-indigo-400" size={24} />
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
                    <div className="text-sm font-semibold text-indigo-300 bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/20">
                        Bài 6.2
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <CityMapAnalogy />
                <BoardLayoutMap />
                <OperationFlowSimulator />
                <ComponentExplorer />
                <SpecsExplorer />
                <HeaderGuide />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-indigo-300">
                        <BookOpen size={16} /> Phần 6: Mainboard — Motherboard
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Cấu tạo Mainboard
                        <span className="block text-indigo-400">
                            và các thành phần chính
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Nhìn mainboard sẽ bớt rối nếu chia nó thành từng khu
                        vực: socket CPU, khe RAM, VRM, PCIe, M.2/SATA, đầu
                        nguồn, I/O sau, header nội bộ, BIOS/UEFI và pin CMOS.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="Socket CPU" />
                        <Tag
                            icon={<MemoryStick size={16} />}
                            text="RAM Slots"
                        />
                        <Tag icon={<Zap size={16} />} text="VRM" />
                        <Tag icon={<Gamepad2 size={16} />} text="PCIe x16" />
                        <Tag icon={<HardDrive size={16} />} text="M.2 / SATA" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Cpu />}
                            label="Socket"
                            desc="Trung tâm điều hành"
                            color="indigo"
                            highlight
                        />
                        <HeroTile
                            icon={<MemoryStick />}
                            label="RAM"
                            desc="Khu làm việc tạm"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<PlugZap />}
                            label="Nguồn"
                            desc="24-pin + 8-pin CPU"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Usb />}
                            label="Headers"
                            desc="USB, fan, front panel"
                            color="cyan"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">
                            // Nhìn mainboard theo vùng
                        </p>
                        <p>Socket → RAM → PCIe → M.2/SATA</p>
                        <p className="text-indigo-300">
                            → Nguồn → I/O → Headers → BIOS/CMOS
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Nhận diện các thành phần vật lý quan trọng trên mainboard và biết vị trí tương đối của chúng.",
        "Hiểu luồng phối hợp: PSU cấp điện, VRM ổn định điện cho CPU, CPU/RAM/SSD/GPU trao đổi qua mainboard.",
        "Phân biệt socket CPU, khe RAM, chipset, VRM, PCIe x16/x1/x4, M.2, SATA, cổng nguồn, I/O sau và header nội bộ.",
        "Biết thông số cần chú ý của từng thành phần: DDR4/DDR5, PCIe Gen, số lane, M.2 Gen 3/4/5, VRM, BIOS Flashback.",
        "Tránh lỗi lắp máy phổ biến: quên dây CPU 8-pin, cắm RAM sai khe, hiểu nhầm cổng HDMI mainboard, cắm nhầm front panel.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="indigo"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-300 flex items-center justify-center font-bold mb-4">
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
                color="cyan"
                title="Khái niệm cốt lõi: cấu tạo mainboard là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Cấu tạo mainboard</strong> là
                    tập hợp các khu vực, khe cắm, cổng kết nối, mạch điện và
                    chip điều khiển được bố trí trên một bản mạch lớn để các
                    linh kiện có thể lắp vào và giao tiếp với nhau.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    <InfoPanel
                        icon={<Cpu />}
                        title="Khu xử lý"
                        points={[
                            "Socket CPU",
                            "VRM cấp điện",
                            "Khe RAM",
                            "Chipset",
                        ]}
                        color="indigo"
                    />
                    <InfoPanel
                        icon={<HardDrive />}
                        title="Khu lưu trữ & mở rộng"
                        points={[
                            "PCIe x16 cho GPU",
                            "PCIe x1/x4",
                            "M.2 SSD",
                            "SATA HDD/SSD",
                        ]}
                        color="emerald"
                    />
                    <InfoPanel
                        icon={<Usb />}
                        title="Khu kết nối & điều khiển"
                        points={[
                            "I/O sau",
                            "USB header",
                            "Fan header",
                            "Front Panel",
                            "BIOS/UEFI + CMOS",
                        ]}
                        color="orange"
                    />
                </div>
                <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    CPU + Socket • RAM Slots • Chipset • VRM • PCIe • M.2/SATA •
                    Power • I/O • Headers • BIOS/CMOS
                </div>
            </div>
        </section>
    );
}

function CityMapAnalogy() {
    const cards = [
        {
            icon: <Cpu />,
            title: "Socket CPU = trung tâm điều hành",
            desc: "Nơi CPU được lắp vào để điều phối toàn bộ hệ thống.",
            color: "indigo",
        },
        {
            icon: <MemoryStick />,
            title: "Khe RAM = khu làm việc tạm",
            desc: "Dữ liệu đang dùng được đặt ở đây để CPU truy cập nhanh.",
            color: "emerald",
        },
        {
            icon: <HardDrive />,
            title: "M.2/SATA = kho dữ liệu",
            desc: "Nơi gắn SSD NVMe, HDD hoặc SSD SATA để lưu dữ liệu lâu dài.",
            color: "orange",
        },
        {
            icon: <Gamepad2 />,
            title: "PCIe = đường cao tốc",
            desc: "Đường truyền tốc độ cao cho GPU, card mạng, sound card, capture card.",
            color: "purple",
        },
        {
            icon: <Zap />,
            title: "VRM = trạm điện",
            desc: "Ổn định điện trước khi cấp cho CPU, đặc biệt quan trọng với CPU mạnh.",
            color: "red",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: khu đô thị thu nhỏ"
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

function BoardLayoutMap() {
    const zones = [
        {
            key: "io",
            label: "I/O sau",
            icon: <Usb />,
            desc: "USB, LAN, Audio, HDMI/DP, Wi-Fi antenna",
            color: "cyan",
        },
        {
            key: "vrm",
            label: "VRM + tản",
            icon: <Zap />,
            desc: "Cấp điện ổn định cho CPU",
            color: "red",
        },
        {
            key: "cpu",
            label: "Socket CPU",
            icon: <Cpu />,
            desc: "Ô vuông lớn gần phía trên giữa",
            color: "indigo",
        },
        {
            key: "ram",
            label: "RAM Slots",
            icon: <MemoryStick />,
            desc: "2 hoặc 4 khe dài cạnh CPU",
            color: "emerald",
        },
        {
            key: "m2",
            label: "M.2 SSD",
            icon: <HardDrive />,
            desc: "Khe nhỏ nằm ngang, có ốc giữ SSD",
            color: "orange",
        },
        {
            key: "pcie",
            label: "PCIe x16",
            icon: <Gamepad2 />,
            desc: "Khe dài nhất để gắn GPU rời",
            color: "purple",
        },
        {
            key: "chipset",
            label: "Chipset",
            icon: <Settings />,
            desc: "Thường dưới tản nhiệt nhỏ ở nửa dưới main",
            color: "blue",
        },
        {
            key: "headers",
            label: "Headers",
            icon: <Puzzle />,
            desc: "Front panel, USB, Audio, Fan, RGB",
            color: "yellow",
        },
    ];
    const [active, setActive] = useState("cpu");
    const item = zones.find((z) => z.key === active);
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="blue"
                title="Bản đồ vị trí tương đối trên mainboard"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[1fr_0.9fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 font-mono text-xs md:text-sm text-slate-400 leading-7 overflow-x-auto">
                        <pre>{`+--------------------------------------------------+
| I/O sau       | VRM + tản nhiệt                  |
| USB LAN Audio | [Socket CPU]                     |
|               |                                  |
|               | [RAM Slot 1][RAM Slot 2]         |
|               | [RAM Slot 3][RAM Slot 4]         |
|                                                  |
|        [M.2 SSD Slot]                            |
|                                                  |
|        [PCIe x16 - GPU]                          |
|        [PCIe x1 / x4]                            |
|                                                  |
| [Chipset + tản nhiệt]        [SATA Ports]        |
|                                                  |
| Front Panel / USB Header / Audio / Fan Header    |
+--------------------------------------------------+`}</pre>
                    </div>
                    <div className="space-y-4">
                        <div
                            className={`${softBorder(item.color)} border rounded-3xl p-6`}
                        >
                            <div
                                className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                            >
                                {React.cloneElement(item.icon, { size: 32 })}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {item.label}
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {zones.map((z) => (
                                <button
                                    key={z.key}
                                    onClick={() => setActive(z.key)}
                                    className={`rounded-2xl border p-3 text-left text-sm font-bold transition-all ${active === z.key ? `${softBorder(z.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`}
                                >
                                    {z.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function OperationFlowSimulator() {
    const steps = [
        {
            icon: <PlugZap />,
            title: "PSU cấp điện",
            desc: "Điện đi vào mainboard qua đầu nguồn 24-pin và đầu CPU 8-pin/4+4-pin.",
        },
        {
            icon: <Zap />,
            title: "VRM điều áp cho CPU",
            desc: "VRM chuyển điện từ PSU thành điện áp phù hợp, ổn định cho CPU.",
        },
        {
            icon: <Cpu />,
            title: "CPU xử lý lệnh",
            desc: "CPU nhận lệnh và giao tiếp với RAM, SSD, GPU qua các đường truyền trên mainboard.",
        },
        {
            icon: <MemoryStick />,
            title: "RAM giữ dữ liệu tạm",
            desc: "Dữ liệu đang dùng được đưa vào RAM để CPU truy cập nhanh.",
        },
        {
            icon: <Settings />,
            title: "CPU/Chipset điều phối thiết bị",
            desc: "Dữ liệu đi đến SSD, GPU, USB, LAN, Audio qua CPU/chipset và lane trên mainboard.",
        },
        {
            icon: <Gamepad2 />,
            title: "GPU nhận dữ liệu qua PCIe x16",
            desc: "GPU xử lý hình ảnh và xuất ra màn hình.",
        },
        {
            icon: <Monitor />,
            title: "Thiết bị ngoại vi hoạt động",
            desc: "Màn hình, loa, mạng, USB, quạt và đèn case nhận tín hiệu phù hợp.",
        },
    ];
    const [active, setActive] = useState(0);
    const step = steps[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="purple"
                title="Các thành phần phối hợp ra sao?"
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
                <div className="mt-6 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    SSD NVMe M.2 → PCIe trên mainboard → CPU xử lý → RAM giữ tạm
                    → GPU nhận qua PCIe x16 → màn hình hiển thị
                </div>
            </div>
        </section>
    );
}

function ComponentExplorer() {
    const components = {
        socket: {
            icon: <Cpu />,
            title: "Socket CPU",
            recognize: "Ô vuông lớn gần phía trên giữa mainboard.",
            role: "Nơi gắn CPU.",
            note: "Phải đúng socket: AM4, AM5, LGA1700, LGA1851…",
            color: "indigo",
        },
        ram: {
            icon: <MemoryStick />,
            title: "Khe RAM / DIMM Slot",
            recognize: "Các khe dài nằm cạnh CPU, thường có 2 hoặc 4 khe.",
            role: "Gắn RAM DDR4 hoặc DDR5.",
            note: "Với 2 thanh RAM, thường cắm A2 + B2 để chạy dual channel.",
            color: "emerald",
        },
        chipset: {
            icon: <Settings />,
            title: "Chipset",
            recognize: "Chip dưới tản nhiệt nhỏ ở nửa dưới mainboard.",
            role: "Điều phối kết nối phụ và tính năng nền tảng.",
            note: "Tên chipset như B650, B760, X670, Z790.",
            color: "blue",
        },
        vrm: {
            icon: <Zap />,
            title: "VRM",
            recognize:
                "Cụm linh kiện quanh socket CPU, thường có heatsink kim loại.",
            role: "Cấp và ổn định điện cho CPU.",
            note: "CPU mạnh cần VRM tốt, có tản nhiệt VRM.",
            color: "red",
        },
        pcie: {
            icon: <Gamepad2 />,
            title: "PCIe x16 / x1 / x4",
            recognize:
                "Khe dài nhất thường dưới CPU là x16; khe ngắn hơn là x1/x4.",
            role: "Gắn GPU rời, card Wi-Fi, sound card, capture card, adapter.",
            note: "Cần xem chuẩn PCIe Gen và số lane hoạt động.",
            color: "purple",
        },
        m2: {
            icon: <HardDrive />,
            title: "M.2 và SATA",
            recognize:
                "M.2 là khe nhỏ nằm ngang có ốc; SATA là cụm cổng chữ L ở cạnh main.",
            role: "Gắn SSD NVMe, SSD SATA hoặc HDD SATA.",
            note: "Cần xem M.2 hỗ trợ PCIe Gen 3/4/5, có tản M.2 không.",
            color: "orange",
        },
        power: {
            icon: <PlugZap />,
            title: "Đầu nguồn 24-pin / CPU 8-pin",
            recognize:
                "24-pin ở cạnh phải; CPU 8-pin/4+4-pin thường ở góc trên.",
            role: "Nhận điện từ PSU cho mainboard và CPU.",
            note: "Quên cắm CPU 8-pin là lỗi người mới rất hay gặp.",
            color: "yellow",
        },
        io: {
            icon: <Usb />,
            title: "I/O sau",
            recognize: "Cụm cổng lộ ra sau case.",
            role: "USB, LAN, Audio, HDMI/DP, Wi-Fi antenna, BIOS Flashback.",
            note: "HDMI/DP trên mainboard chỉ xuất hình khi CPU có iGPU.",
            color: "cyan",
        },
        headers: {
            icon: <Puzzle />,
            title: "Headers nội bộ",
            recognize:
                "Các chân nhỏ có chữ CPU_FAN, SYS_FAN, JFP1, JAUD1, USB, RGB.",
            role: "Kết nối nút nguồn, reset, đèn case, USB trước, audio trước, quạt, RGB.",
            note: "Front Panel Header dễ cắm nhầm nhất.",
            color: "pink",
        },
        bios: {
            icon: <Battery />,
            title: "BIOS/UEFI chip + Pin CMOS",
            recognize: "Chip nhỏ trên main và viên pin tròn CR2032.",
            role: "Lưu firmware khởi động và giữ giờ/cấu hình BIOS.",
            note: "Hết pin CMOS có thể sai giờ, lỗi boot hoặc mất cấu hình.",
            color: "emerald",
        },
    };
    const [active, setActive] = useState("socket");
    const item = components[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Explorer: từng thành phần trên mainboard"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    {Object.entries(components).map(([key, c]) => (
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
                    <div className="grid sm:grid-cols-3 gap-3">
                        <InfoCard
                            label="Nhận diện"
                            value={item.recognize}
                            color={item.color}
                        />
                        <InfoCard
                            label="Vai trò"
                            value={item.role}
                            color="blue"
                        />
                        <InfoCard
                            label="Lưu ý thực tế"
                            value={item.note}
                            color="orange"
                        />
                    </div>
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
            detail: "Socket là kiểu chân/khe để CPU gắn vào mainboard.",
            impact: "AM4 dùng Ryzen đời cũ DDR4; AM5 dùng Ryzen 7000/8000/9000 DDR5; LGA1700 dùng Intel Core gen 12/13/14; LGA1851 dùng một số nền tảng Intel mới hơn.",
        },
        ram: {
            icon: <MemoryStick />,
            title: "Khe RAM",
            detail: "Mainboard quyết định DDR4/DDR5, 2 khe hay 4 khe, dung lượng tối đa và tốc độ hỗ trợ.",
            impact: "Cắm đúng khe A2+B2 với 2 thanh RAM thường giúp chạy dual channel tốt hơn.",
        },
        vrm: {
            icon: <Zap />,
            title: "VRM",
            detail: "VRM chuyển điện từ PSU thành điện áp phù hợp và ổn định cho CPU.",
            impact: "Core i7/Ryzen 7 trở lên nên chọn main có VRM khá và tản nhiệt; Core i9/Ryzen 9 nên dùng main cao cấp hơn.",
        },
        pcie: {
            icon: <Gamepad2 />,
            title: "Khe PCIe",
            detail: "PCIe là đường truyền tốc độ cao cho GPU và card mở rộng.",
            impact: "GPU thường dùng PCIe x16 vật lý, nhưng băng thông thực tế tùy PCIe Gen 3/4/5 và số lane.",
        },
        storage: {
            icon: <HardDrive />,
            title: "M.2 / SATA",
            detail: "SATA chậm hơn nhưng hữu ích cho HDD/SSD 2.5 inch; M.2 NVMe PCIe 3/4/5 nhanh hơn nhiều.",
            impact: "Hai main cùng có 2 khe M.2 nhưng có thể khác Gen, có/không tản M.2 và cách chia lane.",
        },
        io: {
            icon: <Usb />,
            title: "Cổng I/O sau",
            detail: "USB-A, USB-C, LAN RJ45, Audio 3.5mm, HDMI/DP, Wi-Fi antenna, BIOS Flashback.",
            impact: "Ảnh hưởng trực tiếp số thiết bị có thể cắm và trải nghiệm dùng hằng ngày.",
        },
    };
    const [active, setActive] = useState("socket");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số kỹ thuật quan trọng của từng thành phần"
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

function HeaderGuide() {
    const headers = [
        {
            code: "CPU_FAN",
            meaning: "Cắm quạt tản CPU",
            note: "Nên cắm bắt buộc, nếu không main có thể báo lỗi CPU fan.",
        },
        {
            code: "SYS_FAN",
            meaning: "Cắm quạt case",
            note: "Giúp case thoáng, GPU/CPU mát hơn.",
        },
        {
            code: "JFP1 / F_PANEL",
            meaning: "Nút nguồn, reset, HDD LED, Power LED",
            note: "Dễ cắm nhầm nhất, nên xem manual.",
        },
        {
            code: "JAUD1 / AAFP",
            meaning: "Audio mặt trước case",
            note: "Dùng cho jack tai nghe/micro phía trước.",
        },
        {
            code: "USB 2.0 / USB 3.x Header",
            meaning: "USB mặt trước case",
            note: "Header khác nhau, không ép cắm sai chiều.",
        },
        {
            code: "ARGB / RGB",
            meaning: "Đèn LED RGB",
            note: "ARGB 5V 3-pin khác RGB 12V 4-pin, cắm sai có thể hỏng LED.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="cyan"
                title="Header nội bộ: các chữ nhỏ trên mainboard"
                icon={<Puzzle />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[860px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Chữ in trên main</th>
                            <th className="p-4">Dùng để làm gì?</th>
                            <th className="p-4">Lưu ý</th>
                        </tr>
                    </thead>
                    <tbody>
                        {headers.map((h) => (
                            <tr
                                key={h.code}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-cyan-300 font-extrabold font-mono">
                                    {h.code}
                                </td>
                                <td className="p-4 text-slate-300">
                                    {h.meaning}
                                </td>
                                <td className="p-4 text-slate-300">{h.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-cyan-300">Mẹo:</strong> manual của
                mainboard là “bản đồ thật”. Nó chỉ rõ RAM nên cắm khe nào, Front
                Panel Header nằm đâu, M.2 nào nhanh hơn và cổng SATA nào bị vô
                hiệu khi dùng M.2.
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Sparkles />,
            title: "ASUS PRIME B650M-A WIFI II",
            subtitle: "AM5, B650, mATX, DDR5",
            color: "emerald",
            points: [
                "Socket AM5 cho Ryzen 7000/8000/9000",
                "4 khe RAM DDR5",
                "2 khe M.2 và 4 cổng SATA",
                "LAN 2.5GbE + Wi-Fi",
                "M.2 PCIe 5.0 tùy CPU",
            ],
            lesson: "Một main AM5 tầm trung dễ hiểu: đủ RAM, SSD, mạng và nâng cấp cho Ryzen 5/Ryzen 7.",
        },
        {
            icon: <Gamepad2 />,
            title: "MSI B760M GAMING PLUS WIFI",
            subtitle: "Intel B760, LGA1700, DDR5",
            color: "blue",
            points: [
                "Hỗ trợ Intel Core gen 14/13/12",
                "DDR5 dual channel 6800+ MHz OC",
                "VRM 12+1 Duet Rail Power System",
                "Đầu cấp CPU 8-pin + 4-pin",
                "Extended heatsink cho VRM",
            ],
            lesson: "Main B760 DDR5 phù hợp Intel i5/i7 non-K, gaming và làm việc đa nhiệm trong form mATX.",
        },
        {
            icon: <Cpu />,
            title: "GIGABYTE B650M DS3H",
            subtitle: "AM5, B650, DDR5, mATX",
            color: "orange",
            points: [
                "Socket AM5",
                "VRM kỹ thuật số 6+2+1 phase",
                "4 khe DIMM DDR5",
                "2 khe PCIe 4.0 x4 M.2",
                "LAN 2.5GbE và Q-Flash Plus",
            ],
            lesson: "Lựa chọn AM5 tiết kiệm hơn main cao cấp, đủ tốt cho nhiều build Ryzen phổ thông/tầm trung.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="pink"
                title="Ví dụ thực tế: nhìn cấu tạo để hiểu main"
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
        cpuPower: {
            icon: <PlugZap />,
            title: "Máy không boot sau khi lắp",
            answer: "Kiểm tra dây 24-pin ATX và đặc biệt dây CPU 8-pin/4+4-pin ở góc trên mainboard. Người mới rất hay quên dây CPU.",
            color: "orange",
        },
        ram: {
            icon: <MemoryStick />,
            title: "Cắm 2 thanh RAM",
            answer: "Với main 4 khe, thường cắm A2 + B2 theo manual để chạy dual channel. Đừng cắm ngẫu nhiên.",
            color: "emerald",
        },
        display: {
            icon: <Monitor />,
            title: "Cổng HDMI mainboard không ra hình",
            answer: "Cổng HDMI/DP trên main chỉ xuất hình khi CPU có iGPU. CPU Intel đuôi F thường cần GPU rời.",
            color: "cyan",
        },
        front: {
            icon: <Power />,
            title: "Bấm nút nguồn case không chạy",
            answer: "Kiểm tra Front Panel Header: Power SW, Reset SW, HDD LED, Power LED. Nên xem manual hoặc chữ in trên bo mạch.",
            color: "red",
        },
        m2: {
            icon: <HardDrive />,
            title: "Lắp SSD M.2",
            answer: "Kiểm tra khe M.2 hỗ trợ PCIe Gen mấy, có cần tháo tản M.2 không, và có vô hiệu cổng SATA nào không.",
            color: "blue",
        },
    };
    const [active, setActive] = useState("front");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: xử lý tình huống khi lắp mainboard"
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
            wrong: "Chỉ cắm 24-pin là đủ",
            right: "Mainboard cần 24-pin ATX và CPU thường cần thêm 8-pin/4+4-pin EPS. Quên dây CPU có thể không boot hoặc không lên hình.",
        },
        {
            wrong: "RAM cắm khe nào cũng như nhau",
            right: "Với 2 thanh RAM trên main 4 khe, thường nên cắm A2 + B2 để chạy dual channel. Hãy xem manual.",
        },
        {
            wrong: "Cổng HDMI trên mainboard luôn xuất hình",
            right: "Cổng hình trên mainboard chỉ hoạt động khi CPU có iGPU. CPU Intel đuôi F thường không có iGPU.",
        },
        {
            wrong: "Front Panel Header cắm đại cũng được",
            right: "Power SW, Reset SW, HDD LED, Power LED cần cắm đúng chân. Sai Power SW thì bấm nút nguồn có thể không chạy.",
        },
        {
            wrong: "Hai main cùng 2 khe M.2 là giống nhau",
            right: "Có thể khác PCIe Gen, tản M.2, số lane, thứ tự ưu tiên, hoặc vô hiệu SATA khi dùng M.2.",
        },
    ];
    const tips = [
        "Khi nhìn mainboard, xác định 5 vùng trước: Socket CPU → Khe RAM → PCIe x16 → M.2/SATA → Cổng nguồn.",
        "Luôn tải manual trước khi lắp máy.",
        "Đọc chữ in nhỏ trên main: CPU_FAN, SYS_FAN, JFP1, JAUD1, ATX_PWR, CPU_PWR, M2_1, SATA1.",
        "Không ép cắm dây nếu thấy sai chiều hoặc sai chân.",
        "Kiểm tra CPU có iGPU không nếu định xuất hình qua cổng mainboard.",
        "ARGB 5V 3-pin khác RGB 12V 4-pin, không cắm lẫn.",
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
                        <Lightbulb /> Mẹo lắp máy
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
                        <span className="bg-indigo-500/20 text-indigo-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-indigo-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                Cấu tạo mainboard = các khu vực + khe + cổng +
                                mạch + chip
                            </p>
                            <br />
                            <p className="text-slate-500"># Nhận diện nhanh</p>
                            <p className="text-slate-300">
                                Socket CPU • RAM Slots • VRM • Chipset
                            </p>
                            <p className="text-slate-300">
                                PCIe x16/x1/x4 • M.2 • SATA
                            </p>
                            <p className="text-slate-300">
                                24-pin • 8-pin CPU • I/O sau • Headers
                            </p>
                            <p className="text-slate-300">
                                BIOS/UEFI chip • Pin CMOS
                            </p>
                            <br />
                            <p className="text-red-300">
                                Manual là bản đồ quan trọng nhất khi lắp
                                mainboard.
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
        question: "Thành phần nào trên mainboard dùng để gắn CPU?",
        options: ["Khe PCIe", "Socket CPU", "Cổng SATA", "Front Panel Header"],
        correct: 1,
        explanation: "Socket CPU là khu vực để gắn CPU vào mainboard.",
    },
    {
        question: "VRM trên mainboard có nhiệm vụ gì?",
        options: [
            "Lưu dữ liệu lâu dài",
            "Xuất hình ra màn hình",
            "Cấp và ổn định điện cho CPU",
            "Tăng dung lượng RAM",
        ],
        correct: 2,
        explanation:
            "VRM là mạch điều áp, chuyển điện từ PSU thành điện áp phù hợp và ổn định cho CPU.",
    },
    {
        question: "Khe PCIe x16 thường dùng để gắn linh kiện nào?",
        options: ["RAM", "CPU", "GPU rời", "HDD SATA"],
        correct: 2,
        explanation:
            "GPU rời thường được gắn vào khe PCIe x16, là khe dài nhất trên mainboard.",
    },
    {
        question: "Cổng Front Panel Header dùng để kết nối gì?",
        options: [
            "Nút nguồn, reset, đèn LED của case",
            "Cáp mạng LAN",
            "Màn hình HDMI",
            "Dây nguồn ổ cứng SATA",
        ],
        correct: 0,
        explanation:
            "Front Panel Header kết nối các dây nhỏ từ case như Power SW, Reset SW, HDD LED và Power LED.",
    },
    {
        question: "Vì sao cổng HDMI trên mainboard có thể không xuất hình?",
        options: [
            "Vì RAM quá nhiều",
            "Vì CPU không có iGPU",
            "Vì SSD quá nhanh",
            "Vì case quá rộng",
        ],
        correct: 1,
        explanation:
            "Cổng HDMI/DisplayPort trên mainboard chỉ xuất hình khi CPU có đồ họa tích hợp iGPU.",
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
                    <strong className="text-indigo-400">
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
                <span className="text-indigo-400">
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
                        className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã biết cấu tạo và vị trí các thành phần trên mainboard.
                Tiếp theo là chipset và vai trò điều phối, vì chipset quyết định
                rất nhiều thứ như số cổng USB, số khe M.2, PCIe, SATA, khả năng
                ép xung và phân khúc của mainboard.
            </p>
            <Link
                to="/phan-6-3"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20"
            >
                Bài tiếp theo: 6.3 — Chipset và vai trò điều phối{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "indigo" }) {
    const colorMap = {
        indigo: "bg-indigo-500/20 text-indigo-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
        blue: "bg-blue-500/20 text-blue-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-indigo-500/10 border-indigo-400/50" : softBorder(color)}`}
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
        indigo: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.indigo;
}
function softBorder(color) {
    const map = {
        indigo: "bg-indigo-500/5 border-indigo-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.indigo;
}
function textColor(color) {
    const map = {
        indigo: "text-indigo-300",
        cyan: "text-cyan-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-indigo-300";
}
