import React, { useMemo, useState } from "react";
import {
    AlertTriangle,
    Award,
    BookOpen,
    Brain,
    Camera,
    CheckCircle2,
    ChevronRight,
    Cloud,
    Code2,
    Database,
    Film,
    Gamepad2,
    Gauge,
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
    Smartphone,
    Usb,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-fuchsia-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-400/30 flex items-center justify-center shadow-lg shadow-fuchsia-500/10">
                            <Search className="text-fuchsia-400" size={24} />
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
                    <div className="text-sm font-semibold text-fuchsia-300 bg-fuchsia-400/10 px-3 py-1 rounded-full border border-fuchsia-400/20">
                        Bài 4.9
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <RoleAnalogy />
                <DecisionFlow />
                <NeedMatrix />
                <CapacityGuide />
                <SpecsExplorer />
                <CompatibilityChecklist />
                <DurabilityAndBackup />
                <RealExamples />
                <StoragePickerLab />
                <BuildComposer />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextPart />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-fuchsia-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-fuchsia-300">
                        <BookOpen size={16} /> Tổng kết Phần 4: Bộ lưu trữ
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Cách chọn
                        <span className="block text-fuchsia-400">
                            thiết bị lưu trữ phù hợp
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Đừng hỏi “ổ nào mạnh nhất?” trước. Hãy hỏi: “Ổ này dùng
                        để làm gì?” Bài này gom toàn bộ HDD, SSD, NVMe, USB, thẻ
                        nhớ, NAS và cloud thành quy trình chọn đúng nhu cầu.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<Zap size={16} />}
                            text="SSD/NVMe cho tốc độ"
                        />
                        <Tag
                            icon={<HardDrive size={16} />}
                            text="HDD cho dung lượng"
                        />
                        <Tag
                            icon={<Usb size={16} />}
                            text="USB/thẻ nhớ cho di động"
                        />
                        <Tag
                            icon={<Server size={16} />}
                            text="NAS cho chia sẻ"
                        />
                        <Tag
                            icon={<Cloud size={16} />}
                            text="Cloud cho đồng bộ/backup"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Monitor />}
                            label="OS/App"
                            desc="SSD SATA hoặc NVMe"
                            color="fuchsia"
                            highlight
                        />
                        <HeroTile
                            icon={<Database />}
                            label="Dữ liệu lớn"
                            desc="HDD/NAS"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Usb />}
                            label="Di động"
                            desc="USB, SD, SSD ngoài"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<ShieldCheck />}
                            label="An toàn"
                            desc="Backup 3-2-1"
                            color="emerald"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">
                            // Công thức chọn nhanh
                        </p>
                        <p>Vai trò → Tương thích → Dung lượng</p>
                        <p className="text-fuchsia-300">
                            → Tốc độ/độ bền → Backup
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Biết chọn thiết bị lưu trữ theo vai trò: hệ điều hành, app/game/project, dữ liệu lâu dài, backup, di động.",
        "Ghép đúng thiết bị với nhu cầu: HDD, SATA SSD, NVMe SSD, USB, SD/microSD, NAS, cloud.",
        "Đọc các thông số quan trọng: dung lượng, tốc độ, latency, sustained write, TBW, CMR/SMR, Endurance.",
        "Kiểm tra tương thích SATA, M.2, NVMe, PCIe Gen, form factor và heatsink trước khi mua.",
        "Xây dựng cấu hình lưu trữ cân bằng giữa tốc độ, dung lượng, độ bền, chi phí và backup.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="fuchsia"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-fuchsia-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 text-fuchsia-300 flex items-center justify-center font-bold mb-4">
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
    const roles = [
        {
            icon: <Monitor />,
            title: "Ổ hệ điều hành",
            device: "SSD SATA hoặc NVMe",
            desc: "Windows/Linux/macOS, app chính, boot nhanh, mở máy mượt.",
            color: "fuchsia",
        },
        {
            icon: <Gamepad2 />,
            title: "Ổ app/game/project",
            device: "NVMe SSD 1TB–2TB",
            desc: "Game nặng, IDE, Docker, máy ảo, project đang làm.",
            color: "emerald",
        },
        {
            icon: <Database />,
            title: "Ổ dữ liệu lâu dài",
            device: "HDD, SSD phụ, NAS",
            desc: "Phim, ảnh, footage cũ, tài liệu lớn, archive.",
            color: "orange",
        },
        {
            icon: <ShieldCheck />,
            title: "Ổ backup",
            device: "Ổ ngoài, NAS, cloud",
            desc: "Bản sao để khôi phục khi mất dữ liệu.",
            color: "blue",
        },
        {
            icon: <Usb />,
            title: "Ổ di động",
            device: "USB, SD, microSD, SSD ngoài",
            desc: "Chép file, cài hệ điều hành, máy ảnh/camera/handheld.",
            color: "cyan",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: chọn lưu trữ là chọn theo vai trò"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    Khi chọn thiết bị lưu trữ, câu hỏi đúng không phải là{" "}
                    <strong className="text-white">“ổ nào mạnh nhất?”</strong>,
                    mà là{" "}
                    <strong className="text-cyan-300">
                        “ổ này dùng để làm gì?”
                    </strong>
                    .
                </p>
                <div className="grid md:grid-cols-5 gap-4">
                    {roles.map((r) => (
                        <div
                            key={r.title}
                            className={`${softBorder(r.color)} border rounded-3xl p-5`}
                        >
                            <div
                                className={`w-12 h-12 rounded-2xl ${badgeColor(r.color)} flex items-center justify-center mb-4`}
                            >
                                {React.cloneElement(r.icon, { size: 24 })}
                            </div>
                            <h3 className="text-white font-bold text-lg mb-1">
                                {r.title}
                            </h3>
                            <p
                                className={`${textColor(r.color)} font-semibold text-sm mb-2`}
                            >
                                {r.device}
                            </p>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {r.desc}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Muốn máy nhanh → SSD/NVMe • Muốn lưu nhiều rẻ → HDD • Muốn
                    di động → USB/SSD ngoài/thẻ nhớ • Muốn chia sẻ nhiều máy →
                    NAS/cloud • Muốn an toàn → backup
                </div>
            </div>
        </section>
    );
}

function RoleAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: bàn, tủ, két và túi xách"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-5 gap-4">
                <AnalogyCard
                    icon={<Zap />}
                    title="Bàn làm việc chính"
                    desc="SSD/NVMe chứa hệ điều hành và app để thao tác nhanh."
                    color="fuchsia"
                />
                <AnalogyCard
                    icon={<HardDrive />}
                    title="Tủ tài liệu"
                    desc="HDD/SSD phụ lưu phim, ảnh, dữ liệu cá nhân."
                    color="orange"
                />
                <AnalogyCard
                    icon={<ShieldCheck />}
                    title="Két sắt dự phòng"
                    desc="Backup ổ ngoài, NAS hoặc cloud để khôi phục."
                    color="emerald"
                />
                <AnalogyCard
                    icon={<Usb />}
                    title="Túi xách"
                    desc="USB, thẻ nhớ, SSD ngoài để mang dữ liệu đi."
                    color="cyan"
                />
                <AnalogyCard
                    icon={<Server />}
                    title="Kho riêng"
                    desc="NAS đặt trong nhà/văn phòng cho nhiều người cùng dùng."
                    color="blue"
                />
            </div>
        </section>
    );
}

function DecisionFlow() {
    const [step, setStep] = useState(0);
    const flow = [
        {
            icon: <Search />,
            title: "Bạn cần lưu trữ cho việc gì?",
            desc: "Xác định vai trò trước: OS, game, project, archive, backup, di động, chia sẻ nhiều máy.",
        },
        {
            icon: <Zap />,
            title: "Cài Windows / mở app nhanh?",
            desc: "Chọn SSD, ưu tiên NVMe nếu máy hỗ trợ. Máy cũ chỉ có SATA thì chọn SATA SSD 2.5 inch.",
        },
        {
            icon: <HardDrive />,
            title: "Lưu phim, ảnh, backup dung lượng lớn?",
            desc: "Chọn HDD hoặc NAS. HDD giá/GB tốt, NAS tiện chia sẻ và backup nhiều máy.",
        },
        {
            icon: <Usb />,
            title: "Chép file mang đi?",
            desc: "Chọn USB hoặc SSD gắn ngoài. Nếu copy file lớn thường xuyên, SSD ngoài tốt hơn USB rẻ.",
        },
        {
            icon: <Camera />,
            title: "Máy ảnh/camera/điện thoại?",
            desc: "Chọn SD/microSD đúng chuẩn tốc độ: U3/V30 cho 4K phổ thông, Endurance cho camera hành trình.",
        },
        {
            icon: <Cloud />,
            title: "Làm việc nhiều thiết bị?",
            desc: "Chọn cloud storage để đồng bộ tài liệu, ảnh và file học tập/công việc.",
        },
        {
            icon: <ShieldCheck />,
            title: "Dữ liệu quan trọng?",
            desc: "Không chỉ mua ổ tốt. Phải có backup, tốt nhất theo quy tắc 3-2-1.",
        },
    ];
    const active = flow[step];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Quy trình chọn ổ lưu trữ"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[310px] flex flex-col justify-between">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center justify-center mb-5">
                                {React.cloneElement(active.icon, { size: 32 })}
                            </div>
                            <p className="text-purple-300 text-sm font-bold mb-2">
                                Bước {step + 1}/{flow.length}
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {active.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {active.desc}
                            </p>
                        </div>
                        <button
                            onClick={() => setStep((step + 1) % flow.length)}
                            className="mt-6 px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold inline-flex items-center justify-center gap-2"
                        >
                            Bước tiếp theo <ChevronRight size={18} />
                        </button>
                    </div>
                    <div className="space-y-2">
                        {flow.map((s, i) => (
                            <button
                                key={s.title}
                                onClick={() => setStep(i)}
                                className={`w-full flex items-center gap-4 p-3 rounded-2xl border text-left transition-all ${step === i ? "bg-purple-500/5 border-purple-500/20 text-white" : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`}
                            >
                                <div
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${step === i ? "bg-purple-500/10 text-purple-300 border border-purple-500/20" : "bg-slate-900 text-slate-500"}`}
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

function NeedMatrix() {
    const rows = [
        [
            "Cài Windows, mở app nhanh",
            "SSD SATA hoặc NVMe",
            "HDD",
            "SSD phản hồi nhanh hơn HDD rất nhiều",
        ],
        [
            "PC/laptop đời mới",
            "NVMe SSD M.2",
            "HDD làm ổ chính",
            "NVMe nhanh, gọn, không cần cáp",
        ],
        [
            "Máy cũ chỉ có SATA",
            "SATA SSD 2.5 inch",
            "NVMe nếu máy không hỗ trợ",
            "Dễ nâng cấp từ HDD",
        ],
        [
            "Lưu phim, ảnh, dữ liệu lớn",
            "HDD 2TB–8TB+",
            "USB rẻ tiền",
            "HDD giá/GB tốt",
        ],
        [
            "Gaming",
            "NVMe SSD 1TB–2TB",
            "HDD làm ổ game chính",
            "Game nặng, SSD load nhanh hơn",
        ],
        [
            "Lập trình/Docker/máy ảo",
            "NVMe SSD + RAM đủ",
            "HDD",
            "Cần random I/O tốt",
        ],
        [
            "Dựng video",
            "NVMe project + HDD/NAS backup",
            "USB thường",
            "Cần tốc độ và backup",
        ],
        [
            "Camera hành trình",
            "microSD Endurance",
            "microSD rẻ không rõ nguồn",
            "Ghi vòng lặp liên tục",
        ],
        [
            "Máy ảnh quay 4K",
            "SD/microSD U3/V30+",
            "Thẻ Class thấp",
            "Cần tốc độ ghi ổn định",
        ],
        [
            "Backup gia đình",
            "NAS + cloud/ổ ngoài",
            "RAID đơn độc",
            "RAID không thay thế backup",
        ],
        [
            "Làm việc nhiều thiết bị",
            "Cloud Drive",
            "Chỉ lưu local",
            "Cloud đồng bộ tiện hơn",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Bảng chọn nhanh theo nhu cầu"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[980px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Nhu cầu</th>
                            <th className="p-4 text-emerald-300">Nên chọn</th>
                            <th className="p-4 text-red-300">
                                Không nên chọn làm chính
                            </th>
                            <th className="p-4">Lý do</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([need, pick, avoid, reason]) => (
                            <tr
                                key={need}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-white font-bold">
                                    {need}
                                </td>
                                <td className="p-4 text-slate-300">{pick}</td>
                                <td className="p-4 text-slate-300">{avoid}</td>
                                <td className="p-4 text-slate-300">{reason}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function CapacityGuide() {
    const rows = [
        [
            "Học tập, văn phòng nhẹ",
            "SSD 500GB – 1TB",
            "500GB đủ cơ bản, 1TB dễ sống hơn",
        ],
        ["Gaming phổ thông", "SSD 1TB – 2TB", "Game ngày càng lớn"],
        [
            "Lập trình, Docker, máy ảo",
            "SSD 1TB – 2TB",
            "Tùy số project/container/VM",
        ],
        [
            "Dựng video, ảnh RAW",
            "SSD 2TB + HDD/NAS backup",
            "Tách project/cache/archive",
        ],
        [
            "Lưu phim, ảnh gia đình",
            "HDD/NAS 4TB trở lên",
            "Dữ liệu tăng theo năm",
        ],
        ["USB cài Windows", "16GB – 32GB", "USB 3.0 hãng uy tín là đủ"],
        [
            "microSD camera/handheld",
            "128GB – 512GB",
            "Xem U3/V30/A1/A2/Endurance",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Chọn dung lượng bao nhiêu là hợp lý?"
                icon={<Database />}
            />
            <div className="grid lg:grid-cols-[1fr_0.8fr] gap-6">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                    <table className="w-full min-w-[720px] text-sm">
                        <thead>
                            <tr className="text-left text-slate-400">
                                <th className="p-4">Nhu cầu</th>
                                <th className="p-4 text-emerald-300">
                                    Dung lượng nên chọn
                                </th>
                                <th className="p-4">Ghi chú</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map(([need, cap, note]) => (
                                <tr
                                    key={need}
                                    className="border-t border-slate-800"
                                >
                                    <td className="p-4 text-white font-bold">
                                        {need}
                                    </td>
                                    <td className="p-4 text-emerald-300 font-bold">
                                        {cap}
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        {note}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-6 flex flex-col justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center justify-center mb-4">
                        <Lightbulb />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                        Gợi ý thực tế
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                        Nếu mua máy mới,{" "}
                        <strong className="text-emerald-300">1TB SSD</strong>{" "}
                        thường dễ sống hơn 512GB vì Windows, phần mềm, game,
                        Docker, ảnh và video ngày càng lớn.
                    </p>
                </div>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        capacity: {
            icon: <Database />,
            title: "Dung lượng",
            detail: "Đủ dùng hiện tại và có dư cho 1–3 năm tới.",
            impact: "Ổ hệ điều hành 500GB–1TB; gaming/lập trình 1TB–2TB; archive gia đình 4TB+.",
        },
        sequential: {
            icon: <Gauge />,
            title: "Sequential Read/Write",
            detail: "Tốc độ đọc/ghi file lớn liên tục.",
            impact: "Quan trọng khi copy file lớn, dựng video, chuyển project, giải nén/cài game lớn.",
        },
        random: {
            icon: <Zap />,
            title: "Random Read/Write",
            detail: "Tốc độ đọc/ghi nhiều file nhỏ rải rác.",
            impact: "Quan trọng cho Windows, mở app, IDE, database, Docker, máy ảo.",
        },
        latency: {
            icon: <Workflow />,
            title: "Latency",
            detail: "Độ trễ phản hồi khi thiết bị nhận yêu cầu đọc/ghi.",
            impact: "SSD tạo cảm giác máy nhanh hơn HDD vì latency thấp hơn rất nhiều.",
        },
        sustained: {
            icon: <Film />,
            title: "Sustained Write",
            detail: "Tốc độ ghi duy trì khi ghi file lớn liên tục.",
            impact: "Quan trọng với video, cache/scratch, copy footage, SSD QLC hoặc USB rẻ có thể tụt tốc sau cache.",
        },
        network: {
            icon: <Server />,
            title: "Network Speed",
            detail: "Tốc độ mạng ảnh hưởng NAS/cloud.",
            impact: "1GbE giới hạn khoảng 125MB/s lý thuyết; Wi-Fi yếu có thể làm NAS/cloud chậm.",
        },
    };
    const [active, setActive] = useState("random");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số tốc độ: không phải số nào cũng giống nhau"
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

function CompatibilityChecklist() {
    const checks = [
        "Máy có khe 2.5 inch SATA không?",
        "Máy có khe M.2 không?",
        "Khe M.2 hỗ trợ SATA hay NVMe?",
        "Khe M.2 dài 2230, 2242, 2280 hay 22110?",
        "Mainboard hỗ trợ PCIe Gen mấy?",
        "Laptop có giới hạn độ dày hoặc heatsink không?",
    ];
    const rules = [
        "M.2 không chắc chắn là NVMe.",
        "NVMe cần khe hỗ trợ PCIe/NVMe.",
        "SATA SSD 2.5 inch cần cáp/khe SATA.",
        "SSD Gen4 cắm Gen3 thường vẫn chạy nhưng bị giới hạn tốc độ.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="blue"
                title="Kiểm tra tương thích trước khi mua"
                icon={<Puzzle />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ChecklistCard
                    title="Cần kiểm tra"
                    icon={<Search />}
                    items={checks}
                    color="blue"
                />
                <ChecklistCard
                    title="Ghi nhớ cực quan trọng"
                    icon={<AlertTriangle />}
                    items={rules}
                    color="orange"
                />
            </div>
        </section>
    );
}

function DurabilityAndBackup() {
    const blocks = [
        {
            title: "SSD",
            icon: <Zap />,
            color: "emerald",
            items: [
                "TBW",
                "Loại NAND: TLC hay QLC",
                "Bảo hành",
                "Nhiệt độ",
                "Có DRAM/HMB hay không",
            ],
        },
        {
            title: "HDD",
            icon: <HardDrive />,
            color: "orange",
            items: [
                "Desktop / NAS / surveillance / enterprise",
                "CMR hay SMR",
                "RPM",
                "Workload rating",
                "Bảo hành, tiếng ồn và nhiệt",
            ],
        },
        {
            title: "USB/thẻ nhớ",
            icon: <Usb />,
            color: "cyan",
            items: [
                "Hàng chính hãng",
                "Tốc độ ghi thật",
                "Endurance nếu dùng camera",
                "Test bằng H2testw/F3",
                "Không dùng làm bản lưu duy nhất",
            ],
        },
        {
            title: "Backup",
            icon: <ShieldCheck />,
            color: "purple",
            items: [
                "Ổ tốt giảm rủi ro hỏng",
                "Backup giúp khôi phục khi rủi ro xảy ra",
                "3 bản dữ liệu",
                "2 loại lưu trữ",
                "1 bản ngoài vị trí chính",
            ],
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="emerald"
                title="Độ bền và backup"
                icon={<ShieldCheck />}
            />
            <div className="grid md:grid-cols-4 gap-4">
                {blocks.map((b) => (
                    <ChecklistCard
                        key={b.title}
                        title={b.title}
                        icon={b.icon}
                        items={b.items}
                        color={b.color}
                    />
                ))}
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300 text-center">
                3-2-1: 3 bản dữ liệu • 2 loại thiết bị/lưu trữ khác nhau • 1 bản
                nằm ngoài vị trí chính
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Laptop />,
            title: "Máy học tập/văn phòng",
            subtitle: "Nhanh, đủ dùng, dễ backup",
            color: "cyan",
            points: [
                "SSD SATA/NVMe 500GB–1TB",
                "Cloud 100GB–200GB cho tài liệu quan trọng",
                "Word, Excel, PowerPoint, trình duyệt, Teams/Zoom",
                "Nếu còn HDD làm Windows, nâng SSD trước",
                "Không cần chạy theo NVMe Gen5",
            ],
            lesson: "Với máy học tập, SSD tạo cảm giác nhanh hơn nâng HDD dung lượng lớn.",
        },
        {
            icon: <Gamepad2 />,
            title: "PC gaming phổ thông",
            subtitle: "Load game nhanh, đủ dung lượng",
            color: "emerald",
            points: [
                "NVMe SSD 1TB–2TB cho Windows + game đang chơi",
                "HDD 2TB–4TB nếu cần lưu phim/file lớn",
                "Cloud/ổ ngoài cho save game/file quan trọng",
                "Không nên dùng HDD làm ổ game chính",
                "SSD ngoài USB-C tiện mang thư viện game",
            ],
            lesson: "Gaming nên ưu tiên NVMe dung lượng đủ lớn hơn là ổ quá nhanh nhưng quá nhỏ.",
        },
        {
            icon: <Code2 />,
            title: "Sinh viên IT / Docker / VM",
            subtitle: "Random I/O quan trọng",
            color: "blue",
            points: [
                "NVMe SSD 1TB tối thiểu",
                "2TB nếu chạy nhiều Docker image/VM",
                "Cloud/Git/NAS cho backup code và tài liệu",
                "IDE đọc nhiều file nhỏ",
                "Database local cần random I/O tốt",
            ],
            lesson: "HDD làm ổ project chính sẽ làm cài package, build và container chậm hơn rõ.",
        },
        {
            icon: <Film />,
            title: "Dựng video / nhiếp ảnh",
            subtitle: "Tách project, cache và archive",
            color: "purple",
            points: [
                "NVMe 1TB–2TB cho OS/app",
                "NVMe 2TB cho project/cache/scratch",
                "HDD/NAS 4TB–16TB+ cho archive footage",
                "Cloud/ổ ngoài cho backup bản quan trọng",
                "Ưu tiên TLC, TBW tốt, tản nhiệt tốt",
            ],
            lesson: "Video cần tốc độ cho project hiện tại và dung lượng/backup cho footage dài hạn.",
        },
        {
            icon: <Server />,
            title: "Gia đình/văn phòng nhỏ",
            subtitle: "Chia sẻ và backup nhiều máy",
            color: "orange",
            points: [
                "NAS 2-bay hoặc 4-bay",
                "HDD NAS CMR",
                "RAID 1/5/10 tùy số ổ",
                "Cloud hoặc ổ ngoài làm backup",
                "Plex/Jellyfin, ảnh gia đình, tài liệu chung",
            ],
            lesson: "NAS có RAID vẫn cần backup tách biệt.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="pink"
                title="Ví dụ cấu hình thực tế"
                icon={<PackageCheck />}
            />
            <div className="grid lg:grid-cols-2 gap-4">
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
            title: "Máy đang dùng HDD làm Windows",
            answer: "Nâng lên SSD trước. SATA SSD 2.5 inch nếu máy chỉ có SATA; NVMe nếu máy hỗ trợ M.2 NVMe.",
            color: "cyan",
        },
        newpc: {
            icon: <Monitor />,
            title: "Build PC mới",
            answer: "Chọn NVMe SSD tối thiểu 1TB cho OS/app/game. Thêm HDD/NAS/cloud nếu cần archive hoặc backup.",
            color: "fuchsia",
        },
        archive: {
            icon: <HardDrive />,
            title: "Lưu phim/ảnh lâu dài",
            answer: "Chọn HDD 4TB+ hoặc NAS nếu nhiều thiết bị cùng truy cập. Dữ liệu quan trọng cần bản backup ngoài ổ chính.",
            color: "orange",
        },
        camera: {
            icon: <Camera />,
            title: "Camera/quay 4K",
            answer: "Quay 4K phổ thông chọn SD/microSD U3/V30 trở lên; camera hành trình chọn thẻ Endurance.",
            color: "purple",
        },
        team: {
            icon: <Cloud />,
            title: "Làm việc nhiều thiết bị",
            answer: "Chọn cloud drive để đồng bộ. Nhưng với dữ liệu quan trọng, đảm bảo có version history hoặc backup riêng.",
            color: "blue",
        },
        family: {
            icon: <Server />,
            title: "Gia đình/văn phòng nhỏ",
            answer: "NAS 2-bay RAID 1 cho đơn giản; 4-bay RAID 5/10 linh hoạt hơn. NAS vẫn cần backup cloud/ổ ngoài.",
            color: "emerald",
        },
    };
    const [active, setActive] = useState("newpc");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: chọn thiết bị theo tình huống"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-6 gap-3 mb-6">
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

function BuildComposer() {
    const [profile, setProfile] = useState("gaming");
    const data = {
        office: {
            title: "Học tập / văn phòng",
            icon: <Laptop />,
            color: "cyan",
            setup: [
                "SSD 500GB–1TB",
                "Cloud 100GB–200GB",
                "USB 32GB cho bộ cài/cứu hộ",
            ],
            avoid: "Không mua HDD dung lượng lớn làm ổ Windows nếu máy còn chậm.",
        },
        gaming: {
            title: "Gaming phổ thông",
            icon: <Gamepad2 />,
            color: "emerald",
            setup: [
                "NVMe SSD 1TB–2TB",
                "HDD 2TB–4TB nếu cần lưu file lớn",
                "Cloud/ổ ngoài cho save/file quan trọng",
            ],
            avoid: "Không dùng HDD làm ổ game chính nếu có thể dùng SSD.",
        },
        dev: {
            title: "Lập trình / Docker / VM",
            icon: <Code2 />,
            color: "blue",
            setup: [
                "NVMe SSD 1TB tối thiểu",
                "2TB nếu nhiều VM/container",
                "Git + cloud/NAS backup code",
            ],
            avoid: "Không đặt project chính trên HDD.",
        },
        creator: {
            title: "Dựng video / ảnh RAW",
            icon: <Film />,
            color: "purple",
            setup: [
                "NVMe OS/app 1TB–2TB",
                "NVMe project/cache 2TB",
                "HDD/NAS 4TB–16TB+ archive",
                "Cloud/ổ ngoài backup",
            ],
            avoid: "Không dùng USB rẻ hoặc QLC giá rẻ làm ổ ghi nặng chính.",
        },
        family: {
            title: "Gia đình / văn phòng nhỏ",
            icon: <Server />,
            color: "orange",
            setup: [
                "NAS 2-bay/4-bay",
                "HDD NAS CMR",
                "RAID 1/5/10",
                "Cloud hoặc ổ ngoài backup",
            ],
            avoid: "Không xem RAID là backup.",
        },
    };
    const chosen = data[profile];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="12"
                color="emerald"
                title="Bộ phối cấu hình lưu trữ mẫu"
                icon={<Settings />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-5 gap-3 mb-6">
                    {Object.entries(data).map(([key, item]) => (
                        <button
                            key={key}
                            onClick={() => setProfile(key)}
                            className={`rounded-2xl border p-4 text-left transition-all ${profile === key ? `${softBorder(item.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(item.icon, { size: 20 })}{" "}
                                {item.title}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-[0.75fr_1.25fr] gap-6">
                    <div
                        className={`${softBorder(chosen.color)} border rounded-3xl p-6`}
                    >
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(chosen.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(chosen.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {chosen.title}
                        </h3>
                        <p className="text-sm text-orange-300 leading-relaxed">
                            <strong>Tránh:</strong> {chosen.avoid}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {chosen.setup.map((s, i) => (
                            <InfoCard
                                key={s}
                                label={`Thành phần ${i + 1}`}
                                value={s}
                                color={chosen.color}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function CommonMistakes() {
    const mistakes = [
        {
            wrong: "Ổ dung lượng lớn là ổ tốt nhất",
            right: "Dung lượng chỉ là một phần. HDD 4TB chứa nhiều, nhưng SSD 1TB mở Windows/app nhanh hơn rất nhiều.",
        },
        {
            wrong: "Cứ mua NVMe nhanh nhất là tốt nhất",
            right: "NVMe Gen5 rất nhanh nhưng đắt, nóng, cần heatsink và nhiều tác vụ văn phòng không tận dụng hết.",
        },
        {
            wrong: "M.2 là chắc chắn lắp được vào mọi máy có khe M.2",
            right: "M.2 SATA khác M.2 NVMe, 2230 khác 2280, laptop có thể không đủ chỗ cho heatsink.",
        },
        {
            wrong: "Có RAID hoặc NAS rồi thì không cần backup",
            right: "RAID/NAS không chống xóa nhầm, ransomware, cháy nổ, mất trộm hoặc lỗi phần mềm.",
        },
        {
            wrong: "USB/thẻ nhớ dùng để backup lâu dài là ổn",
            right: "USB/thẻ nhớ dễ hỏng, thất lạc, mua nhầm hàng giả, lỗi file system. Chúng hợp chuyển file, boot cài đặt hoặc lưu tạm hơn.",
        },
    ];
    const tips = [
        "Nếu máy còn HDD làm ổ Windows, nâng lên SSD trước.",
        "Máy mới nên chọn tối thiểu SSD 1TB nếu ngân sách cho phép.",
        "Không mua ổ chỉ theo tốc độ quảng cáo; xem TBW, NAND, bảo hành, nhiệt, DRAM/HMB, review thực tế.",
        "Dùng HDD đúng vai trò: lưu dữ liệu lớn, phim, ảnh, backup, NAS.",
        "Chọn thẻ nhớ theo thiết bị: camera hành trình cần Endurance; 4K cần U3/V30; app/game xem A1/A2.",
        "NAS cần ổ NAS và backup riêng.",
        "Chừa trống 10–20% dung lượng SSD nếu có thể.",
        "Dữ liệu quan trọng nên có ít nhất 2–3 bản.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="13"
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
                        <span className="bg-fuchsia-500/20 text-fuchsia-300 p-2 rounded-xl">
                            14
                        </span>{" "}
                        Tóm tắt & Kiểm tra cuối phần
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-fuchsia-300 border border-slate-800 shadow-inner space-y-2">
                            <p>OS/app nhanh → SSD SATA hoặc NVMe</p>
                            <p>Dữ liệu lớn/rẻ → HDD hoặc NAS</p>
                            <p>Di động → USB, SD/microSD, SSD ngoài</p>
                            <p>Chia sẻ nhiều máy → NAS hoặc cloud</p>
                            <p>An toàn dữ liệu → backup 3-2-1</p>
                            <br />
                            <p className="text-slate-500">
                                # Kiểm tra trước khi mua
                            </p>
                            <p className="text-slate-300">
                                Tương thích • Dung lượng • Tốc độ đúng nhu cầu •
                                Độ bền • Bảo hành • Backup
                            </p>
                            <br />
                            <p className="text-red-300">
                                Một ổ tốt không đủ. Dữ liệu quan trọng phải có
                                bản sao.
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
            "Nếu máy tính đang dùng HDD làm ổ Windows và rất chậm, nâng cấp nào thường đáng làm nhất?",
        options: [
            "Đổi sang HDD dung lượng lớn hơn",
            "Nâng lên SSD",
            "Mua USB 2.0",
            "Thay dây HDMI",
        ],
        correct: 1,
        explanation:
            "Nâng từ HDD lên SSD thường cải thiện boot Windows, mở app và phản hồi hệ thống rõ nhất.",
    },
    {
        question: "Mục đích phù hợp nhất của HDD hiện nay là gì?",
        options: [
            "Làm ổ Windows nhanh nhất",
            "Lưu dữ liệu lớn, backup, phim ảnh",
            "Thay thế RAM",
            "Tăng tốc CPU trực tiếp",
        ],
        correct: 1,
        explanation:
            "HDD vẫn rất hợp lưu dữ liệu lớn, phim ảnh, backup và archive nhờ giá/GB tốt.",
    },
    {
        question: "Khi mua SSD M.2, cần kiểm tra gì?",
        options: [
            "Chỉ cần thấy chữ M.2 là mua",
            "Khe hỗ trợ SATA hay NVMe, kích thước, PCIe Gen, không gian tản nhiệt",
            "Màu tem SSD",
            "SSD có nặng không",
        ],
        correct: 1,
        explanation:
            "M.2 có nhiều biến thể. Cần kiểm tra SATA/NVMe, kích thước 2230/2280, PCIe Gen và heatsink/laptop clearance.",
    },
    {
        question: "Dữ liệu quan trọng nên được lưu thế nào?",
        options: [
            "Chỉ lưu một bản trên SSD tốt",
            "Chỉ lưu trên USB rẻ",
            "Có nhiều bản backup, tốt nhất theo quy tắc 3-2-1",
            "Chỉ lưu trong thư mục Downloads",
        ],
        correct: 2,
        explanation:
            "Ổ tốt vẫn có thể hỏng hoặc bị xóa nhầm. Dữ liệu quan trọng cần nhiều bản backup, tốt nhất theo 3-2-1.",
    },
    {
        question: "Camera hành trình nên dùng loại thẻ nhớ nào?",
        options: [
            "microSD rẻ nhất",
            "microSD Endurance",
            "USB 2.0",
            "Đĩa DVD-R",
        ],
        correct: 1,
        explanation:
            "Camera hành trình ghi/xóa vòng lặp liên tục nên cần thẻ Endurance bền hơn.",
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
                    Hoàn thành Phần 4!
                </h4>
                <p className="text-slate-400 mb-6">
                    Bạn trả lời đúng{" "}
                    <strong className="text-fuchsia-400">
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
                <span className="text-fuchsia-400">
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
                        className="w-full py-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hoàn thành Phần 4 – Bộ lưu trữ. Phần tiếp theo là GPU: bộ
                xử lý đồ họa, bắt đầu từ GPU là gì và vì sao máy tính cần GPU để
                hiển thị hình ảnh, chơi game, render video và xử lý AI.
            </p>
            <Link
                to="/phan-5-1"
                className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-fuchsia-500/20"
            >
                Sang Phần 5: 5.1 — GPU là gì? So sánh GPU và CPU{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "fuchsia" }) {
    const colorMap = {
        fuchsia: "bg-fuchsia-500/20 text-fuchsia-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
        blue: "bg-blue-500/20 text-blue-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-fuchsia-500/10 border-fuchsia-400/50" : softBorder(color)}`}
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
        fuchsia:
            "bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.fuchsia;
}
function softBorder(color) {
    const map = {
        fuchsia: "bg-fuchsia-500/5 border-fuchsia-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.fuchsia;
}
function textColor(color) {
    const map = {
        fuchsia: "text-fuchsia-300",
        cyan: "text-cyan-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-fuchsia-300";
}
