import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    Copy,
    Database,
    Gauge,
    HardDrive,
    Layers3,
    Lightbulb,
    Network,
    PackageCheck,
    Puzzle,
    RefreshCcw,
    Search,
    Server,
    Settings,
    ShieldCheck,
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
                            <Layers3 className="text-rose-400" size={24} />
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
                    <div className="text-sm font-semibold text-rose-300 bg-rose-400/10 px-3 py-1 rounded-full border border-rose-400/20">
                        Bài 4.7
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <DailyAnalogy />
                <RaidMechanismSimulator />
                <RaidTypeExplorer />
                <CapacityCalculator />
                <SpecsExplorer />
                <RebuildSection />
                <RaidImplementationGuide />
                <RealExamples />
                <UseCaseLab />
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
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-rose-300">
                        <BookOpen size={16} /> Phần 4: Bộ lưu trữ — Storage
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        RAID
                        <span className="block text-rose-400">
                            Mảng đĩa dự phòng
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        RAID ghép nhiều ổ HDD/SSD thành một hệ thống lưu trữ
                        chung để tăng tốc, tăng dung lượng hoặc tăng khả năng
                        chịu lỗi. Nhưng điều đầu tiên phải nhớ: RAID không phải
                        backup.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Zap size={16} />} text="RAID 0" />
                        <Tag icon={<Copy size={16} />} text="RAID 1" />
                        <Tag icon={<Puzzle size={16} />} text="RAID 5 parity" />
                        <Tag icon={<Layers3 size={16} />} text="RAID 10" />
                        <Tag icon={<RefreshCcw size={16} />} text="Rebuild" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Zap />}
                            label="RAID 0"
                            desc="Chia dữ liệu, nhanh, không dự phòng"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Copy />}
                            label="RAID 1"
                            desc="Mirror dữ liệu, chịu hỏng 1 ổ"
                            color="emerald"
                            highlight
                        />
                        <HeroTile
                            icon={<Puzzle />}
                            label="RAID 5"
                            desc="Stripe + parity, cần 3 ổ"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<Layers3 />}
                            label="RAID 10"
                            desc="Mirror + stripe, cần 4 ổ"
                            color="purple"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Quy tắc sống còn</p>
                        <p>RAID = chịu lỗi / availability</p>
                        <p className="text-rose-300">
                            Backup = bản sao để khôi phục dữ liệu
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu RAID là gì và vì sao nhiều ổ có thể hoạt động như một hệ thống lưu trữ chung.",
        "Phân biệt RAID 0, RAID 1, RAID 5 và RAID 10 theo tốc độ, dung lượng và khả năng chịu lỗi.",
        "Biết parity trong RAID 5 dùng để khôi phục dữ liệu khi một ổ hỏng.",
        "Hiểu rebuild, hot spare, hardware RAID, software RAID và fake RAID.",
        "Nhớ nguyên tắc quan trọng: RAID giúp chịu lỗi ổ đĩa, nhưng không thay thế backup.",
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
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-rose-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-300 flex items-center justify-center font-bold mb-4">
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
    const targets = [
        {
            icon: <Zap />,
            title: "Tăng tốc độ",
            desc: "Chia dữ liệu qua nhiều ổ để đọc/ghi song song, như RAID 0 hoặc RAID 10.",
            color: "orange",
        },
        {
            icon: <Database />,
            title: "Tăng dung lượng",
            desc: "Gộp nhiều ổ thành một vùng lưu trữ lớn hơn ổ đơn lẻ.",
            color: "cyan",
        },
        {
            icon: <ShieldCheck />,
            title: "Tăng chịu lỗi",
            desc: "Một số cấu hình vẫn chạy khi một ổ hỏng, như RAID 1, RAID 5, RAID 10.",
            color: "emerald",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: RAID là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">RAID</strong> là viết tắt của{" "}
                    <strong className="text-cyan-300">
                        Redundant Array of Independent Disks
                    </strong>
                    , nghĩa là mảng các ổ đĩa độc lập có tính dự phòng. Nói đơn
                    giản: RAID là cách ghép nhiều ổ HDD/SSD thành một hệ thống
                    lưu trữ chung.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {targets.map((t) => (
                        <AnalogyCard key={t.title} {...t} />
                    ))}
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-red-300">Cực kỳ quan trọng:</strong>{" "}
                    RAID giúp hệ thống tiếp tục chạy khi một số ổ bị lỗi, nhưng
                    không bảo vệ khỏi xóa nhầm, format nhầm, virus/ransomware,
                    cháy máy, mất trộm, lỗi phần mềm hoặc file bị ghi đè.
                </div>
            </div>
        </section>
    );
}

