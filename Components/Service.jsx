import React from "react";

const Service = () => {
  const services = [
    {
      title: "Secure Storage",
      description: "Your funds are stored in a secure environment.",
    },
    {
      title: "Mobile App",
      description: "Access your account from anywhere.",
    },
    {
      title: "Exchange service",
      description: "Exchange your tokens for other cryptocurrencies.",
    },
    {
      title: "Investment Project",
      description: "Invest in the future of cryptocurrency.",
    },
    {
      title: "Credit card use",
      description: "Pay with your credit card.",
    },

    {
      title: "Planning",
      description: "Plan your future with us.",
    },
  ];

  return (
    <section id="service" className="small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Meet our solution for you.
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                klhgadhjbfjawefwmll l;efejfjek.fhwenhcf l'jedwbj,em jlrlh
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div key={index + 1} className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap text-center animation"
                data-animation="fadeInUp"
                data-animation-delay={`0.${index + 1}s`}
              >
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
