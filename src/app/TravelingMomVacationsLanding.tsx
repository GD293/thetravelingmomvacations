'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Plane, Hotel, Star, Mail, Phone, Globe2, Menu, X, ShieldCheck } from "lucide-react";

// --- Utility: smooth scroll to an element id ---
const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// --- Small helper components ---
const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className ?? ""}`}>{children}</div>
);

const SectionHeading: React.FC<{ eyebrow?: string; title: string; subtitle?: string; center?: boolean }> = ({ eyebrow, title, subtitle, center }) => (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
        {eyebrow && (
            <div className="mb-3">
                <Badge variant="secondary" className="rounded-full px-3 py-1 text-sm">{eyebrow}</Badge>
            </div>
        )}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
);

// --- Main Component ---
export default function TravelingMomVacationsLanding() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", interests: "", message: "", beach: true, adventure: false, luxury: false, family: true });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic client-side validation
        if (!form.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return alert("Please enter your name and a valid email address.");
        // In production, POST to your backend or ESP (e.g., Mailchimp, Klaviyo) here
        setSubmitted(true);
    };

    const navItems = [
        { label: "Destinations", id: "destinations" },
        { label: "Why Us", id: "why-us" },
        { label: "Experiences", id: "experiences" },
        { label: "Stories", id: "stories" },
        { label: "FAQ", id: "faq" },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Top Announcement Bar */}
            <div className="bg-primary text-primary-foreground">
                <Container>
                    <div className="flex items-center justify-between py-2 text-sm">
                        <p>✨ Exclusive: Complimentary trip consultation with Dr. Delveatra Clements this month.</p>
                        <button onClick={() => go("newsletter")} className="underline-offset-2 hover:underline">Join the list</button>
                    </div>
                </Container>
            </div>

            {/* Navigation */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <Container>
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=160&auto=format&fit=crop" alt="TMV logo" className="h-9 w-9 rounded-full object-cover" />
                            <div className="leading-tight">
                                <span className="block text-sm font-semibold tracking-wide">The Traveling Mom Vacations</span>
                                <span className="block text-xs text-muted-foreground">by Dr. Delveatra Clements</span>
                            </div>
                        </div>
                        <nav className="hidden items-center gap-6 md:flex">
                            {navItems.map((i) => (
                                <button key={i.id} onClick={() => go(i.id)} className="text-sm text-muted-foreground transition hover:text-foreground">
                                    {i.label}
                                </button>
                            ))}
                            <Button onClick={() => go("lead-form")} className="rounded-2xl px-5">Plan My Trip</Button>
                        </nav>
                        <button className="md:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
                            {mobileOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </Container>
                {mobileOpen && (
                    <div className="border-b bg-background md:hidden">
                        <Container>
                            <div className="flex flex-col gap-2 py-4">
                                {navItems.map((i) => (
                                    <button key={i.id} onClick={() => { setMobileOpen(false); go(i.id); }} className="py-2 text-left text-sm text-muted-foreground hover:text-foreground">
                                        {i.label}
                                    </button>
                                ))}
                                <Button onClick={() => { setMobileOpen(false); go("lead-form"); }} className="rounded-2xl">Plan My Trip</Button>
                            </div>
                        </Container>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div
                    className="absolute inset-0 -z-10 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1502920917128-1aa500764b8a?q=80&w=2000&auto=format&fit=crop')",
                    }}
                    aria-hidden
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/90 via-background/40 to-background/20" />
                <Container>
                    <div className="grid min-h-[78vh] items-center gap-10 py-20 sm:py-28 lg:grid-cols-2">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <div className="inline-flex items-center gap-2 rounded-full bg-background/70 px-3 py-1 text-sm shadow">
                                <ShieldCheck className="h-4 w-4" />
                                Stress-free travel planning for busy families
                            </div>
                            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
                                Make memories that matter—
                                <span className="text-primary"> we handle the details.</span>
                            </h1>
                            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                                From dreamy beach escapes to culture-rich city breaks, The Traveling Mom Vacations crafts personalized itineraries that fit your family’s rhythm.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Button size="lg" onClick={() => go("lead-form")} className="rounded-2xl px-6">Start Your Free Consult</Button>
                                <Button size="lg" variant="secondary" onClick={() => go("destinations")} className="rounded-2xl px-6">Explore Destinations</Button>
                            </div>
                            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2"><Star className="h-4 w-4" /> 4.9/5 Client Satisfaction</div>
                                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> ABTA & IATA partners</div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative">
                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    "https://images.unsplash.com/photo-1502786129293-79981df4e689?q=80&w=1200&auto=format&fit=crop",
                                    "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1200&auto=format&fit=crop",
                                    "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1200&auto=format&fit=crop",
                                    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
                                ].map((src, idx) => (
                                    <img key={idx} src={src} alt="Travel inspiration" className="h-44 w-full rounded-2xl object-cover shadow-md sm:h-56" />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Trust Bar */}
            <section>
                <Container>
                    <div className="flex flex-wrap items-center justify-between gap-4 py-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2"><Globe2 className="h-4 w-4" /> Global network of vetted partners</span>
                        <span className="flex items-center gap-2"><Plane className="h-4 w-4" /> Flight & hotel packaging</span>
                        <span className="flex items-center gap-2"><Hotel className="h-4 w-4" /> VIP perks at select resorts</span>
                        <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Travel protection guidance</span>
                    </div>
                </Container>
            </section>

            {/* Destinations */}
            <section id="destinations" className="py-16">
                <Container>
                    <SectionHeading eyebrow="Popular Now" title="Handpicked Destinations" subtitle="Curated locales families love—because we’ve done them with ours." center />
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { title: "Turks & Caicos", img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop" },
                            { title: "Paris, France", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop" },
                            { title: "Maui, Hawaii", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop" },
                            { title: "Banff, Canada", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop" },
                        ].map((d, idx) => (
                            <Card key={idx} className="overflow-hidden">
                                <img src={d.img} alt={d.title} className="h-44 w-full object-cover" />
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-lg"><MapPin className="h-4 w-4" /> {d.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">From boutique stays to kid‑approved excursions, we’ll tailor a plan that fits your vibe.</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Why Us */}
            <section id="why-us" className="bg-muted/30 py-16">
                <Container>
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        <div>
                            <SectionHeading eyebrow="Our Difference" title="Concierge-level planning, mom-tested." subtitle="Led by Dr. Delveatra Clements, we bring empathy, efficiency, and expertise to every itinerary." />
                            <ul className="mt-4 space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 text-primary" /><span><strong>Time back:</strong> We handle logistics, holds, and the hidden details.</span></li>
                                <li className="flex items-start gap-3"><Star className="mt-0.5 h-5 w-5 text-primary" /><span><strong>VIP access:</strong> Enjoy upgrades and amenities via our preferred partners.</span></li>
                                <li className="flex items-start gap-3"><Globe2 className="mt-0.5 h-5 w-5 text-primary" /><span><strong>Personalized:</strong> Every family is different—your trip should be too.</span></li>
                            </ul>
                            <div className="mt-6 flex gap-3">
                                <Button onClick={() => go("lead-form")} className="rounded-2xl">Get a Custom Itinerary</Button>
                                <Button variant="ghost" onClick={() => go("stories")} className="rounded-2xl">Read Client Stories →</Button>
                            </div>
                        </div>
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1400&auto=format&fit=crop" alt="Happy family on vacation" className="rounded-2xl object-cover shadow-lg" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Experiences */}
            <section id="experiences" className="py-16">
                <Container>
                    <SectionHeading eyebrow="Designed For You" title="Experiences we plan" subtitle="Pick your vibe—we’ll personalize the rest." center />
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { icon: <Plane className="h-5 w-5" />, title: "Beach & All‑Inclusive", copy: "Sun, sand, supervised kids clubs, and endless mocktails." },
                            { icon: <Hotel className="h-5 w-5" />, title: "Luxury & Wellness", copy: "Resorts and retreats where parents actually relax." },
                            { icon: <MapPin className="h-5 w-5" />, title: "City & Culture", copy: "Museums, food tours, and memory‑making photo ops." },
                            { icon: <Star className="h-5 w-5" />, title: "Bucket‑List Adventures", copy: "National parks, safaris, and once‑in‑a‑lifetime moments." },
                        ].map((x, i) => (
                            <Card key={i}>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">{x.icon} {x.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{x.copy}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Social proof / Stories */}
            <section id="stories" className="bg-muted/30 py-16">
                <Container>
                    <SectionHeading eyebrow="Real Families" title="Stories that stayed with us" subtitle="A few kind words from clients we adore." center />
                    <div className="grid gap-6 md:grid-cols-3">
                        {[1, 2, 3].map((i) => (
                            <Card key={i} className="relative overflow-hidden">
                                <CardContent className="space-y-4 pt-6">
                                    <div className="flex items-center gap-3">
                                        <img src={`https://i.pravatar.cc/64?img=${i + 10}`} alt="Client avatar" className="h-10 w-10 rounded-full" />
                                        <div>
                                            <p className="text-sm font-medium">{i === 1 ? "Jasmine R." : i === 2 ? "The Lelands" : "Kim & Max"}</p>
                                            <p className="text-xs text-muted-foreground">Verified traveler</p>
                                        </div>
                                    </div>
                                    <p className="text-sm leading-relaxed">“We gave our dates and a wish list; TMV gave us the trip of a lifetime. The kids still talk about the turtle snorkel!”</p>
                                    <div className="flex items-center gap-1 text-primary">
                                        {Array.from({ length: 5 }).map((_, idx) => (
                                            <Star key={idx} className="h-4 w-4 fill-current" />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Lead Form / Newsletter */}
            <section id="lead-form" className="py-16">
                <Container>
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div>
                            <SectionHeading eyebrow="Start Here" title="Tell us about your dream trip" subtitle="Share a few details and we’ll reach out with ideas and a complimentary consult." />
                            <Card>
                                <CardContent className="pt-6">
                                    {submitted ? (
                                        <div className="rounded-lg border bg-muted/40 p-6 text-center">
                                            <h3 className="text-xl font-semibold">You’re on the list! 🎉</h3>
                                            <p className="mt-2 text-sm text-muted-foreground">Thanks, {form.name}. Keep an eye on {form.email} for travel inspo and promos.
                                                We’ll also reach out about your consultation.</p>
                                            <div className="mt-4"><Button onClick={() => go("destinations")} className="rounded-2xl">Browse Destinations</Button></div>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4" aria-label="Consultation & promo signup form">
                                            <div className="grid gap-4 sm:grid-cols-2">
                                                <div>
                                                    <label className="mb-1 block text-sm font-medium" htmlFor="name">Full name</label>
                                                    <Input id="name" placeholder="e.g., Jordan Taylor" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                                                </div>
                                                <div>
                                                    <label className="mb-1 block text-sm font-medium" htmlFor="email">Email</label>
                                                    <Input id="email" type="email" placeholder="you@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-sm font-medium" htmlFor="interests">Trip interests</label>
                                                <Input id="interests" placeholder="Beach, Disney, Europe, National Parks…" value={form.interests} onChange={(e) => setForm({ ...form, interests: e.target.value })} />
                                            </div>
                                            <div className="grid gap-3 sm:grid-cols-2">
                                                <label className="flex items-center gap-2 text-sm"><Checkbox checked={form.family} onCheckedChange={(v) => setForm({ ...form, family: Boolean(v) })} /> Family‑friendly</label>
                                                <label className="flex items-center gap-2 text-sm"><Checkbox checked={form.beach} onCheckedChange={(v) => setForm({ ...form, beach: Boolean(v) })} /> Beach</label>
                                                <label className="flex items-center gap-2 text-sm"><Checkbox checked={form.adventure} onCheckedChange={(v) => setForm({ ...form, adventure: Boolean(v) })} /> Adventure</label>
                                                <label className="flex items-center gap-2 text-sm"><Checkbox checked={form.luxury} onCheckedChange={(v) => setForm({ ...form, luxury: Boolean(v) })} /> Luxury</label>
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-sm font-medium" htmlFor="message">Anything we should know?</label>
                                                <Textarea id="message" placeholder="Dates, budget range, celebrating anything special?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                                            </div>
                                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                                <Button size="lg" type="submit" className="rounded-2xl">Request My Free Consult</Button>
                                                <p className="text-xs text-muted-foreground">By submitting, you agree to receive promotional emails. Unsubscribe anytime.</p>
                                            </div>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>
                        </div>

                        {/* Newsletter spotlight */}
                        <div id="newsletter" className="lg:pl-8">
                            <SectionHeading eyebrow="Stay In The Loop" title="Best deals, right to your inbox" subtitle="Join thousands of travel‑loving parents who get timely promos, tips, and first dibs on limited offers." />
                            <div className="relative overflow-hidden rounded-2xl">
                                <img src="https://images.unsplash.com/photo-1519204923167-39c1545b1a23?q=80&w=1400&auto=format&fit=crop" alt="Mother and child looking at a map" className="h-72 w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-6">
                                    <form onSubmit={handleSubmit} className="flex gap-3 rounded-xl bg-background/80 p-2 shadow backdrop-blur">
                                        <Input placeholder="Your email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                                        <Button type="submit" className="rounded-xl">Subscribe</Button>
                                    </form>
                                    <p className="mt-2 text-xs text-muted-foreground">No spam. Just inspiring trips & exclusive promos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ */}
            <section id="faq" className="bg-muted/30 py-16">
                <Container>
                    <SectionHeading eyebrow="Good To Know" title="Frequently asked questions" center />
                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            { q: "Do you charge planning fees?", a: "For most trips, we charge a transparent concierge fee based on complexity. Many resort bookings include our services via partner perks." },
                            { q: "Can you work with any budget?", a: "We specialize in mid‑range to luxury family travel and will always recommend options that respect your budget and goals." },
                            { q: "What about travel insurance?", a: "We’ll walk you through coverage options and provide quotes from trusted providers." },
                            { q: "Do you book groups or celebrations?", a: "Absolutely—multigen families, birthdays, honeymoons, girls’ getaways, you name it." },
                        ].map((item, i) => (
                            <Card key={i}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{item.q}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{item.a}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Contact Strip */}
            <section className="py-10">
                <Container>
                    <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-primary p-6 text-primary-foreground md:flex-row">
                        <div>
                            <h3 className="text-xl font-semibold">Prefer to chat?</h3>
                            <p className="text-sm opacity-90">Schedule a quick call and we’ll start planning in minutes.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <a href="tel:+15555551234" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-4 py-2 text-primary hover:opacity-90"><Phone className="h-4 w-4" /> (555) 555‑1234</a>
                            <a href="mailto:hello@travelingmomvacations.com" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-4 py-2 text-primary hover:opacity-90"><Mail className="h-4 w-4" /> Email Us</a>
                        </div>
                    </div>
                </Container>
            </section>

            <Separator />

            {/* Footer */}
            <footer className="py-10">
                <Container>
                    <div className="grid gap-8 md:grid-cols-4">
                        <div>
                            <div className="flex items-center gap-3">
                                <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=160&auto=format&fit=crop" alt="TMV logo" className="h-9 w-9 rounded-full object-cover" />
                                <span className="text-sm font-semibold">The Traveling Mom Vacations</span>
                            </div>
                            <p className="mt-3 text-sm text-muted-foreground">© {new Date().getFullYear()} The Traveling Mom Vacations. All rights reserved.</p>
                        </div>
                        <div>
                            <h4 className="mb-3 font-medium">Explore</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {navItems.map((i) => (
                                    <li key={i.id}><button className="hover:underline" onClick={() => go(i.id)}>{i.label}</button></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-3 font-medium">Services</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>Custom Itineraries</li>
                                <li>Resort & Cruise Bookings</li>
                                <li>Group Travel</li>
                                <li>Travel Protection</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-3 font-medium">Get updates</h4>
                            <form onSubmit={handleSubmit} className="flex gap-2">
                                <Input placeholder="Email address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                                <Button type="submit" className="rounded-xl">Subscribe</Button>
                            </form>
                            <p className="mt-2 text-xs text-muted-foreground">We respect your privacy. Unsubscribe anytime.</p>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-xs text-muted-foreground">ABTA & IATA logos are for illustrative purposes—replace with your accreditations.</div>
                </Container>
            </footer>
        </div>
    );
}
