import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    Bluetooth,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    Crosshair,
    Gamepad2,
    Gauge,
    Hand,
    Layers3,
    Lightbulb,
    Monitor,
    Mouse,
    MousePointer2,
    Move,
    PackageCheck,
    PlugZap,
    Radio,
    ScanLine,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    SquareMousePointer,
    Target,
    Usb,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                            <Mouse className="text-cyan-400" size={24} />
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
                    <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                        Bài 10.2
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <PenAnalogy />
                <TrackingSimulator />
                <SensorExplorer />
                <ConnectionGuide />
                <FormGripExplorer />
                <SpecsExplorer />
                <MousepadGuide />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
                        <BookOpen size={16} /> Phần 10: Mouse
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Chuột máy tính
                        <span className="block text-cyan-400">
                            sensor, DPI, form cầm
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Chuột nhỏ nhưng ảnh hưởng lớn đến tốc độ thao tác, độ
                        chính xác, sự thoải mái cổ tay và hiệu năng trong game
                        FPS hoặc thiết kế đồ họa.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<ScanLine size={16} />}
                            text="Optical / Laser Sensor"
                        />
                        <Tag icon={<Gauge size={16} />} text="DPI / CPI" />
                        <Tag icon={<Radio size={16} />} text="Polling Rate" />
                        <Tag icon={<Hand size={16} />} text="Grip Style" />
                        <Tag icon={<Target size={16} />} text="Mousepad" />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Mouse />}
                            label="Mouse"
                            desc="Tay điều khiển"
                            color="cyan"
                            highlight
                        />
                        <HeroTile
                            icon={<ScanLine />}
                            label="Sensor"
                            desc="Đọc bề mặt"
                            color="blue"
                        />
                        <HeroTile
                            icon={<Gauge />}
                            label="DPI"
                            desc="Độ nhạy"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Crosshair />}
                            label="Aim"
                            desc="Độ chính xác"
                            color="red"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Luồng cơ bản</p>
                        <p>Tay rê → Sensor chụp bề mặt</p>
                        <p className="text-cyan-300">
                            → Controller → USB / 2.4GHz / Bluetooth
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu chuột là thiết bị nhập liệu dùng để điều khiển con trỏ, chọn đối tượng, kéo thả, cuộn trang và điều khiển góc nhìn trong game.",
        "Nắm cơ chế cảm biến quang/laser: chiếu sáng bề mặt, chụp ảnh liên tục, so sánh ảnh để tính hướng và quãng đường di chuyển.",
        "Phân biệt optical mouse, laser mouse, ball mouse, các kết nối USB, Bluetooth, 2.4GHz và tri-mode.",
        "Đọc được thông số quan trọng: DPI/CPI, polling rate, IPS, acceleration, lift-off distance, trọng lượng, switch, mouse feet và mousepad.",
        "Biết chọn chuột theo tay, kiểu cầm palm/claw/fingertip, nhu cầu văn phòng, FPS, MMO/MOBA, thiết kế hoặc di động.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="cyan"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center font-bold mb-4">
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
            icon: <MousePointer2 />,
            title: "Điều khiển con trỏ",
            desc: "Di chuyển, chọn, kéo thả và thao tác trong phần mềm.",
            color: "cyan",
        },
        {
            icon: <Gamepad2 />,
            title: "Điều khiển game",
            desc: "Xoay góc nhìn, ngắm bắn, click, đổi vũ khí và macro.",
            color: "orange",
        },
        {
            icon: <ScanLine />,
            title: "Cảm biến",
            desc: "Đọc chuyển động trên bề mặt bằng ánh sáng và thuật toán xử lý.",
            color: "blue",
        },
        {
            icon: <Hand />,
            title: "Cảm giác cầm",
            desc: "Form, trọng lượng, feet và mousepad quyết định sự thoải mái lâu dài.",
            color: "purple",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Chuột máy tính là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Chuột máy tính</strong>,
                    tiếng Anh là{" "}
                    <strong className="text-cyan-300">Mouse</strong>, là thiết
                    bị nhập liệu dùng để điều khiển con trỏ, chọn đối tượng,
                    cuộn trang, kéo thả, thao tác trong phần mềm và điều khiển
                    góc nhìn trong game. Một con chuột tốt không chỉ là DPI cao,
                    mà phải hợp cảm biến, form cầm, trọng lượng, switch, feet,
                    kết nối, polling rate và kích thước tay.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <RoleCard key={c.title} {...c} />
                    ))}
                </div>
                <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Tay di chuyển chuột → Sensor đọc chuyển động → Chuột gửi tín
                    hiệu → Con trỏ/góc nhìn di chuyển theo
                </div>
            </div>
        </section>
    );
}

