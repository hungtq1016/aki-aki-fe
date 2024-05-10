import type { FlickingOptions } from '@egjs/vue3-flicking'

const slickOptions: Partial<FlickingOptions> = {
  circular: true,
  align: 'prev',
  defaultIndex: 0,
  circularFallback: 'bound',
  panelsPerView: 3
}

const bannerOptions: Partial<FlickingOptions> = {
  circular: true,
  align: 'prev',
  defaultIndex: 0,
  circularFallback: 'bound',
  panelsPerView: 1
}

const galleryOptions: Partial<FlickingOptions> = {
  circular: true,
  align: 'prev',
  defaultIndex: 1,
  circularFallback: 'bound',
  panelsPerView: 4
}

const customerOptions: Partial<FlickingOptions> = {
  circular: true,
  align: 'prev',
  defaultIndex: 1,
  circularFallback: 'bound',
  panelsPerView: 6
}

export { slickOptions, bannerOptions, galleryOptions, customerOptions }
