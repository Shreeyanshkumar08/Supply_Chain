import Link from "next/link";
import DisplayCards from "../UI/DisplayCards";
import VerticalProgress from "../UI/VerticalProgress";
import Banner from "./Banner";

function LandingPageComponent() {
  return (
    <div className="flex flex-col items-center">
      <Banner />
      <div className="px-16 flex flex-col w-full">
        <DisplayCards
          title={"Consumer?"}
          desc={"The consumers can create new Supplys and poll for them"}
          left={true}
        />
        <DisplayCards
          title={"Vendor?"}
          desc={
            "The vendors can create the proposals and request for business sessions, and request for resources from allocators"
          }
        />
        <DisplayCards
          title={"Allocator?"}
          desc={
            "The allocators can create new resources, allocate and approve the incoming requests for the resources"
          }
          left={true}
        />
      </div>
      <div className="flex items-center justify-around self-center py-16">
        <VerticalProgress
          data={[
            {
              desc: "Joining in, consumers can post thier Supplys.",
              id: 0,
            },
            {
              desc: "They can post thier Supplys and others can support it, making a Supply more popular",
              id: 1,
            },
            {
              desc: "Finally, a person's Supply is satisfied, and they can further rate the service",
              id: 2,
            },
          ]}
          title="Consumer"
        />
        <VerticalProgress
          data={[
            {
              desc: "Signing in, vendors can look at the Supplys to fulfill",
              id: 0,
            },
            {
              desc: "They can submit a proposal to our admins, if interested in fulfilling a Supply",
              id: 1,
            },
            {
              desc: "While submitting, they can also view at the available resources of the reason to help him set up a business",
              id: 2,
            },
            {
              desc: "After a proposal is accepted, A business session is set up for them",
              id: 3,
            },
            {
              desc: "They can look for resources and customer reviews by managing their session, once set up",
              id: 4,
            },
          ]}
          title="Vendor"
        />
        <VerticalProgress
          data={[
            {
              desc: "Allocators can upload the resources",
              id: 0,
            },
            {
              desc: "The resources help the vendors, who send in requests for resources for Supplys",
              id: 1,
            },
            {
              desc: "They can accept or reject the incoming requests, to manage their resources",
              id: 2,
            },
          ]}
          title="Allocator"
        />
      </div>

      <div className="flex items-center justify-around w-full mb-12 mt-4">
        <Link className="btn btn-sec w-2/12" href={"/about"}>
          About us
        </Link>
        <Link className="btn btn-sec w-2/12" href={"/faq"}>
          Faqs
        </Link>
      </div>
    </div>
  );
}

export default LandingPageComponent;
