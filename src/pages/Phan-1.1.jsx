import React, { useMemo, useState } from "react";
import {
    Activity,
    AlertTriangle,
    ArrowRight,
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
    Keyboard,
    Laptop,
    Lightbulb,
    MemoryStick,
    Monitor,
    MousePointer2,
    PackageCheck,
    PlugZap,
    Power,
    Puzzle,
    Search,
    Settings,
    ShieldCheck,
    Smartphone,
    Speaker,
    TabletSmartphone,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-orange-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-400/30 flex items-center justify-center shadow-lg shadow-orange-500/10">
                            <Cpu className="text-orange-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 1: Tổng quan về phần cứng
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                        Bài 1.1
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <HardwareDefinition />
                <OfficeAnalogy />
                <HardwareFlowSimulator />
                <HardwareCategories />
                <SpecsExplorer />
                <RealExamples />
                <MistakesAndTips />
                <BuildAdvisor />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-yellow-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-orange-300">
                        <BookOpen size={16} /> Phần 1: Tổng quan về phần cứng
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Phần cứng là gì?
                        <span className="block text-orange-400">
                            Cơ thể của máy tính
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Học cách CPU, RAM, SSD, GPU, mainboard, nguồn, màn hình,
                        chuột và bàn phím phối hợp để biến thao tác của người
                        dùng thành kết quả trên máy tính.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="CPU" />
                        <Tag icon={<MemoryStick size={16} />} text="RAM" />
                        <Tag icon={<HardDrive size={16} />} text="SSD/HDD" />
                        <Tag icon={<Monitor size={16} />} text="Output" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-3 gap-3">
                        <HardwareTile
                            icon={<Keyboard />}
                            label="Keyboard"
                            group="Input"
                        />
                        <HardwareTile
                            icon={<MousePointer2 />}
                            label="Mouse"
                            group="Input"
                        />
                        <HardwareTile
                            icon={<Monitor />}
                            label="Monitor"
                            group="Output"
                        />
                        <HardwareTile
                            icon={<Cpu />}
                            label="CPU"
                            group="Process"
                            highlight
                        />
                        <HardwareTile
                            icon={<MemoryStick />}
                            label="RAM"
                            group="Memory"
                            active
                        />
                        <HardwareTile
                            icon={<HardDrive />}
                            label="SSD"
                            group="Storage"
                            active
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Ý tưởng chính</p>
                        <p className="text-orange-300">
                            Nhìn thấy + chạm được + lắp ráp được
                        </p>
                        <p className="text-slate-300">= phần cứng máy tính</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu phần cứng máy tính là gì.",
        "Phân biệt phần cứng và phần mềm bằng ví dụ đời thường.",
        "Biết các nhóm Input, Processing, Storage, Output.",
        "Hiểu CPU, RAM, SSD, GPU, mainboard, PSU phối hợp ra sao.",
        "Biết các thông số cơ bản khi mua hoặc nâng cấp máy.",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="orange"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-orange-500/50 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-300 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
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

function HardwareDefinition() {
    const [mode, setMode] = useState("hardware");

    const content = {
        hardware: {
            icon: <Puzzle />,
            title: "Phần cứng",
            color: "orange",
            desc: "Tất cả bộ phận vật lý có thể nhìn thấy, chạm vào hoặc cầm nắm được.",
            examples: [
                "CPU",
                "RAM",
                "SSD/HDD",
                "Mainboard",
                "Màn hình",
                "Bàn phím",
                "Chuột",
                "Nguồn",
                "Vỏ case",
            ],
            metaphor: "Giống như cơ thể của máy tính.",
        },
        software: {
            icon: <Settings />,
            title: "Phần mềm",
            color: "cyan",
            desc: "Chương trình, hệ điều hành, ứng dụng và dữ liệu chạy trên phần cứng.",
            examples: [
                "Windows",
                "Chrome",
                "Zalo",
                "Facebook",
                "YouTube",
                "Game",
                "Office",
                "Driver",
            ],
            metaphor: "Giống như kiến thức và kỹ năng bên trong cơ thể đó.",
        },
    };

    const item = content[mode];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
                    <div className="space-y-3">
                        <button
                            onClick={() => setMode("hardware")}
                            className={`w-full p-5 rounded-2xl border text-left transition-all ${mode === "hardware" ? "bg-orange-500/10 border-orange-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-3 font-bold">
                                <Puzzle size={22} /> Phần cứng
                            </div>
                            <p className="text-sm mt-2 opacity-75">
                                CPU, RAM, SSD, màn hình, chuột...
                            </p>
                        </button>
                        <button
                            onClick={() => setMode("software")}
                            className={`w-full p-5 rounded-2xl border text-left transition-all ${mode === "software" ? "bg-cyan-500/10 border-cyan-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-3 font-bold">
                                <Settings size={22} /> Phần mềm
                            </div>
                            <p className="text-sm mt-2 opacity-75">
                                Windows, Chrome, Zalo, game...
                            </p>
                        </button>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[330px]">
                        <div
                            className={`w-14 h-14 rounded-2xl ${item.color === "orange" ? "bg-orange-500/10 text-orange-300" : "bg-cyan-500/10 text-cyan-300"} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 30 })}
                        </div>
                        <h3 className="text-3xl font-extrabold text-white mb-3">
                            {item.title} là gì?
                        </h3>
                        <p className="text-slate-300 leading-relaxed mb-5">
                            {item.desc}
                        </p>
                        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-sm text-slate-300 mb-5">
                            <strong
                                className={
                                    item.color === "orange"
                                        ? "text-orange-300"
                                        : "text-cyan-300"
                                }
                            >
                                Ví dụ dễ nhớ:
                            </strong>{" "}
                            {item.metaphor}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {item.examples.map((ex) => (
                                <span
                                    key={ex}
                                    className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sm text-slate-300"
                                >
                                    {ex}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function OfficeAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="blue"
                title="Hiểu phần cứng qua ví dụ văn phòng"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 md:p-8">
                <p className="text-slate-300 mb-8 leading-relaxed">
                    Một máy tính giống như một văn phòng làm việc. Mỗi linh kiện
                    có một vai trò riêng, và máy chỉ chạy tốt khi các bộ phận
                    phối hợp cân bằng.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                    <AnalogyCard
                        icon={<Cpu />}
                        title="CPU"
                        role="Bộ não xử lý"
                        desc="Nhận lệnh, tính toán, điều phối tác vụ."
                    />
                    <AnalogyCard
                        icon={<MemoryStick />}
                        title="RAM"
                        role="Bàn làm việc"
                        desc="Giữ dữ liệu đang dùng, mất khi tắt máy."
                        highlight
                    />
                    <AnalogyCard
                        icon={<HardDrive />}
                        title="SSD/HDD"
                        role="Tủ hồ sơ"
                        desc="Lưu Windows, phần mềm, ảnh, video lâu dài."
                    />
                    <AnalogyCard
                        icon={<Gauge />}
                        title="GPU"
                        role="Họa sĩ"
                        desc="Xử lý hình ảnh, game, 3D, video, AI."
                    />
                    <AnalogyCard
                        icon={<Puzzle />}
                        title="Mainboard"
                        role="Hệ thống đường dây"
                        desc="Kết nối CPU, RAM, SSD, GPU và cổng giao tiếp."
                    />
                    <AnalogyCard
                        icon={<Power />}
                        title="PSU/Nguồn"
                        role="Nhà máy điện"
                        desc="Cấp điện ổn định cho toàn bộ linh kiện."
                    />
                </div>
            </div>
        </section>
    );
}

function HardwareFlowSimulator() {
    const steps = [
        {
            title: "Bạn bấm chuột",
            desc: "Chuột gửi tín hiệu vào máy tính.",
            icon: <MousePointer2 />,
        },
        {
            title: "CPU nhận yêu cầu",
            desc: "CPU hiểu rằng bạn muốn mở Chrome.",
            icon: <Cpu />,
        },
        {
            title: "SSD lấy chương trình",
            desc: "File chương trình Chrome được đọc từ SSD/HDD.",
            icon: <HardDrive />,
        },
        {
            title: "RAM giữ dữ liệu tạm",
            desc: "Chrome và tab đang mở được đưa vào RAM để dùng nhanh.",
            icon: <MemoryStick />,
        },
        {
            title: "GPU dựng hình",
            desc: "GPU hỗ trợ hiển thị giao diện, ảnh, video, hiệu ứng.",
            icon: <Gauge />,
        },
        {
            title: "Màn hình xuất kết quả",
            desc: "Bạn nhìn thấy cửa sổ Chrome trên màn hình.",
            icon: <Monitor />,
        },
    ];

    const [step, setStep] = useState(0);
    const current = steps[step];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Mô phỏng: mở Chrome thì phần cứng làm gì?"
                icon={<Activity />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[340px] flex flex-col justify-between">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-300 flex items-center justify-center mb-5">
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
                                        {item.desc}
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

function HardwareCategories() {
    const groups = [
        {
            icon: <Keyboard />,
            name: "Input",
            vi: "Thiết bị nhập",
            purpose: "Đưa dữ liệu/lệnh vào máy",
            examples: "Bàn phím, chuột, webcam, micro",
            color: "cyan",
        },
        {
            icon: <Cpu />,
            name: "Processing",
            vi: "Thiết bị xử lý",
            purpose: "Xử lý dữ liệu và lệnh",
            examples: "CPU, GPU, chipset",
            color: "orange",
        },
        {
            icon: <HardDrive />,
            name: "Storage",
            vi: "Thiết bị lưu trữ",
            purpose: "Lưu dữ liệu lâu dài",
            examples: "SSD, HDD, USB, thẻ nhớ",
            color: "emerald",
        },
        {
            icon: <Monitor />,
            name: "Output",
            vi: "Thiết bị xuất",
            purpose: "Xuất kết quả ra ngoài",
            examples: "Màn hình, loa, máy in",
            color: "pink",
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="emerald"
                title="4 nhóm phần cứng cơ bản"
                icon={<Workflow />}
            />
            <div className="grid md:grid-cols-4 gap-4">
                {groups.map((g, index) => (
                    <div
                        key={g.name}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:-translate-y-1 hover:border-emerald-500/40 transition-all"
                    >
                        <div
                            className={`w-12 h-12 rounded-2xl ${categoryColor(g.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(g.icon, { size: 24 })}
                        </div>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">
                            Nhóm {index + 1}
                        </p>
                        <h3 className="text-white font-extrabold text-lg">
                            {g.name}
                        </h3>
                        <p className="text-emerald-300 font-semibold text-sm mb-3">
                            {g.vi}
                        </p>
                        <p className="text-sm text-slate-400 leading-relaxed mb-4">
                            {g.purpose}
                        </p>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3 text-xs text-slate-300">
                            {g.examples}
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-emerald-300">Công thức dễ nhớ:</strong>{" "}
                Input = đưa vào → Processing = xử lý → Storage = lưu lại →
                Output = đưa ra.
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        cpu: {
            label: "CPU",
            icon: <Cpu />,
            title: "Cores / Threads / GHz",
            explain:
                "Nhân và luồng ảnh hưởng đến đa nhiệm, render, lập trình, máy ảo. GHz cho biết xung nhịp xử lý, nhưng không nên so GHz giữa các đời CPU khác nhau một cách máy móc.",
            quick: "Học tập/văn phòng: CPU hiện đại tầm trung là đủ. Render, lập trình nặng, máy ảo: ưu tiên nhiều nhân/luồng hơn.",
        },
        ram: {
            label: "RAM",
            icon: <MemoryStick />,
            title: "Dung lượng RAM",
            explain:
                "RAM là nơi giữ dữ liệu đang làm việc. Thiếu RAM làm máy giật, phải dùng ổ cứng làm bộ nhớ tạm nên rất chậm.",
            quick: "8GB: cơ bản. 16GB: học tập/làm việc tốt. 32GB+: dựng video, lập trình nặng, máy ảo, đồ họa.",
        },
        storage: {
            label: "SSD/HDD",
            icon: <HardDrive />,
            title: "Dung lượng + tốc độ đọc/ghi",
            explain:
                "SSD giúp khởi động Windows, mở phần mềm và copy file nhanh hơn HDD cơ học. NVMe thường nhanh hơn SATA SSD.",
            quick: "256GB hơi ít. 512GB tạm ổn. 1TB thoải mái hơn cho game, ảnh, video và dữ liệu cá nhân.",
        },
        gpu: {
            label: "GPU",
            icon: <Gauge />,
            title: "VRAM + sức mạnh đồ họa",
            explain:
                "GPU không chỉ để chơi game. Nó còn quan trọng với dựng video, thiết kế 3D, xử lý ảnh, AI và render.",
            quick: "Văn phòng: GPU tích hợp đủ dùng. Gaming/3D/AI: nên có GPU rời và VRAM phù hợp.",
        },
        psu: {
            label: "PSU",
            icon: <Power />,
            title: "Wattage + chất lượng nguồn",
            explain:
                "Nguồn cấp điện cho toàn bộ dàn máy. Nguồn yếu hoặc kém chất lượng có thể gây sập nguồn, treo máy hoặc giảm độ bền linh kiện.",
            quick: "Đừng tiết kiệm quá mức ở PSU. Chọn công suất đủ và thương hiệu đáng tin cậy.",
        },
    };

    const [active, setActive] = useState("cpu");
    const item = specs[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="yellow"
                title="Thông số kỹ thuật cần biết"
                icon={<Search />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(specs).map(([key, spec]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex items-center justify-center md:justify-start gap-2 rounded-2xl p-4 text-left transition-all ${
                                active === key
                                    ? "bg-yellow-500 text-slate-950 shadow-lg shadow-yellow-500/10"
                                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                            }`}
                        >
                            {React.cloneElement(spec.icon, { size: 20 })}
                            <span className="font-bold text-sm">
                                {spec.label}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center mb-5">
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className="text-sm text-yellow-300 font-semibold">
                            Áp dụng cho: {item.label}
                        </p>
                    </div>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                        <p>{item.explain}</p>
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-yellow-300">
                                Mẹo đọc cấu hình:
                            </strong>{" "}
                            {item.quick}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RealExamples() {
    const items = [
        {
            icon: <Cpu />,
            title: "CPU: Intel Core i5-12400F",
            specs: [
                "6 nhân / 12 luồng",
                "Turbo tối đa 4.4GHz",
                "Công suất cơ bản 65W",
            ],
            use: "Phù hợp học online, Word/Excel, lập trình cơ bản, Photoshop nhẹ và game eSports khi đi kèm GPU phù hợp.",
        },
        {
            icon: <HardDrive />,
            title: "SSD: Kingston NV2 500GB / 1TB",
            specs: [
                "Chuẩn M.2 NVMe",
                "Nhanh hơn HDD cơ học",
                "500GB cơ bản, 1TB thoải mái hơn",
            ],
            use: "Nâng laptop/PC từ HDD lên SSD thường tạo cảm giác máy nhanh hơn rõ rệt trong khởi động và mở phần mềm.",
        },
        {
            icon: <MousePointer2 />,
            title: "Chuột: Logitech B100",
            specs: ["Kết nối USB", "800 DPI", "Thiết kế đối xứng"],
            use: "Đủ tốt cho văn phòng và học tập. Chơi FPS nghiêm túc nên chọn chuột gaming có sensor và DPI tốt hơn.",
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="pink"
                title="Ví dụ thực tế: đọc linh kiện như thế nào?"
                icon={<PackageCheck />}
            />
            <div className="grid md:grid-cols-3 gap-4">
                {items.map((item) => (
                    <div
                        key={item.title}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-pink-500/40 transition-all"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-300 flex items-center justify-center mb-4">
                            {React.cloneElement(item.icon, { size: 24 })}
                        </div>
                        <h3 className="text-white font-bold text-lg mb-4">
                            {item.title}
                        </h3>
                        <div className="space-y-2 mb-5">
                            {item.specs.map((s) => (
                                <div
                                    key={s}
                                    className="flex items-center gap-2 text-sm text-slate-300"
                                >
                                    <CheckCircle2
                                        className="text-green-400 shrink-0"
                                        size={16}
                                    />{" "}
                                    {s}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            {item.use}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function MistakesAndTips() {
    const mistakes = [
        {
            wrong: "Máy mạnh là do CPU mạnh thôi",
            right: "Máy mạnh phụ thuộc tổng thể: CPU, RAM, SSD, GPU, nguồn, tản nhiệt. CPU mạnh nhưng HDD chậm thì máy vẫn mở phần mềm lâu.",
        },
        {
            wrong: "RAM càng nhiều thì máy càng nhanh",
            right: "RAM chỉ giúp rõ khi máy đang thiếu RAM. Dùng Word, Chrome nhẹ thì từ 16GB lên 64GB thường không khác biệt lớn.",
        },
        {
            wrong: "GPU chỉ cần cho chơi game",
            right: "GPU còn quan trọng cho dựng video, 3D, AI, machine learning, render và xử lý hình ảnh.",
        },
    ];

    const tips = [
        "Đừng chỉ nhìn tên linh kiện; hãy đọc thông số thật.",
        "Muốn máy phản hồi nhanh, ưu tiên SSD trước HDD.",
        "Mua máy theo nhu cầu: văn phòng, gaming, thiết kế, lập trình, AI cần cấu hình khác nhau.",
        "Đừng xem nhẹ PSU, vì nguồn kém có thể ảnh hưởng độ bền toàn bộ dàn máy.",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
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
                        <ShieldCheck /> Mẹo khi học & mua máy
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
                    <div className="mt-6 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-300">
                        <strong className="text-green-300">
                            Nguyên tắc vàng:
                        </strong>{" "}
                        Nâng cấp đúng “nút thắt cổ chai” mới làm máy nhanh thật
                        sự.
                    </div>
                </div>
            </div>
        </section>
    );
}

function BuildAdvisor() {
    const profiles = {
        office: {
            icon: <Laptop />,
            title: "Văn phòng / học online",
            need: "Word, Excel, Chrome, Zoom, Zalo, học tập cơ bản.",
            config: [
                "CPU tầm trung hiện đại",
                "RAM 8GB–16GB",
                "SSD 512GB",
                "GPU tích hợp đủ dùng",
            ],
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Gaming / eSports",
            need: "Liên Minh, Valorant, CS2, game online, stream nhẹ.",
            config: [
                "CPU tầm trung khỏe",
                "RAM 16GB",
                "SSD 1TB",
                "GPU rời tùy game và màn hình",
            ],
        },
        creator: {
            icon: <Monitor />,
            title: "Thiết kế / dựng video",
            need: "Photoshop, Premiere, After Effects, Blender, render.",
            config: [
                "CPU nhiều nhân/luồng",
                "RAM 32GB trở lên",
                "SSD 1TB",
                "GPU rời có VRAM phù hợp",
            ],
        },
        developer: {
            icon: <Zap />,
            title: "Lập trình / máy ảo",
            need: "IDE, Docker, database local, emulator, máy ảo.",
            config: [
                "CPU nhiều nhân",
                "RAM 16GB–32GB",
                "SSD NVMe",
                "Tản nhiệt tốt",
            ],
        },
    };

    const [active, setActive] = useState("office");
    const item = profiles[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Chọn phần cứng theo nhu cầu"
                icon={<TabletSmartphone />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-3 mb-6">
                    {Object.entries(profiles).map(([key, p]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 text-left border transition-all ${active === key ? "bg-blue-500/10 border-blue-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(p.icon, { size: 20 })}{" "}
                                {p.title}
                            </div>
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-300 flex items-center justify-center mb-4">
                            {React.cloneElement(item.icon, { size: 28 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {item.need}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {item.config.map((c) => (
                            <div
                                key={c}
                                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-start gap-3 text-sm text-slate-300"
                            >
                                <CheckCircle2
                                    className="text-blue-300 shrink-0 mt-0.5"
                                    size={18}
                                />
                                <span>{c}</span>
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
                        <span className="bg-orange-500/20 text-orange-300 p-2 rounded-xl">
                            10
                        </span>
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-orange-300 border border-slate-800 shadow-inner space-y-2">
                            <p>PHẦN CỨNG = bộ phận vật lý của máy tính</p>
                            <p className="text-slate-300">
                                → nhìn thấy, chạm được, lắp ráp được
                            </p>
                            <br />
                            <p className="text-slate-500"># 4 nhóm chính</p>
                            <p className="text-slate-300">
                                Input: chuột, bàn phím, webcam
                            </p>
                            <p className="text-slate-300">
                                Processing: CPU, GPU, chipset
                            </p>
                            <p className="text-slate-300">
                                Storage: SSD, HDD, USB
                            </p>
                            <p className="text-slate-300">
                                Output: màn hình, loa, máy in
                            </p>
                            <br />
                            <p className="text-slate-500"># Khi mua/nâng cấp</p>
                            <p className="text-slate-300">
                                Đọc CPU, RAM, SSD, GPU, PSU theo nhu cầu thực
                                tế.
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
        question: "Phần cứng máy tính là gì?",
        options: [
            "Các chương trình như Word, Chrome, Zalo",
            "Các bộ phận vật lý có thể nhìn thấy hoặc chạm vào",
            "Dữ liệu lưu trên Google Drive",
            "Tài khoản đăng nhập Windows",
        ],
        correct: 1,
        explanation:
            "Phần cứng là các bộ phận vật lý của hệ thống máy tính, ví dụ CPU, RAM, SSD, màn hình, bàn phím, chuột.",
    },
    {
        question: "Thiết bị nào thuộc nhóm Storage – lưu trữ?",
        options: ["Màn hình", "Bàn phím", "SSD", "Loa"],
        correct: 2,
        explanation:
            "SSD là thiết bị lưu trữ lâu dài, giữ dữ liệu kể cả khi tắt máy.",
    },
    {
        question: "Trong máy tính, CPU thường được ví như bộ phận nào?",
        options: ["Bộ não xử lý", "Tủ hồ sơ", "Cái loa", "Dây điện nguồn"],
        correct: 0,
        explanation:
            "CPU nhận lệnh, xử lý dữ liệu và điều phối nhiều tác vụ, nên thường được ví như bộ não của máy tính.",
    },
    {
        question: "RAM giúp máy nhanh hơn rõ nhất trong trường hợp nào?",
        options: [
            "Khi máy đang thiếu RAM",
            "Khi màn hình quá sáng",
            "Khi chuột bị hỏng",
            "Khi loa quá nhỏ",
        ],
        correct: 0,
        explanation:
            "RAM nhiều hơn chỉ tạo khác biệt rõ khi máy đang thiếu RAM và phải dùng ổ cứng làm bộ nhớ tạm.",
    },
    {
        question: "Vì sao không nên xem nhẹ nguồn PSU?",
        options: [
            "Vì PSU quyết định màu màn hình",
            "Vì PSU cấp điện ổn định cho toàn bộ linh kiện",
            "Vì PSU lưu file cá nhân",
            "Vì PSU thay thế được RAM",
        ],
        correct: 1,
        explanation:
            "Nguồn yếu hoặc kém chất lượng có thể làm máy sập nguồn, treo máy hoặc ảnh hưởng độ bền linh kiện.",
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
                    <strong className="text-orange-400">
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
                <span className="text-orange-400">
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
                        className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
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
                Sau khi hiểu “phần cứng là gì”, bước tiếp theo là phân loại kỹ
                hơn từng nhóm thiết bị.
            </p>
            <Link
                to="/phan-1-2"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20"
            >
                Bài tiếp theo: 1.2 — Input / Output / Processing / Storage{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "orange" }) {
    const colorMap = {
        orange: "bg-orange-500/20 text-orange-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        blue: "bg-blue-500/20 text-blue-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
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

function HardwareTile({ icon, label, group, active, highlight }) {
    return (
        <div
            className={`aspect-square rounded-2xl border p-3 flex flex-col items-center justify-center text-center transition-all ${highlight ? "bg-orange-500/10 border-orange-400/50 text-orange-300" : active ? "bg-green-500/10 border-green-500/30 text-green-300" : "bg-slate-900 border-slate-800 text-slate-400"}`}
        >
            {React.cloneElement(icon, { size: 28 })}
            <span className="text-xs font-bold mt-2">{label}</span>
            <span className="text-[10px] text-slate-500 mt-1">{group}</span>
        </div>
    );
}

function AnalogyCard({ icon, title, role, desc, highlight }) {
    return (
        <div
            className={`rounded-2xl p-5 border ${highlight ? "bg-blue-500/10 border-blue-400/50 shadow-lg shadow-blue-500/10" : "bg-slate-950 border-slate-800"}`}
        >
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-blue-300 flex items-center justify-center mb-4">
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <h4 className="font-bold text-white mb-1">{title}</h4>
            <p className="text-blue-300 text-sm font-semibold mb-2">{role}</p>
            <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
        </div>
    );
}

function categoryColor(color) {
    const map = {
        cyan: "bg-cyan-500/10 text-cyan-300",
        orange: "bg-orange-500/10 text-orange-300",
        emerald: "bg-emerald-500/10 text-emerald-300",
        pink: "bg-pink-500/10 text-pink-300",
    };
    return map[color] || map.cyan;
}
