import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BookOpen,
    Brain,
    Camera,
    CheckCircle2,
    ChevronRight,
    Cpu,
    Database,
    Gauge,
    Gamepad2,
    HardDrive,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    PackageCheck,
    Puzzle,
    Search,
    Settings,
    ShieldCheck,
    Smartphone,
    Usb,
    Video,
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
                            <Usb className="text-cyan-400" size={24} />
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
                    <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                        Bài 4.6
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <PocketAnalogy />
                <FlashFlowSimulator />
                <UsbTypeExplorer />
                <SdCardExplorer />
                <SpeedClassGuide />
                <SpecsExplorer />
                <RealExamples />
                <PickerLab />
                <FakeAndSafetyGuide />
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
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
                        <BookOpen size={16} /> Phần 4: Bộ lưu trữ — Storage
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        USB Flash Drive
                        <span className="block text-cyan-400">
                            và thẻ nhớ SD Card
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        USB và thẻ nhớ đều nhỏ, tiện và rẻ, nhưng tốc độ ghi, độ
                        bền, chuẩn USB, class video, A1/A2 và Endurance quyết
                        định chúng có dùng tốt cho Windows boot, quay 4K, camera
                        hành trình hay handheld gaming không.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Usb size={16} />} text="USB-A / USB-C" />
                        <Tag
                            icon={<MemoryStick size={16} />}
                            text="SD / microSD"
                        />
                        <Tag icon={<Video size={16} />} text="U3 / V30 / V60" />
                        <Tag icon={<Gamepad2 size={16} />} text="A1 / A2" />
                        <Tag
                            icon={<ShieldCheck size={16} />}
                            text="Endurance & fake test"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Usb />}
                            label="USB Flash"
                            desc="Cài Windows, copy file, cứu hộ"
                            color="cyan"
                            highlight
                        />
                        <HeroTile
                            icon={<MemoryStick />}
                            label="SD / microSD"
                            desc="Camera, điện thoại, máy ảnh"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<Gauge />}
                            label="Write Speed"
                            desc="Quan trọng khi copy/quay video"
                            color="orange"
                        />
                        <HeroTile
                            icon={<ShieldCheck />}
                            label="Endurance"
                            desc="Ghi vòng lặp liên tục"
                            color="purple"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Ghi nhớ</p>
                        <p>Đọc nhanh ≠ ghi nhanh</p>
                        <p className="text-cyan-300">
                            Dung lượng thật + tốc độ ghi + đúng chuẩn thiết bị
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu USB Flash Drive, SD Card và microSD Card dùng chip nhớ flash như thế nào.",
        "Phân biệt USB-A, USB-C, Dual USB, SD, microSD, SDHC, SDXC và SDUC.",
        "Đọc đúng Class 10, U1, U3, V30, V60, V90 và chọn đúng cho quay video.",
        "Hiểu USB 2.0, USB 3.x, USB4, UHS-I/II/III, A1/A2 và Endurance.",
        "Biết cách tránh hàng giả, test dung lượng thật và eject an toàn để giảm lỗi dữ liệu.",
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
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center font-bold mb-4">
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
    const rows = [
        [
            "USB Flash Drive",
            "Chép file, cài Windows, cứu hộ máy",
            "Nhỏ, tiện, cắm nhiều máy",
            "Tốc độ/độ bền khác rất nhiều",
            "cyan",
        ],
        [
            "SD Card",
            "Máy ảnh, camera, máy quay",
            "Phổ biến trong thiết bị hình ảnh",
            "Cần chọn đúng tốc độ ghi",
            "emerald",
        ],
        [
            "microSD Card",
            "Điện thoại, drone, camera, handheld gaming",
            "Rất nhỏ, dung lượng cao",
            "Dễ mua nhầm hàng giả/hàng chậm",
            "purple",
        ],
        [
            "SSD gắn ngoài",
            "Lưu trữ di động tốc độ cao",
            "Nhanh, bền hơn USB thường",
            "Đắt và to hơn USB",
            "orange",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="emerald"
                title="Khái niệm cốt lõi: USB Flash Drive và SD Card là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">USB Flash Drive</strong> là
                    thiết bị lưu trữ di động dùng chip nhớ flash, cắm qua USB-A
                    hoặc USB-C.{" "}
                    <strong className="text-white">SD/microSD Card</strong> cũng
                    dùng flash memory, nhưng được thiết kế cho camera, điện
                    thoại, máy ảnh, drone, máy chơi game cầm tay và thiết bị
                    nhúng.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {rows.map(([name, role, good, bad, color]) => (
                        <div
                            key={name}
                            className={`${softBorder(color)} border rounded-3xl p-5`}
                        >
                            <h3
                                className={`font-extrabold text-lg mb-2 ${textColor(color)}`}
                            >
                                {name}
                            </h3>
                            <p className="text-sm text-slate-300 mb-3">
                                {role}
                            </p>
                            <p className="text-xs text-emerald-300 mb-1">
                                ✓ {good}
                            </p>
                            <p className="text-xs text-orange-300">⚠ {bad}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-emerald-300">Điểm cần nhớ:</strong>{" "}
                    USB/thẻ nhớ cũng dùng flash memory, nhưng không phải lúc nào
                    cũng nhanh và bền như SSD vì controller, số kênh NAND,
                    firmware, cache, wear leveling và tản nhiệt thường đơn giản
                    hơn.
                </div>
            </div>
        </section>
    );
}

function PocketAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: hộp đựng tài liệu bỏ túi"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-4">
                    <AnalogyCard
                        icon={<Usb />}
                        title="USB = hộp nhỏ cắm máy tính"
                        desc="Tiện chép file, tạo bộ cài Windows, cứu hộ hoặc mang tài liệu đi in."
                        color="cyan"
                    />
                    <AnalogyCard
                        icon={<MemoryStick />}
                        title="SD = thẻ cho máy ảnh"
                        desc="Lưu ảnh/video trong máy ảnh, máy quay hoặc laptop có khe SD."
                        color="emerald"
                    />
                    <AnalogyCard
                        icon={<Smartphone />}
                        title="microSD = thẻ siêu nhỏ"
                        desc="Dùng cho điện thoại, drone, camera hành trình, Steam Deck, Switch."
                        color="purple"
                    />
                    <AnalogyCard
                        icon={<HardDrive />}
                        title="SSD ngoài = vali nhanh"
                        desc="To và đắt hơn USB thường, nhưng nhanh và ổn định hơn khi copy dữ liệu lớn."
                        color="orange"
                    />
                </div>
            </div>
        </section>
    );
}

function FlashFlowSimulator() {
    const flows = {
        write: {
            title: "Khi copy file vào USB/thẻ nhớ",
            color: "cyan",
            steps: [
                {
                    icon: <Monitor />,
                    title: "Bạn copy file",
                    desc: "Ví dụ chép video, tài liệu hoặc bộ cài Windows.",
                },
                {
                    icon: <Usb />,
                    title: "Dữ liệu đi qua USB/card reader",
                    desc: "Hệ điều hành gửi dữ liệu qua cổng USB hoặc đầu đọc thẻ.",
                },
                {
                    icon: <Cpu />,
                    title: "Controller nhận dữ liệu",
                    desc: "Controller trong USB/thẻ nhớ quyết định ghi vào chip flash nào.",
                },
                {
                    icon: <Database />,
                    title: "Ghi vào NAND Flash",
                    desc: "Dữ liệu được lưu trong chip nhớ flash, tắt máy vẫn còn.",
                },
                {
                    icon: <ShieldCheck />,
                    title: "Eject an toàn",
                    desc: "Sau khi ghi xong, eject giúp giảm rủi ro file lỗi nếu dữ liệu còn trong cache.",
                },
            ],
        },
        read: {
            title: "Khi mở file từ USB/thẻ nhớ",
            color: "emerald",
            steps: [
                {
                    icon: <Search />,
                    title: "Bạn mở file",
                    desc: "Ví dụ mở ảnh, tài liệu, video hoặc file game.",
                },
                {
                    icon: <Cpu />,
                    title: "Controller tìm dữ liệu",
                    desc: "Controller tra vị trí dữ liệu trong NAND Flash.",
                },
                {
                    icon: <Usb />,
                    title: "Dữ liệu đi qua cổng/đầu đọc",
                    desc: "USB/card reader đưa dữ liệu về máy tính.",
                },
                {
                    icon: <MemoryStick />,
                    title: "Nạp vào RAM",
                    desc: "Máy tính nạp dữ liệu vào RAM để phần mềm sử dụng.",
                },
                {
                    icon: <Monitor />,
                    title: "CPU xử lý và hiển thị",
                    desc: "Bạn thấy file, ảnh, video hoặc bộ cài hoạt động.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("write");
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
                title="USB/thẻ nhớ lưu dữ liệu như thế nào?"
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

function UsbTypeExplorer() {
    const items = {
        usba: {
            icon: <Usb />,
            title: "USB-A",
            port: "Cổng chữ nhật truyền thống",
            good: "Phổ biến, dùng được nhiều PC cũ",
            bad: "Laptop/điện thoại mới có thể không có USB-A",
            fit: "Chép file, cài Windows",
            color: "cyan",
        },
        usbc: {
            icon: <Usb />,
            title: "USB-C",
            port: "Cổng hai chiều",
            good: "Hợp laptop/điện thoại/tablet mới",
            bad: "Máy cũ có thể không có USB-C",
            fit: "MacBook, laptop mới, Android",
            color: "emerald",
        },
        dual: {
            icon: <Puzzle />,
            title: "Dual USB-A + USB-C",
            port: "Hai đầu cắm",
            good: "Linh hoạt giữa máy cũ và mới",
            bad: "Có thể đắt hơn",
            fit: "Người dùng nhiều thiết bị",
            color: "purple",
        },
        secure: {
            icon: <ShieldCheck />,
            title: "USB bảo mật/mã hóa",
            port: "USB-A hoặc USB-C",
            good: "Bảo vệ dữ liệu nhạy cảm",
            bad: "Giá cao",
            fit: "Dữ liệu công việc",
            color: "orange",
        },
        low: {
            icon: <PackageCheck />,
            title: "USB siêu nhỏ",
            port: "Low-profile",
            good: "Cắm lâu ít vướng",
            bad: "Dễ nóng, dễ thất lạc",
            fit: "Mở rộng dung lượng tạm",
            color: "blue",
        },
    };
    const [active, setActive] = useState("dual");
    const item = items[active];
    return (
        <ExplorerSection
            number="5"
            title="Các loại USB Flash Drive"
            icon={<Usb />}
            items={items}
            active={active}
            setActive={setActive}
            item={item}
            fields={["port", "good", "bad", "fit"]}
            labels={["Cổng", "Ưu điểm", "Nhược điểm", "Phù hợp"]}
        />
    );
}

function SdCardExplorer() {
    const items = {
        sd: {
            icon: <MemoryStick />,
            title: "SD Card",
            port: "Kích thước lớn",
            good: "Dễ cầm, phổ biến trong máy ảnh",
            bad: "Không hợp thiết bị cần microSD",
            fit: "Máy ảnh, máy quay, laptop có khe SD",
            color: "emerald",
        },
        microsd: {
            icon: <MemoryStick />,
            title: "microSD Card",
            port: "Kích thước nhỏ",
            good: "Rất nhỏ, dung lượng cao",
            bad: "Dễ thất lạc, dễ mua nhầm hàng giả",
            fit: "Điện thoại, drone, camera, handheld gaming",
            color: "purple",
        },
        sdhc: {
            icon: <Database />,
            title: "SDHC",
            port: "4GB–32GB",
            good: "Hợp thiết bị cũ",
            bad: "Dung lượng thấp",
            fit: "Máy ảnh/thiết bị đời cũ",
            color: "cyan",
        },
        sdxc: {
            icon: <Database />,
            title: "SDXC",
            port: "64GB–2TB",
            good: "Rất phổ biến hiện nay",
            bad: "Thiết bị quá cũ có thể không hỗ trợ",
            fit: "Camera, điện thoại, handheld hiện đại",
            color: "blue",
        },
        sduc: {
            icon: <Database />,
            title: "SDUC",
            port: "Trên 2TB theo chuẩn",
            good: "Hướng tới dung lượng rất cao",
            bad: "Chưa phổ biến với người dùng phổ thông",
            fit: "Thiết bị mới hơn",
            color: "orange",
        },
    };
    const [active, setActive] = useState("sdxc");
    const item = items[active];
    return (
        <ExplorerSection
            number="6"
            title="SD, microSD và các chuẩn dung lượng"
            icon={<MemoryStick />}
            items={items}
            active={active}
            setActive={setActive}
            item={item}
            fields={["port", "good", "bad", "fit"]}
            labels={["Đặc điểm", "Ưu điểm", "Nhược điểm", "Phù hợp"]}
        />
    );
}

function ExplorerSection({
    number,
    title,
    icon,
    items,
    active,
    setActive,
    item,
    fields,
    labels,
}) {
    return (
        <section className="space-y-6">
            <SectionTitle
                number={number}
                color="blue"
                title={title}
                icon={icon}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    {Object.entries(items).map(([key, it]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(it.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(it.icon, { size: 20 })}{" "}
                                {it.title}
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
                            {item[fields[0]]}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-3">
                        {fields.slice(1).map((f, idx) => (
                            <InfoCard
                                key={f}
                                label={labels[idx + 1]}
                                value={item[f]}
                                color={["emerald", "orange", "blue"][idx]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function SpeedClassGuide() {
    const rows = [
        ["Class 10 / C10", "10 MB/s", "Full HD cơ bản, lưu file", "cyan"],
        ["U1", "10 MB/s", "Full HD, tác vụ nhẹ", "blue"],
        ["U3", "30 MB/s", "4K cơ bản, máy ảnh tốt hơn", "emerald"],
        ["V10", "10 MB/s", "Video nhẹ", "cyan"],
        ["V30", "30 MB/s", "4K phổ thông", "emerald"],
        ["V60", "60 MB/s", "Video bitrate cao hơn", "orange"],
        ["V90", "90 MB/s", "Quay chuyên nghiệp, bitrate cao", "purple"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="emerald"
                title="Class tốc độ thẻ nhớ: C10, U3, V30, V60"
                icon={<Gauge />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Ký hiệu</th>
                            <th className="p-4">Tốc độ ghi tối thiểu</th>
                            <th className="p-4">Phù hợp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([name, speed, fit, color]) => (
                            <tr
                                key={name}
                                className="border-t border-slate-800"
                            >
                                <td
                                    className={`p-4 font-extrabold ${textColor(color)}`}
                                >
                                    {name}
                                </td>
                                <td className="p-4 text-white font-mono">
                                    {speed}
                                </td>
                                <td className="p-4 text-slate-300">{fit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                <RuleCard
                    label="Full HD"
                    value="C10/U1 thường đủ cho tác vụ cơ bản."
                    color="cyan"
                />
                <RuleCard
                    label="4K phổ thông"
                    value="Nên chọn U3/V30 trở lên."
                    color="emerald"
                />
                <RuleCard
                    label="Video chuyên nghiệp"
                    value="Xem bitrate máy; có thể cần V60/V90."
                    color="purple"
                />
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        capacity: {
            icon: <Database />,
            title: "Dung lượng",
            detail: "USB boot Windows: 16–32GB. USB copy file: 64–128GB. microSD camera/điện thoại/handheld: 128–512GB.",
            impact: "1TB+ dạng USB/thẻ nhớ có thể tiện, nhưng lưu dữ liệu lớn thường xuyên nên cân nhắc SSD ngoài.",
        },
        usb: {
            icon: <Usb />,
            title: "Chuẩn USB",
            detail: "USB 2.0: 480Mb/s; USB 3.x: 5/10/20Gb/s; USB4/Thunderbolt: 40Gb/s trở lên tùy chuẩn.",
            impact: "Thiết bị nhanh cắm vào cổng USB 2.0 vẫn bị kéo xuống tốc độ USB 2.0.",
        },
        readwrite: {
            icon: <Gauge />,
            title: "Read vs Write",
            detail: "Đọc nhanh là copy từ USB/thẻ ra máy nhanh. Ghi nhanh là copy từ máy vào USB/thẻ nhanh.",
            impact: "Nhiều USB rẻ quảng cáo đọc 100–150MB/s nhưng ghi chỉ vài MB/s đến vài chục MB/s.",
        },
        uhs: {
            icon: <Zap />,
            title: "UHS-I / UHS-II / UHS-III",
            detail: "UHS-I có một hàng chân, UHS-II có thêm hàng chân thứ hai để tốc độ cao hơn.",
            impact: "Máy chỉ hỗ trợ UHS-I thì thẻ UHS-II vẫn có thể chạy nhưng không đạt tốc độ UHS-II đầy đủ.",
        },
        app: {
            icon: <Gamepad2 />,
            title: "A1 / A2",
            detail: "Application Performance Class liên quan random I/O khi chạy app/game từ microSD.",
            impact: "A2 đáng cân nhắc cho Android, Steam Deck, Nintendo Switch hoặc handheld gaming nếu thiết bị hỗ trợ.",
        },
        endurance: {
            icon: <ShieldCheck />,
            title: "Endurance",
            detail: "High/Max/Pro Endurance dành cho ghi liên tục, ghi vòng lặp.",
            impact: "Camera hành trình/camera an ninh nên dùng thẻ Endurance thay vì thẻ rẻ thông thường.",
        },
        fake: {
            icon: <AlertTriangle />,
            title: "Hàng giả",
            detail: "Giá rẻ bất thường, dung lượng ảo, copy được nhưng mở file lỗi, tốc độ thấp bất thường.",
            impact: "Test bằng H2testw/F3 để kiểm tra dung lượng thật và CrystalDiskMark để đo tốc độ.",
        },
    };
    const [active, setActive] = useState("readwrite");
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
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
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
            icon: <Usb />,
            title: "SanDisk Extreme Fit USB-C 1TB",
            subtitle: "USB-C nhỏ gọn dung lượng lớn",
            color: "cyan",
            points: [
                "Thiết kế low-profile, cắm lâu trên laptop/tablet",
                "Dung lượng lớn tới 1TB",
                "Tốc độ đọc cao với bản 128GB–1TB",
                "Hợp lưu tài liệu, ảnh, video offline",
                "Không tối ưu bằng SSD ngoài cho ghi nặng liên tục",
            ],
            lesson: "USB nhỏ gọn hợp mở rộng dung lượng tạm, nhưng không nên thay SSD ngoài khi ghi dữ liệu lớn thường xuyên.",
        },
        {
            icon: <Zap />,
            title: "Kingston DataTraveler Max",
            subtitle: "USB hiệu năng cao",
            color: "emerald",
            points: [
                "Hợp copy video lớn",
                "Tiện hơn SSD ngoài",
                "Cần cắm đúng cổng USB 3.x/USB-C tốc độ cao",
                "Cắm USB 2.0 sẽ rất chậm",
                "Dùng boot Windows được nhưng hơi dư nếu chỉ tạo bộ cài",
            ],
            lesson: "Khi mua USB tốc độ cao, cổng trên máy cũng phải đủ nhanh.",
        },
        {
            icon: <MemoryStick />,
            title: "Samsung PRO Plus microSD 256GB",
            subtitle: "microSD cho camera/điện thoại/handheld",
            color: "purple",
            points: [
                "microSDXC dung lượng 256GB",
                "U3/V30 hợp quay 4K phổ thông",
                "A2 hữu ích cho app/game nếu thiết bị hỗ trợ",
                "Hợp Steam Deck/Nintendo Switch/Android",
                "Camera hành trình nên dùng dòng Endurance",
            ],
            lesson: "Thẻ nhanh cho quay 4K chưa chắc là lựa chọn tốt nhất cho camera ghi vòng lặp 24/7.",
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

function PickerLab() {
    const scenarios = {
        windows: {
            icon: <Usb />,
            title: "Cài Windows",
            answer: "USB 16GB–32GB, USB 3.0 trở lên, hãng uy tín là đủ. Không cần USB quá đắt nếu chỉ tạo bộ cài.",
            color: "cyan",
        },
        copy: {
            icon: <Database />,
            title: "Copy file lớn",
            answer: "Xem write speed, không chỉ read speed. Nếu thường copy video vài chục GB, USB tốc độ cao hoặc SSD ngoài sẽ hợp hơn USB rẻ.",
            color: "emerald",
        },
        camera4k: {
            icon: <Video />,
            title: "Quay 4K",
            answer: "Ưu tiên U3/V30 trở lên cho 4K phổ thông. Máy quay bitrate cao có thể cần V60/V90 theo khuyến nghị nhà sản xuất.",
            color: "purple",
        },
        dashcam: {
            icon: <Camera />,
            title: "Camera hành trình",
            answer: "Chọn High/Pro/Max Endurance vì thiết bị ghi/xóa vòng lặp liên tục mỗi ngày. Tránh thẻ rẻ không rõ nguồn gốc.",
            color: "orange",
        },
        handheld: {
            icon: <Gamepad2 />,
            title: "Steam Deck / Switch",
            answer: "Chọn microSDXC 128GB–512GB hoặc hơn, ưu tiên A2 nếu thiết bị hỗ trợ và U3/V30 nếu cần tốc độ ổn định.",
            color: "blue",
        },
    };
    const [active, setActive] = useState("camera4k");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: chọn USB/thẻ nhớ theo tình huống"
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

function FakeAndSafetyGuide() {
    const danger = [
        "Giá rẻ bất thường",
        "Dung lượng 1TB nhưng giá vài chục nghìn",
        "Copy vào được nhưng mở file lỗi",
        "Dung lượng hiển thị ảo",
        "Không có tem/bao bì đáng tin",
        "Tốc độ rất thấp so với quảng cáo",
    ];
    const tools = [
        "H2testw trên Windows",
        "F3 trên macOS/Linux",
        "CrystalDiskMark để đo tốc độ",
        "Safely Remove Hardware / Eject trước khi rút",
        "Mua shop chính hãng/uy tín",
        "Không dùng USB/thẻ nhớ làm bản lưu duy nhất",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="orange"
                title="Hàng giả, test dung lượng và rút an toàn"
                icon={<ShieldCheck />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ChecklistCard
                    title="Dấu hiệu nguy hiểm"
                    icon={<AlertTriangle />}
                    items={danger}
                    color="red"
                />
                <ChecklistCard
                    title="Cách kiểm tra và dùng an toàn"
                    icon={<CheckCircle2 />}
                    items={tools}
                    color="emerald"
                />
            </div>
        </section>
    );
}

function CommonMistakes() {
    const mistakes = [
        {
            wrong: "USB nào cũng như nhau",
            right: "USB khác nhau rất nhiều về chuẩn USB, controller, chip nhớ, tốc độ ghi, nhiệt và độ bền.",
        },
        {
            wrong: "Thẻ nhớ dung lượng lớn là đủ",
            right: "Camera/máy quay cần tốc độ ghi ổn định. Quay 4K phổ thông nên ưu tiên U3/V30 trở lên.",
        },
        {
            wrong: "microSD nào cũng tốt cho camera hành trình",
            right: "Camera hành trình ghi/xóa liên tục nên cần thẻ Endurance.",
        },
        {
            wrong: "USB/thẻ nhớ là backup lâu dài an toàn",
            right: "Chúng dễ thất lạc, gãy cổng, hỏng controller, lỗi file system, hàng giả hoặc bị format nhầm.",
        },
        {
            wrong: "Rút USB trực tiếp lúc nào cũng không sao",
            right: "Nếu đang ghi dữ liệu, rút trực tiếp có thể lỗi file. Nên Eject/Safely Remove.",
        },
    ];
    const tips = [
        "USB cài Windows: 16GB–32GB, USB 3.0 trở lên, hãng uy tín.",
        "Copy file lớn: ưu tiên write speed, không chỉ read speed.",
        "Quay 4K: chọn U3/V30 trở lên; máy chuyên nghiệp có thể cần V60/V90.",
        "Camera hành trình: dùng thẻ Endurance.",
        "Mua USB/thẻ nhớ từ nơi uy tín và test trước khi chứa dữ liệu quan trọng.",
        "Dữ liệu quan trọng cần thêm bản ở SSD/HDD ngoài hoặc cloud.",
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
                        <Lightbulb /> Mẹo chọn nhanh
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
                                USB Flash Drive / SD / microSD = chip nhớ flash
                            </p>
                            <br />
                            <p className="text-slate-500"># Dung lượng</p>
                            <p className="text-slate-300">
                                Windows boot: 16–32GB
                            </p>
                            <p className="text-slate-300">
                                Copy file thường xuyên: 64–128GB
                            </p>
                            <p className="text-slate-300">
                                Camera/handheld: 128–512GB
                            </p>
                            <br />
                            <p className="text-slate-500"># Video speed</p>
                            <p className="text-slate-300">
                                U3/V30 = 30 MB/s tối thiểu, hợp 4K phổ thông
                            </p>
                            <p className="text-slate-300">
                                V60/V90 = bitrate cao/chuyên nghiệp
                            </p>
                            <br />
                            <p className="text-red-300">
                                Dung lượng lớn không đủ: phải xem tốc độ ghi,
                                endurance và hàng thật.
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
        question: "USB Flash Drive và thẻ nhớ thường lưu dữ liệu bằng gì?",
        options: ["Đĩa từ quay", "Chip nhớ flash", "Tia laser", "RAM tạm thời"],
        correct: 1,
        explanation:
            "USB Flash Drive và SD/microSD dùng chip nhớ flash để lưu dữ liệu lâu dài.",
    },
    {
        question: "Thẻ nhớ có ký hiệu V30 nghĩa là gì?",
        options: [
            "Dung lượng 30GB",
            "Tốc độ ghi tối thiểu 30 MB/s cho video",
            "Dùng điện 30V",
            "Chỉ dùng cho màn hình 30 inch",
        ],
        correct: 1,
        explanation:
            "V30 là Video Speed Class, cho biết tốc độ ghi tối thiểu 30 MB/s.",
    },
    {
        question: "microSD dùng cho camera hành trình nên ưu tiên loại nào?",
        options: [
            "Thẻ rẻ nhất có dung lượng lớn",
            "Thẻ High Endurance / Pro Endurance",
            "Thẻ không rõ thương hiệu",
            "Thẻ Class 2 đời cũ",
        ],
        correct: 1,
        explanation:
            "Camera hành trình ghi/xóa vòng lặp liên tục nên cần thẻ Endurance.",
    },
    {
        question: "USB 3.2 cắm vào cổng USB 2.0 thì điều gì xảy ra?",
        options: [
            "Chạy theo tốc độ USB 2.0",
            "Tự biến thành SSD NVMe",
            "Không cần điện",
            "Tăng dung lượng gấp đôi",
        ],
        correct: 0,
        explanation:
            "Tốc độ thực tế bị giới hạn bởi cổng chậm hơn, nên sẽ chạy theo USB 2.0.",
    },
    {
        question: "Công cụ nào dùng để test dung lượng thật USB/thẻ nhớ?",
        options: ["H2testw hoặc F3", "Paint", "Calculator", "Taskbar"],
        correct: 0,
        explanation:
            "H2testw trên Windows và F3 trên macOS/Linux thường dùng để kiểm tra dung lượng thật và lỗi đọc/ghi.",
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
    }
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
                Bạn đã hiểu USB Flash Drive và thẻ nhớ SD/microSD. Tiếp theo là
                RAID — cách kết hợp nhiều ổ HDD/SSD để tăng dung lượng, tăng tốc
                hoặc tăng khả năng chịu lỗi khi một ổ bị hỏng.
            </p>
            <Link
                to="/phan-4-7"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Bài tiếp theo: 4.7 — RAID: Mảng đĩa dự phòng{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
    const colorMap = {
        cyan: "bg-cyan-500/20 text-cyan-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
        blue: "bg-blue-500/20 text-blue-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
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
            <p className={`${textColor(color)} font-bold text-sm mb-1`}>
                {label}
            </p>
            <p className="text-slate-300 text-sm">{value}</p>
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
function ChecklistCard({ title, icon, items, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-3xl p-6`}>
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center mb-4`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <h3 className="text-white font-bold text-xl mb-4">{title}</h3>
            <div className="space-y-2">
                {items.map((item) => (
                    <Bullet key={item} text={item} />
                ))}
            </div>
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
    return map[color] || map.cyan;
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
    return map[color] || map.cyan;
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
    return map[color] || "text-cyan-300";
}
