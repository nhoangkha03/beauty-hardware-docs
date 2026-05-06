import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    CircleDot,
    Fingerprint,
    Gauge,
    Hand,
    Layers3,
    Lightbulb,
    Monitor,
    MousePointerClick,
    Move,
    PackageCheck,
    PenTool,
    Puzzle,
    ScanLine,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    SquareMousePointer,
    Tablet,
    Touchpad,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-fuchsia-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-400/30 flex items-center justify-center shadow-lg shadow-fuchsia-500/10">
                            <Touchpad className="text-fuchsia-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 10: Thiết bị nhập liệu
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-fuchsia-300 bg-fuchsia-400/10 px-3 py-1 rounded-full border border-fuchsia-400/20">
                        Bài 10.3
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <SmartTableAnalogy />
                <TouchFlowSimulator />
                <TouchTypeExplorer />
                <StylusExplorer />
                <SpecsExplorer />
                <SurfaceGuide />
                <RealExamples />
                <PickerLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-fuchsia-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-fuchsia-300">
                        <BookOpen size={16} /> Phần 10: Touchscreen
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Màn hình cảm ứng
                        <span className="block text-fuchsia-400">
                            chạm trực tiếp để điều khiển
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Thay vì kéo con trỏ bằng chuột, touchscreen cho phép bạn
                        chạm thẳng vào thứ muốn thao tác: mở app, cuộn trang,
                        zoom, ký tên, ghi chú hoặc vẽ bằng bút.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<Fingerprint size={16} />}
                            text="Capacitive"
                        />
                        <Tag icon={<Move size={16} />} text="Multi-touch" />
                        <Tag
                            icon={<PenTool size={16} />}
                            text="Active Stylus"
                        />
                        <Tag icon={<Hand size={16} />} text="Palm Rejection" />
                        <Tag icon={<Gauge size={16} />} text="Touch Latency" />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Hand />}
                            label="Touch"
                            desc="Ngón tay chạm"
                            color="fuchsia"
                            highlight
                        />
                        <HeroTile
                            icon={<Layers3 />}
                            label="Sensor Layer"
                            desc="Nhận tọa độ"
                            color="violet"
                        />
                        <HeroTile
                            icon={<PenTool />}
                            label="Stylus"
                            desc="Viết, vẽ"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<Monitor />}
                            label="Display"
                            desc="Hiển thị + nhập liệu"
                            color="blue"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Luồng cơ bản</p>
                        <p>Chạm → Lớp cảm ứng → Tọa độ X-Y</p>
                        <p className="text-fuchsia-300">
                            → Controller → OS → Thao tác
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu màn hình cảm ứng là màn hình có khả năng nhận thao tác từ ngón tay hoặc bút cảm ứng.",
        "Nắm luồng hoạt động: chạm vào kính → lớp cảm ứng phát hiện → xác định tọa độ X-Y → hệ điều hành xử lý thành thao tác.",
        "Phân biệt cảm ứng điện dung, điện trở, hồng ngoại và hệ thống bút active digitizer.",
        "Đọc được thông số quan trọng: multi-touch, touch latency, stylus support, palm rejection, pressure sensitivity, tilt support, surface finish, độ bền kính và độ sáng.",
        "Biết chọn touchscreen theo nhu cầu: tablet ghi chú, laptop 2-in-1, màn hình vẽ, POS/kiosk hoặc thiết bị công nghiệp.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="fuchsia"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-fuchsia-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 text-fuchsia-300 flex items-center justify-center font-bold mb-4">
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
            icon: <Hand />,
            title: "Chạm trực tiếp",
            desc: "Chọn, mở, kéo thả, cuộn và zoom bằng ngón tay.",
            color: "fuchsia",
        },
        {
            icon: <PenTool />,
            title: "Bút cảm ứng",
            desc: "Viết, ký tên, vẽ, ghi chú và thao tác chính xác hơn.",
            color: "cyan",
        },
        {
            icon: <Layers3 />,
            title: "Lớp cảm ứng",
            desc: "Phát hiện thay đổi điện, lực nhấn, ánh sáng hoặc tín hiệu bút.",
            color: "violet",
        },
        {
            icon: <MousePointerClick />,
            title: "Hệ điều hành xử lý",
            desc: "Biến tọa độ chạm thành lệnh: mở app, zoom, cuộn, vẽ.",
            color: "blue",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Màn hình cảm ứng là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Màn hình cảm ứng</strong>,
                    tiếng Anh là{" "}
                    <strong className="text-fuchsia-300">Touchscreen</strong>,
                    là màn hình có khả năng nhận thao tác chạm từ ngón tay hoặc
                    bút cảm ứng. Nó vừa là thiết bị hiển thị, vừa là thiết bị
                    nhập liệu.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <RoleCard key={c.title} {...c} />
                    ))}
                </div>
                <div className="mt-6 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Bạn chạm màn hình → Lớp cảm ứng phát hiện tọa độ →
                    Controller xử lý → Hệ điều hành thực hiện lệnh
                </div>
            </div>
        </section>
    );
}

