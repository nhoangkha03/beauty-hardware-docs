import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    Cpu,
    Database,
    Gauge,
    HardDrive,
    Layers3,
    Lightbulb,
    MemoryStick,
    Monitor,
    PackageCheck,
    Puzzle,
    RotateCw,
    Search,
    Server,
    Settings,
    ShieldCheck,
    Timer,
    Video,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center shadow-lg shadow-sky-500/10">
                            <HardDrive className="text-sky-400" size={24} />
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
                    <div className="text-sm font-semibold text-sky-300 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20">
                        Bài 4.2
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <TurntableAnalogy />
                <HddMechanismSimulator />
                <HddTypesExplorer />
                <RpmComparison />
                <SpecsExplorer />
                <CmrSmrSection />
                <RealExamples />
                <UsageLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-sky-300">
                        <BookOpen size={16} /> Phần 4: Bộ lưu trữ — Storage
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        HDD
                        <span className="block text-sky-400">
                            Ổ đĩa cứng cơ học
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        HDD rẻ và có dung lượng lớn, nhưng chậm hơn SSD vì phải
                        quay đĩa từ và di chuyển đầu đọc/ghi đến đúng vị trí dữ
                        liệu.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<RotateCw size={16} />} text="Platter" />
                        <Tag
                            icon={<Search size={16} />}
                            text="Read/Write Head"
                        />
                        <Tag icon={<Gauge size={16} />} text="RPM" />
                        <Tag icon={<Database size={16} />} text="Cache" />
                        <Tag
                            icon={<ShieldCheck size={16} />}
                            text="CMR / SMR"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="relative bg-slate-900 rounded-3xl border border-slate-800 p-6 h-[330px] overflow-hidden">
                        <div className="absolute left-1/2 top-1/2 w-52 h-52 -translate-x-1/2 -translate-y-1/2 rounded-full border-[18px] border-sky-500/20 bg-slate-950 shadow-inner flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center">
                                <RotateCw
                                    className="text-sky-300 animate-spin"
                                    size={30}
                                />
                            </div>
                        </div>
                        <div className="absolute right-12 top-20 w-36 h-3 bg-orange-400/70 rounded-full origin-right rotate-[138deg] shadow-lg" />
                        <div className="absolute right-20 top-36 w-10 h-10 rounded-full bg-orange-500/20 border border-orange-400/40 flex items-center justify-center">
                            <Search className="text-orange-300" size={20} />
                        </div>
                        <div className="absolute bottom-5 left-5 right-5 bg-slate-950/90 border border-slate-800 rounded-2xl p-4 font-mono text-sm">
                            <p className="text-slate-500">// HDD đọc file</p>
                            <p>Đĩa quay + đầu đọc di chuyển</p>
                            <p className="text-sky-300">
                                → dữ liệu lên RAM → CPU xử lý
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
        "Hiểu HDD là Hard Disk Drive và cách HDD lưu dữ liệu lâu dài bằng đĩa từ.",
        "Nắm cấu tạo: platter, read/write head, actuator arm, motor và cache.",
        "Biết vì sao HDD chậm hơn SSD: phải chờ đĩa quay và đầu đọc di chuyển.",
        "Phân biệt HDD 3.5 inch, 2.5 inch, desktop, NAS, surveillance và enterprise.",
        "Đọc các thông số quan trọng: dung lượng, RPM, cache, MB/s, CMR/SMR, workload rating và sức khỏe ổ.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="sky"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-sky-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-300 flex items-center justify-center font-bold mb-4">
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
                title="Khái niệm cốt lõi: HDD là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">HDD</strong> là viết
                            tắt của{" "}
                            <strong className="text-cyan-300">
                                Hard Disk Drive
                            </strong>
                            , nghĩa là ổ đĩa cứng.
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-cyan-300">
                                Nói ngắn gọn:
                            </strong>{" "}
                            HDD lưu dữ liệu lâu dài trên đĩa từ quay. Tắt máy dữ
                            liệu vẫn còn.
                        </div>
                        <p>
                            HDD lưu được nhiều dữ liệu với chi phí thấp, nhưng
                            chậm hơn SSD vì có bộ phận cơ học phải di chuyển.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <Layers3 className="text-cyan-300" /> So với RAM và
                            SSD
                        </h3>
                        <div className="space-y-3">
                            <CompareCard
                                label="RAM"
                                role="Chip nhớ tạm thời"
                                motion="Không chuyển động"
                                power="Tắt máy mất dữ liệu"
                                color="emerald"
                            />
                            <CompareCard
                                label="SSD"
                                role="Chip NAND Flash"
                                motion="Không chuyển động"
                                power="Tắt máy vẫn còn"
                                color="purple"
                            />
                            <CompareCard
                                label="HDD"
                                role="Đĩa từ quay + đầu đọc/ghi"
                                motion="Có chuyển động"
                                power="Tắt máy vẫn còn"
                                color="sky"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TurntableAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: đầu đĩa than / máy quay đĩa"
                icon={<Lightbulb />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                    <AnalogyCard
                        icon={<RotateCw />}
                        title="Đĩa quay"
                        desc="Platter quay liên tục, giống đĩa than đang xoay."
                        color="sky"
                    />
                    <AnalogyCard
                        icon={<Search />}
                        title="Kim đọc"
                        desc="Đầu đọc/ghi phải di chuyển đến đúng track/vị trí dữ liệu."
                        color="orange"
                    />
                    <AnalogyCard
                        icon={<Timer />}
                        title="Chờ vật lý"
                        desc="Phải chờ đĩa quay và cần di chuyển, nên độ trễ cao hơn SSD."
                        color="amber"
                    />
                </div>
            </div>
        </section>
    );
}

