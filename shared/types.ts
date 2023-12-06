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
  job?: object;
  handleNavigate?: () => void;
};
