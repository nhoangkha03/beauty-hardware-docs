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
    Laptop,
    Layers3,
    Lightbulb,
    Monitor,
    PackageCheck,
    Palette,
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
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-violet-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-violet-500/10 border border-violet-400/30 flex items-center justify-center shadow-lg shadow-violet-500/10">
                            <Sparkles className="text-violet-400" size={24} />
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
                    <div className="text-sm font-semibold text-violet-300 bg-violet-400/10 px-3 py-1 rounded-full border border-violet-400/20">
                        Bài 5.1
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <CompanyAnalogy />
                <RenderPipelineSimulator />
                <CpuGpuComparison />
                <SpecsExplorer />
                <GpuTypeExplorer />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-violet-300">
                        <BookOpen size={16} /> Phần 5: GPU — Bộ xử lý đồ họa
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        GPU là gì?
                        <span className="block text-violet-400">
                            So sánh GPU và CPU
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        CPU điều phối tác vụ chung, còn GPU chuyên xử lý hình
                        ảnh, video, 3D, game, render và tính toán song song. Một
                        máy mạnh cần CPU và GPU cân bằng.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<Cpu size={16} />} text="CPU điều phối" />
                        <Tag icon={<Sparkles size={16} />} text="GPU vẽ hình" />
                        <Tag icon={<Gamepad2 size={16} />} text="FPS" />
                        <Tag icon={<Database size={16} />} text="VRAM" />
                        <Tag icon={<Thermometer size={16} />} text="TDP" />
                    </div>
                </div>

                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Cpu />}
                            label="CPU"
                            desc="Ít nhân mạnh, giỏi logic tuần tự"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<Sparkles />}
                            label="GPU"
                            desc="Rất nhiều nhân nhỏ, xử lý song song"
                            color="violet"
                            highlight
                        />
                        <HeroTile
                            icon={<Gamepad2 />}
                            label="Game/FPS"
                            desc="GPU vẽ từng khung hình"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<Film />}
                            label="Render/AI"
                            desc="Tận dụng tính toán song song"
                            color="orange"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">// Dễ nhớ</p>
                        <p>CPU = bộ não điều phối chung</p>
                        <p className="text-violet-300">
                            GPU = bộ máy vẽ hình + xử lý song song
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu GPU là Graphics Processing Unit và vai trò chính trong hình ảnh, video, 3D, game, render, AI.",
        "Phân biệt CPU và GPU theo cách xử lý: tuần tự/phức tạp so với song song/lặp lại.",
        "Nắm luồng xử lý khi chơi game: game → CPU logic → GPU dựng hình → màn hình hiển thị.",
        "Đọc các thông số GPU cơ bản: VRAM, CUDA/Stream/Xe cores, clock, TDP, bus width, bandwidth.",
        "Tránh sai lầm khi mua máy: chỉ nhìn CPU, chỉ nhìn VRAM, quên nguồn/case/cổng cấp nguồn.",
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
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="cyan"
                title="Khái niệm cốt lõi: GPU là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">GPU</strong> là viết
                            tắt của{" "}
                            <strong className="text-cyan-300">
                                Graphics Processing Unit
                            </strong>
                            , nghĩa là{" "}
                            <strong className="text-white">
                                bộ xử lý đồ họa
                            </strong>
                            .
                        </p>
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 text-sm">
                            <strong className="text-cyan-300">
                                Nói đơn giản:
                            </strong>{" "}
                            GPU là chip chuyên xử lý hình ảnh, video, hiệu ứng
                            3D, game, render và nhiều tác vụ tính toán song
                            song.
                        </div>
                        <p>
                            Khi chơi game, GPU tính màu sắc, ánh sáng, bóng đổ,
                            texture, chuyển động nhân vật, hiệu ứng cháy nổ rồi
                            gửi từng khung hình ra màn hình.
                        </p>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <Layers3 className="text-cyan-300" /> CPU và GPU
                            phối hợp
                        </h3>
                        <div className="space-y-3">
                            <CompareCard
                                label="CPU"
                                role="Điều khiển hệ điều hành, logic game, lệnh điều khiển"
                                model="Ít nhân hơn nhưng mỗi nhân rất mạnh"
                                color="cyan"
                            />
                            <CompareCard
                                label="GPU"
                                role="Vẽ hình ảnh, render 3D, video, AI, ma trận"
                                model="Rất nhiều nhân nhỏ, xử lý song song tốt"
                                color="violet"
                            />
                            <CompareCard
                                label="Màn hình"
                                role="Hiển thị khung hình GPU xuất ra"
                                model="FPS càng cao, chuyển động càng mượt"
                                color="emerald"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CompanyAnalogy() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: công ty có giám đốc và đội công nhân"
                icon={<Lightbulb />}
            />
            <div className="grid md:grid-cols-3 gap-4">
                <AnalogyCard
                    icon={<Cpu />}
                    title="CPU = giám đốc điều hành"
                    desc="Ít người nhưng rất giỏi xử lý việc phức tạp, điều phối chung và ra quyết định."
                    color="cyan"
                />
                <AnalogyCard
                    icon={<Sparkles />}
                    title="GPU = đội công nhân cực đông"
                    desc="Hàng nghìn người làm nhiều việc nhỏ giống nhau cùng lúc, rất hợp vẽ pixel, ánh sáng, ma trận."
                    color="violet"
                />
                <AnalogyCard
                    icon={<Monitor />}
                    title="Màn hình = bảng trình chiếu"
                    desc="Nhận khung hình từ GPU và hiển thị cho bạn thấy game, video, giao diện."
                    color="emerald"
                />
            </div>
        </section>
    );
}

