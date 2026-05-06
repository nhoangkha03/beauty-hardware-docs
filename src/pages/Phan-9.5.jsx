import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    Cpu,
    Fan,
    Gamepad2,
    Gauge,
    HardDrive,
    Layers3,
    Lightbulb,
    Monitor,
    PackageCheck,
    Puzzle,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    Thermometer,
    Wind,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-red-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-red-500/10 border border-red-400/30 flex items-center justify-center shadow-lg shadow-red-500/10">
                            <Thermometer className="text-red-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 9: Tản nhiệt máy tính
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-red-300 bg-red-400/10 px-3 py-1 rounded-full border border-red-400/20">
                        Bài 9.5
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <EngineAnalogy />
                <ThermalFlowSimulator />
                <TemperatureTables />
                <GpuHotspotGuide />
                <SpecsExplorer />
                <RealExamples />
                <TroubleshootingFlow />
                <MonitoringLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-red-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-red-300">
                        <BookOpen size={16} /> Phần 9: Safe Temperature
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Nhiệt độ an toàn
                        <span className="block text-red-400">
                            cho CPU và GPU
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Quạt hú, FPS tụt sau 15–30 phút, laptop nóng rõ rệt — đó
                        có thể là dấu hiệu CPU/GPU đang quá nóng hoặc thermal
                        throttling. Biết đọc nhiệt độ giúp bạn xử lý đúng, không
                        hoảng sai.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="CPU Temp" />
                        <Tag icon={<Gamepad2 size={16} />} text="GPU Temp" />
                        <Tag
                            icon={<Thermometer size={16} />}
                            text="Tjmax / Tjunction"
                        />
                        <Tag icon={<Gauge size={16} />} text="Hotspot" />
                        <Tag icon={<Settings size={16} />} text="Fan Curve" />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Cpu />}
                            label="CPU Gaming"
                            desc="55–80°C thường ổn"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Gamepad2 />}
                            label="GPU Gaming"
                            desc="60–80°C thường ổn"
                            color="red"
                            highlight
                        />
                        <HeroTile
                            icon={<Monitor />}
                            label="Laptop"
                            desc="Nóng hơn desktop"
                            color="purple"
                        />
                        <HeroTile
                            icon={<Fan />}
                            label="Airflow"
                            desc="Thoát khí nóng"
                            color="cyan"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Mốc dễ nhớ</p>
                        <p>85°C+ thường xuyên: theo dõi</p>
                        <p className="text-red-300">
                            90–100°C thường xuyên: kiểm tra
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu nhiệt độ hoạt động an toàn là khoảng nhiệt CPU/GPU có thể chạy ổn định, không giảm hiệu năng nghiêm trọng và không rủi ro lớn.",
        "Phân biệt nhiệt idle, load, gaming, render/stress test và vì sao phải xem ngữ cảnh trước khi kết luận nóng hay không.",
        "Hiểu thermal throttling: CPU/GPU tự giảm xung khi gần ngưỡng nhiệt để tự bảo vệ.",
        "Đọc được các chỉ số: Tjunction/Tjmax, GPU temperature, GPU hotspot, memory junction, ambient temperature, fan curve và power limit.",
        "Biết thứ tự xử lý khi máy nóng: quạt, bụi, airflow, keo/tản, fan curve, power limit/undervolt và nâng cấp tản/case nếu cần.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="red"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-red-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-300 flex items-center justify-center font-bold mb-4">
                            {i + 1}
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
    const cards = [
        {
            icon: <Thermometer />,
            title: "Nhiệt an toàn",
            desc: "Khoảng nhiệt máy chạy ổn định, không throttle nghiêm trọng và không rủi ro lớn.",
            color: "red",
        },
        {
            icon: <Gauge />,
            title: "Không có một số duy nhất",
            desc: "Mỗi CPU/GPU có giới hạn riêng; cần tra Tjunction/Tjmax theo mẫu chip.",
            color: "orange",
        },
        {
            icon: <Fan />,
            title: "Ngữ cảnh quan trọng",
            desc: "80°C khi render có thể bình thường; 80°C khi idle lại rất đáng kiểm tra.",
            color: "cyan",
        },
        {
            icon: <Zap />,
            title: "Thermal throttling",
            desc: "Khi quá nóng, chip tự giảm xung để bảo vệ, khiến FPS/render tụt.",
            color: "yellow",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Nhiệt độ an toàn là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">
                        Nhiệt độ hoạt động an toàn
                    </strong>{" "}
                    là khoảng nhiệt độ mà CPU/GPU có thể chạy ổn định, không
                    giảm hiệu năng nghiêm trọng và không gây rủi ro lớn cho linh
                    kiện. Không nên đánh giá bằng một con số cố định cho mọi
                    máy; hãy xem loại linh kiện, tải đang chạy, nhiệt độ phòng,
                    tản nhiệt và airflow.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <RoleCard key={c.title} {...c} />
                    ))}
                </div>
                <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Lướt web / Office → nhiệt thấp
                    <br />
                    Gaming → nhiệt trung bình đến cao
                    <br />
                    Render / stress test → nhiệt cao
                    <br />
                    <span className="text-red-300">
                        Quá nóng → giảm xung / tụt hiệu năng / tự tắt
                    </span>
                </div>
            </div>
        </section>
    );
}

