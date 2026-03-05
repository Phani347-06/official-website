import { siteData } from "@/data/site-data";

export function generateStaticParams() {
    return siteData.pastEvents.map((event) => ({
        slug: event.slug,
    }));
}

export default function ArchiveLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
