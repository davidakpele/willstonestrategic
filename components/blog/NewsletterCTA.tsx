import Link from 'next/link'

export default function NewsletterCTA() {
  return (
    <section className="mt-12 bg-[#071633] text-white py-8">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-[18px]">Stay Updated</p>
          <p className="text-white/70">Get the latest insights, industry updates, and company news delivered straight to your inbox.</p>
        </div>
        <form className="flex items-center gap-2 w-full md:w-auto">
          <input type="email" placeholder="Enter your email address" className="contact-input" />
          <button className="btn-gold px-4 py-2 rounded">Subscribe</button>
        </form>
      </div>
    </section>
  )
}