function RenderPipelineSimulator() {
    const steps = [
        {
            icon: <Gamepad2 />,
            title: "Game / phần mềm 3D chạy",
            desc: "Engine chuẩn bị cảnh, nhân vật, vật thể, texture, ánh sáng và yêu cầu người chơi.",
        },
        {
            icon: <Cpu />,
            title: "CPU xử lý logic",
            desc: "CPU xử lý lệnh điều khiển, vật lý, AI, trạng thái nhân vật, dữ liệu game.",
        },
        {
            icon: <Workflow />,
            title: "CPU gửi dữ liệu hình ảnh cho GPU",
            desc: "Dữ liệu cần vẽ được gửi sang GPU qua hệ thống và driver.",
        },
        {
            icon: <Sparkles />,
            title: "GPU dựng hình",
            desc: "GPU xử lý mô hình 3D, texture, màu sắc, ánh sáng, bóng đổ, hiệu ứng.",
        },
        {
            icon: <Video />,
            title: "GPU xuất khung hình",
            desc: "GPU hoàn thành từng frame. FPS là số khung hình xuất được mỗi giây.",
        },
        {
            icon: <Monitor />,
            title: "Màn hình hiển thị",
            desc: "Màn hình nhận tín hiệu qua HDMI/DisplayPort/USB-C và hiển thị hình ảnh.",
        },
    ];
    const [active, setActive] = useState(0);
    const step = steps[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="GPU xử lý hình ảnh như thế nào?"
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
                <div className="mt-6 bg-violet-500/10 border border-violet-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Bạn bấm chuột → CPU xử lý lệnh bắn → game tính trúng/không →
                    GPU vẽ tia lửa, khói, nhân vật, cảnh vật → màn hình hiển thị
                    frame mới
                </div>
            </div>
        </section>
    );
}

