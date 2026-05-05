import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    Cloud,
    Cpu,
    Database,
    Gauge,
    Gamepad2,
    HardDrive,
    Laptop,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    PackageCheck,
    Puzzle,
    Search,
    Server,
    Settings,
    ShieldCheck,
    Timer,
    Usb,
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
                            <HardDrive className="text-orange-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 4: Bộ lưu trữ — Storage
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                        Bài 4.1
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <DeskCabinetAnalogy />
                <ReadWriteFlow />
                <StorageTypeExplorer />
                <SpecsExplorer />
                <CapacityGuide />
                <RealExamples />
                <StoragePickerLab />
                <BackupSection />
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
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-orange-300">
                        <BookOpen size={16} /> Phần 4: Bộ lưu trữ — Storage
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Tổng quan về
                        <span className="block text-orange-400">
                            thiết bị lưu trữ
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Thiết bị lưu trữ là nơi chứa Windows, phần mềm, game,
                        ảnh, video và dữ liệu lâu dài. Ổ lưu trữ quyết định mạnh
                        đến tốc độ mở máy, mở app, copy file và load game.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<HardDrive size={16} />}
                            text="HDD / SATA SSD"
                        />
                        <Tag icon={<Zap size={16} />} text="NVMe SSD" />
                        <Tag icon={<Usb size={16} />} text="USB / SD" />
                        <Tag icon={<Server size={16} />} text="NAS" />
                        <Tag icon={<Cloud size={16} />} text="Cloud" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="space-y-3">
                        <HeroCard
                            icon={<MemoryStick />}
                            label="RAM"
                            desc="Dữ liệu đang chạy, tắt máy là mất"
                            color="emerald"
                        />
                        <HeroCard
                            icon={<HardDrive />}
                            label="Storage"
                            desc="Dữ liệu lâu dài, tắt máy vẫn còn"
                            color="orange"
                            highlight
                        />
                        <HeroCard
                            icon={<Cpu />}
                            label="CPU"
                            desc="Xử lý dữ liệu đã nạp vào RAM"
                            color="cyan"
                        />
                        <HeroCard
                            icon={<Monitor />}
                            label="Màn hình"
                            desc="Hiển thị kết quả cho người dùng"
                            color="purple"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Mở Word</p>
                        <p>SSD/HDD → RAM → CPU</p>
                        <p className="text-orange-300">
                            Ctrl + S → ghi lại xuống SSD/HDD
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu thiết bị lưu trữ là gì và khác RAM như thế nào.",
        "Nắm luồng đọc dữ liệu khi mở app và luồng ghi dữ liệu khi bấm Save.",
        "Phân biệt HDD, SATA SSD, NVMe SSD, USB, thẻ nhớ, ổ ngoài, NAS và Cloud.",
        "Biết các thông số quan trọng: dung lượng, sequential read/write, random read/write, giao tiếp, form factor, TBW.",
        "Chọn đúng loại lưu trữ cho học tập, gaming, dựng video, backup và máy cũ.",
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
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-orange-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-300 flex items-center justify-center font-bold mb-4">
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

function CoreConcept() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: thiết bị lưu trữ là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">
                                Thiết bị lưu trữ
                            </strong>{" "}
                            là phần cứng dùng để lưu dữ liệu lâu dài, kể cả khi
                            bạn tắt máy.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-cyan-300">Ví dụ:</strong>{" "}
                            Windows nằm trong SSD/HDD, game nằm trong SSD/HDD,
                            ảnh/video/file Word nằm trong SSD/HDD/USB/NAS/Cloud.
                        </div>
                        <p>
                            Storage càng nhanh thì máy thường mở Windows, mở
                            app, load game và copy file nhanh hơn. Nhưng SSD
                            nhanh không thay thế được RAM nếu bạn mở quá nhiều
                            ứng dụng cùng lúc.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <MemoryStick className="text-emerald-300" /> RAM vs
                            Storage
                        </h3>
                        <div className="space-y-3">
                            <CompareCard
                                label="RAM"
                                role="Chứa dữ liệu chương trình đang chạy tạm thời"
                                power="Tắt máy là mất"
                                color="emerald"
                            />
                            <CompareCard
                                label="Thiết bị lưu trữ"
                                role="Lưu hệ điều hành, phần mềm, file cá nhân lâu dài"
                                power="Tắt máy vẫn giữ"
                                color="orange"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function DeskCabinetAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="emerald"
                title="Ví dụ đời thường: mặt bàn và tủ tài liệu"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                    <AnalogyCard
                        icon={<MemoryStick />}
                        title="RAM = mặt bàn"
                        desc="Đặt dữ liệu chương trình đang chạy để CPU dùng nhanh. Tắt máy là mất nếu chưa lưu."
                        color="emerald"
                    />
                    <AnalogyCard
                        icon={<HardDrive />}
                        title="SSD/HDD = tủ tài liệu"
                        desc="Lưu Windows, phần mềm, game, ảnh, video và file lâu dài."
                        color="orange"
                    />
                    <AnalogyCard
                        icon={<Cpu />}
                        title="CPU = người làm việc"
                        desc="Xử lý dữ liệu đã được lấy từ tủ và đặt lên bàn làm việc."
                        color="cyan"
                    />
                </div>
            </div>
        </section>
    );
}

