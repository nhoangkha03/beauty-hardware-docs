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
    Wrench,
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
                            <Wrench className="text-emerald-400" size={24} />
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
                        Bài 3.8
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreQuestions />
                <TireAnalogy />
                <UpgradeFlowSimulator />
                <CapacityGuide />
                <MachineTypeGuide />
                <StickConfigGuide />
                <SpecsExplorer />
                <RealExamples />
                <RamPickerLab />
                <InstallSafetyGuide />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextPart />
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
                        <BookOpen size={16} /> Bài cuối Phần 3: Bộ nhớ
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Cách chọn
                        <span className="block text-emerald-400">
                            và nâng cấp RAM
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Sau khi học RAM, DDR, thông số, Dual Channel, BIOS/UEFI
                        và bộ nhớ ảo, đây là bài tổng kết để bạn biết khi nào
                        cần nâng RAM, mua bao nhiêu GB, mua mấy thanh và lắp sao
                        cho đúng.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<MemoryStick size={16} />}
                            text="DDR3 / DDR4 / DDR5"
                        />
                        <Tag
                            icon={<Laptop size={16} />}
                            text="DIMM / SO-DIMM / LPDDR"
                        />
                        <Tag icon={<Layers3 size={16} />} text="Dual Channel" />
                        <Tag icon={<Gauge size={16} />} text="XMP / EXPO" />
                        <Tag
                            icon={<ShieldCheck size={16} />}
                            text="Test ổn định"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="space-y-3">
                        <HeroCard
                            icon={<Search />}
                            label="Kiểm tra máy"
                            desc="DDR mấy, còn khe không, tối đa bao nhiêu GB"
                            color="cyan"
                        />
                        <HeroCard
                            icon={<Database />}
                            label="Chọn dung lượng"
                            desc="16GB, 32GB, 64GB+ theo nhu cầu"
                            color="emerald"
                            highlight
                        />
                        <HeroCard
                            icon={<Layers3 />}
                            label="Chọn số thanh"
                            desc="2 x 8GB, 2 x 16GB, 2 x 32GB"
                            color="blue"
                        />
                        <HeroCard
                            icon={<Wrench />}
                            label="Lắp và kiểm tra"
                            desc="BIOS/Windows, Dual Channel, XMP/EXPO, test RAM"
                            color="orange"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Quy trình chọn RAM</p>
                        <p>Chuẩn DDR → dạng RAM → dung lượng</p>
                        <p className="text-emerald-300">
                            → số thanh → tốc độ/CL → lắp/test
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Biết khi nào cần nâng RAM và khi nào chưa cần nâng.",
        "Chọn đúng DDR3/DDR4/DDR5, DIMM/SO-DIMM/LPDDR và khả năng nâng cấp của máy.",
        "Chọn dung lượng RAM theo nhu cầu: 16GB, 32GB, 64GB hoặc hơn.",
        "Chọn số thanh RAM hợp lý để tận dụng Dual Channel và ổn định lâu dài.",
        "Lắp RAM an toàn, bật XMP/EXPO nếu cần và kiểm tra ổn định sau nâng cấp.",
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

