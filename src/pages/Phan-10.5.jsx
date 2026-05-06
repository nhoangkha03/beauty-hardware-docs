import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    CircleDot,
    Headphones,
    Mic,
    Mic2,
    Music,
    PackageCheck,
    Podcast,
    Radio,
    Search,
    Settings,
    ShieldCheck,
    SlidersHorizontal,
    Sparkles,
    Speaker,
    Usb,
    Volume2,
    Waves,
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
                            <Mic className="text-rose-400" size={24} />
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
                    <div className="text-sm font-semibold text-rose-300 bg-rose-400/10 px-3 py-1 rounded-full border border-rose-400/20">
                        Bài 10.5
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <EarAnalogy />
                <AudioFlowSimulator />
                <MicTypeExplorer />
                <UsbXlrGuide />
                <PolarPatternGuide />
                <SpecsExplorer />
                <SetupGuide />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-rose-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-pink-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-rose-300">
                        <BookOpen size={16} /> Phần 10: Audio Input
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Micro và âm thanh đầu vào
                        <span className="block text-rose-400">
                            thu giọng nói, nhạc cụ, môi trường
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Trong họp online, livestream, podcast hay quay bài
                        giảng, âm thanh thường quan trọng hơn hình ảnh. Micro
                        tốt giúp người nghe hiểu bạn rõ, ít mệt và ít bị phân
                        tâm bởi rè, vọng hoặc tiếng quạt.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Mic size={16} />} text="Microphone" />
                        <Tag icon={<Usb size={16} />} text="USB Mic" />
                        <Tag
                            icon={<SlidersHorizontal size={16} />}
                            text="Audio Interface"
                        />
                        <Tag icon={<Radio size={16} />} text="Polar Pattern" />
                        <Tag icon={<Zap size={16} />} text="Gain / Clipping" />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Mic />}
                            label="Micro"
                            desc="Thu âm thanh"
                            color="rose"
                            highlight
                        />
                        <HeroTile
                            icon={<Waves />}
                            label="Diaphragm"
                            desc="Màng rung"
                            color="pink"
                        />
                        <HeroTile
                            icon={<SlidersHorizontal />}
                            label="ADC"
                            desc="Analog → Digital"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<Headphones />}
                            label="Monitor"
                            desc="Nghe kiểm tra"
                            color="emerald"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Luồng cơ bản</p>
                        <p>Âm thanh → Màng rung → Tín hiệu điện</p>
                        <p className="text-rose-300">
                            → ADC → Dữ liệu số → Phần mềm
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu micro là thiết bị thu âm thanh và chuyển dao động âm thanh thành tín hiệu điện hoặc dữ liệu số.",
        "Nắm luồng hoạt động: âm thanh làm màng diaphragm rung, micro tạo tín hiệu, ADC chuyển sang dữ liệu số, phần mềm xử lý.",
        "Phân biệt micro tích hợp, USB, XLR, dynamic, condenser, lavalier, shotgun và audio interface.",
        "Đọc được thông số quan trọng: polar pattern, frequency response, sensitivity, gain, clipping, sample rate, bit depth, latency, phantom power, pop filter và shock mount.",
        "Biết cách setup mic cơ bản: đặt gần miệng, chọn hướng thu đúng, đặt gain an toàn, dùng tai nghe, giảm echo và giảm tiếng phòng.",
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
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-rose-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-300 flex items-center justify-center font-bold mb-4">
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
            icon: <Mic />,
            title: "Microphone",
            desc: "Thu giọng nói, nhạc cụ, tiếng phòng hoặc âm thanh môi trường.",
            color: "rose",
        },
        {
            icon: <Waves />,
            title: "Diaphragm",
            desc: "Màng rung dao động theo sóng âm trong không khí.",
            color: "pink",
        },
        {
            icon: <SlidersHorizontal />,
            title: "ADC",
            desc: "Chuyển tín hiệu analog thành dữ liệu số để máy tính xử lý.",
            color: "cyan",
        },
        {
            icon: <Headphones />,
            title: "Monitoring",
            desc: "Nghe lại âm thanh qua tai nghe để tránh echo và kiểm tra chất lượng.",
            color: "emerald",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Micro là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Micro</strong>, tiếng Anh là{" "}
                    <strong className="text-rose-300">Microphone</strong>, là
                    thiết bị dùng để thu âm thanh và chuyển dao động âm thanh
                    thành tín hiệu điện hoặc tín hiệu số. Có thể hình dung micro
                    như <strong className="text-white">tai của máy tính</strong>
                    : nó nghe âm thanh ngoài đời rồi gửi cho máy tính ghi âm,
                    gọi điện, livestream hoặc xử lý.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <RoleCard key={c.title} {...c} />
                    ))}
                </div>
                <div className="mt-6 bg-rose-500/10 border border-rose-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Giọng nói / âm thanh → Micro → Tín hiệu điện → ADC → Dữ liệu
                    số → Zoom / OBS / phần mềm ghi âm
                </div>
            </div>
        </section>
    );
}

