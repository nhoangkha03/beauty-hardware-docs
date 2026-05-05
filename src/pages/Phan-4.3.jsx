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
    Gamepad2,
    HardDrive,
    Laptop,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    PackageCheck,
    Puzzle,
    Search,
    Settings,
    ShieldCheck,
    Timer,
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
                            <Zap className="text-emerald-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 4: Bộ lưu trữ — Storage
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                        Bài 4.3
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <ElectronicCabinetAnalogy />
                <SsdFlowSimulator />
                <NandCellExplorer />
                <SpecsExplorer />
                <SataNvmePreview />
                <RealExamples />
                <SsdPickerLab />
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
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-emerald-300">
                        <BookOpen size={16} /> Phần 4: Bộ lưu trữ — Storage
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        SSD
                        <span className="block text-emerald-400">
                            Ổ đĩa thể rắn
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        SSD dùng chip NAND Flash thay vì đĩa quay cơ học, nên
                        truy cập dữ liệu bằng tín hiệu điện, độ trễ thấp và mở
                        Windows, app, game nhanh hơn HDD rất nhiều.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Database size={16} />} text="NAND Flash" />
                        <Tag icon={<Cpu size={16} />} text="Controller" />
                        <Tag
                            icon={<MemoryStick size={16} />}
                            text="DRAM / HMB"
                        />
                        <Tag icon={<Zap size={16} />} text="SLC Cache" />
                        <Tag icon={<ShieldCheck size={16} />} text="TBW" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<HardDrive />}
                            label="HDD"
                            desc="Đĩa quay + đầu đọc"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Zap />}
                            label="SSD"
                            desc="NAND Flash, không cơ học"
                            color="emerald"
                            highlight
                        />
                        <HeroTile
                            icon={<Gauge />}
                            label="Random I/O"
                            desc="Mở app và file nhỏ nhanh"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<Database />}
                            label="TBW"
                            desc="Độ bền ghi dữ liệu"
                            color="purple"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Vì sao SSD nhanh?</p>
                        <p>Không đĩa quay + không đầu đọc cơ học</p>
                        <p className="text-emerald-300">
                            → truy cập bằng điện → độ trễ thấp
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu SSD là Solid State Drive và vì sao không có bộ phận chuyển động cơ học.",
        "Nắm cấu tạo SSD: NAND Flash, controller, DRAM Cache/HMB, SLC Cache, firmware và interface.",
        "Phân biệt các loại NAND: SLC, MLC, TLC, QLC theo số bit/cell, tốc độ, độ bền và giá.",
        "Đọc các thông số quan trọng: dung lượng, sequential/random read-write, TBW, DRAM, SLC Cache, SATA/NVMe.",
        "Chọn SSD đúng mục đích: nâng máy cũ, gaming, lập trình, video, workstation hoặc lưu trữ phụ.",
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
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: SSD là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">SSD</strong> là viết
                            tắt của{" "}
                            <strong className="text-cyan-300">
                                Solid State Drive
                            </strong>
                            , nghĩa là ổ đĩa thể rắn.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-cyan-300">“Thể rắn”</strong>{" "}
                            nghĩa là SSD không có đĩa quay, không có đầu đọc/ghi
                            di chuyển. Dữ liệu được lưu trong chip NAND Flash.
                        </div>
                        <p>
                            SSD là thiết bị lưu trữ lâu dài: tắt máy dữ liệu vẫn
                            còn. Nhưng SSD vẫn khác RAM vì RAM nhanh hơn nhiều
                            và dùng cho dữ liệu đang chạy tạm thời.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <Layers3 className="text-cyan-300" /> So sánh nhanh
                        </h3>
                        <div className="space-y-3">
                            <CompareCard
                                label="HDD"
                                role="Đĩa từ quay + đầu đọc/ghi"
                                motion="Có chuyển động"
                                power="Tắt máy vẫn còn"
                                color="orange"
                            />
                            <CompareCard
                                label="SSD"
                                role="Chip NAND Flash"
                                motion="Không chuyển động"
                                power="Tắt máy vẫn còn"
                                color="emerald"
                            />
                            <CompareCard
                                label="RAM"
                                role="Chip nhớ tạm thời"
                                motion="Không chuyển động"
                                power="Tắt máy mất dữ liệu"
                                color="cyan"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ElectronicCabinetAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: tủ điện tử thay cho tủ cơ học"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                    <AnalogyCard
                        icon={<HardDrive />}
                        title="HDD = tủ cơ học"
                        desc="Phải xoay đĩa và đưa đầu đọc đến đúng vị trí dữ liệu."
                        color="orange"
                    />
                    <AnalogyCard
                        icon={<Zap />}
                        title="SSD = tủ điện tử"
                        desc="Bấm địa chỉ là controller tìm dữ liệu trong chip NAND rất nhanh."
                        color="emerald"
                    />
                    <AnalogyCard
                        icon={<MemoryStick />}
                        title="RAM = mặt bàn"
                        desc="Cực nhanh để CPU làm việc, nhưng tắt máy là mất nếu chưa lưu."
                        color="cyan"
                    />
                </div>
            </div>
        </section>
    );
}

