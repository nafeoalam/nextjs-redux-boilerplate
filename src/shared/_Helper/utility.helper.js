
export default class UtilityHelper {

    static transforSeoHtml(htmlString) {
        //Transform
        return htmlString
    }

    static extractLessonTypeAndUrl() {
        {
            const videoString = `[iframevideo] <iframe src="https://player.vimeo.com/video/405841542?title=0&amp;byline=0&amp;portrait=0" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen" data-mce-fragment="1"></iframe>[/iframevideo]`
            const videoRegex = /(?<=\<iframe src=")(.*?)(?=\")/
        }
        {
            const pdfString = `[tnc-pdf-viewer-iframe file="https://theanimalcare.org/wp-content/uploads/2020/06/13.pdf" width="850" height="10000=" download="true" print="true" fullscreen="true" share="true" zoom="true" open="true" pagenav="true" logo="true" find="true" language="en-US" page="" default_zoom="auto" pagemode=""]`
            const pdfRegex = /(?<=\le=")(.*?)(?=\")/
        }
        {
            const articulateString = `[iframe height='800' package_type='default' popup='0' button_label='' endpoint='https://theanimalcare.org']https://theanimalcare.org/wp-content/uploads/package_uploads/About_Competitions/story.html[/iframe]`
            const articulateRegex = /(?<='])(.*?)(?=\[)/
        }

    }

}

// Unit type: Video 
// ---------------------
// [iframevideo] <iframe src="https://player.vimeo.com/video/405841542?title=0&amp;byline=0&amp;portrait=0" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen" data-mce-fragment="1"></iframe>[/iframevideo]
// ---------------------
// Unit Type: PDF
// ---------------------
// [tnc-pdf-viewer-iframe file="https://theanimalcare.org/wp-content/uploads/2020/06/13.pdf" width="850" height="10000=" download="true" print="true" fullscreen="true" share="true" zoom="true" open="true" pagenav="true" logo="true" find="true" language="en-US" page="" default_zoom="auto" pagemode=""]
// ---------------------
// Unit Type: Articulate
// ---------------------
// [iframe height='800' package_type='default' popup='0' button_label='' endpoint='https://theanimalcare.org']https://theanimalcare.org/wp-content/uploads/package_uploads/About_Competitions/story.html[/iframe]
// ---------------------