import React from "react";
import "../styles/About.scss";
import Header from "./Header";
import Footer from "./Footer";
import profile1woman from "../assets/profile1woman.jpg"

export default function About() {
    return (
        <div>
            <Header />
            <div className="mainAbout">
                <div className="fullScreen">
                    <div>
                        <h1>About us</h1>
                        <h3>Our project</h3>
                        <p>Polish company specializing in the clothing sector
                            <br />and modern methods of distributing its products.</p>
                    </div>
                </div>
                <section>
                    <div className="div-companny">
                        <div>
                            <h1>Our companny</h1>
                        </div>
                        <p>
                            The ESHOPLAND brand has been on the market since 2020. Its priority is high product quality going hand in hand with affordable prices and a personalized approach to customers. We offer all kinds of nuts, a wide selection of seeds, dried, candied, freeze-dried fruits and flakes. We sell both retail and wholesale. We serve confectioneries, bakeries, ice cream stores, wholesalers, stores, caterers and individual customers.
                            <br />
                            <br />
                            Intensive expansion of storage space, high storage standards, adherence to strict quality standards and the selection of only proven suppliers means that we can serve the most demanding customers. Each product undergoes laboratory testing and rigorous quality control before it is packaged. Purchases in our online store are insured through Trusted Shops buyer protection.
                        </p>
                    </div>
                    <div className="div-passion ">
                        <div >
                            <div className="div-passion-header">
                                <h2>Our passion</h2>
                            </div>

                            <div className="div-passion-text">
                                <p>We want to develop our interests in health and natural treasures such as nuts, dried fruits and seeds. We work to improve our store by constantly expanding our offer with new products. Our greatest satisfaction comes from customer satisfaction, which we achieve through high quality products, timeliness and individual approach.</p>
                            </div>
                        </div>
                        <div>
                            <div className="div-passion-header">
                                <h2>Our objective </h2>
                            </div>
                            <div className="div-passion-text">
                                <p>A key aspect for improving the quality of life is to move away from bad eating habits. We promote healthy food. We hope to make people aware of the benefits of our products for the body. 100% of satisfied customers on the Trusted Shops platform proves that we are on the right track.</p>
                            </div>
                        </div>
                        <div>

                            <div className="div-passion-header">
                                <h2>Our team</h2>
                            </div>
                            <div className="div-passion-text">
                                <p>Behind the ESHOPLAND brand is a team of students, passionate about healthy food. We follow current market trends, have a lot of experience and a lot of positive energy. With the help of the Academic Business Incubators Foundation, which grants us its legal personality to run our business, we were able to create our store.</p>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="section-team">
                    <div>
                        <img src={profile1woman} alt="" />
                        <h1>Adam Kowalski</h1>
                        <p>Sales | Purchasing | Finance</p>
                        <p>111 222 333</p>
                        <p>test.test@test.pl</p>
                    </div>
                    <div>
                        <img src={profile1woman} alt="" />
                        <h1>Tomasz Malinowski</h1>
                        <p>Sales | Purchasing | Finance</p>
                        <p>111 222 333</p>
                        <p>test.test@test.pl</p>
                    </div>
                    <div>
                        <img src={profile1woman} alt="" />
                        <h1>Ania Kowalska</h1>
                        <p>Sales | Purchasing | Finance</p>
                        <p>111 222 333</p>
                        <p>test.test@test.pl</p>
                    </div>
                    <div>
                        <img src={profile1woman} alt="" />
                        <h1>Monika Malinowska</h1>
                        <p>Sales | Purchasing | Finance</p>
                        <p>111 222 333</p>
                        <p>test.test@test.pl</p>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
