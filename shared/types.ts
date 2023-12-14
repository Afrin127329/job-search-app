export type RedirectProps = {
  href: string;
};

export type jobItem = {
  item: any;
  selectedJob?: Boolean;
  handleCardPress?: () => void;
};

export type SearchQuery = {
  query?: string;
  page?: string | number;
  num_pages?: string | number;
  job_id?: string | number | string[];
};

export type NearbyJobType = {
  job: {
    employer_logo: string;
    job_title: string;
    job_employment_type: string;
  };
  handleNavigate?: () => void;
};

export type companyProps = {
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  location: string;
};

export type tabProps = {
  tabs: string[];
  activeTab: string;
  setActiveTab: () => void;
};

export type tabButtonProps = {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
};
