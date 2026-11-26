import {
  personalInfo,
  experience,
  education,
  certifications,
  projects,
  blogs,
  skills,
} from "@/data/portfolio";

const SITE_URL = "https://prady029.github.io";

export default function StructuredData() {
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  const profilePageId = `${SITE_URL}/#profilepage`;

  const knowsAbout = skills.flatMap((group) => group.items);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${SITE_URL}/`,
        name: `${personalInfo.name} — ${personalInfo.role}`,
        description: personalInfo.summary,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: `${SITE_URL}/`,
        name: `${personalInfo.name} — ${personalInfo.role}`,
        description: personalInfo.summary,
        inLanguage: "en",
        dateModified: "2026-11-26",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: personalInfo.name,
        alternateName: personalInfo.username,
        jobTitle: personalInfo.role,
        description: personalInfo.summary,
        url: `${SITE_URL}/`,
        image: personalInfo.avatar,
        email: `mailto:${personalInfo.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressCountry: "IN",
        },
        sameAs: [
          personalInfo.github,
          personalInfo.linkedin,
          personalInfo.medium,
          personalInfo.twitter,
          personalInfo.telegram,
        ],
        worksFor: {
          "@type": "Organization",
          name: experience[0].company,
        },
        alumniOf: education.map((edu) => ({
          "@type": "EducationalOrganization",
          name: edu.institution,
          address: {
            "@type": "PostalAddress",
            addressLocality: edu.location.replace(", India", ""),
            addressCountry: "IN",
          },
        })),
        hasCredential: certifications.map((cert) => ({
          "@type": "EducationalOccupationalCredential",
          name: cert.title,
          url: cert.url,
          datePublished: cert.date,
          recognizedBy: {
            "@type": "Organization",
            name: cert.issuer,
          },
        })),
        knowsAbout,
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#projects`,
        name: "Selected Open-Source Projects & Research",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareSourceCode",
            name: project.name,
            description: project.description,
            url: project.liveUrl ?? project.url,
            codeRepository: project.url,
            programmingLanguage: project.language,
            author: { "@id": personId },
            keywords: project.tags.join(", "),
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#writing`,
        name: "Articles & Essays",
        itemListElement: blogs.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Article",
            headline: post.title,
            description: post.subTitle,
            url: post.url,
            author: { "@id": personId },
            publisher: {
              "@type": "Organization",
              name: post.platform,
            },
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
