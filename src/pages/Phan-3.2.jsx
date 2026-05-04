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
    Laptop,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    PackageCheck,
    Puzzle,
    RefreshCcw,
    Search,
    Settings,
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
                                Phần 3: Bộ nhớ — Memory
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                        Bài 3.2
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <RamDefinition />
                <DeskAnalogy />
                <RamFlowSimulator />
                <RamTypes />
                <SpecsExplorer />
                <CapacityLab />
                <RealExamples />
                <UpgradeChecklist />
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
                        <BookOpen size={16} /> Phần 3: Bộ nhớ — Memory
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        RAM là gì?
                        <span className="block text-emerald-400">
                            Bộ nhớ truy cập ngẫu nhiên
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        RAM là nơi máy tính tạm thời đặt dữ liệu của các chương
                        trình đang chạy. Thiếu RAM khiến máy đơ, giật, chuyển
                        cửa sổ chậm dù CPU vẫn còn mạnh.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<MemoryStick size={16} />}
                            text="Random Access Memory"
                        />
                        <Tag icon={<RefreshCcw size={16} />} text="Volatile" />
                        <Tag icon={<Gauge size={16} />} text="MT/s" />
                        <Tag icon={<Timer size={16} />} text="CL" />
                        <Tag icon={<Layers3 size={16} />} text="Dual Channel" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="space-y-3">
                        <HeroCard
                            icon={<HardDrive />}
                            label="SSD / HDD"
                            desc="Tủ sách lưu dữ liệu lâu dài"
                            color="orange"
                        />
                        <HeroCard
                            icon={<MemoryStick />}
                            label="RAM"
                            desc="Mặt bàn làm việc đang dùng"
                            color="emerald"
                            highlight
                        />
                        <HeroCard
                            icon={<Cpu />}
                            label="CPU"
                            desc="Người đang đọc và xử lý tài liệu"
                            color="cyan"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Ghi nhớ</p>
                        <p>
                            <span className="text-emerald-300">RAM</span> = dữ
                            liệu đang chạy
                        </p>
                        <p>
                            <span className="text-orange-300">SSD/HDD</span> =
                            dữ liệu lưu lâu dài
                        </p>
                        <p className="text-red-300">
                            Tắt máy → RAM mất dữ liệu
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu RAM là Random Access Memory và vai trò của RAM trong máy tính.",
        "Phân biệt RAM với SSD/HDD: dữ liệu đang chạy và dữ liệu lưu lâu dài.",
        "Nắm cơ chế mở phần mềm: SSD/HDD → RAM → CPU → màn hình/lưu lại.",
        "Biết các loại RAM phổ biến: DDR3, DDR4, DDR5, LPDDR, ECC.",
        "Đọc thông số RAM cơ bản: dung lượng, MT/s, CL, số thanh, Dual Channel, XMP/EXPO.",
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

