import { motion } from "framer-motion";
import { Star, Video } from "lucide-react";

const reviews = [
  { user: "voltronimo", country: "🇺🇸 United States", text: "Sulaiman did a fantastic job with our website maintenance! His attention to expectations and delivered a bug-free result. His politeness and language be engaging him again!" },
  { user: "adreportcard", country: "🇺🇸 United States", text: "Sulaiman did a good job automating our social media workflows." },
  { user: "pilarvieira", country: "🇨🇷 Costa Rica", text: "Completamente recomendado!! Rápido, comunicativo y eficiente." },
  { user: "morganeg", country: "🇫🇷 France", text: "Nice work that helps me a lot! :) Thank you again!" },
  { user: "justincolon1", country: "🇹🇭 Thailand", text: "Great seller to work with, very helpful and very fast turnaround." },
  { user: "channelbusiness", country: "🇬🇧 United Kingdom", text: "Amazing, I am very happy with the service, he provided a speedy fix to my popup and integrate it with an autoresponder." },
  { user: "petrkopeck76", country: "🇪🇸 Spain", text: "Excellent and reliable services. I have been working with Sulaiman for years." },
  { user: "lahcenessayeh", country: "🇺🇸 United States", text: "Fast, efficient, and gets the job done." },
  { user: "carlosquintero3", country: "🇺🇸 United States", text: "Sully did a great job! Very easy to communicate with… no language barrier — actually finding solutions! Pleasure to work with!" },
  { user: "marquitadorsey1", country: "🇺🇸 United States", text: "Quick, fast and efficient!!" },
  { user: "theamrismail", country: "🇰🇼 Kuwait", text: "Working with Sulaiman was great and will work with him again." },
  { user: "mobi81", country: "🇬🇧 United Kingdom", text: "Amazing work by softechgenics, I love it and will definitely work again." },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-[oklch(0.82_0.16_75)]">// testimonials</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Client <span className="text-aurora">love.</span>
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">Real feedback from real clients across 12+ countries.</p>
          </div>
          <div className="glass flex items-center gap-3 rounded-2xl px-5 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[oklch(0.82_0.16_75)] text-[oklch(0.82_0.16_75)]" />
              ))}
            </div>
            <span className="font-mono text-sm">5.0 average</span>
          </div>
        </div>

        <div className="mb-8 glass-strong rounded-3xl border-dashed p-8 text-center">
          <Video className="mx-auto mb-3 text-[oklch(0.78_0.18_200)]" size={28} />
          <p className="font-mono text-sm text-muted-foreground">Video reviews coming soon — share them anytime and they'll slot right in here.</p>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.user}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              className="glass mb-5 break-inside-avoid rounded-2xl p-5 transition hover:bg-white/10"
            >
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="font-mono text-sm font-semibold">{r.user}</p>
                  <p className="text-xs text-muted-foreground">{r.country}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} size={12} className="fill-[oklch(0.82_0.16_75)] text-[oklch(0.82_0.16_75)]" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">"{r.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