function EarAnalogy() {
    const cards = [
        {
            icon: <Mic />,
            title: "Micro = tai của máy tính",
            desc: "Nghe âm thanh trong không khí rồi gửi về phần mềm.",
            color: "rose",
        },
        {
            icon: <Waves />,
            title: "Âm thanh = sóng dao động",
            desc: "Giọng nói làm không khí rung, màng mic rung theo.",
            color: "pink",
        },
        {
            icon: <SlidersHorizontal />,
            title: "ADC = phiên dịch viên",
            desc: "Dịch tín hiệu analog sang dữ liệu số máy tính hiểu được.",
            color: "cyan",
        },
        {
            icon: <Headphones />,
            title: "Tai nghe = kiểm âm",
            desc: "Nghe lại giọng mà không để loa vọng vào micro.",
            color: "emerald",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: tai của máy tính"
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

function AudioFlowSimulator() {
    const flows = {
        usb: {
            title: "Micro USB",
            color: "rose",
            steps: [
                {
                    icon: <Volume2 />,
                    title: "Bạn nói",
                    desc: "Không khí dao động theo giọng nói.",
                },
                {
                    icon: <Waves />,
                    title: "Màng mic rung",
                    desc: "Diaphragm rung theo dao động âm thanh.",
                },
                {
                    icon: <Mic />,
                    title: "Micro tạo tín hiệu",
                    desc: "Bộ phận bên trong micro biến rung động thành tín hiệu điện.",
                },
                {
                    icon: <SlidersHorizontal />,
                    title: "ADC tích hợp",
                    desc: "Micro USB có bộ chuyển đổi analog sang digital bên trong.",
                },
                {
                    icon: <Usb />,
                    title: "USB vào máy tính",
                    desc: "Máy tính nhận âm thanh số và phần mềm xử lý.",
                },
            ],
        },
        xlr: {
            title: "Micro XLR",
            color: "cyan",
            steps: [
                {
                    icon: <Mic2 />,
                    title: "Micro XLR thu âm",
                    desc: "Micro tạo tín hiệu analog qua dây XLR.",
                },
                {
                    icon: <SlidersHorizontal />,
                    title: "Audio interface khuếch đại",
                    desc: "Interface cấp gain, có thể cấp phantom power và xử lý đầu vào.",
                },
                {
                    icon: <Zap />,
                    title: "ADC trong interface",
                    desc: "Interface chuyển tín hiệu analog thành digital.",
                },
                {
                    icon: <Usb />,
                    title: "USB về máy tính",
                    desc: "Phần mềm như OBS, DAW, Zoom nhận âm thanh.",
                },
            ],
        },
        problem: {
            title: "Gain sai / clipping",
            color: "red",
            steps: [
                {
                    icon: <AlertTriangle />,
                    title: "Mic xa miệng",
                    desc: "Bạn tăng gain để tiếng to hơn.",
                },
                {
                    icon: <Volume2 />,
                    title: "Tiếng phòng cũng tăng",
                    desc: "Quạt, bàn phím, echo và tiếng nền bị kéo lên theo.",
                },
                {
                    icon: <Zap />,
                    title: "Tín hiệu chạm 0dB",
                    desc: "Khi nói to, sóng âm vượt ngưỡng thu.",
                },
                {
                    icon: <XCircle />,
                    title: "Clipping",
                    desc: "Âm bị rè, vỡ, bể tiếng và rất khó sửa sau khi ghi.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("usb");
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
                title="Micro thu âm như thế nào?"
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

function MicTypeExplorer() {
    const types = {
        builtin: {
            icon: <Monitor />,
            title: "Micro tích hợp",
            color: "blue",
            desc: "Có sẵn trên laptop, webcam, điện thoại hoặc tai nghe.",
            good: ["Tiện", "Không cần mua thêm", "Đủ cho họp nhanh"],
            bad: [
                "Âm thường mỏng",
                "Dễ bắt tiếng phòng",
                "Dễ bắt quạt/bàn phím",
            ],
            fit: "Họp nhanh, học online cơ bản",
        },
        usb: {
            icon: <Usb />,
            title: "Micro USB",
            color: "rose",
            desc: "Cắm thẳng vào máy tính qua USB, có ADC tích hợp.",
            good: [
                "Dễ dùng",
                "Cắm là chạy",
                "Không cần interface",
                "Hợp người mới",
            ],
            bad: ["Nâng cấp hạn chế hơn XLR", "Mỗi mic tự xử lý riêng"],
            fit: "Họp online, podcast cơ bản, livestream, dạy học",
        },
        xlr: {
            icon: <SlidersHorizontal />,
            title: "Micro XLR",
            color: "cyan",
            desc: "Chuẩn kết nối chuyên nghiệp, cần audio interface hoặc mixer.",
            good: [
                "Âm thanh chuyên nghiệp",
                "Dễ nâng cấp",
                "Ổn định",
                "Hợp studio",
            ],
            bad: ["Cần interface/mixer", "Thiết lập phức tạp hơn"],
            fit: "Podcast, thu âm, livestream nghiêm túc, studio",
        },
        dynamic: {
            icon: <Mic />,
            title: "Dynamic",
            color: "emerald",
            desc: "Bền, chịu âm lượng lớn, thường ít bắt tiếng phòng hơn condenser.",
            good: ["Ít bắt tiếng phòng", "Bền", "Hợp phòng ồn", "Dễ kiểm soát"],
            bad: ["Cần nói gần", "Một số mẫu cần gain mạnh"],
            fit: "Podcast, livestream, vocal sân khấu, phòng chưa xử lý âm",
        },
        condenser: {
            icon: <Sparkles />,
            title: "Condenser",
            color: "purple",
            desc: "Nhạy, thu chi tiết tốt, thường dùng trong phòng thu.",
            good: ["Âm sáng", "Chi tiết", "Nhạy", "Hợp vocal/nhạc cụ"],
            bad: [
                "Dễ bắt tiếng phòng",
                "Dễ bắt quạt/bàn phím",
                "XLR thường cần phantom power",
            ],
            fit: "Thu vocal, nhạc cụ, voice-over trong phòng yên tĩnh",
        },
        lavalier: {
            icon: <Radio />,
            title: "Lavalier / Cài áo",
            color: "orange",
            desc: "Micro nhỏ gắn lên áo gần miệng.",
            good: [
                "Nhỏ gọn",
                "Giọng ổn định khi di chuyển",
                "Ít chiếm khung hình",
            ],
            bad: ["Dễ cọ áo", "Cần gắn đúng vị trí"],
            fit: "Video, phỏng vấn, dạy học, TikTok, vlog",
        },
        shotgun: {
            icon: <Zap />,
            title: "Shotgun",
            color: "red",
            desc: "Micro hướng thu hẹp, tập trung âm phía trước.",
            good: [
                "Giảm âm bên cạnh",
                "Hợp quay phim",
                "Có thể đặt ngoài khung hình",
            ],
            bad: ["Cần hướng chính xác", "Không lý tưởng trong phòng vang"],
            fit: "Quay phim, phỏng vấn, video ngoài trời",
        },
    };
    const [active, setActive] = useState("dynamic");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="rose"
                title="Các loại micro và thiết bị âm thanh đầu vào"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-7 gap-3 mb-6">
                    {Object.entries(types).map(([key, t]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-3 border text-left transition-all ${active === key ? `${softBorder(t.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-xs">
                                {React.cloneElement(t.icon, { size: 18 })}{" "}
                                {t.title}
                            </div>
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

function UsbXlrGuide() {
    const rows = [
        [
            "USB Microphone",
            "Micro → USB → Máy tính",
            "Dễ dùng, cắm là chạy",
            "Nâng cấp hạn chế hơn",
            "Người mới, họp, stream cơ bản",
        ],
        [
            "XLR Microphone",
            "Micro → Audio interface/mixer → USB → Máy tính",
            "Chuyên nghiệp, nâng cấp linh hoạt",
            "Cần thêm thiết bị",
            "Podcast, studio, livestream nghiêm túc",
        ],
        [
            "Audio Interface",
            "XLR/nhạc cụ → preamp/ADC → USB",
            "Gain tốt, direct monitoring, phantom power",
            "Tốn thêm chi phí",
            "Micro XLR, guitar, keyboard, thu âm tại nhà",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="cyan"
                title="USB, XLR và Audio Interface"
                icon={<SlidersHorizontal />}
            />
            <DataTable
                title="Chọn đường vào âm thanh theo mức độ nghiêm túc"
                rows={rows}
                headers={[
                    "Thiết bị",
                    "Sơ đồ",
                    "Ưu điểm",
                    "Nhược điểm",
                    "Phù hợp",
                ]}
                accent="cyan"
            />
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-cyan-300">Quy tắc nhanh:</strong> muốn
                đơn giản chọn USB mic; muốn nâng cấp lâu dài, dùng nhiều
                mic/nhạc cụ hoặc thu âm nghiêm túc thì cân nhắc XLR + audio
                interface.
            </div>
        </section>
    );
}

function PolarPatternGuide() {
    const rows = [
        [
            "Cardioid",
            "Thu phía trước, giảm phía sau",
            "Podcast, livestream, họp online",
        ],
        [
            "Omnidirectional",
            "Thu mọi hướng",
            "Họp nhóm quanh bàn, ghi âm môi trường",
        ],
        [
            "Bidirectional / Figure-8",
            "Thu trước và sau, giảm hai bên",
            "Phỏng vấn 2 người đối diện",
        ],
        ["Stereo", "Thu không gian trái-phải", "Nhạc cụ, môi trường, ASMR"],
        [
            "Shotgun / Supercardioid",
            "Tập trung phía trước hẹp hơn",
            "Quay phim, phỏng vấn ngoài khung hình",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="purple"
                title="Polar Pattern – hướng thu âm"
                icon={<Radio />}
            />
            <DataTable
                title="Đa số người dùng cá nhân nên bắt đầu với cardioid"
                rows={rows}
                headers={["Hướng thu", "Đặc điểm", "Phù hợp"]}
                accent="purple"
            />
            <div className="grid md:grid-cols-3 gap-3">
                <RuleCard
                    label="Cardioid"
                    value="Dễ dùng nhất cho một người nói trước mic."
                    color="emerald"
                />
                <RuleCard
                    label="Omni"
                    value="Thu cả phòng, tiện họp nhóm nhưng nhiều tiếng nền."
                    color="cyan"
                />
                <RuleCard
                    label="Figure-8"
                    value="Hợp phỏng vấn hai người ngồi đối diện."
                    color="orange"
                />
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        pattern: {
            icon: <Radio />,
            title: "Polar Pattern",
            detail: "Hướng mà micro nhạy nhất khi thu âm: cardioid, omni, figure-8, stereo, shotgun.",
            impact: "Họp/podcast một người nên chọn cardioid để giảm âm phía sau.",
        },
        frequency: {
            icon: <Waves />,
            title: "Frequency Response",
            detail: "Dải tần micro có thể thu. Tai người nghe khoảng 20Hz–20kHz, nhưng giọng nói chủ yếu khoảng 80Hz–12kHz.",
            impact: "Giọng nói cần rõ, ít ồn, dễ nghe hơn là thu tất cả mọi thứ.",
        },
        sensitivity: {
            icon: <Gauge />,
            title: "Sensitivity",
            detail: "Độ nhạy cho biết micro thu âm mạnh/yếu thế nào.",
            impact: "Mic nhạy cao thu tiếng nhỏ tốt nhưng dễ bắt tiếng phòng; mic nhạy thấp cần nói gần/gain cao hơn nhưng dễ kiểm soát tiếng ồn.",
        },
        gain: {
            icon: <SlidersHorizontal />,
            title: "Gain",
            detail: "Mức khuếch đại tín hiệu đầu vào.",
            impact: "Nói bình thường nên peak khoảng -12dB đến -6dB; đừng để thường xuyên chạm 0dB.",
        },
        clipping: {
            icon: <Zap />,
            title: "Clipping",
            detail: "Âm bị vỡ/rè vì tín hiệu vượt ngưỡng thu.",
            impact: "Clipping rất khó sửa sau khi ghi; giảm gain hoặc đưa mic gần miệng hơn thay vì tăng gain bừa.",
        },
        sample: {
            icon: <Settings />,
            title: "Sample Rate",
            detail: "Số lần âm thanh được lấy mẫu mỗi giây: 44.1kHz, 48kHz, 96kHz, 192kHz.",
            impact: "Podcast/video/livestream thường dùng 48kHz là rất ổn.",
        },
        bit: {
            icon: <CircleDot />,
            title: "Bit Depth",
            detail: "Độ chi tiết mức âm lượng trong bản ghi: 16-bit, 24-bit, 32-bit float.",
            impact: "Người mới nên dùng 24-bit / 48kHz nếu thiết bị hỗ trợ.",
        },
        latency: {
            icon: <Gauge />,
            title: "Latency",
            detail: "Độ trễ giữa lúc bạn nói và lúc nghe/ghi lại.",
            impact: "Quan trọng khi livestream, thu nhạc, monitor giọng qua tai nghe hoặc chơi nhạc cụ.",
        },
        phantom: {
            icon: <Zap />,
            title: "Phantom Power 48V",
            detail: "Nguồn điện cấp qua XLR, thường cần cho condenser XLR.",
            impact: "Dynamic XLR thường không cần; đừng bật 48V bừa bãi nếu không hiểu thiết bị.",
        },
        filter: {
            icon: <ShieldCheck />,
            title: "Pop Filter / Shock Mount",
            detail: "Pop filter giảm tiếng bụp p/b; shock mount giảm rung bàn, gõ phím, va chạm chân mic.",
            impact: "Phụ kiện rẻ nhưng cải thiện độ sạch âm rõ rệt.",
        },
    };
    const [active, setActive] = useState("gain");
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
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(specs).map(([key, s]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-3 text-center transition-all ${active === key ? "bg-yellow-500 text-slate-950" : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}
                        >
                            {React.cloneElement(s.icon, { size: 18 })}
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

function SetupGuide() {
    const rows = [
        [
            "1",
            "Đặt mic gần miệng",
            "Khoảng 10–20cm, hơi lệch sang bên để tránh hơi thổi trực tiếp",
        ],
        [
            "2",
            "Chọn đúng hướng thu",
            "Cardioid: mặt thu hướng về miệng, lưng mic quay về nguồn ồn",
        ],
        [
            "3",
            "Giảm gain để không clip",
            "Peak giọng nói khoảng -12dB đến -6dB",
        ],
        ["4", "Dùng pop filter", "Giảm tiếng bụp khi nói p/b"],
        ["5", "Dùng tai nghe", "Tránh loa ngoài vọng ngược vào mic"],
        [
            "6",
            "Giảm tiếng phòng",
            "Đóng cửa, tránh quạt gần mic, dùng rèm/thảm/kệ sách/chăn mềm",
        ],
        [
            "7",
            "Noise suppression nếu cần",
            "Dùng xử lý phần mềm sau khi đã đặt mic đúng",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="emerald"
                title="Setup micro cơ bản cho âm thanh rõ"
                icon={<PackageCheck />}
            />
            <DataTable
                title="Thứ tự thiết lập nên làm"
                rows={rows}
                headers={["Bước", "Việc cần làm", "Ghi chú"]}
                accent="emerald"
            />
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                Cài đặt khởi đầu tốt:
                <br />
                Sample rate: 48kHz
                <br />
                Bit depth: 24-bit nếu có
                <br />
                Peak giọng nói: -12dB đến -6dB
                <br />
                <span className="text-emerald-300">
                    Không để thường xuyên chạm 0dB.
                </span>
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Mic />,
            title: "Blue Yeti",
            subtitle: "USB condenser dễ dùng",
            color: "rose",
            points: [
                "Cắm USB là dùng",
                "Nhiều pickup patterns",
                "Hợp podcast/stream/họp cơ bản",
                "Khá nhạy",
                "Cần phòng tương đối yên tĩnh",
            ],
            lesson: "USB condenser tiện cho người mới nhưng cần đặt gần miệng, giảm gain và kiểm soát tiếng phòng.",
        },
        {
            icon: <Podcast />,
            title: "Shure MV7+",
            subtitle: "Dynamic USB/XLR",
            color: "cyan",
            points: [
                "Có USB-C và XLR",
                "Hợp podcast/stream",
                "Dynamic ít bắt tiếng phòng hơn condenser",
                "Có xử lý âm thông minh",
                "Có đường nâng cấp XLR",
            ],
            lesson: "USB/XLR hybrid hợp người muốn bắt đầu đơn giản nhưng sau này vẫn nâng cấp hệ âm thanh được.",
        },
        {
            icon: <Radio />,
            title: "RØDE Wireless Micro",
            subtitle: "Mic cài áo không dây",
            color: "orange",
            points: [
                "2 transmitter cài áo",
                "Receiver cắm điện thoại",
                "Nhỏ gọn",
                "Hợp vlog/interview/short video",
                "Giọng ổn định khi di chuyển",
            ],
            lesson: "Lavalier không dây rất tiện khi quay video bằng điện thoại hoặc cần nói xa camera.",
        },
        {
            icon: <SlidersHorizontal />,
            title: "Focusrite Scarlett 2i2",
            subtitle: "Audio interface phổ biến",
            color: "emerald",
            points: [
                "2 input / 2 output",
                "Preamp cho XLR",
                "Phantom power",
                "USB-C",
                "Hợp thu vocal/guitar/podcast",
            ],
            lesson: "Audio interface là nền tảng nếu bạn muốn dùng micro XLR hoặc thu nhạc cụ nghiêm túc.",
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
        meeting: {
            icon: <Headphones />,
            title: "Họp / học online",
            answer: "Tai nghe có mic hoặc USB mic đơn giản là đủ. Ưu tiên rõ tiếng, ít echo hơn là âm quá chi tiết.",
            color: "cyan",
        },
        podcast: {
            icon: <Podcast />,
            title: "Podcast phòng ngủ",
            answer: "Ưu tiên dynamic cardioid, đặt gần miệng, dùng pop filter và tai nghe. Dynamic thường dễ kiểm soát phòng vang hơn condenser.",
            color: "rose",
        },
        vocal: {
            icon: <Music />,
            title: "Thu vocal/nhạc cụ",
            answer: "Nếu phòng yên tĩnh và có xử lý âm, condenser XLR + audio interface cho âm chi tiết hơn. Dùng 24-bit/48kHz hoặc cao hơn nếu cần hậu kỳ.",
            color: "purple",
        },
        video: {
            icon: <Radio />,
            title: "Quay video điện thoại",
            answer: "Mic lavalier không dây giúp giọng ổn định khi bạn di chuyển và đứng xa camera.",
            color: "orange",
        },
        noisy: {
            icon: <Volume2 />,
            title: "Phòng ồn / bàn phím cơ",
            answer: "Dùng dynamic cardioid nói gần, giảm gain, quay lưng mic về nguồn ồn, tránh để mic xa rồi tăng gain.",
            color: "red",
        },
        xlr: {
            icon: <SlidersHorizontal />,
            title: "Muốn nâng cấp lâu dài",
            answer: "Chọn XLR mic + audio interface. Bạn có thể đổi mic, thêm nhạc cụ, monitor trực tiếp và kiểm soát gain tốt hơn.",
            color: "emerald",
        },
    };
    const [active, setActive] = useState("podcast");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: chọn micro theo tình huống"
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
            wrong: "Micro càng đắt thì tự động nghe hay",
            right: "Mic tốt nhưng đặt sai vị trí, phòng vang, gain sai hoặc nói quá xa thì vẫn dở.",
        },
        {
            wrong: "Để micro xa miệng cho đỡ vướng",
            right: "Mic càng xa càng dễ bắt tiếng phòng, tiếng bàn phím, tiếng quạt. Mic để bàn nên cách miệng khoảng 10–20cm.",
        },
        {
            wrong: "Tăng gain cao để tiếng to hơn",
            right: "Gain quá cao dễ clip và tăng cả tiếng nền. Hãy đưa mic gần miệng, giảm tiếng ồn phòng rồi đặt gain vừa đủ.",
        },
        {
            wrong: "Condenser luôn tốt hơn dynamic",
            right: "Condenser chi tiết nhưng dễ bắt tiếng phòng. Dynamic cardioid nói gần có thể sạch hơn trong phòng chưa xử lý âm.",
        },
        {
            wrong: "Mic tai nghe lúc nào cũng tệ",
            right: "Mic headset có thể rất thực tế cho họp/game vì luôn gần miệng và giảm echo tốt hơn mic laptop.",
        },
        {
            wrong: "Chỉ cần mua mic, không cần tai nghe",
            right: "Tai nghe giúp tránh tiếng loa vọng vào mic, giảm echo trong họp và thu âm.",
        },
    ];
    const tips = [
        "Họp online / học online: tai nghe có mic hoặc USB mic đơn giản là đủ.",
        "Podcast / livestream phòng chưa xử lý âm: ưu tiên dynamic cardioid, đặt gần miệng.",
        "Thu vocal/nhạc cụ trong phòng yên tĩnh: condenser XLR + audio interface có thể tốt hơn.",
        "Quay video bằng điện thoại: lavalier không dây rất tiện.",
        "Nói bình thường nên peak khoảng -12dB đến -6dB, không để chạm 0dB thường xuyên.",
        "Giảm tiếng phòng trước khi mua plugin đắt tiền: đóng cửa, tránh quạt gần mic, dùng rèm/thảm/kệ sách/chăn mềm.",
        "Đặt mic tránh hướng bàn phím nếu bàn phím cơ quá ồn.",
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
                        <span className="bg-rose-500/20 text-rose-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-rose-300 border border-slate-800 shadow-inner space-y-2">
                            <p>Micro = tai của máy tính</p>
                            <p>
                                Âm thanh → diaphragm → tín hiệu điện → ADC → dữ
                                liệu số
                            </p>
                            <br />
                            <p className="text-slate-500"># Loại mic</p>
                            <p className="text-slate-300">
                                USB dễ dùng • XLR chuyên nghiệp • Dynamic ít bắt
                                phòng • Condenser chi tiết • Lavalier tiện video
                            </p>
                            <br />
                            <p className="text-slate-500"># Setup cơ bản</p>
                            <p className="text-slate-300">
                                Gần miệng • đúng hướng thu • gain không clip •
                                tai nghe • giảm tiếng phòng
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
        question: "Micro có nhiệm vụ chính là gì?",
        options: [
            "Thu âm thanh và chuyển thành tín hiệu cho máy tính xử lý",
            "Làm mát CPU",
            "Tăng dung lượng RAM",
            "Hiển thị hình ảnh lên màn hình",
        ],
        correct: 0,
        explanation:
            "Micro thu giọng nói/âm thanh rồi chuyển thành tín hiệu điện hoặc dữ liệu số cho máy tính xử lý.",
    },
    {
        question: "Micro USB khác micro XLR ở điểm nào?",
        options: [
            "Micro USB cắm trực tiếp vào máy tính, còn XLR thường cần audio interface/mixer",
            "Micro USB không thu được giọng nói",
            "Micro XLR chỉ dùng được với điện thoại",
            "Micro USB luôn đắt hơn XLR",
        ],
        correct: 0,
        explanation:
            "USB mic có ADC tích hợp và cắm thẳng vào máy tính; XLR thường cần interface hoặc mixer.",
    },
    {
        question: "Polar pattern cardioid nghĩa là gì?",
        options: [
            "Thu chủ yếu phía trước micro, giảm âm phía sau",
            "Thu chỉ dưới mặt bàn",
            "Chỉ thu âm thanh từ Internet",
            "Không thu giọng người",
        ],
        correct: 0,
        explanation:
            "Cardioid tập trung thu phía trước, giảm âm phía sau nên dễ dùng cho podcast/họp một người.",
    },
    {
        question: "Clipping là gì?",
        options: [
            "Âm bị vỡ/rè vì tín hiệu quá lớn",
            "Âm thanh quá nhỏ vì mic hết pin",
            "Chuột bị mất tracking",
            "Màn hình bị chói",
        ],
        correct: 0,
        explanation:
            "Clipping xảy ra khi tín hiệu vượt ngưỡng, làm âm vỡ/rè và khó sửa sau khi ghi.",
    },
    {
        question: "Vì sao dùng tai nghe khi họp/thu âm có lợi?",
        options: [
            "Giảm echo vì micro không thu lại tiếng từ loa ngoài",
            "Làm CPU mát hơn",
            "Tăng DPI của chuột",
            "Tăng độ sáng màn hình",
        ],
        correct: 0,
        explanation:
            "Tai nghe giúp âm của người khác không phát qua loa ngoài rồi vọng ngược vào micro.",
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

function NextLesson() {
    return (
        <div className="text-center pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">
                Bạn đã hiểu micro và thiết bị âm thanh đầu vào. Tiếp theo là bộ
                điều khiển như gamepad và joystick — nhóm thiết bị nhập liệu
                chuyên dùng cho game, mô phỏng lái xe, mô phỏng bay và hệ thống
                điều khiển đặc thù.
            </p>
            <Link
                to="/phan-10-6"
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-rose-500/20"
            >
                Bài tiếp theo: 10.6 — Bộ điều khiển Gamepad, Joystick{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "rose" }) {
    const colorMap = {
        rose: "bg-rose-500/20 text-rose-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-rose-500/10 border-rose-400/50" : softBorder(color)}`}
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
        rose: "bg-rose-500/10 text-rose-300 border border-rose-500/20",
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
    return map[color] || map.rose;
}
function softBorder(color) {
    const map = {
        rose: "bg-rose-500/5 border-rose-500/20",
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
    return map[color] || map.rose;
}
function textColor(color) {
    const map = {
        rose: "text-rose-300",
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
    return map[color] || "text-rose-300";
}