function PenAnalogy() {
    const cards = [
        {
            icon: <Mouse />,
            title: "Chuột = bút điều khiển",
            desc: "Rê trên mặt bàn để điều khiển con trỏ như vẽ đường đi.",
            color: "cyan",
        },
        {
            icon: <ScanLine />,
            title: "Sensor = mắt đọc bề mặt",
            desc: "Chụp rất nhiều ảnh nhỏ để biết chuột dịch chuyển thế nào.",
            color: "blue",
        },
        {
            icon: <Gauge />,
            title: "DPI = độ nhạy bút",
            desc: "DPI cao đi xa hơn trên màn hình với cùng quãng rê.",
            color: "orange",
        },
        {
            icon: <Target />,
            title: "Mousepad = mặt giấy",
            desc: "Bề mặt tốt giúp rê mượt, dừng chính xác và tracking ổn.",
            color: "emerald",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: bút điều khiển trên mặt bàn"
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

function TrackingSimulator() {
    const flows = {
        normal: {
            title: "Rê chuột bình thường",
            color: "cyan",
            steps: [
                {
                    icon: <Move />,
                    title: "Bạn rê chuột",
                    desc: "Tay di chuyển chuột trên mặt bàn hoặc mousepad.",
                },
                {
                    icon: <ScanLine />,
                    title: "LED/laser chiếu xuống",
                    desc: "Cảm biến chiếu sáng bề mặt bên dưới.",
                },
                {
                    icon: <Layers3 />,
                    title: "Sensor chụp nhiều ảnh",
                    desc: "Chuột chụp rất nhiều ảnh nhỏ mỗi giây.",
                },
                {
                    icon: <CpuIcon />,
                    title: "Bộ xử lý so sánh ảnh",
                    desc: "Ảnh trước và ảnh sau được so sánh để tính hướng và khoảng cách.",
                },
                {
                    icon: <PlugZap />,
                    title: "Gửi tín hiệu về PC",
                    desc: "Tín hiệu đi qua USB, 2.4GHz hoặc Bluetooth.",
                },
            ],
        },
        fps: {
            title: "Game FPS",
            color: "orange",
            steps: [
                {
                    icon: <Crosshair />,
                    title: "Bạn flick chuột",
                    desc: "Rê rất nhanh để đổi góc nhìn hoặc kéo tâm.",
                },
                {
                    icon: <Gauge />,
                    title: "IPS và acceleration quan trọng",
                    desc: "Sensor phải đọc được tốc độ/gia tốc cao mà không mất tracking.",
                },
                {
                    icon: <Radio />,
                    title: "Polling rate gửi dữ liệu",
                    desc: "1000Hz gửi 1000 lần/giây; 4000/8000Hz giảm độ trễ nhưng hao pin hơn.",
                },
                {
                    icon: <Target />,
                    title: "Mousepad giúp dừng tâm",
                    desc: "Control pad giúp dừng chính xác, speed pad giúp rê nhanh hơn.",
                },
            ],
        },
        bad: {
            title: "Sensor / bề mặt kém",
            color: "red",
            steps: [
                {
                    icon: <XCircle />,
                    title: "Tracking giật",
                    desc: "Con trỏ rung hoặc tâm ngắm không ổn định.",
                },
                {
                    icon: <AlertTriangle />,
                    title: "Mất tracking khi rê nhanh",
                    desc: "Chuột không đọc kịp chuyển động nhanh.",
                },
                {
                    icon: <Zap />,
                    title: "Acceleration không mong muốn",
                    desc: "Cùng quãng rê nhưng tốc độ khác nhau cho kết quả khác nhau.",
                },
                {
                    icon: <Target />,
                    title: "Mousepad bẩn/cũ",
                    desc: "Bề mặt bóng, bẩn hoặc pad mòn làm sensor kém ổn định.",
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
                title="Chuột nhận chuyển động như thế nào?"
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

function CpuIcon(props) {
    return <Settings {...props} />;
}

function SensorExplorer() {
    const types = {
        optical: {
            icon: <ScanLine />,
            title: "Optical Mouse",
            color: "cyan",
            desc: "Dùng LED, thường là ánh sáng đỏ hoặc hồng ngoại, để đọc bề mặt.",
            good: [
                "Chính xác",
                "Ổn định",
                "Phổ biến",
                "Giá tốt",
                "Ít acceleration ngoài ý muốn",
            ],
            bad: ["Không tốt trên kính trong suốt nếu sensor không hỗ trợ"],
            fit: "Văn phòng, gaming, thiết kế, đa số người dùng",
        },
        laser: {
            icon: <Zap />,
            title: "Laser Mouse",
            color: "purple",
            desc: "Dùng tia laser để đọc bề mặt, có thể hoạt động trên nhiều bề mặt hơn.",
            good: [
                "Đọc được nhiều mặt bàn",
                "Có thể dùng trên một số mặt bóng/kính",
            ],
            bad: [
                "Một số đời cũ dễ có acceleration",
                "Có thể nhạy quá mức với bề mặt",
            ],
            fit: "Văn phòng, di chuyển nhiều, dùng nhiều mặt bàn khác nhau",
        },
        ball: {
            icon: <CircleIcon />,
            title: "Ball Mouse",
            color: "orange",
            desc: "Chuột cơ bi đời cũ dùng viên bi bên dưới để đo chuyển động.",
            good: ["Có giá trị lịch sử phần cứng"],
            bad: [
                "Dễ bẩn",
                "Tracking kém",
                "Phải vệ sinh bi thường xuyên",
                "Gần như không còn dùng",
            ],
            fit: "Học lịch sử phần cứng",
        },
    };
    const [active, setActive] = useState("optical");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="cyan"
                title="Các loại chuột / cảm biến phổ biến"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
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
function CircleIcon(props) {
    return <MousePointer2 {...props} />;
}

function ConnectionGuide() {
    const rows = [
        [
            "USB có dây",
            "Ổn định, độ trễ thấp, không cần pin",
            "Có dây, có thể vướng",
            "Gaming, desktop cố định",
        ],
        [
            "Bluetooth",
            "Gọn, dễ kết nối laptop/tablet, tiết kiệm cổng USB",
            "Độ trễ cao hơn, không lý tưởng cho esports",
            "Văn phòng, di động",
        ],
        [
            "2.4GHz Wireless",
            "Độ trễ thấp, hợp gaming không dây",
            "Cần receiver, cần sạc/pin",
            "Gaming, setup gọn",
        ],
        [
            "Tri-mode",
            "USB + 2.4GHz + Bluetooth",
            "Thường đắt hơn",
            "Người dùng nhiều thiết bị",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="blue"
                title="Phân loại theo kết nối"
                icon={<PlugZap />}
            />
            <DataTable
                title="Gaming cạnh tranh ưu tiên USB hoặc 2.4GHz tốt"
                rows={rows}
                headers={["Kết nối", "Ưu điểm", "Nhược điểm", "Phù hợp"]}
                accent="blue"
            />
            <div className="grid md:grid-cols-3 gap-3">
                <RuleCard
                    label="USB"
                    value="Ổn định nhất, không lo pin."
                    color="cyan"
                />
                <RuleCard
                    label="2.4GHz"
                    value="Nhanh, gọn, hợp gaming wireless."
                    color="emerald"
                />
                <RuleCard
                    label="Bluetooth"
                    value="Tiện, đa thiết bị, hợp văn phòng."
                    color="purple"
                />
            </div>
        </section>
    );
}

function FormGripExplorer() {
    const forms = {
        ergo: {
            icon: <Hand />,
            title: "Ergonomic",
            color: "emerald",
            desc: "Cong theo tay phải hoặc tay trái, ôm tay hơn.",
            good: "Thoải mái lâu dài",
            bad: "Không hợp cả hai tay",
            fit: "Văn phòng, gaming tay phải, palm/claw",
        },
        ambi: {
            icon: <Mouse />,
            title: "Ambidextrous",
            color: "cyan",
            desc: "Đối xứng hai bên, form trung tính.",
            good: "Dễ hợp nhiều kiểu cầm",
            bad: "Ít ôm tay hơn",
            fit: "FPS, claw/fingertip, người thích form trung tính",
        },
        vertical: {
            icon: <Hand />,
            title: "Vertical Mouse",
            color: "purple",
            desc: "Dáng đứng để giảm xoay cổ tay.",
            good: "Có thể giảm mỏi cổ tay",
            bad: "Cần làm quen, không hợp game nhanh",
            fit: "Văn phòng, người đau cổ tay",
        },
        trackball: {
            icon: <Target />,
            title: "Trackball",
            color: "orange",
            desc: "Bi lăn cố định, không cần rê nhiều.",
            good: "Tiết kiệm không gian",
            bad: "Cần làm quen",
            fit: "Không gian hẹp, công việc đặc thù",
        },
    };
    const grips = [
        [
            "Palm Grip",
            "Cả lòng bàn tay đặt lên chuột",
            "Chuột to, ergonomic, lưng cao",
        ],
        [
            "Claw Grip",
            "Lòng bàn tay chạm nhẹ, ngón cong",
            "Chuột vừa, lưng cao vừa",
        ],
        ["Fingertip Grip", "Chủ yếu dùng đầu ngón tay", "Chuột nhỏ, nhẹ"],
    ];
    const [active, setActive] = useState("ambi");
    const item = forms[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="emerald"
                title="Form dáng và kiểu cầm chuột"
                icon={<Hand />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {Object.entries(forms).map(([key, f]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(f.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(f.icon, { size: 20 })}{" "}
                                {f.title}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-6 mb-6">
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
                            {item.desc}
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
                <DataTable
                    title="3 kiểu cầm phổ biến"
                    rows={grips}
                    headers={["Grip", "Mô tả", "Chuột phù hợp"]}
                    accent="emerald"
                />
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        dpi: {
            icon: <Gauge />,
            title: "DPI / CPI",
            detail: "Độ nhạy di chuyển: DPI thấp rê nhiều hơn, con trỏ chậm hơn; DPI cao rê ít hơn, con trỏ đi xa hơn.",
            impact: "FPS thường 400–1600 DPI; văn phòng 800–1600; màn hình 4K có thể dùng 1600–2400.",
        },
        polling: {
            icon: <Radio />,
            title: "Polling Rate",
            detail: "Số lần chuột gửi dữ liệu về máy tính mỗi giây: 125Hz, 500Hz, 1000Hz, 4000Hz, 8000Hz.",
            impact: "1000Hz rất ổn cho gaming; 4000/8000Hz giảm trễ nhưng hao pin hơn và cần máy/màn hình đủ tốt.",
        },
        ips: {
            icon: <Move />,
            title: "IPS",
            detail: "Inches Per Second: tốc độ rê chuột tối đa mà sensor vẫn đọc chính xác.",
            impact: "FPS cần IPS cao vì người chơi có thể flick chuột rất nhanh.",
        },
        accel: {
            icon: <Zap />,
            title: "Acceleration",
            detail: "Khả năng cảm biến chịu được gia tốc khi bạn đổi tốc độ rê nhanh, thường tính bằng G.",
            impact: "Gia tốc chịu được cao giúp chuột ít mất kiểm soát khi vẩy nhanh.",
        },
        lod: {
            icon: <SquareMousePointer />,
            title: "Lift-off Distance",
            detail: "Độ cao mà khi nhấc chuột lên khỏi mousepad, sensor ngừng tracking.",
            impact: "LOD thấp hữu ích cho FPS vì tâm ít lệch khi nhấc chuột đặt lại.",
        },
        weight: {
            icon: <Gauge />,
            title: "Trọng lượng",
            detail: "Dưới 60g rất nhẹ; 60–80g cân bằng; 80–110g đầm tay; trên 110g nặng.",
            impact: "FPS thường thích nhẹ, văn phòng/thiết kế có thể thích đầm tay hơn.",
        },
        switch: {
            icon: <MousePointer2 />,
            title: "Mouse Switch",
            detail: "Mechanical click rõ nhưng có thể double-click theo thời gian; optical ít lỗi double-click hơn; silent êm hơn.",
            impact: "Văn phòng chung/ký túc xá nên cân nhắc silent click.",
        },
        feet: {
            icon: <Target />,
            title: "Mouse Feet / Skate",
            detail: "Miếng trượt dưới đáy chuột, thường làm bằng PTFE.",
            impact: "Feet tốt giúp rê mượt, ít ma sát, dễ kiểm soát; feet mòn làm chuột rê rít.",
        },
    };
    const [active, setActive] = useState("dpi");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
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

function MousepadGuide() {
    const dpiRows = [
        ["Văn phòng", "800–1600 DPI"],
        ["Màn hình 2K/4K", "1200–2400 DPI tùy thói quen"],
        ["Game FPS", "400–1600 DPI"],
        ["MOBA/MMO", "800–3200 DPI tùy người"],
        ["Thiết kế chính xác", "400–1600 DPI + zoom phần mềm"],
    ];
    const padRows = [
        ["Control pad", "Ma sát cao hơn, dễ dừng tâm", "FPS cần chính xác"],
        ["Speed pad", "Trượt nhanh hơn", "Người thích rê nhẹ, game tốc độ"],
        ["Hybrid pad", "Cân bằng", "Đa dụng"],
        [
            "Hard pad",
            "Rất nhanh, dễ vệ sinh",
            "Ít phổ biến, có thể mòn feet nhanh",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="DPI và mousepad: đừng chỉ nhìn số lớn"
                icon={<Target />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="DPI gợi ý theo nhu cầu"
                    rows={dpiRows}
                    headers={["Nhu cầu", "DPI thường dùng"]}
                    accent="blue"
                />
                <DataTable
                    title="Mousepad ảnh hưởng tracking và cảm giác rê"
                    rows={padRows}
                    headers={["Loại pad", "Đặc điểm", "Phù hợp"]}
                    accent="cyan"
                />
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-blue-300">Quy tắc:</strong> chuột 30.000
                DPI không có nghĩa là bạn nên dùng 30.000 DPI. Chọn DPI theo màn
                hình, game, thói quen và khả năng kiểm soát.
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Mouse />,
            title: "Logitech MX Master 3S",
            subtitle: "Chuột văn phòng cao cấp",
            color: "cyan",
            points: [
                "Cảm biến 8.000 DPI",
                "Tracking trên kính dày tối thiểu 4mm",
                "Cuộn nhanh",
                "Ergonomic",
                "Nhiều nút phụ",
            ],
            lesson: "Chuột văn phòng tốt ưu tiên form thoải mái, cuộn tốt, nút phụ và đa nhiệm hơn là trọng lượng siêu nhẹ.",
        },
        {
            icon: <Target />,
            title: "Logitech G Pro X Superlight 2",
            subtitle: "FPS nhẹ, không dây",
            color: "orange",
            points: [
                "Khoảng 60g",
                "HERO 2 sensor",
                "Tối đa 32.000 DPI",
                "Tracking 500 IPS",
                "Polling cao tùy cấu hình",
            ],
            lesson: "FPS cần chuột nhẹ, sensor ổn, form hợp tay và wireless tốt hơn là nhiều nút phụ.",
        },
        {
            icon: <Hand />,
            title: "Razer DeathAdder V3 Pro",
            subtitle: "Gaming ergonomic nhẹ",
            color: "red",
            points: [
                "Form ergonomic tay phải",
                "Khoảng 64g",
                "Cảm biến 30.000 DPI",
                "Switch quang",
                "Có thể nâng polling với dongle riêng",
            ],
            lesson: "Nếu thích chuột ôm tay hơn form đối xứng, ergonomic nhẹ là lựa chọn tốt cho palm/claw.",
        },
        {
            icon: <ShieldCheck />,
            title: "Logitech M331 Silent Plus",
            subtitle: "Chuột silent phổ thông",
            color: "emerald",
            points: [
                "Click êm",
                "Giá dễ tiếp cận",
                "Hợp văn phòng/ký túc xá",
                "Pin lâu",
                "Không dành cho esports",
            ],
            lesson: "Không phải ai cũng cần chuột gaming; môi trường yên tĩnh nên ưu tiên silent click và pin lâu.",
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
            title: "Văn phòng",
            answer: "Ưu tiên ergonomic, click êm, cuộn tốt, pin lâu và Bluetooth/tri-mode nếu dùng nhiều thiết bị. Không cần DPI quá cao.",
            color: "cyan",
        },
        fps: {
            icon: <Crosshair />,
            title: "FPS cạnh tranh",
            answer: "Ưu tiên chuột nhẹ, sensor tốt, form hợp tay, polling 1000Hz trở lên, LOD thấp và mousepad phù hợp. DPI khởi đầu 800 rất phổ biến.",
            color: "orange",
        },
        mmo: {
            icon: <Gamepad2 />,
            title: "MMO / MOBA",
            answer: "Có thể chọn chuột nhiều nút phụ nếu dùng skill/macro nhiều. Trọng lượng không nhất thiết phải siêu nhẹ như FPS.",
            color: "purple",
        },
        design: {
            icon: <Target />,
            title: "Thiết kế đồ họa",
            answer: "Ưu tiên form thoải mái, DPI chỉnh được, sensor ổn và mousepad control để dễ dừng chính xác khi chỉnh chi tiết.",
            color: "blue",
        },
        travel: {
            icon: <Bluetooth />,
            title: "Di động / laptop",
            answer: "Bluetooth tiện nhất nếu bạn thường mang laptop đi. Nếu thỉnh thoảng chơi game, chọn tri-mode để có thêm 2.4GHz/USB.",
            color: "emerald",
        },
        wrist: {
            icon: <Hand />,
            title: "Đau cổ tay",
            answer: "Thử ergonomic hoặc vertical mouse, giảm thời gian rê xa, chỉnh DPI vừa phải và kiểm tra chiều cao bàn ghế/cổ tay.",
            color: "red",
        },
    };
    const [active, setActive] = useState("fps");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: chọn chuột theo tình huống"
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
            wrong: "DPI càng cao chuột càng xịn",
            right: "DPI cao chỉ là một thông số. Quan trọng hơn là sensor ổn định, form hợp tay, mousepad tốt và DPI hợp thói quen.",
        },
        {
            wrong: "Chuột gaming phải thật nhiều nút",
            right: "FPS thường ưu tiên nhẹ, sensor tốt và form hợp tay. Nhiều nút hữu ích hơn cho MMO/MOBA hoặc macro văn phòng.",
        },
        {
            wrong: "Chuột không dây lúc nào cũng lag",
            right: "Bluetooth có thể trễ hơn, nhưng 2.4GHz gaming hiện đại rất nhanh. USB dây vẫn ổn định nhất và không lo pin.",
        },
        {
            wrong: "Chuột càng nhẹ càng tốt cho mọi người",
            right: "Chuột nhẹ hợp FPS, nhưng văn phòng/thiết kế đôi khi cần cảm giác đầm tay và kiểm soát tốt hơn.",
        },
        {
            wrong: "Mousepad không quan trọng",
            right: "Mousepad ảnh hưởng trực tiếp đến tracking, độ mượt, độ dừng và cảm giác rê.",
        },
        {
            wrong: "Form chuột nào cũng như nhau",
            right: "Form sai có thể gây mỏi cổ tay, khó kiểm soát tâm và giảm hiệu quả dù sensor rất mạnh.",
        },
    ];
    const tips = [
        "Chọn chuột theo tay và kiểu cầm trước, rồi mới nhìn DPI.",
        "Văn phòng: ergonomic, click êm, cuộn tốt, pin lâu.",
        "FPS: nhẹ, sensor tốt, polling 1000Hz trở lên, form hợp tay.",
        "Thiết kế: độ chính xác, DPI chỉnh được và mousepad control.",
        "Màn hình 4K: có thể tăng DPI lên 1600–2400 để đỡ rê xa.",
        "Chơi FPS nghiêm túc nên tắt Enhance Pointer Precision trên Windows.",
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
                        <span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-cyan-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                Mouse = thiết bị nhập liệu điều khiển con
                                trỏ/góc nhìn
                            </p>
                            <p>
                                Tay rê → LED/laser → Sensor chụp bề mặt →
                                Controller → PC
                            </p>
                            <br />
                            <p className="text-slate-500"># Không chỉ DPI</p>
                            <p className="text-slate-300">
                                Sensor • Form • Weight • Switch • Feet •
                                Connection • Polling • Mousepad
                            </p>
                            <br />
                            <p className="text-slate-500"># DPI khởi đầu</p>
                            <p className="text-slate-300">
                                Văn phòng 1200–1600 • FPS 800 • 4K 1600–2400
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
        question: "DPI của chuột nói đơn giản là gì?",
        options: [
            "Độ nhạy di chuyển của chuột",
            "Dung lượng lưu trữ của chuột",
            "Số nhân CPU",
            "Tốc độ mạng Wi‑Fi",
        ],
        correct: 0,
        explanation:
            "DPI/CPI nói dễ hiểu là độ nhạy di chuyển: cùng một quãng rê, DPI cao làm con trỏ đi xa hơn.",
    },
    {
        question: "Chuột quang hoạt động bằng cách nào?",
        options: [
            "Dùng ánh sáng và cảm biến để đọc chuyển động trên bề mặt",
            "Dùng viên bi bên trong RAM",
            "Dùng sóng âm để nâng chuột lên",
            "Dùng nhiệt từ CPU",
        ],
        correct: 0,
        explanation:
            "Chuột quang chiếu sáng bề mặt, cảm biến chụp nhiều ảnh và so sánh để tính chuyển động.",
    },
    {
        question: "Polling rate 1000Hz nghĩa là gì?",
        options: [
            "Chuột gửi tín hiệu về máy tính 1000 lần mỗi giây",
            "Chuột có 1000 nút bấm",
            "Chuột nặng 1000 gram",
            "Chuột chỉ dùng được với màn hình 1000Hz",
        ],
        correct: 0,
        explanation:
            "1000Hz nghĩa là thiết bị gửi dữ liệu về máy tính 1000 lần mỗi giây.",
    },
    {
        question: "Chuột Bluetooth thường phù hợp nhất với nhu cầu nào?",
        options: [
            "Văn phòng, di động, kết nối nhiều thiết bị",
            "Luôn tốt nhất cho esports",
            "Chỉ dùng được với máy in",
            "Chỉ dùng được khi không có pin",
        ],
        correct: 0,
        explanation:
            "Bluetooth tiện cho laptop, tablet và đa thiết bị, nhưng không phải lựa chọn tối ưu cho esports.",
    },
    {
        question: "Với game FPS, yếu tố nào thường quan trọng?",
        options: [
            "Form hợp tay, cảm biến tốt, trọng lượng phù hợp, polling rate ổn",
            "Chuột càng nặng càng chắc chắn thắng",
            "DPI càng cao càng dễ ngắm",
            "Không cần mousepad",
        ],
        correct: 0,
        explanation:
            "FPS cần sự ổn định và kiểm soát: form, sensor, trọng lượng, polling rate và mousepad đều quan trọng.",
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
                    <strong className="text-cyan-400">
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
                <span className="text-cyan-400">
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
                        className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu cơ chế và cách chọn chuột. Tiếp theo là màn hình cảm
                ứng — Touchscreen: thiết bị nhập liệu cho phép tương tác trực
                tiếp bằng ngón tay hoặc bút cảm ứng trên bề mặt màn hình.
            </p>
            <Link
                to="/phan-10-3"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Bài tiếp theo: 10.3 — Màn hình cảm ứng Touchscreen{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
    const colorMap = {
        cyan: "bg-cyan-500/20 text-cyan-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        blue: "bg-blue-500/20 text-blue-300",
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
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.cyan;
}
function softBorder(color) {
    const map = {
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.cyan;
}
function textColor(color) {
    const map = {
        cyan: "text-cyan-300",
        yellow: "text-yellow-300",
        blue: "text-blue-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-cyan-300";
}
