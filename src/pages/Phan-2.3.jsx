import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowDown,
    ArrowRight,
    Award,
    BookOpen,
    Brain,
    Calculator,
    CheckCircle2,
    ChevronRight,
    CircuitBoard,
    ClipboardList,
    Cpu,
    Database,
    Gauge,
    HardDrive,
    Keyboard,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    PackageCheck,
    Puzzle,
    Search,
    Settings,
    Smartphone,
    Sparkles,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-violet-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-violet-500/10 border border-violet-400/30 flex items-center justify-center shadow-lg shadow-violet-500/10">
                            <Cpu className="text-violet-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 2: CPU – Bộ xử lý trung tâm
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-violet-300 bg-violet-400/10 px-3 py-1 rounded-full border border-violet-400/20">
                        Bài 2.3
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreComponents />
                <ChefAnalogy />
                <CpuInternalDiagram />
                <InstructionFlowSimulator />
                <ComponentExplorer />
                <MemoryHierarchy />
                <SpecsExplorer />
                <RealExamples />
                <ComparisonLab />
                <MistakesAndTips />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-violet-300">
                        <BookOpen size={16} /> Phần 2: CPU – Bộ xử lý trung tâm
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Các thành phần
                        <span className="block text-violet-400">
                            bên trong CPU
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        CPU không phải một “cục xử lý” đơn giản. Bên trong nó có
                        CU điều phối, ALU tính toán, Registers lưu tạm cực nhanh
                        và Cache giảm thời gian chờ dữ liệu.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Settings size={16} />} text="CU" />
                        <Tag icon={<Calculator size={16} />} text="ALU" />
                        <Tag
                            icon={<ClipboardList size={16} />}
                            text="Registers"
                        />
                        <Tag icon={<Database size={16} />} text="Cache" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Settings />}
                            label="CU"
                            desc="Chỉ huy"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<Calculator />}
                            label="ALU"
                            desc="Tính toán"
                            color="orange"
                        />
                        <HeroTile
                            icon={<ClipboardList />}
                            label="Registers"
                            desc="Giấy nháp"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<Database />}
                            label="Cache"
                            desc="Ngăn kéo gần CPU"
                            color="violet"
                            highlight
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Công thức nhớ nhanh</p>
                        <p>
                            <span className="text-cyan-300">CU</span> = điều
                            phối
                        </p>
                        <p>
                            <span className="text-orange-300">ALU</span> = số
                            học + logic
                        </p>
                        <p>
                            <span className="text-emerald-300">Registers</span>{" "}
                            + <span className="text-violet-300">Cache</span> =
                            dữ liệu gần CPU
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Nắm 4 thành phần nền tảng bên trong CPU: ALU, CU, Registers, Cache.",
        "Hiểu vai trò của từng khối trong chu trình Fetch → Decode → Execute → Store.",
        "Mô phỏng CPU cộng 5 + 7 và xử lý ký tự trong Word.",
        "Phân biệt Registers, Cache, RAM và SSD/HDD.",
        "Biết vì sao cache, IPC, tập lệnh và register width ảnh hưởng hiệu năng CPU.",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="violet"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-violet-500/50 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-300 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
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

