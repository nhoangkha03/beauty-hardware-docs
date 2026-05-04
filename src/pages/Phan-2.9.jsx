import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    Cpu,
    Gamepad2,
    Gauge,
    Laptop,
    Layers3,
    Lightbulb,
    Monitor,
    PackageCheck,
    Puzzle,
    Search,
    Server,
    Settings,
    Sparkles,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center shadow-lg shadow-sky-500/10">
                            <Cpu className="text-sky-400" size={24} />
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
                    <div className="text-sm font-semibold text-sky-300 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20">
                        Bài 2.9
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <BrandConcept />
                <EngineAnalogy />
                <BrandDifferences />
                <ComparisonTable />
                <SpecsExplorer />
                <BrandExplorer />
                <RealExamples />
                <ChoiceLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-red-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-sky-300">
                        <BookOpen size={16} /> Phần 2: CPU – Bộ xử lý trung tâm
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Các hãng CPU phổ biến
                        <span className="block text-sky-400">
                            Intel, AMD, Apple Silicon
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Intel, AMD và Apple Silicon đều làm CPU, nhưng khác nhau
                        về kiến trúc, nền tảng, hệ điều hành, khả năng nâng cấp,
                        hiệu năng/watt và hệ sinh thái phần mềm.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<Monitor size={16} />}
                            text="Intel Core / Core Ultra"
                        />
                        <Tag
                            icon={<Gamepad2 size={16} />}
                            text="AMD Ryzen / X3D"
                        />
                        <Tag
                            icon={<Laptop size={16} />}
                            text="Apple M-series"
                        />
                        <Tag icon={<Sparkles size={16} />} text="AI / NPU" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-1 gap-3">
                        <HeroBrand
                            icon={<Cpu />}
                            label="Intel"
                            desc="PC/laptop Windows rất rộng, Core/Core Ultra/Xeon"
                            color="sky"
                            highlight
                        />
                        <HeroBrand
                            icon={<Gamepad2 />}
                            label="AMD"
                            desc="Ryzen, X3D gaming, hiệu năng/giá, Threadripper/EPYC"
                            color="red"
                        />
                        <HeroBrand
                            icon={<Laptop />}
                            label="Apple Silicon"
                            desc="M-series tối ưu macOS, pin lâu, hiệu năng/watt tốt"
                            color="emerald"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Ghi nhớ</p>
                        <p>
                            Không chọn CPU chỉ vì{" "}
                            <span className="text-sky-300">hãng</span>
                        </p>
                        <p className="text-slate-300">
                            Hãy chọn theo model + nhu cầu + nền tảng
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu hãng CPU là gì và vì sao Intel, AMD, Apple khác nhau.",
        "So sánh Intel, AMD, Apple Silicon theo ISA, hệ điều hành, nâng cấp và điểm mạnh.",
        "Biết đọc thông số quan trọng khi so CPU giữa các hãng.",
        "Phân biệt nhu cầu gaming, laptop pin lâu, build PC, macOS, AI/render.",
        "Tránh sai lầm chọn CPU chỉ vì i5/i7/Ryzen 7/M4 hoặc thương hiệu.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="sky"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-sky-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-300 flex items-center justify-center font-bold mb-4">
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

