import React, { useMemo, useState } from "react";
import {
    AlertTriangle,
    ArrowRight,
    Award,
    BookOpen,
    Brain,
    Camera,
    CheckCircle2,
    ChevronRight,
    Cpu,
    Database,
    Gamepad2,
    Gauge,
    HardDrive,
    Headphones,
    Keyboard,
    Lightbulb,
    MemoryStick,
    Mic,
    Monitor,
    MousePointer2,
    PackageCheck,
    Printer,
    Projector,
    Puzzle,
    RefreshCcw,
    Save,
    ScanLine,
    Search,
    Settings,
    Speaker,
    TabletSmartphone,
    Touchpad,
    Tv,
    Usb,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center shadow-lg shadow-blue-500/10">
                            <Workflow className="text-blue-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 1: Tổng quan về phần cứng
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-blue-300 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                        Bài 1.2
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreIdea />
                <RestaurantAnalogy />
                <TypingFlowSimulator />
                <CategoryExplorer />
                <StorageMemoryNote />
                <SpecsByGroup />
                <RealExamples />
                <CommonMistakes />
                <ClassificationLab />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-blue-300">
                        <BookOpen size={16} /> Phần 1: Tổng quan về phần cứng
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Phân loại phần cứng
                        <span className="block text-blue-400">
                            Input → Processing → Storage → Output
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Thay vì học rời rạc từng thiết bị, ta chia phần cứng
                        theo vai trò: thiết bị nào đưa dữ liệu vào, thiết bị nào
                        xử lý, thiết bị nào lưu trữ và thiết bị nào xuất kết quả
                        ra ngoài.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Keyboard size={16} />} text="Input" />
                        <Tag icon={<Cpu size={16} />} text="Processing" />
                        <Tag icon={<HardDrive size={16} />} text="Storage" />
                        <Tag icon={<Monitor size={16} />} text="Output" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <FlowPanel
                            icon={<Keyboard />}
                            label="Input"
                            desc="Đưa dữ liệu vào"
                            color="cyan"
                        />
                        <FlowPanel
                            icon={<Cpu />}
                            label="Processing"
                            desc="Xử lý dữ liệu"
                            color="orange"
                        />
                        <FlowPanel
                            icon={<HardDrive />}
                            label="Storage"
                            desc="Lưu dữ liệu"
                            color="emerald"
                        />
                        <FlowPanel
                            icon={<Monitor />}
                            label="Output"
                            desc="Xuất kết quả"
                            color="pink"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Luồng đơn giản</p>
                        <p className="text-cyan-300">Nhập dữ liệu</p>
                        <p className="text-orange-300">→ Xử lý</p>
                        <p className="text-emerald-300">→ Lưu trữ</p>
                        <p className="text-pink-300">→ Xuất kết quả</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu vì sao phải phân loại phần cứng.",
        "Nắm 4 nhóm chính: Input, Processing, Storage, Output.",
        "Biết ví dụ thiết bị thuộc từng nhóm.",
        "Phân biệt được RAM, SSD, HDD trong nhóm lưu trữ/bộ nhớ.",
        "Tránh nhầm micro/loa, GPU/màn hình, SSD/CPU.",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="blue"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/50 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
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
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Ý tưởng cốt lõi: nhìn máy tính theo luồng dữ liệu"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-8">
                    Một bộ máy tính có rất nhiều thiết bị: màn hình, bàn phím,
                    chuột, CPU, RAM, ổ cứng, loa, webcam… Nếu không phân loại,
                    người mới rất dễ rối. Cách dễ nhất là hỏi: thiết bị này đang
                    tham gia ở bước nào trong luồng dữ liệu?
                </p>

                <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-stretch">
                    <CoreStep
                        icon={<Keyboard />}
                        title="Input"
                        desc="Đưa dữ liệu hoặc lệnh vào máy"
                        color="cyan"
                    />
                    <FlowArrow />
                    <CoreStep
                        icon={<Cpu />}
                        title="Processing"
                        desc="Tính toán, xử lý, điều phối"
                        color="orange"
                    />
                    <FlowArrow />
                    <CoreStep
                        icon={<HardDrive />}
                        title="Storage"
                        desc="Lưu dữ liệu tạm thời hoặc lâu dài"
                        color="emerald"
                    />
                    <FlowArrow />
                    <CoreStep
                        icon={<Monitor />}
                        title="Output"
                        desc="Đưa kết quả ra cho người dùng"
                        color="pink"
                    />
                </div>

                <div className="mt-8 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-cyan-300">Ví dụ nhanh:</strong> Bạn
                    gõ “Xin chào” bằng bàn phím → CPU xử lý tín hiệu → RAM giữ
                    dữ liệu đang làm việc → SSD lưu file nếu bấm Save → màn hình
                    hiển thị chữ.
                </div>
            </div>
        </section>
    );
}

