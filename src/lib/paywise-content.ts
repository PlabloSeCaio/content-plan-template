// PayWise content config. Add items here as assets are uploaded.

import gridPreviewImg from "@/assets/paywise/grid-preview.png";

import c1s0 from "@/assets/paywise/carousels/c1/slide-0.png";
import c1s1 from "@/assets/paywise/carousels/c1/slide-1.png";
import c1s2 from "@/assets/paywise/carousels/c1/slide-2.png";
import c1s3 from "@/assets/paywise/carousels/c1/slide-3.png";
import c1s4 from "@/assets/paywise/carousels/c1/slide-4.png";

import c2s0 from "@/assets/paywise/carousels/c2/slide-0.png";
import c2s1 from "@/assets/paywise/carousels/c2/slide-1.png";
import c2s2 from "@/assets/paywise/carousels/c2/slide-2.png";
import c2s3 from "@/assets/paywise/carousels/c2/slide-3.png";
import c2s4 from "@/assets/paywise/carousels/c2/slide-4.png";

import c3s0 from "@/assets/paywise/carousels/c3/slide-0.png";
import c3s1 from "@/assets/paywise/carousels/c3/slide-1.png";
import c3s2 from "@/assets/paywise/carousels/c3/slide-2.png";
import c3s3 from "@/assets/paywise/carousels/c3/slide-3.png";
import c3s4 from "@/assets/paywise/carousels/c3/slide-4.png";

import c4s0 from "@/assets/paywise/carousels/c4/slide-0.png";
import c4s1 from "@/assets/paywise/carousels/c4/slide-1.png";
import c4s2 from "@/assets/paywise/carousels/c4/slide-2.png";
import c4s3 from "@/assets/paywise/carousels/c4/slide-3.png";

import c5s0 from "@/assets/paywise/carousels/c5/slide-0.png";
import c5s1 from "@/assets/paywise/carousels/c5/slide-1.png";
import c5s2 from "@/assets/paywise/carousels/c5/slide-2.png";
import c5s3 from "@/assets/paywise/carousels/c5/slide-3.png";
import c5s4 from "@/assets/paywise/carousels/c5/slide-4.png";

import c6s0 from "@/assets/paywise/carousels/c6/slide-0.png";
import c6s1 from "@/assets/paywise/carousels/c6/slide-1.png";
import c6s2 from "@/assets/paywise/carousels/c6/slide-2.png";
import c6s3 from "@/assets/paywise/carousels/c6/slide-3.png";
import c6s4 from "@/assets/paywise/carousels/c6/slide-4.png";

import c7s0 from "@/assets/paywise/carousels/c7/slide-0.png";
import c7s1 from "@/assets/paywise/carousels/c7/slide-1.png";
import c7s2 from "@/assets/paywise/carousels/c7/slide-2.png";
import c7s3 from "@/assets/paywise/carousels/c7/slide-3.png";

import blog1Banner from "@/assets/paywise/blogs/blog1-banner.png";
import blog1Story from "@/assets/paywise/blogs/blog1-story.png";

import blog2Banner from "@/assets/paywise/blogs/blog2-banner.png";
import blog2Story from "@/assets/paywise/blogs/blog2-story.png";
import blog3Banner from "@/assets/paywise/blogs/blog3-banner.png";
import blog3Story from "@/assets/paywise/blogs/blog3-story.png";
import blog4Banner from "@/assets/paywise/blogs/blog4-banner.png";
import blog4Story from "@/assets/paywise/blogs/blog4-story.png";
import blog5Banner from "@/assets/paywise/blogs/blog5-banner.png";
import blog5Story from "@/assets/paywise/blogs/blog5-story.png";

import email1Banner from "@/assets/paywise/newsletters/email1-banner.png";
import email1Story from "@/assets/paywise/newsletters/email1-story.png";
import email2Banner from "@/assets/paywise/newsletters/email2-banner.png";
import email2Story from "@/assets/paywise/newsletters/email2-story.png";
import email3Banner from "@/assets/paywise/newsletters/email3-banner.png";
import email3Story from "@/assets/paywise/newsletters/email3-story.png";
import email4Banner from "@/assets/paywise/newsletters/email4-banner.png";
import email4Story from "@/assets/paywise/newsletters/email4-story.png";

export type CarouselItem = {
  id: number;
  title: string;
  caption?: string;
  slides: string[]; // ordered slide image URLs. First slide is used as the grid cover.
};

export type BlogItem = {
  id: number;
  title: string;
  preview: string;
  banner: string;
  story: string; // 9:16 image
  docUrl: string;
};

export type NewsletterItem = {
  id: number;
  title: string;
  preview: string;
  banner: string;
  story: string; // 9:16 image
  docUrl: string;
};

// Placeholder — replace `slides` arrays as you upload each carousel.
export const carousels: CarouselItem[] = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  title: `Carousel ${i + 1}`,
  caption: "",
  slides: [],
}));

