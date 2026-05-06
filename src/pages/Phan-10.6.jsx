import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BatteryCharging,
    Bluetooth,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    CircleDot,
    Gamepad2,
    Gauge,
    Hand,
    Joystick,
    Lightbulb,
    Monitor,
    PackageCheck,
    PlugZap,
    Radio,
    RotateCcw,
    Search,
    Settings,
    ShieldCheck,
    SlidersHorizontal,
    Sparkles,
    Target,
    Usb,
    Vibrate,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-violet-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-violet-500/10 border border-violet-400/30 flex items-center justify-center shadow-lg shadow-violet-500/10">
                            <Gamepad2 className="text-violet-400" size={24} />
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
                    <div className="text-sm font-semibold text-violet-300 bg-violet-400/10 px-3 py-1 rounded-full border border-violet-400/20">
                        Bài 10.6
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <VehicleAnalogy />
                <ControllerFlowSimulator />
                <ControllerTypeExplorer />
                <AnalogAndDriftGuide />
                <FeedbackGuide />
                <SpecsExplorer />
                <CompatibilityGuide />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-violet-300">
                        <BookOpen size={16} /> Phần 10: Controller
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Bộ điều khiển
                        <span className="block text-violet-400">
                            Gamepad, Joystick, Racing Wheel
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Bàn phím và chuột rất mạnh, nhưng game thể thao, đua xe,
                        bay mô phỏng và game hành động góc nhìn thứ ba thường tự
                        nhiên hơn với controller nhờ analog, trigger và phản hồi
                        rung/lực.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Gamepad2 size={16} />} text="Gamepad" />
                        <Tag
                            icon={<Joystick size={16} />}
                            text="Joystick / HOTAS"
                        />
                        <Tag
                            icon={<Gauge size={16} />}
                            text="Analog / Trigger"
                        />
                        <Tag
                            icon={<Vibrate size={16} />}
                            text="Haptic / Rumble"
                        />
                        <Tag
                            icon={<RotateCcw size={16} />}
                            text="Force Feedback"
                        />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Gamepad2 />}
                            label="Gamepad"
                            desc="Đa dụng"
                            color="violet"
                            highlight
                        />
                        <HeroTile
                            icon={<Joystick />}
                            label="Flight Stick"
                            desc="Mô phỏng bay"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<RotateCcw />}
                            label="Racing Wheel"
                            desc="Lái xe thật hơn"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Target />}
                            label="Arcade Stick"
                            desc="Đối kháng"
                            color="red"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Khác biệt cốt lõi</p>
                        <p>Keyboard: nhấn / không nhấn</p>
                        <p className="text-violet-300">
                            Analog: 20% • 60% • 100%
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu controller là thiết bị nhập liệu dùng để điều khiển nhân vật, phương tiện, camera hoặc hệ thống mô phỏng.",
        "Phân biệt gamepad, joystick/flight stick, racing wheel, arcade stick, HOTAS, pedal và shifter.",
        "Nắm cơ chế tín hiệu: bấm nút, nghiêng analog, bóp trigger → cảm biến/công tắc → mạch điều khiển → USB/Bluetooth/2.4GHz/Xbox Wireless → game.",
        "Đọc được thông số quan trọng: analog stick, deadzone, drift, Hall Effect, D-pad, trigger, haptic feedback, force feedback, XInput/DirectInput, pin và remap.",
        "Biết chọn controller theo thể loại game: FPS, MOBA/RTS, game hành động, thể thao, đua xe, sim racing, mô phỏng bay, fighting game.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="violet"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-violet-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-300 flex items-center justify-center font-bold mb-4">
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
            icon: <Gamepad2 />,
            title: "Gamepad",
            desc: "Tay cầm đa dụng cho game hành động, thể thao, đua xe nhẹ, co-op local.",
            color: "violet",
        },
        {
            icon: <Joystick />,
            title: "Joystick / HOTAS",
            desc: "Điều khiển máy bay, tàu không gian, mô phỏng bay và chiến đấu trên không.",
            color: "cyan",
        },
        {
            icon: <RotateCcw />,
            title: "Racing Wheel",
            desc: "Vô lăng + pedal giúp kiểm soát cua, ga, phanh tốt hơn trong sim racing.",
            color: "orange",
        },
        {
            icon: <Target />,
            title: "Arcade Stick",
            desc: "Cần gạt và nút lớn cho fighting game, arcade, retro game.",
            color: "red",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Bộ điều khiển là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Bộ điều khiển</strong>, tiếng
                    Anh là{" "}
                    <strong className="text-violet-300">Controller</strong>, là
                    thiết bị nhập liệu dùng để điều khiển nhân vật, phương tiện,
                    camera hoặc hệ thống mô phỏng trong game/phần mềm. Điểm mạnh
                    lớn nhất so với bàn phím là{" "}
                    <strong className="text-white">chuyển động analog</strong>:
                    nghiêng nhẹ đi chậm, nghiêng mạnh chạy nhanh; bóp trigger ít
                    ga nhẹ, bóp hết ga mạnh.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <RoleCard key={c.title} {...c} />
                    ))}
                </div>
                <div className="mt-6 bg-violet-500/10 border border-violet-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Bấm nút / nghiêng analog / bóp trigger → Cảm biến ghi nhận →
                    Mạch xử lý → Game nhận lệnh → Nhân vật/phương tiện phản hồi
                </div>
            </div>
        </section>
    );
}