function EngineAnalogy() {
    const cards = [
        {
            icon: <Cpu />,
            title: "CPU/GPU = động cơ",
            desc: "Chạy nhẹ thì ấm, tải nặng thì nóng hơn.",
            color: "orange",
        },
        {
            icon: <Gauge />,
            title: "Tjmax = vạch đỏ",
            desc: "Gần ngưỡng này không hỏng ngay, nhưng không nên chạy sát mãi.",
            color: "red",
        },
        {
            icon: <Fan />,
            title: "Tản nhiệt = két nước/quạt",
            desc: "Đưa nhiệt ra khỏi chip để giữ xung ổn định.",
            color: "cyan",
        },
        {
            icon: <AlertTriangle />,
            title: "Quá nóng = giảm công suất",
            desc: "Giống xe giảm công suất để tự bảo vệ khi quá nhiệt.",
            color: "yellow",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: CPU/GPU như động cơ xe"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-4 gap-4">
                {cards.map((c) => (
                    <AnalogyCard key={c.title} {...c} />
                ))}
            </div>
        </section>
    );
}

function ThermalFlowSimulator() {
    const flows = {
        good: {
            title: "Tản tốt",
            color: "emerald",
            steps: [
                {
                    icon: <Cpu />,
                    title: "CPU/GPU xử lý dữ liệu",
                    desc: "Dòng điện chạy qua chip và sinh nhiệt.",
                },
                {
                    icon: <Fan />,
                    title: "Tản hấp thụ nhiệt",
                    desc: "Heatsink, heatpipe, AIO hoặc GPU cooler kéo nhiệt ra khỏi chip.",
                },
                {
                    icon: <Wind />,
                    title: "Airflow đẩy ra ngoài",
                    desc: "Quạt case/radiator đưa khí nóng ra khỏi case.",
                },
                {
                    icon: <Gauge />,
                    title: "Xung nhịp ổn định",
                    desc: "Chip giữ boost tốt hơn, hiệu năng ít tụt sau thời gian dài.",
                },
                {
                    icon: <CheckCircle2 />,
                    title: "Máy ổn định",
                    desc: "Ít hú quạt, ít throttle, trải nghiệm game/render ổn hơn.",
                },
            ],
        },
        bad: {
            title: "Tản kém",
            color: "red",
            steps: [
                {
                    icon: <Thermometer />,
                    title: "Nhiệt tích tụ",
                    desc: "Tản, keo hoặc airflow không đưa nhiệt ra kịp.",
                },
                {
                    icon: <AlertTriangle />,
                    title: "Chạm ngưỡng nhiệt cao",
                    desc: "CPU/GPU tiến gần Tjmax hoặc giới hạn nhiệt của hãng.",
                },
                {
                    icon: <Zap />,
                    title: "Giảm xung",
                    desc: "Chip tự hạ clock/power để bảo vệ.",
                },
                {
                    icon: <XCircle />,
                    title: "FPS/render tụt",
                    desc: "Game lúc đầu mượt, sau 15–30 phút tụt FPS hoặc render chậm dần.",
                },
            ],
        },
        laptop: {
            title: "Laptop nóng",
            color: "orange",
            steps: [
                {
                    icon: <Monitor />,
                    title: "Không gian hẹp",
                    desc: "Laptop có quạt nhỏ, heatsink mỏng, ít không gian thoát nhiệt.",
                },
                {
                    icon: <Thermometer />,
                    title: "Gaming 75–95°C thường gặp",
                    desc: "Laptop gaming thường nóng hơn desktop khi tải nặng.",
                },
                {
                    icon: <Fan />,
                    title: "Quạt hú rõ",
                    desc: "Nếu bụi bám hoặc kê máy bí, nhiệt và tiếng ồn tăng mạnh.",
                },
                {
                    icon: <PackageCheck />,
                    title: "Cần vệ sinh/tối ưu",
                    desc: "Kê cao đáy, vệ sinh bụi, giới hạn FPS, thay keo nếu cần và hết bảo hành.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("good");
    const [active, setActive] = useState(0);
    const flow = flows[mode];
    const step = flow.steps[active];
    const switchMode = (m) => {
        setMode(m);
        setActive(0);
    };
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Khi CPU/GPU nóng thì chuyện gì xảy ra?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {Object.entries(flows).map(([key, f]) => (
                        <button
                            key={key}
                            onClick={() => switchMode(key)}
                            className={`rounded-2xl border p-4 font-bold transition-all ${mode === key ? `${softBorder(f.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            {f.title}
                        </button>
                    ))}
                </div>
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[320px] flex flex-col justify-between">
                        <div>
                            <div
                                className={`w-16 h-16 rounded-2xl ${badgeColor(flow.color)} flex items-center justify-center mb-5`}
                            >
                                {React.cloneElement(step.icon, { size: 32 })}
                            </div>
                            <p
                                className={`${textColor(flow.color)} text-sm font-bold mb-2`}
                            >
                                Bước {active + 1}/{flow.steps.length}
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
                                setActive((active + 1) % flow.steps.length)
                            }
                            className="mt-6 px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold inline-flex items-center justify-center gap-2"
                        >
                            Bước tiếp theo <ChevronRight size={18} />
                        </button>
                    </div>
                    <div className="space-y-2">
                        {flow.steps.map((s, i) => (
                            <button
                                key={s.title}
                                onClick={() => setActive(i)}
                                className={`w-full flex items-center gap-4 p-3 rounded-2xl border text-left transition-all ${active === i ? `${softBorder(flow.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`}
                            >
                                <div
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${active === i ? badgeColor(flow.color) : "bg-slate-900 text-slate-500"}`}
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

function TemperatureTables() {
    const cpuRows = [
        ["Idle / nghỉ", "30–50°C", "Bình thường"],
        ["Lướt web, Office", "40–60°C", "Bình thường"],
        ["Gaming", "55–80°C", "Tốt đến bình thường"],
        ["Render / tải nặng", "70–90°C", "Có thể bình thường tùy CPU/tản"],
        ["Trên 90–95°C thường xuyên", "Cao", "Nên kiểm tra tản, keo, airflow"],
        ["Gần 100°C", "Rất cao với nhiều CPU", "Có thể throttle"],
    ];
    const gpuRows = [
        ["Idle / nghỉ", "30–50°C", "Bình thường"],
        ["Xem video / tác vụ nhẹ", "40–60°C", "Bình thường"],
        ["Gaming", "60–80°C", "Bình thường"],
        ["Gaming nặng / case bí", "80–85°C", "Hơi cao, cần theo dõi"],
        [
            "Trên 85–90°C thường xuyên",
            "Cao",
            "Nên kiểm tra airflow/quạt/keo GPU",
        ],
        ["Hotspot rất cao", "Cần chú ý", "Tùy GPU, có thể cần xử lý"],
    ];
    const laptopRows = [
        ["Idle", "40–60°C", "Bình thường"],
        ["Học tập / văn phòng", "50–70°C", "Bình thường"],
        ["Gaming / render", "75–95°C", "Thường gặp trên laptop gaming"],
        ["Gần 100°C liên tục", "Cao", "Kiểm tra bụi, keo, kê máy, fan curve"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="orange"
                title="Các mức nhiệt độ thường gặp"
                icon={<Thermometer />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="CPU desktop"
                    rows={cpuRows}
                    headers={[
                        "Tình huống",
                        "Mức nhiệt thường thấy",
                        "Đánh giá",
                    ]}
                    accent="orange"
                />
                <DataTable
                    title="GPU desktop"
                    rows={gpuRows}
                    headers={[
                        "Tình huống",
                        "Mức nhiệt thường thấy",
                        "Đánh giá",
                    ]}
                    accent="red"
                />
            </div>
            <DataTable
                title="CPU/GPU laptop"
                rows={laptopRows}
                headers={["Tình huống", "Mức nhiệt thường thấy", "Đánh giá"]}
                accent="purple"
            />
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-orange-300">Nhớ ngữ cảnh:</strong> 80°C
                khi render/stress test có thể bình thường; 80°C khi idle trên
                desktop lại rất bất thường.
            </div>
        </section>
    );
}

function GpuHotspotGuide() {
    const rows = [
        ["GPU Temperature / Edge Temp", "Nhiệt độ chung của GPU"],
        ["GPU Hotspot / Junction Temp", "Điểm nóng nhất trên GPU"],
        ["Memory Junction", "Nhiệt độ chip nhớ VRAM"],
        ["VRM Temperature", "Nhiệt độ khu vực cấp điện"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="red"
                title="GPU Temperature vs GPU Hotspot"
                icon={<Gamepad2 />}
            />
            <DataTable
                title="GPU có nhiều cảm biến nhiệt"
                rows={rows}
                headers={["Chỉ số", "Ý nghĩa"]}
                accent="red"
            />
            <div className="grid md:grid-cols-2 gap-4">
                <RuleCard
                    label="Ví dụ thường có thể ổn"
                    value="GPU Temperature 72°C, Hotspot 90°C. Hotspot cao hơn nhiệt chung là bình thường nếu không quá lệch."
                    color="emerald"
                />
                <RuleCard
                    label="Ví dụ cần kiểm tra"
                    value="GPU Temperature 70°C, Hotspot 105°C. Chênh lệch quá lớn có thể liên quan keo GPU, áp lực heatsink hoặc thermal pad."
                    color="red"
                />
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        tjmax: {
            icon: <Gauge />,
            title: "Tjunction / Tjmax",
            detail: "Nhiệt độ tối đa tại điểm đo bên trong CPU/GPU do nhà sản xuất quy định.",
            impact: "Chạm gần Tjmax không hỏng ngay, nhưng chạy sát thường xuyên có thể ồn, throttle và ảnh hưởng linh kiện xung quanh.",
        },
        throttle: {
            icon: <Zap />,
            title: "Thermal Throttling",
            detail: "Cơ chế tự giảm xung/power khi chip quá nóng để tự bảo vệ.",
            impact: "Dấu hiệu: game đầu 120 FPS, sau 20 phút còn 80 FPS, quạt hú và nhiệt rất cao.",
        },
        idle: {
            icon: <Monitor />,
            title: "Idle Temperature",
            detail: "Nhiệt độ khi máy gần như không làm gì.",
            impact: "Desktop idle 35–50°C thường ổn; idle 70–80°C có thể do tản ép sai, quên film, pump lỗi, fan không quay hoặc tác vụ nền.",
        },
        load: {
            icon: <Cpu />,
            title: "Load Temperature",
            detail: "Nhiệt khi gaming, render, compile, benchmark hoặc stress test.",
            impact: "Load quan trọng hơn idle vì phản ánh tản nhiệt có chịu được tải thực tế không.",
        },
        ambient: {
            icon: <Thermometer />,
            title: "Ambient Temperature",
            detail: "Nhiệt độ phòng ảnh hưởng trực tiếp tới nhiệt PC.",
            impact: "Cùng một máy, mùa hè có thể nóng hơn mùa đông 5–10°C là bình thường.",
        },
        curve: {
            icon: <Settings />,
            title: "Fan Curve",
            detail: "Cách quạt tăng/giảm tốc theo nhiệt độ.",
            impact: "Fan curve quá nhẹ: máy êm nhưng nóng; quá gắt: mát hơn nhưng ồn.",
        },
        power: {
            icon: <Zap />,
            title: "Power Limit",
            detail: "Giới hạn điện năng CPU/GPU được phép dùng.",
            impact: "CPU chạy 65W mát hơn nhiều so với boost 180W; cùng CPU nhưng BIOS/mainboard khác có nhiệt rất khác.",
        },
    };
    const [active, setActive] = useState("throttle");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số kỹ thuật quan trọng"
                icon={<Puzzle />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-7 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(specs).map(([key, s]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-3 text-center transition-all ${active === key ? "bg-yellow-500 text-slate-950" : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}
                        >
                            {React.cloneElement(s.icon, { size: 19 })}
                            <span className="font-bold text-[11px]">
                                {s.title}
                            </span>
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

function RealExamples() {
    const examples = [
        {
            icon: <Cpu />,
            title: "Intel Core i5-14600K",
            subtitle: "Tjunction 100°C",
            color: "orange",
            points: [
                "Idle: 35–50°C",
                "Gaming: 60–85°C",
                "Render/stress: 80–95°C tùy tản/power limit",
                "Gần 100°C liên tục: nên kiểm tra",
                "Hợp tản dual-tower tốt hoặc AIO 240/280/360mm",
            ],
            lesson: "CPU Intel K-series có thể boost nóng; power limit và tản nhiệt quyết định nhiệt độ thực tế rất nhiều.",
        },
        {
            icon: <Cpu />,
            title: "AMD Ryzen 7 7800X3D",
            subtitle: "Tjmax 89°C",
            color: "red",
            points: [
                "Idle: 35–50°C",
                "Gaming: 55–75°C thường đẹp",
                "Tải nặng: 75–85°C có thể bình thường",
                "Gần 89°C liên tục: kiểm tra",
                "Không cần ép xung thủ công mạnh",
            ],
            lesson: "CPU X3D có giới hạn nhiệt thấp hơn một số CPU khác, nên cần đọc đúng Tjmax của từng mẫu.",
        },
        {
            icon: <Gamepad2 />,
            title: "Radeon RX 7800 XT",
            subtitle: "GPU gaming hiện đại",
            color: "purple",
            points: [
                "Gaming thường 65–80°C",
                "Hotspot có thể cao hơn GPU temp 10–25°C",
                "85°C+ hoặc hotspot quá cao: kiểm tra airflow",
                "Vệ sinh heatsink GPU",
                "Có thể undervolt nhẹ nếu biết cách",
            ],
            lesson: "GPU 70–75°C khi gaming thường bình thường; đáng lo hơn là hotspot quá cao, quạt 100% và FPS tụt.",
        },
        {
            icon: <Gamepad2 />,
            title: "RTX 4060 / RTX 4070",
            subtitle: "Gaming phổ thông",
            color: "cyan",
            points: [
                "GPU idle: 35–50°C",
                "Gaming: 60–75°C nếu case thoáng",
                "Case bí/phòng nóng: 75–85°C",
                "Không cần ép xuống 50°C nếu máy ổn",
                "Theo dõi nhiệt sau 15–30 phút chơi",
            ],
            lesson: "Đừng ám ảnh nhiệt cực thấp; nếu máy êm, ổn định và không throttle thì nhiệt 70–75°C thường ổn.",
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
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-5 hover:border-pink-500/40 transition-all"
                    >
                        <div
                            className={`w-12 h-12 rounded-2xl ${badgeColor(e.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(e.icon, { size: 24 })}
                        </div>
                        <h3 className="text-white font-bold text-base mb-1">
                            {e.title}
                        </h3>
                        <p className="text-pink-300 text-xs font-semibold mb-4">
                            {e.subtitle}
                        </p>
                        <div className="space-y-2 mb-5">
                            {e.points.map((p) => (
                                <Bullet key={p} text={p} />
                            ))}
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300">
                            <strong className="text-pink-300">Bài học:</strong>{" "}
                            {e.lesson}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function TroubleshootingFlow() {
    const steps = [
        [
            "1",
            "Kiểm tra quạt",
            "CPU fan, GPU fan, case fan, pump AIO có chạy không?",
        ],
        ["2", "Vệ sinh bụi", "Bụi bám heatsink/lọc bụi làm gió yếu."],
        [
            "3",
            "Kiểm tra airflow",
            "Front intake, rear/top exhaust, case không đặt sát tường.",
        ],
        [
            "4",
            "Kiểm tra keo/tản",
            "Tản ép sát chưa, keo khô chưa, có quên film đế tản không?",
        ],
        ["5", "Chỉnh fan curve", "Tăng quạt hợp lý khi CPU/GPU lên nhiệt."],
        [
            "6",
            "Giảm power limit / undervolt",
            "Chỉ làm nếu hiểu cách và test ổn định.",
        ],
        [
            "7",
            "Nâng cấp tản/case",
            "Khi các bước cơ bản không đủ cho tải thực tế.",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="emerald"
                title="Nếu máy quá nóng: xử lý theo thứ tự"
                icon={<Workflow />}
            />
            <DataTable
                title="Đừng thay keo/nâng tản ngay khi chưa kiểm tra nguyên nhân đơn giản"
                rows={steps}
                headers={["Bước", "Việc cần làm", "Ghi chú"]}
                accent="emerald"
            />
        </section>
    );
}

function MonitoringLab() {
    const scenarios = {
        gaming: {
            icon: <Gamepad2 />,
            title: "FPS tụt sau 20 phút",
            answer: "Dùng MSI Afterburner/RivaTuner hoặc HWiNFO xem nhiệt và xung. Nếu nhiệt tăng rồi xung giảm mạnh, có thể thermal throttling.",
            color: "orange",
        },
        idle: {
            icon: <Monitor />,
            title: "Idle 80°C",
            answer: "Bất thường với desktop. Kiểm tra tản ép sát, keo, film đế tản, quạt CPU, pump AIO và phần mềm nền ăn tải.",
            color: "red",
        },
        gpu75: {
            icon: <Gamepad2 />,
            title: "GPU 75°C gaming",
            answer: "Thường vẫn bình thường nếu máy ổn, quạt không 100%, hotspot không quá cao và không tụt FPS.",
            color: "emerald",
        },
        hotspot: {
            icon: <Gauge />,
            title: "Hotspot 105°C",
            answer: "Cần theo dõi. Nếu GPU temp thấp nhưng hotspot quá cao, có thể do keo GPU, pressure heatsink hoặc thermal pad.",
            color: "red",
        },
        summer: {
            icon: <Thermometer />,
            title: "Mùa hè nóng hơn",
            answer: "Bình thường nếu phòng nóng hơn. Nhiệt PC có thể tăng 5–10°C so với mùa mát; cần cải thiện airflow phòng/case nếu quá cao.",
            color: "yellow",
        },
        laptop: {
            icon: <Monitor />,
            title: "Laptop nóng",
            answer: "Kê cao đáy, không đặt trên chăn/nệm, vệ sinh bụi, giới hạn FPS, dùng Balanced nếu không cần Turbo, thay keo nếu máy cũ/hết bảo hành.",
            color: "purple",
        },
    };
    const [active, setActive] = useState("gaming");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: đọc nhiệt độ theo tình huống"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
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
            wrong: "CPU lên 80°C là hỏng",
            right: "80°C khi tải nặng có thể bình thường. 80°C khi chỉ mở desktop mới là bất thường.",
        },
        {
            wrong: "Idle phải dưới 30°C mới tốt",
            right: "Idle phụ thuộc nhiệt độ phòng, tản, fan curve và tác vụ nền. Phòng 30–32°C thì idle 45–55°C có thể vẫn bình thường.",
        },
        {
            wrong: "GPU 75°C là quá nóng",
            right: "GPU gaming 65–80°C thường bình thường. Đáng lo hơn là 85–90°C+ thường xuyên, hotspot quá cao, quạt 100% hoặc FPS tụt.",
        },
        {
            wrong: "Chỉ cần thay keo là hết nóng",
            right: "Máy nóng còn có thể do case bí, quạt sai chiều, bụi, tản yếu, pump lỗi, fan curve nhẹ, phòng nóng hoặc power limit cao.",
        },
        {
            wrong: "Stress test 100°C nghĩa là dùng bình thường nguy hiểm",
            right: "Stress test tạo tải nặng hơn nhiều so với gaming/hằng ngày. Hãy so sánh với tải thực tế 15–30 phút.",
        },
    ];
    const tips = [
        "Dùng HWiNFO để xem CPU package, GPU temperature, hotspot, power và throttling flag.",
        "Dùng MSI Afterburner/RivaTuner để hiện nhiệt trong game.",
        "Mốc desktop gaming dễ nhớ: CPU 55–80°C ổn, GPU 60–80°C ổn.",
        "CPU/GPU 85°C+ thường xuyên: theo dõi; 90–100°C thường xuyên: kiểm tra.",
        "Đừng chỉ nhìn spike nhiệt 1 giây; xem nhiệt trung bình sau 15–30 phút dùng thật.",
        "Case đặt sát tường hoặc dưới gầm bàn kín cũng làm nhiệt tăng.",
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
                        <Lightbulb /> Checklist nhanh
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
                        <span className="bg-red-500/20 text-red-300 p-2 rounded-xl">
                            12
                        </span>{" "}
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-red-300 border border-slate-800 shadow-inner space-y-2">
                            <p>Không có một nhiệt độ đúng cho mọi CPU/GPU</p>
                            <p>
                                Hãy xem: idle/load/gaming/stress + Tjmax + nhiệt
                                phòng + airflow
                            </p>
                            <br />
                            <p className="text-slate-500">
                                # Desktop gaming dễ nhớ
                            </p>
                            <p className="text-slate-300">
                                CPU: 55–80°C thường ổn
                            </p>
                            <p className="text-slate-300">
                                GPU: 60–80°C thường ổn
                            </p>
                            <p className="text-slate-300">
                                85°C+ thường xuyên: theo dõi
                            </p>
                            <p className="text-red-300">
                                90–100°C thường xuyên: kiểm tra
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
        question: "Thermal throttling là gì?",
        options: [
            "CPU/GPU tự giảm xung khi quá nóng để bảo vệ linh kiện",
            "RAM tự tăng dung lượng",
            "SSD tự tăng tốc độ đọc ghi",
            "Quạt ngừng quay để tiết kiệm điện",
        ],
        correct: 0,
        explanation:
            "Thermal throttling là cơ chế giảm xung/power khi chip quá nóng để tự bảo vệ.",
    },
    {
        question: "CPU desktop 75°C khi chơi game thường được xem là gì?",
        options: [
            "Thường vẫn bình thường",
            "Chắc chắn đã hỏng",
            "Không thể xảy ra",
            "Do màn hình quá lớn",
        ],
        correct: 0,
        explanation:
            "CPU desktop 55–80°C khi gaming thường vẫn ổn nếu máy không throttle và quạt không quá bất thường.",
    },
    {
        question: "GPU Temperature và GPU Hotspot khác nhau thế nào?",
        options: [
            "GPU Temperature là nhiệt chung, Hotspot là điểm nóng nhất trên GPU",
            "Hotspot là dung lượng VRAM",
            "GPU Temperature là tốc độ quạt",
            "Hai chỉ số này luôn giống hệt nhau",
        ],
        correct: 0,
        explanation:
            "Hotspot/junction là điểm nóng nhất, thường cao hơn GPU temperature/edge temp.",
    },
    {
        question: "Nếu CPU idle đã 80°C, nên làm gì?",
        options: [
            "Kiểm tra tản, keo, quạt, pump AIO và phần mềm nền",
            "Mua thêm màn hình",
            "Tăng độ sáng RGB",
            "Tháo SSD ra ngay",
        ],
        correct: 0,
        explanation:
            "Desktop idle 80°C là bất thường; cần kiểm tra lắp tản, keo, quạt/pump và tải nền.",
    },
    {
        question: "Nhiệt độ phòng ảnh hưởng tới nhiệt độ PC không?",
        options: [
            "Có",
            "Không bao giờ",
            "Chỉ ảnh hưởng tới bàn phím",
            "Chỉ ảnh hưởng nếu dùng chuột không dây",
        ],
        correct: 0,
        explanation: "Nhiệt độ phòng tăng thường làm nhiệt CPU/GPU tăng theo.",
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
                    <strong className="text-red-400">
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
                <span className="text-red-400">
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
                        className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu nhiệt độ an toàn của CPU/GPU. Tiếp theo là tản nhiệt
                cho laptop: heatpipe và fan, vì laptop có không gian nhỏ hơn
                desktop rất nhiều nên cách đánh giá nhiệt, vệ sinh và tối ưu
                cũng khác.
            </p>
            <Link
                to="/phan-9-6"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-red-500/20"
            >
                Bài tiếp theo: 9.6 — Tản nhiệt cho Laptop{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "red" }) {
    const colorMap = {
        red: "bg-red-500/20 text-red-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        blue: "bg-blue-500/20 text-blue-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
        pink: "bg-pink-500/20 text-pink-300",
        orange: "bg-orange-500/20 text-orange-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-red-500/10 border-red-400/50" : softBorder(color)}`}
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
function RoleCard({ icon, title, desc, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-3xl p-5`}>
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
function RuleCard({ label, value, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-5`}>
            <p className={`${textColor(color)} font-bold text-sm mb-2`}>
                {label}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
        </div>
    );
}
function DataTable({ title, rows, headers, accent }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 overflow-x-auto">
            <h3 className="text-white font-bold mb-4 px-2">{title}</h3>
            <table className="w-full min-w-[760px] text-sm">
                <thead>
                    <tr className="text-left text-slate-400">
                        {headers.map((h) => (
                            <th key={h} className="p-3">
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row[0]} className="border-t border-slate-800">
                            {row.map((cell, i) => (
                                <td
                                    key={`${row[0]}-${i}`}
                                    className={`p-3 ${i === 0 ? `${textColor(accent)} font-extrabold` : "text-slate-300"}`}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
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
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
    };
    return map[color] || map.red;
}
function softBorder(color) {
    const map = {
        red: "bg-red-500/5 border-red-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
    };
    return map[color] || map.red;
}
function textColor(color) {
    const map = {
        red: "text-red-300",
        yellow: "text-yellow-300",
        blue: "text-blue-300",
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        pink: "text-pink-300",
    };
    return map[color] || "text-red-300";
}
