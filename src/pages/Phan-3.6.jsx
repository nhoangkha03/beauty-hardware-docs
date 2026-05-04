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
    Gauge,
    HardDrive,
    Keyboard,
    Laptop,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    PackageCheck,
    PlugZap,
    Puzzle,
    RefreshCcw,
    Search,
    Settings,
    ShieldCheck,
    Usb,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-purple-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center shadow-lg shadow-purple-500/10">
                            <ShieldCheck
                                className="text-purple-400"
                                size={24}
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 3: Bộ nhớ — Memory
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-purple-300 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">
                        Bài 3.6
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <GuidebookAnalogy />
                <BootFlowSimulator />
                <PostDiagnostics />
                <ComparisonSection />
                <UefiFeatureExplorer />
                <SpecsExplorer />
                <RealExamples />
                <TroubleshootingLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-purple-300">
                        <BookOpen size={16} /> Phần 3: Bộ nhớ — Memory
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        ROM, BIOS
                        <span className="block text-purple-400">và UEFI</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Trước khi Windows hoặc Linux chạy, máy tính cần firmware
                        trên mainboard để đánh thức phần cứng, kiểm tra
                        CPU/RAM/GPU/SSD và tìm thiết bị boot.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<Database size={16} />}
                            text="ROM / Flash ROM"
                        />
                        <Tag
                            icon={<ShieldCheck size={16} />}
                            text="BIOS / UEFI"
                        />
                        <Tag icon={<Zap size={16} />} text="POST" />
                        <Tag
                            icon={<HardDrive size={16} />}
                            text="Boot Priority"
                        />
                        <Tag icon={<Settings size={16} />} text="XMP / EXPO" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="space-y-3">
                        <HeroCard
                            icon={<PlugZap />}
                            label="Power On"
                            desc="PSU cấp điện cho mainboard"
                            color="yellow"
                        />
                        <HeroCard
                            icon={<ShieldCheck />}
                            label="BIOS / UEFI"
                            desc="Firmware chạy trước hệ điều hành"
                            color="purple"
                            highlight
                        />
                        <HeroCard
                            icon={<Cpu />}
                            label="POST"
                            desc="Kiểm tra CPU, RAM, GPU, SSD"
                            color="cyan"
                        />
                        <HeroCard
                            icon={<HardDrive />}
                            label="Bootloader"
                            desc="Nạp hệ điều hành từ SSD/HDD/USB"
                            color="emerald"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Thứ tự</p>
                        <p>Power → Firmware → POST → Boot device</p>
                        <p className="text-purple-300">→ Bootloader → OS</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu ROM, BIOS và UEFI là gì, khác RAM/SSD ở điểm nào.",
        "Nắm chuỗi khởi động: bấm nguồn → firmware → POST → bootloader → hệ điều hành.",
        "Biết POST kiểm tra CPU, RAM, GPU, SSD, bàn phím và thiết bị ngoại vi ra sao.",
        "Phân biệt BIOS Legacy và UEFI, UEFI + GPT, Legacy + MBR.",
        "Biết các mục UEFI thường gặp: Boot Priority, XMP/EXPO, Secure Boot, TPM, Fan Control, BIOS Update.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="purple"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-purple-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-300 flex items-center justify-center font-bold mb-4">
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
                title="Khái niệm cốt lõi: ROM, BIOS, UEFI là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                    <ConceptCard
                        icon={<Database />}
                        title="ROM"
                        subtitle="Read-Only Memory"
                        desc="Bộ nhớ dùng để lưu chương trình quan trọng mà máy cần ngay khi bật nguồn. Dữ liệu thường không mất khi tắt máy."
                        color="cyan"
                    />
                    <ConceptCard
                        icon={<ShieldCheck />}
                        title="BIOS"
                        subtitle="Basic Input/Output System"
                        desc="Firmware đời cũ hơn, kiểm tra phần cứng, khởi tạo thiết bị cơ bản, tìm ổ boot và chuyển quyền cho hệ điều hành."
                        color="purple"
                    />
                    <ConceptCard
                        icon={<Settings />}
                        title="UEFI"
                        subtitle="Unified Extensible Firmware Interface"
                        desc="Chuẩn firmware hiện đại hơn BIOS Legacy, hỗ trợ giao diện tốt hơn, Secure Boot, TPM, GPT và quản lý boot linh hoạt."
                        color="emerald"
                    />
                </div>
                <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-cyan-300">Nói đời thường:</strong>{" "}
                    RAM là giấy nháp, SSD là tủ tài liệu, còn ROM/Firmware là
                    quyển hướng dẫn khởi động được gắn sẵn trong thiết bị.
                </div>
            </div>
        </section>
    );
}

function GuidebookAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: quyển hướng dẫn khởi động máy"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                    <AnalogyCard
                        icon={<MemoryStick />}
                        title="RAM = giấy nháp"
                        desc="Dữ liệu đang làm việc. Tắt máy là mất nếu chưa lưu."
                        color="emerald"
                    />
                    <AnalogyCard
                        icon={<HardDrive />}
                        title="SSD = tủ tài liệu"
                        desc="Lưu Windows, phần mềm, game và file lâu dài."
                        color="orange"
                    />
                    <AnalogyCard
                        icon={<ShieldCheck />}
                        title="ROM/Firmware = hướng dẫn khởi động"
                        desc="Chỉ máy cách kiểm tra phần cứng và tìm hệ điều hành trước khi Windows chạy."
                        color="purple"
                    />
                </div>
            </div>
        </section>
    );
}

function BootFlowSimulator() {
    const steps = [
        {
            icon: <PlugZap />,
            title: "Bấm nút nguồn",
            desc: "PSU cấp điện cho mainboard và các linh kiện chính.",
            color: "yellow",
        },
        {
            icon: <Cpu />,
            title: "CPU bắt đầu chạy firmware",
            desc: "CPU chạy mã khởi động trong chip BIOS/UEFI trên mainboard.",
            color: "cyan",
        },
        {
            icon: <Zap />,
            title: "POST",
            desc: "BIOS/UEFI kiểm tra CPU, RAM, GPU, SSD, bàn phím và thiết bị ngoại vi.",
            color: "purple",
        },
        {
            icon: <HardDrive />,
            title: "Tìm thiết bị boot",
            desc: "Firmware tìm ổ boot theo Boot Priority: SSD, HDD, USB hoặc mạng.",
            color: "orange",
        },
        {
            icon: <Workflow />,
            title: "Nạp bootloader",
            desc: "Bootloader từ SSD/HDD/USB được nạp và bắt đầu quá trình chạy hệ điều hành.",
            color: "emerald",
        },
        {
            icon: <Monitor />,
            title: "Hệ điều hành chạy",
            desc: "Windows/Linux/macOS bắt đầu kiểm soát hệ thống và nạp driver, dịch vụ, giao diện.",
            color: "blue",
        },
    ];
    const [active, setActive] = useState(0);
    const item = steps[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Máy tính khởi động như thế nào?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[320px] flex flex-col justify-between">
                        <div>
                            <div
                                className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                            >
                                {React.cloneElement(item.icon, { size: 32 })}
                            </div>
                            <p className="text-purple-300 text-sm font-bold mb-2">
                                Bước {active + 1}/{steps.length}
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {item.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {item.desc}
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
                                className={`w-full flex items-center gap-4 p-3 rounded-2xl border text-left transition-all ${active === i ? `${softBorder(s.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`}
                            >
                                <div
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${active === i ? badgeColor(s.color) : "bg-slate-900 text-slate-500"}`}
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

function PostDiagnostics() {
    const items = [
        { label: "CPU", desc: "CPU hoạt động không?", color: "cyan" },
        { label: "DRAM", desc: "RAM có nhận không?", color: "emerald" },
        { label: "VGA", desc: "GPU có xuất hình không?", color: "purple" },
        {
            label: "BOOT",
            desc: "Có ổ boot / bootloader không?",
            color: "orange",
        },
    ];
    const signals = [
        ["Tiếng beep", "1 beep, nhiều beep liên tục"],
        ["Debug LED", "CPU / DRAM / VGA / BOOT"],
        ["Debug code", "00, A2, 55, d6..."],
        ["Thông báo màn hình", "No bootable device, CPU fan error"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="POST là gì?"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">POST</strong> là viết tắt của{" "}
                    <strong className="text-blue-300">
                        Power-On Self-Test
                    </strong>
                    , nghĩa là quá trình tự kiểm tra khi bật nguồn.
                </p>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                    {items.map((item) => (
                        <div
                            key={item.label}
                            className={`${softBorder(item.color)} border rounded-3xl p-5 text-center`}
                        >
                            <div
                                className={`${badgeColor(item.color)} w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center font-black`}
                            >
                                {item.label}
                            </div>
                            <p className="text-sm text-slate-300">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                    {signals.map(([name, example]) => (
                        <div
                            key={name}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-4"
                        >
                            <p className="text-white font-bold">{name}</p>
                            <p className="text-slate-400 text-sm mt-1">
                                {example}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ComparisonSection() {
    const rows = [
        ["Đời công nghệ", "Cũ", "Mới"],
        [
            "Giao diện",
            "Đơn giản, thường chỉ bàn phím",
            "Có thể có giao diện đồ họa, dùng chuột",
        ],
        ["Kiểu phân vùng thường dùng", "MBR", "GPT"],
        ["Hỗ trợ ổ lớn", "Hạn chế hơn", "Tốt hơn"],
        ["Bảo mật", "Ít tính năng hơn", "Có Secure Boot"],
        ["Máy hiện đại", "Ít dùng dần", "Phổ biến"],
    ];
    const memoryRows = [
        [
            "ROM / Flash ROM",
            "Lưu firmware khởi động",
            "Không",
            "Không thường xuyên",
            "Chip BIOS/UEFI",
        ],
        [
            "RAM",
            "Chứa dữ liệu chương trình đang chạy",
            "Có",
            "Có",
            "DDR4, DDR5",
        ],
        [
            "SSD/HDD",
            "Lưu hệ điều hành, app, file",
            "Không",
            "Có",
            "NVMe SSD, SATA SSD, HDD",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="So sánh: ROM/RAM/SSD và BIOS Legacy/UEFI"
                icon={<Layers3 />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                    <h3 className="text-white font-bold mb-4">ROM, RAM, SSD</h3>
                    <table className="w-full min-w-[620px] text-sm">
                        <thead>
                            <tr className="text-left text-slate-400">
                                <th className="p-3">Thành phần</th>
                                <th className="p-3">Mục đích</th>
                                <th className="p-3">Tắt máy mất?</th>
                                <th className="p-3">Nâng cấp?</th>
                                <th className="p-3">Ví dụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {memoryRows.map((r) => (
                                <tr
                                    key={r[0]}
                                    className="border-t border-slate-800"
                                >
                                    <td className="p-3 text-cyan-300 font-bold">
                                        {r[0]}
                                    </td>
                                    <td className="p-3 text-slate-300">
                                        {r[1]}
                                    </td>
                                    <td className="p-3 text-slate-300">
                                        {r[2]}
                                    </td>
                                    <td className="p-3 text-slate-300">
                                        {r[3]}
                                    </td>
                                    <td className="p-3 text-slate-300">
                                        {r[4]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                    <h3 className="text-white font-bold mb-4">
                        BIOS Legacy vs UEFI
                    </h3>
                    <table className="w-full min-w-[520px] text-sm">
                        <thead>
                            <tr className="text-left text-slate-400">
                                <th className="p-3">Tiêu chí</th>
                                <th className="p-3">BIOS Legacy</th>
                                <th className="p-3">UEFI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((r) => (
                                <tr
                                    key={r[0]}
                                    className="border-t border-slate-800"
                                >
                                    <td className="p-3 text-white font-bold">
                                        {r[0]}
                                    </td>
                                    <td className="p-3 text-slate-300">
                                        {r[1]}
                                    </td>
                                    <td className="p-3 text-emerald-300">
                                        {r[2]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function UefiFeatureExplorer() {
    const features = {
        boot: {
            icon: <HardDrive />,
            title: "Boot Priority",
            desc: "Chọn ổ hoặc USB nào được boot trước.",
            example: "SSD NVMe chứa Windows thường nên đứng đầu.",
        },
        xmp: {
            icon: <MemoryStick />,
            title: "XMP / EXPO",
            desc: "Bật profile RAM để chạy đúng tốc độ quảng cáo.",
            example:
                "RAM DDR5-6000 có thể đang chạy 4800 nếu chưa bật profile.",
        },
        secure: {
            icon: <ShieldCheck />,
            title: "Secure Boot",
            desc: "Chỉ cho bootloader đáng tin cậy khởi động.",
            example:
                "Hữu ích cho Windows 11 và chống một số mã độc boot-level.",
        },
        tpm: {
            icon: <Cpu />,
            title: "TPM / fTPM / PTT",
            desc: "Hỗ trợ bảo mật phần cứng và yêu cầu Windows 11.",
            example: "AMD fTPM, Intel PTT.",
        },
        fan: {
            icon: <Gauge />,
            title: "Fan Control",
            desc: "Chỉnh tốc độ quạt theo nhiệt độ.",
            example: "Cân bằng giữa mát và êm.",
        },
        sata: {
            icon: <HardDrive />,
            title: "SATA Mode",
            desc: "Chọn AHCI/RAID cho ổ SATA.",
            example: "Đổi sai chế độ có thể làm OS không boot.",
        },
        bar: {
            icon: <Puzzle />,
            title: "Resizable BAR",
            desc: "Tối ưu giao tiếp CPU-GPU trong một số cấu hình.",
            example: "Có thể tăng hiệu năng nhẹ trong vài game/hệ thống.",
        },
        flash: {
            icon: <RefreshCcw />,
            title: "BIOS Update",
            desc: "Cập nhật firmware mainboard.",
            example: "ASUS EZ Flash, MSI M-Flash, Gigabyte Q-Flash.",
        },
    };
    const [active, setActive] = useState("boot");
    const item = features[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Các mục thường thấy trong UEFI"
                icon={<Settings />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(features).map(([key, f]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center transition-all ${active === key ? "bg-yellow-500 text-slate-950" : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}
                        >
                            {React.cloneElement(f.icon, { size: 20 })}
                            <span className="font-bold text-xs">{f.title}</span>
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
                        <p>{item.desc}</p>
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-yellow-300">Ví dụ:</strong>{" "}
                            {item.example}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = [
        {
            icon: <Database />,
            title: "Flash ROM size",
            desc: "Chip nhớ nhỏ lưu firmware, ví dụ 128 Mb Flash ROM. Mb là megabit, 128 Mb ≈ 16 MB.",
            color: "cyan",
        },
        {
            icon: <RefreshCcw />,
            title: "BIOS/UEFI version",
            desc: "Phiên bản mới có thể hỗ trợ CPU mới, sửa lỗi RAM/boot, vá bảo mật hoặc thêm tính năng.",
            color: "purple",
        },
        {
            icon: <HardDrive />,
            title: "Boot Mode",
            desc: "UEFI thường đi với GPT; Legacy/CSM thường đi với MBR. Máy đời mới nên ưu tiên UEFI + GPT.",
            color: "emerald",
        },
        {
            icon: <ShieldCheck />,
            title: "Secure Boot",
            desc: "Giúp đảm bảo máy chỉ khởi động từ bootloader đáng tin cậy; đôi khi cần tạm tắt khi dùng công cụ cứu hộ.",
            color: "blue",
        },
        {
            icon: <Usb />,
            title: "BIOS Flashback",
            desc: "Một số mainboard cập nhật BIOS bằng USB, đôi khi không cần CPU/RAM. Tên gọi tùy hãng: FlashBack, Q-Flash Plus, M-Flash.",
            color: "orange",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="blue"
                title="Thông số kỹ thuật quan trọng"
                icon={<BookOpen />}
            />
            <div className="grid md:grid-cols-5 gap-4">
                {specs.map((s) => (
                    <div
                        key={s.title}
                        className={`${softBorder(s.color)} border rounded-3xl p-5`}
                    >
                        <div
                            className={`w-12 h-12 rounded-2xl ${badgeColor(s.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(s.icon, { size: 24 })}
                        </div>
                        <h3 className="text-white font-bold mb-2">{s.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            {s.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Monitor />,
            title: "ASUS PRIME B760M-A AX",
            subtitle: "UEFI AMI BIOS cho nền tảng Intel LGA1700",
            color: "cyan",
            points: [
                "Hỗ trợ CPU Intel thế hệ 14/13/12 tùy model/BIOS",
                "Có PCIe 4.0",
                "Có khe M.2 cho SSD NVMe",
                "Thông số firmware có thể ghi 128 Mb Flash ROM",
                "Vào UEFI để bật XMP và chọn SSD boot đầu tiên",
            ],
            lesson: "Mainboard hiện đại dùng UEFI để nhận CPU/RAM/SSD, cấu hình boot và bật profile RAM.",
        },
        {
            icon: <Cpu />,
            title: "MSI MAG B550 TOMAHAWK",
            subtitle: "Mainboard AMD AM4 phổ biến",
            color: "purple",
            points: [
                "Nền tảng B550 cho Ryzen",
                "Có thể cần BIOS phù hợp để nhận CPU đời mới",
                "Hỗ trợ DDR4 Dual Channel",
                "Có M-Flash/BIOS update tùy phiên bản",
                "Cần kiểm tra đúng model khi tải BIOS",
            ],
            lesson: "Khi CPU đời mới hơn mainboard, cập nhật BIOS có thể là điều kiện để máy boot được.",
        },
        {
            icon: <MemoryStick />,
            title: "Bật XMP/EXPO trong UEFI",
            subtitle: "RAM chạy đúng tốc độ quảng cáo",
            color: "emerald",
            points: [
                "Mua RAM DDR5-6000",
                "Máy có thể chạy mặc định 4800",
                "Vào UEFI tìm XMP/EXPO",
                "Save & Exit",
                "Kiểm tra lại tốc độ RAM trong Windows/BIOS",
            ],
            lesson: "Không bật XMP/EXPO thì RAM tốc độ cao có thể chỉ chạy ở mức mặc định JEDEC thấp hơn.",
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

function TroubleshootingLab() {
    const scenarios = {
        noboot: {
            icon: <HardDrive />,
            title: "No bootable device",
            answer: "Kiểm tra Boot Priority, ổ SSD có được nhận không, boot mode UEFI/Legacy có đúng không, ổ đã có bootloader chưa.",
            color: "orange",
        },
        ram: {
            icon: <MemoryStick />,
            title: "Lắp RAM mới không vào Windows",
            answer: "Kiểm tra POST debug LED DRAM, cắm lại RAM, dùng đúng khe, tắt XMP/EXPO thử, cập nhật BIOS nếu cần.",
            color: "emerald",
        },
        xmp: {
            icon: <Gauge />,
            title: "RAM 6000 chỉ chạy 4800",
            answer: "Vào UEFI bật XMP/EXPO. Nếu không ổn định, kiểm tra CPU/mainboard hỗ trợ tốc độ đó không hoặc giảm tốc độ.",
            color: "blue",
        },
        update: {
            icon: <RefreshCcw />,
            title: "Cần update BIOS",
            answer: "Tải đúng BIOS theo đúng model mainboard, đọc release notes, dùng nguồn ổn định và không tắt máy khi đang flash.",
            color: "purple",
        },
        secure: {
            icon: <ShieldCheck />,
            title: "USB cứu hộ không boot",
            answer: "Kiểm tra Secure Boot, boot mode, định dạng USB UEFI/GPT hoặc Legacy/MBR tùy công cụ.",
            color: "cyan",
        },
    };
    const [active, setActive] = useState("noboot");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: lỗi boot thường gặp"
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
                            Gợi ý kiểm tra:
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
            wrong: "BIOS/UEFI là Windows",
            right: "BIOS/UEFI chạy trước hệ điều hành. Nó kiểm tra phần cứng và tìm ổ chứa hệ điều hành.",
        },
        {
            wrong: "Cập nhật BIOS lúc nào cũng tốt",
            right: "Chỉ nên cập nhật khi cần hỗ trợ CPU mới, sửa lỗi, vá bảo mật hoặc nhà sản xuất khuyến nghị.",
        },
        {
            wrong: "Tắt máy giữa lúc update BIOS cũng không sao",
            right: "Sai nghiêm trọng. Mất điện khi flash BIOS có thể làm mainboard không boot được.",
        },
        {
            wrong: "Không thấy SSD trong boot menu là SSD hỏng",
            right: "Có thể do boot mode sai, ổ chưa có bootloader, Secure Boot/CSM chưa đúng, hoặc SSD chưa được nhận trong UEFI.",
        },
    ];
    const tips = [
        "Lắp RAM mới: vào UEFI kiểm tra RAM nhận đủ dung lượng và đúng tốc độ chưa.",
        "Trước khi cập nhật BIOS: tải đúng file cho đúng model mainboard.",
        "Khi update BIOS: dùng nguồn ổn định, không tắt máy, không rút USB giữa chừng.",
        "Ghi lại cấu hình BIOS trước khi update vì update có thể reset XMP/EXPO, boot priority, fan curve.",
        "Cài Windows mới trên máy hiện đại: ưu tiên UEFI + GPT.",
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
                        <Lightbulb /> Mẹo an toàn
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
                        <span className="bg-purple-500/20 text-purple-300 p-2 rounded-xl">
                            12
                        </span>
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-purple-300 border border-slate-800 shadow-inner space-y-2">
                            <p>ROM = Read-Only Memory</p>
                            <p className="text-slate-300">
                                Lưu firmware khởi động, không mất khi tắt máy
                            </p>
                            <br />
                            <p>BIOS/UEFI chạy trước hệ điều hành</p>
                            <p className="text-slate-300">
                                Power → Firmware → POST → Boot device →
                                Bootloader → OS
                            </p>
                            <br />
                            <p className="text-slate-500"># UEFI thường gặp</p>
                            <p className="text-slate-300">
                                Boot Priority, XMP/EXPO, Secure Boot, TPM, Fan
                                Control, BIOS Update
                            </p>
                            <br />
                            <p className="text-red-300">
                                Không tắt máy khi đang update BIOS.
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
        question: "BIOS/UEFI chạy vào thời điểm nào?",
        options: [
            "Sau khi mở Chrome",
            "Sau khi Windows đã chạy xong",
            "Ngay sau khi bật máy, trước hệ điều hành",
            "Chỉ chạy khi có mạng Internet",
        ],
        correct: 2,
        explanation:
            "BIOS/UEFI chạy ngay sau khi bật máy, trước hệ điều hành, để kiểm tra phần cứng và tìm thiết bị boot.",
    },
    {
        question: "ROM/Firmware trên mainboard dùng để làm gì?",
        options: [
            "Lưu phim và ảnh cá nhân",
            "Lưu chương trình khởi động và cấu hình phần cứng cơ bản",
            "Tăng FPS trực tiếp",
            "Thay thế RAM",
        ],
        correct: 1,
        explanation:
            "ROM/Firmware lưu mã khởi động và cấu hình phần cứng cơ bản mà máy cần trước khi hệ điều hành chạy.",
    },
    {
        question: "Khi RAM DDR5-6000 chỉ chạy 4800 MT/s, nên kiểm tra gì?",
        options: [
            "Màn hình có bật HDR không",
            "Đã bật XMP/EXPO trong UEFI chưa",
            "Chuột có đủ DPI không",
            "Dây nguồn có màu gì",
        ],
        correct: 1,
        explanation:
            "RAM tốc độ cao thường cần bật XMP/EXPO trong UEFI để chạy gần/tới tốc độ quảng cáo nếu hệ thống hỗ trợ.",
    },
    {
        question: "POST là gì?",
        options: [
            "Quá trình tự kiểm tra khi bật nguồn",
            "Một loại SSD",
            "Một chuẩn màn hình",
            "Một phần mềm chat",
        ],
        correct: 0,
        explanation:
            "POST là Power-On Self-Test, quá trình firmware kiểm tra phần cứng khi bật nguồn.",
    },
    {
        question: "Máy đời mới nên ưu tiên kiểu boot nào?",
        options: [
            "UEFI + GPT",
            "Legacy + MBR cho mọi trường hợp",
            "Không cần ổ boot",
            "Chỉ boot bằng chuột",
        ],
        correct: 0,
        explanation:
            "Máy hiện đại nên ưu tiên UEFI + GPT để tương thích tốt với Windows hiện đại, Secure Boot và ổ dung lượng lớn.",
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
                    <strong className="text-purple-400">
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
                <span className="text-purple-400">
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
                        className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu ROM, BIOS và UEFI. Tiếp theo là bộ nhớ ảo Virtual
                Memory / Swap — phần giải thích vì sao khi RAM đầy, hệ điều hành
                có thể mượn SSD làm bộ nhớ tạm nhưng máy thường chậm hơn.
            </p>
            <Link
                to="/phan-3-7"
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-purple-500/20"
            >
                Bài tiếp theo: 3.7 — Bộ nhớ ảo Virtual Memory / Swap{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "purple" }) {
    const colorMap = {
        purple: "bg-purple-500/20 text-purple-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
        blue: "bg-blue-500/20 text-blue-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        pink: "bg-pink-500/20 text-pink-300",
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

function HeroCard({ icon, label, desc, color, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 flex items-center gap-4 ${highlight ? "bg-purple-500/10 border-purple-400/50" : softBorder(color)}`}
        >
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center shrink-0`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <div>
                <h4 className="font-extrabold text-white">{label}</h4>
                <p className="text-xs text-slate-400 mt-1">{desc}</p>
            </div>
        </div>
    );
}

function ConceptCard({ icon, title, subtitle, desc, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-3xl p-6`}>
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center mb-4`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <h3 className="text-white font-extrabold text-xl mb-1">{title}</h3>
            <p className={`${textColor(color)} text-sm font-semibold mb-3`}>
                {subtitle}
            </p>
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
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.purple;
}

function softBorder(color) {
    const map = {
        purple: "bg-purple-500/5 border-purple-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.purple;
}

function textColor(color) {
    const map = {
        purple: "text-purple-300",
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        blue: "text-blue-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-purple-300";
}
