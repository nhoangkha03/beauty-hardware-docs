import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    Bluetooth,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    Cpu,
    Gamepad2,
    Gauge,
    Keyboard,
    Layers3,
    Lightbulb,
    Monitor,
    MousePointer2,
    PackageCheck,
    PlugZap,
    Puzzle,
    Radio,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    Type,
    Usb,
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
                            <Keyboard className="text-indigo-400" size={24} />
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
                    <div className="text-sm font-semibold text-indigo-300 bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/20">
                        Bài 10.1
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <ControlPanelAnalogy />
                <KeySignalSimulator />
                <MechanismExplorer />
                <SwitchExplorer />
                <LayoutExplorer />
                <ConnectionGuide />
                <SpecsExplorer />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-indigo-300">
                        <BookOpen size={16} /> Phần 10: Keyboard
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Bàn phím
                        <span className="block text-indigo-400">
                            cơ chế, switch, kết nối
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Bàn phím là thiết bị bạn chạm vào liên tục mỗi ngày.
                        Chọn đúng bàn phím có thể giúp gõ nhanh hơn, ít mỏi tay
                        hơn, chơi game phản hồi tốt hơn và làm việc thoải mái
                        hơn.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Type size={16} />} text="Input Device" />
                        <Tag icon={<Puzzle size={16} />} text="Switch" />
                        <Tag icon={<Keyboard size={16} />} text="Layout" />
                        <Tag icon={<Usb size={16} />} text="USB" />
                        <Tag
                            icon={<Radio size={16} />}
                            text="2.4GHz / Bluetooth"
                        />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Keyboard />}
                            label="Keyboard"
                            desc="Nhận phím bấm"
                            color="indigo"
                            highlight
                        />
                        <HeroTile
                            icon={<Cpu />}
                            label="Controller"
                            desc="Xử lý tín hiệu"
                            color="blue"
                        />
                        <HeroTile
                            icon={<Puzzle />}
                            label="Switch"
                            desc="Cảm giác gõ"
                            color="orange"
                        />
                        <HeroTile
                            icon={<PlugZap />}
                            label="Connection"
                            desc="Gửi về PC"
                            color="cyan"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Luồng cơ bản</p>
                        <p>Ngón tay → Switch → Matrix</p>
                        <p className="text-indigo-300">
                            → Controller → USB/Bluetooth/2.4GHz
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu bàn phím là thiết bị nhập liệu dùng để đưa ký tự, phím tắt và lệnh điều khiển vào máy tính.",
        "Nắm cơ chế nhận phím qua switch/lớp màng, keyboard matrix, controller và tín hiệu USB/Bluetooth/2.4GHz.",
        "Phân biệt membrane, scissor-switch, mechanical, optical và magnetic/Hall Effect keyboard.",
        "Hiểu các switch phổ biến: linear, tactile, clicky, silent, low-profile và cách chọn theo nhu cầu.",
        "Đọc được thông số quan trọng: layout, actuation force, actuation point, polling rate, keycap, hot-swap, stabilizer, plate/foam/gasket mount.",
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
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-300 flex items-center justify-center font-bold mb-4">
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
            icon: <Type />,
            title: "Nhập ký tự",
            desc: "Gõ chữ, số, dấu câu và văn bản vào máy tính.",
            color: "indigo",
        },
        {
            icon: <Settings />,
            title: "Lệnh điều khiển",
            desc: "Enter, Esc, F5, Alt-Tab, Ctrl+C/Ctrl+V và phím tắt hệ thống.",
            color: "blue",
        },
        {
            icon: <Gamepad2 />,
            title: "Gaming input",
            desc: "WASD, phím kỹ năng, macro và phản hồi nhanh trong game.",
            color: "orange",
        },
        {
            icon: <Sparkles />,
            title: "Trải nghiệm gõ",
            desc: "Switch, keycap, layout và kết nối quyết định cảm giác dùng hằng ngày.",
            color: "purple",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Bàn phím là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Bàn phím</strong>, tiếng Anh
                    là <strong className="text-indigo-300">Keyboard</strong>, là
                    thiết bị nhập liệu dùng để đưa ký tự, lệnh và thao tác điều
                    khiển vào máy tính. Bàn phím khác nhau không chỉ ở ngoại
                    hình, mà còn ở cơ chế phím, switch, layout, kết nối, độ trễ,
                    keycap, tùy chỉnh và cảm giác gõ.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <RoleCard key={c.title} {...c} />
                    ))}
                </div>
                <div className="mt-6 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Ngón tay nhấn phím → Bàn phím nhận tín hiệu → Gửi về máy
                    tính → Máy tính hiểu thành chữ, số, phím tắt hoặc lệnh
                </div>
            </div>
        </section>
    );
}

