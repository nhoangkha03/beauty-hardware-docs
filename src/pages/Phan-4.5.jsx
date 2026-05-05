import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    CircleDot,
    Database,
    Disc,
    Gauge,
    HardDrive,
    Layers3,
    Lightbulb,
    Monitor,
    PackageCheck,
    Puzzle,
    RefreshCcw,
    Search,
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
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-violet-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-violet-500/10 border border-violet-400/30 flex items-center justify-center shadow-lg shadow-violet-500/10">
                            <Disc className="text-violet-400" size={24} />
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
                    <div className="text-sm font-semibold text-violet-300 bg-violet-400/10 px-3 py-1 rounded-full border border-violet-400/20">
                        Bài 4.5
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <MoviePlayerAnalogy />
                <OpticalFlowSimulator />
                <DiscTypeExplorer />
                <RecordableGuide />
                <SpecsExplorer />
                <RealExamples />
                <UseCaseLab />
                <PreservationGuide />
                <CommonMistakes />
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
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-violet-300">
                        <BookOpen size={16} /> Phần 4: Bộ lưu trữ — Storage
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Optical Drive
                        <span className="block text-violet-400">
                            CD, DVD, Blu-ray
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Ổ đĩa quang dùng tia laser để đọc hoặc ghi dữ liệu trên
                        đĩa CD, DVD và Blu-ray. Dù không còn phổ biến như trước,
                        nó vẫn hữu ích khi đọc dữ liệu cũ, phim đĩa, game
                        console hoặc archive offline.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<Disc size={16} />}
                            text="CD / DVD / Blu-ray"
                        />
                        <Tag icon={<Zap size={16} />} text="Laser" />
                        <Tag
                            icon={<RefreshCcw size={16} />}
                            text="ROM / R / RW"
                        />
                        <Tag icon={<Gauge size={16} />} text="4x / 8x / 16x" />
                        <Tag
                            icon={<ShieldCheck size={16} />}
                            text="M-DISC / archive"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="relative bg-slate-900 rounded-3xl border border-slate-800 p-6 h-[330px] overflow-hidden">
                        <div className="absolute left-1/2 top-1/2 w-56 h-56 -translate-x-1/2 -translate-y-1/2 rounded-full border-[18px] border-violet-500/20 bg-slate-950 shadow-inner flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-violet-500/20 border border-violet-400/30 flex items-center justify-center">
                                <Disc
                                    className="text-violet-300 animate-spin"
                                    size={38}
                                />
                            </div>
                        </div>
                        <div className="absolute left-16 top-20 w-44 h-1 bg-cyan-400/80 rounded-full origin-left rotate-[30deg] shadow-lg shadow-cyan-500/40" />
                        <div className="absolute left-12 top-16 w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center">
                            <Zap className="text-cyan-300" size={24} />
                        </div>
                        <div className="absolute bottom-5 left-5 right-5 bg-slate-950/90 border border-slate-800 rounded-2xl p-4 font-mono text-sm">
                            <p className="text-slate-500">// Optical Drive</p>
                            <p>Đĩa quay + laser quét bề mặt</p>
                            <p className="text-violet-300">
                                → cảm biến → tín hiệu 0/1 → máy đọc file
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu ổ đĩa quang là gì và vì sao gọi là optical drive.",
        "Nắm cơ chế CD/DVD/Blu-ray đọc dữ liệu bằng tia laser và cảm biến quang học.",
        "Phân biệt CD, DVD, Blu-ray, M-DISC theo dung lượng và mục đích sử dụng.",
        "Hiểu ROM, R, RW/RE; Reader và Writer/Burner khác nhau thế nào.",
        "Biết khi nào còn nên dùng ổ quang và cách bảo quản đĩa để giảm rủi ro mất dữ liệu.",
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
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-violet-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-300 flex items-center justify-center font-bold mb-4">
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
        ["HDD", "Đĩa từ quay + đầu đọc/ghi từ tính", "orange"],
        ["SSD", "Chip NAND Flash", "emerald"],
        ["Ổ đĩa quang", "Tia laser đọc/ghi trên bề mặt đĩa", "violet"],
        ["USB Flash", "Chip nhớ flash qua cổng USB", "cyan"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: ổ đĩa quang là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">Ổ đĩa quang</strong>{" "}
                            hay{" "}
                            <strong className="text-cyan-300">
                                Optical Drive
                            </strong>{" "}
                            là thiết bị dùng{" "}
                            <strong className="text-violet-300">
                                tia laser
                            </strong>{" "}
                            để đọc hoặc ghi dữ liệu trên đĩa quang như CD, DVD
                            và Blu-ray.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-cyan-300">
                                Gọi là “quang”
                            </strong>{" "}
                            vì thiết bị dùng ánh sáng laser, không dùng từ tính
                            như HDD và không dùng chip NAND như SSD.
                        </div>
                        <p>
                            Ngày nay laptop mới ít còn ổ DVD, nhưng ổ quang vẫn
                            hữu ích để đọc đĩa cũ, đĩa nhạc/phim, đĩa game
                            console hoặc dùng trong một số thiết bị chuyên dụng.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <Layers3 className="text-cyan-300" /> So sánh cách
                            lưu/đọc
                        </h3>
                        <div className="space-y-3">
                            {rows.map(([name, desc, color]) => (
                                <div
                                    key={name}
                                    className={`${softBorder(color)} border rounded-2xl p-4`}
                                >
                                    <p
                                        className={`${textColor(color)} font-bold`}
                                    >
                                        {name}
                                    </p>
                                    <p className="text-sm text-slate-300 mt-1">
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

function MoviePlayerAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: đầu đọc đĩa phim/nhạc"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-4">
                    <AnalogyCard
                        icon={<Disc />}
                        title="Đưa đĩa vào"
                        desc="CD/DVD/Blu-ray được đặt vào khay hoặc khe đọc."
                        color="violet"
                    />
                    <AnalogyCard
                        icon={<RefreshCcw />}
                        title="Đĩa quay"
                        desc="Motor quay đĩa để laser quét bề mặt theo vị trí cần đọc."
                        color="cyan"
                    />
                    <AnalogyCard
                        icon={<Zap />}
                        title="Laser quét"
                        desc="Tia laser chiếu lên bề mặt đĩa và phản xạ lại cảm biến."
                        color="amber"
                    />
                    <AnalogyCard
                        icon={<Database />}
                        title="Dữ liệu số"
                        desc="Ổ phân biệt vùng phản xạ để chuyển thành tín hiệu 0 và 1."
                        color="emerald"
                    />
                </div>
            </div>
        </section>
    );
}

function OpticalFlowSimulator() {
    const flows = {
        read: {
            title: "Khi đọc đĩa",
            color: "violet",
            steps: [
                {
                    icon: <Disc />,
                    title: "Đưa đĩa vào ổ",
                    desc: "CD, DVD hoặc Blu-ray được đặt vào khay/khe của ổ quang.",
                },
                {
                    icon: <RefreshCcw />,
                    title: "Motor quay đĩa",
                    desc: "Đĩa quay để laser có thể quét đúng vùng dữ liệu.",
                },
                {
                    icon: <Zap />,
                    title: "Tia laser chiếu lên bề mặt",
                    desc: "Laser đọc các vết rất nhỏ trên bề mặt đĩa.",
                },
                {
                    icon: <Search />,
                    title: "Cảm biến nhận ánh sáng phản xạ",
                    desc: "Các vùng phản xạ khác nhau được nhận biết bởi cảm biến quang học.",
                },
                {
                    icon: <Database />,
                    title: "Chuyển thành tín hiệu số",
                    desc: "Ổ đĩa chuyển tín hiệu quang thành dữ liệu 0 và 1 để máy tính đọc file/phim/nhạc.",
                },
            ],
        },
        burn: {
            title: "Khi ghi đĩa",
            color: "orange",
            steps: [
                {
                    icon: <Monitor />,
                    title: "Bạn chọn Burn Disc",
                    desc: "Phần mềm gửi dữ liệu cần ghi xuống ổ quang.",
                },
                {
                    icon: <Zap />,
                    title: "Laser công suất phù hợp",
                    desc: "Ổ dùng laser để tác động lên lớp vật liệu ghi của đĩa.",
                },
                {
                    icon: <CircleDot />,
                    title: "Tạo vùng biểu diễn dữ liệu",
                    desc: "Các vùng trên đĩa được thay đổi để biểu diễn bit dữ liệu.",
                },
                {
                    icon: <CheckCircle2 />,
                    title: "Hoàn tất ghi",
                    desc: "Đĩa chứa file sau khi burn xong.",
                },
                {
                    icon: <ShieldCheck />,
                    title: "Verify nếu quan trọng",
                    desc: "Kiểm tra đọc lại dữ liệu sau ghi để giảm rủi ro lỗi.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("read");
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
                title="CD/DVD/Blu-ray đọc và ghi dữ liệu như thế nào?"
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
                <div className="mt-6 bg-violet-500/10 border border-violet-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-violet-300">Ghi nhớ:</strong> Ổ
                    quang đọc/ghi bằng laser, HDD đọc/ghi bằng từ tính, SSD
                    đọc/ghi bằng điện tử trên chip NAND.
                </div>
            </div>
        </section>
    );
}

function DiscTypeExplorer() {
    const discs = {
        cd: {
            icon: <Disc />,
            title: "CD",
            cap: "Khoảng 650–700MB",
            good: "Rẻ, từng rất phổ biến cho nhạc/tài liệu nhỏ",
            bad: "Dung lượng rất thấp",
            fit: "Audio CD, file nhỏ, máy cũ",
            color: "cyan",
        },
        dvd: {
            icon: <Disc />,
            title: "DVD",
            cap: "4.7GB một lớp, 8.5GB hai lớp",
            good: "Dung lượng hơn CD, từng phổ biến cho phim/bộ cài",
            bad: "Thấp so với USB/SSD hiện nay",
            fit: "Phim DVD, bộ cài cũ, backup nhỏ",
            color: "violet",
        },
        bluray: {
            icon: <Disc />,
            title: "Blu-ray",
            cap: "25GB một lớp, 50GB hai lớp",
            good: "Dung lượng cao hơn, dùng cho phim HD/4K",
            bad: "Cần ổ Blu-ray, giá cao hơn",
            fit: "Phim chất lượng cao, archive lớn hơn",
            color: "blue",
        },
        bdxl: {
            icon: <Database />,
            title: "BDXL",
            cap: "100GB, 128GB tùy loại",
            good: "Dung lượng cao trong nhóm đĩa quang",
            bad: "Ổ và đĩa tương thích ít phổ biến hơn",
            fit: "Archive chuyên biệt",
            color: "emerald",
        },
        mdisc: {
            icon: <ShieldCheck />,
            title: "M-DISC",
            cap: "Tùy loại DVD/Blu-ray",
            good: "Hướng tới lưu trữ lâu dài",
            bad: "Cần ổ hỗ trợ ghi M-DISC",
            fit: "Lưu trữ tài liệu lâu dài",
            color: "amber",
        },
    };
    const [active, setActive] = useState("dvd");
    const item = discs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Các loại đĩa quang phổ biến"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    {Object.entries(discs).map(([key, d]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(d.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(d.icon, { size: 20 })}{" "}
                                {d.title}
                            </div>
                            <p className="text-xs opacity-75 mt-1">{d.cap}</p>
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
                        <h3 className="text-3xl font-black text-white mb-2">
                            {item.title}
                        </h3>
                        <p className={`${textColor(item.color)} font-semibold`}>
                            {item.cap}
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

function RecordableGuide() {
    const rows = [
        [
            "ROM",
            "Read-Only Memory, đĩa chỉ đọc",
            "Không",
            "CD-ROM, DVD-ROM, BD-ROM",
            "cyan",
        ],
        [
            "R",
            "Recordable, ghi một lần",
            "Không ghi đè sau khi đã ghi",
            "CD-R, DVD-R, BD-R",
            "orange",
        ],
        [
            "RW / RE",
            "Rewritable, ghi xóa nhiều lần",
            "Có",
            "CD-RW, DVD-RW, BD-RE",
            "emerald",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="ROM, R, RW/RE: đĩa chỉ đọc hay ghi được?"
                icon={<RefreshCcw />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[780px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Ký hiệu</th>
                            <th className="p-4">Ý nghĩa</th>
                            <th className="p-4">Ghi lại được không?</th>
                            <th className="p-4">Ví dụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(
                            ([symbol, meaning, rewritable, example, color]) => (
                                <tr
                                    key={symbol}
                                    className="border-t border-slate-800"
                                >
                                    <td
                                        className={`p-4 font-extrabold ${textColor(color)}`}
                                    >
                                        {symbol}
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        {meaning}
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        {rewritable}
                                    </td>
                                    <td className="p-4 text-slate-300 font-mono">
                                        {example}
                                    </td>
                                </tr>
                            ),
                        )}
                    </tbody>
                </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <RuleCard
                    label="Reader"
                    value="Chủ yếu đọc đĩa, không nhất thiết ghi được."
                    color="cyan"
                />
                <RuleCard
                    label="Writer / Burner"
                    value="Có thể ghi đĩa nếu đúng loại đĩa được hỗ trợ."
                    color="emerald"
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
            detail: "CD 650–700MB, DVD 4.7/8.5GB, Blu-ray 25/50GB, BDXL 100/128GB.",
            impact: "Dung lượng đĩa quang nhỏ hơn nhiều so với USB 64GB hoặc SSD 1TB trong sử dụng hằng ngày.",
        },
        speed: {
            icon: <Gauge />,
            title: "Tốc độ x",
            detail: "CD 24x, DVD 8x/16x, BD 6x là bội số tốc độ chuẩn của từng loại đĩa.",
            impact: "Không nên so trực tiếp 8x DVD với 8x Blu-ray vì tốc độ cơ sở khác nhau.",
        },
        connection: {
            icon: <Usb />,
            title: "Chuẩn kết nối",
            detail: "SATA cho ổ gắn trong PC, USB-A/USB-C cho ổ gắn ngoài, IDE/PATA cho máy rất cũ.",
            impact: "Laptop mới không còn ổ DVD thì dùng ổ quang gắn ngoài USB là tiện nhất.",
        },
        support: {
            icon: <PackageCheck />,
            title: "Khả năng đọc/ghi",
            detail: "CD-ROM, DVD-ROM, DVD Writer, Blu-ray Reader, Blu-ray Writer hỗ trợ khác nhau.",
            impact: "Ổ DVD không đọc Blu-ray. Muốn đọc Blu-ray phải mua ổ hỗ trợ Blu-ray.",
        },
        region: {
            icon: <Puzzle />,
            title: "Region Code",
            detail: "DVD/Blu-ray phim thương mại có thể giới hạn vùng mã khu vực.",
            impact: "Đĩa phim mua từ nước khác có thể không phát được nếu khác region.",
        },
        durability: {
            icon: <ShieldCheck />,
            title: "Độ bền & bảo quản",
            detail: "Đĩa có thể hỏng do trầy xước, ẩm mốc, nắng, nhiệt, lớp ghi lão hóa hoặc đĩa chất lượng thấp.",
            impact: "Cất trong hộp, tránh nắng/ẩm, không chạm mặt ghi và verify sau khi burn dữ liệu quan trọng.",
        },
    };
    const [active, setActive] = useState("support");
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

function RealExamples() {
    const examples = [
        {
            icon: <Usb />,
            title: "ASUS SDRW-08D2S-U",
            subtitle: "Ổ ghi DVD gắn ngoài USB",
            color: "cyan",
            points: [
                "Kết nối USB",
                "Dùng cho laptop/PC không còn ổ DVD",
                "Đọc CD/DVD cũ",
                "Ghi DVD tài liệu nhỏ",
                "Không đọc Blu-ray nếu chỉ là ổ DVD",
            ],
            lesson: "Phù hợp khi cần đọc đĩa driver, đĩa tài liệu, đĩa nhạc hoặc bộ cài cũ.",
        },
        {
            icon: <Disc />,
            title: "LG BP60NB10",
            subtitle: "Ổ Blu-ray/DVD gắn ngoài",
            color: "violet",
            points: [
                "Dùng cho đĩa Blu-ray",
                "Có thể đọc CD/DVD/Blu-ray tùy hỗ trợ",
                "Ghi BD-R/BD-RE tùy mẫu",
                "Xem Blu-ray cần phần mềm phù hợp",
                "Không nên dùng hằng ngày thay SSD/USB",
            ],
            lesson: "Muốn đọc Blu-ray phải mua đúng ổ Blu-ray; ổ DVD thông thường không đọc được Blu-ray.",
        },
        {
            icon: <ShieldCheck />,
            title: "Verbatim BD-R 25GB",
            subtitle: "Đĩa Blu-ray ghi một lần",
            color: "emerald",
            points: [
                "Dung lượng 25GB một lớp",
                "Lưu được nhiều hơn DVD 4.7GB",
                "Phù hợp archive tài liệu/ảnh/video vừa phải",
                "Không tiện bằng HDD/SSD cho backup thay đổi thường xuyên",
                "Cần ổ Blu-ray để đọc/ghi",
            ],
            lesson: "Đĩa quang hợp archive offline, nhưng không nên là bản backup duy nhất.",
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

function UseCaseLab() {
    const scenarios = {
        old: {
            icon: <Disc />,
            title: "Đọc đĩa cũ",
            answer: "Ổ DVD gắn ngoài USB là lựa chọn tiện nếu bạn có CD/DVD tài liệu, driver, đĩa nhạc hoặc bộ cài cũ cần đọc.",
            color: "cyan",
        },
        bluray: {
            icon: <Monitor />,
            title: "Xem Blu-ray",
            answer: "Cần ổ Blu-ray Reader/Writer và phần mềm phát Blu-ray phù hợp. Ổ DVD thông thường không đọc được Blu-ray.",
            color: "violet",
        },
        windows: {
            icon: <Usb />,
            title: "Cài Windows",
            answer: "Hiện nay USB boot tiện hơn nhiều so với DVD. Chỉ dùng DVD nếu máy/quy trình cũ bắt buộc.",
            color: "orange",
        },
        archive: {
            icon: <ShieldCheck />,
            title: "Archive offline",
            answer: "Có thể dùng BD-R/M-DISC cho dữ liệu ít thay đổi, nhưng vẫn nên có thêm bản trên ổ ngoài/NAS/cloud.",
            color: "emerald",
        },
        industrial: {
            icon: <Settings />,
            title: "Thiết bị chuyên dụng cũ",
            answer: "Một số máy công nghiệp/y tế/hệ thống cũ vẫn dùng CD/DVD, nên ổ quang vẫn có giá trị bảo trì.",
            color: "blue",
        },
    };
    const [active, setActive] = useState("old");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Lab: khi nào còn nên dùng ổ quang?"
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

function PreservationGuide() {
    const tips = [
        "Cất đĩa trong hộp",
        "Tránh ánh nắng trực tiếp",
        "Tránh ẩm và nhiệt độ cao",
        "Không chạm tay vào mặt ghi",
        "Không dùng bút/keo làm hỏng mặt nhãn",
        "Khi burn dữ liệu quan trọng, bật verify sau khi ghi",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="emerald"
                title="Bảo quản đĩa quang và backup"
                icon={<ShieldCheck />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <AnalogyCard
                        icon={<AlertTriangle />}
                        title="Rủi ro"
                        desc="Trầy xước, ẩm mốc, lớp ghi lão hóa, đĩa rẻ chất lượng thấp hoặc ổ đọc tương lai khó tìm."
                        color="red"
                    />
                    <AnalogyCard
                        icon={<ShieldCheck />}
                        title="Bảo quản"
                        desc="Cất khô ráo, tránh nắng/ẩm, tránh chạm mặt ghi và dùng hộp riêng."
                        color="emerald"
                    />
                    <AnalogyCard
                        icon={<HardDrive />}
                        title="Không chỉ một bản"
                        desc="Dữ liệu quan trọng nên có thêm bản ở ổ ngoài, NAS hoặc cloud."
                        color="blue"
                    />
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                    {tips.map((tip) => (
                        <RuleCard
                            key={tip}
                            label="Mẹo"
                            value={tip}
                            color="emerald"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CommonMistakes() {
    const mistakes = [
        {
            wrong: "Ổ DVD đọc được Blu-ray",
            right: "Ổ DVD không đọc được Blu-ray. Muốn đọc Blu-ray cần ổ hỗ trợ Blu-ray.",
        },
        {
            wrong: "Đĩa quang là backup an toàn tuyệt đối",
            right: "Đĩa có thể trầy, mốc, lão hóa hoặc khó tìm ổ đọc sau này. Dữ liệu quan trọng cần nhiều bản.",
        },
        {
            wrong: "Ghi đĩa tốc độ càng cao càng tốt",
            right: "Ghi quá nhanh trên đĩa chất lượng thấp có thể tăng lỗi. Dữ liệu quan trọng nên ghi tốc độ vừa phải và bật verify.",
        },
        {
            wrong: "CD/DVD hiện nay vô dụng hoàn toàn",
            right: "Ít phổ biến hơn nhưng vẫn hữu ích cho dữ liệu cũ, nhạc/phim, game console, thiết bị công nghiệp/y tế và lưu trữ offline.",
        },
    ];
    const tips = [
        "Chỉ mua ổ quang nếu thật sự có đĩa cần đọc/ghi.",
        "Laptop mới không có ổ DVD thì dùng ổ quang gắn ngoài USB.",
        "Muốn đọc Blu-ray phải mua đúng ổ Blu-ray.",
        "Khi ghi dữ liệu quan trọng ra đĩa, bật verify sau khi burn.",
        "Không dùng đĩa quang làm bản backup duy nhất.",
        "Cất đĩa trong hộp, tránh nắng và ẩm.",
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
                        <Lightbulb /> Mẹo dùng ổ quang
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
                        <span className="bg-violet-500/20 text-violet-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-violet-300 border border-slate-800 shadow-inner space-y-2">
                            <p>Optical Drive = ổ đọc/ghi đĩa bằng laser</p>
                            <br />
                            <p className="text-slate-500"># Loại đĩa</p>
                            <p className="text-slate-300">CD ≈ 700MB</p>
                            <p className="text-slate-300">
                                DVD = 4.7GB / 8.5GB
                            </p>
                            <p className="text-slate-300">
                                Blu-ray = 25GB / 50GB
                            </p>
                            <p className="text-slate-300">
                                BDXL = 100GB / 128GB
                            </p>
                            <br />
                            <p className="text-slate-500"># Ký hiệu</p>
                            <p className="text-slate-300">ROM = chỉ đọc</p>
                            <p className="text-slate-300">R = ghi một lần</p>
                            <p className="text-slate-300">
                                RW/RE = ghi xóa nhiều lần
                            </p>
                            <br />
                            <p className="text-red-300">
                                Ổ DVD không đọc được Blu-ray.
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
        question: "Ổ đĩa quang đọc dữ liệu chủ yếu bằng gì?",
        options: ["Đầu đọc từ tính", "Tia laser", "Chip NAND Flash", "RAM"],
        correct: 1,
        explanation:
            "Ổ đĩa quang dùng tia laser để đọc hoặc ghi dữ liệu trên bề mặt CD/DVD/Blu-ray.",
    },
    {
        question: "Loại đĩa nào thường có dung lượng lớn hơn DVD?",
        options: ["CD", "Blu-ray", "Đĩa mềm", "Audio cassette"],
        correct: 1,
        explanation:
            "Blu-ray thường có 25GB một lớp hoặc 50GB hai lớp, lớn hơn DVD 4.7GB/8.5GB.",
    },
    {
        question: "Ổ DVD thông thường có đọc được Blu-ray không?",
        options: [
            "Có, luôn luôn được",
            "Không, cần ổ Blu-ray",
            "Chỉ cần cài thêm RAM",
            "Chỉ cần đổi dây HDMI",
        ],
        correct: 1,
        explanation: "Ổ DVD đọc CD/DVD. Muốn đọc Blu-ray cần ổ hỗ trợ Blu-ray.",
    },
    {
        question: "Đĩa DVD-R nghĩa là gì?",
        options: [
            "Đĩa DVD chỉ đọc từ nhà sản xuất",
            "Đĩa DVD ghi một lần",
            "Đĩa DVD ghi xóa vô hạn không giới hạn",
            "Đĩa DVD dùng làm RAM",
        ],
        correct: 1,
        explanation:
            "DVD-R là đĩa DVD Recordable, ghi một lần và không ghi đè sau khi đã ghi.",
    },
    {
        question: "Khi ghi dữ liệu quan trọng ra đĩa, thao tác nào nên bật?",
        options: [
            "Verify sau khi burn",
            "Tắt máy ngay khi đang ghi",
            "Chạm tay vào mặt ghi",
            "Ghi tốc độ cao nhất mọi lúc",
        ],
        correct: 0,
        explanation:
            "Verify giúp kiểm tra dữ liệu ghi ra đĩa có đọc lại đúng không.",
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
                Bạn đã hiểu ổ đĩa quang CD/DVD/Blu-ray. Tiếp theo là USB Flash
                Drive và thẻ nhớ SD Card — nhóm thiết bị lưu trữ di động đã thay
                thế phần lớn vai trò của đĩa quang trong cài Windows, chép dữ
                liệu và mang file đi học/làm.
            </p>
            <Link
                to="/phan-4-6"
                className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-violet-500/20"
            >
                Bài tiếp theo: 4.6 — USB Flash Drive và thẻ nhớ SD Card{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "violet" }) {
    const colorMap = {
        violet: "bg-violet-500/20 text-violet-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
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
        violet: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
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
    return map[color] || map.violet;
}

function softBorder(color) {
    const map = {
        violet: "bg-violet-500/5 border-violet-500/20",
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
    return map[color] || map.violet;
}

function textColor(color) {
    const map = {
        violet: "text-violet-300",
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
    return map[color] || "text-violet-300";
}
