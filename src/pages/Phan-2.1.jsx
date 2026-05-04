import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowDown,
    ArrowRight,
    Award,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    CircuitBoard,
    Cpu,
    Database,
    Gamepad2,
    Gauge,
    HardDrive,
    Keyboard,
    Laptop,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    MousePointerClick,
    PackageCheck,
    Puzzle,
    RefreshCcw,
    Search,
    Server,
    Settings,
    Smartphone,
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
                            <Cpu className="text-orange-400" size={24} />
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
                        Bài 2.1
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CpuDefinition />
                <RestaurantAnalogy />
                <FetchDecodeExecuteStore />
                <KeyboardWordFlow />
                <CpuTypes />
                <CpuSpecsExplorer />
                <RealExamples />
                <CpuSelectionLab />
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
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-red-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-orange-300">
                        <BookOpen size={16} /> Phần 2: CPU – Bộ xử lý trung tâm
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        CPU là gì?
                        <span className="block text-orange-400">
                            Chức năng và vai trò
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        CPU là bộ xử lý trung tâm: đọc lệnh, giải mã lệnh, thực
                        thi lệnh và điều phối RAM, SSD, GPU, mainboard và phần
                        mềm để tạo ra kết quả.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<Cpu size={16} />}
                            text="Central Processing Unit"
                        />
                        <Tag
                            icon={<Workflow size={16} />}
                            text="Fetch → Decode → Execute → Store"
                        />
                        <Tag icon={<MemoryStick size={16} />} text="RAM" />
                        <Tag icon={<HardDrive size={16} />} text="SSD" />
                        <Tag icon={<Gauge size={16} />} text="GPU" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<MousePointerClick />}
                            label="User"
                            desc="Ra lệnh"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<Settings />}
                            label="Software"
                            desc="Gửi yêu cầu"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<Cpu />}
                            label="CPU"
                            desc="Xử lý/điều phối"
                            color="orange"
                            highlight
                        />
                        <HeroTile
                            icon={<Monitor />}
                            label="Output"
                            desc="Hiển thị kết quả"
                            color="pink"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">
                            // CPU không làm mọi thứ một mình
                        </p>
                        <p>
                            <span className="text-orange-300">CPU</span> +{" "}
                            <span className="text-emerald-300">RAM</span> +{" "}
                            <span className="text-blue-300">SSD</span> +{" "}
                            <span className="text-purple-300">GPU</span>
                        </p>
                        <p className="text-slate-300">= hệ thống phối hợp</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu CPU là gì và vì sao CPU quan trọng.",
        "Nắm vai trò đọc lệnh, xử lý lệnh và điều phối hệ thống.",
        "Hiểu chu trình Fetch → Decode → Execute → Store.",
        "Phân biệt CPU desktop, laptop, server, mobile/SoC.",
        "Biết đọc thông số cores, threads, GHz, cache, TDP, socket, iGPU.",
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
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-orange-500/50 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-300 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
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