function CoreComponents() {
    const components = [
        {
            icon: <Calculator />,
            name: "ALU",
            full: "Arithmetic Logic Unit",
            role: "Bộ tính toán số học và logic",
            color: "orange",
        },
        {
            icon: <Settings />,
            name: "CU",
            full: "Control Unit",
            role: "Bộ điều khiển, điều phối hoạt động CPU",
            color: "cyan",
        },
        {
            icon: <ClipboardList />,
            name: "Registers",
            full: "Thanh ghi",
            role: "Bộ nhớ cực nhỏ, cực nhanh nằm trong CPU",
            color: "emerald",
        },
        {
            icon: <Database />,
            name: "Cache",
            full: "Bộ nhớ đệm CPU",
            role: "Bộ nhớ nhanh gần nhân CPU, chứa dữ liệu/lệnh hay dùng",
            color: "violet",
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="4 thành phần quan trọng bên trong CPU"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-4">
                    {components.map((c) => (
                        <div
                            key={c.name}
                            className={`${softBorder(c.color)} border rounded-3xl p-6 hover:-translate-y-1 transition-transform`}
                        >
                            <div
                                className={`w-14 h-14 rounded-2xl ${badgeColor(c.color)} flex items-center justify-center mb-4`}
                            >
                                {React.cloneElement(c.icon, { size: 28 })}
                            </div>
                            <h3 className="text-2xl font-extrabold text-white">
                                {c.name}
                            </h3>
                            <p
                                className={`${textColor(c.color)} text-sm font-semibold mb-3`}
                            >
                                {c.full}
                            </p>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                {c.role}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    <p>
                        <span className="text-cyan-300">CU</span> = chỉ huy
                    </p>
                    <p>
                        <span className="text-orange-300">ALU</span> = tính toán
                    </p>
                    <p>
                        <span className="text-emerald-300">Registers</span> =
                        ghi chú tạm siêu nhanh
                    </p>
                    <p>
                        <span className="text-violet-300">Cache</span> = kho nhỏ
                        cực nhanh gần CPU
                    </p>
                </div>
            </div>
        </section>
    );
}

function ChefAnalogy() {
    const rows = [
        {
            cpu: "CU",
            real: "Đọc công thức và chỉ đạo làm gì trước",
            icon: <Settings />,
            color: "cyan",
        },
        {
            cpu: "ALU",
            real: "Thực hiện phép đo, tính, so sánh",
            icon: <Calculator />,
            color: "orange",
        },
        {
            cpu: "Registers",
            real: "Mảnh giấy nhỏ để ghi nhanh con số đang dùng",
            icon: <ClipboardList />,
            color: "emerald",
        },
        {
            cpu: "Cache",
            real: "Kệ nguyên liệu để sẵn cạnh bếp",
            icon: <Database />,
            color: "violet",
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: CPU như đầu bếp chuyên nghiệp"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 md:p-8">
                <p className="text-slate-300 mb-8 leading-relaxed">
                    Một đầu bếp giỏi không chỉ cần biết nấu. Cần người điều
                    phối, dụng cụ tính toán, giấy nháp và nguyên liệu gần tay.
                    CPU cũng có các khối nhỏ phối hợp như vậy.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    {rows.map((r) => (
                        <div
                            key={r.cpu}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex items-center justify-between gap-4"
                        >
                            <div className="flex items-center gap-3 text-slate-300">
                                <div
                                    className={`w-11 h-11 rounded-xl ${badgeColor(r.color)} flex items-center justify-center shrink-0`}
                                >
                                    {React.cloneElement(r.icon, { size: 22 })}
                                </div>
                                <span className="font-extrabold text-white">
                                    {r.cpu}
                                </span>
                            </div>
                            <ArrowRight
                                className="text-slate-600 shrink-0"
                                size={18}
                            />
                            <span className="font-semibold text-slate-300 text-right text-sm">
                                {r.real}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CpuInternalDiagram() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="blue"
                title="Sơ đồ đơn giản bên trong CPU"
                icon={<CircuitBoard />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="bg-slate-950 border border-slate-700 rounded-[2rem] p-6 md:p-8 relative overflow-hidden">
                    <div className="absolute right-6 top-6 text-slate-800">
                        <Cpu size={120} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white mb-8 flex items-center gap-2">
                        <Cpu className="text-blue-300" /> CPU
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 relative z-10">
                        <DiagramBlock
                            icon={<Settings />}
                            title="CU"
                            subtitle="Control Unit"
                            desc="Lấy lệnh, giải mã, điều phối các khối khác"
                            color="cyan"
                        />
                        <DiagramBlock
                            icon={<Calculator />}
                            title="ALU"
                            subtitle="Arithmetic Logic Unit"
                            desc="Tính toán số học và logic"
                            color="orange"
                        />
                        <DiagramBlock
                            icon={<ClipboardList />}
                            title="Registers"
                            subtitle="Thanh ghi"
                            desc="Giữ dữ liệu/lệnh/kết quả tạm thời cực nhanh"
                            color="emerald"
                            wide
                        />
                        <DiagramBlock
                            icon={<Database />}
                            title="Cache"
                            subtitle="L1 / L2 / L3"
                            desc="Bộ nhớ đệm tốc độ cao chứa dữ liệu/lệnh hay dùng"
                            color="violet"
                            wide
                        />
                    </div>
                </div>
                <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-blue-300">Luồng phối hợp:</strong>{" "}
                    RAM/Cache cung cấp lệnh → CU lấy và giải mã → Registers giữ
                    dữ liệu tạm → ALU tính toán/so sánh → kết quả ghi lại vào
                    Registers/Cache/RAM.
                </div>
            </div>
        </section>
    );
}

function InstructionFlowSimulator() {
    const steps = [
        {
            title: "Lệnh: cộng hai số",
            desc: "Chương trình yêu cầu CPU thực hiện phép cộng 5 + 7.",
            icon: <Database />,
            unit: "Instruction",
            color: "blue",
        },
        {
            title: "CU đọc và giải mã",
            desc: "Control Unit hiểu rằng cần lấy hai số vào thanh ghi và yêu cầu ALU cộng.",
            icon: <Settings />,
            unit: "CU",
            color: "cyan",
        },
        {
            title: "Registers giữ 5 và 7",
            desc: "Register A giữ số 5, Register B giữ số 7 để ALU truy cập cực nhanh.",
            icon: <ClipboardList />,
            unit: "Registers",
            color: "emerald",
        },
        {
            title: "ALU thực hiện phép cộng",
            desc: "ALU xử lý 5 + 7 và tạo ra kết quả 12.",
            icon: <Calculator />,
            unit: "ALU",
            color: "orange",
        },
        {
            title: "Kết quả ghi vào Register",
            desc: "Register C giữ kết quả 12. Sau đó kết quả có thể được ghi xuống Cache hoặc RAM.",
            icon: <CheckCircle2 />,
            unit: "Store",
            color: "violet",
        },
    ];

    const [step, setStep] = useState(0);
    const current = steps[step];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="purple"
                title="Mô phỏng: CPU cộng 5 + 7"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[350px] flex flex-col justify-between">
                        <div>
                            <div
                                className={`w-16 h-16 rounded-2xl ${badgeColor(current.color)} flex items-center justify-center mb-5`}
                            >
                                {React.cloneElement(current.icon, { size: 32 })}
                            </div>
                            <p className="text-purple-300 text-sm font-bold mb-2">
                                Bước {step + 1}/{steps.length} • {current.unit}
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {current.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {current.desc}
                            </p>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <button
                                onClick={() =>
                                    setStep((s) => Math.max(0, s - 1))
                                }
                                disabled={step === 0}
                                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
                            >
                                Quay lại
                            </button>
                            <button
                                onClick={() =>
                                    setStep((s) => (s + 1) % steps.length)
                                }
                                className="px-5 py-2 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold transition-colors inline-flex items-center gap-2"
                            >
                                {step === steps.length - 1
                                    ? "Xem lại"
                                    : "Bước tiếp"}
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {steps.map((item, index) => (
                            <button
                                key={item.title}
                                onClick={() => setStep(index)}
                                className={`w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition-all ${
                                    step === index
                                        ? "bg-purple-500/10 border-purple-500/40 text-white"
                                        : index < step
                                          ? "bg-green-500/5 border-green-500/20 text-slate-300"
                                          : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700"
                                }`}
                            >
                                <div
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${step === index ? "bg-purple-500 text-white" : index < step ? "bg-green-500/20 text-green-400" : "bg-slate-900 text-slate-500"}`}
                                >
                                    {index < step ? (
                                        <CheckCircle2 size={18} />
                                    ) : (
                                        index + 1
                                    )}
                                </div>
                                <div>
                                    <p className="font-bold text-sm">
                                        {item.title}
                                    </p>
                                    <p className="text-xs opacity-75 mt-1">
                                        {item.unit}
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

function ComponentExplorer() {
    const data = {
        alu: {
            icon: <Calculator />,
            title: "ALU – Arithmetic Logic Unit",
            subtitle: "Bộ số học và logic",
            color: "orange",
            desc: "ALU thực hiện phép tính số học như cộng, trừ, nhân, chia và phép logic như so sánh lớn/nhỏ/bằng, AND, OR, NOT.",
            examples: [
                "5 + 7 = 12",
                "10 > 3 → Đúng",
                "Mật khẩu nhập vào == mật khẩu lưu?",
            ],
            note: "ALU không quyết định chương trình chạy theo hướng nào; nó chỉ thực hiện phép tính hoặc phép so sánh được giao.",
        },
        cu: {
            icon: <Settings />,
            title: "CU – Control Unit",
            subtitle: "Bộ điều khiển",
            color: "cyan",
            desc: "CU lấy lệnh từ bộ nhớ, giải mã lệnh, điều phối ALU, Registers, Cache, RAM và quyết định dữ liệu đi đâu, lúc nào xử lý, lúc nào ghi kết quả.",
            examples: [
                "Đọc lệnh: cộng A và B",
                "Yêu cầu lấy A/B vào Registers",
                "Ra lệnh cho ALU cộng",
                "Yêu cầu ghi kết quả lại",
            ],
            note: "CU giống nhạc trưởng: không tự chơi tất cả nhạc cụ, nhưng điều phối ai làm gì và lúc nào.",
        },
        registers: {
            icon: <ClipboardList />,
            title: "Registers – Thanh ghi",
            subtitle: "Bộ nhớ tức thời trong CPU",
            color: "emerald",
            desc: "Registers là vùng nhớ cực nhỏ, cực nhanh nằm ngay trong CPU, dùng để giữ dữ liệu đang xử lý, địa chỉ bộ nhớ, lệnh hiện tại và kết quả tạm thời.",
            examples: [
                "Register A giữ số 5",
                "Register B giữ số 7",
                "Register C giữ kết quả 12",
                "Register E giữ kết quả 24",
            ],
            note: "Registers rất nhanh nhưng dung lượng rất nhỏ và không thể nâng cấp như RAM.",
        },
        cache: {
            icon: <Database />,
            title: "Cache – Bộ nhớ đệm CPU",
            subtitle: "Kho nhỏ cực nhanh gần CPU",
            color: "violet",
            desc: "Cache chứa lệnh và dữ liệu mà CPU có khả năng cần dùng lại sớm, giúp giảm thời gian CPU phải chờ RAM.",
            examples: [
                "L1: nhỏ nhất, nhanh nhất",
                "L2: trung gian",
                "L3: lớn hơn, thường dùng chung",
                "Giảm số lần phải xuống RAM",
            ],
            note: "Cache nằm trong hoặc rất gần CPU; chọn CPU là chọn luôn dung lượng/tổ chức cache.",
        },
    };
    const [active, setActive] = useState("alu");
    const item = data[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Khám phá từng thành phần"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-3 mb-6">
                    {Object.entries(data).map(([key, c]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 text-left border transition-all ${active === key ? `${softBorder(c.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(c.icon, { size: 20 })}{" "}
                                {key.toUpperCase()}
                            </div>
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-1">
                            {item.title}
                        </h3>
                        <p
                            className={`${textColor(item.color)} font-semibold text-sm mb-4`}
                        >
                            {item.subtitle}
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                    <div className="space-y-3">
                        {item.examples.map((ex) => (
                            <div
                                key={ex}
                                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-3 text-sm text-slate-300"
                            >
                                <CheckCircle2
                                    className={`${textColor(item.color)} shrink-0 mt-0.5`}
                                    size={18}
                                />
                                <span>{ex}</span>
                            </div>
                        ))}
                        <div
                            className={`${softBorder(item.color)} border rounded-2xl p-5 text-sm text-slate-300`}
                        >
                            <strong className={textColor(item.color)}>
                                Ghi nhớ:
                            </strong>{" "}
                            {item.note}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MemoryHierarchy() {
    const levels = [
        {
            name: "Registers",
            speed: "Nhanh nhất",
            size: "Rất nhỏ",
            analogy: "Mẩu giấy nhỏ ngay trên tay",
            color: "emerald",
        },
        {
            name: "L1 Cache",
            speed: "Cực nhanh",
            size: "Nhỏ",
            analogy: "Ngăn kéo sát tay",
            color: "violet",
        },
        {
            name: "L2 Cache",
            speed: "Rất nhanh",
            size: "Lớn hơn L1",
            analogy: "Ngăn kéo lớn hơn",
            color: "purple",
        },
        {
            name: "L3 Cache",
            speed: "Nhanh",
            size: "Lớn nhất trong CPU",
            analogy: "Kệ dùng chung gần bàn",
            color: "blue",
        },
        {
            name: "RAM",
            speed: "Nhanh nhưng chậm hơn cache",
            size: "Lớn",
            analogy: "Bàn làm việc lớn",
            color: "cyan",
        },
        {
            name: "SSD/HDD",
            speed: "Chậm hơn RAM",
            size: "Rất lớn",
            analogy: "Tủ hồ sơ/kho",
            color: "orange",
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="blue"
                title="Thứ tự truy cập dữ liệu: gần CPU thì nhanh hơn"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="space-y-3">
                    {levels.map((l, index) => (
                        <div
                            key={l.name}
                            className="grid md:grid-cols-[0.4fr_0.8fr_0.8fr_1fr] gap-3 items-center bg-slate-950 border border-slate-800 rounded-2xl p-4"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    className={`w-9 h-9 rounded-xl ${badgeColor(l.color)} flex items-center justify-center font-bold text-sm`}
                                >
                                    {index + 1}
                                </span>
                                <span className="font-extrabold text-white">
                                    {l.name}
                                </span>
                            </div>
                            <p
                                className={`${textColor(l.color)} text-sm font-semibold`}
                            >
                                {l.speed}
                            </p>
                            <p className="text-sm text-slate-400">
                                Dung lượng: {l.size}
                            </p>
                            <p className="text-sm text-slate-300">
                                {l.analogy}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    CPU cần dữ liệu → Registers → L1 Cache → L2 Cache → L3 Cache
                    → RAM → SSD/HDD
                </div>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        cores: {
            icon: <Cpu />,
            title: "Cores – Số nhân",
            relate: "Nhiều cụm ALU/CU/cache",
            meaning: "Nhiều nhân giúp xử lý nhiều việc cùng lúc tốt hơn.",
        },
        threads: {
            icon: <Workflow />,
            title: "Threads – Số luồng",
            relate: "Khả năng xử lý song song logic",
            meaning: "Hữu ích cho đa nhiệm, render, biên dịch, chạy máy ảo.",
        },
        ghz: {
            icon: <Gauge />,
            title: "Xung nhịp – GHz",
            relate: "Tốc độ chu kỳ xử lý",
            meaning: "Ảnh hưởng số chu kỳ CPU xử lý mỗi giây.",
        },
        l1: {
            icon: <Database />,
            title: "L1 Cache",
            relate: "Cache gần nhân nhất",
            meaning: "Cực nhanh, giúp CPU lấy lệnh/dữ liệu tức thì.",
        },
        l2: {
            icon: <Database />,
            title: "L2 Cache",
            relate: "Cache tầng giữa",
            meaning: "Giảm số lần CPU phải xuống L3/RAM.",
        },
        l3: {
            icon: <Database />,
            title: "L3 Cache",
            relate: "Cache lớn dùng chung",
            meaning: "Hữu ích trong game, ứng dụng nhiều dữ liệu, đa nhân.",
        },
        width: {
            icon: <ClipboardList />,
            title: "Register Width",
            relate: "Registers",
            meaning: "CPU 64-bit xử lý địa chỉ và dữ liệu lớn hơn CPU 32-bit.",
        },
        isa: {
            icon: <Puzzle />,
            title: "Instruction Set",
            relate: "CU/ALU",
            meaning: "CPU hỗ trợ những loại lệnh nào, ví dụ x86-64, ARM, AVX.",
        },
        ipc: {
            icon: <Zap />,
            title: "IPC",
            relate: "Kiến trúc CPU",
            meaning:
                "Instructions Per Cycle: mỗi chu kỳ xử lý được bao nhiêu lệnh. IPC cao giúp CPU mạnh dù GHz không quá cao.",
        },
    };

    const [active, setActive] = useState("cores");
    const item = specs[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="yellow"
                title="Thông số kỹ thuật quan trọng cần biết"
                icon={<Settings />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(specs).map(([key, s]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center transition-all ${
                                active === key
                                    ? "bg-yellow-500 text-slate-950 shadow-lg shadow-yellow-500/10"
                                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                            }`}
                        >
                            {React.cloneElement(s.icon, { size: 20 })}
                            <span className="font-bold text-xs">
                                {s.title.split("–")[0].trim()}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center mb-5 border border-yellow-500/20">
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className="text-sm text-yellow-300 font-semibold">
                            Liên quan: {item.relate}
                        </p>
                    </div>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                        <p>{item.meaning}</p>
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-yellow-300">
                                Ví dụ dễ hiểu:
                            </strong>{" "}
                            Hai CPU cùng 4.0GHz chưa chắc mạnh ngang nhau. CPU
                            có kiến trúc tốt hơn, cache lớn hơn, IPC cao hơn có
                            thể xử lý nhiều việc hơn trong cùng một chu kỳ.
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
            title: "Intel Core i5-12400F",
            subtitle: "CPU phổ thông có cache tốt",
            points: [
                "6 nhân / 12 luồng",
                "Turbo tối đa 4.40GHz",
                "18MB Intel Smart Cache",
                "7.5MB L2 Cache",
                "Công suất cơ bản 65W",
            ],
            lesson: "CU điều phối các nhân, ALU xử lý tính toán, Registers giữ dữ liệu tức thời và cache giúp giảm truy cập RAM.",
            color: "orange",
        },
        {
            icon: <Cpu />,
            title: "AMD Ryzen 5 5600",
            subtitle: "L3 Cache 32MB cho gaming tầm trung",
            points: [
                "6 nhân / 12 luồng",
                "Boost khoảng 4.4GHz",
                "L2 Cache 3MB",
                "L3 Cache 32MB",
                "Cần GPU rời nếu bản không có G",
            ],
            lesson: "L3 Cache lớn giúp giảm độ trễ khi CPU cần dữ liệu lặp lại, có lợi trong nhiều game.",
            color: "emerald",
        },
        {
            icon: <Smartphone />,
            title: "CPU trong điện thoại / SoC",
            subtitle: "Nhiều khối tích hợp trên một chip",
            points: [
                "CPU, GPU, NPU, modem, ISP cùng nằm trong SoC",
                "Ưu tiên tiết kiệm pin và ít nóng",
                "Không nâng cấp được như PC",
                "Vẫn dùng CU, ALU, Registers, Cache trong phần CPU",
            ],
            lesson: "Dù hình thức khác PC, phần CPU trong SoC vẫn dùng các ý tưởng nền tảng tương tự.",
            color: "blue",
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
                                <div
                                    key={p}
                                    className="flex items-start gap-2 text-sm text-slate-300"
                                >
                                    <CheckCircle2
                                        className="text-green-400 shrink-0 mt-0.5"
                                        size={16}
                                    />{" "}
                                    {p}
                                </div>
                            ))}
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300">
                            <strong className="text-pink-300">
                                Liên hệ bài học:
                            </strong>{" "}
                            {e.lesson}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function ComparisonLab() {
    const [selected, setSelected] = useState("registers");
    const items = {
        registers: {
            title: "Registers",
            where: "Trong CPU",
            size: "Rất nhỏ",
            speed: "Cực nhanh",
            upgrade: "Không",
            color: "emerald",
        },
        cache: {
            title: "Cache",
            where: "Trong/gần CPU",
            size: "Nhỏ đến vừa",
            speed: "Rất nhanh",
            upgrade: "Không, đi theo CPU",
            color: "violet",
        },
        ram: {
            title: "RAM",
            where: "Trên mainboard",
            size: "Lớn hơn nhiều",
            speed: "Nhanh nhưng chậm hơn cache",
            upgrade: "Có thể, tùy máy",
            color: "cyan",
        },
        ssd: {
            title: "SSD/HDD",
            where: "Thiết bị lưu trữ",
            size: "Rất lớn",
            speed: "Chậm hơn RAM",
            upgrade: "Có thể, tùy máy",
            color: "orange",
        },
    };
    const item = items[selected];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: Registers khác RAM như thế nào?"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-3 mb-6">
                    {Object.entries(items).map(([key, v]) => (
                        <button
                            key={key}
                            onClick={() => setSelected(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${selected === key ? `${softBorder(v.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <p className="font-bold">{v.title}</p>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                    <InfoCard
                        label="Vị trí"
                        value={item.where}
                        color={item.color}
                    />
                    <InfoCard
                        label="Dung lượng"
                        value={item.size}
                        color={item.color}
                    />
                    <InfoCard
                        label="Tốc độ"
                        value={item.speed}
                        color={item.color}
                    />
                    <InfoCard
                        label="Nâng cấp?"
                        value={item.upgrade}
                        color={item.color}
                    />
                </div>
            </div>
        </section>
    );
}

function MistakesAndTips() {
    const mistakes = [
        {
            wrong: "CPU chỉ có nhân và xung nhịp",
            right: "CPU còn có ALU, CU, Registers, Cache, bộ giải mã lệnh, dự đoán nhánh, bộ điều khiển bộ nhớ và nhiều khối khác.",
        },
        {
            wrong: "Cache càng nhiều thì CPU chắc chắn càng mạnh",
            right: "Cache nhiều thường có lợi, nhưng hiệu năng còn phụ thuộc kiến trúc, IPC, xung nhịp, nhân/luồng, độ trễ cache, RAM và phần mềm.",
        },
        {
            wrong: "Registers giống RAM",
            right: "Registers nằm trong CPU, cực nhanh, dung lượng rất nhỏ và không nâng cấp được. RAM nằm trên mainboard, lớn hơn nhiều và có thể nâng cấp ở nhiều máy.",
        },
        {
            wrong: "ALU tự quyết định CPU làm gì",
            right: "ALU chỉ thực hiện tính toán/logic. Việc điều phối thuộc về CU và các khối điều khiển khác.",
        },
    ];

    const tips = [
        "Khi so sánh CPU, hãy xem cache L2/L3, không chỉ nhìn GHz.",
        "Với gaming, L3 Cache có thể ảnh hưởng đáng kể vì game thường truy cập nhiều dữ liệu lặp lại.",
        "Render, nén file, biên dịch code: xem số nhân/luồng, xung nhịp, IPC, cache, RAM và tản nhiệt.",
        "ALU/CU/Registers là phần bên trong CPU, không nâng cấp riêng được.",
        "Cache nằm trong CPU; chọn CPU là chọn luôn cache.",
        "Máy chậm khi mở app/game chưa chắc do CPU yếu; có thể do SSD chậm, RAM thiếu, app nền hoặc nhiệt độ cao.",
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
                        <Lightbulb /> Mẹo ghi nhớ
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
                        <span className="bg-violet-500/20 text-violet-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-violet-300 border border-slate-800 shadow-inner space-y-2">
                            <p>BÊN TRONG CPU</p>
                            <p className="text-slate-300">
                                CU = điều phối, giải mã, ra lệnh
                            </p>
                            <p className="text-slate-300">
                                ALU = tính toán số học + logic
                            </p>
                            <p className="text-slate-300">
                                Registers = bộ nhớ tạm cực nhanh
                            </p>
                            <p className="text-slate-300">
                                Cache = bộ nhớ đệm gần CPU
                            </p>
                            <br />
                            <p className="text-slate-500"># Luồng xử lý</p>
                            <p className="text-slate-300">
                                RAM/Cache → CU → Registers → ALU →
                                Registers/Cache/RAM
                            </p>
                            <br />
                            <p className="text-slate-500"># Thứ tự gần CPU</p>
                            <p className="text-slate-300">
                                Registers → L1 → L2 → L3 → RAM → SSD/HDD
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
        question: "ALU trong CPU có nhiệm vụ chính là gì?",
        options: [
            "Cấp điện cho CPU",
            "Thực hiện phép tính số học và logic",
            "Hiển thị hình ảnh lên màn hình",
            "Lưu file lâu dài sau khi tắt máy",
        ],
        correct: 1,
        explanation:
            "ALU là Arithmetic Logic Unit, chuyên xử lý phép toán số học và logic như cộng, trừ, so sánh, AND, OR, NOT.",
    },
    {
        question: "CU – Control Unit giống vai trò nào nhất?",
        options: [
            "Người điều phối/chỉ huy hoạt động trong CPU",
            "Ổ cứng lưu dữ liệu",
            "Loa phát âm thanh",
            "Quạt tản nhiệt CPU",
        ],
        correct: 0,
        explanation:
            "CU lấy lệnh, giải mã và điều phối ALU, Registers, Cache cùng các khối khác.",
    },
    {
        question: "Thứ tự truy cập dữ liệu hợp lý của CPU thường là?",
        options: [
            "SSD → RAM → L3 → L2 → L1 → Registers",
            "Registers → L1 Cache → L2 Cache → L3 Cache → RAM → SSD/HDD",
            "Màn hình → Loa → Chuột → CPU",
            "PSU → Case → Bàn phím → Máy in",
        ],
        correct: 1,
        explanation:
            "CPU ưu tiên dữ liệu gần nhất và nhanh nhất trước: Registers, cache các cấp, RAM, rồi đến lưu trữ lâu dài.",
    },
    {
        question: "Registers khác RAM ở điểm nào?",
        options: [
            "Registers nằm trong CPU, rất nhỏ và cực nhanh",
            "Registers là ổ cứng ngoài",
            "Registers luôn nâng cấp được như RAM",
            "Registers dùng để phát âm thanh",
        ],
        correct: 0,
        explanation:
            "Registers là vùng nhớ cực nhỏ trong CPU, nhanh hơn RAM rất nhiều nhưng không nâng cấp riêng được.",
    },
    {
        question: "Cache CPU dùng để làm gì?",
        options: [
            "Cấp điện cho mainboard",
            "Chứa dữ liệu/lệnh CPU có thể cần dùng lại sớm để giảm chờ RAM",
            "Làm màn hình sáng hơn",
            "Thay thế hoàn toàn SSD",
        ],
        correct: 1,
        explanation:
            "Cache là bộ nhớ đệm tốc độ cao gần CPU, giúp CPU lấy lệnh/dữ liệu nhanh hơn và giảm thời gian chờ RAM.",
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
        } else {
            setCurrentQ("finished");
        }
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
                    <strong className="text-violet-400">
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
                <span className="text-violet-400">
                    Câu hỏi {currentQ + 1}/{questions.length}
                </span>
                <span className="text-slate-500">Điểm: {score}</span>
            </div>

            <h4 className="text-lg font-bold text-white mb-6 leading-snug">
                {q.question}
            </h4>

            <div className="space-y-3 flex-grow">
                {q.options.map((opt, idx) => {
                    let btnClass =
                        "w-full text-left p-4 rounded-xl border text-sm transition-all ";
                    if (!showResult) {
                        btnClass +=
                            "border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300";
                    } else if (idx === q.correct) {
                        btnClass +=
                            "border-green-500 bg-green-500/10 text-green-400";
                    } else if (idx === selected) {
                        btnClass += "border-red-500 bg-red-500/10 text-red-400";
                    } else {
                        btnClass +=
                            "border-slate-900 bg-slate-900/50 text-slate-600 opacity-60";
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => handleSelect(idx)}
                            disabled={showResult}
                            className={btnClass}
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>

            {showResult && (
                <div className="mt-6 pt-6 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2">
                    <div
                        className={`p-4 rounded-xl text-sm mb-4 ${selected === q.correct ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"}`}
                    >
                        <strong>Giải thích:</strong> {q.explanation}
                    </div>
                    <button
                        onClick={handleNext}
                        className="w-full py-3 bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu CU điều phối, ALU tính toán, Registers lưu tạm cực
                nhanh và Cache giảm thời gian chờ dữ liệu. Tiếp theo là học xung
                nhịp CPU để hiểu vì sao GHz quan trọng nhưng không phải tất cả.
            </p>
            <Link
                to="/phan-2-4"
                className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-violet-500/20"
            >
                Bài tiếp theo: 2.4 — Xung nhịp CPU và ý nghĩa{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "violet" }) {
    const colorMap = {
        violet: "bg-violet-500/20 text-violet-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
        blue: "bg-blue-500/20 text-blue-300",
        purple: "bg-purple-500/20 text-purple-300",
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

function HeroTile({ icon, label, desc, color, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-violet-500/10 border-violet-400/50" : softBorder(color)}`}
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

function DiagramBlock({ icon, title, subtitle, desc, color }) {
    return (
        <div
            className={`${softBorder(color)} border rounded-3xl p-5 flex gap-4 items-start`}
        >
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center shrink-0`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <div>
                <h4 className="font-extrabold text-white text-lg">{title}</h4>
                <p className={`${textColor(color)} text-xs font-semibold mb-2`}>
                    {subtitle}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

function InfoCard({ label, value, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-5`}>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                {label}
            </p>
            <p className="text-white font-bold">{value}</p>
        </div>
    );
}

function badgeColor(color) {
    const map = {
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        violet: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.violet;
}

function softBorder(color) {
    const map = {
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        violet: "bg-violet-500/5 border-violet-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.violet;
}

function textColor(color) {
    const map = {
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        violet: "text-violet-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-violet-300";
}
