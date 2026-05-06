import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BatteryCharging,
    BookOpen,
    Brain,
    CheckCircle2,
    ChevronRight,
    Cpu,
    Database,
    Fan,
    Gamepad2,
    Gauge,
    HardDrive,
    Layers3,
    Lightbulb,
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
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500 selection:text-slate-950 pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shadow-lg shadow-amber-500/10">
                            <Gauge className="text-amber-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 7: PSU — Bộ nguồn máy tính
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                        Bài 7.2
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <TruckAnalogy />
                <EfficiencySimulator />
                <WattageGuide />
                <EfficiencyTable />
                <PlusCertification />
                <SpecsExplorer />
                <ConnectorAndStandardGuide />
                <QualityGuide />
                <RealExamples />
                <PickerLab />
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
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-amber-300">
                        <BookOpen size={16} /> Phần 7: PSU — Đọc thông số
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Thông số PSU
                        <span className="block text-amber-400">
                            Wattage, Efficiency, 80 PLUS
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        750W không tự động là nguồn tốt, và 80 PLUS Gold không
                        tự động là “xịn toàn diện”. Bạn cần đọc wattage, hiệu
                        suất, đường 12V, đầu cắm, chuẩn ATX và chất lượng dòng
                        nguồn.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Gauge size={16} />} text="Wattage" />
                        <Tag icon={<Sparkles size={16} />} text="Efficiency" />
                        <Tag icon={<Award size={16} />} text="80 PLUS" />
                        <Tag icon={<Zap size={16} />} text="12V Rail" />
                        <Tag icon={<PlugZap size={16} />} text="12V-2x6" />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Gauge />}
                            label="750W"
                            desc="Khả năng cấp tối đa"
                            color="amber"
                            highlight
                        />
                        <HeroTile
                            icon={<Sparkles />}
                            label="90%"
                            desc="Hiệu suất chuyển đổi"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<Award />}
                            label="Gold"
                            desc="Chứng nhận hiệu suất"
                            color="yellow"
                        />
                        <HeroTile
                            icon={<Zap />}
                            label="12V"
                            desc="CPU/GPU cần nhất"
                            color="orange"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Công thức đọc nhanh</p>
                        <p>Wall Power = DC Load / Efficiency</p>
                        <p className="text-amber-300">
                            400W / 90% ≈ 444W từ ổ cắm
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu Wattage là khả năng cấp công suất tối đa, không phải mức PSU luôn tiêu thụ.",
        "Tính được quan hệ giữa điện linh kiện cần, hiệu suất PSU và điện lấy từ ổ cắm.",
        "Biết 80 PLUS là chứng nhận hiệu suất, không phải bảo chứng toàn bộ chất lượng PSU.",
        "Đọc được đường 12V, Active PFC, chuẩn ATX 3.0/3.1 và đầu 12VHPWR/12V-2x6.",
        "Chọn công suất PSU theo GPU, nhu cầu, khoảng dư tải, đầu cắm và chất lượng thực tế.",
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
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-300 flex items-center justify-center font-bold mb-4">
                            {i + 1}
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
    const cards = [
        {
            icon: <Gauge />,
            title: "Wattage",
            desc: "PSU có thể cấp tối đa bao nhiêu điện cho hệ thống.",
            color: "amber",
        },
        {
            icon: <Sparkles />,
            title: "Efficiency",
            desc: "PSU chuyển điện AC thành DC hiệu quả đến đâu; phần hao phí biến thành nhiệt.",
            color: "emerald",
        },
        {
            icon: <Award />,
            title: "80 PLUS",
            desc: "Chứng nhận hiệu suất theo cấp Standard, Bronze, Silver, Gold, Platinum, Titanium…",
            color: "yellow",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Các thông số PSU nói lên điều gì?"
                icon={<Brain />}
            />
            <div className="grid md:grid-cols-3 gap-4">
                {cards.map((c) => (
                    <RoleCard key={c.title} {...c} />
                ))}
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-blue-300">Ghi nhớ:</strong> PSU tốt
                không chỉ cần công suất đủ lớn. Nó còn cần hiệu suất tốt, đường
                12V khỏe, đủ đầu cắm, bảo vệ điện đầy đủ, bảo hành rõ ràng và
                review kỹ thuật tốt.
            </div>
        </section>
    );
}