function CpuDefinition() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: CPU là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6 items-start">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">CPU</strong> là viết
                            tắt của{" "}
                            <strong className="text-cyan-300">
                                Central Processing Unit
                            </strong>
                            , nghĩa là{" "}
                            <strong className="text-white">
                                bộ xử lý trung tâm
                            </strong>
                            .
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-cyan-300">
                                Hiểu đơn giản:
                            </strong>{" "}
                            CPU là linh kiện chịu trách nhiệm đọc lệnh, xử lý
                            lệnh và đưa ra kết quả xử lý cho máy tính.
                        </div>
                        <p>
                            CPU tham gia khi bạn mở Chrome, gõ Word, tính Excel,
                            giải nén file, cài phần mềm, chơi game, lập trình
                            hoặc render video. Nhưng CPU không làm mọi thứ một
                            mình; nó phối hợp với RAM, SSD, GPU, mainboard và
                            phần mềm.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <Cpu className="text-cyan-300" /> Luồng tổng quát
                        </h3>
                        <div className="space-y-3 font-mono text-sm">
                            {[
                                "Người dùng ra lệnh",
                                "Phần mềm gửi yêu cầu",
                                "CPU xử lý / điều phối",
                                "RAM, SSD, GPU phối hợp",
                                "Kết quả hiển thị ra màn hình",
                            ].map((item, idx) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 text-slate-300"
                                >
                                    <span className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-300 flex items-center justify-center text-xs font-bold">
                                        {idx + 1}
                                    </span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RestaurantAnalogy() {
    const rows = [
        {
            real: "Khách gọi món",
            computer: "Người dùng ra lệnh",
            icon: <MousePointerClick />,
        },
        {
            real: "Nhân viên ghi order",
            computer: "Phần mềm gửi yêu cầu",
            icon: <Settings />,
        },
        {
            real: "Quản lý điều phối",
            computer: "CPU xử lý và phân công",
            icon: <Cpu />,
        },
        {
            real: "Bếp, kho, phục vụ phối hợp",
            computer: "RAM, SSD, GPU phối hợp",
            icon: <CircuitBoard />,
        },
        {
            real: "Món ăn được phục vụ",
            computer: "Kết quả xuất ra màn hình/loa",
            icon: <Monitor />,
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: CPU giống quản lý nhà hàng"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 md:p-8">
                <p className="text-slate-300 mb-8 leading-relaxed">
                    CPU không phải người duy nhất làm việc, nhưng là người điều
                    phối quan trọng. Khi có yêu cầu, CPU phân công RAM, SSD, GPU
                    và các thiết bị khác cùng tham gia.
                </p>
                <div className="grid md:grid-cols-1 gap-3">
                    {rows.map((r) => (
                        <div
                            key={r.real}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex items-center justify-between gap-4"
                        >
                            <div className="flex items-center gap-3 text-slate-300">
                                <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-300 flex items-center justify-center shrink-0">
                                    {React.cloneElement(r.icon, { size: 22 })}
                                </div>
                                <span className="font-semibold">{r.real}</span>
                            </div>
                            <ArrowRight
                                className="text-slate-600 shrink-0"
                                size={18}
                            />
                            <span className="font-bold text-orange-300 text-right">
                                {r.computer}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FetchDecodeExecuteStore() {
    const steps = [
        {
            key: "fetch",
            title: "Fetch",
            vi: "Lấy lệnh",
            desc: "CPU lấy lệnh từ bộ nhớ, thường là RAM, để chuẩn bị xử lý.",
            icon: <MemoryStick />,
            color: "cyan",
        },
        {
            key: "decode",
            title: "Decode",
            vi: "Giải mã lệnh",
            desc: "CPU giải mã để hiểu lệnh cần làm gì: tính toán, so sánh, di chuyển dữ liệu hay gọi thiết bị khác.",
            icon: <Puzzle />,
            color: "purple",
        },
        {
            key: "execute",
            title: "Execute",
            vi: "Thực thi",
            desc: "CPU thực hiện phép tính hoặc thao tác logic theo lệnh đã giải mã.",
            icon: <Zap />,
            color: "orange",
        },
        {
            key: "store",
            title: "Store",
            vi: "Ghi kết quả",
            desc: "Kết quả được ghi lại vào RAM, cache hoặc gửi đến thiết bị khác như GPU, SSD, màn hình.",
            icon: <Database />,
            color: "emerald",
        },
    ];

    const [active, setActive] = useState(0);
    const item = steps[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="CPU xử lý lệnh như thế nào?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-stretch mb-8">
                    {steps.map((s, idx) => (
                        <React.Fragment key={s.key}>
                            <button
                                onClick={() => setActive(idx)}
                                className={`rounded-2xl p-5 border text-center transition-all ${active === idx ? `${softBorder(s.color)} text-white scale-[1.02]` : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`}
                            >
                                <div
                                    className={`w-12 h-12 rounded-2xl ${badgeColor(s.color)} flex items-center justify-center mx-auto mb-3`}
                                >
                                    {React.cloneElement(s.icon, { size: 24 })}
                                </div>
                                <h3 className="font-extrabold text-white">
                                    {s.title}
                                </h3>
                                <p className="text-xs mt-1 opacity-75">
                                    {s.vi}
                                </p>
                            </button>
                            {idx < steps.length - 1 && (
                                <div className="hidden md:flex items-center justify-center text-slate-600">
                                    <ArrowRight size={24} />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 grid md:grid-cols-[0.75fr_1.25fr] gap-6 items-start">
                    <div>
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <p className="text-sm text-slate-500 font-bold mb-1">
                            Bước {active + 1}/4
                        </p>
                        <h3 className="text-3xl font-extrabold text-white mb-1">
                            {item.title}
                        </h3>
                        <p className={`${textColor(item.color)} font-semibold`}>
                            {item.vi}
                        </p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-slate-300 leading-relaxed">
                            {item.desc}
                        </p>
                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-sm text-slate-300">
                            <strong className="text-purple-300">
                                Chu trình đầy đủ:
                            </strong>{" "}
                            Lấy lệnh từ RAM → Giải mã lệnh → Thực hiện phép
                            tính/xử lý → Ghi kết quả lại vào RAM hoặc gửi đến
                            thiết bị khác.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function KeyboardWordFlow() {
    const steps = [
        {
            title: "Bạn bấm phím A",
            desc: "Bàn phím gửi tín hiệu đầu vào đến hệ thống.",
            icon: <Keyboard />,
            block: "Input",
        },
        {
            title: "Hệ điều hành nhận tín hiệu",
            desc: "Windows/macOS/Linux hiểu có một phím vừa được bấm.",
            icon: <Settings />,
            block: "Software",
        },
        {
            title: "CPU xử lý lệnh nhập ký tự",
            desc: "CPU xử lý sự kiện bàn phím và điều phối cho ứng dụng Word.",
            icon: <Cpu />,
            block: "Processing",
        },
        {
            title: "Word cập nhật nội dung",
            desc: "Ứng dụng cập nhật văn bản đang soạn thảo trong RAM.",
            icon: <MemoryStick />,
            block: "Memory",
        },
        {
            title: "GPU hỗ trợ hiển thị chữ",
            desc: "GPU dựng giao diện và chữ A trên cửa sổ ứng dụng.",
            icon: <Gauge />,
            block: "Graphics",
        },
        {
            title: "Màn hình hiển thị chữ A",
            desc: "Bạn nhìn thấy kết quả cuối cùng trên màn hình.",
            icon: <Monitor />,
            block: "Output",
        },
    ];

    const [step, setStep] = useState(0);
    const current = steps[step];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Mô phỏng: bấm phím A trong Word"
                icon={<Keyboard />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[350px] flex flex-col justify-between">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-300 border border-blue-500/20 flex items-center justify-center mb-5">
                                {React.cloneElement(current.icon, { size: 32 })}
                            </div>
                            <p className="text-blue-300 text-sm font-bold mb-2">
                                Bước {step + 1}/{steps.length} • {current.block}
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
                                className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold transition-colors inline-flex items-center gap-2"
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
                                        ? "bg-blue-500/10 border-blue-500/40 text-white"
                                        : index < step
                                          ? "bg-green-500/5 border-green-500/20 text-slate-300"
                                          : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700"
                                }`}
                            >
                                <div
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${step === index ? "bg-blue-500 text-white" : index < step ? "bg-green-500/20 text-green-400" : "bg-slate-900 text-slate-500"}`}
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
                                        {item.block}
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

function CpuTypes() {
    const groups = {
        device: {
            title: "Theo thiết bị sử dụng",
            icon: <Laptop />,
            items: [
                {
                    name: "CPU Desktop",
                    desc: "PC để bàn; hiệu năng cao, dễ tản nhiệt, dễ nâng cấp; phù hợp gaming, làm việc, học tập, build PC.",
                },
                {
                    name: "CPU Laptop",
                    desc: "Tiết kiệm điện, nhỏ gọn; khó nâng cấp và bị giới hạn nhiệt; phù hợp học tập, văn phòng, di chuyển.",
                },
                {
                    name: "CPU Server",
                    desc: "Nhiều nhân, chạy bền, hỗ trợ RAM lớn/ECC; dùng cho datacenter, website, cloud, doanh nghiệp.",
                },
                {
                    name: "CPU Mobile / SoC",
                    desc: "Điện thoại/tablet; rất tiết kiệm điện, tích hợp nhiều thành phần; khó nâng cấp.",
                },
            ],
        },
        brand: {
            title: "Theo hãng / dòng phổ biến",
            icon: <PackageCheck />,
            items: [
                {
                    name: "Intel",
                    desc: "Core i3/i5/i7/i9, Core Ultra; phổ biến trên PC/laptop, nhiều lựa chọn, hiệu năng đơn nhân tốt.",
                },
                {
                    name: "AMD",
                    desc: "Ryzen 3/5/7/9, Threadripper, EPYC; nhiều nhân/luồng tốt, hiệu năng/giá cạnh tranh.",
                },
                {
                    name: "Apple",
                    desc: "Apple M-series; tối ưu cho macOS, hiệu năng/watt tốt, tiết kiệm điện.",
                },
                {
                    name: "Qualcomm / MediaTek",
                    desc: "Snapdragon, Dimensity; phổ biến trên điện thoại, tablet và laptop ARM.",
                },
            ],
        },
        graphics: {
            title: "Theo GPU tích hợp",
            icon: <Gauge />,
            items: [
                {
                    name: "Có GPU tích hợp",
                    desc: "Không cần card rời vẫn xuất hình; phù hợp văn phòng, học tập, máy nhỏ gọn. Ví dụ: Intel Core i5-12400, Ryzen 5 5600G.",
                },
                {
                    name: "Không có GPU tích hợp",
                    desc: "Cần GPU rời để xuất hình; thường dùng cho PC có VGA rời. Ví dụ: Intel Core i5-12400F, Ryzen 5 5600.",
                },
            ],
        },
        isa: {
            title: "Theo kiến trúc tập lệnh",
            icon: <CircuitBoard />,
            items: [
                {
                    name: "x86/x64",
                    desc: "PC Windows, laptop, server truyền thống; tương thích phần mềm desktop rất rộng.",
                },
                {
                    name: "ARM",
                    desc: "Điện thoại, tablet, Mac Apple Silicon, một số laptop; tiết kiệm điện, hiệu năng/watt tốt.",
                },
                {
                    name: "RISC-V",
                    desc: "Thiết bị nhúng, nghiên cứu, một số sản phẩm mới; kiến trúc mở, đang phát triển.",
                },
            ],
        },
    };

    const [active, setActive] = useState("device");
    const item = groups[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Các loại CPU / phân loại cơ bản"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-3 mb-6">
                    {Object.entries(groups).map(([key, g]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 text-left border transition-all ${active === key ? "bg-emerald-500/10 border-emerald-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(g.icon, { size: 20 })}{" "}
                                {g.title}
                            </div>
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {item.items.map((i) => (
                        <div
                            key={i.name}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-5"
                        >
                            <h3 className="text-white font-bold mb-2">
                                {i.name}
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {i.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-emerald-300">Lưu ý:</strong> Với
                    Intel, hậu tố <strong>F</strong> như i5-12400F thường nghĩa
                    là không có đồ họa tích hợp. Khi build PC, bạn cần kiểm tra
                    có cần card đồ họa rời không.
                </div>
            </div>
        </section>
    );
}

function CpuSpecsExplorer() {
    const specs = {
        cores: {
            icon: <Cpu />,
            title: "Cores – Số nhân",
            meaning: "Số lõi xử lý vật lý trong CPU.",
            impact: "Nhiều nhân giúp đa nhiệm, render, chạy máy ảo, build code tốt hơn.",
        },
        threads: {
            icon: <Workflow />,
            title: "Threads – Số luồng",
            meaning: "Số luồng xử lý mà CPU có thể xử lý đồng thời.",
            impact: "Hữu ích khi chạy nhiều tác vụ hoặc phần mềm tối ưu đa luồng.",
        },
        clock: {
            icon: <Gauge />,
            title: "Clock Speed – GHz",
            meaning: "Tốc độ hoạt động của CPU, thường tính bằng GHz.",
            impact: "Ảnh hưởng hiệu năng từng nhân, quan trọng với tác vụ nhẹ và một số game.",
        },
        cache: {
            icon: <Database />,
            title: "Cache – Bộ nhớ đệm",
            meaning: "Bộ nhớ rất nhanh nằm trong CPU.",
            impact: "Giúp CPU lấy dữ liệu nhanh hơn, giảm thời gian chờ RAM.",
        },
        tdp: {
            icon: <Zap />,
            title: "TDP / Power",
            meaning: "Mức điện/nhiệt thiết kế của CPU.",
            impact: "Ảnh hưởng tản nhiệt, nguồn điện, nhiệt độ và khả năng giữ xung.",
        },
        socket: {
            icon: <CircuitBoard />,
            title: "Socket",
            meaning: "Kiểu chân/khe cắm CPU.",
            impact: "Quyết định CPU có lắp được vào mainboard hay không.",
        },
        gen: {
            icon: <Sparkles />,
            title: "Generation – Thế hệ",
            meaning: "Đời CPU và nền tảng công nghệ.",
            impact: "CPU đời mới thường cải thiện hiệu năng, điện năng và tính năng.",
        },
        igpu: {
            icon: <Monitor />,
            title: "Integrated Graphics",
            meaning: "GPU tích hợp trong CPU.",
            impact: "Cho biết CPU có tự xuất hình không cần card rời hay không.",
        },
    };

    const [active, setActive] = useState("cores");
    const item = specs[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số kỹ thuật CPU quan trọng"
                icon={<Settings />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(specs).map(([key, s]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center transition-all ${
                                active === key
                                    ? "bg-yellow-500 text-slate-950 shadow-lg shadow-yellow-500/10"
                                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                            }`}
                        >
                            {React.cloneElement(s.icon, { size: 20 })}
                            <span className="font-bold text-xs">
                                {s.title.split("–")[0].trim()}
                            </span>
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
                        <p className="text-sm text-yellow-300 font-semibold">
                            Thông số cần đọc khi chọn CPU
                        </p>
                    </div>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">Ý nghĩa:</strong>{" "}
                            {item.meaning}
                        </p>
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-yellow-300">
                                Tác động thực tế:
                            </strong>{" "}
                            {item.impact}
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-sm text-slate-400">
                            <strong className="text-white">Mẹo:</strong> Đừng
                            chỉ nhìn tên i5/i7 hoặc Ryzen 5/Ryzen 7. Hãy xem đời
                            CPU, nhân/luồng, xung, cache, điện năng, socket và
                            GPU tích hợp.
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
            subtitle: "CPU desktop phổ thông mạnh cho PC",
            points: [
                "6 nhân / 12 luồng",
                "Turbo tối đa 4.40GHz",
                "18MB Intel Smart Cache",
                "Công suất cơ bản 65W",
                "Bản F không có GPU tích hợp",
            ],
            fit: "Học tập, văn phòng nặng, lập trình, Photoshop cơ bản, gaming Full HD khi đi kèm GPU rời, stream nhẹ.",
            color: "orange",
        },
        {
            icon: <Cpu />,
            title: "AMD Ryzen 5 5600",
            subtitle: "CPU AM4 hiệu năng/giá tốt",
            points: [
                "Dòng Ryzen 5000",
                "Nền tảng AM4",
                "Hỗ trợ PCIe 4.0",
                "Bản 5600 thường cần GPU rời",
                "Ryzen 5 5600G có GPU tích hợp",
            ],
            fit: "PC gaming tiết kiệm, nâng cấp nền tảng AM4 cũ, học tập, văn phòng, lập trình, đi kèm GTX/RTX/RX tầm trung.",
            color: "emerald",
        },
        {
            icon: <Laptop />,
            title: "CPU laptop Intel Core Ultra / Ryzen mobile",
            subtitle: "CPU tối ưu cho di động",
            points: [
                "Tiết kiệm điện hơn desktop",
                "Có thể tích hợp GPU và NPU",
                "Khó nâng cấp",
                "Hiệu năng phụ thuộc tản nhiệt từng mẫu laptop",
                "Cùng tên CPU nhưng laptop khác nhau có thể chạy khác nhau",
            ],
            fit: "Học online, văn phòng, lập trình, thiết kế, dựng video tùy dòng CPU, RAM, GPU rời và hệ thống tản nhiệt.",
            color: "blue",
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="pink"
                title="Ví dụ CPU thực tế"
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
                            <strong className="text-pink-300">Phù hợp:</strong>{" "}
                            {e.fit}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function CpuSelectionLab() {
    const scenarios = {
        office: {
            icon: <Laptop />,
            title: "Học tập / văn phòng",
            need: "Chrome, Word, Excel, Zoom, học online, đa nhiệm nhẹ.",
            advice: [
                "CPU 4 nhân trở lên",
                "RAM 8GB–16GB",
                "SSD là ưu tiên lớn",
                "Không cần CPU quá đắt",
                "CPU có GPU tích hợp giúp tiết kiệm nếu không chơi game",
            ],
            conclusion:
                "CPU vừa đủ + RAM đủ + SSD nhanh thường cho trải nghiệm tốt hơn chỉ mua CPU thật mạnh.",
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Gaming Full HD",
            need: "Game eSports, game AAA Full HD, màn hình 144Hz.",
            advice: [
                "Core i5 / Ryzen 5 đời không quá cũ thường đã đủ",
                "Dành ngân sách hợp lý cho GPU",
                "CPU không có iGPU cần card rời",
                "Kiểm tra tản nhiệt và nguồn",
                "Đừng chỉ nhìn GHz",
            ],
            conclusion:
                "Gaming cần CPU đủ mạnh nhưng GPU thường quyết định lớn đến FPS, đặc biệt ở game đồ họa nặng.",
        },
        creator: {
            icon: <Monitor />,
            title: "Dựng video / lập trình nặng / máy ảo",
            need: "Render, build code lớn, nhiều máy ảo, Photoshop/Premiere nặng.",
            advice: [
                "Ưu tiên nhiều nhân/luồng",
                "RAM 32GB nếu ngân sách cho phép",
                "SSD NVMe dung lượng đủ",
                "Tản nhiệt tốt để tránh tụt xung",
                "GPU mạnh nếu render/AI/3D",
            ],
            conclusion:
                "Tác vụ nặng cần nhìn toàn hệ thống: CPU nhiều nhân, RAM, SSD, GPU, nguồn và tản nhiệt.",
        },
    };

    const [active, setActive] = useState("office");
    const item = scenarios[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Lab: chọn CPU theo nhu cầu"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {Object.entries(scenarios).map(([key, s]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 text-left border transition-all ${active === key ? "bg-blue-500/10 border-blue-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(s.icon, { size: 20 })}{" "}
                                {s.title}
                            </div>
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-300 border border-blue-500/20 flex items-center justify-center mb-4">
                            {React.cloneElement(item.icon, { size: 28 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {item.need}
                        </p>
                    </div>
                    <div className="space-y-3">
                        {item.advice.map((a) => (
                            <div
                                key={a}
                                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-start gap-3 text-sm text-slate-300"
                            >
                                <CheckCircle2
                                    className="text-blue-300 shrink-0 mt-0.5"
                                    size={18}
                                />
                                <span>{a}</span>
                            </div>
                        ))}
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm text-slate-300">
                            <strong className="text-blue-300">Kết luận:</strong>{" "}
                            {item.conclusion}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CommonMistakes() {
    const mistakes = [
        {
            wrong: "Cứ i7 là mạnh hơn i5",
            right: "Phải xem đời CPU, số nhân, xung nhịp, công suất và dòng sản phẩm. Core i5 đời mới hiệu năng cao có thể mạnh hơn Core i7 đời cũ tiết kiệm điện.",
        },
        {
            wrong: "CPU mạnh là máy chắc chắn mạnh",
            right: "Máy cần cấu hình cân bằng: CPU, RAM, SSD, GPU, tản nhiệt và nguồn. CPU không thay thế được mọi linh kiện khác.",
        },
        {
            wrong: "CPU nhiều GHz hơn thì chắc chắn mạnh hơn",
            right: "GHz chỉ là một phần. Cần xem kiến trúc, nhân/luồng, cache, điện năng, thế hệ, tản nhiệt và phần mềm có tận dụng đa nhân không.",
        },
        {
            wrong: "CPU nào cũng tự xuất hình được",
            right: "Nhiều CPU không có GPU tích hợp. Intel hậu tố F hoặc AMD không có hậu tố G thường cần card đồ họa rời để xuất hình.",
        },
    ];

    const tips = [
        "Học tập/văn phòng: CPU 4 nhân trở lên, RAM 8GB–16GB và SSD.",
        "Gaming Full HD: Core i5/Ryzen 5 đời không quá cũ thường đủ; dành ngân sách cho GPU.",
        "Dựng video, lập trình nặng, máy ảo: ưu tiên nhiều nhân/luồng và RAM 32GB nếu có thể.",
        "Luôn kiểm tra socket CPU trước khi mua mainboard: i5-12400F dùng LGA1700, Ryzen 5 5600 dùng AM4.",
        "Đừng quên tản nhiệt. CPU mạnh nhưng tản yếu sẽ nóng và giảm xung, gọi là thermal throttling.",
        "Khi mua Intel chữ F hoặc AMD không có chữ G, kiểm tra có cần card đồ họa rời không.",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="red"
                title="Sai lầm phổ biến & mẹo chọn CPU"
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
                        <Lightbulb /> Mẹo thực chiến
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-orange-300 border border-slate-800 shadow-inner space-y-2">
                            <p>CPU = CENTRAL PROCESSING UNIT</p>
                            <p className="text-slate-300">
                                = bộ xử lý trung tâm
                            </p>
                            <br />
                            <p className="text-slate-500"># Vai trò</p>
                            <p className="text-slate-300">
                                Đọc lệnh, xử lý lệnh, điều phối hệ thống
                            </p>
                            <br />
                            <p className="text-slate-500"># Chu trình</p>
                            <p className="text-slate-300">
                                Fetch → Decode → Execute → Store
                            </p>
                            <br />
                            <p className="text-slate-500"># Khi chọn CPU</p>
                            <p className="text-slate-300">
                                Xem cores, threads, GHz, cache, TDP, socket,
                                generation, iGPU.
                            </p>
                            <br />
                            <p className="text-slate-500"># Ghi nhớ</p>
                            <p className="text-slate-300">
                                CPU mạnh cần RAM, SSD, GPU, nguồn và tản nhiệt
                                phù hợp.
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
        question: "CPU là viết tắt của cụm từ nào?",
        options: [
            "Central Processing Unit",
            "Computer Power Unit",
            "Control Program Utility",
            "Core Performance Upgrade",
        ],
        correct: 0,
        explanation:
            "CPU là Central Processing Unit, nghĩa là bộ xử lý trung tâm.",
    },
    {
        question: "Chu trình xử lý lệnh cơ bản của CPU là gì?",
        options: [
            "Print → Scan → Save → Delete",
            "Fetch → Decode → Execute → Store",
            "Open → Close → Copy → Paste",
            "Input → Speaker → Monitor → Mouse",
        ],
        correct: 1,
        explanation:
            "CPU thường được mô tả bằng chu trình Fetch → Decode → Execute → Store: lấy lệnh, giải mã, thực thi và ghi kết quả.",
    },
    {
        question: "Thông số Cores của CPU nghĩa là gì?",
        options: [
            "Dung lượng ổ cứng",
            "Số lõi xử lý vật lý trong CPU",
            "Độ phân giải màn hình",
            "Công suất loa",
        ],
        correct: 1,
        explanation:
            "Cores là số lõi xử lý vật lý trong CPU, ảnh hưởng khả năng xử lý đa nhiệm và tác vụ nặng.",
    },
    {
        question: "Intel Core i5-12400F có điểm cần lưu ý nào khi build PC?",
        options: [
            "Không cần mainboard",
            "Không cần RAM",
            "Thường không có GPU tích hợp, cần GPU rời để xuất hình",
            "Là ổ cứng SSD",
        ],
        correct: 2,
        explanation:
            "Hậu tố F của Intel thường cho biết CPU không có đồ họa tích hợp. Build PC với CPU này thường cần card đồ họa rời.",
    },
    {
        question: "Vì sao không nên chỉ nhìn GHz khi so CPU?",
        options: [
            "GHz không tồn tại",
            "Cần xem thêm kiến trúc, nhân/luồng, cache, thế hệ, điện năng và tản nhiệt",
            "GHz là dung lượng RAM",
            "GHz chỉ dùng cho màn hình",
        ],
        correct: 1,
        explanation:
            "GHz chỉ là một phần. CPU đời mới, kiến trúc tốt, nhiều cache và tản nhiệt tốt có thể mạnh hơn dù xung thấp hơn.",
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
    }

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
                Bạn đã hiểu CPU là bộ xử lý trung tâm. Tiếp theo là học kiến
                trúc CPU để hiểu CPU lấy lệnh và dữ liệu từ bộ nhớ theo mô hình
                nào.
            </p>
            <Link
                to="/phan-2-2"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20"
            >
                Bài tiếp theo: 2.2 — Kiến trúc CPU: Von Neumann, Harvard{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "orange" }) {
    const colorMap = {
        orange: "bg-orange-500/20 text-orange-300",
        amber: "bg-amber-500/20 text-amber-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        purple: "bg-purple-500/20 text-purple-300",
        blue: "bg-blue-500/20 text-blue-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
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

function HeroTile({ icon, label, desc, color, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-orange-500/10 border-orange-400/50" : softBorder(color)}`}
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

function badgeColor(color) {
    const map = {
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.orange;
}

function softBorder(color) {
    const map = {
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.orange;
}

function textColor(color) {
    const map = {
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-orange-300";
}
