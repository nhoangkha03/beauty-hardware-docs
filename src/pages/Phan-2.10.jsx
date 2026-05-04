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
    Fan,
    Gamepad2,
    Gauge,
    HardDrive,
    Laptop,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    PackageCheck,
    Puzzle,
    Search,
    Server,
    Settings,
    Sparkles,
    Workflow,
    Wrench,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-green-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-green-500/10 border border-green-400/30 flex items-center justify-center shadow-lg shadow-green-500/10">
                            <Search className="text-green-400" size={24} />
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
                    <div className="text-sm font-semibold text-green-300 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                        Bài 2.10
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreIdea />
                <EngineAnalogy />
                <DecisionFlow />
                <NeedTable />
                <SpecsChecklist />
                <RealExamples />
                <CpuPickerLab />
                <BalanceLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextSection />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-green-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-green-300">
                        <BookOpen size={16} /> Bài cuối Phần 2: CPU
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Cách chọn CPU
                        <span className="block text-green-400">
                            phù hợp nhu cầu
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Đừng chọn CPU chỉ vì i7, Ryzen 7 hay giá cao. CPU phù
                        hợp phải cân bằng nhu cầu, ngân sách, mainboard, RAM,
                        GPU, tản nhiệt và khả năng nâng cấp.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="CPU" />
                        <Tag icon={<Gamepad2 size={16} />} text="Gaming" />
                        <Tag
                            icon={<Monitor size={16} />}
                            text="iGPU / GPU rời"
                        />
                        <Tag icon={<MemoryStick size={16} />} text="RAM" />
                        <Tag
                            icon={<Wrench size={16} />}
                            text="Socket / Mainboard"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="space-y-3">
                        <HeroCard
                            icon={<Search />}
                            label="Nhu cầu"
                            desc="Bạn dùng máy để làm gì?"
                            color="green"
                            highlight
                        />
                        <HeroCard
                            icon={<Puzzle />}
                            label="Nền tảng"
                            desc="PC/laptop, Windows/macOS, socket, RAM"
                            color="cyan"
                        />
                        <HeroCard
                            icon={<Gamepad2 />}
                            label="GPU"
                            desc="Game/AI/render thường cần GPU phù hợp"
                            color="purple"
                        />
                        <HeroCard
                            icon={<Fan />}
                            label="Tản nhiệt"
                            desc="CPU mạnh cần điện và nhiệt phù hợp"
                            color="orange"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Công thức chọn CPU</p>
                        <p>
                            <span className="text-green-300">Đủ mạnh</span> +
                            hợp nền tảng
                        </p>
                        <p className="text-slate-300">
                            + không nghẽn GPU + tản/nguồn đủ
                        </p>
                        <p className="text-cyan-300">+ đúng ngân sách</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Biết vì sao không nên chọn CPU chỉ dựa trên i5/i7/Ryzen 5/Ryzen 7.",
        "Nắm quy trình chọn CPU từ nhu cầu đến nền tảng, GPU, RAM, tản nhiệt và giá.",
        "Chọn phân khúc CPU phù hợp cho văn phòng, gaming, creator, lập trình, AI và workstation.",
        "Kiểm tra socket, RAM DDR4/DDR5/unified memory, iGPU và GPU rời trước khi mua.",
        "Tổng kết Phần 2 và kết nối sang Phần 3: hệ thống bộ nhớ.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="green"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-green-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-300 flex items-center justify-center font-bold mb-4">
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

