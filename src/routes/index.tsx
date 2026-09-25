import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Check, Play, Radio } from "lucide-react";
import agentDemo from "@/assets/agent-demo.jpg";
import heroImage from "@/assets/ai-agent-studio.jpg";
import communityImage from "@/assets/ai-community.jpg";
import speakerImage from "@/assets/speaker-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nuôi Agent Cày Thay Mình 24/7 — Workshop AI thực chiến" },
      { name: "description", content: "Workshop thực chiến giúp bạn xây đội AI agent, tự tạo ứng dụng và thương mại hóa kỹ năng AI." },
      { property: "og:title", content: "Nuôi Agent Cày Thay Mình 24/7" },
      { property: "og:description", content: "Từ kỹ năng cá nhân thành một hệ thống AI tự vận hành 24/7." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  ["Đội 3 AI agent sẵn skill", "Nhận ngay đội 3 AI agent làm việc thay bạn, tích hợp sẵn skill hoàn chỉnh."],
  ["Xây kênh bằng subagent", "Hé lộ cách xây kênh bằng subagent khác biệt mà ít người biết đến."],
  ["Tự build app không phụ thuộc", "Tự tay xây ứng dụng AI theo nhu cầu công việc riêng, không cần phụ thuộc vào bất kỳ ai."],
  ["Thương mại hóa skill AI", "Biết cách đóng gói, bán và vận hành skill AI thành một sản phẩm thương mại."],
  ["Quà tặng đặc quyền", "Nhận tài nguyên độc quyền dành riêng cho người tham gia buổi huấn luyện."],
  ["Ý tưởng kiếm tiền", "Khám phá các hướng ứng dụng AI mới để mở rộng cơ hội và tạo nguồn thu."],
];

