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
    Code2,
    Cpu,
    FileCode2,
    Globe2,
    Laptop,
    Languages,
    Layers3,
    Lightbulb,
    Monitor,
    PackageCheck,
    Puzzle,
    Rocket,
    Search,
    Server,
    Settings,
    ShieldCheck,
    Smartphone,
    Sparkles,
    TerminalSquare,
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
                            <Languages className="text-indigo-400" size={24} />
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
                    <div className="text-sm font-semibold text-indigo-300 bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/20">
                        Bài 2.7
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <IsaConcept />
                <LanguageAnalogy />
                <CompileFlow />
                <CompatibilitySimulator />
                <ArchitectureExplorer />
                <ConceptExplorer />
                <RealExamples />
                <DownloadChoiceLab />
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
                        <BookOpen size={16} /> Phần 2: CPU – Bộ xử lý trung tâm
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Kiến trúc tập lệnh
                        <span className="block text-indigo-400">
                            x86, x64, ARM, RISC-V
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        CPU không chỉ khác nhau ở số nhân, xung nhịp hay cache.
                        CPU còn khác nhau ở “ngôn ngữ lệnh” mà nó có thể hiểu và
                        thực thi.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="ISA" />
                        <Tag icon={<Monitor size={16} />} text="x86 / x64" />
                        <Tag icon={<Smartphone size={16} />} text="ARM64" />
                        <Tag icon={<Sparkles size={16} />} text="RISC-V" />
                        <Tag icon={<Code2 size={16} />} text="Compiler" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Monitor />}
                            label="x64"
                            desc="PC Windows/server"
                            color="blue"
                            highlight
                        />
                        <HeroTile
                            icon={<Smartphone />}
                            label="ARM"
                            desc="Mobile, Mac, Pi"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<Sparkles />}
                            label="RISC-V"
                            desc="ISA mở, tùy biến"
                            color="orange"
                        />
                        <HeroTile
                            icon={<TerminalSquare />}
                            label="Machine code"
                            desc="Mã máy đúng ISA"
                            color="indigo"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Vấn đề tương thích</p>
                        <p>
                            <span className="text-blue-300">App x64</span> chạy
                            trực tiếp trên{" "}
                            <span className="text-blue-300">CPU x64</span>
                        </p>
                        <p>
                            <span className="text-emerald-300">CPU ARM</span>{" "}
                            cần bản ARM hoặc dịch mã
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu ISA là bộ quy tắc/lệnh CPU hiểu và thực thi được.",
        "Biết vì sao phần mềm cần đúng bản x86, x64, ARM64 hoặc RISC-V.",
        "Phân biệt x86 32-bit, x64 64-bit, ARM và RISC-V.",
        "Hiểu vai trò của compiler, machine code, emulation và translation.",
        "Biết chọn đúng bản phần mềm khi tải app cho Windows, Mac Apple Silicon, Raspberry Pi hoặc máy cũ.",
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
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/50 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-300 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
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

