import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowDown,
    ArrowRight,
    Award,
    BatteryCharging,
    BookOpen,
    Brain,
    Cable,
    CheckCircle2,
    ChevronRight,
    Cpu,
    Database,
    Fan,
    Gamepad2,
    Gauge,
    HardDrive,
    Keyboard,
    Laptop,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    MousePointer2,
    Network,
    PackageCheck,
    PlugZap,
    Power,
    Puzzle,
    RefreshCcw,
    Save,
    Search,
    Settings,
    Speaker,
    TabletSmartphone,
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
                            <Layers3 className="text-violet-400" size={24} />
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
                    <div className="text-sm font-semibold text-violet-300 bg-violet-400/10 px-3 py-1 rounded-full border border-violet-400/20">
                        Bài 1.3
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <ArchitectureConcept />
                <ArchitectureDiagram />
                <DataPathSimulator />
                <GameFlowSimulator />
                <ArchitectureBlocks />
                <SpecsExplorer />
                <RealBuildExamples />
                <BottleneckLab />
                <MistakesAndTips />
                <SummaryAndQuiz />
                <NextLesson />
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
                        <BookOpen size={16} /> Phần 1: Tổng quan về phần cứng
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Sơ đồ kiến trúc tổng thể
                        <span className="block text-violet-400">
                            của một máy tính
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Học cách các linh kiện kết nối và phối hợp: thiết bị
                        nhập đi qua mainboard, CPU xử lý với RAM, SSD cung cấp
                        dữ liệu, GPU dựng hình, màn hình và loa xuất kết quả.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Puzzle size={16} />} text="Mainboard" />
                        <Tag icon={<Cpu size={16} />} text="CPU" />
                        <Tag icon={<MemoryStick size={16} />} text="RAM" />
                        <Tag icon={<HardDrive size={16} />} text="SSD/HDD" />
                        <Tag icon={<Gauge size={16} />} text="GPU" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-3 gap-3">
                        <MiniNode
                            icon={<Keyboard />}
                            label="Input"
                            color="cyan"
                        />
                        <MiniNode
                            icon={<Puzzle />}
                            label="Mainboard"
                            color="violet"
                            highlight
                        />
                        <MiniNode
                            icon={<Monitor />}
                            label="Output"
                            color="pink"
                        />
                        <MiniNode
                            icon={<Cpu />}
                            label="CPU"
                            color="orange"
                            active
                        />
                        <MiniNode
                            icon={<MemoryStick />}
                            label="RAM"
                            color="emerald"
                            active
                        />
                        <MiniNode
                            icon={<HardDrive />}
                            label="SSD/HDD"
                            color="blue"
                            active
                        />
                        <MiniNode icon={<Gauge />} label="GPU" color="yellow" />
                        <MiniNode icon={<Power />} label="PSU" color="red" />
                        <MiniNode
                            icon={<Cable />}
                            label="Bus/Ports"
                            color="slate"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Ý tưởng chính</p>
                        <p className="text-violet-300">
                            Kiến trúc = bản đồ kết nối
                        </p>
                        <p className="text-slate-300">
                            linh kiện + luồng dữ liệu + nguồn điện
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu kiến trúc tổng thể máy tính là gì.",
        "Nhìn được vai trò trung tâm kết nối của mainboard.",
        "Theo dõi luồng dữ liệu khi mở file Word hoặc chơi game.",
        "Nắm các khối: Input, Processing, Memory, Storage, Output, Power, Connection.",
        "Biết cách phát hiện bottleneck khi máy chậm hoặc không ổn định.",
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
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-violet-500/50 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-300 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
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

