
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)


export const MfpPopup: typeof import("../components/MfpPopup.vue")['default']
export const PageBanner: typeof import("../components/PageBanner.vue")['default']
export const Preloader: typeof import("../components/Preloader.vue")['default']
export const ProgressBar: typeof import("../components/ProgressBar.vue")['default']
export const ScrollTop: typeof import("../components/ScrollTop.vue")['default']
export const CountersCounter: typeof import("../components/counters/Counter.vue")['default']
export const FootersFooter: typeof import("../components/footers/Footer.vue")['default']
export const FootersFooter1: typeof import("../components/footers/Footer1.vue")['default']
export const FootersFooter2: typeof import("../components/footers/Footer2.vue")['default']
export const FootersFooter3: typeof import("../components/footers/Footer3.vue")['default']
export const FootersFooter4: typeof import("../components/footers/Footer4.vue")['default']
export const FootersFooter5: typeof import("../components/footers/Footer5.vue")['default']
export const FootersFooter6: typeof import("../components/footers/Footer6.vue")['default']
export const HeadersDefaultHeader: typeof import("../components/headers/DefaultHeader.vue")['default']
export const HeadersHeader: typeof import("../components/headers/Header.vue")['default']
export const HeadersHeader1: typeof import("../components/headers/Header1.vue")['default']
export const HeadersHeader2: typeof import("../components/headers/Header2.vue")['default']
export const HeadersHeader3: typeof import("../components/headers/Header3.vue")['default']
export const HeadersNav: typeof import("../components/headers/Nav.vue")['default']
export const HeadersSearch: typeof import("../components/headers/Search.vue")['default']
export const HeadersSidebar: typeof import("../components/headers/Sidebar.vue")['default']
export const SlidersGallery: typeof import("../components/sliders/Gallery.vue")['default']
export const SlidersHero5: typeof import("../components/sliders/Hero5.vue")['default']
export const SlidersProject: typeof import("../components/sliders/Project.vue")['default']
export const SlidersProject2: typeof import("../components/sliders/Project2.vue")['default']
export const SlidersTestimonial: typeof import("../components/sliders/Testimonial.vue")['default']
export const SlidersTestimonial2: typeof import("../components/sliders/Testimonial2.vue")['default']
export const SlidersTestimonial3: typeof import("../components/sliders/Testimonial3.vue")['default']
export const SlidersTestimonial4: typeof import("../components/sliders/Testimonial4.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Swiper: typeof import("swiper/vue")['Swiper']
export const SwiperSlide: typeof import("swiper/vue")['SwiperSlide']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyMfpPopup: LazyComponent<typeof import("../components/MfpPopup.vue")['default']>
export const LazyPageBanner: LazyComponent<typeof import("../components/PageBanner.vue")['default']>
export const LazyPreloader: LazyComponent<typeof import("../components/Preloader.vue")['default']>
export const LazyProgressBar: LazyComponent<typeof import("../components/ProgressBar.vue")['default']>
export const LazyScrollTop: LazyComponent<typeof import("../components/ScrollTop.vue")['default']>
export const LazyCountersCounter: LazyComponent<typeof import("../components/counters/Counter.vue")['default']>
export const LazyFootersFooter: LazyComponent<typeof import("../components/footers/Footer.vue")['default']>
export const LazyFootersFooter1: LazyComponent<typeof import("../components/footers/Footer1.vue")['default']>
export const LazyFootersFooter2: LazyComponent<typeof import("../components/footers/Footer2.vue")['default']>
export const LazyFootersFooter3: LazyComponent<typeof import("../components/footers/Footer3.vue")['default']>
export const LazyFootersFooter4: LazyComponent<typeof import("../components/footers/Footer4.vue")['default']>
export const LazyFootersFooter5: LazyComponent<typeof import("../components/footers/Footer5.vue")['default']>
export const LazyFootersFooter6: LazyComponent<typeof import("../components/footers/Footer6.vue")['default']>
export const LazyHeadersDefaultHeader: LazyComponent<typeof import("../components/headers/DefaultHeader.vue")['default']>
export const LazyHeadersHeader: LazyComponent<typeof import("../components/headers/Header.vue")['default']>
export const LazyHeadersHeader1: LazyComponent<typeof import("../components/headers/Header1.vue")['default']>
export const LazyHeadersHeader2: LazyComponent<typeof import("../components/headers/Header2.vue")['default']>
export const LazyHeadersHeader3: LazyComponent<typeof import("../components/headers/Header3.vue")['default']>
export const LazyHeadersNav: LazyComponent<typeof import("../components/headers/Nav.vue")['default']>
export const LazyHeadersSearch: LazyComponent<typeof import("../components/headers/Search.vue")['default']>
export const LazyHeadersSidebar: LazyComponent<typeof import("../components/headers/Sidebar.vue")['default']>
export const LazySlidersGallery: LazyComponent<typeof import("../components/sliders/Gallery.vue")['default']>
export const LazySlidersHero5: LazyComponent<typeof import("../components/sliders/Hero5.vue")['default']>
export const LazySlidersProject: LazyComponent<typeof import("../components/sliders/Project.vue")['default']>
export const LazySlidersProject2: LazyComponent<typeof import("../components/sliders/Project2.vue")['default']>
export const LazySlidersTestimonial: LazyComponent<typeof import("../components/sliders/Testimonial.vue")['default']>
export const LazySlidersTestimonial2: LazyComponent<typeof import("../components/sliders/Testimonial2.vue")['default']>
export const LazySlidersTestimonial3: LazyComponent<typeof import("../components/sliders/Testimonial3.vue")['default']>
export const LazySlidersTestimonial4: LazyComponent<typeof import("../components/sliders/Testimonial4.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazySwiper: LazyComponent<typeof import("swiper/vue")['Swiper']>
export const LazySwiperSlide: LazyComponent<typeof import("swiper/vue")['SwiperSlide']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
