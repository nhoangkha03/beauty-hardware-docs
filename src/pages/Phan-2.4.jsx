import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowDown,
    Award,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    Cpu,
    Database,
    Fan,
    Gauge,
    Gamepad2,
    HardDrive,
    Laptop,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    PackageCheck,
    Power,
    RefreshCcw,
    Rocket,
    Search,
    Settings,
    Snowflake,
    Sparkles,
    Thermometer,
    Timer,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-yellow-500 selection:text-slate-950 pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-yellow-500/10 border border-yellow-400/30 flex items-center justify-center shadow-lg shadow-yellow-500/10">
                            <Gauge className="text-yellow-400" size={24} />
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
                    <div className="text-sm font-semibold text-yellow-300 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                        Bài 2.4
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <ClockConcept />
                <CourierAnalogy />
                <ClockTickSimulator />
                <ClockTypes />
                <PerformanceFormula />
                <SpecsExplorer />
                <RealExamples />
                <ThermalThrottleLab />
                <CpuComparisonLab />
                <MistakesAndTips />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-yellow-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-yellow-300">
                        <BookOpen size={16} /> Phần 2: CPU – Bộ xử lý trung tâm
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Xung nhịp CPU
                        <span className="block text-yellow-400">
                            Clock Speed & ý nghĩa
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        GHz cho biết CPU có bao nhiêu chu kỳ mỗi giây, nhưng
                        hiệu năng thật còn phụ thuộc kiến trúc, IPC, số nhân,
                        cache, nhiệt độ, điện năng và phần mềm.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Gauge size={16} />} text="GHz" />
                        <Tag icon={<Rocket size={16} />} text="Boost Clock" />
                        <Tag icon={<Timer size={16} />} text="Base Clock" />
                        <Tag icon={<Zap size={16} />} text="IPC" />
                        <Tag
                            icon={<Thermometer size={16} />}
                            text="Thermal Throttling"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-1 gap-3">
                        <HeroClockCard
                            icon={<Gauge />}
                            label="4.0GHz"
                            desc="Khoảng 4 tỷ chu kỳ mỗi giây"
                            color="yellow"
                            highlight
                        />
                        <HeroClockCard
                            icon={<Brain />}
                            label="Không chỉ GHz"
                            desc="Còn IPC, cache, nhân/luồng, phần mềm"
                            color="cyan"
                        />
                        <HeroClockCard
                            icon={<Thermometer />}
                            label="Nhiệt & điện"
                            desc="Quyết định CPU có giữ xung cao lâu không"
                            color="red"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Công thức tư duy</p>
                        <p>
                            <span className="text-yellow-300">Hiệu năng</span> ≈
                            GHz × IPC
                        </p>
                        <p className="text-slate-300">
                            × số nhân hữu dụng × tối ưu phần mềm
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu Clock Speed / Clock Frequency là gì và vì sao đo bằng GHz.",
        "Biết một chu kỳ không đồng nghĩa một công việc hoàn chỉnh.",
        "Phân biệt Base Clock, Boost Clock, All-core Clock, Single-core Clock và Effective Clock.",
        "Hiểu vì sao IPC, cache, RAM, nhiệt độ, điện năng và phần mềm ảnh hưởng hiệu năng.",
        "Biết đọc GHz đúng cách khi chọn CPU desktop, laptop hoặc build PC.",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="yellow"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-yellow-500/50 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
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

