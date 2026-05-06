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
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    PackageCheck,
    PlugZap,
    Power,
    Puzzle,
    RefreshCw,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    Terminal,
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
                            <Terminal className="text-indigo-400" size={24} />
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
                        Bài 6.8
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <StageManagerAnalogy />
                <BootFlowSimulator />
                <BiosVsUefi />
                <ModeExplorer />
                <FeatureExplorer />
                <UpdateBiosGuide />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-indigo-300">
                        <BookOpen size={16} /> Phần 6: Mainboard — Firmware
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        BIOS và UEFI
                        <span className="block text-indigo-400">
                            Firmware của Mainboard
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Trước khi Windows/Linux chạy, BIOS/UEFI kiểm tra CPU,
                        RAM, SSD, GPU, quạt, bàn phím và quyết định boot từ ổ
                        nào. Đây là lớp quản lý đầu tiên của toàn bộ hệ thống.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Power size={16} />} text="POST" />
                        <Tag icon={<HardDrive size={16} />} text="Boot Order" />
                        <Tag
                            icon={<MemoryStick size={16} />}
                            text="XMP / EXPO"
                        />
                        <Tag
                            icon={<ShieldCheck size={16} />}
                            text="Secure Boot / TPM"
                        />
                        <Tag
                            icon={<RefreshCw size={16} />}
                            text="BIOS Update"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Power />}
                            label="POST"
                            desc="Kiểm tra phần cứng"
                            color="indigo"
                            highlight
                        />
                        <HeroTile
                            icon={<HardDrive />}
                            label="Boot"
                            desc="Chọn ổ khởi động"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<MemoryStick />}
                            label="XMP/EXPO"
                            desc="Profile RAM"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<ShieldCheck />}
                            label="Security"
                            desc="Secure Boot / TPM"
                            color="orange"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">
                            // Trước khi vào Windows
                        </p>
                        <p>Power → BIOS/UEFI → POST</p>
                        <p className="text-indigo-300">
                            → Bootloader → Operating System
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu BIOS và UEFI là firmware trên mainboard dùng để kiểm tra phần cứng và khởi động hệ điều hành.",
        "Nắm quy trình bật máy: PSU cấp điện, BIOS/UEFI chạy, POST kiểm tra, tìm bootloader, vào Windows/Linux.",
        "Phân biệt Legacy BIOS và UEFI, EZ Mode và Advanced Mode.",
        "Biết các mục quan trọng: Boot Order, XMP/EXPO, Secure Boot, TPM/fTPM/PTT, Fan Curve, SATA AHCI/RAID, BIOS Version.",
        "Biết khi nào nên cập nhật BIOS, cách chuẩn bị an toàn và cách Clear CMOS khi chỉnh sai.",
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
                title="Khái niệm cốt lõi: BIOS và UEFI là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-2 gap-6">
                    <ConceptCard
                        icon={<Terminal />}
                        title="BIOS"
                        subtitle="Basic Input/Output System"
                        color="indigo"
                        points={[
                            "Firmware nằm trên mainboard",
                            "Kiểm tra phần cứng cơ bản",
                            "Khởi động hệ điều hành",
                            "Chuẩn cũ hơn, giao diện đơn giản hơn",
                        ]}
                    />
                    <ConceptCard
                        icon={<Sparkles />}
                        title="UEFI"
                        subtitle="Unified Extensible Firmware Interface"
                        color="cyan"
                        points={[
                            "Chuẩn firmware hiện đại hơn",
                            "Giao diện trực quan, hỗ trợ chuột",
                            "Hỗ trợ ổ dung lượng lớn tốt hơn",
                            "Có Secure Boot, boot nhanh, nhiều tính năng hơn",
                        ]}
                    />
                </div>
                <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-cyan-300">Ghi nhớ:</strong>{" "}
                    Mainboard hiện đại thường dùng UEFI BIOS. Vì thói quen,
                    nhiều người vẫn gọi chung là “BIOS”, dù bên trong thực tế là
                    UEFI.
                </div>
            </div>
        </section>
    );
}

