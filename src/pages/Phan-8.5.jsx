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
    Fan,
    Gamepad2,
    Gauge,
    HardDrive,
    Home,
    Layers3,
    Lightbulb,
    Monitor,
    PackageCheck,
    PlugZap,
    Puzzle,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    Thermometer,
    Wind,
    Workflow,
    XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                            <PackageCheck
                                className="text-emerald-400"
                                size={24}
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 8: Case — Bài tổng kết vỏ máy
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                        Bài 8.5
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <HouseChoosingAnalogy />
                <DecisionFlowSimulator />
                <NeedMatrix />
                <SpecsExplorer />
                <CompatibilityTables />
                <BudgetGuide />
                <PlacementGuide />
                <RealExamples />
                <CasePickerLab />
                <CommonMistakes />
                <SummaryAndQuiz />
                <NextPart />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-teal-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-emerald-300">
                        <BookOpen size={16} /> Phần 8: Case — Chọn vỏ máy
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Cách chọn
                        <span className="block text-emerald-400">
                            vỏ máy phù hợp
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Case đẹp nhưng sai kích thước, bí gió hoặc thiếu
                        clearance có thể khiến GPU không lắp vừa, máy nóng, quạt
                        hú và khó nâng cấp. Chọn đúng case là chọn môi trường
                        sống cho toàn bộ linh kiện.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<Layers3 size={16} />}
                            text="Mainboard Support"
                        />
                        <Tag
                            icon={<Gamepad2 size={16} />}
                            text="GPU Clearance"
                        />
                        <Tag
                            icon={<Thermometer size={16} />}
                            text="CPU Cooler / AIO"
                        />
                        <Tag icon={<Wind size={16} />} text="Airflow" />
                        <Tag icon={<PlugZap size={16} />} text="Front I/O" />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Layers3 />}
                            label="Mainboard"
                            desc="ATX / mATX / ITX"
                            color="blue"
                        />
                        <HeroTile
                            icon={<Gamepad2 />}
                            label="GPU"
                            desc="Dài bao nhiêu mm?"
                            color="orange"
                        />
                        <HeroTile
                            icon={<Fan />}
                            label="Airflow"
                            desc="Mesh + quạt"
                            color="emerald"
                            highlight
                        />
                        <HeroTile
                            icon={<Home />}
                            label="Desk Space"
                            desc="Vừa bàn/kệ"
                            color="cyan"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Công thức nhanh</p>
                        <p>Mid Tower + Mesh Front</p>
                        <p className="text-emerald-300">
                            + ATX/mATX + GPU dư 20–30mm
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu chọn case phù hợp là chọn case đúng cấu hình phần cứng, nhu cầu, không gian đặt máy, tản nhiệt, thẩm mỹ và ngân sách.",
        "Biết quy trình chọn case: nhu cầu → mainboard → GPU → tản CPU/AIO → airflow → PSU/ổ cứng/front I/O → ngân sách.",
        "Đọc đúng các thông số quan trọng: mainboard support, GPU clearance, CPU cooler clearance, radiator support, PSU support, drive bays, cable management.",
        "Chọn case theo nhu cầu: văn phòng, gaming phổ thông, gaming cao cấp, render/AI, PC nhỏ gọn, workstation nhiều ổ, RGB/trưng bày, phòng nhiều bụi.",
        "Tránh lỗi chọn case trước linh kiện, chỉ xem ảnh, mua quá nhỏ, mua case đẹp nhưng bí gió, quên USB-C header và đặt case sai vị trí.",
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
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-300 flex items-center justify-center font-bold mb-4">
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
            icon: <Cpu />,
            title: "Phù hợp cấu hình",
            desc: "Case phải lắp vừa mainboard, GPU, tản CPU/AIO, PSU và ổ cứng.",
            color: "blue",
        },
        {
            icon: <Wind />,
            title: "Phù hợp nhiệt lượng",
            desc: "GPU rời mạnh, render/AI hoặc CPU nóng cần case airflow tốt hơn PC văn phòng.",
            color: "emerald",
        },
        {
            icon: <Home />,
            title: "Phù hợp không gian",
            desc: "Case phải vừa bàn/kệ, có khoảng trống hút gió và xả khí nóng.",
            color: "cyan",
        },
        {
            icon: <Sparkles />,
            title: "Phù hợp gu và ngân sách",
            desc: "Đẹp, RGB, kính, dual-chamber hay gọn nhẹ đều phải cân bằng với chi phí.",
            color: "purple",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Chọn vỏ máy phù hợp là chọn cái gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Chọn vỏ máy phù hợp</strong>{" "}
                    nghĩa là chọn một case đáp ứng đúng cấu hình phần cứng, nhu
                    cầu sử dụng, không gian đặt máy, khả năng tản nhiệt, thẩm mỹ
                    và ngân sách. Case tốt không nhất thiết là đắt nhất, mà là
                    case hợp nhất với bộ linh kiện của bạn.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <RoleCard key={c.title} {...c} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function HouseChoosingAnalogy() {
    const cards = [
        {
            icon: <XCircle />,
            title: "Nhà quá nhỏ",
            desc: "Đồ chật, nóng, khó sửa — như case nhỏ nhưng GPU/tản quá lớn.",
            color: "red",
        },
        {
            icon: <Gauge />,
            title: "Nhà quá lớn",
            desc: "Tốn tiền, chiếm chỗ, không cần thiết — như Full Tower cho máy văn phòng nhẹ.",
            color: "orange",
        },
        {
            icon: <Sparkles />,
            title: "Nhà đẹp nhưng bí",
            desc: "Nhìn thích nhưng ở khó chịu — như case kính trước kín cho GPU nóng.",
            color: "purple",
        },
        {
            icon: <PackageCheck />,
            title: "Nhà vừa đủ, thoáng",
            desc: "Dùng lâu dài dễ chịu — như case đúng kích thước, airflow tốt, dễ vệ sinh.",
            color: "emerald",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: chọn căn nhà cho dàn PC"
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

function DecisionFlowSimulator() {
    const steps = [
        {
            icon: <Search />,
            title: "Nhu cầu sử dụng",
            desc: "Văn phòng, gaming, render, AI, workstation, RGB showcase hay PC nhỏ gọn?",
            color: "emerald",
        },
        {
            icon: <Layers3 />,
            title: "Kích thước mainboard",
            desc: "Case cần hỗ trợ E-ATX, ATX, Micro-ATX hay Mini-ITX.",
            color: "blue",
        },
        {
            icon: <Gamepad2 />,
            title: "Chiều dài GPU",
            desc: "Kiểm tra GPU clearance, đặc biệt với GPU 3 quạt hoặc radiator mặt trước.",
            color: "orange",
        },
        {
            icon: <Thermometer />,
            title: "Tản CPU / Radiator",
            desc: "Tản khí cần CPU cooler clearance; AIO cần radiator support đúng vị trí.",
            color: "red",
        },
        {
            icon: <Wind />,
            title: "Airflow và quạt",
            desc: "Ưu tiên mesh front, 2–3 quạt hút, 1 quạt xả sau cho PC gaming.",
            color: "cyan",
        },
        {
            icon: <PlugZap />,
            title: "PSU và dây",
            desc: "Case dùng ATX, SFX hay SFX-L? Nguồn dài có cấn ổ cứng/dây không?",
            color: "purple",
        },
        {
            icon: <HardDrive />,
            title: "Ổ cứng",
            desc: "Cần bao nhiêu khay SSD 2.5 inch, HDD 3.5 inch hoặc bay 5.25 inch?",
            color: "yellow",
        },
        {
            icon: <Settings />,
            title: "Cable management / Front I/O",
            desc: "Có lỗ đi dây, velcro, khoang PSU, USB-A, USB-C, audio, nút LED/RGB không?",
            color: "blue",
        },
        {
            icon: <Home />,
            title: "Vị trí đặt máy",
            desc: "Đo chiều cao, chiều sâu, khoảng thoát khí sau/trên/trước; không đặt quá sát tường.",
            color: "emerald",
        },
        {
            icon: <Sparkles />,
            title: "Thẩm mỹ và ngân sách",
            desc: "Chọn kính, RGB, dual-chamber, gỗ/nhôm… sau khi đã đảm bảo tương thích và airflow.",
            color: "purple",
        },
    ];
    const [active, setActive] = useState(0);
    const step = steps[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Quy trình chọn case đúng"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[330px] flex flex-col justify-between">
                        <div>
                            <div
                                className={`w-16 h-16 rounded-2xl ${badgeColor(step.color)} flex items-center justify-center mb-5`}
                            >
                                {React.cloneElement(step.icon, { size: 32 })}
                            </div>
                            <p
                                className={`${textColor(step.color)} text-sm font-bold mb-2`}
                            >
                                Bước {active + 1}/{steps.length}
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
                                setActive((active + 1) % steps.length)
                            }
                            className="mt-6 px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold inline-flex items-center justify-center gap-2"
                        >
                            Bước tiếp theo <ChevronRight size={18} />
                        </button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-2">
                        {steps.map((s, i) => (
                            <button
                                key={s.title}
                                onClick={() => setActive(i)}
                                className={`flex items-center gap-3 p-3 rounded-2xl border text-left transition-all ${active === i ? `${softBorder(s.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${active === i ? badgeColor(s.color) : "bg-slate-900 text-slate-500"}`}
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
            "Văn phòng, học tập",
            "Mini Tower / mATX case",
            "Gọn, rẻ, đủ dùng, không cần airflow quá mạnh",
        ],
        [
            "Gaming phổ thông",
            "Mid Tower airflow tốt",
            "Dễ lắp GPU rời, tản nhiệt ổn, dễ nâng cấp",
        ],
        [
            "Gaming cao cấp",
            "Mid Tower lớn hoặc Full Tower",
            "Cần chỗ cho GPU dài, nhiều quạt, AIO lớn",
        ],
        [
            "Đồ họa, render, AI nhẹ",
            "Mid Tower/Full Tower airflow mạnh",
            "CPU/GPU tải nặng lâu, cần tản nhiệt tốt",
        ],
        [
            "PC nhỏ gọn để bàn",
            "Mini-ITX / SFF",
            "Đẹp, tiết kiệm chỗ, nhưng phải chọn linh kiện kỹ",
        ],
        [
            "Workstation nhiều ổ",
            "Full Tower hoặc case nhiều drive bay",
            "Cần nhiều HDD/SSD, airflow tốt quanh ổ",
        ],
        [
            "PC trưng bày RGB",
            "Kính hông / dual-chamber",
            "Khoe linh kiện, dễ đi dây gọn",
        ],
        [
            "Phòng nhiều bụi",
            "Mesh có lọc bụi tốt",
            "Vẫn thoáng nhưng giảm bụi nếu vệ sinh định kỳ",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="emerald"
                title="Chọn case theo nhu cầu"
                icon={<Search />}
            />
            <DataTable
                title="Nhu cầu nào nên chọn loại case nào?"
                rows={rows}
                headers={["Nhu cầu", "Loại case nên ưu tiên", "Lý do"]}
                accent="emerald"
            />
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        board: {
            icon: <Layers3 />,
            title: "Mainboard Support",
            detail: "Case cần hỗ trợ đúng E-ATX, ATX, Micro-ATX hoặc Mini-ITX.",
            impact: "Đây là bước đầu tiên. Case nhỏ không lắp được mainboard lớn.",
        },
        gpu: {
            icon: <Gamepad2 />,
            title: "GPU Clearance",
            detail: "Chiều dài tối đa của GPU mà case lắp được, tính theo mm.",
            impact: "Case hỗ trợ 330mm nhưng GPU dài 338mm là không vừa; radiator mặt trước còn có thể chiếm thêm chỗ.",
        },
        cooler: {
            icon: <Thermometer />,
            title: "CPU Cooler Clearance",
            detail: "Chiều cao tản khí CPU tối đa mà case hỗ trợ.",
            impact: "Tản cao 158mm với case hỗ trợ 159mm là vừa nhưng rất sát; nên dư thêm nếu được.",
        },
        radiator: {
            icon: <Fan />,
            title: "Radiator Support",
            detail: "Case hỗ trợ AIO 120/240/280/360/420mm ở front, top, side hoặc bottom.",
            impact: "Case ghi hỗ trợ 360mm không có nghĩa mọi vị trí đều lắp được 360mm.",
        },
        airflow: {
            icon: <Wind />,
            title: "Airflow",
            detail: "Mặt trước có thoáng không, có lọc bụi không, có mấy quạt intake/exhaust.",
            impact: "PC gaming nên ưu tiên mesh front, 2–3 quạt hút, 1 quạt xả sau.",
        },
        psu: {
            icon: <PlugZap />,
            title: "PSU Support",
            detail: "Case dùng ATX PSU, SFX hay SFX-L; nguồn dài có cấn ổ/dây không.",
            impact: "Case nhỏ cần kiểm tra rất kỹ loại nguồn và chiều dài nguồn.",
        },
        storage: {
            icon: <HardDrive />,
            title: "Drive Bays",
            detail: "Số khay SSD 2.5 inch, HDD 3.5 inch, ổ quang 5.25 inch nếu cần.",
            impact: "Máy lưu trữ phim, camera, NAS mini nên chọn case nhiều khay HDD và airflow tốt.",
        },
        cable: {
            icon: <Workflow />,
            title: "Cable Management",
            detail: "Khoảng sau mainboard, lỗ đi dây, velcro, điểm buộc dây, khoang PSU che dây.",
            impact: "Dây gọn giúp máy đẹp hơn, airflow tốt hơn, dễ vệ sinh và nâng cấp hơn.",
        },
        io: {
            icon: <Settings />,
            title: "Front I/O",
            detail: "USB-A, USB-C, audio jack, LED/RGB button, reset button.",
            impact: "Case có USB-C nhưng mainboard không có header USB-C thì cổng trước có thể không dùng được.",
        },
        desk: {
            icon: <Home />,
            title: "Kích thước thật",
            detail: "Đo chiều cao, chiều sâu bàn/kệ, khoảng trống sau/trước/trên để hút và xả khí.",
            impact: "Case tốt nhưng đặt sát tường, dưới gầm bàn kín hoặc trên thảm dày vẫn có thể nóng.",
        },
    };
    const [active, setActive] = useState("gpu");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="yellow"
                title="Thông số kỹ thuật quan trọng cần kiểm tra"
                icon={<Puzzle />}
            />
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
                    {Object.entries(specs).map(([key, s]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-3 text-center transition-all ${active === key ? "bg-yellow-500 text-slate-950" : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}
                        >
                            {React.cloneElement(s.icon, { size: 19 })}
                            <span className="font-bold text-[11px]">
                                {s.title}
                            </span>
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

function CompatibilityTables() {
    const boardRows = [
        ["E-ATX", "Full Tower hoặc Mid Tower lớn"],
        ["ATX", "Mid Tower hoặc Full Tower"],
        ["Micro-ATX / mATX", "Mini Tower, Mid Tower, Full Tower"],
        ["Mini-ITX", "Mini-ITX case hoặc case lớn hơn"],
    ];
    const radiatorRows = [
        ["120mm", "CPU nhẹ, ít dùng cho máy mới"],
        ["240mm", "CPU tầm trung"],
        ["280mm", "Tản tốt, cần case đủ rộng"],
        ["360mm", "CPU mạnh, gaming/render nặng"],
        ["420mm", "Case lớn, cấu hình cao cấp"],
    ];
    const psuRows = [
        ["ATX PSU", "Đa số Mid Tower, Full Tower, nhiều mATX case"],
        ["SFX PSU", "Mini-ITX/SFF case"],
        ["SFX-L PSU", "Mini-ITX lớn hơn, dài hơn SFX"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="blue"
                title="Bảng tương thích nhanh"
                icon={<Layers3 />}
            />
            <div className="grid lg:grid-cols-3 gap-6">
                <DataTable
                    title="Mainboard"
                    rows={boardRows}
                    headers={["Mainboard", "Case cần hỗ trợ"]}
                    accent="blue"
                />
                <DataTable
                    title="Radiator AIO"
                    rows={radiatorRows}
                    headers={["Radiator", "Phù hợp"]}
                    accent="cyan"
                />
                <DataTable
                    title="PSU"
                    rows={psuRows}
                    headers={["Loại PSU", "Dùng trong case nào"]}
                    accent="purple"
                />
            </div>
        </section>
    );
}

function BudgetGuide() {
    const rows = [
        [
            "Dưới 1 triệu VNĐ",
            "Lắp vừa linh kiện, có quạt cơ bản, thép không quá mỏng",
            "RGB, kính quá nhiều, thiết kế lạ",
        ],
        [
            "1–2 triệu VNĐ",
            "mATX/Mid Tower airflow ổn, lọc bụi, dễ đi dây",
            "Case quá kín chỉ vì đẹp",
        ],
        [
            "2–4 triệu VNĐ",
            "Mid Tower tốt, mesh front, USB-C nếu cần, hỗ trợ AIO/GPU dài",
            "Full Tower nếu không cần",
        ],
        [
            "Trên 4 triệu VNĐ",
            "Case cao cấp, dual-chamber, vật liệu tốt, nhiều tính năng",
            "Mua vì thương hiệu nhưng không hợp cấu hình",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="emerald"
                title="Chọn case theo ngân sách"
                icon={<Gauge />}
            />
            <DataTable
                title="Ngân sách case nên ưu tiên gì?"
                rows={rows}
                headers={[
                    "Ngân sách",
                    "Nên ưu tiên",
                    "Không nên ưu tiên quá mức",
                ]}
                accent="emerald"
            />
        </section>
    );
}

function PlacementGuide() {
    const checks = [
        "Chiều cao chỗ đặt",
        "Chiều sâu bàn/kệ",
        "Khoảng trống phía sau để thoát khí",
        "Khoảng trống mặt trước để hút gió",
        "Khoảng trống phía trên nếu có quạt xả",
        "Không đặt trên thảm dày làm bí nguồn",
        "Không đặt sát tường hoặc dưới gầm bàn kín",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="cyan"
                title="Đo vị trí đặt máy trước khi mua"
                icon={<Home />}
            />
            <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-3xl p-6">
                <h3 className="text-xl font-bold text-cyan-300 mb-5">
                    Checklist không gian đặt case
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                    {checks.map((c) => (
                        <div
                            key={c}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-3 text-sm text-slate-300"
                        >
                            <CheckCircle2
                                className="text-green-400 shrink-0 mt-0.5"
                                size={18}
                            />
                            <span>{c}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300">
                Case tốt + đặt sai vị trí = vẫn nóng
                <br />
                <span className="text-cyan-300">
                    Hút gió phải thoáng, xả khí phải có đường ra.
                </span>
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Monitor />,
            title: "Cooler Master MasterBox Q300L",
            subtitle: "PC văn phòng / học tập mATX",
            color: "cyan",
            points: [
                "Mini-ITX / Micro-ATX",
                "1 quạt sau 120mm sẵn",
                "Hỗ trợ GPU dài tới 360mm theo thông số",
                "Tản CPU tối đa 159mm",
                "Nguồn tối đa 160mm",
            ],
            lesson: "Case mATX gọn hợp máy học tập/văn phòng, nhưng nếu dùng GPU rời nóng vẫn nên bổ sung quạt trước.",
        },
        {
            icon: <Wind />,
            title: "Corsair 4000D Airflow",
            subtitle: "Gaming phổ thông đến cao",
            color: "emerald",
            points: [
                "Mid Tower ATX phổ biến",
                "Mặt trước thoáng",
                "Tối đa 6 quạt 120mm hoặc 4 quạt 140mm",
                "Radiator 360mm front, 280mm top",
                "Hợp RTX 4060/4070 class",
            ],
            lesson: "Mid Tower airflow tốt là lựa chọn rất dễ sống cho người mới build gaming.",
        },
        {
            icon: <Fan />,
            title: "Lian Li LANCOOL 216",
            subtitle: "Gaming/render cần airflow mạnh",
            color: "orange",
            points: [
                "2 quạt trước 160mm",
                "1 quạt sau 140mm PWM",
                "Airflow mạnh",
                "Hỗ trợ radiator 360mm tùy vị trí",
                "Hợp RTX 4070 Ti/4080/RX 7900 XT class",
            ],
            lesson: "Case có sẵn quạt lớn giúp giảm chi phí mua thêm quạt và hợp cấu hình sinh nhiệt cao.",
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

function CasePickerLab() {
    const scenarios = {
        office: {
            icon: <Monitor />,
            title: "Văn phòng/học tập",
            answer: "Mini Tower hoặc mATX case gọn là hợp lý. Ưu tiên đủ chắc, có quạt cơ bản, dễ vệ sinh, không cần quá nhiều kính/RGB.",
            color: "cyan",
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Gaming phổ thông",
            answer: "Chọn Mid Tower airflow tốt, hỗ trợ ATX/mATX, GPU clearance dư 20–30mm, ít nhất 2–3 intake + 1 exhaust.",
            color: "emerald",
        },
        high: {
            icon: <Thermometer />,
            title: "GPU/CPU cao cấp",
            answer: "Chọn Mid Tower lớn hoặc Full Tower. Ưu tiên mesh front, nhiều quạt, radiator support 360mm, GPU clearance rộng và đi dây tốt.",
            color: "orange",
        },
        compact: {
            icon: <Sparkles />,
            title: "PC nhỏ gọn",
            answer: "Mini-ITX/SFF chỉ nên chọn khi thật sự cần nhỏ. Kiểm tra main ITX, PSU SFX/SFX-L, GPU length, tản CPU và airflow từng mm.",
            color: "purple",
        },
        storage: {
            icon: <Database />,
            title: "Nhiều HDD/NAS mini",
            answer: "Chọn case có nhiều drive bay 3.5 inch, airflow quanh ổ cứng tốt, lọc bụi dễ tháo và không gian dây SATA/nguồn rộng.",
            color: "blue",
        },
        dust: {
            icon: <ShieldCheck />,
            title: "Phòng nhiều bụi",
            answer: "Chọn mesh có lọc bụi tốt, positive pressure nhẹ, lọc bụi dễ tháo/lau. Đừng chọn case bí gió chỉ vì nghĩ sẽ ít bụi hơn.",
            color: "emerald",
        },
    };
    const [active, setActive] = useState("gaming");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: chọn case theo tình huống"
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
            wrong: "Chọn case trước khi chọn linh kiện",
            right: "Nên chọn CPU, GPU, mainboard, tản nhiệt trước rồi mới chọn case, vì case phải lắp vừa toàn bộ linh kiện.",
        },
        {
            wrong: "Chỉ xem ảnh, không xem thông số",
            right: "Ảnh quảng cáo không cho biết GPU dài bao nhiêu lắp được, tản CPU cao tối đa bao nhiêu, hỗ trợ ATX không, có mấy quạt, có lọc bụi/USB-C không.",
        },
        {
            wrong: "Mua case quá nhỏ để cho gọn",
            right: "Case nhỏ chỉ tốt nếu linh kiện phù hợp. Người mới thường dễ dùng Mid Tower hơn Mini-ITX rất nhiều.",
        },
        {
            wrong: "Mua case đẹp nhưng bí gió",
            right: "Với GPU rời, nên ưu tiên mesh front, quạt hút trước, quạt xả sau và lọc bụi.",
        },
        {
            wrong: "Quên kiểm tra USB-C front panel",
            right: "Case có cổng USB-C nhưng mainboard không có header USB-C tương ứng thì cổng đó có thể không dùng được.",
        },
        {
            wrong: "Không tính vị trí đặt case",
            right: "Không đặt sát tường, chặn mặt trước, đặt trên thảm dày hoặc dưới gầm bàn kín; airflow cần khoảng trống để hút và xả.",
        },
    ];
    const tips = [
        "Người mới: Mid Tower + mặt trước mesh + hỗ trợ ATX/mATX + GPU clearance dư 20–30mm + ít nhất 3 quạt.",
        "Dùng GPU rời mạnh: đừng chọn case mặt trước quá kín.",
        "Ngân sách thấp: ưu tiên airflow và độ chắc hơn RGB.",
        "Dùng tản khí lớn: kiểm tra CPU cooler clearance trước khi mua.",
        "Dùng AIO 360mm: kiểm tra vị trí lắp radiator và độ dày radiator + quạt.",
        "Muốn máy gọn: mATX thường kinh tế và dễ build hơn Mini-ITX.",
        "Case dùng lâu dài nên dễ vệ sinh, có lọc bụi tháo rời và không gian đi dây tốt.",
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
                        <span className="bg-emerald-500/20 text-emerald-300 p-2 rounded-xl">
                            13
                        </span>{" "}
                        Tóm tắt & Kiểm tra cuối Phần 8
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-emerald-300 border border-slate-800 shadow-inner space-y-2">
                            <p>Chọn case sau khi biết linh kiện chính</p>
                            <p>Nhu cầu → Mainboard → GPU → CPU cooler/AIO</p>
                            <p>
                                → Airflow → PSU/Drive bays → Cable/I/O → Desk
                                space
                            </p>
                            <br />
                            <p className="text-slate-500"># Người mới</p>
                            <p className="text-slate-300">
                                Mid Tower + mesh front + ATX/mATX support
                            </p>
                            <p className="text-slate-300">
                                GPU clearance dư 20–30mm + 3 quạt cơ bản
                            </p>
                            <br />
                            <p className="text-red-300">
                                Case đẹp nhưng bí gió hoặc không lắp vừa linh
                                kiện là chọn sai.
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
        question: "Khi chọn case, thông số nào cần kiểm tra đầu tiên?",
        options: [
            "Màu RGB",
            "Case hỗ trợ mainboard nào",
            "Logo hãng có đẹp không",
            "Dây nguồn dài bao nhiêu mét",
        ],
        correct: 1,
        explanation:
            "Mainboard support là bước đầu tiên vì case phải lắp vừa form factor mainboard của bạn.",
    },
    {
        question: "GPU Clearance nghĩa là gì?",
        options: [
            "Dung lượng VRAM của card đồ họa",
            "Chiều dài tối đa của GPU mà case lắp được",
            "Tốc độ quạt GPU",
            "Số cổng HDMI của GPU",
        ],
        correct: 1,
        explanation:
            "GPU clearance là chiều dài tối đa của card đồ họa mà case chứa được.",
    },
    {
        question:
            "Với PC gaming dùng GPU rời, kiểu mặt trước nào thường nên ưu tiên?",
        options: [
            "Mesh front",
            "Mặt kín hoàn toàn",
            "Không có khe gió",
            "Mặt gỗ bịt kín toàn bộ",
        ],
        correct: 0,
        explanation:
            "Mesh front giúp hút gió tốt hơn, phù hợp PC gaming/GPU rời.",
    },
    {
        question: "Vì sao case có USB-C phía trước chưa chắc dùng được?",
        options: [
            "Vì USB-C chỉ dùng cho laptop",
            "Vì mainboard cần có header USB-C front panel tương ứng",
            "Vì USB-C không truyền dữ liệu",
            "Vì case phải là Full Tower mới dùng được USB-C",
        ],
        correct: 1,
        explanation:
            "Case có cổng USB-C cần mainboard có header USB-C front panel tương ứng để cắm dây.",
    },
    {
        question: "Người mới build PC thường nên chọn loại case nào nhất?",
        options: [
            "Mini-ITX siêu nhỏ",
            "Mid Tower airflow tốt",
            "Case server rack",
            "Case càng nhỏ càng tốt",
        ],
        correct: 1,
        explanation:
            "Mid Tower airflow tốt thường cân bằng nhất: dễ lắp, dễ nâng cấp, đủ airflow và ít kén linh kiện.",
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
                    Hoàn thành Phần 8!
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

function NextPart() {
    return (
        <div className="text-center pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">
                Bạn đã học xong Phần 8 — Vỏ máy tính: vai trò của case, kích
                thước, airflow, vật liệu, thiết kế và cách chọn case phù hợp.
                Tiếp theo là Phần 9 — Tản nhiệt, nơi bạn sẽ hiểu vì sao CPU/GPU
                sinh nhiệt và hệ thống tản nhiệt quyết định độ ổn định, độ ồn và
                tuổi thọ máy tính.
            </p>
            <Link
                to="/phan-9-1"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
            >
                Phần tiếp theo: 9.1 — Tại sao cần tản nhiệt?{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "emerald" }) {
    const colorMap = {
        emerald: "bg-emerald-500/20 text-emerald-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        blue: "bg-blue-500/20 text-blue-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        purple: "bg-purple-500/20 text-purple-300",
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
function DataTable({ title, rows, headers, accent }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 overflow-x-auto">
            <h3 className="text-white font-bold mb-4 px-2">{title}</h3>
            <table className="w-full min-w-[760px] text-sm">
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
                                    key={`${row[0]}-${i}`}
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
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.emerald;
}
function softBorder(color) {
    const map = {
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.emerald;
}
function textColor(color) {
    const map = {
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        blue: "text-blue-300",
        cyan: "text-cyan-300",
        orange: "text-orange-300",
        purple: "text-purple-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-emerald-300";
}