function CoreQuestions() {
    const questions = [
        "Máy dùng DDR3, DDR4 hay DDR5?",
        "Máy là desktop hay laptop?",
        "Máy còn khe RAM trống không?",
        "Máy hỗ trợ tối đa bao nhiêu GB RAM?",
        "Nhu cầu cần 8GB, 16GB, 32GB hay 64GB?",
        "Nên mua 1 thanh, 2 thanh hay thay cả kit?",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: chọn RAM là chọn cái gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">Chọn RAM</strong>{" "}
                            không chỉ là chọn dung lượng lớn hơn. RAM phải tương
                            thích với CPU, mainboard, khe RAM, BIOS/UEFI và đôi
                            khi cả chiều cao tản nhiệt CPU.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-cyan-300">
                                Nguyên tắc:
                            </strong>{" "}
                            Đúng chuẩn, đúng dạng, đúng dung lượng, đúng số
                            thanh và đúng khả năng hỗ trợ của máy.
                        </div>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <Search className="text-cyan-300" /> 6 câu hỏi trước
                            khi mua RAM
                        </h3>
                        <div className="space-y-3">
                            {questions.map((q, i) => (
                                <div
                                    key={q}
                                    className="flex items-start gap-3 text-sm text-slate-300"
                                >
                                    <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center justify-center font-bold shrink-0">
                                        {i + 1}
                                    </span>
                                    <span className="pt-1">{q}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TireAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: chọn RAM như chọn lốp xe"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-4">
                    <AnalogyCard
                        icon={<Puzzle />}
                        title="Đúng kích thước"
                        desc="DDR4 không thay cho DDR5, DIMM desktop không thay cho SO-DIMM laptop."
                        color="cyan"
                    />
                    <AnalogyCard
                        icon={<Database />}
                        title="Đúng tải trọng"
                        desc="Dung lượng RAM phải đủ cho tác vụ: học tập, gaming, Docker, video, AI."
                        color="emerald"
                    />
                    <AnalogyCard
                        icon={<Gauge />}
                        title="Đúng tốc độ"
                        desc="Tốc độ RAM phải nằm trong khả năng CPU/mainboard/laptop hỗ trợ."
                        color="amber"
                    />
                    <AnalogyCard
                        icon={<PackageCheck />}
                        title="Đúng nhu cầu"
                        desc="Không phải cứ đắt hơn là lắp được hoặc nhanh hơn rõ rệt."
                        color="purple"
                    />
                </div>
            </div>
        </section>
    );
}

function UpgradeFlowSimulator() {
    const steps = [
        {
            icon: <Gauge />,
            title: "Xác định dấu hiệu thiếu RAM",
            desc: "Memory 90–100%, Chrome reload tab, VS Code/Docker đơ, Photoshop báo thiếu memory.",
            color: "rose",
        },
        {
            icon: <Search />,
            title: "Kiểm tra máy đang có gì",
            desc: "Task Manager, CPU-Z, HWiNFO, Speccy hoặc trang support hãng để xem DDR, khe, tốc độ, form factor.",
            color: "cyan",
        },
        {
            icon: <Database />,
            title: "Chọn dung lượng",
            desc: "16GB cho phổ thông; 32GB cho gaming/lập trình/đồ họa vừa; 64GB+ cho VM/video/AI/workstation.",
            color: "emerald",
        },
        {
            icon: <Layers3 />,
            title: "Chọn số thanh",
            desc: "Ưu tiên kit 2 x 8GB, 2 x 16GB, 2 x 32GB để có Dual Channel và ổn định hơn.",
            color: "blue",
        },
        {
            icon: <Wrench />,
            title: "Lắp an toàn",
            desc: "Tắt máy, rút nguồn, xả điện dư, chống tĩnh điện, cắm đúng khe, đóng máy.",
            color: "orange",
        },
        {
            icon: <ShieldCheck />,
            title: "Kiểm tra sau khi lắp",
            desc: "BIOS/Windows nhận đủ RAM chưa, tốc độ đúng không, Dual Channel chưa, có cần bật XMP/EXPO không.",
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
                title="Quy trình thực chiến khi nâng RAM"
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

function CapacityGuide() {
    const rows = [
        [
            "Học online, Word, Excel, web nhẹ",
            "8GB",
            "16GB",
            "8GB dùng được nhưng dễ thiếu nếu mở nhiều tab",
        ],
        [
            "Văn phòng nhiều app, họp online, Chrome nhiều tab",
            "16GB",
            "16GB – 32GB",
            "16GB là mức hợp lý",
        ],
        [
            "Sinh viên IT, VS Code, database local nhẹ",
            "16GB",
            "32GB",
            "Docker/máy ảo nên ưu tiên 32GB",
        ],
        ["Gaming phổ thông", "16GB", "32GB", "Game mới ngày càng ăn RAM hơn"],
        ["Photoshop, Lightroom", "16GB", "32GB", "File lớn nên có 32GB"],
        [
            "Premiere, After Effects, dựng video 4K",
            "32GB",
            "64GB",
            "Phụ thuộc độ nặng project",
        ],
        [
            "Máy ảo, lab network, Docker nhiều container",
            "32GB",
            "64GB+",
            "Càng nhiều VM càng cần RAM",
        ],
        [
            "AI local, workstation, render nặng",
            "64GB",
            "64GB – 128GB+",
            "Tùy model/tác vụ",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="emerald"
                title="Chọn dung lượng RAM theo nhu cầu"
                icon={<Database />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[850px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Nhu cầu sử dụng</th>
                            <th className="p-4">RAM tối thiểu</th>
                            <th className="p-4">RAM nên chọn</th>
                            <th className="p-4">Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([need, min, rec, note]) => (
                            <tr
                                key={need}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-white font-semibold">
                                    {need}
                                </td>
                                <td className="p-4 text-orange-300 font-bold">
                                    {min}
                                </td>
                                <td className="p-4 text-emerald-300 font-bold">
                                    {rec}
                                </td>
                                <td className="p-4 text-slate-300">{note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300 text-center">
                Người dùng phổ thông: 16GB • Gaming / lập trình / đồ họa vừa:
                32GB • Workstation / máy ảo / video nặng: 64GB+
            </div>
        </section>
    );
}

function MachineTypeGuide() {
    const rows = [
        [
            "PC desktop cũ",
            "DDR3/DDR4 DIMM",
            "Thường nâng được",
            "Kiểm tra mainboard hỗ trợ DDR mấy",
        ],
        [
            "PC desktop mới",
            "DDR4 hoặc DDR5 DIMM",
            "Thường nâng được",
            "DDR4 và DDR5 không cắm lẫn được",
        ],
        [
            "Laptop phổ thông",
            "DDR4/DDR5 SO-DIMM",
            "Có thể nâng nếu còn khe",
            "Cần mở nắp kiểm tra hoặc xem thông số hãng",
        ],
        [
            "Laptop mỏng nhẹ",
            "LPDDR4X/LPDDR5/LPDDR5X",
            "Thường không nâng được",
            "RAM hay bị hàn chết",
        ],
        ["Mini PC", "SO-DIMM hoặc RAM hàn", "Tùy máy", "Phải xem đúng model"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="blue"
                title="Chọn RAM theo loại máy"
                icon={<Laptop />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[820px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Loại máy</th>
                            <th className="p-4">RAM thường dùng</th>
                            <th className="p-4">Khả năng nâng cấp</th>
                            <th className="p-4">Lưu ý</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((r) => (
                            <tr
                                key={r[0]}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-white font-semibold">
                                    {r[0]}
                                </td>
                                <td className="p-4 text-blue-300 font-bold">
                                    {r[1]}
                                </td>
                                <td className="p-4 text-slate-300">{r[2]}</td>
                                <td className="p-4 text-slate-300">{r[3]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                <RuleCard
                    label="Desktop RAM DIMM"
                    value="≠ Laptop RAM SO-DIMM"
                    color="cyan"
                />
                <RuleCard label="DDR4" value="≠ DDR5" color="rose" />
                <RuleCard
                    label="LPDDR"
                    value="Thường không tự nâng cấp được"
                    color="purple"
                />
            </div>
        </section>
    );
}

function StickConfigGuide() {
    const rows = [
        [
            "1 x 8GB",
            "Rẻ, dễ nâng cấp thêm",
            "Single Channel, dễ thiếu RAM",
            "Máy rất cơ bản",
            "orange",
        ],
        [
            "2 x 8GB",
            "16GB + Dual Channel",
            "Hết 2 khe nếu máy chỉ có 2 khe",
            "Văn phòng, học tập, gaming phổ thông",
            "emerald",
        ],
        [
            "1 x 16GB",
            "Dễ nâng thêm 1 thanh sau",
            "Có thể chỉ Single Channel",
            "Khi chắc chắn sẽ nâng thêm",
            "cyan",
        ],
        [
            "2 x 16GB",
            "32GB + Dual Channel, rất cân bằng",
            "Giá cao hơn 16GB",
            "Gaming, lập trình, đồ họa",
            "blue",
        ],
        [
            "2 x 32GB",
            "64GB, dễ ổn định hơn 4 thanh DDR5",
            "Giá cao",
            "Workstation, máy ảo, video nặng",
            "purple",
        ],
        [
            "4 x 16GB",
            "64GB, tận dụng 4 khe",
            "Có thể khó ổn định ở tốc độ cao",
            "Khi đã có sẵn kit hoặc cần đủ khe",
            "orange",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="purple"
                title="Chọn số thanh RAM"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[900px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Cấu hình</th>
                            <th className="p-4">Ưu điểm</th>
                            <th className="p-4">Nhược điểm</th>
                            <th className="p-4">Nên dùng khi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([config, good, bad, fit, color]) => (
                            <tr
                                key={config}
                                className="border-t border-slate-800"
                            >
                                <td
                                    className={`p-4 font-extrabold ${textColor(color)}`}
                                >
                                    {config}
                                </td>
                                <td className="p-4 text-slate-300">{good}</td>
                                <td className="p-4 text-slate-300">{bad}</td>
                                <td className="p-4 text-slate-300">{fit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300 text-center">
                16GB nên chọn 2 x 8GB • 32GB nên chọn 2 x 16GB • 64GB DDR5 nên
                ưu tiên 2 x 32GB nếu có thể
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        ddr: {
            icon: <MemoryStick />,
            title: "Chuẩn RAM",
            detail: "DDR3, DDR4, DDR5, LPDDR là thông số phải kiểm tra đầu tiên.",
            impact: "Main DDR4 dùng DDR4; main DDR5 dùng DDR5; laptop LPDDR hàn chết thường không nâng được.",
        },
        form: {
            icon: <Laptop />,
            title: "Form factor",
            detail: "DIMM/UDIMM cho desktop, SO-DIMM cho laptop/mini PC, LPDDR hàn trên mainboard.",
            impact: "Mua sai form factor là không cắm được.",
        },
        max: {
            icon: <Database />,
            title: "Dung lượng tối đa",
            detail: "Không phải máy nào cũng hỗ trợ RAM vô hạn.",
            impact: "Kiểm tra mainboard/laptop hỗ trợ tối đa bao nhiêu GB và mỗi khe tối đa bao nhiêu GB.",
        },
        speed: {
            icon: <Gauge />,
            title: "Tốc độ RAM",
            detail: "DDR4-3200, DDR5-5600, DDR5-6000 cần CPU/mainboard hỗ trợ.",
            impact: "RAM 6000 + CPU/mainboard hỗ trợ + bật XMP/EXPO mới có thể chạy đúng 6000.",
        },
        cl: {
            icon: <Timer />,
            title: "Độ trễ CL",
            detail: "Không nên chỉ nhìn CL. Phải xét cùng tốc độ MT/s.",
            impact: "Độ trễ ns ≈ CL × 2000 / MT/s.",
        },
        profile: {
            icon: <Settings />,
            title: "XMP / EXPO",
            detail: "Profile giúp RAM chạy theo cấu hình tốc độ cao đã được nhà sản xuất thiết lập.",
            impact: "Sau khi lắp RAM, cần kiểm tra và bật nếu RAM chạy thấp hơn quảng cáo.",
        },
        ecc: {
            icon: <ShieldCheck />,
            title: "ECC hay Non-ECC",
            detail: "Non-ECC dùng cho PC/laptop phổ thông; ECC dùng cho server/workstation cần sửa lỗi bộ nhớ.",
            impact: "ECC cần CPU và mainboard hỗ trợ.",
        },
    };
    const [active, setActive] = useState("ddr");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="yellow"
                title="Thông số kỹ thuật quan trọng khi chọn RAM"
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
                                Cách hiểu thực tế:
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
            icon: <Monitor />,
            title: "Nâng PC DDR4 phổ thông lên 16GB",
            subtitle: "Corsair Vengeance LPX 16GB 2 x 8GB DDR4-3200 C16",
            color: "cyan",
            points: [
                "16GB gồm 2 x 8GB",
                "DDR4-3200",
                "Timing 16-18-18-36",
                "Điện áp 1.35V",
                "XMP 2.0",
                "UDIMM 288-pin",
            ],
            lesson: "Phù hợp PC desktop DDR4 cho văn phòng, học tập, gaming phổ thông và lập trình cơ bản.",
        },
        {
            icon: <Gamepad2 />,
            title: "Build PC DDR5 mới với 32GB",
            subtitle: "G.SKILL Flare X5 32GB 2 x 16GB DDR5-6000 CL30",
            color: "emerald",
            points: [
                "32GB total capacity",
                "2 x 16GB",
                "DDR5-6000",
                "Timing CL30-38-38-96",
                "Điện áp 1.35V",
                "DDR5 U-DIMM 288-pin",
                "AMD EXPO",
            ],
            lesson: "32GB DDR5-6000 CL30 rất cân bằng cho PC DDR5 gaming/lập trình/đồ họa vừa nếu nền tảng hỗ trợ.",
        },
        {
            icon: <Laptop />,
            title: "Nâng RAM laptop DDR5 SO-DIMM",
            subtitle: "Laptop có khe rời",
            color: "blue",
            points: [
                "Kiểm tra DDR5 hay DDR4",
                "SO-DIMM hay LPDDR hàn chết",
                "Tối đa bao nhiêu GB",
                "Có mấy khe RAM",
                "Bus tối đa hỗ trợ",
                "Có Dual Channel không",
            ],
            lesson: "Laptop dùng LPDDR hàn chết thường không nâng được; nếu cần 32GB nên chọn bản 32GB ngay từ lúc mua.",
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

function RamPickerLab() {
    const scenarios = {
        office: {
            icon: <Laptop />,
            title: "Học tập / văn phòng",
            answer: "16GB là mức rất ổn hiện nay. Nếu máy đang 8GB và hay mở nhiều tab/họp online, nâng lên 16GB thường đáng tiền.",
            color: "emerald",
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Gaming / lập trình phổ thông",
            answer: "32GB, ưu tiên 2 x 16GB để có Dual Channel. Với DDR5, 2 thanh thường ổn định hơn 4 thanh ở tốc độ cao.",
            color: "blue",
        },
        docker: {
            icon: <Cpu />,
            title: "Docker / máy ảo",
            answer: "32GB là mức nên có, 64GB+ nếu chạy nhiều VM/container/database local hoặc lab network nặng.",
            color: "purple",
        },
        thinLaptop: {
            icon: <Laptop />,
            title: "Laptop mỏng nhẹ LPDDR",
            answer: "Thường không nâng được RAM sau mua. Hãy chọn đủ từ đầu: 16GB tối thiểu tốt hơn 8GB, 32GB nếu làm việc nặng.",
            color: "rose",
        },
        oldPc: {
            icon: <HardDrive />,
            title: "PC cũ DDR3/DDR4",
            answer: "Kiểm tra mainboard hỗ trợ DDR mấy và tối đa bao nhiêu GB. Nếu máy quá cũ, nâng SSD hoặc đổi nền tảng có thể đáng hơn nâng RAM nhiều.",
            color: "orange",
        },
    };
    const [active, setActive] = useState("gaming");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: chọn RAM theo tình huống"
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

function InstallSafetyGuide() {
    const desktop = [
        "Tắt máy hoàn toàn",
        "Rút nguồn",
        "Nhấn nút nguồn vài giây để xả điện dư",
        "Chạm tay vào phần kim loại case để giảm tĩnh điện",
        "Mở nắp máy",
        "Cắm RAM đúng chiều, đúng khe",
        "Đóng máy",
        "Bật máy kiểm tra BIOS/Windows",
    ];
    const laptop = [
        "Tắt máy",
        "Rút sạc",
        "Nếu tháo được pin, ngắt pin",
        "Mở nắp đáy cẩn thận",
        "Cắm RAM góc khoảng 30 độ rồi ấn xuống",
        "Khóa hai ngàm hai bên",
        "Đóng máy",
        "Kiểm tra nhận RAM trong BIOS/Windows",
    ];
    const tests = [
        "Máy có nhận đủ RAM không?",
        "RAM chạy Single hay Dual Channel?",
        "Tốc độ có đúng không?",
        "Có cần bật XMP/EXPO không?",
        "Máy có ổn định không?",
        "Test bằng Windows Memory Diagnostic, MemTest86, TestMem5 hoặc OCCT Memory Test",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="orange"
                title="Lắp RAM an toàn và kiểm tra sau khi lắp"
                icon={<ShieldCheck />}
            />
            <div className="grid lg:grid-cols-3 gap-4">
                <ChecklistCard
                    title="PC desktop"
                    items={desktop}
                    color="cyan"
                    icon={<Monitor />}
                />
                <ChecklistCard
                    title="Laptop"
                    items={laptop}
                    color="emerald"
                    icon={<Laptop />}
                />
                <ChecklistCard
                    title="Kiểm tra sau lắp"
                    items={tests}
                    color="purple"
                    icon={<Search />}
                />
            </div>
        </section>
    );
}

function CommonMistakes() {
    const mistakes = [
        {
            wrong: "Máy nào cũng nâng RAM được",
            right: "Không phải. Laptop mỏng nhẹ dùng LPDDR thường hàn RAM trên mainboard, không nâng bằng SO-DIMM được.",
        },
        {
            wrong: "DDR4 và DDR5 chỉ khác tốc độ, chắc cắm được",
            right: "Sai. DDR4 và DDR5 khác khe, điện áp và thiết kế. Không cắm lẫn được.",
        },
        {
            wrong: "Cứ mua thêm một thanh RAM bất kỳ là được",
            right: "Trộn RAM khác hãng/bus/timing/chip nhớ có thể không bật XMP/EXPO, hạ bus, màn hình xanh hoặc không boot.",
        },
        {
            wrong: "4 khe RAM nghĩa là Quad Channel",
            right: "Đa số PC phổ thông có 4 khe nhưng CPU vẫn chỉ hỗ trợ Dual Channel.",
        },
        {
            wrong: "Lắp RAM xong là tự chạy đúng bus quảng cáo",
            right: "Chưa chắc. RAM DDR4-3200 hoặc DDR5-6000 có thể chạy thấp hơn nếu chưa bật XMP/EXPO.",
        },
    ];
    const tips = [
        "Bước 1: Kiểm tra máy trước khi mua RAM bằng Task Manager, CPU-Z, HWiNFO, Speccy hoặc trang support hãng.",
        "Bước 2: Xác định nhu cầu thật: 16GB phổ thông, 32GB gaming/lập trình, 64GB+ video/VM/AI.",
        "Bước 3: Ưu tiên mua RAM theo kit 2 x 8GB, 2 x 16GB hoặc 2 x 32GB.",
        "Bước 4: Laptop phải kiểm tra RAM onboard/hàn chết hay có khe rời.",
        "Bước 5: Sau khi lắp, kiểm tra dung lượng, tốc độ, channel và test ổn định.",
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
                            13
                        </span>
                        Tóm tắt Phần 3 & Quiz cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-emerald-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                CHỌN RAM = đúng chuẩn + đúng dạng + đúng dung
                                lượng + đúng số thanh
                            </p>
                            <br />
                            <p className="text-slate-500"># Dung lượng</p>
                            <p className="text-slate-300">
                                16GB = phổ thông tốt
                            </p>
                            <p className="text-slate-300">
                                32GB = gaming / lập trình / đồ họa vừa
                            </p>
                            <p className="text-slate-300">
                                64GB+ = VM / video nặng / AI / workstation
                            </p>
                            <br />
                            <p className="text-slate-500"># Số thanh</p>
                            <p className="text-slate-300">
                                2 x 8GB, 2 x 16GB, 2 x 32GB thường cân bằng hơn
                            </p>
                            <br />
                            <p className="text-red-300">
                                DDR4 ≠ DDR5 • Desktop DIMM ≠ Laptop SO-DIMM •
                                LPDDR thường hàn chết
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
        question: "Trước khi mua RAM, thông tin nào cần kiểm tra đầu tiên?",
        options: [
            "RAM có RGB không",
            "Máy dùng DDR3, DDR4 hay DDR5",
            "Vỏ hộp RAM màu gì",
            "RAM có tên nghe mạnh không",
        ],
        correct: 1,
        explanation:
            "Chuẩn DDR là thông tin phải kiểm tra đầu tiên vì DDR4 và DDR5 không cắm lẫn được.",
    },
    {
        question:
            "Cấu hình nào thường hợp lý cho PC gaming/lập trình phổ thông hiện nay?",
        options: ["1 x 4GB", "2 x 16GB", "Không cần RAM", "1 x 2GB"],
        correct: 1,
        explanation:
            "2 x 16GB cho 32GB RAM và Dual Channel, rất cân bằng cho gaming/lập trình phổ thông.",
    },
    {
        question:
            "Laptop dùng LPDDR hàn chết thì thường có nâng RAM bằng thanh SO-DIMM được không?",
        options: [
            "Có, luôn luôn được",
            "Không, thường không nâng cấp được",
            "Chỉ cần bật XMP là được",
            "Cắm RAM desktop vào là được",
        ],
        correct: 1,
        explanation:
            "LPDDR thường hàn trên mainboard, không tháo lắp như thanh SO-DIMM.",
    },
    {
        question:
            "Sau khi lắp RAM DDR5-6000 nhưng máy chỉ chạy DDR5-4800, nên kiểm tra gì?",
        options: [
            "Độ sáng màn hình",
            "Đã bật XMP/EXPO trong BIOS/UEFI chưa",
            "Dây HDMI",
            "Chuột có dây hay không dây",
        ],
        correct: 1,
        explanation:
            "RAM tốc độ cao thường cần bật XMP/EXPO trong BIOS/UEFI nếu CPU/mainboard hỗ trợ ổn định.",
    },
    {
        question: "Vì sao nên ưu tiên mua RAM theo kit?",
        options: [
            "Vì kit thường được thiết kế/test để chạy cùng nhau ổn định hơn",
            "Vì kit thay thế được SSD",
            "Vì kit không cần mainboard",
            "Vì kit làm CPU biến mất",
        ],
        correct: 0,
        explanation:
            "RAM cùng kit thường đồng bộ dung lượng, chip nhớ, timing và profile, giúp ổn định hơn so với trộn lẻ.",
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

function NextPart() {
    return (
        <div className="text-center pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">
                Bạn đã hoàn thành Phần 3 – Bộ nhớ RAM. Tiếp theo là Phần 4 về
                thiết bị lưu trữ: SSD, HDD, NVMe, SATA, M.2 — những thành phần
                quyết định tốc độ mở Windows, mở phần mềm, copy file và load
                game.
            </p>
            <Link
                to="/phan-4-1"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
            >
                Sang Phần 4.1 — Tổng quan về thiết bị lưu trữ{" "}
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

function RuleCard({ label, value, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-5`}>
            <p className={`${textColor(color)} font-bold text-sm mb-1`}>
                {label}
            </p>
            <p className="text-slate-300 text-sm">{value}</p>
        </div>
    );
}

function ChecklistCard({ title, items, color, icon }) {
    return (
        <div className={`${softBorder(color)} border rounded-3xl p-6`}>
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center mb-4`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <h3 className="text-white font-bold text-xl mb-4">{title}</h3>
            <div className="space-y-2">
                {items.map((item) => (
                    <Bullet key={item} text={item} />
                ))}
            </div>
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
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        rose: "bg-rose-500/10 text-rose-300 border border-rose-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.emerald;
}

function softBorder(color) {
    const map = {
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        rose: "bg-rose-500/5 border-rose-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.emerald;
}

function textColor(color) {
    const map = {
        emerald: "text-emerald-300",
        cyan: "text-cyan-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        orange: "text-orange-300",
        rose: "text-rose-300",
        red: "text-red-300",
    };
    return map[color] || "text-emerald-300";
}
