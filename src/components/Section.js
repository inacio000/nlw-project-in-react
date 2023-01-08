export default function Section(props) {
    return (
        <section>
            <div>
                <h2>{props.title}</h2>
                <p>The theme's videos that I liked to watch!</p>

                <div class="swiper mySwiper">

                    <ul class="youtuber-list swiper-wrapper">
                        <li class="swiper-slide">
                            <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n" target="_blank"
                            rel="noreferrer">
                                <img src="https://i.ytimg.com/vi/Ejkb_YpuHWs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDoi9WQOODqhbt6FfT4MRtmNYR75Q" alt="Video from Curso em video channel" width="170"/>
                            </a>
                        </li>
                        <li class="swiper-slide">
                            <a href="https://www.youtube.com/watch?v=l0822YMiZ8I&list=PLEA7sa-uxMQcx4DAjoQEyPSF-smYiHU7W&index=25" target="_blank"
                            rel="noreferrer">
                                <img src="https://i.ytimg.com/vi/KWntxkf25nA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDbu5raK20fURm82RO7iuej0k2Y4g" alt="Video from Bulas Attekita's channel" width="170"/>
                            </a>
                        </li>
                        <li class="swiper-slide">
                            <a href="https://www.youtube.com/watch?v=NPvRR8CQRXk" target="_blank"
                            rel="noreferrer">
                                <img src="images/deive.png" alt="" width="170"/>
                            </a>
                        </li>
                        <li class="swiper-slide">
                            <a href="https://www.youtube.com/watch?v=a2ni_JNvJYQ&list=PLEA7sa-uxMQcx4DAjoQEyPSF-smYiHU7W&index=14" target="_blank"
                            rel="noreferrer">
                                <img src="https://i.ytimg.com/vi/a2ni_JNvJYQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBb55eDYiukS42GrWABiwnCiOdVww" alt="Video from Rocketseat's channel" width="170"/>
                            </a>
                        </li>
                        <li class="swiper-slide">
                            <a href="https://www.youtube.com/watch?v=2fM-X_D1sr8&list=PLEA7sa-uxMQc_RemS4d6CXNxYDJqvRtpY&index=34" target="_blank"
                            rel="noreferrer">
                                <img src="https://i.ytimg.com/vi/2fM-X_D1sr8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAmcE_H54lUyVXF9OdohXwro8Jfcg" alt="Video from Pinho's channel" width="170"/>
                            </a>
                        </li>
{/* 
                        <li>
                            <a href="https://www.youtube.com/watch?v=JXhoCSHlAEc" target="_blank"
                            rel="noreferrer">
                                <img src="https://i.ytimg.com/an_webp/JXhoCSHlAEc/mqdefault_6s.webp?du=3000&sqp=CIryjJkG&rs=AOn4CLCKdCK5NseQThS_V5BCUZJZEfezWA" alt="Video from Nuno Agonia channel" width="170"/>
                            </a>
                        </li> */}
                    </ul>

                </div>
            </div>
        </section>
    )
}