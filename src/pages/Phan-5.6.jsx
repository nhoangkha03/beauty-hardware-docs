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
    Thermometer,
    Video,
    Workflow,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-purple-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center shadow-lg shadow-purple-500/10">
                            <Brain className="text-purple-400" size={24} />
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
                    <div className="text-sm font-semibold text-purple-300 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">
                        Bài 5.6
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <WorkshopAnalogy />
                <WorkloadFlowSimulator />
                <ComparisonTable />
                <GamingGuide />
                <AiGuide />
                <RenderGuide />
                <SpecsExplorer />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-purple-300">
                        <BookOpen size={16} /> Phần 5: GPU — Bộ xử lý đồ họa
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        GPU cho Gaming
                        <span className="block text-purple-400">
                            vs AI/ML/Render
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Cùng là card đồ họa, nhưng GPU tốt cho game chưa chắc
                        tối ưu cho AI, và GPU rất mạnh cho AI có thể quá dư nếu
                        chỉ chơi eSports 1080p. Chọn đúng workload giúp tiết
                        kiệm tiền và tránh nghẽn hiệu năng.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag
                            icon={<Gamepad2 size={16} />}
                            text="Gaming = FPS"
                        />
                        <Tag
                            icon={<Brain size={16} />}
                            text="AI/ML = VRAM + Tensor"
                        />
                        <Tag
                            icon={<Film size={16} />}
                            text="Render = VRAM + ổn định"
                        />
                        <Tag
                            icon={<Video size={16} />}
                            text="Encoder / Decoder"
                        />
                        <Tag
                            icon={<Zap size={16} />}
                            text="DLSS / FSR / XeSS"
                        />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-1 gap-3">
                        <HeroTile
                            icon={<Gamepad2 />}
                            label="Gaming"
                            desc="FPS cao, frame ổn định, độ trễ thấp, ray tracing/upscale"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<Brain />}
                            label="AI / Machine Learning"
                            desc="VRAM lớn, CUDA/ROCm/oneAPI, tensor performance"
                            color="purple"
                            highlight
                        />
                        <HeroTile
                            icon={<Film />}
                            label="Render / Dựng video"
                            desc="VRAM đủ, driver ổn, encoder/decoder mạnh"
                            color="orange"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">
                            // Một GPU mạnh ở việc này
                        </p>
                        <p>chưa chắc tối ưu ở việc khác</p>
                        <p className="text-purple-300">
                            Workload quyết định tiêu chí chọn
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Phân biệt tiêu chí chọn GPU cho gaming, AI/ML và render/dựng video.",
        "Hiểu gaming ưu tiên FPS, độ phân giải, độ ổn định frame và công nghệ hình ảnh.",
        "Hiểu AI/ML ưu tiên VRAM, CUDA/ROCm/oneAPI, tensor performance và framework hỗ trợ.",
        "Hiểu render/dựng video cần VRAM đủ lớn, nhân xử lý mạnh, driver ổn định và encoder/decoder tốt.",
        "Biết tránh mua GPU quá dư hoặc mua nhầm GPU mạnh ở việc không phải nhu cầu chính.",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="purple"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-purple-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-300 flex items-center justify-center font-bold mb-4">
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
    const blocks = [
        {
            icon: <Gamepad2 />,
            title: "GPU cho Gaming",
            color: "emerald",
            goal: "FPS cao, hình ảnh mượt, độ trễ thấp, chơi game ổn định.",
            needs: [
                "Hiệu năng game thực tế",
                "VRAM đủ cho độ phân giải",
                "Ray tracing nếu cần",
                "DLSS/FSR/XeSS",
                "Driver game ổn định",
            ],
        },
        {
            icon: <Brain />,
            title: "GPU cho AI/ML",
            color: "purple",
            goal: "Chạy mô hình, train/fine-tune, inference và tính toán ma trận.",
            needs: [
                "VRAM càng nhiều càng tốt",
                "CUDA/ROCm/oneAPI",
                "Tensor performance",
                "Hỗ trợ PyTorch/TensorFlow",
                "Ổn định khi chạy lâu",
            ],
        },
        {
            icon: <Film />,
            title: "GPU cho Render / Video",
            color: "orange",
            goal: "Xuất ảnh/video nhanh, preview mượt, render ổn định.",
            needs: [
                "VRAM đủ cho scene/timeline",
                "CUDA/OptiX/HIP/encoder",
                "Driver ổn định",
                "Decoder/encoder tốt",
                "Phần mềm hỗ trợ tốt",
            ],
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: cùng GPU nhưng tiêu chí khác nhau"
                icon={<Brain />}
            />
            <div className="grid lg:grid-cols-3 gap-4">
                {blocks.map((b) => (
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
                            {b.goal}
                        </p>
                        <div className="space-y-2">
                            {b.needs.map((n) => (
                                <Bullet key={n} text={n} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-cyan-300">Điểm mấu chốt:</strong> Gaming
                hỏi “FPS bao nhiêu?”, AI hỏi “model có vừa VRAM không?”, render
                hỏi “scene/timeline có ổn định và xuất nhanh không?”.
            </div>
        </section>
    );
}

function WorkshopAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: ba kiểu xưởng khác nhau"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-3 gap-4">
                <AnalogyCard
                    icon={<Gamepad2 />}
                    title="Gaming = sân đua"
                    desc="Cần xe chạy nhanh từng vòng: FPS cao, phản hồi nhanh, khung hình ổn định."
                    color="emerald"
                />
                <AnalogyCard
                    icon={<Brain />}
                    title="AI/ML = phòng tính toán"
                    desc="Cần bàn lớn chứa mô hình và nhiều máy tính ma trận chạy liên tục."
                    color="purple"
                />
                <AnalogyCard
                    icon={<Film />}
                    title="Render = xưởng phim"
                    desc="Cần đủ kho texture, nhân lực xử lý, driver ổn và máy mã hóa video tốt."
                    color="orange"
                />
            </div>
        </section>
    );
}

function WorkloadFlowSimulator() {
    const flows = {
        gaming: {
            title: "Khi chơi game",
            color: "emerald",
            steps: [
                {
                    icon: <Cpu />,
                    title: "CPU xử lý logic game",
                    desc: "Vị trí nhân vật, AI, vật lý, input, trạng thái game.",
                },
                {
                    icon: <Sparkles />,
                    title: "GPU xử lý hình ảnh",
                    desc: "Ánh sáng, bóng đổ, texture, hiệu ứng, post-processing.",
                },
                {
                    icon: <Database />,
                    title: "VRAM chứa texture/frame",
                    desc: "Texture chất lượng cao và độ phân giải lớn cần nhiều VRAM hơn.",
                },
                {
                    icon: <Zap />,
                    title: "DLSS/FSR/XeSS tăng FPS",
                    desc: "Render thấp hơn rồi upscale để tăng FPS nếu game hỗ trợ.",
                },
                {
                    icon: <Monitor />,
                    title: "Màn hình hiển thị FPS",
                    desc: "FPS cao và frame time ổn định giúp game mượt hơn.",
                },
            ],
        },
        ai: {
            title: "Khi chạy AI/ML",
            color: "purple",
            steps: [
                {
                    icon: <Database />,
                    title: "Nạp model vào VRAM",
                    desc: "Nếu model không vừa VRAM, có thể lỗi out of memory hoặc chạy rất chậm.",
                },
                {
                    icon: <Brain />,
                    title: "GPU tính toán ma trận",
                    desc: "Tensor cores/compute units xử lý hàng triệu phép nhân ma trận.",
                },
                {
                    icon: <Settings />,
                    title: "Framework gọi CUDA/ROCm/oneAPI",
                    desc: "PyTorch/TensorFlow cần backend phù hợp với GPU và driver.",
                },
                {
                    icon: <Gauge />,
                    title: "FP16/BF16/INT8 tăng tốc",
                    desc: "Định dạng số nhẹ hơn giúp tiết kiệm bộ nhớ và tăng tốc inference/training.",
                },
                {
                    icon: <HardDrive />,
                    title: "Kết quả trả về phần mềm",
                    desc: "Ảnh sinh ra, text output, model fine-tune hoặc tensor kết quả.",
                },
            ],
        },
        render: {
            title: "Khi render / dựng video",
            color: "orange",
            steps: [
                {
                    icon: <Film />,
                    title: "Phần mềm gửi scene/timeline",
                    desc: "Blender, Premiere, DaVinci, Unreal gửi dữ liệu cần xử lý.",
                },
                {
                    icon: <Database />,
                    title: "VRAM chứa texture/cache/frame",
                    desc: "Scene nặng với texture 4K/8K có thể ngốn VRAM rất nhanh.",
                },
                {
                    icon: <Sparkles />,
                    title: "GPU xử lý ánh sáng/effect",
                    desc: "Render vật liệu, hiệu ứng, color grading, denoise, preview.",
                },
                {
                    icon: <Video />,
                    title: "Encoder/decoder xử lý video",
                    desc: "NVENC, AV1, H.264/H.265 giúp stream, preview và xuất file hiệu quả hơn.",
                },
                {
                    icon: <PackageCheck />,
                    title: "Xuất ảnh/video cuối cùng",
                    desc: "Kết quả là frame render, animation hoặc file video hoàn chỉnh.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("gaming");
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
                title="Luồng xử lý khác nhau theo workload"
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
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[330px] flex flex-col justify-between">
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

function ComparisonTable() {
    const rows = [
        [
            "Mục tiêu chính",
            "FPS cao, hình ảnh đẹp, độ trễ thấp",
            "Chạy model, train/fine-tune, xử lý tensor",
            "Xuất ảnh/video nhanh, ổn định",
        ],
        [
            "Thông số quan trọng",
            "Hiệu năng game, VRAM, RT, DLSS/FSR/XeSS",
            "VRAM, CUDA/ROCm/oneAPI, tensor performance",
            "VRAM, CUDA/OptiX/encoder, driver",
        ],
        [
            "VRAM gợi ý",
            "8GB cho 1080p, 12GB+ tốt cho 1440p",
            "12GB–24GB+ càng dễ chịu",
            "8GB–16GB+ tùy project",
        ],
        [
            "NVIDIA lợi thế",
            "DLSS, ray tracing",
            "CUDA, Tensor Cores, hệ sinh thái",
            "CUDA/OptiX, NVENC, hỗ trợ rộng",
        ],
        [
            "AMD lợi thế",
            "Hiệu năng/giá, VRAM cạnh tranh",
            "ROCm có cải thiện nhưng kén hơn",
            "Tốt nếu workflow hỗ trợ AMD",
        ],
        [
            "Intel Arc lợi thế",
            "Giá/VRAM phổ thông",
            "oneAPI, nhưng hệ nhỏ hơn",
            "Media engine tốt, cần kiểm tra phần mềm",
        ],
        [
            "Rủi ro chọn sai",
            "FPS thấp, không tận dụng màn hình",
            "Thiếu VRAM, không chạy được model",
            "Render chậm, crash, thiếu bộ nhớ",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="So sánh GPU cho Gaming vs AI/ML vs Render"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[980px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Tiêu chí</th>
                            <th className="p-4 text-emerald-300">Gaming</th>
                            <th className="p-4 text-purple-300">AI/ML</th>
                            <th className="p-4 text-orange-300">
                                Render / Dựng video
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([k, g, a, r]) => (
                            <tr key={k} className="border-t border-slate-800">
                                <td className="p-4 text-white font-bold">
                                    {k}
                                </td>
                                <td className="p-4 text-slate-300">{g}</td>
                                <td className="p-4 text-slate-300">{a}</td>
                                <td className="p-4 text-slate-300">{r}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function GamingGuide() {
    const rows = [
        [
            "1080p",
            "GPU phổ thông/tầm trung",
            "8GB VRAM thường là mức nên có",
            "emerald",
        ],
        [
            "1440p",
            "GPU tầm trung khá trở lên",
            "12GB VRAM trở lên an toàn hơn",
            "cyan",
        ],
        [
            "4K",
            "GPU cao cấp",
            "Cần nhiều VRAM, bandwidth và sức mạnh xử lý",
            "purple",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Nếu chọn GPU cho Gaming"
                icon={<Gamepad2 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Độ phân giải</th>
                            <th className="p-4">GPU nên nhắm tới</th>
                            <th className="p-4">Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([res, gpu, note, color]) => (
                            <tr key={res} className="border-t border-slate-800">
                                <td
                                    className={`p-4 font-extrabold ${textColor(color)}`}
                                >
                                    {res}
                                </td>
                                <td className="p-4 text-slate-300">{gpu}</td>
                                <td className="p-4 text-slate-300">{note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                <RuleCard
                    label="Ray Tracing"
                    value="Đẹp hơn nhưng nặng hơn; NVIDIA thường an toàn hơn khi bật RT + DLSS."
                    color="emerald"
                />
                <RuleCard
                    label="FPS cao"
                    value="eSports cần frame ổn định và màn hình tần số quét cao."
                    color="cyan"
                />
                <RuleCard
                    label="Benchmark"
                    value="Luôn xem đúng game, đúng độ phân giải, đúng setting."
                    color="purple"
                />
            </div>
        </section>
    );
}

function AiGuide() {
    const rows = [
        [
            "8GB",
            "Stable Diffusion cơ bản, model nhỏ, học AI nhập môn",
            "orange",
        ],
        ["12GB", "AI local mức nhẹ-trung bình dễ chịu hơn", "cyan"],
        [
            "16GB",
            "Model lớn hơn, batch lớn hơn, workflow thoải mái hơn",
            "emerald",
        ],
        ["24GB+", "AI local nặng hơn, LLM lớn hơn, render nặng", "purple"],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="purple"
                title="Nếu chọn GPU cho AI/ML"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">VRAM</th>
                            <th className="p-4">Phù hợp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([vram, fit, color]) => (
                            <tr
                                key={vram}
                                className="border-t border-slate-800"
                            >
                                <td
                                    className={`p-4 font-extrabold ${textColor(color)}`}
                                >
                                    {vram}
                                </td>
                                <td className="p-4 text-slate-300">{fit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                <RuleCard
                    label="CUDA"
                    value="NVIDIA thường ít lỗi môi trường hơn cho người mới vì tutorial và framework hỗ trợ rộng."
                    color="purple"
                />
                <RuleCard
                    label="FP16 / BF16 / INT8"
                    value="Định dạng số nhẹ hơn giúp tăng tốc và tiết kiệm VRAM trong deep learning."
                    color="cyan"
                />
                <RuleCard
                    label="Out of Memory"
                    value="Model không vừa VRAM có thể lỗi hoặc phải chạy chậm qua RAM."
                    color="red"
                />
            </div>
        </section>
    );
}

function RenderGuide() {
    const rows = [
        [
            "Blender / 3D Render",
            "VRAM đủ lớn, nhân xử lý mạnh, CUDA/OptiX/HIP tùy GPU",
            "Scene lớn thiếu VRAM có thể không render được",
        ],
        [
            "Premiere / DaVinci",
            "Encoder/decoder, timeline acceleration, VRAM, driver",
            "Preview và export phụ thuộc codec/workflow",
        ],
        [
            "After Effects / Motion",
            "VRAM, RAM hệ thống, CPU, cache và GPU acceleration",
            "Không phải effect nào cũng dùng GPU mạnh",
        ],
        [
            "Unreal Engine",
            "VRAM, raster/RT performance, shader compile, driver",
            "Texture/scene nặng cần GPU lẫn RAM/SSD tốt",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="orange"
                title="Nếu chọn GPU cho Render / Dựng video"
                icon={<Film />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[860px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Workflow</th>
                            <th className="p-4">Cần chú ý</th>
                            <th className="p-4">Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([flow, need, note]) => (
                            <tr
                                key={flow}
                                className="border-t border-slate-800"
                            >
                                <td className="p-4 text-orange-300 font-extrabold">
                                    {flow}
                                </td>
                                <td className="p-4 text-slate-300">{need}</td>
                                <td className="p-4 text-slate-300">{note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-orange-300">
                    Dựng video không chỉ là FPS game:
                </strong>{" "}
                hãy kiểm tra codec, encoder, decoder, timeline preview,
                plugin/effect và phần mềm bạn dùng.
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        fps: {
            icon: <Gamepad2 />,
            title: "FPS / Frame Time",
            detail: "Quan trọng nhất với gaming: FPS cao và frame time ổn định giúp game mượt.",
            impact: "Màn 144Hz cần FPS cao và ổn định hơn màn 60Hz.",
        },
        vram: {
            icon: <Database />,
            title: "VRAM",
            detail: "Bộ nhớ đồ họa chứa texture, model, frame buffer, scene, timeline hoặc model AI.",
            impact: "AI/render rất nhạy với VRAM; game 1440p/4K cũng cần VRAM nhiều hơn 1080p.",
        },
        cuda: {
            icon: <Brain />,
            title: "CUDA / ROCm / oneAPI",
            detail: "Backend tính toán cho AI/render tùy hãng GPU.",
            impact: "NVIDIA thường an toàn hơn cho người mới học AI vì CUDA phổ biến.",
        },
        tensor: {
            icon: <Puzzle />,
            title: "Tensor Performance",
            detail: "Hiệu năng phép toán FP16/BF16/INT8 dùng trong deep learning.",
            impact: "VRAM đủ để chạy model; tensor performance quyết định tốc độ chạy model.",
        },
        encoder: {
            icon: <Video />,
            title: "Encoder / Decoder",
            detail: "Bộ mã hóa/giải mã video như NVENC, AV1, H.264/H.265.",
            impact: "Quan trọng cho livestream, export video, edit footage nặng và playback timeline.",
        },
        power: {
            icon: <Thermometer />,
            title: "PSU / Nhiệt / Case",
            detail: "GPU mạnh cần nguồn tốt, case thoáng và tản nhiệt ổn.",
            impact: "Đừng mua GPU cao cấp rồi dùng nguồn kém hoặc case bí.",
        },
    };
    const [active, setActive] = useState("vram");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="yellow"
                title="Thông số kỹ thuật quan trọng theo workload"
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
            icon: <Gamepad2 />,
            title: "RTX 4060",
            subtitle: "Gaming 1080p + AI nhập môn",
            color: "emerald",
            points: [
                "Hợp game 1080p và eSports",
                "DLSS 3 hỗ trợ tăng FPS trong game hỗ trợ",
                "8GB VRAM đủ nhiều game 1080p",
                "Có CUDA cho AI nhập môn",
                "Hạn chế với model AI lớn hoặc texture rất cao",
            ],
            lesson: "Phù hợp người mới build PC gaming tiết kiệm điện và muốn thử AI/render nhẹ.",
        },
        {
            icon: <Sparkles />,
            title: "RTX 4070 / RTX 4070 SUPER",
            subtitle: "Cân bằng gaming 1440p và sáng tạo nội dung",
            color: "cyan",
            points: [
                "Hợp gaming 1440p",
                "12GB VRAM dễ chịu hơn 8GB",
                "CUDA/OptiX/NVENC hỗ trợ nhiều workflow",
                "Dựng video bán chuyên, Blender mức vừa",
                "Chưa phải lựa chọn cho AI/3D cực nặng",
            ],
            lesson: "Một GPU đa dụng hơn RTX 4060 nếu bạn vừa chơi game vừa làm nội dung hoặc AI local nhẹ-trung bình.",
        },
        {
            icon: <Brain />,
            title: "RTX 4090",
            subtitle: "Gaming 4K, AI local và render nặng",
            color: "purple",
            points: [
                "24GB VRAM",
                "Rất mạnh cho 4K gaming",
                "Hợp Blender/AI local nghiêm túc hơn",
                "Đắt và tiêu thụ điện cao",
                "Quá dư nếu chỉ eSports 1080p",
            ],
            lesson: "GPU cực mạnh chỉ đáng tiền khi workload thật sự cần; nếu chỉ chơi nhẹ thì nên cân bằng cả CPU/RAM/màn hình.",
        },
        {
            icon: <Gamepad2 />,
            title: "RX 7900 XTX",
            subtitle: "Gaming mạnh, VRAM lớn",
            color: "orange",
            points: [
                "Hấp dẫn cho gaming 1440p/4K nếu giá tốt",
                "VRAM lớn",
                "Không quá phụ thuộc CUDA",
                "AI phổ thông kém thuận tiện hơn NVIDIA",
                "Cần kiểm tra workflow render/AI cụ thể",
            ],
            lesson: "Rất đáng cân nhắc cho gaming thuần, nhưng không phải lựa chọn dễ nhất cho người mới học AI local.",
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
        esport: {
            icon: <Gamepad2 />,
            title: "eSports / 1080p",
            answer: "Không cần GPU quá cao cấp. Ưu tiên FPS ổn định, CPU đủ mạnh, RAM đủ, màn hình Hz cao và SSD tốt.",
            color: "emerald",
        },
        aaa1440: {
            icon: <Monitor />,
            title: "AAA 1440p",
            answer: "Nên ưu tiên GPU tầm trung khá trở lên, 12GB VRAM nếu ngân sách cho phép và xem benchmark đúng game.",
            color: "cyan",
        },
        ray: {
            icon: <Sparkles />,
            title: "Ray tracing",
            answer: "NVIDIA thường an toàn hơn nhờ ray tracing và DLSS. AMD/Intel có hỗ trợ nhưng cần xem từng game.",
            color: "purple",
        },
        ai: {
            icon: <Brain />,
            title: "AI local",
            answer: "Ưu tiên NVIDIA nếu bạn muốn ít lỗi môi trường. VRAM 12GB/16GB/24GB càng dễ chịu hơn tùy model.",
            color: "orange",
        },
        render: {
            icon: <Film />,
            title: "Blender / Premiere / DaVinci",
            answer: "Kiểm tra phần mềm bạn dùng hỗ trợ GPU nào tốt nhất; xem VRAM, encoder/decoder, driver và benchmark workflow.",
            color: "red",
        },
    };
    const [active, setActive] = useState("ai");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: chọn GPU theo workload"
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
            wrong: "GPU chơi game mạnh thì AI chắc chắn mạnh",
            right: "Gaming cần FPS; AI cần VRAM, CUDA/ROCm/oneAPI, tensor performance và framework hỗ trợ.",
        },
        {
            wrong: "Chỉ cần nhiều VRAM là render nhanh",
            right: "VRAM giúp chứa cảnh lớn, nhưng tốc độ render còn phụ thuộc chip GPU, nhân xử lý, driver và phần mềm.",
        },
        {
            wrong: "Chơi game 1080p cũng nên mua RTX 4090 cho chắc",
            right: "Với 1080p/eSports, GPU quá mạnh có thể dư, dễ nghẽn bởi CPU/màn hình và lãng phí ngân sách.",
        },
        {
            wrong: "AI local cứ card 8GB là đủ",
            right: "8GB chỉ đủ mức nhập môn hoặc model nhỏ; nhiều workload cần 12GB, 16GB hoặc 24GB+ để thoải mái.",
        },
        {
            wrong: "Render video chỉ cần GPU mạnh",
            right: "Dựng video còn phụ thuộc CPU, RAM, SSD, codec, encoder/decoder và phần mềm.",
        },
    ];
    const tips = [
        "Gaming 1080p: ưu tiên GPU tầm phổ thông/tầm trung, 8GB VRAM trở lên và benchmark đúng game.",
        "Gaming 1440p: ưu tiên 12GB VRAM trở lên và hiệu năng raster tốt.",
        "Ray tracing: NVIDIA thường an toàn hơn nhờ RT + DLSS.",
        "AI/ML: NVIDIA thường dễ cho người mới vì CUDA được hỗ trợ rộng.",
        "Render/dựng video: kiểm tra đúng phần mềm, plugin, codec và workflow.",
        "Làm cả game + AI + render: ưu tiên GPU NVIDIA có VRAM đủ lớn nếu ngân sách cho phép.",
        "Ngân sách hạn chế: đừng mua GPU cao cấp rồi dùng PSU kém/case bí.",
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
                        <span className="bg-purple-500/20 text-purple-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-purple-300 border border-slate-800 shadow-inner space-y-2">
                            <p>
                                Gaming = FPS, frame time, độ phân giải,
                                RT/upscale
                            </p>
                            <p>
                                AI/ML = VRAM, CUDA/ROCm/oneAPI, tensor
                                performance
                            </p>
                            <p>
                                Render/video = VRAM, driver, encoder/decoder,
                                phần mềm hỗ trợ
                            </p>
                            <br />
                            <p className="text-slate-500"># Câu hỏi chọn GPU</p>
                            <p className="text-slate-300">
                                Bạn chơi game gì? Độ phân giải nào?
                            </p>
                            <p className="text-slate-300">
                                Model AI có vừa VRAM không?
                            </p>
                            <p className="text-slate-300">
                                Phần mềm render/video hỗ trợ GPU nào tốt nhất?
                            </p>
                            <br />
                            <p className="text-red-300">
                                GPU mạnh trong game chưa chắc tối ưu cho
                                AI/render.
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
        question: "GPU cho gaming thường ưu tiên yếu tố nào nhất?",
        options: [
            "FPS, độ phân giải, độ ổn định khung hình và công nghệ hình ảnh",
            "Chỉ cần nhiều cổng USB",
            "Chỉ cần ổ cứng lớn",
            "Không cần VRAM",
        ],
        correct: 0,
        explanation:
            "Gaming cần FPS cao, frame time ổn định, độ trễ thấp, độ phân giải phù hợp và công nghệ như ray tracing/upscaling nếu cần.",
    },
    {
        question: "Với AI/ML, yếu tố nào thường rất quan trọng?",
        options: [
            "Màu đèn RGB của card",
            "VRAM, CUDA/ROCm/oneAPI và hỗ trợ framework",
            "Số cổng âm thanh",
            "Kích thước bàn phím",
        ],
        correct: 1,
        explanation:
            "AI/ML cần VRAM đủ để chứa model và cần backend/framework phù hợp như CUDA, ROCm hoặc oneAPI.",
    },
    {
        question:
            "Vì sao NVIDIA thường được khuyên cho người mới học AI local?",
        options: [
            "Vì NVIDIA không cần driver",
            "Vì CUDA và hệ sinh thái phần mềm AI hỗ trợ rất rộng",
            "Vì NVIDIA luôn rẻ nhất",
            "Vì NVIDIA không cần VRAM",
        ],
        correct: 1,
        explanation:
            "Nhiều thư viện, tutorial và workflow AI phổ thông dựa trên CUDA nên NVIDIA thường ít rủi ro tương thích hơn.",
    },
    {
        question:
            "Một GPU có nhiều VRAM nhưng chip xử lý yếu thì điều gì có thể xảy ra?",
        options: [
            "Chắc chắn luôn nhanh nhất",
            "Có thể chứa được cảnh/model lớn hơn nhưng vẫn render/chạy chậm",
            "Không cần nguồn điện",
            "Không cần tản nhiệt",
        ],
        correct: 1,
        explanation:
            "VRAM đủ giúp chứa cảnh/model lớn, nhưng tốc độ còn phụ thuộc nhân xử lý, kiến trúc, driver và phần mềm.",
    },
    {
        question: "Nếu chỉ chơi eSports 1080p, nhận định nào hợp lý hơn?",
        options: [
            "Luôn cần RTX 4090",
            "Nên mua GPU vừa đủ và cân bằng CPU, RAM, màn hình, SSD",
            "Không cần màn hình",
            "Chỉ cần VRAM 24GB",
        ],
        correct: 1,
        explanation:
            "eSports 1080p thường cần FPS ổn định và hệ thống cân bằng; GPU cực cao cấp có thể lãng phí.",
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
                    <strong className="text-purple-400">
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
                <span className="text-purple-400">
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
                        className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl transition-colors"
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
                Bạn đã hiểu GPU cho gaming, AI/ML và render khác nhau như thế
                nào. Tiếp theo là Ray Tracing, DLSS, FSR — những công nghệ làm
                trải nghiệm game thực tế khác rất nhiều dù FPS gốc có thể gần
                nhau.
            </p>
            <Link
                to="/phan-5-7"
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-purple-500/20"
            >
                Bài tiếp theo: 5.7 — Ray Tracing, DLSS, FSR{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "purple" }) {
    const colorMap = {
        purple: "bg-purple-500/20 text-purple-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/20 text-amber-300",
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
            className={`rounded-2xl border p-4 ${highlight ? "bg-purple-500/10 border-purple-400/50" : softBorder(color)}`}
        >
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
function RuleCard({ label, value, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-5`}>
            <p className={`${textColor(color)} font-bold text-sm mb-1`}>
                {label}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
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
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.purple;
}
function softBorder(color) {
    const map = {
        purple: "bg-purple-500/5 border-purple-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.purple;
}
function textColor(color) {
    const map = {
        purple: "text-purple-300",
        cyan: "text-cyan-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        blue: "text-blue-300",
        emerald: "text-emerald-300",
        yellow: "text-yellow-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-purple-300";
}