function ArchitectureConcept() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: kiến trúc máy tính là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6 items-start">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">
                                Kiến trúc tổng thể của máy tính
                            </strong>{" "}
                            là cách các linh kiện chính được sắp xếp, kết nối và
                            phối hợp để nhận lệnh, xử lý dữ liệu, lưu trữ dữ
                            liệu và xuất kết quả.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-cyan-300">
                                Ví dụ đời thường:
                            </strong>{" "}
                            Kiến trúc máy tính giống bản đồ giao thông của một
                            thành phố. Mỗi linh kiện là một khu vực; mainboard,
                            bus và cổng kết nối là đường nối các khu vực đó.
                        </div>
                        <p>
                            Nếu chỉ biết tên linh kiện mà không biết chúng nối
                            với nhau ra sao, bạn sẽ khó hiểu vì sao máy nhanh,
                            chậm, nghẽn hoặc không tương thích khi nâng cấp.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <Network className="text-cyan-300" /> Thành phần
                            chính
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {[
                                ["Người dùng", "Ra lệnh"],
                                ["Input", "Bàn phím, chuột"],
                                ["Mainboard", "Kết nối toàn bộ"],
                                ["CPU", "Xử lý chính"],
                                ["RAM", "Bộ nhớ tạm"],
                                ["SSD/HDD", "Lưu lâu dài"],
                                ["GPU", "Xử lý đồ họa"],
                                ["Output", "Màn hình, loa"],
                                ["PSU", "Cấp điện"],
                            ].map(([name, desc]) => (
                                <div
                                    key={name}
                                    className="bg-slate-900 border border-slate-800 rounded-2xl p-4"
                                >
                                    <p className="font-bold text-white text-sm">
                                        {name}
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">
                                        {desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ArchitectureDiagram() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="blue"
                title="Sơ đồ trực quan: dữ liệu đi qua đâu?"
                icon={<Workflow />}
            />
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 overflow-hidden">
                <div className="flex flex-col items-center gap-4">
                    <DiagramNode
                        icon={<MousePointer2 />}
                        label="Người dùng / Input"
                        desc="Bàn phím, chuột, micro, webcam"
                        color="cyan"
                    />
                    <ArrowDown className="text-slate-600" />
                    <DiagramNode
                        icon={<Puzzle />}
                        label="Mainboard"
                        desc="Nền tảng vật lý kết nối linh kiện"
                        color="violet"
                        large
                    />

                    <div className="w-full max-w-4xl relative pt-8">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-slate-700" />
                        <div className="absolute top-8 left-[10%] right-[10%] h-px bg-slate-700" />
                        <div className="grid md:grid-cols-3 gap-4">
                            <BranchNode
                                icon={<Cpu />}
                                label="CPU"
                                desc="Xử lý lệnh chính"
                                color="orange"
                            />
                            <BranchNode
                                icon={<MemoryStick />}
                                label="RAM"
                                desc="Dữ liệu đang xử lý"
                                color="emerald"
                            />
                            <BranchNode
                                icon={<HardDrive />}
                                label="SSD / HDD"
                                desc="Lưu trữ lâu dài"
                                color="blue"
                            />
                        </div>
                    </div>

                    <ArrowDown className="text-slate-600 mt-2" />
                    <DiagramNode
                        icon={<Gauge />}
                        label="GPU"
                        desc="Dựng hình ảnh, video, game, đồ họa"
                        color="yellow"
                    />
                    <ArrowDown className="text-slate-600" />
                    <DiagramNode
                        icon={<Monitor />}
                        label="Output"
                        desc="Màn hình, loa, máy in"
                        color="pink"
                    />
                </div>

                <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-blue-300">Ghi nhớ:</strong> Dữ liệu
                    không “nhảy thẳng” từ bàn phím ra màn hình. Nó đi qua
                    mainboard, CPU, RAM, SSD/GPU rồi mới xuất ra màn hình hoặc
                    loa.
                </div>
            </div>
        </section>
    );
}

function DataPathSimulator() {
    const steps = [
        {
            title: "Bạn double-click file Word",
            desc: "Chuột gửi tín hiệu click vào máy tính.",
            icon: <MousePointer2 />,
            block: "Input",
        },
        {
            title: "Mainboard chuyển tín hiệu",
            desc: "Bo mạch chủ đưa tín hiệu đến đúng nơi cần xử lý.",
            icon: <Puzzle />,
            block: "Connection",
        },
        {
            title: "CPU yêu cầu lấy file",
            desc: "CPU xử lý lệnh mở file và yêu cầu đọc dữ liệu từ SSD/HDD.",
            icon: <Cpu />,
            block: "Processing",
        },
        {
            title: "SSD đưa dữ liệu lên RAM",
            desc: "Dữ liệu file Word được lấy từ lưu trữ lâu dài lên bộ nhớ tạm.",
            icon: <HardDrive />,
            block: "Storage → Memory",
        },
        {
            title: "CPU xử lý nội dung",
            desc: "CPU xử lý tài liệu, font, định dạng, trạng thái ứng dụng.",
            icon: <RefreshCcw />,
            block: "Processing",
        },
        {
            title: "GPU hỗ trợ hiển thị",
            desc: "GPU hỗ trợ dựng giao diện, cửa sổ và nội dung hiển thị.",
            icon: <Gauge />,
            block: "Graphics",
        },
        {
            title: "Màn hình hiển thị file",
            desc: "Bạn nhìn thấy tài liệu Word trên màn hình.",
            icon: <Monitor />,
            block: "Output",
        },
    ];

    const [step, setStep] = useState(0);
    const current = steps[step];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Mô phỏng: mở một file Word"
                icon={<ActivityIcon />}
            />
            <Stepper
                steps={steps}
                step={step}
                setStep={setStep}
                current={current}
                color="purple"
            />
        </section>
    );
}

function GameFlowSimulator() {
    const steps = [
        {
            title: "Bạn bấm phím W",
            desc: "Bàn phím gửi tín hiệu: nhân vật cần đi tới.",
            icon: <Keyboard />,
            block: "Input",
        },
        {
            title: "CPU xử lý lệnh di chuyển",
            desc: "CPU tính logic game, vị trí nhân vật, va chạm, tác vụ nền.",
            icon: <Cpu />,
            block: "Processing",
        },
        {
            title: "RAM giữ dữ liệu game",
            desc: "Dữ liệu map, nhân vật, trạng thái game đang chạy được giữ trong RAM.",
            icon: <MemoryStick />,
            block: "Memory",
        },
        {
            title: "SSD tải asset",
            desc: "Texture, âm thanh, map hoặc dữ liệu game được đọc từ SSD khi cần.",
            icon: <HardDrive />,
            block: "Storage",
        },
        {
            title: "GPU dựng khung hình",
            desc: "GPU xử lý ánh sáng, bóng đổ, vật thể 3D và tạo frame mới.",
            icon: <Gauge />,
            block: "Graphics",
        },
        {
            title: "Màn hình và loa xuất kết quả",
            desc: "Màn hình hiển thị khung hình mới; loa hoặc tai nghe phát âm thanh trong game.",
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
                color="orange"
                title="Mô phỏng: chơi game thì linh kiện phối hợp ra sao?"
                icon={<Gamepad2 />}
            />
            <Stepper
                steps={steps}
                step={step}
                setStep={setStep}
                current={current}
                color="orange"
            />
        </section>
    );
}

function Stepper({ steps, step, setStep, current, color }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[350px] flex flex-col justify-between">
                    <div>
                        <div
                            className={`w-16 h-16 rounded-2xl ${color === "orange" ? "bg-orange-500/10 text-orange-300 border-orange-500/20" : "bg-purple-500/10 text-purple-300 border-purple-500/20"} border flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(current.icon, { size: 32 })}
                        </div>
                        <p
                            className={`${color === "orange" ? "text-orange-300" : "text-purple-300"} text-sm font-bold mb-2`}
                        >
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
                            onClick={() => setStep((s) => Math.max(0, s - 1))}
                            disabled={step === 0}
                            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
                        >
                            Quay lại
                        </button>
                        <button
                            onClick={() =>
                                setStep((s) => (s + 1) % steps.length)
                            }
                            className={`px-5 py-2 rounded-xl ${color === "orange" ? "bg-orange-500 hover:bg-orange-600" : "bg-purple-500 hover:bg-purple-600"} text-white font-bold transition-colors inline-flex items-center gap-2`}
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
                                    ? color === "orange"
                                        ? "bg-orange-500/10 border-orange-500/40 text-white"
                                        : "bg-purple-500/10 border-purple-500/40 text-white"
                                    : index < step
                                      ? "bg-green-500/5 border-green-500/20 text-slate-300"
                                      : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700"
                            }`}
                        >
                            <div
                                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${step === index ? (color === "orange" ? "bg-orange-500 text-white" : "bg-purple-500 text-white") : index < step ? "bg-green-500/20 text-green-400" : "bg-slate-900 text-slate-500"}`}
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
    );
}

function ArchitectureBlocks() {
    const blocks = [
        {
            icon: <Keyboard />,
            name: "Input Block",
            parts: "Bàn phím, chuột, micro, webcam",
            role: "Đưa lệnh/dữ liệu vào máy",
            focus: "Học online, gaming, livestream, nhập liệu",
            color: "cyan",
        },
        {
            icon: <Cpu />,
            name: "Processing Block",
            parts: "CPU, GPU, chipset",
            role: "Xử lý dữ liệu và điều phối tác vụ",
            focus: "Game, render, lập trình, AI",
            color: "orange",
        },
        {
            icon: <MemoryStick />,
            name: "Memory Block",
            parts: "RAM, cache CPU",
            role: "Lưu dữ liệu tạm thời khi đang xử lý",
            focus: "Đa nhiệm, nhiều tab, app nặng",
            color: "emerald",
        },
        {
            icon: <HardDrive />,
            name: "Storage Block",
            parts: "SSD, HDD, USB, thẻ nhớ",
            role: "Lưu dữ liệu lâu dài",
            focus: "Windows, game, ảnh, video",
            color: "blue",
        },
        {
            icon: <Monitor />,
            name: "Output Block",
            parts: "Màn hình, loa, máy in",
            role: "Xuất kết quả cho người dùng",
            focus: "Làm việc, giải trí, thuyết trình",
            color: "pink",
        },
        {
            icon: <Power />,
            name: "Power Block",
            parts: "PSU, pin laptop, adapter",
            role: "Cấp điện cho toàn hệ thống",
            focus: "Build PC, nâng GPU, tránh sập nguồn",
            color: "red",
        },
        {
            icon: <Cable />,
            name: "Connection Block",
            parts: "Mainboard, bus, cổng kết nối",
            role: "Kết nối các linh kiện",
            focus: "Chọn mainboard, nâng cấp, sửa lỗi",
            color: "violet",
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Các khối chính trong kiến trúc máy tính"
                icon={<Layers3 />}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blocks.map((b) => (
                    <div
                        key={b.name}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:-translate-y-1 hover:border-emerald-500/40 transition-all"
                    >
                        <div
                            className={`w-12 h-12 rounded-2xl ${badgeColor(b.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(b.icon, { size: 24 })}
                        </div>
                        <h3 className="text-white font-extrabold text-lg mb-2">
                            {b.name}
                        </h3>
                        <p className="text-xs text-slate-500 mb-3">{b.parts}</p>
                        <p className="text-sm text-slate-300 leading-relaxed mb-4">
                            {b.role}
                        </p>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3 text-xs text-slate-400">
                            <strong className="text-emerald-300">
                                Cần quan tâm khi:
                            </strong>{" "}
                            {b.focus}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        socket: {
            icon: <Cpu />,
            title: "Socket CPU",
            where: "Mainboard",
            detail: "Quyết định CPU nào gắn được vào mainboard. CPU Intel và AMD thường dùng socket khác nhau.",
            tip: "Khi nâng CPU, luôn kiểm tra socket và BIOS của mainboard.",
        },
        chipset: {
            icon: <Puzzle />,
            title: "Chipset",
            where: "Mainboard",
            detail: "Quy định tính năng mainboard: số cổng USB, khe M.2, hỗ trợ ép xung, số lane PCIe.",
            tip: "Không phải mainboard cùng socket đều có tính năng giống nhau.",
        },
        ram: {
            icon: <MemoryStick />,
            title: "RAM Capacity / Speed",
            where: "RAM",
            detail: "Dung lượng RAM ảnh hưởng đa nhiệm; tốc độ RAM ảnh hưởng khả năng truyền dữ liệu giữa CPU và bộ nhớ.",
            tip: "Văn phòng thường 8–16GB; làm nặng nên cân nhắc 32GB trở lên.",
        },
        pcie: {
            icon: <Cable />,
            title: "PCIe Version",
            where: "Mainboard / GPU / SSD",
            detail: "PCIe 3.0, 4.0, 5.0 ảnh hưởng băng thông cho GPU và SSD NVMe.",
            tip: "SSD NVMe và GPU mạnh cần khe PCIe phù hợp để phát huy tốt.",
        },
        storage: {
            icon: <HardDrive />,
            title: "Storage Interface",
            where: "SSD / HDD",
            detail: "SATA thường chậm hơn NVMe; giao tiếp lưu trữ ảnh hưởng tốc độ đọc/ghi dữ liệu.",
            tip: "Máy còn HDD nên ưu tiên nâng SSD trước để cải thiện phản hồi.",
        },
        psu: {
            icon: <Power />,
            title: "PSU Wattage",
            where: "Bộ nguồn",
            detail: "Công suất nguồn phải đủ cho CPU, GPU và toàn hệ thống, nhất là khi tải nặng.",
            tip: "Nâng GPU phải kiểm tra nguồn, đầu cấp điện và chất lượng PSU.",
        },
        monitor: {
            icon: <Monitor />,
            title: "Resolution / Refresh Rate",
            where: "Màn hình",
            detail: "Full HD, 2K, 4K ảnh hưởng độ nét và áp lực lên GPU; 60Hz, 144Hz, 240Hz ảnh hưởng độ mượt.",
            tip: "Màn hình 144Hz cần GPU đủ FPS để phát huy.",
        },
    };

    const [active, setActive] = useState("socket");
    const item = specs[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số ảnh hưởng đến toàn hệ thống"
                icon={<Settings />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(specs).map(([key, spec]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center transition-all ${
                                active === key
                                    ? "bg-yellow-500 text-slate-950 shadow-lg shadow-yellow-500/10"
                                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                            }`}
                        >
                            {React.cloneElement(spec.icon, { size: 20 })}
                            <span className="font-bold text-xs">
                                {spec.title}
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
                            Nằm ở: {item.where}
                        </p>
                    </div>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                        <p>{item.detail}</p>
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-yellow-300">
                                Mẹo thực tế:
                            </strong>{" "}
                            {item.tip}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RealBuildExamples() {
    const builds = [
        {
            icon: <Laptop />,
            title: "PC văn phòng cơ bản",
            price: "Khoảng 6–9 triệu VNĐ",
            parts: [
                "CPU: Intel Core i3-12100",
                "RAM: 8GB DDR4",
                "SSD: Kingston NV2 500GB",
                "Mainboard: H610M",
                "PSU: 400W–500W",
                "Màn hình: 22–24 inch Full HD",
            ],
            fit: "Học online, Word, Excel, PowerPoint, lướt web, YouTube, kế toán nhẹ, bán hàng.",
            flow: "Bàn phím/chuột → Mainboard → CPU → RAM → SSD → Màn hình",
        },
        {
            icon: <Gamepad2 />,
            title: "PC gaming tầm trung",
            price: "Khoảng 15–22 triệu VNĐ",
            parts: [
                "CPU: i5-12400F hoặc Ryzen 5 5600",
                "GPU: RTX 4060 8GB",
                "RAM: 16GB DDR4/DDR5",
                "SSD: NVMe 1TB",
                "Mainboard: B660/B760 hoặc B550",
                "PSU: 550W–650W 80 Plus",
                "Màn hình: Full HD 144Hz",
            ],
            fit: "Valorant, CS2, League of Legends, game AAA Full HD, stream nhẹ, Photoshop/Premiere cơ bản.",
            flow: "Input → CPU/RAM/SSD → GPU → Màn hình 144Hz → Loa/tai nghe",
        },
        {
            icon: <TabletSmartphone />,
            title: "Laptop học tập",
            price: "Khoảng 10–16 triệu VNĐ",
            parts: [
                "CPU: Intel Core i5 / Ryzen 5",
                "RAM: 8GB hoặc 16GB",
                "SSD: 512GB",
                "GPU: tích hợp Iris Xe / Radeon",
                "Pin: 40–60Wh",
                "Màn hình: 14–15.6 inch Full HD",
            ],
            fit: "Sinh viên, học online, lập trình cơ bản, báo cáo, thuyết trình, giải trí nhẹ.",
            flow: "Input tích hợp → CPU/RAM/SSD → GPU tích hợp → màn hình/loa/pin",
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="pink"
                title="Ví dụ cấu hình thực tế theo kiến trúc"
                icon={<PackageCheck />}
            />
            <div className="grid lg:grid-cols-3 gap-4">
                {builds.map((b) => (
                    <div
                        key={b.title}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-pink-500/40 transition-all flex flex-col"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-300 flex items-center justify-center mb-4">
                            {React.cloneElement(b.icon, { size: 24 })}
                        </div>
                        <h3 className="text-white font-bold text-lg mb-1">
                            {b.title}
                        </h3>
                        <p className="text-pink-300 text-sm font-semibold mb-4">
                            {b.price}
                        </p>
                        <div className="space-y-2 mb-5">
                            {b.parts.map((p) => (
                                <div
                                    key={p}
                                    className="flex items-start gap-2 text-xs text-slate-300"
                                >
                                    <CheckCircle2
                                        className="text-green-400 shrink-0 mt-0.5"
                                        size={14}
                                    />{" "}
                                    {p}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed mb-4">
                            {b.fit}
                        </p>
                        <div className="mt-auto bg-slate-950 border border-slate-800 rounded-2xl p-3 text-xs text-slate-300 font-mono">
                            {b.flow}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function BottleneckLab() {
    const cases = [
        {
            symptom: "Mở máy rất lâu",
            answer: "SSD/HDD",
            icon: <HardDrive />,
            reason: "Khởi động Windows và mở phần mềm phụ thuộc nhiều vào tốc độ ổ lưu trữ. HDD cơ học thường là nút thắt lớn.",
        },
        {
            symptom: "Mở nhiều tab Chrome bị lag",
            answer: "RAM",
            icon: <MemoryStick />,
            reason: "Nhiều tab và ứng dụng cần bộ nhớ tạm. Thiếu RAM khiến máy phải dùng ổ cứng làm bộ nhớ tạm, rất chậm.",
        },
        {
            symptom: "Game FPS thấp",
            answer: "GPU/CPU",
            icon: <Gauge />,
            reason: "FPS thấp thường liên quan GPU, CPU hoặc cả hai. Game đồ họa nặng phụ thuộc nhiều vào GPU.",
        },
        {
            symptom: "Máy tự tắt khi render hoặc chơi game",
            answer: "PSU/Nhiệt độ",
            icon: <Power />,
            reason: "Tải nặng làm CPU/GPU ăn điện và sinh nhiệt. Nguồn yếu hoặc tản nhiệt kém có thể làm máy sập.",
        },
        {
            symptom: "Copy file chậm",
            answer: "SSD/HDD/USB",
            icon: <UsbIcon />,
            reason: "Copy file phụ thuộc tốc độ ổ đĩa, USB, cổng kết nối và loại dữ liệu.",
        },
        {
            symptom: "Hình ảnh không mượt",
            answer: "GPU/Màn hình",
            icon: <Monitor />,
            reason: "Độ mượt phụ thuộc FPS từ GPU và tần số quét màn hình như 60Hz, 144Hz, 240Hz.",
        },
    ];

    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    const current = cases[index];

    const next = () => {
        setShow(false);
        setIndex((i) => (i + 1) % cases.length);
    };

    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="purple"
                title="Lab: máy chậm ở khâu nào?"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-6 items-center">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 text-center">
                        <p className="text-purple-300 text-sm font-bold mb-4">
                            Tình huống {index + 1}/{cases.length}
                        </p>
                        <div className="w-24 h-24 rounded-3xl bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center justify-center mx-auto mb-5">
                            {React.cloneElement(current.icon, { size: 46 })}
                        </div>
                        <h3 className="text-2xl font-extrabold text-white leading-snug">
                            {current.symptom}
                        </h3>
                        <p className="text-slate-500 mt-3">
                            Hãy đoán linh kiện/khối nào có thể liên quan.
                        </p>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[280px] flex flex-col justify-between">
                        {!show ? (
                            <div className="text-center flex flex-col items-center justify-center h-full">
                                <button
                                    onClick={() => setShow(true)}
                                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-colors"
                                >
                                    <Lightbulb size={18} /> Xem gợi ý phân tích
                                </button>
                            </div>
                        ) : (
                            <div className="animate-in fade-in slide-in-from-bottom-2">
                                <p className="text-sm text-slate-500 mb-2">
                                    Có thể liên quan đến
                                </p>
                                <h4 className="text-3xl font-extrabold text-purple-300 mb-4">
                                    {current.answer}
                                </h4>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    {current.reason}
                                </p>
                                <button
                                    onClick={next}
                                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-xl transition-colors"
                                >
                                    Tình huống tiếp theo
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function MistakesAndTips() {
    const mistakes = [
        {
            wrong: "Nghĩ CPU nối trực tiếp với mọi thiết bị",
            right: "CPU giao tiếp với nhiều thiết bị thông qua mainboard, chipset, bus và controller. Mainboard là nền tảng vật lý giúp linh kiện nói chuyện với nhau.",
        },
        {
            wrong: "Chỉ nâng một linh kiện và mong cả máy mạnh toàn diện",
            right: "Hiệu năng phụ thuộc bottleneck. CPU mạnh nhưng RAM thiếu, SSD chậm, GPU yếu hoặc nguồn kém vẫn làm hiệu năng thực tế thấp.",
        },
        {
            wrong: "Nhầm RAM và SSD vì đều lưu dữ liệu",
            right: "RAM lưu tạm thời khi chương trình đang chạy và mất dữ liệu khi tắt máy. SSD/HDD lưu lâu dài và không mất dữ liệu khi tắt máy.",
        },
        {
            wrong: "Nghĩ GPU là màn hình",
            right: "GPU xử lý hình ảnh. Màn hình hiển thị hình ảnh. GPU dựng khung hình → HDMI/DisplayPort truyền tín hiệu → màn hình hiển thị.",
        },
    ];

    const tips = [
        "Khi kiểm tra cấu hình, nhìn theo luồng: CPU → RAM → SSD → GPU → Mainboard → PSU → Màn hình.",
        "Muốn máy văn phòng nhanh hơn, ưu tiên kiểm tra RAM và SSD trước.",
        "Muốn máy chơi game mạnh hơn, kiểm tra GPU, CPU, RAM, PSU và màn hình cùng lúc.",
        "Khi build PC, kiểm tra tính tương thích: socket CPU, DDR4/DDR5, SATA/NVMe, công suất nguồn, kích thước case.",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
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
                        <Lightbulb /> Mẹo kiểm tra kiến trúc máy
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
                    <div className="mt-6 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-300">
                        <strong className="text-green-300">
                            Nguyên tắc vàng:
                        </strong>{" "}
                        Đừng chọn linh kiện rời rạc. Hãy chọn theo hệ thống hoàn
                        chỉnh và kiểm tra điểm nghẽn.
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-violet-300 border border-slate-800 shadow-inner space-y-2">
                            <p>KIẾN TRÚC MÁY TÍNH</p>
                            <p className="text-slate-300">
                                = bản đồ kết nối và luồng dữ liệu
                            </p>
                            <br />
                            <p className="text-slate-500"># Luồng mở file</p>
                            <p className="text-slate-300">
                                Input → Mainboard → CPU
                            </p>
                            <p className="text-slate-300">
                                → SSD/HDD → RAM → GPU
                            </p>
                            <p className="text-slate-300">→ Màn hình / Loa</p>
                            <br />
                            <p className="text-slate-500"># Khối chính</p>
                            <p className="text-slate-300">
                                Input, Processing, Memory, Storage
                            </p>
                            <p className="text-slate-300">
                                Output, Power, Connection
                            </p>
                            <br />
                            <p className="text-slate-500"># Khi máy chậm</p>
                            <p className="text-slate-300">
                                Tìm bottleneck thay vì nâng bừa.
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
        question:
            "Trong kiến trúc máy tính, linh kiện nào thường được xem là trung tâm kết nối các linh kiện khác?",
        options: ["Màn hình", "Mainboard", "Chuột", "Loa"],
        correct: 1,
        explanation:
            "Mainboard là nền tảng vật lý kết nối CPU, RAM, SSD, GPU, cổng USB và nhiều linh kiện khác.",
    },
    {
        question:
            "Khi mở một phần mềm, dữ liệu thường được lấy từ SSD/HDD lên đâu để CPU xử lý nhanh hơn?",
        options: ["Loa", "RAM", "Máy in", "Webcam"],
        correct: 1,
        explanation:
            "RAM là bộ nhớ tạm tốc độ cao, giữ dữ liệu đang chạy để CPU xử lý nhanh hơn so với đọc liên tục từ SSD/HDD.",
    },
    {
        question: "GPU có nhiệm vụ chính là gì?",
        options: [
            "Cấp điện cho máy tính",
            "Lưu trữ dữ liệu lâu dài",
            "Xử lý đồ họa/hình ảnh",
            "Nhập dữ liệu từ bàn phím",
        ],
        correct: 2,
        explanation:
            "GPU xử lý hình ảnh, video, game, 3D, render và một số tác vụ AI.",
    },
    {
        question:
            "Nếu máy mở nhiều tab bị lag, khối nào thường cần kiểm tra trước?",
        options: ["RAM", "Loa", "Máy in", "Chuột"],
        correct: 0,
        explanation:
            "Mở nhiều tab và ứng dụng tiêu tốn RAM. Thiếu RAM khiến máy chậm rõ rệt.",
    },
    {
        question:
            "Vì sao không nên chỉ nâng một linh kiện rồi kỳ vọng máy mạnh toàn diện?",
        options: [
            "Vì màn hình sẽ đổi màu",
            "Vì hiệu năng phụ thuộc bottleneck của toàn hệ thống",
            "Vì chuột sẽ nhanh hơn",
            "Vì PSU thay thế được CPU",
        ],
        correct: 1,
        explanation:
            "Một linh kiện yếu như RAM thiếu, SSD chậm, GPU yếu, nguồn kém hoặc tản nhiệt kém có thể kéo chậm cả hệ thống.",
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
    }

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

function NextLesson() {
    return (
        <div className="text-center pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">
                Sau khi hình dung kiến trúc tổng thể, bước tiếp theo là hiểu mối
                quan hệ giữa phần cứng, phần mềm và người dùng.
            </p>
            <Link
                to="/phan-1-4"
                className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-violet-500/20"
            >
                Bài tiếp theo: 1.4 — Phần cứng, phần mềm và người dùng{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function ActivityIcon() {
    return <Workflow />;
}

function UsbIcon() {
    return <Save />;
}

function SectionTitle({ number, title, icon, color = "violet" }) {
    const colorMap = {
        violet: "bg-violet-500/20 text-violet-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        blue: "bg-blue-500/20 text-blue-300",
        purple: "bg-purple-500/20 text-purple-300",
        orange: "bg-orange-500/20 text-orange-300",
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

function MiniNode({ icon, label, color, active, highlight }) {
    return (
        <div
            className={`aspect-square rounded-2xl border p-3 flex flex-col items-center justify-center text-center transition-all ${highlight ? "bg-violet-500/10 border-violet-400/50 text-violet-300" : active ? "bg-green-500/10 border-green-500/30 text-green-300" : "bg-slate-900 border-slate-800 text-slate-400"}`}
        >
            {React.cloneElement(icon, { size: 28 })}
            <span className="text-xs font-bold mt-2">{label}</span>
        </div>
    );
}

function DiagramNode({ icon, label, desc, color, large }) {
    return (
        <div
            className={`${large ? "w-full max-w-md" : "w-full max-w-xs"} ${softBorder(color)} border rounded-3xl p-5 flex items-center gap-4 justify-center text-center md:text-left`}
        >
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center shrink-0`}
            >
                {React.cloneElement(icon, { size: 26 })}
            </div>
            <div>
                <h4 className="font-extrabold text-white">{label}</h4>
                <p className="text-xs text-slate-400 mt-1">{desc}</p>
            </div>
        </div>
    );
}

function BranchNode({ icon, label, desc, color }) {
    return (
        <div className="relative flex flex-col items-center">
            <div className="w-px h-6 bg-slate-700 mb-2" />
            <div
                className={`w-full border rounded-2xl p-4 text-center hover:border-violet-400/40 transition-colors ${softBorder(color)}`}
            >
                <div
                    className={`w-10 h-10 rounded-xl ${badgeColor(color)} flex items-center justify-center mx-auto mb-2`}
                >
                    {React.cloneElement(icon, { size: 22 })}
                </div>
                <p className="text-sm font-bold text-white">{label}</p>
                <p className="text-xs text-slate-500 mt-1">{desc}</p>
            </div>
        </div>
    );
}

function badgeColor(color) {
    const map = {
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        violet: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
        slate: "bg-slate-500/10 text-slate-300 border border-slate-500/20",
    };
    return map[color] || map.violet;
}

function softBorder(color) {
    const map = {
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        violet: "bg-violet-500/5 border-violet-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.violet;
}
