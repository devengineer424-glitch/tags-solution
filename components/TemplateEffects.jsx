"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Parallax,
  HashNavigation,
} from "swiper/modules";

// Slider configs mirror the original js/main.js one-for-one.
const SLIDERS = [
  {
    sel: ".mil-banner-slideshow",
    cfg: {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1500,
      effect: "fade",
      parallax: true,
      autoplay: { delay: 5000 },
      loop: true,
      pagination: { el: ".mil-pagination", type: "bullets", clickable: true },
    },
  },
  {
    sel: ".mil-banner-slider",
    cfg: {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1500,
      effect: "fade",
      parallax: true,
      autoplay: { delay: 5000 },
      loop: true,
      navigation: { prevEl: ".mil-banner-prev", nextEl: ".mil-banner-next" },
    },
  },
  {
    sel: ".mil-works-slider",
    cfg: {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      navigation: { prevEl: ".mil-works-prev", nextEl: ".mil-works-next" },
      breakpoints: { 768: { slidesPerView: 2 } },
    },
  },
  {
    sel: ".mil-blog-slider",
    cfg: {
      spaceBetween: 30,
      speed: 800,
      slidesPerView: 1,
      navigation: { prevEl: ".mil-blog-prev", nextEl: ".mil-blog-next" },
      breakpoints: {
        768: { slidesPerView: 2 },
        992: { slidesPerView: 2 },
        1200: { slidesPerView: "auto" },
      },
    },
  },
  {
    sel: ".mil-revi-slider",
    cfg: {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      navigation: { prevEl: ".mil-revi-prev", nextEl: ".mil-revi-next" },
      breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
    },
  },
  {
    sel: ".mil-revi-slider-2",
    cfg: {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      autoplay: { delay: 5000 },
      loop: true,
      navigation: { prevEl: ".mil-revi-prev", nextEl: ".mil-revi-next" },
      breakpoints: { 768: { slidesPerView: 2 } },
    },
  },
  {
    sel: ".mil-services-slider",
    cfg: {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      navigation: { prevEl: ".mil-services-prev", nextEl: ".mil-services-next" },
      breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
    },
  },
  {
    sel: ".mil-events-slider",
    cfg: {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      navigation: { prevEl: ".mil-events-prev", nextEl: ".mil-events-next" },
      breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
    },
  },
  {
    sel: ".mil-courses-slider",
    cfg: {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      navigation: { prevEl: ".mil-courses-prev", nextEl: ".mil-courses-next" },
      breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
    },
  },
  {
    sel: ".mil-banners-slider",
    cfg: {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      autoplay: { delay: 5000 },
      effect: "fade",
      parallax: true,
      loop: true,
      pagination: {
        el: ".mil-banners-pagination",
        type: "bullets",
        clickable: true,
      },
    },
  },
  {
    sel: ".mil-box-slider",
    cfg: {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      parallax: true,
      effect: "fade",
      navigation: { prevEl: ".mil-box-prev", nextEl: ".mil-box-next" },
    },
  },
  {
    sel: ".mil-tabs-slider",
    cfg: {
      slidesPerView: 1,
      speed: 800,
      allowTouchMove: false,
      hashNavigation: { watchState: true },
      effect: "fade",
      parallax: true,
    },
  },
  {
    sel: ".mil-tabs-slider-2",
    cfg: {
      slidesPerView: 1,
      speed: 800,
      allowTouchMove: false,
      hashNavigation: { watchState: true },
      effect: "fade",
      parallax: true,
    },
  },
];

const MODULES = [
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Parallax,
  HashNavigation,
];

export default function TemplateEffects() {
  const pathname = usePathname();

  // Delegated UI interactions (mobile menu, accordion, tab buttons, file input).
  // Bound once for the whole app so they survive client-side navigation.
  useEffect(() => {
    const onClick = (e) => {
      // mobile menu toggle
      const menuBtn = e.target.closest(".mil-menu-btn");
      if (menuBtn) {
        menuBtn.classList.toggle("mil-active");
        document.querySelector(".mil-navigation")?.classList.toggle("mil-active");
        return;
      }
      // accordion
      const acc = e.target.closest(".mil-accordion");
      if (acc) {
        acc.classList.toggle("mil-active");
        const panel = acc.nextElementSibling;
        if (panel) {
          panel.style.maxHeight = panel.style.maxHeight
            ? null
            : panel.scrollHeight + "px";
        }
        return;
      }
      // horizontal tab buttons
      const tabLink = e.target.closest(".mil-tab-buttons a");
      if (tabLink) {
        document
          .querySelectorAll(".mil-tab-buttons a")
          .forEach((a) => a.classList.remove("mil-active"));
        tabLink.classList.add("mil-active");
        return;
      }
      // left-nav tab buttons
      const leftNavLink = e.target.closest(".mil-tabs-left-nav a");
      if (leftNavLink) {
        document
          .querySelectorAll(".mil-tabs-left-nav a")
          .forEach((a) => a.classList.remove("mil-active"));
        leftNavLink.classList.add("mil-active");
      }
    };

    const onChange = (e) => {
      const input = e.target.closest("#mil-file-input");
      if (!input) return;
      const label = document.getElementsByClassName("mil-custom-file-input")[0];
      const match = input.value.match(/\w+.\w+$/);
      if (label && match && match[0].trim()) {
        label.classList.add("mil-with-file");
        label.innerText = match[0];
      }
    };

    document.addEventListener("click", onClick);
    document.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("change", onChange);
    };
  }, []);

  // Swiper init + fixed-header scroll behavior. Re-runs per route so freshly
  // mounted page markup gets initialised, and cleans up on navigation.
  useEffect(() => {
    const instances = [];
    SLIDERS.forEach(({ sel, cfg }) => {
      document.querySelectorAll(sel).forEach((el) => {
        instances.push(new Swiper(el, { ...cfg, modules: MODULES }));
      });
    });

    const applyScrollState = () => {
      const scrolled = window.scrollY >= 220;
      document.querySelectorAll(".mil-top-panel.mil-animated").forEach((el) => {
        el.classList.toggle("mil-top-panel-transparent", !scrolled);
      });
      document.querySelectorAll(".has-additional-panel").forEach((el) => {
        el.classList.toggle("mil-hide-top", scrolled);
      });
    };

    applyScrollState();
    window.addEventListener("scroll", applyScrollState);

    return () => {
      window.removeEventListener("scroll", applyScrollState);
      instances.forEach((sw) => {
        try {
          sw.destroy(true, true);
        } catch (_) {
          /* already destroyed */
        }
      });
    };
  }, [pathname]);

  return null;
}