const registrationUrl = "https://kolaiworkshop.lovable.app/dang-ky";

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground selection:bg-primary/20">
      <header className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pt-20">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5">
            <Radio className="size-3 text-primary" aria-hidden="true" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Mission status: live</span>
          </div>
          <div className="animate-fade-up mt-7 space-y-5 [animation-delay:100ms]">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">Huấn luyện cấp tốc • một lần duy nhất</p>
            <h1 className="text-balance font-display text-5xl font-extrabold uppercase leading-[0.97] sm:text-6xl lg:text-7xl">
              Nuôi Agent<br /><span className="text-primary">Cày Thay Mình 24/7</span>
            </h1>
            <p className="mx-auto max-w-[52ch] text-pretty text-lg font-medium text-foreground/70 sm:text-xl">
              Từ skill tiến hóa thành một Agent sống thực sự — biết nghiên cứu, sáng tạo và thực thi công việc cùng bạn.
            </p>
          </div>
          <div className="animate-fade-up mt-8 flex flex-col items-center gap-5 [animation-delay:200ms] sm:flex-row">
            <div className="flex items-center gap-3 border-l-2 border-primary pl-4 font-mono text-sm">
              <CalendarDays className="size-5 text-primary" aria-hidden="true" />
              <span className="font-bold uppercase">20:00 • ngày 21/9</span>
            </div>
            <a href="#register" className="rounded-lg bg-primary px-8 py-4 font-display text-sm font-bold uppercase text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              Nhận vé & tài nguyên miễn phí
            </a>
          </div>

          <div className="animate-fade-up relative mt-14 w-full max-w-5xl [animation-delay:300ms]">
            <div className="absolute -inset-5 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative rounded-xl bg-card p-2 shadow-2xl ring-1 ring-foreground/5">
              <img src={heroImage} alt="Chuyên gia bên hệ thống AI agent trong studio công nghệ" width={1536} height={864} fetchPriority="high" className="aspect-video w-full rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </header>

      <section className="border-y border-border bg-card px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:justify-between">
            <div className="min-w-0 space-y-2">
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-primary">Outcome / 06 deliverables</span>
              <h2 className="text-balance font-display text-3xl font-extrabold uppercase sm:text-4xl">Bạn sẽ nhận được gì?</h2>
            </div>
            <p className="max-w-sm text-pretty text-sm font-medium leading-6 text-muted-foreground">Một lộ trình thực chiến, bỏ qua lý thuyết suông để tập trung vào kết quả có thể ứng dụng ngay.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([title, description], index) => (
              <article key={title} className="group relative min-h-64 overflow-hidden rounded-lg border border-border bg-card p-7 transition-colors hover:border-primary/50">
                <span className="font-mono text-4xl font-bold text-primary/15 transition-colors group-hover:text-primary/30">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-7 text-balance font-display text-xl font-bold uppercase leading-tight">{title}</h3>
                <p className="mt-3 text-pretty text-sm leading-6 text-muted-foreground">{description}</p>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform group-hover:scale-x-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl rounded-xl bg-dark-surface p-7 text-background sm:p-10 lg:p-12">
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-12">
            <div className="relative shrink-0">
              <div className="absolute -inset-2 rounded-full border border-primary/40" />
              <img src={speakerImage} alt="Chân dung diễn giả workshop AI" loading="lazy" width={816} height={816} className="size-52 rounded-full object-cover grayscale transition duration-500 hover:grayscale-0 sm:size-64" />
              <span className="absolute -bottom-2 right-1 rounded-full bg-primary px-3 py-1 font-mono text-[10px] font-bold uppercase text-primary-foreground shadow-lg">KOL AI</span>
            </div>
            <div className="min-w-0 space-y-6 text-center md:text-left">
              <div className="space-y-2">
                <p className="font-mono text-sm font-bold uppercase text-primary">Diễn giả huấn luyện</p>
                <h2 className="font-display text-4xl font-extrabold uppercase">Phong Menly</h2>
                <p className="font-mono text-xs text-primary-muted">KOL AI & Vibe Coding</p>
              </div>
              <p className="text-pretty text-lg leading-8 text-background/70">Người tiên phong trong lĩnh vực KOL AI tại Việt Nam, chia sẻ kiến thức và kinh nghiệm thực tế về cách kiếm tiền với AI một cách hiệu quả.</p>
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                {["AI Expert", "Content Creator", "Vibe Coding"].map((tag) => <span key={tag} className="rounded-full border border-background/20 px-3 py-1 text-[10px] font-bold uppercase text-background/60">{tag}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl font-extrabold uppercase sm:text-4xl">Xem trước nội dung thực chiến</h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">Khám phá cách các AI agent phối hợp, xử lý dữ liệu và biến quy trình lặp lại thành hệ thống tự vận hành.</p>
          <a href="https://www.youtube.com/watch?v=K2H9p7IGhdo" target="_blank" rel="noreferrer" aria-label="Xem video giới thiệu workshop trên YouTube" className="group relative mx-auto mt-10 block max-w-4xl overflow-hidden rounded-lg bg-dark-surface shadow-2xl ring-1 ring-foreground/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <img src={agentDemo} alt="Màn hình minh họa hệ thống AI agent đang vận hành" loading="lazy" width={1280} height={720} className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
            <span className="absolute inset-0 bg-foreground/15 transition group-hover:bg-foreground/5" />
            <span className="absolute inset-0 grid place-items-center"><span className="grid size-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform group-hover:scale-110"><Play className="ml-1 size-8 fill-current" aria-hidden="true" /></span></span>
          </a>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-xl border border-primary/20 bg-card p-7 shadow-sm sm:p-10 lg:grid-cols-2 lg:p-14">
          <div className="space-y-7">
            <div className="space-y-4">
              <p className="font-mono text-sm font-bold uppercase text-primary">Cộng đồng đồng hành</p>
              <h2 className="text-balance font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl">Nơi bạn xây dựng <span className="text-primary">đế chế AI của riêng mình</span></h2>
              <p className="text-pretty text-lg leading-7 text-foreground/70">Kết nối cùng KOL, Affiliate và nhà sáng tạo đang học hỏi, chia sẻ và biến AI thành lợi thế thực tế.</p>
            </div>
            <ul className="space-y-3">
              {["Cập nhật cách ứng dụng AI mới", "Cùng tháo gỡ các bài toán thực tế", "Nhận tài nguyên dành riêng cho cộng đồng"].map((item) => <li key={item} className="flex items-center gap-3 font-medium"><span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"><Check className="size-3" aria-hidden="true" /></span>{item}</li>)}
            </ul>
            <a href="#register" className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3.5 font-display text-sm font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground">Tham gia cùng chúng tôi <ArrowUpRight className="size-4" aria-hidden="true" /></a>
          </div>
          <img src={communityImage} alt="Cộng đồng nhà sáng tạo Việt Nam cùng học và ứng dụng AI" loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full rounded-lg object-cover" />
        </div>
      </section>

      <footer id="register" className="relative overflow-hidden bg-dark-surface px-5 py-24 text-background sm:px-8 sm:py-32">
        <div className="absolute inset-y-0 right-0 w-1/3 translate-x-1/2 -skew-x-12 bg-primary/10" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-10 text-center">
          <div className="space-y-6">
            <h2 className="text-balance font-display text-4xl font-extrabold uppercase leading-[1] sm:text-6xl">Đừng đứng ngoài<br />cuộc chơi <span className="text-primary">AI ngay hôm nay</span></h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg font-medium text-background/60 sm:text-xl">Giữ chỗ cho buổi huấn luyện và nhận trọn bộ tài nguyên thực hành dành riêng cho người tham gia.</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <a href={registrationUrl} target="_blank" rel="noreferrer" className="w-full rounded-lg bg-primary px-10 py-5 font-display text-base font-extrabold uppercase text-primary-foreground shadow-xl shadow-primary/25 transition hover:-translate-y-0.5 hover:shadow-none sm:w-auto sm:text-lg">Đăng ký ngay bây giờ</a>
            <p className="font-mono text-[10px] uppercase tracking-widest text-background/40">Tài nguyên gửi sau khi đăng ký • Tham gia cộng đồng miễn phí</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
