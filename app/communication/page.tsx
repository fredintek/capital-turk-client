import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="py-10">
      <div className="container flex flex-col gap-8">
        {/* top */}
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl font-semibold">
            Capitalcity Publishing Ltd. (Cyprus)
          </h1>

          {/* address */}
          <div>
            <h2 className="text-xl font-medium">Address</h2>
            <p>
              Capital Radio Studios, Organized Industrial Zone 21st Street,
              No:66, Nicosia / TRNC
            </p>
          </div>

          {/* phone */}
          <div>
            <h2 className="text-xl font-medium">Telephone</h2>
            <p>(0392) 444 93 80 | (0392) 225 76 33 | (0392) 225 70 71</p>
          </div>

          {/* advert */}
          <div>
            <h2 className="text-xl font-medium">Advert</h2>
            <p className="text-red-500 font-light">info@capitalcyprus.com</p>
          </div>
        </div>

        {/* bottom */}
        <div>
          <p className="text-[14px] text-gray-400 font-light">
            The works of DJs and Producers broadcast on Capital Radio, which we
            hold the title of 'Official Broadcasting Organisation of Cyprus' and
            which reach our listeners from Capital Radio 93.8 FM, Capital Radio
            Cyprus mobile applications and www.capitalcyprus.com, cannot be
            recorded, republished and/or reproduced. In such cases, Capitalcity
            Publishing Ltd. reserves its legal rights
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