function ControlPanelAnalogy() {
    const cards = [
        {
            icon: <Keyboard />,
            title: "Bàn phím = bảng điều khiển",
            desc: "Mỗi phím là một nút gửi lệnh cho máy tính.",
            color: "indigo",
        },
        {
            icon: <Puzzle />,
            title: "Switch = cơ chế nút bấm",
            desc: "Quyết định phím nhẹ, nặng, clicky, êm hay có khấc.",
            color: "orange",
        },
        {
            icon: <Cpu />,
            title: "Controller = bộ phiên dịch",
            desc: "Xác định phím nào được nhấn và mã hóa tín hiệu.",
            color: "blue",
        },
        {
            icon: <PlugZap />,
            title: "Kết nối = đường truyền",
            desc: "USB, Bluetooth hoặc 2.4GHz gửi lệnh về máy tính.",
            color: "cyan",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: bảng điều khiển của máy tính"
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

function KeySignalSimulator() {
    const flows = {
        normal: {
            title: "Nhấn 1 phím",
            color: "indigo",
            steps: [
                {
                    icon: <Type />,
                    title: "Bạn nhấn phím A",
                    desc: "Ngón tay tạo lực lên keycap và switch/lớp màng bên dưới.",
                },
                {
                    icon: <Puzzle />,
                    title: "Switch được kích hoạt",
                    desc: "Cơ chế bên dưới phím đóng mạch hoặc phát hiện tín hiệu.",
                },
                {
                    icon: <Layers3 />,
                    title: "Matrix xác định vị trí",
                    desc: "Bàn phím đọc hàng và cột để biết phím nào được nhấn.",
                },
                {
                    icon: <Cpu />,
                    title: "Controller xử lý",
                    desc: "Bộ điều khiển chuyển vị trí phím thành mã tín hiệu.",
                },
                {
                    icon: <PlugZap />,
                    title: "Gửi về máy tính",
                    desc: "Tín hiệu đi qua USB, Bluetooth hoặc 2.4GHz.",
                },
            ],
        },
        gaming: {
            title: "Nhấn nhiều phím",
            color: "orange",
            steps: [
                {
                    icon: <Gamepad2 />,
                    title: "W + Shift + Space",
                    desc: "Trong game, bạn có thể nhấn nhiều phím cùng lúc.",
                },
                {
                    icon: <ShieldCheck />,
                    title: "Anti-ghosting",
                    desc: "Tránh nhận nhầm phím không được bấm.",
                },
                {
                    icon: <PackageCheck />,
                    title: "N-key rollover",
                    desc: "Cho phép nhận nhiều phím cùng lúc chính xác hơn.",
                },
                {
                    icon: <Gauge />,
                    title: "Polling rate",
                    desc: "Bàn phím gửi tín hiệu về PC nhiều lần mỗi giây.",
                },
            ],
        },
        custom: {
            title: "Bàn phím cao cấp",
            color: "purple",
            steps: [
                {
                    icon: <Settings />,
                    title: "Profile",
                    desc: "Lưu layout, đèn, macro hoặc chế độ riêng.",
                },
                {
                    icon: <Workflow />,
                    title: "Macro",
                    desc: "Gán nhiều thao tác vào một phím.",
                },
                {
                    icon: <Zap />,
                    title: "Rapid trigger",
                    desc: "Hall Effect có thể nhận lại phím ngay khi nhả/nhấn theo hành trình.",
                },
                {
                    icon: <Sparkles />,
                    title: "Tùy chỉnh cảm giác",
                    desc: "Switch, keycap, foam, stab và gasket mount ảnh hưởng âm thanh/cảm giác.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("normal");
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
                title="Bàn phím nhận phím bấm như thế nào?"
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

function MechanismExplorer() {
    const types = {
        membrane: {
            icon: <Layers3 />,
            title: "Membrane",
            color: "cyan",
            desc: "Dùng lớp màng cao su bên dưới phím.",
            good: ["Rẻ", "Êm", "Nhẹ", "Phổ biến"],
            bad: ["Cảm giác gõ không rõ", "Độ bền thấp hơn phím cơ"],
            fit: "Văn phòng, học sinh, người dùng phổ thông",
        },
        scissor: {
            icon: <Monitor />,
            title: "Scissor-switch",
            color: "blue",
            desc: "Cơ chế cắt kéo, thường gặp trên laptop và bàn phím mỏng.",
            good: ["Mỏng", "Gõ nhanh", "Hành trình ngắn", "Ít chiếm chỗ"],
            bad: ["Khó sửa", "Ít tùy biến"],
            fit: "Laptop, bàn phím mỏng, văn phòng",
        },
        mechanical: {
            icon: <Puzzle />,
            title: "Mechanical",
            color: "orange",
            desc: "Mỗi phím có một switch cơ riêng.",
            good: ["Cảm giác tốt", "Bền", "Tùy biến cao", "Nhiều switch"],
            bad: ["Đắt hơn", "Có thể ồn"],
            fit: "Gõ nhiều, gaming, lập trình",
        },
        optical: {
            icon: <Zap />,
            title: "Optical",
            color: "purple",
            desc: "Dùng ánh sáng để nhận tín hiệu thay vì tiếp điểm cơ truyền thống.",
            good: ["Phản hồi nhanh", "Ít hao mòn tiếp điểm"],
            bad: ["Ít phổ biến hơn", "Hệ sinh thái switch kén hơn"],
            fit: "Gaming tốc độ cao",
        },
        hall: {
            icon: <Gauge />,
            title: "Magnetic / Hall Effect",
            color: "red",
            desc: "Dùng cảm biến từ tính để đo hành trình phím.",
            good: ["Chỉnh điểm kích hoạt", "Rapid trigger", "Rất hợp game FPS"],
            bad: ["Giá cao hơn", "Cần phần mềm tốt"],
            fit: "Gaming cạnh tranh",
        },
    };
    const [active, setActive] = useState("mechanical");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="indigo"
                title="Các cơ chế bàn phím phổ biến"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
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

function SwitchExplorer() {
    const rows = [
        [
            "Linear",
            "Trơn, đi thẳng xuống",
            "Thường êm hơn",
            "Gaming, người thích gõ nhẹ",
        ],
        ["Tactile", "Có khấc nhẹ", "Vừa phải", "Gõ văn bản, lập trình"],
        [
            "Clicky",
            "Có khấc rõ + tiếng click",
            "To",
            "Phòng riêng, người thích tiếng click",
        ],
        [
            "Silent",
            "Giảm tiếng khi chạm đáy/nhả phím",
            "Êm",
            "Văn phòng, ký túc xá",
        ],
        [
            "Low-profile",
            "Hành trình ngắn, phím thấp",
            "Tùy loại",
            "Người thích cảm giác laptop",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="orange"
                title="Các loại switch cơ phổ biến"
                icon={<Puzzle />}
            />
            <DataTable
                title="Switch quyết định cảm giác bấm"
                rows={rows}
                headers={["Switch", "Cảm giác", "Âm thanh", "Phù hợp"]}
                accent="orange"
            />
            <div className="grid md:grid-cols-4 gap-3">
                <RuleCard
                    label="Linear"
                    value="Mượt, nhanh, hợp game."
                    color="emerald"
                />
                <RuleCard
                    label="Tactile"
                    value="Có khấc, hợp gõ chữ."
                    color="blue"
                />
                <RuleCard
                    label="Clicky"
                    value="Vui nhưng ồn, nên dùng phòng riêng."
                    color="red"
                />
                <RuleCard
                    label="Silent"
                    value="Êm hơn, hợp nơi yên tĩnh."
                    color="purple"
                />
            </div>
        </section>
    );
}

function LayoutExplorer() {
    const layouts = {
        full: {
            icon: <Keyboard />,
            title: "Full-size / 100%",
            color: "blue",
            keys: "Đủ phím chữ, F-row, điều hướng, numpad",
            good: "Đầy đủ nhất",
            bad: "Rộng, chiếm bàn",
            fit: "Kế toán, Excel, nhập số liệu, văn phòng",
        },
        tkl: {
            icon: <Keyboard />,
            title: "TKL / 80%",
            color: "emerald",
            keys: "Bỏ numpad, giữ F-row và điều hướng",
            good: "Gọn hơn full-size",
            bad: "Không có numpad",
            fit: "Gaming, lập trình, văn phòng",
        },
        seventyfive: {
            icon: <Keyboard />,
            title: "75%",
            color: "indigo",
            keys: "Gọn hơn TKL, giữ nhiều phím quan trọng",
            good: "Cân bằng tốt",
            bad: "Cụm phím hơi sát",
            fit: "Người muốn gọn nhưng vẫn tiện",
        },
        sixtyfive: {
            icon: <Keyboard />,
            title: "65%",
            color: "orange",
            keys: "Bỏ F-row, giữ phím mũi tên",
            good: "Rất gọn",
            bad: "Dùng Fn nhiều hơn",
            fit: "Setup nhỏ, gaming",
        },
        sixty: {
            icon: <Keyboard />,
            title: "60%",
            color: "red",
            keys: "Chỉ còn cụm chữ chính",
            good: "Siêu gọn",
            bad: "Thiếu nhiều phím trực tiếp",
            fit: "Người quen dùng layer/Fn",
        },
        alice: {
            icon: <Sparkles />,
            title: "Alice / Ergonomic",
            color: "purple",
            keys: "Tách góc gõ tự nhiên hơn",
            good: "Có thể giảm mỏi tay nếu hợp dáng",
            bad: "Cần thời gian làm quen",
            fit: "Người gõ nhiều, thích ergonomic",
        },
    };
    const [active, setActive] = useState("seventyfive");
    const item = layouts[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="blue"
                title="Layout và kích thước bàn phím"
                icon={<Keyboard />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
                    {Object.entries(layouts).map(([key, l]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(l.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(l.icon, { size: 20 })}{" "}
                                {l.title}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {item.keys}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <InfoCard
                            label="Ưu điểm"
                            value={item.good}
                            color={item.color}
                        />
                        <InfoCard
                            label="Nhược điểm"
                            value={item.bad}
                            color="red"
                        />
                        <InfoCard
                            label="Phù hợp"
                            value={item.fit}
                            color="emerald"
                        />
                    </div>
                </div>
                <div className="mt-6 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-indigo-300">Người mới:</strong> văn
                    phòng nhập số chọn full-size; gaming/lập trình chọn TKL hoặc
                    75%; setup nhỏ chọn 65%; không nên chọn 60% nếu chưa quen
                    Fn/layer.
                </div>
            </div>
        </section>
    );
}

function ConnectionGuide() {
    const rows = [
        [
            "USB có dây",
            "Ổn định, độ trễ thấp, không cần pin",
            "Có dây, kém gọn",
            "Gaming cạnh tranh, desktop cố định",
        ],
        [
            "Bluetooth",
            "Tiện, đa thiết bị, hợp laptop/tablet",
            "Độ trễ cao hơn, đôi khi chập chờn",
            "Văn phòng, di động",
        ],
        [
            "2.4GHz Wireless",
            "Độ trễ thấp hơn Bluetooth, gọn",
            "Cần receiver, cần pin/sạc",
            "Gaming không dây, setup gọn",
        ],
        [
            "Tri-mode",
            "USB-C + Bluetooth + 2.4GHz",
            "Giá thường cao hơn",
            "Người dùng nhiều thiết bị",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="cyan"
                title="Kết nối: USB, Bluetooth, 2.4GHz, Tri-mode"
                icon={<PlugZap />}
            />
            <DataTable
                title="Chọn kết nối theo nhu cầu"
                rows={rows}
                headers={["Kết nối", "Ưu điểm", "Nhược điểm", "Phù hợp"]}
                accent="cyan"
            />
            <div className="grid md:grid-cols-3 gap-3">
                <RuleCard
                    label="USB-C"
                    value="Ổn định nhất, hợp gaming cạnh tranh."
                    color="blue"
                />
                <RuleCard
                    label="2.4GHz"
                    value="Nhanh, gọn dây, hợp gaming không dây."
                    color="emerald"
                />
                <RuleCard
                    label="Bluetooth"
                    value="Tiện đa thiết bị, hợp văn phòng."
                    color="purple"
                />
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        switch: {
            icon: <Puzzle />,
            title: "Switch Type",
            detail: "Yếu tố ảnh hưởng nhiều nhất đến cảm giác gõ: linear, tactile, clicky, silent, low-profile, optical, Hall Effect.",
            impact: "Gaming FPS thường hợp linear/Hall Effect; gõ văn bản hợp tactile/silent tactile; nơi yên tĩnh tránh clicky.",
        },
        force: {
            icon: <Gauge />,
            title: "Actuation Force",
            detail: "Lực cần để kích hoạt phím, thường tính bằng gram-force/gf.",
            impact: "35–45g nhẹ hợp game; 45–55g cân bằng; 60g+ ít bấm nhầm hơn nhưng dễ mỏi nếu gõ nhiều.",
        },
        point: {
            icon: <Zap />,
            title: "Actuation Point",
            detail: "Độ sâu phím cần nhấn để bàn phím nhận tín hiệu.",
            impact: "Hall Effect có thể chỉnh điểm nhận phím rất nông, hữu ích cho game FPS nhưng dễ bấm nhầm nếu đặt quá nhạy.",
        },
        polling: {
            icon: <Radio />,
            title: "Polling Rate",
            detail: "Số lần bàn phím gửi tín hiệu về máy tính mỗi giây: 125Hz, 1000Hz, 4000Hz, 8000Hz.",
            impact: "Văn phòng 125–1000Hz đều đủ; gaming cạnh tranh nên dùng USB/2.4GHz 1000Hz trở lên.",
        },
        keycap: {
            icon: <Type />,
            title: "Keycap Material",
            detail: "ABS rẻ, dễ bóng; PBT bền hơn, ít bóng; double-shot/dye-sub ảnh hưởng độ bền ký tự.",
            impact: "Dùng lâu nên ưu tiên PBT double-shot nếu ngân sách cho phép.",
        },
        hotswap: {
            icon: <Settings />,
            title: "Hot-swappable",
            detail: "Có thể rút switch và thay switch khác mà không cần hàn.",
            impact: "Người mới chơi phím cơ nên ưu tiên hot-swap 5-pin để dễ thử switch và thay switch hỏng.",
        },
        stab: {
            icon: <Layers3 />,
            title: "Stabilizer",
            detail: "Thanh cân bằng cho phím dài như Space, Enter, Shift, Backspace.",
            impact: "Stab kém gây lạch cạch, rung, âm rỗng và phím dài bấm không đều.",
        },
        mount: {
            icon: <Sparkles />,
            title: "Plate / Foam / Gasket",
            detail: "Plate giữ switch; foam giảm âm rỗng; gasket mount tạo cảm giác êm, đàn hồi hơn.",
            impact: "Các yếu tố này không làm bạn gõ nhanh hơn ngay, nhưng ảnh hưởng lớn đến âm thanh và cảm giác.",
        },
    };
    const [active, setActive] = useState("hotswap");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
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

function RealExamples() {
    const examples = [
        {
            icon: <Monitor />,
            title: "Logitech MX Keys S",
            subtitle: "Bàn phím văn phòng cao cấp",
            color: "cyan",
            points: [
                "Phím thấp, êm",
                "Không dây",
                "Hỗ trợ nhiều thiết bị",
                "Hợp laptop + desktop",
                "Không hướng tới gaming cạnh tranh",
            ],
            lesson: "Người gõ văn phòng nhiều không nhất thiết cần phím cơ; bàn phím thấp, êm và đa thiết bị có thể hợp hơn.",
        },
        {
            icon: <Keyboard />,
            title: "Akko 5075B Plus",
            subtitle: "Phím cơ 75% giá dễ tiếp cận",
            color: "indigo",
            points: [
                "Layout 75%",
                "2.4GHz/Bluetooth/Type-C",
                "Gasket mount",
                "PBT double-shot",
                "Hot-swap 5-pin",
            ],
            lesson: "Layout 75%, tri-mode và hot-swap là tổ hợp rất dễ dùng cho người mới chơi phím cơ.",
        },
        {
            icon: <Settings />,
            title: "Keychron V1",
            subtitle: "Phím cơ custom phổ thông",
            color: "blue",
            points: [
                "Layout 75%",
                "Hot-swap",
                "RGB",
                "Hỗ trợ VIA",
                "Mac/Windows",
            ],
            lesson: "VIA/remap hữu ích cho lập trình viên hoặc người dùng nhiều hệ điều hành.",
        },
        {
            icon: <Zap />,
            title: "Logitech G512 X",
            subtitle: "Hall Effect / Magnetic gaming",
            color: "red",
            points: [
                "Switch từ tính/TMR",
                "Rapid trigger",
                "Điểm kích hoạt tùy chỉnh",
                "Hợp game FPS",
                "Không cần thiết cho văn phòng nhẹ",
            ],
            lesson: "Hall Effect đáng giá khi bạn chơi game cạnh tranh; với gõ văn bản, switch và layout quan trọng hơn.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
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
            title: "Văn phòng yên tĩnh",
            answer: "Chọn scissor-switch, membrane tốt, silent switch hoặc tactile nhẹ. Tránh clicky nếu ngồi chung phòng.",
            color: "cyan",
        },
        excel: {
            icon: <Type />,
            title: "Excel / nhập số",
            answer: "Chọn full-size vì numpad rất hữu ích. TKL/75% gọn hơn nhưng thiếu numpad sẽ bất tiện nếu nhập số nhiều.",
            color: "blue",
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Gaming FPS",
            answer: "Ưu tiên linear, optical hoặc Hall Effect; dùng USB-C hoặc 2.4GHz tốt; polling 1000Hz trở lên là hợp lý.",
            color: "orange",
        },
        coding: {
            icon: <Cpu />,
            title: "Lập trình / gõ nhiều",
            answer: "TKL hoặc 75% rất cân bằng. Switch tactile nhẹ hoặc linear tùy gu; hot-swap và VIA/remap là điểm cộng.",
            color: "indigo",
        },
        small: {
            icon: <Keyboard />,
            title: "Setup nhỏ",
            answer: "65% gọn và vẫn có mũi tên. 60% chỉ nên chọn nếu bạn quen Fn/layer và không cần F-row trực tiếp.",
            color: "purple",
        },
        first: {
            icon: <PackageCheck />,
            title: "Phím cơ đầu tiên",
            answer: "Chọn layout 75%/TKL, switch linear nhẹ hoặc tactile nhẹ, hot-swap 5-pin, keycap PBT nếu có thể và tri-mode nếu dùng nhiều thiết bị.",
            color: "emerald",
        },
    };
    const [active, setActive] = useState("first");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: chọn bàn phím theo tình huống"
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
            wrong: "Bàn phím cơ lúc nào cũng tốt hơn membrane",
            right: "Phím cơ có cảm giác và độ bền tốt trong nhiều trường hợp, nhưng scissor-switch hoặc membrane tốt vẫn rất ổn cho văn phòng yên tĩnh.",
        },
        {
            wrong: "Switch blue/clicky là chuẩn phím cơ",
            right: "Clicky chỉ là một loại switch. Nó vui tai nhưng rất ồn, dễ làm phiền văn phòng, lớp học hoặc phòng chung.",
        },
        {
            wrong: "Bàn phím càng nhỏ càng tốt",
            right: "Bàn phím nhỏ cần dùng Fn/layer nhiều hơn. Người mới thường dễ dùng 75% hoặc TKL hơn 60%.",
        },
        {
            wrong: "Không dây là sẽ lag",
            right: "Bluetooth có thể trễ hơn, nhưng 2.4GHz tốt đủ nhanh cho gaming; USB-C vẫn ổn định nhất cho gaming cạnh tranh.",
        },
        {
            wrong: "RGB càng nhiều thì bàn phím càng tốt",
            right: "RGB chỉ là thẩm mỹ. Chất lượng còn phụ thuộc switch, stabilizer, keycap, case, plate, kết nối, layout và phần mềm.",
        },
    ];
    const tips = [
        "Người mới nên chọn layout 75% hoặc TKL nếu không cần numpad.",
        "Làm Excel, kế toán, nhập số nhiều thì chọn full-size.",
        "Gaming FPS nên ưu tiên linear hoặc Hall Effect, USB-C hoặc 2.4GHz tốt.",
        "Dùng nơi yên tĩnh thì tránh clicky switch; chọn silent, tactile nhẹ hoặc bàn phím thấp.",
        "Ưu tiên hot-swap nếu mua phím cơ đầu tiên để sau này đổi switch dễ hơn.",
        "Dùng lâu nên ưu tiên keycap PBT, đặc biệt PBT double-shot nếu ngân sách cho phép.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="12"
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
                        <span className="bg-indigo-500/20 text-indigo-300 p-2 rounded-xl">
                            13
                        </span>{" "}
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-indigo-300 border border-slate-800 shadow-inner space-y-2">
                            <p>Keyboard = thiết bị nhập liệu</p>
                            <p>
                                Ngón tay → Switch → Matrix → Controller →
                                USB/Bluetooth/2.4GHz
                            </p>
                            <br />
                            <p className="text-slate-500"># Switch</p>
                            <p className="text-slate-300">
                                Linear = mượt/game • Tactile = gõ chữ • Clicky =
                                vui nhưng ồn • Silent = yên tĩnh
                            </p>
                            <br />
                            <p className="text-slate-500"># Người mới</p>
                            <p className="text-slate-300">
                                75% hoặc TKL • hot-swap • PBT nếu có •
                                USB/2.4GHz cho gaming
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
        question: "Bàn phím có nhiệm vụ chính là gì?",
        options: [
            "Nhập dữ liệu và lệnh vào máy tính",
            "Làm mát CPU",
            "Lưu trữ dữ liệu lâu dài",
            "Cấp điện cho màn hình",
        ],
        correct: 0,
        explanation:
            "Bàn phím là thiết bị nhập liệu dùng để đưa ký tự, phím tắt và lệnh điều khiển vào máy tính.",
    },
    {
        question: "Switch linear có đặc điểm gì?",
        options: [
            "Bấm mượt, đi thẳng xuống, thường hợp gaming",
            "Có tiếng click rất lớn",
            "Không thể dùng để chơi game",
            "Chỉ dùng cho laptop",
        ],
        correct: 0,
        explanation:
            "Linear switch đi thẳng xuống, cảm giác mượt và thường được game thủ thích vì phản hồi nhanh.",
    },
    {
        question: "Layout TKL khác full-size ở điểm nào?",
        options: [
            "TKL bỏ cụm numpad",
            "TKL không có phím chữ",
            "TKL không dùng được trên Windows",
            "TKL chỉ kết nối Bluetooth",
        ],
        correct: 0,
        explanation:
            "TKL nghĩa là tenkeyless, thường bỏ cụm numpad để bàn phím gọn hơn.",
    },
    {
        question: "Hot-swap trên bàn phím cơ nghĩa là gì?",
        options: [
            "Có thể thay switch mà không cần hàn",
            "Có thể thay CPU",
            "Có thể tăng dung lượng RAM",
            "Có thể làm bàn phím chống nước tuyệt đối",
        ],
        correct: 0,
        explanation:
            "Hot-swap cho phép nhổ switch cũ và cắm switch mới mà không cần hàn.",
    },
    {
        question: "Kết nối nào thường ổn định nhất cho gaming cạnh tranh?",
        options: [
            "USB có dây",
            "Bluetooth đời cũ",
            "Không kết nối",
            "Cắm qua màn hình bằng HDMI",
        ],
        correct: 0,
        explanation:
            "USB có dây thường ổn định, độ trễ thấp và không phụ thuộc pin/receiver.",
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
                Bạn đã hiểu cơ chế và cách chọn bàn phím. Tiếp theo là chuột —
                Mouse: cơ chế quang/laser, DPI, polling rate và vì sao chuột ảnh
                hưởng lớn tới thao tác văn phòng, thiết kế và gaming.
            </p>
            <Link
                to="/phan-10-2"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20"
            >
                Bài tiếp theo: 10.2 — Chuột Mouse <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "indigo" }) {
    const colorMap = {
        indigo: "bg-indigo-500/20 text-indigo-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        blue: "bg-blue-500/20 text-blue-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        amber: "bg-amber-500/20 text-amber-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-indigo-500/10 border-indigo-400/50" : softBorder(color)}`}
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
function InfoCard({ label, value, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-5`}>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                {label}
            </p>
            <p className="text-white font-bold leading-relaxed text-sm">
                {value}
            </p>
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
        indigo: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.indigo;
}
function softBorder(color) {
    const map = {
        indigo: "bg-indigo-500/5 border-indigo-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.indigo;
}
function textColor(color) {
    const map = {
        indigo: "text-indigo-300",
        yellow: "text-yellow-300",
        blue: "text-blue-300",
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-indigo-300";
}