carousels[0] = {
  id: 1,
  title: "Carousel 1",
  caption: "",
  slides: [c1s0, c1s1, c1s2, c1s3, c1s4],
};
carousels[1] = {
  id: 2,
  title: "Carousel 2",
  caption: "",
  slides: [c2s0, c2s1, c2s2, c2s3, c2s4],
};
carousels[2] = {
  id: 3,
  title: "Carousel 3",
  caption: "",
  slides: [c3s0, c3s1, c3s2, c3s3, c3s4],
};
carousels[3] = {
  id: 4,
  title: "Carousel 4",
  caption: "",
  slides: [c4s0, c4s1, c4s2, c4s3],
};
carousels[4] = {
  id: 5,
  title: "Carousel 5",
  caption: "",
  slides: [c5s0, c5s1, c5s2, c5s3, c5s4],
};
carousels[5] = {
  id: 6,
  title: "Carousel 6",
  caption: "",
  slides: [c6s0, c6s1, c6s2, c6s3, c6s4],
};
carousels[6] = {
  id: 7,
  title: "Carousel 7",
  caption: "",
  slides: [c7s0, c7s1, c7s2, c7s3],
};

export const blogs: BlogItem[] = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title: `Blog ${i + 1}`,
  preview: "",
  banner: "",
  story: "",
  docUrl: "#",
}));

blogs[0] = {
  id: 1,
  title: "Pay Bills by Card: Free, Fast, and Totally Easy",
  preview:
    "End the month without the stress of bill queues. Pay T&TEC, WASA, Flow, or Digicel directly from your phone — and use your card now.",
  banner: blog1Banner,
  story: blog1Story,
  docUrl:
    "https://docs.google.com/document/d/100xp3AM4VONf4Gdf5EKyArRbnleqgmEjYSHgJ0u1LgE/edit?tab=t.lqy9rte487p#heading=h.w7im4swh6ywp",
};
blogs[1] = {
  id: 2,
  title: "Never Lose a Sale Again: PayWise for Business",
  preview: "",
  banner: blog2Banner,
  story: blog2Story,
  docUrl:
    "https://docs.google.com/document/d/100xp3AM4VONf4Gdf5EKyArRbnleqgmEjYSHgJ0u1LgE/edit?tab=t.jy0wyq56r2cc#heading=h.9dyqtto7lknm",
};
blogs[2] = {
  id: 3,
  title: "Never Miss a Bill Again: Pay by Card",
  preview: "",
  banner: blog3Banner,
  story: blog3Story,
  docUrl:
    "https://docs.google.com/document/d/100xp3AM4VONf4Gdf5EKyArRbnleqgmEjYSHgJ0u1LgE/edit?tab=t.vxf84z6p95s5#heading=h.g8bzhlsnyp68",
};
blogs[3] = {
  id: 4,
  title: "Grow Your Online Business with Instant Card Payments",
  preview: "",
  banner: blog4Banner,
  story: blog4Story,
  docUrl:
    "https://docs.google.com/document/d/100xp3AM4VONf4Gdf5EKyArRbnleqgmEjYSHgJ0u1LgE/edit?tab=t.h3f1spfl8nh6#heading=h.bw5s5ctkm3ct",
};
blogs[4] = {
  id: 5,
  title: "End-of-Month Bills? Pay Faster, Safer, and Free",
  preview: "",
  banner: blog5Banner,
  story: blog5Story,
  docUrl:
    "https://docs.google.com/document/d/100xp3AM4VONf4Gdf5EKyArRbnleqgmEjYSHgJ0u1LgE/edit?tab=t.nv7l6jm966k2#heading=h.ytkz11tmhwd5",
};

export const newsletters: NewsletterItem[] = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  title: `Email ${i + 1}`,
  preview: "",
  banner: "",
  story: "",
  docUrl: "#",
}));

newsletters[0] = {
  id: 1,
  title: "Your bills don't need a line.",
  preview:
    "End the month without the stress of bill queues. With PayWise, pay T&TEC, WASA, Flow, or Digicel directly from your phone — and use your card. No lines. No fees. No fuss.",
  banner: email1Banner,
  story: email1Story,
  docUrl: "#",
};
newsletters[1] = {
  id: 2,
  title: "Your customers want to pay by card — you can make it happen.",
  preview: "",
  banner: email2Banner,
  story: email2Story,
  docUrl: "#",
};
newsletters[2] = {
  id: 3,
  title: "Send money to family in Trinidad without paying high fee",
  preview: "",
  banner: email3Banner,
  story: email3Story,
  docUrl: "#",
};
newsletters[3] = {
  id: 4,
  title: "Pay your utility bills fast, safe, and free with PayWise.",
  preview: "",
  banner: email4Banner,
  story: email4Story,
  docUrl: "#",
};

export const meta = {
  client: "PayWise",
  period: "Monthly Drop",
  preparedBy: "Content Preview",
  gridPreview: gridPreviewImg as string,
};