function VehicleAnalogy() {
    const cards = [
        {
            icon: <RotateCcw />,
            title: "Vô lăng",
            desc: "Xoay ít cua nhẹ, xoay nhiều cua gắt như xe thật.",
            color: "orange",
        },
        {
            icon: <Gauge />,
            title: "Pedal ga/phanh",
            desc: "Đạp 40% hay 100% tạo mức phản hồi khác nhau.",
            color: "emerald",
        },
        {
            icon: <Joystick />,
            title: "Cần lái máy bay",
            desc: "Kéo/đẩy/nghiêng để điều khiển hướng bay tự nhiên hơn.",
            color: "cyan",
        },
        {
            icon: <Gamepad2 />,
            title: "Tay cầm",
            desc: "Nút bấm, analog, trigger và rung trong một thiết bị nhỏ gọn.",
            color: "violet",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: vô lăng, cần lái, nút bấm thu nhỏ"
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

function ControllerFlowSimulator() {
    const flows = {
        gamepad: {
            title: "Gamepad",
            color: "violet",
            steps: [
                {
                    icon: <Gamepad2 />,
                    title: "Nhấn A / nghiêng analog",
                    desc: "Bạn nhấn nút để nhảy hoặc nghiêng analog để di chuyển.",
                },
                {
                    icon: <Gauge />,
                    title: "Cảm biến đo mức nghiêng",
                    desc: "Analog không chỉ bật/tắt mà có nhiều mức: 20%, 60%, 100%.",
                },
                {
                    icon: <Settings />,
                    title: "Mạch điều khiển xử lý",
                    desc: "Controller chuyển thao tác thành dữ liệu số.",
                },
                {
                    icon: <PlugZap />,
                    title: "Gửi qua USB / không dây",
                    desc: "Tín hiệu đi qua USB, Bluetooth, 2.4GHz hoặc Xbox Wireless.",
                },
                {
                    icon: <CheckCircle2 />,
                    title: "Game phản hồi",
                    desc: "Nhân vật nhảy, đi chậm, chạy nhanh hoặc camera xoay.",
                },
            ],
        },
        racing: {
            title: "Racing Wheel",
            color: "orange",
            steps: [
                {
                    icon: <RotateCcw />,
                    title: "Xoay vô lăng",
                    desc: "Xoay nhẹ xe cua nhẹ; xoay nhiều xe cua gắt.",
                },
                {
                    icon: <Gauge />,
                    title: "Đạp pedal",
                    desc: "Ga/phanh analog giúp tăng tốc hoặc phanh theo mức lực.",
                },
                {
                    icon: <Vibrate />,
                    title: "Force feedback phản hồi",
                    desc: "Vô lăng rung/kéo lại khi xe trượt, leo lề hoặc mất bám.",
                },
                {
                    icon: <Target />,
                    title: "Kiểm soát chính xác",
                    desc: "Người chơi cảm nhận xe tốt hơn gamepad trong sim racing.",
                },
            ],
        },
        flight: {
            title: "Flight Stick / HOTAS",
            color: "cyan",
            steps: [
                {
                    icon: <Joystick />,
                    title: "Kéo/đẩy cần lái",
                    desc: "Kéo về sau mũi máy bay ngẩng lên; đẩy về trước mũi chúi xuống.",
                },
                {
                    icon: <SlidersHorizontal />,
                    title: "Throttle điều khiển lực đẩy",
                    desc: "Tay trái chỉnh ga, tay phải điều khiển hướng bay.",
                },
                {
                    icon: <CircleDot />,
                    title: "Hat switch / nút phụ",
                    desc: "Điều khiển góc nhìn, trim, vũ khí, radio hoặc chức năng mô phỏng.",
                },
                {
                    icon: <Sparkles />,
                    title: "Cảm giác nhập vai",
                    desc: "Mô phỏng bay tự nhiên hơn nhiều so với bàn phím.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("gamepad");
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
                title="Controller gửi tín hiệu như thế nào?"
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

function ControllerTypeExplorer() {
    const types = {
        gamepad: {
            icon: <Gamepad2 />,
            title: "Gamepad",
            color: "violet",
            desc: "Tay cầm chơi game phổ biến với analog, D-pad, nút mặt, shoulder, trigger và rung.",
            good: [
                "Dễ dùng",
                "Đa dụng",
                "Nhiều game hỗ trợ",
                "Hợp co-op local",
            ],
            bad: [
                "Không chính xác bằng chuột trong FPS",
                "Analog có thể drift",
            ],
            fit: "Game hành động, thể thao, đua xe nhẹ, platformer, RPG",
        },
        joystick: {
            icon: <Joystick />,
            title: "Joystick / Flight Stick",
            color: "cyan",
            desc: "Cần điều khiển chuyên cho bay, không gian, máy bay hoặc arcade.",
            good: [
                "Điều khiển bay tự nhiên",
                "Chính xác hơn bàn phím",
                "Nhiều nút phụ",
            ],
            bad: ["Kén game", "Chiếm chỗ"],
            fit: "Flight Simulator, Elite Dangerous, War Thunder, DCS",
        },
        wheel: {
            icon: <RotateCcw />,
            title: "Racing Wheel",
            color: "orange",
            desc: "Vô lăng, pedal và đôi khi cần số cho mô phỏng lái xe.",
            good: [
                "Lái xe thật hơn",
                "Kiểm soát cua/ga/phanh tốt",
                "Force feedback",
            ],
            bad: ["Đắt", "Chiếm chỗ", "Cần bàn/rig chắc"],
            fit: "Sim racing, Forza Motorsport, Assetto Corsa, Gran Turismo, F1",
        },
        arcade: {
            icon: <Target />,
            title: "Arcade Stick",
            color: "red",
            desc: "Cần gạt lớn và nút lớn mô phỏng máy arcade.",
            good: ["Cảm giác arcade", "Nút bền", "Nhập combo rõ nếu quen"],
            bad: ["Cần làm quen", "Không hợp mọi game"],
            fit: "Street Fighter, Tekken, King of Fighters, arcade/retro",
        },
        hotas: {
            icon: <SlidersHorizontal />,
            title: "HOTAS",
            color: "emerald",
            desc: "Hands On Throttle And Stick: cần lái + cần ga, có thể thêm rudder pedals.",
            good: ["Nhập vai", "Nhiều nút", "Điều khiển bay chi tiết"],
            bad: ["Đắt", "Rất kén game", "Cần map nút"],
            fit: "DCS World, MSFS, Elite Dangerous, Star Citizen, X-Plane",
        },
    };
    const [active, setActive] = useState("gamepad");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="violet"
                title="Các loại bộ điều khiển phổ biến"
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

function AnalogAndDriftGuide() {
    const rows = [
        [
            "Analog Stick",
            "Cần gạt đo nhiều mức nghiêng",
            "Đi chậm/chạy nhanh, lái nhẹ/lái mạnh",
        ],
        [
            "Deadzone",
            "Vùng nghiêng nhỏ bị game bỏ qua",
            "Tăng deadzone có thể giảm drift nhẹ",
        ],
        [
            "Stick Drift",
            "Analog tự lệch dù không chạm",
            "Camera tự xoay, nhân vật tự đi",
        ],
        [
            "Hall Effect",
            "Cảm biến từ tính thay tiếp điểm cơ học",
            "Giảm nguy cơ drift do mòn tiếp điểm",
        ],
        [
            "Tension",
            "Độ nặng/nhẹ khi nghiêng cần",
            "Ảnh hưởng cảm giác kiểm soát",
        ],
    ];
    const triggerRows = [
        [
            "Digital Trigger",
            "Chỉ nhận nhấn/không nhấn",
            "Game hành động đơn giản",
        ],
        ["Analog Trigger", "Nhận nhiều mức bóp", "Đua xe, bắn súng, mô phỏng"],
        [
            "Trigger Stop",
            "Rút ngắn hành trình trigger",
            "FPS, game cần phản hồi nhanh",
        ],
        [
            "Adaptive Trigger",
            "Trigger đổi lực phản hồi theo tình huống",
            "Game hỗ trợ DualSense",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="orange"
                title="Analog, trigger và stick drift"
                icon={<Gauge />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="Analog stick"
                    rows={rows}
                    headers={["Khái niệm", "Ý nghĩa", "Tác động"]}
                    accent="orange"
                />
                <DataTable
                    title="Trigger"
                    rows={triggerRows}
                    headers={["Loại", "Đặc điểm", "Phù hợp"]}
                    accent="violet"
                />
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-orange-300">Kiểm tra drift:</strong> vào
                gamepad tester hoặc cài đặt controller, không chạm analog. Nếu
                trục vẫn tự lệch, có thể bị drift. Thử tăng deadzone, vệ sinh
                nhẹ, cập nhật firmware; nếu nặng cần sửa/thay cụm analog hoặc
                controller.
            </div>
        </section>
    );
}

function FeedbackGuide() {
    const rows = [
        ["Rumble", "Rung cơ bản", "Va chạm, nổ, hit trong game"],
        [
            "Haptic Feedback",
            "Rung tinh tế hơn, mô phỏng nhiều bề mặt/cảm giác",
            "DualSense, game hỗ trợ tốt",
        ],
        [
            "Adaptive Trigger",
            "Trigger nặng/nhẹ thay đổi theo tình huống",
            "Kéo cung, bắn súng, phanh xe",
        ],
        [
            "Force Feedback",
            "Tạo lực kéo/đẩy, không chỉ rung",
            "Vô lăng đua xe, joystick cao cấp",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="red"
                title="Rumble, haptic và force feedback"
                icon={<Vibrate />}
            />
            <DataTable
                title="Phản hồi xúc giác giúp controller “có cảm giác” hơn"
                rows={rows}
                headers={["Công nghệ", "Đặc điểm", "Ví dụ"]}
                accent="red"
            />
            <div className="grid md:grid-cols-2 gap-4">
                <RuleCard
                    label="Sim racing nghiêm túc"
                    value="Nên ưu tiên vô lăng có force feedback, vì lực phản hồi giúp cảm nhận xe mất bám, leo lề, trượt bánh."
                    color="orange"
                />
                <RuleCard
                    label="Game hành động hiện đại"
                    value="Haptic/adaptive trigger có thể tăng nhập vai, nhưng chỉ đáng giá nếu game hỗ trợ tốt."
                    color="violet"
                />
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        analog: {
            icon: <Gauge />,
            title: "Analog Stick",
            detail: "Cần gạt nhỏ đo nhiều mức nghiêng, khác với phím bàn phím chỉ bật/tắt.",
            impact: "Hữu ích cho di chuyển mượt, điều khiển camera, lái xe nhẹ hoặc bay mô phỏng.",
        },
        drift: {
            icon: <RotateCcw />,
            title: "Stick Drift",
            detail: "Analog tự nhận chuyển động dù không chạm.",
            impact: "Tăng deadzone có thể giảm drift nhẹ; Hall Effect stick giúp giảm rủi ro mòn tiếp điểm nhưng không đảm bảo toàn bộ controller hoàn hảo.",
        },
        dpad: {
            icon: <Target />,
            title: "D-pad",
            detail: "Cụm điều hướng 4 hướng, quan trọng với game 2D, fighting game, menu và retro game.",
            impact: "D-pad kém dễ bấm nhầm đường chéo hoặc nhập combo không ổn định.",
        },
        trigger: {
            icon: <Zap />,
            title: "Trigger",
            detail: "Nút bóp phía sau, có thể digital hoặc analog.",
            impact: "Analog trigger rất hữu ích trong game đua xe vì bóp 30% ga nhẹ, bóp 100% ga hết.",
        },
        connection: {
            icon: <Radio />,
            title: "Kết nối",
            detail: "USB, Bluetooth, 2.4GHz dongle hoặc Xbox Wireless.",
            impact: "Game cạnh tranh/sim racing nên ưu tiên USB hoặc dongle ổn định; Bluetooth hợp casual/mobile.",
        },
        xinput: {
            icon: <Monitor />,
            title: "XInput / DirectInput",
            detail: "XInput là chuẩn Xbox hiện đại trên Windows; DirectInput cũ/rộng hơn nhưng đôi khi cần map phím.",
            impact: "Muốn cắm vào là chơi trên PC Windows, controller hỗ trợ XInput thường dễ nhất.",
        },
        battery: {
            icon: <BatteryCharging />,
            title: "Pin và sạc",
            detail: "Có thể dùng pin AA, pin sạc rời, pin tích hợp hoặc dock sạc.",
            impact: "Không dây tiện nhưng cần kiểm tra pin trước khi chơi dài/thi đấu.",
        },
        custom: {
            icon: <Settings />,
            title: "Tùy chỉnh",
            detail: "Remap nút, deadzone, độ nhạy analog, back paddles, trigger stop, profile.",
            impact: "Controller cao cấp giúp cá nhân hóa, nhưng không tự động làm bạn chơi hay hơn.",
        },
    };
    const [active, setActive] = useState("xinput");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="yellow"
                title="Thông số kỹ thuật quan trọng"
                icon={<Settings />}
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

function CompatibilityGuide() {
    const rows = [
        [
            "USB có dây",
            "Ổn định, ít trễ, không lo pin",
            "Có dây",
            "PC gaming, sim racing",
        ],
        [
            "Bluetooth",
            "Tiện, nhiều thiết bị hỗ trợ",
            "Có thể trễ hơn, tùy thiết bị",
            "Casual gaming, mobile, laptop",
        ],
        [
            "2.4GHz dongle",
            "Trễ thấp, ổn định hơn Bluetooth",
            "Cần receiver",
            "PC gaming không dây",
        ],
        [
            "Xbox Wireless",
            "Tối ưu cho Xbox/PC với adapter hoặc console",
            "Cần hệ sinh thái hỗ trợ",
            "Xbox, PC",
        ],
    ];
    const genreRows = [
        ["FPS cạnh tranh", "Chuột + bàn phím"],
        ["MOBA / RTS", "Chuột + bàn phím"],
        ["Đua xe casual", "Gamepad"],
        ["Sim racing", "Vô lăng"],
        ["Game bay", "Joystick / HOTAS"],
        ["Game hành động góc nhìn thứ ba", "Gamepad"],
        ["Fighting game", "Gamepad, arcade stick hoặc leverless"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Kết nối, XInput và thể loại game"
                icon={<PlugZap />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="Kết nối controller"
                    rows={rows}
                    headers={["Kết nối", "Ưu điểm", "Nhược điểm", "Phù hợp"]}
                    accent="blue"
                />
                <DataTable
                    title="Thiết bị hợp theo thể loại"
                    rows={genreRows}
                    headers={["Thể loại", "Thiết bị thường hợp hơn"]}
                    accent="emerald"
                />
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-blue-300">Trên PC Windows:</strong> Xbox
                controller/XInput thường dễ “cắm vào là chơi” nhất với game hiện
                đại.
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Gamepad2 />,
            title: "Xbox Wireless Controller",
            subtitle: "Đa dụng cho PC/Xbox",
            color: "violet",
            points: [
                "Xbox Wireless",
                "Bluetooth",
                "USB-C có dây",
                "Jack tai nghe 3.5mm",
                "Tương thích Windows rất tốt",
            ],
            lesson: "Nếu chơi PC Game Pass, Forza, EA Sports FC, Elden Ring và muốn ít cấu hình, Xbox controller là lựa chọn an toàn.",
        },
        {
            icon: <Vibrate />,
            title: "DualSense",
            subtitle: "Haptic + adaptive trigger",
            color: "cyan",
            points: [
                "Haptic feedback",
                "Adaptive triggers",
                "Micro tích hợp",
                "USB-C",
                "Hợp PS5 và một số game PC",
            ],
            lesson: "DualSense đáng chọn nếu bạn chơi PS5 hoặc game PC hỗ trợ tốt haptic/adaptive trigger.",
        },
        {
            icon: <Joystick />,
            title: "Logitech Extreme 3D Pro",
            subtitle: "Joystick bay dễ tiếp cận",
            color: "emerald",
            points: [
                "Twist rudder",
                "12 nút lập trình",
                "Hat switch 8 hướng",
                "Rapid-fire trigger",
                "Đế nặng",
            ],
            lesson: "Người mới thử flight sim có thể bắt đầu bằng joystick phổ thông trước khi lên HOTAS đắt tiền.",
        },
        {
            icon: <RotateCcw />,
            title: "Logitech G923 TRUEFORCE",
            subtitle: "Vô lăng + pedal",
            color: "orange",
            points: [
                "TRUEFORCE force feedback",
                "RPM indicator",
                "On-wheel controls",
                "Pedal phanh",
                "Hỗ trợ PC/console tùy bản",
            ],
            lesson: "Sim racing nghiêm túc nên ưu tiên force feedback và chỗ gắn chắc thay vì vô lăng rẻ chỉ rung/lò xo.",
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
        pc: {
            icon: <Monitor />,
            title: "PC Windows đa dụng",
            answer: "Chọn Xbox Wireless Controller hoặc controller hỗ trợ XInput để tương thích game PC mới tốt nhất.",
            color: "blue",
        },
        ps5: {
            icon: <Vibrate />,
            title: "PS5 / haptic",
            answer: "Chọn DualSense nếu bạn muốn haptic feedback và adaptive trigger. Trên PC, kiểm tra game có hỗ trợ đầy đủ không, đôi khi cần USB-C.",
            color: "cyan",
        },
        racing: {
            icon: <RotateCcw />,
            title: "Sim racing",
            answer: "Ưu tiên vô lăng có force feedback, pedal chắc và bàn/rig gắn vững. Vô lăng rẻ chỉ rung/lò xo không cho cảm giác xe mất bám tốt.",
            color: "orange",
        },
        flight: {
            icon: <Joystick />,
            title: "Mô phỏng bay",
            answer: "Người mới có thể bắt đầu bằng joystick như Extreme 3D Pro; nếu chơi nghiêm túc, nâng lên HOTAS + rudder pedals + profile mapping.",
            color: "emerald",
        },
        fighting: {
            icon: <Target />,
            title: "Fighting game",
            answer: "Thử D-pad, arcade stick hoặc leverless nếu có điều kiện. Cảm giác nhập combo rất cá nhân, không có một lựa chọn tốt nhất cho mọi người.",
            color: "red",
        },
        drift: {
            icon: <RotateCcw />,
            title: "Controller bị drift",
            answer: "Kiểm tra bằng gamepad tester, tăng deadzone trước, vệ sinh nhẹ/cập nhật firmware. Nếu nặng thì sửa hoặc thay analog/controller.",
            color: "purple",
        },
    };
    const [active, setActive] = useState("pc");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: chọn controller theo tình huống"
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
            wrong: "Game nào dùng controller cũng tốt hơn chuột phím",
            right: "Tùy thể loại. FPS cạnh tranh, MOBA/RTS thường hợp chuột phím hơn; đua xe, thể thao, game hành động góc nhìn thứ ba thường hợp gamepad hơn.",
        },
        {
            wrong: "Bluetooth controller luôn đủ tốt cho mọi game",
            right: "Bluetooth tiện nhưng độ trễ/ổn định tùy thiết bị. Game cần phản hồi nhanh nên ưu tiên USB, 2.4GHz hoặc Xbox Wireless tốt.",
        },
        {
            wrong: "Vô lăng rẻ không force feedback là đủ cho sim racing",
            right: "Chơi vui vẫn được, nhưng sim racing nghiêm túc cần force feedback để cảm nhận xe mất bám, vào cua, leo lề.",
        },
        {
            wrong: "Analog drift là do game lỗi",
            right: "Nhiều trường hợp do analog tự lệch. Kiểm tra bằng gamepad tester trước khi đổ lỗi cho game.",
        },
        {
            wrong: "Controller đắt là chơi hay hơn ngay",
            right: "Controller tốt giúp thoải mái/chính xác hơn nhưng kỹ năng, game và độ hợp tay vẫn quan trọng.",
        },
        {
            wrong: "Cứ mua joystick là chơi được mọi game bay tốt",
            right: "Flight sim nghiêm túc có nhiều chức năng; bạn có thể cần throttle, rudder pedals, profile mapping, head tracking và kiến thức bay cơ bản.",
        },
    ];
    const tips = [
        "PC Windows đa dụng: chọn Xbox Wireless Controller hoặc tay cầm XInput là dễ nhất.",
        "PS5 hoặc thích haptic/adaptive trigger: chọn DualSense.",
        "Game bay casual: joystick phổ thông là điểm bắt đầu hợp lý.",
        "Sim racing nghiêm túc: ưu tiên force feedback, pedal chắc và chỗ gắn ổn định.",
        "Fighting game: thử D-pad, arcade stick và leverless nếu có điều kiện.",
        "Controller drift nhẹ: tăng deadzone trước khi kết luận hỏng nặng.",
        "Controller không dây: kiểm tra pin trước khi chơi dài hoặc thi đấu.",
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
                        <span className="bg-violet-500/20 text-violet-300 p-2 rounded-xl">
                            13
                        </span>{" "}
                        Tóm tắt & Kiểm tra cuối Phần 10
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-violet-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                Controller = thiết bị nhập liệu chuyên điều
                                khiển game/mô phỏng
                            </p>
                            <p>
                                Gamepad • Joystick • Racing Wheel • Arcade Stick
                                • HOTAS
                            </p>
                            <br />
                            <p className="text-slate-500"># Cốt lõi</p>
                            <p className="text-slate-300">
                                Analog nhiều mức • Trigger analog •
                                Haptic/rumble • Force feedback • XInput
                            </p>
                            <br />
                            <p className="text-slate-500"># Chọn nhanh</p>
                            <p className="text-slate-300">
                                PC đa dụng: Xbox • PS5/haptic: DualSense •
                                Flight: joystick/HOTAS • Racing: wheel force
                                feedback
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
        question: "Gamepad khác bàn phím ở điểm quan trọng nào?",
        options: [
            "Analog có thể nhận nhiều mức nghiêng/bóp, không chỉ bật/tắt",
            "Gamepad làm CPU mạnh hơn",
            "Gamepad thay thế được SSD",
            "Gamepad làm màn hình sáng hơn",
        ],
        correct: 0,
        explanation:
            "Analog stick và analog trigger nhận nhiều mức, ví dụ nghiêng nhẹ đi chậm, nghiêng mạnh chạy nhanh.",
    },
    {
        question: "Stick drift là gì?",
        options: [
            "Analog tự lệch dù không chạm",
            "Controller hết pin",
            "Game chạy quá mượt",
            "Màn hình bị xé hình",
        ],
        correct: 0,
        explanation:
            "Stick drift làm nhân vật/camera tự di chuyển dù bạn không chạm vào analog.",
    },
    {
        question: "Force feedback trên vô lăng dùng để làm gì?",
        options: [
            "Tạo lực phản hồi mô phỏng cảm giác lái, mặt đường, xe mất bám",
            "Tăng dung lượng RAM",
            "Làm game tải nhanh hơn",
            "Thay thế pedal phanh",
        ],
        correct: 0,
        explanation:
            "Force feedback tạo lực kéo/đẩy/rung để mô phỏng xe vào cua, trượt, leo lề hoặc mất bám.",
    },
    {
        question: "Joystick phù hợp nhất với thể loại nào?",
        options: [
            "Mô phỏng bay",
            "Soạn thảo văn bản",
            "Excel kế toán",
            "Gõ code nhanh hơn",
        ],
        correct: 0,
        explanation:
            "Joystick/flight stick được thiết kế để điều khiển hướng bay tự nhiên hơn bàn phím/gamepad.",
    },
    {
        question:
            "Trên PC Windows, chuẩn controller nào thường tương thích tốt với game hiện đại?",
        options: ["XInput", "VGA", "SATA", "HDMI"],
        correct: 0,
        explanation:
            "XInput là chuẩn Xbox hiện đại được nhiều game PC hỗ trợ tốt.",
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
                    Hoàn thành Phần 10!
                </h4>
                <p className="text-slate-400 mb-6">
                    Bạn trả lời đúng{" "}
                    <strong className="text-violet-400">
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
                <span className="text-violet-400">
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
                        className="w-full py-3 bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã học xong Phần 10 — Thiết bị nhập liệu. Tiếp theo là Phần
                11 — Thiết bị xuất dữ liệu, bắt đầu với màn hình: công nghệ tấm
                nền IPS, VA, TN và OLED.
            </p>
            <Link
                to="/phan-11-1"
                className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-violet-500/20"
            >
                Phần tiếp theo: 11.1 — Màn hình Monitor{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "violet" }) {
    const colorMap = {
        violet: "bg-violet-500/20 text-violet-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-violet-500/10 border-violet-400/50" : softBorder(color)}`}
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
        violet: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
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
    return map[color] || map.violet;
}
function softBorder(color) {
    const map = {
        violet: "bg-violet-500/5 border-violet-500/20",
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
    return map[color] || map.violet;
}
function textColor(color) {
    const map = {
        violet: "text-violet-300",
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
    return map[color] || "text-violet-300";
}