function RamDefinition() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: RAM là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">RAM</strong> là viết
                            tắt của{" "}
                            <strong className="text-cyan-300">
                                Random Access Memory
                            </strong>
                            , nghĩa là bộ nhớ truy cập ngẫu nhiên.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-cyan-300">
                                Nói đơn giản:
                            </strong>{" "}
                            RAM là nơi máy tính tạm thời đặt dữ liệu của các
                            chương trình đang chạy.
                        </div>
                        <p>
                            Bạn mở Chrome, Word, Excel, Photoshop, game hay Zalo
                            — dữ liệu đang dùng của chúng đều cần nằm trong RAM
                            để CPU xử lý nhanh hơn.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <RefreshCcw className="text-cyan-300" /> RAM và
                            SSD/HDD khác nhau
                        </h3>
                        <div className="space-y-3">
                            <CompareRow
                                label="RAM"
                                role="Chứa dữ liệu đang chạy"
                                power="Tắt máy là mất"
                                color="emerald"
                            />
                            <CompareRow
                                label="SSD/HDD"
                                role="Lưu dữ liệu lâu dài"
                                power="Tắt máy vẫn giữ"
                                color="orange"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function DeskAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: RAM là mặt bàn làm việc"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                    <AnalogyCard
                        icon={<HardDrive />}
                        title="SSD/HDD = tủ sách"
                        desc="Lưu tài liệu lâu dài. Muốn làm việc thì cần lấy tài liệu từ tủ ra."
                        color="orange"
                    />
                    <AnalogyCard
                        icon={<MemoryStick />}
                        title="RAM = mặt bàn"
                        desc="Đặt tài liệu đang dùng. Bàn rộng thì mở được nhiều việc cùng lúc."
                        color="emerald"
                    />
                    <AnalogyCard
                        icon={<Cpu />}
                        title="CPU = người xử lý"
                        desc="Đọc, tính toán và xử lý dữ liệu đã được đặt trên bàn."
                        color="cyan"
                    />
                </div>
                <div className="mt-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-amber-300">Điểm mấu chốt:</strong>{" "}
                    Nếu bàn quá nhỏ, bạn phải liên tục cất tài liệu vào tủ rồi
                    lấy ra lại. Máy thiếu RAM cũng phải dùng SSD làm bộ nhớ tạm,
                    gây chậm và khựng.
                </div>
            </div>
        </section>
    );
}