function CpuGpuComparison() {
    const rows = [
        ["Tên đầy đủ", "Central Processing Unit", "Graphics Processing Unit"],
        [
            "Vai trò chính",
            "Điều khiển và xử lý tác vụ chung",
            "Xử lý hình ảnh, đồ họa, video, 3D, AI",
        ],
        [
            "Cách xử lý",
            "Ít nhân hơn nhưng mỗi nhân mạnh",
            "Rất nhiều nhân nhỏ, song song tốt",
        ],
        [
            "Giỏi việc gì?",
            "OS, app, logic, xử lý tuần tự",
            "Game, render, video, AI, ma trận",
        ],
        [
            "Ví dụ tác vụ",
            "Chrome, Windows, Excel, nén file",
            "Game, Blender, xuất video, AI local",
        ],
        [
            "Có bắt buộc không?",
            "Có, máy cần CPU",
            "Có thể là GPU tích hợp hoặc GPU rời",
        ],
        [
            "Nâng cấp",
            "Desktop nâng được, laptop thường không",
            "Desktop nâng được nếu GPU rời, laptop thường không",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="So sánh GPU và CPU"
                icon={<Layers3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 overflow-x-auto">
                <table className="w-full min-w-[860px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-400">
                            <th className="p-4">Tiêu chí</th>
                            <th className="p-4 text-cyan-300">CPU</th>
                            <th className="p-4 text-violet-300">GPU</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([k, cpu, gpu]) => (
                            <tr key={k} className="border-t border-slate-800">
                                <td className="p-4 text-white font-bold">
                                    {k}
                                </td>
                                <td className="p-4 text-slate-300">{cpu}</td>
                                <td className="p-4 text-slate-300">{gpu}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm text-slate-300">
                <strong className="text-blue-300">Kết luận:</strong> CPU không
                thay thế hoàn toàn GPU, và GPU cũng không thay thế hoàn toàn
                CPU. Một máy tính mạnh cần CPU và GPU cân bằng.
            </div>
        </section>
    );
}

function SpecsExplorer() {
    const specs = {
        vram: {
            icon: <Database />,
            title: "VRAM",
            detail: "Bộ nhớ riêng của GPU để lưu texture, mô hình 3D, frame buffer và dữ liệu đồ họa.",
            impact: "eSports nhẹ có thể 4–6GB; game AAA 1080p/1440p nên 8–12GB; render/AI/3D càng nhiều càng tốt.",
        },
        cores: {
            icon: <Puzzle />,
            title: "CUDA / Stream / Xe Cores",
            detail: "Các nhân xử lý nhỏ bên trong GPU. NVIDIA gọi CUDA Cores, AMD gọi Stream Processors, Intel Arc dùng Xe Cores.",
            impact: "Nhiều nhân thường tốt hơn trong cùng kiến trúc, nhưng không nên so số nhân trực tiếp giữa các hãng khác nhau.",
        },
        clock: {
            icon: <Gauge />,
            title: "Clock Speed",
            detail: "Xung nhịp GPU, thường tính MHz hoặc GHz.",
            impact: "Xung cao không tự động mạnh hơn nếu kiến trúc, số nhân, VRAM và bandwidth khác nhau.",
        },
        tdp: {
            icon: <Thermometer />,
            title: "TDP / Công suất",
            detail: "Cho biết GPU tiêu thụ và tỏa nhiệt khoảng bao nhiêu watt.",
            impact: "GPU mạnh hơn thường ăn điện/nóng hơn, cần nguồn tốt, case thoáng và cổng cấp nguồn phù hợp.",
        },
        bus: {
            icon: <Workflow />,
            title: "Bus Width",
            detail: "Độ rộng đường truyền dữ liệu giữa GPU và VRAM.",
            impact: "Giống độ rộng con đường. Độ phân giải cao và texture nặng thường cần bus/bandwidth tốt.",
        },
        bandwidth: {
            icon: <Zap />,
            title: "Bandwidth",
            detail: "Băng thông bộ nhớ: lượng dữ liệu truyền giữa GPU và VRAM mỗi giây.",
            impact: "Game độ phân giải cao, render lớn và texture nặng cần bandwidth cao.",
        },
    };
    const [active, setActive] = useState("vram");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="yellow"
                title="Thông số kỹ thuật quan trọng của GPU"
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

function GpuTypeExplorer() {
    const types = {
        igpu: {
            icon: <Cpu />,
            title: "GPU tích hợp",
            desc: "Nằm trong CPU hoặc SoC, dùng RAM hệ thống làm bộ nhớ đồ họa.",
            good: "Tiết kiệm điện, đủ văn phòng/học tập/xem phim",
            bad: "Yếu hơn GPU rời trong game/render/AI nặng",
            fit: "Ryzen 5 5600G, Intel Core non-F, laptop mỏng",
            color: "cyan",
        },
        dgpu: {
            icon: <Sparkles />,
            title: "GPU rời desktop",
            desc: "Card đồ họa cắm PCIe, có VRAM riêng và tản riêng.",
            good: "Mạnh cho game, render, AI, dựng video",
            bad: "Cần nguồn, case, tản, cổng cấp điện",
            fit: "RTX 4060, RTX 4070, RX 7600, RX 7800 XT",
            color: "violet",
        },
        mobile: {
            icon: <Laptop />,
            title: "GPU laptop",
            desc: "GPU rời hoặc tích hợp trong laptop, bị giới hạn bởi tản nhiệt/công suất.",
            good: "Di động, có thể chơi game/làm đồ họa",
            bad: "Khó nâng cấp, cùng tên GPU nhưng watt khác nhau hiệu năng khác",
            fit: "Laptop gaming, workstation mobile",
            color: "emerald",
        },
        workstation: {
            icon: <Film />,
            title: "GPU workstation/AI",
            desc: "Tối ưu driver, VRAM lớn hoặc tính ổn định cho phần mềm chuyên nghiệp.",
            good: "Hợp 3D, CAD, AI, tính toán nặng",
            bad: "Giá cao, không phải ai cũng cần",
            fit: "Render, Blender, AI local, mô phỏng",
            color: "orange",
        },
    };
    const [active, setActive] = useState("igpu");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="emerald"
                title="GPU tích hợp và GPU rời"
                icon={<PackageCheck />}
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
                        <p
                            className={`${textColor(item.color)} font-semibold leading-relaxed`}
                        >
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
                            label="Ví dụ / phù hợp"
                            value={item.fit}
                            color="blue"
                        />
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
            title: "Máy văn phòng không cần GPU rời",
            subtitle: "CPU có GPU tích hợp",
            color: "cyan",
            points: [
                "AMD Ryzen 5 5600G có Radeon Graphics tích hợp",
                "6 nhân, 12 luồng",
                "Hợp Word, Excel, Chrome, Zoom, YouTube",
                "Lập trình nhẹ, học online, game eSports nhẹ",
                "Không nhất thiết cần card đồ họa rời",
            ],
            lesson: "Nếu chỉ học tập/văn phòng/xem phim, CPU có GPU tích hợp thường đủ và tiết kiệm chi phí.",
        },
        {
            icon: <Gamepad2 />,
            title: "Máy chơi game 1080p",
            subtitle: "Nên có GPU rời",
            color: "violet",
            points: [
                "NVIDIA GeForce RTX 4060 là GPU rời phổ thông/trung cấp",
                "Hướng đến game 1080p",
                "Hỗ trợ Ray Tracing và DLSS",
                "Cần nguồn/case/cổng cấp nguồn phù hợp",
                "FPS cao hơn GPU tích hợp rất nhiều",
            ],
            lesson: "Game cần GPU đủ mạnh; CPU mạnh nhưng GPU yếu vẫn có thể FPS thấp.",
        },
        {
            icon: <AlertTriangle />,
            title: "CPU mạnh nhưng thiếu GPU",
            subtitle: "Intel Core i5-14400F",
            color: "orange",
            points: [
                "Bản F của Intel thường không có GPU tích hợp",
                "Cần card đồ họa rời để xuất hình",
                "CPU 10 nhân 16 luồng vẫn không làm PC hoàn chỉnh nếu thiếu GPU",
                "Người mới dễ mua nhầm CPU F mà không mua card",
                "Mainboard không tự tạo hình ảnh nếu CPU không có iGPU và không có GPU rời",
            ],
            lesson: "Khi mua Intel, để ý chữ F. Bản F thường cần GPU rời.",
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
        office: {
            icon: <Monitor />,
            title: "Văn phòng / học tập",
            answer: "Chọn CPU có GPU tích hợp là đủ. Không cần GPU rời nếu chỉ Word, Excel, Chrome, Zoom, YouTube, học online.",
            color: "cyan",
        },
        gaming: {
            icon: <Gamepad2 />,
            title: "Gaming 1080p",
            answer: "Nên có GPU rời. GPU quyết định FPS và chất lượng hình ảnh nhiều hơn so với chỉ nâng CPU quá cao.",
            color: "violet",
        },
        editing: {
            icon: <Video />,
            title: "Dựng video",
            answer: "GPU rời giúp preview, effects, encode/decode và render tùy phần mềm. Cũng cần CPU, RAM và SSD đủ mạnh.",
            color: "emerald",
        },
        ai: {
            icon: <Brain />,
            title: "AI local",
            answer: "Ưu tiên GPU rời có VRAM đủ lớn. VRAM thiếu thì mô hình AI có thể không chạy hoặc phải chạy chậm trên CPU/RAM.",
            color: "orange",
        },
        intelF: {
            icon: <AlertTriangle />,
            title: "CPU Intel có chữ F",
            answer: "Bản F thường không có GPU tích hợp. Nếu không mua card đồ họa rời, máy có thể không xuất hình.",
            color: "red",
        },
    };
    const [active, setActive] = useState("gaming");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Lab: có cần GPU rời không?"
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
            wrong: "CPU mạnh là chơi game chắc chắn mượt",
            right: "Game cần cả CPU và GPU. CPU xử lý logic game, GPU xử lý hình ảnh. CPU mạnh + GPU yếu vẫn có thể FPS thấp.",
        },
        {
            wrong: "GPU chỉ dùng để chơi game",
            right: "GPU còn dùng cho dựng video, render 3D, thiết kế, AI, livestream và mô phỏng kỹ thuật.",
        },
        {
            wrong: "VRAM càng nhiều thì GPU càng mạnh",
            right: "VRAM nhiều là tốt nhưng không đủ. Cần xem kiến trúc, số nhân, xung, bandwidth, công suất, driver và hiệu năng thực tế.",
        },
        {
            wrong: "GPU nào cắm cũng được",
            right: "Cần kiểm tra nguồn máy, công suất, cổng cấp nguồn PCIe, kích thước card và độ thoáng case.",
        },
        {
            wrong: "Laptop có cùng tên GPU là hiệu năng giống desktop",
            right: "GPU laptop bị giới hạn bởi tản nhiệt và công suất. Cùng tên GPU nhưng watt khác nhau có thể hiệu năng khác đáng kể.",
        },
    ];
    const tips = [
        "Học tập, văn phòng, xem phim: CPU có GPU tích hợp thường đủ.",
        "Chơi game/dựng video: nên đầu tư GPU rời trước khi nâng CPU quá cao.",
        "Mua CPU Intel: để ý chữ F vì thường không có GPU tích hợp.",
        "Mua GPU rời: kiểm tra nguồn, kích thước case, cổng cấp nguồn PCIe và cổng xuất hình.",
        "Không chỉ nhìn VRAM; xem benchmark trong game/phần mềm bạn dùng.",
        "AI local/render 3D nặng: VRAM và hiệu năng thực tế rất quan trọng.",
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
                        <span className="bg-violet-500/20 text-violet-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-violet-300 border border-slate-800 shadow-inner space-y-2">
                            <p>GPU = Graphics Processing Unit</p>
                            <p className="text-slate-300">= bộ xử lý đồ họa</p>
                            <br />
                            <p className="text-slate-500"># CPU vs GPU</p>
                            <p className="text-slate-300">
                                CPU = bộ não điều phối chung
                            </p>
                            <p className="text-slate-300">
                                GPU = bộ máy vẽ hình và xử lý song song
                            </p>
                            <br />
                            <p className="text-slate-500">
                                # GPU quan trọng cho
                            </p>
                            <p className="text-slate-300">
                                Game • render • video • AI • 3D • livestream
                            </p>
                            <br />
                            <p className="text-red-300">
                                CPU mạnh không thay thế GPU mạnh trong game/đồ
                                họa.
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
        question: "GPU chủ yếu dùng để làm gì?",
        options: [
            "Lưu trữ dữ liệu lâu dài",
            "Xử lý đồ họa, hình ảnh, video và tính toán song song",
            "Cấp điện cho máy tính",
            "Kết nối mạng Internet",
        ],
        correct: 1,
        explanation:
            "GPU chuyên xử lý đồ họa, hình ảnh, video, 3D, game, render và nhiều tác vụ song song.",
    },
    {
        question: "CPU và GPU khác nhau chủ yếu ở điểm nào?",
        options: [
            "CPU xử lý tuần tự và điều phối chung tốt, GPU xử lý song song tốt",
            "GPU luôn thay thế được CPU",
            "CPU chỉ dùng để chơi game",
            "GPU chỉ dùng để mở Word, Excel",
        ],
        correct: 0,
        explanation:
            "CPU giỏi logic, điều phối, tác vụ tuần tự; GPU có rất nhiều nhân nhỏ để xử lý song song.",
    },
    {
        question: "Intel Core i5-14400F có điểm gì cần lưu ý?",
        options: [
            "Có GPU tích hợp rất mạnh",
            "Không cần mainboard",
            "Thường cần GPU rời vì bản F không có đồ họa tích hợp",
            "Là card màn hình rời",
        ],
        correct: 2,
        explanation:
            "Chữ F trong tên CPU Intel thường cho biết mẫu này không có GPU tích hợp, nên cần GPU rời để xuất hình.",
    },
    {
        question: "VRAM là gì?",
        options: [
            "Bộ nhớ riêng của GPU",
            "Ổ cứng ngoài",
            "Dung lượng RAM của router",
            "Cổng cấp điện cho CPU",
        ],
        correct: 0,
        explanation:
            "VRAM là bộ nhớ đồ họa riêng của GPU, dùng để lưu texture, mô hình, frame buffer và dữ liệu đồ họa.",
    },
    {
        question: "Khi mua GPU rời, cần kiểm tra gì?",
        options: [
            "Nguồn, kích thước case, cổng cấp nguồn và cổng xuất hình",
            "Chỉ màu RGB",
            "Chỉ trọng lượng card",
            "Không cần kiểm tra gì",
        ],
        correct: 0,
        explanation:
            "GPU rời cần nguồn đủ công suất, case đủ chỗ, đúng cổng cấp nguồn PCIe và cổng xuất hình phù hợp màn hình.",
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
                Bạn đã hiểu GPU là gì và khác CPU như thế nào. Tiếp theo là kiến
                trúc GPU: shader cores, VRAM và bus width — phần giúp giải thích
                vì sao hai GPU cùng 8GB VRAM vẫn có thể chênh hiệu năng rất lớn.
            </p>
            <Link
                to="/phan-5-2"
                className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-violet-500/20"
            >
                Bài tiếp theo: 5.2 — Kiến trúc GPU: Shader cores, VRAM, Bus
                width <ChevronRight size={20} />
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-violet-500/10 border-violet-400/50" : softBorder(color)}`}
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
function CompareCard({ label, role, model, color }) {
    return (
        <div className={`${softBorder(color)} border rounded-2xl p-4`}>
            <p className={`${textColor(color)} font-extrabold`}>{label}</p>
            <p className="text-sm text-slate-300 mt-1">{role}</p>
            <p className="text-xs text-slate-500 mt-1">{model}</p>
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