function ClockConcept() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: xung nhịp CPU là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6 items-start">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">
                                Xung nhịp CPU
                            </strong>
                            , tiếng Anh là{" "}
                            <strong className="text-cyan-300">
                                Clock Speed
                            </strong>{" "}
                            hoặc{" "}
                            <strong className="text-cyan-300">
                                Clock Frequency
                            </strong>
                            , là tốc độ nhịp hoạt động của CPU.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-cyan-300">
                                Hiểu đơn giản:
                            </strong>{" "}
                            xung nhịp giống nhịp làm việc của CPU. Mỗi nhịp là
                            một cơ hội để CPU thực hiện một phần công việc.
                        </div>
                        <p>
                            Nhưng một chu kỳ không luôn bằng một công việc hoàn
                            chỉnh. Một lệnh có thể cần nhiều chu kỳ, hoặc CPU
                            hiện đại có thể xử lý nhiều lệnh trong một chu kỳ
                            tùy kiến trúc và IPC.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <Gauge className="text-cyan-300" /> Đơn vị thường
                            gặp
                        </h3>
                        <div className="space-y-3">
                            <UnitRow unit="Hz" value="1 chu kỳ mỗi giây" />
                            <UnitRow
                                unit="MHz"
                                value="1 triệu chu kỳ mỗi giây"
                            />
                            <UnitRow
                                unit="GHz"
                                value="1 tỷ chu kỳ mỗi giây"
                                highlight
                            />
                        </div>
                        <div className="mt-5 bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-slate-300">
                            <p>CPU 4.0GHz ≈ 4 tỷ chu kỳ/giây</p>
                            <p>CPU 4.4GHz ≈ 4.4 tỷ chu kỳ/giây</p>
                            <p>CPU 5.0GHz ≈ 5 tỷ chu kỳ/giây</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CourierAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="orange"
                title="Ví dụ đời thường: người giao hàng"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-orange-500/5 border border-orange-500/20 rounded-3xl p-6">
                        <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-300 border border-orange-500/20 flex items-center justify-center mb-4">
                            <Gauge size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                            GHz giống tốc độ bước chân
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Người giao hàng bước nhanh hơn thường có lợi. CPU
                            xung cao hơn cũng có nhiều chu kỳ hơn mỗi giây để xử
                            lý công việc.
                        </p>
                    </div>
                    <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-3xl p-6">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center justify-center mb-4">
                            <Workflow size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                            Nhưng giao nhanh còn do nhiều yếu tố
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Đường đi, số món hàng, cách sắp xếp đơn, phương tiện
                            và kẹt xe cũng ảnh hưởng. CPU cũng vậy: IPC, cache,
                            RAM, nhiệt độ và phần mềm đều quan trọng.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ClockTickSimulator() {
    const steps = [
        {
            title: "Clock Tick 1",
            desc: "Lấy lệnh hoặc chuẩn bị dữ liệu. Cache/Registers giúp CPU có dữ liệu nhanh hơn.",
            icon: <Database />,
            color: "cyan",
        },
        {
            title: "Clock Tick 2",
            desc: "CU giải mã lệnh để hiểu cần làm phép toán, đọc/ghi hay điều phối gì.",
            icon: <Settings />,
            color: "violet",
        },
        {
            title: "Clock Tick 3",
            desc: "ALU hoặc khối xử lý thực hiện phép tính, logic hoặc thao tác cần thiết.",
            icon: <Cpu />,
            color: "orange",
        },
        {
            title: "Clock Tick 4",
            desc: "Kết quả được ghi lại vào Register, Cache, RAM hoặc gửi sang khối khác.",
            icon: <CheckCircle2 />,
            color: "emerald",
        },
    ];
    const [step, setStep] = useState(0);
    const current = steps[step];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Mô phỏng: mỗi nhịp clock giúp CPU phối hợp ra sao"
                icon={<Timer />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[330px] flex flex-col justify-between">
                        <div>
                            <div
                                className={`w-16 h-16 rounded-2xl ${badgeColor(current.color)} flex items-center justify-center mb-5`}
                            >
                                {React.cloneElement(current.icon, { size: 32 })}
                            </div>
                            <p className="text-purple-300 text-sm font-bold mb-2">
                                Bước {step + 1}/{steps.length}
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
                                        {item.desc.slice(0, 58)}...
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-yellow-300">
                        Thực tế phức tạp hơn:
                    </strong>{" "}
                    CPU hiện đại còn có pipeline, cache, dự đoán nhánh và xử lý
                    song song, nên không thể quy đổi máy móc “1 tick = 1 lệnh”.
                </div>
            </div>
        </section>
    );
}

