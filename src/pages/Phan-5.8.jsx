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
    Film,
    Gamepad2,
    Gauge,
    HardDrive,
    Layers3,
    Lightbulb,
    Monitor,
    PackageCheck,
    PlugZap,
    Puzzle,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    Thermometer,
    Video,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-rose-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-rose-500/10 border border-rose-400/30 flex items-center justify-center shadow-lg shadow-rose-500/10">
                            <Search className="text-rose-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 5: GPU — Bộ xử lý đồ họa
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-rose-300 bg-rose-400/10 px-3 py-1 rounded-full border border-rose-400/20">
                        Bài 5.8
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <CarAnalogy />
                <DecisionFlow />
                <NeedMatrix />
                <VramGuide />
                <SpecsExplorer />
                <PsuCaseChecklist />
                <BrandGuide />
                <BenchmarkGuide />
                <RealExamples />
                <PickerLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextPart />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-rose-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-rose-300">
                        <BookOpen size={16} /> Tổng kết Phần 5: GPU
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Cách chọn GPU
                        <span className="block text-rose-400">
                            phù hợp nhu cầu
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Đừng bắt đầu bằng “card nào mạnh nhất?”. Hãy bắt đầu
                        bằng nhu cầu, màn hình, ngân sách, VRAM, nguồn, case,
                        hãng GPU, benchmark và bảo hành.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Gamepad2 size={16} />} text="Gaming" />
                        <Tag icon={<Brain size={16} />} text="AI / ML" />
                        <Tag icon={<Film size={16} />} text="Render / Video" />
                        <Tag icon={<Database size={16} />} text="VRAM" />
                        <Tag icon={<PlugZap size={16} />} text="PSU / Case" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Monitor />}
                            label="Màn hình"
                            desc="1080p / 1440p / 4K"
                            color="cyan"
                            highlight
                        />
                        <HeroTile
                            icon={<Database />}
                            label="VRAM"
                            desc="8GB / 12GB / 16GB+"
                            color="rose"
                        />
                        <HeroTile
                            icon={<PlugZap />}
                            label="PSU + Case"
                            desc="Nguồn đủ, card vừa"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Gauge />}
                            label="Benchmark"
                            desc="FPS, 1% low, nhiệt, điện"
                            color="emerald"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Công thức chọn GPU</p>
                        <p>Nhu cầu → Màn hình → VRAM</p>
                        <p className="text-rose-300">
                            → PSU/case → Hãng → Benchmark → Giá
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Biết chọn GPU theo nhu cầu chính: văn phòng, eSports, AAA 1080p, 1440p, 4K, AI, render, dựng video.",
        "Biết gắn độ phân giải màn hình với mức GPU và VRAM phù hợp.",
        "Biết kiểm tra PSU, case, đầu cấp nguồn, nhiệt độ và kích thước card trước khi mua.",
        "Biết chọn hãng GPU theo phần mềm: NVIDIA, AMD Radeon hoặc Intel Arc.",
        "Biết đọc benchmark thực tế: FPS trung bình, 1% low, nhiệt độ, điện tiêu thụ, độ ồn và bảo hành.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="rose"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-rose-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-300 flex items-center justify-center font-bold mb-4">
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
                title="Khái niệm cốt lõi: chọn GPU là chọn theo bài toán sử dụng"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">GPU phù hợp</strong> là GPU
                    đáp ứng tốt nhu cầu trong ngân sách cho phép, đồng thời
                    không gây mất cân bằng với CPU, RAM, PSU, case và màn hình.
                </p>
                <div className="grid md:grid-cols-5 gap-4">
                    <RoleCard
                        icon={<Cpu />}
                        title="Văn phòng"
                        device="iGPU đủ"
                        desc="Word, Excel, Chrome, Zoom, học online."
                        color="cyan"
                    />
                    <RoleCard
                        icon={<Gamepad2 />}
                        title="Gaming 1080p"
                        device="GPU phổ thông"
                        desc="eSports, game AAA 1080p, FPS ổn định."
                        color="emerald"
                    />
                    <RoleCard
                        icon={<Monitor />}
                        title="Gaming 1440p"
                        device="Tầm trung khá+"
                        desc="12GB VRAM trở lên an toàn hơn."
                        color="blue"
                    />
                    <RoleCard
                        icon={<Sparkles />}
                        title="Gaming 4K"
                        device="GPU cao cấp"
                        desc="VRAM lớn, bandwidth cao, upscaling tốt."
                        color="purple"
                    />
                    <RoleCard
                        icon={<Brain />}
                        title="AI/Render"
                        device="VRAM + ecosystem"
                        desc="CUDA/ROCm, driver, phần mềm hỗ trợ."
                        color="orange"
                    />
                </div>
                <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Chọn sai GPU = quá yếu, quá dư, không hợp phần mềm, không đủ
                    nguồn, không vừa case hoặc lãng phí ngân sách.
                </div>
            </div>
        </section>
    );
}

function CarAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: chọn xe đúng việc"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-4 gap-4">
                <AnalogyCard
                    icon={<Cpu />}
                    title="Đi học / đi làm"
                    desc="Văn phòng học tập chỉ cần iGPU, giống đi phố không cần xe đua."
                    color="cyan"
                />
                <AnalogyCard
                    icon={<Gamepad2 />}
                    title="Chạy nhanh hằng ngày"
                    desc="Gaming 1080p cần GPU phổ thông/tầm trung, tối ưu FPS/giá."
                    color="emerald"
                />
                <AnalogyCard
                    icon={<Monitor />}
                    title="Đường dài tốc độ cao"
                    desc="1440p/4K cần xe khỏe hơn: nhiều VRAM, bandwidth, sức mạnh xử lý."
                    color="blue"
                />
                <AnalogyCard
                    icon={<Brain />}
                    title="Chở hàng nặng"
                    desc="AI/render cần VRAM lớn, driver ổn, phần mềm hỗ trợ đúng hãng."
                    color="orange"
                />
            </div>
        </section>
    );
}

function DecisionFlow() {
    const steps = [
        {
            icon: <Search />,
            title: "Xác định nhu cầu",
            desc: "Văn phòng, gaming, dựng video, render 3D, AI/ML, livestream hay hỗn hợp?",
        },
        {
            icon: <Monitor />,
            title: "Xác định màn hình",
            desc: "1080p 60Hz, 1080p 144Hz, 1440p 144Hz hay 4K? Màn hình quyết định tải GPU.",
        },
        {
            icon: <Gauge />,
            title: "Xác định FPS / chất lượng mong muốn",
            desc: "eSports cần FPS thật và latency thấp; game AAA cần hình đẹp, Ray Tracing, upscaling.",
        },
        {
            icon: <Database />,
            title: "Chọn mức VRAM",
            desc: "1080p nên 8GB; 1440p nên 12GB+; 4K/render/AI nên 16GB–24GB+ tùy ngân sách.",
        },
        {
            icon: <PlugZap />,
            title: "Kiểm tra PSU, case, tản nhiệt",
            desc: "Nguồn đủ watt, đủ đầu cấp nguồn, card vừa case, case thoáng.",
        },
        {
            icon: <Sparkles />,
            title: "Chọn hãng GPU",
            desc: "NVIDIA cho CUDA/AI/DLSS/RT; AMD cho raster/giá; Intel Arc khi giá tốt và driver/game ổn.",
        },
        {
            icon: <Gauge />,
            title: "Xem benchmark đúng nhu cầu",
            desc: "Đúng game/phần mềm, độ phân giải, setting, FPS trung bình, 1% low, nhiệt, điện, độ ồn.",
        },
        {
            icon: <ShieldCheck />,
            title: "So giá và bảo hành",
            desc: "Giá thực tế, cửa hàng uy tín, bảo hành, đổi trả, tình trạng card mới/cũ.",
        },
    ];
    const [active, setActive] = useState(0);
    const step = steps[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Quy trình chọn GPU từng bước"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[330px] flex flex-col justify-between">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center justify-center mb-5">
                                {React.cloneElement(step.icon, { size: 32 })}
                            </div>
                            <p className="text-purple-300 text-sm font-bold mb-2">
                                Bước {active + 1}/{steps.length}
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {step.desc}
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
                                className={`w-full flex items-center gap-4 p-3 rounded-2xl border text-left transition-all ${active === i ? "bg-purple-500/5 border-purple-500/20 text-white" : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`}
                            >
                                <div
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${active === i ? "bg-purple-500/10 text-purple-300 border border-purple-500/20" : "bg-slate-900 text-slate-500"}`}
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

function NeedMatrix() {
    const rows = [
        [
            "Văn phòng / học tập / xem phim",
            "GPU tích hợp",
            "Không cần VRAM riêng",
            "Đừng mua GPU rời đắt tiền nếu chỉ Word/Excel/Chrome",
        ],
        [
            "eSports 1080p",
            "GPU phổ thông",
            "6GB–8GB thường ổn",
            "Ưu tiên FPS thật, 1% low, CPU đủ mạnh",
        ],
        [
            "AAA 1080p",
            "RTX 4060 / RX 7600 / Arc B580 tùy giá",
            "Tối thiểu 8GB",
            "Nếu bật RT, NVIDIA thường lợi hơn",
        ],
        [
            "Gaming 1440p",
            "RTX 4070/SUPER, RX 7800 XT hoặc tương đương",
            "12GB trở lên",
            "Cần VRAM, bandwidth, hiệu năng raster và upscaling",
        ],
        [
            "Gaming 4K",
            "GPU cao cấp",
            "16GB trở lên nếu muốn dùng lâu",
            "Gần như cần DLSS/FSR/XeSS trong game nặng",
        ],
        [
            "Dựng video / render 3D",
            "GPU 8GB–16GB+ tùy project",
            "12GB–16GB+ dễ chịu",
            "Kiểm tra phần mềm, encoder, driver",
        ],
        [
            "AI / ML local",
            "Ưu tiên NVIDIA cho người mới",
            "12GB–24GB+ tùy model",
            "Model phải vừa VRAM trước đã",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Phân loại GPU theo nhu cầu sử dụng"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[980px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Nhu cầu</th>
                            <th className="p-4 text-blue-300">GPU phù hợp</th>
                            <th className="p-4 text-rose-300">VRAM gợi ý</th>
                            <th className="p-4">Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([need, gpu, vram, note]) => (
                            <tr
                                key={need}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-white font-bold">
                                    {need}
                                </td>
                                <td className="p-4 text-slate-300">{gpu}</td>
                                <td className="p-4 text-slate-300">{vram}</td>
                                <td className="p-4 text-slate-300">{note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function VramGuide() {
    const rows = [
        ["4GB", "Văn phòng, game rất nhẹ, GPU đời cũ", "red"],
        ["6GB", "eSports, game nhẹ 1080p", "orange"],
        ["8GB", "Gaming 1080p phổ thông", "cyan"],
        [
            "12GB",
            "Gaming 1440p, dựng video khá, AI nhập môn dễ chịu hơn",
            "emerald",
        ],
        ["16GB", "1440p/4K, 3D/render, project lớn hơn", "blue"],
        ["24GB+", "AI local, render nặng, creator chuyên sâu", "purple"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="rose"
                title="Chọn VRAM bao nhiêu?"
                icon={<Database />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[720px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">VRAM</th>
                            <th className="p-4">Nên dùng cho</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([vram, fit, color]) => (
                            <tr
                                key={vram}
                                className="border-t border-slate-800"
                            >
                                <td
                                    className={`p-4 font-extrabold ${textColor(color)}`}
                                >
                                    {vram}
                                </td>
                                <td className="p-4 text-slate-300">{fit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                VRAM nhiều không tự động làm GPU mạnh hơn. Vẫn phải xem chip
                GPU, bandwidth, kiến trúc, driver và benchmark.
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        resolution: {
            icon: <Monitor />,
            title: "Độ phân giải màn hình",
            detail: "1080p, 1440p và 4K tạo tải GPU khác nhau rất lớn.",
            impact: "1440p có khoảng 78% điểm ảnh nhiều hơn 1080p; 4K có khoảng 4 lần số điểm ảnh của 1080p.",
        },
        vram: {
            icon: <Database />,
            title: "VRAM",
            detail: "Bộ nhớ đồ họa chứa texture, model, frame buffer, scene hoặc model AI.",
            impact: "1080p nên 8GB; 1440p nên 12GB+; 4K/render/AI cần 16GB–24GB+ tùy workload.",
        },
        bus: {
            icon: <Workflow />,
            title: "Bus Width / Bandwidth",
            detail: "Độ rộng và lượng dữ liệu truyền giữa GPU và VRAM mỗi giây.",
            impact: "1080p bus 128-bit vẫn có thể ổn; 1440p/4K cần bandwidth tốt hơn.",
        },
        psu: {
            icon: <PlugZap />,
            title: "TDP/TBP và PSU",
            detail: "GPU ăn điện bao nhiêu, nguồn có đủ watt và đủ đầu cấp nguồn không.",
            impact: "Nguồn kém có thể làm máy sập, treo, reset khi chơi game.",
        },
        case: {
            icon: <PackageCheck />,
            title: "Kích thước card",
            detail: "Chiều dài, độ dày 2-slot/2.5-slot/3-slot, vướng radiator/ổ cứng/dây nguồn không.",
            impact: "GPU cao cấp có thể rất dài, nặng và cần case thoáng.",
        },
        benchmark: {
            icon: <Gauge />,
            title: "Benchmark thực tế",
            detail: "Thông số chỉ là khả năng trên giấy, benchmark mới cho biết hiệu năng thật.",
            impact: "Xem đúng game/phần mềm, độ phân giải, setting, FPS trung bình, 1% low, nhiệt, điện, độ ồn.",
        },
    };
    const [active, setActive] = useState("resolution");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số kỹ thuật quan trọng khi chọn GPU"
                icon={<Settings />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
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

function PsuCaseChecklist() {
    const psu = [
        "GPU ăn bao nhiêu watt?",
        "PSU có đủ công suất không?",
        "PSU có chất lượng ổn không?",
        "Có đủ đầu PCIe 8-pin / 12VHPWR không?",
        "PSU đã dùng bao lâu?",
        "Đường 12V có ổn định không?",
    ];
    const card = [
        "Card dài bao nhiêu mm?",
        "Card dày 2-slot, 2.5-slot hay 3-slot?",
        "Case hỗ trợ tối đa bao nhiêu mm?",
        "Có vướng radiator, ổ cứng hoặc dây nguồn không?",
        "Case có thoáng không?",
        "Card nặng có cần chống sag không?",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="orange"
                title="Checklist PSU và case trước khi mua"
                icon={<PlugZap />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ChecklistCard
                    title="Nguồn PSU"
                    icon={<PlugZap />}
                    items={psu}
                    color="orange"
                />
                <ChecklistCard
                    title="Case và kích thước card"
                    icon={<PackageCheck />}
                    items={card}
                    color="cyan"
                />
            </div>
        </section>
    );
}

function BrandGuide() {
    const rows = [
        ["Gaming 1080p giá tốt", "AMD / NVIDIA / Intel tùy giá"],
        ["Ray Tracing, DLSS", "NVIDIA"],
        ["AI / CUDA / Stable Diffusion", "NVIDIA"],
        ["Gaming raster hiệu năng/giá", "AMD"],
        [
            "VRAM tốt trong giá thấp, thích thử công nghệ mới",
            "Intel Arc, nhưng cần xem driver",
        ],
        [
            "Dựng video / livestream",
            "NVIDIA phổ biến; AMD/Intel đời mới cũng đáng cân nhắc",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="emerald"
                title="Chọn hãng GPU theo phần mềm và nhu cầu"
                icon={<Sparkles />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Nhu cầu</th>
                            <th className="p-4 text-emerald-300">
                                Hãng thường phù hợp
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([need, brand]) => (
                            <tr
                                key={need}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-white font-bold">
                                    {need}
                                </td>
                                <td className="p-4 text-slate-300">{brand}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-emerald-300">Quy tắc:</strong> chọn theo
                phần mềm/game bạn dùng, không chọn theo fan hãng. Cần CUDA/AI
                thì NVIDIA thường dễ hơn; gaming raster giá tốt thì AMD rất đáng
                cân nhắc; Intel Arc cần kiểm tra driver và game cụ thể.
            </div>
        </section>
    );
}

function BenchmarkGuide() {
    const items = [
        "Đúng game hoặc phần mềm bạn dùng",
        "Đúng độ phân giải: 1080p / 1440p / 4K",
        "Đúng setting: Low / Medium / High / Ultra / Ray Tracing",
        "FPS trung bình",
        "1% low FPS",
        "Nhiệt độ",
        "Điện tiêu thụ",
        "Độ ồn",
        "VRAM sử dụng",
        "Driver và phiên bản game",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="purple"
                title="Benchmark thực tế: xem gì cho đúng?"
                icon={<Gauge />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                    {items.map((item, i) => (
                        <InfoCard
                            key={item}
                            label={`Mục ${i + 1}`}
                            value={item}
                            color={i === 4 ? "rose" : "purple"}
                        />
                    ))}
                </div>
                <div className="mt-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-purple-300">
                        1% low FPS rất quan trọng:
                    </strong>{" "}
                    FPS trung bình cao nhưng 1% low thấp thì game vẫn có thể
                    khựng, giật hoặc không mượt.
                </div>
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Cpu />,
            title: "Máy học tập, văn phòng",
            subtitle: "Không chơi game nặng",
            color: "cyan",
            points: [
                "Không cần GPU rời",
                "Chọn CPU có GPU tích hợp",
                "Dành tiền cho RAM 16GB và SSD tốt",
                "Tránh Intel hậu tố F nếu không mua card rời",
                "Hợp Intel UHD/Iris Xe, AMD Radeon iGPU, Apple M-series",
            ],
            lesson: "Đừng mua RTX 4060 chỉ để gõ Word.",
        },
        {
            icon: <Gamepad2 />,
            title: "PC gaming 1080p phổ thông",
            subtitle: "eSports + AAA 1080p",
            color: "emerald",
            points: [
                "RTX 4060 8GB: DLSS, CUDA, tiết kiệm điện",
                "RX 7600 8GB: raster/giá tốt nếu giá hợp lý",
                "Arc B580: cân nhắc nếu game/driver ổn",
                "Ưu tiên FPS thật, 1% low, VRAM 8GB",
                "Không cần GPU quá cao cấp nếu chỉ 1080p",
            ],
            lesson: "Cần CUDA/DLSS/RT tốt hơn chọn NVIDIA; ưu tiên giá/FPS raster thì AMD đáng cân nhắc.",
        },
        {
            icon: <Monitor />,
            title: "Gaming 1440p + sáng tạo nhẹ",
            subtitle: "2K 144Hz, game AAA, Photoshop/Blender nhẹ",
            color: "blue",
            points: [
                "RTX 4070 / 4070 SUPER",
                "RX 7800 XT",
                "VRAM 12GB trở lên",
                "Bus/bandwidth càng tốt càng ổn",
                "PSU chất lượng tốt",
            ],
            lesson: "1440p cần GPU khỏe hơn 1080p đáng kể, đặc biệt với texture cao và game AAA.",
        },
        {
            icon: <Brain />,
            title: "AI local / Stable Diffusion / LLM nhỏ",
            subtitle: "Học PyTorch, chạy model local",
            color: "purple",
            points: [
                "Ưu tiên NVIDIA cho người mới",
                "VRAM tối thiểu 12GB nếu ngân sách cho phép",
                "16GB/24GB tốt hơn cho workload lớn",
                "CUDA phổ biến, nhiều hướng dẫn",
                "Không chọn chỉ theo FPS game",
            ],
            lesson: "AI local: mô hình phải vừa VRAM trước đã.",
        },
        {
            icon: <Film />,
            title: "Render / dựng video chuyên hơn",
            subtitle: "Premiere, DaVinci, Blender, video 4K",
            color: "orange",
            points: [
                "VRAM 12GB–16GB trở lên",
                "Driver ổn định",
                "Encoder tốt",
                "Phần mềm hỗ trợ tốt",
                "NVIDIA an toàn nếu dùng CUDA/OptiX hoặc Studio workflow",
            ],
            lesson: "Dựng video không chỉ cần GPU mạnh; còn phụ thuộc codec, CPU, RAM, SSD và phần mềm.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="pink"
                title="Ví dụ thực tế cụ thể"
                icon={<PackageCheck />}
            />
            <div className="grid lg:grid-cols-2 gap-4">
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

function PickerLab() {
    const scenarios = {
        office: {
            icon: <Cpu />,
            title: "Văn phòng / học tập",
            answer: "Không cần GPU rời. Chọn CPU có iGPU, RAM 16GB và SSD tốt sẽ hợp lý hơn nhiều.",
            color: "cyan",
        },
        esport: {
            icon: <Gamepad2 />,
            title: "Valorant / CS2 1080p 144Hz",
            answer: "Cần FPS cao, 1% low ổn định, CPU đủ mạnh và màn hình Hz cao. GPU phổ thông thường đủ, ray tracing không quan trọng.",
            color: "emerald",
        },
        cyber: {
            icon: <Sparkles />,
            title: "Cyberpunk 1440p + RT",
            answer: "Nên chọn GPU mạnh hơn, ưu tiên NVIDIA RTX nếu đặt nặng Ray Tracing và DLSS.",
            color: "rose",
        },
        ai: {
            icon: <Brain />,
            title: "AI local",
            answer: "Ưu tiên NVIDIA, VRAM 12GB trở lên nếu ngân sách cho phép. 16GB/24GB tốt hơn nhiều cho workload lớn.",
            color: "purple",
        },
        used: {
            icon: <Search />,
            title: "Mua GPU cũ",
            answer: "Không chỉ test lên hình. Cần test full load, nhiệt, quạt, artifact, crash, bảo hành, lịch sử đào coin/sửa chữa.",
            color: "orange",
        },
    };
    const [active, setActive] = useState("cyber");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="12"
                color="blue"
                title="Lab: chọn GPU theo tình huống"
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
            wrong: "Cứ mua GPU mạnh nhất trong tầm tiền là đúng",
            right: "GPU mạnh nhưng không hợp nhu cầu vẫn là lãng phí. Văn phòng không cần RTX 4070; 1080p eSports không cần RTX 4090.",
        },
        {
            wrong: "Chỉ nhìn VRAM để chọn card",
            right: "VRAM quan trọng nhưng còn phải xem kiến trúc, nhân xử lý, bus width, bandwidth, TDP/TBP, driver và benchmark.",
        },
        {
            wrong: "Không kiểm tra PSU trước khi mua GPU",
            right: "GPU rời có thể yêu cầu nguồn tốt, đủ watt, đủ đầu cấp nguồn và chất lượng ổn định.",
        },
        {
            wrong: "Card nào lắp vào case cũng vừa",
            right: "GPU có chiều dài, độ dày và yêu cầu không gian khác nhau. Card cao cấp có thể rất dài và nặng.",
        },
        {
            wrong: "GPU cũ chỉ cần test lên hình là được",
            right: "Lên hình không chứng minh card ổn định. Cần test full load, nhiệt, quạt, artifact, crash, bảo hành và lịch sử sửa chữa.",
        },
    ];
    const tips = [
        "Bước 1: xác định nhu cầu chính.",
        "Bước 2: xác định màn hình và FPS mong muốn.",
        "Bước 3: chọn mức VRAM phù hợp.",
        "Bước 4: kiểm tra PSU, case, đầu cấp nguồn, nhiệt độ.",
        "Bước 5: chọn hãng theo game/phần mềm.",
        "Bước 6: xem benchmark đúng nhu cầu, có 1% low và nhiệt độ.",
        "Bước 7: so giá, bảo hành, cửa hàng và chính sách đổi trả.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="13"
                color="red"
                title="Sai lầm phổ biến & checklist thực chiến"
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
                        <Lightbulb /> Checklist chọn GPU
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
                        <span className="bg-rose-500/20 text-rose-300 p-2 rounded-xl">
                            14
                        </span>{" "}
                        Tóm tắt & Kiểm tra cuối phần
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-rose-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                Chọn GPU = chọn theo nhu cầu + màn hình + ngân
                                sách
                            </p>
                            <br />
                            <p className="text-slate-500"># Quy trình</p>
                            <p className="text-slate-300">
                                Nhu cầu → Màn hình → FPS/setting
                            </p>
                            <p className="text-slate-300">
                                → VRAM → PSU/case → Hãng
                            </p>
                            <p className="text-slate-300">
                                → Benchmark → Giá/bảo hành
                            </p>
                            <br />
                            <p className="text-slate-500"># Không quên</p>
                            <p className="text-slate-300">
                                1% low • Nhiệt độ • Điện • Độ ồn • Driver • Phần
                                mềm
                            </p>
                            <br />
                            <p className="text-red-300">
                                Đừng chỉ nhìn VRAM hoặc tên card.
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
        question: "Khi chọn GPU, câu hỏi đầu tiên nên là gì?",
        options: [
            "Card nào nhiều đèn RGB nhất?",
            "Mình dùng GPU cho nhu cầu gì và màn hình độ phân giải bao nhiêu?",
            "Card nào nặng nhất?",
            "Card nào có hộp đẹp nhất?",
        ],
        correct: 1,
        explanation:
            "Chọn GPU phải bắt đầu từ nhu cầu và màn hình, sau đó mới tới VRAM, hãng, benchmark, PSU/case và giá.",
    },
    {
        question: "Với gaming 1440p hiện nay, mức VRAM nào thường an toàn hơn?",
        options: ["2GB", "4GB", "12GB trở lên", "Không cần VRAM"],
        correct: 2,
        explanation:
            "1440p có nhiều điểm ảnh hơn 1080p đáng kể, nên 12GB VRAM trở lên thường an toàn hơn với game mới và texture cao.",
    },
    {
        question:
            "Nếu học AI local và muốn ít lỗi môi trường nhất, hãng GPU nào thường dễ bắt đầu hơn?",
        options: ["NVIDIA", "AMD", "Intel Arc", "Không hãng nào chạy được AI"],
        correct: 0,
        explanation:
            "NVIDIA thường dễ bắt đầu hơn cho AI local nhờ CUDA phổ biến, nhiều tutorial và framework hỗ trợ rộng.",
    },
    {
        question:
            "Trước khi mua GPU rời, cần kiểm tra linh kiện nào đặc biệt quan trọng?",
        options: [
            "PSU và case",
            "Loa máy tính",
            "Bàn phím cơ",
            "Chuột không dây",
        ],
        correct: 0,
        explanation:
            "GPU rời cần nguồn đủ công suất, đủ đầu cấp nguồn, case vừa card và thoáng khí.",
    },
    {
        question: "Vì sao không nên chỉ nhìn VRAM khi chọn GPU?",
        options: [
            "Vì VRAM không tồn tại",
            "Vì hiệu năng còn phụ thuộc kiến trúc, nhân xử lý, bus, bandwidth, driver và benchmark thực tế",
            "Vì VRAM chỉ dùng cho âm thanh",
            "Vì GPU càng ít VRAM càng mạnh",
        ],
        correct: 1,
        explanation:
            "VRAM quan trọng nhưng không đủ. Cần xem cả kiến trúc, nhân xử lý, bus, bandwidth, driver và benchmark.",
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
                    Hoàn thành Phần 5!
                </h4>
                <p className="text-slate-400 mb-6">
                    Bạn trả lời đúng{" "}
                    <strong className="text-rose-400">
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
                <span className="text-rose-400">
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
                        className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hoàn thành Phần 5 – GPU. Tiếp theo là Phần 6 – Mainboard,
                bắt đầu với vai trò trung tâm kết nối CPU, RAM, GPU, SSD, cổng
                I/O và nguồn trong toàn bộ hệ thống.
            </p>
            <Link
                to="/phan-6-1"
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-rose-500/20"
            >
                Sang Phần 6: 6.1 — Mainboard là gì? Vai trò trung tâm kết nối{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "rose" }) {
    const colorMap = {
        rose: "bg-rose-500/20 text-rose-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
        blue: "bg-blue-500/20 text-blue-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
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
function HeroTile({ icon, label, desc, color, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-cyan-500/10 border-cyan-400/50" : softBorder(color)}`}
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
function RoleCard({ icon, title, device, desc, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-3xl p-5`}>
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center mb-4`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
            <p className={`${textColor(color)} font-semibold text-sm mb-2`}>
                {device}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
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
function ChecklistCard({ title, icon, items, color }) {
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
        rose: "bg-rose-500/10 text-rose-300 border border-rose-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.rose;
}
function softBorder(color) {
    const map = {
        rose: "bg-rose-500/5 border-rose-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.rose;
}
function textColor(color) {
    const map = {
        rose: "text-rose-300",
        cyan: "text-cyan-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-rose-300";
}
