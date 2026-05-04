import React, { useMemo, useState } from "react";
import {
    AlertTriangle,
    ArrowDown,
    ArrowRight,
    Award,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    Cloud,
    Cpu,
    Database,
    Gauge,
    Gamepad2,
    HardDrive,
    History,
    Laptop,
    Layers3,
    Lightbulb,
    MemoryStick,
    Microchip,
    Monitor,
    PackageCheck,
    Rocket,
    Search,
    Server,
    Smartphone,
    Sparkles,
    TabletSmartphone,
    TrendingUp,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shadow-lg shadow-amber-500/10">
                            <History className="text-amber-400" size={24} />
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
                    <div className="text-sm font-semibold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                        Bài 1.5
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <EvolutionLogic />
                <InteractiveTimeline />
                <GenerationComparison />
                <ProgressMetrics />
                <RealExamples />
                <TrendExplorer />
                <CommonMistakes />
                <BuyingDecisionLab />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-amber-300">
                        <BookOpen size={16} /> Phần 1: Tổng quan về phần cứng
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Lịch sử phát triển
                        <span className="block text-amber-400">
                            phần cứng máy tính
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Từ máy tính cồng kềnh dùng đèn chân không đến
                        transistor, mạch tích hợp, CPU một chip, PC, smartphone,
                        cloud server và chip AI hiện đại.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Zap size={16} />} text="Đèn chân không" />
                        <Tag icon={<Microchip size={16} />} text="Transistor & IC" />
                        <Tag icon={<Cpu size={16} />} text="Vi xử lý" />
                        <Tag icon={<Smartphone size={16} />} text="Mobile" />
                        <Tag icon={<Cloud size={16} />} text="Cloud & AI" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="space-y-3">
                        <HeroStep
                            icon={<Zap />}
                            label="Lớn, nóng, tốn điện"
                            desc="Máy tính đời đầu"
                            color="red"
                        />
                        <div className="flex justify-center">
                            <ArrowDown className="text-slate-600" />
                        </div>
                        <HeroStep
                            icon={<Microchip />}
                            label="Nhỏ hơn, bền hơn"
                            desc="Transistor và IC"
                            color="orange"
                        />
                        <div className="flex justify-center">
                            <ArrowDown className="text-slate-600" />
                        </div>
                        <HeroStep
                            icon={<Rocket />}
                            label="Nhanh hơn, phổ biến hơn"
                            desc="PC, laptop, smartphone"
                            color="amber"
                            highlight
                        />
                        <div className="flex justify-center">
                            <ArrowDown className="text-slate-600" />
                        </div>
                        <HeroStep
                            icon={<Sparkles />}
                            label="Thông minh hơn"
                            desc="GPU, NPU, AI server"
                            color="purple"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Quy luật chính</p>
                        <p className="text-amber-300">
                            nhỏ hơn → nhanh hơn → tiết kiệm điện hơn
                        </p>
                        <p className="text-slate-300">
                            → rẻ hơn → thông minh hơn
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu vì sao cần học lịch sử phần cứng.",
        "Nắm các mốc: đèn chân không, transistor, IC, vi xử lý, PC, mobile, AI/cloud.",
        "Biết logic tiến hóa: nhỏ hơn, nhanh hơn, tiết kiệm điện hơn.",
        "Nhận diện xu hướng: SSD NVMe, DDR5, GPU AI, NPU, cloud server.",
        "Áp dụng lịch sử để mua máy thông minh hơn, không chạy theo cấu hình mới một cách máy móc.",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="amber"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/50 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-300 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
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
                title="Khái niệm cốt lõi: lịch sử phần cứng là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6 items-start">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">
                                Lịch sử phát triển phần cứng máy tính
                            </strong>{" "}
                            là quá trình các linh kiện vật lý thay đổi qua thời
                            gian: từ máy tính cơ học, đèn chân không,
                            transistor, mạch tích hợp, vi xử lý đến GPU, SSD,
                            smartphone, cloud server và chip AI.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-cyan-300">
                                Ví dụ đời thường:
                            </strong>{" "}
                            Lịch sử phần cứng giống quá trình tiến hóa phương
                            tiện giao thông: xe ngựa → xe máy → ô tô → tàu cao
                            tốc → xe điện thông minh.
                        </div>
                        <p>
                            Mỗi thế hệ mới thường giúp máy tính nhỏ hơn, nhanh
                            hơn, bền hơn, tiết kiệm điện hơn và dễ tiếp cận hơn.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <TrendingUp className="text-cyan-300" /> Chuỗi tiến
                            hóa dễ nhớ
                        </h3>
                        <div className="space-y-3 font-mono text-sm">
                            {[
                                "Máy tính cơ học",
                                "Máy tính dùng đèn chân không",
                                "Máy tính dùng transistor",
                                "Máy tính dùng mạch tích hợp IC",
                                "Máy tính cá nhân PC",
                                "Laptop / smartphone",
                                "Server / AI / điện toán đám mây",
                            ].map((item, idx) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 text-slate-300"
                                >
                                    <span className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-300 flex items-center justify-center text-xs font-bold">
                                        {idx + 1}
                                    </span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function EvolutionLogic() {
    const steps = [
        {
            icon: <Zap />,
            title: "Linh kiện lớn, nóng, tốn điện",
            desc: "Đèn chân không và hệ thống đời đầu cần nhiều không gian, điện năng và bảo trì.",
        },
        {
            icon: <Microchip />,
            title: "Linh kiện nhỏ hơn",
            desc: "Transistor thay thế đèn chân không, giúp máy nhỏ hơn, bền hơn, ít nóng hơn.",
        },
        {
            icon: <Layers3 />,
            title: "Tích hợp nhiều hơn",
            desc: "Mạch tích hợp IC đưa nhiều linh kiện lên một chip, giúp hệ thống ổn định và gọn hơn.",
        },
        {
            icon: <Cpu />,
            title: "Vi xử lý CPU",
            desc: "CPU nằm trên một chip, mở đường cho máy tính cá nhân và thiết bị phổ thông.",
        },
        {
            icon: <Laptop />,
            title: "Người dùng phổ thông tiếp cận",
            desc: "PC, laptop, smartphone đưa sức mạnh tính toán vào gia đình, văn phòng và túi áo.",
        },
        {
            icon: <Sparkles />,
            title: "AI và cloud",
            desc: "GPU, AI accelerator và datacenter phục vụ dữ liệu lớn, mô hình AI và điện toán đám mây.",
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="orange"
                title="Cơ chế phát triển: phần cứng tiến hóa theo logic nào?"
                icon={<Rocket />}
            />
            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                    {steps.map((s, i) => (
                        <div
                            key={s.title}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-5 relative overflow-hidden"
                        >
                            <div className="absolute right-4 top-4 text-5xl font-black text-slate-800/60">
                                {i + 1}
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-300 border border-orange-500/20 flex items-center justify-center mb-4">
                                {React.cloneElement(s.icon, { size: 24 })}
                            </div>
                            <h3 className="font-bold text-white mb-2 pr-10">
                                {s.title}
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-orange-300">Điểm mấu chốt:</strong>{" "}
                    Ngày nay mục tiêu không chỉ là “mạnh hơn”, mà còn là mạnh
                    hơn trên mỗi watt điện tiêu thụ.
                </div>
            </div>
        </section>
    );
}

const timeline = [
    {
        key: "gen1",
        stage: "Thế hệ 1",
        tech: "Đèn chân không",
        icon: <Zap />,
        color: "red",
        desc: "Máy rất lớn, nóng, tốn điện, dễ hỏng nhưng đã mở ra khả năng tính toán tự động.",
        example: "ENIAC",
        pros: "Có thể tính toán tự động",
        cons: "Cồng kềnh, nóng, tốn điện, khó bảo trì",
    },
    {
        key: "gen2",
        stage: "Thế hệ 2",
        tech: "Transistor",
        icon: <Microchip />,
        color: "orange",
        desc: "Transistor giúp máy nhỏ hơn, bền hơn, ít nóng hơn và đáng tin cậy hơn đèn chân không.",
        example: "IBM 1401",
        pros: "Nhỏ hơn, bền hơn, ít tốn điện hơn",
        cons: "Vẫn còn đắt và lớn",
    },
    {
        key: "gen3",
        stage: "Thế hệ 3",
        tech: "Mạch tích hợp IC",
        icon: <Layers3 />,
        color: "yellow",
        desc: "Nhiều linh kiện được tích hợp trên một chip, giúp máy nhỏ, nhanh và ổn định hơn.",
        example: "IBM System/360",
        pros: "Gọn, nhanh, ổn định hơn",
        cons: "Công nghệ sản xuất phức tạp",
    },
    {
        key: "gen4",
        stage: "Thế hệ 4",
        tech: "Vi xử lý CPU",
        icon: <Cpu />,
        color: "cyan",
        desc: "CPU nằm trên một chip, mở đường cho máy tính cá nhân phát triển mạnh.",
        example: "Intel 4004, IBM PC",
        pros: "Tạo nền tảng cho PC",
        cons: "Ban đầu hiệu năng còn hạn chế",
    },
    {
        key: "pc",
        stage: "Thời kỳ PC",
        tech: "CPU, RAM, HDD, mainboard",
        icon: <Monitor />,
        color: "blue",
        desc: "Máy tính đi vào gia đình, văn phòng, trường học và trở nên dễ dùng, dễ nâng cấp hơn.",
        example: "IBM PC, máy Windows",
        pros: "Dễ dùng, nâng cấp được",
        cons: "Còn khá cồng kềnh",
    },
    {
        key: "mobile",
        stage: "Thời kỳ di động",
        tech: "Laptop, smartphone, SoC",
        icon: <Smartphone />,
        color: "emerald",
        desc: "CPU, GPU, RAM, modem và nhiều thành phần được tích hợp, giúp thiết bị nhỏ gọn và tiết kiệm điện.",
        example: "iPhone, MacBook, laptop mỏng nhẹ",
        pros: "Nhỏ gọn, tiết kiệm điện, di động",
        cons: "Khó nâng cấp",
    },
    {
        key: "modern",
        stage: "Thời kỳ hiện đại",
        tech: "GPU, SSD NVMe, AI chip, cloud server",
        icon: <Server />,
        color: "purple",
        desc: "Phần cứng tập trung vào đồ họa, AI, dữ liệu lớn và điện toán đám mây với hiệu năng cực cao.",
        example: "NVIDIA H100, Apple Silicon, server AI",
        pros: "Hiệu năng rất cao, hỗ trợ AI/dữ liệu lớn",
        cons: "Giá cao, datacenter tiêu thụ nhiều điện",
    },
];

function InteractiveTimeline() {
    const [active, setActive] = useState("gen1");
    const item = timeline.find((t) => t.key === active);

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Dòng thời gian phát triển phần cứng"
                icon={<History />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="relative mb-8">
                    <div className="hidden md:block absolute left-0 right-0 top-8 h-px bg-slate-700" />
                    <div className="grid md:grid-cols-7 gap-3 relative">
                        {timeline.map((t) => (
                            <button
                                key={t.key}
                                onClick={() => setActive(t.key)}
                                className={`rounded-2xl border p-4 text-center transition-all ${active === t.key ? `${softBorder(t.color)} text-white scale-[1.02]` : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`}
                            >
                                <div
                                    className={`w-12 h-12 rounded-2xl ${badgeColor(t.color)} flex items-center justify-center mx-auto mb-3`}
                                >
                                    {React.cloneElement(t.icon, { size: 22 })}
                                </div>
                                <p className="text-xs font-bold">{t.stage}</p>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 grid md:grid-cols-[0.75fr_1.25fr] gap-6 items-start">
                    <div>
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <p className="text-sm text-slate-500 font-bold mb-1">
                            {item.stage}
                        </p>
                        <h3 className="text-3xl font-extrabold text-white mb-2">
                            {item.tech}
                        </h3>
                        <p className={`${textColor(item.color)} font-semibold`}>
                            Ví dụ: {item.example}
                        </p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-slate-300 leading-relaxed">
                            {item.desc}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 text-sm">
                                <strong className="text-green-300">
                                    Ưu điểm:
                                </strong>
                                <p className="text-slate-300 mt-1">
                                    {item.pros}
                                </p>
                            </div>
                            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-sm">
                                <strong className="text-red-300">
                                    Hạn chế:
                                </strong>
                                <p className="text-slate-300 mt-1">
                                    {item.cons}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function GenerationComparison() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Bảng so sánh các giai đoạn chính"
                icon={<Layers3 />}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {timeline.map((t) => (
                    <div
                        key={t.key}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-blue-500/40 transition-all"
                    >
                        <div
                            className={`w-12 h-12 rounded-2xl ${badgeColor(t.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(t.icon, { size: 24 })}
                        </div>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">
                            {t.stage}
                        </p>
                        <h3 className="text-white font-extrabold text-lg mb-2">
                            {t.tech}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-4">
                            {t.desc}
                        </p>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3 text-xs text-slate-300">
                            <strong className="text-blue-300">Ví dụ:</strong>{" "}
                            {t.example}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function ProgressMetrics() {
    const metrics = {
        size: {
            icon: <TabletSmartphone />,
            title: "Kích thước linh kiện",
            detail: "Linh kiện càng nhỏ thì máy càng gọn, từ máy chiếm cả phòng đến laptop, điện thoại và bo mạch nhỏ.",
            why: "Quyết định tính di động và khả năng tích hợp.",
        },
        transistors: {
            icon: <Microchip />,
            title: "Số transistor",
            detail: "Nhiều transistor hơn thường giúp chip làm được nhiều việc hơn và mạnh hơn.",
            why: "Là chỉ dấu quan trọng của tiến bộ chip.",
        },
        clock: {
            icon: <Gauge />,
            title: "Xung nhịp CPU",
            detail: "Cho biết tốc độ chu kỳ xử lý, ảnh hưởng hiệu năng từng nhân trong nhiều tác vụ.",
            why: "Quan trọng nhưng không phải yếu tố duy nhất.",
        },
        cores: {
            icon: <Cpu />,
            title: "Số nhân CPU",
            detail: "Nhiều lõi giúp xử lý đa nhiệm, render, biên dịch, máy ảo tốt hơn.",
            why: "Đánh dấu chuyển dịch từ đơn nhân sang đa nhân.",
        },
        ram: {
            icon: <MemoryStick />,
            title: "Dung lượng RAM",
            detail: "RAM tăng giúp chạy nhiều chương trình, tab trình duyệt và ứng dụng nặng hơn.",
            why: "Tác động trực tiếp đến đa nhiệm.",
        },
        storage: {
            icon: <HardDrive />,
            title: "Dung lượng và tốc độ lưu trữ",
            detail: "Từ KB/MB lên GB/TB; SSD NVMe nhanh hơn HDD rất nhiều.",
            why: "Ảnh hưởng mở máy, mở app, copy file và load dữ liệu.",
        },
        power: {
            icon: <Zap />,
            title: "Hiệu năng trên mỗi watt",
            detail: "Sức mạnh xử lý so với điện tiêu thụ, rất quan trọng với laptop, smartphone và datacenter.",
            why: "Hiện đại không chỉ mạnh hơn mà phải tiết kiệm điện hơn.",
        },
    };

    const [active, setActive] = useState("size");
    const item = metrics[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="yellow"
                title="Thông số cho thấy phần cứng tiến bộ như thế nào"
                icon={<TrendingUp />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(metrics).map(([key, m]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center transition-all ${
                                active === key
                                    ? "bg-yellow-500 text-slate-950 shadow-lg shadow-yellow-500/10"
                                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                            }`}
                        >
                            {React.cloneElement(m.icon, { size: 20 })}
                            <span className="font-bold text-xs">{m.title}</span>
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
                            Chỉ số tiến bộ phần cứng
                        </p>
                    </div>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                        <p>{item.detail}</p>
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-yellow-300">
                                Vì sao quan trọng:
                            </strong>{" "}
                            {item.why}
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
            title: "Intel Core i9-14900K",
            subtitle: "CPU desktop hiệu năng cao hiện đại",
            points: [
                "Ra mắt Q4/2023",
                "Hỗ trợ DDR5 5600 MT/s hoặc DDR4 3200 MT/s",
                "Nền tảng có thể hỗ trợ RAM tối đa 192GB",
                "Phù hợp desktop/workstation hiệu năng cao",
            ],
            lesson: "Từ CPU đầu tiên xử lý rất đơn giản, CPU hiện đại đã thành khối xử lý đa nhiệm cực mạnh.",
            color: "orange",
        },
        {
            icon: <Database />,
            title: "Raspberry Pi 5",
            subtitle: "Máy tính nhỏ gọn giá thấp",
            points: [
                "Bo mạch nhỏ nhưng chạy được hệ điều hành",
                "Có CPU ARM, GPU, RAM, USB, HDMI, mạng",
                "Dùng học lập trình, IoT, GPIO, server mini",
                "Một số bản hỗ trợ xuất hai màn hình 4Kp60",
            ],
            lesson: "Ngày xưa máy tính cần cả căn phòng; nay máy tính nhỏ bằng lòng bàn tay có thể chạy Linux và điều khiển thiết bị.",
            color: "emerald",
        },
        {
            icon: <Server />,
            title: "NVIDIA H100",
            subtitle: "Phần cứng cho AI và datacenter",
            points: [
                "Dùng cho AI, LLM, HPC và datacenter",
                "Có phiên bản 80GB hoặc 94GB bộ nhớ GPU",
                "Băng thông bộ nhớ rất cao",
                "TDP có thể lên đến 700W tùy phiên bản",
            ],
            lesson: "Phần cứng hiện đại không chỉ để gõ văn bản hay chơi game, mà còn là nền tảng của AI, dữ liệu lớn và cloud.",
            color: "purple",
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="pink"
                title="Ví dụ thực tế: phần cứng hiện đại nói gì về lịch sử?"
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

function TrendExplorer() {
    const trends = {
        hddssd: {
            icon: <HardDrive />,
            title: "HDD → SSD NVMe",
            detail: "Lưu trữ chuyển từ cơ học sang flash tốc độ cao, giúp mở máy, mở app và load dữ liệu nhanh hơn rất nhiều.",
            use: "Khi mua máy hiện nay, SSD gần như là ưu tiên tối thiểu.",
        },
        ddr: {
            icon: <MemoryStick />,
            title: "DDR4 → DDR5",
            detail: "Bộ nhớ RAM tăng băng thông và phục vụ tốt hơn cho CPU đời mới, đa nhiệm và tác vụ nặng.",
            use: "Chọn RAM cần xem nền tảng CPU/mainboard hỗ trợ DDR4 hay DDR5.",
        },
        multicore: {
            icon: <Cpu />,
            title: "CPU đơn nhân → đa nhân",
            detail: "Thay vì chỉ tăng xung nhịp, CPU hiện đại tăng số nhân để xử lý đa nhiệm, render, build code và máy ảo.",
            use: "Tác vụ văn phòng không cần quá nhiều nhân; render/lập trình nặng nên quan tâm nhiều nhân.",
        },
        gpuai: {
            icon: <Gauge />,
            title: "GPU đồ họa → GPU AI",
            detail: "GPU từ xử lý hình ảnh đã trở thành nền tảng tăng tốc AI, machine learning, LLM và tính toán khoa học.",
            use: "Gaming, 3D, AI local và render cần GPU/VRAM phù hợp.",
        },
        cloud: {
            icon: <Cloud />,
            title: "PC riêng lẻ → Cloud computing",
            detail: "Nhiều tác vụ nặng được đẩy lên server/datacenter, cho phép thiết bị cá nhân mỏng nhẹ hơn nhưng vẫn dùng dịch vụ mạnh.",
            use: "Không phải lúc nào cũng cần máy cực mạnh nếu công việc chạy trên cloud.",
        },
        npu: {
            icon: <Sparkles />,
            title: "Chip thường → AI chip / NPU",
            detail: "Laptop và điện thoại hiện đại bắt đầu có NPU để xử lý AI trực tiếp trên thiết bị, tiết kiệm điện hơn GPU/CPU trong một số tác vụ.",
            use: "Xu hướng này quan trọng với tính năng AI cục bộ và quyền riêng tư dữ liệu.",
        },
    };

    const [active, setActive] = useState("hddssd");
    const item = trends[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="emerald"
                title="Xu hướng hiện đại cần nhớ"
                icon={<Sparkles />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {Object.entries(trends).map(([key, t]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 text-left border transition-all ${active === key ? "bg-emerald-500/10 border-emerald-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
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
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center justify-center mb-4">
                            {React.cloneElement(item.icon, { size: 28 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                            {item.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {item.detail}
                        </p>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-6 flex items-center">
                        <p className="text-slate-300 leading-relaxed">
                            <strong className="text-emerald-300">
                                Áp dụng thực tế:
                            </strong>{" "}
                            {item.use}
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
            wrong: "Máy tính hiện đại chỉ đơn giản là máy cũ chạy nhanh hơn",
            right: "Máy hiện đại thay đổi cả kiến trúc: CPU đa nhân, SSD NVMe, GPU AI, cloud server, smartphone, thiết bị đeo.",
        },
        {
            wrong: "Càng mới thì chắc chắn càng phù hợp",
            right: "Phần cứng mới thường mạnh hơn nhưng chưa chắc phù hợp nhu cầu và ngân sách. Văn phòng không cần CPU/GPU flagship.",
        },
        {
            wrong: "Lịch sử phần cứng chỉ để biết cho vui",
            right: "Hiểu lịch sử giúp đoán xu hướng: HDD → SSD, DDR4 → DDR5, CPU đơn nhân → đa nhân, GPU đồ họa → GPU AI, PC riêng lẻ → cloud.",
        },
    ];

    const tips = [
        "Khi mua máy, hỏi: công nghệ này đang cũ, phổ biến hay mới quá đắt?",
        "Không cần chạy theo phần cứng mới nhất nếu chỉ học tập, văn phòng, lướt web.",
        "PC/laptop hiện nay nên ưu tiên SSD, RAM ít nhất 8GB và tốt hơn là 16GB, CPU đời không quá cũ, màn hình Full HD trở lên.",
        "Gaming hoặc đồ họa cần quan tâm GPU và VRAM, không chỉ CPU.",
        "Theo dõi các khái niệm: AI chip/NPU, DDR5, PCIe 5.0, SSD NVMe, ARM, cloud computing, GPU acceleration.",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
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
                        <Lightbulb /> Mẹo mua máy theo xu hướng
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

function BuyingDecisionLab() {
    const scenarios = {
        office: {
            icon: <Laptop />,
            title: "Học tập / văn phòng",
            need: "Word, Excel, Chrome, học online, email, YouTube.",
            advice: [
                "Không cần CPU/GPU quá mạnh",
                "Ưu tiên SSD thay vì HDD",
                "RAM 8GB là tối thiểu, 16GB tốt hơn",
                "Màn hình Full HD trở lên",
            ],
            conclusion:
                "Công nghệ phổ biến, ổn định và cân bằng thường đáng mua hơn flagship mới nhất.",
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Gaming Full HD",
            need: "Valorant, CS2, League of Legends, game AAA Full HD.",
            advice: [
                "Cần GPU tốt nhưng không nhất thiết flagship",
                "Kiểm tra VRAM",
                "CPU tầm trung hiện đại thường đủ",
                "Màn hình 144Hz cần GPU đủ FPS",
            ],
            conclusion:
                "Lịch sử cho thấy GPU ngày càng quan trọng, đặc biệt khi game và đồ họa phát triển.",
        },
        ai: {
            icon: <Sparkles />,
            title: "AI local / render 3D",
            need: "Chạy model, render, dựng hình, xử lý dữ liệu lớn.",
            advice: [
                "Cần GPU mạnh và VRAM lớn",
                "RAM hệ thống nên rộng rãi",
                "SSD NVMe giúp đọc/ghi dữ liệu nhanh",
                "Cloud có thể thay máy cá nhân trong một số tác vụ",
            ],
            conclusion:
                "Xu hướng hiện đại là GPU acceleration, AI chip và cloud server.",
        },
    };

    const [active, setActive] = useState("office");
    const item = scenarios[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: dùng lịch sử để mua máy thông minh hơn"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {Object.entries(scenarios).map(([key, s]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 text-left border transition-all ${active === key ? "bg-blue-500/10 border-blue-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
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
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-300 border border-blue-500/20 flex items-center justify-center mb-4">
                            {React.cloneElement(item.icon, { size: 28 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {item.need}
                        </p>
                    </div>
                    <div className="space-y-3">
                        {item.advice.map((a) => (
                            <div
                                key={a}
                                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-start gap-3 text-sm text-slate-300"
                            >
                                <CheckCircle2
                                    className="text-blue-300 shrink-0 mt-0.5"
                                    size={18}
                                />
                                <span>{a}</span>
                            </div>
                        ))}
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm text-slate-300">
                            <strong className="text-blue-300">Kết luận:</strong>{" "}
                            {item.conclusion}
                        </div>
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
                        <span className="bg-amber-500/20 text-amber-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-amber-300 border border-slate-800 shadow-inner space-y-2">
                            <p>LỊCH SỬ PHẦN CỨNG</p>
                            <p className="text-slate-300">
                                = quá trình tiến hóa linh kiện vật lý
                            </p>
                            <br />
                            <p className="text-slate-500"># Các mốc chính</p>
                            <p className="text-slate-300">
                                Đèn chân không → Transistor → IC
                            </p>
                            <p className="text-slate-300">
                                → Vi xử lý → PC → Mobile
                            </p>
                            <p className="text-slate-300">
                                → Cloud server / GPU / AI chip
                            </p>
                            <br />
                            <p className="text-slate-500"># Quy luật</p>
                            <p className="text-slate-300">
                                Nhỏ hơn, nhanh hơn, tiết kiệm điện hơn, rẻ hơn,
                                thông minh hơn.
                            </p>
                            <br />
                            <p className="text-slate-500"># Mua máy</p>
                            <p className="text-slate-300">
                                Không chạy theo mới nhất. Chọn theo nhu cầu và
                                giai đoạn công nghệ.
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
            "Giai đoạn nào mở đường cho máy tính cá nhân phát triển mạnh?",
        options: [
            "Đèn chân không",
            "Vi xử lý CPU trên một chip",
            "Máy in kim",
            "Đĩa mềm",
        ],
        correct: 1,
        explanation:
            "Vi xử lý CPU trên một chip giúp máy tính nhỏ gọn và rẻ hơn, mở đường cho PC phổ biến.",
    },
    {
        question: "Transistor thay thế đèn chân không vì lý do chính nào?",
        options: [
            "To hơn và nóng hơn",
            "Nhỏ hơn, bền hơn, ít tốn điện hơn",
            "Chỉ dùng để phát âm thanh",
            "Không cần điện",
        ],
        correct: 1,
        explanation:
            "Transistor nhỏ hơn, bền hơn, ít nóng và ít tốn điện hơn đèn chân không.",
    },
    {
        question: "Xu hướng phần cứng hiện đại nào đang phát triển mạnh?",
        options: [
            "Chỉ dùng HDD cơ học",
            "Máy tính ngày càng lớn hơn và chậm hơn",
            "GPU/AI chip, SSD NVMe, cloud server, NPU",
            "Bỏ hoàn toàn CPU khỏi máy tính",
        ],
        correct: 2,
        explanation:
            "Hiện nay phần cứng phát triển mạnh theo hướng SSD NVMe, GPU/AI accelerator, NPU và cloud server.",
    },
    {
        question: "Vì sao hiểu lịch sử phần cứng giúp mua máy tốt hơn?",
        options: [
            "Để luôn mua linh kiện đắt nhất",
            "Để đoán xu hướng và chọn công nghệ phù hợp nhu cầu",
            "Để bỏ qua RAM và SSD",
            "Để không cần xem cấu hình",
        ],
        correct: 1,
        explanation:
            "Hiểu xu hướng giúp biết công nghệ nào đã phổ biến, công nghệ nào quá cũ hoặc còn quá đắt so với nhu cầu.",
    },
    {
        question:
            "Với nhu cầu văn phòng hiện nay, ưu tiên tối thiểu nào hợp lý?",
        options: [
            "HDD chậm và RAM 2GB",
            "SSD, RAM ít nhất 8GB, CPU đời không quá cũ",
            "GPU datacenter đắt tiền",
            "Không cần màn hình",
        ],
        correct: 1,
        explanation:
            "Văn phòng/học tập nên ưu tiên SSD, RAM đủ và CPU không quá cũ hơn là chạy theo linh kiện flagship.",
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
                    <strong className="text-amber-400">
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
                <span className="text-amber-400">
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
                        className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hoàn thành Phần 1 – Tổng quan về phần cứng. Bước tiếp
                theo là học sâu về CPU, linh kiện trung tâm của máy tính.
            </p>
            <Link
                to="/phan-2-1"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-amber-500/20"
            >
                Phần 2.1 — CPU là gì? Chức năng và vai trò{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "amber" }) {
    const colorMap = {
        amber: "bg-amber-500/20 text-amber-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        orange: "bg-orange-500/20 text-orange-300",
        purple: "bg-purple-500/20 text-purple-300",
        blue: "bg-blue-500/20 text-blue-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        pink: "bg-pink-500/20 text-pink-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
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

function HeroStep({ icon, label, desc, color, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 flex items-center gap-4 ${highlight ? "bg-amber-500/10 border-amber-400/50" : softBorder(color)}`}
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

function badgeColor(color) {
    const map = {
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
    };
    return map[color] || map.amber;
}

function softBorder(color) {
    const map = {
        red: "bg-red-500/5 border-red-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
    };
    return map[color] || map.amber;
}

function textColor(color) {
    const map = {
        red: "text-red-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        yellow: "text-yellow-300",
        cyan: "text-cyan-300",
        blue: "text-blue-300",
        emerald: "text-emerald-300",
        purple: "text-purple-300",
        pink: "text-pink-300",
    };
    return map[color] || "text-amber-300";
}