function SmartTableAnalogy() {
    const cards = [
        {
            icon: <Tablet />,
            title: "Mặt bàn thông minh",
            desc: "Chạm vào vị trí nào, mặt bàn biết vị trí đó.",
            color: "fuchsia",
        },
        {
            icon: <CircleDot />,
            title: "Tọa độ X-Y",
            desc: "Màn hình cần biết chính xác điểm chạm nằm ở đâu.",
            color: "blue",
        },
        {
            icon: <Move />,
            title: "Nhiều điểm chạm",
            desc: "Hai ngón chụm/tách để zoom, xoay hoặc thao tác trong app.",
            color: "cyan",
        },
        {
            icon: <PenTool />,
            title: "Bút như cây viết",
            desc: "Bút active có thể nhận lực, nghiêng và bỏ qua lòng bàn tay.",
            color: "violet",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: mặt bàn thông minh"
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

function TouchFlowSimulator() {
    const flows = {
        tap: {
            title: "Chạm mở ứng dụng",
            color: "fuchsia",
            steps: [
                {
                    icon: <Hand />,
                    title: "Ngón tay chạm kính",
                    desc: "Bạn chạm vào biểu tượng hoặc nút trên màn hình.",
                },
                {
                    icon: <Layers3 />,
                    title: "Lớp cảm ứng phát hiện",
                    desc: "Tùy công nghệ, màn hình phát hiện thay đổi điện tích, lực nhấn hoặc tia sáng bị chặn.",
                },
                {
                    icon: <CircleDot />,
                    title: "Xác định tọa độ X-Y",
                    desc: "Controller biết chính xác điểm chạm nằm ở vị trí nào.",
                },
                {
                    icon: <MousePointerClick />,
                    title: "OS hiểu thao tác",
                    desc: "Hệ điều hành đối chiếu tọa độ với icon/nút trên màn hình.",
                },
                {
                    icon: <CheckCircle2 />,
                    title: "Lệnh được thực hiện",
                    desc: "Ứng dụng mở, nút được nhấn hoặc mục được chọn.",
                },
            ],
        },
        multitouch: {
            title: "Multi-touch zoom",
            color: "cyan",
            steps: [
                {
                    icon: <Move />,
                    title: "Hai ngón chạm",
                    desc: "Màn hình nhận hai điểm chạm cùng lúc.",
                },
                {
                    icon: <Gauge />,
                    title: "Tính khoảng cách",
                    desc: "Hệ điều hành đo khoảng cách giữa hai ngón.",
                },
                {
                    icon: <Sparkles />,
                    title: "Chụm hoặc tách",
                    desc: "Khoảng cách giảm là zoom out; khoảng cách tăng là zoom in.",
                },
                {
                    icon: <Monitor />,
                    title: "Nội dung thay đổi",
                    desc: "Ảnh, bản đồ hoặc tài liệu được phóng to/thu nhỏ.",
                },
            ],
        },
        pen: {
            title: "Viết/vẽ bằng bút",
            color: "violet",
            steps: [
                {
                    icon: <PenTool />,
                    title: "Bút tiến gần màn hình",
                    desc: "Một số digitizer nhận hover trước khi chạm.",
                },
                {
                    icon: <Zap />,
                    title: "Nhận tín hiệu bút",
                    desc: "Thiết bị biết vị trí bút, lực nhấn, nghiêng và đôi khi cả barrel roll.",
                },
                {
                    icon: <Hand />,
                    title: "Palm rejection",
                    desc: "Màn hình bỏ qua lòng bàn tay khi bạn tì tay để viết.",
                },
                {
                    icon: <Sparkles />,
                    title: "Nét vẽ tự nhiên",
                    desc: "Nhấn nhẹ nét mảnh, nhấn mạnh nét dày; nghiêng bút để tô rộng hơn.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("tap");
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
                title="Touchscreen nhận thao tác như thế nào?"
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

function TouchTypeExplorer() {
    const types = {
        capacitive: {
            icon: <Fingerprint />,
            title: "Capacitive",
            color: "fuchsia",
            desc: "Cảm ứng điện dung tạo trường điện nhỏ; ngón tay chạm làm thay đổi điện tích.",
            good: [
                "Nhạy",
                "Mượt",
                "Multi-touch tốt",
                "Hình ảnh đẹp",
                "Phổ biến nhất",
            ],
            bad: ["Khó dùng với găng tay thường", "Cần bút tương thích"],
            fit: "Smartphone, tablet, laptop 2-in-1, màn hình cao cấp",
        },
        resistive: {
            icon: <MousePointerClick />,
            title: "Resistive",
            color: "orange",
            desc: "Cảm ứng điện trở dùng hai lớp dẫn điện; khi nhấn xuống, hai lớp chạm nhau tạo tín hiệu.",
            good: [
                "Dùng được với bút nhựa/móng tay/găng tay",
                "Rẻ",
                "Bền trong môi trường đặc thù",
            ],
            bad: [
                "Không mượt bằng điện dung",
                "Multi-touch kém",
                "Hình ảnh kém trong hơn",
            ],
            fit: "POS, máy công nghiệp, thiết bị y tế, môi trường cần găng tay",
        },
        infrared: {
            icon: <ScanLine />,
            title: "Infrared",
            color: "blue",
            desc: "Dùng tia hồng ngoại tạo thành lưới trước màn hình; vật chạm sẽ chặn tia.",
            good: [
                "Dùng được trên màn hình lớn",
                "Không cần lớp phủ trực tiếp lên tấm nền",
            ],
            bad: ["Viền dày hơn", "Bị ảnh hưởng bởi bụi/vật cản"],
            fit: "Bảng tương tác lớn, kiosk, màn hình thông minh",
        },
        digitizer: {
            icon: <PenTool />,
            title: "Active Digitizer",
            color: "violet",
            desc: "Công nghệ bút cao cấp nhận vị trí, lực nhấn, nghiêng bút, hover và palm rejection.",
            good: [
                "Viết/vẽ chính xác",
                "Nhận lực nhấn",
                "Nhận nghiêng",
                "Palm rejection tốt",
            ],
            bad: ["Cần bút tương thích", "Giá cao hơn"],
            fit: "Apple Pencil, Surface Pen, Wacom Pen, digital art, ghi chú",
        },
    };
    const [active, setActive] = useState("capacitive");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="fuchsia"
                title="Các loại màn hình cảm ứng phổ biến"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {Object.entries(types).map(([key, t]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(t.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(t.icon, { size: 20 })}{" "}
                                {t.title}
                            </div>
                            <p className="text-xs opacity-75 mt-1">{t.desc}</p>
                        </button>
                    ))}
                </div>
                <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-3">
                            {item.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            {item.desc}
                        </p>
                        <p className="text-sm text-slate-400">
                            <strong className="text-white">Phù hợp:</strong>{" "}
                            {item.fit}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div
                            className={`${softBorder(item.color)} border rounded-3xl p-5`}
                        >
                            <p
                                className={`${textColor(item.color)} font-bold mb-3`}
                            >
                                Ưu điểm
                            </p>
                            <div className="space-y-2">
                                {item.good.map((g) => (
                                    <Bullet key={g} text={g} />
                                ))}
                            </div>
                        </div>
                        <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-5">
                            <p className="text-red-300 font-bold mb-3">
                                Nhược điểm
                            </p>
                            <div className="space-y-2">
                                {item.bad.map((b) => (
                                    <WarnBullet key={b} text={b} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StylusExplorer() {
    const rows = [
        [
            "Bút cao su thụ động",
            "Giả lập ngón tay, không có lực nhấn",
            "Chạm cơ bản",
        ],
        [
            "Active stylus",
            "Có điện tử bên trong, nhận lực nhấn/độ nghiêng",
            "Ghi chú, vẽ, ký tên",
        ],
        [
            "Pen display stylus",
            "Bút chuyên vẽ, độ chính xác cao",
            "Thiết kế, digital art",
        ],
    ];
    const features = [
        ["Palm rejection", "Bỏ qua lòng bàn tay khi viết/vẽ"],
        ["Pressure sensitivity", "Nhấn nhẹ nét mảnh, nhấn mạnh nét dày"],
        ["Tilt support", "Nghiêng bút để tạo nét rộng hoặc tô shading"],
        ["Hover", "Nhận bút khi chưa chạm ở một số thiết bị"],
        ["Low latency", "Nét mực bám sát đầu bút hơn"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="violet"
                title="Stylus: không phải màn hình cảm ứng nào cũng dùng bút tốt"
                icon={<PenTool />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="Các kiểu bút cảm ứng"
                    rows={rows}
                    headers={["Loại bút", "Đặc điểm", "Phù hợp"]}
                    accent="violet"
                />
                <DataTable
                    title="Tính năng bút quan trọng"
                    rows={features}
                    headers={["Tính năng", "Ý nghĩa"]}
                    accent="cyan"
                />
            </div>
            <div className="bg-violet-500/10 border border-violet-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-violet-300">
                    Muốn vẽ/ghi chú nghiêm túc:
                </strong>{" "}
                cần active stylus, palm rejection tốt, độ trễ thấp, pressure
                sensitivity và tilt support.
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        multitouch: {
            icon: <Move />,
            title: "Multi-touch",
            detail: "Khả năng nhận nhiều điểm chạm cùng lúc: 1, 2, 5 hoặc 10 điểm.",
            impact: "2 điểm đủ zoom cơ bản; 10 điểm phổ biến trên laptop/tablet hiện đại và hữu ích cho app vẽ/bảng tương tác.",
        },
        latency: {
            icon: <Gauge />,
            title: "Touch Latency",
            detail: "Thời gian từ lúc bạn chạm màn hình đến khi máy phản hồi.",
            impact: "Độ trễ thấp rất quan trọng khi viết, vẽ, ký tên hoặc chơi game cảm ứng.",
        },
        stylus: {
            icon: <PenTool />,
            title: "Stylus Support",
            detail: "Không phải màn hình cảm ứng nào cũng hỗ trợ bút active với lực nhấn và nghiêng.",
            impact: "Laptop chỉ nhận ngón tay có thể dùng bút cao su, nhưng không đủ cho digital art nghiêm túc.",
        },
        palm: {
            icon: <Hand />,
            title: "Palm Rejection",
            detail: "Tính năng bỏ qua lòng bàn tay khi bạn tì tay lên màn hình để viết/vẽ.",
            impact: "Nếu palm rejection kém, nét vẽ lỗi, trang bị kéo lung tung hoặc app nhận nhầm thao tác.",
        },
        pressure: {
            icon: <CircleDot />,
            title: "Pressure Sensitivity",
            detail: "Bút nhận biết lực nhấn mạnh/nhẹ để tạo nét dày/mảnh.",
            impact: "Rất quan trọng với minh họa, retouch, ký tên và viết chữ tay tự nhiên.",
        },
        tilt: {
            icon: <PenTool />,
            title: "Tilt Support",
            detail: "Bút nhận biết góc nghiêng.",
            impact: "Dùng để tô bóng, tạo nét rộng như cạnh bút chì hoặc cọ vẽ.",
        },
        glass: {
            icon: <ShieldCheck />,
            title: "Độ bền kính",
            detail: "Chống xước, chống vân tay, lớp phủ oleophobic và khả năng thay kính khi vỡ.",
            impact: "POS/kiosk/công nghiệp cần độ bền và dễ lau hơn độ mỏng/đẹp.",
        },
        brightness: {
            icon: <Sparkles />,
            title: "Độ sáng",
            detail: "250–300 nits đủ trong phòng; 400–500 nits tốt hơn cho phòng sáng; 600 nits+ hợp ngoài trời.",
            impact: "Màn hình cảm ứng kiosk/tablet dùng ngoài trời cần sáng hơn laptop trong phòng.",
        },
    };
    const [active, setActive] = useState("palm");
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
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

function SurfaceGuide() {
    const rows = [
        ["Glossy / bóng", "Hình ảnh trong, màu đẹp", "Dễ chói, trơn khi viết"],
        [
            "Matte / nhám",
            "Ít chói, cảm giác viết giống giấy hơn",
            "Có thể giảm độ trong/màu sắc",
        ],
        ["Anti-glare", "Giảm phản chiếu", "Tùy chất lượng lớp phủ"],
        [
            "Paper-like film",
            "Viết/vẽ có ma sát như giấy",
            "Có thể làm mòn ngòi bút nhanh hơn",
        ],
    ];
    const clean = [
        [
            "Nên làm",
            "Tắt màn hình, dùng khăn microfiber, lau nhẹ theo vòng tròn",
        ],
        [
            "Không nên",
            "Xịt nước trực tiếp lên màn hình, dùng hóa chất mạnh, dùng vật sắc nhọn",
        ],
        [
            "Cẩn thận",
            "Dao, chìa khóa, bút bi đầu cứng có thể làm xước hoặc hỏng lớp phủ",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="blue"
                title="Bề mặt kính, độ bền và vệ sinh"
                icon={<ShieldCheck />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="Surface finish ảnh hưởng cảm giác chạm/vẽ"
                    rows={rows}
                    headers={["Bề mặt", "Ưu điểm", "Nhược điểm"]}
                    accent="blue"
                />
                <DataTable
                    title="Vệ sinh màn hình cảm ứng đúng cách"
                    rows={clean}
                    headers={["Nhóm", "Ghi chú"]}
                    accent="emerald"
                />
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Tablet />,
            title: "iPad Air",
            subtitle: "Tablet cảm ứng đa dụng",
            color: "fuchsia",
            points: [
                "Bản 11 inch và 13 inch",
                "Chip M4",
                "Liquid Retina",
                "Hỗ trợ Apple Pencil Pro và Apple Pencil USB-C",
                "Hợp ghi chú, PDF, học online, vẽ nhẹ",
            ],
            lesson: "Tablet có hệ sinh thái bút tốt thường tiện hơn laptop cảm ứng nếu mục tiêu chính là ghi chú và học tập.",
        },
        {
            icon: <Monitor />,
            title: "Microsoft Surface Pro",
            subtitle: "Windows 2-in-1",
            color: "blue",
            points: [
                "Màn hình cảm ứng",
                "Bút cảm ứng",
                "Bàn phím rời",
                "Chạy ứng dụng Windows",
                "Hợp văn phòng, ký PDF, trình chiếu",
            ],
            lesson: "Surface Pro hợp hơn iPad khi phần mềm chính của bạn là Windows đầy đủ.",
        },
        {
            icon: <PenTool />,
            title: "Wacom Movink 13",
            subtitle: "Màn hình vẽ chuyên dụng",
            color: "violet",
            points: [
                "OLED 13.3 inch",
                "Mỏng nhẹ",
                "Kết nối một cáp",
                "Wacom Pro Pen 3",
                "Hỗ trợ lực nhấn và nghiêng bút",
            ],
            lesson: "Pen display chuyên dụng hợp digital art hơn laptop cảm ứng phổ thông.",
        },
        {
            icon: <PackageCheck />,
            title: "POS Touchscreen",
            subtitle: "Bán hàng / kiosk",
            color: "emerald",
            points: [
                "Cảm ứng bền",
                "Dễ lau",
                "Chân đế chắc",
                "Độ sáng đủ",
                "Có thể cần dùng găng tay/bút",
            ],
            lesson: "POS/kiosk ưu tiên độ bền và thao tác ổn định hơn độ phân giải thật cao.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
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

function PickerLab() {
    const scenarios = {
        office: {
            icon: <Monitor />,
            title: "Văn phòng thường",
            answer: "Touchscreen không bắt buộc. Với desktop hoặc laptop dùng bàn phím/chuột nhiều, cảm ứng có thể là tiện ích phụ chứ không phải ưu tiên chính.",
            color: "blue",
        },
        student: {
            icon: <BookOpen />,
            title: "Sinh viên ghi chú",
            answer: "Ưu tiên tablet hoặc laptop 2-in-1 có active stylus, palm rejection tốt, độ trễ thấp và pin tốt.",
            color: "fuchsia",
        },
        art: {
            icon: <PenTool />,
            title: "Vẽ chuyên nghiệp",
            answer: "Ưu tiên iPad Pro/Air, Wacom, Huion, XP-Pen hoặc pen display chuyên dụng thay vì laptop cảm ứng phổ thông.",
            color: "violet",
        },
        pos: {
            icon: <PackageCheck />,
            title: "POS / bán hàng",
            answer: "Ưu tiên độ bền, dễ lau, chân đế chắc, cảm ứng ổn định, độ sáng đủ và hỗ trợ găng tay/bút nếu môi trường cần.",
            color: "emerald",
        },
        industry: {
            icon: <ShieldCheck />,
            title: "Công nghiệp / y tế",
            answer: "Cảm ứng điện trở hoặc thiết kế chuyên dụng vẫn hữu ích nếu cần dùng găng tay, bút nhựa hoặc môi trường bụi/nước.",
            color: "orange",
        },
        film: {
            icon: <Sparkles />,
            title: "Muốn paper-like film",
            answer: "Paper-like viết đã hơn nhưng có thể giảm độ trong/màu và làm mòn ngòi nhanh hơn. Nên cân nhắc nếu bạn ưu tiên vẽ/ghi chú hơn xem phim.",
            color: "cyan",
        },
    };
    const [active, setActive] = useState("student");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: chọn màn hình cảm ứng theo tình huống"
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
            wrong: "Màn hình cảm ứng nào cũng dùng bút tốt",
            right: "Có cảm ứng không đồng nghĩa với active stylus. Muốn vẽ/ghi chú nghiêm túc cần lực nhấn, tilt, palm rejection và độ trễ thấp.",
        },
        {
            wrong: "Touchscreen laptop thay được tablet hoàn toàn",
            right: "Laptop cảm ứng thường nặng hơn, khó cầm lâu, pin có thể kém hơn và app Windows không phải lúc nào tối ưu cho chạm như tablet.",
        },
        {
            wrong: "Màn hình cảm ứng luôn cần thiết",
            right: "Nếu chủ yếu dùng PC desktop với chuột/bàn phím, touchscreen có thể không đáng tiền. Nó đáng giá hơn cho ghi chú, vẽ, ký, POS/kiosk.",
        },
        {
            wrong: "Cảm ứng điện trở là đồ dở",
            right: "Điện trở không mượt bằng điện dung nhưng vẫn hữu ích trong POS, công nghiệp, y tế hoặc nơi cần dùng găng tay.",
        },
        {
            wrong: "Dán paper-like film không ảnh hưởng gì",
            right: "Film có thể đổi cảm giác viết, giảm độ trong/màu, giảm chói hoặc làm mòn ngòi nhanh hơn.",
        },
    ];
    const tips = [
        "Văn phòng thông thường: touchscreen không bắt buộc.",
        "Ghi chú học tập: ưu tiên active stylus, palm rejection, latency thấp và pin tốt.",
        "Vẽ chuyên nghiệp: ưu tiên thiết bị chuyên bút như iPad/Wacom/Huion/XP-Pen.",
        "POS/bán hàng: ưu tiên độ bền, dễ lau, chân đế chắc và cảm ứng ổn định.",
        "Khi mua thiết bị có bút, kiểm tra bút có đi kèm hay mua riêng, có pressure/tilt/palm rejection không.",
        "Không dùng vật sắc nhọn chạm màn hình: dao, chìa khóa, bút bi đầu cứng.",
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
                        <span className="bg-fuchsia-500/20 text-fuchsia-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-fuchsia-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                Touchscreen = màn hình vừa hiển thị vừa nhận
                                thao tác chạm
                            </p>
                            <p>
                                Chạm → Lớp cảm ứng → Tọa độ X-Y → Controller →
                                OS
                            </p>
                            <br />
                            <p className="text-slate-500"># Công nghệ</p>
                            <p className="text-slate-300">
                                Capacitive • Resistive • Infrared • Active
                                Digitizer
                            </p>
                            <br />
                            <p className="text-slate-500"># Bút tốt cần</p>
                            <p className="text-slate-300">
                                Active stylus • Pressure • Tilt • Palm rejection
                                • Latency thấp
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
        question: "Màn hình cảm ứng có nhiệm vụ chính là gì?",
        options: [
            "Nhận thao tác chạm từ tay hoặc bút",
            "Tăng dung lượng RAM",
            "Làm mát CPU",
            "Thay thế ổ SSD",
        ],
        correct: 0,
        explanation:
            "Touchscreen nhận thao tác từ ngón tay hoặc bút và chuyển thành lệnh cho hệ điều hành.",
    },
    {
        question: "Cảm ứng điện dung phổ biến trên thiết bị nào?",
        options: [
            "Smartphone, tablet, laptop cảm ứng hiện đại",
            "Ổ cứng HDD",
            "Bộ nguồn PSU",
            "Dây mạng LAN",
        ],
        correct: 0,
        explanation:
            "Cảm ứng điện dung là công nghệ phổ biến nhất trên smartphone, tablet và laptop cảm ứng hiện đại.",
    },
    {
        question: "Palm rejection có tác dụng gì?",
        options: [
            "Bỏ qua lòng bàn tay khi viết/vẽ bằng bút",
            "Tăng tốc độ Wi‑Fi",
            "Làm màn hình sáng hơn",
            "Tự động thay pin",
        ],
        correct: 0,
        explanation:
            "Palm rejection giúp thiết bị không nhận nhầm lòng bàn tay là thao tác chạm khi bạn viết/vẽ.",
    },
    {
        question: "Cảm ứng điện trở nhận thao tác chủ yếu bằng gì?",
        options: [
            "Lực nhấn lên lớp cảm ứng",
            "Sóng Wi‑Fi",
            "Nhiệt độ CPU",
            "Tốc độ quạt",
        ],
        correct: 0,
        explanation:
            "Resistive touchscreen hoạt động nhờ lực nhấn làm hai lớp dẫn điện chạm nhau.",
    },
    {
        question: "Muốn vẽ digital nghiêm túc, nên ưu tiên gì?",
        options: [
            "Thiết bị hỗ trợ active stylus, lực nhấn, độ nghiêng và palm rejection tốt",
            "Màn hình cảm ứng rẻ nhất là đủ",
            "Chỉ cần màn hình thật bóng",
            "Không cần quan tâm độ trễ bút",
        ],
        correct: 0,
        explanation:
            "Vẽ digital cần bút tốt, pressure, tilt, palm rejection và latency thấp để nét vẽ tự nhiên.",
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
                    <strong className="text-fuchsia-400">
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
                <span className="text-fuchsia-400">
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
                        className="w-full py-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu màn hình cảm ứng. Tiếp theo là máy quét Scanner và
                Webcam — nhóm thiết bị nhập liệu dùng để đưa hình ảnh, tài liệu
                và video từ thế giới thật vào máy tính.
            </p>
            <Link
                to="/phan-10-4"
                className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-fuchsia-500/20"
            >
                Bài tiếp theo: 10.4 — Scanner và Webcam{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "fuchsia" }) {
    const colorMap = {
        fuchsia: "bg-fuchsia-500/20 text-fuchsia-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        blue: "bg-blue-500/20 text-blue-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        amber: "bg-amber-500/20 text-amber-300",
        violet: "bg-violet-500/20 text-violet-300",
        purple: "bg-purple-500/20 text-purple-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-fuchsia-500/10 border-fuchsia-400/50" : softBorder(color)}`}
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
function WarnBullet({ text }) {
    return (
        <div className="flex items-start gap-2 text-sm text-slate-300">
            <AlertTriangle
                className="text-orange-400 shrink-0 mt-0.5"
                size={16}
            />{" "}
            <span>{text}</span>
        </div>
    );
}
function badgeColor(color) {
    const map = {
        fuchsia:
            "bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        violet: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.fuchsia;
}
function softBorder(color) {
    const map = {
        fuchsia: "bg-fuchsia-500/5 border-fuchsia-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        violet: "bg-violet-500/5 border-violet-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.fuchsia;
}
function textColor(color) {
    const map = {
        fuchsia: "text-fuchsia-300",
        yellow: "text-yellow-300",
        blue: "text-blue-300",
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        violet: "text-violet-300",
        purple: "text-purple-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-fuchsia-300";
}
