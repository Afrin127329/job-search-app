export type RedirectProps = {
  href: string;
};

export type jobItem = {
  item: any;
  selectedJob?: Boolean;
  handleCardPress?: () => void;
};

export type SearchQuery = {
  query: string;
  page?: string | number;
  num_pages: string | number;
};

export type NearbyJobType = {
  job: {
    employer_logo: string;
    job_title: string;
    job_employment_type: string;
  };
  handleNavigate?: () => void;
};