function IsaConcept() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: ISA là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6 items-start">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">ISA</strong> là viết
                            tắt của{" "}
                            <strong className="text-cyan-300">
                                Instruction Set Architecture
                            </strong>
                            , nghĩa là kiến trúc tập lệnh.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-cyan-300">
                                Hiểu đơn giản:
                            </strong>{" "}
                            ISA là bộ quy tắc quy định CPU hiểu được những lệnh
                            nào và thực hiện chúng ra sao.
                        </div>
                        <p>
                            Phần mềm không gửi câu tiếng Việt cho CPU. Nó được
                            biên dịch thành mã máy theo một ISA cụ thể. CPU chỉ
                            chạy trực tiếp mã máy mà nó hiểu.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <TerminalSquare className="text-cyan-300" /> Ví dụ
                            lệnh CPU có thể hiểu
                        </h3>
                        <div className="space-y-3 font-mono text-sm">
                            {[
                                "Cộng hai số",
                                "So sánh hai giá trị",
                                "Đọc dữ liệu từ bộ nhớ",
                                "Ghi dữ liệu vào bộ nhớ",
                                "Nhảy đến lệnh khác",
                                "Xử lý phép toán vector",
                            ].map((line, i) => (
                                <div
                                    key={line}
                                    className="flex items-center gap-3 text-slate-300"
                                >
                                    <span className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-300 flex items-center justify-center text-xs font-bold">
                                        {i + 1}
                                    </span>
                                    <span>{line}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LanguageAnalogy() {
    const rows = [
        {
            real: "Người Việt hiểu tiếng Việt",
            pc: "CPU x86/x64 hiểu lệnh x86/x64",
            color: "blue",
        },
        {
            real: "Người Nhật hiểu tiếng Nhật",
            pc: "CPU ARM hiểu lệnh ARM",
            color: "emerald",
        },
        {
            real: "Muốn hiểu ngôn ngữ khác cần phiên dịch",
            pc: "Muốn chạy khác ISA cần bản riêng, giả lập hoặc dịch mã",
            color: "orange",
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: CPU cũng có ngôn ngữ riêng"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 mb-6 leading-relaxed">
                    Phần mềm là “bài hướng dẫn”, CPU là “người đọc”. Nếu bài
                    hướng dẫn viết bằng ngôn ngữ CPU không hiểu, CPU không thể
                    chạy trực tiếp.
                </p>
                <div className="space-y-3">
                    {rows.map((row) => (
                        <div
                            key={row.real}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex items-center justify-between gap-4"
                        >
                            <span className="text-slate-300 font-semibold">
                                {row.real}
                            </span>
                            <ArrowRight
                                className="text-slate-600 shrink-0"
                                size={18}
                            />
                            <span
                                className={`${textColor(row.color)} font-bold text-right`}
                            >
                                {row.pc}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CompileFlow() {
    const steps = [
        {
            icon: <FileCode2 />,
            title: "Code của lập trình viên",
            desc: "Nguồn ban đầu viết bằng C/C++/Rust/Go hoặc ngôn ngữ khác.",
            color: "cyan",
        },
        {
            icon: <Code2 />,
            title: "Compiler / Trình biên dịch",
            desc: "Biến code thành mã máy đúng kiến trúc CPU mục tiêu.",
            color: "indigo",
        },
        {
            icon: <TerminalSquare />,
            title: "Mã máy theo ISA",
            desc: "Ví dụ x64, ARM64 hoặc RISC-V machine code.",
            color: "purple",
        },
        {
            icon: <Cpu />,
            title: "CPU đọc và thực thi",
            desc: "CPU giải mã và chạy các lệnh mà ISA của nó hỗ trợ.",
            color: "emerald",
        },
    ];

    const [active, setActive] = useState(0);
    const item = steps[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Cơ chế: code trở thành mã máy CPU hiểu như thế nào?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-3 items-stretch mb-8">
                    {steps.map((s, idx) => (
                        <React.Fragment key={s.title}>
                            <button
                                onClick={() => setActive(idx)}
                                className={`rounded-2xl p-5 border text-center transition-all ${active === idx ? `${softBorder(s.color)} text-white scale-[1.02]` : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`}
                            >
                                <div
                                    className={`w-12 h-12 rounded-2xl ${badgeColor(s.color)} flex items-center justify-center mx-auto mb-3`}
                                >
                                    {React.cloneElement(s.icon, { size: 24 })}
                                </div>
                                <h3 className="font-extrabold text-white text-sm">
                                    {s.title}
                                </h3>
                            </button>
                            {idx < steps.length - 1 && (
                                <div className="hidden md:flex items-center justify-center text-slate-600">
                                    <ArrowRight size={22} />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 grid md:grid-cols-[0.8fr_1.2fr] gap-6 items-center">
                    <div>
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <p className="text-sm text-slate-500 font-bold mb-1">
                            Bước {active + 1}/4
                        </p>
                        <h3 className="text-2xl font-extrabold text-white">
                            {item.title}
                        </h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                        {item.desc}
                    </p>
                </div>
            </div>
        </section>
    );
}

function CompatibilitySimulator() {
    const [app, setApp] = useState("winx64");
    const [cpu, setCpu] = useState("x64");

    const appMap = {
        winx64: { label: "Ứng dụng Windows x64", isa: "x64", color: "blue" },
        macarm: {
            label: "Ứng dụng macOS Apple Silicon",
            isa: "ARM64",
            color: "emerald",
        },
        linuxarm: { label: "Linux ARM64 package", isa: "ARM64", color: "cyan" },
        riscv: { label: "Chương trình RISC-V", isa: "RISC-V", color: "orange" },
    };
    const cpuMap = {
        x64: { label: "CPU Intel/AMD x64", isa: "x64", color: "blue" },
        arm: { label: "CPU ARM64", isa: "ARM64", color: "emerald" },
        riscv: { label: "CPU RISC-V", isa: "RISC-V", color: "orange" },
    };

    const selectedApp = appMap[app];
    const selectedCpu = cpuMap[cpu];
    const direct = selectedApp.isa === selectedCpu.isa;

    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Mô phỏng: phần mềm có chạy trực tiếp trên CPU này không?"
                icon={<Puzzle />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <p className="text-slate-500 font-bold text-sm mb-3">
                            Chọn phần mềm
                        </p>
                        <div className="grid gap-2">
                            {Object.entries(appMap).map(([key, item]) => (
                                <button
                                    key={key}
                                    onClick={() => setApp(key)}
                                    className={`rounded-2xl p-4 border text-left transition-all ${app === key ? `${softBorder(item.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`}
                                >
                                    <span className="font-bold">
                                        {item.label}
                                    </span>
                                    <span className="block text-xs opacity-70 mt-1">
                                        ISA: {item.isa}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-slate-500 font-bold text-sm mb-3">
                            Chọn CPU
                        </p>
                        <div className="grid gap-2">
                            {Object.entries(cpuMap).map(([key, item]) => (
                                <button
                                    key={key}
                                    onClick={() => setCpu(key)}
                                    className={`rounded-2xl p-4 border text-left transition-all ${cpu === key ? `${softBorder(item.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`}
                                >
                                    <span className="font-bold">
                                        {item.label}
                                    </span>
                                    <span className="block text-xs opacity-70 mt-1">
                                        ISA: {item.isa}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className={`${direct ? "bg-emerald-500/10 border-emerald-500/20" : "bg-orange-500/10 border-orange-500/20"} border rounded-3xl p-6 text-center`}
                >
                    <div
                        className={`w-16 h-16 rounded-2xl ${direct ? badgeColor("emerald") : badgeColor("orange")} flex items-center justify-center mx-auto mb-4`}
                    >
                        {direct ? (
                            <CheckCircle2 size={32} />
                        ) : (
                            <AlertTriangle size={32} />
                        )}
                    </div>
                    <h3 className="text-2xl font-extrabold text-white mb-2">
                        {direct
                            ? "Chạy trực tiếp tốt"
                            : "Không chạy trực tiếp theo ISA này"}
                    </h3>
                    <p className="text-slate-300">
                        {direct
                            ? `${selectedCpu.label} hiểu mã máy ${selectedApp.isa}, nên phần mềm có thể chạy native nếu hệ điều hành cũng phù hợp.`
                            : `${selectedCpu.label} không hiểu trực tiếp mã máy ${selectedApp.isa}. Cần bản native đúng ISA, giả lập hoặc lớp dịch mã.`}
                    </p>
                </div>
            </div>
        </section>
    );
}

function ArchitectureExplorer() {
    const arch = {
        x86: {
            icon: <Monitor />,
            title: "x86",
            subtitle: "ISA 32-bit truyền thống",
            color: "slate",
            points: [
                "Gắn liền PC truyền thống",
                "Chạy nhiều phần mềm Windows cũ",
                "Thường bị giới hạn RAM so với 64-bit",
                "Không còn là lựa chọn chính cho máy mới",
            ],
            fit: "PC cũ, phần mềm legacy, hệ thống 32-bit còn hỗ trợ.",
        },
        x64: {
            icon: <Laptop />,
            title: "x64 / x86-64",
            subtitle: "Chuẩn phổ biến của PC hiện đại",
            color: "blue",
            points: [
                "64-bit mở rộng từ x86",
                "Phổ biến trên PC Windows, Linux desktop, server",
                "Hỗ trợ RAM lớn",
                "Tương thích phần mềm desktop rất rộng",
            ],
            fit: "PC Windows, gaming, văn phòng, workstation, server.",
        },
        arm: {
            icon: <Smartphone />,
            title: "ARM / ARM64",
            subtitle: "Tối ưu hiệu năng trên mỗi watt",
            color: "emerald",
            points: [
                "Rất phổ biến trên smartphone/tablet",
                "Mac Apple Silicon dùng ARM tùy biến",
                "Raspberry Pi 5 dùng Arm Cortex-A76",
                "Cần app native ARM hoặc dịch mã với app x64",
            ],
            fit: "Điện thoại, tablet, Mac M-series, laptop ARM, thiết bị tiết kiệm điện.",
        },
        riscv: {
            icon: <Sparkles />,
            title: "RISC-V",
            subtitle: "Kiến trúc tập lệnh mở",
            color: "orange",
            points: [
                "ISA mở, linh hoạt",
                "Hữu ích cho nghiên cứu và giáo dục",
                "Phù hợp nhúng, IoT, chip tùy biến",
                "Hệ sinh thái PC phổ thông còn đang phát triển",
            ],
            fit: "Học kiến trúc máy tính, compiler, hệ điều hành, thiết bị nhúng, chip tùy biến.",
        },
    };

    const [active, setActive] = useState("x64");
    const item = arch[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Các kiến trúc tập lệnh phổ biến"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-3 mb-6">
                    {Object.entries(arch).map(([key, a]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 text-left border transition-all ${active === key ? `${softBorder(a.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(a.icon, { size: 20 })}{" "}
                                {a.title}
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
                            className={`${textColor(item.color)} font-semibold mb-4`}
                        >
                            {item.subtitle}
                        </p>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            <strong className="text-white">Phù hợp:</strong>{" "}
                            {item.fit}
                        </p>
                    </div>
                    <div className="space-y-3">
                        {item.points.map((p) => (
                            <div
                                key={p}
                                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-3 text-sm text-slate-300"
                            >
                                <CheckCircle2
                                    className={`${textColor(item.color)} shrink-0 mt-0.5`}
                                    size={18}
                                />
                                <span>{p}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ConceptExplorer() {
    const concepts = {
        isa: {
            icon: <Cpu />,
            title: "ISA",
            detail: "Kiến trúc tập lệnh CPU hiểu được.",
            impact: "Quyết định phần mềm có chạy trực tiếp được trên CPU hay không.",
        },
        bit32: {
            icon: <Monitor />,
            title: "32-bit",
            detail: "Kiến trúc xử lý/địa chỉ cũ hơn.",
            impact: "Giới hạn hơn về RAM và phần mềm hiện đại.",
        },
        bit64: {
            icon: <Laptop />,
            title: "64-bit",
            detail: "Kiến trúc hiện đại phổ biến.",
            impact: "Hỗ trợ RAM lớn, phần mềm hiện đại và hiệu năng tốt hơn.",
        },
        arm64: {
            icon: <Smartphone />,
            title: "ARM64 / AArch64",
            detail: "ARM 64-bit.",
            impact: "Phổ biến trên điện thoại, Mac Apple Silicon, laptop ARM và thiết bị tiết kiệm điện.",
        },
        risc: {
            icon: <Rocket />,
            title: "RISC",
            detail: "Reduced Instruction Set Computer: tập lệnh đơn giản hơn.",
            impact: "Dễ tối ưu hiệu năng/watt, gắn với ARM và RISC-V.",
        },
        cisc: {
            icon: <Puzzle />,
            title: "CISC",
            detail: "Complex Instruction Set Computer: tập lệnh phức tạp hơn.",
            impact: "Gắn với x86/x64 truyền thống.",
        },
        emu: {
            icon: <Workflow />,
            title: "Emulation / Translation",
            detail: "Giả lập hoặc dịch mã để chạy phần mềm khác kiến trúc.",
            impact: "Có thể giúp tương thích, nhưng đôi khi chậm hơn native.",
        },
        compiler: {
            icon: <Code2 />,
            title: "Compiler",
            detail: "Trình biên dịch biến code thành mã máy đúng ISA.",
            impact: "Cùng một code nguồn có thể được biên dịch thành bản x64, ARM64 hoặc RISC-V.",
        },
    };
    const [active, setActive] = useState("isa");
    const item = concepts[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
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
                            <strong className="text-white">Ghi nhớ:</strong> ISA
                            không phải hãng CPU. x64 là kiến trúc; Intel/AMD là
                            hãng. ARM là kiến trúc; Apple/Qualcomm/MediaTek có
                            thể thiết kế chip dùng ARM.
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
            subtitle: "Đại diện x64 trên PC Windows",
            points: [
                "CPU desktop phổ biến",
                "6 nhân / 12 luồng",
                "Turbo tối đa 4.40GHz",
                "Phù hợp Windows x64, Linux x64, game PC",
                "Bản F không có GPU tích hợp",
            ],
            lesson: "x64 vẫn là lựa chọn rất an toàn nếu cần tương thích rộng với phần mềm Windows và game PC.",
            color: "blue",
        },
        {
            icon: <Smartphone />,
            title: "Raspberry Pi 5",
            subtitle: "ARM nhỏ gọn, tiết kiệm điện",
            points: [
                "Broadcom BCM2712",
                "Quad-core Arm Cortex-A76 2.4GHz",
                "Chạy Raspberry Pi OS / Linux ARM",
                "Học Linux, Python, IoT, robot",
                "Không chạy trực tiếp app Windows x64 thông thường",
            ],
            lesson: "ARM phù hợp thiết bị nhỏ gọn, tiết kiệm điện và học nhúng/IoT.",
            color: "emerald",
        },
        {
            icon: <Laptop />,
            title: "Mac Apple Silicon",
            subtitle: "ARM hiệu năng cao cho laptop/desktop",
            points: [
                "M1/M2/M3/M4 dùng ARM tùy biến",
                "Hiệu năng/watt tốt",
                "Pin lâu, máy mát",
                "App native ARM chạy rất tốt",
                "App Intel cũ có thể cần Rosetta 2",
            ],
            lesson: "ARM không đồng nghĩa yếu; khi phần mềm tối ưu tốt, hiệu năng có thể rất cao.",
            color: "cyan",
        },
        {
            icon: <Sparkles />,
            title: "RISC-V",
            subtitle: "Kiến trúc mở cho học tập và chip tùy biến",
            points: [
                "ISA mở",
                "Dễ nghiên cứu kiến trúc máy tính",
                "Phù hợp nhúng, IoT, giáo dục",
                "Có thể tùy biến phần mở rộng",
                "Chưa phổ biến như x64/ARM trên PC",
            ],
            lesson: "RISC-V rất quan trọng trong giáo dục, nghiên cứu và thiết kế chip tương lai.",
            color: "orange",
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

function DownloadChoiceLab() {
    const scenarios = {
        win: {
            icon: <Monitor />,
            title: "Windows PC Intel/AMD",
            choice: "Chọn Windows x64",
            note: "Đây là lựa chọn phổ biến nhất cho PC/laptop Windows hiện đại.",
            color: "blue",
        },
        mac: {
            icon: <Laptop />,
            title: "Mac M1/M2/M3/M4",
            choice: "Chọn macOS Apple Silicon / ARM64",
            note: "App native Apple Silicon thường chạy tốt hơn app Intel qua Rosetta 2.",
            color: "cyan",
        },
        pi: {
            icon: <Smartphone />,
            title: "Raspberry Pi",
            choice: "Chọn Linux ARM64",
            note: "Raspberry Pi dùng ARM, không chạy trực tiếp app Windows x64 thông thường.",
            color: "emerald",
        },
        old: {
            icon: <AlertTriangle />,
            title: "Máy cũ 32-bit",
            choice: "Chọn x86 nếu còn hỗ trợ",
            note: "Nhiều phần mềm hiện đại đã bỏ hỗ trợ 32-bit, nên cần kiểm tra kỹ.",
            color: "orange",
        },
    };
    const [active, setActive] = useState("win");
    const item = scenarios[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Lab: tải phần mềm nên chọn bản nào?"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-3 mb-6">
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
                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-14 h-14 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(item.icon, { size: 28 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                            {item.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {item.note}
                        </p>
                    </div>
                    <div
                        className={`${softBorder(item.color)} border rounded-3xl p-6 flex items-center`}
                    >
                        <p className="text-slate-300 leading-relaxed">
                            <strong className={textColor(item.color)}>
                                Nên chọn:
                            </strong>{" "}
                            {item.choice}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CommonMistakes() {
    const mistakes = [
        {
            wrong: "CPU nào cũng chạy được mọi phần mềm",
            right: "CPU phải hiểu đúng ISA của phần mềm. Khác kiến trúc cần bản riêng, giả lập hoặc dịch mã.",
        },
        {
            wrong: "x86 và x64 giống nhau hoàn toàn",
            right: "x86 thường chỉ 32-bit; x64/x86-64 là 64-bit, hiện đại hơn và hỗ trợ RAM lớn hơn.",
        },
        {
            wrong: "ARM yếu hơn x64",
            right: "ARM không đồng nghĩa yếu. ARM tối ưu hiệu năng/watt rất tốt; Apple Silicon là ví dụ rõ ràng.",
        },
        {
            wrong: "RISC-V là CPU rẻ tiền",
            right: "RISC-V là kiến trúc tập lệnh mở, không phải một dòng CPU giá rẻ cụ thể.",
        },
    ];

    const tips = [
        "Windows PC Intel/AMD hiện đại: thường chọn Windows x64.",
        "Mac M1/M2/M3/M4: chọn macOS Apple Silicon / ARM64 khi có.",
        "Raspberry Pi: chọn Linux ARM64.",
        "Máy cũ 32-bit: chọn x86 nếu phần mềm còn hỗ trợ.",
        "Mua laptop Windows ARM: kiểm tra phần mềm cần dùng có bản ARM native chưa hoặc chạy giả lập có ổn không.",
        "Đừng nhầm ISA với hãng CPU: x64 là kiến trúc, Intel/AMD là hãng; ARM là kiến trúc, Apple/Qualcomm/MediaTek là hãng thiết kế chip dùng ARM.",
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
                        <Lightbulb /> Mẹo chọn đúng bản phần mềm
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-indigo-300 border border-slate-800 shadow-inner space-y-2">
                            <p>ISA = Instruction Set Architecture</p>
                            <p className="text-slate-300">
                                = bộ lệnh / ngôn ngữ CPU hiểu được
                            </p>
                            <br />
                            <p className="text-slate-500"># x86</p>
                            <p className="text-slate-300">
                                32-bit truyền thống, quan trọng với phần mềm cũ
                            </p>
                            <br />
                            <p className="text-slate-500"># x64 / x86-64</p>
                            <p className="text-slate-300">
                                64-bit phổ biến trên PC/laptop/server
                            </p>
                            <br />
                            <p className="text-slate-500"># ARM</p>
                            <p className="text-slate-300">
                                Hiệu năng/watt tốt, phổ biến trên mobile, Mac
                                Apple Silicon, Raspberry Pi
                            </p>
                            <br />
                            <p className="text-slate-500"># RISC-V</p>
                            <p className="text-slate-300">
                                ISA mở, linh hoạt, đang phát triển mạnh
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
        question: "ISA – Instruction Set Architecture là gì?",
        options: [
            "Dung lượng RAM của máy",
            "Bộ quy tắc/lệnh mà CPU hiểu và thực thi được",
            "Loại màn hình máy tính",
            "Công suất nguồn PSU",
        ],
        correct: 1,
        explanation:
            "ISA là kiến trúc tập lệnh: bộ quy tắc/lệnh CPU hiểu và có thể thực thi.",
    },
    {
        question:
            "Máy Windows PC dùng CPU Intel/AMD hiện đại thường chạy phần mềm bản nào tốt nhất?",
        options: [
            "Windows x64",
            "Android APK",
            "macOS Apple Silicon",
            "Raspberry Pi ARM-only image",
        ],
        correct: 0,
        explanation:
            "PC Intel/AMD hiện đại thường dùng x86-64, nên bản Windows x64 là lựa chọn phổ biến và phù hợp nhất.",
    },
    {
        question: "Điểm nổi bật của RISC-V là gì?",
        options: [
            "Là kiến trúc tập lệnh mở, dễ nghiên cứu và tùy biến",
            "Chỉ dùng để làm màn hình",
            "Là loại ổ cứng mới",
            "Không cần compiler",
        ],
        correct: 0,
        explanation:
            "RISC-V là ISA mở, rất đáng chú ý trong nghiên cứu, giáo dục, nhúng và chip tùy biến.",
    },
    {
        question: "App x64 muốn chạy trên CPU ARM thường cần gì?",
        options: [
            "Bản ARM riêng hoặc lớp giả lập/dịch mã",
            "Chỉ cần màn hình 4K",
            "Thay dây nguồn",
            "Không cần hệ điều hành",
        ],
        correct: 0,
        explanation:
            "CPU ARM không hiểu trực tiếp mã máy x64; cần bản native ARM hoặc lớp dịch mã/giả lập nếu được hỗ trợ.",
    },
    {
        question: "x86 và x64 khác nhau cơ bản ở điểm nào?",
        options: [
            "x86 thường là 32-bit, x64 là 64-bit",
            "x86 là RAM, x64 là SSD",
            "x64 chỉ dùng cho điện thoại",
            "Hai khái niệm này không liên quan CPU",
        ],
        correct: 0,
        explanation:
            "x86 thường chỉ kiến trúc 32-bit truyền thống, còn x64/x86-64 là kiến trúc 64-bit mở rộng và phổ biến trên PC hiện đại.",
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
                Bạn đã hiểu kiến trúc tập lệnh là “ngôn ngữ CPU hiểu được”, với
                các nhóm phổ biến như x86/x64, ARM và RISC-V. Tiếp theo là học
                quy trình sản xuất CPU để hiểu vì sao chip đời mới nhỏ hơn, tiết
                kiệm điện hơn và chứa nhiều transistor hơn.
            </p>
            <Link
                to="/phan-2-8"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20"
            >
                Bài tiếp theo: 2.8 — Quy trình sản xuất CPU: nm Nanometer{" "}
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
        blue: "bg-blue-500/20 text-blue-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        pink: "bg-pink-500/20 text-pink-300",
        red: "bg-red-500/20 text-red-300",
        purple: "bg-purple-500/20 text-purple-300",
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

function badgeColor(color) {
    const map = {
        slate: "bg-slate-500/10 text-slate-300 border border-slate-500/20",
        indigo: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.indigo;
}

function softBorder(color) {
    const map = {
        slate: "bg-slate-500/5 border-slate-500/20",
        indigo: "bg-indigo-500/5 border-indigo-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.indigo;
}

function textColor(color) {
    const map = {
        slate: "text-slate-300",
        indigo: "text-indigo-300",
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        blue: "text-blue-300",
        purple: "text-purple-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-indigo-300";
}
