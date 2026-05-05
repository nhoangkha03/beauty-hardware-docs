import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    Cloud,
    Database,
    Gauge,
    HardDrive,
    Layers3,
    Lightbulb,
    Lock,
    Network,
    PackageCheck,
    RefreshCcw,
    Search,
    Server,
    Settings,
    Share2,
    ShieldCheck,
    Smartphone,
    UploadCloud,
    Users,
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
                            <Cloud className="text-blue-400" size={24} />
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
                    <div className="text-sm font-semibold text-blue-300 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                        Bài 4.8
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <WarehouseAnalogy />
                <CloudNasFlowSimulator />
                <CloudNasComparison />
                <StorageTypeExplorer />
                <SpecsExplorer />
                <SyncBackupArchive />
                <SecurityChecklist />
                <RealExamples />
                <PickerLab />
                <Backup321Section />
                <CommonMistakes />
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
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-blue-300">
                        <BookOpen size={16} /> Phần 4: Bộ lưu trữ — Storage
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Cloud Storage
                        <span className="block text-blue-400">và NAS</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Cloud giúp dữ liệu đi theo bạn qua Internet. NAS giống
                        như một ổ cứng riêng có mạng, đặt trong nhà hoặc văn
                        phòng để nhiều thiết bị cùng truy cập.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<Cloud size={16} />}
                            text="Google Drive / OneDrive / iCloud"
                        />
                        <Tag icon={<Server size={16} />} text="NAS" />
                        <Tag
                            icon={<Network size={16} />}
                            text="LAN / Internet"
                        />
                        <Tag
                            icon={<ShieldCheck size={16} />}
                            text="RAID + Backup"
                        />
                        <Tag
                            icon={<RefreshCcw size={16} />}
                            text="Sync vs Backup"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Cloud />}
                            label="Cloud"
                            desc="Kho dữ liệu thuê qua Internet"
                            color="blue"
                            highlight
                        />
                        <HeroTile
                            icon={<Server />}
                            label="NAS"
                            desc="Ổ cứng riêng nằm trong mạng"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<RefreshCcw />}
                            label="Sync"
                            desc="Thay đổi đồng bộ nhiều thiết bị"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<ShieldCheck />}
                            label="Backup"
                            desc="Bản sao để khôi phục"
                            color="purple"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Quy tắc sống còn</p>
                        <p>Sync tiện ≠ backup hoàn chỉnh</p>
                        <p className="text-blue-300">
                            RAID trong NAS cũng ≠ backup
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu Cloud Storage là gì và NAS là gì.",
        "Nắm cơ chế cloud upload qua Internet và NAS ghi dữ liệu qua mạng LAN.",
        "Phân biệt cloud sync, cloud backup, object storage, NAS 1-bay/2-bay/4-bay và DIY NAS.",
        "Đọc các thông số quan trọng: dung lượng, tốc độ mạng, số bay, RAID, sync/backup/archive và bảo mật.",
        "Áp dụng quy tắc 3-2-1 để bảo vệ dữ liệu quan trọng.",
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
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center font-bold mb-4">
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
                title="Khái niệm cốt lõi: Cloud và NAS là gì?"
                icon={<Brain />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    icon={<Cloud />}
                    title="Cloud Storage"
                    color="blue"
                    definition="Dịch vụ lưu trữ dữ liệu trên máy chủ của nhà cung cấp qua Internet."
                    examples="Google Drive, OneDrive, iCloud, Dropbox, Backblaze, Mega."
                    simple="Cloud = thuê một kho dữ liệu của người khác. Bạn gửi dữ liệu lên đó và lấy xuống qua Internet."
                />
                <ConceptCard
                    icon={<Server />}
                    title="NAS"
                    color="emerald"
                    definition="Network Attached Storage: thiết bị lưu trữ gắn vào mạng."
                    examples="Một hộp chứa HDD/SSD, cắm vào router/switch để nhiều máy cùng truy cập."
                    simple="NAS = ổ cứng riêng của bạn + có mạng + nhiều người dùng được + có thể RAID, backup, đồng bộ, media server."
                />
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 grid md:grid-cols-3 gap-4">
                <InfoCard
                    label="Ổ cứng ngoài"
                    value="Cắm trực tiếp vào một máy"
                    color="orange"
                />
                <InfoCard
                    label="NAS"
                    value="Ổ cứng đặt trong mạng, nhiều máy cùng dùng"
                    color="emerald"
                />
                <InfoCard
                    label="Cloud"
                    value="Ổ cứng nằm trong trung tâm dữ liệu của nhà cung cấp"
                    color="blue"
                />
            </div>
        </section>
    );
}

function WarehouseAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: kho thuê và kho riêng"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-4 gap-4">
                <AnalogyCard
                    icon={<Cloud />}
                    title="Cloud = kho thuê"
                    desc="Nhà cung cấp quản lý máy chủ, bảo trì, dung lượng và truy cập qua Internet."
                    color="blue"
                />
                <AnalogyCard
                    icon={<Server />}
                    title="NAS = kho riêng"
                    desc="Bạn mua thiết bị, lắp ổ, tự quản lý quyền truy cập, RAID, backup và cập nhật."
                    color="emerald"
                />
                <AnalogyCard
                    icon={<Share2 />}
                    title="Sync = tự đồng bộ"
                    desc="Một nơi thay đổi thì nơi khác cũng thay đổi theo, kể cả khi xóa nhầm."
                    color="cyan"
                />
                <AnalogyCard
                    icon={<ShieldCheck />}
                    title="Backup = bản cứu hộ"
                    desc="Giữ bản sao để khôi phục khi lỗi, xóa nhầm, ransomware hoặc hỏng thiết bị."
                    color="purple"
                />
            </div>
        </section>
    );
}

function CloudNasFlowSimulator() {
    const flows = {
        cloud: {
            title: "Cloud hoạt động như thế nào?",
            color: "blue",
            steps: [
                {
                    icon: <Database />,
                    title: "Bạn lưu file vào thư mục cloud",
                    desc: "Ví dụ Google Drive, OneDrive, Dropbox hoặc iCloud Drive.",
                },
                {
                    icon: <RefreshCcw />,
                    title: "Ứng dụng đồng bộ phát hiện file mới",
                    desc: "Client trên máy tính/điện thoại theo dõi thay đổi.",
                },
                {
                    icon: <UploadCloud />,
                    title: "Upload qua Internet",
                    desc: "File được gửi lên máy chủ của nhà cung cấp.",
                },
                {
                    icon: <Cloud />,
                    title: "Dữ liệu nằm trên cloud",
                    desc: "Nhà cung cấp lưu dữ liệu trong hệ thống máy chủ của họ.",
                },
                {
                    icon: <Smartphone />,
                    title: "Thiết bị khác truy cập",
                    desc: "Laptop, điện thoại, tablet hoặc web browser cùng tài khoản có thể xem/tải file.",
                },
            ],
        },
        nas: {
            title: "NAS hoạt động như thế nào?",
            color: "emerald",
            steps: [
                {
                    icon: <Database />,
                    title: "Bạn lưu file vào thư mục mạng",
                    desc: "Ví dụ copy video từ PC vào share folder của NAS.",
                },
                {
                    icon: <Network />,
                    title: "File đi qua router/switch",
                    desc: "Dữ liệu chạy trong mạng LAN nội bộ, không nhất thiết cần Internet.",
                },
                {
                    icon: <Server />,
                    title: "NAS nhận dữ liệu",
                    desc: "NAS xử lý quyền truy cập, file system, snapshot và dịch vụ liên quan.",
                },
                {
                    icon: <HardDrive />,
                    title: "Ghi vào HDD/SSD trong NAS",
                    desc: "Nếu có RAID, NAS phân phối dữ liệu lên nhiều ổ theo cấu hình.",
                },
                {
                    icon: <Users />,
                    title: "Thiết bị khác cùng mạng truy cập",
                    desc: "PC, laptop, TV, điện thoại có thể mở file, xem media hoặc backup.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("cloud");
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
                title="Cloud và NAS lưu dữ liệu ra sao?"
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

function CloudNasComparison() {
    const rows = [
        [
            "Vị trí dữ liệu",
            "Máy chủ của nhà cung cấp",
            "Thiết bị đặt tại nhà/văn phòng",
        ],
        [
            "Cần Internet?",
            "Gần như bắt buộc",
            "Nội bộ dùng được không cần Internet",
        ],
        ["Chi phí", "Trả theo tháng/năm", "Mua thiết bị + ổ cứng ban đầu"],
        ["Tốc độ", "Phụ thuộc Internet", "Nhanh trong LAN nếu mạng tốt"],
        [
            "Quyền kiểm soát",
            "Phụ thuộc nhà cung cấp",
            "Bạn kiểm soát nhiều hơn",
        ],
        ["Bảo trì", "Nhà cung cấp lo", "Bạn quản lý ổ, cập nhật, backup"],
        [
            "Phù hợp",
            "Đồng bộ file, làm việc từ xa, backup ngoài site",
            "Lưu trữ gia đình/văn phòng, media server, backup nội bộ",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="So sánh Cloud Storage và NAS"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[860px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Tiêu chí</th>
                            <th className="p-4 text-blue-300">Cloud Storage</th>
                            <th className="p-4 text-emerald-300">NAS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([k, cloud, nas]) => (
                            <tr key={k} className="border-t border-slate-800">
                                <td className="p-4 text-white font-bold">
                                    {k}
                                </td>
                                <td className="p-4 text-slate-300">{cloud}</td>
                                <td className="p-4 text-slate-300">{nas}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function StorageTypeExplorer() {
    const items = {
        sync: {
            icon: <RefreshCcw />,
            title: "Cloud đồng bộ file",
            examples: "Google Drive, OneDrive, Dropbox",
            good: "Tài liệu, ảnh, làm việc nhiều thiết bị",
            bad: "Xóa nhầm có thể đồng bộ xóa",
            color: "blue",
        },
        photos: {
            icon: <Smartphone />,
            title: "Cloud ảnh/video",
            examples: "Google Photos, iCloud Photos",
            good: "Ảnh điện thoại, video cá nhân",
            bad: "Phụ thuộc tài khoản và gói dung lượng",
            color: "cyan",
        },
        backup: {
            icon: <ShieldCheck />,
            title: "Cloud backup máy tính",
            examples: "Backblaze Personal Backup",
            good: "Sao lưu tự động toàn bộ máy",
            bad: "Không phải công cụ làm việc nhóm",
            color: "emerald",
        },
        object: {
            icon: <Database />,
            title: "Object Storage",
            examples: "Amazon S3, Backblaze B2, Cloudflare R2",
            good: "Developer, doanh nghiệp, hệ thống app",
            bad: "Khó hơn cloud sync phổ thông",
            color: "purple",
        },
        nas2: {
            icon: <Server />,
            title: "NAS 2-bay",
            examples: "RAID 1 hoặc SHR tương đương",
            good: "Gia đình, văn phòng nhỏ",
            bad: "Mirror mất một nửa dung lượng thô",
            color: "orange",
        },
        nas4: {
            icon: <Layers3 />,
            title: "NAS 4-bay+",
            examples: "RAID 5/10 linh hoạt",
            good: "Media server, backup nhiều máy",
            bad: "Giá cao, tốn điện, cần quản trị",
            color: "rose",
        },
        diy: {
            icon: <Settings />,
            title: "DIY NAS",
            examples: "TrueNAS, Unraid, OpenMediaVault",
            good: "Linh hoạt, tận dụng PC cũ",
            bad: "Cần kiến thức cấu hình và bảo trì",
            color: "yellow",
        },
    };
    const [active, setActive] = useState("nas2");
    const item = items[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Các loại Cloud và NAS phổ biến"
                icon={<PackageCheck />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
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
                            {item.examples}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <InfoCard
                            label="Phù hợp"
                            value={item.good}
                            color="emerald"
                        />
                        <InfoCard
                            label="Lưu ý"
                            value={item.bad}
                            color="orange"
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
            title: "Dung lượng",
            detail: "Cloud thường theo gói 100GB, 200GB, 1TB, 2TB, 5TB. NAS phụ thuộc số ổ và RAID.",
            impact: "NAS 2 bay + 2 ổ 4TB RAID 1 dùng khoảng 4TB; NAS 4 bay + 4 ổ 4TB RAID 5 dùng khoảng 12TB.",
        },
        network: {
            icon: <Gauge />,
            title: "Tốc độ mạng",
            detail: "1GbE khoảng 125 MB/s lý thuyết; 2.5GbE khoảng 312 MB/s; 10GbE khoảng 1250 MB/s; Wi-Fi biến động.",
            impact: "Copy video 100GB qua Wi-Fi yếu sẽ chậm vì nghẽn mạng, không nhất thiết vì NAS yếu.",
        },
        bays: {
            icon: <Server />,
            title: "Số bay ổ cứng",
            detail: "1-bay đơn giản nhưng không RAID dự phòng; 2-bay dùng RAID 1; 4-bay linh hoạt RAID 5/10; 6/8-bay+ cho dung lượng lớn.",
            impact: "NAS 2 bay dễ dùng cho gia đình; NAS 4 bay hợp media/backup nhiều máy hơn.",
        },
        raid: {
            icon: <Layers3 />,
            title: "RAID trên NAS",
            detail: "RAID 1, RAID 5, RAID 10 hoặc SHR/Hybrid RAID tùy hệ NAS.",
            impact: "RAID giúp chịu lỗi ổ trong một số cấu hình, nhưng vẫn không phải backup.",
        },
        sync: {
            icon: <RefreshCcw />,
            title: "Sync vs Backup",
            detail: "Sync đồng bộ thay đổi; backup giữ bản sao để khôi phục; archive lưu lâu dài ít thay đổi.",
            impact: "Xóa nhầm trong thư mục sync có thể bị xóa theo trên cloud/NAS nếu không có version history/trash/snapshot.",
        },
        security: {
            icon: <Lock />,
            title: "Bảo mật",
            detail: "Cloud cần mật khẩu mạnh, 2FA/MFA, kiểm tra thiết bị đăng nhập. NAS cần cập nhật firmware, phân quyền, 2FA, snapshot và hạn chế mở port.",
            impact: "Đừng mở NAS ra Internet nếu chưa hiểu bảo mật.",
        },
    };
    const [active, setActive] = useState("sync");
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

function SyncBackupArchive() {
    const rows = [
        [
            "Sync",
            "File thay đổi ở máy A thì cloud/NAS và máy B cũng thay đổi",
            "Xóa nhầm có thể bị xóa theo",
            "cyan",
        ],
        [
            "Backup",
            "Tạo bản sao để khôi phục về thời điểm trước",
            "Cần quản lý lịch sử phiên bản",
            "emerald",
        ],
        [
            "Archive",
            "Lưu lâu dài, ít thay đổi",
            "Cần kiểm tra định kỳ",
            "purple",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="purple"
                title="Đồng bộ khác backup"
                icon={<RefreshCcw />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Cơ chế</th>
                            <th className="p-4">Ý nghĩa</th>
                            <th className="p-4">Rủi ro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([type, meaning, risk, color]) => (
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
                                    {meaning}
                                </td>
                                <td className="p-4 text-slate-300">{risk}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-purple-300">Ví dụ:</strong> Bạn xóa nhầm
                file trong thư mục sync → cloud cũng xóa theo → nếu có
                trash/version history thì có thể cứu → nếu không thì mất.
            </div>
        </section>
    );
}

function SecurityChecklist() {
    const cloud = [
        "Mật khẩu mạnh",
        "Bật 2FA/MFA",
        "Kiểm tra thiết bị đăng nhập",
        "Không chia sẻ link công khai bừa bãi",
        "Kiểm tra Trash/Version history",
        "Cẩn thận với file/folder share quyền edit",
    ];
    const nas = [
        "Không mở NAS ra Internet nếu chưa hiểu bảo mật",
        "Bật 2FA",
        "Cập nhật firmware",
        "Không dùng admin mặc định",
        "Phân quyền thư mục cẩn thận",
        "Bật snapshot nếu có",
        "Dùng UPS nếu dữ liệu quan trọng",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="orange"
                title="Bảo mật Cloud và NAS"
                icon={<Lock />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ChecklistCard
                    title="Cloud"
                    icon={<Cloud />}
                    items={cloud}
                    color="blue"
                />
                <ChecklistCard
                    title="NAS"
                    icon={<Server />}
                    items={nas}
                    color="emerald"
                />
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Cloud />,
            title: "Google One / Google Drive",
            subtitle: "Hợp Android, Gmail, Photos, Docs/Sheets",
            color: "blue",
            points: [
                "Đồng bộ tài liệu học tập/công việc",
                "Sao lưu ảnh điện thoại",
                "Chia sẻ file nhanh",
                "Dùng tốt với hệ sinh thái Google",
                "Không phải mục tiêu chính cho system image toàn máy",
            ],
            lesson: "Cloud sync rất tiện cho file hằng ngày, nhưng cần hiểu trash/version history khi xóa nhầm.",
        },
        {
            icon: <Cloud />,
            title: "OneDrive + Microsoft 365",
            subtitle: "Hợp Windows và Office",
            color: "cyan",
            points: [
                "Đồng bộ Desktop/Documents tiện",
                "Mở Word/Excel/PowerPoint trên nhiều máy",
                "Family phù hợp nhiều người dùng",
                "Dễ nhầm sync với backup",
                "Cần theo dõi dung lượng và quyền chia sẻ",
            ],
            lesson: "OneDrive rất hợp người dùng Windows/Office, nhưng sync không tự động là backup hoàn chỉnh.",
        },
        {
            icon: <ShieldCheck />,
            title: "Backblaze Personal Backup",
            subtitle: "Cloud backup tự động cho máy tính",
            color: "emerald",
            points: [
                "Tập trung vào backup",
                "Hợp người có nhiều ảnh/video",
                "Không phải công cụ làm việc nhóm như Drive/OneDrive",
                "Restore khi máy hỏng/mất",
                "Cần kiểm tra chính sách retention",
            ],
            lesson: "Cloud backup chuyên dụng phù hợp bảo vệ dữ liệu máy tính hơn cloud sync thông thường.",
        },
        {
            icon: <Server />,
            title: "Synology DS224+",
            subtitle: "NAS 2-bay cho gia đình/văn phòng nhỏ",
            color: "orange",
            points: [
                "2 bay, thường dùng RAID 1/SHR",
                "Lưu ảnh/video gia đình",
                "Backup nhiều máy",
                "Chia sẻ file nội bộ",
                "Media server cơ bản",
            ],
            lesson: "NAS cho bạn kiểm soát nội bộ tốt hơn, nhưng phải quản trị, cập nhật, phân quyền và backup ngoài NAS.",
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

function PickerLab() {
    const scenarios = {
        docs: {
            icon: <Cloud />,
            title: "Tài liệu cần mọi nơi",
            answer: "Dùng Google Drive, OneDrive, iCloud hoặc Dropbox. Bật 2FA và kiểm tra version history/trash để cứu file khi xóa nhầm.",
            color: "blue",
        },
        photos: {
            icon: <Smartphone />,
            title: "Ảnh điện thoại",
            answer: "Dùng Google Photos hoặc iCloud Photos rất tiện, nhưng đây chủ yếu là sync/library. Ảnh cực kỳ quan trọng vẫn nên có thêm backup riêng.",
            color: "cyan",
        },
        lots: {
            icon: <Server />,
            title: "Nhiều TB dữ liệu trong nhà",
            answer: "NAS hợp nếu có nhiều máy, nhiều ảnh/video, media server hoặc backup nội bộ. NAS 2 bay dùng RAID 1; 4 bay linh hoạt hơn.",
            color: "emerald",
        },
        laptopBackup: {
            icon: <ShieldCheck />,
            title: "Backup laptop/PC",
            answer: "Cloud backup như Backblaze hoặc NAS backup đều được. Tốt nhất có thêm bản ngoài site theo quy tắc 3-2-1.",
            color: "purple",
        },
        remote: {
            icon: <Network />,
            title: "Truy cập NAS từ xa",
            answer: "Người mới nên dùng giải pháp truy cập từ xa chính hãng hoặc VPN. Không mở port bừa bãi ra Internet.",
            color: "orange",
        },
    };
    const [active, setActive] = useState("lots");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: nên dùng Cloud hay NAS?"
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

function Backup321Section() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="12"
                color="emerald"
                title="Quy tắc 3-2-1 cho dữ liệu quan trọng"
                icon={<ShieldCheck />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <InfoCard
                        label="3 bản dữ liệu"
                        value="Bản chính + ít nhất 2 bản sao"
                        color="emerald"
                    />
                    <InfoCard
                        label="2 loại lưu trữ"
                        value="Ví dụ PC + NAS/ổ ngoài/cloud"
                        color="blue"
                    />
                    <InfoCard
                        label="1 bản ngoài vị trí chính"
                        value="Cloud hoặc ổ ngoài gửi nơi khác"
                        color="purple"
                    />
                </div>
                <pre className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-sm text-slate-300 whitespace-pre-wrap">{`Ví dụ:
Bản 1: trong PC
Bản 2: NAS trong nhà
Bản 3: cloud hoặc ổ ngoài gửi nơi khác`}</pre>
                <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-sm text-slate-300">
                    <strong className="text-emerald-300">
                        Mẹo thực chiến:
                    </strong>{" "}
                    Backup mà chưa từng thử khôi phục thì chưa chắc đáng tin.
                    Thỉnh thoảng hãy thử restore vài file.
                </div>
            </div>
        </section>
    );
}

function CommonMistakes() {
    const mistakes = [
        {
            wrong: "Cloud là backup tuyệt đối",
            right: "Nếu cloud chỉ đồng bộ file, xóa nhầm trên máy có thể bị xóa theo trên cloud. Cần kiểm tra trash, version history và retention.",
        },
        {
            wrong: "NAS có RAID rồi thì không cần backup",
            right: "RAID chỉ giúp khi một ổ hỏng trong một số cấu hình. RAID không bảo vệ khỏi xóa nhầm, ransomware, cháy nổ, mất trộm hoặc lỗi firmware.",
        },
        {
            wrong: "NAS là cloud miễn phí",
            right: "NAS không trả thuê bao cloud lớn nhưng bạn phải mua thiết bị, ổ cứng, điện, cấu hình, bảo trì, thay ổ và backup ngoài site.",
        },
        {
            wrong: "Mở NAS ra Internet cho tiện là được",
            right: "Rất nguy hiểm nếu mật khẩu yếu, không 2FA, firmware cũ, mở port bừa bãi hoặc dùng admin mặc định.",
        },
        {
            wrong: "Cloud rẻ hơn NAS trong mọi trường hợp",
            right: "Tùy dung lượng và thời gian dùng. Cloud tiện với dữ liệu ít-vừa; NAS có thể hợp hơn nếu nhiều TB và dùng lâu dài.",
        },
    ];
    const tips = [
        "Áp dụng quy tắc 3-2-1 cho dữ liệu quan trọng.",
        "Dùng cloud cho tài liệu cần truy cập mọi nơi và làm việc nhóm.",
        "Dùng NAS nếu có nhiều dữ liệu, nhiều thiết bị, media server hoặc backup nội bộ.",
        "Không nhầm sync với backup; cần version history, snapshot hoặc backup riêng.",
        "NAS nên dùng UPS nếu dữ liệu quan trọng.",
        "Bật snapshot trên NAS nếu có để chống xóa nhầm/ransomware.",
        "Kiểm tra restore định kỳ.",
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
                        <Lightbulb /> Mẹo chọn Cloud/NAS
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
                        <span className="bg-blue-500/20 text-blue-300 p-2 rounded-xl">
                            14
                        </span>{" "}
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-blue-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                Cloud = lưu trên máy chủ nhà cung cấp qua
                                Internet
                            </p>
                            <p>
                                NAS = thiết bị lưu trữ gắn vào mạng nhà/văn
                                phòng
                            </p>
                            <br />
                            <p className="text-slate-500"># Phân biệt</p>
                            <p className="text-slate-300">
                                Sync = đồng bộ thay đổi giữa thiết bị
                            </p>
                            <p className="text-slate-300">
                                Backup = bản sao để khôi phục
                            </p>
                            <p className="text-slate-300">
                                Archive = lưu lâu dài, ít thay đổi
                            </p>
                            <br />
                            <p className="text-red-300">
                                RAID không phải backup. Sync cũng không tự động
                                là backup hoàn chỉnh.
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
        question: "Cloud Storage là gì?",
        options: [
            "Ổ cứng nằm trong CPU",
            "Lưu dữ liệu trên máy chủ của nhà cung cấp qua Internet",
            "Một loại RAM",
            "Một loại cổng HDMI",
        ],
        correct: 1,
        explanation:
            "Cloud Storage là dịch vụ lưu dữ liệu trên máy chủ của nhà cung cấp và truy cập qua Internet.",
    },
    {
        question: "NAS là gì?",
        options: [
            "Thiết bị lưu trữ gắn vào mạng để nhiều thiết bị cùng truy cập",
            "Một loại màn hình",
            "Một loại bàn phím",
            "Một loại chip GPU",
        ],
        correct: 0,
        explanation:
            "NAS là Network Attached Storage: thiết bị lưu trữ nằm trong mạng để nhiều thiết bị cùng dùng.",
    },
    {
        question: "RAID trong NAS có thay thế backup không?",
        options: [
            "Có, hoàn toàn thay thế",
            "Không, RAID không bảo vệ khỏi xóa nhầm, ransomware, cháy nổ, mất trộm",
            "Có, nếu dùng ổ cứng lớn",
            "Có, nếu NAS có đèn LED",
        ],
        correct: 1,
        explanation:
            "RAID chỉ giúp chịu lỗi ổ đĩa trong một số cấu hình. Backup vẫn cần để khôi phục dữ liệu khi mất do nguyên nhân khác.",
    },
    {
        question: "Điểm khác nhau lớn giữa sync và backup là gì?",
        options: [
            "Sync chỉ dùng cho màn hình",
            "Backup luôn làm máy nhanh hơn",
            "Sync đồng bộ thay đổi giữa thiết bị; backup giữ bản sao để khôi phục",
            "Không có khác biệt",
        ],
        correct: 2,
        explanation:
            "Sync lan truyền thay đổi; backup giữ bản sao để phục hồi về thời điểm trước.",
    },
    {
        question: "Quy tắc 3-2-1 nghĩa là gì?",
        options: [
            "3 màn hình, 2 chuột, 1 bàn phím",
            "3 bản dữ liệu, 2 loại lưu trữ, 1 bản ngoài vị trí chính",
            "3 ổ RAID 0",
            "3 tài khoản admin",
        ],
        correct: 1,
        explanation:
            "3-2-1 là 3 bản dữ liệu, 2 loại lưu trữ khác nhau, 1 bản nằm ngoài vị trí chính.",
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
                Bạn đã hiểu Cloud Storage và NAS. Tiếp theo là bài tổng hợp Phần
                4: cách chọn HDD, SATA SSD, NVMe SSD, USB, thẻ nhớ, NAS hoặc
                cloud theo từng nhu cầu thực tế.
            </p>
            <Link
                to="/phan-4-9"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
            >
                Bài tiếp theo: 4.9 — Cách chọn thiết bị lưu trữ phù hợp{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "blue" }) {
    const colorMap = {
        blue: "bg-blue-500/20 text-blue-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
        purple: "bg-purple-500/20 text-purple-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        pink: "bg-pink-500/20 text-pink-300",
        orange: "bg-orange-500/20 text-orange-300",
        red: "bg-red-500/20 text-red-300",
        rose: "bg-rose-500/20 text-rose-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-blue-500/10 border-blue-400/50" : softBorder(color)}`}
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
function ConceptCard({ icon, title, color, definition, examples, simple }) {
    return (
        <div className={`${softBorder(color)} border rounded-3xl p-6`}>
            <div
                className={`w-14 h-14 rounded-2xl ${badgeColor(color)} flex items-center justify-center mb-4`}
            >
                {React.cloneElement(icon, { size: 28 })}
            </div>
            <h3 className="text-2xl font-black text-white mb-3">{title}</h3>
            <p className="text-slate-300 leading-relaxed mb-4">{definition}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300 mb-3">
                <strong className={textColor(color)}>Ví dụ:</strong> {examples}
            </div>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300">
                <strong className={textColor(color)}>Dễ hiểu:</strong> {simple}
            </div>
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
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
        rose: "bg-rose-500/10 text-rose-300 border border-rose-500/20",
    };
    return map[color] || map.blue;
}
function softBorder(color) {
    const map = {
        blue: "bg-blue-500/5 border-blue-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
        rose: "bg-rose-500/5 border-rose-500/20",
    };
    return map[color] || map.blue;
}
function textColor(color) {
    const map = {
        blue: "text-blue-300",
        cyan: "text-cyan-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
        rose: "text-rose-300",
    };
    return map[color] || "text-blue-300";
}
