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
    Gamepad2,
    Gauge,
    HardDrive,
    Layers3,
    Lightbulb,
    MemoryStick,
    PackageCheck,
    PlugZap,
    Puzzle,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shadow-lg shadow-amber-500/10">
                            <Cpu className="text-amber-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 6: Mainboard — Bản mạch chủ
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                        Bài 6.4
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <BulbAnalogy />
                <SocketFlowSimulator />
                <LgaPgaComparison />
                <DesktopSocketMatrix />
                <SpecsExplorer />
                <BiosSupportGuide />
                <RealExamples />
                <CompatibilityLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextLesson />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-amber-300">
                        <BookOpen size={16} /> Phần 6: Mainboard — Socket CPU
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Socket CPU
                        <span className="block text-amber-400">
                            LGA, AM4, AM5…
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        CPU rất mạnh và mainboard rất đẹp vẫn vô dụng nếu socket
                        không khớp. Socket là yếu tố đầu tiên phải kiểm tra
                        trước khi chọn mainboard cho CPU.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="Socket CPU" />
                        <Tag icon={<Puzzle size={16} />} text="LGA vs PGA" />
                        <Tag icon={<Sparkles size={16} />} text="AM4 / AM5" />
                        <Tag
                            icon={<Settings size={16} />}
                            text="LGA1700 / LGA1851"
                        />
                        <Tag
                            icon={<ShieldCheck size={16} />}
                            text="BIOS Support"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Cpu />}
                            label="CPU"
                            desc="Bóng đèn"
                            color="amber"
                            highlight
                        />
                        <HeroTile
                            icon={<Puzzle />}
                            label="Socket"
                            desc="Đui đèn"
                            color="blue"
                        />
                        <HeroTile
                            icon={<Settings />}
                            label="Chipset"
                            desc="Tính năng"
                            color="purple"
                        />
                        <HeroTile
                            icon={<MemoryStick />}
                            label="RAM"
                            desc="DDR4/DDR5"
                            color="emerald"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Quy tắc bắt buộc</p>
                        <p>CPU socket ≠ Mainboard socket</p>
                        <p className="text-red-300">
                            {"=> Không lắp được / không boot"}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu socket CPU là khu vực vật lý và điện tử dùng để gắn CPU vào mainboard.",
        "Phân biệt LGA và PGA: chân nằm trên socket mainboard hay nằm trên CPU.",
        "Nhận biết các socket desktop phổ biến: AM4, AM5, LGA1700, LGA1851.",
        "Hiểu vì sao cùng socket vẫn cần kiểm tra chipset, BIOS support, VRM và chuẩn RAM.",
        "Biết quy trình kiểm tra CPU/mainboard trước khi mua để tránh lỗi không lắp được hoặc không nhận CPU.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="amber"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-300 flex items-center justify-center font-bold mb-4">
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
    const points = [
        {
            icon: <Cpu />,
            title: "Gắn vừa CPU",
            desc: "Socket quyết định CPU có đặt vừa vào mainboard không.",
            color: "amber",
        },
        {
            icon: <PlugZap />,
            title: "Tiếp xúc điện đúng",
            desc: "Hàng trăm đến hàng nghìn điểm tiếp xúc phải khớp chuẩn.",
            color: "blue",
        },
        {
            icon: <Settings />,
            title: "Dòng CPU hỗ trợ",
            desc: "Socket đi kèm nền tảng và nhóm chipset phù hợp.",
            color: "purple",
        },
        {
            icon: <MemoryStick />,
            title: "Chuẩn RAM nền tảng",
            desc: "AM4 thường DDR4, AM5 DDR5, LGA1700 tùy main DDR4/DDR5.",
            color: "emerald",
        },
        {
            icon: <ShieldCheck />,
            title: "Nâng cấp về sau",
            desc: "Socket mới hơn thường có đường nâng cấp dài hơn, nhưng vẫn cần BIOS hỗ trợ.",
            color: "cyan",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Khái niệm cốt lõi: Socket CPU là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Socket CPU</strong> là khu
                    vực trên mainboard dùng để{" "}
                    <strong className="text-amber-300">
                        gắn CPU vào bo mạch chủ
                    </strong>
                    . Nó là “ổ cắm” vật lý và điện tử giữa CPU và mainboard.
                </p>
                <div className="grid md:grid-cols-5 gap-4">
                    {points.map((p) => (
                        <RoleCard key={p.title} {...p} />
                    ))}
                </div>
                <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Sai socket thì không cần xét tiếp RAM, SSD hay GPU — CPU
                    không lắp được hoặc không hoạt động.
                </div>
            </div>
        </section>
    );
}

function BulbAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: bóng đèn và đui đèn"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-4 gap-4">
                <AnalogyCard
                    icon={<Cpu />}
                    title="CPU = bóng đèn"
                    desc="Bóng tốt đến đâu cũng phải đúng kiểu chân mới dùng được."
                    color="amber"
                />
                <AnalogyCard
                    icon={<Puzzle />}
                    title="Socket = đui đèn"
                    desc="Đui chân xoáy không nhận bóng chân cắm; socket CPU cũng vậy."
                    color="blue"
                />
                <AnalogyCard
                    icon={<Settings />}
                    title="Chipset = hệ điện trong nhà"
                    desc="Cùng đui đèn nhưng công tắc, dây điện và tính năng có thể khác nhau."
                    color="purple"
                />
                <AnalogyCard
                    icon={<ShieldCheck />}
                    title="BIOS = bảng điều khiển"
                    desc="Đui đúng nhưng bảng điều khiển quá cũ vẫn có thể chưa nhận thiết bị mới."
                    color="emerald"
                />
            </div>
        </section>
    );
}

function SocketFlowSimulator() {
    const flows = {
        boot: {
            title: "Khi socket đúng",
            color: "emerald",
            steps: [
                {
                    icon: <Cpu />,
                    title: "CPU đặt vào socket",
                    desc: "CPU được canh đúng dấu tam giác/rãnh định vị rồi đặt nhẹ vào socket.",
                },
                {
                    icon: <PlugZap />,
                    title: "Socket tạo tiếp xúc điện",
                    desc: "Các điểm tiếp xúc kết nối CPU với mạch trên mainboard.",
                },
                {
                    icon: <Zap />,
                    title: "VRM cấp điện cho CPU",
                    desc: "Mainboard cấp điện đúng mức cho CPU qua VRM.",
                },
                {
                    icon: <Workflow />,
                    title: "CPU giao tiếp với linh kiện",
                    desc: "CPU nói chuyện với RAM, GPU, SSD và chipset.",
                },
                {
                    icon: <ShieldCheck />,
                    title: "BIOS/UEFI kiểm tra",
                    desc: "Nếu BIOS hỗ trợ CPU, máy có thể POST và boot vào hệ điều hành.",
                },
            ],
        },
        wrong: {
            title: "Khi socket sai",
            color: "red",
            steps: [
                {
                    icon: <Search />,
                    title: "CPU và mainboard không khớp",
                    desc: "Ví dụ Ryzen 5 5600 AM4 không thể gắn vào mainboard AM5.",
                },
                {
                    icon: <XCircle />,
                    title: "Không đặt vừa / tiếp xúc sai",
                    desc: "CPU không vào socket hoặc chân/mặt tiếp xúc không đúng chuẩn.",
                },
                {
                    icon: <AlertTriangle />,
                    title: "Nguy cơ cong chân",
                    desc: "Ép lắp sai chiều hoặc sai socket có thể làm hỏng CPU hoặc mainboard.",
                },
                {
                    icon: <XCircle />,
                    title: "Máy không hoạt động",
                    desc: "Không POST, không boot, hoặc không thể lắp vật lý từ đầu.",
                },
            ],
        },
        bios: {
            title: "Socket đúng nhưng BIOS cũ",
            color: "orange",
            steps: [
                {
                    icon: <Cpu />,
                    title: "CPU đúng socket",
                    desc: "CPU đặt vừa vào socket và lắp được vật lý.",
                },
                {
                    icon: <Settings />,
                    title: "BIOS chưa hỗ trợ",
                    desc: "Mainboard đời cũ có thể chưa nhận CPU mới hơn.",
                },
                {
                    icon: <XCircle />,
                    title: "Không POST / không nhận CPU",
                    desc: "Máy có thể không lên hình hoặc báo lỗi CPU.",
                },
                {
                    icon: <ShieldCheck />,
                    title: "Cập nhật BIOS",
                    desc: "Dùng CPU cũ hơn hoặc BIOS Flashback nếu mainboard hỗ trợ.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("boot");
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
                title="Socket kết nối CPU với mainboard thế nào?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-3 mb-6">
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
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[310px] flex flex-col justify-between">
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

function LgaPgaComparison() {
    const rows = [
        [
            "LGA — Land Grid Array",
            "CPU có mặt tiếp xúc phẳng",
            "Chân nằm trên socket mainboard",
            "Intel LGA1700, AMD AM5",
            "CPU ít bị cong chân hơn; mainboard dễ hỏng chân socket nếu thao tác sai",
        ],
        [
            "PGA — Pin Grid Array",
            "CPU có nhiều chân nhỏ ở mặt dưới",
            "Chân nằm trên CPU",
            "AMD AM4",
            "Socket đơn giản hơn; CPU dễ cong/gãy chân nếu rơi hoặc lắp sai",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="LGA và PGA khác nhau thế nào?"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[900px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Loại socket</th>
                            <th className="p-4">CPU trông thế nào?</th>
                            <th className="p-4">Chân nằm ở đâu?</th>
                            <th className="p-4">Ví dụ</th>
                            <th className="p-4">Lưu ý</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([type, cpu, pins, ex, note]) => (
                            <tr
                                key={type}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-blue-300 font-extrabold">
                                    {type}
                                </td>
                                <td className="p-4 text-slate-300">{cpu}</td>
                                <td className="p-4 text-slate-300">{pins}</td>
                                <td className="p-4 text-slate-300">{ex}</td>
                                <td className="p-4 text-slate-300">{note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <RuleCard
                    label="LGA"
                    value="CPU = mặt phẳng tiếp xúc • Mainboard socket = có chân nhỏ"
                    color="blue"
                />
                <RuleCard
                    label="PGA"
                    value="CPU = có chân nhỏ • Mainboard socket = có lỗ nhận chân"
                    color="orange"
                />
            </div>
        </section>
    );
}

function DesktopSocketMatrix() {
    const rows = [
        [
            "AM4",
            "AMD",
            "Ryzen 1000 đến Ryzen 5000 tùy chipset/BIOS",
            "DDR4",
            "Nền tảng lâu đời, giá tốt",
        ],
        [
            "AM5",
            "AMD",
            "Ryzen 7000/8000/9000",
            "DDR5",
            "Nền tảng mới hơn, hướng nâng cấp lâu dài",
        ],
        [
            "LGA1700",
            "Intel",
            "Core thế hệ 12/13/14",
            "DDR4 hoặc DDR5 tùy main",
            "Rất phổ biến cho Intel gen 12–14",
        ],
        [
            "LGA1851",
            "Intel",
            "Một số CPU Intel Core Ultra desktop đời mới",
            "DDR5",
            "Nền tảng mới hơn LGA1700",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Một số socket desktop phổ biến"
                icon={<Cpu />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[860px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Socket</th>
                            <th className="p-4">Hãng</th>
                            <th className="p-4">CPU thường gặp</th>
                            <th className="p-4">RAM thường dùng</th>
                            <th className="p-4">Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([socket, brand, cpu, ram, note]) => (
                            <tr
                                key={socket}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-emerald-300 font-extrabold">
                                    {socket}
                                </td>
                                <td className="p-4 text-slate-300">{brand}</td>
                                <td className="p-4 text-slate-300">{cpu}</td>
                                <td className="p-4 text-slate-300">{ram}</td>
                                <td className="p-4 text-slate-300">{note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        name: {
            icon: <Cpu />,
            title: "Tên socket",
            detail: "Thông số đầu tiên phải kiểm tra khi ghép CPU và mainboard.",
            impact: "Ryzen 5 7600 là AM5 nên main phải AM5; Core i5-14400F là LGA1700 nên main phải LGA1700.",
        },
        chipset: {
            icon: <Settings />,
            title: "Chipset đi kèm",
            detail: "Socket là cắm vừa, chipset là nhóm tính năng đi cùng nền tảng.",
            impact: "LGA1700 có H610/B660/B760/Z690/Z790; AM5 có A620/B650/B650E/X670/X670E/X870/X870E.",
        },
        ram: {
            icon: <MemoryStick />,
            title: "Chuẩn RAM",
            detail: "Socket/nền tảng thường kéo theo DDR4 hoặc DDR5.",
            impact: "AM4 thường DDR4; AM5 DDR5; LGA1700 có bản main DDR4 và DDR5 nhưng không cắm lẫn.",
        },
        vrm: {
            icon: <Zap />,
            title: "VRM và TDP",
            detail: "Socket đúng chưa đủ; CPU mạnh cần mainboard có VRM tốt.",
            impact: "Ryzen 9/Core i9 có thể gắn vừa socket nhưng main yếu có thể nóng VRM, tụt xung khi tải nặng.",
        },
        bios: {
            icon: <ShieldCheck />,
            title: "BIOS support",
            detail: "Mainboard cùng socket nhưng BIOS quá cũ có thể không nhận CPU đời mới.",
            impact: "Ryzen 8000/9000 trên main AM5 đời đầu hoặc Intel gen 14 trên main 600/700 có thể cần update BIOS.",
        },
        orientation: {
            icon: <Puzzle />,
            title: "Dấu định vị",
            detail: "CPU và socket có tam giác nhỏ hoặc rãnh khuyết để lắp đúng chiều.",
            impact: "Không ấn mạnh, không kéo lê CPU trên socket, đặc biệt với LGA vì chân nằm trên mainboard.",
        },
    };
    const [active, setActive] = useState("name");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số kỹ thuật quan trọng khi kiểm tra socket"
                icon={<Gauge />}
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

function BiosSupportGuide() {
    const checks = [
        "CPU tên gì?",
        "CPU dùng socket gì?",
        "Mainboard có đúng socket không?",
        "Chipset có hỗ trợ CPU đó không?",
        "BIOS version có nhận CPU đó không?",
        "RAM là DDR4 hay DDR5?",
        "Mainboard có BIOS Flashback không?",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="cyan"
                title="CPU Support List và BIOS Flashback"
                icon={<ShieldCheck />}
            />
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <BookOpen className="text-cyan-300" /> Trước khi mua,
                        kiểm tra theo thứ tự
                    </h3>
                    <div className="space-y-3">
                        {checks.map((c, i) => (
                            <div
                                key={c}
                                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-3 text-sm text-slate-300"
                            >
                                <span className="w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-300 flex items-center justify-center font-bold shrink-0">
                                    {i + 1}
                                </span>
                                {c}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-3xl p-6">
                    <h3 className="text-xl font-bold text-cyan-300 mb-4">
                        BIOS Flashback là gì?
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        BIOS Flashback là tính năng cho phép cập nhật BIOS dễ
                        hơn, đôi khi không cần CPU đang hoạt động. Tính năng này
                        rất hữu ích khi mua mainboard đời cũ để dùng CPU đời
                        mới.
                    </p>
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300">
                        Main đúng socket + BIOS cũ → có thể không nhận CPU mới
                        <br />
                        Có BIOS Flashback → cập nhật BIOS dễ hơn
                        <br />
                        Không có → cần CPU cũ hơn hoặc nhờ cửa hàng update
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
            title: "AMD AM4",
            subtitle: "Ryzen 5 5600 + B550 + DDR4",
            color: "orange",
            points: [
                "Nền tảng tiết kiệm",
                "RAM DDR4 rẻ",
                "Hiệu năng Ryzen 5 5600 vẫn ổn",
                "Hợp học tập, văn phòng, gaming 1080p",
                "Đường nâng cấp tương lai hạn chế hơn AM5",
            ],
            lesson: "AM4 vẫn rất đáng dùng nếu cần build tiết kiệm và tận dụng DDR4.",
        },
        {
            icon: <Sparkles />,
            title: "AMD AM5",
            subtitle: "Ryzen 5 7600 + B650 + DDR5",
            color: "emerald",
            points: [
                "Socket mới hơn AM4",
                "Dùng DDR5",
                "Hỗ trợ Ryzen 7000/8000/9000 tùy BIOS",
                "Hợp build mới dùng lâu dài",
                "Chi phí main/RAM cao hơn AM4",
            ],
            lesson: "AM5 hợp người build mới, muốn nền tảng nâng cấp lâu dài hơn.",
        },
        {
            icon: <Settings />,
            title: "Intel LGA1700",
            subtitle: "i5-12400F / 13400F / 14400F + B660/B760",
            color: "blue",
            points: [
                "Core gen 12/13/14",
                "Có main DDR4 hoặc DDR5",
                "CPU chữ F cần GPU rời",
                "B760 khá cân bằng",
                "Gen 14 trên main cũ có thể cần BIOS mới",
            ],
            lesson: "LGA1700 rất phổ biến, nhưng phải xem main DDR4 hay DDR5 và BIOS hỗ trợ CPU đời nào.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="pink"
                title="Ví dụ thực tế cụ thể"
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

function CompatibilityLab() {
    const scenarios = {
        ryzen5600: {
            icon: <Cpu />,
            title: "Ryzen 5 5600",
            answer: "Socket AM4. Chọn mainboard AM4 như B450/B550/X570 tùy nhu cầu và BIOS. Dùng RAM DDR4.",
            color: "orange",
        },
        ryzen7600: {
            icon: <Sparkles />,
            title: "Ryzen 5 7600",
            answer: "Socket AM5. Chọn mainboard AM5 như A620/B650/X670/X870 tùy nhu cầu. Dùng RAM DDR5.",
            color: "emerald",
        },
        i514400f: {
            icon: <Settings />,
            title: "Core i5-14400F",
            answer: "Socket LGA1700. Chọn main Intel 600/700 series phù hợp, thường B760. CPU chữ F cần GPU rời để xuất hình.",
            color: "blue",
        },
        ddr: {
            icon: <MemoryStick />,
            title: "Có RAM DDR4 cũ",
            answer: "AM5 không dùng DDR4. Với Intel LGA1700, phải chọn đúng phiên bản main DDR4 nếu muốn tận dụng RAM DDR4.",
            color: "cyan",
        },
        bios: {
            icon: <ShieldCheck />,
            title: "CPU đời mới trên main cũ",
            answer: "Kiểm tra CPU Support List và BIOS version. Hỏi cửa hàng đã update BIOS chưa hoặc chọn main có BIOS Flashback.",
            color: "red",
        },
    };
    const [active, setActive] = useState("ryzen7600");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="blue"
                title="Lab: kiểm tra CPU có khớp mainboard không?"
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
            wrong: "Cứ CPU AMD là gắn được main AMD",
            right: "AMD có AM4 và AM5 khác nhau. Ryzen 5 5600 là AM4; Ryzen 5 7600 là AM5. Hai socket này không thay thế cho nhau.",
        },
        {
            wrong: "Cùng socket là chắc chắn chạy ngay",
            right: "Cùng socket mới là điều kiện vật lý. Còn cần chipset hỗ trợ, BIOS hỗ trợ, VRM đủ khỏe và RAM đúng chuẩn.",
        },
        {
            wrong: "Main DDR4 và DDR5 cùng socket thì RAM cắm lẫn được",
            right: "Không cắm lẫn được. B760 DDR4 chỉ cắm DDR4; B760 DDR5 chỉ cắm DDR5.",
        },
        {
            wrong: "Lắp CPU sai chiều hoặc dùng lực mạnh",
            right: "CPU/socket có dấu tam giác hoặc rãnh khuyết. Hãy đặt nhẹ, không ấn mạnh, không kéo lê CPU trên socket.",
        },
        {
            wrong: "Mua CPU trước rồi mới hỏi main hỗ trợ gì",
            right: "Nên kiểm tra CPU socket, mainboard socket, chipset, BIOS version và RAM trước khi chốt mua.",
        },
    ];
    const tips = [
        "Luôn tìm tên CPU trước, sau đó tra socket.",
        "Tra trang CPU Support List của mainboard.",
        "Kiểm tra BIOS version cần thiết cho CPU.",
        "Chọn main có BIOS Flashback nếu định dùng CPU đời mới trên main có thể tồn kho lâu.",
        "Kiểm tra DDR4/DDR5 thật kỹ, đặc biệt với Intel LGA1700.",
        "Khi lắp CPU, tìm dấu tam giác, đặt nhẹ, không dùng lực ép.",
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
                        <Lightbulb /> Checklist nhanh
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
                        <span className="bg-amber-500/20 text-amber-300 p-2 rounded-xl">
                            12
                        </span>{" "}
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-amber-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                Socket CPU = ổ cắm vật lý và điện tử giữa CPU và
                                mainboard
                            </p>
                            <br />
                            <p className="text-slate-500"># Socket phổ biến</p>
                            <p className="text-slate-300">
                                AM4 → Ryzen 1000–5000, DDR4
                            </p>
                            <p className="text-slate-300">
                                AM5 → Ryzen 7000/8000/9000, DDR5
                            </p>
                            <p className="text-slate-300">
                                LGA1700 → Intel Core gen 12/13/14, DDR4 hoặc
                                DDR5 tùy main
                            </p>
                            <p className="text-slate-300">
                                LGA1851 → Intel Core Ultra desktop đời mới, DDR5
                            </p>
                            <br />
                            <p className="text-red-300">
                                Đúng socket chưa đủ: kiểm tra chipset, BIOS, VRM
                                và RAM.
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
        question: "Socket CPU là gì?",
        options: [
            "Khe cắm RAM",
            "Khu vực trên mainboard dùng để gắn CPU",
            "Cổng cắm màn hình",
            "Chip điều phối USB và SATA",
        ],
        correct: 1,
        explanation:
            "Socket CPU là khu vực vật lý và điện tử trên mainboard dùng để gắn CPU.",
    },
    {
        question: "Ryzen 5 7600 dùng socket nào?",
        options: ["AM4", "AM5", "LGA1700", "LGA1200"],
        correct: 1,
        explanation: "Ryzen 5 7600 thuộc nền tảng AMD AM5.",
    },
    {
        question: "Intel Core i5-14400F dùng socket nào?",
        options: ["AM4", "AM5", "LGA1700", "LGA1151"],
        correct: 2,
        explanation:
            "Intel Core i5-14400F thuộc Intel Core desktop thế hệ 14, dùng socket LGA1700.",
    },
    {
        question: "LGA khác PGA ở điểm nào?",
        options: [
            "LGA có chân trên CPU, PGA có chân trên mainboard",
            "LGA có chân trên socket mainboard, PGA có chân trên CPU",
            "Cả hai hoàn toàn giống nhau",
            "LGA chỉ dùng cho RAM",
        ],
        correct: 1,
        explanation:
            "LGA có chân trên socket mainboard, còn PGA có chân nhỏ nằm trên CPU.",
    },
    {
        question:
            "Cùng socket nhưng máy không nhận CPU, nguyên nhân có thể là gì?",
        options: [
            "Chưa cập nhật BIOS",
            "Chuột bị hỏng",
            "Màn hình quá lớn",
            "Case quá nặng",
        ],
        correct: 0,
        explanation:
            "Mainboard cùng socket nhưng BIOS quá cũ có thể chưa hỗ trợ CPU đời mới.",
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
                    <strong className="text-amber-400">
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
                <span className="text-amber-400">
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
                        className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu socket CPU. Tiếp theo là khe RAM / DIMM Slots và khe
                mở rộng PCIe, vì sau khi biết CPU gắn vào đâu, bạn cần biết RAM,
                GPU, SSD và card mở rộng được cắm vào vị trí nào trên mainboard.
            </p>
            <Link
                to="/phan-6-5"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-amber-500/20"
            >
                Bài tiếp theo: 6.5 — Khe RAM / DIMM Slots và khe mở rộng PCIe{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "amber" }) {
    const colorMap = {
        amber: "bg-amber-500/20 text-amber-300",
        blue: "bg-blue-500/20 text-blue-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        purple: "bg-purple-500/20 text-purple-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-amber-500/10 border-amber-400/50" : softBorder(color)}`}
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
function RoleCard({ icon, title, desc, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-3xl p-5`}>
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
        <div className={`${softBorder(color)} border rounded-2xl p-4`}>
            <p className={`${textColor(color)} font-bold text-sm mb-1`}>
                {label}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
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
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.amber;
}
function softBorder(color) {
    const map = {
        amber: "bg-amber-500/5 border-amber-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.amber;
}
function textColor(color) {
    const map = {
        amber: "text-amber-300",
        blue: "text-blue-300",
        cyan: "text-cyan-300",
        orange: "text-orange-300",
        purple: "text-purple-300",
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-amber-300";
}