function ReadWriteFlow() {
    const flows = {
        open: {
            title: "Khi mở phần mềm",
            color: "cyan",
            steps: [
                {
                    icon: <Search />,
                    title: "Bạn bấm mở app",
                    desc: "Ví dụ double-click Word, Chrome hoặc game.",
                },
                {
                    icon: <HardDrive />,
                    title: "Hệ điều hành tìm file",
                    desc: "File chương trình nằm trong SSD/HDD.",
                },
                {
                    icon: <MemoryStick />,
                    title: "Nạp dữ liệu vào RAM",
                    desc: "Dữ liệu cần chạy được đưa lên RAM.",
                },
                {
                    icon: <Cpu />,
                    title: "CPU xử lý",
                    desc: "CPU xử lý lệnh và phối hợp với GPU/màn hình.",
                },
                {
                    icon: <Monitor />,
                    title: "Hiển thị kết quả",
                    desc: "Cửa sổ app/game hiện lên màn hình.",
                },
            ],
        },
        save: {
            title: "Khi lưu file",
            color: "orange",
            steps: [
                {
                    icon: <KeyboardIcon />,
                    title: "Bạn bấm Ctrl + S",
                    desc: "Ứng dụng yêu cầu lưu thay đổi.",
                },
                {
                    icon: <MemoryStick />,
                    title: "Dữ liệu đang ở RAM",
                    desc: "Nội dung đang sửa nằm tạm trong RAM.",
                },
                {
                    icon: <Workflow />,
                    title: "Hệ điều hành ghi dữ liệu",
                    desc: "OS chuyển yêu cầu ghi xuống ổ lưu trữ.",
                },
                {
                    icon: <HardDrive />,
                    title: "SSD/HDD lưu lâu dài",
                    desc: "File được ghi lại để tắt máy vẫn còn.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("open");
    const [active, setActive] = useState(0);
    const flow = flows[mode];
    const step = flow.steps[active % flow.steps.length];
    const switchMode = (m) => {
        setMode(m);
        setActive(0);
    };

    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Dữ liệu được đọc và ghi như thế nào?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-3 mb-6">
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
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[300px] flex flex-col justify-between">
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

function KeyboardIcon(props) {
    return <Settings {...props} />;
}

function StorageTypeExplorer() {
    const types = {
        hdd: {
            icon: <HardDrive />,
            title: "HDD",
            desc: "Ổ cứng cơ học dùng đĩa từ quay.",
            good: "Dung lượng lớn, giá/GB rẻ",
            bad: "Chậm, dễ ảnh hưởng bởi va đập, có tiếng ồn",
            fit: "Lưu phim, ảnh, backup, dữ liệu lớn",
            color: "orange",
        },
        sata: {
            icon: <HardDrive />,
            title: "SATA SSD",
            desc: "SSD dùng giao tiếp SATA.",
            good: "Nhanh hơn HDD rất nhiều, dễ nâng cấp máy cũ",
            bad: "Bị giới hạn bởi tốc độ SATA",
            fit: "Cài Windows, nâng laptop/PC cũ",
            color: "cyan",
        },
        nvme: {
            icon: <Zap />,
            title: "NVMe SSD",
            desc: "SSD dùng PCIe/NVMe, thường dạng M.2.",
            good: "Rất nhanh, nhỏ gọn, độ trễ thấp",
            bad: "Cần main/laptop hỗ trợ",
            fit: "Windows, game, đồ họa, lập trình",
            color: "emerald",
        },
        usb: {
            icon: <Usb />,
            title: "USB Flash Drive",
            desc: "Thiết bị lưu trữ gắn ngoài qua USB.",
            good: "Nhỏ, tiện mang đi",
            bad: "Tốc độ và độ bền tùy loại",
            fit: "Chép file, cài Windows, cứu hộ",
            color: "blue",
        },
        sd: {
            icon: <Database />,
            title: "SD / microSD",
            desc: "Thẻ nhớ cho camera, điện thoại, handheld gaming.",
            good: "Nhỏ, tiện",
            bad: "Dễ mua nhầm loại chậm/giả",
            fit: "Camera, điện thoại, Steam Deck, máy ảnh",
            color: "purple",
        },
        external: {
            icon: <HardDrive />,
            title: "External HDD/SSD",
            desc: "Ổ gắn ngoài qua USB/Thunderbolt.",
            good: "Dễ backup, mang theo được",
            bad: "Phụ thuộc cổng, dễ rơi rớt",
            fit: "Sao lưu, chuyển dữ liệu",
            color: "pink",
        },
        nas: {
            icon: <Server />,
            title: "NAS",
            desc: "Thiết bị lưu trữ mạng nội bộ.",
            good: "Chia sẻ file nhiều máy, backup tốt",
            bad: "Chi phí cao hơn, cần cấu hình",
            fit: "Gia đình, văn phòng, media server",
            color: "yellow",
        },
        cloud: {
            icon: <Cloud />,
            title: "Cloud Storage",
            desc: "Lưu trữ trên Internet.",
            good: "Truy cập mọi nơi, dễ chia sẻ",
            bad: "Phụ thuộc mạng, có phí theo tháng",
            fit: "Google Drive, OneDrive, iCloud, Dropbox",
            color: "cyan",
        },
    };
    const [active, setActive] = useState("nvme");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Các loại thiết bị lưu trữ phổ biến"
                icon={<Layers3 />}
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
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className={`${textColor(item.color)} font-semibold`}>
                            {item.desc}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-3">
                        <InfoCard
                            label="Ưu điểm"
                            value={item.good}
                            color="emerald"
                        />
                        <InfoCard
                            label="Nhược điểm"
                            value={item.bad}
                            color="orange"
                        />
                        <InfoCard
                            label="Phù hợp"
                            value={item.fit}
                            color="blue"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        capacity: {
            icon: <Database />,
            title: "Dung lượng GB/TB",
            detail: "Cho biết ổ chứa được bao nhiêu dữ liệu.",
            impact: "500GB đủ cơ bản, 1TB nên chọn cho đa số người dùng, 2TB+ hợp gaming/project lớn, 4TB+ hợp lưu trữ/backup.",
        },
        sequential: {
            icon: <Gauge />,
            title: "Sequential Read/Write",
            detail: "Tốc độ đọc/ghi file lớn liên tục, ví dụ copy video 10GB.",
            impact: "HDD khoảng 100–250 MB/s; SATA SSD khoảng 500–560 MB/s; NVMe PCIe 4.0 thường vài nghìn MB/s.",
        },
        random: {
            icon: <Timer />,
            title: "Random Read/Write",
            detail: "Tốc độ đọc/ghi nhiều file nhỏ rải rác.",
            impact: "Rất quan trọng khi mở Windows, mở app, load nhiều file nhỏ, database và máy ảo.",
        },
        interface: {
            icon: <Zap />,
            title: "Giao tiếp",
            detail: "SATA, NVMe qua PCIe, USB, Thunderbolt/USB4, Ethernet/Wi-Fi.",
            impact: "Giao tiếp quyết định trần tốc độ và độ trễ của ổ.",
        },
        form: {
            icon: <Puzzle />,
            title: "Form factor",
            detail: "3.5 inch, 2.5 inch, M.2 2280, M.2 2230, external drive.",
            impact: "M.2 2280 nghĩa là 22mm rộng, 80mm dài; laptop nhỏ có thể cần M.2 2230.",
        },
        durability: {
            icon: <ShieldCheck />,
            title: "Độ bền",
            detail: "SSD xem TBW, bảo hành; HDD xem RPM, cache, độ ồn, độ rung, mục đích sử dụng.",
            impact: "TBW cao hợp công việc ghi nhiều như video, database, cache project.",
        },
    };
    const [active, setActive] = useState("random");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="yellow"
                title="Thông số kỹ thuật quan trọng"
                icon={<Settings />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
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

function CapacityGuide() {
    const rows = [
        ["256GB", "Rất cơ bản, dễ thiếu", "Chỉ nên dùng nếu nhu cầu rất nhẹ"],
        ["500GB", "Cài Windows + phần mềm + ít dữ liệu", "Ổn cho học tập nhẹ"],
        ["1TB", "Mức nên chọn cho đa số người dùng hiện nay", "Cân bằng nhất"],
        [
            "2TB",
            "Gaming, học tập lâu dài, lưu nhiều project",
            "Tốt cho game/project lớn",
        ],
        ["4TB+", "Video, ảnh, backup, dữ liệu lớn", "Có thể kết hợp HDD/NAS"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="emerald"
                title="Chọn dung lượng lưu trữ"
                icon={<Database />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[720px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Dung lượng</th>
                            <th className="p-4">Phù hợp với</th>
                            <th className="p-4">Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([cap, fit, note]) => (
                            <tr key={cap} className="border-t border-slate-800">
                                <td className="p-4 text-emerald-300 font-extrabold">
                                    {cap}
                                </td>
                                <td className="p-4 text-slate-300">{fit}</td>
                                <td className="p-4 text-slate-300">{note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300 text-center">
                Học tập: 500GB–1TB SSD • Gaming: 1TB–2TB SSD • Video/ảnh nhiều:
                SSD 1TB–2TB + HDD/NAS backup
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <HardDrive />,
            title: "Nâng máy cũ từ HDD lên SATA SSD",
            subtitle: "Crucial MX500 1TB SATA SSD",
            color: "cyan",
            points: [
                "Dung lượng 1TB",
                "Giao tiếp SATA",
                "Đọc/ghi tuần tự khoảng 560/510 MB/s",
                "Dễ nâng laptop/PC cũ",
                "Mở Windows/app nhanh hơn HDD rõ rệt",
            ],
            lesson: "Nếu máy còn dùng HDD làm ổ Windows, nâng lên SATA SSD thường là nâng cấp đáng tiền nhất.",
        },
        {
            icon: <Zap />,
            title: "Build PC mới với NVMe SSD",
            subtitle: "Samsung 990 EVO Plus 1TB NVMe",
            color: "emerald",
            points: [
                "Dạng M.2 NVMe",
                "Tốc độ đọc/ghi tuần tự rất cao",
                "Hợp PC/laptop đời mới",
                "Tốt cho Windows, game, Docker, máy ảo",
                "Main PCIe 3.0 có thể giới hạn tốc độ SSD PCIe 4.0/5.0",
            ],
            lesson: "NVMe rất phù hợp cho máy mới, nhưng phải kiểm tra mainboard/laptop hỗ trợ PCIe và kích thước M.2 nào.",
        },
        {
            icon: <HardDrive />,
            title: "HDD dung lượng lớn để lưu dữ liệu",
            subtitle: "Seagate BarraCuda 2TB 3.5 inch",
            color: "orange",
            points: [
                "SATA 6Gb/s",
                "7200 RPM",
                "Cache 256MB",
                "Giá/GB rẻ",
                "Phù hợp phim, ảnh, backup, project cũ",
            ],
            lesson: "SSD để cài Windows/app/game đang chơi; HDD 2TB–4TB để lưu dữ liệu lớn và backup.",
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
                                <Bullet key={p} text={p} />
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

function StoragePickerLab() {
    const scenarios = {
        old: {
            icon: <Laptop />,
            title: "Laptop/PC cũ còn HDD",
            answer: "Ưu tiên nâng lên SATA SSD trước. Đây thường là nâng cấp tạo cảm giác máy hồi sinh rõ nhất nếu RAM chưa quá thiếu.",
            color: "cyan",
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Gaming",
            answer: "Chọn SSD tối thiểu 1TB, tốt hơn 2TB nếu chơi nhiều game lớn. NVMe phù hợp nếu máy hỗ trợ.",
            color: "emerald",
        },
        creator: {
            icon: <Monitor />,
            title: "Dựng video / ảnh nhiều",
            answer: "Dùng NVMe SSD 1TB–2TB cho Windows/app/project đang làm, thêm HDD/NAS/ổ ngoài để backup dữ liệu lâu dài.",
            color: "purple",
        },
        backup: {
            icon: <ShieldCheck />,
            title: "Backup dữ liệu",
            answer: "Dùng ổ ngoài/HDD/NAS/Cloud. Dữ liệu quan trọng nên có ít nhất 2 bản, một bản trong máy và một bản ngoài máy hoặc cloud.",
            color: "orange",
        },
        portable: {
            icon: <Usb />,
            title: "Chuyển file / cứu hộ",
            answer: "USB flash drive tiện cho cài Windows/cứu hộ/chuyển file, nhưng không nên xem là nơi lưu dữ liệu quan trọng duy nhất.",
            color: "blue",
        },
    };
    const [active, setActive] = useState("gaming");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Lab: nên chọn loại lưu trữ nào?"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-5 gap-3 mb-6">
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

function BackupSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="purple"
                title="Backup: ổ tốt không thay thế sao lưu"
                icon={<ShieldCheck />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                    <AnalogyCard
                        icon={<HardDrive />}
                        title="Bản trong máy"
                        desc="Dữ liệu làm việc hằng ngày trên SSD/HDD chính."
                        color="orange"
                    />
                    <AnalogyCard
                        icon={<Usb />}
                        title="Bản ngoài máy"
                        desc="Ổ ngoài hoặc NAS, nên có lúc ngắt kết nối để tránh mã độc mã hóa cùng lúc."
                        color="blue"
                    />
                    <AnalogyCard
                        icon={<Cloud />}
                        title="Bản cloud"
                        desc="Dùng cho tài liệu quan trọng, tiện đồng bộ, nên ưu tiên dịch vụ có version history."
                        color="cyan"
                    />
                </div>
                <div className="mt-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300 text-center">
                    Dữ liệu quan trọng nên có ít nhất 2 bản: một bản trong máy +
                    một bản ở ổ ngoài/NAS/Cloud
                </div>
            </div>
        </section>
    );
}

function CommonMistakes() {
    const mistakes = [
        {
            wrong: "Dung lượng càng lớn thì ổ càng nhanh",
            right: "Dung lượng và tốc độ là hai chuyện khác nhau. HDD 4TB vẫn có thể chậm hơn SSD 500GB rất nhiều.",
        },
        {
            wrong: "SSD nào cũng giống nhau",
            right: "SSD có SATA, NVMe PCIe 3.0/4.0/5.0, DRAM/DRAM-less, TLC/QLC, có hoặc không heatsink.",
        },
        {
            wrong: "Có SSD rồi không cần backup",
            right: "SSD vẫn có thể hỏng, bị xóa nhầm, nhiễm mã độc hoặc lỗi hệ điều hành. Backup mới bảo vệ dữ liệu.",
        },
        {
            wrong: "M.2 luôn luôn là NVMe",
            right: "M.2 là dạng khe/kích thước. Có M.2 SATA SSD và M.2 NVMe SSD.",
        },
        {
            wrong: "Ổ cứng gắn ngoài là backup tuyệt đối an toàn",
            right: "Nếu luôn cắm vào máy, mã độc có thể ảnh hưởng cả ổ ngoài. Nên có bản ngắt kết nối hoặc cloud có version history.",
        },
    ];
    const tips = [
        "Nếu máy còn dùng HDD làm ổ Windows, hãy nâng lên SSD trước nếu RAM chưa quá thiếu.",
        "Máy mới nên chọn tối thiểu 1TB SSD nếu ngân sách cho phép.",
        "Tách vai trò: NVMe cho Windows/app/game/project; HDD/NAS/ổ ngoài cho lưu trữ lâu dài; cloud cho tài liệu quan trọng.",
        "Khi mua NVMe, kiểm tra mainboard hỗ trợ PCIe mấy và M.2 kích thước nào.",
        "Dữ liệu quan trọng phải backup, không chỉ lưu trong một ổ tốt.",
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
                        <Lightbulb /> Mẹo chọn storage
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
                            12
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
                            <p>STORAGE = lưu dữ liệu lâu dài</p>
                            <p className="text-slate-300">
                                RAM = dữ liệu đang chạy, tắt máy là mất
                            </p>
                            <p className="text-slate-300">
                                SSD/HDD = hệ điều hành, app, game, file, tắt máy
                                vẫn còn
                            </p>
                            <br />
                            <p className="text-slate-500"># Chọn nhanh</p>
                            <p className="text-slate-300">
                                HDD = rẻ, nhiều dung lượng, chậm
                            </p>
                            <p className="text-slate-300">
                                SATA SSD = nhanh hơn HDD, hợp máy cũ
                            </p>
                            <p className="text-slate-300">
                                NVMe SSD = rất nhanh, hợp máy mới
                            </p>
                            <p className="text-slate-300">
                                NAS/Cloud = lưu trữ và sao lưu qua mạng
                            </p>
                            <br />
                            <p className="text-red-300">
                                Ổ tốt vẫn cần backup.
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
        question: "Thiết bị lưu trữ khác RAM ở điểm nào?",
        options: [
            "Thiết bị lưu trữ mất dữ liệu khi tắt máy",
            "Thiết bị lưu trữ giữ dữ liệu lâu dài sau khi tắt máy",
            "RAM dùng để lưu phim lâu dài",
            "RAM chậm hơn HDD",
        ],
        correct: 1,
        explanation:
            "Thiết bị lưu trữ như SSD/HDD giữ dữ liệu lâu dài, còn RAM chứa dữ liệu tạm thời và tắt máy là mất.",
    },
    {
        question:
            "Loại ổ nào thường phù hợp nhất để cài Windows trên máy hiện đại?",
        options: [
            "HDD 5400 RPM",
            "Đĩa DVD",
            "SSD, ưu tiên NVMe nếu máy hỗ trợ",
            "USB 2.0",
        ],
        correct: 2,
        explanation:
            "Máy hiện đại nên cài Windows trên SSD, ưu tiên NVMe nếu nền tảng hỗ trợ để boot và mở app nhanh hơn.",
    },
    {
        question: "M.2 có nghĩa chắc chắn là NVMe không?",
        options: [
            "Có, cứ M.2 là NVMe",
            "Không, M.2 là dạng khe/kích thước; có thể là SATA hoặc NVMe",
            "M.2 chỉ dùng cho RAM",
            "M.2 chỉ dùng cho màn hình",
        ],
        correct: 1,
        explanation:
            "M.2 là form factor/khe vật lý. Có M.2 SATA SSD và M.2 NVMe SSD.",
    },
    {
        question: "Thông số Random Read/Write quan trọng trong tình huống nào?",
        options: [
            "Mở Windows và mở nhiều file nhỏ",
            "Chọn màu case",
            "Điều chỉnh độ sáng màn hình",
            "Gắn loa ngoài",
        ],
        correct: 0,
        explanation:
            "Mở Windows, app, database và máy ảo thường liên quan nhiều đến đọc/ghi ngẫu nhiên nhiều file nhỏ.",
    },
    {
        question: "Backup tốt nên hiểu thế nào?",
        options: [
            "Chỉ cần một ổ SSD xịn",
            "Dữ liệu quan trọng nên có thêm bản ngoài máy hoặc cloud",
            "Copy vào cùng thư mục là đủ",
            "Chỉ cần đổi tên file",
        ],
        correct: 1,
        explanation:
            "Ổ tốt vẫn có thể hỏng hoặc mất dữ liệu. Nên có bản backup ở ổ ngoài/NAS/cloud, tốt nhất có lúc ngắt kết nối hoặc có version history.",
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
                Bạn đã hiểu tổng quan thiết bị lưu trữ. Tiếp theo là HDD — nền
                tảng giúp bạn hiểu vì sao HDD rẻ, dung lượng lớn nhưng chậm hơn
                SSD và dễ bị ảnh hưởng bởi va đập.
            </p>
            <Link
                to="/phan-4-2"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20"
            >
                Bài tiếp theo: 4.2 — HDD: Ổ đĩa cứng cơ học{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "orange" }) {
    const colorMap = {
        orange: "bg-orange-500/20 text-orange-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
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

function HeroCard({ icon, label, desc, color, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 flex items-center gap-4 ${highlight ? "bg-orange-500/10 border-orange-400/50" : softBorder(color)}`}
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

function CompareCard({ label, role, power, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-4`}>
            <p className={`${textColor(color)} font-extrabold`}>{label}</p>
            <p className="text-sm text-slate-300 mt-1">{role}</p>
            <p className="text-xs text-slate-500 mt-1">{power}</p>
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
            <p className="text-white font-bold leading-relaxed">{value}</p>
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
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
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
        orange: "bg-orange-500/5 border-orange-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
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
        orange: "text-orange-300",
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-orange-300";
}
