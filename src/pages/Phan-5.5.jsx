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
    Film,
    Gamepad2,
    Gauge,
    HardDrive,
    Layers3,
    Lightbulb,
    Monitor,
    PackageCheck,
    Puzzle,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
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
                            <Sparkles className="text-sky-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 5: GPU — Bộ xử lý đồ họa
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-sky-300 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20">
                        Bài 5.5
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <EcosystemAnalogy />
                <GpuBrandPipeline />
                <BrandComparison />
                <TechnologyExplorer />
                <BrandStrengthMatrix />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-red-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-sky-300">
                        <BookOpen size={16} /> Phần 5: GPU — Bộ xử lý đồ họa
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Các hãng GPU
                        <span className="block text-sky-400">
                            NVIDIA, AMD Radeon, Intel Arc
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        NVIDIA mạnh về CUDA, AI, render, ray tracing và DLSS.
                        AMD hấp dẫn về gaming truyền thống và hiệu năng/giá.
                        Intel Arc có giá cạnh tranh, VRAM tốt trong phân khúc
                        nhưng cần kiểm tra driver và tương thích.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Sparkles size={16} />} text="NVIDIA RTX" />
                        <Tag
                            icon={<Gamepad2 size={16} />}
                            text="AMD Radeon RX"
                        />
                        <Tag icon={<Cpu size={16} />} text="Intel Arc" />
                        <Tag
                            icon={<Zap size={16} />}
                            text="DLSS / FSR / XeSS"
                        />
                        <Tag
                            icon={<Brain size={16} />}
                            text="CUDA / AI / Render"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-1 gap-3">
                        <BrandHeroTile
                            icon={<Sparkles />}
                            label="NVIDIA GeForce RTX"
                            desc="Hệ sinh thái mạnh: CUDA, DLSS, ray tracing, AI, NVENC"
                            color="sky"
                        />
                        <BrandHeroTile
                            icon={<Gamepad2 />}
                            label="AMD Radeon RX"
                            desc="Thực dụng: rasterization tốt, hiệu năng/giá cạnh tranh, VRAM hấp dẫn"
                            color="red"
                        />
                        <BrandHeroTile
                            icon={<Cpu />}
                            label="Intel Arc"
                            desc="Người chơi mới: giá tốt, VRAM rộng, XeSS/AV1, cần kiểm tra driver"
                            color="indigo"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Quy tắc chọn</p>
                        <p>Không chọn theo fan hãng</p>
                        <p className="text-sky-300">
                            Chọn theo game, phần mềm, giá, driver, PSU
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu ba nhóm GPU rời phổ biến: NVIDIA GeForce RTX, AMD Radeon RX và Intel Arc.",
        "Biết vì sao cùng là GPU nhưng mỗi hãng khác nhau về kiến trúc, driver, công nghệ và hệ sinh thái phần mềm.",
        "Phân biệt CUDA, DLSS, FSR, XeSS, ray tracing, rasterization, encoder và Resizable BAR.",
        "Biết chọn hãng theo nhu cầu: gaming, AI, render, livestream, dựng video hoặc tối ưu giá.",
        "Tránh sai lầm chọn theo fan hãng, số GB VRAM hoặc giá rẻ mà không kiểm tra benchmark/tương thích.",
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
    const brands = [
        {
            icon: <Sparkles />,
            title: "NVIDIA GeForce / RTX",
            color: "sky",
            simple: "Hệ sinh thái cao cấp, nhiều phần mềm hỗ trợ, mạnh về công nghệ và AI.",
            points: [
                "CUDA phổ biến trong AI/render",
                "DLSS tăng FPS bằng AI",
                "Ray tracing mạnh",
                "NVENC/livestream/dựng video phổ biến",
            ],
        },
        {
            icon: <Gamepad2 />,
            title: "AMD Radeon",
            color: "red",
            simple: "Lựa chọn thực dụng, thường cạnh tranh về hiệu năng/giá và gaming truyền thống.",
            points: [
                "Rasterization tốt",
                "FSR hỗ trợ rộng",
                "VRAM cạnh tranh ở một số phân khúc",
                "Hợp người không cần CUDA",
            ],
        },
        {
            icon: <Cpu />,
            title: "Intel Arc",
            color: "indigo",
            simple: "Người chơi mới, giá hấp dẫn, phần cứng tốt trên giấy nhưng cần kiểm tra driver.",
            points: [
                "Giá cạnh tranh",
                "VRAM hấp dẫn trong phân khúc",
                "XeSS và media engine đáng chú ý",
                "Resizable BAR rất quan trọng",
            ],
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: ba hãng GPU chính"
                icon={<Brain />}
            />
            <div className="grid lg:grid-cols-3 gap-4">
                {brands.map((b) => (
                    <div
                        key={b.title}
                        className={`${softBorder(b.color)} border rounded-3xl p-6`}
                    >
                        <div
                            className={`w-14 h-14 rounded-2xl ${badgeColor(b.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(b.icon, { size: 28 })}
                        </div>
                        <h3 className="text-2xl font-black text-white mb-3">
                            {b.title}
                        </h3>
                        <p
                            className={`${textColor(b.color)} font-semibold text-sm leading-relaxed mb-4`}
                        >
                            {b.simple}
                        </p>
                        <div className="space-y-2">
                            {b.points.map((p) => (
                                <Bullet key={p} text={p} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function EcosystemAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: ba hệ sinh thái xe"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-3 gap-4">
                <AnalogyCard
                    icon={<Sparkles />}
                    title="NVIDIA = xe nhiều công nghệ"
                    desc="Nhiều tính năng hỗ trợ, nhiều phần mềm tối ưu, hợp người cần AI/render/ray tracing/livestream."
                    color="sky"
                />
                <AnalogyCard
                    icon={<Gamepad2 />}
                    title="AMD = xe thực dụng"
                    desc="Tập trung hiệu năng/giá, gaming truyền thống tốt, cấu hình bộ nhớ thường hấp dẫn."
                    color="red"
                />
                <AnalogyCard
                    icon={<Cpu />}
                    title="Intel Arc = xe mới tham gia"
                    desc="Giá hấp dẫn, trang bị tốt, nhưng cần kiểm tra đường đi: driver, game hỗ trợ và Resizable BAR."
                    color="indigo"
                />
            </div>
        </section>
    );
}

function GpuBrandPipeline() {
    const steps = [
        {
            icon: <Cpu />,
            title: "CPU gửi lệnh",
            desc: "Game hoặc phần mềm gửi lệnh vẽ hình/tính toán qua CPU và driver.",
        },
        {
            icon: <Sparkles />,
            title: "GPU xử lý hình ảnh / song song",
            desc: "GPU của NVIDIA, AMD hoặc Intel đều xử lý shader, texture, frame, hiệu ứng.",
        },
        {
            icon: <Database />,
            title: "VRAM lưu dữ liệu",
            desc: "Texture, model, dữ liệu khung hình, dữ liệu video hoặc AI nằm trong VRAM.",
        },
        {
            icon: <Settings />,
            title: "Driver dịch lệnh",
            desc: "Driver biến lệnh phần mềm thành lệnh phần cứng. Driver tốt giúp game/phần mềm ổn định hơn.",
        },
        {
            icon: <Zap />,
            title: "Công nghệ hỗ trợ tăng FPS/hình ảnh",
            desc: "NVIDIA có DLSS, AMD có FSR, Intel có XeSS; mỗi công nghệ cần game/phần mềm hỗ trợ.",
        },
        {
            icon: <Monitor />,
            title: "Màn hình hiển thị kết quả",
            desc: "Frame cuối cùng được xuất ra màn hình, hoặc thành file video/render.",
        },
    ];
    const [active, setActive] = useState(0);
    const step = steps[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Vì sao cùng là GPU nhưng mỗi hãng khác nhau?"
                icon={<Workflow />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[330px] flex flex-col justify-between">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center justify-center mb-5">
                                {React.cloneElement(step.icon, { size: 32 })}
                            </div>
                            <p className="text-purple-300 text-sm font-bold mb-2">
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
                    <div className="space-y-2">
                        {steps.map((s, i) => (
                            <button
                                key={s.title}
                                onClick={() => setActive(i)}
                                className={`w-full flex items-center gap-4 p-3 rounded-2xl border text-left transition-all ${active === i ? "bg-purple-500/5 border-purple-500/20 text-white" : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`}
                            >
                                <div
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${active === i ? "bg-purple-500/10 text-purple-300 border border-purple-500/20" : "bg-slate-900 text-slate-500"}`}
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
                <div className="mt-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Kiến trúc GPU → Driver → Game/phần mềm tối ưu →
                    DLSS/FSR/XeSS → VRAM/bandwidth → hiệu năng thực tế
                </div>
            </div>
        </section>
    );
}

function BrandComparison() {
    const rows = [
        [
            "Điểm mạnh lớn",
            "Ray tracing, DLSS, CUDA, AI, render, phần mềm hỗ trợ rộng",
            "Hiệu năng/giá tốt, VRAM cạnh tranh, gaming raster tốt",
            "Giá cạnh tranh, VRAM tốt trong phân khúc, AV1/XeSS đáng chú ý",
        ],
        [
            "Gaming truyền thống",
            "Rất tốt",
            "Rất tốt, thường cạnh tranh mạnh về giá",
            "Tốt dần, cần xem game cụ thể",
        ],
        [
            "Ray tracing",
            "Thường mạnh nhất",
            "Có hỗ trợ, thường yếu hơn NVIDIA cùng phân khúc",
            "Có hỗ trợ, hiệu năng tùy game",
        ],
        [
            "AI / Machine Learning",
            "Rất mạnh nhờ CUDA và hệ sinh thái",
            "Có ROCm nhưng phổ thông kém hơn",
            "Có tiềm năng, hệ sinh thái nhỏ hơn",
        ],
        [
            "Dựng video / sáng tạo",
            "NVENC phổ biến, hỗ trợ rộng",
            "Tốt, encoder hiện đại trên dòng mới",
            "Tốt trong một số workflow, media engine đáng chú ý",
        ],
        [
            "Driver",
            "Trưởng thành, hỗ trợ rộng",
            "Khá ổn, cải thiện nhiều",
            "Đang cải thiện, cần kiểm tra game/phần mềm",
        ],
        [
            "Người nên chọn",
            "Gaming cao cấp, AI, render, livestream, chuyên nghiệp",
            "Gaming hiệu năng/giá, người muốn VRAM tốt",
            "Người thích giá tốt và biết kiểm tra tương thích kỹ",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="So sánh NVIDIA, AMD Radeon và Intel Arc"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[980px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Tiêu chí</th>
                            <th className="p-4 text-sky-300">
                                NVIDIA GeForce RTX
                            </th>
                            <th className="p-4 text-red-300">AMD Radeon RX</th>
                            <th className="p-4 text-indigo-300">Intel Arc</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([k, n, a, i]) => (
                            <tr key={k} className="border-t border-slate-800">
                                <td className="p-4 text-white font-bold">
                                    {k}
                                </td>
                                <td className="p-4 text-slate-300">{n}</td>
                                <td className="p-4 text-slate-300">{a}</td>
                                <td className="p-4 text-slate-300">{i}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function TechnologyExplorer() {
    const techs = {
        cuda: {
            icon: <Brain />,
            title: "CUDA",
            brand: "NVIDIA",
            color: "sky",
            detail: "Nền tảng tính toán song song của NVIDIA, được nhiều phần mềm AI, machine learning, render và mô phỏng kỹ thuật hỗ trợ.",
            fit: "Blender GPU render, Stable Diffusion, PyTorch/TensorFlow, DaVinci/Premiere workflow cần NVIDIA.",
        },
        dlss: {
            icon: <Sparkles />,
            title: "DLSS",
            brand: "NVIDIA",
            color: "sky",
            detail: "Deep Learning Super Sampling dùng AI để tăng FPS và cải thiện hình ảnh trong game hỗ trợ.",
            fit: "Game RTX, ray tracing, người muốn FPS cao hơn với chất lượng hình tốt.",
        },
        raster: {
            icon: <Gamepad2 />,
            title: "Rasterization",
            brand: "AMD mạnh về hiệu năng/giá",
            color: "red",
            detail: "Cách render game truyền thống, không dùng ray tracing nặng.",
            fit: "Người chủ yếu chơi game truyền thống và muốn tối ưu FPS/giá.",
        },
        fsr: {
            icon: <Zap />,
            title: "FSR",
            brand: "AMD",
            color: "red",
            detail: "FidelityFX Super Resolution là công nghệ upscale có thể chạy trên nhiều GPU trong nhiều trường hợp.",
            fit: "Người muốn công nghệ tăng FPS mở hơn, không bị khóa vào một hãng GPU.",
        },
        xess: {
            icon: <Cpu />,
            title: "XeSS",
            brand: "Intel",
            color: "indigo",
            detail: "Công nghệ upscale của Intel, render thấp hơn rồi nâng hình lên để tăng FPS.",
            fit: "Game hỗ trợ XeSS, người dùng Intel Arc hoặc GPU hỗ trợ tương thích.",
        },
        rebar: {
            icon: <Settings />,
            title: "Resizable BAR",
            brand: "Rất quan trọng với Intel Arc",
            color: "indigo",
            detail: "Cho CPU truy cập vùng VRAM lớn hơn thay vì từng phần nhỏ, giúp một số GPU/game đạt hiệu năng tốt hơn.",
            fit: "Máy dùng Intel Arc nên kiểm tra mainboard/BIOS/CPU có hỗ trợ Resizable BAR.",
        },
    };
    const [active, setActive] = useState("cuda");
    const item = techs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Công nghệ quan trọng theo từng hãng"
                icon={<Settings />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
                    {Object.entries(techs).map(([key, t]) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`rounded-2xl p-4 border text-left transition-all ${active === key ? `${softBorder(t.color)} text-white` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 font-bold text-sm">
                                {React.cloneElement(t.icon, { size: 20 })}{" "}
                                {t.title}
                            </div>
                            <p className="text-xs opacity-70 mt-1">{t.brand}</p>
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-[0.75fr_1.25fr] gap-6">
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
                            {item.brand}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <InfoCard
                            label="Ý nghĩa"
                            value={item.detail}
                            color={item.color}
                        />
                        <InfoCard
                            label="Phù hợp"
                            value={item.fit}
                            color="emerald"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function BrandStrengthMatrix() {
    const rows = [
        [
            "Gaming 1080p giá tốt",
            "Tốt",
            "Rất đáng cân nhắc",
            "Đáng cân nhắc nếu game hỗ trợ tốt",
        ],
        [
            "Gaming 1440p/4K + ray tracing",
            "Thường mạnh nhất",
            "Có nhưng thường yếu hơn RT",
            "Tùy game",
        ],
        [
            "AI local / CUDA workflow",
            "Lựa chọn an toàn nhất",
            "Khó hơn với người phổ thông",
            "Cần kiểm tra framework",
        ],
        [
            "Dựng video / livestream",
            "Rất mạnh, NVENC phổ biến",
            "Tốt trên dòng mới",
            "Media engine đáng chú ý",
        ],
        [
            "VRAM/giá",
            "Tùy phân khúc",
            "Thường cạnh tranh",
            "Có thể rất hấp dẫn",
        ],
        [
            "Người mới muốn ít lỗi vặt",
            "Dễ chọn hơn",
            "Khá ổn",
            "Cần kiểm tra kỹ hơn",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Chọn hãng theo nhu cầu"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[900px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Nhu cầu</th>
                            <th className="p-4 text-sky-300">NVIDIA</th>
                            <th className="p-4 text-red-300">AMD</th>
                            <th className="p-4 text-indigo-300">Intel Arc</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([need, n, a, i]) => (
                            <tr
                                key={need}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-white font-bold">
                                    {need}
                                </td>
                                <td className="p-4 text-slate-300">{n}</td>
                                <td className="p-4 text-slate-300">{a}</td>
                                <td className="p-4 text-slate-300">{i}</td>
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
            icon: <Sparkles />,
            title: "NVIDIA GeForce RTX 4060",
            subtitle: "GPU phổ thông mạnh hệ sinh thái",
            color: "sky",
            points: [
                "Hướng đến gaming 1080p",
                "Có DLSS 3",
                "Hợp livestream nhẹ/dựng video bán chuyên",
                "Hợp học AI hoặc Stable Diffusion cơ bản",
                "Lợi thế CUDA, NVENC, driver và độ phổ biến",
            ],
            lesson: "Không phải lúc nào cũng FPS/giá tốt nhất, nhưng rất an toàn nếu bạn cần CUDA, DLSS, render hoặc phần mềm hỗ trợ NVIDIA.",
        },
        {
            icon: <Gamepad2 />,
            title: "AMD Radeon RX 7600",
            subtitle: "Gaming phổ thông hiệu năng/giá",
            color: "red",
            points: [
                "Hướng đến gaming 1080p",
                "RDNA 3, 8GB GDDR6",
                "Phù hợp người tối ưu chi phí",
                "Không quá cần CUDA",
                "Không đặt nặng ray tracing",
            ],
            lesson: "Nếu chỉ chơi game truyền thống, AMD Radeon thường là lựa chọn đáng cân nhắc khi giá tốt.",
        },
        {
            icon: <Cpu />,
            title: "Intel Arc B580",
            subtitle: "Lựa chọn mới với VRAM hấp dẫn",
            color: "indigo",
            points: [
                "Công bố ở phân khúc phổ thông",
                "12GB VRAM trong tầm giá hấp dẫn",
                "Cần kiểm tra driver và game/phần mềm",
                "Resizable BAR rất quan trọng",
                "Hợp người chịu khó cập nhật driver và xem benchmark",
            ],
            lesson: "Intel Arc hấp dẫn trên giấy, nhưng nên kiểm tra đúng game/phần mềm trước khi mua.",
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

function PickerLab() {
    const scenarios = {
        ai: {
            icon: <Brain />,
            title: "AI / CUDA / Stable Diffusion",
            answer: "Ưu tiên NVIDIA vì CUDA và hệ sinh thái phần mềm rộng. Đây thường là lựa chọn an toàn nhất cho người học AI local.",
            color: "sky",
        },
        valueGaming: {
            icon: <Gamepad2 />,
            title: "Gaming truyền thống / giá tốt",
            answer: "AMD Radeon rất đáng cân nhắc nếu game bạn chơi không quá phụ thuộc ray tracing và giá thực tế tốt hơn NVIDIA cùng phân khúc.",
            color: "red",
        },
        ray: {
            icon: <Sparkles />,
            title: "Ray tracing / DLSS",
            answer: "NVIDIA thường có lợi thế rõ hơn nhờ RT cores, DLSS và hỗ trợ rộng trong game AAA hiện đại.",
            color: "sky",
        },
        arc: {
            icon: <Cpu />,
            title: "Intel Arc giá rẻ",
            answer: "Chỉ nên chọn khi đã kiểm tra game/phần mềm bạn dùng, driver mới và hệ thống hỗ trợ Resizable BAR.",
            color: "indigo",
        },
        creator: {
            icon: <Video />,
            title: "Dựng video / livestream",
            answer: "NVIDIA thường an toàn nhờ NVENC và hỗ trợ rộng; AMD/Intel cũng có encoder hiện đại nhưng cần kiểm tra đúng phần mềm/workflow.",
            color: "emerald",
        },
    };
    const [active, setActive] = useState("ai");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Lab: nên chọn hãng nào?"
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
            wrong: "NVIDIA lúc nào cũng tốt nhất",
            right: "NVIDIA rất mạnh về CUDA, AI, ray tracing, DLSS và phần mềm chuyên nghiệp, nhưng không phải lúc nào cũng hiệu năng/giá tốt nhất.",
        },
        {
            wrong: "AMD yếu vì không có CUDA",
            right: "AMD không có CUDA nhưng vẫn rất tốt cho gaming truyền thống. Chỉ khi phần mềm/workflow cần CUDA thì NVIDIA thuận tiện hơn.",
        },
        {
            wrong: "Intel Arc rẻ nên chắc chắn đáng mua",
            right: "Intel Arc có giá và VRAM hấp dẫn, nhưng cần kiểm tra driver, Resizable BAR, game và phần mềm bạn dùng.",
        },
        {
            wrong: "Chỉ cần so số GB VRAM là chọn được hãng",
            right: "VRAM quan trọng nhưng còn cần xem kiến trúc, driver, ray tracing, upscaling, encoder, phần mềm và giá thực tế.",
        },
        {
            wrong: "Chọn theo fan hãng",
            right: "Hãy chọn theo game, độ phân giải, phần mềm, ray tracing, AI/render, PSU và giá thực tế tại thời điểm mua.",
        },
    ];
    const tips = [
        "Chọn NVIDIA nếu cần AI, CUDA, Blender, Stable Diffusion, livestream, render hoặc ray tracing tốt.",
        "Chọn AMD nếu ưu tiên gaming truyền thống, hiệu năng/giá và VRAM tốt trong tầm giá.",
        "Chọn Intel Arc nếu giá rất tốt, hệ thống hỗ trợ Resizable BAR và bạn đã kiểm tra game/phần mềm.",
        "Luôn xem benchmark đúng game hoặc phần mềm bạn dùng.",
        "So giá thực tế tại cửa hàng, không chỉ MSRP lúc ra mắt.",
        "Kiểm tra PSU, case, cổng cấp nguồn và driver trước khi mua.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
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
                        <span className="bg-sky-500/20 text-sky-300 p-2 rounded-xl">
                            11
                        </span>{" "}
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-sky-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                NVIDIA = CUDA, AI, DLSS, ray tracing, render,
                                NVENC
                            </p>
                            <p>
                                AMD Radeon = gaming raster, hiệu năng/giá, VRAM
                                cạnh tranh
                            </p>
                            <p>
                                Intel Arc = giá tốt, VRAM hấp dẫn, XeSS/AV1, cần
                                kiểm tra driver
                            </p>
                            <br />
                            <p className="text-slate-500"># Chọn đúng</p>
                            <p className="text-slate-300">
                                Game gì? Độ phân giải? Ray tracing? AI/render?
                                PSU? Giá thực tế?
                            </p>
                            <br />
                            <p className="text-red-300">
                                Đừng chọn theo fan hãng hoặc chỉ theo số GB
                                VRAM.
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
            "Hãng GPU nào thường thuận tiện nhất nếu học AI, chạy CUDA, Stable Diffusion hoặc dùng nhiều phần mềm render hỗ trợ CUDA?",
        options: ["NVIDIA", "AMD", "Intel Arc", "Không hãng nào cần GPU"],
        correct: 0,
        explanation:
            "NVIDIA có CUDA và hệ sinh thái phần mềm AI/render rất rộng, thường là lựa chọn an toàn nhất cho người học AI local.",
    },
    {
        question: "AMD Radeon thường hấp dẫn ở điểm nào?",
        options: [
            "Không cần driver",
            "Hiệu năng/giá tốt trong gaming truyền thống, nhiều mẫu có cấu hình VRAM cạnh tranh",
            "Chỉ dùng để gõ Word",
            "Luôn mạnh ray tracing hơn NVIDIA ở mọi phân khúc",
        ],
        correct: 1,
        explanation:
            "AMD Radeon thường cạnh tranh tốt về gaming rasterization và hiệu năng/giá trong nhiều phân khúc.",
    },
    {
        question: "Khi mua Intel Arc, điều gì nên kiểm tra kỹ?",
        options: [
            "Máy có ổ DVD không",
            "Game/phần mềm tương thích tốt, driver mới, hệ thống có Resizable BAR không",
            "Màn hình có loa không",
            "Bàn phím có RGB không",
        ],
        correct: 1,
        explanation:
            "Intel Arc cần chú ý driver, game/phần mềm cụ thể và Resizable BAR để đạt hiệu năng/độ ổn định tốt.",
    },
    {
        question: "DLSS là công nghệ nổi bật của hãng nào?",
        options: ["AMD", "Intel", "NVIDIA", "Realtek"],
        correct: 2,
        explanation:
            "DLSS là công nghệ upscale bằng AI nổi bật của NVIDIA GeForce RTX.",
    },
    {
        question: "Điều nào là cách chọn hãng GPU đúng hơn?",
        options: [
            "Chọn theo fan hãng",
            "Chỉ so số GB VRAM",
            "Xem game/phần mềm dùng thực tế, công nghệ cần thiết, benchmark và giá",
            "Chọn card có hộp đẹp nhất",
        ],
        correct: 2,
        explanation:
            "Cách chọn đúng là dựa vào nhu cầu thực tế, phần mềm/game, benchmark, công nghệ hỗ trợ, PSU và giá hiện tại.",
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
                Bạn đã hiểu NVIDIA, AMD Radeon và Intel Arc khác nhau ra sao.
                Tiếp theo là GPU cho Gaming vs GPU cho AI/ML/Render — nơi tiêu
                chí chọn GPU sẽ thay đổi rất nhiều theo workload.
            </p>
            <Link
                to="/phan-5-6"
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-sky-500/20"
            >
                Bài tiếp theo: 5.6 — GPU cho Gaming vs GPU cho AI/ML/Render{" "}
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
        orange: "bg-orange-500/20 text-orange-300",
        red: "bg-red-500/20 text-red-300",
        indigo: "bg-indigo-500/20 text-indigo-300",
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
function BrandHeroTile({ icon, label, desc, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-4`}>
            <div className="flex items-center gap-3 mb-2">
                <div
                    className={`w-10 h-10 rounded-xl ${badgeColor(color)} flex items-center justify-center`}
                >
                    {React.cloneElement(icon, { size: 20 })}
                </div>
                <h4 className="font-extrabold text-white">{label}</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
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
        sky: "bg-sky-500/10 text-sky-300 border border-sky-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
        indigo: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
    };
    return map[color] || map.sky;
}
function softBorder(color) {
    const map = {
        sky: "bg-sky-500/5 border-sky-500/20",
        red: "bg-red-500/5 border-red-500/20",
        indigo: "bg-indigo-500/5 border-indigo-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
    };
    return map[color] || map.sky;
}
function textColor(color) {
    const map = {
        sky: "text-sky-300",
        red: "text-red-300",
        indigo: "text-indigo-300",
        cyan: "text-cyan-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        blue: "text-blue-300",
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
    };
    return map[color] || "text-sky-300";
}
