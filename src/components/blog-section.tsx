'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface BlogPost {
    id: string;
    title: string;
    description: string;
    category: string;
    date: string;
    image: (typeof PlaceHolderImages)[0];
}

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Understanding Your Rights: A Guide to Civil Litigation',
        description: 'Civil litigation can be a complex process, involving disputes between individuals or organizations. This guide breaks down the essential steps, from filing a complaint to discovery and trial, and explains what you need to know to protect your rights. Understanding the procedural rules and strategic considerations can make a significant difference in the outcome of your case. I am here to navigate this journey with you, ensuring your voice is heard and your interests are robustly defended.',
        category: 'Civil Law',
        date: 'July 15, 2024',
        image: PlaceHolderImages.find(img => img.id === 'blog-1')!,
    },
    {
        id: '2',
        title: 'The Importance of Due Diligence in Real Estate Transactions',
        description: 'Learn why thorough due diligence is crucial before buying or selling property. This process involves investigating a property to identify any potential legal or financial issues. From title searches to property surveys and zoning reviews, proper due diligence can save you from costly legal disputes, hidden liabilities, and future headaches. It is a critical step for a secure investment, and I can guide you through every detail to ensure a smooth and safe transaction.',
        category: 'Real Estate',
        date: 'July 10, 2024',
        image: PlaceHolderImages.find(img => img.id === 'blog-2')!,
    },
    {
        id: '3',
        title: 'Navigating Corporate Law: Tips for Startups',
        description: 'For startups, understanding corporate law is key to long-term success. From choosing the right business structure (like an LLC or corporation) to drafting shareholder agreements and ensuring regulatory compliance, the initial legal framework is foundational. Here are my top tips for navigating the legal landscape, protecting your intellectual property, and setting your new venture up for sustainable growth. Proper legal guidance from the start can prevent future complications and let you focus on innovation.',
        category: 'Corporate Law',
        date: 'July 5, 2024',
        image: PlaceHolderImages.find(img => img.id === 'blog-3')!,
    },
    {
        id: '4',
        title: 'Compassionate Counsel in Family Law Matters',
        description: "Family law cases, such as divorce and child custody, are emotionally charged and require a delicate touch. My approach combines compassionate counsel with assertive representation to protect your interests and your family's well-being. I prioritize clear communication and work towards amicable resolutions when possible, but I am fully prepared to advocate for you in court to achieve a fair outcome. Your peace of mind is my priority during these challenging times.",
        category: 'Family Law',
        date: 'August 1, 2024',
        image: PlaceHolderImages.find(img => img.id === 'blog-4')!,
    },
    {
        id: '5',
        title: 'Your Defense: What to Do When Facing Criminal Charges',
        description: "Being accused of a crime is a serious matter that can have life-altering consequences. Understanding your rights, such as the right to remain silent and the right to an attorney, is the first critical step. This post outlines the initial actions you should take and how a strong legal defense is built, from analyzing evidence to challenging the prosecution's case. I am committed to providing a vigorous defense to protect your freedom and your future.",
        category: 'Criminal Defense',
        date: 'August 5, 2024',
        image: PlaceHolderImages.find(img => img.id === 'blog-5')!,
    },
    {
        id: '6',
        title: 'The Anatomy of a Legally Binding Contract',
        description: "A well-drafted contract is the bedrock of any successful business agreement. This article explores the essential elements that make a contract legally enforceable, including offer, acceptance, consideration, and the intention to create legal relations. Learn about common pitfalls to avoid, the importance of clear language, and why having a legal expert review your contracts can save you from future disputes. I can assist in drafting and reviewing agreements to ensure your interests are secure.",
        category: 'Contract Law',
        date: 'August 10, 2024',
        image: PlaceHolderImages.find(img => img.id === 'blog-6')!,
    }
];

function BlogPostCard({ post }: { post: BlogPost }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const descriptionPreview = post.description.substring(0, 100) + '...';

    return (
        <Card className="h-full flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 bg-card border-border/50 overflow-hidden group">
            <CardHeader className='p-0'>
                {post.image && (
                    <div className="relative aspect-video w-full">
                        <Image
                            src={post.image.imageUrl}
                            alt={post.image.description}
                            data-ai-hint={post.image.imageHint}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                )}
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <Badge variant="outline" className="border-primary/50 text-primary/80">{post.category}</Badge>
                </div>
                <CardTitle className="font-headline text-xl text-foreground">
                    <Link href="#" className="hover:text-primary transition-colors">{post.title}</Link>
                </CardTitle>
                <CardDescription className={cn("mt-2 flex-grow transition-all duration-300 ease-in-out", isExpanded ? "max-h-full" : "max-h-[60px] overflow-hidden")}>
                    {isExpanded ? post.description : descriptionPreview}
                </CardDescription>
                <Button onClick={toggleExpanded} variant="link" className="p-0 h-auto self-start mt-4 text-primary group/link">
                    {isExpanded ? 'Read Less' : 'Read More'}
                    {isExpanded
                        ? <ChevronUp className="ml-2 h-4 w-4 transition-transform duration-300" />
                        : <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                    }
                </Button>
            </CardContent>
        </Card>
    );
}

export default function BlogSection() {
    return (
        <section id="blog" className="bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 text-center fade-in-up">
                    <Badge variant="outline" className="mb-2">My Insights</Badge>
                    <h2 className="text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl">From My Blog</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
                        Stay informed with my latest insights and legal analysis.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post, index) => (
                        <div key={post.id} className="fade-in-up" style={{ transitionDelay: `${index * 100}ms` }}>
                            <BlogPostCard post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
