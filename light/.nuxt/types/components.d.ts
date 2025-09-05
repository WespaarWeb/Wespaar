
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

interface _GlobalComponents {
      'MfpPopup': typeof import("../components/MfpPopup.vue")['default']
    'PageBanner': typeof import("../components/PageBanner.vue")['default']
    'Preloader': typeof import("../components/Preloader.vue")['default']
    'ProgressBar': typeof import("../components/ProgressBar.vue")['default']
    'ScrollTop': typeof import("../components/ScrollTop.vue")['default']
    'CountersCounter': typeof import("../components/counters/Counter.vue")['default']
    'FootersFooter': typeof import("../components/footers/Footer.vue")['default']
    'FootersFooter1': typeof import("../components/footers/Footer1.vue")['default']
    'FootersFooter2': typeof import("../components/footers/Footer2.vue")['default']
    'FootersFooter3': typeof import("../components/footers/Footer3.vue")['default']
    'FootersFooter4': typeof import("../components/footers/Footer4.vue")['default']
    'FootersFooter5': typeof import("../components/footers/Footer5.vue")['default']
    'FootersFooter6': typeof import("../components/footers/Footer6.vue")['default']
    'HeadersDefaultHeader': typeof import("../components/headers/DefaultHeader.vue")['default']
    'HeadersHeader': typeof import("../components/headers/Header.vue")['default']
    'HeadersHeader1': typeof import("../components/headers/Header1.vue")['default']
    'HeadersHeader2': typeof import("../components/headers/Header2.vue")['default']
    'HeadersHeader3': typeof import("../components/headers/Header3.vue")['default']
    'HeadersNav': typeof import("../components/headers/Nav.vue")['default']
    'HeadersSearch': typeof import("../components/headers/Search.vue")['default']
    'HeadersSidebar': typeof import("../components/headers/Sidebar.vue")['default']
    'SlidersGallery': typeof import("../components/sliders/Gallery.vue")['default']
    'SlidersHero5': typeof import("../components/sliders/Hero5.vue")['default']
    'SlidersProject': typeof import("../components/sliders/Project.vue")['default']
    'SlidersProject2': typeof import("../components/sliders/Project2.vue")['default']
    'SlidersTestimonial': typeof import("../components/sliders/Testimonial.vue")['default']
    'SlidersTestimonial2': typeof import("../components/sliders/Testimonial2.vue")['default']
    'SlidersTestimonial3': typeof import("../components/sliders/Testimonial3.vue")['default']
    'SlidersTestimonial4': typeof import("../components/sliders/Testimonial4.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'Swiper': typeof import("swiper/vue")['Swiper']
    'SwiperSlide': typeof import("swiper/vue")['SwiperSlide']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyMfpPopup': LazyComponent<typeof import("../components/MfpPopup.vue")['default']>
    'LazyPageBanner': LazyComponent<typeof import("../components/PageBanner.vue")['default']>
    'LazyPreloader': LazyComponent<typeof import("../components/Preloader.vue")['default']>
    'LazyProgressBar': LazyComponent<typeof import("../components/ProgressBar.vue")['default']>
    'LazyScrollTop': LazyComponent<typeof import("../components/ScrollTop.vue")['default']>
    'LazyCountersCounter': LazyComponent<typeof import("../components/counters/Counter.vue")['default']>
    'LazyFootersFooter': LazyComponent<typeof import("../components/footers/Footer.vue")['default']>
    'LazyFootersFooter1': LazyComponent<typeof import("../components/footers/Footer1.vue")['default']>
    'LazyFootersFooter2': LazyComponent<typeof import("../components/footers/Footer2.vue")['default']>
    'LazyFootersFooter3': LazyComponent<typeof import("../components/footers/Footer3.vue")['default']>
    'LazyFootersFooter4': LazyComponent<typeof import("../components/footers/Footer4.vue")['default']>
    'LazyFootersFooter5': LazyComponent<typeof import("../components/footers/Footer5.vue")['default']>
    'LazyFootersFooter6': LazyComponent<typeof import("../components/footers/Footer6.vue")['default']>
    'LazyHeadersDefaultHeader': LazyComponent<typeof import("../components/headers/DefaultHeader.vue")['default']>
    'LazyHeadersHeader': LazyComponent<typeof import("../components/headers/Header.vue")['default']>
    'LazyHeadersHeader1': LazyComponent<typeof import("../components/headers/Header1.vue")['default']>
    'LazyHeadersHeader2': LazyComponent<typeof import("../components/headers/Header2.vue")['default']>
    'LazyHeadersHeader3': LazyComponent<typeof import("../components/headers/Header3.vue")['default']>
    'LazyHeadersNav': LazyComponent<typeof import("../components/headers/Nav.vue")['default']>
    'LazyHeadersSearch': LazyComponent<typeof import("../components/headers/Search.vue")['default']>
    'LazyHeadersSidebar': LazyComponent<typeof import("../components/headers/Sidebar.vue")['default']>
    'LazySlidersGallery': LazyComponent<typeof import("../components/sliders/Gallery.vue")['default']>
    'LazySlidersHero5': LazyComponent<typeof import("../components/sliders/Hero5.vue")['default']>
    'LazySlidersProject': LazyComponent<typeof import("../components/sliders/Project.vue")['default']>
    'LazySlidersProject2': LazyComponent<typeof import("../components/sliders/Project2.vue")['default']>
    'LazySlidersTestimonial': LazyComponent<typeof import("../components/sliders/Testimonial.vue")['default']>
    'LazySlidersTestimonial2': LazyComponent<typeof import("../components/sliders/Testimonial2.vue")['default']>
    'LazySlidersTestimonial3': LazyComponent<typeof import("../components/sliders/Testimonial3.vue")['default']>
    'LazySlidersTestimonial4': LazyComponent<typeof import("../components/sliders/Testimonial4.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazySwiper': LazyComponent<typeof import("swiper/vue")['Swiper']>
    'LazySwiperSlide': LazyComponent<typeof import("swiper/vue")['SwiperSlide']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