function CoreIdea() {
    const questions = [
        "Bạn dùng máy để làm gì?",
        "Dùng PC hay laptop?",
        "Có cần chơi game, render, AI hoặc máy ảo không?",
        "Có dùng card đồ họa rời không?",
        "Ngân sách tổng cả bộ máy là bao nhiêu?",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: chọn CPU là chọn theo nhu cầu"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">
                                Chọn CPU phù hợp
                            </strong>{" "}
                            nghĩa là chọn bộ xử lý có hiệu năng, điện năng, giá
                            tiền và nền tảng tương thích với việc bạn thật sự
                            làm hằng ngày.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-cyan-300">
                                Điểm quan trọng:
                            </strong>{" "}
                            CPU không nên chọn riêng lẻ. CPU phải đi cùng RAM,
                            SSD, GPU, mainboard, PSU và tản nhiệt phù hợp.
                        </div>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <Search className="text-cyan-300" /> 5 câu hỏi trước
                            khi chọn CPU
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

function EngineAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: CPU như động cơ xe"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                    <AnalogyCard
                        icon={<Monitor />}
                        title="Đi trong phố"
                        desc="Văn phòng, học online, Chrome, Word không cần Core i9/Ryzen 9. CPU vừa đủ + RAM/SSD tốt là quan trọng."
                        color="cyan"
                    />
                    <AnalogyCard
                        icon={<Gamepad2 />}
                        title="Chạy đường đua"
                        desc="Gaming cần CPU đủ mạnh, nhưng GPU thường quyết định FPS nhiều hơn sau khi CPU đã đạt ngưỡng hợp lý."
                        color="purple"
                    />
                    <AnalogyCard
                        icon={<Server />}
                        title="Chở hàng nặng"
                        desc="Render, máy ảo, compile lớn cần nhiều nhân/luồng, RAM lớn, SSD nhanh và tản nhiệt tốt."
                        color="orange"
                    />
                </div>
            </div>
        </section>
    );
}

