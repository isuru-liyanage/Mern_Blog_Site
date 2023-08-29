import './blogitem.css'
function BlogItem() {
    return (
        <>
        <div className="item_layout">
            <div className="image_element">
                <img src="https://assets.website-files.com/5e6bef9160e290b99b7644b5/64ba5be4b04c890a427d85b2_Everything%20You%20Need%20to%20Know%20About%20Scholarships.png"
                    loading="lazy" alt="Everything You Need to Know About Scholarships"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 58vw, (max-width: 1279px) 31vw, 380px"
                    srcSet="https://assets.website-files.com/5e6bef9160e290b99b7644b5/64ba5be4b04c890a427d85b2_Everything%20You%20Need%20to%20Know%20About%20Scholarships-p-500.png 500w, https://assets.website-files.com/5e6bef9160e290b99b7644b5/64ba5be4b04c890a427d85b2_Everything%20You%20Need%20to%20Know%20About%20Scholarships-p-800.png 800w, https://assets.website-files.com/5e6bef9160e290b99b7644b5/64ba5be4b04c890a427d85b2_Everything%20You%20Need%20to%20Know%20About%20Scholarships-p-1080.png 1080w, https://assets.website-files.com/5e6bef9160e290b99b7644b5/64ba5be4b04c890a427d85b2_Everything%20You%20Need%20to%20Know%20About%20Scholarships.png 1180w"
                    className="blog__thumbnail-img"/>
            </div>
            <div className="text_element">
                <div className="blog__content" >
                    <div id="w-node-_2c1bdfdd-9f03-aa5e-f384-8f32f607d1db-2f75df94" className="blog__top">
                        <div className="blog__category">Scholarships</div>
                        <div className="blog__date">
                            <div>Publication date:</div>
                            <div>Jul 21, 2023</div>
                        </div>
                    </div>
                    <div className="blog__title">Everything You Need to Know About Scholarships + Infographics</div>
                    <div id="w-node-b1611847-2652-c590-9994-20784312122a-2f75df94" className="btn--green_240">
                        <div className="btn-text" >Read More</div>
                        <div className="btn-icon w-embed" >

                        </div>
                    </div>
                </div>

            </div>


        </div>



        </>

    );
}
export default BlogItem;