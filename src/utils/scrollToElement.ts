import * as Scroll from "react-scroll";

export const scrollToElement = (target: string, offset: number) => {
    Scroll.scroller.scrollTo(target, {
        duration: 700,
        smooth: true,
        offset,
    })
}
