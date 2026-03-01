import { Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="container max-w-3xl mx-auto px-6 py-10 scroll-mt-24">
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's build together.</h2>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </div>

            <form className="max-w-xl mx-auto glass p-8 rounded-3xl space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300 ml-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="w-full bg-zinc-900/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-300 ml-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        className="w-full bg-zinc-900/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-300 ml-1">Message</label>
                    <textarea
                        id="message"
                        rows="4"
                        placeholder="How can I help you?"
                        className="w-full bg-zinc-900/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-white text-black px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-zinc-200 hover:gap-3 transition-all duration-300 mt-2"
                >
                    Send Message <Send size={16} />
                </button>
            </form>
        </section>
    );
};

export default Contact;