function DailyAnalogy() {
    const analogies = [
        {
            icon: <Zap />,
            title: "RAID 0",
            desc: "Chia việc cho nhiều người làm cùng lúc để nhanh hơn, nhưng một người mất việc là cả dự án lỗi.",
            color: "orange",
        },
        {
            icon: <Copy />,
            title: "RAID 1",
            desc: "Photo tài liệu thành 2 bản giống nhau: mất một bản vẫn còn bản kia.",
            color: "emerald",
        },
        {
            icon: <Puzzle />,
            title: "RAID 5",
            desc: "Ghi dữ liệu kèm thông tin kiểm tra để dựng lại phần bị mất nếu một ổ hỏng.",
            color: "cyan",
        },
        {
            icon: <Layers3 />,
            title: "RAID 10",
            desc: "Vừa chia việc để nhanh, vừa có bản sao dự phòng theo từng cặp.",
            color: "purple",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: chia việc, photo và kiểm tra lỗi"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-4 gap-4">
                {analogies.map((a) => (
                    <AnalogyCard key={a.title} {...a} />
                ))}
            </div>
        </section>
    );
}

function RaidMechanismSimulator() {
    const raids = {
        none: {
            title: "Không RAID",
            color: "slate",
            formula: "File A → Ổ 1",
            desc: "Một ổ đơn lẻ. Nếu ổ hỏng và không có backup, dữ liệu có thể mất.",
            drives: ["A B C D", "—", "—", "—"],
        },
        r0: {
            title: "RAID 0",
            color: "orange",
            formula: "A1 → Ổ 1, A2 → Ổ 2, A3 → Ổ 1, A4 → Ổ 2",
            desc: "Striping: chia dữ liệu thành nhiều mảnh để tăng tốc. Không có dự phòng.",
            drives: ["A1  A3", "A2  A4", "—", "—"],
        },
        r1: {
            title: "RAID 1",
            color: "emerald",
            formula: "File A → Ổ 1 và Ổ 2",
            desc: "Mirroring: hai ổ chứa dữ liệu giống nhau. Một ổ hỏng, ổ còn lại vẫn còn dữ liệu.",
            drives: ["A B C D", "A B C D", "—", "—"],
        },
        r5: {
            title: "RAID 5",
            color: "cyan",
            formula: "Dữ liệu + parity phân bố trên tối thiểu 3 ổ",
            desc: "Striping kèm parity. Nếu một ổ hỏng, dùng dữ liệu còn lại và parity để dựng lại.",
            drives: ["A1  B1  P(C)", "A2  P(B) C1", "P(A) B2  C2", "—"],
        },
        r10: {
            title: "RAID 10",
            color: "purple",
            formula:
                "RAID 1 + RAID 0 = mirror theo cặp rồi stripe giữa các cặp",
            desc: "Nhanh và chịu lỗi tốt hơn RAID 0, rebuild thường dễ hơn RAID 5 nhưng tốn 50% dung lượng.",
            drives: ["A1 B1 C1", "A1 B1 C1", "A2 B2 C2", "A2 B2 C2"],
        },
    };
    const [active, setActive] = useState("r5");
    const item = raids[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="RAID ghi dữ liệu ra nhiều ổ như thế nào?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    {Object.entries(raids).map(([key, r]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl border p-4 font-bold transition-all ${active === key ? `${softBorder(r.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            {r.title}
                        </button>
                    ))}
                </div>
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            <Layers3 size={32} />
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed mb-5">
                            {item.desc}
                        </p>
                        <pre className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300 whitespace-pre-wrap">
                            {item.formula}
                        </pre>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {item.drives.map((value, idx) => (
                            <div
                                key={idx}
                                className={`rounded-3xl border p-5 ${value === "—" ? "bg-slate-950 border-slate-800 opacity-45" : softBorder(item.color)}`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <HardDrive
                                        className={
                                            value === "—"
                                                ? "text-slate-600"
                                                : textColor(item.color)
                                        }
                                    />
                                    <h4 className="font-bold text-white">
                                        Ổ {idx + 1}
                                    </h4>
                                </div>
                                <div className="font-mono text-sm bg-slate-950/70 rounded-2xl p-4 border border-slate-800 min-h-[70px] flex items-center text-slate-300">
                                    {value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function RaidTypeExplorer() {
    const types = {
        r0: {
            icon: <Zap />,
            title: "RAID 0",
            min: "2 ổ",
            usable: "100% tổng dung lượng",
            fault: "0 ổ",
            good: "Nhanh, tận dụng toàn bộ dung lượng",
            bad: "Một ổ hỏng là nguy hiểm toàn mảng",
            fit: "Scratch disk, dữ liệu tạm, game có thể tải lại",
            color: "orange",
        },
        r1: {
            icon: <Copy />,
            title: "RAID 1",
            min: "2 ổ",
            usable: "50% nếu 2 ổ bằng nhau",
            fault: "1 ổ",
            good: "Dễ hiểu, an toàn hơn ổ đơn",
            bad: "Mất một nửa dung lượng",
            fit: "NAS gia đình 2 bay, dữ liệu cá nhân",
            color: "emerald",
        },
        r5: {
            icon: <Puzzle />,
            title: "RAID 5",
            min: "3 ổ",
            usable: "Tổng dung lượng trừ 1 ổ",
            fault: "1 ổ",
            good: "Cân bằng dung lượng và dự phòng",
            bad: "Ghi chậm hơn, rebuild rủi ro",
            fit: "NAS 3–6 ổ, lưu trữ chung",
            color: "cyan",
        },
        r10: {
            icon: <Layers3 />,
            title: "RAID 10",
            min: "4 ổ",
            usable: "50% tổng dung lượng",
            fault: "Tùy ổ hỏng ở cặp nào",
            good: "Nhanh, phục hồi tốt hơn RAID 5",
            bad: "Tốn dung lượng, cần nhiều ổ",
            fit: "Server nhỏ, database, workstation, NAS hiệu năng",
            color: "purple",
        },
    };
    const [active, setActive] = useState("r1");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Các loại RAID phổ biến"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-3 mb-6">
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
                <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-3xl font-black text-white mb-2">
                            {item.title}
                        </h3>
                        <p className={`${textColor(item.color)} font-semibold`}>
                            Tối thiểu {item.min}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-3">
                        <InfoCard
                            label="Dung lượng dùng được"
                            value={item.usable}
                            color={item.color}
                        />
                        <InfoCard
                            label="Chịu hỏng ổ"
                            value={item.fault}
                            color={item.color}
                        />
                        <InfoCard
                            label="Phù hợp"
                            value={item.fit}
                            color={item.color}
                        />
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
                            label="Số ổ tối thiểu"
                            value={item.min}
                            color="blue"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function CapacityCalculator() {
    const [drives, setDrives] = useState(4);
    const [size, setSize] = useState(4);
    const [raid, setRaid] = useState("r5");
    const raw = drives * size;
    const usable =
        raid === "r0"
            ? raw
            : raid === "r1"
              ? size
              : raid === "r5"
                ? drives >= 3
                    ? (drives - 1) * size
                    : 0
                : raid === "r10"
                  ? drives >= 4
                      ? raw / 2
                      : 0
                  : raw;
    const raidLabel = {
        r0: "RAID 0",
        r1: "RAID 1",
        r5: "RAID 5",
        r10: "RAID 10",
    }[raid];
    const valid =
        (raid === "r0" && drives >= 2) ||
        (raid === "r1" && drives >= 2) ||
        (raid === "r5" && drives >= 3) ||
        (raid === "r10" && drives >= 4 && drives % 2 === 0);
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Lab: tính nhanh dung lượng RAID"
                icon={<Database />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-5">
                        <div>
                            <label className="block text-sm text-slate-400 mb-2">
                                Số ổ: {drives}
                            </label>
                            <input
                                type="range"
                                min="2"
                                max="8"
                                value={drives}
                                onChange={(e) =>
                                    setDrives(Number(e.target.value))
                                }
                                className="w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-slate-400 mb-2">
                                Dung lượng mỗi ổ: {size}TB
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="16"
                                value={size}
                                onChange={(e) =>
                                    setSize(Number(e.target.value))
                                }
                                className="w-full"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {Object.entries({
                                r0: "RAID 0",
                                r1: "RAID 1",
                                r5: "RAID 5",
                                r10: "RAID 10",
                            }).map(([key, label]) => (
                                <button
                                    key={key}
                                    onClick={() => setRaid(key)}
                                    className={`rounded-xl border p-3 font-bold text-sm ${raid === key ? "bg-emerald-500 text-white border-emerald-400" : "bg-slate-900 text-slate-400 border-slate-800"}`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div
                        className={`${valid ? "bg-emerald-500/5 border-emerald-500/20" : "bg-red-500/5 border-red-500/20"} border rounded-3xl p-6 flex flex-col justify-center`}
                    >
                        <h3 className="text-3xl font-black text-white mb-4">
                            {raidLabel}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3 mb-5">
                            <InfoCard
                                label="Dung lượng thô"
                                value={`${raw}TB`}
                                color="blue"
                            />
                            <InfoCard
                                label="Dung lượng dùng được"
                                value={valid ? `~${usable}TB` : "Không hợp lệ"}
                                color={valid ? "emerald" : "red"}
                            />
                        </div>
                        <p className="text-slate-300 leading-relaxed text-sm">
                            {!valid
                                ? "Cấu hình này chưa đủ số ổ hoặc không hợp lệ với loại RAID đã chọn. RAID 10 nên dùng số ổ chẵn và tối thiểu 4 ổ."
                                : raid === "r0"
                                  ? "RAID 0 dùng toàn bộ dung lượng nhưng không chịu hỏng ổ."
                                  : raid === "r1"
                                    ? "RAID 1 dùng dung lượng theo một ổ vì dữ liệu được mirror."
                                    : raid === "r5"
                                      ? "RAID 5 dùng tổng dung lượng trừ một ổ cho parity."
                                      : "RAID 10 dùng khoảng 50% dung lượng thô để đổi lấy mirror + stripe."}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        drives: {
            icon: <HardDrive />,
            title: "Số lượng ổ",
            detail: "RAID 0/1 cần tối thiểu 2 ổ, RAID 5 cần 3 ổ, RAID 10 cần 4 ổ.",
            impact: "NAS 2 bay thực tế thường chọn RAID 1 nếu dữ liệu quan trọng.",
        },
        size: {
            icon: <Database />,
            title: "Dung lượng ổ",
            detail: "RAID truyền thống hoạt động tốt nhất khi các ổ cùng dung lượng.",
            impact: "Ổ 4TB + 8TB trong RAID 1 thường chỉ dùng theo ổ nhỏ hơn, khoảng 4TB.",
        },
        speed: {
            icon: <Gauge />,
            title: "Tốc độ đọc/ghi",
            detail: "RAID 0 đọc/ghi tăng rõ, RAID 1 ghi gần ổ đơn, RAID 5 ghi bị ảnh hưởng do parity, RAID 10 tốt hơn RAID 5 trong nhiều tác vụ ghi.",
            impact: "Không chọn RAID chỉ vì tốc độ; phải xét rủi ro và backup.",
        },
        rebuild: {
            icon: <RefreshCcw />,
            title: "Rebuild",
            detail: "Khi thay ổ hỏng, hệ thống tái tạo dữ liệu lên ổ mới từ dữ liệu/parity còn lại.",
            impact: "Trong lúc rebuild, mảng chịu tải nặng và rủi ro tăng, đặc biệt với RAID 5 ổ lớn.",
        },
        spare: {
            icon: <ShieldCheck />,
            title: "Hot Spare",
            detail: "Ổ dự phòng đã cắm sẵn, tự tham gia rebuild khi ổ trong mảng hỏng.",
            impact: "Hợp NAS/server cần chạy liên tục.",
        },
        type: {
            icon: <Settings />,
            title: "Hardware / Software / Fake RAID",
            detail: "RAID có thể do card chuyên dụng, hệ điều hành/phần mềm hoặc firmware mainboard quản lý.",
            impact: "Gia đình/văn phòng nhỏ thường dùng NAS hoặc software RAID dễ quản lý hơn card RAID chuyên dụng.",
        },
    };
    const [active, setActive] = useState("rebuild");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
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

function RebuildSection() {
    const steps = [
        "Ổ trong RAID bị hỏng",
        "Thay ổ mới",
        "RAID đọc dữ liệu/parity từ các ổ còn lại",
        "Ghi lại dữ liệu lên ổ mới",
        "Mảng trở lại trạng thái an toàn hơn",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="orange"
                title="Rebuild: khi một ổ hỏng thì chuyện gì xảy ra?"
                icon={<RefreshCcw />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-5 gap-3 mb-6">
                    {steps.map((step, idx) => (
                        <div
                            key={step}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300"
                        >
                            <span className="text-orange-300 font-black">
                                {idx + 1}.{" "}
                            </span>
                            {step}
                        </div>
                    ))}
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-red-300">Rủi ro:</strong> Trong lúc
                    rebuild, các ổ còn lại phải hoạt động nặng. Nếu thêm một ổ
                    nữa hỏng, có thể mất dữ liệu, đặc biệt với RAID 5. Vì vậy
                    mảng degraded cần thay ổ sớm và phải có backup.
                </div>
            </div>
        </section>
    );
}

function RaidImplementationGuide() {
    const rows = [
        [
            "Hardware RAID",
            "Có card RAID chuyên dụng xử lý",
            "Server, doanh nghiệp",
            "purple",
        ],
        [
            "Software RAID",
            "Hệ điều hành/phần mềm quản lý",
            "NAS, Linux mdadm, ZFS, Windows Storage Spaces",
            "emerald",
        ],
        [
            "Fake RAID / Firmware RAID",
            "RAID qua firmware mainboard",
            "Người dùng phổ thông nhưng cần cẩn thận khi chuyển máy",
            "orange",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Hardware RAID, Software RAID, Fake RAID"
                icon={<Server />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[820px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Loại</th>
                            <th className="p-4">Đặc điểm</th>
                            <th className="p-4">Phù hợp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([type, feature, fit, color]) => (
                            <tr
                                key={type}
                                className="border-t border-slate-800"
                            >
                                <td
                                    className={`p-4 font-extrabold ${textColor(color)}`}
                                >
                                    {type}
                                </td>
                                <td className="p-4 text-slate-300">
                                    {feature}
                                </td>
                                <td className="p-4 text-slate-300">{fit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Server />,
            title: "NAS 2 bay chạy RAID 1",
            subtitle: "Ví dụ Synology DS224+ + 2 x 4TB NAS HDD",
            color: "emerald",
            points: [
                "Dung lượng thô 8TB",
                "Dùng được khoảng 4TB",
                "Một ổ hỏng, NAS vẫn còn dữ liệu trên ổ kia",
                "Phù hợp ảnh gia đình, đồng bộ file, backup laptop/PC",
                "Vẫn cần backup ra ổ ngoài hoặc cloud",
            ],
            lesson: "RAID 1 giúp chịu lỗi ổ đĩa, không bảo vệ khỏi xóa nhầm hoặc ransomware.",
        },
        {
            icon: <Zap />,
            title: "RAID 0 cho dữ liệu tạm",
            subtitle: "2 x 1TB SSD RAID 0",
            color: "orange",
            points: [
                "Dung lượng dùng được khoảng 2TB",
                "Tốc độ đọc/ghi có thể tăng",
                "Một ổ hỏng là nguy hiểm toàn mảng",
                "Hợp scratch disk, cache, file render tạm",
                "Không hợp ảnh/tài liệu quan trọng duy nhất",
            ],
            lesson: "RAID 0 chỉ nên dùng cho dữ liệu tạm hoặc dữ liệu có thể tải lại.",
        },
        {
            icon: <Layers3 />,
            title: "RAID 5 trong hộp 4 bay",
            subtitle: "4 x 4TB HDD RAID 5",
            color: "cyan",
            points: [
                "Dung lượng thô 16TB",
                "Dùng được khoảng 12TB",
                "Chịu hỏng 1 ổ",
                "Cân bằng dung lượng và dự phòng",
                "Rebuild ổ lớn có thể lâu và rủi ro",
            ],
            lesson: "RAID 5 tốt cho dung lượng, nhưng phải theo dõi sức khỏe ổ và có backup.",
        },
        {
            icon: <ShieldCheck />,
            title: "RAID 10 cho hiệu năng và độ ổn định",
            subtitle: "4 x 4TB RAID 10",
            color: "purple",
            points: [
                "Dung lượng thô 16TB",
                "Dùng được khoảng 8TB",
                "Mirror + stripe",
                "Ghi tốt hơn RAID 5 trong nhiều workload",
                "Tốn 50% dung lượng thô",
            ],
            lesson: "RAID 10 hợp database nhỏ/vừa, server nội bộ, workstation xử lý file lớn.",
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

function UseCaseLab() {
    const scenarios = {
        family: {
            icon: <Server />,
            title: "NAS 2 bay gia đình",
            answer: "Nếu dữ liệu quan trọng, chọn RAID 1 hoặc SHR tương đương. Sau đó vẫn backup ra ổ ngoài hoặc cloud.",
            color: "emerald",
        },
        temp: {
            icon: <Zap />,
            title: "Scratch disk / cache",
            answer: "RAID 0 có thể dùng nếu dữ liệu tạm, có thể tạo lại hoặc tải lại. Không lưu bản duy nhất của dữ liệu quan trọng.",
            color: "orange",
        },
        fourbay: {
            icon: <Layers3 />,
            title: "NAS/hộp 4 bay",
            answer: "RAID 5 cho dung lượng tốt hơn; RAID 10 cho hiệu năng và rebuild thường dễ chịu hơn nhưng mất 50% dung lượng.",
            color: "cyan",
        },
        database: {
            icon: <Database />,
            title: "Database nhỏ/vừa",
            answer: "RAID 10 thường phù hợp hơn RAID 5 nếu cần ghi tốt và rebuild ổn định hơn.",
            color: "purple",
        },
        backup: {
            icon: <ShieldCheck />,
            title: "Dữ liệu cực kỳ quan trọng",
            answer: "Dùng RAID + backup. RAID giữ hệ thống chạy khi ổ hỏng; backup giúp khôi phục khi xóa nhầm, ransomware, cháy nổ hoặc lỗi phần mềm.",
            color: "rose",
        },
    };
    const [active, setActive] = useState("family");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: chọn RAID theo tình huống"
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

function CommonMistakes() {
    const mistakes = [
        {
            wrong: "RAID là backup",
            right: "RAID không phải backup. RAID không bảo vệ khỏi xóa nhầm, ransomware, cháy nổ, mất trộm, lỗi phần mềm hoặc file bị ghi đè.",
        },
        {
            wrong: "RAID 0 vừa nhanh vừa an toàn",
            right: "RAID 0 nhanh nhưng không có dự phòng. Một ổ hỏng là toàn bộ mảng có nguy cơ mất dữ liệu.",
        },
        {
            wrong: "RAID 1 có 2 ổ nên dung lượng gấp đôi",
            right: "RAID 1 là mirror. 2 x 4TB RAID 1 dùng được khoảng 4TB, không phải 8TB.",
        },
        {
            wrong: "RAID 5 hỏng 1 ổ thì cứ để đó dùng tiếp lâu dài",
            right: "Khi RAID 5 degraded, cần thay ổ càng sớm càng tốt và rebuild. Nếu thêm ổ khác hỏng trước khi rebuild xong, dữ liệu có thể mất.",
        },
        {
            wrong: "Dùng ổ khác dung lượng trong RAID không sao",
            right: "Trong RAID truyền thống, dung lượng thường bị giới hạn theo ổ nhỏ nhất; phần dư có thể lãng phí.",
        },
    ];
    const tips = [
        "Dữ liệu quan trọng: RAID + backup, không chọn một trong hai.",
        "NAS 2 bay gia đình nên ưu tiên RAID 1 hoặc SHR tương đương nếu dữ liệu quan trọng.",
        "RAID 0 chỉ dùng cho dữ liệu tạm hoặc dữ liệu có thể tải lại.",
        "RAID 5 hợp 3–6 ổ nhưng cần theo dõi sức khỏe ổ và không để degraded quá lâu.",
        "RAID 10 tốt nếu cần hiệu năng và độ ổn định hơn RAID 5, đổi lại mất 50% dung lượng.",
        "Luôn bật cảnh báo lỗi ổ, SMART test định kỳ và cảnh báo nhiệt độ trong NAS/RAID software.",
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
                        <Lightbulb /> Mẹo chọn RAID
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
                            <p>RAID = Redundant Array of Independent Disks</p>
                            <p className="text-slate-300">
                                = nhiều ổ phối hợp thành một hệ thống lưu trữ
                            </p>
                            <br />
                            <p className="text-slate-500"># Các loại chính</p>
                            <p className="text-slate-300">
                                RAID 0 = stripe, nhanh, không dự phòng
                            </p>
                            <p className="text-slate-300">
                                RAID 1 = mirror, 2 ổ dùng được khoảng 1 ổ
                            </p>
                            <p className="text-slate-300">
                                RAID 5 = stripe + parity, tối thiểu 3 ổ, chịu
                                hỏng 1 ổ
                            </p>
                            <p className="text-slate-300">
                                RAID 10 = RAID 1 + RAID 0, tối thiểu 4 ổ, dùng
                                khoảng 50%
                            </p>
                            <br />
                            <p className="text-red-300">
                                RAID không phải backup.
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
        question: "RAID 0 có đặc điểm chính là gì?",
        options: [
            "Sao chép dữ liệu để an toàn hơn",
            "Chia dữ liệu qua nhiều ổ để tăng tốc, nhưng không có dự phòng",
            "Chỉ dùng được với một ổ",
            "Luôn an toàn hơn RAID 1",
        ],
        correct: 1,
        explanation:
            "RAID 0 dùng striping để tăng tốc và tận dụng dung lượng, nhưng không có dự phòng.",
    },
    {
        question:
            "RAID 1 với 2 ổ 4TB cho dung lượng dùng được khoảng bao nhiêu?",
        options: ["2TB", "4TB", "8TB", "16TB"],
        correct: 1,
        explanation: "RAID 1 mirror dữ liệu. 2 x 4TB dùng được khoảng 4TB.",
    },
    {
        question: "RAID 5 cần tối thiểu bao nhiêu ổ?",
        options: ["1 ổ", "2 ổ", "3 ổ", "10 ổ"],
        correct: 2,
        explanation: "RAID 5 cần tối thiểu 3 ổ để phân bố dữ liệu và parity.",
    },
    {
        question: "Nhận định nào đúng nhất?",
        options: [
            "RAID thay thế hoàn toàn backup",
            "RAID chỉ dùng cho màn hình",
            "RAID giúp chịu lỗi ổ đĩa trong một số cấu hình, nhưng vẫn cần backup",
            "RAID 0 an toàn nhất",
        ],
        correct: 2,
        explanation:
            "RAID giúp chịu lỗi phần cứng trong một số cấu hình, nhưng không bảo vệ khỏi xóa nhầm, ransomware, cháy nổ hoặc lỗi phần mềm.",
    },
    {
        question: "Hot Spare là gì?",
        options: [
            "Ổ dự phòng đã cắm sẵn để tự tham gia rebuild khi cần",
            "Cáp màn hình",
            "Tốc độ mạng Wi-Fi",
            "Dung lượng RAM",
        ],
        correct: 0,
        explanation:
            "Hot Spare là ổ dự phòng đã cắm sẵn, có thể tự tham gia rebuild khi ổ trong mảng hỏng.",
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
    }
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
                Bạn đã hiểu RAID 0, RAID 1, RAID 5 và RAID 10. Tiếp theo là lưu
                trữ đám mây và NAS — nơi RAID được ứng dụng rất nhiều trong gia
                đình/văn phòng nhỏ, còn cloud giúp đồng bộ và backup khi thiết
                bị vật lý gặp sự cố.
            </p>
            <Link
                to="/phan-4-8"
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-rose-500/20"
            >
                Bài tiếp theo: 4.8 — Lưu trữ đám mây và NAS{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "rose" }) {
    const colorMap = {
        rose: "bg-rose-500/20 text-rose-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-emerald-500/10 border-emerald-400/50" : softBorder(color)}`}
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
        rose: "bg-rose-500/10 text-rose-300 border border-rose-500/20",
        slate: "bg-slate-700/40 text-slate-300 border border-slate-600/30",
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
    return map[color] || map.rose;
}
function softBorder(color) {
    const map = {
        rose: "bg-rose-500/5 border-rose-500/20",
        slate: "bg-slate-900 border-slate-800",
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
    return map[color] || map.rose;
}
function textColor(color) {
    const map = {
        rose: "text-rose-300",
        slate: "text-slate-300",
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
    return map[color] || "text-rose-300";
}
