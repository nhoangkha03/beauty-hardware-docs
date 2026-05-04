import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowDown,
    ArrowRight,
    Award,
    BookOpen,
    Brain,
    Bug,
    CheckCircle2,
    ChevronRight,
    Cpu,
    Database,
    Download,
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
    Save,
    Search,
    Settings,
    ShieldCheck,
    Smartphone,
    Sparkles,
    User,
    Users,
    Video,
    Volume2,
    Wifi,
    Workflow,
    Wrench,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                            <Layers3 className="text-emerald-400" size={24} />
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
                    <div className="text-sm font-semibold text-emerald-300 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                        Bài 1.4
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <ThreeElements />
                <RestaurantAnalogy />
                <ChromeYoutubeSimulator />
                <RoleComparison />
                <TechnicalConcepts />
                <RealExamples />
                <SlowComputerDiagnostic />
                <MistakesAndTips />
                <BalancedSystemLab />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-emerald-300">
                        <BookOpen size={16} /> Phần 1: Tổng quan về phần cứng
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Phần cứng – Phần mềm – Người dùng
                        <span className="block text-emerald-400">
                            phối hợp như thế nào?
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Máy tính không chỉ mạnh nhờ CPU, RAM hay SSD. Trải
                        nghiệm thực tế phụ thuộc vào cả phần cứng, phần mềm và
                        cách người dùng cài đặt, vận hành, bảo trì hệ thống.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="Hardware" />
                        <Tag icon={<Settings size={16} />} text="Software" />
                        <Tag icon={<User size={16} />} text="User" />
                        <Tag
                            icon={<ShieldCheck size={16} />}
                            text="Driver & OS"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-1 gap-3">
                        <HeroLayer
                            icon={<User />}
                            label="Người dùng"
                            desc="Ra lệnh, chọn công cụ, bảo trì"
                            color="cyan"
                        />
                        <div className="flex justify-center">
                            <ArrowDown className="text-slate-600" />
                        </div>
                        <HeroLayer
                            icon={<Settings />}
                            label="Phần mềm"
                            desc="Phiên dịch lệnh, điều khiển phần cứng"
                            color="emerald"
                            highlight
                        />
                        <div className="flex justify-center">
                            <ArrowDown className="text-slate-600" />
                        </div>
                        <HeroLayer
                            icon={<Cpu />}
                            label="Phần cứng"
                            desc="Thực hiện xử lý, lưu trữ, hiển thị"
                            color="orange"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">
                            // Công thức trải nghiệm
                        </p>
                        <p>
                            <span className="text-cyan-300">User đúng</span> +{" "}
                            <span className="text-emerald-300">
                                Software sạch
                            </span>
                        </p>
                        <p>
                            +{" "}
                            <span className="text-orange-300">
                                Hardware phù hợp
                            </span>{" "}
                            = máy chạy tốt
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu 3 yếu tố chính của hệ thống máy tính.",
        "Phân biệt vai trò của hardware, software và user.",
        "Theo dõi luồng mở Chrome xem YouTube.",
        "Biết driver, hệ điều hành, firmware, system requirements là gì.",
        "Chẩn đoán máy chậm theo cả phần cứng, phần mềm và cách dùng.",
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="emerald"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/50 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-300 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
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

