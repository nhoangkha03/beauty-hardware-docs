import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowDown,
    ArrowRight,
    Award,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    CircuitBoard,
    Cpu,
    Database,
    Gauge,
    HardDrive,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    PackageCheck,
    Puzzle,
    RefreshCcw,
    Route,
    Search,
    Server,
    Settings,
    SplitSquareHorizontal,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                            <CircuitBoard className="text-cyan-400" size={24} />
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
                    <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                        Bài 2.2
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <ChefAnalogy />
                <ArchitectureSimulator />
                <VonNeumannSection />
                <HarvardSection />
                <ModifiedHarvardSection />
                <ComparisonSection />
                <ConceptExplorer />
                <RealExamples />
                <BottleneckLab />
                <MistakesAndTips />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
                        <BookOpen size={16} /> Phần 2: CPU – Bộ xử lý trung tâm
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Kiến trúc CPU:
                        <span className="block text-cyan-400">
                            Von Neumann & Harvard
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        CPU cần lấy lệnh và dữ liệu từ bộ nhớ. Câu hỏi quan
                        trọng là: lệnh và dữ liệu dùng chung một nơi hay tách
                        riêng? Từ đó sinh ra Von Neumann, Harvard và Modified
                        Harvard.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="CPU" />
                        <Tag icon={<Database size={16} />} text="Instruction" />
                        <Tag icon={<MemoryStick size={16} />} text="Data" />
                        <Tag icon={<Route size={16} />} text="Bus" />
                        <Tag icon={<Zap size={16} />} text="Bottleneck" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-1 gap-4">
                        <HeroArchitectureCard
                            icon={<Layers3 />}
                            title="Von Neumann"
                            desc="Lệnh + dữ liệu dùng chung bộ nhớ/bus"
                            color="orange"
                        />
                        <HeroArchitectureCard
                            icon={<SplitSquareHorizontal />}
                            title="Harvard"
                            desc="Lệnh và dữ liệu tách riêng"
                            color="cyan"
                            highlight
                        />
                        <HeroArchitectureCard
                            icon={<Cpu />}
                            title="Modified Harvard"
                            desc="RAM chính chung, I-Cache/D-Cache riêng"
                            color="violet"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Câu hỏi của bài</p>
                        <p>
                            <span className="text-cyan-300">Instruction</span>{" "}
                            và <span className="text-emerald-300">Data</span>
                        </p>
                        <p className="text-slate-300">
                            chung đường hay tách đường?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu kiến trúc CPU là cách CPU lấy lệnh, lấy dữ liệu, xử lý và lưu kết quả.",
        "Phân biệt Instruction và Data bằng ví dụ đơn giản.",
        "So sánh Von Neumann và Harvard theo bộ nhớ, bus, tốc độ và tính linh hoạt.",
        "Hiểu Von Neumann Bottleneck và vai trò của bus/băng thông/độ trễ.",
        "Biết vì sao CPU hiện đại dùng Modified Harvard với I-Cache và D-Cache.",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="cyan"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
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
                color="violet"
                title="Khái niệm cốt lõi: kiến trúc CPU là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6 items-start">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">
                                Kiến trúc CPU
                            </strong>{" "}
                            là cách CPU được thiết kế để{" "}
                            <strong className="text-cyan-300">lấy lệnh</strong>,{" "}
                            <strong className="text-emerald-300">
                                lấy dữ liệu
                            </strong>
                            , xử lý và lưu kết quả.
                        </p>
                        <div className="bg-violet-500/10 border border-violet-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-violet-300">
                                Câu hỏi trung tâm:
                            </strong>{" "}
                            lệnh và dữ liệu được lưu chung một nơi, hay tách
                            riêng thành hai khu khác nhau?
                        </div>
                        <p>
                            Câu trả lời dẫn đến hai mô hình nền tảng:{" "}
                            <strong className="text-orange-300">
                                Von Neumann
                            </strong>{" "}
                            và{" "}
                            <strong className="text-cyan-300">Harvard</strong>.
                            CPU hiện đại thường kết hợp ưu điểm của cả hai bằng
                            Modified Harvard.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <Puzzle className="text-violet-300" /> Instruction
                            vs Data
                        </h3>
                        <div className="space-y-4">
                            <ConceptMiniCard
                                icon={<Database />}
                                title="Instruction – Lệnh"
                                color="cyan"
                                desc="Chỉ dẫn CPU phải làm gì: cộng hai số, so sánh, nhảy đến dòng lệnh khác, đọc dữ liệu từ bộ nhớ."
                            />
                            <ConceptMiniCard
                                icon={<MemoryStick />}
                                title="Data – Dữ liệu"
                                color="emerald"
                                desc="Thứ CPU xử lý: số, ký tự, hình ảnh, âm thanh, địa chỉ bộ nhớ hoặc dữ liệu chương trình."
                            />
                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300">
                                <strong className="text-white">Ví dụ:</strong>{" "}
                                Lệnh là “cộng hai số”; dữ liệu là “5 và 7”; kết
                                quả là “12”.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ChefAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: bàn làm việc của đầu bếp"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-orange-500/5 border border-orange-500/20 rounded-3xl p-6">
                        <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-300 border border-orange-500/20 flex items-center justify-center mb-4">
                            <Layers3 size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                            Một kệ chung
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            Công thức nấu ăn và nguyên liệu để chung một kệ. Đầu
                            bếp lấy công thức, rồi quay lại lấy nguyên liệu từ
                            cùng khu đó.
                        </p>
                        <p className="text-orange-300 font-bold text-sm">
                            Tương tự: Von Neumann
                        </p>
                    </div>
                    <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-3xl p-6">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center justify-center mb-4">
                            <SplitSquareHorizontal size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                            Hai khu riêng
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            Công thức nằm ở một kệ, nguyên liệu nằm ở kệ khác.
                            Đầu bếp có thể lấy công thức và nguyên liệu nhanh
                            hơn, ít chen chúc hơn.
                        </p>
                        <p className="text-cyan-300 font-bold text-sm">
                            Tương tự: Harvard
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ArchitectureSimulator() {
    const [mode, setMode] = useState("von");
    const isVon = mode === "von";

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="blue"
                title="Mô phỏng nhanh: chung đường hay tách đường?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-3 mb-8">
                    <button
                        onClick={() => setMode("von")}
                        className={`rounded-2xl p-4 border text-left transition-all ${isVon ? "bg-orange-500/10 border-orange-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                    >
                        <div className="flex items-center gap-2 font-bold">
                            <Layers3 size={20} /> Von Neumann
                        </div>
                        <p className="text-xs mt-1 opacity-75">
                            Lệnh và dữ liệu dùng chung bộ nhớ/bus
                        </p>
                    </button>
                    <button
                        onClick={() => setMode("harvard")}
                        className={`rounded-2xl p-4 border text-left transition-all ${!isVon ? "bg-cyan-500/10 border-cyan-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                    >
                        <div className="flex items-center gap-2 font-bold">
                            <SplitSquareHorizontal size={20} /> Harvard
                        </div>
                        <p className="text-xs mt-1 opacity-75">
                            Lệnh và dữ liệu có bộ nhớ/bus riêng
                        </p>
                    </button>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 overflow-hidden">
                    {isVon ? <VonDiagram /> : <HarvardDiagram />}
                </div>
            </div>
        </section>
    );
}

function VonDiagram() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col items-center gap-4">
                <DiagramNode
                    icon={<Cpu />}
                    label="CPU"
                    desc="Lấy lệnh, lấy dữ liệu, xử lý"
                    color="orange"
                />
                <div className="flex flex-col items-center">
                    <ArrowDown className="text-orange-300" />
                    <span className="text-xs text-orange-300 font-bold bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1">
                        Chung đường truyền
                    </span>
                    <ArrowDown className="text-orange-300" />
                </div>
                <DiagramNode
                    icon={<MemoryStick />}
                    label="Bộ nhớ chung"
                    desc="Lệnh + Dữ liệu cùng nằm trong một vùng bộ nhớ"
                    color="orange"
                    wide
                />
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-orange-300">Điểm cần nhớ:</strong> Thiết
                kế đơn giản và linh hoạt, nhưng CPU có thể phải chờ vì lệnh và
                dữ liệu dùng chung đường truyền.
            </div>
        </div>
    );
}