function ClockTypes() {
    const types = {
        base: {
            icon: <Timer />,
            title: "Base Clock",
            desc: "Xung cơ bản CPU có thể duy trì ổn định trong điều kiện công suất/nhiệt thiết kế.",
            good: "Ổn định, phản ánh mức chạy nền",
            caution: "Không thể hiện hết hiệu năng tối đa",
            when: "Tác vụ dài, render, tải nặng lâu",
        },
        boost: {
            icon: <Rocket />,
            title: "Boost / Turbo Clock",
            desc: "Xung tăng tốc tối đa trong thời gian hoặc điều kiện nhất định khi CPU còn đủ nhiệt và điện.",
            good: "Giúp tác vụ ngắn phản hồi nhanh",
            caution: "Không phải lúc nào cũng duy trì được",
            when: "Mở app, game, tác vụ đơn nhân",
        },
        allcore: {
            icon: <Cpu />,
            title: "All-core Clock",
            desc: "Xung khi nhiều hoặc tất cả nhân cùng tải.",
            good: "Phản ánh hiệu năng đa nhân thực tế",
            caution: "Thường thấp hơn boost đơn nhân",
            when: "Render, encode, chạy máy ảo",
        },
        single: {
            icon: <Zap />,
            title: "Single-core Clock",
            desc: "Xung cao trên một hoặc vài nhân.",
            good: "Tốt cho game và thao tác nhanh",
            caution: "Không phản ánh hiệu năng đa nhân",
            when: "Game, app văn phòng, tác vụ nhẹ",
        },
        effective: {
            icon: <Gauge />,
            title: "Effective Clock",
            desc: "Xung thực tế CPU đang đạt trong điều kiện sử dụng.",
            good: "Phản ánh sát trải nghiệm hơn",
            caution: "Cần phần mềm đo như HWInfo",
            when: "Kiểm tra hiệu năng, nhiệt độ",
        },
        oc: {
            icon: <Sparkles />,
            title: "Overclock Clock",
            desc: "Xung ép cao hơn mặc định.",
            good: "Có thể tăng hiệu năng",
            caution: "Tăng nhiệt, tốn điện, rủi ro mất ổn định",
            when: "Người dùng có kinh nghiệm",
        },
    };
    const [active, setActive] = useState("base");
    const item = types[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Các loại xung nhịp CPU thường gặp"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {Object.entries(types).map(([key, t]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 text-left border transition-all ${active === key ? "bg-blue-500/10 border-blue-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(t.icon, { size: 20 })}{" "}
                                {t.title}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-300 border border-blue-500/20 flex items-center justify-center mb-4">
                            {React.cloneElement(item.icon, { size: 28 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                            {item.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-3">
                        <InfoCard
                            label="Ưu điểm"
                            value={item.good}
                            color="emerald"
                        />
                        <InfoCard
                            label="Cần lưu ý"
                            value={item.caution}
                            color="orange"
                        />
                        <InfoCard
                            label="Quan trọng khi"
                            value={item.when}
                            color="blue"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function PerformanceFormula() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Công thức tư duy: vì sao GHz không phải tất cả?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 font-mono text-center">
                    <p className="text-slate-500 mb-3">
                        // Không phải công thức toán tuyệt đối, nhưng rất hữu
                        ích để tư duy
                    </p>
                    <p className="text-xl md:text-2xl font-extrabold text-white leading-relaxed">
                        Hiệu năng CPU ≈{" "}
                        <span className="text-yellow-300">Xung nhịp</span> ×{" "}
                        <span className="text-cyan-300">IPC</span> ×{" "}
                        <span className="text-emerald-300">
                            số nhân hữu dụng
                        </span>{" "}
                        ×{" "}
                        <span className="text-purple-300">
                            mức tối ưu phần mềm
                        </span>
                    </p>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mt-6">
                    <FormulaCard
                        icon={<Gauge />}
                        title="Xung nhịp"
                        desc="Nhiều chu kỳ hơn mỗi giây."
                        color="yellow"
                    />
                    <FormulaCard
                        icon={<Zap />}
                        title="IPC"
                        desc="Mỗi chu kỳ xử lý được bao nhiêu lệnh."
                        color="cyan"
                    />
                    <FormulaCard
                        icon={<Cpu />}
                        title="Nhân hữu dụng"
                        desc="Phần mềm có tận dụng được nhiều nhân không."
                        color="emerald"
                    />
                    <FormulaCard
                        icon={<Settings />}
                        title="Tối ưu phần mềm"
                        desc="Ứng dụng/game/driver có tối ưu tốt không."
                        color="purple"
                    />
                </div>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        ghz: {
            icon: <Gauge />,
            title: "GHz",
            detail: "Số tỷ chu kỳ mỗi giây.",
            impact: "GHz cao thường giúp tác vụ phản hồi nhanh hơn, nhất là tác vụ đơn nhân hoặc thao tác ngắn.",
        },
        ipc: {
            icon: <Zap />,
            title: "IPC",
            detail: "Instructions Per Cycle: số lệnh xử lý được mỗi chu kỳ.",
            impact: "IPC cao giúp CPU mạnh dù GHz không quá cao.",
        },
        cores: {
            icon: <Cpu />,
            title: "Cores",
            detail: "Số lõi xử lý vật lý.",
            impact: "Nhiều nhân giúp xử lý nhiều việc song song tốt hơn.",
        },
        threads: {
            icon: <Workflow />,
            title: "Threads",
            detail: "Số luồng xử lý logic.",
            impact: "Hữu ích cho phần mềm đa luồng như render, encode, máy ảo.",
        },
        cache: {
            icon: <Database />,
            title: "Cache",
            detail: "Bộ nhớ đệm trong CPU.",
            impact: "Cache tốt giúp CPU ít phải chờ RAM.",
        },
        power: {
            icon: <Power />,
            title: "TDP / Power Limit",
            detail: "Công suất/nhiệt thiết kế hoặc giới hạn điện năng.",
            impact: "Ảnh hưởng khả năng giữ xung cao trong tải nặng.",
        },
        temp: {
            icon: <Thermometer />,
            title: "Temperature",
            detail: "Nhiệt độ CPU khi hoạt động.",
            impact: "Nóng quá CPU sẽ giảm xung để tự bảo vệ.",
        },
        cooling: {
            icon: <Fan />,
            title: "Cooling",
            detail: "Tản nhiệt CPU và airflow trong case/laptop.",
            impact: "Tản tốt giúp CPU duy trì boost lâu hơn.",
        },
        vrm: {
            icon: <MemoryStick />,
            title: "Motherboard VRM",
            detail: "Mạch cấp điện CPU trên mainboard.",
            impact: "VRM tốt giúp CPU chạy ổn định ở tải cao.",
        },
    };
    const [active, setActive] = useState("ghz");
    const item = specs[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số liên quan đến xung nhịp"
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
                            <span className="font-bold text-xs">{s.title}</span>
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
                            Yếu tố ảnh hưởng hiệu năng CPU
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
                            <strong className="text-white">Mẹo:</strong> so sánh
                            CPU đúng cách cần xem cả GHz, IPC, nhân/luồng,
                            cache, điện năng, nhiệt độ, tản nhiệt và phần mềm.
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
            subtitle: "Up to 4.4GHz, PC tầm trung phổ biến",
            points: [
                "Up to 4.4GHz",
                "6 nhân / 12 luồng",
                "18MB cache",
                "Công suất cơ bản 65W",
                "Mở app và game eSports phản hồi tốt",
            ],
            lesson: "Boost cao giúp tác vụ ngắn nhanh, nhưng render lâu có thể không giữ mãi turbo tối đa nếu nhiệt/điện bị giới hạn.",
            color: "orange",
        },
        {
            icon: <Cpu />,
            title: "AMD Ryzen 5 5600",
            subtitle: "Base 3.5GHz, Boost up to 4.4GHz",
            points: [
                "6 nhân / 12 luồng",
                "Base Clock 3.5GHz",
                "Max Boost up to 4.4GHz",
                "L2 3MB, L3 32MB",
                "TDP 65W",
            ],
            lesson: "Base phản ánh mức nền ổn định hơn, boost giúp phản hồi nhanh; cache L3 lớn cũng ảnh hưởng hiệu năng trong game.",
            color: "emerald",
        },
        {
            icon: <Rocket />,
            title: "Intel Core i9-14900K",
            subtitle: "Xung rất cao nhưng cần hệ sinh thái đi kèm",
            points: [
                "Xung turbo rất cao",
                "Cần tản nhiệt tốt",
                "Cần mainboard và nguồn tốt",
                "Case airflow quan trọng",
                "Tản yếu có thể giảm xung",
            ],
            lesson: "Xung cao không miễn phí: điện năng, nhiệt độ và VRM/tản nhiệt quyết định CPU có giữ hiệu năng hay không.",
            color: "red",
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

function ThermalThrottleLab() {
    const [mode, setMode] = useState("cool");
    const data = {
        cool: {
            icon: <Snowflake />,
            title: "Tản nhiệt tốt",
            temp: "Nhiệt độ ổn",
            clock: "Giữ boost lâu hơn",
            result: "Hiệu năng ổn định hơn trong game, render và tác vụ dài.",
            color: "cyan",
        },
        hot: {
            icon: <Thermometer />,
            title: "Tản nhiệt yếu / case bí",
            temp: "Nhiệt độ cao",
            clock: "CPU giảm xung",
            result: "Hiệu năng giảm, có thể giật/lag khi tải nặng. Đây là thermal throttling.",
            color: "red",
        },
    };
    const item = data[mode];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="red"
                title="Lab: thermal throttling làm xung nhịp tụt như thế nào?"
                icon={<Thermometer />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                    <button
                        onClick={() => setMode("cool")}
                        className={`rounded-2xl p-4 text-left border transition-all ${mode === "cool" ? "bg-cyan-500/10 border-cyan-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                    >
                        <div className="flex items-center gap-2 font-bold">
                            <Snowflake size={20} /> Dàn máy mát
                        </div>
                    </button>
                    <button
                        onClick={() => setMode("hot")}
                        className={`rounded-2xl p-4 text-left border transition-all ${mode === "hot" ? "bg-red-500/10 border-red-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                    >
                        <div className="flex items-center gap-2 font-bold">
                            <Thermometer size={20} /> Dàn máy nóng
                        </div>
                    </button>
                </div>
                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6 items-center">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 text-center">
                        <div
                            className={`w-24 h-24 rounded-3xl ${badgeColor(item.color)} flex items-center justify-center mx-auto mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 46 })}
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className={`${textColor(item.color)} font-bold`}>
                            {item.temp}
                        </p>
                    </div>
                    <div className="space-y-3">
                        <InfoCard
                            label="Xung thực tế"
                            value={item.clock}
                            color={item.color}
                        />
                        <InfoCard
                            label="Kết quả"
                            value={item.result}
                            color={item.color}
                        />
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-sm text-slate-300">
                            <strong className="text-white">Quy trình:</strong>{" "}
                            CPU nóng quá → giảm xung → hiệu năng giảm → máy có
                            thể giật/lag khi tải nặng.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CpuComparisonLab() {
    const [scenario, setScenario] = useState("newer");
    const scenarios = {
        newer: {
            title: "CPU đời mới 4.0GHz",
            desc: "IPC cao, cache tốt, kiến trúc mới, tản nhiệt ổn.",
            result: "Có thể mạnh hơn CPU đời cũ 4.5GHz dù xung thấp hơn.",
            icon: <Sparkles />,
            color: "emerald",
        },
        old: {
            title: "CPU đời cũ 4.5GHz",
            desc: "Xung cao nhưng IPC thấp hơn, cache/kiến trúc cũ hơn.",
            result: "Không chắc mạnh hơn chỉ vì GHz cao hơn.",
            icon: <Gauge />,
            color: "orange",
        },
        laptop: {
            title: "Cùng CPU nhưng laptop khác nhau",
            desc: "Một máy tản tốt/giới hạn điện rộng, máy khác mỏng nhẹ/tản yếu.",
            result: "Hiệu năng thực tế có thể khác nhau rõ rệt dù tên CPU giống nhau.",
            icon: <Laptop />,
            color: "blue",
        },
    };
    const item = scenarios[scenario];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: so sánh CPU không chỉ bằng GHz"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {Object.entries(scenarios).map(([key, s]) => (
                        <button
                            key={key}
                            onClick={() => setScenario(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${scenario === key ? `${softBorder(s.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
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
                            {item.desc}
                        </p>
                    </div>
                    <div
                        className={`${softBorder(item.color)} border rounded-3xl p-6 flex items-center`}
                    >
                        <p className="text-slate-300 leading-relaxed">
                            <strong className={textColor(item.color)}>
                                Kết luận:
                            </strong>{" "}
                            {item.result}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MistakesAndTips() {
    const mistakes = [
        {
            wrong: "CPU GHz cao hơn chắc chắn mạnh hơn",
            right: "GHz cao hơn chỉ cho biết nhiều chu kỳ hơn mỗi giây. Hiệu năng còn phụ thuộc kiến trúc, IPC, nhân/luồng, cache, RAM, nhiệt độ, điện năng và phần mềm.",
        },
        {
            wrong: "Boost 4.4GHz nghĩa là CPU luôn chạy 4.4GHz",
            right: "Boost Clock là mức tối đa trong điều kiện phù hợp, không phải mức cố định mọi lúc.",
        },
        {
            wrong: "Xung càng cao càng tốt, không cần quan tâm nhiệt độ",
            right: "Xung cao thường nóng hơn. Tản yếu có thể gây thermal throttling khiến CPU tự giảm xung.",
        },
        {
            wrong: "Ép xung luôn đáng làm",
            right: "Overclock có thể tăng hiệu năng nhưng tăng nhiệt, tốn điện, cần mainboard/tản tốt và có rủi ro mất ổn định.",
        },
    ];

    const tips = [
        "So sánh CPU: đọc cả Base Clock và Boost Clock, không chỉ một con số GHz.",
        "Laptop cùng CPU có thể khác hiệu năng vì tản nhiệt và giới hạn điện khác nhau.",
        "CPU chậm bất thường: kiểm tra nhiệt độ, xung thực tế khi tải nặng, bụi tản nhiệt, keo tản nhiệt và chế độ nguồn Windows.",
        "Gaming: xung đơn nhân tốt quan trọng, nhưng GPU vẫn thường quyết định FPS ở game nặng đồ họa.",
        "Render, encode, máy ảo, lập trình nặng: xem số nhân/số luồng, đừng chỉ nhìn GHz.",
        "Build PC: đừng mua CPU xung cao rồi dùng tản nhiệt quá yếu.",
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
                        <span className="bg-yellow-500/20 text-yellow-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-yellow-300 border border-slate-800 shadow-inner space-y-2">
                            <p>CLOCK SPEED = nhịp hoạt động của CPU</p>
                            <p className="text-slate-300">
                                GHz = tỷ chu kỳ mỗi giây
                            </p>
                            <br />
                            <p className="text-slate-500"># Nhưng</p>
                            <p className="text-slate-300">
                                1 chu kỳ không luôn bằng 1 công việc hoàn chỉnh
                            </p>
                            <br />
                            <p className="text-slate-500">
                                # Hiệu năng phụ thuộc
                            </p>
                            <p className="text-slate-300">
                                GHz × IPC × cores hữu dụng × phần mềm
                            </p>
                            <p className="text-slate-300">
                                + cache + RAM + nhiệt + điện + tản nhiệt
                            </p>
                            <br />
                            <p className="text-slate-500"># Boost</p>
                            <p className="text-slate-300">
                                Là mức tối đa trong điều kiện phù hợp, không
                                phải luôn duy trì.
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
        question: "GHz trong xung nhịp CPU biểu thị điều gì?",
        options: [
            "Dung lượng ổ cứng",
            "Số tỷ chu kỳ mỗi giây",
            "Độ phân giải màn hình",
            "Công suất loa",
        ],
        correct: 1,
        explanation:
            "GHz là Gigahertz, biểu thị số tỷ chu kỳ mỗi giây của CPU.",
    },
    {
        question: "Boost Clock nghĩa là gì?",
        options: [
            "Mức xung tối đa CPU có thể đạt trong điều kiện phù hợp",
            "Dung lượng RAM tối đa",
            "Tốc độ quạt case",
            "Dung lượng SSD còn trống",
        ],
        correct: 0,
        explanation:
            "Boost Clock là mức xung tăng tốc tối đa khi CPU còn đủ điều kiện về nhiệt độ, điện năng và tải công việc.",
    },
    {
        question: "Vì sao không nên chỉ nhìn GHz để kết luận CPU mạnh yếu?",
        options: [
            "Vì hiệu năng còn phụ thuộc IPC, số nhân, cache, nhiệt độ, phần mềm",
            "Vì GHz chỉ dùng cho màn hình",
            "Vì CPU không dùng điện",
            "Vì GHz là thông số của ổ cứng",
        ],
        correct: 0,
        explanation:
            "GHz chỉ là một yếu tố. CPU còn phụ thuộc IPC, kiến trúc, cache, số nhân, nhiệt độ, điện năng, RAM và phần mềm.",
    },
    {
        question: "Thermal throttling là gì?",
        options: [
            "CPU tự giảm xung để tránh quá nhiệt",
            "CPU tăng dung lượng SSD",
            "RAM tự biến thành cache",
            "Màn hình tăng độ sáng",
        ],
        correct: 0,
        explanation:
            "Khi CPU quá nóng, nó có thể tự giảm xung để bảo vệ phần cứng, khiến hiệu năng giảm.",
    },
    {
        question: "All-core Clock quan trọng nhất với tác vụ nào?",
        options: [
            "Render, encode, máy ảo, tải nặng nhiều nhân",
            "Chỉ thay đổi hình nền",
            "In tài liệu giấy",
            "Nghe nhạc offline",
        ],
        correct: 0,
        explanation:
            "All-core Clock phản ánh xung khi nhiều nhân cùng tải, nên quan trọng với render, encode, máy ảo và tác vụ đa luồng dài.",
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
                    <strong className="text-yellow-400">
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
                <span className="text-yellow-400">
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
                        className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu xung nhịp CPU là nhịp hoạt động giúp CPU có nhiều
                chu kỳ xử lý hơn mỗi giây, nhưng GHz không phải tất cả. Tiếp
                theo là học số nhân và số luồng để hiểu khả năng xử lý song
                song.
            </p>
            <Link
                to="/phan-2-5"
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-yellow-500/20"
            >
                Bài tiếp theo: 2.5 — Số nhân và số luồng{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "yellow" }) {
    const colorMap = {
        yellow: "bg-yellow-500/20 text-yellow-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        orange: "bg-orange-500/20 text-orange-300",
        purple: "bg-purple-500/20 text-purple-300",
        blue: "bg-blue-500/20 text-blue-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
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

function HeroClockCard({ icon, label, desc, color, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 flex items-center gap-4 ${highlight ? "bg-yellow-500/10 border-yellow-400/50" : softBorder(color)}`}
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

function UnitRow({ unit, value, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 flex items-center justify-between ${highlight ? "bg-yellow-500/10 border-yellow-500/30" : "bg-slate-900 border-slate-800"}`}
        >
            <span
                className={`font-extrabold ${highlight ? "text-yellow-300" : "text-white"}`}
            >
                {unit}
            </span>
            <span className="text-sm text-slate-300">{value}</span>
        </div>
    );
}

function FormulaCard({ icon, title, desc, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-5`}>
            <div
                className={`w-11 h-11 rounded-xl ${badgeColor(color)} flex items-center justify-center mb-3`}
            >
                {React.cloneElement(icon, { size: 22 })}
            </div>
            <h4 className="text-white font-bold mb-2">{title}</h4>
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

function badgeColor(color) {
    const map = {
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.yellow;
}

function softBorder(color) {
    const map = {
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.yellow;
}

function textColor(color) {
    const map = {
        yellow: "text-yellow-300",
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-yellow-300";
}