function ThreeElements() {
    const [active, setActive] = useState("hardware");
    const data = {
        hardware: {
            icon: <Cpu />,
            title: "Phần cứng – Hardware",
            metaphor: "Cơ thể của máy tính",
            desc: "Các bộ phận vật lý như CPU, RAM, SSD, mainboard, GPU, màn hình, bàn phím, chuột và nguồn. Phần cứng tạo ra khả năng vật lý để máy tính hoạt động.",
            examples: [
                "CPU",
                "RAM",
                "SSD",
                "GPU",
                "Mainboard",
                "Màn hình",
                "Bàn phím",
                "Nguồn",
            ],
            color: "orange",
        },
        software: {
            icon: <Settings />,
            title: "Phần mềm – Software",
            metaphor: "Bộ hướng dẫn/kỹ năng của máy tính",
            desc: "Chương trình, hệ điều hành, ứng dụng và driver chạy trên phần cứng. Phần mềm giúp phần cứng biết phải làm gì và cung cấp chức năng cho người dùng.",
            examples: [
                "Windows 11",
                "macOS",
                "Linux",
                "Chrome",
                "Word",
                "Photoshop",
                "Game",
                "Driver",
            ],
            color: "emerald",
        },
        user: {
            icon: <User />,
            title: "Người dùng – User",
            metaphor: "Người điều khiển hệ thống",
            desc: "Người ra lệnh, chọn phần mềm, thao tác, cài đặt, bảo trì và khai thác máy tính. Cùng một máy, người dùng đúng cách có thể làm việc hiệu quả hơn nhiều.",
            examples: [
                "Học sinh",
                "Nhân viên",
                "Kỹ thuật viên",
                "Designer",
                "Gamer",
                "Lập trình viên",
            ],
            color: "cyan",
        },
    };
    const item = data[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Ba yếu tố chính của hệ thống máy tính"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
                    <div className="space-y-3">
                        {Object.entries(data).map(([key, el]) => (
                            <button
                                key={key}
                                onClick={() => setActive(key)}
                                className={`w-full p-5 rounded-2xl border text-left transition-all ${active === key ? `${softBorder(el.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                            >
                                <div className="flex items-center gap-3 font-bold">
                                    {React.cloneElement(el.icon, { size: 22 })}{" "}
                                    {el.title}
                                </div>
                                <p className="text-sm mt-2 opacity-75">
                                    {el.metaphor}
                                </p>
                            </button>
                        ))}
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[360px]">
                        <div
                            className={`w-14 h-14 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 30 })}
                        </div>
                        <h3 className="text-3xl font-extrabold text-white mb-2">
                            {item.title}
                        </h3>
                        <p
                            className={`font-bold mb-4 ${textColor(item.color)}`}
                        >
                            {item.metaphor}
                        </p>
                        <p className="text-slate-300 leading-relaxed mb-5">
                            {item.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {item.examples.map((ex) => (
                                <span
                                    key={ex}
                                    className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sm text-slate-300"
                                >
                                    {ex}
                                </span>
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
            icon: <User />,
        },
        {
            real: "Thực đơn và quy trình bếp",
            computer: "Phần mềm hướng dẫn xử lý",
            icon: <Settings />,
        },
        {
            real: "Bếp, dao, nồi, nguyên liệu, đầu bếp",
            computer: "Phần cứng thực hiện",
            icon: <Cpu />,
        },
        {
            real: "Món ăn cuối cùng",
            computer: "Kết quả hiển thị cho người dùng",
            icon: <PackageCheck />,
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="orange"
                title="Ví dụ đời thường: máy tính giống một quán ăn"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 md:p-8">
                <p className="text-slate-300 mb-8 leading-relaxed">
                    Muốn có món ăn ngon, không chỉ cần bếp tốt. Cần khách gọi
                    đúng, thực đơn/quy trình rõ ràng và dụng cụ/nguyên liệu phù
                    hợp. Máy tính cũng vậy.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    {rows.map((r) => (
                        <div
                            key={r.real}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex items-center justify-between gap-4"
                        >
                            <div className="flex items-center gap-3 text-slate-300">
                                <div className="w-11 h-11 rounded-xl bg-orange-500/10 text-orange-300 flex items-center justify-center shrink-0">
                                    {React.cloneElement(r.icon, { size: 22 })}
                                </div>
                                <span className="font-semibold">{r.real}</span>
                            </div>
                            <ArrowRight
                                className="text-slate-600 shrink-0"
                                size={18}
                            />
                            <span className="font-bold text-emerald-300 text-right">
                                {r.computer}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ChromeYoutubeSimulator() {
    const steps = [
        {
            layer: "User",
            title: "Người dùng click Chrome",
            desc: "Bạn ra lệnh bằng chuột: mở trình duyệt Chrome.",
            icon: <MousePointerClick />,
            color: "cyan",
        },
        {
            layer: "Software",
            title: "Windows nhận lệnh",
            desc: "Hệ điều hành tiếp nhận thao tác và chuẩn bị chạy ứng dụng.",
            icon: <Settings />,
            color: "emerald",
        },
        {
            layer: "Hardware",
            title: "SSD lấy file Chrome",
            desc: "File chương trình được đọc từ SSD hoặc HDD.",
            icon: <HardDrive />,
            color: "orange",
        },
        {
            layer: "Hardware",
            title: "RAM giữ dữ liệu đang chạy",
            desc: "Dữ liệu Chrome được đưa lên RAM để CPU truy cập nhanh.",
            icon: <MemoryStick />,
            color: "orange",
        },
        {
            layer: "Hardware",
            title: "CPU xử lý chương trình",
            desc: "CPU chạy lệnh, xử lý tab, script, giao diện và tác vụ nền.",
            icon: <Cpu />,
            color: "orange",
        },
        {
            layer: "Hardware + Driver",
            title: "GPU và driver hiển thị video",
            desc: "GPU hỗ trợ hình ảnh/video; driver giúp hệ điều hành giao tiếp đúng với GPU.",
            icon: <Gauge />,
            color: "violet",
        },
        {
            layer: "Hardware + Network",
            title: "Card mạng nhận dữ liệu Internet",
            desc: "WiFi hoặc LAN nhận dữ liệu video YouTube từ Internet.",
            icon: <Wifi />,
            color: "blue",
        },
        {
            layer: "Result",
            title: "Màn hình và loa trả kết quả",
            desc: "Màn hình hiển thị video; loa hoặc tai nghe phát âm thanh.",
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
                title="Mô phỏng: mở Chrome xem YouTube"
                icon={<Video />}
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
                                Bước {step + 1}/{steps.length} • {current.layer}
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
                                        {item.layer}
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

function RoleComparison() {
    const rows = [
        {
            item: "Phần cứng – Hardware",
            nature: "Vật lý, chạm được",
            role: "Cung cấp năng lực xử lý, lưu trữ, hiển thị, kết nối",
            examples: "CPU, RAM, SSD, GPU, màn hình",
            missing: "Máy không có nền tảng để chạy",
            icon: <Cpu />,
            color: "orange",
        },
        {
            item: "Phần mềm – Software",
            nature: "Chương trình, mã lệnh",
            role: "Điều khiển phần cứng, cung cấp chức năng",
            examples: "Windows, Chrome, Word, driver",
            missing: "Phần cứng không biết phải làm gì",
            icon: <Settings />,
            color: "emerald",
        },
        {
            item: "Người dùng – User",
            nature: "Con người thao tác",
            role: "Ra lệnh, chọn công cụ, bảo trì, sử dụng",
            examples: "Học sinh, nhân viên, kỹ thuật viên",
            missing: "Máy không tạo ra giá trị thực tế",
            icon: <User />,
            color: "cyan",
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="So sánh vai trò: Hardware – Software – User"
                icon={<Workflow />}
            />
            <div className="grid lg:grid-cols-3 gap-4">
                {rows.map((r) => (
                    <div
                        key={r.item}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-blue-500/40 transition-all"
                    >
                        <div
                            className={`w-12 h-12 rounded-2xl ${badgeColor(r.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(r.icon, { size: 24 })}
                        </div>
                        <h3 className="text-white font-extrabold text-lg mb-3">
                            {r.item}
                        </h3>
                        <InfoRow label="Bản chất" value={r.nature} />
                        <InfoRow label="Vai trò" value={r.role} />
                        <InfoRow label="Ví dụ" value={r.examples} />
                        <div className="mt-4 bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-sm text-slate-300">
                            <strong className="text-red-300">Nếu thiếu:</strong>{" "}
                            {r.missing}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function TechnicalConcepts() {
    const concepts = {
        requirements: {
            icon: <Search />,
            title: "System Requirements",
            owner: "Software ↔ Hardware",
            detail: "Cho biết máy cần CPU, RAM, GPU, dung lượng tối thiểu để chạy phần mềm.",
            example:
                "Phần mềm dựng video yêu cầu 16GB RAM nhưng máy chỉ có 8GB thì dễ giật, treo hoặc xuất video rất chậm.",
        },
        driver: {
            icon: <Wrench />,
            title: "Driver",
            owner: "Software ↔ Hardware",
            detail: "Phần mềm giúp hệ điều hành giao tiếp đúng với phần cứng.",
            example:
                "Thiếu driver WiFi, máy có thể không bắt được mạng; thiếu driver GPU, hình ảnh/game có thể lỗi hoặc hiệu năng thấp.",
        },
        os: {
            icon: <Laptop />,
            title: "Operating System",
            owner: "Phần mềm trung tâm",
            detail: "Quản lý CPU, RAM, ổ cứng, thiết bị ngoại vi và cung cấp giao diện cho người dùng.",
            example:
                "Windows, macOS, Linux là cầu nối chính giữa người dùng, ứng dụng và phần cứng.",
        },
        firmware: {
            icon: <Puzzle />,
            title: "Firmware",
            owner: "Phần mềm cấp thấp",
            detail: "Phần mềm nằm gần phần cứng, ví dụ BIOS/UEFI trên mainboard.",
            example:
                "Firmware giúp mainboard khởi tạo phần cứng trước khi hệ điều hành chạy.",
        },
        permission: {
            icon: <ShieldCheck />,
            title: "User Permission",
            owner: "User ↔ Software",
            detail: "Quyết định người dùng có được cài app, sửa file hệ thống hoặc thay đổi cấu hình hay không.",
            example:
                "Tài khoản không có quyền admin có thể không cài được phần mềm hoặc driver.",
        },
        compatibility: {
            icon: <CheckCircle2 />,
            title: "Compatibility",
            owner: "Cả 3 yếu tố",
            detail: "Phần cứng, phần mềm và người dùng phải phù hợp với nhau.",
            example:
                "Máy mạnh nhưng phần mềm không hỗ trợ GPU hoặc người dùng cài sai driver thì hiệu năng vẫn kém.",
        },
        bottleneck: {
            icon: <Zap />,
            title: "Bottleneck",
            owner: "Hardware / Software",
            detail: "Một thành phần yếu hoặc cấu hình sai làm chậm toàn hệ thống.",
            example:
                "CPU mạnh nhưng RAM 4GB và HDD cũ vẫn khiến máy chậm khi mở nhiều ứng dụng.",
        },
    };

    const [active, setActive] = useState("requirements");
    const item = concepts[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="yellow"
                title="Khái niệm kỹ thuật quan trọng"
                icon={<Settings />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(concepts).map(([key, c]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center transition-all ${
                                active === key
                                    ? "bg-yellow-500 text-slate-950 shadow-lg shadow-yellow-500/10"
                                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                            }`}
                        >
                            {React.cloneElement(c.icon, { size: 20 })}
                            <span className="font-bold text-xs">{c.title}</span>
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
                            Thuộc về: {item.owner}
                        </p>
                    </div>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                        <p>{item.detail}</p>
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-yellow-300">Ví dụ:</strong>{" "}
                            {item.example}
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
            title: "i5-12400F nhưng không có card đồ họa rời",
            lesson: "Phần mềm không thể thay thế phần cứng bị thiếu.",
            points: [
                "CPU có chữ F thường không có GPU tích hợp",
                "Không có GPU rời có thể không xuất hình",
                "Windows không giải quyết được thiếu phần cứng xuất hình",
            ],
            color: "orange",
        },
        {
            icon: <HardDrive />,
            title: "Nâng SSD giúp máy phản hồi nhanh hơn",
            lesson: "Nâng đúng phần cứng theo đúng vấn đề.",
            points: [
                "SSD giúp mở Windows và app nhanh",
                "SSD giảm thời gian load game",
                "SSD không thay CPU/GPU để tăng mạnh FPS hoặc render",
            ],
            color: "emerald",
        },
        {
            icon: <Laptop />,
            title: "Windows 11 cần phần cứng phù hợp",
            lesson: "Hệ điều hành là phần mềm nhưng trải nghiệm phụ thuộc phần cứng và người dùng.",
            points: [
                "CPU đời mới + RAM 16GB + SSD thường chạy mượt",
                "CPU cũ + RAM 4GB + HDD dễ chậm",
                "Thiếu driver có thể lỗi WiFi, âm thanh, GPU",
            ],
            color: "blue",
        },
    ];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="pink"
                title="Ví dụ thực tế: hiểu đúng mối quan hệ"
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
                        <h3 className="text-white font-bold text-lg mb-3">
                            {e.title}
                        </h3>
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
                            <strong className="text-pink-300">Bài học:</strong>{" "}
                            {e.lesson}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function SlowComputerDiagnostic() {
    const cases = [
        {
            symptom: "RAM thiếu",
            group: "Phần cứng",
            icon: <MemoryStick />,
            fix: "Nâng RAM hoặc giảm ứng dụng chạy đồng thời.",
        },
        {
            symptom: "Ổ HDD quá chậm",
            group: "Phần cứng",
            icon: <HardDrive />,
            fix: "Nâng lên SSD để cải thiện khởi động và mở app.",
        },
        {
            symptom: "Windows lỗi",
            group: "Phần mềm",
            icon: <Bug />,
            fix: "Cập nhật, sửa lỗi hệ thống hoặc cài lại khi cần.",
        },
        {
            symptom: "Nhiễm malware",
            group: "Phần mềm / Người dùng",
            icon: <ShieldCheck />,
            fix: "Quét malware, gỡ app lạ, tránh tải phần mềm không rõ nguồn.",
        },
        {
            symptom: "Quá nhiều app chạy nền",
            group: "Người dùng / Phần mềm",
            icon: <RefreshCcw />,
            fix: "Tắt startup app và gỡ phần mềm không dùng.",
        },
        {
            symptom: "Máy quá nhiệt do bụi",
            group: "Người dùng / Phần cứng",
            icon: <Gauge />,
            fix: "Vệ sinh máy, kiểm tra quạt, keo tản nhiệt và luồng gió.",
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
                number="8"
                color="purple"
                title="Lab chẩn đoán: máy chậm do đâu?"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-6 items-center">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 text-center">
                        <p className="text-purple-300 text-sm font-bold mb-4">
                            Nguyên nhân {index + 1}/{cases.length}
                        </p>
                        <div className="w-24 h-24 rounded-3xl bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center justify-center mx-auto mb-5">
                            {React.cloneElement(current.icon, { size: 46 })}
                        </div>
                        <h3 className="text-2xl font-extrabold text-white leading-snug">
                            {current.symptom}
                        </h3>
                        <p className="text-slate-500 mt-3">
                            Thuộc nhóm nào và nên xử lý ra sao?
                        </p>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[280px] flex flex-col justify-between">
                        {!show ? (
                            <div className="text-center flex flex-col items-center justify-center h-full">
                                <button
                                    onClick={() => setShow(true)}
                                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-colors"
                                >
                                    <Lightbulb size={18} /> Xem phân tích
                                </button>
                            </div>
                        ) : (
                            <div className="animate-in fade-in slide-in-from-bottom-2">
                                <p className="text-sm text-slate-500 mb-2">
                                    Thuộc nhóm
                                </p>
                                <h4 className="text-3xl font-extrabold text-purple-300 mb-4">
                                    {current.group}
                                </h4>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    <strong className="text-white">
                                        Cách xử lý:
                                    </strong>{" "}
                                    {current.fix}
                                </p>
                                <button
                                    onClick={next}
                                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-xl transition-colors"
                                >
                                    Nguyên nhân tiếp theo
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
            wrong: "Máy chậm thì chắc chắn do phần cứng yếu",
            right: "Máy chậm có thể do RAM thiếu, HDD chậm, Windows lỗi, malware, app chạy nền, quá nhiệt hoặc cách dùng chưa tốt.",
        },
        {
            wrong: "Cài phần mềm tăng tốc là máy sẽ mạnh hơn",
            right: "Phần mềm tối ưu chỉ có thể dọn rác, tắt app nền, quản lý tài nguyên. Nó không biến CPU yếu thành CPU mạnh hay RAM 4GB thành 16GB thật.",
        },
        {
            wrong: "Máy mạnh thì người dùng không cần biết gì",
            right: "Người dùng vẫn cần biết tải phần mềm an toàn, quản lý app khởi động, cập nhật driver, sao lưu dữ liệu và vệ sinh máy.",
        },
        {
            wrong: "Phần mềm nào cũng chạy được trên mọi máy",
            right: "Mỗi phần mềm có yêu cầu hệ thống. Game nặng, dựng video, AI local, máy ảo đều cần cấu hình phù hợp.",
        },
    ];

    const tips = [
        "Trước khi cài phần mềm nặng, kiểm tra System Requirements.",
        "Khi máy chậm, kiểm tra HDD/SSD → RAM → CPU/GPU tải cao → app chạy nền → nhiệt độ.",
        "Cài driver chính hãng từ hãng laptop, mainboard, GPU hoặc qua Windows Update đáng tin cậy.",
        "Cấu hình cân bằng thường tốt hơn một linh kiện thật mạnh nhưng các phần khác yếu.",
        "Sao lưu dữ liệu quan trọng trước khi cài lại Windows, nâng ổ cứng hoặc chỉnh phân vùng.",
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
                        <ShieldCheck /> Mẹo vận hành máy ổn định
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
                            Công thức cân bằng:
                        </strong>{" "}
                        CPU ổn + RAM đủ + SSD nhanh + phần mềm sạch + người dùng
                        biết quản lý.
                    </div>
                </div>
            </div>
        </section>
    );
}

function BalancedSystemLab() {
    const profiles = {
        balanced: {
            icon: <CheckCircle2 />,
            title: "Hệ thống cân bằng",
            config: [
                "CPU tầm trung hiện đại",
                "RAM 16GB",
                "SSD NVMe",
                "Driver đầy đủ",
                "Ít app rác",
                "Người dùng sao lưu định kỳ",
            ],
            result: "Trải nghiệm ổn định, mở app nhanh, ít lỗi và dễ bảo trì.",
            color: "emerald",
        },
        unbalanced: {
            icon: <AlertTriangle />,
            title: "Hệ thống lệch cấu hình",
            config: [
                "CPU mạnh",
                "RAM 4GB",
                "HDD cũ",
                "Nhiều app chạy nền",
                "Driver thiếu",
                "Không vệ sinh máy",
            ],
            result: "Máy vẫn có thể chậm, nóng, lỗi thiết bị hoặc phản hồi kém dù CPU mạnh.",
            color: "red",
        },
        missing: {
            icon: <XCircle />,
            title: "Thiếu phần cứng cần thiết",
            config: [
                "CPU i5-12400F",
                "Không có GPU rời",
                "Màn hình cắm vào mainboard",
                "Windows đã cài",
                "Driver đầy đủ",
            ],
            result: "Máy có thể không xuất hình vì phần mềm không thay thế được phần cứng bị thiếu.",
            color: "orange",
        },
    };

    const [active, setActive] = useState("balanced");
    const item = profiles[active];

    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: cấu hình cân bằng hay lệch?"
                icon={<Sparkles />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {Object.entries(profiles).map(([key, p]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 text-left border transition-all ${active === key ? `${softBorder(p.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(p.icon, { size: 20 })}{" "}
                                {p.title}
                            </div>
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-14 h-14 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(item.icon, { size: 28 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                            {item.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {item.result}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {item.config.map((c) => (
                            <div
                                key={c}
                                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-start gap-3 text-sm text-slate-300"
                            >
                                <CheckCircle2
                                    className={`${item.color === "red" ? "text-red-300" : item.color === "orange" ? "text-orange-300" : "text-blue-300"} shrink-0 mt-0.5`}
                                    size={18}
                                />
                                <span>{c}</span>
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
                        <span className="bg-emerald-500/20 text-emerald-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-emerald-300 border border-slate-800 shadow-inner space-y-2">
                            <p>HỆ THỐNG MÁY TÍNH = 3 YẾU TỐ</p>
                            <p className="text-slate-300">
                                Hardware: nền tảng vật lý
                            </p>
                            <p className="text-slate-300">
                                Software: hướng dẫn/điều khiển
                            </p>
                            <p className="text-slate-300">
                                User: ra lệnh và quản lý
                            </p>
                            <br />
                            <p className="text-slate-500"># Luồng xử lý</p>
                            <p className="text-slate-300">
                                User ra lệnh → Software phiên dịch
                            </p>
                            <p className="text-slate-300">
                                → Hardware thực hiện → Software hiển thị kết quả
                            </p>
                            <br />
                            <p className="text-slate-500"># Khi máy chậm</p>
                            <p className="text-slate-300">
                                Đừng chỉ đổ lỗi phần cứng. Kiểm tra cả phần mềm
                                và cách dùng.
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
        question: "Trong hệ thống máy tính, phần mềm có vai trò chính là gì?",
        options: [
            "Cấp điện cho máy tính",
            "Điều khiển phần cứng và cung cấp chức năng cho người dùng",
            "Làm mát CPU",
            "Thay thế RAM khi máy thiếu RAM",
        ],
        correct: 1,
        explanation:
            "Phần mềm điều khiển phần cứng, cung cấp giao diện và chức năng để người dùng làm việc với máy tính.",
    },
    {
        question: "Driver là gì?",
        options: [
            "Một loại ổ cứng",
            "Một loại màn hình",
            "Phần mềm giúp hệ điều hành giao tiếp với phần cứng",
            "Một loại dây nguồn",
        ],
        correct: 2,
        explanation:
            "Driver giúp hệ điều hành hiểu và điều khiển đúng thiết bị như GPU, WiFi, âm thanh, máy in.",
    },
    {
        question: "Máy tính chậm có thể do nguyên nhân nào?",
        options: [
            "RAM thiếu",
            "Ổ cứng HDD chậm",
            "Cài quá nhiều phần mềm chạy nền",
            "Tất cả các đáp án trên",
        ],
        correct: 3,
        explanation:
            "Máy chậm có thể đến từ phần cứng, phần mềm hoặc cách người dùng quản lý máy.",
    },
    {
        question: "System Requirements cho biết điều gì?",
        options: [
            "Màu sắc của phần mềm",
            "Yêu cầu phần cứng tối thiểu/khuyến nghị để chạy phần mềm",
            "Tên người dùng Windows",
            "Loại dây sạc",
        ],
        correct: 1,
        explanation:
            "System Requirements giúp biết phần mềm cần CPU, RAM, GPU, dung lượng và hệ điều hành nào để chạy ổn.",
    },
    {
        question: "Phần mềm tăng tốc có thể làm gì?",
        options: [
            "Biến CPU yếu thành CPU mạnh",
            "Biến RAM 4GB thành 16GB thật",
            "Dọn rác/tắt app nền/quản lý tài nguyên ở mức nhất định",
            "Thay thế card đồ họa rời",
        ],
        correct: 2,
        explanation:
            "Phần mềm tối ưu chỉ giúp quản lý tài nguyên tốt hơn; nó không thay thế được phần cứng bị thiếu hoặc quá yếu.",
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
                    <strong className="text-emerald-400">
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
                <span className="text-emerald-400">
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
                        className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors"
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
                Sau khi hiểu mối quan hệ giữa phần cứng, phần mềm và người dùng,
                bước tiếp theo là nhìn lại lịch sử phát triển phần cứng máy
                tính.
            </p>
            <Link
                to="/phan-1-5"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
            >
                Bài tiếp theo: 1.5 — Lịch sử phát triển phần cứng máy tính{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "emerald" }) {
    const colorMap = {
        emerald: "bg-emerald-500/20 text-emerald-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        orange: "bg-orange-500/20 text-orange-300",
        purple: "bg-purple-500/20 text-purple-300",
        blue: "bg-blue-500/20 text-blue-300",
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

function HeroLayer({ icon, label, desc, color, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 flex items-center gap-4 ${highlight ? "bg-emerald-500/10 border-emerald-400/50" : softBorder(color)}`}
        >
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center shrink-0`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <div>
                <h4 className="font-extrabold text-white">{label}</h4>
                <p className="text-xs text-slate-400 mt-1">{desc}</p>
            </div>
        </div>
    );
}

function InfoRow({ label, value }) {
    return (
        <div className="py-3 border-b border-slate-800 last:border-b-0">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                {label}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">{value}</p>
        </div>
    );
}

function badgeColor(color) {
    const map = {
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        violet: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.emerald;
}

function softBorder(color) {
    const map = {
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.emerald;
}

function textColor(color) {
    const map = {
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        blue: "text-blue-300",
        red: "text-red-300",
    };
    return map[color] || "text-emerald-300";
}