function RamFlowSimulator() {
    const steps = [
        {
            icon: <Search />,
            title: "Bạn mở phần mềm",
            desc: "Bạn double-click Word, Chrome, Photoshop hoặc game.",
            color: "cyan",
        },
        {
            icon: <HardDrive />,
            title: "Dữ liệu nằm trong SSD/HDD",
            desc: "File chương trình và dữ liệu gốc được lưu lâu dài trong ổ lưu trữ.",
            color: "orange",
        },
        {
            icon: <MemoryStick />,
            title: "Hệ điều hành nạp vào RAM",
            desc: "Windows/macOS/Linux đưa dữ liệu cần dùng vào RAM để CPU truy cập nhanh hơn.",
            color: "emerald",
        },
        {
            icon: <Cpu />,
            title: "CPU xử lý dữ liệu",
            desc: "CPU lấy dữ liệu từ RAM, xử lý thao tác gõ chữ, tính toán, mở tab, load game.",
            color: "blue",
        },
        {
            icon: <Monitor />,
            title: "Hiển thị hoặc lưu lại",
            desc: "Kết quả hiện ra màn hình. Khi bấm Save, dữ liệu được ghi xuống SSD/HDD.",
            color: "purple",
        },
    ];
    const [active, setActive] = useState(0);
    const item = steps[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="RAM hoạt động như thế nào?"
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
                    <div className="space-y-3">
                        {steps.map((s, i) => (
                            <button
                                key={s.title}
                                onClick={() => setActive(i)}
                                className={`w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition-all ${active === i ? `${softBorder(s.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`}
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
                                        {s.desc.slice(0, 70)}...
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-red-300">Quan trọng:</strong> Chưa
                    bấm Save + mất điện → dữ liệu trong RAM có thể mất. Đã bấm
                    Save → dữ liệu được ghi xuống SSD/HDD → tắt máy vẫn còn.
                </div>
            </div>
        </section>
    );
}

function RamTypes() {
    const types = {
        ddr3: {
            title: "DDR3",
            where: "PC/laptop cũ",
            good: "Rẻ, dễ gặp trên máy đời cũ",
            bad: "Chậm, khó nâng cấp lâu dài",
            fit: "Máy văn phòng cũ, học cơ bản",
            color: "orange",
        },
        ddr4: {
            title: "DDR4",
            where: "PC/laptop phổ biến vài năm gần đây",
            good: "Giá tốt, hiệu năng ổn, dễ mua",
            bad: "Chậm hơn DDR5",
            fit: "PC phổ thông, gaming tầm trung",
            color: "cyan",
        },
        ddr5: {
            title: "DDR5",
            where: "PC/laptop đời mới",
            good: "Băng thông cao, phù hợp CPU mới",
            bad: "Giá thường cao hơn DDR4, cần main/CPU hỗ trợ",
            fit: "PC mới, gaming, đồ họa, workstation",
            color: "emerald",
        },
        lpddr: {
            title: "LPDDR",
            where: "Laptop mỏng nhẹ, smartphone",
            good: "Tiết kiệm điện, gọn",
            bad: "Thường hàn chết, khó nâng cấp",
            fit: "Laptop mỏng nhẹ, thiết bị di động",
            color: "purple",
        },
        ecc: {
            title: "ECC RAM",
            where: "Server, workstation chuyên dụng",
            good: "Có khả năng sửa lỗi bộ nhớ",
            bad: "Đắt, cần CPU/main hỗ trợ",
            fit: "Server, máy trạm cần ổn định cao",
            color: "blue",
        },
    };
    const [active, setActive] = useState("ddr4");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Các loại RAM phổ biến"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-5 gap-3 mb-6">
                    {Object.entries(types).map(([key, t]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(t.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                <MemoryStick size={20} /> {t.title}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            <MemoryStick size={32} />
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className={`${textColor(item.color)} font-semibold`}>
                            {item.where}
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
                <div className="mt-6 bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    DDR4/DDR5 = PC desktop • SO-DIMM DDR4/DDR5 = laptop nâng cấp
                    được • LPDDR = laptop mỏng nhẹ, thường không nâng cấp • ECC
                    = server/workstation
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
            detail: "Cho biết máy có thể giữ bao nhiêu dữ liệu đang chạy cùng lúc.",
            impact: "16GB là mức khuyến nghị phổ thông; 32GB tốt cho lập trình, đồ họa, game nặng; 64GB+ cho máy ảo, AI local, workstation.",
        },
        speed: {
            icon: <Gauge />,
            title: "Tốc độ MT/s",
            detail: "DDR4-3200, DDR5-5600, DDR5-6000 là tốc độ truyền dữ liệu lý thuyết.",
            impact: "Số càng cao thì băng thông lý thuyết càng lớn, nhưng còn phụ thuộc CPU, mainboard và BIOS/XMP/EXPO.",
        },
        cl: {
            icon: <Timer />,
            title: "CL – CAS Latency",
            detail: "Độ trễ phản hồi của RAM, ví dụ DDR4-3200 CL16 hoặc DDR5-6000 CL30.",
            impact: "CL càng thấp thường phản hồi càng nhanh, nhưng phải xét cùng tốc độ RAM.",
        },
        channel: {
            icon: <Layers3 />,
            title: "Single / Dual Channel",
            detail: "2 thanh RAM có thể chạy Dual Channel, tạo 2 làn đường dữ liệu với CPU.",
            impact: "2 x 8GB thường có lợi thế hiệu năng hơn 1 x 16GB trong nhiều trường hợp.",
        },
        voltage: {
            icon: <Zap />,
            title: "Điện áp",
            detail: "RAM cần điện để hoạt động, nhiều kit DDR4 chạy khoảng 1.2V–1.35V; DDR5 tùy kit.",
            impact: "Người mới không cần chỉnh tay điện áp nếu không ép xung; bật XMP/EXPO đúng là đủ.",
        },
        compatibility: {
            icon: <Puzzle />,
            title: "Tương thích",
            detail: "RAM phải hợp mainboard, CPU, khe RAM và đôi khi cả chiều cao tản nhiệt.",
            impact: "DDR5 không cắm được vào khe DDR4; RAM laptop SO-DIMM khác RAM desktop DIMM.",
        },
    };
    const [active, setActive] = useState("capacity");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="yellow"
                title="Thông số kỹ thuật quan trọng của RAM"
                icon={<Settings />}
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
                                Cách hiểu thực tế:
                            </strong>{" "}
                            {item.impact}
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-400">
                            RAM hỗ trợ + CPU hỗ trợ + Mainboard hỗ trợ +
                            BIOS/XMP/EXPO đúng → RAM mới chạy đúng cấu hình
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CapacityLab() {
    const scenarios = {
        four: {
            title: "4GB",
            desc: "Rất cơ bản, hiện nay dễ thiếu.",
            result: "Dễ chậm khi mở nhiều tab hoặc họp online.",
            color: "red",
        },
        eight: {
            title: "8GB",
            desc: "Học tập, văn phòng nhẹ, lướt web vừa phải.",
            result: "Dùng được nhưng dễ đầy nếu mở Chrome + Teams + Word + Excel cùng lúc.",
            color: "orange",
        },
        sixteen: {
            title: "16GB",
            desc: "Mức khuyến nghị phổ thông hiện nay.",
            result: "Thoải mái hơn cho học tập, văn phòng, lập trình nhẹ, gaming phổ thông.",
            color: "emerald",
        },
        thirtytwo: {
            title: "32GB",
            desc: "Lập trình, đồ họa, nhiều tab, game nặng, chỉnh ảnh/video.",
            result: "Phù hợp sinh viên IT, Docker nhẹ, Photoshop/Premiere vừa, multitask nặng.",
            color: "cyan",
        },
        sixtyfour: {
            title: "64GB+",
            desc: "Dựng video nặng, máy ảo, AI local, workstation.",
            result: "Dành cho tác vụ chuyên sâu; không làm máy phổ thông nhanh gấp đôi nếu không dùng hết RAM.",
            color: "purple",
        },
    };
    const [active, setActive] = useState("sixteen");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="purple"
                title="Lab: bạn cần bao nhiêu RAM?"
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
                            <p className="font-extrabold">{s.title}</p>
                            <p className="text-xs opacity-75 mt-1">{s.desc}</p>
                        </button>
                    ))}
                </div>
                <div
                    className={`${softBorder(item.color)} border rounded-3xl p-6 grid md:grid-cols-[0.25fr_1fr] gap-5 items-center`}
                >
                    <div
                        className={`w-20 h-20 rounded-3xl ${badgeColor(item.color)} flex items-center justify-center mx-auto`}
                    >
                        <MemoryStick size={38} />
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                        <strong className={textColor(item.color)}>
                            Kết luận:
                        </strong>{" "}
                        {item.result}
                    </p>
                </div>
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <MemoryStick />,
            title: "Corsair Vengeance LPX 16GB DDR4-3200 C16",
            subtitle: "DDR4 phổ biến cho PC",
            color: "cyan",
            points: [
                "Phù hợp văn phòng, học tập",
                "Ổn cho lập trình cơ bản",
                "Ổn cho gaming phổ thông",
                "Dựng video nặng nên cân nhắc 32GB",
                "PC DDR4 8GB nâng lên 16/32GB thường khác biệt rõ",
            ],
            lesson: "DDR4 vẫn rất thực dụng với nhiều PC phổ thông và gaming tầm trung.",
        },
        {
            icon: <MemoryStick />,
            title: "Kingston FURY Beast RGB 16GB DDR5-5600 CL36",
            subtitle: "DDR5 cho nền tảng đời mới",
            color: "emerald",
            points: [
                "DDR5 5600",
                "CAS Latency CL36",
                "Phù hợp Intel/AMD đời mới hỗ trợ DDR5",
                "Gaming 1080p/1440p phù hợp",
                "32GB thoải mái hơn cho đa nhiệm",
            ],
            lesson: "DDR5 không gắn được vào khe DDR4. Mainboard DDR4 dùng DDR4; mainboard DDR5 dùng DDR5.",
        },
        {
            icon: <Laptop />,
            title: "Tình huống dùng RAM thực tế",
            subtitle: "Chọn dung lượng theo việc làm",
            color: "purple",
            points: [
                "Học online, Word, Excel: 8GB tối thiểu, 16GB tốt hơn",
                "Sinh viên IT, VS Code, Docker nhẹ: 16GB tối thiểu, 32GB thoải mái",
                "Photoshop/Premiere 1080p/4K: 32GB nên có",
                "Máy ảo, lab network, AI local: 32–64GB+",
            ],
            lesson: "Chọn RAM theo tác vụ thật, không chỉ theo con số lớn nhất có thể mua.",
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

function UpgradeChecklist() {
    const checks = [
        {
            icon: <MemoryStick />,
            title: "Mainboard dùng DDR4 hay DDR5?",
            desc: "DDR5 không cắm được vào khe DDR4.",
        },
        {
            icon: <Laptop />,
            title: "Desktop DIMM hay laptop SO-DIMM?",
            desc: "Laptop nâng cấp được thường dùng SO-DIMM, desktop dùng DIMM.",
        },
        {
            icon: <Puzzle />,
            title: "Laptop có LPDDR hàn chết không?",
            desc: "Nhiều laptop mỏng nhẹ không nâng cấp RAM được.",
        },
        {
            icon: <Layers3 />,
            title: "Nên mua kit theo cặp",
            desc: "2 x 8GB hoặc 2 x 16GB dễ chạy Dual Channel và ổn định hơn.",
        },
        {
            icon: <Settings />,
            title: "Bật XMP/EXPO sau khi lắp",
            desc: "Nếu không bật, RAM tốc độ cao có thể chạy ở tốc độ mặc định thấp hơn.",
        },
        {
            icon: <Gauge />,
            title: "Kiểm tra chiều cao tản RAM",
            desc: "Một số tản CPU lớn có thể cấn RAM cao.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Checklist trước khi mua / nâng cấp RAM"
                icon={<CheckCircle2 />}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {checks.map((c) => (
                    <div
                        key={c.title}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
                    >
                        <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-300 border border-blue-500/20 flex items-center justify-center mb-4">
                            {React.cloneElement(c.icon, { size: 22 })}
                        </div>
                        <h3 className="text-white font-bold mb-2">{c.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            {c.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function CommonMistakes() {
    const mistakes = [
        {
            wrong: "Cứ RAM nhiều là máy nhanh hơn",
            right: "RAM nhiều chỉ giúp rõ khi máy đang thiếu RAM. Nếu tác vụ chỉ dùng 10GB, nâng từ 32GB lên 64GB gần như không nhanh hơn.",
        },
        {
            wrong: "DDR5 luôn làm máy nhanh hơn DDR4 trong mọi trường hợp",
            right: "DDR5 có băng thông cao hơn, nhưng hiệu năng còn phụ thuộc CPU, mainboard, ứng dụng, độ trễ, số thanh và BIOS.",
        },
        {
            wrong: "Mua RAM nào cũng gắn được",
            right: "RAM phải tương thích mainboard, CPU, loại khe RAM và đôi khi cả chiều cao tản nhiệt.",
        },
    ];
    const tips = [
        "PC/laptop phổ thông hiện nay nên ưu tiên 16GB RAM nếu ngân sách cho phép.",
        "Build PC mới: kiểm tra mainboard dùng DDR4 hay DDR5 trước khi mua RAM.",
        "Nên mua RAM theo kit: 2 x 8GB hoặc 2 x 16GB.",
        "Sau khi lắp RAM tốc độ cao, kiểm tra BIOS đã bật XMP/EXPO chưa.",
        "Nâng từ 8GB lên 16GB thường dễ cảm nhận hơn đổi DDR4 sang DDR5 nếu tác vụ đang thiếu RAM.",
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
                        <Lightbulb /> Mẹo chọn RAM
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
                            <p>RAM = Random Access Memory</p>
                            <p className="text-slate-300">
                                = nơi chứa tạm dữ liệu chương trình đang chạy
                            </p>
                            <br />
                            <p className="text-slate-500"># Vai trò</p>
                            <p className="text-slate-300">SSD/HDD = tủ sách</p>
                            <p className="text-slate-300">
                                RAM = mặt bàn làm việc
                            </p>
                            <p className="text-slate-300">
                                CPU = người xử lý tài liệu
                            </p>
                            <br />
                            <p className="text-slate-500"># Chọn nhanh</p>
                            <p className="text-slate-300">
                                8GB = nhẹ • 16GB = phổ thông • 32GB = thoải mái
                                • 64GB+ = chuyên sâu
                            </p>
                            <br />
                            <p className="text-slate-500"># Lưu ý</p>
                            <p className="text-red-300">
                                Tắt máy → dữ liệu trong RAM mất nếu chưa lưu
                                xuống SSD/HDD.
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
        question: "RAM dùng để làm gì?",
        options: [
            "Lưu dữ liệu vĩnh viễn sau khi tắt máy",
            "Chứa tạm dữ liệu của chương trình đang chạy",
            "Cấp điện cho CPU",
            "Hiển thị hình ảnh ra màn hình",
        ],
        correct: 1,
        explanation:
            "RAM chứa tạm dữ liệu của các chương trình đang chạy để CPU truy cập nhanh hơn.",
    },
    {
        question: "Điều gì xảy ra với dữ liệu trong RAM khi tắt máy?",
        options: [
            "Vẫn còn nguyên",
            "Tự chuyển sang màn hình",
            "Bị mất nếu chưa lưu xuống SSD/HDD",
            "Biến thành dữ liệu trong CPU Cache",
        ],
        correct: 2,
        explanation:
            "RAM là volatile memory, tắt máy là mất dữ liệu nếu chưa được lưu xuống SSD/HDD.",
    },
    {
        question:
            "Cấu hình RAM nào thường có lợi thế hiệu năng hơn trong nhiều trường hợp?",
        options: ["1 x 16GB", "2 x 8GB", "1 x 4GB", "Không dùng RAM"],
        correct: 1,
        explanation:
            "2 x 8GB thường có thể chạy Dual Channel, giúp CPU có 2 làn đường trao đổi dữ liệu với RAM.",
    },
    {
        question: "DDR5 có gắn được vào khe DDR4 không?",
        options: [
            "Có, luôn gắn được",
            "Không, main DDR4 dùng DDR4, main DDR5 dùng DDR5",
            "Chỉ cần bẻ chân RAM",
            "Có nếu bật Wi-Fi",
        ],
        correct: 1,
        explanation:
            "DDR4 và DDR5 khác chuẩn khe cắm và nền tảng hỗ trợ, không cắm lẫn được.",
    },
    {
        question: "XMP/EXPO dùng để làm gì?",
        options: [
            "Giúp mainboard áp cấu hình tốc độ RAM do nhà sản xuất thiết lập",
            "Làm màn hình sáng hơn",
            "Biến SSD thành RAM",
            "Tắt CPU",
        ],
        correct: 0,
        explanation:
            "XMP/EXPO giúp RAM chạy đúng cấu hình tốc độ/timing đã được nhà sản xuất thiết lập, nếu CPU/mainboard hỗ trợ.",
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
                Bạn đã hiểu RAM là nơi chứa tạm dữ liệu chương trình đang chạy.
                Tiếp theo là học các thế hệ RAM để biết máy dùng DDR3, DDR4,
                DDR5 hay LPDDR, và có nâng cấp được không.
            </p>
            <Link
                to="/phan-3-3"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
            >
                Bài tiếp theo: 3.3 — Các loại RAM: DDR3, DDR4, DDR5, LPDDR{" "}
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

function HeroCard({ icon, label, desc, color, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 flex items-center gap-4 ${highlight ? "bg-emerald-500/10 border-emerald-400/50" : softBorder(color)}`}
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

function CompareRow({ label, role, power, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-4`}>
            <p className={`${textColor(color)} font-extrabold`}>{label}</p>
            <p className="text-sm text-slate-300 mt-1">{role}</p>
            <p className="text-xs text-slate-500 mt-1">{power}</p>
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
        purple: "text-purple-300",
        blue: "text-blue-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-emerald-300";
}