function BrandConcept() {
    const rows = [
        [
            "Intel",
            "Core i3/i5/i7/i9, Core Ultra, Xeon",
            "PC, laptop Windows, workstation, server",
            "sky",
        ],
        [
            "AMD",
            "Ryzen 3/5/7/9, Ryzen X3D, Threadripper, EPYC",
            "PC, laptop Windows, workstation, server",
            "red",
        ],
        [
            "Apple Silicon",
            "M1, M2, M3, M4, M4 Pro, M4 Max, M4 Ultra",
            "MacBook, iMac, Mac mini, Mac Studio, iPad Pro",
            "emerald",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: hãng CPU là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    Hãng CPU là công ty thiết kế hoặc sản xuất bộ xử lý trung
                    tâm cho máy tính, laptop, server hoặc thiết bị di động. Với
                    người dùng cá nhân, 3 nhóm rất hay gặp là Intel, AMD và
                    Apple Silicon.
                </p>
                <div className="space-y-3">
                    {rows.map(([brand, series, where, color]) => (
                        <div
                            key={brand}
                            className="grid md:grid-cols-[0.5fr_1.2fr_1fr] gap-3 items-center bg-slate-950 border border-slate-800 rounded-2xl p-4"
                        >
                            <span
                                className={`${textColor(color)} font-extrabold text-lg`}
                            >
                                {brand}
                            </span>
                            <span className="text-sm text-slate-300">
                                {series}
                            </span>
                            <span className="text-sm text-slate-400">
                                {where}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function EngineAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: động cơ cho từng hệ xe"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                    <AnalogyCard
                        icon={<Monitor />}
                        title="Intel"
                        desc="Giống một hãng động cơ rất phổ biến cho “xe PC Windows”, có nhiều mẫu laptop/desktop và hệ sinh thái doanh nghiệp rộng."
                        color="sky"
                    />
                    <AnalogyCard
                        icon={<Gamepad2 />}
                        title="AMD"
                        desc="Cũng là động cơ lớn cho PC Windows, nổi bật ở giá/hiệu năng, nhiều nhân và các dòng X3D mạnh cho game."
                        color="red"
                    />
                    <AnalogyCard
                        icon={<Laptop />}
                        title="Apple Silicon"
                        desc="Giống động cơ Apple tự thiết kế riêng cho xe Apple, tối ưu chặt với macOS, pin, nhiệt và phần cứng Apple."
                        color="emerald"
                    />
                </div>
                <div className="mt-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-amber-300">Điểm mấu chốt:</strong>{" "}
                    CPU mạnh không chỉ nằm ở hãng nào, mà nằm ở model cụ thể,
                    nhu cầu sử dụng và nền tảng đi kèm.
                </div>
            </div>
        </section>
    );
}

function BrandDifferences() {
    const items = [
        {
            icon: <Cpu />,
            title: "Kiến trúc CPU",
            desc: "Cách thiết kế nhân, cache, pipeline, GPU/NPU và các khối xử lý.",
        },
        {
            icon: <Puzzle />,
            title: "Tập lệnh",
            desc: "Intel/AMD phổ biến x86-64, Apple Silicon dùng ARM.",
        },
        {
            icon: <Layers3 />,
            title: "Số nhân / luồng / cache",
            desc: "Mỗi dòng CPU có cách cân bằng hiệu năng khác nhau.",
        },
        {
            icon: <Sparkles />,
            title: "GPU tích hợp / NPU",
            desc: "Quan trọng với laptop, AI PC, video call, app AI và máy không có GPU rời.",
        },
        {
            icon: <Zap />,
            title: "Điện năng / nhiệt",
            desc: "Ảnh hưởng pin laptop, độ ồn quạt, tản nhiệt và hiệu năng duy trì.",
        },
        {
            icon: <Monitor />,
            title: "Nền tảng / hệ điều hành",
            desc: "Windows/Linux/macOS, socket, RAM, mainboard và khả năng nâng cấp.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Các hãng CPU khác nhau ở điểm nào?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((item) => (
                        <div
                            key={item.title}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-5"
                        >
                            <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center justify-center mb-3">
                                {React.cloneElement(item.icon, { size: 22 })}
                            </div>
                            <h3 className="text-white font-bold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ComparisonTable() {
    const rows = [
        ["Kiến trúc tập lệnh", "x86-64", "x86-64", "ARM"],
        ["Dòng phổ thông", "Core, Core Ultra", "Ryzen", "M-series"],
        ["Hệ điều hành", "Windows, Linux", "Windows, Linux", "macOS, iPadOS"],
        [
            "Điểm mạnh",
            "Tương thích rộng, nhiều mẫu laptop/PC, doanh nghiệp mạnh",
            "Hiệu năng/giá, nhiều nhân, X3D mạnh cho game",
            "Hiệu năng/watt, pin lâu, máy mát, tối ưu macOS",
        ],
        [
            "Điểm yếu",
            "Dòng hiệu năng cao cần tản/điện tốt",
            "Cần chú ý BIOS/RAM/mainboard, một số dòng cần GPU rời",
            "Khó nâng cấp, chỉ trong hệ Apple",
        ],
        [
            "Gaming PC",
            "Rất phổ biến",
            "Rất mạnh, nhất là X3D",
            "Không phải lựa chọn chính cho game Windows",
        ],
        [
            "Nâng cấp desktop",
            "Có, tùy socket/mainboard",
            "Có, tùy socket/mainboard",
            "Gần như không nâng cấp CPU/RAM sau mua",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="So sánh Intel, AMD, Apple Silicon"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[900px] text-sm">
                    <thead>
                        <tr className="text-left">
                            <th className="p-4 text-slate-400">Tiêu chí</th>
                            <th className="p-4 text-sky-300">Intel</th>
                            <th className="p-4 text-red-300">AMD</th>
                            <th className="p-4 text-emerald-300">
                                Apple Silicon
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((r) => (
                            <tr
                                key={r[0]}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 font-semibold text-white">
                                    {r[0]}
                                </td>
                                <td className="p-4 text-slate-300">{r[1]}</td>
                                <td className="p-4 text-slate-300">{r[2]}</td>
                                <td className="p-4 text-slate-300">{r[3]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        line: {
            icon: <Cpu />,
            title: "Dòng CPU",
            detail: "Core i5/i7, Ryzen 5/7, M4/M4 Pro cho biết phân khúc, nhưng không đủ để kết luận.",
            impact: "Cần xem model cụ thể và đời CPU.",
        },
        gen: {
            icon: <Sparkles />,
            title: "Thế hệ CPU",
            detail: "CPU đời mới thường cải thiện hiệu năng, điện năng, AI và đồ họa tích hợp.",
            impact: "i5 đời mới có thể mạnh hơn i7 laptop tiết kiệm điện đời cũ.",
        },
        cores: {
            icon: <Layers3 />,
            title: "Nhân / luồng",
            detail: "Quan trọng với đa nhiệm, render, máy ảo, lập trình.",
            impact: "Tác vụ nặng thường hưởng lợi từ nhiều nhân hơn.",
        },
        clock: {
            icon: <Gauge />,
            title: "Xung nhịp",
            detail: "Ảnh hưởng phản hồi đơn nhân, game, tác vụ nhẹ.",
            impact: "Không nên xem GHz tách rời IPC, nhiệt và điện.",
        },
        cache: {
            icon: <Puzzle />,
            title: "Cache L2/L3",
            detail: "Rất quan trọng với game và tác vụ dùng dữ liệu lặp.",
            impact: "Ryzen X3D nổi bật nhờ 3D V-Cache.",
        },
        igpu: {
            icon: <Monitor />,
            title: "GPU tích hợp",
            detail: "Quan trọng nếu không dùng card rời.",
            impact: "CPU hậu tố F của Intel thường không có iGPU.",
        },
        npu: {
            icon: <Sparkles />,
            title: "NPU / Neural Engine",
            detail: "Xử lý AI cục bộ, video call, tác vụ AI mới.",
            impact: "Quan trọng hơn trên laptop/AI PC đời mới.",
        },
        platform: {
            icon: <Settings />,
            title: "Socket / nền tảng",
            detail: "Quyết định mainboard, RAM, khả năng nâng cấp.",
            impact: "AM5, LGA, unified memory của Apple có chiến lược khác nhau.",
        },
        power: {
            icon: <Zap />,
            title: "TDP / điện năng",
            detail: "Ảnh hưởng nhiệt độ, pin laptop, yêu cầu tản nhiệt.",
            impact: "CPU mạnh nhưng tản yếu có thể không duy trì hiệu năng.",
        },
        software: {
            icon: <Workflow />,
            title: "Tối ưu phần mềm",
            detail: "Một CPU mạnh nhưng app không tối ưu vẫn có thể không phát huy hết.",
            impact: "Apple Silicon mạnh nhất khi app native/tối ưu cho macOS ARM.",
        },
    };
    const [active, setActive] = useState("line");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="yellow"
                title="Thông số quan trọng khi so sánh hãng CPU"
                icon={<Settings />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
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
                        <p className="text-sm text-yellow-300 font-semibold">
                            Yếu tố khi chọn CPU
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
                    </div>
                </div>
            </div>
        </section>
    );
}

function BrandExplorer() {
    const brands = {
        intel: {
            icon: <Cpu />,
            title: "Intel",
            color: "sky",
            summary:
                "Mạnh về hệ sinh thái PC/laptop Windows rộng, doanh nghiệp và tương thích phần mềm.",
            strengths: [
                "Core i3/i5/i7/i9, Core Ultra, Xeon",
                "Rất nhiều laptop/desktop để chọn",
                "Tương thích Windows/Linux rộng",
                "Core Ultra tập trung AI PC, pin, iGPU",
            ],
            cautions: [
                "Một số CPU hiệu năng cao cần tản nhiệt/điện tốt",
                "Tên i5/i7 không đủ để kết luận",
                "Hậu tố F thường không có GPU tích hợp",
            ],
        },
        amd: {
            icon: <Gamepad2 />,
            title: "AMD",
            color: "red",
            summary:
                "Nổi bật về hiệu năng/giá, Ryzen gaming, X3D cache lớn và nền tảng desktop mạnh.",
            strengths: [
                "Ryzen 3/5/7/9, X3D, Threadripper, EPYC",
                "Giá/hiệu năng tốt ở nhiều phân khúc",
                "Ryzen X3D rất mạnh cho nhiều game",
                "AM5 là nền tảng desktop đáng chú ý",
            ],
            cautions: [
                "Cần chú ý mainboard, BIOS, RAM tương thích",
                "Một số mẫu cần GPU rời",
                "X3D không luôn tối ưu nhất cho workstation",
            ],
        },
        apple: {
            icon: <Laptop />,
            title: "Apple Silicon",
            color: "emerald",
            summary:
                "Tối ưu chặt phần cứng/phần mềm cho Mac/iPad, hiệu năng/watt tốt, pin lâu và máy mát.",
            strengths: [
                "M1, M2, M3, M4 và bản Pro/Max/Ultra",
                "Hiệu năng/watt tốt",
                "Neural Engine mạnh",
                "macOS và phần cứng được tối ưu đồng bộ",
            ],
            cautions: [
                "Gần như không nâng cấp CPU/RAM sau mua",
                "Chỉ trong hệ sinh thái Apple",
                "Không phải lựa chọn chính cho game Windows",
            ],
        },
    };
    const [active, setActive] = useState("intel");
    const item = brands[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="emerald"
                title="Khám phá từng hãng / nền tảng"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {Object.entries(brands).map(([key, b]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 text-left border transition-all ${active === key ? `${softBorder(b.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(b.icon, { size: 20 })}{" "}
                                {b.title}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-3">
                            {item.title}
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            {item.summary}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5">
                            <h4 className="font-bold text-green-300 mb-3">
                                Điểm mạnh
                            </h4>
                            <div className="space-y-2">
                                {item.strengths.map((p) => (
                                    <Bullet key={p} text={p} color="green" />
                                ))}
                            </div>
                        </div>
                        <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-5">
                            <h4 className="font-bold text-orange-300 mb-3">
                                Cần lưu ý
                            </h4>
                            <div className="space-y-2">
                                {item.cautions.map((p) => (
                                    <Bullet key={p} text={p} color="orange" />
                                ))}
                            </div>
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
            subtitle: "CPU Intel phổ thông rất dễ build PC",
            color: "sky",
            points: [
                "6 nhân / 12 luồng",
                "Turbo tối đa 4.40GHz",
                "18MB Intel Smart Cache",
                "Base power 65W",
                "Hậu tố F: không có GPU tích hợp",
            ],
            lesson: "Phù hợp học tập, văn phòng nặng, gaming Full HD với GPU rời và build PC Windows ổn định.",
        },
        {
            icon: <Gamepad2 />,
            title: "AMD Ryzen 7 9800X3D",
            subtitle: "CPU AMD nổi bật cho gaming",
            color: "red",
            points: [
                "Ryzen 9000 X3D",
                "8 nhân / 16 luồng",
                "Boost tối đa 5.2GHz",
                "3D V-Cache có lợi cho game",
                "Cần nền tảng AM5, DDR5, tản phù hợp",
            ],
            lesson: "Phù hợp game thủ muốn FPS cao và 1% low FPS tốt, nhưng không phải luôn tối ưu nhất cho render/máy ảo nặng.",
        },
        {
            icon: <Laptop />,
            title: "Apple M4",
            subtitle: "Apple Silicon tối ưu cho Mac/iPad",
            color: "emerald",
            points: [
                "ARM-based SoC",
                "3nm thế hệ thứ hai",
                "28 tỷ transistor",
                "CPU tối đa 10 nhân",
                "Neural Engine 16 nhân",
            ],
            lesson: "Phù hợp macOS, sinh viên, văn phòng, thiết kế, chỉnh ảnh/video và người cần pin lâu, máy mát.",
        },
        {
            icon: <Sparkles />,
            title: "Intel Core Ultra",
            subtitle: "Hướng đi AI PC của Intel",
            color: "purple",
            points: [
                "Tập trung laptop/PC hiện đại",
                "Có NPU cho AI cục bộ",
                "Đồ họa tích hợp Intel Arc trên một số SKU",
                "Hướng đến pin, video call, form-factor mỏng nhẹ",
                "Phù hợp Windows AI PC",
            ],
            lesson: "Đáng chú ý nếu cần laptop Windows đời mới, AI features cục bộ và iGPU tốt hơn.",
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
                                <Bullet key={p} text={p} color="green" />
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

function ChoiceLab() {
    const scenarios = {
        winGaming: {
            icon: <Gamepad2 />,
            title: "Windows + chơi game nhiều",
            answer: "Ưu tiên Intel hoặc AMD. PC gaming cao cấp nên xem Ryzen X3D và Intel Core/Core Ultra desktop theo benchmark thực tế.",
            color: "red",
        },
        value: {
            icon: <Gauge />,
            title: "Build PC giá/hiệu năng",
            answer: "AMD Ryzen 5/Ryzen 7 và Intel Core i5 thường là vùng rất đáng cân nhắc.",
            color: "sky",
        },
        battery: {
            icon: <Laptop />,
            title: "Laptop pin lâu, mát",
            answer: "Apple Silicon rất mạnh nếu dùng được macOS. Trong Windows, xem Intel Core Ultra và AMD Ryzen mobile đời mới.",
            color: "emerald",
        },
        iosdev: {
            icon: <Monitor />,
            title: "Lập trình iOS/macOS",
            answer: "Nên chọn Mac Apple Silicon vì cần macOS/Xcode và tối ưu hệ Apple.",
            color: "cyan",
        },
        aiRender: {
            icon: <Server />,
            title: "AI/render/game Windows",
            answer: "Thường chọn Intel/AMD đi kèm GPU rời NVIDIA/AMD phù hợp. CPU chỉ là một phần của cấu hình.",
            color: "purple",
        },
    };
    const [active, setActive] = useState("winGaming");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Lab: nên chọn Intel, AMD hay Apple Silicon?"
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
            wrong: "Intel luôn tốt hơn AMD hoặc AMD luôn tốt hơn Intel",
            right: "Phải so model cụ thể với model cụ thể, cùng thế hệ, cùng phân khúc và cùng nhu cầu.",
        },
        {
            wrong: "Apple M-series yếu vì không phải Intel/AMD",
            right: "Apple Silicon dùng ARM nhưng hiệu năng/watt rất mạnh, nhất là app tối ưu cho Apple Silicon.",
        },
        {
            wrong: "Ryzen X3D lúc nào cũng tốt nhất cho mọi việc",
            right: "X3D rất mạnh trong nhiều game, nhưng render/máy ảo/workstation có thể cần CPU nhiều nhân hơn.",
        },
        {
            wrong: "Core i7 chắc chắn mạnh hơn Core i5",
            right: "Cần xem thế hệ, dòng điện năng, desktop/laptop và model cụ thể.",
        },
        {
            wrong: "Mua Mac rồi nâng RAM/CPU sau cũng được",
            right: "Apple Silicon dùng unified memory, CPU/GPU/RAM gần như không nâng cấp sau mua; cần chọn cấu hình đúng từ đầu.",
        },
    ];
    const tips = [
        "Dùng Windows, chơi game nhiều: ưu tiên Intel hoặc AMD.",
        "Build PC giá/hiệu năng: xem kỹ Ryzen 5/Ryzen 7 và Core i5/Core i7 đúng đời.",
        "Laptop pin lâu, mát: Apple Silicon rất mạnh nếu dùng được macOS.",
        "Lập trình iOS/macOS: chọn Mac Apple Silicon.",
        "AI/render/game Windows: Intel/AMD + GPU rời phù hợp thường thực dụng hơn.",
        "Luôn hỏi: nhu cầu chính, hệ điều hành, game, GPU rời, nâng cấp, ngân sách, socket/nền tảng, RAM loại gì.",
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
                        <Lightbulb /> Checklist chọn CPU
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
                        <span className="bg-sky-500/20 text-sky-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-sky-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                INTEL = PC/laptop Windows rộng, Core/Core
                                Ultra/Xeon
                            </p>
                            <p className="text-red-300">
                                AMD = Ryzen, giá/hiệu năng, X3D gaming, AM5
                            </p>
                            <p className="text-emerald-300">
                                APPLE SILICON = M-series, ARM, macOS, hiệu
                                năng/watt
                            </p>
                            <br />
                            <p className="text-slate-500">
                                # Không chọn theo hãng đơn thuần
                            </p>
                            <p className="text-slate-300">
                                Hãy chọn theo model cụ thể + nhu cầu + nền tảng
                                + ngân sách
                            </p>
                            <br />
                            <p className="text-slate-500"># Câu hỏi chính</p>
                            <p className="text-slate-300">
                                Windows hay macOS? Game hay làm việc? Cần GPU
                                rời? Có cần nâng cấp? Ngân sách?
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
            "CPU Intel và AMD phổ biến trên PC Windows hiện nay thường dùng kiến trúc tập lệnh nào?",
        options: ["x86-64", "ARM-only", "RISC-V-only", "Không có tập lệnh"],
        correct: 0,
        explanation:
            "Intel và AMD trên PC/laptop Windows hiện đại phổ biến dùng kiến trúc x86-64.",
    },
    {
        question: "Điểm mạnh nổi bật của Apple Silicon là gì?",
        options: [
            "Dễ thay CPU sau khi mua",
            "Hiệu năng/watt tốt, tối ưu chặt với macOS và thiết bị Apple",
            "Chỉ chạy được máy in",
            "Không cần RAM",
        ],
        correct: 1,
        explanation:
            "Apple Silicon nổi bật ở hiệu năng/watt, pin, nhiệt và tối ưu phần cứng/phần mềm trong hệ sinh thái Apple.",
    },
    {
        question: "Dòng AMD Ryzen X3D thường nổi bật ở điểm nào?",
        options: [
            "Có thêm 3D V-Cache, có lợi cho nhiều game",
            "Là ổ cứng SSD",
            "Là loại màn hình 4K",
            "Không cần mainboard",
        ],
        correct: 0,
        explanation:
            "Ryzen X3D nổi bật nhờ 3D V-Cache lớn, thường giúp nhiều game cải thiện FPS và 1% low.",
    },
    {
        question: "Vì sao không nên nói Core i7 chắc chắn mạnh hơn Core i5?",
        options: [
            "Vì cần xem thế hệ, dòng điện năng, desktop/laptop và model cụ thể",
            "Vì Core i7 là RAM",
            "Vì Core i5 không phải CPU",
            "Vì CPU không có hiệu năng",
        ],
        correct: 0,
        explanation:
            "Tên i5/i7 chỉ là phân khúc. CPU đời mới/dòng desktop có thể mạnh hơn CPU đời cũ/dòng tiết kiệm điện.",
    },
    {
        question: "Khi mua Mac Apple Silicon, điều gì cần lưu ý?",
        options: [
            "RAM/CPU gần như không nâng cấp sau mua, nên chọn cấu hình đúng từ đầu",
            "Luôn thay CPU sau 1 tháng",
            "Không cần kiểm tra phần mềm",
            "Mac dùng socket AM5",
        ],
        correct: 0,
        explanation:
            "Apple Silicon tích hợp chặt, unified memory thường không nâng cấp sau mua; cần chọn cấu hình phù hợp từ đầu.",
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
                    <strong className="text-sky-400">
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
                <span className="text-sky-400">
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
                        className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu Intel, AMD và Apple Silicon khác nhau về nền tảng,
                kiến trúc, hệ sinh thái và điểm mạnh. Tiếp theo là học cách chọn
                CPU phù hợp theo đúng nhu cầu thực tế.
            </p>
            <Link
                to="/phan-2-10"
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-sky-500/20"
            >
                Bài tiếp theo: 2.10 — Cách chọn CPU phù hợp{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "sky" }) {
    const colorMap = {
        sky: "bg-sky-500/20 text-sky-300",
        red: "bg-red-500/20 text-red-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
        blue: "bg-blue-500/20 text-blue-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        pink: "bg-pink-500/20 text-pink-300",
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

function HeroBrand({ icon, label, desc, color, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 flex items-center gap-4 ${highlight ? "bg-sky-500/10 border-sky-400/50" : softBorder(color)}`}
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

function Bullet({ text, color = "green" }) {
    const cls = color === "orange" ? "text-orange-400" : "text-green-400";
    return (
        <div className="flex items-start gap-2 text-sm text-slate-300">
            <CheckCircle2 className={`${cls} shrink-0 mt-0.5`} size={16} />{" "}
            <span>{text}</span>
        </div>
    );
}

function badgeColor(color) {
    const map = {
        sky: "bg-sky-500/10 text-sky-300 border border-sky-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
    };
    return map[color] || map.sky;
}

function softBorder(color) {
    const map = {
        sky: "bg-sky-500/5 border-sky-500/20",
        red: "bg-red-500/5 border-red-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
    };
    return map[color] || map.sky;
}

function textColor(color) {
    const map = {
        sky: "text-sky-300",
        red: "text-red-300",
        emerald: "text-emerald-300",
        cyan: "text-cyan-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
    };
    return map[color] || "text-sky-300";
}
