// home screen
import NearbyJobs from "./home/nearby/NearbyJobs";
import PopularJobs from "./home/popular/PopularJobs";
import Welcome from "./home/welcome/Welcome";

// Job Details screen
import { default as JobAbout } from "./jobdetails/about/About";
import Company from "./jobdetails/company/Company";
import { default as JobFooter } from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";
import { default as JobTabs } from "./jobdetails/tabs/Tabs";

// Common export
import NearbyJobCard from "../shared/cards/nearby/NearbyJobCard";

export {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  NearbyJobCard,
  NearbyJobs,
  PopularJobs,
  Specifics,
  Welcome,
};