function RestaurantAnalogy() {
    const pairs = [
        {
            left: "Khách gọi món",
            right: "Input – nhập yêu cầu",
            icon: <Keyboard />,
        },
        {
            left: "Đầu bếp chế biến",
            right: "Processing – xử lý",
            icon: <Cpu />,
        },
        {
            left: "Kho nguyên liệu / tủ lạnh",
            right: "Storage – lưu trữ",
            icon: <Database />,
        },
        {
            left: "Nhân viên mang món ra",
            right: "Output – xuất kết quả",
            icon: <Monitor />,
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="orange"
                title="Ví dụ dễ hiểu: máy tính giống một quán ăn"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 md:p-8">
                <p className="text-slate-300 mb-8 leading-relaxed">
                    Trong quán ăn, khách đưa yêu cầu, đầu bếp xử lý, kho chứa
                    nguyên liệu, nhân viên đưa món ra. Máy tính cũng có luồng
                    tương tự.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    {pairs.map((p) => (
                        <div
                            key={p.left}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex items-center justify-between gap-4"
                        >
                            <div className="flex items-center gap-3 text-slate-300">
                                <div className="w-11 h-11 rounded-xl bg-orange-500/10 text-orange-300 flex items-center justify-center shrink-0">
                                    {React.cloneElement(p.icon, { size: 22 })}
                                </div>
                                <span className="font-semibold">{p.left}</span>
                            </div>
                            <ArrowRight
                                className="text-slate-600 shrink-0"
                                size={18}
                            />
                            <span className="font-bold text-blue-300 text-right">
                                {p.right}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TypingFlowSimulator() {
    const steps = [
        {
            group: "Input",
            title: "Bàn phím nhận phím bạn bấm",
            desc: "Bạn gõ câu “Xin chào”. Bàn phím biến thao tác bấm phím thành tín hiệu gửi vào máy tính.",
            icon: <Keyboard />,
            color: "cyan",
        },
        {
            group: "Processing",
            title: "CPU xử lý tín hiệu",
            desc: "CPU hiểu phím nào vừa được bấm, chuyển thành ký tự và điều phối dữ liệu cho phần mềm Word.",
            icon: <Cpu />,
            color: "orange",
        },
        {
            group: "Storage",
            title: "RAM giữ dữ liệu đang làm việc",
            desc: "Nội dung đang gõ được giữ tạm trong RAM để phần mềm thao tác nhanh.",
            icon: <MemoryStick />,
            color: "emerald",
        },
        {
            group: "Storage",
            title: "SSD/HDD lưu file khi bấm Save",
            desc: "Khi bạn lưu tài liệu, dữ liệu được ghi xuống SSD hoặc HDD để vẫn còn sau khi tắt máy.",
            icon: <Save />,
            color: "emerald",
        },
        {
            group: "Output",
            title: "Màn hình hiển thị chữ",
            desc: "Kết quả cuối cùng được xuất ra màn hình: bạn nhìn thấy dòng chữ “Xin chào”.",
            icon: <Monitor />,
            color: "pink",
        },
    ];

    const [step, setStep] = useState(0);
    const current = steps[step];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Mô phỏng: gõ chữ trong Word"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[350px] flex flex-col justify-between">
                        <div>
                            <div
                                className={`w-16 h-16 rounded-2xl ${badgeColor(current.color)} flex items-center justify-center mb-5`}
                            >
                                {React.cloneElement(current.icon, { size: 32 })}
                            </div>
                            <p className="text-purple-300 text-sm font-bold mb-2">
                                Bước {step + 1}/{steps.length} • {current.group}
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {current.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {current.desc}
                            </p>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <button
                                onClick={() =>
                                    setStep((s) => Math.max(0, s - 1))
                                }
                                disabled={step === 0}
                                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
                            >
                                Quay lại
                            </button>
                            <button
                                onClick={() =>
                                    setStep((s) => (s + 1) % steps.length)
                                }
                                className="px-5 py-2 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold transition-colors inline-flex items-center gap-2"
                            >
                                {step === steps.length - 1
                                    ? "Xem lại"
                                    : "Bước tiếp"}
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {steps.map((item, index) => (
                            <button
                                key={item.title}
                                onClick={() => setStep(index)}
                                className={`w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition-all ${
                                    step === index
                                        ? "bg-purple-500/10 border-purple-500/40 text-white"
                                        : index < step
                                          ? "bg-green-500/5 border-green-500/20 text-slate-300"
                                          : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700"
                                }`}
                            >
                                <div
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${step === index ? "bg-purple-500 text-white" : index < step ? "bg-green-500/20 text-green-400" : "bg-slate-900 text-slate-500"}`}
                                >
                                    {index < step ? (
                                        <CheckCircle2 size={18} />
                                    ) : (
                                        index + 1
                                    )}
                                </div>
                                <div>
                                    <p className="font-bold text-sm">
                                        {item.title}
                                    </p>
                                    <p className="text-xs opacity-75 mt-1">
                                        {item.group}
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

function CategoryExplorer() {
    const categories = {
        input: {
            color: "cyan",
            icon: <Keyboard />,
            title: "Input – Thiết bị nhập liệu",
            desc: "Thiết bị giúp người dùng đưa thông tin, dữ liệu hoặc lệnh vào máy tính.",
            examples: [
                {
                    icon: <Keyboard />,
                    name: "Bàn phím",
                    detail: "Chữ, số, phím tắt",
                },
                {
                    icon: <MousePointer2 />,
                    name: "Chuột",
                    detail: "Di chuyển, click, kéo thả",
                },
                { icon: <Mic />, name: "Micro", detail: "Âm thanh" },
                { icon: <Camera />, name: "Webcam", detail: "Hình ảnh/video" },
                {
                    icon: <ScanLine />,
                    name: "Scanner",
                    detail: "Tài liệu giấy, hình ảnh",
                },
                {
                    icon: <Touchpad />,
                    name: "Touchscreen",
                    detail: "Chạm, vuốt",
                },
            ],
            remember:
                "Bạn bấm bàn phím, nói vào micro, di chuyển chuột: máy tính đang nhận dữ liệu đầu vào.",
        },
        processing: {
            color: "orange",
            icon: <Cpu />,
            title: "Processing – Thiết bị xử lý",
            desc: "Nhóm phần cứng chịu trách nhiệm tính toán, xử lý dữ liệu và điều phối hoạt động.",
            examples: [
                { icon: <Cpu />, name: "CPU", detail: "Bộ xử lý trung tâm" },
                {
                    icon: <Gauge />,
                    name: "GPU",
                    detail: "Xử lý đồ họa, AI, render",
                },
                {
                    icon: <Puzzle />,
                    name: "Chipset",
                    detail: "Điều phối giao tiếp phần cứng",
                },
                {
                    icon: <Zap />,
                    name: "NPU",
                    detail: "Xử lý tác vụ AI trên máy hiện đại",
                },
            ],
            remember:
                "Khi chơi game, CPU xử lý logic game; GPU xử lý hình ảnh, ánh sáng, bóng đổ và khung hình.",
        },
        storage: {
            color: "emerald",
            icon: <HardDrive />,
            title: "Storage – Thiết bị lưu trữ",
            desc: "Nhóm thiết bị dùng để lưu dữ liệu tạm thời hoặc lâu dài.",
            examples: [
                {
                    icon: <MemoryStick />,
                    name: "RAM",
                    detail: "Lưu tạm, mất khi tắt máy",
                },
                {
                    icon: <HardDrive />,
                    name: "SSD",
                    detail: "Nhanh, lưu Windows/app/game",
                },
                {
                    icon: <Database />,
                    name: "HDD",
                    detail: "Chậm hơn SSD, lưu dữ liệu lớn",
                },
                {
                    icon: <Usb />,
                    name: "USB/Thẻ nhớ",
                    detail: "Chuyển file, lưu tạm",
                },
            ],
            remember:
                "Mở Chrome: chương trình lấy từ SSD lên RAM, CPU xử lý để chạy.",
        },
        output: {
            color: "pink",
            icon: <Monitor />,
            title: "Output – Thiết bị xuất dữ liệu",
            desc: "Thiết bị đưa kết quả từ máy tính ra bên ngoài để người dùng nhìn, nghe, in hoặc trình chiếu.",
            examples: [
                {
                    icon: <Monitor />,
                    name: "Màn hình",
                    detail: "Hình ảnh, chữ, giao diện",
                },
                { icon: <Speaker />, name: "Loa", detail: "Âm thanh" },
                {
                    icon: <Headphones />,
                    name: "Tai nghe",
                    detail: "Âm thanh riêng tư",
                },
                { icon: <Printer />, name: "Máy in", detail: "Tài liệu giấy" },
                {
                    icon: <Projector />,
                    name: "Máy chiếu",
                    detail: "Hình ảnh lớn",
                },
            ],
            remember:
                "CPU xử lý file nhạc → card âm thanh xuất tín hiệu → loa phát âm thanh.",
        },
    };

    const [active, setActive] = useState("input");
    const item = categories[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="emerald"
                title="Khám phá từng nhóm phần cứng"
                icon={<Search />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid md:grid-cols-4 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(categories).map(([key, c]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex items-center gap-3 rounded-2xl p-4 text-left transition-all ${active === key ? `${activeBg(c.color)} text-white shadow-lg` : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}
                        >
                            <span className="shrink-0">
                                {React.cloneElement(c.icon, { size: 22 })}
                            </span>
                            <span>
                                <span className="block font-bold text-sm">
                                    {c.title.split(" – ")[0]}
                                </span>
                                <span className="block text-xs mt-1 opacity-75">
                                    {c.title.split(" – ")[1]}
                                </span>
                            </span>
                        </button>
                    ))}
                </div>

                <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                        <div
                            className={`w-14 h-14 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center shrink-0`}
                        >
                            {React.cloneElement(item.icon, { size: 28 })}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {item.examples.map((ex) => (
                            <div
                                key={ex.name}
                                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-3 items-start"
                            >
                                <div
                                    className={`w-10 h-10 rounded-xl ${badgeColor(item.color)} flex items-center justify-center shrink-0`}
                                >
                                    {React.cloneElement(ex.icon, { size: 20 })}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">
                                        {ex.name}
                                    </h4>
                                    <p className="text-xs text-slate-500 mt-1">
                                        {ex.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        className={`mt-6 rounded-2xl p-5 text-sm border ${softBorder(item.color)}`}
                    >
                        <strong className="text-white">Ví dụ dễ nhớ:</strong>{" "}
                        <span className="text-slate-300">{item.remember}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StorageMemoryNote() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="yellow"
                title="Ghi chú quan trọng: RAM có phải Storage không?"
                icon={<MemoryStick />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <MemoryStick className="text-yellow-300" /> RAM
                        </h3>
                        <div className="space-y-3 text-sm text-slate-300">
                            <CompareRow label="Tốc độ" value="Rất nhanh" />
                            <CompareRow
                                label="Mất dữ liệu khi tắt máy?"
                                value="Có"
                            />
                            <CompareRow
                                label="Công dụng"
                                value="Chứa dữ liệu đang chạy"
                            />
                        </div>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <HardDrive className="text-emerald-300" /> SSD / HDD
                        </h3>
                        <div className="space-y-3 text-sm text-slate-300">
                            <CompareRow
                                label="Tốc độ"
                                value="SSD nhanh, HDD chậm hơn"
                            />
                            <CompareRow
                                label="Mất dữ liệu khi tắt máy?"
                                value="Không"
                            />
                            <CompareRow
                                label="Công dụng"
                                value="Lưu Windows, phần mềm, game, file"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-yellow-300">Lưu ý:</strong> Thực tế
                    RAM thường được học trong nhóm Memory – bộ nhớ. Ở bài tổng
                    quan cho người mới, ta có thể xem RAM là dạng lưu trữ tạm
                    thời để dễ hiểu. Về sau khi học phần Bộ nhớ, bạn sẽ phân
                    biệt kỹ RAM, ROM, bộ nhớ ảo và phân cấp bộ nhớ.
                </div>
            </div>
        </section>
    );
}

function SpecsByGroup() {
    const specs = [
        {
            group: "Input",
            spec: "DPI chuột",
            meaning:
                "DPI cao làm con trỏ nhạy hơn; quan trọng với gaming/design.",
        },
        {
            group: "Input",
            spec: "Switch bàn phím",
            meaning: "Ảnh hưởng cảm giác gõ: nhẹ, nặng, ồn, êm.",
        },
        {
            group: "Input",
            spec: "Độ phân giải webcam",
            meaning: "720p, 1080p, 4K ảnh hưởng độ nét khi học/họp online.",
        },
        {
            group: "Processing",
            spec: "Cores / Threads",
            meaning:
                "Nhiều nhân/luồng thường tốt cho đa nhiệm, render, lập trình.",
        },
        {
            group: "Processing",
            spec: "GHz",
            meaning:
                "Ảnh hưởng tốc độ xử lý mỗi nhân, nhưng không nên nhìn GHz đơn lẻ.",
        },
        {
            group: "Processing",
            spec: "VRAM GPU",
            meaning: "Quan trọng khi chơi game, dựng hình, AI, render.",
        },
        {
            group: "Storage",
            spec: "GB / TB",
            meaning: "Cho biết lưu được bao nhiêu dữ liệu.",
        },
        {
            group: "Storage",
            spec: "MB/s",
            meaning: "Ảnh hưởng tốc độ mở máy, mở app, copy file.",
        },
        {
            group: "Output",
            spec: "Độ phân giải",
            meaning: "Full HD, 2K, 4K ảnh hưởng độ sắc nét.",
        },
        {
            group: "Output",
            spec: "Tần số quét Hz",
            meaning:
                "60Hz, 75Hz, 144Hz, 240Hz; càng cao chuyển động càng mượt.",
        },
    ];

    const [filter, setFilter] = useState("All");
    const groups = ["All", "Input", "Processing", "Storage", "Output"];
    const filtered =
        filter === "All" ? specs : specs.filter((s) => s.group === filter);

    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="pink"
                title="Thông số kỹ thuật theo từng nhóm"
                icon={<Settings />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                    {groups.map((g) => (
                        <button
                            key={g}
                            onClick={() => setFilter(g)}
                            className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${filter === g ? "bg-pink-500 border-pink-500 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            {g === "All" ? "Tất cả" : g}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                    {filtered.map((s) => (
                        <div
                            key={`${s.group}-${s.spec}`}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-5"
                        >
                            <div className="flex items-center justify-between gap-3 mb-2">
                                <h4 className="font-bold text-white">
                                    {s.spec}
                                </h4>
                                <span
                                    className={`text-xs px-2 py-1 rounded-full border ${groupPill(s.group)}`}
                                >
                                    {s.group}
                                </span>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {s.meaning}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 bg-pink-500/10 border border-pink-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-pink-300">Ví dụ:</strong> Màn hình
                    144Hz mượt hơn 60Hz, đặc biệt khi chơi game FPS. Nhưng nếu
                    GPU không tạo được nhiều FPS, màn hình 144Hz cũng không phát
                    huy hết.
                </div>
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            group: "Input",
            icon: <Keyboard />,
            title: "Bàn phím Logitech K120",
            specs: [
                "Kết nối USB",
                "Phù hợp văn phòng/học tập",
                "Đưa ký tự và lệnh vào máy",
            ],
            use: "Phù hợp học sinh, sinh viên học online, nhân viên văn phòng và người dùng phổ thông không cần bàn phím cơ.",
        },
        {
            group: "Processing",
            icon: <Cpu />,
            title: "CPU Intel Core i5-12400F",
            specs: [
                "CPU xử lý lệnh chính",
                "Phù hợp học tập, văn phòng, eSports",
                "Render nặng cần thêm GPU/RAM tốt",
            ],
            use: "Đây là ví dụ điển hình của nhóm Processing vì CPU chịu trách nhiệm xử lý lệnh và điều phối tác vụ trong máy tính.",
        },
        {
            group: "Storage",
            icon: <HardDrive />,
            title: "SSD Kingston NV2 500GB",
            specs: [
                "M.2 NVMe",
                "Lưu Windows, app, game",
                "Nâng từ HDD lên SSD giúp máy phản hồi nhanh hơn",
            ],
            use: "Phù hợp nâng cấp laptop/PC cũ đang dùng HDD hoặc máy cần mở Windows và phần mềm nhanh hơn.",
        },
        {
            group: "Output",
            icon: <Monitor />,
            title: "Màn hình 24 inch Full HD 75Hz",
            specs: [
                "Hiển thị hình ảnh từ máy tính",
                "Full HD dễ dùng",
                "75Hz mượt hơn 60Hz một chút",
            ],
            use: "Phù hợp văn phòng, học online, lập trình cơ bản, xem phim và giải trí nhẹ.",
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="blue"
                title="Ví dụ thực tế: thiết bị này thuộc nhóm nào?"
                icon={<PackageCheck />}
            />
            <div className="grid md:grid-cols-2 gap-4">
                {examples.map((item) => (
                    <div
                        key={item.title}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-blue-500/40 transition-all"
                    >
                        <div className="flex items-start gap-4 mb-5">
                            <div
                                className={`w-12 h-12 rounded-2xl ${groupIconBg(item.group)} flex items-center justify-center shrink-0`}
                            >
                                {React.cloneElement(item.icon, { size: 24 })}
                            </div>
                            <div>
                                <span
                                    className={`text-xs px-2 py-1 rounded-full border ${groupPill(item.group)}`}
                                >
                                    {item.group}
                                </span>
                                <h3 className="text-white font-bold text-lg mt-2">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                        <div className="space-y-2 mb-5">
                            {item.specs.map((s) => (
                                <div
                                    key={s}
                                    className="flex items-center gap-2 text-sm text-slate-300"
                                >
                                    <CheckCircle2
                                        className="text-green-400 shrink-0"
                                        size={16}
                                    />{" "}
                                    {s}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            {item.use}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function CommonMistakes() {
    const mistakes = [
        {
            wrong: "Nhầm micro và loa",
            right: "Micro là Input vì đưa âm thanh vào máy. Loa là Output vì phát âm thanh ra ngoài.",
        },
        {
            wrong: "Nghĩ SSD/HDD làm máy xử lý mạnh hơn",
            right: "SSD/HDD thuộc Storage, chủ yếu ảnh hưởng lưu, mở, copy dữ liệu, khởi động máy và mở phần mềm. Nó không thay thế CPU/GPU.",
        },
        {
            wrong: "Nghĩ GPU là thiết bị Output",
            right: "GPU là thiết bị xử lý đồ họa, thuộc Processing. Màn hình mới là Output. GPU xử lý hình ảnh → màn hình hiển thị hình ảnh.",
        },
    ];

    const tips = [
        "Khi nhìn một thiết bị, hãy hỏi: nó đưa dữ liệu vào, xử lý, lưu trữ hay xuất kết quả ra?",
        "Muốn máy dùng hằng ngày nhanh hơn, kiểm tra Storage trước: còn HDD không, SSD có đủ dung lượng không.",
        "Muốn chơi game/render tốt, kiểm tra Processing, đặc biệt là CPU và GPU.",
        "Thiết bị vừa nhập vừa xuất thì xếp theo chức năng chính hoặc cả hai. Ví dụ tai nghe có micro: tai nghe là Output, micro là Input.",
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
                        <Lightbulb /> Mẹo phân loại nhanh
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

function ClassificationLab() {
    const items = [
        {
            name: "Micro",
            answer: "Input",
            icon: <Mic />,
            reason: "Micro đưa âm thanh vào máy tính.",
        },
        {
            name: "Loa",
            answer: "Output",
            icon: <Speaker />,
            reason: "Loa phát âm thanh từ máy tính ra ngoài.",
        },
        {
            name: "GPU",
            answer: "Processing",
            icon: <Gauge />,
            reason: "GPU xử lý đồ họa, game, render, AI.",
        },
        {
            name: "SSD",
            answer: "Storage",
            icon: <HardDrive />,
            reason: "SSD lưu hệ điều hành, phần mềm và file.",
        },
        {
            name: "Webcam",
            answer: "Input",
            icon: <Camera />,
            reason: "Webcam đưa hình ảnh/video vào máy.",
        },
        {
            name: "Máy in",
            answer: "Output",
            icon: <Printer />,
            reason: "Máy in xuất tài liệu ra giấy.",
        },
    ];

    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [correctCount, setCorrectCount] = useState(0);
    const current = items[index];
    const finished = index >= items.length;
    const choices = ["Input", "Processing", "Storage", "Output"];

    const choose = (choice) => {
        if (selected) return;
        setSelected(choice);
        if (choice === current.answer) setCorrectCount((s) => s + 1);
    };

    const next = () => {
        setSelected(null);
        setIndex((i) => i + 1);
    };

    const reset = () => {
        setIndex(0);
        setSelected(null);
        setCorrectCount(0);
    };

    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="purple"
                title="Phòng lab nhỏ: phân loại thiết bị"
                icon={<Gamepad2 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                {finished ? (
                    <div className="text-center bg-slate-950 border border-slate-800 rounded-3xl p-8">
                        <div className="text-6xl mb-4">
                            {correctCount === items.length ? "🏆" : "👏"}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Hoàn thành lab!
                        </h3>
                        <p className="text-slate-400 mb-6">
                            Bạn phân loại đúng{" "}
                            <strong className="text-purple-300">
                                {correctCount}/{items.length}
                            </strong>{" "}
                            thiết bị.
                        </p>
                        <button
                            onClick={reset}
                            className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl transition-colors"
                        >
                            Làm lại lab
                        </button>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 items-center">
                        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 text-center">
                            <p className="text-purple-300 text-sm font-bold mb-4">
                                Thiết bị {index + 1}/{items.length}
                            </p>
                            <div className="w-24 h-24 rounded-3xl bg-purple-500/10 text-purple-300 flex items-center justify-center mx-auto mb-5 border border-purple-500/20">
                                {React.cloneElement(current.icon, { size: 46 })}
                            </div>
                            <h3 className="text-3xl font-extrabold text-white">
                                {current.name}
                            </h3>
                            <p className="text-slate-500 mt-2">
                                Thiết bị này thuộc nhóm nào?
                            </p>
                        </div>

                        <div className="space-y-3">
                            {choices.map((choice) => {
                                const isCorrect = choice === current.answer;
                                const isSelected = selected === choice;
                                let cls =
                                    "w-full p-4 rounded-2xl border text-left font-bold transition-all ";
                                if (!selected)
                                    cls +=
                                        "bg-slate-950 border-slate-800 text-slate-300 hover:border-purple-500/40";
                                else if (isCorrect)
                                    cls +=
                                        "bg-green-500/10 border-green-500 text-green-300";
                                else if (isSelected)
                                    cls +=
                                        "bg-red-500/10 border-red-500 text-red-300";
                                else
                                    cls +=
                                        "bg-slate-950/50 border-slate-900 text-slate-600";

                                return (
                                    <button
                                        key={choice}
                                        onClick={() => choose(choice)}
                                        disabled={!!selected}
                                        className={cls}
                                    >
                                        {choice}
                                    </button>
                                );
                            })}

                            {selected && (
                                <div className="mt-5 pt-5 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2">
                                    <div
                                        className={`p-4 rounded-2xl text-sm mb-4 ${selected === current.answer ? "bg-green-500/10 text-green-300" : "bg-orange-500/10 text-orange-300"}`}
                                    >
                                        <strong>Giải thích:</strong>{" "}
                                        {current.reason}
                                    </div>
                                    <button
                                        onClick={next}
                                        className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl transition-colors"
                                    >
                                        Thiết bị tiếp theo
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
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
                        <span className="bg-blue-500/20 text-blue-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-blue-300 border border-slate-800 shadow-inner space-y-2">
                            <p>PHÂN LOẠI PHẦN CỨNG</p>
                            <p className="text-slate-300">
                                Input → Processing → Storage → Output
                            </p>
                            <br />
                            <p className="text-slate-500"># Input</p>
                            <p className="text-slate-300">
                                Bàn phím, chuột, micro, webcam
                            </p>
                            <p className="text-slate-500"># Processing</p>
                            <p className="text-slate-300">
                                CPU, GPU, chipset, NPU
                            </p>
                            <p className="text-slate-500"># Storage</p>
                            <p className="text-slate-300">RAM, SSD, HDD, USB</p>
                            <p className="text-slate-500"># Output</p>
                            <p className="text-slate-300">
                                Màn hình, loa, máy in, máy chiếu
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
        question: "Thiết bị nào sau đây thuộc nhóm Input?",
        options: ["Loa", "Bàn phím", "Màn hình", "Máy in"],
        correct: 1,
        explanation:
            "Bàn phím là thiết bị Input vì nó đưa chữ, số và lệnh vào máy tính.",
    },
    {
        question: "CPU thuộc nhóm phần cứng nào?",
        options: ["Input", "Output", "Processing", "Storage"],
        correct: 2,
        explanation:
            "CPU thuộc nhóm Processing vì nó xử lý lệnh chính và điều phối hoạt động của máy tính.",
    },
    {
        question: "SSD có nhiệm vụ chính là gì?",
        options: [
            "Hiển thị hình ảnh",
            "Lưu trữ dữ liệu",
            "Phát âm thanh",
            "Nhập giọng nói",
        ],
        correct: 1,
        explanation:
            "SSD là thiết bị Storage, dùng để lưu hệ điều hành, phần mềm, game và dữ liệu cá nhân.",
    },
    {
        question: "Micro và loa khác nhau thế nào?",
        options: [
            "Micro là Output, loa là Input",
            "Cả hai đều là Storage",
            "Micro là Input, loa là Output",
            "Cả hai đều là CPU",
        ],
        correct: 2,
        explanation:
            "Micro đưa âm thanh vào máy tính nên là Input. Loa phát âm thanh ra ngoài nên là Output.",
    },
    {
        question: "GPU nên được xếp vào nhóm nào trong bài này?",
        options: ["Processing", "Output", "Storage", "Input"],
        correct: 0,
        explanation:
            "GPU xử lý đồ họa, khung hình, 3D, AI và render, nên thuộc nhóm Processing. Màn hình mới là Output.",
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
        } else {
            setCurrentQ("finished");
        }
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
                    <strong className="text-blue-400">
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
                <span className="text-blue-400">
                    Câu hỏi {currentQ + 1}/{questions.length}
                </span>
                <span className="text-slate-500">Điểm: {score}</span>
            </div>

            <h4 className="text-lg font-bold text-white mb-6 leading-snug">
                {q.question}
            </h4>

            <div className="space-y-3 flex-grow">
                {q.options.map((opt, idx) => {
                    let btnClass =
                        "w-full text-left p-4 rounded-xl border text-sm transition-all ";
                    if (!showResult) {
                        btnClass +=
                            "border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300";
                    } else if (idx === q.correct) {
                        btnClass +=
                            "border-green-500 bg-green-500/10 text-green-400";
                    } else if (idx === selected) {
                        btnClass += "border-red-500 bg-red-500/10 text-red-400";
                    } else {
                        btnClass +=
                            "border-slate-900 bg-slate-900/50 text-slate-600 opacity-60";
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => handleSelect(idx)}
                            disabled={showResult}
                            className={btnClass}
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>

            {showResult && (
                <div className="mt-6 pt-6 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2">
                    <div
                        className={`p-4 rounded-xl text-sm mb-4 ${selected === q.correct ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"}`}
                    >
                        <strong>Giải thích:</strong> {q.explanation}
                    </div>
                    <button
                        onClick={handleNext}
                        className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-colors"
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
                Sau khi biết cách phân loại phần cứng, bước tiếp theo là nhìn
                toàn bộ máy tính như một kiến trúc hoàn chỉnh.
            </p>
            <Link
                to="/phan-1-3"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
            >
                Bài tiếp theo: 1.3 — Sơ đồ kiến trúc tổng thể của máy tính{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "blue" }) {
    const colorMap = {
        blue: "bg-blue-500/20 text-blue-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        orange: "bg-orange-500/20 text-orange-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        purple: "bg-purple-500/20 text-purple-300",
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

function FlowPanel({ icon, label, desc, color }) {
    return (
        <div
            className={`rounded-2xl border p-4 text-center ${softBorder(color)}`}
        >
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center mx-auto mb-3`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <h4 className="font-extrabold text-white">{label}</h4>
            <p className="text-xs text-slate-500 mt-1">{desc}</p>
        </div>
    );
}

function CoreStep({ icon, title, desc, color }) {
    return (
        <div
            className={`rounded-2xl p-5 border text-center ${softBorder(color)}`}
        >
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center mx-auto mb-4`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <h4 className="font-bold text-white mb-2">{title}</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
        </div>
    );
}

function FlowArrow() {
    return (
        <div className="hidden md:flex items-center justify-center text-slate-600">
            <ArrowRight size={26} />
        </div>
    );
}

function CompareRow({ label, value }) {
    return (
        <div className="flex items-start justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4">
            <span className="text-slate-500">{label}</span>
            <span className="text-white font-semibold text-right">{value}</span>
        </div>
    );
}

function badgeColor(color) {
    const map = {
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
    };
    return map[color] || map.cyan;
}

function softBorder(color) {
    const map = {
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
    };
    return map[color] || map.cyan;
}

function activeBg(color) {
    const map = {
        cyan: "bg-cyan-500",
        orange: "bg-orange-500",
        emerald: "bg-emerald-500",
        pink: "bg-pink-500",
    };
    return map[color] || map.cyan;
}

function groupPill(group) {
    const map = {
        Input: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
        Processing: "bg-orange-500/10 text-orange-300 border-orange-500/20",
        Storage: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
        Output: "bg-pink-500/10 text-pink-300 border-pink-500/20",
    };
    return map[group] || "bg-slate-500/10 text-slate-300 border-slate-500/20";
}

function groupIconBg(group) {
    const map = {
        Input: "bg-cyan-500/10 text-cyan-300",
        Processing: "bg-orange-500/10 text-orange-300",
        Storage: "bg-emerald-500/10 text-emerald-300",
        Output: "bg-pink-500/10 text-pink-300",
    };
    return map[group] || "bg-slate-500/10 text-slate-300";
}
