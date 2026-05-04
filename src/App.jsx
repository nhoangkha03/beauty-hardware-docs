import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookCheck,
  BookMarked,
  BookOpen,
  CheckCircle2,
  Circle,
  Compass,
  Cpu,
  HardDrive,
  Home,
  MemoryStick,
  Monitor,
  Package2,
  PlugZap,
  Server,
  Wrench,
} from "lucide-react";
import {
  HashRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const pageModules = import.meta.glob("./pages/*.jsx");

const courseSections = [
  {
    number: 1,
    title: "Tổng quan về phần cứng",
    accent: "cyan",
    icon: BookOpen,
    lessons: [
      "Phần cứng là gì?",
      "Phân loại phần cứng (Input / Output / Processing / Storage)",
      "Sơ đồ kiến trúc tổng thể của một máy tính",
      "Mối quan hệ giữa Phần cứng - Phần mềm - Người dùng",
      "Lịch sử phát triển phần cứng máy tính",
    ],
  },
  {
    number: 2,
    title: "CPU - Bộ xử lý trung tâm",
    accent: "purple",
    icon: Cpu,
    lessons: [
      "CPU là gì? Chức năng và vai trò",
      "Kiến trúc CPU (Von Neumann, Harvard)",
      "Các thành phần bên trong CPU (ALU, CU, Registers, Cache)",
      "Xung nhịp CPU (Clock Speed) và ý nghĩa",
      "Số nhân (Cores) và số luồng (Threads)",
      "Bộ nhớ đệm CPU (L1, L2, L3 Cache)",
      "Kiến trúc tập lệnh (x86, x64, ARM, RISC-V)",
      "Quy trình sản xuất CPU (nm - Nanometer)",
      "Các hãng CPU phổ biến (Intel, AMD, Apple Silicon)",
      "Cách chọn CPU phù hợp",
    ],
  },
  {
    number: 3,
    title: "Bộ nhớ (Memory)",
    accent: "orange",
    icon: MemoryStick,
    lessons: [
      "Phân cấp bộ nhớ trong máy tính",
      "RAM - Bộ nhớ truy cập ngẫu nhiên",
      "Các loại RAM (DDR3, DDR4, DDR5, LPDDR)",
      "Thông số RAM (Dung lượng, Tốc độ, Độ trễ CL)",
      "Dual Channel / Quad Channel RAM",
      "ROM - Bộ nhớ chỉ đọc và BIOS/UEFI",
      "Bộ nhớ ảo (Virtual Memory / Swap)",
      "Cách chọn và nâng cấp RAM",
    ],
  },
  {
    number: 4,
    title: "Bộ lưu trữ (Storage)",
    accent: "green",
    icon: HardDrive,
    lessons: [
      "Tổng quan về thiết bị lưu trữ",
      "HDD - Ổ đĩa cứng cơ học (cấu tạo, nguyên lý hoạt động)",
      "SSD - Ổ đĩa thể rắn (NAND Flash, các loại cell: SLC, MLC, TLC, QLC)",
      "Giao tiếp lưu trữ (SATA, NVMe, M.2, PCIe)",
      "Optical Drive - Ổ đĩa quang (CD, DVD, Blu-ray)",
      "USB Flash Drive và thẻ nhớ (SD Card)",
      "RAID - Mảng đĩa dự phòng (RAID 0, 1, 5, 10)",
      "Lưu trữ đám mây và NAS",
      "Cách chọn thiết bị lưu trữ phù hợp",
    ],
  },
  {
    number: 5,
    title: "Bộ xử lý đồ họa (GPU)",
    accent: "blue",
    icon: Monitor,
    lessons: [
      "GPU là gì? So sánh GPU và CPU",
      "Kiến trúc GPU (Shader cores, VRAM, Bus width)",
      "GPU tích hợp (Integrated Graphics) vs GPU rời (Dedicated GPU)",
      "Các thông số GPU quan trọng (VRAM, TDP, Clock speed)",
      "Các hãng GPU (NVIDIA, AMD, Intel Arc)",
      "GPU cho Gaming vs GPU cho AI/ML/Render",
      "Công nghệ liên quan (Ray Tracing, DLSS, FSR)",
      "Cách chọn GPU phù hợp nhu cầu",
    ],
  },
  {
    number: 6,
    title: "Bản mạch chủ (Motherboard)",
    accent: "indigo",
    icon: Package2,
    lessons: [
      "Mainboard là gì? Vai trò trung tâm kết nối",
      "Cấu tạo và các thành phần trên Mainboard",
      "Chipset và vai trò điều phối",
      "Socket CPU (LGA, AM4, AM5...)",
      "Khe RAM (DIMM Slots) và khe mở rộng PCIe",
      "Các cổng kết nối onboard (USB, SATA, M.2, Audio)",
      "Form Factor (ATX, Micro-ATX, Mini-ITX)",
      "BIOS và UEFI - Firmware của Mainboard",
      "Cách chọn Mainboard phù hợp CPU và nhu cầu",
    ],
  },
  {
    number: 7,
    title: "Nguồn điện (PSU)",
    accent: "amber",
    icon: PlugZap,
    lessons: [
      "PSU là gì? Vai trò cung cấp điện cho hệ thống",
      "Các thông số PSU (Wattage, Hiệu suất, Chứng chỉ 80 PLUS)",
      "Các đầu cắm điện (24-pin, 8-pin CPU, PCIe, SATA)",
      "Modular vs Semi-Modular vs Non-Modular PSU",
      "Tính toán công suất nguồn cần thiết",
      "Cách chọn PSU an toàn và bền",
    ],
  },
  {
    number: 8,
    title: "Vỏ máy tính (Case / Chassis)",
    accent: "rose",
    icon: Package2,
    lessons: [
      "Vai trò của vỏ máy tính",
      "Phân loại vỏ máy theo kích thước (Full Tower, Mid Tower, Mini-ITX)",
      "Hệ thống tản nhiệt và luồng gió (Airflow)",
      "Vật liệu và thiết kế (thép, nhôm, kính cường lực)",
      "Cách chọn vỏ máy phù hợp",
    ],
  },
  {
    number: 9,
    title: "Tản nhiệt (Cooling System)",
    accent: "teal",
    icon: Wrench,
    lessons: [
      "Tại sao cần tản nhiệt?",
      "Tản nhiệt khí (Air Cooling) - Tản nhiệt CPU dạng cánh quạt",
      "Tản nhiệt nước (Liquid Cooling / AIO / Custom Loop)",
      "Keo tản nhiệt (Thermal Paste) - Vai trò và cách thoa",
      "Nhiệt độ hoạt động an toàn cho CPU, GPU",
      "Tản nhiệt cho Laptop (heatpipe, fan)",
    ],
  },
  {
    number: 10,
    title: "Thiết bị nhập liệu (Input Devices)",
    accent: "sky",
    icon: Monitor,
    lessons: [
      "Bàn phím (Keyboard) - Cơ chế, loại switch, kết nối",
      "Chuột (Mouse) - Cơ chế quang, laser, DPI",
      "Màn hình cảm ứng (Touchscreen)",
      "Máy quét (Scanner) và Webcam",
      "Micro và Thiết bị âm thanh đầu vào",
      "Bộ điều khiển (Gamepad, Joystick)",
    ],
  },
  {
    number: 11,
    title: "Thiết bị xuất dữ liệu (Output Devices)",
    accent: "pink",
    icon: Monitor,
    lessons: [
      "Màn hình (Monitor) - Công nghệ tấm nền (IPS, VA, TN, OLED)",
      "Các thông số màn hình (Độ phân giải, Tần số quét, Độ trễ, HDR)",
      "Máy in (Printer) - Laser, Inkjet, 3D Printer",
      "Loa và Tai nghe (Speaker & Headphone)",
      "Máy chiếu (Projector)",
    ],
  },
  {
    number: 12,
    title: "Giao tiếp và kết nối (Interfaces & Connectivity)",
    accent: "violet",
    icon: PlugZap,
    lessons: [
      "Bus máy tính (System Bus, Data Bus, Address Bus)",
      "Cổng USB (USB 2.0, 3.x, USB-C, Thunderbolt)",
      "Cổng HDMI, DisplayPort, VGA, DVI",
      "Kết nối mạng có dây (Ethernet, RJ45)",
      "Kết nối không dây (WiFi, Bluetooth, NFC)",
      "PCIe (Peripheral Component Interconnect Express)",
    ],
  },
  {
    number: 13,
    title: "Phần cứng mạng (Network Hardware)",
    accent: "lime",
    icon: Server,
    lessons: [
      "Card mạng (NIC - Network Interface Card)",
      "Router và Switch",
      "Modem và ONT (thiết bị cáp quang)",
      "Access Point và Repeater",
      "Firewall phần cứng",
    ],
  },
  {
    number: 14,
    title: "Phần cứng laptop và thiết bị di động",
    accent: "fuchsia",
    icon: Monitor,
    lessons: [
      "Sự khác biệt phần cứng Laptop vs PC Desktop",
      "SoC (System on Chip) - Khái niệm và ứng dụng",
      "Pin Laptop - Công nghệ, dung lượng, bảo quản",
      "Màn hình Laptop (tấm nền, độ phân giải, tần số)",
      "Phần cứng Smartphone và Tablet",
      "Thiết bị đeo (Wearable) - Smartwatch, AR/VR headset",
    ],
  },
  {
    number: 15,
    title: "Phần cứng server và datacenter",
    accent: "emerald",
    icon: Server,
    lessons: [
      "Kiến trúc Server khác gì PC thông thường?",
      "CPU Server (Xeon, EPYC)",
      "ECC RAM - Bộ nhớ sửa lỗi",
      "Hệ thống lưu trữ Server (SAN, NAS, DAS)",
      "Nguồn điện dự phòng (UPS)",
      "Rack Server và Data Center cơ bản",
    ],
  },
  {
    number: 16,
    title: "Bảo trì, nâng cấp và chẩn đoán lỗi",
    accent: "red",
    icon: Wrench,
    lessons: [
      "Vệ sinh phần cứng định kỳ",
      "Cách nâng cấp RAM, SSD, GPU an toàn",
      "Chẩn đoán lỗi phần cứng thường gặp",
      "Công cụ kiểm tra phần cứng (CPU-Z, GPU-Z, CrystalDiskInfo, HWMonitor)",
      "POST (Power-On Self-Test) và mã beep lỗi",
      "Kỹ thuật ép xung (Overclocking) cơ bản",
    ],
  },
  {
    number: 17,
    title: "Xu hướng phần cứng hiện đại",
    accent: "slate",
    icon: Compass,
    lessons: [
      "Chip AI chuyên dụng (NPU, TPU)",
      "Phần cứng cho AI và Machine Learning (GPU NVIDIA H100, A100)",
      "Điện toán lượng tử (Quantum Computing) cơ bản",
      "Chiplet Architecture - Xu hướng thiết kế chip mới",
      "Phần cứng tiết kiệm năng lượng và bền vững (Green Computing)",
    ],
  },
];

const lessons = courseSections.flatMap((section) =>
  section.lessons.map((title, index) => {
    const code = `${section.number}.${index + 1}`;
    return {
      path: `/phan-${section.number}-${index + 1}`,
      code,
      title,
      sectionNumber: section.number,
      sectionTitle: section.title,
      accent: section.accent,
      icon: section.icon,
      filePath: `./pages/Phan-${code}.jsx`,
      description: `Bài ${code} thuộc ${section.title.toLowerCase()}.`,
      bullets: [
        `Trọng tâm: ${title}`,
        `Thuộc phần: ${section.title}`,
        `Bạn có thể bổ sung nội dung trong file Phan-${code}.jsx`,
      ],
    };
  })
);

const lessonsBySection = courseSections.map((section) => ({
  ...section,
  lessons: lessons.filter((lesson) => lesson.sectionNumber === section.number),
}));

const LESSON_STATUS_KEY = "hardware-course-lesson-status";

function readLessonStatuses() {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem(LESSON_STATUS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function lessonStatusLabel(status) {
  if (status === "saved") return "Đang đánh dấu";
  if (status === "done") return "Đã hoàn thành";
  return "Chưa đánh dấu";
}

function lessonStatusClasses(status) {
  if (status === "saved") {
    return "border-amber-500/30 bg-amber-500/10 text-amber-300";
  }

  if (status === "done") {
    return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
  }

  return "border-slate-700 bg-slate-900 text-slate-400";
}

function accentClasses(accent) {
  const map = {
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    green: "bg-green-500/10 text-green-400 border-green-500/20",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    rose: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    teal: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    sky: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    lime: "bg-lime-500/10 text-lime-400 border-lime-500/20",
    fuchsia: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    slate: "bg-slate-500/10 text-slate-300 border-slate-500/20",
  };

  return map[accent] ?? map.cyan;
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function loadLessonComponent(filePath) {
  const importer = pageModules[filePath];
  return importer ? lazy(importer) : null;
}

function PlaceholderLesson({ lesson }) {
  const Icon = lesson.icon;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16">
        <section className="overflow-hidden rounded-[2rem] border border-slate-800 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.16),_transparent_28%),linear-gradient(180deg,_rgba(15,23,42,1),_rgba(2,6,23,1))] p-8 md:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
            <Icon size={16} />
            Bài {lesson.code}
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            {lesson.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-400">
            Khung bài học này đã được tạo trong mục lục, nhưng nội dung chi tiết
            chưa được bổ sung.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-lg font-bold text-white">Thông tin bài</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p>
                  <span className="font-semibold text-slate-200">Phần:</span>{" "}
                  {lesson.sectionNumber}. {lesson.sectionTitle}
                </p>
                <p>
                  <span className="font-semibold text-slate-200">
                    File mong đợi:
                  </span>{" "}
                  `src/pages/Phan-{lesson.code}.jsx`
                </p>
                <p>
                  <span className="font-semibold text-slate-200">
                    Route:
                  </span>{" "}
                  `{lesson.path}`
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-lg font-bold text-white">Cách bổ sung</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p>1. Tạo hoặc sửa file JSX đúng tên theo mã bài học.</p>
                <p>2. Export default một component React cho nội dung bài.</p>
                <p>3. App sẽ tự nạp file đó mà không cần sửa router.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function HomePage({ lessonStatuses, onToggleSaved, onToggleDone }) {
  const stats = useMemo(() => {
    const values = Object.values(lessonStatuses);
    const saved = values.filter((status) => status === "saved").length;
    const done = values.filter((status) => status === "done").length;
    const percent = lessons.length
      ? Math.round((done / lessons.length) * 100)
      : 0;

    return { saved, done, percent };
  }, [lessonStatuses]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_40%),linear-gradient(180deg,_rgba(15,23,42,0.98),_rgba(2,6,23,1))]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
            <BookOpen size={16} />
            Khóa học Phần Cứng Máy Tính
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.15fr),360px] lg:items-end">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                Trang mục lục
              </p>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
                Phần Cứng Máy Tính Từ Cơ Bản Đến Chuyên Sâu
              </h1>
              <p className="max-w-2xl text-lg text-slate-400">
                Khung khóa học đã được chuyển sang phần cứng theo mục lục 17
                phần. Bạn có thể viết dần từng bài trong `src/pages` mà không
                cần sửa router nữa.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/25">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <Compass size={16} className="text-cyan-300" />
                Điều hướng
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p>1. Chọn bài trong danh sách mục lục.</p>
                <p>2. Nếu bài đã có file, app sẽ mở nội dung thật.</p>
                <p>3. Nếu chưa có file, app hiển thị trang placeholder.</p>
              </div>
              <div className="mt-6 space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <div>
                    <div className="font-semibold text-white">
                      Tiến độ khóa học
                    </div>
                    <div className="text-slate-400">
                      {stats.done}/{lessons.length} bài đã hoàn thành
                    </div>
                    <div className="text-slate-500">
                      {stats.saved} bài đang đánh dấu
                    </div>
                  </div>
                  <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-300">
                    {stats.percent}%
                  </div>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500"
                    style={{ width: `${stats.percent}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="space-y-12">
          {lessonsBySection.map((section) => {
            const Icon = section.icon;
            const badgeClasses = accentClasses(section.accent);

            return (
              <section key={section.number}>
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border font-bold ${badgeClasses}`}
                  >
                    {section.number}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {section.title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      {section.lessons.length} bài học
                    </p>
                  </div>
                  <div
                    className={`ml-auto hidden rounded-xl border p-2 md:flex ${badgeClasses}`}
                  >
                    <Icon size={18} />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {section.lessons.map((lesson) => (
                    <LessonCard
                      key={lesson.path}
                      lesson={lesson}
                      status={lessonStatuses[lesson.path]}
                      onToggleSaved={() => onToggleSaved(lesson.path)}
                      onToggleDone={() => onToggleDone(lesson.path)}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}

function LessonCard({ lesson, status, onToggleSaved, onToggleDone }) {
  const badgeClasses = accentClasses(lesson.accent);
  const lessonExists = Boolean(pageModules[lesson.filePath]);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition-all hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
      <Link to={lesson.path} className="block">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div
            className={`rounded-lg border px-2.5 py-1 text-sm font-bold ${badgeClasses}`}
          >
            {lesson.code}
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`rounded-full border px-2 py-0.5 text-xs font-medium ${lessonStatusClasses(status)}`}
            >
              {status === "done" ? (
                <CheckCircle2 size={12} className="mr-1 inline" />
              ) : (
                <Circle size={12} className="mr-1 inline" />
              )}
              {lessonStatusLabel(status)}
            </div>
          </div>
        </div>

        <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-cyan-300">
          {lesson.title}
        </h3>

        <p className="mb-4 text-sm text-slate-400 line-clamp-2">
          {lesson.description}
        </p>

        <ul className="space-y-1.5 text-xs text-slate-500">
          {lesson.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1 text-cyan-500">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 text-xs text-slate-500">
          {lessonExists ? "Đã có file bài học" : "Chưa có file bài học"}
        </div>
      </Link>

      <div className="mt-4 flex gap-2 border-t border-slate-800 pt-4">
        <button
          onClick={(e) => {
            e.preventDefault();
            onToggleSaved();
          }}
          className={`flex-1 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
            status === "saved"
              ? "border-amber-500/30 bg-amber-500/10 text-amber-300"
              : "border-slate-700 bg-slate-800 text-slate-400 hover:border-amber-500/30 hover:bg-amber-500/10 hover:text-amber-300"
          }`}
        >
          <BookMarked size={14} className="mr-1 inline" />
          {status === "saved" ? "Đã đánh dấu" : "Đánh dấu"}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            onToggleDone();
          }}
          className={`flex-1 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
            status === "done"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
              : "border-slate-700 bg-slate-800 text-slate-400 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-300"
          }`}
        >
          <BookCheck size={14} className="mr-1 inline" />
          {status === "done" ? "Đã xong" : "Hoàn thành"}
        </button>
      </div>
    </div>
  );
}

function LessonContent({ lesson }) {
  const LazyLesson = useMemo(
    () => loadLessonComponent(lesson.filePath),
    [lesson.filePath]
  );

  if (!LazyLesson) {
    return <PlaceholderLesson lesson={lesson} />;
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 text-slate-100">
          <div className="mx-auto max-w-5xl px-4 py-16 text-slate-400">
            Đang tải bài học...
          </div>
        </div>
      }
    >
      <LazyLesson />
    </Suspense>
  );
}

function LessonPage({ lesson, lessonStatuses, onToggleSaved, onToggleDone }) {
  const status = lessonStatuses[lesson.path];
  const currentIndex = lessons.findIndex((l) => l.path === lesson.path);
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <Home size={16} />
            Về mục lục
          </Link>

          <div className="flex items-center gap-3">
            <div
              className={`rounded-lg border px-3 py-1 text-sm font-bold ${accentClasses(lesson.accent)}`}
            >
              {lesson.code}
            </div>
            <button
              onClick={() => onToggleSaved(lesson.path)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                status === "saved"
                  ? "border-amber-500/30 bg-amber-500/10 text-amber-300"
                  : "border-slate-700 bg-slate-800 text-slate-400 hover:border-amber-500/30 hover:bg-amber-500/10 hover:text-amber-300"
              }`}
            >
              <BookMarked size={14} className="mr-1 inline" />
              {status === "saved" ? "Đã đánh dấu" : "Đánh dấu"}
            </button>
            <button
              onClick={() => onToggleDone(lesson.path)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                status === "done"
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                  : "border-slate-700 bg-slate-800 text-slate-400 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-300"
              }`}
            >
              <BookCheck size={14} className="mr-1 inline" />
              {status === "done" ? "Đã xong" : "Hoàn thành"}
            </button>
          </div>
        </div>
      </nav>

      <LessonContent lesson={lesson} />

      <footer className="border-t border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {prevLesson ? (
              <Link
                to={prevLesson.path}
                className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 px-5 py-4 transition-all hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <ArrowLeft
                  size={20}
                  className="text-slate-400 group-hover:text-cyan-400"
                />
                <div>
                  <div className="text-xs text-slate-500">Bài trước</div>
                  <div className="font-semibold text-white group-hover:text-cyan-300">
                    {prevLesson.code}: {prevLesson.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextLesson ? (
              <Link
                to={nextLesson.path}
                className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 px-5 py-4 transition-all hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 sm:ml-auto"
              >
                <div className="text-right">
                  <div className="text-xs text-slate-500">Bài tiếp</div>
                  <div className="font-semibold text-white group-hover:text-cyan-300">
                    {nextLesson.code}: {nextLesson.title}
                  </div>
                </div>
                <ArrowRight
                  size={20}
                  className="text-slate-400 group-hover:text-cyan-400"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const [lessonStatuses, setLessonStatuses] = useState(readLessonStatuses);

  useEffect(() => {
    window.localStorage.setItem(
      LESSON_STATUS_KEY,
      JSON.stringify(lessonStatuses)
    );
  }, [lessonStatuses]);

  const toggleSaved = (path) => {
    setLessonStatuses((prev) => ({
      ...prev,
      [path]: prev[path] === "saved" ? undefined : "saved",
    }));
  };

  const toggleDone = (path) => {
    setLessonStatuses((prev) => ({
      ...prev,
      [path]: prev[path] === "done" ? undefined : "done",
    }));
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              lessonStatuses={lessonStatuses}
              onToggleSaved={toggleSaved}
              onToggleDone={toggleDone}
            />
          }
        />
        {lessons.map((lesson) => (
          <Route
            key={lesson.path}
            path={lesson.path}
            element={
              <LessonPage
                lesson={lesson}
                lessonStatuses={lessonStatuses}
                onToggleSaved={toggleSaved}
                onToggleDone={toggleDone}
              />
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
