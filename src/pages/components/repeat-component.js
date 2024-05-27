import { content } from './content';
export default function RepeatComponent() {
    // const content = require('./content').content;
    // console.log(content, 'harsh');
    return (
        <>
            {!!content && content.map((item, i) => {
                return (
                    <article key={i} className='repeat-article'>
                        <div className='repeat-content'>
                            <div className='abc'>
                                <div><img src={!!item.productLogoUrl && item.productLogoUrl} alt='product-logo' /></div>
                                <div className='abc1'>
                                    <p>{!!item && !!item.productName && item.productName}</p>
                                    <h2>{!!item && !!item.productHeading && item.productHeading}</h2>
                                </div>
                            </div>
                            <h3 className='def'>{!!item && !!item.productDescription && item.productDescription}</h3>
                            <div className='ijk1'>
                                {!!item.subSection1 && Object.entries(item.subSection1).map(([key, value]) => (
                                    <div key={key}>
                                        <h3>{key}</h3>
                                        <p>{value}</p>
                                    </div>
                                ))}
                            </div>
                            <div className='ijk1'>
                                {!!item.subSection2 && Object.entries(item.subSection2).map(([key, value]) => (
                                    <div key={key}>
                                        <h3>{key}</h3>
                                        <p>{value}</p>
                                    </div>
                                ))}
                            </div>
                            <div className='ijk1'>
                                {!!item.subSection3 && Object.entries(item.subSection3).map(([key, value]) => (
                                    <div key={key}>
                                        <h3>{key}</h3>
                                        <p>{value}</p>
                                    </div>
                                ))}
                            </div>
                            <div className='xyz'>
                                <a className='button1'>
                                    <span>
                                        {item.button1}
                                    </span>
                                    <span>
                                        <img src='https://res.cloudinary.com/drzta9shk/image/upload/v1708324096/website/HomePage_Feb24/arrow_white_vi1dud.svg' />
                                    </span>
                                </a>
                                <a className='button2'>
                                    <span>
                                        {item.button2}
                                    </span>
                                    <span>
                                        <img src='https://res.cloudinary.com/drzta9shk/image/upload/v1712321650/website/HomePage_Feb24/call_made_purple_qctpj6.svg' />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className='repeat-content-image'></div>
                    </article>
                )
            })}
        </>
    )
}