function HarvardDiagram() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col items-center gap-4">
                <DiagramNode
                    icon={<Cpu />}
                    label="CPU"
                    desc="Có đường lấy lệnh và đường lấy dữ liệu riêng"
                    color="cyan"
                />
                <div className="grid md:grid-cols-2 gap-5 w-full max-w-3xl">
                    <div className="flex flex-col items-center gap-3">
                        <ArrowDown className="text-cyan-300" />
                        <span className="text-xs text-cyan-300 font-bold bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1">
                            Đường lệnh
                        </span>
                        <DiagramNode
                            icon={<Database />}
                            label="Bộ nhớ lệnh"
                            desc="Instructions"
                            color="cyan"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <ArrowDown className="text-emerald-300" />
                        <span className="text-xs text-emerald-300 font-bold bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
                            Đường dữ liệu
                        </span>
                        <DiagramNode
                            icon={<MemoryStick />}
                            label="Bộ nhớ dữ liệu"
                            desc="Data"
                            color="emerald"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-cyan-300">Điểm cần nhớ:</strong> Tách
                lệnh và dữ liệu giúp giảm chen chúc, nhưng thiết kế phức tạp hơn
                và ít linh hoạt hơn nếu dùng Harvard thuần túy.
            </div>
        </div>
    );
}