function HddMechanismSimulator() {
    const flows = {
        read: {
            title: "Khi đọc dữ liệu",
            color: "sky",
            steps: [
                {
                    icon: <Cpu />,
                    title: "CPU / hệ điều hành yêu cầu file",
                    desc: "Ví dụ mở thư mục, mở ảnh, load phim hoặc copy dữ liệu.",
                },
                {
                    icon: <HardDrive />,
                    title: "HDD nhận lệnh đọc",
                    desc: "Ổ xác định dữ liệu nằm ở khu vực nào trên đĩa.",
                },
                {
                    icon: <RotateCw />,
                    title: "Đĩa từ quay đến đúng vị trí",
                    desc: "Platter phải quay để sector cần đọc đi tới dưới đầu đọc.",
                },
                {
                    icon: <Search />,
                    title: "Đầu đọc di chuyển",
                    desc: "Actuator arm đưa read/write head đến đúng track.",
                },
                {
                    icon: <MemoryStick />,
                    title: "Dữ liệu lên RAM",
                    desc: "HDD đọc dữ liệu rồi chuyển lên RAM cho CPU xử lý.",
                },
            ],
        },
        write: {
            title: "Khi ghi dữ liệu",
            color: "orange",
            steps: [
                {
                    icon: <MemoryStick />,
                    title: "Dữ liệu từ RAM gửi xuống HDD",
                    desc: "Ví dụ bấm Save hoặc copy file.",
                },
                {
                    icon: <RotateCw />,
                    title: "Đĩa từ quay",
                    desc: "Platter quay để đến vị trí trống hoặc vị trí cần ghi.",
                },
                {
                    icon: <Search />,
                    title: "Đầu ghi di chuyển",
                    desc: "Read/write head được đưa tới đúng vị trí.",
                },
                {
                    icon: <Database />,
                    title: "Thay đổi trạng thái từ tính",
                    desc: "HDD ghi dữ liệu bằng cách thay đổi từ tính trên bề mặt đĩa.",
                },
                {
                    icon: <CheckCircle2 />,
                    title: "File được lưu lâu dài",
                    desc: "Tắt máy dữ liệu vẫn còn trên HDD.",
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
                title="HDD đọc/ghi dữ liệu như thế nào?"
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
                <div className="mt-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-orange-300">
                        Vì sao chậm hơn SSD?
                    </strong>{" "}
                    HDD phải chờ đĩa quay, chờ đầu đọc di chuyển và dữ liệu có
                    thể nằm rải rác nhiều nơi. SSD không có bộ phận cơ học nên
                    truy cập nhanh hơn nhiều.
                </div>
            </div>
        </section>
    );
}

function HddTypesExplorer() {
    const types = {
        desktop35: {
            icon: <Monitor />,
            title: "HDD 3.5 inch",
            desc: "Ổ lớn cho desktop/NAS/server nhỏ.",
            good: "Dung lượng cao, giá/GB tốt",
            bad: "Cần nhiều điện hơn, không hợp laptop",
            fit: "PC bàn, NAS, server nhỏ",
            color: "sky",
        },
        laptop25: {
            icon: <Laptop />,
            title: "HDD 2.5 inch",
            desc: "Ổ nhỏ cho laptop cũ/ổ ngoài.",
            good: "Gọn, ít điện hơn",
            bad: "Chậm hơn, dung lượng thấp hơn 3.5 inch",
            fit: "Laptop cũ, ổ gắn ngoài",
            color: "cyan",
        },
        desktop: {
            icon: <HardDrive />,
            title: "HDD Desktop",
            desc: "Ổ phổ thông cho PC cá nhân.",
            good: "Rẻ, lưu trữ tốt",
            bad: "Không tối ưu chạy 24/7",
            fit: "PC cá nhân",
            color: "orange",
        },
        nas: {
            icon: <Server />,
            title: "HDD NAS",
            desc: "Ổ tối ưu cho NAS và RAID.",
            good: "Chạy liên tục, nhiều người truy cập",
            bad: "Đắt hơn HDD desktop",
            fit: "NAS gia đình/văn phòng",
            color: "emerald",
        },
        surveillance: {
            icon: <Video />,
            title: "HDD Surveillance",
            desc: "Ổ tối ưu ghi camera liên tục.",
            good: "Ghi tuần tự liên tục tốt",
            bad: "Không tối ưu app/game",
            fit: "Camera giám sát",
            color: "purple",
        },
        enterprise: {
            icon: <ShieldCheck />,
            title: "HDD Enterprise",
            desc: "Ổ chịu tải cao cho server/datacenter.",
            good: "Độ bền cao, workload lớn",
            bad: "Giá cao",
            fit: "Server, datacenter",
            color: "yellow",
        },
    };
    const [active, setActive] = useState("nas");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Các loại HDD phổ biến"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
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

function RpmComparison() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="5400 RPM vs 7200 RPM"
                icon={<Gauge />}
            />
            <div className="grid md:grid-cols-2 gap-5">
                <RpmCard
                    rpm="5400 RPM"
                    good="Êm hơn, ít nóng hơn, tiết kiệm điện hơn"
                    bad="Chậm hơn"
                    fit="Lưu trữ dữ liệu, laptop, backup"
                    color="cyan"
                />
                <RpmCard
                    rpm="7200 RPM"
                    good="Đọc/ghi nhanh hơn, phản hồi tốt hơn"
                    bad="Nóng hơn, ồn hơn, tốn điện hơn"
                    fit="Desktop, NAS, tác vụ cần tốc độ hơn"
                    color="orange"
                />
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-slate-300 leading-relaxed">
                <strong className="text-emerald-300">RPM</strong> là{" "}
                <strong>Revolutions Per Minute</strong>, nghĩa là số vòng quay
                mỗi phút. RPM cao hơn thường giúp tốc độ tốt hơn, nhưng không
                phải yếu tố duy nhất: còn có mật độ dữ liệu, cache, firmware,
                công nghệ ghi và giao tiếp SATA.
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        capacity: {
            icon: <Database />,
            title: "Dung lượng",
            detail: "HDD thường có dung lượng rất lớn với giá/GB thấp.",
            impact: "Mua HDD mới để lưu trữ lâu dài thường nên bắt đầu từ 2TB hoặc 4TB.",
        },
        rpm: {
            icon: <Gauge />,
            title: "RPM",
            detail: "5400 RPM hoặc 7200 RPM cho biết đĩa quay bao nhiêu vòng mỗi phút.",
            impact: "RPM cao hơn thường nhanh hơn một chút nhưng cũng có thể nóng, ồn và tốn điện hơn.",
        },
        cache: {
            icon: <Database />,
            title: "Cache HDD",
            detail: "Vùng nhớ nhỏ trong ổ cứng để đệm dữ liệu khi đọc/ghi.",
            impact: "64MB, 128MB, 256MB, 512MB cache có thể giúp một số tình huống, nhưng không biến HDD thành SSD.",
        },
        speed: {
            icon: <Zap />,
            title: "Tốc độ MB/s",
            detail: "HDD chậm hơn SSD rõ rệt về đọc/ghi tuần tự và nhất là random read/write.",
            impact: "HDD 5400 RPM thường khoảng 100–180 MB/s; 7200 RPM khoảng 150–250 MB/s.",
        },
        cmr: {
            icon: <Puzzle />,
            title: "CMR / SMR",
            detail: "Công nghệ ghi dữ liệu lên đĩa từ.",
            impact: "NAS/RAID/backup ghi nhiều nên ưu tiên CMR; archive ít thay đổi có thể dùng SMR.",
        },
        workload: {
            icon: <ShieldCheck />,
            title: "Workload rating",
            detail: "Thông số TB/năm ở HDD NAS/Enterprise cho biết ổ thiết kế chịu tải ghi/đọc bao nhiêu.",
            impact: "HDD desktop không nhất thiết phù hợp chạy 24/7 trong NAS.",
        },
        health: {
            icon: <Search />,
            title: "Sức khỏe ổ",
            detail: "Theo dõi S.M.A.R.T bằng CrystalDiskInfo hoặc HWiNFO.",
            impact: "Chú ý Reallocated Sectors, Pending Sectors, Uncorrectable Errors và nhiệt độ ổ.",
        },
    };
    const [active, setActive] = useState("cmr");
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

function CmrSmrSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="purple"
                title="CMR và SMR: thông số người mới hay bỏ qua"
                icon={<Puzzle />}
            />
            <div className="grid md:grid-cols-2 gap-5">
                <TechCard
                    title="CMR"
                    full="Conventional Magnetic Recording"
                    good="Ổn định hơn khi ghi nhiều"
                    bad="Giá có thể cao hơn"
                    fit="NAS, RAID, backup lớn, ghi/xóa thường xuyên"
                    color="emerald"
                />
                <TechCard
                    title="SMR"
                    full="Shingled Magnetic Recording"
                    good="Tăng mật độ lưu trữ, giá rẻ hơn"
                    bad="Ghi lại dữ liệu có thể chậm hơn"
                    fit="Lưu trữ ít thay đổi, archive"
                    color="orange"
                />
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-purple-300">Mẹo chọn:</strong> NAS, RAID
                và backup ghi nhiều nên ưu tiên CMR. Nếu chỉ lưu phim, ảnh, file
                ít thay đổi, SMR vẫn có thể dùng được.
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <HardDrive />,
            title: "WD Blue 4TB 3.5 inch",
            subtitle: "HDD lưu trữ cho PC cá nhân",
            color: "sky",
            points: [
                "Dung lượng 4TB",
                "Form factor 3.5 inch",
                "Giao tiếp SATA",
                "5400 RPM",
                "Cache 256MB",
                "Tốc độ truyền dữ liệu lên tới khoảng 185MB/s",
                "Bảo hành 2 năm",
            ],
            lesson: "Dùng hợp lý: SSD 500GB/1TB cài Windows và phần mềm, HDD 4TB lưu dữ liệu, ảnh, video, backup.",
        },
        {
            icon: <Server />,
            title: "Seagate IronWolf 4TB",
            subtitle: "HDD cho NAS",
            color: "emerald",
            points: [
                "Dung lượng 4TB",
                "5400 RPM",
                "Cache 256MB",
                "SATA 6Gb/s",
                "Tối ưu cho NAS",
                "Workload tới 180TB/năm theo dòng IronWolf",
                "Phù hợp NAS gia đình/văn phòng",
            ],
            lesson: "NAS chạy lâu dài nên chọn dòng NAS như IronWolf/WD Red Plus/Pro thay vì HDD desktop phổ thông.",
        },
        {
            icon: <ShieldCheck />,
            title: "HDD 32TB chuyên nghiệp",
            subtitle: "SkyHawk AI / IronWolf Pro / Exos",
            color: "purple",
            points: [
                "Dung lượng rất lớn",
                "3.5 inch SATA III",
                "7200 RPM",
                "512MB cache",
                "CMR",
                "Workload cao",
                "Dành cho surveillance AI, NAS chuyên nghiệp, datacenter",
            ],
            lesson: "SSD rất nhanh, nhưng HDD vẫn quan trọng ở dung lượng cực lớn và chi phí lưu trữ/GB thấp.",
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

function UsageLab() {
    const scenarios = {
        os: {
            icon: <Monitor />,
            title: "Cài Windows",
            answer: "Không nên dùng HDD nếu có thể dùng SSD. HDD cài Windows được nhưng boot, mở app, cập nhật và antivirus scan chậm hơn SSD rất rõ.",
            color: "red",
        },
        archive: {
            icon: <Database />,
            title: "Lưu phim/ảnh/tài liệu",
            answer: "HDD rất phù hợp vì dung lượng lớn, giá/GB thấp. Kết hợp SSD cho hệ điều hành và HDD cho kho dữ liệu là cấu hình hợp lý.",
            color: "sky",
        },
        nas: {
            icon: <Server />,
            title: "NAS gia đình/văn phòng",
            answer: "Ưu tiên HDD NAS, kiểm tra CMR/SMR, workload rating và bảo hành. Cân nhắc RAID 1 nếu cần dự phòng khi 1 ổ hỏng.",
            color: "emerald",
        },
        camera: {
            icon: <Video />,
            title: "Camera giám sát",
            answer: "Chọn HDD surveillance vì được tối ưu cho ghi liên tục, nhiều luồng camera. Không tối ưu cho app/game như SSD.",
            color: "purple",
        },
        warning: {
            icon: <AlertTriangle />,
            title: "Ổ phát tiếng lạch cạch",
            answer: "Backup ngay. Đừng cố sửa bằng phần mềm nếu có dấu hiệu cơ học. Ưu tiên cứu dữ liệu trước khi ổ hỏng nặng hơn.",
            color: "orange",
        },
    };
    const [active, setActive] = useState("archive");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: nên dùng HDD cho việc gì?"
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
            wrong: "HDD dung lượng lớn thì máy sẽ nhanh hơn",
            right: "Dung lượng lớn chỉ giúp chứa nhiều hơn. HDD 8TB vẫn có thể mở Windows chậm hơn SSD 500GB.",
        },
        {
            wrong: "HDD vẫn tốt để cài Windows như SSD",
            right: "HDD cài Windows được nhưng trải nghiệm kém hơn SSD rất nhiều, nhất là boot, mở app, cập nhật và đọc nhiều file nhỏ.",
        },
        {
            wrong: "Ổ HDD đang chạy thì bê đi cũng không sao",
            right: "Khi HDD hoạt động, đĩa đang quay và đầu đọc rất gần bề mặt đĩa. Va đập có thể gây bad sector, lỗi đầu đọc và mất dữ liệu.",
        },
        {
            wrong: "HDD NAS và HDD desktop giống nhau",
            right: "HDD NAS tối ưu chạy 24/7, nhiều ổ gần nhau, RAID, nhiều người truy cập và workload cao hơn.",
        },
        {
            wrong: "Chỉ cần một ổ HDD là đủ an toàn",
            right: "HDD có thể hỏng bất kỳ lúc nào. Dữ liệu quan trọng cần backup thêm ổ ngoài/NAS/cloud.",
        },
    ];
    const tips = [
        "Không nên dùng HDD làm ổ hệ điều hành nếu có thể dùng SSD.",
        "Dùng HDD cho dữ liệu lớn, ít cần tốc độ: phim, ảnh, backup, project cũ, bộ cài.",
        "Mua HDD cho NAS nên ưu tiên dòng NAS và kiểm tra CMR/SMR.",
        "Theo dõi sức khỏe HDD bằng CrystalDiskInfo hoặc HWiNFO.",
        "HDD có tiếng lạch cạch bất thường: backup ngay, ưu tiên cứu dữ liệu trước.",
        "Không chống phân mảnh SSD, nhưng HDD có thể cần defrag; Windows thường tự tối ưu lịch.",
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
                        <Lightbulb /> Mẹo dùng HDD
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
                        <span className="bg-sky-500/20 text-sky-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-sky-300 border border-slate-800 shadow-inner space-y-2">
                            <p>HDD = Hard Disk Drive</p>
                            <p className="text-slate-300">
                                = đĩa từ quay + đầu đọc/ghi
                            </p>
                            <br />
                            <p className="text-slate-500"># Ưu điểm</p>
                            <p className="text-slate-300">
                                Dung lượng lớn, giá/GB thấp
                            </p>
                            <br />
                            <p className="text-slate-500"># Nhược điểm</p>
                            <p className="text-slate-300">
                                Chậm hơn SSD, có tiếng ồn/rung, dễ ảnh hưởng bởi
                                va đập
                            </p>
                            <br />
                            <p className="text-slate-500"># Dùng hợp lý</p>
                            <p className="text-slate-300">
                                SSD = Windows/app/game đang chơi
                            </p>
                            <p className="text-slate-300">
                                HDD = phim/ảnh/backup/dữ liệu lớn
                            </p>
                            <br />
                            <p className="text-red-300">
                                HDD có tiếng lạch cạch bất thường → backup ngay.
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
        question: "HDD lưu dữ liệu bằng cách nào?",
        options: [
            "Bằng chip NAND Flash giống SSD",
            "Bằng đĩa từ quay và đầu đọc/ghi",
            "Bằng RAM tạm thời",
            "Bằng màn hình",
        ],
        correct: 1,
        explanation:
            "HDD dùng đĩa từ quay và đầu đọc/ghi để lưu dữ liệu lâu dài.",
    },
    {
        question: "Vì sao HDD thường chậm hơn SSD?",
        options: [
            "Vì HDD không có dung lượng",
            "Vì HDD phải chờ đĩa quay và đầu đọc di chuyển",
            "Vì HDD không lưu được Windows",
            "Vì HDD chỉ dùng được khi có Internet",
        ],
        correct: 1,
        explanation:
            "HDD có giới hạn vật lý: đĩa phải quay và đầu đọc phải di chuyển đến đúng vị trí dữ liệu.",
    },
    {
        question: "Ổ HDD phù hợp nhất cho nhu cầu nào?",
        options: [
            "Cài Windows để boot nhanh nhất",
            "Lưu phim, ảnh, backup dung lượng lớn",
            "Thay thế RAM",
            "Tăng FPS trực tiếp cho GPU",
        ],
        correct: 1,
        explanation:
            "HDD phù hợp lưu dữ liệu lớn, ít cần tốc độ như phim, ảnh, backup, project cũ.",
    },
    {
        question: "RPM trong HDD nghĩa là gì?",
        options: [
            "Số vòng quay mỗi phút",
            "Dung lượng RAM",
            "Độ phân giải màn hình",
            "Tốc độ mạng Wi-Fi",
        ],
        correct: 0,
        explanation:
            "RPM là Revolutions Per Minute, nghĩa là số vòng quay mỗi phút.",
    },
    {
        question: "NAS/RAID ghi nhiều nên ưu tiên công nghệ ghi nào?",
        options: [
            "CMR",
            "SMR luôn tốt hơn",
            "Không cần quan tâm",
            "Chỉ cần RGB",
        ],
        correct: 0,
        explanation:
            "NAS, RAID và backup ghi nhiều nên ưu tiên CMR vì ghi ổn định hơn SMR trong các workload này.",
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
                    <strong className="text-sky-400">
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
                <span className="text-sky-400">
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
                        className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu HDD và vì sao ổ cơ học rẻ, nhiều dung lượng nhưng
                chậm hơn SSD. Tiếp theo là SSD — ổ thể rắn không có đĩa quay, mở
                máy nhanh hơn nhiều và có các khái niệm NAND Flash, SLC, MLC,
                TLC, QLC.
            </p>
            <Link
                to="/phan-4-3"
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-sky-500/20"
            >
                Bài tiếp theo: 4.3 — SSD: Ổ đĩa thể rắn{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "sky" }) {
    const colorMap = {
        sky: "bg-sky-500/20 text-sky-300",
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

function CompareCard({ label, role, motion, power, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-4`}>
            <p className={`${textColor(color)} font-extrabold`}>{label}</p>
            <p className="text-sm text-slate-300 mt-1">{role}</p>
            <p className="text-xs text-slate-500 mt-1">
                {motion} • {power}
            </p>
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

function RpmCard({ rpm, good, bad, fit, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-3xl p-6`}>
            <div
                className={`w-14 h-14 rounded-2xl ${badgeColor(color)} flex items-center justify-center mb-4`}
            >
                <RotateCw size={28} />
            </div>
            <h3 className="text-white font-extrabold text-2xl mb-4">{rpm}</h3>
            <InfoCard label="Ưu điểm" value={good} color="emerald" />
            <div className="h-3" />
            <InfoCard label="Nhược điểm" value={bad} color="orange" />
            <div className="h-3" />
            <InfoCard label="Phù hợp" value={fit} color={color} />
        </div>
    );
}

function TechCard({ title, full, good, bad, fit, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-3xl p-6`}>
            <h3 className={`text-3xl font-black ${textColor(color)} mb-1`}>
                {title}
            </h3>
            <p className="text-slate-400 text-sm mb-5">{full}</p>
            <div className="space-y-3">
                <InfoCard label="Ưu điểm" value={good} color="emerald" />
                <InfoCard label="Nhược điểm" value={bad} color="orange" />
                <InfoCard label="Phù hợp" value={fit} color={color} />
            </div>
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
        sky: "bg-sky-500/10 text-sky-300 border border-sky-500/20",
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
    return map[color] || map.sky;
}

function softBorder(color) {
    const map = {
        sky: "bg-sky-500/5 border-sky-500/20",
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
    return map[color] || map.sky;
}

function textColor(color) {
    const map = {
        sky: "text-sky-300",
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
    return map[color] || "text-sky-300";
}