function SsdFlowSimulator() {
    const flows = {
        read: {
            title: "Khi đọc dữ liệu",
            color: "emerald",
            steps: [
                {
                    icon: <Cpu />,
                    title: "CPU / hệ điều hành yêu cầu file",
                    desc: "Ví dụ mở Windows, Chrome, game hoặc project lập trình.",
                },
                {
                    icon: <Cpu />,
                    title: "SSD controller nhận lệnh",
                    desc: "Controller là bộ não, điều phối nơi dữ liệu nằm trong NAND.",
                },
                {
                    icon: <Database />,
                    title: "Tìm vị trí trong NAND Flash",
                    desc: "Controller tra bảng ánh xạ để biết dữ liệu nằm ở block/page nào.",
                },
                {
                    icon: <Zap />,
                    title: "Đọc bằng tín hiệu điện",
                    desc: "Không cần đĩa quay hay đầu đọc cơ học.",
                },
                {
                    icon: <MemoryStick />,
                    title: "Dữ liệu về RAM",
                    desc: "Dữ liệu đi qua SATA hoặc NVMe/PCIe về RAM để CPU xử lý.",
                },
            ],
        },
        write: {
            title: "Khi ghi dữ liệu",
            color: "orange",
            steps: [
                {
                    icon: <MemoryStick />,
                    title: "Dữ liệu từ RAM gửi xuống SSD",
                    desc: "Ví dụ copy file, bấm Save hoặc xuất video.",
                },
                {
                    icon: <Cpu />,
                    title: "Controller chia dữ liệu",
                    desc: "Controller quyết định ghi vào các cell NAND nào.",
                },
                {
                    icon: <Zap />,
                    title: "Ghi vào NAND Flash",
                    desc: "Dữ liệu được lưu bằng trạng thái điện tích trong cell NAND.",
                },
                {
                    icon: <ShieldCheck />,
                    title: "Firmware quản lý độ bền",
                    desc: "Wear leveling, sửa lỗi ECC, cache và garbage collection được điều phối bên trong SSD.",
                },
                {
                    icon: <CheckCircle2 />,
                    title: "File được lưu lâu dài",
                    desc: "Tắt máy dữ liệu vẫn còn trong SSD.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("read");
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
                title="SSD đọc/ghi dữ liệu như thế nào?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-3 mb-6">
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
                <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-emerald-300">
                        Điểm mạnh nhất:
                    </strong>{" "}
                    SSD đặc biệt nhanh khi đọc nhiều file nhỏ: mở Windows, mở
                    app, load game, chạy IDE, database local và máy ảo.
                </div>
            </div>
        </section>
    );
}

function NandCellExplorer() {
    const types = {
        slc: {
            title: "SLC",
            bits: "1 bit/cell",
            good: "Nhanh nhất, bền nhất, độ tin cậy cao",
            bad: "Rất đắt, dung lượng thấp",
            fit: "Enterprise, công nghiệp, cache",
            color: "emerald",
        },
        mlc: {
            title: "MLC",
            bits: "2 bit/cell",
            good: "Bền hơn TLC/QLC, hiệu năng tốt",
            bad: "Đắt hơn TLC, ít phổ biến với người dùng phổ thông hiện nay",
            fit: "SSD cao cấp đời cũ, workstation",
            color: "cyan",
        },
        tlc: {
            title: "TLC",
            bits: "3 bit/cell",
            good: "Cân bằng tốt giữa giá, tốc độ, độ bền",
            bad: "Không bền bằng MLC/SLC",
            fit: "SSD phổ thông, gaming, laptop, PC",
            color: "blue",
        },
        qlc: {
            title: "QLC",
            bits: "4 bit/cell",
            good: "Giá/GB tốt, dễ có dung lượng lớn",
            bad: "Độ bền và tốc độ ghi sustained thường thấp hơn TLC",
            fit: "Lưu game, phim, dữ liệu ít ghi lại",
            color: "orange",
        },
    };
    const [active, setActive] = useState("tlc");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Các loại NAND Flash: SLC, MLC, TLC, QLC"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-3 mb-6">
                    {Object.entries(types).map(([key, t]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(t.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                <Database size={20} /> {t.title}
                            </div>
                            <p className="text-xs opacity-75 mt-1">{t.bits}</p>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            <Database size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-2">
                            {item.title}
                        </h3>
                        <p className={`${textColor(item.color)} font-semibold`}>
                            {item.bits}
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
                <div className="mt-6 bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300 text-center">
                    Càng nhiều bit/cell → dung lượng/diện tích tăng → giá/GB
                    giảm → tốc độ ghi và độ bền thường giảm
                </div>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        capacity: {
            icon: <Database />,
            title: "Dung lượng",
            detail: "256GB, 500GB, 1TB, 2TB, 4TB+.",
            impact: "Máy học tập/văn phòng: 500GB–1TB. Gaming/lập trình: 1TB–2TB. Video/project lớn: 2TB trở lên + ổ backup.",
        },
        sequential: {
            icon: <Gauge />,
            title: "Sequential Read/Write",
            detail: "Tốc độ đọc/ghi file lớn liên tục.",
            impact: "SATA SSD thường khoảng 500–560 MB/s; NVMe PCIe 4.0 thường vài nghìn MB/s.",
        },
        random: {
            icon: <Timer />,
            title: "Random Read/Write",
            detail: "Tốc độ đọc/ghi nhiều file nhỏ rải rác.",
            impact: "Quan trọng cho mở Windows, mở app, IDE, database local, máy ảo và load nhiều file nhỏ.",
        },
        tbw: {
            icon: <ShieldCheck />,
            title: "TBW",
            detail: "Total Bytes Written: tổng lượng dữ liệu ghi theo mức bảo hành của nhà sản xuất.",
            impact: "TBW cao hơn phù hợp dựng video, database, máy ảo, cache và tác vụ ghi nhiều.",
        },
        dram: {
            icon: <MemoryStick />,
            title: "DRAM Cache / HMB",
            detail: "Một số SSD có DRAM Cache; một số DRAM-less dùng HMB để mượn RAM hệ thống.",
            impact: "SSD có DRAM thường ổn định hơn khi làm OS drive hoặc ghi nhiều.",
        },
        slcCache: {
            icon: <Zap />,
            title: "SLC Cache",
            detail: "Vùng NAND giả lập SLC để tăng tốc ghi ban đầu.",
            impact: "Ghi file nhỏ/vừa rất nhanh; copy file cực lớn vượt cache có thể tụt tốc độ, nhất là SSD QLC/giá rẻ.",
        },
        interface: {
            icon: <Puzzle />,
            title: "SATA / NVMe / M.2",
            detail: "SATA và NVMe là chuẩn giao tiếp; M.2 là dạng khe/kích thước.",
            impact: "M.2 không đồng nghĩa chắc chắn là NVMe. Cần kiểm tra máy hỗ trợ M.2 SATA, M.2 NVMe hay cả hai.",
        },
    };
    const [active, setActive] = useState("tbw");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="yellow"
                title="Thông số kỹ thuật quan trọng của SSD"
                icon={<Settings />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
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

function SataNvmePreview() {
    const rows = [
        [
            "SATA SSD",
            "Khoảng 500–560 MB/s",
            "Laptop/PC cũ, thay HDD",
            "Ổn để cài Windows trên máy cũ",
        ],
        [
            "PCIe 3.0 NVMe",
            "Khoảng 2000–3500 MB/s",
            "PC/laptop đời mới vừa",
            "Nhanh hơn SATA rõ khi copy file lớn",
        ],
        [
            "PCIe 4.0 NVMe",
            "Khoảng 5000–7500 MB/s",
            "Gaming, lập trình, video",
            "Điểm ngọt phổ biến hiện nay",
        ],
        [
            "PCIe 5.0 NVMe",
            "Có thể trên 10000 MB/s",
            "Workstation/tác vụ nặng",
            "Cần tản nhiệt tốt",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="purple"
                title="SATA, NVMe, M.2: xem trước bài kế tiếp"
                icon={<Puzzle />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[850px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Chuẩn</th>
                            <th className="p-4">Tốc độ thường gặp</th>
                            <th className="p-4">Phù hợp</th>
                            <th className="p-4">Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([name, speed, fit, note]) => (
                            <tr
                                key={name}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-purple-300 font-extrabold">
                                    {name}
                                </td>
                                <td className="p-4 text-slate-300">{speed}</td>
                                <td className="p-4 text-slate-300">{fit}</td>
                                <td className="p-4 text-slate-300">{note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-purple-300">Lưu ý sống còn:</strong> M.2
                chỉ là dạng khe/kích thước. Có M.2 SATA và M.2 NVMe, nên không
                được thấy “M.2” là mặc định mua NVMe.
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <HardDrive />,
            title: "Crucial MX500 1TB SATA SSD",
            subtitle: "Nâng cấp máy cũ từ HDD",
            color: "cyan",
            points: [
                "SATA 6Gb/s",
                "Dạng 2.5 inch, 7mm",
                "Đọc tuần tự tối đa 560 MB/s",
                "Ghi tuần tự tối đa 510 MB/s",
                "MTTF 1.8 triệu giờ",
                "Phù hợp laptop/PC cũ",
            ],
            lesson: "Nếu máy cũ còn dùng HDD, thay bằng SATA SSD như MX500 thường là nâng cấp tạo cảm giác nhanh rõ nhất.",
        },
        {
            icon: <Zap />,
            title: "Samsung 990 EVO Plus 1TB",
            subtitle: "NVMe SSD cho PC/laptop đời mới",
            color: "emerald",
            points: [
                "Dạng M.2 NVMe",
                "PCIe 4.0 x4 hoặc PCIe 5.0 x2 tùy nền tảng",
                "Đọc/ghi tuần tự lên tới 7,250/6,300 MB/s",
                "Tốt cho Windows, gaming, Docker, máy ảo",
                "Nên chọn 2TB nếu project/game lớn",
            ],
            lesson: "NVMe giúp copy file lớn nhanh hơn SATA SSD và phù hợp máy đời mới, nhưng cần kiểm tra main/laptop hỗ trợ.",
        },
        {
            icon: <PackageCheck />,
            title: "Kingston NV3 1TB / 2TB",
            subtitle: "NVMe phổ thông giá mềm",
            color: "blue",
            points: [
                "PCIe 4.0 NVMe",
                "M.2 2280 và có biến thể M.2 2230",
                "1TB: đọc/ghi tuần tự 6,000/4,000 MB/s",
                "2TB–4TB: lên tới 6,000/5,000 MB/s",
                "1TB 320TBW, 2TB 640TBW",
            ],
            lesson: "SSD phổ thông rất hợp laptop/PC/gaming, nhưng nếu ghi cực nặng mỗi ngày nên xem kỹ review, TBW và loại NAND.",
        },
        {
            icon: <Database />,
            title: "QLC SSD dung lượng lớn",
            subtitle: "Ổ phụ lưu game/phim/dữ liệu",
            color: "orange",
            points: [
                "Dung lượng lớn, giá/GB tốt",
                "Hợp dữ liệu đọc nhiều ghi ít",
                "Sau khi hết SLC Cache có thể tụt tốc",
                "Độ bền thường thấp hơn TLC",
                "Không lý tưởng cho database/video ghi nặng",
            ],
            lesson: "QLC không xấu; chỉ cần dùng đúng mục đích: thư viện game, phim, ảnh, dữ liệu ít ghi lại.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="pink"
                title="Ví dụ thực tế"
                icon={<PackageCheck />}
            />
            <div className="grid lg:grid-cols-2 gap-4">
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

function SsdPickerLab() {
    const scenarios = {
        old: {
            icon: <Laptop />,
            title: "Máy cũ đang dùng HDD",
            answer: "Chọn SATA SSD 2.5 inch 500GB–1TB. Đây thường là nâng cấp đáng tiền nhất để boot Windows và mở app nhanh hơn.",
            color: "cyan",
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Gaming",
            answer: "Chọn NVMe SSD 1TB–2TB nếu máy hỗ trợ. TLC tốt hơn cho ổ chính; QLC vẫn ổn cho ổ phụ lưu thư viện game.",
            color: "emerald",
        },
        coding: {
            icon: <Cpu />,
            title: "Lập trình / Docker / VM",
            answer: "Ưu tiên NVMe SSD TLC, dung lượng 1TB–2TB, TBW tốt và hiệu năng random ổn định. SSD có DRAM càng tốt nếu ngân sách cho phép.",
            color: "blue",
        },
        creator: {
            icon: <Monitor />,
            title: "Dựng video / project lớn",
            answer: "Chọn NVMe TLC dung lượng 2TB+, TBW cao, tản nhiệt tốt. Tránh QLC giá rẻ nếu ngày nào cũng ghi/xóa nhiều dữ liệu.",
            color: "purple",
        },
        archive: {
            icon: <Database />,
            title: "Ổ phụ lưu game/phim",
            answer: "QLC SSD dung lượng lớn có thể hợp lý nếu dữ liệu chủ yếu đọc nhiều, ghi ít. Vẫn cần backup cho dữ liệu quan trọng.",
            color: "orange",
        },
    };
    const [active, setActive] = useState("gaming");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Lab: chọn SSD theo nhu cầu"
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
            wrong: "SSD nào cũng giống nhau",
            right: "SSD khác nhau rất nhiều: SATA/NVMe, TLC/QLC, có DRAM/DRAM-less, PCIe 3.0/4.0/5.0, ổ chính hay ổ phụ.",
        },
        {
            wrong: "QLC là không dùng được",
            right: "QLC vẫn hợp lưu game, phim, ảnh, dữ liệu đọc nhiều ghi ít. Không lý tưởng cho ghi/xóa nặng mỗi ngày.",
        },
        {
            wrong: "M.2 là chắc chắn nhanh",
            right: "M.2 chỉ là dạng khe/kích thước. Có M.2 SATA và M.2 NVMe.",
        },
        {
            wrong: "SSD không bao giờ hỏng",
            right: "SSD có thể hỏng do controller, firmware, NAND hao mòn, nguồn điện, nhiệt độ hoặc lỗi sản xuất. Dữ liệu quan trọng vẫn phải backup.",
        },
        {
            wrong: "SSD gần đầy vẫn nhanh như mới",
            right: "SSD quá đầy có thể giảm hiệu năng vì controller thiếu không gian cho cache, wear leveling và garbage collection. Nên chừa khoảng 10–20% nếu có thể.",
        },
    ];
    const tips = [
        "Máy còn HDD: nâng lên SSD là nâng cấp đáng tiền nhất.",
        "PC/laptop đời mới: ưu tiên NVMe SSD từ 1TB trở lên nếu ngân sách cho phép.",
        "Ổ chính nên dùng TLC nếu ngân sách cho phép; QLC hợp hơn cho ổ phụ dung lượng lớn.",
        "Kiểm tra mainboard/laptop hỗ trợ M.2 SATA hay M.2 NVMe, PCIe mấy và kích thước 2280/2230.",
        "NVMe PCIe 4.0/5.0 có thể nóng khi ghi nặng; dùng heatsink nếu mainboard có.",
        "Luôn backup dữ liệu quan trọng; SSD nhanh không thay thế backup.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
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
                        <Lightbulb /> Mẹo chọn SSD
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
                            11
                        </span>
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-emerald-300 border border-slate-800 shadow-inner space-y-2">
                            <p>SSD = Solid State Drive</p>
                            <p className="text-slate-300">
                                = lưu dữ liệu lâu dài bằng NAND Flash
                            </p>
                            <br />
                            <p className="text-slate-500"># Vì sao nhanh?</p>
                            <p className="text-slate-300">
                                Không đĩa quay, không đầu đọc cơ học, truy cập
                                bằng điện
                            </p>
                            <br />
                            <p className="text-slate-500"># NAND</p>
                            <p className="text-slate-300">
                                SLC = 1 bit/cell, nhanh và bền nhất
                            </p>
                            <p className="text-slate-300">MLC = 2 bit/cell</p>
                            <p className="text-slate-300">
                                TLC = 3 bit/cell, cân bằng nhất cho phổ thông
                            </p>
                            <p className="text-slate-300">
                                QLC = 4 bit/cell, rẻ/dung lượng lớn, hợp đọc
                                nhiều ghi ít
                            </p>
                            <br />
                            <p className="text-red-300">
                                M.2 không đồng nghĩa chắc chắn là NVMe.
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
        question: "SSD lưu dữ liệu chủ yếu bằng gì?",
        options: ["Đĩa từ quay", "Chip NAND Flash", "Đĩa CD", "RAM tạm thời"],
        correct: 1,
        explanation:
            "SSD lưu dữ liệu chính trong chip NAND Flash, không dùng đĩa từ quay như HDD.",
    },
    {
        question: "Loại NAND nào lưu 1 bit trên mỗi cell?",
        options: ["SLC", "MLC", "TLC", "QLC"],
        correct: 0,
        explanation: "SLC là Single-Level Cell, lưu 1 bit trên mỗi cell.",
    },
    {
        question:
            "Loại NAND nào thường cân bằng tốt nhất cho SSD phổ thông hiện nay?",
        options: ["SLC", "TLC", "Chỉ dùng RAM", "Đĩa từ"],
        correct: 1,
        explanation:
            "TLC thường cân bằng tốt giữa giá, tốc độ và độ bền cho SSD phổ thông, gaming và laptop/PC.",
    },
    {
        question: "QLC phù hợp nhất với nhu cầu nào?",
        options: [
            "Ghi/xóa video 4K liên tục mỗi ngày",
            "Database ghi nặng 24/7",
            "Lưu game, phim, dữ liệu đọc nhiều ghi ít",
            "Thay thế RAM",
        ],
        correct: 2,
        explanation:
            "QLC hợp lưu trữ dung lượng lớn, đọc nhiều hơn ghi như game, phim, ảnh và ổ phụ.",
    },
    {
        question: "M.2 có nghĩa chắc chắn là NVMe không?",
        options: [
            "Có",
            "Không, M.2 chỉ là dạng khe/kích thước",
            "M.2 là RAM",
            "M.2 chỉ dùng cho HDD",
        ],
        correct: 1,
        explanation: "M.2 là form factor/khe vật lý. Có M.2 SATA và M.2 NVMe.",
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
                Bạn đã hiểu SSD, NAND Flash và SLC/MLC/TLC/QLC. Tiếp theo là
                giao tiếp lưu trữ — phần giúp bạn tránh nhầm lẫn SATA, NVMe, M.2
                và PCIe.
            </p>
            <Link
                to="/phan-4-4"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
            >
                Bài tiếp theo: 4.4 — SATA, NVMe, M.2, PCIe{" "}
                <ChevronRight size={20} />
            </Link>
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

function CompareCard({ label, role, motion, power, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-4`}>
            <p className={`${textColor(color)} font-extrabold`}>{label}</p>
            <p className="text-sm text-slate-300 mt-1">{role}</p>
            <p className="text-xs text-slate-500 mt-1">
                {motion} • {power}
            </p>
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