function DecisionFlow() {
    const steps = [
        {
            icon: <Search />,
            title: "Xác định nhu cầu chính",
            desc: "Văn phòng, học tập, gaming, creator, lập trình, AI hay workstation?",
            color: "green",
        },
        {
            icon: <Layers3 />,
            title: "Chọn phân khúc CPU",
            desc: "Core i3/i5/i7/i9, Ryzen 3/5/7/9, Ryzen X3D, Apple M-series.",
            color: "cyan",
        },
        {
            icon: <Cpu />,
            title: "Kiểm tra nhân / luồng",
            desc: "6C/12T đủ phổ thông; 8C/16T+ tốt cho việc nặng.",
            color: "purple",
        },
        {
            icon: <Monitor />,
            title: "Kiểm tra iGPU / GPU rời",
            desc: "CPU không iGPU cần GPU rời để xuất hình. Gaming/AI cần GPU phù hợp.",
            color: "blue",
        },
        {
            icon: <Wrench />,
            title: "Kiểm tra socket / mainboard",
            desc: "AM4, AM5, LGA1700, LGA1851 hoặc nền tảng Apple Silicon.",
            color: "orange",
        },
        {
            icon: <MemoryStick />,
            title: "Kiểm tra RAM",
            desc: "DDR4, DDR5 hoặc unified memory; dung lượng cần đủ theo tác vụ.",
            color: "yellow",
        },
        {
            icon: <Fan />,
            title: "Kiểm tra tản nhiệt / nguồn",
            desc: "CPU mạnh cần tản tốt, PSU đủ và case airflow ổn.",
            color: "red",
        },
        {
            icon: <Gauge />,
            title: "So giá / hiệu năng",
            desc: "Tính tổng CPU + mainboard + RAM + tản nhiệt, không chỉ giá CPU.",
            color: "green",
        },
    ];
    const [active, setActive] = useState(0);
    const item = steps[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Quy trình ra quyết định khi chọn CPU"
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
                                        {s.desc.slice(0, 72)}...
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

function NeedTable() {
    const rows = [
        [
            "Văn phòng cơ bản",
            "Core i3/i5, Ryzen 3/5, Apple M-series cơ bản",
            "8–16GB",
            "Không bắt buộc",
            "Ưu tiên SSD và RAM đủ",
        ],
        [
            "Học tập / sinh viên",
            "Core i5, Ryzen 5, Apple M4/M-series",
            "16GB",
            "Không bắt buộc",
            "Laptop nên ưu tiên pin tốt",
        ],
        [
            "Gaming Full HD",
            "Core i5 / Ryzen 5 đời mới",
            "16–32GB",
            "Nên có GPU rời",
            "Dành ngân sách nhiều cho GPU",
        ],
        [
            "Gaming FPS cao / 2K",
            "Core i5/i7, Ryzen 5/7, Ryzen X3D",
            "32GB",
            "Cần GPU rời tốt",
            "CPU ảnh hưởng FPS và 1% low",
        ],
        [
            "Dựng video / creator",
            "Core i7/i9, Ryzen 7/9, Apple M Pro/Max",
            "32GB+",
            "Tùy phần mềm",
            "GPU, RAM, SSD cũng rất quan trọng",
        ],
        [
            "Lập trình cơ bản",
            "Core i5, Ryzen 5, Apple M-series",
            "16GB",
            "Không bắt buộc",
            "Ưu tiên RAM/SSD",
        ],
        [
            "Lập trình nặng / máy ảo",
            "Core i7/i9, Ryzen 7/9",
            "32–64GB",
            "Tùy nhu cầu",
            "Nhiều nhân và RAM lớn quan trọng",
        ],
        [
            "AI / ML local",
            "CPU tốt + GPU NVIDIA mạnh",
            "32GB+",
            "Rất nên có",
            "GPU/VRAM thường quan trọng hơn CPU",
        ],
        [
            "Server / workstation",
            "Xeon, EPYC, Threadripper, Ryzen 9/Core i9",
            "64GB+",
            "Tùy tác vụ",
            "Ưu tiên ổn định, ECC nếu cần",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Phân loại CPU theo nhu cầu sử dụng"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[980px] text-sm">
                    <thead>
                        <tr className="text-left">
                            <th className="p-4 text-slate-400">Nhu cầu</th>
                            <th className="p-4 text-green-300">CPU nên chọn</th>
                            <th className="p-4 text-cyan-300">RAM gợi ý</th>
                            <th className="p-4 text-purple-300">
                                GPU cần không?
                            </th>
                            <th className="p-4 text-orange-300">Ghi chú</th>
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
                                <td className="p-4 text-slate-300">{r[4]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function SpecsChecklist() {
    const specs = {
        cores: {
            icon: <Cpu />,
            title: "Số nhân / số luồng",
            detail: "Quyết định khả năng xử lý song song.",
            impact: "6C/12T đủ tốt phổ thông; 8C/16T+ tốt cho việc nặng.",
        },
        clock: {
            icon: <Gauge />,
            title: "Xung nhịp",
            detail: "Ảnh hưởng phản hồi và hiệu năng đơn nhân.",
            impact: "Game/app nhẹ thường thích CPU xung/IPC tốt.",
        },
        cache: {
            icon: <Database />,
            title: "Cache L2/L3",
            detail: "Giúp CPU giảm chờ RAM.",
            impact: "L3 lớn thường có lợi cho game.",
        },
        gen: {
            icon: <Sparkles />,
            title: "Thế hệ CPU",
            detail: "CPU đời mới thường tối ưu hơn.",
            impact: "Đừng chỉ nhìn i5/i7; phải xem đời và model cụ thể.",
        },
        socket: {
            icon: <Wrench />,
            title: "Socket",
            detail: "Quyết định mainboard tương thích.",
            impact: "Ryzen 5600 → AM4; Ryzen 7600 → AM5; i5-12400F → LGA1700.",
        },
        ram: {
            icon: <MemoryStick />,
            title: "RAM hỗ trợ",
            detail: "Ảnh hưởng chi phí nền tảng.",
            impact: "DDR4 rẻ hơn, DDR5 mới hơn, Apple dùng unified memory.",
        },
        igpu: {
            icon: <Monitor />,
            title: "iGPU",
            detail: "Cần nếu không dùng card rời.",
            impact: "Intel F thường không có iGPU; Ryzen non-G đời cũ thường không có iGPU.",
        },
        tdp: {
            icon: <Zap />,
            title: "TDP / công suất",
            detail: "Ảnh hưởng tản nhiệt và nguồn.",
            impact: "CPU mạnh hơn thường cần tản tốt hơn.",
        },
        pcie: {
            icon: <HardDrive />,
            title: "PCIe support",
            detail: "Ảnh hưởng GPU/SSD đời mới.",
            impact: "PCIe 4.0/5.0 quan trọng với nền tảng mới.",
        },
        platform: {
            icon: <PackageCheck />,
            title: "Giá nền tảng",
            detail: "Không chỉ tính giá CPU.",
            impact: "CPU + mainboard + RAM + tản nhiệt mới là chi phí thật.",
        },
    };
    const [active, setActive] = useState("cores");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="yellow"
                title="Thông số cần kiểm tra trước khi mua CPU"
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
                    </div>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                        <p>{item.detail}</p>
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-yellow-300">
                                Cách hiểu thực tế:
                            </strong>{" "}
                            {item.impact}
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-sm text-slate-400">
                            <strong className="text-white">Công thức:</strong>{" "}
                            CPU phù hợp = đủ mạnh cho tác vụ + hợp mainboard/RAM
                            + không nghẽn GPU + tản/nguồn đủ + giá hợp ngân
                            sách.
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
            title: "Intel Core i5-12400F / i5-14400F",
            subtitle: "Phổ thông cho PC Windows",
            color: "cyan",
            points: [
                "Văn phòng, học tập, Chrome nhiều tab: rất phù hợp",
                "Gaming Full HD với RTX 3060/4060/RX 6600: phù hợp",
                "Lập trình cơ bản đến trung bình: phù hợp",
                "Không có GPU rời: không phù hợp với bản F",
                "Render/AI rất nặng: nên cân nhắc CPU/GPU mạnh hơn",
            ],
            lesson: "Intel F-series thường dễ build PC giá hợp lý, nhưng cần GPU rời để xuất hình.",
        },
        {
            icon: <Cpu />,
            title: "AMD Ryzen 5 7600",
            subtitle: "AM5, DDR5, iGPU cơ bản",
            color: "green",
            points: [
                "Build PC mới muốn nền tảng lâu dài",
                "6 nhân / 12 luồng",
                "Boost tối đa 5.1GHz",
                "32MB L3 Cache",
                "Hỗ trợ DDR5 và PCIe 5.0",
            ],
            lesson: "Ryzen 5 7600 hợp build mới AM5, nhưng chi phí mainboard/RAM DDR5 có thể cao hơn cấu hình DDR4 cũ.",
        },
        {
            icon: <Gamepad2 />,
            title: "Ryzen 7 7800X3D / 9800X3D",
            subtitle: "Ưu tiên gaming FPS cao",
            color: "purple",
            points: [
                "3D V-Cache lớn",
                "Gaming cao cấp: rất phù hợp",
                "1% low FPS ổn định hơn trong nhiều game",
                "Không cần thiết cho văn phòng",
                "Render CPU chuyên nghiệp có thể cần CPU nhiều nhân hơn",
            ],
            lesson: "Ryzen X3D rất mạnh cho game, nhưng không phải CPU tốt nhất cho mọi tác vụ.",
        },
        {
            icon: <Laptop />,
            title: "Mac mini M4 / MacBook M4",
            subtitle: "Người dùng macOS",
            color: "green",
            points: [
                "Dùng macOS/iPhone/iPad: rất phù hợp",
                "Lập trình iOS/macOS: rất phù hợp",
                "Dựng video nhẹ-vừa: phù hợp",
                "Chơi game Windows nhiều: không phải lựa chọn chính",
                "Muốn nâng RAM/CPU sau này: không phù hợp",
            ],
            lesson: "Với Apple Silicon, RAM/SSD nên chọn đúng ngay từ đầu vì khả năng nâng cấp sau mua rất hạn chế.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
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

function CpuPickerLab() {
    const scenarios = {
        office: {
            icon: <Laptop />,
            title: "Văn phòng / học tập",
            answer: "Đừng chi quá nhiều vào CPU. Ưu tiên CPU Core i3/i5, Ryzen 3/5 hoặc Apple M cơ bản + RAM 16GB + SSD NVMe + màn hình tốt.",
            color: "cyan",
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Gaming Full HD",
            answer: "Chọn Core i5/Ryzen 5 đời mới và dành ngân sách nhiều hơn cho GPU như RTX 4060/RX 7600 hoặc tương đương.",
            color: "purple",
        },
        creator: {
            icon: <Sparkles />,
            title: "Dựng video / creator",
            answer: "Ưu tiên 8 nhân/16 luồng trở lên, RAM 32GB+, SSD nhanh, và GPU nếu phần mềm tận dụng CUDA/Metal/OpenCL.",
            color: "orange",
        },
        dev: {
            icon: <Server />,
            title: "Lập trình nặng / máy ảo",
            answer: "Chọn Core i7/i9 hoặc Ryzen 7/9, RAM 32–64GB, SSD nhanh. Nhiều nhân và RAM lớn rất quan trọng.",
            color: "green",
        },
        mac: {
            icon: <Monitor />,
            title: "Mac Apple Silicon",
            answer: "Dùng nhẹ: 16GB unified memory có thể ổn. Lập trình/dựng video nhiều: cân nhắc 24GB/32GB+ và SSD đủ lớn.",
            color: "blue",
        },
        ai: {
            icon: <Zap />,
            title: "AI / ML local",
            answer: "CPU tốt là cần, nhưng GPU NVIDIA mạnh và VRAM thường quan trọng hơn CPU. Nên có RAM 32GB+.",
            color: "red",
        },
    };
    const [active, setActive] = useState("gaming");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="blue"
                title="Lab: chọn CPU theo tình huống"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
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

function BalanceLab() {
    const cards = [
        {
            icon: <Cpu />,
            title: "CPU mạnh + RAM thiếu",
            desc: "Máy vẫn chậm khi mở nhiều tab, chạy máy ảo hoặc project lớn.",
            color: "red",
        },
        {
            icon: <Cpu />,
            title: "CPU mạnh + GPU yếu",
            desc: "Gaming vẫn FPS thấp nếu game bị nghẽn card đồ họa.",
            color: "orange",
        },
        {
            icon: <Cpu />,
            title: "CPU mạnh + tản yếu",
            desc: "Tải nặng lâu có thể nóng, tụt xung và giảm hiệu năng.",
            color: "purple",
        },
        {
            icon: <CheckCircle2 />,
            title: "Cấu hình cân bằng",
            desc: "CPU + RAM + SSD + GPU + mainboard + tản nhiệt + màn hình cùng phù hợp nhu cầu.",
            color: "green",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="orange"
                title="Lab: chọn theo tổng hệ thống, không theo một linh kiện"
                icon={<Puzzle />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <div
                            key={c.title}
                            className={`${softBorder(c.color)} border rounded-3xl p-6`}
                        >
                            <div
                                className={`w-12 h-12 rounded-2xl ${badgeColor(c.color)} flex items-center justify-center mb-4`}
                            >
                                {React.cloneElement(c.icon, { size: 24 })}
                            </div>
                            <h3 className="text-white font-bold mb-3">
                                {c.title}
                            </h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                {c.desc}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300 text-center">
                    CPU + RAM + SSD + GPU + mainboard + tản nhiệt + màn hình →
                    mới tạo trải nghiệm thật
                </div>
            </div>
        </section>
    );
}

function CommonMistakes() {
    const mistakes = [
        {
            wrong: "Cứ i7 là hơn i5, Ryzen 7 là hơn Ryzen 5",
            right: "Phải xem đời CPU, dòng điện năng, số nhân, xung, cache và loại máy.",
        },
        {
            wrong: "Mua CPU thật mạnh là máy mạnh toàn diện",
            right: "Máy cần cấu hình cân bằng: CPU, RAM, SSD, GPU, tản nhiệt và nguồn.",
        },
        {
            wrong: "CPU không có GPU tích hợp cũng không sao",
            right: "Nếu không có GPU rời, CPU không có iGPU có thể khiến máy không xuất hình.",
        },
        {
            wrong: "Chọn CPU trước, mainboard tính sau",
            right: "CPU và mainboard phải tương thích socket/chipset; sai socket là không lắp được.",
        },
        {
            wrong: "Laptop cùng CPU thì hiệu năng giống nhau",
            right: "Laptop còn phụ thuộc tản nhiệt, giới hạn công suất, độ dày máy, BIOS và RAM single/dual channel.",
        },
    ];
    const tips = [
        "Văn phòng/học tập: ưu tiên RAM 16GB + SSD NVMe + màn hình tốt, không cần CPU quá đắt.",
        "Gaming: chọn CPU đủ mạnh rồi dành ngân sách cho GPU.",
        "Dựng video/lập trình nặng: ưu tiên 8C/16T+, RAM 32GB+, SSD nhanh và GPU nếu phần mềm tận dụng.",
        "Laptop: kiểm tra RAM nâng được không, SSD bao nhiêu, nóng/ồn không, pin bao lâu, màn hình có tốt không.",
        "Mac Apple Silicon: chọn RAM/SSD cẩn thận ngay từ đầu vì nâng cấp sau mua rất hạn chế.",
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
                        <Lightbulb /> Mẹo chọn CPU
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
                        <span className="bg-green-500/20 text-green-300 p-2 rounded-xl">
                            11
                        </span>
                        Tóm tắt Phần 2 & Quiz cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-300 border border-slate-800 shadow-inner space-y-2">
                            <p>CHỌN CPU = chọn theo nhu cầu thật</p>
                            <br />
                            <p className="text-slate-500"># Quy trình</p>
                            <p className="text-slate-300">
                                Nhu cầu → phân khúc → core/thread → iGPU/GPU →
                                socket/mainboard → RAM → tản/nguồn → giá
                            </p>
                            <br />
                            <p className="text-slate-500">
                                # Không chọn riêng lẻ
                            </p>
                            <p className="text-slate-300">
                                CPU phải đi cùng RAM, SSD, GPU, mainboard, PSU,
                                tản nhiệt và màn hình.
                            </p>
                            <br />
                            <p className="text-slate-500">
                                # Hoàn thành Phần 2
                            </p>
                            <p className="text-slate-300">
                                CPU là gì → kiến trúc → ALU/CU/Register/Cache →
                                GHz → core/thread → cache → ISA → nm → hãng CPU
                                → cách chọn.
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
            "Khi chọn CPU, yếu tố nào quan trọng nhất cần xác định trước?",
        options: [
            "Màu hộp CPU",
            "Nhu cầu sử dụng thực tế",
            "Số lượng cổng USB trên màn hình",
            "Hãng bàn phím đang dùng",
        ],
        correct: 1,
        explanation:
            "CPU phù hợp phải bắt đầu từ nhu cầu thực tế: văn phòng, gaming, render, lập trình, AI hay workstation.",
    },
    {
        question: "CPU Intel có hậu tố F thường có đặc điểm gì?",
        options: [
            "Luôn có GPU tích hợp rất mạnh",
            "Không có GPU tích hợp, thường cần card đồ họa rời",
            "Là CPU dành riêng cho máy in",
            "Không cần mainboard",
        ],
        correct: 1,
        explanation:
            "Intel hậu tố F thường không có GPU tích hợp, nên nếu không có card đồ họa rời máy có thể không xuất hình.",
    },
    {
        question:
            "Với PC gaming, sau khi CPU đã đủ mạnh, linh kiện nào thường ảnh hưởng FPS nhiều nhất?",
        options: ["GPU / card đồ họa", "Loa", "Vỏ case RGB", "Webcam"],
        correct: 0,
        explanation:
            "Trong gaming, GPU thường ảnh hưởng FPS nhiều nhất sau khi CPU đã đủ mạnh cho game đó.",
    },
    {
        question: "Ryzen 5 5600 và Ryzen 5 7600 dùng socket nào?",
        options: [
            "5600 dùng AM4, 7600 dùng AM5",
            "Cả hai dùng LGA1700",
            "Cả hai dùng Apple Silicon",
            "5600 dùng HDMI",
        ],
        correct: 0,
        explanation:
            "Ryzen 5 5600 dùng nền tảng AM4, còn Ryzen 5 7600 dùng AM5. Chọn sai socket là không lắp được mainboard.",
    },
    {
        question: "Với Apple Silicon, điều gì cần chọn kỹ từ đầu?",
        options: [
            "RAM/SSD vì khả năng nâng cấp sau mua rất hạn chế",
            "Dây mạng",
            "Loa ngoài",
            "Màu chuột",
        ],
        correct: 0,
        explanation:
            "Mac Apple Silicon thường không nâng CPU/RAM sau mua; RAM/SSD nên chọn đúng ngay từ đầu.",
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
                    <strong className="text-green-400">
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
                <span className="text-green-400">
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
                        className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors"
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

function NextSection() {
    return (
        <div className="text-center pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">
                Bạn đã hoàn thành Phần 2 – CPU. Tiếp theo là Phần 3 về hệ thống
                bộ nhớ, vì CPU chỉ mạnh khi được “tiếp tế dữ liệu” nhanh từ
                Registers, Cache, RAM và SSD/HDD.
            </p>
            <Link
                to="/phan-3-1"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-green-500/20"
            >
                Sang Phần 3.1 — Phân cấp bộ nhớ trong máy tính{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "green" }) {
    const colorMap = {
        green: "bg-green-500/20 text-green-300",
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
            className={`rounded-2xl border p-4 flex items-center gap-4 ${highlight ? "bg-green-500/10 border-green-400/50" : softBorder(color)}`}
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
        green: "bg-green-500/10 text-green-300 border border-green-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.green;
}

function softBorder(color) {
    const map = {
        green: "bg-green-500/5 border-green-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.green;
}

function textColor(color) {
    const map = {
        green: "text-green-300",
        cyan: "text-cyan-300",
        purple: "text-purple-300",
        orange: "text-orange-300",
        blue: "text-blue-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-green-300";
}
