import React, { useState } from "react";
import {
    AlertTriangle,
    Award,
    BookOpen,
    Brain,
    Camera,
    CheckCircle2,
    ChevronRight,
    ClipboardList,
    FileImage,
    FileSearch,
    Gauge,
    Image,
    Layers3,
    Lightbulb,
    Monitor,
    PackageCheck,
    Paperclip,
    Printer,
    Radio,
    ScanLine,
    Search,
    Settings,
    ShieldCheck,
    Sparkles,
    Usb,
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
                            <ScanLine className="text-sky-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Phần Cứng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 10: Thiết bị nhập liệu
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-sky-300 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20">
                        Bài 10.4
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <CoreConcept />
                <CopyCameraAnalogy />
                <CaptureFlowSimulator />
                <ScannerTypeExplorer />
                <WebcamTypeExplorer />
                <ScannerSpecsExplorer />
                <WebcamSpecsExplorer />
                <LightingAndAudioGuide />
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
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-sky-300">
                        <BookOpen size={16} /> Phần 10: Image Input
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Máy quét và Webcam
                        <span className="block text-sky-400">
                            đưa hình ảnh vào máy tính
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Scanner biến giấy tờ, ảnh in, hóa đơn thành file số.
                        Webcam đưa hình ảnh video trực tiếp vào máy tính cho họp
                        online, học trực tuyến, livestream và nhận diện khuôn
                        mặt.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Tag icon={<ScanLine size={16} />} text="Scanner" />
                        <Tag icon={<Camera size={16} />} text="Webcam" />
                        <Tag icon={<FileSearch size={16} />} text="OCR" />
                        <Tag icon={<Gauge size={16} />} text="DPI / FPS" />
                        <Tag icon={<Video size={16} />} text="1080p / 4K" />
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroTile
                            icon={<Printer />}
                            label="Scanner"
                            desc="Giấy → file"
                            color="sky"
                            highlight
                        />
                        <HeroTile
                            icon={<Camera />}
                            label="Webcam"
                            desc="Video trực tiếp"
                            color="cyan"
                        />
                        <HeroTile
                            icon={<FileSearch />}
                            label="OCR"
                            desc="Ảnh chữ → text"
                            color="emerald"
                        />
                        <HeroTile
                            icon={<Sparkles />}
                            label="Lighting"
                            desc="Ảnh đẹp hơn"
                            color="amber"
                        />
                    </div>
                    <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
                        <p className="text-slate-500">
                            // Hai luồng nhập hình ảnh
                        </p>
                        <p>Giấy → Scanner → PDF/JPG/PNG</p>
                        <p className="text-sky-300">
                            Khuôn mặt → Webcam → Video call/OBS
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu scanner dùng để số hóa tài liệu, ảnh, hóa đơn, sách hoặc thẻ thành file PDF/JPG/PNG.",
        "Hiểu webcam dùng để thu hình ảnh/video trực tiếp cho họp online, học online, livestream và quay video.",
        "Nắm cơ chế scanner: chiếu sáng tài liệu, cảm biến đọc hình ảnh phản xạ, xử lý thành dữ liệu số và lưu file.",
        "Nắm cơ chế webcam: ánh sáng đi qua ống kính, cảm biến CMOS ghi hình, bộ xử lý tạo video và gửi qua USB/tích hợp.",
        "Đọc được thông số quan trọng: DPI, scan speed, color depth, ADF, duplex, OCR, resolution, FPS, sensor, lens, FOV, focus, microphone và privacy shutter.",
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
                {goals.map((goal, i) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-sky-500/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-300 flex items-center justify-center font-bold mb-4">
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
            icon: <Printer />,
            title: "Scanner",
            desc: "Số hóa giấy tờ, ảnh in, hóa đơn, sách, thẻ thành file máy tính.",
            color: "sky",
        },
        {
            icon: <Camera />,
            title: "Webcam",
            desc: "Thu video trực tiếp cho họp, học, stream, quay bài giảng và nhận diện khuôn mặt.",
            color: "cyan",
        },
        {
            icon: <FileSearch />,
            title: "OCR",
            desc: "Nhận dạng ký tự quang học, biến ảnh chữ thành văn bản có thể tìm kiếm/copy.",
            color: "emerald",
        },
        {
            icon: <Sparkles />,
            title: "Ánh sáng",
            desc: "Webcam đẹp hay xấu phụ thuộc rất lớn vào ánh sáng phòng và hướng chiếu sáng.",
            color: "amber",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Scanner và Webcam là gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    <strong className="text-white">Scanner</strong> là thiết bị
                    đưa tài liệu/hình ảnh tĩnh từ thế giới thật vào máy tính.{" "}
                    <strong className="text-white">Webcam</strong> là camera đưa
                    hình ảnh/video trực tiếp vào máy tính. Cả hai đều là thiết
                    bị nhập liệu hình ảnh, nhưng scanner tối ưu cho tài liệu
                    tĩnh, còn webcam tối ưu cho video thời gian thực.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {cards.map((c) => (
                        <RoleCard key={c.title} {...c} />
                    ))}
                </div>
                <div className="mt-6 bg-sky-500/10 border border-sky-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                    Scanner: giấy thật → file số
                    <br />
                    Webcam: khuôn mặt/vật thể → video trực tiếp
                </div>
            </div>
        </section>
    );
}

function CopyCameraAnalogy() {
    const cards = [
        {
            icon: <Printer />,
            title: "Scanner = máy photocopy ngược",
            desc: "Thay vì in giấy ra, nó đưa giấy vào máy tính.",
            color: "sky",
        },
        {
            icon: <Camera />,
            title: "Webcam = camera nhỏ",
            desc: "Ghi hình trực tiếp khuôn mặt hoặc vật thể trước máy.",
            color: "cyan",
        },
        {
            icon: <FileImage />,
            title: "File scan = bản số hóa",
            desc: "PDF/JPG/PNG có thể lưu, gửi email, nộp hồ sơ.",
            color: "emerald",
        },
        {
            icon: <Video />,
            title: "Video call = truyền hình trực tiếp",
            desc: "Hình ảnh cập nhật liên tục theo thời gian thực.",
            color: "purple",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="amber"
                title="Ví dụ đời thường: máy photocopy và camera nhỏ"
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

function CaptureFlowSimulator() {
    const flows = {
        scanner: {
            title: "Scanner quét tài liệu",
            color: "sky",
            steps: [
                {
                    icon: <ClipboardList />,
                    title: "Đặt tài liệu",
                    desc: "Bạn đặt hợp đồng, hóa đơn, ảnh hoặc giấy tờ lên scanner.",
                },
                {
                    icon: <Sparkles />,
                    title: "Đèn chiếu sáng",
                    desc: "Scanner chiếu ánh sáng lên bề mặt tài liệu.",
                },
                {
                    icon: <ScanLine />,
                    title: "Cảm biến đọc từng dòng",
                    desc: "Cảm biến ghi lại hình ảnh phản xạ từ giấy.",
                },
                {
                    icon: <Settings />,
                    title: "Bộ xử lý tạo dữ liệu số",
                    desc: "Hình ảnh được chuyển thành dữ liệu số.",
                },
                {
                    icon: <FileImage />,
                    title: "Lưu file",
                    desc: "Máy tính lưu thành PDF, JPG hoặc PNG.",
                },
            ],
        },
        ocr: {
            title: "Scanner + OCR",
            color: "emerald",
            steps: [
                {
                    icon: <ScanLine />,
                    title: "Scan trang chữ",
                    desc: "Máy quét tạo ảnh của tài liệu giấy.",
                },
                {
                    icon: <FileSearch />,
                    title: "OCR phân tích chữ",
                    desc: "Phần mềm nhận dạng ký tự trong ảnh scan.",
                },
                {
                    icon: <Search />,
                    title: "Tạo PDF tìm kiếm được",
                    desc: "Bạn có thể tìm từ khóa như “thanh toán” trong hợp đồng.",
                },
                {
                    icon: <CheckCircle2 />,
                    title: "Copy/chỉnh sửa dễ hơn",
                    desc: "Văn bản scan không còn chỉ là ảnh phẳng.",
                },
            ],
        },
        webcam: {
            title: "Webcam thu video",
            color: "cyan",
            steps: [
                {
                    icon: <Sparkles />,
                    title: "Ánh sáng chiếu vào mặt",
                    desc: "Nguồn sáng trước mặt giúp webcam ghi hình sạch hơn.",
                },
                {
                    icon: <Camera />,
                    title: "Ống kính thu ánh sáng",
                    desc: "Ánh sáng đi qua lens vào cảm biến.",
                },
                {
                    icon: <Image />,
                    title: "Cảm biến CMOS ghi hình",
                    desc: "Cảm biến chuyển ánh sáng thành tín hiệu hình ảnh.",
                },
                {
                    icon: <Video />,
                    title: "Bộ xử lý tạo video",
                    desc: "Webcam xử lý màu, sáng, nhiễu và khung hình.",
                },
                {
                    icon: <Usb />,
                    title: "Gửi tới phần mềm",
                    desc: "Zoom, Google Meet, Teams hoặc OBS hiển thị video.",
                },
            ],
        },
    };
    const [mode, setMode] = useState("scanner");
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
                title="Scanner và Webcam hoạt động thế nào?"
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

function ScannerTypeExplorer() {
    const types = {
        flatbed: {
            icon: <Printer />,
            title: "Flatbed",
            color: "sky",
            desc: "Đặt giấy lên mặt kính như máy photocopy.",
            good: [
                "Quét ảnh/tài liệu đẹp",
                "Ít làm hỏng giấy",
                "Hợp giấy tờ quan trọng",
            ],
            bad: ["To", "Chậm hơn máy nạp giấy"],
            fit: "Ảnh, giấy tờ quan trọng, sách mỏng",
        },
        sheet: {
            icon: <Paperclip />,
            title: "Sheet-fed",
            color: "cyan",
            desc: "Nạp giấy qua khe, máy kéo giấy đi qua cảm biến.",
            good: ["Nhanh", "Gọn", "Quét nhiều trang tiện"],
            bad: ["Không hợp sách/giấy dễ hỏng"],
            fit: "Văn phòng, hóa đơn, hợp đồng",
        },
        portable: {
            icon: <Usb />,
            title: "Portable",
            color: "emerald",
            desc: "Scanner nhỏ, di động, thường dùng nguồn USB.",
            good: ["Gọn", "Dễ mang theo", "Hợp scan hóa đơn khi đi công tác"],
            bad: ["Tốc độ và khả năng quét hạn chế hơn"],
            fit: "Nhân viên di chuyển, kế toán, scan hóa đơn",
        },
        adf: {
            icon: <ClipboardList />,
            title: "ADF",
            color: "orange",
            desc: "Automatic Document Feeder – khay nạp tài liệu tự động.",
            good: [
                "Quét hàng chục trang liên tục",
                "Tiết kiệm thời gian",
                "Hợp tài liệu nhiều trang",
            ],
            bad: ["Giá cao hơn", "Không hợp giấy quá mỏng/rách"],
            fit: "Văn phòng, kế toán, hành chính",
        },
        photo: {
            icon: <Image />,
            title: "Photo Scanner",
            color: "purple",
            desc: "Tối ưu cho ảnh in, màu sắc và độ phân giải cao.",
            good: ["Màu tốt", "Độ phân giải cao", "Hợp lưu ảnh cũ"],
            bad: ["Chậm", "Giá cao"],
            fit: "Lưu trữ ảnh gia đình, nhiếp ảnh",
        },
        threeD: {
            icon: <Layers3 />,
            title: "3D Scanner",
            color: "red",
            desc: "Quét hình dạng vật thể ba chiều.",
            good: ["Tạo mô hình 3D", "Hợp kỹ thuật/công nghiệp"],
            bad: ["Đắt", "Chuyên dụng"],
            fit: "Thiết kế, in 3D, công nghiệp",
        },
    };
    const [active, setActive] = useState("flatbed");
    const item = types[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="sky"
                title="Các loại máy quét phổ biến"
                icon={<Search />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
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
                            <p className="text-xs opacity-75 mt-1">{t.desc}</p>
                        </button>
                    ))}
                </div>
                <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`w-16 h-16 rounded-2xl ${badgeColor(item.color)} flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mb-3">
                            {item.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            {item.desc}
                        </p>
                        <p className="text-sm text-slate-400">
                            <strong className="text-white">Phù hợp:</strong>{" "}
                            {item.fit}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div
                            className={`${softBorder(item.color)} border rounded-3xl p-5`}
                        >
                            <p
                                className={`${textColor(item.color)} font-bold mb-3`}
                            >
                                Ưu điểm
                            </p>
                            <div className="space-y-2">
                                {item.good.map((g) => (
                                    <Bullet key={g} text={g} />
                                ))}
                            </div>
                        </div>
                        <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-5">
                            <p className="text-red-300 font-bold mb-3">
                                Nhược điểm
                            </p>
                            <div className="space-y-2">
                                {item.bad.map((b) => (
                                    <WarnBullet key={b} text={b} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WebcamTypeExplorer() {
    const rows = [
        [
            "Webcam tích hợp laptop",
            "Gắn sẵn trên laptop",
            "Tiện, không cần mua thêm",
            "Họp/học cơ bản",
        ],
        [
            "Webcam USB rời",
            "Cắm ngoài qua USB",
            "Dễ nâng cấp, hình đẹp hơn laptop",
            "Họp, học, livestream",
        ],
        [
            "Webcam 4K",
            "Độ phân giải cao",
            "Sắc nét, crop/zoom tốt",
            "Content, họp cao cấp",
        ],
        [
            "Streaming Webcam",
            "Tối ưu 60fps, chỉnh tay, OBS",
            "Mượt, màu tốt",
            "Streamer, creator",
        ],
        [
            "Conference Camera",
            "Góc rộng, mic tốt, tự căn khung",
            "Hợp nhiều người",
            "Doanh nghiệp, phòng họp",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="cyan"
                title="Các loại webcam phổ biến"
                icon={<Camera />}
            />
            <DataTable
                title="Webcam nào hợp nhu cầu nào?"
                rows={rows}
                headers={["Loại webcam", "Đặc điểm", "Ưu điểm", "Phù hợp"]}
                accent="cyan"
            />
        </section>
    );
}

function ScannerSpecsExplorer() {
    const specs = {
        dpi: {
            icon: <Gauge />,
            title: "DPI",
            detail: "Dots Per Inch – số điểm ảnh scanner ghi lại trên mỗi inch.",
            impact: "Văn bản/hợp đồng thường 300 DPI là đủ; ảnh in nên 600 DPI trở lên; ảnh cũ lưu trữ kỹ có thể 1200 DPI+. DPI quá cao làm file nặng và quét lâu.",
        },
        speed: {
            icon: <Zap />,
            title: "Scan Speed",
            detail: "Tốc độ quét thường tính bằng ppm, ipm hoặc seconds/page.",
            impact: "Nếu scan vài tờ/tháng, tốc độ không quá quan trọng. Nếu scan nhiều trang mỗi ngày, tốc độ + ADF rất đáng tiền.",
        },
        color: {
            icon: <Sparkles />,
            title: "Color Depth",
            detail: "Độ sâu màu cho biết scanner ghi màu chi tiết đến đâu, thường 24-bit hoặc 48-bit.",
            impact: "Tài liệu thường không cần quá cao; ảnh gia đình cũ, ảnh film hoặc tài liệu màu quan trọng nên chú ý hơn.",
        },
        duplex: {
            icon: <Layers3 />,
            title: "Duplex Scan",
            detail: "Simplex là quét một mặt, duplex là quét hai mặt.",
            impact: "Hợp đồng, hóa đơn, tài liệu văn phòng nhiều trang nên ưu tiên ADF + duplex để tiết kiệm thời gian.",
        },
        ocr: {
            icon: <FileSearch />,
            title: "OCR",
            detail: "Optical Character Recognition – nhận dạng ký tự trong ảnh scan.",
            impact: "OCR giúp PDF scan có thể tìm kiếm/copy chữ, rất hữu ích cho kế toán, luật, hành chính, sinh viên.",
        },
    };
    const [active, setActive] = useState("dpi");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="yellow"
                title="Thông số kỹ thuật quan trọng của Scanner"
                icon={<Puzzle />}
            />
            <SpecPanel
                specs={specs}
                active={active}
                setActive={setActive}
                item={item}
            />
        </section>
    );
}

function WebcamSpecsExplorer() {
    const specs = {
        resolution: {
            icon: <Video />,
            title: "Resolution",
            detail: "720p, 1080p, 1440p, 4K cho biết độ phân giải video.",
            impact: "Đa số người dùng nên ưu tiên webcam 1080p tốt + ánh sáng tốt hơn webcam 4K rẻ trong phòng tối.",
        },
        fps: {
            icon: <Radio />,
            title: "FPS",
            detail: "Frames Per Second – số khung hình mỗi giây: 30fps đủ họp/học, 60fps mượt hơn cho stream.",
            impact: "Livestream, dạy online có thu video hoặc quay bài giảng thường nên cân nhắc 1080p60.",
        },
        sensor: {
            icon: <Camera />,
            title: "Sensor",
            detail: "Cảm biến hình ảnh ảnh hưởng nhiễu, màu sắc, dải sáng và khả năng xử lý phòng tối.",
            impact: "Sensor tốt có thể đẹp hơn webcam độ phân giải cao nhưng cảm biến kém.",
        },
        lens: {
            icon: <Search />,
            title: "Lens",
            detail: "Ống kính plastic rẻ hơn; glass lens thường trong và nét hơn. Wide-angle cho góc rộng hơn.",
            impact: "Góc quá rộng có thể làm méo mặt nếu ngồi quá gần.",
        },
        fov: {
            icon: <Monitor />,
            title: "FOV",
            detail: "Field of View – góc nhìn webcam: 60–70° cho một người, 78–90° họp cá nhân, 90°+ nhóm/phòng họp.",
            impact: "FOV hẹp ít thấy nền hơn; FOV rộng hợp nhóm nhưng dễ lộ phòng và méo hình.",
        },
        focus: {
            icon: <ScanLine />,
            title: "Autofocus / Fixed Focus",
            detail: "Autofocus tự lấy nét khi bạn di chuyển; fixed focus ổn định nếu ngồi cố định.",
            impact: "Autofocus tiện khi demo vật thể nhưng có thể săn nét; fixed focus tốt cho stream/họp cố định.",
        },
        mic: {
            icon: <Settings />,
            title: "Micro tích hợp",
            detail: "Mic webcam thường đủ dùng cơ bản nhưng không phải lựa chọn tốt nhất cho họp quan trọng hoặc livestream.",
            impact: "Hình đẹp nhưng âm thanh rè/vọng vẫn làm trải nghiệm rất tệ; cân nhắc tai nghe mic hoặc micro USB.",
        },
        privacy: {
            icon: <ShieldCheck />,
            title: "Privacy Shutter",
            detail: "Nắp che vật lý giúp tránh camera vô tình bật.",
            impact: "Nên có nếu bạn họp online thường xuyên hoặc quan tâm quyền riêng tư.",
        },
    };
    const [active, setActive] = useState("resolution");
    const item = specs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="orange"
                title="Thông số kỹ thuật quan trọng của Webcam"
                icon={<Camera />}
            />
            <SpecPanel
                specs={specs}
                active={active}
                setActive={setActive}
                item={item}
            />
        </section>
    );
}

function SpecPanel({ specs, active, setActive, item }) {
    return (
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
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
    );
}

function LightingAndAudioGuide() {
    const dpiRows = [
        ["Văn bản thường", "200–300 DPI"],
        ["Hợp đồng/tài liệu PDF", "300 DPI"],
        ["Ảnh in", "600 DPI trở lên"],
        ["Lưu trữ ảnh cũ chi tiết", "1200 DPI trở lên"],
        ["Phóng lớn ảnh", "2400 DPI+ tùy nhu cầu"],
    ];
    const lightRows = [
        ["Nguồn sáng trước mặt", "Mặt sáng rõ, ít nhiễu, da đẹp hơn"],
        [
            "Cửa sổ sáng sau lưng",
            "Mặt bị tối, nền cháy sáng, webcam tăng sáng sai",
        ],
        ["Webcam ngang tầm mắt", "Góc nhìn tự nhiên hơn"],
        [
            "Micro rời/tai nghe mic",
            "Âm thanh rõ hơn mic webcam trong phòng vang/ồn",
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="emerald"
                title="Mốc thực chiến: DPI scan, ánh sáng và âm thanh"
                icon={<Lightbulb />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <DataTable
                    title="DPI scanner nên dùng"
                    rows={dpiRows}
                    headers={["Nhu cầu", "DPI gợi ý"]}
                    accent="emerald"
                />
                <DataTable
                    title="Webcam đẹp hơn nhờ setup đúng"
                    rows={lightRows}
                    headers={["Yếu tố", "Tác động"]}
                    accent="cyan"
                />
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 font-mono text-sm text-slate-300">
                Livestream đẹp hơn nên nâng cấp theo thứ tự:
                <br />
                Ánh sáng tốt → Webcam tốt → Micro tốt → Phông nền gọn → Phần mềm
                chỉnh hình
            </div>
        </section>
    );
}

function RealExamples() {
    const examples = [
        {
            icon: <Printer />,
            title: "Canon CanoScan LiDE 400",
            subtitle: "Flatbed scanner phổ thông",
            color: "sky",
            points: [
                "Flatbed",
                "Hợp giấy tờ và ảnh",
                "Một số nơi ghi 4800 × 4800 DPI",
                "Phù hợp gia đình/văn phòng nhỏ",
                "Ít làm cong giấy",
            ],
            lesson: "Flatbed scanner hợp ảnh cũ và giấy tờ quan trọng vì đặt phẳng, quét đều và ít làm hỏng giấy.",
        },
        {
            icon: <Usb />,
            title: "Epson WorkForce ES-50",
            subtitle: "Scanner di động",
            color: "emerald",
            points: [
                "Nạp từng tờ",
                "Dùng nguồn USB",
                "Khoảng 5,5 giây/trang theo mô tả",
                "Hỗ trợ giấy, thẻ, hóa đơn",
                "Hợp người đi công tác",
            ],
            lesson: "Portable scanner tiện hơn flatbed nếu bạn thường scan hóa đơn/hợp đồng khi di chuyển.",
        },
        {
            icon: <Camera />,
            title: "Logitech Brio 500",
            subtitle: "Webcam họp online",
            color: "cyan",
            points: [
                "1080p 30fps",
                "720p 60fps",
                "Nhiều FOV",
                "Stereo mic",
                "Có căn khung thông minh",
            ],
            lesson: "Webcam rời đáng nâng cấp nếu webcam laptop mờ, góc thấp hoặc bạn họp mỗi ngày.",
        },
        {
            icon: <Video />,
            title: "Elgato Facecam MK.2",
            subtitle: "Webcam livestream",
            color: "purple",
            points: [
                "1080p60 HDR",
                "Cảm biến Sony STARVIS CMOS",
                "Fixed focus",
                "Chỉnh tay trong Camera Hub",
                "Hợp streamer/creator",
            ],
            lesson: "Streaming webcam ưu tiên 60fps, điều khiển hình ảnh và ánh sáng tốt hơn webcam văn phòng cơ bản.",
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
            <div className="grid lg:grid-cols-4 gap-4">
                {examples.map((e) => (
                    <div
                        key={e.title}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-5 hover:border-pink-500/40 transition-all"
                    >
                        <div
                            className={`w-12 h-12 rounded-2xl ${badgeColor(e.color)} flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(e.icon, { size: 24 })}
                        </div>
                        <h3 className="text-white font-bold text-base mb-1">
                            {e.title}
                        </h3>
                        <p className="text-pink-300 text-xs font-semibold mb-4">
                            {e.subtitle}
                        </p>
                        <div className="space-y-2 mb-5">
                            {e.points.map((p) => (
                                <Bullet key={p} text={p} />
                            ))}
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300">
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
        document: {
            icon: <ClipboardList />,
            title: "Scan hợp đồng",
            answer: "Dùng 300 DPI, PDF, bật OCR nếu cần tìm kiếm. Nếu nhiều trang, ưu tiên scanner có ADF + duplex.",
            color: "sky",
        },
        photo: {
            icon: <Image />,
            title: "Lưu ảnh cũ",
            answer: "Ưu tiên flatbed hoặc photo scanner, 600–1200 DPI+, kiểm tra màu và tránh sheet-fed nếu ảnh dễ cong/trầy.",
            color: "purple",
        },
        travel: {
            icon: <Usb />,
            title: "Đi công tác",
            answer: "Portable scanner hợp nếu cần scan hóa đơn/hợp đồng khi di chuyển. Điện thoại nhanh hơn, nhưng scanner cho file đều hơn.",
            color: "emerald",
        },
        meeting: {
            icon: <Camera />,
            title: "Họp online mỗi ngày",
            answer: "Nên nâng webcam 1080p tốt, đặt ngang tầm mắt, thêm nguồn sáng trước mặt và cân nhắc tai nghe mic.",
            color: "cyan",
        },
        stream: {
            icon: <Video />,
            title: "Livestream / quay bài",
            answer: "Ưu tiên 1080p60, sensor tốt, kiểm soát exposure/white balance và ánh sáng ổn. Micro rời quan trọng không kém webcam.",
            color: "orange",
        },
        room: {
            icon: <Monitor />,
            title: "Phòng họp",
            answer: "Chọn conference camera góc rộng, mic tốt, tự căn khung và đặt đúng vị trí để thấy nhiều người mà không méo quá mức.",
            color: "blue",
        },
    };
    const [active, setActive] = useState("meeting");
    const item = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Lab: chọn scanner/webcam theo tình huống"
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
            wrong: "Scan DPI càng cao càng tốt",
            right: "DPI cao làm file nặng và quét lâu. Văn bản/hợp đồng thường 300 DPI là đủ; ảnh in mới cần 600 DPI trở lên.",
        },
        {
            wrong: "Chụp điện thoại thay scanner lúc nào cũng đủ",
            right: "Điện thoại tiện, nhưng scanner tốt hơn khi cần tài liệu phẳng, màu đều, không méo góc, nhiều trang đều nhau, OCR và lưu trữ lâu dài.",
        },
        {
            wrong: "Webcam 4K chắc chắn đẹp hơn 1080p",
            right: "Chất lượng còn phụ thuộc sensor, lens, ánh sáng và xử lý hình ảnh. 1080p tốt + ánh sáng đẹp có thể hơn 4K rẻ trong phòng tối.",
        },
        {
            wrong: "Webcam xấu không liên quan ánh sáng",
            right: "Ánh sáng ảnh hưởng cực lớn. Cửa sổ sáng sau lưng khiến mặt tối, nền cháy và hình nhiễu.",
        },
        {
            wrong: "Mic webcam đủ cho mọi cuộc họp",
            right: "Mic webcam thường đủ cơ bản; họp quan trọng, phòng vang hoặc livestream nên dùng tai nghe mic hoặc micro rời.",
        },
        {
            wrong: "Autofocus luôn tốt hơn fixed focus",
            right: "Autofocus tiện khi demo vật thể nhưng có thể săn nét. Fixed focus ổn định nếu bạn ngồi cố định.",
        },
    ];
    const tips = [
        "Scan tài liệu văn phòng ở 300 DPI là đủ trong đa số trường hợp.",
        "Scan ảnh cũ nên dùng flatbed scanner để tránh cong/trầy ảnh.",
        "Scan nhiều trang mỗi ngày: ưu tiên ADF + duplex.",
        "Cần tìm kiếm trong tài liệu scan: bật OCR khi xuất PDF.",
        "Webcam họp online nên ưu tiên 1080p tốt hơn 4K rẻ.",
        "Đặt webcam ngang tầm mắt để hình tự nhiên hơn.",
        "Đặt nguồn sáng trước mặt hoặc chếch 45°, tránh cửa sổ sáng sau lưng.",
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
                        <span className="bg-sky-500/20 text-sky-300 p-2 rounded-xl">
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
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-sky-300 border border-slate-800 shadow-inner space-y-2">
                            <p>Scanner = giấy/ảnh thật → file số PDF/JPG/PNG</p>
                            <p>Webcam = ánh sáng/khuôn mặt → video trực tiếp</p>
                            <br />
                            <p className="text-slate-500"># Scanner</p>
                            <p className="text-slate-300">
                                DPI • Speed • Color depth • ADF • Duplex • OCR
                            </p>
                            <br />
                            <p className="text-slate-500"># Webcam</p>
                            <p className="text-slate-300">
                                Resolution • FPS • Sensor • Lens • FOV • Focus •
                                Mic • Privacy shutter
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
        question: "Scanner dùng để làm gì?",
        options: [
            "Số hóa tài liệu/ảnh giấy thành file trên máy tính",
            "Làm mát CPU",
            "Tăng dung lượng RAM",
            "Cấp điện cho mainboard",
        ],
        correct: 0,
        explanation:
            "Scanner chuyển tài liệu giấy, ảnh in, hóa đơn hoặc thẻ thành file số như PDF/JPG/PNG.",
    },
    {
        question: "DPI trong scanner nói đơn giản là gì?",
        options: [
            "Độ phân giải/quy mô chi tiết khi quét",
            "Tốc độ mạng Wi‑Fi",
            "Số nhân CPU",
            "Dung lượng pin",
        ],
        correct: 0,
        explanation:
            "DPI là số điểm ảnh scanner ghi lại trên mỗi inch, ảnh hưởng độ chi tiết và dung lượng file.",
    },
    {
        question: "ADF trên scanner có ý nghĩa gì?",
        options: [
            "Khay nạp tài liệu tự động",
            "Tự động tăng FPS webcam",
            "Cổng âm thanh kỹ thuật số",
            "Bộ nhớ trong scanner",
        ],
        correct: 0,
        explanation:
            "ADF là Automatic Document Feeder, giúp máy tự kéo nhiều tờ để quét liên tục.",
    },
    {
        question: "Webcam 1080p60 nghĩa là gì?",
        options: [
            "Quay Full HD ở 60 khung hình/giây",
            "Scan tài liệu 1080 DPI",
            "Có 1080 nút bấm",
            "Chỉ dùng được với máy in",
        ],
        correct: 0,
        explanation:
            "1080p60 nghĩa là webcam quay video Full HD với 60 khung hình mỗi giây.",
    },
    {
        question: "Yếu tố nào ảnh hưởng lớn đến chất lượng hình webcam?",
        options: [
            "Ánh sáng, cảm biến, ống kính và phần mềm xử lý",
            "Dung lượng ổ cứng HDD",
            "Số phím trên bàn phím",
            "Màu dây nguồn PSU",
        ],
        correct: 0,
        explanation:
            "Webcam đẹp hay xấu phụ thuộc nhiều vào ánh sáng, sensor, lens và xử lý hình ảnh, không chỉ độ phân giải.",
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
                Bạn đã hiểu scanner và webcam. Tiếp theo là micro và thiết bị âm
                thanh đầu vào — phần giúp đưa giọng nói, nhạc cụ và âm thanh từ
                thế giới thật vào máy tính.
            </p>
            <Link
                to="/phan-10-5"
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-sky-500/20"
            >
                Bài tiếp theo: 10.5 — Micro và thiết bị âm thanh đầu vào{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function SectionTitle({ number, title, icon, color = "sky" }) {
    const colorMap = {
        sky: "bg-sky-500/20 text-sky-300",
        yellow: "bg-yellow-500/20 text-yellow-300",
        blue: "bg-blue-500/20 text-blue-300",
        cyan: "bg-cyan-500/20 text-cyan-300",
        emerald: "bg-emerald-500/20 text-emerald-300",
        amber: "bg-amber-500/20 text-amber-300",
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
            className={`rounded-2xl border p-4 text-center ${highlight ? "bg-sky-500/10 border-sky-400/50" : softBorder(color)}`}
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
function WarnBullet({ text }) {
    return (
        <div className="flex items-start gap-2 text-sm text-slate-300">
            <AlertTriangle
                className="text-orange-400 shrink-0 mt-0.5"
                size={16}
            />{" "}
            <span>{text}</span>
        </div>
    );
}
function badgeColor(color) {
    const map = {
        sky: "bg-sky-500/10 text-sky-300 border border-sky-500/20",
        yellow: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
        blue: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        emerald:
            "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        orange: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
        amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        pink: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
        red: "bg-red-500/10 text-red-300 border border-red-500/20",
    };
    return map[color] || map.sky;
}
function softBorder(color) {
    const map = {
        sky: "bg-sky-500/5 border-sky-500/20",
        yellow: "bg-yellow-500/5 border-yellow-500/20",
        blue: "bg-blue-500/5 border-blue-500/20",
        cyan: "bg-cyan-500/5 border-cyan-500/20",
        emerald: "bg-emerald-500/5 border-emerald-500/20",
        orange: "bg-orange-500/5 border-orange-500/20",
        amber: "bg-amber-500/5 border-amber-500/20",
        purple: "bg-purple-500/5 border-purple-500/20",
        pink: "bg-pink-500/5 border-pink-500/20",
        red: "bg-red-500/5 border-red-500/20",
    };
    return map[color] || map.sky;
}
function textColor(color) {
    const map = {
        sky: "text-sky-300",
        yellow: "text-yellow-300",
        blue: "text-blue-300",
        cyan: "text-cyan-300",
        emerald: "text-emerald-300",
        orange: "text-orange-300",
        amber: "text-amber-300",
        purple: "text-purple-300",
        pink: "text-pink-300",
        red: "text-red-300",
    };
    return map[color] || "text-sky-300";
}
