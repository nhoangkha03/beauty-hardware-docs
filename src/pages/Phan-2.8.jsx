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
    Factory,
    Gauge,
    Layers3,
    Lightbulb,
    Microchip,
    PackageCheck,
    Puzzle,
    Search,
    Settings,
    Sparkles,
    Thermometer,
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
                            <Factory className="text-orange-400" size={24} />
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
                    <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                        Bài 2.8
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <NanometerConcept />
                <CityAnalogy />
                <ManufacturingFlow />
                <NodeExplorer />
                <SpecsExplorer />
                <RealExamples />
                <ComparisonLab />
                <CommonMistakes />
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
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-orange-300">
                        <BookOpen size={16} /> Phần 2: CPU – Bộ xử lý trung tâm
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Quy trình sản xuất CPU
                        <span className="block text-orange-400">
                            nm – Nanometer
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        “3nm”, “5nm”, “Intel 7” không chỉ là một con số kích
                        thước. Đó là tên thế hệ công nghệ sản xuất chip, liên
                        quan đến mật độ transistor, điện năng, nhiệt và hiệu
                        năng/watt.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Microchip size={16} />} text="Transistor" />
                        <Tag icon={<Factory size={16} />} text="Process Node" />
                        <Tag
                            icon={<Sparkles size={16} />}
                            text="Photolithography"
                        />
                        <Tag icon={<Zap size={16} />} text="Efficiency" />
                        <Tag
                            icon={<Thermometer size={16} />}
                            text="Thermal Density"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="space-y-3">
                        <HeroNode
                            icon={<Cpu />}
                            label="CPU"
                            desc="Hàng tỷ transistor"
                            color="orange"
                            highlight
                        />
                        <HeroNode
                            icon={<Sparkles />}
                            label="nm / Node"
                            desc="Thế hệ công nghệ sản xuất"
                            color="cyan"
                        />
                        <HeroNode
                            icon={<Zap />}
                            label="Hiệu năng/watt"
                            desc="Mạnh hơn hoặc tiết kiệm hơn"
                            color="emerald"
                        />
                        <HeroNode
                            icon={<AlertTriangle />}
                            label="Không so máy móc"
                            desc="Intel 7 ≠ TSMC 7nm chỉ vì cùng số 7"
                            color="red"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu nm là nanometer và process node là thế hệ công nghệ sản xuất chip.",
        "Biết CPU được sản xuất qua các bước: thiết kế, wafer, quang khắc, die, đóng gói, kiểm tra.",
        "Nắm vai trò transistor, mật độ transistor, yield, die size và packaging.",
        "Hiểu vì sao node nhỏ thường tốt hơn nhưng không tự động mạnh hơn trong mọi trường hợp.",
        "Biết tránh so sánh máy móc Intel 7, TSMC N7, Samsung 5nm chỉ bằng tên node.",
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
                {goals.map((g, i) => (
                    <div
                        key={g}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-orange-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-300 flex items-center justify-center font-bold mb-4">
                            {i + 1}
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            {g}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function NanometerConcept() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: nm là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">nm</strong> là viết
                            tắt của{" "}
                            <strong className="text-cyan-300">nanometer</strong>
                            , tức nanomét.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 font-mono text-sm">
                            <p>1 nanometer = 1 phần tỷ mét</p>
                            <p>1 nm = 0.000000001 mét</p>
                        </div>
                        <p>
                            Trong CPU, các tên như 7nm, 5nm, 3nm, Intel 7 thường
                            nên hiểu là{" "}
                            <strong className="text-white">process node</strong>
                            : tên thế hệ công nghệ sản xuất bán dẫn.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <Microchip className="text-cyan-300" /> Transistor
                            là gì?
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            CPU được tạo từ hàng tỷ transistor. Transistor là
                            công tắc điện tử siêu nhỏ, bật/tắt để biểu diễn và
                            xử lý dữ liệu nhị phân 0 và 1.
                        </p>
                        <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 text-sm text-slate-300">
                            <strong className="text-orange-300">
                                Ghi nhớ:
                            </strong>{" "}
                            node nhỏ hơn thường giúp nhét nhiều transistor hơn
                            trên cùng diện tích, nhưng hiệu năng cuối cùng còn
                            phụ thuộc thiết kế CPU.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CityAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: công nghệ xây nhà"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                    <AnalogyCard
                        icon={<Factory />}
                        title="Công nghệ cũ"
                        desc="Nhà thưa hơn, ít căn hộ hơn trên cùng diện tích, có thể tốn điện/nhiệt hơn."
                        color="orange"
                    />
                    <AnalogyCard
                        icon={<Layers3 />}
                        title="Công nghệ mới"
                        desc="Xây được nhiều “căn hộ transistor” hơn trên cùng diện tích chip."
                        color="cyan"
                    />
                    <AnalogyCard
                        icon={<Zap />}
                        title="Hiệu năng/watt"
                        desc="Có thể mạnh hơn hoặc tiết kiệm điện hơn, tùy thiết kế sản phẩm."
                        color="emerald"
                    />
                </div>
            </div>
        </section>
    );
}

function ManufacturingFlow() {
    const steps = [
        {
            icon: <Brain />,
            title: "Thiết kế CPU",
            desc: "Xác định kiến trúc, nhân, cache, bộ điều khiển và mục tiêu hiệu năng.",
            color: "cyan",
        },
        {
            icon: <Puzzle />,
            title: "Thiết kế mạch logic",
            desc: "Biến ý tưởng kiến trúc thành mạch transistor và đường dẫn tín hiệu.",
            color: "purple",
        },
        {
            icon: <Factory />,
            title: "Tạo wafer silicon",
            desc: "Chuẩn bị tấm silicon tròn lớn làm nền để chế tạo chip.",
            color: "orange",
        },
        {
            icon: <Sparkles />,
            title: "Quang khắc",
            desc: "Dùng ánh sáng để in mẫu mạch siêu nhỏ lên wafer silicon.",
            color: "yellow",
        },
        {
            icon: <Microchip />,
            title: "Tạo transistor / lớp mạch",
            desc: "Hình thành hàng tỷ công tắc điện tử và dây dẫn cực nhỏ.",
            color: "emerald",
        },
        {
            icon: <Cpu />,
            title: "Cắt die & đóng gói",
            desc: "Cắt wafer thành die, gắn vào package CPU/chip, kết nối và bảo vệ chip.",
            color: "blue",
        },
        {
            icon: <CheckCircle2 />,
            title: "Kiểm tra / phân loại",
            desc: "Test lỗi, xung, điện áp, nhiệt; phân loại sản phẩm đạt chuẩn.",
            color: "red",
        },
    ];
    const [active, setActive] = useState(0);
    const item = steps[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="CPU được sản xuất như thế nào?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[310px] flex flex-col justify-between">
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
                                        {s.desc.slice(0, 60)}...
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

function NodeExplorer() {
    const nodes = {
        old: {
            title: "14nm / 12nm",
            desc: "Đời cũ hơn nhưng vẫn dùng trong nhiều chip phổ thông.",
            good: "Rẻ, sản xuất ổn định",
            bad: "Điện/nhiệt kém hơn node mới",
            example: "CPU cũ, chip phổ thông",
            color: "orange",
        },
        n7: {
            title: "7nm",
            desc: "Node hiện đại phổ biến vài năm gần đây.",
            good: "Hiệu năng/watt tốt",
            bad: "Không còn mới nhất",
            example: "AMD Ryzen 5000, nhiều SoC cũ",
            color: "cyan",
        },
        n5: {
            title: "5nm / 4nm",
            desc: "Node cao cấp hơn 7nm.",
            good: "Mật độ tốt hơn, tiết kiệm điện hơn",
            bad: "Chi phí sản xuất cao",
            example: "Nhiều chip smartphone/laptop hiện đại",
            color: "blue",
        },
        n3: {
            title: "3nm",
            desc: "Node rất tiên tiến.",
            good: "Hiệu năng/watt và mật độ cao",
            bad: "Rất đắt, sản xuất khó",
            example: "Apple M4, chip cao cấp",
            color: "emerald",
        },
        intel7: {
            title: "Intel 7",
            desc: "Tên node của Intel, không phải TSMC 7nm.",
            good: "Dùng cho nhiều CPU Intel Alder/Raptor Lake",
            bad: "Không nên so trực tiếp theo số với TSMC/Samsung",
            example: "Intel Core i5-12400F",
            color: "purple",
        },
        future: {
            title: "2nm / nhỏ hơn",
            desc: "Thế hệ tương lai/gần tương lai.",
            good: "Hứa hẹn mật độ, điện năng tốt hơn",
            bad: "Đắt, phức tạp, phụ thuộc lộ trình hãng",
            example: "Chip cao cấp tương lai",
            color: "pink",
        },
    };
    const [active, setActive] = useState("n3");
    const item = nodes[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Các tiến trình sản xuất phổ biến"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {Object.entries(nodes).map(([key, n]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(n.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <p className="font-bold">{n.title}</p>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-14 h-14 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-4`}
                        >
                            <Microchip size={28} />
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
                            label="Lưu ý"
                            value={item.bad}
                            color="orange"
                        />
                        <InfoCard
                            label="Ví dụ"
                            value={item.example}
                            color="blue"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        node: {
            icon: <Factory />,
            title: "Process Node",
            detail: "Thế hệ công nghệ sản xuất chip.",
            impact: "Node mới thường tăng mật độ transistor và hiệu năng/watt.",
        },
        nm: {
            icon: <Gauge />,
            title: "nm – Nanometer",
            detail: "Đơn vị rất nhỏ, dùng trong tên node.",
            impact: "Số nhỏ hơn thường gợi ý công nghệ mới hơn, nhưng không so máy móc giữa hãng.",
        },
        density: {
            icon: <Layers3 />,
            title: "Transistor Density",
            detail: "Mật độ transistor trên diện tích chip.",
            impact: "Mật độ cao giúp nhét nhiều logic/cache/nhân hơn.",
        },
        die: {
            icon: <Microchip />,
            title: "Die Size",
            detail: "Diện tích phần chip thật bên trong package.",
            impact: "Die lớn thường đắt hơn và khó đạt tỷ lệ chip tốt.",
        },
        yield: {
            icon: <CheckCircle2 />,
            title: "Yield",
            detail: "Tỷ lệ chip tốt sau sản xuất.",
            impact: "Yield thấp làm giá chip cao.",
        },
        efficiency: {
            icon: <Zap />,
            title: "Power Efficiency",
            detail: "Hiệu năng trên mỗi watt điện.",
            impact: "Rất quan trọng với laptop, điện thoại và datacenter.",
        },
        thermal: {
            icon: <Thermometer />,
            title: "Thermal Density",
            detail: "Mật độ nhiệt trên diện tích chip.",
            impact: "Chip nhỏ mạnh có thể khó tản nhiệt vì nhiệt tập trung.",
        },
        euv: {
            icon: <Sparkles />,
            title: "EUV Lithography",
            detail: "Quang khắc cực tím sâu cho node tiên tiến.",
            impact: "Giúp sản xuất các mẫu mạch rất nhỏ và phức tạp.",
        },
        chiplet: {
            icon: <Puzzle />,
            title: "Chiplet",
            detail: "Ghép nhiều die nhỏ thành một CPU/chip lớn.",
            impact: "Giúp tăng yield, linh hoạt thiết kế và tối ưu chi phí.",
        },
    };
    const [active, setActive] = useState("node");
    const item = specs[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="yellow"
                title="Thông số / khái niệm kỹ thuật cần biết"
                icon={<Settings />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
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
                        <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center mb-5 border border-yellow-500/20">
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
                                Tác động thực tế:
                            </strong>{" "}
                            {item.impact}
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-sm text-slate-400">
                            <strong className="text-white">
                                Công thức tư duy:
                            </strong>{" "}
                            Node mới hơn → có thể nhiều transistor hơn → có thể
                            mạnh hơn hoặc tiết kiệm điện hơn → nhưng hiệu năng
                            thực tế còn phụ thuộc thiết kế CPU.
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
            subtitle: "Tiến trình Intel 7",
            color: "purple",
            points: [
                "6 Performance-core / 12 luồng",
                "Turbo tối đa 4.40GHz",
                "18MB Intel Smart Cache",
                "65W Processor Base Power",
                "Không cần node mới nhất vẫn rất thực dụng",
            ],
            lesson: "Một CPU có thể đáng mua nếu hiệu năng, giá, điện năng và nhu cầu sử dụng cân bằng.",
        },
        {
            icon: <Cpu />,
            title: "AMD Ryzen 5 5600",
            subtitle: "CPU phổ thông trên node 7nm",
            color: "cyan",
            points: [
                "6 nhân / 12 luồng",
                "Base 3.5GHz, boost 4.4GHz",
                "TDP 65W",
                "L3 Cache 32MB",
                "Giá/hiệu năng tốt cho AM4",
            ],
            lesson: "Dù không còn node mới nhất, CPU 7nm vẫn rất thực dụng trong phân khúc phổ thông.",
        },
        {
            icon: <Sparkles />,
            title: "Apple M4",
            subtitle: "3nm thế hệ thứ hai",
            color: "emerald",
            points: [
                "28 tỷ transistor",
                "CPU tối đa 10 nhân",
                "GPU 10 nhân",
                "Neural Engine 16 nhân",
                "Băng thông bộ nhớ 120GB/s trên MacBook Pro M4",
            ],
            lesson: "Node nhỏ như 3nm rất quan trọng với laptop/tablet vì giúp tăng hiệu năng trong khi kiểm soát pin và nhiệt.",
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

function ComparisonLab() {
    const scenarios = {
        laptop: {
            title: "Laptop / điện thoại",
            result: "Node mới và hiệu năng/watt rất quan trọng vì ảnh hưởng pin, nhiệt, độ ồn quạt và hiệu năng duy trì.",
            color: "emerald",
            icon: <Zap />,
        },
        desktop: {
            title: "PC desktop",
            result: "Ngoài node, hãy ưu tiên hiệu năng thực tế, giá, socket, RAM, tản nhiệt và nhu cầu sử dụng.",
            color: "blue",
            icon: <Cpu />,
        },
        compare: {
            title: "Intel 7 vs TSMC 7nm",
            result: "Không nên so trực tiếp chỉ bằng số 7. Cần xem mật độ transistor, hiệu năng/watt và sản phẩm thực tế.",
            color: "orange",
            icon: <AlertTriangle />,
        },
    };
    const [active, setActive] = useState("compare");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="blue"
                title="Lab: đọc nm đúng cách"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
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
                    className={`${softBorder(item.color)} border rounded-3xl p-6`}
                >
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

function CommonMistakes() {
    const mistakes = [
        {
            wrong: "nm nhỏ hơn chắc chắn CPU mạnh hơn",
            right: "nm nhỏ hơn thường là lợi thế, nhưng hiệu năng còn phụ thuộc kiến trúc, nhân/luồng, xung, cache, RAM, tản nhiệt và phần mềm.",
        },
        {
            wrong: "Intel 7 giống hệt TSMC 7nm",
            right: "Tên node giữa các hãng không thể so trực tiếp chỉ bằng con số. Cần xem sản phẩm thực tế và benchmark.",
        },
        {
            wrong: "Chip nhỏ hơn thì luôn mát hơn",
            right: "Node mới có thể tiết kiệm điện hơn, nhưng chip mạnh hơn có thể tiêu thụ điện cao và nhiệt tập trung hơn.",
        },
        {
            wrong: "Chỉ CPU mới có tiến trình nm",
            right: "GPU, chip điện thoại, chip AI, RAM, NAND, chipset cũng có công nghệ sản xuất riêng.",
        },
    ];
    const tips = [
        "Xem node sản xuất như yếu tố tham khảo, không phải yếu tố quyết định duy nhất.",
        "Laptop: chú ý hiệu năng/watt vì liên quan pin, nhiệt, độ ồn và độ mỏng nhẹ.",
        "Desktop: xem benchmark, giá, socket, RAM hỗ trợ, tản nhiệt và nhu cầu thực tế.",
        "Đừng so CPU chỉ bằng “7nm vs 10nm vs Intel 7”.",
        "Node nhỏ hơn thường đắt hơn giai đoạn đầu, nên sản phẩm mới nhất chưa chắc có giá/hiệu năng tốt nhất.",
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
                        <Lightbulb /> Mẹo đọc thông số nm
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
                            <p>nm = nanometer = 1 phần tỷ mét</p>
                            <p className="text-slate-300">
                                Process node = thế hệ công nghệ sản xuất chip
                            </p>
                            <br />
                            <p className="text-slate-500"># CPU production</p>
                            <p className="text-slate-300">
                                Thiết kế → wafer → quang khắc → transistor → die
                                → package → test
                            </p>
                            <br />
                            <p className="text-slate-500"># Ghi nhớ</p>
                            <p className="text-slate-300">
                                Node nhỏ hơn thường tốt hơn, nhưng không tự động
                                mạnh hơn trong mọi trường hợp.
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
        question: "nm trong sản xuất CPU là viết tắt của gì?",
        options: [
            "Normal Memory",
            "Nanometer",
            "Network Module",
            "New Mainboard",
        ],
        correct: 1,
        explanation: "nm là nanometer, tức nanomét, một đơn vị độ dài cực nhỏ.",
    },
    {
        question: "Process node trong CPU hiện đại nên hiểu đúng là gì?",
        options: [
            "Tên thế hệ công nghệ sản xuất chip",
            "Dung lượng ổ cứng",
            "Số cổng USB trên mainboard",
            "Loại màn hình",
        ],
        correct: 0,
        explanation:
            "Process node là tên thế hệ công nghệ sản xuất bán dẫn/chip.",
    },
    {
        question: "Vì sao không nên chỉ nhìn nm để kết luận CPU mạnh yếu?",
        options: [
            "Vì hiệu năng còn phụ thuộc kiến trúc, nhân, cache, xung nhịp, điện năng và tản nhiệt",
            "Vì nm chỉ dùng cho loa",
            "Vì CPU không có transistor",
            "Vì RAM quyết định toàn bộ hiệu năng CPU",
        ],
        correct: 0,
        explanation:
            "Node là một yếu tố, nhưng hiệu năng thực tế còn phụ thuộc toàn bộ thiết kế CPU và hệ thống.",
    },
    {
        question: "Photolithography là gì?",
        options: [
            "Quang khắc dùng ánh sáng để in mẫu mạch siêu nhỏ lên wafer",
            "Ổ cứng lưu ảnh",
            "Cách thay quạt CPU",
            "Chuẩn cáp màn hình",
        ],
        correct: 0,
        explanation:
            "Quang khắc dùng ánh sáng để tạo các mẫu mạch cực nhỏ trên wafer silicon.",
    },
    {
        question:
            "Intel 7 có nên so trực tiếp với TSMC 7nm chỉ vì cùng số 7 không?",
        options: [
            "Có, luôn giống hệt nhau",
            "Không, tên node có quy ước riêng từng hãng",
            "Intel 7 là RAM",
            "TSMC 7nm là màn hình",
        ],
        correct: 1,
        explanation:
            "Tên node hiện đại có yếu tố quy ước/marketing riêng; cần xem thông số thực tế và benchmark.",
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
    if (finished)
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
                Bạn đã hiểu nm/process node là thế hệ công nghệ sản xuất chip,
                ảnh hưởng đến mật độ transistor, điện năng, nhiệt và hiệu
                năng/watt. Tiếp theo là học các hãng CPU phổ biến.
            </p>
            <Link
                to="/phan-2-9"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20"
            >
                Bài tiếp theo: 2.9 — Các hãng CPU phổ biến: Intel, AMD, Apple
                Silicon <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "orange" }) {
    const colorMap = {
        orange: "bg-orange-500/20 text-orange-300",
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
function HeroNode({ icon, label, desc, color, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 flex items-center gap-4 ${highlight ? "bg-orange-500/10 border-orange-400/50" : softBorder(color)}`}
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
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.orange;
}
function softBorder(color) {
    const map = {
        orange: "bg-orange-500/5 border-orange-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.orange;
}
function textColor(color) {
    const map = {
        orange: "text-orange-300",
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-orange-300";
}