function TruckAnalogy() {
    const cards = [
        {
            icon: <Gauge />,
            title: "Wattage = tải trọng xe tải",
            desc: "Xe tải 750kg không có nghĩa lúc nào cũng chở 750kg; PSU 750W cũng vậy.",
            color: "amber",
        },
        {
            icon: <Sparkles />,
            title: "Hiệu suất = mức hao xăng",
            desc: "Cùng chở hàng, xe tiết kiệm nhiên liệu ít hao phí hơn; PSU hiệu suất cao ít thất thoát nhiệt hơn.",
            color: "emerald",
        },
        {
            icon: <Award />,
            title: "80 PLUS = nhãn tiết kiệm",
            desc: "Nhãn giúp phân loại hiệu quả, nhưng không nói hết độ bền, phanh, khung xe hay chất lượng thực tế.",
            color: "yellow",
        },
        {
            icon: <ShieldCheck />,
            title: "Review kỹ thuật = kiểm định sâu",
            desc: "Voltage regulation, ripple, protection tests mới phản ánh chất lượng nguồn rõ hơn.",
            color: "blue",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: xe tải và mức hao xăng"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-4 gap-4">
                {cards.map((c) => (
                    <AnalogyCard key={c.title} {...c} />
                ))}
            </div>
        </section>
    );
}

function EfficiencySimulator() {
    const cases = {
        low: { title: "400W DC @ 80%", load: 400, eff: 0.8, color: "orange" },
        gold: { title: "400W DC @ 90%", load: 400, eff: 0.9, color: "yellow" },
        plat: {
            title: "400W DC @ 94%",
            load: 400,
            eff: 0.94,
            color: "emerald",
        },
        heavy: { title: "500W DC @ 90%", load: 500, eff: 0.9, color: "blue" },
    };
    const [active, setActive] = useState("gold");
    const item = cases[active];
    const wall = Math.round(item.load / item.eff);
    const waste = wall - item.load;
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Mô phỏng: hiệu suất PSU liên quan thế nào đến điện hao phí?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-3 mb-6">
                    {Object.entries(cases).map(([key, c]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl border p-4 font-bold transition-all ${active === key ? `${softBorder(c.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            {c.title}
                        </button>
                    ))}
                </div>
                <div className="grid lg:grid-cols-3 gap-4">
                    <MetricCard
                        icon={<Cpu />}
                        label="Linh kiện cần"
                        value={`${item.load}W DC`}
                        color="blue"
                    />
                    <MetricCard
                        icon={<PlugZap />}
                        label="Ổ cắm cấp khoảng"
                        value={`${wall}W AC`}
                        color={item.color}
                    />
                    <MetricCard
                        icon={<Fan />}
                        label="Hao phí thành nhiệt"
                        value={`${waste}W`}
                        color="red"
                    />
                </div>
                <div className="mt-6 bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Điện lấy từ ổ cắm = {item.load}W /{" "}
                    {Math.round(item.eff * 100)}% ≈{" "}
                    <span className={textColor(item.color)}>{wall}W</span>
                </div>
            </div>
        </section>
    );
}

function WattageGuide() {
    const rows = [
        [
            "300–450W",
            "PC văn phòng, không GPU rời",
            "Nên chọn nguồn chất lượng, không chọn no-name",
        ],
        [
            "500–550W",
            "Gaming nhẹ, GPU tiết kiệm điện",
            "GTX 1650, RX 6400, RTX 3050 tùy cấu hình",
        ],
        ["600–650W", "Gaming phổ thông", "RTX 4060, RX 7600, i5/Ryzen 5"],
        ["750W", "Gaming tầm trung khá", "RTX 4070, RX 7800 XT class"],
        ["850W", "Gaming cao cấp", "GPU mạnh hơn, dư tải tốt"],
        [
            "1000W+",
            "Workstation, CPU/GPU cao cấp",
            "Render, AI, nhiều ổ, nhiều tải nặng",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="orange"
                title="Phân loại theo công suất Wattage"
                icon={<Gauge />}
            />
            <DataTable
                title="Gợi ý công suất thực tế"
                rows={rows}
                headers={["Công suất PSU", "Phù hợp với", "Ghi chú"]}
                accent="orange"
            />
            <p className="text-sm text-slate-400">
                Đây là gợi ý thực tế, không phải luật cứng. Luôn xem CPU + GPU
                cụ thể, số ổ, quạt, khả năng nâng cấp và spike tải.
            </p>
        </section>
    );
}

function EfficiencyTable() {
    const rows = [
        ["400W", "80%", "500W", "100W"],
        ["400W", "90%", "~444W", "~44W"],
        ["400W", "94%", "~426W", "~26W"],
        ["500W", "80%", "625W", "125W"],
        ["500W", "90%", "~556W", "~56W"],
        ["500W", "94%", "~532W", "~32W"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Hiệu suất: cùng tải, PSU tốt hao phí ít hơn"
                icon={<Sparkles />}
            />
            <DataTable
                title="Điện lấy từ ổ cắm theo hiệu suất"
                rows={rows}
                headers={[
                    "Điện linh kiện cần",
                    "Hiệu suất PSU",
                    "Điện lấy từ ổ cắm",
                    "Hao phí thành nhiệt",
                ]}
                accent="emerald"
            />
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-emerald-300">Lưu ý:</strong> hiệu suất
                cao không làm máy mạnh hơn, nhưng giúp ít nóng hơn, ít hao điện
                hơn và quạt PSU có thể êm hơn.
            </div>
        </section>
    );
}

function PlusCertification() {
    const rows = [
        ["Standard / White", "Cơ bản", "Máy rất phổ thông"],
        ["Bronze", "Phổ thông", "PC văn phòng, gaming tiết kiệm"],
        ["Silver", "Ít gặp", "Không phổ biến bằng Bronze/Gold"],
        ["Gold", "Rất phổ biến", "Gaming, làm việc, tầm trung/cao"],
        ["Platinum", "Cao cấp", "Workstation, máy chạy lâu"],
        ["Titanium", "Rất cao cấp", "Máy cao cấp, server/workstation đặc biệt"],
    ];
    const table230v = [
        ["Standard", "82%", "85%", "82%"],
        ["Bronze", "85%", "88%", "85%"],
        ["Silver", "87%", "90%", "87%"],
        ["Gold", "90%", "92%", "89%"],
        ["Platinum", "92%", "94%", "90%"],
        ["Titanium", "94%", "96%", "94%"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Chứng chỉ 80 PLUS: hiểu đúng để không bị đánh lừa"
                icon={<Award />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="Các cấp 80 PLUS"
                    rows={rows}
                    headers={["Chứng chỉ", "Mức phổ biến", "Phù hợp với"]}
                    accent="yellow"
                />
                <DataTable
                    title="Bảng 230V EU Internal thường gặp"
                    rows={table230v}
                    headers={["Mức", "20% tải", "50% tải", "100% tải"]}
                    accent="amber"
                />
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-red-300">Điểm cần nhớ:</strong> 80 PLUS
                càng cao thì hiệu suất càng tốt, nhưng không tự đảm bảo PSU đó
                tốt toàn diện. Vẫn phải xem review kỹ thuật, linh kiện, bảo
                hành, bảo vệ và dòng sản phẩm.
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        total: {
            icon: <Gauge />,
            title: "Total Wattage",
            detail: "Số lớn nhất trên tên sản phẩm như RM750e 750W hay RM850x 850W.",
            impact: "Không nên chỉ nhìn số này. Hai PSU cùng 750W có thể khác rất xa về chất lượng và đường 12V.",
        },
        rail: {
            icon: <Zap />,
            title: "Đường 12V",
            detail: "CPU và GPU chủ yếu dùng điện 12V qua EPS, PCIe, 12VHPWR hoặc 12V-2x6.",
            impact: "PSU tốt thường có 12V gần bằng công suất tổng: 650W nên khoảng 600W+ trên 12V.",
        },
        eff: {
            icon: <Sparkles />,
            title: "Efficiency",
            detail: "Tỷ lệ điện AC chuyển thành DC hữu ích cho linh kiện.",
            impact: "Hiệu suất cao giảm hao phí nhiệt, giảm độ ồn tiềm năng và tiết kiệm điện hơn.",
        },
        pfc: {
            icon: <BatteryCharging />,
            title: "PFC",
            detail: "Power Factor Correction giúp PSU dùng điện lưới hiệu quả và ổn định hơn.",
            impact: "Người dùng phổ thông nên ưu tiên PSU có Active PFC từ hãng uy tín.",
        },
        atx: {
            icon: <Settings />,
            title: "ATX 3.0 / 3.1",
            detail: "Chuẩn PSU đời mới phù hợp hơn với GPU hiện đại và spike tải.",
            impact: "Nếu dùng RTX 40/50 class hoặc GPU cao cấp, PSU ATX 3.0/3.1 với dây native là lựa chọn đáng cân nhắc.",
        },
        cables: {
            icon: <PlugZap />,
            title: "Đầu cắm nguồn",
            detail: "24-pin ATX, EPS CPU, PCIe 6+2, 12VHPWR/12V-2x6, SATA Power, Molex.",
            impact: "Chọn đúng công suất chưa đủ; PSU phải có đủ dây cho mainboard, CPU, GPU và ổ lưu trữ.",
        },
    };
    const [active, setActive] = useState("rail");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="purple"
                title="Explorer: thông số nào cần đọc kỹ?"
                icon={<Puzzle />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(specs).map(([key, s]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center transition-all ${active === key ? "bg-purple-500 text-white" : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}
                        >
                            {React.cloneElement(s.icon, { size: 20 })}
                            <span className="font-bold text-xs">{s.title}</span>
                        </button>
                    ))}
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center justify-center mb-5">
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {item.title}
                        </h3>
                    </div>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                        <p>{item.detail}</p>
                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-purple-300">
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

function ConnectorAndStandardGuide() {
    const rows = [
        ["24-pin ATX", "Mainboard", "Luôn cần"],
        [
            "4+4-pin EPS / 8-pin CPU",
            "CPU",
            "CPU/main cao cấp có thể cần 2 đầu EPS",
        ],
        ["6+2-pin PCIe", "GPU rời", "GPU tầm trung/cao"],
        [
            "12VHPWR / 12V-2x6",
            "GPU NVIDIA đời mới",
            "RTX 40/50 class, tùy card",
        ],
        ["SATA Power", "SSD/HDD SATA, hub quạt/RGB", "Khi dùng nhiều ổ/hub"],
        ["Molex", "Thiết bị cũ", "Ít dùng"],
    ];
    const standards = [
        ["ATX 2.x", "Vẫn dùng tốt với nhiều cấu hình"],
        ["ATX 3.0", "Thiết kế tốt hơn cho GPU đời mới và spike tải"],
        ["ATX 3.1", "Cập nhật mới hơn, thường đi với đầu 12V-2x6"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Chuẩn ATX và đầu cắm nguồn"
                icon={<PlugZap />}
            />
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
                <DataTable
                    title="Đầu cắm cần kiểm tra"
                    rows={rows}
                    headers={["Đầu cắm", "Dùng cho", "Cần kiểm tra khi nào?"]}
                    accent="blue"
                />
                <DataTable
                    title="Chuẩn PSU"
                    rows={standards}
                    headers={["Chuẩn", "Ý nghĩa thực tế"]}
                    accent="cyan"
                />
            </div>
        </section>
    );
}

function QualityGuide() {
    const rows = [
        ["No-name / công suất ảo", "Giá rất rẻ, thông số mập mờ", "Không nên"],
        [
            "Entry-level từ hãng uy tín",
            "Bronze, công suất vừa phải",
            "Dùng được cho máy nhẹ",
        ],
        ["Mainstream tốt", "Bronze/Gold, bảo hành ổn", "Phù hợp đa số PC"],
        [
            "High-end",
            "Gold/Platinum, linh kiện tốt, full modular",
            "Gaming cao cấp/workstation",
        ],
        [
            "Server/datacenter",
            "Thiết kế chuyên dụng, hiệu suất cao",
            "Không cần cho PC thường",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="cyan"
                title="80 PLUS không phải toàn bộ câu chuyện"
                icon={<ShieldCheck />}
            />
            <DataTable
                title="Phân loại theo chất lượng thực tế"
                rows={rows}
                headers={["Nhóm PSU", "Đặc điểm", "Có nên mua?"]}
                accent="cyan"
            />
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-cyan-300">Khi mua máy đắt tiền:</strong>{" "}
                nên xem review đo voltage regulation, ripple, hold-up time,
                protection tests, noise và build quality.
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <PackageCheck />,
            title: "Corsair RM750e 750W Gold ATX 3.1",
            subtitle: "750W, full modular, GPU đời mới",
            color: "amber",
            points: [
                "750W dư tốt cho gaming tầm trung khá",
                "Gold/Cybenetics Gold efficiency",
                "Full-modular đi dây gọn",
                "ATX 3.1, PCIe 5.1 compatible",
                "Có dây 12V-2x6 600W-capable",
            ],
            lesson: "Hợp Ryzen 5/7 hoặc Intel i5/i7 với RTX 4060 Ti/4070/4070 Super class.",
        },
        {
            icon: <Sparkles />,
            title: "Cooler Master MWE Gold 750 V2 FM",
            subtitle: "750W Gold cân bằng",
            color: "yellow",
            points: [
                "750W 80 PLUS Gold",
                "Full modular",
                "Dual EPS connectors",
                "Thiết kế low-noise/semi-fanless tùy phiên bản",
                "Hợp RTX 4070 / RX 7800 XT class",
            ],
            lesson: "750W Gold là điểm cân bằng tốt cho gaming khá mạnh và build gọn dây.",
        },
        {
            icon: <Gauge />,
            title: "550–650W Bronze/Gold uy tín",
            subtitle: "PC phổ thông",
            color: "emerald",
            points: [
                "Hợp Ryzen 5 5600 / i5-12400F",
                "Hợp RTX 4060 / RX 7600",
                "Cần đường 12V khỏe",
                "Có đủ đầu PCIe",
                "Không chọn nguồn no-name",
            ],
            lesson: "Ở phân khúc phổ thông, chất lượng dòng PSU quan trọng hơn chữ 650W thật to.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
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
        office: {
            icon: <Cpu />,
            title: "Không GPU rời",
            answer: "300–450W chất lượng tốt thường đủ. Không cần PSU 850W; ưu tiên thương hiệu, bảo hành và độ ổn định.",
            color: "cyan",
        },
        mainstream: {
            icon: <Gamepad2 />,
            title: "RTX 4060 / RX 7600",
            answer: "550–650W Bronze tốt hoặc Gold là hợp lý. Kiểm tra đường 12V và đầu PCIe đủ cho GPU.",
            color: "emerald",
        },
        mid: {
            icon: <Zap />,
            title: "RTX 4070 / RX 7800 XT",
            answer: "650–750W chất lượng tốt, ưu tiên Gold. Đây là vùng điểm ngọt cho gaming tầm khá.",
            color: "yellow",
        },
        high: {
            icon: <Sparkles />,
            title: "RTX 4080 class",
            answer: "850W Gold trở lên là lựa chọn thực tế hơn. Kiểm tra ATX 3.0/3.1 và dây native 12VHPWR/12V-2x6 nếu cần.",
            color: "orange",
        },
        workstation: {
            icon: <Database />,
            title: "Workstation/AI/render",
            answer: "1000W+ tùy CPU, GPU và số ổ. Nên xem review kỹ thuật, bảo hành dài và chất lượng dòng nguồn.",
            color: "purple",
        },
        bargain: {
            icon: <AlertTriangle />,
            title: "750W giá quá rẻ",
            answer: "Đừng mua chỉ vì Watt lớn. Kiểm tra 12V rail, bảo vệ, bảo hành, review, hãng và dòng sản phẩm. Tránh no-name/công suất ảo.",
            color: "red",
        },
    };
    const [active, setActive] = useState("mid");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="12"
                color="blue"
                title="Lab: chọn PSU theo GPU và nhu cầu"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
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
            wrong: "PSU 750W nào cũng giống nhau",
            right: "Cùng 750W vẫn có thể khác rất xa về 12V rail, linh kiện, bảo vệ, chuẩn ATX, dây nguồn, bảo hành và review kỹ thuật.",
        },
        {
            wrong: "Máy dùng 400W thì mua PSU 400W là đủ",
            right: "Không nên chạy sát giới hạn liên tục. Máy tải nặng 400W nên chọn 550W hoặc 650W tốt để dư tải, mát hơn, êm hơn và dễ nâng cấp.",
        },
        {
            wrong: "80 PLUS Gold chắc chắn là PSU cao cấp",
            right: "Gold chỉ là hiệu suất. PSU tốt còn cần điện áp ổn định, ripple thấp, bảo vệ đầy đủ, linh kiện tốt và bảo hành tốt.",
        },
        {
            wrong: "PSU công suất càng cao càng tốn điện",
            right: "PSU 850W không tự ăn 850W. PC chỉ lấy lượng điện nó cần, cộng hao phí theo hiệu suất.",
        },
        {
            wrong: "Non-modular là nguồn dở",
            right: "Modular chỉ nói về dây tháo rời. Non-modular chất lượng tốt vẫn có thể tốt hơn full-modular kém chất lượng.",
        },
    ];
    const tips = [
        "Chọn công suất theo GPU trước vì GPU thường là linh kiện ăn điện nhiều nhất trong PC gaming.",
        "Gaming phổ thông: 650W tốt; gaming tầm khá: 750W Gold; gaming cao cấp: 850W Gold trở lên.",
        "Luôn kiểm tra đầu cắm GPU: 8-pin, nhiều 8-pin, 12VHPWR hoặc 12V-2x6.",
        "Ưu tiên bảo hành dài: 60 tháng tốt; 7–10 năm thường là dòng cao hơn.",
        "Với máy đắt tiền, đọc review kỹ thuật thay vì chỉ nhìn 80 PLUS.",
        "Tránh PSU no-name/công suất ảo dù ghi Watt rất lớn.",
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-amber-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                Wattage = khả năng cấp tối đa, không phải mức
                                luôn tiêu thụ
                            </p>
                            <p>Efficiency = DC Load / Wall Power</p>
                            <p>
                                80 PLUS = chứng nhận hiệu suất, không phải toàn
                                bộ chất lượng
                            </p>
                            <br />
                            <p className="text-slate-500"># Nên đọc thêm</p>
                            <p className="text-slate-300">
                                12V rail • Active PFC • ATX 3.0/3.1 •
                                12VHPWR/12V-2x6
                            </p>
                            <p className="text-slate-300">
                                Đầu cắm GPU • Bảo hành • Review kỹ thuật
                            </p>
                            <br />
                            <p className="text-red-300">
                                Một PSU 550W tốt có thể an toàn hơn PSU “750W”
                                công suất ảo.
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
        question: "Wattage của PSU cho biết điều gì?",
        options: [
            "PSU có thể cấp tối đa bao nhiêu công suất",
            "CPU có bao nhiêu nhân",
            "RAM có dung lượng bao nhiêu",
            "SSD nhanh hay chậm",
        ],
        correct: 0,
        explanation:
            "Wattage là công suất tối đa PSU có thể cấp cho hệ thống, không phải mức PSU luôn tiêu thụ.",
    },
    {
        question: "Hiệu suất PSU 90% nghĩa là gì?",
        options: [
            "PSU làm máy mạnh hơn 90%",
            "Khoảng 90% điện đầu vào được chuyển thành điện hữu ích cho linh kiện, phần còn lại hao phí thành nhiệt",
            "PSU chỉ chạy được 90 phút",
            "PSU chỉ dùng được 90W",
        ],
        correct: 1,
        explanation:
            "Hiệu suất 90% nghĩa là phần lớn điện đầu vào được chuyển thành DC hữu ích, phần còn lại thất thoát thành nhiệt.",
    },
    {
        question: "80 PLUS chủ yếu chứng nhận điều gì?",
        options: [
            "Hiệu suất chuyển đổi điện",
            "Chất lượng hình ảnh",
            "Tốc độ mạng",
            "Dung lượng ổ cứng",
        ],
        correct: 0,
        explanation:
            "80 PLUS là chứng nhận hiệu suất chuyển đổi điện AC sang DC.",
    },
    {
        question: "Đường điện nào quan trọng nhất với CPU/GPU hiện đại?",
        options: ["3.3V", "5V", "12V", "1V"],
        correct: 2,
        explanation:
            "CPU và GPU chủ yếu dùng điện 12V qua EPS, PCIe, 12VHPWR hoặc 12V-2x6.",
    },
    {
        question: "Một PSU 850W có luôn tiêu thụ 850W từ ổ điện không?",
        options: [
            "Có, lúc nào cũng vậy",
            "Không, nó chỉ cấp theo mức hệ thống cần, cộng thêm hao phí theo hiệu suất",
            "Có, nếu là 80 PLUS Gold",
            "Không bao giờ vượt 100W",
        ],
        correct: 1,
        explanation:
            "PC chỉ lấy điện theo mức tải thực tế; PSU 850W chỉ là khả năng cấp tối đa.",
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
    if (finished)
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
                        className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu Wattage, hiệu suất và 80 PLUS. Tiếp theo là các đầu
                cắm điện: 24-pin, 8-pin CPU, PCIe, SATA — vì chọn đúng công suất
                chưa đủ, PSU còn phải có đúng dây cho mainboard, CPU, GPU và ổ
                lưu trữ.
            </p>
            <Link
                to="/phan-7-3"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-amber-500/20"
            >
                Bài tiếp theo: 7.3 — Các đầu cắm điện: 24-pin, 8-pin CPU, PCIe,
                SATA <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "amber" }) {
    const colorMap = {
        amber: "bg-amber-500/20 text-amber-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        blue: "bg-blue-500/20 text-blue-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        purple: "bg-purple-500/20 text-purple-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
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
        <div className={`${softBorder(color)} border rounded-3xl p-6`}>
            <div
                className={`w-12 h-12 rounded-2xl ${badgeColor(color)} flex items-center justify-center mb-4`}
            >
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
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
function MetricCard({ icon, label, value, color }) {
    return (
        <div
            className={`${softBorder(color)} border rounded-3xl p-6 text-center`}
        >
            <div
                className={`w-14 h-14 rounded-2xl ${badgeColor(color)} flex items-center justify-center mx-auto mb-4`}
            >
                {React.cloneElement(icon, { size: 28 })}
            </div>
            <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">
                {label}
            </p>
            <p className="text-2xl font-black text-white">{value}</p>
        </div>
    );
}
function DataTable({ title, rows, headers, accent }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 overflow-x-auto">
            <h3 className="text-white font-bold mb-4 px-2">{title}</h3>
            <table className="w-full min-w-[680px] text-sm">
                <thead>
                    <tr className="text-left text-slate-400">
                        {headers.map((h) => (
                            <th key={h} className="p-3">
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row[0]} className="border-t border-slate-800">
                            {row.map((cell, i) => (
                                <td
                                    key={cell}
                                    className={`p-3 ${i === 0 ? `${textColor(accent)} font-extrabold` : "text-slate-300"}`}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
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
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.amber;
}
function softBorder(color) {
    const map = {
        amber: "bg-amber-500/5 border-amber-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.amber;
}
function textColor(color) {
    const map = {
        amber: "text-amber-300",
        yellow: "text-yellow-300",
        blue: "text-blue-300",
        cyan: "text-cyan-300",
        orange: "text-orange-300",
        purple: "text-purple-300",
        emerald: "text-emerald-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-amber-300";
}
