import type { FlickingOptions } from "@egjs/vue3-flicking";

const defaultOption : Partial<FlickingOptions> = {
    circular : true,
    align: "prev",
    defaultIndex: 0,
    circularFallback: "bound",
    panelsPerView: 3
}

export {defaultOption}