function StageManagerAnalogy() {
    const cards = [
        {
            icon: <Terminal />,
            title: "BIOS/UEFI = quản lý sân khấu",
            desc: "Trước khi buổi diễn bắt đầu, người quản lý kiểm tra mọi diễn viên và thiết bị.",
            color: "indigo",
        },
        {
            icon: <Cpu />,
            title: "CPU/RAM/GPU = diễn viên",
            desc: "Phải được nhận diện và hoạt động ổn thì chương trình mới chạy.",
            color: "blue",
        },
        {
            icon: <Power />,
            title: "POST = kiểm tra tổng duyệt",
            desc: "Nếu có lỗi RAM/GPU/CPU, máy có thể không lên hình hoặc báo đèn debug/beep.",
            color: "orange",
        },
        {
            icon: <HardDrive />,
            title: "Bootloader = mở màn",
            desc: "BIOS/UEFI tìm ổ có Windows/Linux rồi chuyển quyền cho hệ điều hành.",
            color: "emerald",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: người quản lý sân khấu"
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

function BootFlowSimulator() {
    const flows = {
        normal: {
            title: "Boot bình thường",
            color: "emerald",
            steps: [
                {
                    icon: <Power />,
                    title: "Bấm nút nguồn",
                    desc: "Case gửi tín hiệu power đến mainboard.",
                },
                {
                    icon: <PlugZap />,
                    title: "PSU cấp điện",
                    desc: "Nguồn cấp điện cho mainboard, CPU, RAM, SSD, GPU và quạt.",
                },
                {
                    icon: <Terminal />,
                    title: "BIOS/UEFI bắt đầu chạy",
                    desc: "Firmware trên mainboard khởi động trước hệ điều hành.",
                },
                {
                    icon: <Search />,
                    title: "POST kiểm tra phần cứng",
                    desc: "CPU, RAM, GPU, ổ lưu trữ, bàn phím và quạt được kiểm tra.",
                },
                {
                    icon: <HardDrive />,
                    title: "Đọc Boot Order",
                    desc: "BIOS/UEFI tìm thiết bị có hệ điều hành theo thứ tự đã cấu hình.",
                },
                {
                    icon: <Monitor />,
                    title: "Nạp bootloader",
                    desc: "Windows Boot Manager hoặc bootloader Linux được nạp.",
                },
                {
                    icon: <Sparkles />,
                    title: "Hệ điều hành chạy",
                    desc: "Máy vào Windows/Linux và sẵn sàng sử dụng.",
                },
            ],
        },
        error: {
            title: "POST lỗi",
            color: "red",
            steps: [
                {
                    icon: <Power />,
                    title: "Bấm nguồn",
                    desc: "Máy nhận điện nhưng không vào hệ điều hành.",
                },
                {
                    icon: <Search />,
                    title: "POST phát hiện lỗi",
                    desc: "RAM, CPU, GPU hoặc thiết bị boot có vấn đề.",
                },
                {
                    icon: <AlertTriangle />,
                    title: "Đèn debug / beep / không lên hình",
                    desc: "Mainboard có thể báo lỗi qua LED debug, beep code hoặc mã Q-Code.",
                },
                {
                    icon: <Puzzle />,
                    title: "Kiểm tra linh kiện",
                    desc: "Thử tháo lắp RAM, kiểm tra GPU, dây nguồn CPU/GPU, reset BIOS.",
                },
                {
                    icon: <RefreshCw />,
                    title: "Clear CMOS nếu cần",
                    desc: "Đưa BIOS về mặc định khi chỉnh sai XMP/EXPO/OC hoặc máy treo POST.",
                },
            ],
        },
        xmp: {
            title: "Bật XMP/EXPO RAM",
            color: "blue",
            steps: [
                {
                    icon: <Terminal />,
                    title: "Vào BIOS/UEFI",
                    desc: "Nhấn Del/F2 khi vừa bật máy hoặc vào Advanced Startup trong Windows.",
                },
                {
                    icon: <MemoryStick />,
                    title: "Tìm XMP/EXPO",
                    desc: "XMP thường gặp trên Intel, EXPO tối ưu cho AMD Ryzen/AM5.",
                },
                {
                    icon: <Zap />,
                    title: "Bật profile RAM",
                    desc: "Mainboard áp dụng tốc độ/timing/điện áp theo profile RAM.",
                },
                {
                    icon: <RefreshCw />,
                    title: "Save & Exit",
                    desc: "Lưu cấu hình và khởi động lại.",
                },
                {
                    icon: <ShieldCheck />,
                    title: "Test ổn định",
                    desc: "Kiểm tra bằng game, MemTest, OCCT hoặc workload thực tế.",
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
                title="BIOS/UEFI làm gì khi bật máy?"
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
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[330px] flex flex-col justify-between">
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

function BiosVsUefi() {
    const rows = [
        [
            "Legacy BIOS",
            "Chuẩn cũ, giao diện đơn giản, thường dùng bàn phím",
            "Nhẹ, quen thuộc với máy cũ",
            "Hạn chế với ổ lớn, ít tính năng hiện đại",
            "Không nên dùng nếu máy mới",
        ],
        [
            "UEFI",
            "Chuẩn mới, giao diện trực quan hơn, hỗ trợ chuột",
            "Hỗ trợ ổ lớn, Secure Boot, boot nhanh, nhiều tính năng",
            "Nhiều mục nên người mới dễ rối",
            "Nên dùng",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="indigo"
                title="Legacy BIOS và UEFI khác nhau thế nào?"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[920px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Loại</th>
                            <th className="p-4">Đặc điểm</th>
                            <th className="p-4">Ưu điểm</th>
                            <th className="p-4">Nhược điểm</th>
                            <th className="p-4">Hiện nay nên dùng?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([type, a, b, c, d]) => (
                            <tr
                                key={type}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-indigo-300 font-extrabold">
                                    {type}
                                </td>
                                <td className="p-4 text-slate-300">{a}</td>
                                <td className="p-4 text-slate-300">{b}</td>
                                <td className="p-4 text-slate-300">{c}</td>
                                <td className="p-4 text-slate-300">{d}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function ModeExplorer() {
    const modes = {
        ez: {
            icon: <Sparkles />,
            title: "EZ Mode / Easy Mode",
            color: "cyan",
            who: "Người mới",
            has: [
                "Thông tin CPU/RAM",
                "Nhiệt độ",
                "Boot order",
                "Bật XMP/EXPO nhanh",
                "Fan profile cơ bản",
            ],
        },
        adv: {
            icon: <Settings />,
            title: "Advanced Mode",
            color: "purple",
            who: "Người có kinh nghiệm hơn",
            has: [
                "CPU/RAM tuning",
                "Fan curve chi tiết",
                "Secure Boot/CSM",
                "SATA mode",
                "Update BIOS",
                "TPM/fTPM/PTT",
            ],
        },
    };
    const [active, setActive] = useState("ez");
    const item = modes[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="cyan"
                title="EZ Mode và Advanced Mode"
                icon={<Monitor />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {Object.entries(modes).map(([key, m]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(m.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(m.icon, { size: 20 })}{" "}
                                {m.title}
                            </div>
                            <p className="text-xs opacity-75 mt-1">{m.who}</p>
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
                            Dùng cho: {item.who}
                        </p>
                    </div>
                    <div
                        className={`${softBorder(item.color)} border rounded-3xl p-5`}
                    >
                        <p
                            className={`${textColor(item.color)} font-bold mb-3`}
                        >
                            Thường có
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                            {item.has.map((h) => (
                                <Bullet key={h} text={h} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureExplorer() {
    const features = {
        boot: {
            icon: <HardDrive />,
            title: "Boot Order",
            detail: "Thứ tự thiết bị mà máy tìm hệ điều hành để khởi động.",
            impact: "Cài Windows từ USB cần boot từ USB; sau khi cài xong nên chọn Windows Boot Manager trên SSD chính.",
        },
        xmp: {
            icon: <MemoryStick />,
            title: "XMP / EXPO",
            detail: "Profile RAM giúp RAM chạy gần đúng tốc độ quảng cáo thay vì tốc độ JEDEC mặc định thấp hơn.",
            impact: "DDR5-6000 mới lắp có thể chưa chạy 6000 MT/s nếu chưa bật XMP/EXPO trong BIOS.",
        },
        secure: {
            icon: <ShieldCheck />,
            title: "Secure Boot",
            detail: "Tính năng UEFI giúp chỉ cho phần mềm khởi động đáng tin cậy chạy khi boot.",
            impact: "Liên quan đến Windows 11, bảo mật boot, một số USB boot hoặc hệ điều hành khác có thể cần cấu hình lại.",
        },
        tpm: {
            icon: <Puzzle />,
            title: "TPM / fTPM / PTT",
            detail: "Module bảo mật dùng cho khóa mã hóa, Windows 11, BitLocker và tính năng bảo mật.",
            impact: "AMD thường gọi fTPM; Intel gọi PTT; có thể bật/tắt trong BIOS/UEFI.",
        },
        fan: {
            icon: <Fan />,
            title: "Fan Control / Fan Curve",
            detail: "Chỉnh tốc độ quạt theo nhiệt độ CPU hoặc hệ thống.",
            impact: "Cân bằng độ ồn và nhiệt độ: máy nhẹ thì êm, tải nặng thì quạt tăng tốc.",
        },
        sata: {
            icon: <Database />,
            title: "SATA Mode: AHCI / RAID",
            detail: "AHCI phổ biến cho người dùng thường; RAID dùng khi ghép nhiều ổ thành mảng.",
            impact: "Người mới thường nên để AHCI, trừ khi có nhu cầu RAID rõ ràng.",
        },
        version: {
            icon: <RefreshCw />,
            title: "BIOS Version",
            detail: "Phiên bản firmware đang chạy trên mainboard.",
            impact: "CPU đời mới trên main cùng socket nhưng BIOS cũ có thể không nhận, cần update BIOS.",
        },
        cmos: {
            icon: <RefreshCw />,
            title: "Clear CMOS",
            detail: "Đưa thiết lập BIOS về mặc định.",
            impact: "Hữu ích khi bật XMP/EXPO xong không boot, ép xung sai, chỉnh BIOS nhầm hoặc treo POST.",
        },
    };
    const [active, setActive] = useState("xmp");
    const item = features[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Các tính năng quan trọng trong BIOS/UEFI"
                icon={<Gauge />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
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

function UpdateBiosGuide() {
    const vendor = [
        ["ASUS", "EZ Flash, BIOS FlashBack"],
        ["MSI", "M-Flash, Flash BIOS Button"],
        ["Gigabyte", "Q-Flash, Q-Flash Plus"],
        ["ASRock", "Instant Flash, BIOS Flashback"],
    ];
    const checklist = [
        "Tải BIOS từ trang chính hãng",
        "Đúng model mainboard",
        "Đúng revision",
        "Giải nén đúng cách",
        "USB định dạng FAT32 nếu hãng yêu cầu",
        "Không tắt máy khi đang flash",
        "Không cập nhật lúc điện chập chờn",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="orange"
                title="Cập nhật BIOS: khi nào và chuẩn bị gì?"
                icon={<RefreshCw />}
            />
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 overflow-x-auto">
                    <h3 className="text-white font-bold mb-4 px-2">
                        Tên tính năng theo hãng
                    </h3>
                    <table className="w-full min-w-[520px] text-sm">
                        <thead>
                            <tr className="text-left text-slate-400">
                                <th className="p-4">Hãng</th>
                                <th className="p-4">Tên thường gặp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vendor.map(([brand, tool]) => (
                                <tr
                                    key={brand}
                                    className="border-t border-slate-800"
                                >
                                    <td className="p-4 text-orange-300 font-extrabold">
                                        {brand}
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        {tool}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="bg-orange-500/5 border border-orange-500/20 rounded-3xl p-6">
                    <h3 className="text-xl font-bold text-orange-300 mb-5 flex items-center gap-2">
                        <ShieldCheck /> Checklist an toàn
                    </h3>
                    <div className="space-y-3">
                        {checklist.map((item) => (
                            <div
                                key={item}
                                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-3 text-sm text-slate-300"
                            >
                                <CheckCircle2
                                    className="text-green-400 shrink-0 mt-0.5"
                                    size={18}
                                />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-red-300">
                    Không nên update BIOS chỉ vì “thấy có bản mới”
                </strong>{" "}
                nếu máy đang chạy ổn và bạn không có lý do rõ ràng. Nên update
                khi cần hỗ trợ CPU mới, sửa lỗi quan trọng, cải thiện tương
                thích RAM hoặc vá lỗi bảo mật/ổn định.
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Terminal />,
            title: "MSI B760M GAMING PLUS WIFI",
            subtitle: "UEFI AMI BIOS, Intel B760",
            color: "indigo",
            points: [
                "Intel Core thế hệ 14/13/12 LGA1700",
                "RAM DDR5 tối đa 256GB",
                "UEFI AMI BIOS",
                "Việc nên làm: kiểm tra CPU/RAM, bật XMP, chọn SSD boot, chỉnh fan curve",
                "Hợp ví dụ i5-14400F + DDR5 6000",
            ],
            lesson: "Với Intel B760 DDR5, BIOS thường dùng để bật XMP và chọn Windows Boot Manager đúng ổ.",
        },
        {
            icon: <RefreshCw />,
            title: "Gigabyte B650M DS3H",
            subtitle: "Q-Flash Plus, AM5",
            color: "emerald",
            points: [
                "Hỗ trợ Ryzen 7000/8000/9000 tùy BIOS",
                "DDR5 dual channel",
                "2 khe M.2 PCIe 4.0 x4",
                "Có Q-Flash Plus",
                "Cần chú ý đúng model và revision khi tải BIOS",
            ],
            lesson: "Q-Flash Plus hữu ích khi cần update BIOS để nhận CPU mới, đặc biệt với main tồn kho cũ.",
        },
        {
            icon: <ShieldCheck />,
            title: "ASUS PRIME B650M-A WIFI II",
            subtitle: "BIOS FlashBack, AMD B650",
            color: "cyan",
            points: [
                "AM5, DDR5",
                "2 khe M.2, 4 SATA",
                "Wi-Fi, LAN 2.5GbE",
                "Có BIOS FlashBack ở rear I/O",
                "Việc nên làm: bật EXPO, kiểm tra SSD, chọn Windows Boot Manager, Secure Boot tùy nhu cầu",
            ],
            lesson: "BIOS FlashBack giúp cập nhật BIOS tiện hơn khi cần hỗ trợ CPU đời mới hoặc cải thiện ổn định RAM.",
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
        boot: {
            icon: <HardDrive />,
            title: "No bootable device",
            answer: "Vào BIOS, kiểm tra Boot Order. Chọn Windows Boot Manager trên SSD chính làm Boot Option #1.",
            color: "cyan",
        },
        ram: {
            icon: <MemoryStick />,
            title: "RAM chưa đúng tốc độ",
            answer: "Vào BIOS bật XMP hoặc EXPO. Sau đó vào Windows kiểm tra bằng Task Manager/CPU-Z và test ổn định.",
            color: "emerald",
        },
        crash: {
            icon: <XCircle />,
            title: "Bật XMP/EXPO xong lỗi",
            answer: "Tắt máy, Clear CMOS để về mặc định. Sau đó thử profile thấp hơn hoặc update BIOS nếu cần.",
            color: "red",
        },
        cpu: {
            icon: <Cpu />,
            title: "Main không nhận CPU mới",
            answer: "Kiểm tra CPU Support List và BIOS Version. Có thể cần update BIOS bằng BIOS FlashBack/Q-Flash Plus/M-Flash tùy hãng.",
            color: "orange",
        },
        fan: {
            icon: <Fan />,
            title: "Quạt quá ồn",
            answer: "Vào BIOS chỉnh fan curve: nhiệt thấp quạt chậm hơn, nhiệt cao quạt tăng tốc. Đừng để CPU_FAN quá thấp gây nóng.",
            color: "blue",
        },
        secure: {
            icon: <ShieldCheck />,
            title: "Secure Boot/CSM gây khó boot",
            answer: "Máy mới Windows 11 thường nên dùng UEFI/GPT/Secure Boot phù hợp. Không chỉnh Secure Boot/CSM lung tung nếu chưa hiểu hệ đang boot kiểu nào.",
            color: "purple",
        },
    };
    const [active, setActive] = useState("ram");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: xử lý tình huống BIOS/UEFI"
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
            wrong: "Cập nhật BIOS khi không cần và không hiểu rủi ro",
            right: "Update BIOS có ích nhưng có rủi ro. Chỉ nên làm khi cần hỗ trợ CPU mới, sửa lỗi, cải thiện RAM hoặc vá lỗi quan trọng.",
        },
        {
            wrong: "Mua RAM bus cao nhưng không bật XMP/EXPO",
            right: "RAM có thể chạy ở JEDEC thấp hơn. Muốn đạt profile quảng cáo thường cần bật XMP/EXPO trong BIOS.",
        },
        {
            wrong: "Chọn sai Boot Order rồi tưởng ổ hỏng",
            right: "Nếu báo No bootable device, hãy kiểm tra Boot Option #1 có đúng Windows Boot Manager trên SSD chính không.",
        },
        {
            wrong: "Tắt/bật Secure Boot, CSM lung tung",
            right: "Secure Boot và CSM ảnh hưởng cách hệ thống boot. Chỉnh sai có thể làm máy không vào Windows đang cài.",
        },
        {
            wrong: "Tải BIOS khác model hoặc khác revision",
            right: "Phải tải đúng hãng, đúng model, đúng revision. Tải sai BIOS có thể gây lỗi nghiêm trọng.",
        },
    ];
    const tips = [
        "Phím vào BIOS phổ biến: Delete/Del hoặc F2; Boot menu nhanh thường F8/F11/F12 tùy hãng.",
        "Sau khi lắp máy mới, kiểm tra CPU, RAM, SSD/HDD, nhiệt CPU và RPM quạt CPU trong BIOS.",
        "Bật XMP/EXPO xong nên test ổn định bằng game, MemTest, OCCT hoặc workload thực tế.",
        "Trước khi chỉnh sâu, chụp ảnh màn hình BIOS bằng điện thoại để dễ quay lại.",
        "Biết cách Clear CMOS khi máy không boot sau khi chỉnh RAM/OC/boot sai.",
        "Không flash BIOS lúc điện chập chờn hoặc khi không chắc file đúng model/revision.",
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
                                BIOS/UEFI = firmware kiểm tra phần cứng và khởi
                                động hệ điều hành
                            </p>
                            <br />
                            <p className="text-slate-500"># Boot flow</p>
                            <p className="text-slate-300">
                                Power → PSU → BIOS/UEFI → POST → Boot Order →
                                Bootloader → OS
                            </p>
                            <br />
                            <p className="text-slate-500"># Mục quan trọng</p>
                            <p className="text-slate-300">
                                Boot Order • XMP/EXPO • Secure Boot •
                                TPM/fTPM/PTT
                            </p>
                            <p className="text-slate-300">
                                Fan Curve • AHCI/RAID • BIOS Version • Clear
                                CMOS
                            </p>
                            <br />
                            <p className="text-red-300">
                                Flash BIOS sai model/revision là rủi ro nghiêm
                                trọng.
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
        question: "BIOS/UEFI dùng để làm gì?",
        options: [
            "Chỉ để tăng FPS trong game",
            "Kiểm tra phần cứng, cấu hình hệ thống và khởi động hệ điều hành",
            "Lưu file cá nhân lâu dài",
            "Thay thế RAM",
        ],
        correct: 1,
        explanation:
            "BIOS/UEFI kiểm tra phần cứng, lưu/cấu hình thiết lập hệ thống và nạp bootloader để khởi động hệ điều hành.",
    },
    {
        question: "POST là gì?",
        options: [
            "Quá trình tự kiểm tra phần cứng khi bật máy",
            "Một loại cổng USB",
            "Một chuẩn RAM",
            "Một loại SSD",
        ],
        correct: 0,
        explanation:
            "POST là Power-On Self-Test, quá trình tự kiểm tra phần cứng khi bật máy.",
    },
    {
        question:
            "Muốn RAM chạy đúng tốc độ quảng cáo như DDR5-6000, thường cần làm gì?",
        options: [
            "Cắm thêm dây SATA",
            "Bật XMP hoặc EXPO trong BIOS",
            "Thay màn hình",
            "Tắt quạt CPU",
        ],
        correct: 1,
        explanation:
            "XMP/EXPO là profile giúp RAM chạy theo tốc độ/timing quảng cáo thay vì mức mặc định thấp hơn.",
    },
    {
        question: "Boot Order quyết định điều gì?",
        options: [
            "Thứ tự máy tìm thiết bị để khởi động hệ điều hành",
            "Tốc độ quay của quạt",
            "Dung lượng RAM tối đa",
            "Số nhân CPU",
        ],
        correct: 0,
        explanation:
            "Boot Order là thứ tự thiết bị mà BIOS/UEFI tìm bootloader hoặc hệ điều hành để khởi động.",
    },
    {
        question: "Khi cập nhật BIOS, điều nào quan trọng nhất?",
        options: [
            "Tải đúng BIOS theo đúng model và revision mainboard",
            "Tải BIOS của mainboard càng đắt càng tốt",
            "Tắt máy giữa chừng để tiết kiệm điện",
            "Dùng file BIOS của hãng khác nếu cùng socket",
        ],
        correct: 0,
        explanation:
            "Phải tải đúng BIOS theo đúng hãng, đúng model và đúng revision mainboard để tránh lỗi nghiêm trọng.",
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
                Bạn đã hiểu BIOS/UEFI. Tiếp theo là bài tổng hợp rất quan trọng:
                cách chọn mainboard phù hợp CPU và nhu cầu, dựa trên socket,
                chipset, RAM DDR4/DDR5, M.2, Wi-Fi, VRM, form factor và ngân
                sách.
            </p>
            <Link
                to="/phan-6-9"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20"
            >
                Bài tiếp theo: 6.9 — Cách chọn Mainboard phù hợp CPU và nhu cầu{" "}
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
function ConceptCard({ icon, title, subtitle, points, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-3xl p-6`}>
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center mb-4`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <h3 className="text-white font-bold text-2xl mb-1">{title}</h3>
            <p className={`${textColor(color)} font-semibold text-sm mb-4`}>
                {subtitle}
            </p>
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