function VonNeumannSection() {
    const steps = [
        "CPU lấy lệnh từ bộ nhớ",
        "CPU giải mã lệnh",
        "CPU lấy dữ liệu từ cùng bộ nhớ đó",
        "CPU xử lý",
        "CPU ghi kết quả lại vào bộ nhớ",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="orange"
                title="Kiến trúc Von Neumann"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
                    <div className="bg-orange-500/5 border border-orange-500/20 rounded-3xl p-6">
                        <h3 className="text-2xl font-extrabold text-white mb-3">
                            Lệnh và dữ liệu dùng chung
                        </h3>
                        <p className="text-slate-300 leading-relaxed mb-5">
                            Trong Von Neumann, chương trình và dữ liệu nằm chung
                            trong một vùng bộ nhớ, thường dùng chung đường
                            truyền giữa CPU và bộ nhớ.
                        </p>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300">
                            <strong className="text-orange-300">
                                Ưu điểm:
                            </strong>{" "}
                            đơn giản, linh hoạt, dễ thiết kế, phù hợp máy tính
                            đa dụng như PC và laptop.
                        </div>
                    </div>
                    <div className="space-y-3">
                        {steps.map((s, i) => (
                            <div
                                key={s}
                                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center gap-3"
                            >
                                <span className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-300 border border-orange-500/20 flex items-center justify-center font-bold shrink-0">
                                    {i + 1}
                                </span>
                                <span className="text-sm text-slate-300">
                                    {s}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-red-300">
                        Von Neumann Bottleneck:
                    </strong>{" "}
                    vì lệnh và dữ liệu dùng chung đường truyền, CPU có thể phải
                    “xếp hàng” khi vừa cần lấy lệnh vừa cần lấy dữ liệu.
                </div>
            </div>
        </section>
    );
}

function HarvardSection() {
    const steps = [
        "CPU lấy lệnh từ bộ nhớ lệnh",
        "Đồng thời hoặc gần đồng thời lấy dữ liệu từ bộ nhớ dữ liệu",
        "CPU giải mã và xử lý",
        "Kết quả ghi về bộ nhớ dữ liệu",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="cyan"
                title="Kiến trúc Harvard"
                icon={<SplitSquareHorizontal />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
                    <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-3xl p-6">
                        <h3 className="text-2xl font-extrabold text-white mb-3">
                            Lệnh và dữ liệu tách riêng
                        </h3>
                        <p className="text-slate-300 leading-relaxed mb-5">
                            Trong Harvard, lệnh và dữ liệu có bộ nhớ riêng,
                            thường có đường truyền riêng. CPU có thể truy cập
                            lệnh và dữ liệu hiệu quả hơn.
                        </p>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300">
                            <strong className="text-cyan-300">Ứng dụng:</strong>{" "}
                            vi điều khiển, DSP, hệ thống nhúng và các tầng cache
                            trong CPU hiện đại.
                        </div>
                    </div>
                    <div className="space-y-3">
                        {steps.map((s, i) => (
                            <div
                                key={s}
                                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center gap-3"
                            >
                                <span className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center justify-center font-bold shrink-0">
                                    {i + 1}
                                </span>
                                <span className="text-sm text-slate-300">
                                    {s}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-cyan-300">Điểm mạnh:</strong> giảm
                    tắc nghẽn giữa lệnh và dữ liệu, nhưng thiết kế phức tạp hơn
                    và Harvard thuần túy có thể kém linh hoạt hơn máy tính đa
                    dụng.
                </div>
            </div>
        </section>
    );
}

function ModifiedHarvardSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="purple"
                title="Modified Harvard trong CPU hiện đại"
                icon={<Cpu />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-center">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5 mb-4 text-center">
                            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center justify-center mx-auto mb-3">
                                <Cpu size={28} />
                            </div>
                            <h3 className="font-extrabold text-white">CPU</h3>
                            <p className="text-xs text-slate-500 mt-1">
                                Bên trong có cache tách riêng
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-center">
                                <Database className="text-cyan-300 mx-auto mb-2" />
                                <p className="font-bold text-white text-sm">
                                    I-Cache
                                </p>
                                <p className="text-xs text-slate-500">
                                    Cache lệnh
                                </p>
                            </div>
                            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">
                                <MemoryStick className="text-emerald-300 mx-auto mb-2" />
                                <p className="font-bold text-white text-sm">
                                    D-Cache
                                </p>
                                <p className="text-xs text-slate-500">
                                    Cache dữ liệu
                                </p>
                            </div>
                        </div>
                        <ArrowDown className="text-slate-600 mx-auto mb-4" />
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-center">
                            <MemoryStick className="text-slate-300 mx-auto mb-2" />
                            <p className="font-bold text-white text-sm">
                                RAM chính
                            </p>
                            <p className="text-xs text-slate-500">
                                Lệnh + dữ liệu có thể nằm chung
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4 text-slate-300 leading-relaxed">
                        <p>
                            Nhiều CPU hiện đại không dùng Harvard thuần túy từ
                            đầu đến cuối. RAM chính vẫn có thể chứa cả lệnh và
                            dữ liệu giống Von Neumann.
                        </p>
                        <p>
                            Nhưng ở tầng rất gần nhân CPU, hệ thống cache thường
                            tách{" "}
                            <strong className="text-cyan-300">I-Cache</strong>{" "}
                            cho lệnh và{" "}
                            <strong className="text-emerald-300">
                                D-Cache
                            </strong>{" "}
                            cho dữ liệu. Đây là ý tưởng Modified Harvard.
                        </p>
                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-purple-300">
                                Ý nghĩa:
                            </strong>{" "}
                            CPU hiện đại giữ sự linh hoạt của Von Neumann ở bộ
                            nhớ chính, đồng thời tận dụng tốc độ Harvard ở tầng
                            cache để giảm nghẽn.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ComparisonSection() {
    const rows = [
        ["Cách lưu lệnh và dữ liệu", "Dùng chung bộ nhớ", "Tách riêng bộ nhớ"],
        [
            "Đường truyền",
            "Thường dùng chung bus",
            "Có bus riêng cho lệnh và dữ liệu",
        ],
        ["Độ đơn giản thiết kế", "Đơn giản hơn", "Phức tạp hơn"],
        [
            "Tốc độ truy cập",
            "Có thể chậm hơn do dùng chung đường",
            "Có thể nhanh hơn do truy cập song song",
        ],
        [
            "Điểm nghẽn",
            "Dễ gặp Von Neumann bottleneck",
            "Giảm điểm nghẽn giữa lệnh và dữ liệu",
        ],
        [
            "Độ linh hoạt",
            "Linh hoạt, phù hợp máy tính đa dụng",
            "Ít linh hoạt hơn trong dạng thuần túy",
        ],
        [
            "Ứng dụng phổ biến",
            "PC, laptop, máy tính đa dụng",
            "Vi điều khiển, DSP, hệ thống nhúng",
        ],
        [
            "Biến thể hiện đại",
            "RAM chính thường theo kiểu chung",
            "Cache lệnh/dữ liệu riêng trong CPU hiện đại",
        ],
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="blue"
                title="So sánh Von Neumann và Harvard"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                    <thead>
                        <tr className="text-left">
                            <th className="p-4 text-slate-400 font-semibold">
                                Tiêu chí
                            </th>
                            <th className="p-4 text-orange-300 font-bold">
                                Von Neumann
                            </th>
                            <th className="p-4 text-cyan-300 font-bold">
                                Harvard
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([criterion, von, harvard]) => (
                            <tr
                                key={criterion}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 font-semibold text-white">
                                    {criterion}
                                </td>
                                <td className="p-4 text-slate-300">{von}</td>
                                <td className="p-4 text-slate-300">
                                    {harvard}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function ConceptExplorer() {
    const concepts = {
        instruction: {
            icon: <Database />,
            title: "Instruction",
            detail: "Lệnh CPU cần thực hiện: phép toán, đọc/ghi, so sánh, nhảy lệnh.",
            impact: "Quyết định CPU phải làm gì trong từng bước xử lý.",
        },
        data: {
            icon: <MemoryStick />,
            title: "Data",
            detail: "Dữ liệu CPU xử lý: số, ký tự, file, hình ảnh, âm thanh, địa chỉ bộ nhớ.",
            impact: "Là nguyên liệu đầu vào để CPU xử lý và tạo kết quả.",
        },
        memory: {
            icon: <HardDrive />,
            title: "Memory",
            detail: "Bộ nhớ lưu lệnh và dữ liệu. CPU cần lấy thông tin từ đây để chạy chương trình.",
            impact: "Bộ nhớ chậm hoặc thiếu có thể làm CPU phải chờ.",
        },
        bus: {
            icon: <Route />,
            title: "Bus",
            detail: "Đường truyền dữ liệu giữa CPU, bộ nhớ và thiết bị.",
            impact: "Bus hẹp hoặc chậm có thể gây nghẽn hiệu năng.",
        },
        bottleneck: {
            icon: <Zap />,
            title: "Von Neumann Bottleneck",
            detail: "Điểm nghẽn do lệnh và dữ liệu dùng chung đường truyền.",
            impact: "CPU phải chờ dữ liệu/lệnh, làm giảm hiệu năng thực tế.",
        },
        icache: {
            icon: <Database />,
            title: "I-Cache",
            detail: "Cache chuyên chứa lệnh gần CPU.",
            impact: "Giúp CPU lấy lệnh nhanh hơn.",
        },
        dcache: {
            icon: <MemoryStick />,
            title: "D-Cache",
            detail: "Cache chuyên chứa dữ liệu gần CPU.",
            impact: "Giúp CPU lấy dữ liệu nhanh hơn.",
        },
        bandwidth: {
            icon: <Gauge />,
            title: "Memory Bandwidth / Latency",
            detail: "Băng thông cho biết mỗi giây truyền được bao nhiêu dữ liệu; latency là độ trễ truy cập.",
            impact: "Băng thông cao và độ trễ thấp giúp CPU chờ ít hơn.",
        },
    };

    const [active, setActive] = useState("instruction");
    const item = concepts[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="yellow"
                title="Khái niệm kỹ thuật quan trọng"
                icon={<Settings />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(concepts).map(([key, c]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center transition-all ${
                                active === key
                                    ? "bg-yellow-500 text-slate-950 shadow-lg shadow-yellow-500/10"
                                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                            }`}
                        >
                            {React.cloneElement(c.icon, { size: 20 })}
                            <span className="font-bold text-xs">{c.title}</span>
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
                            Khái niệm nền tảng
                        </p>
                    </div>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                        <p>{item.detail}</p>
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-yellow-300">
                                Tác động thực tế:
                            </strong>{" "}
                            {item.impact}
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-sm text-slate-400">
                            <strong className="text-white">
                                Ví dụ dễ hiểu:
                            </strong>{" "}
                            CPU rất nhanh, nhưng nếu bộ nhớ gửi dữ liệu chậm,
                            CPU giống đầu bếp giỏi phải chờ nguyên liệu.
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
            title: "PC/laptop hiện đại",
            subtitle: "Von Neumann + Modified Harvard",
            points: [
                "RAM chính chứa cả mã lệnh và dữ liệu",
                "Chrome được nạp từ SSD lên RAM",
                "CPU lấy lệnh và dữ liệu để xử lý",
                "Bên trong CPU dùng I-Cache/D-Cache để tăng tốc",
            ],
            lesson: "Máy tính hiện đại không chỉ là Von Neumann thuần túy, mà kết hợp nhiều kỹ thuật để giảm nghẽn.",
            color: "orange",
        },
        {
            icon: <CircuitBoard />,
            title: "Arduino Uno / vi điều khiển",
            subtitle: "Gần với Harvard hơn",
            points: [
                "Chương trình thường nằm trong Flash",
                "Dữ liệu khi chạy nằm trong SRAM/register",
                "CPU đọc lệnh từ Flash",
                "GPIO điều khiển LED, cảm biến, motor",
            ],
            lesson: "Hệ thống nhúng thường tách bộ nhớ chương trình và dữ liệu rõ hơn để thiết kế ổn định, phù hợp thiết bị nhỏ.",
            color: "cyan",
        },
        {
            icon: <Cpu />,
            title: "CPU hiện đại với I-Cache/D-Cache",
            subtitle: "Cache giảm thời gian chờ RAM",
            points: [
                "L1 Cache gần nhân CPU nhất",
                "L1 Instruction Cache chứa lệnh",
                "L1 Data Cache chứa dữ liệu",
                "L2/L3/RAM/SSD nằm xa dần và thường chậm hơn",
            ],
            lesson: "Dù RAM chính chung, CPU hiện đại vẫn tách cache lệnh và dữ liệu để tăng tốc truy cập.",
            color: "purple",
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
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
                            <strong className="text-pink-300">Bài học:</strong>{" "}
                            {e.lesson}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function BottleneckLab() {
    const cases = [
        {
            symptom: "CPU mạnh nhưng chương trình vẫn chờ dữ liệu",
            cause: "Bộ nhớ hoặc bus chậm",
            icon: <Zap />,
            explain:
                "CPU có thể xử lý rất nhanh, nhưng nếu lệnh/dữ liệu chưa đến kịp thì CPU vẫn phải chờ.",
        },
        {
            symptom: "Tác vụ lặp lại chạy nhanh hơn sau một lúc",
            cause: "Cache phát huy tác dụng",
            icon: <RefreshCcw />,
            explain:
                "Lệnh hoặc dữ liệu được dùng nhiều lần có thể nằm trong cache gần CPU, giảm thời gian truy cập RAM.",
        },
        {
            symptom: "Vi điều khiển có Flash và SRAM tách biệt",
            cause: "Tư duy Harvard trong hệ thống nhúng",
            icon: <CircuitBoard />,
            explain:
                "Chương trình nằm trong Flash, dữ liệu khi chạy nằm trong SRAM/register, giúp thiết kế rõ ràng cho thiết bị nhỏ.",
        },
        {
            symptom: "RAM nhanh hơn nhưng game không tăng FPS nhiều",
            cause: "Không phải nghẽn nào cũng do RAM",
            icon: <Gauge />,
            explain:
                "Hiệu năng còn phụ thuộc CPU core, cache, GPU, engine game, driver và cấu hình đồ họa.",
        },
    ];

    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    const current = cases[index];

    const next = () => {
        setShow(false);
        setIndex((i) => (i + 1) % cases.length);
    };

    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="purple"
                title="Lab: nhận diện điểm nghẽn kiến trúc"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-6 items-center">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 text-center">
                        <p className="text-purple-300 text-sm font-bold mb-4">
                            Tình huống {index + 1}/{cases.length}
                        </p>
                        <div className="w-24 h-24 rounded-3xl bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center justify-center mx-auto mb-5">
                            {React.cloneElement(current.icon, { size: 46 })}
                        </div>
                        <h3 className="text-2xl font-extrabold text-white leading-snug">
                            {current.symptom}
                        </h3>
                        <p className="text-slate-500 mt-3">
                            Hãy đoán nguyên nhân kiến trúc có thể liên quan.
                        </p>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[280px] flex flex-col justify-between">
                        {!show ? (
                            <div className="text-center flex flex-col items-center justify-center h-full">
                                <button
                                    onClick={() => setShow(true)}
                                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-colors"
                                >
                                    <Lightbulb size={18} /> Xem phân tích
                                </button>
                            </div>
                        ) : (
                            <div className="animate-in fade-in slide-in-from-bottom-2">
                                <p className="text-sm text-slate-500 mb-2">
                                    Có thể liên quan đến
                                </p>
                                <h4 className="text-3xl font-extrabold text-purple-300 mb-4">
                                    {current.cause}
                                </h4>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    {current.explain}
                                </p>
                                <button
                                    onClick={next}
                                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-xl transition-colors"
                                >
                                    Tình huống tiếp theo
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function MistakesAndTips() {
    const mistakes = [
        {
            wrong: "Von Neumann là cũ, Harvard là mới và luôn tốt hơn",
            right: "Không có mô hình nào luôn tốt hơn. Von Neumann/Modified Harvard phù hợp máy tính đa dụng, Harvard/Modified Harvard phù hợp nhúng, DSP và cache hiện đại.",
        },
        {
            wrong: "Lệnh và dữ liệu là một thứ",
            right: "Lệnh là chỉ dẫn CPU làm gì; dữ liệu là thứ CPU xử lý. Ví dụ: lệnh cộng hai số, dữ liệu là 5 và 7.",
        },
        {
            wrong: "CPU chậm chỉ do xung nhịp thấp",
            right: "CPU còn phụ thuộc kiến trúc, cache, RAM, băng thông bộ nhớ, độ trễ, phần mềm và loại tác vụ.",
        },
        {
            wrong: "RAM càng nhanh thì giải quyết hết điểm nghẽn",
            right: "RAM nhanh chỉ giảm một phần điểm nghẽn. CPU còn phụ thuộc cache, bộ điều khiển bộ nhớ, kiến trúc nhân và phần mềm.",
        },
    ];

    const tips = [
        "Khi đọc thông số CPU, đừng chỉ nhìn GHz; hãy xem kiến trúc, thế hệ, cache, nhân/luồng.",
        "Khi máy nghẽn hiệu năng, nghĩ theo luồng: CPU cần lệnh/dữ liệu → cache có không → RAM đủ nhanh/đủ dung lượng không → SSD có làm chậm lúc load không.",
        "Ghi nhớ: Von Neumann = lệnh và dữ liệu dùng chung bộ nhớ.",
        "Ghi nhớ: Harvard = lệnh và dữ liệu tách riêng bộ nhớ.",
        "Ghi nhớ: Modified Harvard = RAM chính chung, cache lệnh/dữ liệu tách riêng.",
        "Khi học cache CPU, liên hệ ngay I-Cache và D-Cache với bài này.",
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
                        <span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">
                            13
                        </span>
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-cyan-300 border border-slate-800 shadow-inner space-y-2">
                            <p>KIẾN TRÚC CPU</p>
                            <p className="text-slate-300">
                                = cách CPU lấy lệnh, lấy dữ liệu, xử lý, lưu kết
                                quả
                            </p>
                            <br />
                            <p className="text-slate-500"># Von Neumann</p>
                            <p className="text-slate-300">
                                Lệnh + dữ liệu dùng chung bộ nhớ/bus
                            </p>
                            <br />
                            <p className="text-slate-500"># Harvard</p>
                            <p className="text-slate-300">
                                Bộ nhớ lệnh và bộ nhớ dữ liệu tách riêng
                            </p>
                            <br />
                            <p className="text-slate-500"># Modified Harvard</p>
                            <p className="text-slate-300">
                                RAM chính chung, I-Cache và D-Cache riêng
                            </p>
                            <br />
                            <p className="text-slate-500"># Bottleneck</p>
                            <p className="text-slate-300">
                                CPU nhanh nhưng vẫn chờ nếu lệnh/dữ liệu đến
                                chậm.
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
        question:
            "Trong kiến trúc Von Neumann, lệnh và dữ liệu được lưu như thế nào?",
        options: [
            "Luôn lưu ở hai máy tính khác nhau",
            "Dùng chung bộ nhớ",
            "Không cần bộ nhớ",
            "Chỉ lưu trong màn hình",
        ],
        correct: 1,
        explanation:
            "Von Neumann dùng chung bộ nhớ cho lệnh và dữ liệu, thường dùng chung đường truyền giữa CPU và bộ nhớ.",
    },
    {
        question: "Điểm mạnh chính của kiến trúc Harvard là gì?",
        options: [
            "Tách bộ nhớ lệnh và bộ nhớ dữ liệu, giúp truy cập hiệu quả hơn",
            "Không cần CPU",
            "Chỉ dùng cho loa máy tính",
            "Không cần điện năng",
        ],
        correct: 0,
        explanation:
            "Harvard tách bộ nhớ và đường truyền cho lệnh/dữ liệu, giúp giảm tắc nghẽn và có thể truy cập hiệu quả hơn.",
    },
    {
        question: "I-Cache trong CPU là gì?",
        options: [
            "Cache chuyên chứa lệnh",
            "Cache chuyên chứa hình nền desktop",
            "Ổ cứng phụ",
            "Bộ nguồn máy tính",
        ],
        correct: 0,
        explanation:
            "I-Cache là Instruction Cache, bộ nhớ đệm chuyên chứa lệnh gần CPU.",
    },
    {
        question: "Von Neumann Bottleneck xảy ra vì lý do nào?",
        options: [
            "CPU không có quạt",
            "Lệnh và dữ liệu dùng chung đường truyền nên CPU có thể phải chờ",
            "Màn hình quá sáng",
            "Loa phát âm thanh chậm",
        ],
        correct: 1,
        explanation:
            "Khi lệnh và dữ liệu cùng dùng chung bus/bộ nhớ, CPU có thể phải chờ lượt truy cập, làm giảm hiệu năng.",
    },
    {
        question:
            "Modified Harvard thường được hiểu như thế nào trong CPU hiện đại?",
        options: [
            "Không dùng RAM",
            "RAM chính chung nhưng cache lệnh và cache dữ liệu tách riêng",
            "Chỉ có một ổ cứng",
            "CPU không xử lý dữ liệu",
        ],
        correct: 1,
        explanation:
            "Nhiều CPU hiện đại giữ RAM chính kiểu chung nhưng có I-Cache và D-Cache riêng ở gần nhân CPU.",
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
                    <strong className="text-cyan-400">
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
                <span className="text-cyan-400">
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
                        className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu Von Neumann, Harvard và Modified Harvard. Tiếp theo
                là học các thành phần nhỏ bên trong CPU trực tiếp thực hiện lấy
                lệnh, giải mã và xử lý dữ liệu.
            </p>
            <Link
                to="/phan-2-3"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Bài tiếp theo: 2.3 — ALU, CU, Registers, Cache{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
    const colorMap = {
        cyan: "bg-cyan-500/20 text-cyan-300",
        violet: "bg-violet-500/20 text-violet-300",
        amber: "bg-amber-500/20 text-amber-300",
        blue: "bg-blue-500/20 text-blue-300",
        orange: "bg-orange-500/20 text-orange-300",
        purple: "bg-purple-500/20 text-purple-300",
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

function HeroArchitectureCard({ icon, title, desc, color, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 flex items-center gap-4 ${highlight ? "bg-cyan-500/10 border-cyan-400/50" : softBorder(color)}`}
        >
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center shrink-0`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <div>
                <h4 className="font-extrabold text-white">{title}</h4>
                <p className="text-xs text-slate-400 mt-1">{desc}</p>
            </div>
        </div>
    );
}

function ConceptMiniCard({ icon, title, desc, color }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex gap-3">
            <div
                className={`w-10 h-10 rounded-xl ${badgeColor(color)} flex items-center justify-center shrink-0`}
            >
                {React.cloneElement(icon, { size: 20 })}
            </div>
            <div>
                <h4 className="text-white font-bold text-sm">{title}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    );
}

function DiagramNode({ icon, label, desc, color, wide }) {
    return (
        <div
            className={`${wide ? "w-full max-w-lg" : "w-full max-w-xs"} ${softBorder(color)} border rounded-3xl p-5 flex items-center gap-4 justify-center text-center md:text-left`}
        >
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center shrink-0`}
            >
                {React.cloneElement(icon, { size: 26 })}
            </div>
            <div>
                <h4 className="font-extrabold text-white">{label}</h4>
                <p className="text-xs text-slate-400 mt-1">{desc}</p>
            </div>
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
    return map[color] || map.cyan;
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
    return map[color] || map.cyan;
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
    return map[color] || "text-cyan-300";
}
