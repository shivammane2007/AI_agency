import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-display font-bold tracking-tight mb-4 block">
                            AI Agency
                        </Link>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6">
                            Building intelligent systems for the future. We design, develop, and deploy AI-powered digital products.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors">
                                <Github size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-6">Services</h4>
                        <ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
                            <li><Link href="/services" className="hover:text-emerald-500 transition-colors">AI Strategy</Link></li>
                            <li><Link href="/services" className="hover:text-emerald-500 transition-colors">Custom Models</Link></li>
                            <li><Link href="/services" className="hover:text-emerald-500 transition-colors">Automation</Link></li>
                            <li><Link href="/services" className="hover:text-emerald-500 transition-colors">Computer Vision</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Company</h4>
                        <ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
                            <li><Link href="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
                            <li><Link href="/case-studies" className="hover:text-emerald-500 transition-colors">Case Studies</Link></li>
                            <li><Link href="/blog" className="hover:text-emerald-500 transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold mb-6">Stay Updated</h4>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
                            Get the latest updates on AI technologies and our projects.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-full px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            <Button size="icon" className="rounded-full aspect-square p-0 w-11 h-11">
                                <Mail size={18} />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500">
                    <p>© {new Date().getFullYear()} AI Agency. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
